// Widget: KI-Projektlebenszyklus in 4 Phasen nach Skript Kap. 4.1 als animierte Pipeline mit Rückkopplung.
import { h, pixelIcon } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, timers, rovingKeys, prefersReducedMotion, uid, fill } from './_shared.js';

export const PHASES = [
  {
    title: 'Ideenfindung', short: 'Idee',
    goal: 'Das Geschäftsproblem eingrenzen und prüfen, ob KI es mit den vorhandenen Daten wirklich lösen kann (Skript 4.1, strukturierte Planung).',
    activities: ['Geschäftsproblem mit klarem Umfang und Erfolgskriterien definieren', 'Datenverfügbarkeit und -qualität prüfen', 'Technische Machbarkeit bewerten: Ist KI hier überhaupt geeignet?', 'ROI grob schätzen (Kosten und Nutzen)', 'Stakeholder abstimmen, Sponsor und Ressourcen sichern; EU-AI-Act- und DSGVO-Ersteinschätzung'],
    roles: ['Projektleitung / Product Owner', 'Fachbereich (Domain-Expert)', 'Management-Sponsor', 'Datenschutz / Compliance'],
    pitfalls: ['„Technologie sucht Problem“ statt Problem sucht Lösung', 'Keine messbaren Erfolgskriterien – Erfolg später nicht belegbar', 'Datenlage nicht geprüft – das Projekt scheitert erst in der Entwicklung'],
    artifact: 'Projektsteckbrief / Business Case mit Erfolgskriterien und KPI-Baseline',
  },
  {
    title: 'Entwicklung', short: 'Entwicklung',
    goal: 'In kurzen, agilen Lernzyklen herausfinden, welcher Ansatz das Problem zuverlässig löst.',
    activities: ['Daten aufbereiten (Bereinigung, Labeling, Train/Test-Split)', 'Hypothesen testen, schnelle Prototypen und Modellexperimente (z. B. 2-Wochen-Sprints)', 'Make-or-buy: Standard-API, RAG, Fine-Tuning oder eigenes Modell', 'Gegen eine einfache Baseline evaluieren (Precision, Recall, F1), Fairness prüfen', 'Regelmäßige Demos mit dem Fachbereich'],
    roles: ['Data Scientist', 'ML / Data Engineer', 'Fachbereich', 'Product Owner'],
    pitfalls: ['Unscharfe „Definition of Done“ bei Experimenten', '„Gescheiterte“ Experimente werden als Versagen statt als Lernchance gesehen', 'Overfitting: glänzt im Labor, versagt im Alltag'],
    artifact: 'Evaluationsbericht, versioniertes Modell / Prompt-Set, Pilotentscheidung',
  },
  {
    title: 'Bereitstellung', short: 'Bereitstellung',
    goal: 'Das experimentelle Modell produktionsreif machen und in die echten Prozesse und Systeme integrieren – wieder stärker strukturiert.',
    activities: ['Integration in ERP, CRM, Ticketsystem (APIs), Soll-Prozess inkl. Human-in-the-loop', 'Sicherheit, Rechte (IAM), Logging; Lasttests', 'Pilot mit Vorher-nachher-Messung, Go/No-Go nach vorab festgelegten Kriterien', 'Schulung, Kommunikation und Support für den Roll-out'],
    roles: ['IT-Betrieb / MLOps', 'IT-Sicherheit', 'Change-Verantwortliche', 'Pilotnutzer'],
    pitfalls: ['Insellösung ohne Anbindung an bestehende Systeme', '„Pilotitis“: Piloten ohne Erfolgskriterien, die nie enden', 'Akzeptanz unterschätzt – Tool wird nicht genutzt'],
    artifact: 'Integrations- und Betriebskonzept, Pilotbericht, Roll-out-Plan',
  },
  {
    title: 'Betrieb', short: 'Betrieb',
    goal: 'Qualität und Nutzen dauerhaft sichern und das System kontinuierlich verbessern.',
    activities: ['Monitoring auf drei Ebenen: Technik, Prozess, Business', 'Daten- und Konzeptdrift erkennen, Nachtraining planen', 'Feedback und Incidents auswerten, A/B-Tests', 'Erkenntnisse fließen zurück in die nächste Ideenfindung (Kreislauf)'],
    roles: ['MLOps / IT-Betrieb', 'Data Scientist', 'Product Owner', 'Compliance'],
    pitfalls: ['„Fire and forget“: niemand fühlt sich nach dem Go-live verantwortlich', 'Drift bleibt unbemerkt, Qualität sinkt schleichend', 'Kein Budget für den Betrieb eingeplant'],
    artifact: 'Monitoring-Dashboard und Verbesserungs-Backlog (→ Input für die nächste Runde)',
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
    widgetHead('KI-Projektlebenszyklus: 4 Phasen (Skript 4.1)', 'Klicke auf eine Phase (oder nutze die Pfeiltasten), um Ziel, Aktivitäten, Rollen, Fallstricke und Ergebnis zu sehen. „Durchlauf“ schickt das Datenpaket einmal durch die Pipeline – inklusive Rückkopplung.', 'flow'),
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
    progress.textContent = `${visited.size}/${PHASES.length} Phasen angesehen`;
    movePacket();
    if (visited.size === PHASES.length && c.award(10, 'Widget: KI-Projektlebenszyklus erkundet')) c.toast(`Alle ${PHASES.length} Phasen erkundet!`, { icon: '🧭' });
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
