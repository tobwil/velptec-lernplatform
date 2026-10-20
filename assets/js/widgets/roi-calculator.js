// Widget: ROI-/Business-Case-Rechner für eine KI-Automatisierung.
import { h, mdEl } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, numField, fmtEur, fmtNum, fmtPct, s, copyText, fill } from './_shared.js';

export function calcRoi(v, benefitFactor = 1, costFactor = 1) {
  const savedMin = Math.max(0, v.minBefore - v.minAfter) * v.cases * benefitFactor;
  const savedHours = savedMin / 60;
  const gross = savedHours * v.rate;
  const running = v.running * costFactor;
  const once = v.once * costFactor;
  const net = gross - running;
  const payback = net > 0 ? once / net : Infinity;
  const roi = (n) => {
    const cost = once + running * n;
    return cost > 0 ? (gross * n - cost) / cost : NaN;
  };
  const cum = (n) => net * n - once;
  return { savedHours, gross, net, payback, roi, cum, running, once };
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'roi-calculator');
  setupRoot(el, 'roi-calculator');
  const v = { cases: 800, minBefore: 6, minAfter: 2, rate: 45, once: 15000, running: 400 };
  const touched = new Set();
  const out = h('div.w-roi-out', { 'aria-live': 'polite' });

  const field = (key, label, opts) => numField({
    label, value: v[key], ...opts,
    onInput: (x) => { v[key] = Math.max(0, x); touched.add(key); render(); if (touched.size >= 3) c.award(10, 'Widget: ROI-Rechner genutzt'); },
  }).el;

  fill(el, 
    widgetHead('ROI-Rechner für KI-Automatisierung', 'Trag deine Annahmen ein – z. B. für eine KI-gestützte Eingangsrechnungs-Verarbeitung (Beispielwerte vorausgefüllt). Du siehst sofort Ersparnis, Amortisationszeit und ROI.', 'chart'),
    h('div.w-roi-layout',
      h('fieldset.w-roi-in',
        h('legend', 'Annahmen'),
        h('div.w-roi-grid',
          field('cases', 'Vorgänge pro Monat', { min: 0, step: 10, suffix: 'Stk.' }),
          field('rate', 'Stundensatz (Vollkosten)', { min: 0, step: 1, suffix: '€/h', hint: 'inkl. Lohnnebenkosten, Arbeitsplatz' }),
          field('minBefore', 'Minuten pro Vorgang – vorher', { min: 0, step: 0.5, suffix: 'min' }),
          field('minAfter', 'Minuten pro Vorgang – nachher', { min: 0, step: 0.5, suffix: 'min', hint: 'inkl. Prüfung/Nacharbeit' }),
          field('once', 'Einmalige Kosten', { min: 0, step: 500, suffix: '€', hint: 'Einführung, Integration, Schulung' }),
          field('running', 'Laufende Kosten pro Monat', { min: 0, step: 50, suffix: '€', hint: 'Lizenzen, API/Token, Betrieb' }),
        )),
      out),
    mdEl(`### Annahmen & Grenzen
- Die Ersparnis wird nur **real**, wenn die frei werdende Zeit sinnvoll genutzt wird (andere Aufgaben, weniger Überstunden, Wachstum ohne Neueinstellung).
- Nicht enthalten: Qualitätseffekte (weniger Fehler, schnellere Durchlaufzeit), interne Projektzeit, Kosten für Change-Management und Risiken.
- **ROI** = (Nutzen − Kosten) ÷ Kosten über den Zeitraum. **Amortisation** = einmalige Kosten ÷ monatlicher Netto-Ersparnis.
- Die **Sensitivität** zeigt, wie robust dein Business Case ist: Hält er auch, wenn der Nutzen 20 % kleiner und die Kosten 20 % höher ausfallen?`, 'div', 'md w-explain'),
  );

  function bars(r) {
    const months = [12, 24, 36];
    const vals = months.map((m) => r.cum(m));
    const maxAbs = Math.max(1, ...vals.map(Math.abs));
    const W = 300, H = 150;
    const anyNeg = vals.some((x) => x < 0), allNeg = vals.every((x) => x < 0);
    const zero = allNeg ? 14 : anyNeg ? H / 2 : H - 22;
    const scale = (allNeg ? H - 50 : anyNeg ? H / 2 - 30 : H - 40) / maxAbs;
    const bw = 56;
    const g = months.map((m, i) => {
      const x = 30 + i * 95, val = vals[i], hgt = Math.max(1, Math.abs(val) * scale);
      const y = val >= 0 ? zero - hgt : zero;
      return s('g', {},
        s('rect', { x, y, width: bw, height: hgt, rx: 4, class: val >= 0 ? 'w-bar-pos' : 'w-bar-neg' }),
        s('text', { x: x + bw / 2, y: val >= 0 ? y - 5 : y + hgt + 13, 'text-anchor': 'middle', class: 'w-bar-val' }, fmtEur(val)),
        s('text', { x: x + bw / 2, y: H - 4, 'text-anchor': 'middle', class: 'w-bar-lbl' }, `${m} Mon.`));
    });
    return s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'w-roi-chart', role: 'img', 'aria-label': `Kumuliertes Ergebnis: ${months.map((m, i) => `${m} Monate ${fmtEur(vals[i])}`).join(', ')}` },
      s('line', { x1: 10, x2: W - 10, y1: zero, y2: zero, class: 'w-bar-zero' }), g);
  }

  function render() {
    const r = calcRoi(v);
    const pess = calcRoi(v, 0.8, 1.2);
    const opt = calcRoi(v, 1.2, 0.8);
    const pb = (x) => (Number.isFinite(x.payback) ? `${fmtNum(x.payback, 1)} Monate` : 'keine');
    const warn = v.minAfter >= v.minBefore
      ? h('p.notice.notice-warn', 'Die Bearbeitungszeit „nachher“ ist nicht kürzer als „vorher“ – so entsteht keine Zeitersparnis.')
      : r.net <= 0 ? h('p.notice.notice-warn', 'Die laufenden Kosten sind höher als die Ersparnis – der Business Case trägt so nicht.') : null;
    fill(out, 
      h('div.w-kpis',
        h('div.kpi', h('b', fmtEur(r.net)), h('span', `Netto-Ersparnis / Monat (brutto ${fmtEur(r.gross)})`)),
        h('div.kpi', h('b', `${fmtNum(r.savedHours, 1)} h`), h('span', 'eingesparte Stunden / Monat')),
        h('div.kpi', h('b', pb(r)), h('span', 'Amortisationszeit')),
      ),
      warn,
      h('div.tbl-wrap', h('table.tbl.small',
        h('thead', h('tr', h('th', 'Zeitraum'), h('th', 'ROI'), h('th', 'kum. Ergebnis'))),
        h('tbody', [12, 24, 36].map((m) => h('tr', h('td', `${m} Monate`), h(`td.${r.roi(m) >= 0 ? 'w-pos' : 'w-neg'}`, fmtPct(r.roi(m))), h('td', fmtEur(r.cum(m)))))))),
      bars(r),
      h('h4', 'Sensitivität (±20 %)'),
      h('div.tbl-wrap', h('table.tbl.small',
        h('thead', h('tr', h('th', 'Szenario'), h('th', 'Netto/Monat'), h('th', 'Amortisation'), h('th', 'ROI 36 M.'))),
        h('tbody',
          h('tr', h('td', 'Pessimistisch (Nutzen −20 %, Kosten +20 %)'), h('td', fmtEur(pess.net)), h('td', pb(pess)), h('td', fmtPct(pess.roi(36)))),
          h('tr', h('td', h('b', 'Basis')), h('td', fmtEur(r.net)), h('td', pb(r)), h('td', fmtPct(r.roi(36)))),
          h('tr', h('td', 'Optimistisch (Nutzen +20 %, Kosten −20 %)'), h('td', fmtEur(opt.net)), h('td', pb(opt)), h('td', fmtPct(opt.roi(36))))))),
      h('div.row', h('button.btn.btn-sm', { type: 'button', onclick: () => copySummary(r, pess) }, '⧉ Zusammenfassung kopieren')),
    );
  }

  async function copySummary(r, pess) {
    const txt = [
      'Business Case KI-Automatisierung (Schätzung)',
      `- ${fmtNum(v.cases)} Vorgänge/Monat, ${fmtNum(v.minBefore, 1)} → ${fmtNum(v.minAfter, 1)} min, ${fmtEur(v.rate)}/h`,
      `- Einmalig ${fmtEur(v.once)}, laufend ${fmtEur(v.running)}/Monat`,
      `- Netto-Ersparnis: ${fmtEur(r.net)}/Monat · Amortisation: ${Number.isFinite(r.payback) ? fmtNum(r.payback, 1) + ' Monate' : 'keine'}`,
      `- ROI 12/24/36 Monate: ${[12, 24, 36].map((m) => fmtPct(r.roi(m))).join(' / ')}`,
      `- Pessimistisch (−20 % Nutzen, +20 % Kosten): ${fmtEur(pess.net)}/Monat, ROI 36 M. ${fmtPct(pess.roi(36))}`,
    ].join('\n');
    const ok = await copyText(txt);
    c.toast(ok ? 'Zusammenfassung kopiert.' : 'Kopieren nicht möglich.', { icon: ok ? '📋' : '⚠️' });
    if (ok) c.award(10, 'Widget: ROI-Rechner genutzt');
  }

  render();
  return () => {};
}
