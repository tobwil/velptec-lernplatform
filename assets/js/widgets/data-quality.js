// Widget: Datenqualitäts-Spiel – Datensätze als brauchbar/fehlerhaft einsortieren.
import { h } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, fill } from './_shared.js';

const FIELDS = [
  ['nr', 'Kundennr.'], ['name', 'Name'], ['email', 'E-Mail'], ['plz', 'PLZ'], ['ort', 'Ort'],
  ['geburt', 'Geburtsdatum'], ['typ', 'Typ'], ['update', 'Zuletzt aktualisiert'],
];

// Fiktive Datensätze der fiktiven „Muster Haustechnik GmbH“
const RECORDS = [
  {
    data: { nr: 'K-1001', name: 'Anna Becker', email: 'anna.becker@beispiel.de', plz: '50667', ort: 'Köln', geburt: '14.03.1988', typ: 'Privatkunde', update: '03/2026' },
    ok: true, dim: 'Alle Dimensionen erfüllt',
    why: 'Korrekt, vollständig, konsistent, aktuell, gültig und eindeutig – dieser Datensatz kann so verwendet werden.',
  },
  {
    data: { nr: 'K-1002', name: 'Jonas Wilde', email: 'jonas.wilde@beispiel,de', plz: '04109', ort: 'Leipzig', geburt: '02.11.1979', typ: 'Privatkunde', update: '01/2026' },
    ok: false, dim: 'Gültigkeit', bad: 'email',
    why: 'Tippfehler in der E-Mail: Komma statt Punkt („beispiel,de“). Der Wert verletzt die Formatregel – ein Problem der Gültigkeit. Abhilfe: Formatvalidierung schon bei der Eingabe.',
  },
  {
    data: { nr: 'K-1003', name: 'Mehmet Kaya', email: 'm.kaya@beispiel.de', plz: '', ort: 'Hamburg', geburt: '23.06.1992', typ: 'Privatkunde', update: '05/2026' },
    ok: false, dim: 'Vollständigkeit', bad: 'plz',
    why: 'Die Postleitzahl fehlt. Ohne PLZ sind regionale Auswertungen und Zustellung nicht möglich. Abhilfe: Pflichtfeld + Nachpflege-Workflow.',
  },
  {
    data: { nr: 'K-1187', name: 'A. Becker', email: 'anna.becker@beispiel.de', plz: '50667', ort: 'Köln', geburt: '14.03.1988', typ: 'Privatkunde', update: '07/2025' },
    ok: false, dim: 'Eindeutigkeit', bad: 'nr',
    why: 'Duplikat: gleiche Person wie K-1001 (gleiche E-Mail, PLZ, Geburtsdatum), nur abgekürzt und unter neuer Kundennummer. Duplikate verzerren Zählungen und Modelle. Abhilfe: Dublettenprüfung (Fuzzy-Matching) und Zusammenführen.',
  },
  {
    data: { nr: 'K-1004', name: 'Clara Neumann', email: 'clara.neumann@beispiel.de', plz: '01067', ort: 'Dresden', geburt: '12.07.2091', typ: 'Privatkunde', update: '02/2026' },
    ok: false, dim: 'Gültigkeit (Wertebereich)', bad: 'geburt',
    why: 'Unplausibles Datum: ein Geburtsdatum in der Zukunft – der Wert liegt außerhalb des zulässigen Bereichs. Vermutlich ein Tippfehler (1991?). Abhilfe: Gültigkeitsregeln (z. B. Alter 16–110 Jahre).',
  },
  {
    data: { nr: 'K-1005', name: 'Juergen Mueller', email: 'j.mueller@beispiel.de', plz: '70173', ort: 'Stuttgart', geburt: '30.09.1965', typ: 'Privatkunde', update: '04/2026' },
    ok: true, dim: 'Alle Dimensionen erfüllt',
    why: 'Fangfrage: Die Schreibweise ohne Umlaute ist zulässig und kein Fehler. Alle Felder sind vollständig, plausibel und aktuell. (Für Dublettenprüfungen sollte man „ue“/„ü“ aber normalisieren.)',
  },
  {
    data: { nr: 'K-0412', name: 'Petra Schulz', email: 'p.schulz@beispiel.de', plz: '28195', ort: 'Bremen', geburt: '08.01.1970', typ: 'Privatkunde · Post zurück: „unbekannt verzogen“', update: '11/2014' },
    ok: false, dim: 'Aktualität', bad: 'update',
    why: 'Seit über zehn Jahren nicht aktualisiert, die Post kam zurück – die Adresse ist veraltet. Abhilfe: Aktualisierungszyklen, Adressabgleich, Datensätze mit Ablaufdatum versehen.',
  },
  {
    data: { nr: 'K-9999', name: 'Max Mustermann', email: 'test@test.de', plz: '12345', ort: 'Teststadt', geburt: '01.01.1900', typ: 'Privatkunde (Testanlage)', update: '06/2026' },
    ok: false, dim: 'Korrektheit', bad: 'name',
    why: 'Formal sieht alles gültig aus – aber dieser Datensatz bildet keine reale Person ab: ein Testeintrag aus der Systemeinführung. Daten, die die Realität nicht zutreffend abbilden, sind ein Korrektheitsproblem; im Training lernt das Modell falsche Muster. Abhilfe: Testdaten kennzeichnen und vor dem Training herausfiltern.',
  },
  {
    data: { nr: 'K-1006', name: 'Tobias Krämer', email: 't.kraemer@beispiel.de', plz: '80331', ort: 'Berlin', geburt: '17.05.1983', typ: 'Privatkunde', update: '06/2026' },
    ok: false, dim: 'Konsistenz', bad: 'ort',
    why: 'PLZ und Ort widersprechen sich: 80331 gehört zu München, nicht zu Berlin. Abhilfe: Abgleich gegen ein PLZ-Verzeichnis (Referenzdaten).',
  },
  {
    data: { nr: 'K-1007', name: 'Sophie Wagner', email: 'sophie.wagner@beispiel.de', plz: '60311', ort: 'Frankfurt am Main', geburt: '21.12.1996', typ: 'Privatkunde', update: '08/2026' },
    ok: true, dim: 'Alle Dimensionen erfüllt',
    why: 'Sauberer Datensatz: korrekt, vollständig, konsistent, aktuell, gültig und eindeutig.',
  },
];

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'data-quality');
  setupRoot(el, 'data-quality');
  let idx = 0, score = 0, answered = false;
  let log = [];

  const stage = h('div.w-dq-stage');
  const status = h('div.w-dq-status');
  fill(el, 
    widgetHead('Datenqualitäts-Check', 'Du bereitest die Kundendaten der fiktiven Muster Haustechnik GmbH für eine Kundenabwanderungs-Analyse vor. Sortiere jeden Datensatz als „brauchbar“ oder „fehlerhaft“ ein – Tastatur: B = brauchbar, F = fehlerhaft, Enter = weiter.', 'box'),
    status,
    stage,
  );

  function renderStatus() {
    const pct = Math.round((idx / RECORDS.length) * 100);
    fill(status, h('div.row.small',
      h('span', `Datensatz ${Math.min(idx + 1, RECORDS.length)} / ${RECORDS.length}`),
      h('span.spacer'),
      h('span.chip.chip-primary', `Punkte: ${score}`)),
    h('div.progress', { role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': RECORDS.length, 'aria-valuenow': idx }, h('i', { style: { width: pct + '%' } })));
  }

  function recordCard(rec, reveal) {
    return h('div.w-dq-record', { 'aria-label': `Datensatz ${rec.data.nr}` },
      h('dl', FIELDS.map(([k, label]) => {
        const val = rec.data[k];
        const isBad = reveal && rec.bad === k;
        return h(`div.w-dq-f${isBad ? '.is-bad' : ''}`, h('dt', label), h('dd', val ? val : h('span.w-dq-empty', '(leer)')));
      })));
  }

  function renderQuestion() {
    answered = false;
    const rec = RECORDS[idx];
    const bOk = h('button.btn.w-dq-ok', { type: 'button', onclick: () => answer(true) }, '✔ Brauchbar', h('span.kbd', 'B'));
    const bBad = h('button.btn.w-dq-bad', { type: 'button', onclick: () => answer(false) }, '✖ Fehlerhaft', h('span.kbd', 'F'));
    fill(stage, recordCard(rec, false), h('div.row.w-dq-actions', bOk, bBad));
    renderStatus();
  }

  function answer(saysOk) {
    if (answered) return;
    answered = true;
    const rec = RECORDS[idx];
    const right = saysOk === rec.ok;
    if (right) score++;
    log.push({ rec, right, saysOk });
    const next = h('button.btn.btn-primary', { type: 'button', onclick: () => advance() }, idx + 1 < RECORDS.length ? 'Weiter →' : 'Auswertung');
    fill(stage, 
      recordCard(rec, true),
      h(`div.explain.${right ? 'ok' : 'bad'}`, { role: 'status' },
        h('b', right ? 'Richtig! ' : 'Nicht ganz. '),
        h('span', rec.ok ? 'Dieser Datensatz ist brauchbar. ' : 'Dieser Datensatz ist fehlerhaft. '),
        h('div.w-dq-dim', h('span.chip', 'Qualitätsdimension'), ' ', h('b', rec.dim)),
        h('p.small', rec.why)),
      h('div.row', next),
    );
    renderStatus();
    next.focus();
  }

  function advance() {
    idx++;
    if (idx < RECORDS.length) renderQuestion();
    else finish();
  }

  function finish() {
    renderStatus();
    const great = score >= 8;
    const dims = {};
    log.filter((l) => !l.right).forEach((l) => { dims[l.rec.dim] = (dims[l.rec.dim] || 0) + 1; });
    const restart = h('button.btn', { type: 'button', onclick: () => { idx = 0; score = 0; log = []; renderQuestion(); } }, '↻ Nochmal spielen');
    fill(stage, h('div.w-dq-final',
      h('div.w-big', `${score} / ${RECORDS.length}`),
      h('p', great ? 'Stark! Du hast ein gutes Auge für Datenqualität – genau das braucht jedes KI-Projekt („Garbage in, garbage out“).' : 'Guter Anfang! Schau dir die Erklärungen zu den verpassten Fällen nochmal an – mit ≥ 8 Punkten gibt’s Konfetti.'),
      Object.keys(dims).length ? h('div', h('p.small', h('b', 'Hier lohnt ein zweiter Blick: ')), h('ul.small', Object.entries(dims).map(([d, n]) => h('li', `${d} (${n}×)`)))) : null,
      h('div.tbl-wrap', h('table.tbl.small',
        h('thead', h('tr', h('th', 'Datensatz'), h('th', 'Deine Antwort'), h('th', 'Dimension'))),
        h('tbody', log.map((l) => h('tr', h('td', `${l.rec.data.nr} · ${l.rec.data.name}`), h('td', (l.right ? '✔ ' : '✖ ') + (l.saysOk ? 'brauchbar' : 'fehlerhaft')), h('td', l.rec.dim)))))),
      h('div.row', restart)));
    c.award(10, 'Widget: Datenqualitäts-Check abgeschlossen');
    if (great) c.confetti();
    restart.focus();
  }

  const onKey = (e) => {
    if (e.target.closest('input, textarea, select')) return;
    if (idx >= RECORDS.length) return;
    const k = e.key.toLowerCase();
    if (!answered && k === 'b') { e.preventDefault(); answer(true); }
    else if (!answered && k === 'f') { e.preventDefault(); answer(false); }
  };
  el.addEventListener('keydown', onKey);

  renderQuestion();
  return () => el.removeEventListener('keydown', onKey);
}
