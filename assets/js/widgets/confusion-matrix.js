// Widget: Konfusionsmatrix & Schwellenwert – KI erkennt betrügerische Rechnungen.
import { h, mdEl } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, s, fmtPct, fmtNum, rangeField, fill } from './_shared.js';

const FRAUD = [0.97, 0.93, 0.91, 0.88, 0.84, 0.79, 0.74, 0.68, 0.61, 0.55, 0.42, 0.33];
const LEGIT = [0.81, 0.72, 0.64, 0.58, 0.52, 0.47, 0.44, 0.39, 0.36, 0.31, 0.28, 0.26, 0.23, 0.21, 0.19, 0.17, 0.15, 0.13, 0.12, 0.10, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02];
export const CASES = [
  ...FRAUD.map((score, i) => ({ id: `R-${String(101 + i * 3).padStart(4, '0')}`, score, fraud: true })),
  ...LEGIT.map((score, i) => ({ id: `R-${String(102 + i * 2).padStart(4, '0')}`, score, fraud: false })),
];

export function metrics(t) {
  let tp = 0, fp = 0, fn = 0, tn = 0;
  for (const c of CASES) {
    const pred = c.score >= t;
    if (pred && c.fraud) tp++; else if (pred) fp++; else if (c.fraud) fn++; else tn++;
  }
  const n = CASES.length;
  const precision = tp + fp ? tp / (tp + fp) : NaN;
  const recall = tp + fn ? tp / (tp + fn) : NaN;
  const f1 = precision + recall ? (2 * precision * recall) / (precision + recall) : NaN;
  return { tp, fp, fn, tn, accuracy: (tp + tn) / n, precision, recall, f1: Number.isFinite(f1) ? f1 : NaN };
}

const round2 = (x) => Math.round(x * 100) / 100;
function best(cond, key) {
  let bestVal = -1;
  for (let i = 0; i <= 100; i++) { const m = metrics(i / 100); if (cond(m) && m[key] > bestVal) bestVal = m[key]; }
  return bestVal;
}
const BEST_PREC_AT_FULL_RECALL = best((m) => m.recall === 1, 'precision');
const BEST_RECALL_AT_FULL_PREC = best((m) => m.precision === 1, 'recall');

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'confusion-matrix');
  setupRoot(el, 'confusion-matrix');
  let t = 0.5;
  const solved = { recall: false, precision: false };

  const slider = rangeField({ label: 'Schwellenwert: ab welchem Score wird eine Rechnung als Betrug markiert?', value: t, min: 0, max: 1, step: 0.01, format: (v) => fmtNum(v, 2), onInput: (v) => { t = round2(v); update(); } });
  const plot = h('div.w-cm-plot');
  const matrix = h('div.w-cm-matrix');
  const kpis = h('div.w-cm-kpis', { 'aria-live': 'polite' });
  const challenges = h('div.w-cm-challenges');

  fill(el, 
    widgetHead('Konfusionsmatrix: Betrugserkennung bei Rechnungen', 'Eine KI hat 40 fiktive Eingangsrechnungen mit einem Betrugs-Score (0–1) bewertet. Verschiebe den Schwellenwert und beobachte, wie sich Treffer, Fehlalarme und die Kennzahlen verändern.', 'gauge'),
    slider.el,
    plot,
    h('div.w-cm-layout', matrix, kpis),
    challenges,
    mdEl(`### Precision oder Recall – was ist wichtiger?
- **Precision** (Genauigkeit der Alarme): Wie viele der markierten Rechnungen sind wirklich Betrug? Wichtig, wenn **Fehlalarme teuer** sind – z. B. weil jede Prüfung Zeit kostet oder legitime Lieferanten verärgert werden, wenn ihre Zahlung gestoppt wird.
- **Recall** (Trefferquote): Wie viele der Betrugsfälle findet das System? Wichtig, wenn **übersehene Fälle teuer** sind – z. B. hohe Schadenssummen oder Compliance-Risiken.
- **Accuracy** täuscht bei seltenen Ereignissen: Ein System, das *nie* Alarm schlägt, hätte hier schon 70 % Accuracy – und fände keinen einzigen Betrug.
- **F1** ist das harmonische Mittel aus Precision und Recall – ein Kompromiss, wenn beide zählen.
- In der Praxis legt man den Schwellenwert anhand der **Kosten** fest (Prüfaufwand pro Fehlalarm vs. Schaden pro übersehenem Fall) – und lässt Grenzfälle von Menschen prüfen.`, 'div', 'md w-explain'),
  );

  function renderPlot(m) {
    const W = Math.round(Math.min(900, Math.max(300, plot.clientWidth || 640)));
    const pad = 16;
    const x = (v) => pad + v * (W - 2 * pad);
    const r = W < 520 ? 4.5 : 6;
    const step = 2 * r + 2;
    const lanes = { true: [], false: [] };
    const raw = [...CASES].sort((a, b) => a.score - b.score).map((cs) => {
      const L = lanes[cs.fraud];
      let lane = L.findIndex((lastX) => x(cs.score) - lastX > 2 * r + 1);
      if (lane < 0) { lane = L.length; L.push(0); }
      L[lane] = x(cs.score);
      return { cs, lane };
    });
    const ax = 26 + lanes.true.length * step;
    const H = ax + 12 + lanes.false.length * step + 22;
    const placed = raw.map(({ cs, lane }) => ({ cs, cx: x(cs.score), cy: cs.fraud ? ax - 10 - lane * step : ax + 10 + lane * step }));
    const g = [
      s('rect', { x: x(t), y: 4, width: Math.max(0, x(1) - x(t)), height: H - 26, class: 'w-cm-flagzone' }),
      s('text', { x: x(1) - 4, y: 16, 'text-anchor': 'end', class: 'w-cm-zonelabel' }, 'als Betrug markiert'),
      s('line', { x1: pad, x2: W - pad, y1: ax, y2: ax, class: 'w-cm-axis' }),
      ...[0, 0.25, 0.5, 0.75, 1].map((v) => s('text', { x: x(v), y: H - 6, 'text-anchor': v === 0 ? 'start' : v === 1 ? 'end' : 'middle', class: 'w-cm-tick' }, fmtNum(v, 2))),
      ...placed.map(({ cs, cx, cy }) => {
        const flagged = cs.score >= t;
        const cls = `w-cm-dot ${cs.fraud ? 'is-fraud' : 'is-legit'} ${flagged ? 'is-flagged' : ''}`;
        const title = s('title', {}, `${cs.id}: Score ${fmtNum(cs.score, 2)}, ${cs.fraud ? 'Betrug' : 'legitim'} – ${flagged ? 'markiert' : 'nicht markiert'}`);
        return cs.fraud
          ? s('path', { d: `M${cx} ${cy - r} L${cx + r} ${cy + r - 1} L${cx - r} ${cy + r - 1} Z`, class: cls }, title)
          : s('rect', { x: cx - r + 1, y: cy - r + 1, width: 2 * r - 2, height: 2 * r - 2, class: cls }, title);
      }),
      s('line', { x1: x(t), x2: x(t), y1: 4, y2: H - 22, class: 'w-cm-thresh' }),
    ];
    const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `Score-Achse mit 40 Rechnungen, Schwellenwert ${fmtNum(t, 2)}. ${m.tp + m.fp} Rechnungen markiert.` }, g);
    svg.addEventListener('click', (e) => {
      const rect = svg.getBoundingClientRect();
      const v = Math.min(1, Math.max(0, ((e.clientX - rect.left) / rect.width * W - pad) / (W - 2 * pad)));
      t = round2(v); slider.set(t); update();
    });
    fill(plot, svg, h('div.w-cm-legend.small',
      h('span', h('i.w-cm-sw.is-fraud'), 'Betrug (wahre Klasse, oben)'),
      h('span', h('i.w-cm-sw.is-legit'), 'legitim (wahre Klasse, unten)'),
      h('span.muted', 'Tipp: Klick in die Grafik setzt den Schwellenwert.')));
  }

  function update() {
    const m = metrics(t);
    renderPlot(m);
    const cell = (cls, label, n, sub) => h(`div.w-cm-cell.${cls}`, h('b', n), h('span', label), h('span.small', sub));
    fill(matrix, 
      h('div.w-cm-grid',
        h('div'), h('div.w-cm-head', 'KI: Betrug'), h('div.w-cm-head', 'KI: unauffällig'),
        h('div.w-cm-head.w-cm-rowh', 'Wirklich Betrug'),
        cell('is-tp', 'True Positive', m.tp, 'Betrug erkannt'),
        cell('is-fn', 'False Negative', m.fn, 'Betrug übersehen'),
        h('div.w-cm-head.w-cm-rowh', 'Wirklich legitim'),
        cell('is-fp', 'False Positive', m.fp, 'Fehlalarm'),
        cell('is-tn', 'True Negative', m.tn, 'korrekt durchgelassen')),
    );
    const k = (label, v, formula) => h('div.kpi.w-cm-kpi', h('b', fmtPct(v, 0)), h('span', label), h('span.w-mono.small', formula));
    fill(kpis, 
      k('Accuracy', m.accuracy, `(TP+TN)/alle = ${m.tp + m.tn}/40`),
      k('Precision', m.precision, `TP/(TP+FP) = ${m.tp}/${m.tp + m.fp}`),
      k('Recall', m.recall, `TP/(TP+FN) = ${m.tp}/${m.tp + m.fn}`),
      k('F1-Score', m.f1, '2·P·R/(P+R)'),
    );
    const nowRecall = m.recall === 1 && Math.abs(m.precision - BEST_PREC_AT_FULL_RECALL) < 1e-9;
    const nowPrec = m.precision === 1 && Math.abs(m.recall - BEST_RECALL_AT_FULL_PREC) < 1e-9;
    if (nowRecall && !solved.recall) { solved.recall = true; c.toast('Challenge 1 gelöst: kein Betrug übersehen!', { icon: '🎯', type: 'success' }); }
    if (nowPrec && !solved.precision) { solved.precision = true; c.toast('Challenge 2 gelöst: kein einziger Fehlalarm!', { icon: '🎯', type: 'success' }); }
    if (solved.recall && solved.precision && c.award(10, 'Widget: Konfusionsmatrix-Challenges gelöst')) c.confetti();
    const ch = (done, text) => h(`li${done ? '.is-done' : ''}`, h('span', { 'aria-hidden': 'true' }, done ? '✅' : '⬜'), h('span', text));
    fill(challenges, h('h4', 'Challenges'), h('ul.w-cm-chlist',
      ch(solved.recall, `Finde den höchsten Schwellenwert, bei dem kein Betrugsfall übersehen wird (Recall 100 %). Wie viele Fehlalarme nimmst du dafür in Kauf?${solved.recall ? ` → ${fmtPct(BEST_PREC_AT_FULL_RECALL)} Precision.` : ''}`),
      ch(solved.precision, `Finde den niedrigsten Schwellenwert ohne einen einzigen Fehlalarm (Precision 100 %). Wie viel Betrug rutscht durch?${solved.precision ? ` → nur ${fmtPct(BEST_RECALL_AT_FULL_PREC)} Recall.` : ''}`)));
  }

  let lastW = 0;
  const ro = new ResizeObserver(() => { const w = plot.clientWidth; if (Math.abs(w - lastW) > 4) { lastW = w; renderPlot(metrics(t)); } });
  ro.observe(plot);
  update();
  return () => ro.disconnect();
}
