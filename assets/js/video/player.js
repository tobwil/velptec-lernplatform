// Video-Player für den Pixel-Film (Canvas + WebAudio), inkl. Kapitel und WebM-Export.
import { W, H, Pix } from './engine.js';
import { SCENES, TOTAL, STARTS, renderFilm } from './scenes.js';
import { renderMusic } from './music.js';
import { h } from '../ui.js';

let musicCache = null; // { sr, buffer }
let actx = null;

function audioCtx() {
  if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  return actx;
}
async function musicBuffer() {
  const ac = audioCtx();
  if (musicCache?.sr === ac.sampleRate) return musicCache.buffer;
  const data = renderMusic(ac.sampleRate, TOTAL);
  const buf = ac.createBuffer(1, data.length, ac.sampleRate);
  buf.copyToChannel(data, 0);
  musicCache = { sr: ac.sampleRate, buffer: buf };
  return buf;
}

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/**
 * createPlayer({ scene, sound, onComplete, onProgress })
 * scene = Szenen-ID → spielt nur diese Szene in Schleife (Lektionen); sonst Gesamtfilm.
 */
export function createPlayer({ scene = null, sound = true, onComplete, chapters = !scene, getSound } = {}) {
  const canvas = h('canvas', { width: W, height: H, 'aria-label': scene ? `Pixel-Animation: ${SCENES.find((s) => s.id === scene)?.title}` : 'Pixel-Erklärvideo KI-Management', role: 'img' });
  const pix = new Pix(canvas.getContext('2d'));
  const dur = scene ? SCENES.find((s) => s.id === scene)?.dur ?? 8 : TOTAL;
  let playing = false, t = 0, last = 0, raf = 0, src = null, audioStart = 0, audioOffset = 0, completed = false;
  let soundOn = getSound ? getSound() : sound;

  const playBtn = h('button.icon-btn', { type: 'button', 'aria-label': 'Abspielen', onclick: () => toggle() }, '▶');
  const seek = h('input.player-seek', { type: 'range', min: 0, max: dur, step: 0.1, value: 0, 'aria-label': 'Position' });
  const time = h('span.player-time', `0:00 / ${fmt(dur)}`);
  const sndBtn = h('button.icon-btn', { type: 'button', 'aria-label': 'Ton an/aus', onclick: () => { soundOn = !soundOn; sndBtn.textContent = soundOn ? '🔊' : '🔇'; if (playing) { stopAudio(); if (soundOn) startAudio(); } } }, soundOn ? '🔊' : '🔇');
  const fsBtn = h('button.icon-btn', { type: 'button', 'aria-label': 'Vollbild', onclick: () => wrap.requestFullscreen?.() }, '⛶');
  seek.addEventListener('input', () => { setTime(+seek.value); });

  const bar = h('div.player-bar', playBtn, seek, time, sndBtn, fsBtn);
  const wrap = h('div.player', canvas, bar);
  canvas.addEventListener('click', () => toggle());

  const posterTime = scene ? dur * 0.6 : 8.4;
  function draw() {
    const poster = !playing && t === 0;
    renderFilm(pix, poster ? posterTime : t, scene);
    if (poster) {
      // Startbild mit Play-Symbol
      pix.rect(0, 0, W, H, 'rgba(6,9,18,0.45)');
      pix.box(W / 2 - 16, H / 2 - 12, 32, 24, '#ffb257');
      pix.rect(W / 2 - 4, H / 2 - 6, 2, 12, '#060912');
      for (let i = 0; i < 6; i++) pix.rect(W / 2 - 2, H / 2 - 6 + i, 2 + i * 1.4, 12 - i * 2, '#060912');
    }
  }

  function setTime(v) {
    t = Math.max(0, Math.min(dur, v));
    seek.value = t;
    time.textContent = `${fmt(t)} / ${fmt(dur)}`;
    if (playing) { stopAudio(); if (soundOn) startAudio(); }
    draw();
  }

  async function startAudio() {
    try {
      const ac = audioCtx();
      if (ac.state === 'suspended') await ac.resume();
      const buf = await musicBuffer();
      src = ac.createBufferSource();
      src.buffer = buf;
      src.connect(recDest || ac.destination);
      if (recDest) src.connect(ac.destination);
      const offset = scene ? STARTS[SCENES.findIndex((s) => s.id === scene)] + (t % dur) : t;
      src.start(0, Math.min(offset, buf.duration - 0.05));
      audioStart = ac.currentTime;
      audioOffset = t;
    } catch (e) {
      console.warn('Audio nicht verfügbar', e);
    }
  }
  function stopAudio() {
    try { src?.stop(); } catch { /* bereits gestoppt */ }
    src = null;
  }

  function loop(now) {
    if (!wrap.isConnected) { pause(); return; }
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    t = src && actx ? audioOffset + (actx.currentTime - audioStart) : t + dt;
    if (t >= dur) {
      if (scene) { t = 0; if (src) { stopAudio(); if (soundOn) startAudio(); } }
      else {
        t = dur; draw(); pause();
        if (!completed) { completed = true; onComplete?.(); }
        recorder?.stop();
        return;
      }
    }
    seek.value = t;
    time.textContent = `${fmt(t)} / ${fmt(dur)}`;
    draw();
    if (recCanvas) { recCtx.drawImage(canvas, 0, 0, recCanvas.width, recCanvas.height); }
    raf = requestAnimationFrame(loop);
  }

  function play() {
    if (playing) return;
    if (t >= dur) t = 0;
    playing = true;
    playBtn.textContent = '⏸';
    playBtn.setAttribute('aria-label', 'Pause');
    last = performance.now();
    if (soundOn) startAudio();
    raf = requestAnimationFrame(loop);
  }
  function pause() {
    playing = false;
    playBtn.textContent = '▶';
    playBtn.setAttribute('aria-label', 'Abspielen');
    cancelAnimationFrame(raf);
    stopAudio();
  }
  function toggle() { playing ? pause() : play(); }

  // ---------- WebM-Aufnahme direkt im Browser ----------
  let recorder = null, recCanvas = null, recCtx = null, recDest = null;
  async function record(onDone) {
    if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) throw new Error('Dein Browser unterstützt keine Aufnahme (MediaRecorder).');
    pause();
    recCanvas = document.createElement('canvas');
    recCanvas.width = W * 4; recCanvas.height = H * 4;
    recCtx = recCanvas.getContext('2d');
    recCtx.imageSmoothingEnabled = false;
    const stream = recCanvas.captureStream(30);
    if (soundOn) {
      recDest = audioCtx().createMediaStreamDestination();
      recDest.stream.getAudioTracks().forEach((tr) => stream.addTrack(tr));
    }
    const mime = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find((m) => MediaRecorder.isTypeSupported(m));
    const chunks = [];
    recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 4_000_000 });
    recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      recorder = null; recCanvas = null; recDest = null;
      onDone?.(blob);
    };
    recorder.start(500);
    t = 0;
    completed = true; // Aufnahme zählt nicht als „angesehen"
    play();
  }

  draw();
  return {
    el: wrap,
    play, pause, toggle, record,
    seekTo: (s) => setTime(s),
    get time() { return t; },
    chapters: chapters ? SCENES.map((s, i) => ({ id: s.id, title: s.title, start: STARTS[i] })) : [],
  };
}

export { SCENES, TOTAL, STARTS };
