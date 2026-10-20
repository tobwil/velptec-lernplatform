// Widget: Neuronales Netz (3–4–2) mit animiertem Forward-Pass.
import { h, mdEl } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, cssVar, onThemeChange, rangeField, fmtNum, fmtPct, prefersReducedMotion, timers, fill } from './_shared.js';

const sigmoid = (z) => 1 / (1 + Math.exp(-z));

// Feste Beispielgewichte (Eingaben: Mahnungen, Zahlungsdauer, Bias = 1)
const W1 = [
  [4.0, 1.0, -2.0], // h1 „Mahnungs-Detektor“
  [1.0, 4.0, -2.2], // h2 „Langsamzahler“
  [3.0, 3.0, -4.0], // h3 „Beides hoch“
  [-3.0, -3.0, 1.5], // h4 „Zuverlässig“
];
const W2 = [
  [2.0, 2.0, 2.5, -3.0, -2.2], // Ausfall: ja  (letzte Spalte = Bias)
  [-2.0, -1.5, -2.0, 3.0, 1.2], // Ausfall: nein
];
const HIDDEN_NAMES = ['h1 · viele Mahnungen', 'h2 · zahlt langsam', 'h3 · beides hoch', 'h4 · zuverlässig'];
const IN_NAMES = ['Mahnungen', 'Zahlungsdauer', 'Bias (= 1)'];
const OUT_NAMES = ['Ausfall: ja', 'Ausfall: nein'];

export function forward(mahnungen, tage) {
  const x = [mahnungen / 10, tage / 120, 1];
  const zH = W1.map((w) => w[0] * x[0] + w[1] * x[1] + w[2] * x[2]);
  const a = zH.map(sigmoid);
  const zO = W2.map((w) => w[0] * a[0] + w[1] * a[1] + w[2] * a[2] + w[3] * a[3] + w[4]);
  const m = Math.max(...zO);
  const e = zO.map((z) => Math.exp(z - m));
  const sum = e[0] + e[1];
  const y = e.map((v) => v / sum);
  return { x, zH, a, zO, y };
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'neural-net');
  setupRoot(el, 'neural-net');
  const t = timers();
  const state = { m: 2, d: 30, phase: 0, progress: 1, ran: 0, colors: null };
  // phase: 0 = Ruhe, 1 = Eingang→Hidden, 2 = Hidden→Ausgang, 3 = fertig

  const canvas = h('canvas.w-nn-canvas', { role: 'img', 'aria-label': 'Neuronales Netz mit 3 Eingaben, 4 versteckten Neuronen und 2 Ausgaben' });
  const resultBox = h('div.w-nn-result', { 'aria-live': 'polite' });
  const calcBox = h('div.w-nn-calc.small');
  const btn = h('button.btn.btn-primary', { type: 'button', onclick: () => run() }, '▶ Forward-Pass');

  const sM = rangeField({ label: 'Anzahl Mahnungen (12 Monate)', value: state.m, min: 0, max: 10, step: 1, format: (v) => `${v}`, onInput: (v) => { state.m = v; settle(); } });
  const sD = rangeField({ label: 'Ø Zahlungsdauer', value: state.d, min: 0, max: 120, step: 5, format: (v) => `${v} Tage`, onInput: (v) => { state.d = v; settle(); } });

  fill(el, 
    widgetHead('Neuronales Netz: Zahlungsausfall vorhersagen', 'Stell zwei Merkmale eines (fiktiven) Kunden ein und starte den Forward-Pass. Du siehst, wie Signale gewichtet durch das Netz laufen und welche Ausgabe am stärksten aktiviert wird.', 'brain'),
    h('div.w-nn-layout',
      h('div.w-nn-stage', canvas, h('div.w-nn-legend.small',
        h('span', h('i.w-sw.w-sw-pos'), 'positives Gewicht'),
        h('span', h('i.w-sw.w-sw-neg'), 'negatives Gewicht'),
        h('span.muted', 'Liniendicke = Betrag des Gewichts'))),
      h('div.w-nn-side',
        sM.el, sD.el,
        h('div.row', btn),
        resultBox,
      ),
    ),
    h('details.w-details', h('summary', 'Rechenweg anzeigen'), calcBox),
    mdEl(`### So funktioniert's
- **Eingaben** werden normiert (Mahnungen ÷ 10, Tage ÷ 120), damit alle Werte zwischen 0 und 1 liegen. Das Bias-Neuron liefert immer 1 und verschiebt die Schwelle.
- Jede Verbindung hat ein **Gewicht**: Ein Neuron bildet die gewichtete Summe *z = Σ wᵢ · xᵢ*. Positive Gewichte verstärken, negative hemmen.
- Die **Aktivierungsfunktion** (hier: Sigmoid) macht aus *z* eine Aktivierung zwischen 0 und 1 – erst dadurch kann das Netz nichtlineare Muster lernen.
- Die Ausgabeschicht nutzt **Softmax**: Beide Ausgaben ergeben zusammen 100 % und lassen sich als Wahrscheinlichkeiten lesen.
- Die Gewichte sind hier **fest vorgegeben** (Beispielwerte). Beim *Training* würden sie per Backpropagation aus vielen historischen Fällen gelernt – darum entscheidet die Datenqualität über die Modellqualität.`, 'div', 'md w-explain'),
  );

  // ---------- Zeichnen ----------
  const ctx2d = canvas.getContext('2d');
  let W = 600, H = 340, dpr = 1;
  function readColors() {
    state.colors = {
      pos: cssVar('--primary', '#3554d1'), neg: cssVar('--danger', '#c93b46'), text: cssVar('--text', '#1b2130'),
      muted: cssVar('--muted', '#586174'), surface: cssVar('--surface', '#fff'), surface2: cssVar('--surface-2', '#f0efe9'),
      border: cssVar('--border', '#dad8cf'), accent: cssVar('--accent', '#e8831c'), success: cssVar('--success', '#17895d'),
    };
  }
  function resize() {
    const w = Math.max(280, canvas.parentElement.clientWidth);
    W = w; H = Math.round(Math.max(260, Math.min(380, w * 0.6)));
    dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.height = H + 'px';
    draw();
  }
  function layout() {
    const padX = Math.max(46, W * 0.13), cols = [padX, W / 2, W - padX];
    const ys = (n) => Array.from({ length: n }, (_, i) => (H * (i + 1)) / (n + 1));
    return { cols, inY: ys(3), hY: ys(4), oY: ys(2), r: Math.max(14, Math.min(22, W / 26)) };
  }
  function edge(x1, y1, x2, y2, w, alpha) {
    ctx2d.strokeStyle = w >= 0 ? state.colors.pos : state.colors.neg;
    ctx2d.globalAlpha = alpha;
    ctx2d.lineWidth = 0.6 + Math.abs(w) * 0.9;
    ctx2d.beginPath(); ctx2d.moveTo(x1, y1); ctx2d.lineTo(x2, y2); ctx2d.stroke();
    ctx2d.globalAlpha = 1;
  }
  function node(x, y, r, act, label, valueText, lit, highlight) {
    const C = state.colors;
    ctx2d.beginPath(); ctx2d.arc(x, y, r, 0, Math.PI * 2);
    ctx2d.fillStyle = C.surface; ctx2d.fill();
    if (lit) {
      ctx2d.globalAlpha = 0.15 + 0.85 * act;
      ctx2d.fillStyle = highlight ? C.accent : C.pos; ctx2d.fill();
      ctx2d.globalAlpha = 1;
    }
    ctx2d.lineWidth = highlight ? 3 : 1.5; ctx2d.strokeStyle = highlight ? C.accent : C.border; ctx2d.stroke();
    ctx2d.fillStyle = C.text; ctx2d.textAlign = 'center'; ctx2d.textBaseline = 'middle';
    ctx2d.font = `600 ${Math.round(r * 0.62)}px system-ui, sans-serif`;
    if (valueText) {
      // Kontrast: Text auf Fläche lesbar halten
      ctx2d.fillStyle = lit && act > 0.55 ? C.surface : C.text;
      ctx2d.fillText(valueText, x, y);
    }
    if (label) {
      ctx2d.font = `${Math.max(10, Math.round(r * 0.55))}px system-ui, sans-serif`;
      const tw = ctx2d.measureText(label).width, ly = y + r + 11;
      ctx2d.fillStyle = C.surface2; ctx2d.globalAlpha = 0.9;
      ctx2d.fillRect(Math.round(x - tw / 2 - 3), Math.round(ly - 7), Math.round(tw + 6), 14);
      ctx2d.globalAlpha = 1;
      ctx2d.fillStyle = C.muted;
      ctx2d.fillText(label, x, ly);
    }
  }
  function draw() {
    if (!state.colors) readColors();
    const C = state.colors;
    const res = forward(state.m, state.d);
    const L = layout();
    ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx2d.clearRect(0, 0, W, H);
    const p = state.progress;
    const showHidden = state.phase >= 2 || (state.phase === 1 && p >= 1) || state.phase === 3;
    const showOut = state.phase === 3 || (state.phase === 2 && p >= 1);
    // Kanten
    W1.forEach((w, j) => w.forEach((wij, i) => edge(L.cols[0], L.inY[i], L.cols[1], L.hY[j], wij, state.phase === 1 ? 0.55 : 0.35)));
    W2.forEach((w, k) => w.slice(0, 4).forEach((wjk, j) => edge(L.cols[1], L.hY[j], L.cols[2], L.oY[k], wjk, state.phase === 2 ? 0.55 : 0.35)));
    // Signale (Pakete)
    const packet = (x1, y1, x2, y2, strength) => {
      const x = x1 + (x2 - x1) * p, y = y1 + (y2 - y1) * p;
      ctx2d.fillStyle = C.accent; ctx2d.globalAlpha = 0.35 + 0.65 * Math.min(1, strength);
      const s = 3 + 4 * Math.min(1, strength);
      ctx2d.fillRect(Math.round(x - s / 2), Math.round(y - s / 2), Math.round(s), Math.round(s));
      ctx2d.globalAlpha = 1;
    };
    if (state.phase === 1 && p < 1) W1.forEach((w, j) => w.forEach((wij, i) => packet(L.cols[0], L.inY[i], L.cols[1], L.hY[j], Math.abs(wij * res.x[i]) / 2)));
    if (state.phase === 2 && p < 1) W2.forEach((w, k) => w.slice(0, 4).forEach((wjk, j) => packet(L.cols[1], L.hY[j], L.cols[2], L.oY[k], Math.abs(wjk * res.a[j]) / 2)));
    // Knoten
    const inLabels = ['Mahnungen', 'Dauer', 'Bias'];
    res.x.forEach((v, i) => node(L.cols[0], L.inY[i], L.r, v, inLabels[i], fmtNum(v, 2), true, false));
    res.a.forEach((v, j) => node(L.cols[1], L.hY[j], L.r, v, `h${j + 1}`, showHidden ? fmtNum(v, 2) : '?', showHidden, false));
    const best = res.y[0] >= res.y[1] ? 0 : 1;
    const outLabels = ['ja', 'nein'];
    res.y.forEach((v, k) => node(L.cols[2], L.oY[k], L.r * 1.15, v, `Ausfall ${outLabels[k]}`, showOut ? fmtPct(v) : '?', showOut, showOut && k === best));
    // Spaltentitel
    ctx2d.fillStyle = C.muted; ctx2d.font = '600 11px system-ui, sans-serif'; ctx2d.textAlign = 'center';
    ['Eingabe', 'Verborgene Schicht', 'Ausgabe'].forEach((tt, i) => ctx2d.fillText(tt, L.cols[i], 12));
  }

  // Summe als lesbarer Term: „4,0 × 0,70 − 2,0 × 1“
  const sum = (pairs) => pairs.map(([w, x], i) => `${i ? (w < 0 ? ' − ' : ' + ') : (w < 0 ? '−' : '')}${fmtNum(Math.abs(w), 1)} × ${fmtNum(x, 2)}`).join('');
  function renderText() {
    const res = forward(state.m, state.d);
    const done = state.phase === 3;
    const yes = res.y[0] >= res.y[1];
    fill(resultBox, done
      ? h(`div.w-nn-verdict.${yes ? 'is-bad' : 'is-ok'}`,
        h('b', yes ? 'Zahlungsausfall wahrscheinlich: JA' : 'Zahlungsausfall wahrscheinlich: NEIN'),
        h('span.small', `P(ja) = ${fmtPct(res.y[0], 1)} · P(nein) = ${fmtPct(res.y[1], 1)}`))
      : h('div.w-nn-verdict', h('span.small.muted', 'Starte den Forward-Pass, um die Ausgabe zu berechnen.')));
    const rows = W1.map((w, j) => h('tr',
      h('td', HIDDEN_NAMES[j]),
      h('td.w-mono', `${sum([[w[0], res.x[0]], [w[1], res.x[1]], [w[2], 1]])} = ${fmtNum(res.zH[j], 2)}`),
      h('td.w-mono', `σ(z) = ${fmtNum(res.a[j], 3)}`)));
    const orows = W2.map((w, k) => h('tr',
      h('td', OUT_NAMES[k]),
      h('td.w-mono', `${sum([...w.slice(0, 4).map((wj, j) => [wj, res.a[j]]), [w[4], 1]])} = ${fmtNum(res.zO[k], 2)}`),
      h('td.w-mono', `Softmax = ${fmtPct(res.y[k], 1)}`)));
    fill(calcBox, 
      h('p', `Eingaben normiert: x₁ = ${state.m}/10 = ${fmtNum(res.x[0], 2)}, x₂ = ${state.d}/120 = ${fmtNum(res.x[1], 2)}, Bias = 1 (${IN_NAMES.join(', ')}).`),
      h('div.tbl-wrap', h('table.tbl', h('thead', h('tr', h('th', 'Neuron'), h('th', 'gewichtete Summe z'), h('th', 'Aktivierung'))), h('tbody', rows, orows))),
    );
  }

  function settle() {
    t.clear();
    state.phase = state.ran ? 3 : 0;
    state.progress = 1;
    btn.disabled = false;
    draw();
    renderText();
  }

  function animatePhase(phase, ms) {
    return new Promise((resolve) => {
      state.phase = phase; state.progress = 0;
      const start = performance.now();
      const step = (now) => {
        state.progress = Math.min(1, (now - start) / ms);
        draw();
        if (state.progress < 1) t.raf(step); else resolve();
      };
      t.raf(step);
    });
  }

  async function run() {
    t.clear();
    btn.disabled = true;
    if (prefersReducedMotion()) {
      state.phase = 3; state.progress = 1;
    } else {
      await animatePhase(1, 900);
      await animatePhase(2, 900);
      state.phase = 3; state.progress = 1;
    }
    draw();
    state.ran++;
    renderText();
    btn.disabled = false;
    if (state.ran >= 2) c.award(10, 'Widget: Neuronales Netz erkundet');
  }

  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas.parentElement);
  const offTheme = onThemeChange(() => { readColors(); draw(); });
  readColors();
  resize();
  renderText();

  return () => { t.clear(); ro.disconnect(); offTheme(); };
}
