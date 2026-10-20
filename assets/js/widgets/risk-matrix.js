// Widget: 5×5-Risikomatrix für KI-Risiken mit Gegenmaßnahmen (Handout §7).
import { h } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, uid, fill } from './_shared.js';

const P_LABELS = ['sehr selten', 'selten', 'möglich', 'wahrscheinlich', 'fast sicher'];
const S_LABELS = ['gering', 'spürbar', 'erheblich', 'schwer', 'existenziell'];

const RISKS = [
  {
    name: 'Halluzination im Kundenservice', cat: 'Technisch',
    desc: 'Der KI-Assistent erfindet Fakten, z. B. falsche Preise, Fristen oder Garantiezusagen.',
    m: {
      tech: ['RAG mit geprüfter Wissensbasis und Quellenangabe', 'Antwort-Guardrails (keine Preis- oder Rechtszusagen)', 'Automatisierte Tests mit Evaluations-Fragen'],
      org: ['Human-in-the-loop bei Zusagen und Kulanz', 'Einfache Eskalation an Mitarbeitende', 'Regelmäßige Stichproben der Antworten'],
      legal: ['KI-Hinweis für Nutzer (Transparenz, Art. 50 KI-VO)', 'Haftung und AGB prüfen', 'Verbindliche Aussagen nur durch Menschen'],
    },
  },
  {
    name: 'Datenleck durch Schatten-KI', cat: 'Organisatorisch',
    desc: 'Mitarbeitende kopieren Kundendaten oder Interna in private, nicht freigegebene KI-Tools.',
    m: {
      tech: ['Freigegebene Unternehmens-KI mit SSO bereitstellen', 'Data-Loss-Prevention und Zugriffsrechte', 'Logging der Nutzung'],
      org: ['KI-Richtlinie: was darf in welches Tool?', 'Schulungen zur KI-Kompetenz (Art. 4 KI-VO)', 'Positivliste erlaubter Tools'],
      legal: ['Auftragsverarbeitungsvertrag (Art. 28 DSGVO)', 'Datenklassifizierung', 'Drittlandübermittlung prüfen'],
    },
  },
  {
    name: 'Bias im Recruiting', cat: 'Rechtlich/Ethisch',
    desc: 'Ein Screening-Modell benachteiligt systematisch bestimmte Gruppen, weil es aus historischen Entscheidungen gelernt hat.',
    m: {
      tech: ['Fairness-Audits und Bias-Metriken je Gruppe', 'Repräsentative, geprüfte Trainingsdaten', 'Erklärbarkeit der Empfehlungen'],
      org: ['Menschliche Endentscheidung', 'Betriebsrat früh einbinden', 'Diverses Prüfteam'],
      legal: ['Hochrisiko nach KI-VO (Anhang III) – Betreiberpflichten (Art. 26)', 'AGG-Konformität', 'DSGVO: Art. 22, Datenschutz-Folgenabschätzung'],
    },
  },
  {
    name: 'Modell-Drift', cat: 'Technisch',
    desc: 'Die Datenlage ändert sich (neue Produkte, anderes Kundenverhalten) – die Modellqualität sinkt schleichend.',
    m: {
      tech: ['Monitoring von Daten- und Performance-Drift', 'Automatisierte Datenchecks', 'Retraining-Pipeline (MLOps) mit Versionierung'],
      org: ['Klare Modellverantwortung (Model Owner)', 'Feste Review-Zyklen', 'Feedback-Kanal für Fachbereich'],
      legal: ['Dokumentation für Nachweispflichten', 'Qualitätskriterien in Verträgen mit Dienstleistern'],
    },
  },
  {
    name: 'Prompt Injection', cat: 'Technisch',
    desc: 'Versteckte Anweisungen in E-Mails, Webseiten oder Dokumenten bringen einen KI-Agenten dazu, Daten preiszugeben oder Aktionen auszuführen.',
    m: {
      tech: ['Minimale Rechte für Tools (Least Privilege)', 'Eingaben/Ausgaben filtern, Anweisungen und Daten trennen', 'Red-Teaming, OWASP Top 10 für LLM-Anwendungen'],
      org: ['Freigabe vor kritischen Aktionen (Human-in-the-loop)', 'Security-Awareness', 'Incident-Prozess'],
      legal: ['Informationssicherheits-Vorgaben (z. B. ISO/IEC 27001, NIS2 wo anwendbar)', 'Haftung mit Anbietern regeln'],
    },
  },
  {
    name: 'Anbieterausfall / Lock-in', cat: 'Extern',
    desc: 'Der KI-Anbieter fällt aus, ändert Preise oder Modelle – und ein Wechsel ist teuer.',
    m: {
      tech: ['Abstraktionsschicht für mehrere Modellanbieter', 'Open-Weight-Alternative testen', 'Prompts, Daten und Workflows exportierbar halten'],
      org: ['Exit-Strategie und Backup-Provider', 'Szenario-Analysen', 'Kosten-Monitoring'],
      legal: ['SLA, Kündigungs- und Datenportabilitätsklauseln', 'EU Data Act: Regeln zum Wechsel von Cloud-Anbietern'],
    },
  },
];

export function zone(score) {
  if (score >= 15) return { id: 'crit', label: 'kritisch', advice: 'Nicht ohne wirksame Maßnahmen starten bzw. sofort handeln; Management-Entscheidung nötig.' };
  if (score >= 10) return { id: 'high', label: 'hoch', advice: 'Maßnahmen vor dem Go-live umsetzen und Verantwortliche benennen.' };
  if (score >= 5) return { id: 'mid', label: 'mittel', advice: 'Maßnahmen planen und Risiko regelmäßig überwachen.' };
  return { id: 'low', label: 'niedrig', advice: 'Akzeptieren und beobachten.' };
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'risk-matrix');
  setupRoot(el, 'risk-matrix');
  let risks = RISKS.map((r) => ({ ...r, id: uid('rk'), p: null, s: null }));
  let sel = risks[0].id;

  const grid = h('div.w-rm-grid', { role: 'group', 'aria-label': 'Risikomatrix: Zeilen = Schadensausmaß, Spalten = Eintrittswahrscheinlichkeit' });
  const list = h('div.w-rm-list', { role: 'listbox', 'aria-label': 'Risiken' });
  const detail = h('div.w-rm-detail', { 'aria-live': 'polite' });
  const prog = h('span.small.muted');

  const addName = h('input.input', { type: 'text', placeholder: 'z. B. Urheberrechtsverletzung durch KI-Bilder', 'aria-label': 'Name des eigenen Risikos', maxlength: 80 });
  const addCat = h('select.select', { 'aria-label': 'Kategorie' }, ['Technisch', 'Organisatorisch', 'Rechtlich/Ethisch', 'Extern'].map((x) => h('option', { value: x }, x)));
  const addMeasure = h('input.input', { type: 'text', placeholder: 'Deine Gegenmaßnahme (optional)', 'aria-label': 'Eigene Gegenmaßnahme', maxlength: 160 });
  const addForm = h('form.w-rm-add', {
    onsubmit: (e) => {
      e.preventDefault();
      const name = addName.value.trim();
      if (!name) { addName.focus(); return; }
      const r = { id: uid('rk'), name, cat: addCat.value, desc: 'Eigenes Risiko.', own: true, p: 3, s: 3, m: { tech: [], org: [], legal: [] }, ownMeasure: addMeasure.value.trim() };
      risks.push(r); sel = r.id; addName.value = ''; addMeasure.value = '';
      render();
    },
  }, addName, addCat, addMeasure, h('button.btn.btn-primary', { type: 'submit' }, '+ Risiko hinzufügen'));

  fill(el, 
    widgetHead('KI-Risikomatrix', 'Wähle links ein Risiko und platziere es per Klick (oder Enter) in der Matrix: Spalte = Eintrittswahrscheinlichkeit, Zeile = Schadensausmaß. Du bekommst die Risikozone und passende Gegenmaßnahmen.', 'shield'),
    h('div.w-rm-layout',
      h('div.w-rm-side', h('div.row', h('b', 'Risiken'), h('span.spacer'), prog), list),
      h('div.w-rm-main',
        h('div.w-rm-matrix',
          h('div.w-rm-yaxis', h('span', 'Schadensausmaß →')),
          grid,
          h('div.w-rm-xaxis', 'Eintrittswahrscheinlichkeit →')),
        h('div.w-rm-legend.small', ['low', 'mid', 'high', 'crit'].map((z, i) => h('span', h(`i.w-rm-sw.z-${z}`), ['niedrig (1–4)', 'mittel (5–9)', 'hoch (10–14)', 'kritisch (15–25)'][i]))))),
    detail,
    h('details.w-details', h('summary', 'Eigenes Risiko hinzufügen'), addForm),
  );

  function place(p, s) {
    const r = risks.find((x) => x.id === sel);
    if (!r) return;
    r.p = p; r.s = s;
    render();
    grid.querySelector(`[data-p="${p}"][data-s="${s}"]`)?.focus();
    const placed = risks.filter((x) => !x.own && x.p).length;
    if (placed === RISKS.length && c.award(10, 'Widget: KI-Risikomatrix ausgefüllt')) c.toast('Alle Beispielrisiken bewertet – stark!', { icon: '🛡️' });
  }

  function renderGrid() {
    const cells = [];
    for (let s = 5; s >= 1; s--) {
      cells.push(h('div.w-rm-rowlabel', h('b', s), h('span', S_LABELS[s - 1])));
      for (let p = 1; p <= 5; p++) {
        const z = zone(p * s);
        const here = risks.filter((r) => r.p === p && r.s === s);
        cells.push(h(`button.w-rm-cell.z-${z.id}`, {
          type: 'button', dataset: { p, s },
          'aria-label': `Wahrscheinlichkeit ${p} (${P_LABELS[p - 1]}), Schaden ${s} (${S_LABELS[s - 1]}), Score ${p * s}, ${z.label}${here.length ? '. Enthält: ' + here.map((r) => r.name).join(', ') : ''}`,
          onclick: () => place(p, s),
        }, h('span.w-rm-score', p * s), h('span.w-rm-pins', here.map((r) => h(`span.w-rm-pin${r.id === sel ? '.is-sel' : ''}`, { title: r.name }, risks.indexOf(r) + 1)))));
      }
    }
    cells.push(h('div'));
    for (let p = 1; p <= 5; p++) cells.push(h('div.w-rm-collabel', h('b', p), h('span', P_LABELS[p - 1])));
    fill(grid, ...cells);
  }

  function renderList() {
    fill(list, ...risks.map((r, i) => {
      const z = r.p ? zone(r.p * r.s) : null;
      return h(`button.w-rm-item${r.id === sel ? '.is-sel' : ''}`, {
        type: 'button', role: 'option', 'aria-selected': r.id === sel ? 'true' : 'false',
        onclick: () => { sel = r.id; render(); },
      }, h('span.w-rm-num', i + 1), h('span.w-rm-iname', r.name, h('span.small.muted', ` · ${r.cat}`)), z ? h(`span.w-rm-tag.z-${z.id}`, `${r.p * r.s}`) : h('span.w-rm-tag', '–'));
    }));
    prog.textContent = `${risks.filter((r) => r.p).length}/${risks.length} platziert`;
  }

  function renderDetail() {
    const r = risks.find((x) => x.id === sel);
    if (!r) { fill(detail); return; }
    const z = r.p ? zone(r.p * r.s) : null;
    const col = (title, items) => h('div.w-rm-mcol', h('h4', title), items.length ? h('ul', items.map((x) => h('li', x))) : h('p.small.muted', '–'));
    const measures = r.own
      ? [h('div.w-rm-mcols', col('Deine Gegenmaßnahme', r.ownMeasure ? [r.ownMeasure] : []), col('Denk-Anstoß', ['Technisch: Was lässt sich automatisch prüfen oder begrenzen?', 'Organisatorisch: Wer ist verantwortlich, wer wird geschult?', 'Rechtlich: Welche Verträge, Gesetze, Dokumentationen?']))]
      : [h('div.w-rm-mcols', col('Technisch', r.m.tech), col('Organisatorisch', r.m.org), col('Rechtlich', r.m.legal))];
    fill(detail, 
      h('div.w-rm-dhead', h('b', r.name), h('span.chip', r.cat), z ? h(`span.w-rm-tag.z-${z.id}`, `Score ${r.p * r.s} · ${z.label}`) : h('span.chip.chip-warn', 'noch nicht platziert')),
      h('p.small', r.desc),
      z ? h('p.small', h('b', 'Empfehlung: '), z.advice, ` (W ${r.p} × S ${r.s})`) : h('p.small.muted', 'Klicke in die Matrix, um dieses Risiko einzuschätzen.'),
      ...measures,
      r.own ? h('button.btn.btn-sm', { type: 'button', onclick: () => { risks = risks.filter((x) => x.id !== r.id); sel = risks[0]?.id; render(); } }, '✕ Eigenes Risiko entfernen') : null,
    );
  }

  function render() { renderGrid(); renderList(); renderDetail(); }
  render();
  return () => {};
}
