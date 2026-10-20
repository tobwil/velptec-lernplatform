// Pixel-Film, Theorieskript-Übersicht, Glossar, Quellenverzeichnis.
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
          h('li', 'Was ist KI? → Kapitel 1'), h('li', 'Daten als Rohstoff → Kapitel 3'), h('li', 'KI-Strategie → Kapitel 2 und 7'), h('li', 'Vom PoC zum Betrieb → Kapitel 4 und 6'),
          h('li', 'EU AI Act & Governance → Kapitel 5'), h('li', 'Automatisieren mit n8n → Plus-Modul n8n'), h('li', 'RAG & Agenten → Kapitel 8, Plus-Module'), h('li', 'Menschen mitnehmen → Kapitel 4.5 und 7.4'), h('li', 'Wirkung messen → Kapitel 2.4 und 6.2')))),
  );
}

export function docsView(main) {
  const sk = COURSE.skript;
  const lessonsFor = (chapter) => course.modules.flatMap((m) => m.lessons.filter((l) => l.skript?.chapter === chapter).map((l) => ({ m, l })));
  const p = store.profile;
  main.classList.add('wide');
  main.append(
    h('h1', '📘 Theorieskript & Kursunterlagen'),
    h('p.muted', 'Die Lernplattform folgt dem offiziellen velpTEC-Theorieskript: Jedes Kapitel ist ein Modul, jeder Abschnitt hat mindestens eine Lektion. Die Lektionen bereiten den Skriptinhalt interaktiv auf, ergänzen Praxisfälle und aktuelle Entwicklungen und nennen jeweils die Skriptseite.'),
    h('div.card',
      h('div.row',
        h('div', { style: { flex: 1, minWidth: '240px' } }, h('h3', { style: { margin: 0 } }, sk.title), h('div.small.muted', `${sk.publisher} · ${sk.code} · ${sk.pages} Seiten · 8 Kapitel, 38 Abschnitte`)),
        h('a.btn.btn-primary', { href: sk.driveUrl, target: '_blank', rel: 'noopener noreferrer' }, 'Original-Skript öffnen ↗')),
      h('p.small.muted', { style: { margin: '10px 0 0' } }, '🔒 Das Skript ist Kursmaterial von velpTEC und wird nicht auf dieser Plattform veröffentlicht. Der Link funktioniert nur für berechtigte Teilnehmende und Dozierende; sonst erhältst du das Skript über deine Lehrkraft bzw. die velpTEC-Lernumgebung.')),
    h('section.section',
      h('h2', 'Inhaltsverzeichnis → Lektionen'),
      h('div.stack', sk.chapters.map((c) => {
        const m = course.modules.find((x) => x.id === c.module);
        return h('div.card',
          h('div.row', h('h3', { style: { margin: 0, flex: 1 } }, `${c.chapter} ${c.title}`), h('span.chip', `ab S. ${c.page}`), m ? h('a.btn.btn-sm', { href: `#/modul/${m.id}` }, 'Zum Kapitel →') : null),
          h('div.tbl-wrap', { style: { marginTop: '10px' } }, h('table.tbl',
            h('thead', h('tr', h('th', 'Abschnitt'), h('th', 'Skriptseite'), h('th', 'Lektion(en) auf der Plattform'))),
            h('tbody', c.sections.map((s) => h('tr',
              h('td', `${s.chapter} ${s.title}`),
              h('td', `S. ${s.page}`),
              h('td', lessonsFor(s.chapter).map(({ m: mm, l }, i) => [i ? h('br') : null, p?.lessons[l.id] ? '✅ ' : '', h('a', { href: `#/modul/${mm.id}/lektion/${l.id}` }, l.title)]))))))));
      }))),
    h('section.section',
      h('h2', '★ Plus-Module (über das Skript hinaus)'),
      h('div.grid.grid-2', course.modules.filter((m) => m.plus).map((m) => h('a.card.card-flat', { href: `#/modul/${m.id}`, style: { textDecoration: 'none', color: 'inherit' } }, h('strong', m.title), h('div.small.muted', m.subtitle))))),
  );
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
