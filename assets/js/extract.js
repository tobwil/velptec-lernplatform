// Textextraktion aus hochgeladenen Dateien – komplett im Browser, ohne Server.
// Unterstützt: TXT, MD, CSV, JSON, HTML, DOCX, PPTX, XLSX (Text), ODT/ODP, PDF (via lokal eingebundenem pdf.js).

export const ACCEPT = '.txt,.md,.markdown,.csv,.json,.html,.htm,.docx,.pptx,.xlsx,.odt,.odp,.pdf';
const MAX_BYTES = 25 * 1024 * 1024;

// ---------- Minimaler ZIP-Leser (Central Directory + DecompressionStream) ----------
async function readZip(buf) {
  const dv = new DataView(buf);
  let eocd = -1;
  for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 65557); i--) {
    if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('Keine gültige ZIP-/Office-Datei');
  const count = dv.getUint16(eocd + 10, true);
  let off = dv.getUint32(eocd + 16, true);
  const entries = {};
  const dec = new TextDecoder();
  for (let n = 0; n < count; n++) {
    if (dv.getUint32(off, true) !== 0x02014b50) break;
    const method = dv.getUint16(off + 10, true);
    const csize = dv.getUint32(off + 20, true);
    const nameLen = dv.getUint16(off + 28, true);
    const extraLen = dv.getUint16(off + 30, true);
    const commLen = dv.getUint16(off + 32, true);
    const local = dv.getUint32(off + 42, true);
    const name = dec.decode(new Uint8Array(buf, off + 46, nameLen));
    entries[name] = { method, csize, local };
    off += 46 + nameLen + extraLen + commLen;
  }
  return {
    names: Object.keys(entries),
    async text(name) {
      const e = entries[name];
      if (!e) return null;
      const lnl = dv.getUint16(e.local + 26, true);
      const lel = dv.getUint16(e.local + 28, true);
      const data = new Uint8Array(buf, e.local + 30 + lnl + lel, e.csize);
      if (e.method === 0) return dec.decode(data);
      if (e.method !== 8) throw new Error('Nicht unterstützte Kompression');
      const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
      return new Response(stream).text();
    },
  };
}

const xml = (s) => new DOMParser().parseFromString(s, 'application/xml');
const byTag = (doc, tag) => [...doc.getElementsByTagName(tag)];

async function docx(buf) {
  const z = await readZip(buf);
  const doc = xml(await z.text('word/document.xml'));
  const out = [];
  for (const p of byTag(doc, 'w:p')) {
    const text = byTag(p, 'w:t').map((t) => t.textContent).join('');
    if (!text.trim()) { out.push(''); continue; }
    const style = byTag(p, 'w:pStyle')[0]?.getAttribute('w:val') || '';
    const lvl = style.match(/(?:heading|berschrift|Titel|Title)\s*(\d)?/i);
    const isList = byTag(p, 'w:numPr').length > 0;
    out.push(lvl ? `${'#'.repeat(Math.min(3, +(lvl[1] || 1)))} ${text}` : isList ? `- ${text}` : text);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}

async function pptx(buf) {
  const z = await readZip(buf);
  const slides = z.names.filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n)).sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0]);
  const out = [];
  for (const [i, s] of slides.entries()) {
    const doc = xml(await z.text(s));
    const paras = byTag(doc, 'a:p').map((p) => byTag(p, 'a:t').map((t) => t.textContent).join('')).filter((t) => t.trim());
    if (!paras.length) continue;
    out.push(`# Folie ${i + 1}: ${paras[0]}`, ...paras.slice(1).map((p) => `- ${p}`), '');
  }
  return out.join('\n');
}

async function xlsx(buf) {
  const z = await readZip(buf);
  const ss = await z.text('xl/sharedStrings.xml');
  if (!ss) return '';
  return byTag(xml(ss), 'si').map((si) => byTag(si, 't').map((t) => t.textContent).join('')).join('\n');
}

async function odf(buf) {
  const z = await readZip(buf);
  const doc = xml(await z.text('content.xml'));
  const out = [];
  const walk = (n) => {
    for (const c of n.children) {
      if (c.tagName === 'text:h') out.push(`## ${c.textContent}`);
      else if (c.tagName === 'text:p') out.push(c.textContent);
      else walk(c);
    }
  };
  walk(doc.documentElement);
  return out.join('\n');
}

let pdfjs;
async function pdf(buf, onProgress) {
  if (!pdfjs) {
    pdfjs = await import('../../vendor/pdfjs/pdf.min.mjs');
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('../../vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;
  }
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise;
  const out = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const tc = await page.getTextContent();
    let line = '', lastY = null;
    const lines = [];
    for (const it of tc.items) {
      const y = it.transform?.[5];
      if (lastY != null && Math.abs(y - lastY) > 2) { lines.push(line); line = ''; }
      line += it.str + (it.hasEOL ? '\n' : '');
      lastY = y;
    }
    lines.push(line);
    out.push(lines.join('\n'));
    onProgress?.(i / doc.numPages);
  }
  return out.join('\n\n');
}

/** Liest eine Datei und liefert { name, text, kind }. */
export async function extractText(file, onProgress) {
  if (file.size > MAX_BYTES) throw new Error('Datei ist zu groß (max. 25 MB).');
  const ext = (file.name.split('.').pop() || '').toLowerCase();
  let text;
  if (['txt', 'md', 'markdown', 'csv', 'json'].includes(ext)) text = await file.text();
  else if (['html', 'htm'].includes(ext)) {
    const d = new DOMParser().parseFromString(await file.text(), 'text/html');
    d.querySelectorAll('script,style,nav,footer').forEach((n) => n.remove());
    text = d.body?.innerText || d.body?.textContent || '';
  } else {
    const buf = await file.arrayBuffer();
    if (ext === 'docx') text = await docx(buf);
    else if (ext === 'pptx') text = await pptx(buf);
    else if (ext === 'xlsx') text = await xlsx(buf);
    else if (ext === 'odt' || ext === 'odp') text = await odf(buf);
    else if (ext === 'pdf') text = await pdf(buf, onProgress);
    else throw new Error(`Dateityp .${ext} wird nicht unterstützt.`);
  }
  text = String(text || '').replace(/\r/g, '').replace(/[ \t]+\n/g, '\n').replace(/\n{4,}/g, '\n\n\n').trim();
  if (!text) throw new Error('In der Datei wurde kein Text gefunden (gescanntes PDF? Dann bitte vorher OCR anwenden).');
  return { name: file.name, text, kind: ext };
}
