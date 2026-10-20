// Kleine DOM- und Darstellungshelfer ohne Abhängigkeiten.

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/**
 * Hyperscript: h('div.card#x', {onclick, class, style, dataset, html}, ...children)
 * Strings werden als Text eingefügt (sicher). `html` setzt bewusst innerHTML (nur für vertrauenswürdiges/escaptes Markup).
 */
export function h(tag, attrs, ...children) {
  if (attrs == null || typeof attrs !== 'object' || attrs instanceof Node || Array.isArray(attrs)) {
    children.unshift(attrs);
    attrs = {};
  }
  const [, name = 'div', rest = ''] = tag.match(/^([a-z0-9-]*)(.*)$/i);
  const el = document.createElement(name || 'div');
  rest.replace(/([.#])([\w-]+)/g, (_, t, v) => {
    if (t === '.') el.classList.add(v);
    else el.id = v;
  });
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className += (el.className ? ' ' : '') + v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, v);
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}

export function clear(el) {
  while (el.firstChild) el.firstChild.remove();
  return el;
}

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function safeUrl(u) {
  const url = String(u).trim();
  if (/^(https?:|mailto:|#|\.\/|docs\/|media\/)/i.test(url)) return url;
  return '#';
}

/** Inline-Markdown: **fett**, *kursiv*, `code`, [text](url). Eingabe wird zuerst escaped. */
export function mdInline(src) {
  let s = esc(src);
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
    const href = safeUrl(u.replace(/&amp;/g, '&'));
    const ext = /^https?:/i.test(href);
    return `<a href="${esc(href)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${t}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
  return s;
}

/** Block-Markdown-Subset → HTML-String (sicher, da alles escaped wird). */
export function md(src) {
  const lines = String(src ?? '').replace(/\r/g, '').split('\n');
  const out = [];
  let list = null;
  let para = [];
  const flushPara = () => {
    if (para.length) out.push(`<p>${mdInline(para.join(' '))}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list) out.push(`<${list.tag}>${list.items.map((i) => `<li>${mdInline(i)}</li>`).join('')}</${list.tag}>`);
    list = null;
  };
  for (let li = 0; li < lines.length; li++) {
    const raw = lines[li];
    const line = raw.trimEnd();
    let m;
    if (!line.trim()) { flushPara(); flushList(); continue; }
    // Pipe-Tabelle: Kopfzeile + Trennzeile |---|---|
    if (/^\s*\|.*\|\s*$/.test(line) && /^\s*\|?\s*:?-{2,}/.test(lines[li + 1] || '')) {
      flushPara(); flushList();
      const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(line);
      const rows = [];
      li += 2;
      while (li < lines.length && /^\s*\|.*\|\s*$/.test(lines[li])) rows.push(cells(lines[li++]));
      li--;
      out.push(`<div class="tbl-wrap"><table class="tbl"><thead><tr>${head.map((c) => `<th>${mdInline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${mdInline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if ((m = line.match(/^\s*#{1,4}\s+(.*)$/))) { flushPara(); flushList(); out.push(`<h4>${mdInline(m[1])}</h4>`); continue; }
    if ((m = line.match(/^\s*>\s?(.*)$/))) { flushPara(); flushList(); out.push(`<blockquote>${mdInline(m[1])}</blockquote>`); continue; }
    if ((m = line.match(/^\s*[-*•]\s+(.*)$/))) {
      flushPara();
      if (!list || list.tag !== 'ul') { flushList(); list = { tag: 'ul', items: [] }; }
      list.items.push(m[1]);
      continue;
    }
    if ((m = line.match(/^\s*\d+[.)]\s+(.*)$/))) {
      flushPara();
      if (!list || list.tag !== 'ol') { flushList(); list = { tag: 'ol', items: [] }; }
      list.items.push(m[1]);
      continue;
    }
    if (list && /^\s{2,}\S/.test(raw)) { list.items[list.items.length - 1] += ' ' + line.trim(); continue; }
    flushList();
    para.push(line.trim());
  }
  flushPara();
  flushList();
  return out.join('\n');
}

export function mdEl(src, tag = 'div', cls = 'md') {
  return h(`${tag}.${cls}`, { html: md(src) });
}

// ---------- Toasts ----------
let toastHost;
export function toast(msg, { icon = '✨', type = 'info', timeout = 3200 } = {}) {
  if (!toastHost) {
    toastHost = h('div.toast-host', { role: 'status', 'aria-live': 'polite' });
    document.body.append(toastHost);
  }
  const t = h(`div.toast.toast-${type}`, h('span.toast-icon', icon), h('span', msg));
  toastHost.append(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, timeout);
}

// ---------- Modal ----------
export function modal(title, body, { actions = [], wide = false } = {}) {
  const close = () => { wrap.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  const wrap = h('div.modal-wrap', { onclick: (e) => { if (e.target === wrap) close(); } },
    h(`div.modal${wide ? '.modal-wide' : ''}`, { role: 'dialog', 'aria-modal': 'true', 'aria-label': title },
      h('div.modal-head', h('h3', title), h('button.icon-btn', { onclick: close, 'aria-label': 'Schließen' }, '✕')),
      h('div.modal-body', body),
      actions.length ? h('div.modal-actions', actions.map((a) => h(`button.btn${a.primary ? '.btn-primary' : ''}`, { onclick: () => { if (a.onClick?.() !== false) close(); } }, a.label))) : null,
    ));
  document.body.append(wrap);
  document.addEventListener('keydown', onKey);
  wrap.querySelector('button')?.focus();
  return { close, el: wrap };
}

export function shuffle(arr, rnd = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function hashStr(s) {
  let h1 = 2166136261;
  for (let i = 0; i < s.length; i++) { h1 ^= s.charCodeAt(i); h1 = Math.imul(h1, 16777619); }
  return h1 >>> 0;
}

export function fmtDate(ts) {
  return new Date(ts).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

// ---------- Pixel-Icons (16×16, aus Code gezeichnet) ----------
const ICONS = {
  brain: ['0000011111000000', '0001100000110000', '0010011100001000', '0100100010000100', '0101000001110100', '1001001000001010', '1000010000110010', '1011001001000010', '1000110110011010', '1001000001100110', '0100011000000100', '0100100111001000', '0011000000110000', '0000111111000000', '0000001100000000', '0000001100000000'],
  chart: ['0000000000000000', '0000000000001110', '0000000000001010', '0000000001101010', '0000000001011010', '0000001101011010', '0000001011011010', '0011001011011010', '0010101011011010', '0010101011011010', '0010101011011010', '0010101011011010', '0010101011011010', '0111111111111111', '0000000000000000', '0000000000000000'],
  target: ['0000011111100000', '0001100000011000', '0010000000000100', '0100011111100010', '0100100000010010', '1001000110001001', '1001001111001001', '1001001111001001', '1001000110001001', '1000100000010001', '0100011111100010', '0100000000000010', '0010000000000100', '0001100000011000', '0000011111100000', '0000000000000000'],
  gear: ['0000001111000000', '0000001001000000', '0011001001001100', '0010111001110100', '0001000000001000', '0010001111000100', '1110010000100111', '1000010000100001', '1000010000100001', '1110010000100111', '0010001111000100', '0001000000001000', '0010111001110100', '0011001001001100', '0000001001000000', '0000001111000000'],
  shield: ['0000001111000000', '0000111001110000', '0111100000011110', '0100000000000010', '0100000110000010', '0100000110000010', '0100011111100010', '0100011111100010', '0100000110000010', '0010000110000100', '0010000000000100', '0001000000001000', '0000100000010000', '0000011001100000', '0000000110000000', '0000000000000000'],
  people: ['0000000000000000', '0001100000011000', '0011110000111100', '0011110000111100', '0001100000011000', '0000000110000000', '0111111111111110', '1111111111111111', '1101101111011011', '1101101111011011', '1101101111011011', '0001100110011000', '0001100110011000', '0001100000011000', '0000000000000000', '0000000000000000'],
  gauge: ['0000000000000000', '0000011111100000', '0001100000011000', '0010000000000100', '0100010000000010', '0100001000000010', '1000000100000001', '1000000011000001', '1000000011000001', '1000000000000001', '0100000000000010', '0111111111111110', '0000000000000000', '0000000000000000', '0000000000000000', '0000000000000000'],
  book: ['0000000000000000', '0111110001111100', '1000001010000010', '1011101010111010', '1000001010000010', '1011101010111010', '1000001010000010', '1011101010111010', '1000001010000010', '1011101010111010', '1000001010000010', '1000001010000010', '0111110101111100', '0000001110000000', '0000000000000000', '0000000000000000'],
  spark: ['0000000100000000', '0000000100000000', '0000001110000000', '0000001110000000', '0000011111000000', '0001111111110000', '1111111111111110', '0001111111110000', '0000011111000000', '0000001110000000', '0000001110000100', '0000000100001110', '0000000100000100', '0010000000000000', '0111000000000000', '0010000000000000'],
  flow: ['0000000000000000', '1111000000000000', '1001000000000000', '1001111111000000', '1111000001000000', '0000000001000000', '0000000111100000', '0000000100100000', '0000000100111111', '0000000111100001', '0000000000000001', '0000000000000001', '0000000000001111', '0000000000001001', '0000000000001001', '0000000000001111'],
  box: ['0000000110000000', '0000011001100000', '0001100000011000', '0110000000000110', '1001100000011001', '1000011001100001', '1000000110000001', '1000000100000001', '1000000100000001', '1000000100000001', '1000000100000001', '0110000100000110', '0001100100011000', '0000011101100000', '0000000110000000', '0000000000000000'],
  leaf: ['0000000000000000', '0000000001111110', '0000001110000010', '0000110000000010', '0001000000000100', '0010000000100100', '0010000001000100', '0100000010001000', '0100000100001000', '0100001000010000', '0100010000100000', '0010100011000000', '0011111100000000', '0100000000000000', '1000000000000000', '0000000000000000'],
  trophy: ['0000000000000000', '0011111111111100', '1110111111110111', '1010111111110101', '1010111111110101', '0110111111110110', '0010111111110100', '0001111111111000', '0000011111100000', '0000000110000000', '0000000110000000', '0000001111000000', '0000011111100000', '0000111111110000', '0000111111110000', '0000000000000000'],
  upload: ['0000000110000000', '0000001111000000', '0000011111100000', '0000111111110000', '0001101111011000', '0000001111000000', '0000001111000000', '0000001111000000', '0000001111000000', '0000001111000000', '0000000000000000', '0110000000000110', '0110000000000110', '0111111111111110', '0111111111111110', '0000000000000000'],
};

export function pixelIcon(name, size = 32, color = 'currentColor') {
  const rows = ICONS[name] || ICONS.spark;
  const rects = [];
  rows.forEach((r, y) => [...r].forEach((c, x) => { if (c === '1') rects.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`); }));
  return h('span.pixel-icon', {
    'aria-hidden': 'true',
    html: `<svg viewBox="0 0 16 16" width="${size}" height="${size}" fill="${color}" shape-rendering="crispEdges">${rects.join('')}</svg>`,
  });
}

/** Deterministischer Pixel-Avatar (5×5 symmetrisch) aus einem Namen. */
export function pixelAvatar(name, size = 40) {
  const seed = hashStr(name || '?');
  const hue = seed % 360;
  const cells = [];
  for (let y = 0; y < 5; y++) for (let x = 0; x < 3; x++) {
    if ((seed >> (y * 3 + x)) & 1) {
      cells.push(`<rect x="${x + 1}" y="${y + 1}" width="1" height="1"/>`);
      if (x < 2) cells.push(`<rect x="${5 - x}" y="${y + 1}" width="1" height="1"/>`);
    }
  }
  return h('span.pixel-avatar', {
    'aria-hidden': 'true',
    style: { width: size + 'px', height: size + 'px' },
    html: `<svg viewBox="0 0 7 7" width="${size}" height="${size}" shape-rendering="crispEdges"><rect width="7" height="7" fill="hsl(${hue} 70% 92%)"/><g fill="hsl(${hue} 65% 42%)">${cells.join('')}</g></svg>`,
  });
}
