// Widget: Prompt-Baukasten mit Live-Vorschau und Qualitätsmeter.
import { h, mdEl } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, uid, copyText, fill } from './_shared.js';

const FIELDS = [
  { key: 'role', label: 'Rolle / Persona', ph: 'z. B. Du bist eine erfahrene Kundenservice-Mitarbeiterin eines Online-Shops für Gartenmöbel.', rows: 2 },
  { key: 'context', label: 'Kontext', ph: 'Hintergrund, Zielgruppe, Situation, relevante Fakten …', rows: 3 },
  { key: 'task', label: 'Aufgabe', ph: 'Was genau soll die KI tun? Mit einem klaren Verb beginnen: „Schreibe …“, „Fasse … zusammen“, „Prüfe …“', rows: 3 },
  { key: 'format', label: 'Format', ph: 'Länge, Struktur, Tonalität: z. B. „max. 120 Wörter, 3 Absätze, freundlich-sachlich, Du-Form“', rows: 2 },
  { key: 'rules', label: 'Grenzen / Regeln', ph: 'Was darf die KI nicht tun? z. B. „Keine Rabatte versprechen. Wenn Infos fehlen, nachfragen statt raten.“', rows: 2 },
  { key: 'examples', label: 'Beispiele (optional)', ph: 'Ein kurzes Beispiel für gewünschten Stil oder Ausgabe (Few-Shot)', rows: 2 },
];
const HEAD = { role: 'Rolle', context: 'Kontext', task: 'Aufgabe', format: 'Format', rules: 'Regeln', examples: 'Beispiel' };

const TEMPLATES = {
  mail: {
    label: 'E-Mail an Kunden',
    v: {
      role: 'Du bist eine freundliche, lösungsorientierte Kundenservice-Mitarbeiterin der (fiktiven) Gartenwelt GmbH.',
      context: 'Ein Kunde hat einen Gartentisch bestellt, der seit 5 Tagen überfällig ist. Grund: Lieferengpass beim Hersteller, neuer Liefertermin in ca. 7 Werktagen. Der Kunde ist verärgert und droht mit Stornierung.',
      task: 'Schreibe eine Antwort-E-Mail, die sich für die Verzögerung entschuldigt, den neuen Termin nennt und zwei Optionen anbietet: warten oder kostenfrei stornieren.',
      format: 'Max. 150 Wörter, Betreffzeile plus 3 kurze Absätze, empathisch und sachlich, Sie-Form.',
      rules: 'Keine Rabatte oder Gutscheine versprechen. Keine Schuldzuweisung an den Hersteller. Wenn Informationen fehlen, Platzhalter in [eckigen Klammern] setzen.',
      examples: '',
    },
  },
  protocol: {
    label: 'Protokoll zusammenfassen',
    v: {
      role: 'Du bist eine präzise Projektassistenz, die Besprechungen für die Geschäftsführung aufbereitet.',
      context: 'Unten folgt das Rohprotokoll eines 60-minütigen Projektmeetings zur Einführung eines KI-Tools im Einkauf. Die Leser haben wenig Zeit und wollen Entscheidungen und nächste Schritte sehen.',
      task: 'Fasse das Protokoll zusammen: getroffene Entscheidungen, offene Punkte, Aufgaben mit Verantwortlichen und Fristen.\n\n[Protokolltext hier einfügen]',
      format: 'Markdown mit drei Überschriften (Entscheidungen, Offene Punkte, Aufgaben) und einer Tabelle für Aufgaben (Aufgabe | Wer | Bis wann). Maximal eine Seite.',
      rules: 'Nur Informationen aus dem Protokoll verwenden, nichts erfinden. Unklare Zuständigkeiten als „offen“ markieren. Keine personenbezogenen Bewertungen.',
      examples: 'Aufgabe | Wer | Bis wann\nAngebote von 3 Anbietern einholen | M. Klein | 15.11.',
    },
  },
  job: {
    label: 'Stellenanzeige prüfen',
    v: {
      role: 'Du bist eine HR-Expertin für diskriminierungsfreie und attraktive Stellenanzeigen in Deutschland.',
      context: 'Ein mittelständisches Unternehmen sucht eine/n KI-Projektmanager/in. Die Anzeige soll vielfältige Bewerbungen fördern und muss dem Allgemeinen Gleichbehandlungsgesetz (AGG) entsprechen.',
      task: 'Prüfe die folgende Stellenanzeige auf problematische Formulierungen (z. B. Alter, Geschlecht, Herkunft), unklare Anforderungen und fehlende Angaben. Schlage konkrete Verbesserungen vor.\n\n[Anzeigentext hier einfügen]',
      format: 'Tabelle mit den Spalten: Fundstelle | Problem | Verbesserungsvorschlag. Danach maximal 3 Sätze Gesamteinschätzung.',
      rules: 'Keine Rechtsberatung – bei Zweifeln auf juristische Prüfung hinweisen. Nichts an der Anzeige erfinden, was nicht drinsteht.',
      examples: '„junges, dynamisches Team“ | mittelbare Altersdiskriminierung möglich | „motiviertes, engagiertes Team“',
    },
  },
};

const words = (s) => (s.trim().match(/\S+/g) || []).length;

export function assess(v) {
  const all = Object.values(v).join('\n');
  const checks = [
    { ok: words(v.role) >= 4, label: 'Rolle/Persona festgelegt', tip: 'Gib der KI eine Rolle mit Fachgebiet und Haltung.' },
    { ok: words(v.context) >= 15, label: 'Ausreichend Kontext (≥ 15 Wörter)', tip: 'Wer ist die Zielgruppe? Welche Fakten muss die KI kennen?' },
    { ok: words(v.task) >= 6 && /(?:^|[\s„"'(])(schreib|erstell|fass|prüf|analysier|formulier|entwirf|erkläre|vergleich|liste|übersetz|bewert|gib|nenne|klassifizier|extrahier)/i.test(v.task), label: 'Klare Aufgabe mit Handlungsverb', tip: 'Starte mit einem Verb wie „Schreibe“, „Fasse zusammen“, „Prüfe“.' },
    { ok: words(v.format) >= 3 && /(wörter|wort|zeichen|sätze|satz|absatz|absätze|stichpunkt|liste|tabelle|markdown|json|überschrift|seite|zeilen|ton|form)/i.test(v.format), label: 'Format/Länge angegeben', tip: 'Nenne Länge (z. B. Wörter) und Struktur (Liste, Tabelle …).' },
    { ok: words(v.rules) >= 4, label: 'Grenzen/Regeln definiert', tip: 'Was soll die KI vermeiden? Was tun, wenn Infos fehlen?' },
    { ok: words(v.examples) >= 3, label: 'Beispiel vorhanden (Few-Shot)', tip: 'Ein Beispiel zeigt Stil und Format oft besser als jede Beschreibung.', optional: true },
  ];
  const sensitive = /\b[A-Z]{2}\d{2}(?:\s?\d{4}){4,}|\b[\w.+-]+@[\w-]+\.[\w.]+\b|\+?\d[\d\s/-]{8,}\d/.test(all);
  checks.push({ ok: !sensitive, label: 'Keine erkennbaren personenbezogenen Daten (E-Mail, Telefon, IBAN)', tip: 'Ersetze echte Daten durch Platzhalter, bevor du den Prompt an ein externes Tool gibst.' });
  const score = checks.reduce((a, c) => a + (c.ok ? (c.optional ? 0.5 : 1) : 0), 0);
  const max = checks.reduce((a, c) => a + (c.optional ? 0.5 : 1), 0);
  return { checks, pct: score / max };
}

export function buildPrompt(v) {
  return FIELDS.filter((f) => v[f.key].trim()).map((f) => `## ${HEAD[f.key]}\n${v[f.key].trim()}`).join('\n\n');
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'prompt-builder');
  setupRoot(el, 'prompt-builder');
  const v = Object.fromEntries(FIELDS.map((f) => [f.key, '']));
  const inputs = {};
  const preview = h('pre.w-pb-preview', { 'aria-label': 'Vorschau des zusammengesetzten Prompts', tabindex: '0' });
  const meter = h('div.w-pb-meter');
  const aiOut = h('div.w-pb-ai', { 'aria-live': 'polite' });
  let busy = false;

  const form = h('div.w-pb-form', FIELDS.map((f) => {
    const id = uid('pb');
    const ta = h('textarea.textarea.w-pb-ta', { id, rows: f.rows, placeholder: f.ph });
    ta.addEventListener('input', () => { v[f.key] = ta.value; update(); });
    inputs[f.key] = ta;
    return h('label.field', { for: id }, h('span', f.label), ta);
  }));

  const copyBtn = h('button.btn.btn-accent', { type: 'button', onclick: async () => {
    const txt = buildPrompt(v);
    if (!txt) { c.toast('Der Prompt ist noch leer.', { icon: '✏️' }); return; }
    const ok = await copyText(txt);
    c.toast(ok ? 'Prompt kopiert.' : 'Kopieren nicht möglich.', { icon: ok ? '📋' : '⚠️' });
    if (ok && assess(v).pct >= 0.8) c.award(10, 'Widget: Prompt-Baukasten');
  } }, '⧉ Prompt kopieren');
  const testBtn = c.aiEnabled() ? h('button.btn.btn-primary', { type: 'button', onclick: () => testPrompt() }, '▶ Prompt testen') : null;

  fill(el, 
    widgetHead('Prompt-Baukasten', 'Baue deinen Prompt aus sechs Bausteinen. Rechts siehst du live, wie der fertige Prompt aussieht und welche Qualitätskriterien er schon erfüllt. Starte gern mit einer Vorlage.', 'spark'),
    h('div.w-pb-templates.row', h('span.small.muted', 'Vorlage:'), Object.entries(TEMPLATES).map(([k, tpl]) => h('button.btn.btn-sm', { type: 'button', onclick: () => applyTpl(k) }, tpl.label)), h('button.btn.btn-sm.btn-ghost', { type: 'button', onclick: () => applyTpl(null) }, 'Leeren')),
    h('div.w-pb-layout', form, h('div.w-pb-side', h('h4', 'Vorschau'), preview, meter, h('div.row', copyBtn, testBtn))),
    aiOut,
    mdEl('**Tipp:** Gute Prompts sind wie gute Arbeitsaufträge an neue Kolleg:innen – mit Kontext, klarem Ziel, gewünschtem Ergebnisformat und Grenzen. Prüfe KI-Ergebnisse immer selbst, bevor du sie verwendest, und gib keine vertraulichen oder personenbezogenen Daten in nicht freigegebene Tools ein.', 'div', 'md w-explain small'),
  );

  function applyTpl(k) {
    FIELDS.forEach((f) => { v[f.key] = k ? TEMPLATES[k].v[f.key] : ''; inputs[f.key].value = v[f.key]; });
    update();
    inputs.role.focus();
  }

  function update() {
    const txt = buildPrompt(v);
    preview.textContent = txt || 'Noch leer – fülle links die Felder aus oder wähle eine Vorlage.';
    preview.classList.toggle('is-empty', !txt);
    const a = assess(v);
    const pct = Math.round(a.pct * 100);
    const level = pct >= 80 ? 'stark' : pct >= 50 ? 'solide' : 'ausbaufähig';
    fill(meter, 
      h('div.row.small', h('b', `Prompt-Qualität: ${pct} %`), h('span.chip', level)),
      h('div.progress', { role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': pct, 'aria-label': 'Prompt-Qualität' }, h('i', { style: { width: pct + '%' } })),
      h('ul.rubric.w-pb-checks', a.checks.map((ch) => h(`li.${ch.ok ? 'hit' : 'miss'}`, h('span', { 'aria-hidden': 'true' }, ch.ok ? '✔' : '○'), h('span', h('span', ch.label + (ch.optional ? ' (optional)' : '')), !ch.ok ? h('span.small.muted', ' – ' + ch.tip) : null)))),
    );
  }

  async function testPrompt() {
    const txt = buildPrompt(v);
    if (!txt || busy) return;
    busy = true; testBtn.disabled = true;
    fill(aiOut, h('div.ai-box', h('div.ai-head', 'KI-Antwort'), h('p.typing.muted', 'Die KI schreibt')));
    try {
      const answer = await c.chat([{ role: 'user', content: txt }], { system: 'Du bist ein hilfreicher Assistent. Befolge die Anweisungen im Prompt des Nutzers genau. Antworte auf Deutsch.' });
      fill(aiOut, h('div.ai-box', h('div.ai-head', 'KI-Antwort'), mdEl(String(answer || '')), h('p.small.muted', 'KI-Ausgaben können fehlerhaft sein – prüfe das Ergebnis kritisch.')));
      if (assess(v).pct >= 0.6) c.award(10, 'Widget: Prompt-Baukasten');
    } catch (e) {
      fill(aiOut, h('p.notice.notice-warn', `Die KI-Anfrage hat nicht geklappt: ${e?.message || e}`));
    } finally {
      busy = false; testBtn.disabled = false;
    }
  }

  update();
  return () => {};
}
