// Widget: Use-Case-Matrix Nutzen × Machbarkeit.
import { h } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, s, uid, copyText, fill } from './_shared.js';

const DEFAULT_CASES = [
  { name: 'E-Mail-Klassifikation im Kundenservice', impact: 4, feasibility: 5 },
  { name: 'Angebots-Assistent für den Vertrieb', impact: 4, feasibility: 3 },
  { name: 'Predictive Maintenance in der Fertigung', impact: 5, feasibility: 2 },
  { name: 'Chatbot auf der Website', impact: 2, feasibility: 4 },
  { name: 'Automatische Rechnungsprüfung', impact: 4, feasibility: 4 },
];

const QUADRANTS = {
  quick: { label: 'Quick Wins', hint: 'Sofort angehen – hoher Nutzen, gut machbar.', rank: 0 },
  strat: { label: 'Strategische Projekte', hint: 'Hoher Nutzen, aber aufwendig: als Projekt mit Roadmap und Datenaufbau planen.', rank: 1 },
  fill: { label: 'Lückenfüller', hint: 'Leicht umsetzbar, geringer Nutzen: nur nebenbei oder als Lernprojekt.', rank: 2 },
  avoid: { label: 'Vermeiden', hint: 'Geringer Nutzen, schwer umsetzbar: vorerst zurückstellen.', rank: 3 },
};

export function quadrant(c) {
  const hiI = c.impact >= 3, hiF = c.feasibility >= 3;
  if (hiI && hiF) return 'quick';
  if (hiI) return 'strat';
  if (hiF) return 'fill';
  return 'avoid';
}
// Grenzfälle mit Wert genau 3 zählen zur „hohen“ Seite, die Mitte liegt bei 3.

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'usecase-matrix');
  setupRoot(el, 'usecase-matrix');
  const src = Array.isArray(props.cases) && props.cases.length ? props.cases : DEFAULT_CASES;
  let cases = src.map((x) => ({ id: uid('uc'), name: String(x.name || 'Use Case'), impact: clamp15(x.impact), feasibility: clamp15(x.feasibility) }));
  let active = cases[0]?.id;

  const svgWrap = h('div.w-uc-plot');
  const listEl = h('div.w-uc-list');
  const resultEl = h('div.w-uc-result');
  const nameIn = h('input.input', { type: 'text', placeholder: 'z. B. Protokolle automatisch zusammenfassen', 'aria-label': 'Name des neuen Use Cases', maxlength: 80 });
  const addForm = h('form.w-uc-add', {
    onsubmit: (e) => {
      e.preventDefault();
      const name = nameIn.value.trim();
      if (!name) { nameIn.focus(); return; }
      const n = { id: uid('uc'), name, impact: 3, feasibility: 3 };
      cases.push(n); active = n.id; nameIn.value = '';
      render();
      listEl.querySelector(`[data-id="${n.id}"] input[type=range]`)?.focus();
      c.toast(`„${name}“ hinzugefügt – jetzt Nutzen und Machbarkeit einschätzen.`, { icon: '➕' });
    },
  }, nameIn, h('button.btn.btn-primary', { type: 'submit' }, '+ Hinzufügen'));
  const exportBtn = h('button.btn.btn-accent', { type: 'button', onclick: () => doExport() }, '⧉ Als Markdown kopieren');

  fill(el, 
    widgetHead('Use-Case-Matrix: Nutzen × Machbarkeit', 'Bewerte jeden KI-Use-Case auf einer Skala von 1–5: Wie groß ist der Business-Nutzen, wie gut ist er machbar (Daten, Technik, Kompetenzen, Aufwand)? Die Matrix zeigt dir, womit du anfangen solltest.', 'target'),
    h('div.w-uc-layout', svgWrap, h('div.w-uc-side', listEl, h('h4', 'Eigenen Use Case hinzufügen'), addForm)),
    h('h4', 'Priorisierte Ergebnisliste'),
    resultEl,
    h('div.row', exportBtn),
  );

  function clamp15(v) { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.min(5, Math.max(1, n)) : 3; }

  function renderPlot() {
    const S = 320, pad = 40, inner = S - pad - 12;
    const xPos = (f) => pad + ((f - 0.5) / 5) * inner;
    const yPos = (i) => 12 + inner - ((i - 0.5) / 5) * inner;
    const mid = xPos(2.5), midY = yPos(2.5);
    const g = [];
    // Quadranten
    g.push(s('rect', { x: pad, y: 12, width: mid - pad, height: midY - 12, class: 'w-uc-q w-uc-q-strat' }));
    g.push(s('rect', { x: mid, y: 12, width: pad + inner - mid, height: midY - 12, class: 'w-uc-q w-uc-q-quick' }));
    g.push(s('rect', { x: pad, y: midY, width: mid - pad, height: 12 + inner - midY, class: 'w-uc-q w-uc-q-avoid' }));
    g.push(s('rect', { x: mid, y: midY, width: pad + inner - mid, height: 12 + inner - midY, class: 'w-uc-q w-uc-q-fill' }));
    const ql = (x, y, t, anchor = 'start') => s('text', { x, y, class: 'w-uc-qlabel', 'text-anchor': anchor }, t);
    g.push(s('text', { x: pad + 6, y: 26, class: 'w-uc-qlabel' }, 'Strategische', s('tspan', { x: pad + 6, dy: 12 }, 'Projekte')), ql(pad + inner - 6, 26, 'Quick Wins', 'end'), ql(pad + 6, 12 + inner - 6, 'Vermeiden'), ql(pad + inner - 6, 12 + inner - 6, 'Lückenfüller', 'end'));
    // Gitter & Achsen
    for (let i = 1; i <= 5; i++) {
      g.push(s('text', { x: xPos(i), y: S - 16, class: 'w-uc-tick', 'text-anchor': 'middle' }, i));
      g.push(s('text', { x: pad - 8, y: yPos(i) + 4, class: 'w-uc-tick', 'text-anchor': 'end' }, i));
    }
    g.push(s('line', { x1: mid, y1: 12, x2: mid, y2: 12 + inner, class: 'w-uc-mid' }), s('line', { x1: pad, y1: midY, x2: pad + inner, y2: midY, class: 'w-uc-mid' }));
    g.push(s('rect', { x: pad, y: 12, width: inner, height: inner, class: 'w-uc-frame' }));
    g.push(s('text', { x: pad + inner / 2, y: S - 1, class: 'w-uc-axis', 'text-anchor': 'middle' }, 'Machbarkeit →'));
    g.push(s('text', { x: 11, y: 12 + inner / 2, class: 'w-uc-axis', 'text-anchor': 'middle', transform: `rotate(-90 11 ${12 + inner / 2})` }, 'Nutzen →'));
    // Punkte (gleiche Position leicht versetzen)
    const seen = {};
    cases.forEach((cs, i) => {
      const key = `${cs.feasibility}-${cs.impact}`;
      const k = seen[key] = (seen[key] || 0) + 1;
      const off = (k - 1) * 9;
      const cx = xPos(cs.feasibility) + (k > 1 ? off * (k % 2 ? 1 : -1) : 0), cy = yPos(cs.impact) + (k > 1 ? off * 0.6 : 0);
      g.push(s('g', { class: `w-uc-pt${cs.id === active ? ' is-active' : ''}`, onclick: () => { active = cs.id; render(); listEl.querySelector(`[data-id="${cs.id}"] input[type=range]`)?.focus(); } },
        s('title', {}, `${cs.name}: Nutzen ${cs.impact}, Machbarkeit ${cs.feasibility}`),
        s('circle', { cx, cy, r: 12 }),
        s('text', { x: cx, y: cy + 4, 'text-anchor': 'middle' }, i + 1)));
    });
    const svg = s('svg', { viewBox: `0 0 ${S} ${S}`, role: 'img', 'aria-label': `Matrix mit ${cases.length} Use Cases. Details in der Liste.` }, g);
    fill(svgWrap, svg);
  }

  function renderList() {
    fill(listEl, ...cases.map((cs, i) => {
      const mk = (key, label) => {
        const id = uid('ucr');
        const out = h('output', { for: id }, cs[key]);
        const inp = h('input', { type: 'range', id, min: 1, max: 5, step: 1, value: cs[key], 'aria-label': `${label} für ${cs.name}` });
        inp.addEventListener('input', () => { cs[key] = +inp.value; out.textContent = inp.value; active = cs.id; renderPlot(); renderResult(); badge.textContent = QUADRANTS[quadrant(cs)].label; badge.className = `chip w-uc-badge w-uc-chip-${quadrant(cs)}`; });
        inp.addEventListener('focus', () => { if (active !== cs.id) { active = cs.id; renderPlot(); listEl.querySelectorAll('.w-uc-item').forEach((n) => n.classList.toggle('is-active', n.dataset.id === active)); } });
        return h('label.w-uc-slider', { for: id }, h('span', label), inp, out);
      };
      const badge = h(`span.chip.w-uc-badge.w-uc-chip-${quadrant(cs)}`, QUADRANTS[quadrant(cs)].label);
      return h(`div.w-uc-item${cs.id === active ? '.is-active' : ''}`, { dataset: { id: cs.id } },
        h('div.w-uc-item-head',
          h('span.w-uc-num', i + 1),
          h('b.w-uc-name', cs.name),
          badge,
          h('button.icon-btn.w-uc-del', { type: 'button', 'aria-label': `${cs.name} entfernen`, title: 'Entfernen', onclick: () => { cases = cases.filter((x) => x.id !== cs.id); render(); } }, '✕')),
        mk('impact', 'Nutzen'), mk('feasibility', 'Machbarkeit'));
    }));
    if (!cases.length) listEl.append(h('p.muted.small', 'Noch keine Use Cases – füge unten einen hinzu.'));
  }

  function sorted() {
    return [...cases].sort((a, b) => QUADRANTS[quadrant(a)].rank - QUADRANTS[quadrant(b)].rank || b.impact * b.feasibility - a.impact * a.feasibility || b.impact - a.impact);
  }

  function renderResult() {
    const list = sorted();
    fill(resultEl, list.length ? h('ol.w-uc-ranking', list.map((cs) => {
      const q = quadrant(cs);
      return h('li', h('b', cs.name), ' ', h(`span.chip.w-uc-chip-${q}`, QUADRANTS[q].label), h('span.small.muted', ` · Nutzen ${cs.impact} · Machbarkeit ${cs.feasibility} · Score ${cs.impact * cs.feasibility}`));
    })) : h('p.muted', '–'),
    h('p.small.muted', 'Sortierung: zuerst nach Quadrant (Quick Wins → Strategische Projekte → Lückenfüller → Vermeiden), dann nach Score = Nutzen × Machbarkeit. Werte von 3 gelten als „hoch“.'));
  }

  function render() { renderPlot(); renderList(); renderResult(); }

  async function doExport() {
    const list = sorted();
    const md = [
      '## KI-Use-Case-Priorisierung', '',
      '| # | Use Case | Nutzen (1–5) | Machbarkeit (1–5) | Score | Quadrant |',
      '|---|---|---|---|---|---|',
      ...list.map((cs, i) => `| ${i + 1} | ${cs.name.replace(/\|/g, '/')} | ${cs.impact} | ${cs.feasibility} | ${cs.impact * cs.feasibility} | ${QUADRANTS[quadrant(cs)].label} |`),
      '',
      ...Object.values(QUADRANTS).map((q) => `- **${q.label}:** ${q.hint}`),
    ].join('\n');
    const ok = await copyText(md);
    c.toast(ok ? 'Markdown-Tabelle in die Zwischenablage kopiert.' : 'Kopieren nicht möglich – bitte manuell markieren.', { icon: ok ? '📋' : '⚠️', type: ok ? 'success' : 'error' });
    if (ok && list.length) c.award(10, 'Widget: Use-Case-Matrix priorisiert');
    if (!ok) resultEl.append(h('textarea.textarea.w-mono', { readonly: true, 'aria-label': 'Markdown-Export' }, md));
  }

  render();
  return () => {};
}

