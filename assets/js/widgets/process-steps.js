// Widget: Vorgehensmodell in 7 Phasen als animierte Pipeline (Skript Kap. 4.1).
import { h, pixelIcon } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, timers, rovingKeys, prefersReducedMotion, uid, fill } from './_shared.js';

export const PHASES = [
  {
    title: 'Planung & Zielsetzung', short: 'Planung',
    goal: 'Das Geschäftsproblem und den messbaren Nutzen klären – bevor über Technik gesprochen wird.',
    activities: ['Use Case schärfen und priorisieren (Nutzen × Machbarkeit)', 'SMART-Ziele und KPIs mit Ausgangswert (Baseline) festlegen', 'Business Case und Budget', 'Stakeholder-Analyse, Sponsor gewinnen', 'Erste Daten- und Risiko-Einschätzung inkl. Einstufung nach EU AI Act und DSGVO'],
    roles: ['Projektleitung', 'Domain-Expert (Fachbereich)', 'Management-Sponsor', 'Compliance / Datenschutz'],
    pitfalls: ['„Technologie sucht Problem“ statt Problem sucht Lösung', 'Keine messbaren Ziele – Erfolg später nicht belegbar', 'Datenschutz und Betriebsrat erst kurz vor dem Go-live einbinden'],
    artifact: 'Projektsteckbrief / Business Case mit KPI-Baseline',
  },
  {
    title: 'Datensammlung & \u2011vorbereitung', short: 'Daten',
    goal: 'Geeignete, rechtlich nutzbare Daten in ausreichender Qualität bereitstellen.',
    activities: ['Datenquellen inventarisieren, Zugriffe und Ownership klären', 'Bereinigen: Dubletten, Lücken, Ausreißer, Formate', 'Labeln (bei überwachtem Lernen), Train/Test-Split', 'Anonymisieren bzw. pseudonymisieren', 'Datenqualität messen (Vollständigkeit, Genauigkeit, Konsistenz, Aktualität, Relevanz)'],
    roles: ['Data Engineer', 'Data Scientist', 'Domain-Expert', 'Datenschutzbeauftragte/r'],
    pitfalls: ['Aufwand unterschätzt – oft der größte Arbeitsblock im Projekt', 'Verzerrungen (Bias) aus historischen Daten übernommen', 'Fehlende Rechtsgrundlage für die Nutzung personenbezogener Daten'],
    artifact: 'Datenkatalog / Datenblatt, bereinigter Datensatz, Datenqualitätsbericht',
  },
  {
    title: 'Modellauswahl & Training', short: 'Modell',
    goal: 'Einen Lösungsansatz finden, der die Ziel-KPIs zuverlässig erreicht.',
    activities: ['Make-or-buy: Standard-API, RAG, Fine-Tuning oder eigenes Modell', 'Einfache Baseline als Vergleich definieren', 'Trainieren bzw. Prompts/Retrieval entwickeln', 'Evaluieren mit Testdaten (z. B. Precision, Recall, F1)', 'Erklärbarkeit und Fairness prüfen'],
    roles: ['Data Scientist', 'ML Engineer', 'Domain-Expert'],
    pitfalls: ['Overfitting: glänzt im Labor, versagt im Alltag', 'Nur Accuracy betrachten (irreführend bei seltenen Fällen)', 'Kein Vergleich mit einer einfachen Regel-Lösung'],
    artifact: 'Evaluationsbericht und versioniertes Modell (Model Card)',
  },
  {
    title: 'Integration in Prozesse', short: 'Integration',
    goal: 'Das Modell dort nutzbar machen, wo die Arbeit passiert.',
    activities: ['Schnittstellen zu ERP, CRM, Ticketsystem (API)', 'Soll-Prozess inkl. Human-in-the-loop entwerfen', 'Rechte & Zugriffe (IAM), Logging, Sicherheit', 'Benutzeroberfläche und Fehlerfälle gestalten'],
    roles: ['IT-Ops / Entwicklung', 'Prozessverantwortliche', 'Fachbereich', 'IT-Sicherheit'],
    pitfalls: ['Insellösung ohne Anbindung an bestehende Systeme', 'Medienbrüche: Ergebnisse werden manuell abgetippt', 'Sicherheitsfragen (z. B. Prompt Injection, Datenabfluss) ignoriert'],
    artifact: 'Integrationskonzept, Soll-Prozess, Schnittstellen-Dokumentation',
  },
  {
    title: 'Pilot- / Testphase', short: 'Pilot',
    goal: 'Den Nutzen unter realen Bedingungen und in begrenztem Rahmen nachweisen.',
    activities: ['Pilotgruppe auswählen und schulen', 'Vorher-nachher-Messung oder A/B-Test', 'Nutzer-Feedback systematisch sammeln', 'Go/No-Go anhand vorab festgelegter Kriterien'],
    roles: ['Projektleitung', 'Pilotnutzer', 'Data Scientist', 'Change-Verantwortliche'],
    pitfalls: ['„Pilotitis“: Piloten ohne Erfolgskriterien, die nie enden', 'Zu kleine oder nicht repräsentative Testgruppe', 'Feedback wird gesammelt, aber nicht umgesetzt'],
    artifact: 'Pilotbericht mit KPI-Review und Go/No-Go-Entscheidung',
  },
  {
    title: 'Roll-out & Skalierung', short: 'Roll-out',
    goal: 'Die Lösung stabil und akzeptiert in der Breite einführen.',
    activities: ['Schulungen und Kommunikation (Change-Management)', 'Betriebs- und Supportkonzept', 'MLOps: CI/CD, Modell-Versionierung, Rollback', 'Lasttests, Kosten bei Skalierung prüfen (Lizenzen, Tokens)'],
    roles: ['IT-Ops / MLOps', 'Change-Management / HR', 'Führungskräfte', 'Support'],
    pitfalls: ['Akzeptanz unterschätzt – Tool wird nicht genutzt', 'Kein Support- und Eskalationsweg', 'Kosten steigen mit der Nutzung unerwartet stark'],
    artifact: 'Roll-out-Plan, Schulungsunterlagen, Betriebshandbuch',
  },
  {
    title: 'Monitoring & Optimierung', short: 'Monitoring',
    goal: 'Qualität und Nutzen dauerhaft sichern und verbessern.',
    activities: ['KPI-Dashboards: technisch, Prozess, Business', 'Daten- und Modell-Drift erkennen, Retraining', 'Nutzerfeedback und Incidents auswerten', 'Regelmäßige Reviews, Erkenntnisse fließen in die nächste Planungsrunde'],
    roles: ['MLOps / IT-Ops', 'Data Scientist', 'Product Owner', 'Compliance'],
    pitfalls: ['„Fire and forget“: niemand fühlt sich nach dem Go-live verantwortlich', 'Drift bleibt unbemerkt, Qualität sinkt schleichend', 'Kein Budget für den Betrieb eingeplant'],
    artifact: 'Monitoring-Dashboard und Optimierungs-Backlog (→ Input für die nächste Planung)',
  },
];

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'process-steps');
  setupRoot(el, 'process-steps');
  const t = timers();
  let active = 0, playing = false;
  const visited = new Set([0]);

  const base = uid('ps');
  const packet = h('span.w-ps-packet', { 'aria-hidden': 'true' }, pixelIcon('box', 22));
  const nodes = PHASES.map((p, i) => h('button.w-ps-node', {
    type: 'button', role: 'tab', 'aria-selected': 'false', tabindex: '-1', id: `${base}-tab-${i}`,
    onclick: () => { stop(); select(i); },
  }, h('span.w-ps-num', i + 1), h('span.w-ps-label', p.title)));
  const track = h('div.w-ps-track', { role: 'tablist', 'aria-label': 'Phasen des Vorgehensmodells' }, nodes, packet);
  const feedback = h('div.w-ps-feedback', { 'aria-hidden': 'true' }, h('span.w-ps-fb-line'), h('span.w-ps-fb-text', '↺ Rückkopplung: Erkenntnisse aus Monitoring & Optimierung fließen zurück in Planung & Zielsetzung'));
  const panel = h('div.w-ps-panel', { role: 'tabpanel', 'aria-live': 'polite' });
  const playBtn = h('button.btn.btn-primary.btn-sm', { type: 'button', onclick: () => (playing ? stop() : play()) }, '▶ Durchlauf animieren');
  const progress = h('span.small.muted');

  fill(el, 
    widgetHead('Vorgehensmodell: 7 Phasen eines KI-Projekts', 'Klicke auf eine Phase (oder nutze die Pfeiltasten), um Ziel, Aktivitäten, Rollen, Fallstricke und Ergebnis zu sehen. „Durchlauf“ schickt das Datenpaket einmal durch die Pipeline – inklusive Rückkopplung.', 'flow'),
    h('div.w-ps-wrap', track, feedback),
    h('div.row.w-ps-controls',
      h('button.btn.btn-sm', { type: 'button', 'aria-label': 'Vorherige Phase', onclick: () => { stop(); select((active + PHASES.length - 1) % PHASES.length); } }, '←'),
      h('button.btn.btn-sm', { type: 'button', 'aria-label': 'Nächste Phase', onclick: () => { stop(); select((active + 1) % PHASES.length); } }, '→'),
      playBtn, h('span.spacer'), progress),
    panel,
  );

  const offKeys = rovingKeys(track, '.w-ps-node', { onMove: (_, i) => { stop(); select(i); } });

  function movePacket() {
    const n = nodes[active];
    const tr = track.getBoundingClientRect(), r = n.getBoundingClientRect();
    if (!tr.width) return;
    const vertical = nodes[1] && nodes[1].getBoundingClientRect().top >= nodes[0].getBoundingClientRect().bottom - 1;
    const x = vertical ? r.right - tr.left + 6 : r.left - tr.left + r.width / 2 - 11;
    const y = vertical ? r.top - tr.top + r.height / 2 - 11 : r.top - tr.top - 26;
    packet.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
  }

  function select(i, { focus = false } = {}) {
    active = i;
    visited.add(i);
    nodes.forEach((n, j) => {
      n.classList.toggle('is-active', j === i);
      n.classList.toggle('is-done', visited.has(j) && j !== i);
      n.setAttribute('aria-selected', j === i ? 'true' : 'false');
      n.tabIndex = j === i ? 0 : -1;
    });
    if (focus) nodes[i].focus();
    panel.setAttribute('aria-labelledby', nodes[i].id);
    const p = PHASES[i];
    const list = (title, items, cls) => h(`div.w-ps-box.${cls}`, h('h4', title), h('ul', items.map((x) => h('li', x))));
    fill(panel, 
      h('div.w-ps-panel-head', h('span.w-ps-big', `Phase ${i + 1}`), h('h4', p.title)),
      h('p.w-ps-goal', h('b', 'Ziel: '), p.goal),
      h('div.w-ps-boxes',
        list('Typische Aktivitäten', p.activities, 'is-act'),
        list('Rollen', p.roles, 'is-roles'),
        list('Fallstricke', p.pitfalls, 'is-pit')),
      h('p.w-ps-artifact', h('span.chip.chip-ok', 'Ergebnis-Artefakt'), ' ', p.artifact),
      i === PHASES.length - 1 ? h('p.notice.small', 'KI-Projekte sind nie „fertig“: Monitoring liefert die Grundlage für die nächste Iteration – deshalb der Rückkopplungspfeil zur Planung.') : null,
    );
    progress.textContent = `${visited.size}/7 Phasen angesehen`;
    movePacket();
    if (visited.size === PHASES.length && c.award(10, 'Widget: Vorgehensmodell erkundet')) c.toast('Alle 7 Phasen erkundet!', { icon: '🧭' });
  }

  function stop() {
    playing = false;
    t.clear();
    playBtn.textContent = '▶ Durchlauf animieren';
    feedback.classList.remove('is-pulse');
  }
  function play() {
    playing = true;
    playBtn.textContent = '⏸ Stopp';
    const fast = prefersReducedMotion();
    let i = 0;
    select(0);
    const stepMs = fast ? 2200 : 1500;
    const tick = () => {
      if (!playing) return;
      i++;
      if (i < PHASES.length) { select(i); t.timeout(tick, stepMs); return; }
      feedback.classList.add('is-pulse');
      t.timeout(() => { select(0); t.timeout(() => { feedback.classList.remove('is-pulse'); stop(); }, 1200); }, 900);
    };
    t.timeout(tick, stepMs);
  }

  const ro = new ResizeObserver(() => movePacket());
  ro.observe(track);
  select(0);
  return () => { t.clear(); ro.disconnect(); offKeys(); };
}
