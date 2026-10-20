// Widget: Token-, Kosten- und Energie-Schätzer für KI-Workflows.
import { h, mdEl } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, numField, fmtEur, fmtNum, uid, fill } from './_shared.js';

const CLASSES = [
  { id: 'small', label: 'Klein (z. B. „Mini“/„Flash“-Modelle)', pin: 0.1, pout: 0.4 },
  { id: 'medium', label: 'Mittel (Standard-Modelle)', pin: 1.0, pout: 5.0 },
  { id: 'large', label: 'Groß (Spitzen-/Reasoning-Modelle)', pin: 5.0, pout: 25.0 },
];

export function costs(v, prices, cls, { cacheShare = 0, cacheDiscount = 0 } = {}) {
  const p = prices[cls];
  const reqMonth = v.perDay * v.days;
  const effIn = v.tokIn * (1 - cacheShare * cacheDiscount);
  const perReq = (effIn * p.pin + v.tokOut * p.pout) / 1e6;
  const month = perReq * reqMonth;
  return { reqMonth, perReq, month, year: month * 12, tokMonth: reqMonth * (v.tokIn + v.tokOut) };
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'token-calculator');
  setupRoot(el, 'token-calculator');
  const v = { perDay: 500, tokIn: 1500, tokOut: 400, days: 21, wh: 0.24, cacheShare: 60, cacheDiscount: 90 };
  let cls = 'medium';
  const prices = Object.fromEntries(CLASSES.map((k) => [k.id, { pin: k.pin, pout: k.pout }]));
  const touched = new Set();
  const out = h('div.w-tc-out', { 'aria-live': 'polite' });
  const touch = (k) => { touched.add(k); if (touched.size >= 3) c.award(10, 'Widget: Token-Rechner genutzt'); };

  const f = (key, label, opts) => numField({ label, value: v[key], ...opts, onInput: (x) => { v[key] = Math.max(0, x); touch(key); render(); } }).el;

  const clsName = uid('tc');
  const clsRadios = h('div.w-tc-classes', { role: 'radiogroup', 'aria-label': 'Modellklasse' }, CLASSES.map((k) => {
    const r = h('input', { type: 'radio', name: clsName, value: k.id });
    r.checked = k.id === cls;
    r.addEventListener('change', () => { cls = k.id; touch('cls'); render(); });
    const pin = numField({ label: 'Input €/1 Mio.', value: k.pin, min: 0, step: 0.01, onInput: (x) => { prices[k.id].pin = Math.max(0, x); touch('price'); render(); } });
    const pout = numField({ label: 'Output €/1 Mio.', value: k.pout, min: 0, step: 0.01, onInput: (x) => { prices[k.id].pout = Math.max(0, x); touch('price'); render(); } });
    return h('div.w-tc-class', h('label.w-tc-radio', r, h('b', k.label)), h('div.w-tc-prices', pin.el, pout.el));
  }));

  fill(el, 
    widgetHead('Token- & Kostenrechner', 'Schätze, was ein KI-Workflow pro Monat kostet und wie viel Energie er grob verbraucht. Passe Volumen, Tokens und Preise an – und vergleiche, was ein kleineres Modell oder Prompt-Caching bringt.', 'gauge'),
    h('div.w-tc-layout',
      h('div.w-tc-in',
        h('div.w-tc-grid',
          f('perDay', 'Anfragen pro Tag', { min: 0, step: 10 }),
          f('days', 'Arbeitstage pro Monat', { min: 1, max: 31, step: 1 }),
          f('tokIn', 'Input-Tokens pro Anfrage', { min: 0, step: 100, hint: 'Prompt + Kontext (z. B. Dokumente)' }),
          f('tokOut', 'Output-Tokens pro Anfrage', { min: 0, step: 50, hint: 'Faustregel: 1 Token ≈ ¾ Wort (Englisch), im Deutschen eher weniger' }),
        ),
        h('fieldset.w-tc-fs', h('legend', 'Modellklasse & Preise'), h('p.small.notice.notice-warn', h('b', 'Beispielwerte! '), 'Die Preise sind grobe Platzhalter, keine aktuellen Listenpreise. Trag die Preise deines Anbieters ein (oft in US-$ angegeben).'), clsRadios),
        h('fieldset.w-tc-fs', h('legend', 'Optimierung & Energie'),
          h('div.w-tc-grid',
            f('cacheShare', 'Anteil gecachter Input-Tokens', { min: 0, max: 100, step: 5, suffix: '%', hint: 'z. B. gleichbleibender System-Prompt' }),
            f('cacheDiscount', 'Rabatt auf gecachte Tokens', { min: 0, max: 100, step: 5, suffix: '%', hint: 'anbieterabhängig' }),
            f('wh', 'Energie pro Anfrage', { min: 0, step: 0.01, suffix: 'Wh', hint: 'Default 0,24 Wh: Google-Messung 2025 für einen medianen Gemini-Textprompt – nur Größenordnung' }))),
      ),
      out),
    mdEl(`**Einordnung:** Kosten skalieren linear mit Volumen und Tokens – lange Kontexte (z. B. ganze Dokumente im Prompt) sind oft der größte Hebel. Große Reasoning-Modelle erzeugen zusätzlich viele „Denk“-Tokens. Der Energiewert ist ein grober Richtwert; je nach Modellgröße, Kontextlänge und Rechenzentrum kann der echte Verbrauch deutlich höher liegen.`, 'div', 'md w-explain small'),
  );

  function render() {
    const idx = CLASSES.findIndex((k) => k.id === cls);
    const smaller = idx > 0 ? CLASSES[idx - 1].id : null;
    const cache = { cacheShare: v.cacheShare / 100, cacheDiscount: v.cacheDiscount / 100 };
    const base = costs(v, prices, cls);
    const rows = [
      { label: 'Aktuelle Auswahl', r: base },
      smaller ? { label: `Mit kleinerem Modell (${CLASSES[idx - 1].label.split(' (')[0]})`, r: costs(v, prices, smaller) } : null,
      { label: `Mit Caching (${fmtNum(v.cacheShare)} % gecacht, −${fmtNum(v.cacheDiscount)} %)`, r: costs(v, prices, cls, cache) },
      smaller ? { label: 'Kleineres Modell + Caching', r: costs(v, prices, smaller, cache) } : null,
    ].filter(Boolean);
    const max = Math.max(...rows.map((x) => x.r.month), 1e-9);
    const kwhMonth = (base.reqMonth * v.wh) / 1000;
    fill(out, 
      h('div.w-kpis',
        h('div.kpi', h('b', fmtEur(base.month, base.month < 100 ? 2 : 0)), h('span', 'Kosten pro Monat')),
        h('div.kpi', h('b', fmtEur(base.year, 0)), h('span', 'Kosten pro Jahr')),
        h('div.kpi', h('b', fmtNum(base.reqMonth)), h('span', `Anfragen/Monat · ${fmtNum(base.tokMonth / 1e6, 1)} Mio. Tokens`)),
      ),
      h('p.small.muted', `≈ ${fmtEur(base.perReq, 4)} pro Anfrage`),
      h('h4', 'Vergleich'),
      h('div.w-tc-bars', rows.map((x) => {
        const saving = base.month > 0 ? 1 - x.r.month / base.month : 0;
        return h('div.w-tc-bar',
          h('div.w-tc-barlabel.small', h('span', x.label), h('b', `${fmtEur(x.r.month, x.r.month < 100 ? 2 : 0)}/Monat`), saving > 0.005 ? h('span.chip.chip-ok', `−${fmtNum(saving * 100)} %`) : null),
          h('div.w-tc-track', h('i', { style: { width: `${Math.max(1, (x.r.month / max) * 100)}%` } })));
      })),
      h('h4', 'Energie (grob)'),
      h('div.w-kpis',
        h('div.kpi', h('b', `${fmtNum(kwhMonth, kwhMonth < 10 ? 2 : 0)} kWh`), h('span', 'pro Monat')),
        h('div.kpi', h('b', `${fmtNum(kwhMonth * 12, kwhMonth * 12 < 10 ? 2 : 0)} kWh`), h('span', 'pro Jahr')),
        h('div.kpi', h('b', `${fmtNum((kwhMonth * 1000) / 10, 0)} h`), h('span', 'entspricht einer 10-W-LED-Lampe pro Monat'))),
    );
  }

  render();
  return () => {};
}
