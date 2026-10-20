// Widget: RAG-Pipeline (Retrieval-Augmented Generation) mit lokalem, simuliertem Retrieval.
import { h, pixelIcon, mdEl } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, timers, hashToVec, rovingKeys, uid, prefersReducedMotion, fill } from './_shared.js';

const DOCS = [
  {
    id: 'A', title: 'Urlaubsrichtlinie', chunks: [
      'Vollzeitbeschäftigte erhalten 30 Urlaubstage pro Kalenderjahr. Teilzeitkräfte erhalten Urlaub anteilig nach ihren Arbeitstagen pro Woche.',
      'Urlaub wird im HR-Portal beantragt und von der direkten Führungskraft freigegeben. Anträge für mehr als zehn Tage am Stück sollen mindestens vier Wochen vorher gestellt werden.',
      'Resturlaub kann bis zum 31. März des Folgejahres übertragen werden. Danach verfällt er, sofern er nicht aus betrieblichen Gründen oder wegen Krankheit nicht genommen werden konnte.',
    ],
  },
  {
    id: 'B', title: 'Homeoffice-Richtlinie', chunks: [
      'Mitarbeitende können nach Absprache mit der Führungskraft bis zu drei Tage pro Woche im Homeoffice arbeiten.',
      'Homeoffice bzw. mobiles Arbeiten aus dem Ausland ist bis zu 20 Arbeitstage pro Jahr innerhalb der EU erlaubt und muss vorher bei HR angemeldet werden.',
      'Für das Homeoffice stellt das Unternehmen Laptop und Headset. Vertrauliche Unterlagen dürfen nur über VPN abgerufen werden.',
    ],
  },
  {
    id: 'C', title: 'Reisekostenrichtlinie', chunks: [
      'Dienstreisen werden vorab im Reiseportal beantragt. Bahnfahrten sind bis zu einer Strecke von 500 km dem Flug vorzuziehen.',
      'Für Verpflegung gelten die steuerlichen Pauschalen. Übernachtungen werden bis 120 Euro pro Nacht erstattet.',
      'Belege einer Dienstreise müssen innerhalb von 30 Tagen nach Reiseende im Reiseportal eingereicht werden.',
    ],
  },
];
const CHUNKS = DOCS.flatMap((d) => d.chunks.map((text, i) => ({ id: `${d.id}${i + 1}`, doc: d.title, sec: i + 1, text })));

const QUESTIONS = [
  { q: 'Wie viele Urlaubstage bekomme ich in Vollzeit?', parts: [{ c: 'A1', t: 'Als Vollzeitkraft erhältst du **30 Urlaubstage** pro Kalenderjahr; in Teilzeit gibt es den Urlaub anteilig.' }] },
  { q: 'Darf ich aus dem Ausland im Homeoffice arbeiten?', parts: [{ c: 'B2', t: 'Ja, mobiles Arbeiten aus dem Ausland ist **bis zu 20 Arbeitstage pro Jahr innerhalb der EU** erlaubt – du musst es vorher bei HR anmelden.' }, { c: 'B1', t: 'Generell sind nach Absprache mit deiner Führungskraft bis zu drei Homeoffice-Tage pro Woche möglich.' }] },
  { q: 'Bis wann muss ich Belege einer Dienstreise einreichen?', parts: [{ c: 'C3', t: 'Belege musst du **innerhalb von 30 Tagen nach Reiseende** im Reiseportal einreichen.' }] },
];

const STOP = new Set('der die das den dem des ein eine einer einem einen eines und oder aber ich du er sie es wir ihr mein meine mir mich dein ist sind bin bist sein war wie viel viele was wann wo wer warum welche welcher welches darf kann muss soll sollen müssen können im in aus zu zum zur mit von vom für auf bei bis nach pro über unter an am ob nicht nur auch als so da dann noch schon bekomme bekommt habe hat haben werden wird gibt es man'.split(' '));

export function tokens(text) {
  return [...new Set(String(text).toLowerCase().replace(/[^a-zäöüß0-9\s-]/g, ' ').split(/[\s-]+/)
    .filter((w) => w.length > 2 && !STOP.has(w))
    .map((w) => (w.length > 5 ? w.replace(/(en|er|e|n|s)$/, '') : w)))];
}
const match = (a, b) => a === b || (Math.min(a.length, b.length) >= 5 && (a.startsWith(b) || b.startsWith(a)));

export function retrieve(question, k = 2) {
  const qt = tokens(question);
  const scored = CHUNKS.map((ch) => {
    const ct = tokens(ch.text);
    const hits = qt.filter((q) => ct.some((c) => match(q, c)));
    return { ...ch, hits, score: hits.length, len: ct.length };
  }).sort((a, b) => b.score - a.score || a.len - b.len);
  return { qt, scored, top: scored.filter((x) => x.score > 0).slice(0, k) };
}

const STAGES = [
  { t: 'Dokumente', d: 'Quelle des Wissens: interne Richtlinien, Handbücher, Verträge, Wikis. Hier: drei fiktive Richtlinien der Nordlicht Software GmbH.' },
  { t: 'Chunking', d: 'Die Dokumente werden in kleine Abschnitte („Chunks“) zerlegt – hier ein Absatz pro Chunk. Zu große Chunks verwässern die Suche, zu kleine verlieren den Zusammenhang.' },
  { t: 'Embeddings', d: 'Jeder Chunk wird von einem Embedding-Modell in einen Zahlenvektor übersetzt, der seine Bedeutung abbildet. Ähnliche Inhalte liegen im Vektorraum nah beieinander. (Darstellung hier symbolisch.)' },
  { t: 'Vektordatenbank', d: 'Die Vektoren werden mit Text und Metadaten (Dokument, Abschnitt, Berechtigungen) in einer Vektordatenbank gespeichert. Diese Schritte laufen einmalig bzw. bei Dokumentänderungen.' },
  { t: 'Frage', d: 'Eine Nutzerin stellt eine Frage. Ab hier läuft alles bei jeder Anfrage.' },
  { t: 'Retrieval (Top-k)', d: 'Die Frage wird ebenfalls eingebettet; die ähnlichsten k Chunks werden gesucht. Hier vereinfacht: Wort-Überlappung zwischen Frage und Chunk, lokal im Browser berechnet.' },
  { t: 'Prompt mit Kontext', d: 'Die gefundenen Chunks werden mit der Frage und klaren Anweisungen zu einem Prompt zusammengesetzt.' },
  { t: 'LLM', d: 'Das Sprachmodell formuliert eine Antwort – idealerweise nur auf Basis des mitgelieferten Kontexts.' },
  { t: 'Antwort + Quellen', d: 'Die Antwort verweist auf die genutzten Quellen. So können Nutzer nachprüfen – und Halluzinationen werden seltener und erkennbar.' },
];

export function buildRagPrompt(question, top) {
  return [
    'Beantworte die Frage ausschließlich auf Basis des folgenden Kontexts.',
    'Wenn die Antwort nicht im Kontext steht, sage das ehrlich. Nenne die genutzten Quellen als [Nummer].',
    '',
    'Kontext:',
    ...(top.length ? top.map((ch, i) => `[${i + 1}] (${ch.doc}, Abschnitt ${ch.sec}) ${ch.text}`) : ['(keine passenden Abschnitte gefunden)']),
    '',
    `Frage: ${question}`,
  ].join('\n');
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'rag-pipeline');
  setupRoot(el, 'rag-pipeline');
  const t = timers();
  let stage = 0, qIdx = 0, custom = '', k = 2, playing = false, aiAnswer = null;

  const packet = h('span.w-rag-packet', { 'aria-hidden': 'true' }, pixelIcon('book', 18));
  const base = uid('rag');
  const stageBtns = STAGES.map((st, i) => h('button.w-rag-stage', { type: 'button', role: 'tab', id: `${base}-${i}`, tabindex: '-1', onclick: () => { stopPlay(); go(i); } }, h('span.w-rag-n', i + 1), h('span', st.t)));
  const bar = h('div.w-rag-bar', { role: 'tablist', 'aria-label': 'Schritte der RAG-Pipeline' }, stageBtns, packet);
  const panel = h('div.w-rag-panel', { role: 'tabpanel', 'aria-live': 'polite' });
  const playBtn = h('button.btn.btn-primary.btn-sm', { type: 'button', onclick: () => (playing ? stopPlay() : play()) }, '▶ Pipeline abspielen');

  const qSel = h('div.w-rag-qs', { role: 'radiogroup', 'aria-label': 'Beispielfrage wählen' });
  const customIn = h('input.input', { type: 'text', placeholder: 'Oder eigene Frage, z. B. „Wie viel Resturlaub darf ich übertragen?“', 'aria-label': 'Eigene Frage', maxlength: 160 });
  customIn.addEventListener('input', () => { custom = customIn.value.trim(); aiAnswer = null; renderQs(); if (stage >= 4) render(); });
  const kSel = h('select.select.w-rag-k', { 'aria-label': 'Anzahl der abgerufenen Chunks (k)' }, [1, 2, 3].map((n) => h('option', { value: n, selected: n === k ? true : null }, `Top-k = ${n}`)));
  kSel.addEventListener('change', () => { k = +kSel.value; aiAnswer = null; render(); });

  fill(el, 
    widgetHead('RAG-Pipeline: Antworten aus eigenen Dokumenten', 'Wähle eine Frage und spiel die Pipeline ab – oder klicke dich durch die neun Schritte. Du siehst, welche Textabschnitte gefunden werden und wie daraus eine Antwort mit Quellenangabe entsteht.', 'book'),
    h('div.w-rag-controls', qSel, h('div.row', customIn, kSel)),
    h('div.w-rag-barwrap', bar),
    h('div.row', h('button.btn.btn-sm', { type: 'button', 'aria-label': 'Vorheriger Schritt', onclick: () => { stopPlay(); go(Math.max(0, stage - 1)); } }, '←'), h('button.btn.btn-sm', { type: 'button', 'aria-label': 'Nächster Schritt', onclick: () => { stopPlay(); go(Math.min(STAGES.length - 1, stage + 1)); } }, '→'), playBtn),
    panel,
  );
  const offKeys = rovingKeys(bar, '.w-rag-stage', { onMove: (_, i) => { stopPlay(); go(i); } });

  const question = () => custom || QUESTIONS[qIdx].q;

  function renderQs() {
    fill(qSel, ...QUESTIONS.map((q, i) => h(`button.btn.btn-sm.w-rag-q${!custom && i === qIdx ? '.is-active' : ''}`, {
      type: 'button', role: 'radio', 'aria-checked': !custom && i === qIdx ? 'true' : 'false',
      onclick: () => { qIdx = i; custom = ''; customIn.value = ''; aiAnswer = null; renderQs(); if (stage >= 4) render(); },
    }, q.q)));
  }

  function movePacket() {
    const b = stageBtns[stage];
    const br = bar.getBoundingClientRect(), r = b.getBoundingClientRect();
    if (!br.width) return;
    packet.style.transform = `translate(${Math.round(r.left - br.left + r.width / 2 - 9)}px, ${Math.round(r.top - br.top - 12)}px)`;
  }

  function vecCells(text) {
    return h('span.w-rag-vec', { 'aria-hidden': 'true' }, hashToVec(text, 12).map((v) => h('i', { style: { opacity: (0.15 + 0.85 * v).toFixed(2) } })));
  }

  function highlight(text, hits) {
    if (!hits?.length) return text;
    const parts = text.split(/(\s+)/);
    return parts.map((p) => {
      const w = tokens(p)[0];
      return w && hits.some((q) => match(q, w)) ? h('mark', p) : p;
    });
  }

  function view() {
    const q = question();
    const r = retrieve(q, k);
    const topIds = new Set(r.top.map((x) => x.id));
    switch (stage) {
      case 0: return h('div.w-rag-docs', DOCS.map((d) => h('div.w-rag-doc', h('b', `📄 ${d.title}`), h('p.small', d.chunks.join(' ')))));
      case 1: return h('div.w-rag-chunks', CHUNKS.map((ch) => h('div.w-rag-chunk', h('span.chip', ch.id), h('span.small', ch.text))));
      case 2: return h('div.w-rag-chunks', CHUNKS.map((ch) => h('div.w-rag-chunk', h('span.chip', ch.id), vecCells(ch.text), h('span.small.muted.w-rag-trunc', ch.text))));
      case 3: return h('div.w-rag-db', CHUNKS.map((ch) => h('div.w-rag-dbitem', { title: ch.text }, vecCells(ch.text), h('span.small', `${ch.id} · ${ch.doc}`))));
      case 4: return h('div', h('p.w-rag-question', '❓ ', h('b', q)), h('p.small.muted', 'Suchbegriffe nach Entfernen von Füllwörtern: '), h('div.row', r.qt.map((w) => h('span.chip.chip-primary', w))), vecCells(q));
      case 5: return h('div',
        h('p.small', `Frage: „${q}“ – die ${k} besten Treffer werden ausgewählt:`),
        h('div.w-rag-chunks', r.scored.map((ch) => h(`div.w-rag-chunk${topIds.has(ch.id) ? '.is-top' : ''}`,
          h('span.chip', ch.id), h('span.w-rag-score', `${ch.score} Treffer`), h('span.small', highlight(ch.text, ch.hits))))),
        r.top.length ? null : h('p.notice.notice-warn.small', 'Kein Abschnitt passt – ein gutes RAG-System würde jetzt ehrlich „weiß ich nicht“ antworten.'),
        h('p.small.muted', 'Hinweis: Echte Systeme vergleichen Embeddings und erkennen so auch Synonyme („Ferien“ ≈ „Urlaub“). Die Wort-Überlappung hier findet nur gleiche Wortstämme.'));
      case 6: return h('div', h('pre.w-rag-prompt', buildRagPrompt(q, r.top)));
      case 7: return h('div.w-rag-llm',
        h('div.w-rag-llmbox', pixelIcon('brain', 32), h('div', h('b', 'Sprachmodell'), h('p.small', 'Eingabe: Prompt mit Kontext (oben). Ausgabe: Antworttext mit Quellenverweisen.'))),
        c.aiEnabled() ? h('button.btn.btn-sm', { type: 'button', onclick: () => askAi(q, r.top) }, '▶ Mit echter KI beantworten') : h('p.small.muted', 'Die Antwort im nächsten Schritt wird lokal simuliert.'));
      default: return answerView(q, r);
    }
  }

  function answerView(q, r) {
    const preset = !custom ? QUESTIONS[qIdx] : null;
    let body;
    if (aiAnswer) body = h('div', mdEl(aiAnswer), h('p.small.muted', 'Antwort einer echten KI auf Basis des Kontexts.'));
    else if (preset) {
      const parts = preset.parts.map((p) => ({ ...p, n: r.top.findIndex((x) => x.id === p.c) + 1 })).filter((p) => p.n > 0);
      body = parts.length
        ? mdEl(parts.map((p) => `${p.t} [${p.n}]`).join(' '))
        : h('p', 'In den bereitgestellten Abschnitten finde ich dazu keine Information. (Der passende Abschnitt wurde nicht abgerufen – erhöhe k!)');
    } else {
      body = h('div', h('p.small.muted', 'Für eigene Fragen gibt es ohne angebundene KI keine generierte Antwort. Diese Abschnitte würden dem LLM als Kontext dienen:'),
        r.top.length ? h('ul.small', r.top.map((x, i) => h('li', `[${i + 1}] ${x.text}`))) : h('p', 'Keine passenden Abschnitte – Antwort: „Dazu habe ich keine Information.“'));
    }
    return h('div.w-rag-answer',
      h('p.w-rag-question', '❓ ', h('b', q)),
      h('div.w-rag-answerbox', body),
      r.top.length ? h('div.w-rag-sources', h('b.small', 'Quellen'), h('ol.small', r.top.map((x) => h('li', `${x.doc}, Abschnitt ${x.sec} (${x.id})`)))) : null);
  }

  async function askAi(q, top) {
    try {
      panel.querySelector('button')?.setAttribute('disabled', '');
      c.toast('Frage an die KI gesendet …', { icon: '🤖' });
      aiAnswer = await c.chat([{ role: 'user', content: buildRagPrompt(q, top) }], { system: 'Du bist ein interner Wissensassistent. Antworte knapp auf Deutsch und nur auf Basis des gegebenen Kontexts.' });
      go(8);
    } catch (e) {
      c.toast(`KI-Anfrage fehlgeschlagen: ${e?.message || e}`, { type: 'error', icon: '⚠️' });
      panel.querySelector('button')?.removeAttribute('disabled');
    }
  }

  function render() {
    stageBtns.forEach((b, i) => {
      b.classList.toggle('is-active', i === stage);
      b.classList.toggle('is-done', i < stage);
      b.setAttribute('aria-selected', i === stage ? 'true' : 'false');
      b.tabIndex = i === stage ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', stageBtns[stage].id);
    fill(panel, 
      h('div.w-rag-phase', h('span.chip', stage < 4 ? 'Indexierung (vorab)' : 'Abfrage (bei jeder Frage)'), h('b', ` ${stage + 1}. ${STAGES[stage].t}`)),
      h('p.small.muted', STAGES[stage].d),
      view());
    movePacket();
    if (stage === STAGES.length - 1) c.award(10, 'Widget: RAG-Pipeline durchlaufen');
  }

  function go(i) { stage = i; render(); }
  function stopPlay() { playing = false; t.clear(); playBtn.textContent = '▶ Pipeline abspielen'; }
  function play() {
    playing = true; playBtn.textContent = '⏸ Stopp';
    go(0);
    const ms = prefersReducedMotion() ? 2400 : 1500;
    const tick = () => { if (!playing) return; if (stage < STAGES.length - 1) { go(stage + 1); t.timeout(tick, ms); } else stopPlay(); };
    t.timeout(tick, ms);
  }

  const ro = new ResizeObserver(() => movePacket());
  ro.observe(bar);
  renderQs();
  render();
  return () => { t.clear(); ro.disconnect(); offKeys(); };
}
