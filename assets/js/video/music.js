// Chiptune-Soundtrack, rein mathematisch synthetisiert (Rechteck, Dreieck, Rauschen).
// Läuft im Browser (WebAudio-Buffer) und in Node (WAV-Export für das MP4).

const BPM = 120;
const STEP = 60 / BPM / 4; // Sechzehntel
const CHORDS = [
  [45, [0, 3, 7]], // a-Moll
  [41, [0, 4, 7]], // F-Dur
  [48, [0, 4, 7]], // C-Dur
  [43, [0, 4, 7]], // G-Dur
];
const PENTA = [57, 60, 62, 64, 67, 69, 72, 74, 76];
const freq = (m) => 440 * Math.pow(2, (m - 69) / 12);

function rnd(a, b) {
  let x = Math.imul(a ^ 0x5bd1e995, 0x27d4eb2d) ^ Math.imul(b + 0x165667b1, 0x9e3779b1);
  x ^= x >>> 15; x = Math.imul(x, 0x85ebca6b); x ^= x >>> 13;
  return (x >>> 0) / 4294967296;
}

export function renderMusic(sr, duration) {
  const n = Math.ceil(sr * duration);
  const out = new Float32Array(n);
  let noiseSeed = 12345;
  const noise = () => { noiseSeed = (noiseSeed * 1103515245 + 12345) & 0x7fffffff; return (noiseSeed / 0x3fffffff) - 1; };

  const add = (t0, len, fn) => {
    const s0 = Math.floor(t0 * sr), s1 = Math.min(n, Math.floor((t0 + len) * sr));
    for (let s = s0; s < s1; s++) {
      const lt = (s - s0) / sr;
      out[s] += fn(lt, len);
    }
  };
  const square = (f, duty, vol) => (lt, len) => {
    const env = Math.min(1, lt * 200) * Math.max(0, 1 - lt / len) ** 0.6;
    return ((lt * f) % 1 < duty ? 1 : -1) * vol * env;
  };
  const tri = (f, vol) => (lt, len) => {
    const ph = (lt * f) % 1;
    const env = Math.min(1, lt * 300) * Math.max(0, 1 - lt / len) ** 0.3;
    return (4 * Math.abs(ph - 0.5) - 1) * vol * env;
  };

  const steps = Math.floor(duration / STEP);
  for (let i = 0; i < steps; i++) {
    const t = i * STEP;
    const bar = Math.floor(i / 16);
    const inBar = i % 16;
    const [root, ivs] = CHORDS[bar % 4];
    const intro = bar < 2;
    const outroFade = duration - t < 4;
    // Arpeggio
    const arpNote = root + 24 + ivs[[0, 1, 2, 1][inBar % 4]] + (inBar >= 8 ? 12 : 0);
    add(t, STEP * 0.9, square(freq(arpNote), 0.125, intro ? 0.035 : 0.05));
    // Bass auf Viertel
    if (inBar % 4 === 0) add(t, STEP * 3.6, tri(freq(root - 12 + (inBar === 8 ? 7 : 0)), 0.22));
    if (!intro) {
      // Kick
      if (inBar % 8 === 0) add(t, 0.18, (lt) => Math.sin(2 * Math.PI * (55 + 120 * Math.exp(-lt * 30)) * lt) * 0.45 * Math.exp(-lt * 14));
      // Snare
      if (inBar % 8 === 4) add(t, 0.14, (lt) => noise() * 0.12 * Math.exp(-lt * 22));
      // Hi-Hat
      if (inBar % 2 === 1) add(t, 0.04, (lt) => noise() * 0.035 * Math.exp(-lt * 90));
    }
    // Melodie ab Takt 4 in Phrasen
    if (bar >= 4 && !outroFade && inBar % 2 === 0) {
      const phrase = Math.floor(bar / 2) % 4;
      const r = rnd(bar * 16 + inBar, phrase);
      if (phrase !== 3 && r < 0.62) {
        const chordTones = ivs.map((iv) => root + 24 + iv);
        const pick = r < 0.3 ? chordTones[Math.floor(rnd(i, 3) * 3)] : PENTA[Math.floor(rnd(i, 4) * PENTA.length)];
        const len = STEP * (rnd(i, 9) < 0.3 ? 4 : 2) * 0.95;
        add(t, len, square(freq(pick + 12), 0.25, 0.045));
      }
    }
  }
  // Ein-/Ausblenden und sanftes Clipping
  for (let s = 0; s < n; s++) {
    const t = s / sr;
    const g = Math.min(1, t / 1.5) * Math.min(1, (duration - t) / 3);
    out[s] = Math.tanh(out[s] * 1.4) * 0.8 * g;
  }
  return out;
}

/** WAV-Datei (16-bit PCM mono) als Uint8Array – für Node-Export. */
export function toWav(samples, sr) {
  const buf = new ArrayBuffer(44 + samples.length * 2);
  const v = new DataView(buf);
  const w = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  w(0, 'RIFF'); v.setUint32(4, 36 + samples.length * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true);
  v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data');
  v.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, samples[i])) * 32767, true);
  return new Uint8Array(buf);
}
