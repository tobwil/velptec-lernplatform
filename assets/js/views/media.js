// Pixel-Film, Kursunterlagen (Original-Handout), Glossar, Quellenverzeichnis.
import { h, clear, toast, mdEl } from '../ui.js';
import { store } from '../store.js';
import { course, award } from '../gamification.js';
import { createPlayer, TOTAL } from '../video/player.js';
import { renderSources } from '../blocks.js';
import { COURSE } from '../../../content/course.js';
import { confetti } from '../confetti.js';

export function videoView(main) {
  const player = createPlayer({
    getSound: () => store.settings.sound,
    onComplete: () => {
      store.update((p) => { p.video.full = Date.now(); });
      award(30, 'Pixel-Film komplett angesehen', { once: 'video:full' });
      confetti({ rain: true, count: 200 });
    },
  });
  const status = h('span.small.muted');
  main.classList.add('wide');
  main.append(
    h('h1', `🎬 KI-Management in ${Math.round(TOTAL)} Sekunden`),
    h('p.muted', 'Ein Motion-Graphic-Erklärfilm im Pixel-Stil – komplett aus Code erzeugt: eigener Bitmap-Font, Sprites als Zeichenketten, Animationen als Zeitfunktionen und ein synthetisierter Chiptune-Soundtrack. Keine Bilddateien.'),
    player.el,
    h('div.chapters', player.chapters.map((c) => h('button.btn', { type: 'button', onclick: () => { player.seekTo(c.start); player.play(); } }, `${Math.floor(c.start / 60)}:${String(Math.floor(c.start % 60)).padStart(2, '0')} ${c.title}`))),
    h('section.section.grid.grid-2',
      h('div.card',
        h('h3', '⬇ Als Videodatei'),
        h('p.muted', 'Die MP4-Fassung wurde mit demselben Code Bild für Bild gerendert (Headless-Browser + ffmpeg, siehe tools/render-video.mjs) – ideal für Präsentationen oder das LMS.'),
        h('div.row',
          h('a.btn.btn-primary', { href: 'media/ki-management-pixelfilm.mp4', download: '' }, 'MP4 herunterladen (1280×720)'),
          h('button.btn', { type: 'button', onclick: async () => {
            status.textContent = '⏺ Aufnahme läuft – der Film wird einmal abgespielt …';
            try {
              await player.record((blob) => {
                const a = h('a', { href: URL.createObjectURL(blob), download: 'ki-management-pixelfilm.webm' });
                a.click();
                status.textContent = '✅ WebM gespeichert.';
              });
            } catch (e) { status.textContent = '⚠️ ' + e.message; }
          } }, '⏺ Im Browser als WebM aufnehmen')),
        status),
      h('div.card',
        h('h3', '🧭 Kapitel & Lernbezug'),
        h('ul.small', { style: { paddingLeft: '1.2em', margin: 0 } },
          h('li', 'Was ist KI? → Modul 1'), h('li', 'Daten als Rohstoff → Modul 1'), h('li', 'KI-Strategie → Modul 3'), h('li', 'Vom PoC zum Betrieb → Modul 4'),
          h('li', 'EU AI Act & Governance → Modul 5'), h('li', 'Automatisieren mit n8n → Modul 10'), h('li', 'RAG & Agenten → Modul 9/10'), h('li', 'Menschen mitnehmen → Modul 6'), h('li', 'Wirkung messen → Modul 7')))),
  );
}

export function docsView(main) {
  const hd = COURSE.handout;
  const frame = h('iframe.pdf-frame', { src: hd.file, title: hd.title, loading: 'lazy' });
  main.classList.add('wide');
  main.append(
    h('h1', '📄 Kursunterlagen'),
    h('p.muted', 'Das Original-Handout zur Weiterbildung ist hier eingebunden. Jede Lektion verweist mit Kapitel und Seite darauf; Aktualisierungen (z. B. EU AI Act 2026) sind in den Lektionen gekennzeichnet.'),
    h('div.card',
      h('div.row',
        h('div', { style: { flex: 1 } }, h('h3', { style: { margin: 0 } }, hd.title), h('div.small.muted', `${hd.authors} · ${hd.pages} Seiten · fasst das 230-seitige Skript „KI-Management“ zusammen`)),
        h('a.btn.btn-primary', { href: hd.file, download: '' }, '⬇ PDF herunterladen'),
        h('a.btn', { href: hd.file, target: '_blank', rel: 'noopener' }, 'In neuem Tab ↗'),
        h('a.btn.btn-ghost', { href: hd.driveUrl, target: '_blank', rel: 'noopener noreferrer', title: 'Nur für berechtigte Personen zugänglich' }, 'Original in Google Drive ↗'))),
    h('section.section.grid', { style: { gridTemplateColumns: 'minmax(0, 2fr) minmax(240px, 1fr)' } },
      frame,
      h('div.card',
        h('h3', 'Kapitel → Lernmodul'),
        h('div.stack', hd.sections.map((s) => {
          const m = s.module && course.modules.find((x) => x.id === s.module);
          return h('div.small',
            h('a', { href: `${hd.file}#page=${s.page}`, target: '_blank', rel: 'noopener' }, `${s.section}. ${s.title}`), h('span.muted', ` · S. ${s.page}`),
            m ? h('div', '→ ', h('a', { href: `#/modul/${m.id}` }, m.title)) : null);
        })),
        h('h4', 'Neue Module (nicht im Handout)'),
        h('div.stack', course.modules.filter((m) => m.isNew).map((m) => h('a.small', { href: `#/modul/${m.id}` }, '★ ', m.title))))),
  );
  frame.addEventListener('error', () => toast('PDF konnte nicht eingebettet werden – nutze den Download.', { icon: '📄' }));
}

export function glossaryView(main) {
  const entries = [];
  course.modules.concat(course.custom).forEach((m) => (m.glossary || []).forEach((g) => entries.push({ ...g, m })));
  entries.sort((a, b) => a.term.localeCompare(b.term, 'de'));
  const input = h('input.input', { type: 'search', placeholder: 'Begriff suchen …', 'aria-label': 'Glossar durchsuchen' });
  const list = h('div.stack');
  const render = () => {
    const q = input.value.toLowerCase();
    clear(list).append(...entries.filter((e) => !q || e.term.toLowerCase().includes(q) || e.def.toLowerCase().includes(q)).map((e) => h('div.card.card-flat',
      h('div.row', h('strong', e.term), h('span.spacer'), h('a.small', { href: `#/modul/${e.m.id}` }, e.m.title)), mdEl(e.def))));
  };
  input.addEventListener('input', render);
  main.append(h('h1', '📚 Glossar'), h('p.muted', `${entries.length} Begriffe aus allen Modulen.`), input, h('div', { style: { height: '14px' } }), list);
  render();
}

export function sourcesView(main) {
  const all = [];
  const seen = new Set();
  course.modules.forEach((m) => m.sources.forEach((s) => { if (!seen.has(s.url)) { seen.add(s.url); all.push({ ...s, note: m.title }); } }));
  const types = [...new Set(all.map((s) => s.type))].sort();
  let filter = '';
  const list = h('div');
  const input = h('input.input', { type: 'search', placeholder: 'Quellen durchsuchen …', 'aria-label': 'Quellen durchsuchen' });
  const render = () => {
    const q = input.value.toLowerCase();
    clear(list).append(renderSources(all.filter((s) => (!filter || s.type === filter) && (!q || `${s.title} ${s.publisher} ${s.note}`.toLowerCase().includes(q)))));
  };
  input.addEventListener('input', render);
  main.append(
    h('h1', '🔗 Quellen & weiterführende Links'),
    h('p.muted', `${all.length} überprüfbare Quellen – Gesetzestexte, Normen, Studien, offizielle Dokumentationen und Tools. Alle Links wurden bei Erstellung geprüft; Stand: Oktober 2026.`),
    input,
    h('div.row', { style: { margin: '12px 0' } }, ['', ...types].map((t) => {
      const b = h(`button.btn.btn-sm${t === '' ? '.btn-primary' : ''}`, { type: 'button', onclick: () => { filter = t; [...b.parentNode.children].forEach((x) => x.classList.remove('btn-primary')); b.classList.add('btn-primary'); render(); } }, t || 'Alle');
      return b;
    })),
    list);
  render();
}
