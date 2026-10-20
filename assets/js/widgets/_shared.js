// Gemeinsame Helfer für die interaktiven Widgets (keine Abhängigkeiten).
import { h, toast as uiToast, pixelIcon, prefersReducedMotion } from '../ui.js';

export { prefersReducedMotion };

/** Sicherer ctx: alle Methoden vorhanden, award nur einmal je Widget-Instanz. */
export function safeCtx(ctx, widgetName) {
  const c = ctx || {};
  let awarded = false;
  return {
    award(xp = 10, reason = `Widget: ${widgetName}`) {
      if (awarded) return false;
      awarded = true;
      try { c.award?.(xp, reason); } catch (e) { console.warn(e); }
      return true;
    },
    get awarded() { return awarded; },
    confetti(opts) {
      if (prefersReducedMotion()) return;
      try { c.confetti?.(opts); } catch (e) { console.warn(e); }
    },
    toast(msg, opts) {
      try { (c.toast || uiToast)(msg, opts); } catch { uiToast(msg, opts); }
    },
    aiEnabled() {
      try { return !!c.ai?.enabled?.(); } catch { return false; }
    },
    async chat(messages, opts) {
      if (!c.ai?.chat) throw new Error('KI nicht verfügbar');
      return c.ai.chat(messages, opts);
    },
  };
}

/** Kopfzeile: Icon, Titel, kurze Anleitung. */
export function widgetHead(title, intro, icon = 'spark') {
  return h('div.w-head',
    h('span.w-head-icon', pixelIcon(icon, 22)),
    h('div.w-head-text', h('h3.w-title', title), intro ? h('p.w-intro', intro) : null),
  );
}

/** Wurzelelement vorbereiten. */
export function setupRoot(el, name) {
  while (el.firstChild) el.firstChild.remove();
  el.classList.add('w', `w-${name}`);
  return el;
}

let uidCounter = 0;
export const uid = (p = 'w') => `${p}-${++uidCounter}-${Math.random().toString(36).slice(2, 6)}`;

/** CSS-Variable lesen (für Canvas). */
export function cssVar(name, fallback = '#888') {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

/** Theme-Wechsel beobachten (data-theme oder System). Gibt Unsubscribe zurück. */
export function onThemeChange(cb) {
  const mo = new MutationObserver(() => cb());
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
  const onMq = () => cb();
  mq?.addEventListener?.('change', onMq);
  return () => { mo.disconnect(); mq?.removeEventListener?.('change', onMq); };
}

/** SVG-Hyperscript. */
const SVGNS = 'http://www.w3.org/2000/svg';
export function s(tag, attrs = {}, ...children) {
  const el = document.createElementNS(SVGNS, tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.setAttribute('class', v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else el.setAttribute(k, v);
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

const nf = (d) => new Intl.NumberFormat('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d });
export const fmtNum = (n, d = 0) => (Number.isFinite(n) ? nf(d).format(n) : '–');
export const fmtEur = (n, d = 0) => (Number.isFinite(n) ? `${nf(d).format(n)} €` : '–');
export const fmtPct = (n, d = 0) => (Number.isFinite(n) ? `${nf(d).format(n * 100)} %` : '–');
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/** Zahlenfeld mit Label. onInput(value:number) */
export function numField({ label, value, min, max, step = 1, hint, suffix, onInput, id = uid('n') }) {
  const input = h('input.input', { type: 'number', id, value: String(value), min, max, step, inputmode: 'decimal' });
  input.addEventListener('input', () => {
    const v = parseFloat(String(input.value).replace(',', '.'));
    if (Number.isFinite(v)) onInput?.(v);
  });
  return {
    el: h('label.field.w-field', { for: id },
      h('span', label),
      suffix ? h('span.w-input-suffix', input, h('span.w-suffix', suffix)) : input,
      hint ? h('span.hint', hint) : null),
    input,
  };
}

/** Schieberegler mit Live-Wert. format(v) → String */
export function rangeField({ label, value, min, max, step = 1, format = (v) => String(v), onInput, id = uid('r'), hint }) {
  const out = h('output.w-range-val', { for: id }, format(value));
  const input = h('input', { type: 'range', id, min, max, step, value: String(value) });
  input.setAttribute('aria-valuetext', format(value));
  input.addEventListener('input', () => {
    const v = parseFloat(input.value);
    out.textContent = format(v);
    input.setAttribute('aria-valuetext', format(v));
    onInput?.(v);
  });
  return {
    el: h('div.w-range',
      h('label.w-range-label', { for: id }, h('span', label), out),
      input,
      hint ? h('span.hint.small.muted', hint) : null),
    input,
    set(v) { input.value = String(v); out.textContent = format(v); input.setAttribute('aria-valuetext', format(v)); },
  };
}

/** Text in die Zwischenablage (mit Fallback). */
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = h('textarea', { style: { position: 'fixed', left: '-9999px', top: '0' } });
      ta.value = text;
      document.body.append(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch { return false; }
  }
}

/** Pfeiltasten-Navigation (roving tabindex) über eine Gruppe von Buttons. */
export function rovingKeys(container, selector, { orientation = 'both', onMove } = {}) {
  const handler = (e) => {
    const items = [...container.querySelectorAll(selector)];
    const i = items.indexOf(document.activeElement);
    if (i < 0) return;
    const keys = {
      ArrowRight: orientation !== 'vertical' ? 1 : 0,
      ArrowDown: orientation !== 'horizontal' ? 1 : 0,
      ArrowLeft: orientation !== 'vertical' ? -1 : 0,
      ArrowUp: orientation !== 'horizontal' ? -1 : 0,
    };
    let n = null;
    if (e.key in keys && keys[e.key]) n = (i + keys[e.key] + items.length) % items.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = items.length - 1;
    if (n == null) return;
    e.preventDefault();
    items[n].focus();
    onMove?.(items[n], n);
  };
  container.addEventListener('keydown', handler);
  return () => container.removeEventListener('keydown', handler);
}

/** Kleiner Timer-Verwalter für Cleanup. */
export function timers() {
  const ids = new Set();
  const rafs = new Set();
  return {
    timeout(fn, ms) { const id = setTimeout(() => { ids.delete(id); fn(); }, ms); ids.add(id); return id; },
    interval(fn, ms) { const id = setInterval(fn, ms); ids.add(id); return id; },
    raf(fn) { const id = requestAnimationFrame((t) => { rafs.delete(id); fn(t); }); rafs.add(id); return id; },
    clear() { ids.forEach((id) => { clearTimeout(id); clearInterval(id); }); ids.clear(); rafs.forEach(cancelAnimationFrame); rafs.clear(); },
  };
}

export function sleep(ms, t) {
  return new Promise((res) => (t ? t.timeout(res, ms) : setTimeout(res, ms)));
}

/** Deterministischer Pseudo-Vektor (nur zur symbolischen Darstellung von Embeddings). */
export function hashToVec(text, n = 12) {
  const out = [];
  let x = 2166136261;
  const str = String(text);
  for (let i = 0; i < str.length; i++) { x ^= str.charCodeAt(i); x = Math.imul(x, 16777619); }
  for (let i = 0; i < n; i++) {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    out.push(((x >>> 0) % 1000) / 999);
  }
  return out;
}

/** Kinder ersetzen; null/false/undefined werden ignoriert, Arrays geglättet. */
export function fill(el, ...children) {
  const list = children.flat(Infinity).filter((c) => c != null && c !== false);
  el.replaceChildren(...list.map((c) => (c instanceof Node ? c : document.createTextNode(String(c)))));
  return el;
}
