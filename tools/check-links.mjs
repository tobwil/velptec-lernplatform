#!/usr/bin/env node
// Prüft alle externen Links (Quellen, Link-Blöcke, Praxis-Quellen, YouTube-IDs) aller Module.
// Aufruf: node tools/check-links.mjs [--json report.json]
import { readdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const dir = resolve('content/modules');
const urls = new Map(); // url -> [orte]
const yt = new Map();
const add = (u, where) => { if (/^https?:/.test(u || '')) { if (!urls.has(u)) urls.set(u, []); urls.get(u).push(where); } };
for (const f of readdirSync(dir).filter((x) => x.endsWith('.js'))) {
  const m = (await import(pathToFileURL(join(dir, f)).href)).default;
  m.sources?.forEach((s) => add(s.url, `${m.id} sources`));
  for (const l of m.lessons) for (const b of l.blocks) {
    if (b.type === 'links') b.items.forEach((i) => add(i.url, `${l.id} links`));
    if (b.source?.url) add(b.source.url, `${l.id} praxis`);
    if (b.type === 'update') b.sources.forEach((s) => add(s.url, `${l.id} update`));
    if (b.type === 'youtube') yt.set(b.id, `${l.id}: ${b.title}`);
    const md = [b.md, b.scenario, b.takeaway].filter(Boolean).join(' ');
    for (const mm of md.matchAll(/\]\((https?:[^)\s]+)\)/g)) add(mm[1], `${l.id} md`);
  }
}
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
async function check(u) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 20000);
      const r = await fetch(u, { method, redirect: 'follow', signal: ctl.signal, headers: { 'user-agent': UA, accept: 'text/html,application/pdf,*/*' } });
      clearTimeout(t);
      if (r.ok || method === 'GET') return r.status;
    } catch (e) { if (method === 'GET') return 'ERR ' + (e.cause?.code || e.name); }
  }
}
const results = [];
const list = [...urls.keys()];
for (let i = 0; i < list.length; i += 8) {
  await Promise.all(list.slice(i, i + 8).map(async (u) => { results.push({ url: u, status: await check(u), where: urls.get(u) }); }));
}
for (const [id, where] of yt) {
  const st = await check(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
  results.push({ url: `youtube:${id}`, status: st, where: [where] });
}
const bad = results.filter((r) => r.status !== 200);
results.sort((a, b) => String(a.status).localeCompare(String(b.status)));
for (const r of bad) console.log(`${r.status}\t${r.url}\t(${r.where.join(', ')})`);
console.log(`\n${results.length} Links geprüft, ${results.length - bad.length} ok, ${bad.length} auffällig (403/429 sind oft Bot-Sperren und manuell zu prüfen).`);
const ji = process.argv.indexOf('--json');
if (ji > 0) writeFileSync(process.argv[ji + 1], JSON.stringify(results, null, 2));
