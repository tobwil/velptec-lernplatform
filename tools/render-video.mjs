#!/usr/bin/env node
// Rendert den Pixel-Film deterministisch Bild für Bild (Headless-Chromium) und erzeugt mit ffmpeg
// media/ki-management-pixelfilm.mp4 inkl. synthetisiertem Chiptune-Soundtrack.
// Aufruf: node tools/render-video.mjs [--fps 30] [--preview 1,10,20 (Sekunden → PNGs)]
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { serve } from './static-server.mjs';
import { renderMusic, toWav } from '../assets/js/video/music.js';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const fps = +opt('--fps', 30);
const preview = opt('--preview', null);
const outDir = opt('--out', 'media');

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/opt/node22/lib/node_modules/playwright/index.mjs');
const { server, url } = await serve('.');
const browser = await chromium.launch();
const page = await browser.newPage();
page.on('console', (m) => m.type() === 'error' && console.error('[browser]', m.text()));
page.on('pageerror', (e) => console.error('[pageerror]', e.message));
await page.goto(url + '/tools/render.html');
await page.waitForFunction(() => window.ready === true);
const total = await page.evaluate(() => window.TOTAL);
mkdirSync(outDir, { recursive: true });

if (preview) {
  for (const s of preview.split(',').map(Number)) {
    const data = await page.evaluate((t) => window.frame(t), s);
    writeFileSync(`${outDir}/frame-${String(s).padStart(5, '0')}.png`, Buffer.from(data.split(',')[1], 'base64'));
  }
  console.log('Vorschaubilder geschrieben nach', outDir);
} else {
  const sr = 44100;
  writeFileSync(`${outDir}/soundtrack.wav`, toWav(renderMusic(sr, total), sr));
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-', '-i', `${outDir}/soundtrack.wav`,
    '-vf', 'scale=1280:720:flags=neighbor', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'slow', '-crf', '20', '-tune', 'animation',
    '-c:a', 'aac', '-b:a', '128k', '-shortest', '-movflags', '+faststart', `${outDir}/ki-management-pixelfilm.mp4`], { stdio: ['pipe', 'inherit', 'inherit'] });
  const frames = Math.round(total * fps);
  for (let i = 0; i < frames; i++) {
    const data = await page.evaluate((t) => window.frame(t), i / fps);
    if (!ff.stdin.write(Buffer.from(data.split(',')[1], 'base64'))) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % (fps * 10) === 0) console.log(`Frame ${i}/${frames}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  console.log('Fertig:', `${outDir}/ki-management-pixelfilm.mp4`);
}
await browser.close();
server.close();
