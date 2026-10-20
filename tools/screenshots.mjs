#!/usr/bin/env node
// Erzeugt die README-Screenshots unter docs/screenshots/ (Headless-Chromium mit Beispiel-Lernstand).
// Aufruf: node tools/screenshots.mjs
import { mkdirSync } from 'node:fs';
import { serve } from './static-server.mjs';

const OUT = 'docs/screenshots';
mkdirSync(OUT, { recursive: true });
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/opt/node22/lib/node_modules/playwright/index.mjs');
const { server, url } = await serve('.');
const browser = await chromium.launch();

const day = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
function profile(id, name, xp, extra = {}) {
  return { id, name, created: Date.now() - 20 * 864e5, xp, log: [], lessons: {}, quiz: {}, exercises: {}, widgets: {}, badges: {}, days: [], daily: {}, sprintBest: 0, once: {}, video: {}, ...extra };
}
const now = Date.now();
const me = profile('p-alex', 'Alex', 1380, {
  lessons: Object.fromEntries(['m01-l1', 'm01-l2', 'm01-l3', 'm01-l4', 'm02-l1', 'm02-l2', 'm02-l3', 'm02-l4', 'm03-l1', 'm03-l2', 'm10-l1'].map((k) => [k, now])),
  quiz: { m01: { best: 12, total: 12, last: 12, attempts: 1, t: now }, m02: { best: 10, total: 12, last: 10, attempts: 2, t: now } },
  badges: { start: now, reader: now, ace: now, module1: now, streak3: now, explorer: now, cinema: now, sprinter: now },
  widgets: { a: 1, b: 1, c: 1, d: 1, e: 1 },
  days: [day(0), day(1), day(2), day(3), day(4)],
  sprintBest: 17,
  log: [{ t: now, xp: 50, reason: 'Perfektes Quiz' }, { t: now, xp: 20, reason: 'Lektion „Daten als Rohstoff“' }],
  video: { full: now },
});
const state = {
  active: 'p-alex',
  imported: [],
  profiles: {
    'p-alex': me,
    'p-sam': profile('p-sam', 'Sam', 1720, { sprintBest: 21, badges: { start: 1, ace: 1, module1: 1, streak3: 1, daily5: 1 } }),
    'p-jo': profile('p-jo', 'Jo', 940, { sprintBest: 12, badges: { start: 1, ace: 1 } }),
    'p-mina': profile('p-mina', 'Mina', 2210, { sprintBest: 19, badges: { start: 1, ace: 1, module1: 1, module3: 1, streak7: 1, practice: 1 } }),
    'p-chris': profile('p-chris', 'Chris', 510, { sprintBest: 8, badges: { start: 1 } }),
  },
};

async function page({ dark = false, mobile = false, ai = false } = {}) {
  const ctx = await browser.newContext({
    viewport: mobile ? { width: 390, height: 844 } : { width: 1360, height: 860 },
    deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile, colorScheme: dark ? 'dark' : 'light',
  });
  await ctx.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort());
  await ctx.addInitScript(([st, aiOn]) => {
    if (!localStorage.getItem('vlp:seeded')) {
      localStorage.setItem('vlp:state:v1', JSON.stringify(st));
      localStorage.setItem('vlp:settings:v1', JSON.stringify({ confetti: false, ai: { enabled: aiOn, provider: 'anthropic', keys: { anthropic: aiOn ? 'sk-ant-demo' : '' } } }));
      localStorage.setItem('vlp:seeded', '1');
    }
    addEventListener('DOMContentLoaded', () => {
      const s = document.createElement('style');
      s.textContent = '.toast-host{display:none!important}';
      document.head.append(s);
    });
  }, [state, ai]);
  const p = await ctx.newPage();
  if (ai) {
    await p.route('https://api.anthropic.com/v1/messages', (r) => r.fulfill({
      status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' },
      body: JSON.stringify({ stop_reason: 'end_turn', content: [{ type: 'text', text: '### Gesamteindruck\nDu hast ein realistisches Portfolio mit klarer Priorisierung aufgebaut – das ist eine starke Grundlage.\n### Kriterien\n- ✅ **Nutzen & Machbarkeit**: Du bewertest jeden Use Case nachvollziehbar.\n- 🟡 **KPIs**: Die Ziele sind noch nicht messbar formuliert.\n- ✅ **Risiken**: Datenschutz und Akzeptanz sind benannt.\n### Stärken\n- Konkreter Bezug zum Autohaus\n- Quick Win sinnvoll gewählt\n### Nächster Schritt\nWoran würdest du nach 8 Wochen erkennen, dass der Pilot „E-Mail-Klassifikation“ erfolgreich war? Welche Zahl misst du heute schon als Baseline?\n\nPUNKTE: 7/10' }] }),
    }));
  }
  return p;
}
const go = async (p, hash, wait = 600) => { await p.goto(`${url}/${hash}`); await p.waitForSelector('h1'); await p.waitForTimeout(wait); };
const shot = (p, name, full = false) => p.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
const mod = (id) => import(`../content/modules/${id}.js`).then((m) => m.default);

let p = await page();
await go(p, '#/', 3800);
await shot(p, '01-dashboard');

const m10 = await mod('m10');
const builderLesson = m10.lessons.find((l) => l.blocks.some((b) => b.widget === 'workflow-builder'));
await go(p, `#/modul/m10/lektion/${builderLesson.id}`, 1500);
await p.locator('.widget-host').first().scrollIntoViewIfNeeded();
await p.evaluate(() => window.scrollBy(0, -90));
await p.waitForTimeout(500);
await shot(p, '03-widget-n8n');

const m05 = await mod('m05');
await go(p, `#/modul/m05/lektion/${m05.lessons[0].id}`, 800);
const praxis = p.locator('.block-praxis').first();
await praxis.scrollIntoViewIfNeeded();
await p.evaluate(() => window.scrollBy(0, -120));
await p.waitForTimeout(300);
await shot(p, '04-praxis-handout');

await go(p, '#/modul/m03/quiz', 600);
await p.locator('.opt').first().click().catch(() => {});
await p.locator('.question .q-actions .btn-primary').click().catch(() => {});
await p.waitForTimeout(400);
await shot(p, '05-quiz');

await go(p, '#/video', 400);
await p.locator('.chapters .btn').nth(6).click();
await p.waitForTimeout(3200);
await p.locator('.player canvas').click();
await shot(p, '06-pixelfilm');

await go(p, '#/rangliste', 600);
await shot(p, '07-rangliste');

await go(p, '#/eigene', 400);
const sample = '# Leitfaden: KI im Kundenservice\n\nDer Leitfaden beschreibt, wie das Serviceteam KI-Werkzeuge für Anfragen einsetzt. Eingehende E-Mails werden von einem Klassifikationsmodell nach Thema und Dringlichkeit sortiert. Dringende Anfragen landen sofort beim Bereitschaftsteam.\n\n## Qualitätssicherung\n\nJede KI-Antwort wird vor dem Versand von einer Servicekraft geprüft. Die Qualitätssicherung misst wöchentlich die Fehlerquote und die Kundenzufriedenheit. Abweichungen werden im Qualitätszirkel besprochen.\n\n## Datenschutz\n\nPersonenbezogene Daten werden vor der Verarbeitung pseudonymisiert. Der Datenschutz wird durch einen Auftragsverarbeitungsvertrag mit dem Anbieter abgesichert. Die Datenschutzbeauftragte prüft neue Werkzeuge vor der Einführung.';
await p.locator('.dropzone + input[type=file]').setInputFiles({ name: 'leitfaden-ki-kundenservice.md', mimeType: 'text/markdown', buffer: Buffer.from(sample) });
await p.waitForSelector('text=Lektion erzeugen');
await p.waitForTimeout(300);
await shot(p, '08-upload');
await p.click('text=Lektion erzeugen');
await p.waitForSelector('text=Zur neuen Lektion');
await p.click('text=Zur neuen Lektion');
await p.waitForSelector('.tab');
await p.locator('.lesson-toc, .card a[href*="lektion"]').first().click().catch(() => {});
await p.waitForTimeout(800);
await shot(p, '09-eigene-lektion');


// Dunkelmodus
p = await page({ dark: true });
await go(p, '#/', 3800);
await shot(p, '02-dashboard-dunkel');

// Übung mit (simuliertem) KI-Feedback
p = await page({ ai: true });
const m03 = await mod('m03');
await go(p, `#/modul/m03/uebung/${m03.exercises[0].id}`, 400);
await p.fill('textarea', 'Use-Case-Portfolio Autohaus Brenner:\n1. E-Mail-Klassifikation im Service – Nutzen 4, Machbarkeit 5 → Quick Win\n2. Angebotsassistent für Verkäufer – Nutzen 4, Machbarkeit 3\n3. Predictive Maintenance Werkstatt – Nutzen 3, Machbarkeit 2\nRisiken: Datenschutz bei Kundendaten (DSGVO), Akzeptanz im Team.\nNächster Schritt: Pilot E-Mail-Klassifikation für 8 Wochen.');
await p.click('text=✅ Offline-Check');
await p.click('text=KI-Feedback holen');
await p.waitForSelector('.ai-box h4');
await p.locator('.ai-box').scrollIntoViewIfNeeded();
await p.evaluate(() => window.scrollBy(0, 260));
await p.waitForTimeout(400);
await shot(p, '11-uebung-ki-feedback');
await go(p, '#/einstellungen', 400);
await p.locator('section.card').nth(1).scrollIntoViewIfNeeded();
await p.evaluate(() => window.scrollBy(0, -90));
await shot(p, '12-einstellungen-ki');

// Mobil
p = await page({ mobile: true });
await go(p, '#/', 1200);
await shot(p, '13-mobil');

await browser.close();
server.close();
console.log('Screenshots gespeichert in', OUT);
