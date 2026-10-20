// Widget: Risikoklassen-Check nach EU-KI-Verordnung (VO (EU) 2024/1689).
import { h } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, uid, fill } from './_shared.js';

const EURLEX = 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj';
const OMNIBUS = 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj';

const ART5 = [
  { id: 'manip', label: 'Unterschwellige, manipulative oder täuschende Techniken, die Verhalten wesentlich verzerren und erheblichen Schaden verursachen können', ref: 'Art. 5 Abs. 1 lit. a' },
  { id: 'vuln', label: 'Ausnutzen von Schwächen wegen Alter, Behinderung oder sozialer/wirtschaftlicher Lage', ref: 'lit. b' },
  { id: 'social', label: 'Social Scoring: Bewertung von Personen nach Sozialverhalten/Persönlichkeit mit ungerechtfertigter Benachteiligung', ref: 'lit. c' },
  { id: 'crime', label: 'Vorhersage, ob eine Person eine Straftat begeht – allein auf Basis von Profiling oder Persönlichkeitsmerkmalen', ref: 'lit. d' },
  { id: 'scrape', label: 'Ungezieltes Auslesen von Gesichtsbildern aus Internet/Videoüberwachung für Gesichtserkennungs-Datenbanken', ref: 'lit. e' },
  { id: 'emotion', label: 'Emotionserkennung am Arbeitsplatz oder in Bildungseinrichtungen (außer aus medizinischen/Sicherheitsgründen)', ref: 'lit. f' },
  { id: 'biocat', label: 'Biometrische Kategorisierung, um z. B. ethnische Herkunft, politische Meinung, Religion oder sexuelle Orientierung abzuleiten', ref: 'lit. g' },
  { id: 'rbi', label: 'Biometrische Echtzeit-Fernidentifizierung in öffentlich zugänglichen Räumen zur Strafverfolgung (nur eng begrenzte Ausnahmen)', ref: 'lit. h' },
  { id: 'nci', label: 'Erzeugen nicht einvernehmlicher intimer/sexueller Bilder realer Personen oder von Darstellungen sexuellen Kindesmissbrauchs', ref: 'neu durch VO (EU) 2026/1744, gilt ab 02.12.2026' },
];

const ANNEX3 = [
  { id: 'bio', label: 'Biometrie', detail: 'biometrische Fernidentifizierung, Kategorisierung, Emotionserkennung (soweit nicht verboten)' },
  { id: 'kritis', label: 'Kritische Infrastruktur', detail: 'Sicherheitsbauteile in Verkehr, Wasser-, Gas-, Wärme-, Stromversorgung, digitaler Infrastruktur' },
  { id: 'bildung', label: 'Allgemeine & berufliche Bildung', detail: 'Zugang/Zulassung, Bewertung von Lernergebnissen, Prüfungsüberwachung' },
  { id: 'beschaeftigung', label: 'Beschäftigung & Personalmanagement', detail: 'Stellenanzeigen schalten, Bewerbungen sichten/filtern, Bewerber bewerten, Beförderung, Kündigung, Aufgabenzuweisung, Leistungsüberwachung' },
  { id: 'dienste', label: 'Zugang zu wesentlichen Dienstleistungen', detail: 'öffentliche Leistungen, Kreditwürdigkeit/Bonität natürlicher Personen (nicht: Betrugserkennung), Risiko-/Preisbewertung bei Lebens- und Krankenversicherung, Notruf-Triage' },
  { id: 'strafverfolgung', label: 'Strafverfolgung', detail: 'z. B. Beweismittel-Bewertung, Risiko Opfer/Täter zu werden' },
  { id: 'migration', label: 'Migration, Asyl, Grenzkontrolle', detail: 'Prüfung von Anträgen, Risikobewertung' },
  { id: 'justiz', label: 'Rechtspflege & demokratische Prozesse', detail: 'Unterstützung von Gerichten, Beeinflussung von Wahlen' },
];

const EXC63 = [
  { id: 'narrow', label: 'Es erledigt nur eine eng gefasste Verfahrensaufgabe (z. B. Dokumente in Kategorien sortieren, Dubletten finden).' },
  { id: 'improve', label: 'Es verbessert nur das Ergebnis einer bereits abgeschlossenen menschlichen Tätigkeit (z. B. Text sprachlich glätten).' },
  { id: 'pattern', label: 'Es erkennt nur Entscheidungsmuster/Abweichungen und ersetzt die menschliche Bewertung nicht ohne Überprüfung.' },
  { id: 'prep', label: 'Es übernimmt nur eine vorbereitende Aufgabe für eine Bewertung (z. B. Übersetzung, Dateiverwaltung).' },
];

const ART50 = [
  { id: 'chatbot', label: 'Das System interagiert direkt mit Menschen (Chatbot, Voicebot, Assistent).', duty: 'Personen müssen erkennen können, dass sie mit einer KI interagieren (Art. 50 Abs. 1 – Pflicht des Anbieters; wer den Bot selbst baut und unter eigenem Namen betreibt, ist meist Anbieter).' },
  { id: 'synthetic', label: 'Es erzeugt synthetische Texte, Bilder, Audio- oder Videoinhalte.', duty: 'Anbieter müssen Ausgaben maschinenlesbar als KI-generiert kennzeichnen, z. B. Wasserzeichen/Metadaten (Art. 50 Abs. 2).' },
  { id: 'deepfake', label: 'Es erzeugt oder verändert Bild-, Ton- oder Videoinhalte, die echten Personen, Orten oder Ereignissen täuschend ähneln (Deepfakes).', duty: 'Betreiber müssen offenlegen, dass die Inhalte künstlich erzeugt oder manipuliert wurden (Art. 50 Abs. 4).' },
  { id: 'publictext', label: 'Es erzeugt Texte, die veröffentlicht werden, um die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse zu informieren.', duty: 'Betreiber müssen die KI-Erzeugung offenlegen – außer bei menschlicher Prüfung und redaktioneller Verantwortung (Art. 50 Abs. 4).' },
  { id: 'emotion', label: 'Es erkennt Emotionen oder kategorisiert Personen biometrisch (wo erlaubt).', duty: 'Betreiber müssen die betroffenen Personen über den Betrieb informieren (Art. 50 Abs. 3).' },
];

const STEPS = [
  { id: 'role', type: 'single', q: 'In welcher Rolle bist du?', help: 'Die Pflichten hängen stark von der Rolle ab. Wer ein KI-System entwickelt (oder entwickeln lässt) und unter eigenem Namen in Verkehr bringt, ist Anbieter. Wer es in eigener Verantwortung beruflich nutzt, ist Betreiber.', options: [{ id: 'betreiber', label: 'Betreiber – wir setzen ein KI-System ein (z. B. eingekaufte Software)' }, { id: 'anbieter', label: 'Anbieter – wir entwickeln ein KI-System und bringen es unter unserem Namen auf den Markt / in Betrieb' }] },
  { id: 'art5', type: 'multi', q: 'Fällt der Einsatz unter eine verbotene Praxis (Art. 5)?', help: 'Wähle alle zutreffenden Punkte – oder „Nichts davon“.', options: ART5, none: 'Nichts davon trifft zu' },
  { id: 'annex1', type: 'single', q: 'Ist das KI-System ein Produkt oder Sicherheitsbauteil eines Produkts, das unter EU-Produktsicherheitsrecht nach Anhang I fällt und eine Konformitätsbewertung durch Dritte braucht?', help: 'Z. B. Maschinen, Medizinprodukte, Spielzeug, Aufzüge, Funkanlagen, Fahrzeuge (Art. 6 Abs. 1).', options: [{ id: 'yes', label: 'Ja' }, { id: 'no', label: 'Nein / nicht zutreffend' }] },
  { id: 'annex3', type: 'multi', q: 'Wird das System in einem der Hochrisiko-Bereiche nach Anhang III eingesetzt?', help: 'Wähle alle zutreffenden Bereiche (Art. 6 Abs. 2).', options: ANNEX3, none: 'Keiner dieser Bereiche' },
  { id: 'profiling', type: 'single', q: 'Nimmt das System ein Profiling natürlicher Personen vor?', help: 'Profiling = automatisierte Bewertung persönlicher Aspekte wie Arbeitsleistung, Zuverlässigkeit, Verhalten, Interessen (Art. 4 Nr. 4 DSGVO). Mit Profiling ist ein Anhang-III-System immer hochriskant.', options: [{ id: 'yes', label: 'Ja, es bewertet oder rankt Personen' }, { id: 'no', label: 'Nein' }] },
  { id: 'exc63', type: 'multi', q: 'Greift eine Ausnahme nach Art. 6 Abs. 3?', help: 'Ein Anhang-III-System ist nicht hochriskant, wenn es kein erhebliches Risiko birgt, weil es die Entscheidung nicht wesentlich beeinflusst – mindestens eine Bedingung muss erfüllt sein.', options: EXC63, none: 'Keine Ausnahme trifft zu' },
  { id: 'art50', type: 'multi', q: 'Welche Transparenz-Situationen (Art. 50) treffen zu?', help: 'Diese Pflichten gelten zusätzlich zu einer etwaigen Hochrisiko-Einstufung.', options: ART50, none: 'Nichts davon' },
  { id: 'gpai', type: 'single', q: 'Bietest du selbst ein KI-Modell mit allgemeinem Verwendungszweck (GPAI, z. B. ein eigenes großes Sprachmodell) an?', help: 'GPAI-Modelle haben eigene Pflichten (Art. 53 ff.). Wer nur ein fremdes Modell per API nutzt, ist nicht GPAI-Anbieter.', options: [{ id: 'yes', label: 'Ja, wir stellen ein eigenes GPAI-Modell bereit' }, { id: 'no', label: 'Nein' }] },
];

const EXAMPLES = [
  {
    id: 'hr', label: 'Bewerber-Screening-Tool',
    intro: 'Eine Personalabteilung nutzt eine eingekaufte Software, die eingehende Bewerbungen automatisch bewertet und eine Rangliste erstellt.',
    answers: { role: 'betreiber', art5: [], annex1: 'no', annex3: ['beschaeftigung'], profiling: 'yes', art50: [] },
    notes: { role: 'Das Unternehmen kauft die Software ein → Betreiber.', annex3: 'Sichtung und Bewertung von Bewerbungen ist ausdrücklich in Anhang III Nr. 4 (Beschäftigung) genannt.', profiling: 'Die Software bewertet Personen und erstellt ein Ranking – das ist Profiling, die Ausnahme nach Art. 6 Abs. 3 greift nicht.' },
  },
  {
    id: 'bot', label: 'Website-Chatbot',
    intro: 'Ein Online-Shop setzt einen KI-Chatbot ein, der Kundenfragen zu Lieferzeiten und Retouren beantwortet.',
    answers: { role: 'betreiber', art5: [], annex1: 'no', annex3: [], art50: ['chatbot'] },
    notes: { annex3: 'Kundenservice zu Lieferung und Retouren ist kein Anhang-III-Bereich.', art50: 'Kundinnen und Kunden chatten direkt mit der KI → Transparenzpflicht: Sie müssen erkennen, dass sie mit einer KI sprechen.' },
  },
  {
    id: 'spam', label: 'Spamfilter',
    intro: 'Die IT setzt einen KI-basierten Spamfilter für das Firmen-Postfach ein.',
    answers: { role: 'betreiber', art5: [], annex1: 'no', annex3: [], art50: [] },
    notes: { art50: 'Der Filter interagiert nicht mit Menschen und erzeugt keine Inhalte → keine Transparenzpflicht.' },
  },
  {
    id: 'social', label: 'Social Scoring',
    intro: 'Ein Vermieter will Mietinteressenten mit einem „Sozialpunkte“-System bewerten, das Social-Media-Verhalten, Vereinsmitgliedschaften und Nachbarschaftsbeschwerden auswertet und Interessenten mit niedrigem Score ablehnt.',
    answers: { role: 'betreiber', art5: ['social'] },
    notes: { art5: 'Bewertung nach Sozialverhalten aus verschiedenen Lebensbereichen mit Benachteiligung in einem anderen Zusammenhang → verbotene Praxis nach Art. 5 Abs. 1 lit. c.' },
  },
];

const PROVIDER_HR = [
  'Risikomanagementsystem über den gesamten Lebenszyklus (Art. 9)',
  'Daten-Governance: geeignete, möglichst fehlerfreie und repräsentative Trainingsdaten (Art. 10)',
  'Technische Dokumentation (Art. 11) und automatische Protokollierung (Art. 12)',
  'Transparenz: Betriebsanleitung für Betreiber (Art. 13)',
  'Menschliche Aufsicht technisch ermöglichen (Art. 14)',
  'Genauigkeit, Robustheit und Cybersicherheit (Art. 15)',
  'Qualitätsmanagementsystem (Art. 17)',
  'Konformitätsbewertung, EU-Konformitätserklärung, CE-Kennzeichnung (Art. 43, 47, 48)',
  'Registrierung in der EU-Datenbank (Art. 49)',
  'Beobachtung nach dem Inverkehrbringen und Meldung schwerwiegender Vorfälle (Art. 72, 73)',
];
const DEPLOYER_HR = [
  'Einsatz gemäß Betriebsanleitung des Anbieters, geeignete technische und organisatorische Maßnahmen (Art. 26 Abs. 1)',
  'Menschliche Aufsicht durch kompetente, geschulte Personen mit den nötigen Befugnissen (Art. 26 Abs. 2)',
  'Eingabedaten müssen – soweit du sie kontrollierst – zweckgerecht und repräsentativ sein (Art. 26 Abs. 4)',
  'Betrieb überwachen, bei Risiken Anbieter und Behörde informieren, Nutzung ggf. aussetzen (Art. 26 Abs. 5)',
  'Automatisch erzeugte Protokolle mindestens sechs Monate aufbewahren (Art. 26 Abs. 6)',
  'Beim Einsatz am Arbeitsplatz: Arbeitnehmervertretung und betroffene Beschäftigte vorab informieren (Art. 26 Abs. 7)',
  'Betroffene Personen informieren, wenn das System Entscheidungen über sie trifft oder unterstützt (Art. 26 Abs. 11); Recht auf Erläuterung (Art. 86)',
  'Informationen des Anbieters für die Datenschutz-Folgenabschätzung nutzen (Art. 26 Abs. 9)',
  'Grundrechte-Folgenabschätzung für öffentliche Stellen, private Erbringer öffentlicher Dienste sowie bei Bonitäts- und Versicherungsbewertung (Art. 27)',
];

export function classify(a) {
  if ((a.art5 || []).length) return { cls: 'verboten' };
  let hr = null, exception = false;
  if (a.annex1 === 'yes') hr = 'Anhang I (Produktsicherheit, Art. 6 Abs. 1)';
  else if ((a.annex3 || []).length) {
    const areas = a.annex3.map((id) => ANNEX3.find((x) => x.id === id)?.label).join(', ');
    if (a.profiling === 'yes' || !(a.exc63 || []).length) hr = `Anhang III: ${areas} (Art. 6 Abs. 2)`;
    else exception = areas;
  }
  const transp = (a.art50 || []).map((id) => ART50.find((x) => x.id === id)).filter(Boolean);
  const cls = hr ? 'hoch' : transp.length ? 'begrenzt' : 'minimal';
  return { cls, hr, exception, transp, gpai: a.gpai === 'yes' };
}

function nextStep(id, a) {
  const order = STEPS.map((s) => s.id);
  let i = order.indexOf(id) + 1;
  const skip = (sid) => {
    if (sid === 'art5') return false;
    if ((a.art5 || []).length) return true; // verboten → direkt Ergebnis
    if (sid === 'annex3') return a.annex1 === 'yes';
    if (sid === 'profiling') return a.annex1 === 'yes' || !(a.annex3 || []).length;
    if (sid === 'exc63') return a.annex1 === 'yes' || !(a.annex3 || []).length || a.profiling === 'yes';
    if (sid === 'gpai') return a.role !== 'anbieter';
    return false;
  };
  while (i < order.length && skip(order[i])) i++;
  return i < order.length ? order[i] : 'result';
}

const CLASS_INFO = {
  verboten: { title: 'Verbotene Praxis (Art. 5)', cls: 'is-forbidden', icon: '⛔' },
  hoch: { title: 'Hochrisiko-KI-System (Art. 6)', cls: 'is-high', icon: '⚠️' },
  begrenzt: { title: 'Begrenztes Risiko – Transparenzpflichten (Art. 50)', cls: 'is-limited', icon: 'ℹ️' },
  minimal: { title: 'Minimales Risiko', cls: 'is-minimal', icon: '✅' },
};

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'ai-act-classifier');
  setupRoot(el, 'ai-act-classifier');
  let answers = {}, history = [], current = 'role', example = null;

  const body = h('div.w-aa-body');
  const exRow = h('div.w-aa-examples',
    h('span.small.muted', 'Beispielfall durchspielen:'),
    EXAMPLES.map((ex) => h('button.btn.btn-sm', { type: 'button', onclick: () => startExample(ex) }, ex.label)),
    h('button.btn.btn-sm.btn-ghost', { type: 'button', onclick: () => reset() }, '↻ Eigener Fall'));

  fill(el, 
    widgetHead('KI-Verordnung: Welche Risikoklasse?', 'Beantworte die Fragen Schritt für Schritt – der Entscheidungsbaum folgt der Prüfreihenfolge der EU-KI-Verordnung: Verbote → Hochrisiko → Transparenz → minimales Risiko. Oder spiel einen der vier Beispielfälle durch.', 'shield'),
    exRow,
    body,
    h('p.notice.notice-warn.small', h('b', 'Keine Rechtsberatung: '), 'Dieser Check ist eine vereinfachte Lernhilfe. Für echte Einstufungen den Verordnungstext, Leitlinien der EU-Kommission und ggf. juristische Beratung heranziehen. ', h('a', { href: EURLEX, target: '_blank', rel: 'noopener noreferrer' }, 'VO (EU) 2024/1689 auf EUR-Lex')),
  );

  function reset() { answers = {}; history = []; current = 'role'; example = null; render(); }
  function startExample(ex) {
    example = ex; answers = JSON.parse(JSON.stringify(ex.answers)); history = []; current = 'role'; render();
    body.querySelector('.w-aa-q')?.focus();
  }

  function stepView(step) {
    const multi = step.type === 'multi';
    const name = uid('aa');
    const val = answers[step.id];
    const sel = new Set(multi ? val || [] : val ? [val] : []);
    const noneChecked = multi && Array.isArray(val) && val.length === 0;
    const opts = step.options.map((o) => {
      const input = h('input', { type: multi ? 'checkbox' : 'radio', name, value: o.id });
      input.checked = sel.has(o.id);
      return h('label.w-aa-opt', input, h('span', h('span', o.label), o.detail ? h('span.small.muted.w-aa-detail', o.detail) : null, o.ref ? h('span.small.muted.w-aa-detail', o.ref) : null));
    });
    let noneInput = null;
    if (multi) {
      noneInput = h('input', { type: 'checkbox', name: name + '-none', value: '__none' });
      noneInput.checked = noneChecked;
      opts.push(h('label.w-aa-opt.w-aa-none', noneInput, h('span', step.none)));
    }
    const nextBtn = h('button.btn.btn-primary', { type: 'submit' }, 'Weiter →');
    const form = h('form.w-aa-form', {
      onsubmit: (e) => {
        e.preventDefault();
        const checked = [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((i) => i.value);
        if (multi) {
          if (!checked.length && !noneInput.checked) { warn.textContent = 'Bitte wähle mindestens eine Option oder „' + step.none + '“.'; return; }
          answers[step.id] = checked;
        } else {
          if (!checked.length) { warn.textContent = 'Bitte wähle eine Antwort.'; return; }
          answers[step.id] = checked[0];
        }
        history.push(current);
        current = nextStep(current, answers);
        render();
        body.querySelector('.w-aa-q, .w-aa-result h4')?.focus();
      },
      onchange: (e) => {
        warn.textContent = '';
        if (!multi) return;
        if (e.target === noneInput && noneInput.checked) form.querySelectorAll(`input[name="${name}"]`).forEach((i) => { i.checked = false; });
        else if (e.target.name === name && e.target.checked) noneInput.checked = false;
      },
    });
    const warn = h('p.w-aa-warn.small', { role: 'alert' });
    const total = STEPS.length;
    const idx = STEPS.findIndex((s) => s.id === step.id) + 1;
    fill(form, 
      h('fieldset', h('legend.w-aa-q', { tabindex: '-1' }, step.q), h('p.small.muted', step.help), h('div.w-aa-opts', opts)),
      example?.notes?.[step.id] ? h('p.notice.small', h('b', `Im Beispiel „${example.label}“: `), example.notes[step.id]) : null,
      warn,
      h('div.row',
        history.length ? h('button.btn', { type: 'button', onclick: back }, '← Zurück') : null,
        nextBtn,
        h('span.spacer'),
        h('span.small.muted', `Frage ${idx} von max. ${total}`)),
    );
    return form;
  }

  function back() {
    if (!history.length) return;
    current = history.pop();
    render();
    body.querySelector('.w-aa-q')?.focus();
  }

  function resultView() {
    const r = classify(answers);
    const info = CLASS_INFO[r.cls];
    const role = answers.role === 'anbieter' ? 'Anbieter' : 'Betreiber';
    const ul = (items) => h('ul', items.map((x) => h('li', x)));
    const parts = [];
    if (r.cls === 'verboten') {
      const hits = (answers.art5 || []).map((id) => ART5.find((x) => x.id === id));
      parts.push(h('p', 'Das Vorhaben fällt unter eine verbotene Praxis. Ein solches KI-System darf in der EU weder in Verkehr gebracht noch in Betrieb genommen oder verwendet werden.'),
        ul(hits.map((x) => `${x.label} (${x.ref})`)),
        h('p.small', 'Verstöße können mit Geldbußen von bis zu 35 Mio. € oder 7 % des weltweiten Jahresumsatzes geahndet werden (Art. 99). Empfehlung: Vorhaben stoppen und mit Rechtsabteilung/Datenschutz prüfen.'));
    } else {
      if (r.cls === 'hoch') {
        parts.push(h('p', `Grundlage: ${r.hr}.`), h('h4', `Pflichten als ${role}`), ul(answers.role === 'anbieter' ? PROVIDER_HR : DEPLOYER_HR));
        if (answers.role !== 'anbieter') parts.push(h('p.small.muted', 'Achtung: Wer ein Hochrisiko-System unter eigenem Namen anbietet, wesentlich verändert oder seine Zweckbestimmung ändert, wird selbst zum Anbieter (Art. 25).'));
      }
      if (r.exception) {
        parts.push(h('p.notice.small', `Der Einsatzbereich (${r.exception}) ist in Anhang III genannt, aber eine Ausnahme nach Art. 6 Abs. 3 greift – das System gilt daher nicht als hochriskant. Der Anbieter muss diese Bewertung dokumentieren (Art. 6 Abs. 4) und das System registrieren (Art. 49 Abs. 2). Prüfe die Ausnahme sorgfältig – im Zweifel ist es Hochrisiko.`));
      }
      if (r.transp.length) parts.push(h('h4', 'Transparenzpflichten (Art. 50)'), ul(r.transp.map((x) => x.duty)));
      if (r.cls === 'minimal') parts.push(h('p', 'Aus der KI-Verordnung ergeben sich keine besonderen Pflichten für dieses System. Freiwillige Verhaltenskodizes sind möglich (Art. 95). Andere Gesetze – z. B. DSGVO, Urheberrecht, Arbeitsrecht – gelten selbstverständlich weiter.'));
    }
    if (r.gpai) parts.push(h('h4', 'GPAI-Modell (Art. 53 ff.)'), ul(['Technische Dokumentation des Modells', 'Informationen und Dokumentation für nachgelagerte Anbieter', 'Strategie zur Einhaltung des EU-Urheberrechts', 'Veröffentlichte Zusammenfassung der Trainingsinhalte', 'Bei systemischem Risiko zusätzlich: Modellbewertung, Risikominderung, Vorfallmeldung, Cybersicherheit (Art. 55)']));
    else if (r.cls !== 'verboten') parts.push(h('p.small.muted', 'Hinweis GPAI: Nutzt du ein Basismodell wie ein großes Sprachmodell per API, treffen die GPAI-Pflichten (Art. 53 ff.) den Modellanbieter. Du bleibst für dein darauf aufbauendes System verantwortlich.'));
    parts.push(h('div.w-aa-art4', h('b', 'Gilt immer – Art. 4 KI-Kompetenz: '), 'Anbieter und Betreiber müssen Maßnahmen ergreifen, damit ihr Personal und andere Personen, die in ihrem Auftrag KI-Systeme nutzen, über ausreichende KI-Kompetenz verfügen – unabhängig von der Risikoklasse.'));

    const path = history.map((sid) => {
      const st = STEPS.find((s) => s.id === sid);
      const v = answers[sid];
      const label = Array.isArray(v) ? (v.length ? v.map((id) => st.options.find((o) => o.id === id)?.label.split(':')[0].split(' (')[0]).join('; ') : st.none) : st.options.find((o) => o.id === v)?.label;
      return h('li', h('span.muted', st.q), ' → ', h('b', label || '–'));
    });

    return h('div.w-aa-result',
      h(`div.w-aa-badge.${info.cls}`, h('span', { 'aria-hidden': 'true' }, info.icon), h('h4', { tabindex: '-1' }, info.title)),
      example ? h('p.small', h('b', `Beispiel „${example.label}“: `), example.intro) : null,
      parts,
      h('details.w-details', h('summary', 'Dein Entscheidungspfad'), h('ol.small', path)),
      timeline(),
      h('div.row', h('button.btn', { type: 'button', onclick: back }, '← Zurück'), h('button.btn.btn-primary', { type: 'button', onclick: reset }, '↻ Neuen Fall prüfen')),
    );
  }

  function timeline() {
    return h('details.w-details',
      h('summary', 'Zeitplan der Pflichten (Stand: Oktober 2026)'),
      h('ul.small',
        h('li', h('b', 'seit 02.02.2025: '), 'Verbote (Art. 5) und KI-Kompetenz (Art. 4)'),
        h('li', h('b', 'seit 02.08.2025: '), 'Pflichten für GPAI-Modelle'),
        h('li', h('b', 'seit 02.08.2026: '), 'Transparenzpflichten nach Art. 50 (Übergangsfrist für die Kennzeichnung bei bereits zuvor angebotenen Systemen bis 02.12.2026)'),
        h('li', h('b', '02.12.2026: '), 'zusätzliche Verbote (nicht einvernehmliche intime Deepfakes, Missbrauchsdarstellungen)'),
        h('li', h('b', '02.12.2027: '), 'Hochrisiko-Pflichten für Anhang-III-Systeme'),
        h('li', h('b', '02.08.2028: '), 'Hochrisiko-Pflichten für Anhang-I-Produkte')),
      h('p.small.muted', 'Die Hochrisiko-Fristen wurden durch den „Digital Omnibus“ – ', h('a', { href: OMNIBUS, target: '_blank', rel: 'noopener noreferrer' }, 'VO (EU) 2026/1744'), ' (in Kraft seit 27.07.2026) – verschoben. Prüfe vor Entscheidungen den aktuellen konsolidierten Text auf ', h('a', { href: EURLEX, target: '_blank', rel: 'noopener noreferrer' }, 'EUR-Lex'), '.'));
  }

  function render() {
    if (current === 'result') {
      fill(body, resultView());
      c.award(10, 'Widget: KI-Verordnung Risikoklasse geprüft');
    } else {
      fill(body, 
        example ? h('p.w-aa-exintro.small', h('span.chip.chip-primary', 'Beispiel'), ' ', h('b', example.label + ': '), example.intro, h('span.muted', ' Die Antworten sind vorausgefüllt – klicke dich durch.')) : null,
        stepView(STEPS.find((s) => s.id === current)));
    }
  }

  render();
  return () => {};
}
