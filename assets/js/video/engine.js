// Pixel-Grafik-Engine für das Motion-Graphic-Video. Alles wird aus Code gezeichnet:
// eigener 5×7-Bitmap-Font, Sprites als Zeichenketten, deterministische Zufallswerte.
// Keine DOM-Abhängigkeit außer einem Canvas-2D-Kontext → auch für Offline-Rendering nutzbar.

export const W = 320;
export const H = 180;

export const PAL = {
  bg0: '#0b0f1d', bg1: '#131a33', bg2: '#1c2547', grid: '#26305c',
  ink: '#e8ecff', dim: '#7f8bb3', blue: '#5b7cff', blue2: '#8aa2ff',
  amber: '#ffb257', yellow: '#ffd166', mint: '#4fd1a1', red: '#ff6b7a',
  purple: '#b48cff', white: '#ffffff', dark: '#060912', grey: '#4a5373',
};

// 5×7-Font: je Zeichen 7 Zeilen à 5 Bit (Bit 4 = links).
const G = {
  A: [14, 17, 17, 31, 17, 17, 17], B: [30, 17, 17, 30, 17, 17, 30], C: [14, 17, 16, 16, 16, 17, 14], D: [30, 17, 17, 17, 17, 17, 30],
  E: [31, 16, 16, 30, 16, 16, 31], F: [31, 16, 16, 30, 16, 16, 16], G: [14, 17, 16, 23, 17, 17, 15], H: [17, 17, 17, 31, 17, 17, 17],
  I: [14, 4, 4, 4, 4, 4, 14], J: [7, 2, 2, 2, 2, 18, 12], K: [17, 18, 20, 24, 20, 18, 17], L: [16, 16, 16, 16, 16, 16, 31],
  M: [17, 27, 21, 21, 17, 17, 17], N: [17, 17, 25, 21, 19, 17, 17], O: [14, 17, 17, 17, 17, 17, 14], P: [30, 17, 17, 30, 16, 16, 16],
  Q: [14, 17, 17, 17, 21, 18, 13], R: [30, 17, 17, 30, 20, 18, 17], S: [15, 16, 16, 14, 1, 1, 30], T: [31, 4, 4, 4, 4, 4, 4],
  U: [17, 17, 17, 17, 17, 17, 14], V: [17, 17, 17, 17, 17, 10, 4], W: [17, 17, 17, 21, 21, 21, 10], X: [17, 17, 10, 4, 10, 17, 17],
  Y: [17, 17, 10, 4, 4, 4, 4], Z: [31, 1, 2, 4, 8, 16, 31],
  'Ä': [10, 0, 14, 17, 31, 17, 17], 'Ö': [10, 0, 14, 17, 17, 17, 14], 'Ü': [10, 0, 17, 17, 17, 17, 14],
  0: [14, 17, 19, 21, 25, 17, 14], 1: [4, 12, 4, 4, 4, 4, 14], 2: [14, 17, 1, 2, 4, 8, 31], 3: [31, 2, 4, 2, 1, 17, 14],
  4: [2, 6, 10, 18, 31, 2, 2], 5: [31, 16, 30, 1, 1, 17, 14], 6: [6, 8, 16, 30, 17, 17, 14], 7: [31, 1, 2, 4, 8, 8, 8],
  8: [14, 17, 17, 14, 17, 17, 14], 9: [14, 17, 17, 15, 1, 2, 12],
  ' ': [0, 0, 0, 0, 0, 0, 0], '.': [0, 0, 0, 0, 0, 12, 12], ',': [0, 0, 0, 0, 12, 4, 8], ':': [0, 12, 12, 0, 12, 12, 0],
  ';': [0, 12, 12, 0, 12, 4, 8], '!': [4, 4, 4, 4, 4, 0, 4], '?': [14, 17, 1, 2, 4, 0, 4], '-': [0, 0, 0, 31, 0, 0, 0],
  '+': [0, 4, 4, 31, 4, 4, 0], '/': [1, 1, 2, 4, 8, 16, 16], '%': [24, 25, 2, 4, 8, 19, 3], '(': [2, 4, 8, 8, 8, 4, 2],
  ')': [8, 4, 2, 2, 2, 4, 8], "'": [4, 4, 8, 0, 0, 0, 0], '"': [10, 10, 0, 0, 0, 0, 0], '>': [8, 4, 2, 1, 2, 4, 8],
  '<': [2, 4, 8, 16, 8, 4, 2], '=': [0, 0, 31, 0, 31, 0, 0], '&': [12, 18, 20, 8, 21, 18, 13], '#': [10, 10, 31, 10, 31, 10, 10],
  '*': [0, 4, 21, 14, 21, 4, 0], '€': [7, 8, 30, 8, 30, 8, 7], '@': [14, 17, 23, 21, 23, 16, 14], '_': [0, 0, 0, 0, 0, 0, 31],
  '·': [0, 0, 0, 4, 0, 0, 0], '✓': [0, 1, 1, 2, 18, 12, 4], '[': [14, 8, 8, 8, 8, 8, 14], ']': [14, 2, 2, 2, 2, 2, 14], '×': [0, 17, 10, 4, 10, 17, 0],
};

function glyph(ch) {
  return G[ch] || G[ch.toUpperCase()] || G['?'];
}

export function normText(s) {
  return String(s).replace(/ß/g, 'SS').replace(/→/g, '>').replace(/[–—]/g, '-').replace(/[„“”]/g, '"').toUpperCase();
}

/** Deterministischer Pseudozufall 0..1 für (a, b). */
export function rnd(a, b = 0) {
  let x = Math.imul((a | 0) ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul((b | 0) + 0x632be5ab, 0xc2b2ae35);
  x ^= x >>> 15; x = Math.imul(x, 0x2c1b3c6d); x ^= x >>> 12; x = Math.imul(x, 0x297a2d39); x ^= x >>> 15;
  return (x >>> 0) / 4294967296;
}

export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t) => 1 - Math.pow(1 - clamp(t), 3);
export const lerp = (a, b, t) => a + (b - a) * t;
/** Fortschritt 0..1 zwischen Zeitpunkten a und b. */
export const seg = (t, a, b) => clamp((t - a) / (b - a));

export class Pix {
  constructor(ctx) {
    this.c = ctx;
    ctx.imageSmoothingEnabled = false;
  }
  clear(col = PAL.bg0) { this.rect(0, 0, W, H, col); }
  rect(x, y, w, h, col) { this.c.fillStyle = col; this.c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); }
  px(x, y, col) { this.rect(x, y, 1, 1, col); }
  frame(x, y, w, h, col, t = 1) {
    this.rect(x, y, w, t, col); this.rect(x, y + h - t, w, t, col);
    this.rect(x, y, t, h, col); this.rect(x + w - t, y, t, h, col);
  }
  /** Box mit „Pixel-Ecken" (abgeschnittene Ecken). */
  box(x, y, w, h, fill, border) {
    x = Math.round(x); y = Math.round(y);
    this.rect(x + 1, y, w - 2, h, border || fill);
    this.rect(x, y + 1, w, h - 2, border || fill);
    if (border) { this.rect(x + 1, y + 1, w - 2, h - 2, fill); }
  }
  line(x0, y0, x1, y1, col, dash = 0, offset = 0) {
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy, i = 0;
    this.c.fillStyle = col;
    for (;;) {
      if (!dash || Math.floor((i + offset) / dash) % 2 === 0) this.c.fillRect(x0, y0, 1, 1);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
      i++;
    }
  }
  circle(cx, cy, r, col, fill = true) {
    this.c.fillStyle = col;
    for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) {
      const d = x * x + y * y;
      if (fill ? d <= r * r + r * 0.6 : d <= r * r + r * 0.6 && d >= (r - 1) * (r - 1) + (r - 1) * 0.6) this.c.fillRect(Math.round(cx + x), Math.round(cy + y), 1, 1);
    }
  }
  textWidth(s, scale = 1) { return normText(s).length * 6 * scale - scale; }
  /** Text im 5×7-Font. align: left|center|right. reveal: Anzahl sichtbarer Zeichen. */
  text(s, x, y, { col = PAL.ink, scale = 1, align = 'left', shadow = null, reveal = Infinity } = {}) {
    const str = normText(s);
    const w = this.textWidth(str, scale);
    let cx = Math.round(align === 'center' ? x - w / 2 : align === 'right' ? x - w : x);
    y = Math.round(y);
    const n = Math.min(str.length, Math.floor(reveal));
    for (let i = 0; i < n; i++) {
      const g = glyph(str[i]);
      for (let r = 0; r < 7; r++) for (let b = 0; b < 5; b++) {
        if (g[r] & (16 >> b)) {
          if (shadow) this.rect(cx + b * scale + scale, y + r * scale + scale, scale, scale, shadow);
          this.rect(cx + b * scale, y + r * scale, scale, scale, col);
        }
      }
      cx += 6 * scale;
    }
    return w;
  }
  /** Sprite aus Zeichenketten; Zeichen → Palettenfarbe, '.' = transparent. */
  sprite(rows, x, y, pal, scale = 1, flip = false) {
    x = Math.round(x); y = Math.round(y);
    rows.forEach((row, ry) => {
      for (let rx = 0; rx < row.length; rx++) {
        const ch = flip ? row[row.length - 1 - rx] : row[rx];
        const col = pal[ch];
        if (col) this.rect(x + rx * scale, y + ry * scale, scale, scale, col);
      }
    });
  }
}

// ---------- Sprites ----------
export const ROBOT = {
  pal: { k: '#0d1330', b: PAL.blue, l: PAL.blue2, w: PAL.white, a: PAL.amber, y: PAL.yellow, m: PAL.mint, d: '#3a4fae' },
  idle: [
    '.....aa.....',
    '.....yy.....',
    '..kkkkkkkk..',
    '.kllllllllk.',
    '.klwwlllwwlk',
    '.klwkllwklk.',
    '.kllllllllk.',
    '.klllmmmllk.',
    '..kkkkkkkk..',
    '.kbbbbbbbbk.',
    'kdkbbaabbkdk',
    'kdkbbbbbbkdk',
    '..kbbbbbbk..',
    '..kdk..kdk..',
    '..kkk..kkk..',
  ],
  blink: [
    '.....aa.....',
    '.....yy.....',
    '..kkkkkkkk..',
    '.kllllllllk.',
    '.kllllllllk.',
    '.klkkllkklk.',
    '.kllllllllk.',
    '.klllmmmllk.',
    '..kkkkkkkk..',
    '.kbbbbbbbbk.',
    'kdkbbaabbkdk',
    'kdkbbbbbbkdk',
    '..kbbbbbbk..',
    '..kdk..kdk..',
    '..kkk..kkk..',
  ],
  walk: [
    '.....aa.....',
    '.....yy.....',
    '..kkkkkkkk..',
    '.kllllllllk.',
    '.klwwlllwwlk',
    '.klwkllwklk.',
    '.kllllllllk.',
    '.klllmmmllk.',
    '..kkkkkkkk..',
    '.kbbbbbbbbk.',
    'kdkbbaabbkdk',
    'kdkbbbbbbkdk',
    '..kbbbbbbk..',
    '.kdk....kdk.',
    '.kkk....kkk.',
  ],
  wave: [
    '.....aa...kd',
    '.....yy...kd',
    '..kkkkkkkkk.',
    '.kllllllllk.',
    '.klwwlllwwlk',
    '.klwkllwklk.',
    '.kllllllllk.',
    '.klllmmmllk.',
    '..kkkkkkkk..',
    '.kbbbbbbbbk.',
    'kdkbbaabbk..',
    'kdkbbbbbbk..',
    '..kbbbbbbk..',
    '..kdk..kdk..',
    '..kkk..kkk..',
  ],
};

export const PERSON = [
  '.hh.',
  '.ss.',
  'cccc',
  'cccc',
  '.pp.',
  '.p.p',
];

export const DOC = [
  'wwwww.',
  'wkkkww',
  'wwwwww',
  'wkkkkw',
  'wwwwww',
  'wkkkkw',
  'wwwwww',
];

export const MAIL = [
  'wwwwwwww',
  'wkwwwwkw',
  'wwkwwkww',
  'wwwkkwww',
  'wwwwwwww',
];

export function drawRobot(p, x, y, t, { mode = 'idle', scale = 2, flip = false } = {}) {
  let rows = ROBOT.idle;
  if (mode === 'walk') rows = Math.floor(t * 6) % 2 ? ROBOT.walk : ROBOT.idle;
  else if (mode === 'wave') rows = Math.floor(t * 4) % 2 ? ROBOT.wave : ROBOT.idle;
  else if (Math.floor(t * 10) % 37 === 0) rows = ROBOT.blink;
  const bob = mode === 'walk' ? (Math.floor(t * 6) % 2) * scale * -1 : Math.round(Math.sin(t * 3) * 0.6) * scale;
  p.sprite(rows, x, y + bob, ROBOT.pal, scale, flip);
}

export function drawBubble(p, x, y, text, { col = PAL.white, ink = '#111633', reveal = Infinity, pointer = 'left' } = {}) {
  const w = p.textWidth(text) + 10;
  p.box(x, y, w, 15, col);
  const tx = pointer === 'left' ? x + 6 : x + w - 9;
  p.rect(tx, y + 15, 3, 2, col);
  p.rect(tx + (pointer === 'left' ? -1 : 2), y + 17, 2, 1, col);
  p.text(text, x + 5, y + 4, { col: ink, reveal });
  return w;
}

/** Sternenhimmel mit Parallaxe – deterministisch. */
export function stars(p, t, n = 70, speed = 6) {
  for (let i = 0; i < n; i++) {
    const layer = 1 + (i % 3);
    const x = (rnd(i, 1) * W * 2 - t * speed * layer) % W;
    const y = rnd(i, 2) * H;
    const tw = (Math.sin(t * 3 + i) + 1) / 2;
    p.px((x + W) % W, y, layer === 3 ? PAL.ink : tw > 0.5 ? PAL.dim : PAL.grey);
  }
}

/** Retro-Perspektivgitter am Boden. */
export function floorGrid(p, t, horizon = 128, col = PAL.grid) {
  p.rect(0, horizon, W, H - horizon, PAL.bg1);
  for (let i = 0; i < 8; i++) {
    const z = ((i + (t * 1.2) % 1) / 8);
    const y = horizon + Math.pow(z, 2.2) * (H - horizon);
    p.rect(0, y, W, 1, col);
  }
  for (let i = -10; i <= 10; i++) p.line(W / 2 + i * 6, horizon, W / 2 + i * 40, H, col);
  p.rect(0, horizon, W, 1, PAL.blue);
}

export function header(p, t, label, { col = PAL.amber, y = 10 } = {}) {
  const r = seg(t, 0, 0.8) * label.length;
  p.text(label, W / 2, y, { col, scale: 2, align: 'center', shadow: PAL.dark, reveal: r });
  const w = p.textWidth(label, 2) * easeOut(seg(t, 0.4, 1.2));
  p.rect(W / 2 - w / 2, y + 17, w, 1, PAL.blue);
}

export function caption(p, t, text, start = 1.5, { col = PAL.ink, y = 164 } = {}) {
  if (t < start) return;
  const r = (t - start) * 28;
  const w = p.textWidth(text) + 12;
  p.rect(W / 2 - w / 2, y - 4, w, 15, 'rgba(6,9,18,0.82)');
  p.text(text, W / 2, y, { col, align: 'center', reveal: r });
}
