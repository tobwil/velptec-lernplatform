#!/usr/bin/env node
// End-to-End-Smoke-Test: startet einen lokalen Server, öffnet alle Routen in Headless-Chromium,
// spielt Onboarding, eine Lektion, ein Quiz, eine Übung (Offline-Check), den Upload-Generator
// und prüft, dass keine JavaScript-Fehler auftreten. Optional Screenshots: --shots <ordner>
import { serve } from '../tools/static-server.mjs';
import { mkdirSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const shotDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
if (shotDir) mkdirSync(shotDir, { recursive: true });
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/opt/node22/lib/node_modules/playwright/index.mjs');

const { server, url } = await serve('.');
const browser = await chromium.launch();
const errors = [];
let failed = 0;
const ok = (cond, msg) => { if (cond) console.log('  ✓', msg); else { failed++; console.error('  ✗', msg); } };

async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, ...opts });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.(googleapis|gstatic)|youtube|ERR_INTERNET_DISCONNECTED|net::ERR/.test(m.text())) errors.push(`[console] ${m.text()}`); });
  // Externe Ressourcen im Test blockieren (offline-fähig testen)
  await ctx.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort());
  return page;
}
const shot = async (page, name) => { if (shotDir) await page.screenshot({ path: `${shotDir}/${name}.png`, fullPage: false }); };

try {
  console.log('Desktop, hell');
  const page = await newPage({ colorScheme: 'light' });
  await page.goto(url + '/');
  await page.waitForSelector('.modal input');
  await page.fill('.modal input', 'Testperson');
  await page.click('.modal .btn-primary');
  await page.waitForSelector('.module-card');
  const cards = await page.locator('.module-card').count();
  ok(cards >= 12, `Dashboard zeigt ${cards} Modulkarten`);
  await page.waitForTimeout(600);
  await shot(page, '01-dashboard-hell');

  // Modul + Lektionen
  await page.goto(url + '/#/modul/m01');
  await page.waitForSelector('h1');
  ok((await page.textContent('h1')).length > 3, 'Modulseite rendert');
  await shot(page, '02-modul');
  const modules = await page.evaluate(async () => (await import('/content/course.js')).MODULE_IDS);
  for (const id of modules) {
    const lessons = await page.evaluate(async (mid) => (await import(`/content/modules/${mid}.js`)).default.lessons.map((l) => l.id), id).catch(() => []);
    for (const lid of lessons) {
      await page.goto(`${url}/#/modul/${id}/lektion/${lid}`);
      await page.waitForSelector('article h1');
      await page.waitForTimeout(150);
    }
    ok(lessons.length > 0, `${id}: ${lessons.length} Lektionen gerendert`);
  }
  await page.goto(`${url}/#/modul/m10/lektion/${await page.evaluate(async () => (await import('/content/modules/m10.js')).default.lessons[0].id)}`);
  await page.waitForTimeout(1200);
  await shot(page, '03-lektion');
  await page.click('.lesson-nav .btn-accent');
  await page.waitForTimeout(400);
  const xp = await page.evaluate(() => JSON.parse(localStorage.getItem('vlp:state:v1')).profiles);
  ok(Object.values(xp)[0].xp > 0, 'Lektion abschließen vergibt XP');

  // Quiz: alle Fragen beantworten (erste Option / irgendwas)
  await page.goto(url + '/#/modul/m01/quiz');
  await page.waitForSelector('.quiz-card');
  for (let i = 0; i < 20; i++) {
    if (await page.locator('.quiz-result').count()) break;
    if (await page.locator('.opt:not([disabled])').count()) await page.locator('.opt:not([disabled])').first().click();
    if (await page.locator('.cloze-input').count()) for (const inp of await page.locator('.cloze-input').all()) await inp.fill('test');
    if (await page.locator('.match-item').count()) {
      const n = (await page.locator('.match-item').count()) / 2;
      for (let k = 0; k < n; k++) { await page.locator('.match-grid > :nth-child(odd)').nth(k).click(); await page.locator('.match-grid > :nth-child(even)').nth(k).click(); }
    }
    await page.locator('.quiz-card .question .q-actions .btn-primary').click();
    await page.locator('.quiz-card > .q-actions .btn-accent').click();
  }
  ok(await page.locator('.quiz-result').count() === 1, 'Quiz läuft bis zur Auswertung');
  await shot(page, '04-quiz');

  // Übung mit Offline-Check
  const exId = await page.evaluate(async () => (await import('/content/modules/m03.js')).default.exercises[0].id);
  await page.goto(`${url}/#/modul/m03/uebung/${exId}`);
  await page.waitForSelector('textarea');
  await page.fill('textarea', 'Unser Ziel ist ein Pilot zur E-Mail-Klassifikation im Kundenservice. KPI: Durchlaufzeit und Fehlerquote. Risiko: Datenschutz und DSGVO, daher Governance und Freigabe durch den Datenschutzbeauftragten. Nutzen hoch, Machbarkeit mittel, Roadmap in drei Phasen mit Meilensteinen. Budget und ROI werden nach dem Pilot bewertet.');
  await page.click('text=Offline-Check');
  await page.waitForSelector('.rubric li.hit, .rubric li.miss');
  ok(await page.locator('.rubric li').count() > 0, 'Offline-Feedback zur Übung erscheint');
  await page.click('text=📨 Abgeben');
  await page.waitForTimeout(300);
  ok(await page.locator('details summary:has-text("Musterlösung")').count() === 1, 'Musterlösung nach Abgabe freigeschaltet');
  await shot(page, '05-uebung');

  // Upload → Offline-Generator
  await page.goto(url + '/#/eigene');
  await page.waitForSelector('.dropzone');
  const sample = `# KI-Richtlinie der Muster GmbH\n\nDiese Richtlinie regelt den Einsatz von KI-Werkzeugen im Unternehmen. Mitarbeitende dürfen nur freigegebene KI-Werkzeuge verwenden. Personenbezogene Daten dürfen nicht in öffentliche KI-Werkzeuge eingegeben werden.\n\n## Freigabeprozess\n\nNeue KI-Werkzeuge werden durch das KI-Board geprüft. Das KI-Board bewertet Datenschutz, Informationssicherheit und Nutzen. Die Freigabe wird im KI-Register dokumentiert. Das KI-Register enthält alle eingesetzten KI-Werkzeuge mit Zweck, Verantwortlichen und Risikoklasse.\n\n## Schulung\n\nAlle Mitarbeitenden absolvieren eine Schulung zur KI-Kompetenz. Die Schulung vermittelt Grundlagen, Risiken und den sicheren Umgang mit KI-Werkzeugen. Führungskräfte achten darauf, dass die Schulung jährlich aufgefrischt wird. Ergebnisse von KI-Werkzeugen werden immer von Menschen geprüft, bevor sie an Kunden gehen.`;
  await page.locator('.dropzone + input[type=file]').setInputFiles( { name: 'ki-richtlinie.md', mimeType: 'text/markdown', buffer: Buffer.from(sample) });
  await page.waitForSelector('text=Lektion erzeugen');
  await page.click('text=Lektion erzeugen');
  await page.waitForSelector('text=Zur neuen Lektion');
  await page.click('text=Zur neuen Lektion');
  await page.waitForSelector('.tabs');
  ok((await page.textContent('h1')).toLowerCase().includes('richtlinie'), 'Upload erzeugt eigene Lektion (offline)');
  await page.locator('a[href*="/lektion/"]').first().click();
  await page.waitForSelector('article h1');
  ok(!(await page.textContent('article')).includes('Unbekannter Blocktyp') && await page.locator('.qc').count() > 0, 'Generierte Lektion rendert alle Blöcke inkl. Quick-Check');
  await shot(page, '06-eigene-lektion');

  for (const r of ['#/sprint', '#/rangliste', '#/profil', '#/video', '#/unterlagen', '#/glossar', '#/quellen', '#/einstellungen']) {
    await page.goto(url + '/' + r);
    await page.waitForSelector('h1');
    await page.waitForTimeout(200);
    ok(!(await page.textContent('main')).includes('[object '), `Route ${r} rendert ohne Darstellungsfehler`);
    if (r === '#/rangliste') ok(await page.locator('.lb-row').count() >= 1, 'Rangliste zeigt Einträge');
    if (['#/video', '#/einstellungen', '#/rangliste'].includes(r)) await shot(page, '07-' + r.slice(2));
  }
  // Coach offline
  await page.click('.coach-fab');
  await page.fill('.coach-panel textarea', 'AI Act');
  await page.press('.coach-panel textarea', 'Enter');
  await page.waitForTimeout(300);
  ok(await page.locator('.coach-panel .msg.assistant').count() >= 2, 'Coach-Offline-Suche antwortet');
  await shot(page, '08-coach');

  console.log('KI-Anbieter (gemockt, ohne echte Keys)');
  const reqs = [];
  const fb = '### Gesamteindruck\nGuter Ansatz.\n### Kriterien\n- ✅ **Ziel**: klar\n### Stärken\n- konkret\n### Nächster Schritt\nWelche KPI misst du zuerst?\nPUNKTE: 7/10';
  await page.route('https://api.anthropic.com/v1/messages', (r) => { reqs.push({ p: 'anthropic', h: r.request().headers(), b: r.request().postDataJSON() }); r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ content: [{ type: 'thinking', thinking: '' }, { type: 'text', text: fb }], stop_reason: 'end_turn' }) }); });
  await page.route('https://api.openai.com/v1/chat/completions', (r) => { reqs.push({ p: 'openai', h: r.request().headers(), b: r.request().postDataJSON() }); r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ choices: [{ message: { role: 'assistant', content: fb } }] }) }); });
  await page.route(/generativelanguage\.googleapis\.com\/v1beta\/models\/.*:generateContent/, (r) => { reqs.push({ p: 'gemini', h: r.request().headers(), b: r.request().postDataJSON(), u: r.request().url() }); r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ candidates: [{ content: { parts: [{ text: 'gedacht', thought: true }, { text: fb }] } }] }) }); });
  for (const provider of ['anthropic', 'openai', 'gemini']) {
    await page.evaluate((pv) => {
      const s = JSON.parse(localStorage.getItem('vlp:settings:v1') || '{}');
      s.ai = { ...(s.ai || {}), enabled: true, provider: pv, keys: { anthropic: 'sk-ant-test', openai: 'sk-test', gemini: 'g-test' } };
      localStorage.setItem('vlp:settings:v1', JSON.stringify(s));
    }, provider);
    await page.goto(`${url}/#/modul/m03/uebung/${exId}`);
    await page.reload();
    await page.waitForSelector('text=KI-Feedback holen');
    await page.click('text=KI-Feedback holen');
    for (let k = 0; k < 50 && !reqs.some((r) => r.p === provider); k++) await page.waitForTimeout(100);
    await page.waitForSelector('.ai-box .msg.assistant h4');
    ok(reqs.some((r) => r.p === provider) && (await page.textContent('.ai-box')).includes('Welche KPI'), `${provider}: Anfrage gesendet, KI-Feedback angezeigt`);
  }
  const an = reqs.find((r) => r.p === 'anthropic');
  ok(an?.b.model === 'claude-haiku-5-5' && an.h['anthropic-dangerous-direct-browser-access'] === 'true' && an.h['x-api-key'] === 'sk-ant-test' && an.b.system, 'Anthropic: Haiku 5.5, Browser-Header, Key, System-Prompt');
  const oa = reqs.find((r) => r.p === 'openai');
  ok(oa?.h.authorization === 'Bearer sk-test' && oa.b.messages[0].role === 'system', 'OpenAI: Bearer-Key und System-Nachricht');
  const ge = reqs.find((r) => r.p === 'gemini');
  ok(ge?.h['x-goog-api-key'] === 'g-test' && ge.b.systemInstruction && !(await page.textContent('.ai-box')).includes('gedacht'), 'Gemini: Key-Header, systemInstruction, Denk-Teile ausgeblendet');
  await page.evaluate(() => { const s = JSON.parse(localStorage.getItem('vlp:settings:v1')); s.ai.enabled = false; localStorage.setItem('vlp:settings:v1', JSON.stringify(s)); });

  console.log('Desktop, dunkel + Mobil');
  const dark = await newPage({ colorScheme: 'dark' });
  await dark.goto(url + '/');
  await dark.waitForSelector('.modal input');
  await dark.fill('.modal input', 'Dunkel');
  await dark.click('.modal .btn-primary');
  await dark.waitForSelector('.module-card');
  await dark.waitForTimeout(500);
  await shot(dark, '09-dashboard-dunkel');
  await dark.goto(url + '/#/modul/m05');
  await dark.waitForTimeout(300);
  const firstLesson = await dark.evaluate(async () => (await import('/content/modules/m05.js')).default.lessons[0].id);
  await dark.goto(`${url}/#/modul/m05/lektion/${firstLesson}`);
  await dark.waitForTimeout(1000);
  await shot(dark, '10-lektion-dunkel');

  const mobile = await newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await mobile.goto(url + '/');
  await mobile.waitForSelector('.modal input');
  await mobile.fill('.modal input', 'Mobil');
  await mobile.click('.modal .btn-primary');
  await mobile.waitForSelector('.module-card');
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  ok(overflow <= 1, `Kein horizontales Scrollen auf Mobilgeräten (${overflow}px)`);
  await shot(mobile, '11-mobil');
} catch (e) {
  failed++;
  console.error('Abbruch:', e);
}

if (errors.length) { console.error('\nJavaScript-Fehler:'); [...new Set(errors)].forEach((e) => console.error('  ', e)); }
writeFileSync('/dev/null', '');
await browser.close();
server.close();
const total = failed + (errors.length ? 1 : 0);
console.log(total ? `\n✗ ${failed} Prüfungen fehlgeschlagen, ${errors.length} JS-Fehler` : '\n✓ Alle Prüfungen bestanden');
process.exit(total ? 1 : 0);
