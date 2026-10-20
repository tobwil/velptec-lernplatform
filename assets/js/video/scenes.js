// Szenen des Pixel-Motion-Graphic-Films „KI-Management in 100 Sekunden".
// Jede Szene ist eine reine Funktion der Zeit t (Sekunden seit Szenenstart).
import { W, H, PAL, rnd, clamp, seg, ease, easeOut, lerp, stars, floorGrid, header, caption, drawRobot, drawBubble, PERSON, DOC, MAIL } from './engine.js';

const intro = {
  id: 'intro', title: 'Intro', dur: 9,
  draw(p, t) {
    p.clear(PAL.bg0);
    stars(p, t, 80, 5);
    floorGrid(p, t, 124);
    // Sonne im Hintergrund (gestreift)
    const sy = 124 + 8 - easeOut(seg(t, 0, 2)) * 14;
    for (let y = -26; y <= 0; y++) {
      const half = Math.round(Math.sqrt(26 * 26 - y * y));
      if (y > -10 && (y & 2)) continue; // Retro-Streifen im unteren Teil
      if (sy + y >= 124) continue; // hinter dem Horizont verborgen
      p.rect(W / 2 - half, sy + y, half * 2, 1, y < -16 ? PAL.yellow : y < -8 ? PAL.amber : '#ff8f6b');
    }
    p.rect(0, 124, W, 1, PAL.blue2);
    // Titel
    const title = 'VELPTEC';
    const r = seg(t, 0.6, 2.2) * title.length;
    p.text(title, W / 2, 26, { col: PAL.ink, scale: 4, align: 'center', shadow: PAL.blue, reveal: r });
    p.text('WEITERBILDUNG', W / 2, 62, { col: PAL.dim, align: 'center', reveal: (t - 2.2) * 25 });
    p.text('KI-MANAGEMENT', W / 2, 72, { col: PAL.amber, scale: 2, align: 'center', shadow: PAL.dark, reveal: (t - 2.6) * 14 });
    // Roboter läuft herein und winkt
    const rx = lerp(-30, 136, easeOut(seg(t, 3, 5.6)));
    const mode = t < 5.6 ? 'walk' : t < 8 ? 'wave' : 'idle';
    drawRobot(p, rx, 128, t, { mode, scale: 2 });
    if (t > 6) drawBubble(p, 166, 118, 'HALLO! ICH BIN PIXEL.', { reveal: (t - 6) * 22 });
    if (t > 7.3) p.text('DEIN LERNCOACH', 172, 152, { col: PAL.mint, reveal: (t - 7.3) * 22 });
  },
};

const ki = {
  id: 'ki', title: 'Was ist KI?', dur: 10,
  draw(p, t) {
    p.clear(PAL.bg0);
    stars(p, t, 40, 2);
    header(p, t, 'WAS IST KI?');
    const layers = [3, 5, 2];
    const xs = [70, 160, 250];
    const nodes = layers.map((n, li) => Array.from({ length: n }, (_, i) => ({ x: xs[li], y: 92 + (i - (n - 1) / 2) * 20 })));
    const show = easeOut(seg(t, 0.5, 2));
    // Kanten
    for (let l = 0; l < 2; l++) for (const a of nodes[l]) for (const b of nodes[l + 1]) {
      p.line(a.x, a.y, lerp(a.x, b.x, show), lerp(a.y, b.y, show), PAL.grid);
    }
    // Signale
    if (t > 2) {
      for (let l = 0; l < 2; l++) nodes[l].forEach((a, ai) => nodes[l + 1].forEach((b, bi) => {
        const ph = ((t - 2) * 0.9 - l * 0.5 + rnd(ai, bi) * 0.2) % 1;
        if (ph < 0 || ph > 1) return;
        const x = lerp(a.x, b.x, ph), y = lerp(a.y, b.y, ph);
        p.rect(x - 1, y - 1, 2, 2, l ? PAL.amber : PAL.blue2);
      }));
    }
    nodes.forEach((layer, li) => layer.forEach((n, i) => {
      const pulse = Math.sin(t * 5 - li * 1.5 + i) > 0.6;
      p.circle(n.x, n.y, 5, PAL.bg2);
      p.circle(n.x, n.y, 5, pulse ? (li === 2 ? PAL.mint : PAL.blue2) : PAL.blue, false);
      if (pulse) p.circle(n.x, n.y, 2, PAL.white);
    }));
    p.text('EINGABE', 70, 140, { col: PAL.dim, align: 'center' });
    p.text('VERBORGENE SCHICHT', 160, 148, { col: PAL.dim, align: 'center' });
    p.text('AUSGABE', 250, 140, { col: PAL.dim, align: 'center' });
    // Disziplin-Chips
    const chips = ['ML', 'DEEP LEARNING', 'NLP', 'VISION', 'RL', 'EXPERTENSYSTEME'];
    const pos = [[34, 40], [104, 36], [210, 36], [270, 44], [24, 66], [232, 62]];
    chips.forEach((c, i) => {
      const a = seg(t, 2.5 + i * 0.55, 3 + i * 0.55);
      if (a <= 0) return;
      const [cx, cy] = pos[i];
      const yy = cy + Math.round(Math.sin(t * 2 + i) * 1.5) + (1 - easeOut(a)) * 8;
      const w = p.textWidth(c) + 8;
      p.box(cx - w / 2, yy, w, 12, PAL.bg2, i % 2 ? PAL.amber : PAL.mint);
      p.text(c, cx, yy + 3, { col: PAL.ink, align: 'center' });
    });
    caption(p, t, 'WAHRNEHMEN · LERNEN · ENTSCHEIDEN · HANDELN', 6);
  },
};

const daten = {
  id: 'daten', title: 'Daten als Rohstoff', dur: 9,
  draw(p, t) {
    p.clear(PAL.bg0);
    header(p, t, 'DATEN = ROHSTOFF');
    // Trichter
    const fx = 150;
    for (let y = 0; y < 30; y++) {
      const half = 40 - y;
      p.rect(fx - half, 70 + y, 2, 1, PAL.dim);
      p.rect(fx + half - 2, 70 + y, 2, 1, PAL.dim);
    }
    p.rect(fx - 10, 100, 2, 10, PAL.dim);
    p.rect(fx + 8, 100, 2, 10, PAL.dim);
    // Filter-Gitter
    for (let x = fx - 30; x < fx + 30; x += 4) p.rect(x, 84, 2, 1, PAL.amber);
    // Modell-Box
    const glow = Math.sin(t * 6) > 0 ? PAL.mint : PAL.blue2;
    p.box(fx - 26, 116, 52, 22, PAL.bg2, glow);
    p.text('MODELL', fx, 124, { col: PAL.ink, align: 'center' });
    // Mülltonne rechts
    p.box(238, 112, 30, 26, PAL.bg2, PAL.red);
    p.text('MÜLL', 253, 122, { col: PAL.red, align: 'center' });
    // Fallende Datenblöcke
    for (let i = 0; i < 26; i++) {
      const start = i * 0.28;
      const lt = t - start;
      if (lt < 0) continue;
      const bad = rnd(i, 7) < 0.35;
      const x0 = fx - 28 + rnd(i, 3) * 56;
      let x = x0, y = 30 + lt * 46;
      if (bad && y > 80) {
        const k = (y - 80) / 46;
        x = lerp(x0, 250, clamp(k * 1.2));
        y = 80 + k * 30 - Math.sin(clamp(k) * Math.PI) * 18;
        if (k > 1) continue;
      } else if (!bad && y > 84) {
        x = lerp(x0, fx - 3, clamp((y - 84) / 26));
        if (y > 122) continue;
      }
      p.rect(x, y, 6, 6, bad ? PAL.red : PAL.mint);
      if (bad) p.rect(x + 2, y + 1, 2, 4, PAL.dark);
      else p.rect(x + 1, y + 1, 4, 1, '#bff5df');
    }
    const words = ['RELEVANT', 'GENAU', 'VOLLSTÄNDIG', 'KONSISTENT', 'AKTUELL'];
    words.forEach((w, i) => {
      if (t > 1 + i * 0.7) p.text('✓ ' + w, 18, 52 + i * 14, { col: PAL.mint, reveal: (t - 1 - i * 0.7) * 20 });
    });
    caption(p, t, 'GARBAGE IN, GARBAGE OUT – DATENQUALITÄT ZUERST', 5);
  },
};

const strategie = {
  id: 'strategie', title: 'KI-Strategie', dur: 10,
  draw(p, t) {
    p.clear(PAL.bg0);
    stars(p, t, 30, 1);
    header(p, t, 'KI-STRATEGIE: 6 BAUSTEINE');
    const steps = [['VISION', ''], ['ZIELE', '& KPI'], ['GOVER-', 'NANCE'], ['USE', 'CASES'], ['RESSOUR-', 'CEN'], ['ROAD-', 'MAP']];
    const cols = [PAL.blue, PAL.blue2, PAL.purple, PAL.amber, PAL.yellow, PAL.mint];
    const stepH = (i) => 32 + i * 12;
    steps.forEach(([l1, l2], i) => {
      const a = easeOut(seg(t, 0.4 + i * 0.25, 0.9 + i * 0.25));
      const x = 12 + i * 50, w = 48, hh = stepH(i);
      const y = 150 - hh * a;
      p.rect(x, y, w, 150 - y, PAL.bg2);
      p.rect(x, y, w, 3, cols[i]);
      if (a > 0.95) {
        p.text(String(i + 1), x + 3, y + 5, { col: cols[i] });
        p.text(l1, x + w / 2, y + 14, { col: PAL.ink, align: 'center' });
        if (l2) p.text(l2, x + w / 2, y + 23, { col: PAL.ink, align: 'center' });
      }
    });
    p.rect(0, 150, W, 1, PAL.blue);
    // Roboter klettert
    const stepT = Math.max(0, (t - 2.2) / 1.1);
    const si = Math.min(5, Math.floor(stepT));
    const f = Math.min(1, stepT - si);
    const from = si, to = Math.min(5, si + (stepT < 6 ? 1 : 0));
    const hx = (i) => 12 + i * 50 + 12;
    const hy = (i) => 150 - stepH(i) - 30;
    let x = lerp(hx(from), hx(to), f), y = lerp(hy(from), hy(to), f) - Math.sin(f * Math.PI) * 12;
    if (t < 2.2) { x = hx(0) - 40 + (t / 2.2) * 40; y = hy(0); }
    drawRobot(p, x, y, t, { mode: stepT >= 6 ? 'wave' : 'walk', scale: 2 });
    if (stepT >= 6) {
      const fx = hx(5) + 30;
      p.rect(fx, hy(5) - 6, 1, 26, PAL.ink);
      const wv = Math.floor(t * 6) % 2;
      p.rect(fx + 1, hy(5) - 6 + wv, 12, 7, PAL.amber);
    }
    caption(p, t, 'ERST NUTZEN, DANN TECHNIK – SCHRITT FÜR SCHRITT', 7.4, { y: 26 + 140 });
  },
};

const prozess = {
  id: 'prozess', title: 'Vorgehensmodell', dur: 10,
  draw(p, t) {
    p.clear(PAL.bg0);
    header(p, t, 'VOM POC ZUM BETRIEB');
    const names = ['PLANEN', 'DATEN', 'MODELL', 'INTEGRATION', 'PILOT', 'ROLLOUT', 'MONITORING'];
    const pts = [[46, 54], [126, 54], [206, 54], [280, 84], [206, 114], [126, 114], [46, 114]];
    // Pfad
    for (let i = 0; i < pts.length - 1; i++) p.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], PAL.grid, 3, Math.floor(t * 8));
    // Rückkopplung
    p.line(46, 114, 22, 114, PAL.amber, 2, Math.floor(t * 8));
    p.line(22, 114, 22, 54, PAL.amber, 2, Math.floor(t * 8));
    p.line(22, 54, 46, 54, PAL.amber, 2, Math.floor(t * 8));
    if (t > 7.5) p.text('ITERATIV!', 6, 80, { col: PAL.amber, reveal: (t - 7.5) * 18 });
    // Knoten
    const active = Math.floor(((t - 0.8) / 1) % 7);
    names.forEach((n, i) => {
      const a = seg(t, 0.2 + i * 0.12, 0.6 + i * 0.12);
      if (!a) return;
      const [x, y] = pts[i];
      const w = Math.max(54, p.textWidth(n) + 10);
      const on = t > 0.8 && i === (active + 7) % 7;
      p.box(x - w / 2, y - 9, w, 18, on ? PAL.bg2 : PAL.bg1, on ? PAL.amber : PAL.blue);
      p.text(n, x, y - 3, { col: on ? PAL.yellow : PAL.ink, align: 'center' });
      p.text(String(i + 1), x - w / 2 + 3, y - 15, { col: PAL.dim });
    });
    // Datenpaket
    if (t > 0.8) {
      const pos = ((t - 0.8) / 1) % 7;
      const i = Math.floor(pos), f = ease(pos - i);
      const a = pts[i], b = pts[(i + 1) % 7] || pts[0];
      let x, y;
      if (i === 6) { // zurück über die Schleife
        x = lerp(46, 22, clamp(f * 3)); y = f < 0.33 ? 114 : lerp(114, 54, clamp((f - 0.33) * 3));
        if (f > 0.66) x = lerp(22, 46, (f - 0.66) * 3);
      } else { x = lerp(a[0], b[0], f); y = lerp(a[1], b[1], f); }
      p.rect(x - 3, y - 3 + 12, 6, 6, PAL.mint);
      p.rect(x - 1, y - 1 + 12, 2, 2, PAL.white);
    }
    caption(p, t, 'PILOT VOR ROLLOUT · MLOPS · MONITORING', 4.5);
  },
};

const risiko = {
  id: 'risiko', title: 'Risiko & EU AI Act', dur: 11,
  draw(p, t) {
    p.clear(PAL.bg0);
    header(p, t, 'EU AI ACT: RISIKOBASIERT');
    const levels = [
      { n: 'MINIMAL', c: PAL.mint, w: 156 },
      { n: 'TRANSPARENZ', c: PAL.yellow, w: 124 },
      { n: 'HOCHRISIKO', c: PAL.amber, w: 92 },
      { n: 'VERBOTEN', c: PAL.red, w: 60 },
    ];
    levels.forEach((l, i) => {
      const a = easeOut(seg(t, 0.6 + i * 0.5, 1.1 + i * 0.5));
      if (!a) return;
      const y = 146 - i * 24 - (1 - a) * 30;
      const x = 84 - l.w / 2;
      p.rect(x, y, l.w, 22, l.c);
      p.rect(x, y, l.w, 2, PAL.white);
      p.text(l.n, 84, y + 8, { col: PAL.dark, align: 'center' });
    });
    // Zeitstrahl
    const tl = [
      ['2024', 'IN KRAFT'],
      ['2025', 'VERBOTE + KI-KOMPETENZ'],
      ['2026', 'TRANSPARENZ'],
      ['2027/28', 'HOCHRISIKO*'],
    ];
    p.rect(176, 52, 2, 92, PAL.grid);
    tl.forEach(([y, s], i) => {
      if (t < 3 + i * 0.7) return;
      const yy = 52 + i * 26;
      p.rect(172, yy, 10, 6, PAL.blue2);
      p.text(y, 186, yy - 1, { col: PAL.amber, reveal: (t - 3 - i * 0.7) * 20 });
      p.text(s, 186, yy + 9, { col: PAL.ink, reveal: (t - 3.2 - i * 0.7) * 26 });
    });
    if (t > 6.5) p.text('*DIGITAL OMNIBUS 2026', 186, 152, { col: PAL.dim, reveal: (t - 6.5) * 20 });
    // Schild
    if (t > 7.4) {
      const k = easeOut(seg(t, 7.4, 8.2));
      p.rect(0, 0, W, H, `rgba(6,9,18,${0.92 * k})`);
      const cx = W / 2, cy = 76;
      for (let y = 0; y < 34; y++) {
        const half = y < 20 ? 22 : Math.round(22 - (y - 20) * 1.6);
        p.rect(cx - half * k, cy - 18 + y, half * 2 * k, 1, y < 2 ? PAL.white : PAL.blue);
      }
      if (k > 0.9) {
        p.rect(cx - 2, cy - 10, 4, 16, PAL.white);
        p.rect(cx - 8, cy - 4, 16, 4, PAL.white);
        p.text('DSGVO · ISO/IEC 42001 · KI-KOMPETENZ', cx, 124, { col: PAL.ink, align: 'center', reveal: (t - 8.2) * 30 });
        p.text('GOVERNANCE VON ANFANG AN', cx, 138, { col: PAL.amber, align: 'center', reveal: (t - 9) * 30 });
      }
    }
  },
};

const n8n = {
  id: 'n8n', title: 'Automatisieren mit n8n', dur: 11,
  draw(p, t) {
    p.clear(PAL.bg0);
    // Raster wie im Workflow-Editor
    for (let x = 4; x < W; x += 12) for (let y = 30; y < 158; y += 12) p.px(x, y, PAL.grid);
    header(p, t, 'AUTOMATISIEREN MIT N8N');
    const nodes = [
      { x: 34, y: 88, n: 'E-MAIL', s: 'TRIGGER', c: PAL.amber },
      { x: 110, y: 88, n: 'KI', s: 'KLASSIFIZIEREN', c: PAL.purple },
      { x: 190, y: 88, n: 'IF', s: 'DRINGEND?', c: PAL.blue2 },
      { x: 274, y: 58, n: 'TICKET', s: 'ANLEGEN', c: PAL.mint },
      { x: 274, y: 118, n: 'TEAMS', s: 'INFO', c: PAL.mint },
    ];
    const edges = [[0, 1], [1, 2], [2, 3], [2, 4]];
    const app = (i) => easeOut(seg(t, 0.4 + i * 0.35, 0.8 + i * 0.35));
    edges.forEach(([a, b]) => {
      if (app(b) <= 0) return;
      const A = nodes[a], B = nodes[b];
      const mx = (A.x + B.x) / 2;
      p.line(A.x + 21, A.y, mx, A.y, PAL.dim);
      p.line(mx, A.y, mx, B.y, PAL.dim);
      p.line(mx, B.y, lerp(mx, B.x - 21, app(b)), B.y, PAL.dim);
    });
    nodes.forEach((n, i) => {
      const a = app(i);
      if (!a) return;
      const s = 21 * a;
      p.box(n.x - s, n.y - 14 * a, s * 2, 28 * a, PAL.bg2, n.c);
      if (a > 0.95) {
        p.text(n.n, n.x, n.y - 9, { col: n.c, align: 'center' });
        p.text(n.s, n.x, n.y + 18, { col: PAL.dim, align: 'center' });
        p.rect(n.x - 21, n.y - 1, 2, 3, PAL.ink);
        p.rect(n.x + 19, n.y - 1, 2, 3, PAL.ink);
      }
    });
    if (t > 2.4) p.sprite(MAIL, 26, 92, { w: PAL.white, k: PAL.dark }, 2);
    // Pakete
    let done = 0;
    for (let i = 0; i < 12; i++) {
      const st = 2.4 + i * 0.7;
      const lt = (t - st) / 2.2;
      if (lt < 0) continue;
      if (lt > 1) { done++; continue; }
      const urgent = rnd(i, 11) < 0.45;
      const B = urgent ? nodes[3] : nodes[4];
      let x, y;
      if (lt < 0.6) { x = lerp(56, 168, lt / 0.6); y = 88; }
      else {
        const k = (lt - 0.6) / 0.4;
        const mx = 232;
        if (k < 0.3) { x = lerp(212, mx, k / 0.3); y = 88; }
        else if (k < 0.6) { x = mx; y = lerp(88, B.y, (k - 0.3) / 0.3); }
        else { x = lerp(mx, B.x - 21, (k - 0.6) / 0.4); y = B.y; }
      }
      const c = lt > 0.35 ? (urgent ? PAL.red : PAL.mint) : PAL.white;
      p.rect(x - 3, y - 2, 6, 4, c);
    }
    // Zähler
    if (t > 3) {
      p.box(8, 140, 116, 16, PAL.bg1, PAL.grid);
      p.text(`BEARBEITET: ${String(done).padStart(2, '0')}`, 14, 145, { col: PAL.mint });
    }
    if (t > 8) drawBubble(p, 150, 140, 'MENSCH PRÜFT AUSNAHMEN', { reveal: (t - 8) * 26, col: PAL.amber });
  },
};

const rag = {
  id: 'rag', title: 'RAG & Agenten', dur: 11,
  draw(p, t) {
    p.clear(PAL.bg0);
    header(p, t, 'RAG & KI-AGENTEN');
    if (t < 6.5) {
      // Dokumente
      for (let i = 0; i < 3; i++) if (t > 0.4 + i * 0.2) p.sprite(DOC, 16 + i * 4, 48 + i * 4, { w: PAL.white, k: PAL.grey }, 3);
      p.text('DOKUMENTE', 30, 82, { col: PAL.dim, align: 'center' });
      // Chunks → Vektoren
      for (let i = 0; i < 9; i++) {
        const a = seg(t, 1 + i * 0.12, 1.6 + i * 0.12);
        if (!a) continue;
        const tx = 92 + (i % 3) * 12, ty = 48 + Math.floor(i / 3) * 12;
        const x = lerp(36, tx, easeOut(a)), y = lerp(60, ty, easeOut(a));
        const hit = t > 4 && (i === 2 || i === 6);
        p.rect(x, y, 9, 9, hit ? PAL.amber : PAL.blue);
      }
      p.text('VEKTOR-DB', 110, 92, { col: PAL.dim, align: 'center' });
      // Frage
      if (t > 2.6) drawBubble(p, 150, 40, 'WIE VIEL URLAUB HABE ICH?', { reveal: (t - 2.6) * 26, pointer: 'right' });
      if (t > 4) {
        p.line(120, 56, 196, 104, PAL.amber, 2, Math.floor(t * 10));
        p.line(120, 70, 196, 104, PAL.amber, 2, Math.floor(t * 10));
      }
      // LLM
      if (t > 3.6) {
        p.box(196, 92, 60, 26, PAL.bg2, PAL.purple);
        p.text('LLM', 226, 101, { col: PAL.purple, align: 'center' });
      }
      if (t > 5) drawBubble(p, 92, 128, '30 TAGE [QUELLE: RICHTLINIE S.4]', { reveal: (t - 5) * 30, col: PAL.mint });
      caption(p, t, 'ANTWORTEN AUS EIGENEN DOKUMENTEN – MIT QUELLE', 3.2, { y: 164 });
    } else {
      const lt = t - 6.5;
      const labels = ['ZIEL', 'PLAN', 'TOOL', 'BEOBACHTEN'];
      const cx = W / 2, cy = 94, R = 44;
      p.circle(cx, cy, R, PAL.grid, false);
      labels.forEach((l, i) => {
        const ang = -Math.PI / 2 + (i / 4) * Math.PI * 2;
        const x = cx + Math.cos(ang) * R, y = cy + Math.sin(ang) * R;
        const on = Math.floor(lt * 1.6) % 4 === i;
        const w = p.textWidth(l) + 10;
        p.box(x - w / 2, y - 7, w, 14, on ? PAL.amber : PAL.bg2, on ? PAL.yellow : PAL.blue);
        p.text(l, x, y - 3, { col: on ? PAL.dark : PAL.ink, align: 'center' });
      });
      const ang = -Math.PI / 2 + lt * 1.6 * (Math.PI / 2);
      p.rect(cx + Math.cos(ang) * (R - 10) - 2, cy + Math.sin(ang) * (R - 10) - 2, 5, 5, PAL.mint);
      drawRobot(p, cx - 12, cy - 16, t, { scale: 2 });
      p.text('AGENT = LLM + TOOLS + GEDÄCHTNIS', cx, 150, { col: PAL.ink, align: 'center', reveal: lt * 30 });
      p.text('MIT LEITPLANKEN & FREIGABE', cx, 162, { col: PAL.amber, align: 'center', reveal: (lt - 1.5) * 30 });
    }
  },
};

const change = {
  id: 'change', title: 'Change-Management', dur: 9,
  draw(p, t) {
    p.clear(PAL.bg0);
    header(p, t, 'MENSCHEN MITNEHMEN');
    const cols = 8, rows = 3;
    const cx0 = 64, cy0 = 54;
    const center = { x: 3.5, y: 1 };
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const d = Math.hypot(c - center.x, r - center.y);
      const on = t > 1.2 + d * 0.55;
      const hue = [PAL.amber, PAL.mint, PAL.blue2, PAL.purple][(r * cols + c) % 4];
      const jump = on && Math.sin(t * 8 + c + r) > 0.7 ? -2 : 0;
      p.sprite(PERSON, cx0 + c * 26, cy0 + r * 18 + jump, { h: on ? '#5a3a1a' : PAL.grey, s: on ? '#f2c9a0' : PAL.dim, c: on ? hue : PAL.grey, p: on ? PAL.blue : PAL.grey }, 2);
    }
    const adkar = [['A', 'BEWUSSTSEIN'], ['D', 'WOLLEN'], ['K', 'WISSEN'], ['A', 'KÖNNEN'], ['R', 'VERANKERN']];
    adkar.forEach(([l, w], i) => {
      const st = 3.6 + i * 0.6;
      if (t < st) return;
      const x = 36 + i * 62 - 7;
      p.box(x, 118, 14, 14, PAL.amber);
      p.text(l, x + 7, 122, { col: PAL.dark, align: 'center' });
      p.text(w, x + 7, 138, { col: PAL.ink, align: 'center', reveal: (t - st) * 24 });
    });
    caption(p, t, 'CHAMPIONS · SCHULUNG · DIALOG · FEHLERKULTUR', 6.6, { y: 158 });
  },
};

const kpi = {
  id: 'kpi', title: 'Erfolg messen', dur: 9,
  draw(p, t) {
    p.clear(PAL.bg0);
    header(p, t, 'WIRKUNG MESSEN');
    // Achsen
    p.rect(30, 140, 172, 1, PAL.dim);
    p.rect(30, 50, 1, 90, PAL.dim);
    const bars = [
      { n: 'ZEIT', a: 70, b: 38 },
      { n: 'FEHLER', a: 56, b: 26 },
      { n: 'ZUFRIEDEN', a: 40, b: 72 },
    ];
    bars.forEach((bar, i) => {
      const x = 42 + i * 56;
      const ka = easeOut(seg(t, 0.6 + i * 0.3, 1.4 + i * 0.3));
      const kb = easeOut(seg(t, 2 + i * 0.3, 2.8 + i * 0.3));
      p.rect(x, 140 - bar.a * ka, 14, bar.a * ka, PAL.grey);
      p.rect(x + 16, 140 - bar.b * kb, 14, bar.b * kb, i === 2 ? PAL.mint : PAL.amber);
      p.text(bar.n, x + 15, 146, { col: PAL.ink, align: 'center' });
    });
    p.rect(40, 34, 6, 6, PAL.grey); p.text('BASELINE', 50, 34, { col: PAL.dim });
    p.rect(110, 34, 6, 6, PAL.amber); p.text('PILOT', 120, 34, { col: PAL.dim });
    p.text('BEISPIELDATEN (ILLUSTRATIV)', 116, 158, { col: PAL.grey, align: 'center' });
    // Tacho
    const gx = 262, gy = 100;
    for (let a = 0; a <= 20; a++) {
      const ang = Math.PI + (a / 20) * Math.PI;
      const c = a < 7 ? PAL.red : a < 14 ? PAL.yellow : PAL.mint;
      p.rect(gx + Math.cos(ang) * 40, gy + Math.sin(ang) * 40, 3, 3, c);
    }
    const val = 0.15 + easeOut(seg(t, 2, 5)) * 0.7 + Math.sin(t * 4) * 0.02;
    const ang = Math.PI + val * Math.PI;
    p.line(gx, gy, gx + Math.cos(ang) * 32, gy + Math.sin(ang) * 32, PAL.white);
    p.circle(gx, gy, 3, PAL.amber);
    p.text('ROI', gx, gy + 10, { col: PAL.ink, align: 'center' });
    const kpis = ['PRECISION', 'RECALL', 'DURCHLAUFZEIT', 'ADOPTION'];
    kpis.forEach((k, i) => { if (t > 4.5 + i * 0.5) p.text('> ' + k, 214, 120 + i * 10, { col: PAL.mint, reveal: (t - 4.5 - i * 0.5) * 24 }); });
  },
};

const outro = {
  id: 'outro', title: 'Los geht’s', dur: 8,
  draw(p, t) {
    p.clear(PAL.bg0);
    stars(p, t, 80, 8);
    floorGrid(p, t * 2, 132);
    // Pixel-Konfetti
    const colors = [PAL.amber, PAL.yellow, PAL.mint, PAL.blue2, PAL.red, PAL.purple];
    for (let i = 0; i < 90; i++) {
      const st = rnd(i, 5) * 3;
      const lt = t - st;
      if (lt < 0) continue;
      const x = (rnd(i, 6) * W + Math.sin(lt * 3 + i) * 6) % W;
      const y = -6 + lt * (30 + rnd(i, 8) * 40);
      if (y > H) continue;
      const w = Math.abs(Math.cos(lt * 6 + i)) > 0.4 ? 3 : 1;
      p.rect(x, y, w, 3, colors[i % colors.length]);
    }
    const s = easeOut(seg(t, 0.3, 1.2));
    p.text("LOS GEHT'S!", W / 2, 40 - (1 - s) * 30, { col: PAL.yellow, scale: 3, align: 'center', shadow: PAL.red });
    p.text('LEVEL 1 FREIGESCHALTET', W / 2, 72, { col: PAL.mint, align: 'center', reveal: (t - 1.4) * 24 });
    const jump = Math.abs(Math.sin(t * 5)) * 10;
    drawRobot(p, W / 2 - 12, 100 - jump, t, { mode: 'wave', scale: 2 });
    p.text('VELPTEC × KISRUPTIV', W / 2, 150, { col: PAL.ink, align: 'center', reveal: (t - 2.6) * 24 });
    p.text('LERNEN · ÜBEN · ANWENDEN', W / 2, 162, { col: PAL.dim, align: 'center', reveal: (t - 3.4) * 24 });
  },
};

export const SCENES = [intro, ki, daten, strategie, prozess, risiko, n8n, rag, change, kpi, outro];
export const TOTAL = SCENES.reduce((s, x) => s + x.dur, 0);

/** Startzeit jeder Szene im Gesamtfilm. */
export const STARTS = SCENES.reduce((acc, s, i) => { acc.push(i ? acc[i - 1] + SCENES[i - 1].dur : 0); return acc; }, []);

/**
 * Zeichnet den Gesamtfilm zum Zeitpunkt time (Sekunden).
 * only: optional Szenen-ID → nur diese Szene (Zeit relativ zu ihr, in Schleife).
 */
export function renderFilm(p, time, only = null) {
  if (only) {
    const sc = SCENES.find((s) => s.id === only) || SCENES[0];
    const lt = time % (sc.dur + 1.5);
    sc.draw(p, Math.min(lt, sc.dur));
    return sc;
  }
  let i = SCENES.length - 1;
  while (i > 0 && time < STARTS[i]) i--;
  const sc = SCENES[i];
  const lt = time - STARTS[i];
  sc.draw(p, lt);
  // Übergang: Pixel-Wipe in den letzten 0,35 s
  const tr = sc.dur - lt;
  if (tr < 0.35 && i < SCENES.length - 1) {
    const k = 1 - tr / 0.35;
    for (let y = 0; y < H; y += 10) for (let x = 0; x < W; x += 10) {
      if (rnd(x, y) < k) p.rect(x, y, 10, 10, PAL.bg0);
    }
  }
  if (lt < 0.3 && i > 0) {
    const k = 1 - lt / 0.3;
    for (let y = 0; y < H; y += 10) for (let x = 0; x < W; x += 10) if (rnd(x + 7, y + 3) < k) p.rect(x, y, 10, 10, PAL.bg0);
  }
  return sc;
}
