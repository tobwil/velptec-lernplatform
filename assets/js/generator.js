// Erzeugt neue Lektionen aus hochgeladenen Übungsdokumenten.
// Offline: heuristische Textanalyse (Abschnitte, Schlüsselbegriffe, Kernsätze, Lückentexte).
// Optional mit KI: strukturierte Lektion inkl. Praxisbezug, Quiz und Übungsaufgabe.
import { chat, parseJSON, aiConfig } from './ai.js';
import { shuffle, hashStr } from './ui.js';

const STOP = new Set(`aber alle allem allen aller alles also am an ander andere anderem anderen anderer anderes anders auch auf aus bei beim bin bis bist da dabei dadurch dafür dagegen daher dahin damit danach dann daran darauf daraus darf darin darum das dass dein deine dem den denen denn der deren des deshalb dessen dich die dies diese diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einige einigen einiger einmal er es etwa etwas euch euer für gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich ihm ihn ihnen ihr ihre ihrem ihren ihrer im immer in indem ins ist ja jede jedem jeden jeder jedes jedoch jetzt kann kein keine keinem keinen keiner kommen können könnte machen man manche mehr mein meine mit muss müssen nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seit sich sie sind so solche soll sollen sollte sondern sowie um und uns unser unsere unter viel vom von vor wann war waren warum was weg weil weiter welche welchem welchen welcher wenn wer werde werden wie wieder will wir wird wo wurde wurden zu zum zur zwar zwischen über bzw z.b. ca etc beispielsweise sowohl dabei hierbei wobei werden wurde worden sodass bereits zudem jedoch insbesondere sowie häufig oft gibt geben gilt dass diese dieser dieses eines einer neue neuen neuer the and for with that this from are was were have has will can not you your into such more most also`.split(/\s+/));

const words = (s) => (s.match(/[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß-]{2,}/g) || []);
const keyOf = (w) => w.toLowerCase().replace(/-+$/, '');

export function splitSentences(text) {
  return text
    .replace(/\n(?![-•*\d#])/g, ' ')
    .split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9„"])|\n+/)
    .map((s) => s.replace(/^[-•*#\s]+/, '').trim())
    .filter((s) => s.length > 25 && s.length < 400 && /[a-zäöü]/.test(s));
}

function isHeading(line, next) {
  const l = line.trim();
  if (!l || l.length > 90) return false;
  if (/^#{1,6}\s/.test(l)) return true;
  if (/^(\d+(\.\d+)*)\s+[A-ZÄÖÜ]/.test(l) && !/[.!?:]$/.test(l) && l.length < 80) return true;
  if (/^(Folie|Kapitel|Abschnitt|Modul|Teil)\s+\d+/i.test(l)) return true;
  return l.length < 60 && !/[.,;:!?]$/.test(l) && /^[A-ZÄÖÜ]/.test(l) && next && next.trim().length > 80 && l.split(/\s+/).length <= 8;
}

export function splitSections(text) {
  const lines = text.split('\n');
  const sections = [];
  let cur = { title: '', body: [] };
  lines.forEach((ln, i) => {
    if (isHeading(ln, lines[i + 1])) {
      if (cur.body.join(' ').trim().length > 60 || cur.title) sections.push(cur);
      cur = { title: ln.replace(/^#+\s*/, '').trim(), body: [] };
    } else cur.body.push(ln);
  });
  sections.push(cur);
  let out = sections.map((s) => ({ title: s.title, text: s.body.join('\n').trim() })).filter((s) => s.text.length > 80);
  // Zu kleine Abschnitte zusammenführen, zu große aufteilen
  const merged = [];
  for (const s of out) {
    const prev = merged[merged.length - 1];
    if (prev && prev.text.length < 400) { prev.text += '\n\n' + (s.title ? s.title + '\n' : '') + s.text; }
    else merged.push({ ...s });
  }
  out = [];
  for (const s of merged) {
    const ws = s.text.split(/\s+/);
    if (ws.length <= 900) { out.push(s); continue; }
    for (let i = 0, part = 1; i < ws.length; i += 700, part++) out.push({ title: `${s.title || 'Abschnitt'} (Teil ${part})`, text: ws.slice(i, i + 700).join(' ') });
  }
  if (!out.length) out = [{ title: '', text }];
  return out.slice(0, 8);
}

export function termStats(text) {
  const freq = new Map();
  const forms = new Map();
  for (const w of words(text)) {
    const k = keyOf(w);
    if (STOP.has(k) || k.length < 4) continue;
    freq.set(k, (freq.get(k) || 0) + 1);
    const f = forms.get(k) || {};
    f[w] = (f[w] || 0) + 1;
    forms.set(k, f);
  }
  const display = (k) => Object.entries(forms.get(k) || {}).sort((a, b) => b[1] - a[1])[0]?.[0] || k;
  const score = (k) => {
    const f = freq.get(k) || 0;
    const cap = /^[A-ZÄÖÜ]/.test(display(k)) ? 1.6 : 1; // Substantive bevorzugen
    const len = Math.min(1.5, k.length / 8);
    return f * cap * len;
  };
  const ranked = [...freq.keys()].filter((k) => freq.get(k) >= 2 || k.length > 10).sort((a, b) => score(b) - score(a));
  return { freq, display, score, ranked };
}

function topSentences(sentences, stats, n) {
  const scored = sentences.map((s, i) => {
    const ws = words(s).map(keyOf).filter((k) => !STOP.has(k));
    const sc = ws.reduce((a, k) => a + Math.min(3, stats.score(k)), 0) / Math.sqrt(ws.length + 4);
    return { s, i, sc };
  });
  return scored.sort((a, b) => b.sc - a.sc).slice(0, n).sort((a, b) => a.i - b.i).map((x) => x.s);
}

function defineTerm(term, sentences) {
  const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
  const s = sentences.find((x) => re.test(x) && /( ist | sind | bezeichnet| bedeutet| beschreibt| meint |:)/.test(x)) || sentences.find((x) => re.test(x));
  return s ? (s.length > 240 ? s.slice(0, 237) + '…' : s) : '';
}

const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + ' …' : s);

/** Offline-Generator: liefert ein Modulobjekt im Kursformat. */
export function generateOffline(text, { title, fileName }) {
  const allSentences = splitSentences(text);
  const stats = termStats(text);
  const keyTerms = stats.ranked.slice(0, 24);
  const sections = splitSections(text);
  const id = 'u-' + hashStr(fileName + text.length + Date.now()).toString(36);
  const docTitle = title || fileName.replace(/\.[^.]+$/, '');

  const lessons = sections.map((sec, si) => {
    const sents = splitSentences(sec.text);
    const secStats = termStats(sec.text);
    const terms = secStats.ranked.filter((k) => keyTerms.includes(k)).slice(0, 4);
    const termsFallback = terms.length >= 2 ? terms : secStats.ranked.slice(0, 4);
    const summary = topSentences(sents, stats, 4);
    const best = summary[0] || sents[0] || clip(sec.text, 200);
    const lt = sec.title || `Teil ${si + 1}: ${stats.display(termsFallback[0] || keyTerms[si] || 'Kernaussagen')}`;
    const blocks = [
      { type: 'text', md: `### Kernaussagen\n${summary.map((s) => `- ${s}`).join('\n') || clip(sec.text, 600)}` },
      { type: 'callout', variant: 'merksatz', title: 'Merksatz (automatisch ausgewählt)', md: best },
    ];
    const cards = termsFallback.map((k) => ({ front: stats.display(k), back: defineTerm(stats.display(k), sents) || defineTerm(stats.display(k), allSentences) })).filter((c) => c.back);
    if (cards.length) blocks.push({ type: 'flipcards', cards });
    const qc = makeClozeQuestion(summary[1] || summary[0], keyTerms, stats, si);
    if (qc) blocks.push({ ...qc, type: 'quickcheck', qtype: qc.type });
    blocks.push({
      type: 'praxis',
      title: 'Transfer in deinen Arbeitsalltag',
      company: 'Dein eigenes Team / Unternehmen',
      scenario: `Stell dir vor, du sollst die Inhalte zu **${lt}** in einer kurzen Teambesprechung (5 Minuten) vorstellen und einen ersten Anwendungsfall vorschlagen.`,
      steps: [
        `Fasse die Kernaussage in einem Satz zusammen${termsFallback[0] ? ` – nutze den Begriff „${stats.display(termsFallback[0])}“` : ''}.`,
        'Nenne ein konkretes Beispiel aus deinem Arbeitsbereich, in dem das relevant ist.',
        'Überlege: Welche Daten, Personen und Werkzeuge braucht man dafür?',
        'Benenne ein Risiko (z. B. Datenschutz, Qualität, Akzeptanz) und eine Gegenmaßnahme.',
        'Lege einen kleinen nächsten Schritt fest, der in zwei Wochen machbar ist.',
      ],
      takeaway: 'Wissen wird erst wertvoll, wenn du es auf eine echte Situation überträgst.',
    });
    blocks.push({ type: 'text', md: `### Originalauszug\n${clip(sec.text, 2400)}` });
    return { id: `${id}-l${si + 1}`, title: lt, minutes: Math.max(5, Math.round(sec.text.split(/\s+/).length / 120) + 4), blocks };
  });

  const quiz = [];
  const pool = topSentences(allSentences, stats, 24);
  pool.forEach((s, i) => {
    if (quiz.length >= 10) return;
    const q = i % 3 === 2 ? makeTF(s, keyTerms, stats, i) : makeClozeQuestion(s, keyTerms, stats, i);
    if (q && !quiz.some((x) => x.q === q.q)) quiz.push(q);
  });
  const sample = topSentences(allSentences, stats, 5);
  const kw = keyTerms.slice(0, 8).map((k) => stats.display(k));

  return {
    id, custom: true, order: 100, icon: 'upload', isNew: true,
    title: docTitle,
    subtitle: `Eigene Lektion aus „${fileName}“ · offline generiert`,
    minutes: lessons.reduce((a, l) => a + l.minutes, 0) + 10,
    handout: [],
    objectives: [
      `Du kannst die Kernaussagen von „${docTitle}“ in eigenen Worten wiedergeben.`,
      kw.length ? `Du kennst zentrale Begriffe wie ${kw.slice(0, 3).map((k) => `„${k}“`).join(', ')}.` : 'Du kennst die zentralen Begriffe des Dokuments.',
      'Du überträgst die Inhalte auf ein Beispiel aus deinem Arbeitsalltag.',
    ],
    lessons,
    quiz,
    exercises: [{
      id: `${id}-e1`,
      title: 'Transfer-Aufgabe zum Dokument',
      scenario: `Deine Führungskraft bittet dich, die wichtigsten Erkenntnisse aus „${docTitle}“ für dein Team aufzubereiten.`,
      task: 'Schreibe eine kurze Zusammenfassung (ca. 150–250 Wörter): Erkläre die drei wichtigsten Punkte, übertrage sie auf ein konkretes Beispiel aus deinem Arbeitsumfeld, nenne ein Risiko und einen nächsten Schritt.',
      deliverable: '150–250 Wörter, gern in Stichpunkten',
      template: '1. Die drei wichtigsten Punkte:\n- \n- \n- \n\n2. Beispiel aus meinem Arbeitsumfeld:\n\n3. Risiko & Gegenmaßnahme:\n\n4. Nächster Schritt:\n',
      rubric: [
        { criterion: 'Greift zentrale Begriffe des Dokuments auf', keywords: keyTerms.slice(0, 10), min: 3, hint: `Welche Begriffe tauchen im Dokument besonders oft auf? Zum Beispiel ${kw.slice(0, 3).join(', ')}.` },
        { criterion: 'Konkretes Praxisbeispiel', keywords: ['beispiel', 'bei uns', 'in meinem', 'unserem', 'unternehmen', 'team', 'abteilung', 'kunde', 'prozess'], min: 1, hint: 'Wo genau in deinem Alltag würde das helfen? Beschreibe eine konkrete Situation.' },
        { criterion: 'Benennt Risiko oder Grenze', keywords: ['risiko', 'gefahr', 'problem', 'grenze', 'herausforderung', 'datenschutz', 'fehler'], min: 1, hint: 'Was könnte schiefgehen – und wie würdest du gegensteuern?' },
        { criterion: 'Formuliert nächsten Schritt', keywords: ['nächste', 'schritt', 'maßnahme', 'umsetzen', 'starten', 'pilot', 'testen', 'planen'], min: 1, hint: 'Was kannst du in den nächsten zwei Wochen konkret tun?' },
      ],
      hints: [
        'Lies dir die Merksätze der Lektionen noch einmal durch – welche drei findest du am wichtigsten?',
        'Denke an einen typischen Arbeitstag: An welcher Stelle würden die Inhalte etwas verändern?',
        'Strukturiere so: Punkt → Beispiel → Risiko → nächster Schritt.',
      ],
      sample: `**Mögliche Kernpunkte (automatisch aus dem Dokument gewählt):**\n${sample.map((s) => `- ${s}`).join('\n')}\n\nErgänze dazu dein eigenes Praxisbeispiel, ein Risiko und einen nächsten Schritt.`,
    }],
    glossary: keyTerms.slice(0, 10).map((k) => ({ term: stats.display(k), def: defineTerm(stats.display(k), allSentences) })).filter((g) => g.def),
    sources: [{ title: fileName, publisher: 'Eigenes Übungsdokument', type: 'Doku', url: '' }],
    generator: 'offline',
  };
}

function findTerm(sentence, keyTerms, stats) {
  const ws = words(sentence);
  const cands = ws.filter((w) => keyTerms.includes(keyOf(w)));
  if (!cands.length) return null;
  return cands.sort((a, b) => stats.score(keyOf(b)) - stats.score(keyOf(a)))[0];
}

function distractors(term, keyTerms, stats, seed) {
  const pool = keyTerms.filter((k) => k !== keyOf(term)).map((k) => stats.display(k));
  const rnd = mulberry(seed + 7);
  return shuffle(pool, rnd).slice(0, 3);
}

function makeClozeQuestion(sentence, keyTerms, stats, seed) {
  if (!sentence) return null;
  const term = findTerm(sentence, keyTerms, stats);
  if (!term) return null;
  const ds = distractors(term, keyTerms, stats, seed);
  if (ds.length < 2) return null;
  const gap = sentence.replace(term, '_____');
  const opts = shuffle([term, ...ds], mulberry(seed));
  return {
    type: 'single',
    q: `Welcher Begriff gehört in die Lücke? „${clip(gap, 260)}“`,
    options: opts,
    answer: opts.indexOf(term),
    explain: `Im Dokument heißt es: „${clip(sentence, 300)}“`,
  };
}

function makeTF(sentence, keyTerms, stats, seed) {
  const term = findTerm(sentence, keyTerms, stats);
  const rnd = mulberry(seed + 3);
  if (!term || rnd() < 0.5) return { type: 'tf', q: `Stimmt diese Aussage laut Dokument? „${clip(sentence, 260)}“`, answer: true, explain: 'Die Aussage steht so im Dokument.' };
  const other = distractors(term, keyTerms, stats, seed)[0];
  if (!other) return null;
  return {
    type: 'tf',
    q: `Stimmt diese Aussage laut Dokument? „${clip(sentence.replace(term, other), 260)}“`,
    answer: false,
    explain: `Hier wurde ein Begriff vertauscht. Original: „${clip(sentence, 300)}“`,
  };
}

function mulberry(a) {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------- KI-Generator ----------
const MAX_CHARS = 60000;

export async function generateWithAI(text, { title, fileName, signal }) {
  const truncated = text.length > MAX_CHARS;
  const src = truncated ? text.slice(0, MAX_CHARS) : text;
  const system = `Du bist Instructional Designer:in für die Weiterbildung „KI-Management“ (velpTEC). Du erstellst aus einem Übungsdokument eine kompakte, praxisnahe Lerneinheit auf Deutsch (Du-Form).
Regeln: Nutze NUR Inhalte aus dem Dokument plus allgemein gesichertes Fachwissen. Erfinde keine Zahlen, Studien oder Quellen. Jede Lektion braucht einen Praxisbezug (konkretes, realistisches Szenario aus Mittelstand/Verwaltung/Bildung). Antworte ausschließlich mit gültigem JSON ohne Kommentar.`;
  const prompt = `Erzeuge aus dem folgenden Dokument („${fileName}“) eine Lerneinheit als JSON in genau diesem Format:
{
  "title": "kurzer Titel",
  "subtitle": "ein Satz",
  "objectives": ["Du kannst …", "…"],
  "lessons": [
    { "title": "…", "minutes": 10, "blocks": [
      { "type": "text", "md": "Markdown-Text (### Zwischenüberschrift, - Listen, **fett**)" },
      { "type": "callout", "variant": "merksatz", "title": "Merksatz", "md": "…" },
      { "type": "praxis", "title": "…", "company": "fiktives Beispielunternehmen (fiktiv)", "scenario": "…", "steps": ["…"], "takeaway": "…" },
      { "type": "flipcards", "cards": [ { "front": "Begriff", "back": "Erklärung" } ] },
      { "type": "quickcheck", "qtype": "single", "q": "…", "options": ["…","…","…","…"], "answer": 0, "explain": "…" }
    ] }
  ],
  "quiz": [
    { "type": "single", "q": "…", "options": ["…","…","…","…"], "answer": 0, "explain": "…" },
    { "type": "multi", "q": "… (Mehrfachauswahl)", "options": ["…","…","…","…"], "answer": [0,2], "explain": "…" },
    { "type": "tf", "q": "Aussage …", "answer": true, "explain": "…" },
    { "type": "order", "q": "Bringe in die richtige Reihenfolge", "items": ["Schritt 1","Schritt 2","Schritt 3"], "explain": "…" },
    { "type": "match", "q": "Ordne zu", "pairs": [["Begriff","Definition"],["…","…"],["…","…"]], "explain": "…" },
    { "type": "cloze", "q": "Lückentext", "text": "Satz mit {{Lösung}} in der Lücke.", "explain": "…" }
  ],
  "exercise": {
    "title": "…", "scenario": "…", "task": "…", "deliverable": "…", "template": "Gliederung zum Ausfüllen",
    "rubric": [ { "criterion": "…", "keywords": ["wortstamm in kleinbuchstaben"], "min": 1, "hint": "Leitfrage" } ],
    "hints": ["sanfter Tipp", "konkreterer Tipp", "fast Lösung"],
    "sample": "Musterlösung in Markdown"
  },
  "glossary": [ { "term": "…", "def": "…" } ]
}
Vorgaben: 2–5 Lektionen à 5–9 Blöcke, 8–10 Quizfragen gemischt, 3–5 Rubrik-Kriterien, 5–10 Glossarbegriffe.${title ? ` Titelvorschlag der Nutzerin/des Nutzers: „${title}“.` : ''}

DOKUMENT${truncated ? ' (gekürzt auf die ersten 60.000 Zeichen)' : ''}:
"""
${src}
"""`;
  const raw = await chat([{ role: 'user', content: prompt }], { system, json: true, maxTokens: 12000, signal });
  const data = parseJSON(raw);
  const c = aiConfig();
  return sanitizeModule(data, { fileName, title, generator: `KI: ${c.provider} / ${c.model}`, truncated });
}

const isStr = (s) => typeof s === 'string' && s.trim().length > 0;
function okQuestion(q) {
  if (!q || !isStr(q.q)) return false;
  switch (q.type) {
    case 'single': return Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.answer) && q.answer < q.options.length;
    case 'multi': return Array.isArray(q.options) && Array.isArray(q.answer) && q.answer.length && q.answer.every((a) => Number.isInteger(a) && a < q.options.length);
    case 'tf': return typeof q.answer === 'boolean';
    case 'order': return Array.isArray(q.items) && q.items.length >= 3;
    case 'match': return Array.isArray(q.pairs) && q.pairs.length >= 2 && q.pairs.every((p) => Array.isArray(p) && p.length === 2);
    case 'cloze': return isStr(q.text) && /\{\{[^}]+\}\}/.test(q.text);
    default: return false;
  }
}
const BLOCK_OK = new Set(['text', 'callout', 'praxis', 'flipcards', 'quickcheck', 'steps', 'table']);

export function sanitizeModule(d, { fileName, title, generator, truncated }) {
  const id = 'u-' + hashStr(fileName + Date.now()).toString(36);
  const lessons = (Array.isArray(d.lessons) ? d.lessons : []).slice(0, 8).map((l, i) => ({
    id: `${id}-l${i + 1}`,
    title: isStr(l.title) ? l.title : `Lektion ${i + 1}`,
    minutes: Number.isFinite(l.minutes) ? l.minutes : 10,
    blocks: (Array.isArray(l.blocks) ? l.blocks : []).filter((b) => b && BLOCK_OK.has(b.type)).filter((b) => {
      if (b.type === 'quickcheck') return okQuestion({ ...b, type: b.qtype });
      if (b.type === 'praxis') return isStr(b.scenario);
      if (b.type === 'flipcards') return Array.isArray(b.cards) && b.cards.length;
      if (b.type === 'steps') return Array.isArray(b.items);
      if (b.type === 'table') return Array.isArray(b.head) && Array.isArray(b.rows);
      return isStr(b.md);
    }).map((b) => (b.type === 'praxis' ? { ...b, steps: Array.isArray(b.steps) ? b.steps.filter(isStr) : [] } : b)),
  })).filter((l) => l.blocks.length);
  if (!lessons.length) throw new Error('Die KI-Antwort enthielt keine verwertbaren Lektionen.');
  const ex = d.exercise || {};
  const rubric = (Array.isArray(ex.rubric) ? ex.rubric : []).filter((r) => isStr(r.criterion)).map((r) => ({
    criterion: r.criterion,
    keywords: (Array.isArray(r.keywords) ? r.keywords : []).filter(isStr).map((k) => k.toLowerCase()),
    min: Number.isInteger(r.min) ? r.min : 1,
    hint: isStr(r.hint) ? r.hint : '',
  })).filter((r) => r.keywords.length);
  const exercises = isStr(ex.task) && rubric.length ? [{
    id: `${id}-e1`, title: ex.title || 'Übungsaufgabe', scenario: ex.scenario || '', task: ex.task,
    deliverable: ex.deliverable || '', template: ex.template || '', rubric,
    hints: (Array.isArray(ex.hints) ? ex.hints : []).filter(isStr), sample: ex.sample || '',
  }] : [];
  return {
    id, custom: true, order: 100, icon: 'upload', isNew: true,
    title: title || d.title || fileName,
    subtitle: (d.subtitle || `Eigene Lektion aus „${fileName}“`) + ` · ${generator}${truncated ? ' · Dokument gekürzt' : ''}`,
    minutes: lessons.reduce((a, l) => a + (l.minutes || 10), 0) + 10,
    handout: [],
    objectives: (Array.isArray(d.objectives) ? d.objectives : []).filter(isStr),
    lessons,
    quiz: (Array.isArray(d.quiz) ? d.quiz : []).filter(okQuestion).map((q) => ({ ...q, explain: q.explain || '' })),
    exercises,
    glossary: (Array.isArray(d.glossary) ? d.glossary : []).filter((g) => isStr(g?.term) && isStr(g?.def)),
    sources: [{ title: fileName, publisher: 'Eigenes Übungsdokument', type: 'Doku', url: '' }],
    generator,
  };
}
