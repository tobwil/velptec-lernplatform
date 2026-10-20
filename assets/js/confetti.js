// Pixel-Konfetti auf einem Vollbild-Canvas. Respektiert Einstellung und prefers-reduced-motion.
import { store } from './store.js';
import { prefersReducedMotion } from './ui.js';

let canvas, ctx, parts = [], raf = 0;
const COLORS = ['#ffb257', '#ffd166', '#8aa2ff', '#3554d1', '#4fd1a1', '#ff7d87', '#c084fc'];

function ensure() {
  if (canvas) return;
  canvas = document.createElement('canvas');
  canvas.className = 'confetti-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);
  ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize();
  addEventListener('resize', resize);
}

/**
 * confetti({ count, x, y, spread, rain })
 * x/y relativ (0..1). rain=true lässt es von oben regnen.
 */
export function confetti({ count = 140, x = 0.5, y = 0.35, spread = 1, rain = false, force = false } = {}) {
  if (!force && (!store.settings.confetti || prefersReducedMotion())) return;
  ensure();
  const W = canvas.width, H = canvas.height;
  for (let i = 0; i < count; i++) {
    const size = 4 + Math.floor(Math.random() * 3) * 2;
    if (rain) {
      parts.push({ x: Math.random() * W, y: -20 - Math.random() * H * 0.6, vx: (Math.random() - 0.5) * 1.5, vy: 2 + Math.random() * 3, size, c: COLORS[i % COLORS.length], rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, life: 1 });
    } else {
      const a = Math.random() * Math.PI * 2;
      const sp = (4 + Math.random() * 9) * spread;
      parts.push({ x: x * W, y: y * H, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 6, size, c: COLORS[i % COLORS.length], rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, life: 1 });
    }
  }
  if (!raf) raf = requestAnimationFrame(tick);
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  parts = parts.filter((p) => p.life > 0 && p.y < canvas.height + 30);
  for (const p of parts) {
    p.vy += 0.22;
    p.vx *= 0.985;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    if (p.vy > 2) p.life -= 0.004;
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.5));
    ctx.translate(Math.round(p.x), Math.round(p.y));
    // „Pixel-Flattern": Breite pendelt zwischen voll und schmal
    const w = Math.max(2, Math.round(Math.abs(Math.cos(p.rot)) * p.size));
    ctx.fillStyle = p.c;
    ctx.fillRect(-w / 2, -p.size / 2, w, p.size);
    ctx.restore();
  }
  if (parts.length) raf = requestAnimationFrame(tick);
  else { raf = 0; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}

/** „Ab und an" – kleiner Zufallsregen als Überraschung. */
export function maybeSurprise(chance = 0.08) {
  if (Math.random() < chance) {
    confetti({ rain: true, count: 90 });
    return true;
  }
  return false;
}
