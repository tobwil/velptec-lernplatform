import { h, pixelIcon, mdInline } from '../ui.js';
import { store } from '../store.js';
import { course, levelInfo, streakInfo, moduleProgress, award, BADGES } from '../gamification.js';
import { renderQuestion } from '../quiz.js';
import { Pix } from '../video/engine.js';
import { renderFilm, TOTAL } from '../video/scenes.js';
import { confetti } from '../confetti.js';
import { COURSE } from '../../../content/course.js';

const today = () => new Date().toISOString().slice(0, 10);

export function dailyQuestion(date = today()) {
  const pool = [];
  course.modules.forEach((m) => m.quiz.forEach((q) => { if (['single', 'tf', 'multi', 'cloze'].includes(q.type)) pool.push({ q, m }); }));
  if (!pool.length) return null;
  let hsh = 0;
  for (const c of date) hsh = (hsh * 31 + c.charCodeAt(0)) >>> 0;
  return pool[hsh % pool.length];
}

function nextLesson(p) {
  for (const m of course.modules) {
    for (const l of m.lessons) if (!p?.lessons[l.id]) return { m, l };
    if (!moduleProgress(m, p).complete) return { m, quiz: true };
  }
  return null;
}

export function dashboard(main) {
  const p = store.profile;
  const li = levelInfo(p?.xp || 0);
  const st = streakInfo(p);
  const done = course.modules.filter((m) => moduleProgress(m, p).complete).length;
  const lessonsDone = Object.keys(p?.lessons || {}).length;
  const lessonsTotal = course.modules.reduce((a, m) => a + m.lessons.length, 0);
  const nx = nextLesson(p);
  const hour = new Date().getHours();
  const greet = hour < 11 ? 'Guten Morgen' : hour < 18 ? 'Hallo' : 'Guten Abend';

  // Hero-Animation (Intro-Szene in Schleife, stumm)
  const cv = h('canvas', { width: 320, height: 180, 'aria-label': 'Pixel-Animation: Lerncoach Pixel', role: 'img' });
  const pix = new Pix(cv.getContext('2d'));
  let raf = 0;
  const t0 = performance.now();
  const loop = (now) => {
    renderFilm(pix, ((now - t0) / 1000) % 11, 'intro');
    raf = requestAnimationFrame(loop);
  };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) renderFilm(pix, 8.5, 'intro');
  else raf = requestAnimationFrame(loop);

  const cont = nx
    ? h('a.btn.btn-primary.btn-lg', { href: nx.quiz ? `#/modul/${nx.m.id}/quiz` : `#/modul/${nx.m.id}/lektion/${nx.l.id}` }, nx.quiz ? `▶ Weiter: Quiz „${nx.m.title}“` : lessonsDone ? `▶ Weiter: ${nx.l.title}` : '▶ Mit Modul 1 starten')
    : h('a.btn.btn-accent.btn-lg', { href: '#/sprint' }, '⚡ Alles geschafft – Wissens-Sprint!');

  main.append(
    h('section.hero',
      h('div',
        h('div.pixel.small', { style: { color: 'var(--accent)', fontSize: '.62rem', marginBottom: '10px' } }, `LEVEL ${li.level} · ${li.title.toUpperCase()}`),
        h('h1', `${greet}, ${p?.name || 'du'}! 👋`),
        h('p.muted', 'Deine Weiterbildung KI-Management: kurze Lektionen mit echtem Praxisbezug, interaktive Übungen, Quiz und ein Pixel-Erklärfilm. Mach heute einen kleinen Schritt – Lernen wirkt am besten regelmäßig.'),
        h('div.row', { style: { marginTop: '16px' } }, cont, h('a.btn', { href: '#/video' }, `🎬 Pixel-Film (${Math.floor(TOTAL / 60)}:${String(Math.round(TOTAL % 60)).padStart(2, '0')})`))),
      h('div.hero-art', cv)),

    h('section.section.grid.grid-4',
      stat('⭐', `${p?.xp || 0}`, 'XP gesammelt', h('div.progress.accent', { style: { marginTop: '6px' } }, h('i', { style: { width: li.pct + '%' } }))),
      stat('🧩', `${done}/${course.modules.length}`, 'Module abgeschlossen'),
      stat('📖', `${lessonsDone}/${lessonsTotal}`, 'Lektionen erledigt'),
      stat('🔥', `${st.current}`, st.current === 1 ? 'Tag Lernserie' : 'Tage Lernserie')),

    dailyCard(p),

    h('section.section',
      h('div.section-title', h('h2', { style: { margin: 0 } }, 'Kursmodule'), h('span.spacer'), h('span.chip.chip-new', '★ = neu, über das Handout hinaus')),
      h('div.grid.grid-3', course.modules.map((m, i) => moduleCard(m, i, p)))),

    h('section.section.grid.grid-2',
      h('div.card',
        h('h3', '📄 Original-Kursunterlage'),
        h('p.muted', `Alle Lektionen verweisen auf das Handout „${COURSE.handout.title}“ – mit Kapitel und Seitenzahl. Wo das Handout veraltet ist, findest du einen markierten Aktualisierungshinweis.`),
        h('div.row', h('a.btn', { href: '#/unterlagen' }, 'Handout ansehen'), h('a.btn.btn-ghost', { href: COURSE.handout.file, download: '' }, '⬇ PDF herunterladen'))),
      h('div.card',
        h('h3', '🛠️ Eigene Lektionen erzeugen'),
        h('p.muted', 'Lade ein Übungsdokument (PDF, Word, PowerPoint, Text) hoch – die Plattform erzeugt daraus eine neue Lektion mit Lernkarten, Quiz und Transferaufgabe. Offline per Textanalyse oder optional mit KI.'),
        h('a.btn', { href: '#/eigene' }, '⬆ Dokument hochladen'))),

    badgesPreview(p),
  );
  return () => cancelAnimationFrame(raf);
}

function stat(icon, val, label, extra) {
  return h('div.card.kpi', h('span', { style: { fontSize: '1.4rem' } }, icon), h('b', val), h('span', label), extra || null);
}

function moduleCard(m, i, p) {
  const pr = moduleProgress(m, p);
  return h(`a.card.module-card${m.isNew ? '.is-new' : ''}`, { href: `#/modul/${m.id}` },
    h('div.mc-head',
      h('div.mc-icon', pixelIcon(m.icon, 30)),
      h('div', h('div.mc-num', `MODUL ${String(m.order ?? i + 1).padStart(2, '0')}${m.isNew ? ' ★ NEU' : ''}`), h('h3', m.title))),
    h('p', m.subtitle),
    h('div.mc-foot', h('span', `⏱ ${m.minutes} Min.`), h('div.progress', h('i', { style: { width: pr.pct + '%' } })), h('span', pr.complete ? '✅' : `${pr.pct}%`)));
}

function dailyCard(p) {
  const d = dailyQuestion();
  if (!d) return null;
  const done = p?.daily[today()];
  const body = h('div');
  if (done) {
    body.append(h('p', done.correct ? '✅ Heute schon richtig beantwortet – stark! Morgen gibt es eine neue Frage.' : '📘 Heute schon beantwortet. Die Erklärung findest du im Modul. Morgen gibt es eine neue Frage.'),
      h('a.btn.btn-sm', { href: `#/modul/${d.m.id}` }, `Zum Modul „${d.m.title}“`));
  } else {
    const r = renderQuestion(d.q, {
      onResult: (ok) => {
        store.update((pp) => { pp.daily[today()] = { correct: ok, t: Date.now() }; });
        if (ok) { award(15, 'Tagesfrage richtig', { once: 'daily:' + today() }); confetti({ count: 90, y: 0.5 }); }
        else award(3, 'Tagesfrage beantwortet', { once: 'daily:' + today(), silent: true });
      },
    });
    body.append(r.el);
  }
  return h('section.section.card.daily',
    h('div.row', { style: { marginBottom: '8px' } }, h('span.pixel', { style: { fontSize: '.62rem', color: 'var(--accent)' } }, '📅 TAGESFRAGE'), h('span.chip', { html: mdInline(d.m.title) }), h('span.spacer'), h('span.small.muted', '+15 XP')),
    body);
}

function badgesPreview(p) {
  const got = BADGES.filter((b) => p?.badges[b.id]);
  return h('section.section',
    h('div.section-title', h('h2', { style: { margin: 0 } }, 'Deine Badges'), h('span.spacer'), h('a', { href: '#/profil' }, `Alle ${BADGES.length} ansehen →`)),
    h('div.badges', (got.length ? got.slice(-6) : BADGES.slice(0, 4)).map((b) => h(`div.badge-card${p?.badges[b.id] ? '.got' : ''}`, h('div.b-ico', b.icon), h('b', b.title), h('span', b.desc)))));
}
