import { h, mdEl, pixelIcon, clear, toast, modal } from '../ui.js';
import { store, idb } from '../store.js';
import { getModule, course, moduleProgress, markLesson, recordQuiz, award } from '../gamification.js';
import { renderBlock, renderSources, lessonPlainText, skriptLink, skriptChip } from '../blocks.js';
import { COURSE } from '../../../content/course.js';
import { runQuiz } from '../quiz.js';
import { renderExercise } from '../exercise.js';
import { setCoachContext } from '../coach.js';
import { shuffle } from '../ui.js';

function notFound(main) {
  main.append(h('div.empty', h('h2', 'Modul nicht gefunden'), h('a.btn', { href: '#/' }, 'Zur Übersicht')));
}

function crumbs(...items) {
  return h('nav.crumbs', { 'aria-label': 'Brotkrumen' }, items.flatMap((it, i) => [i ? h('span', '›') : null, it.href ? h('a', { href: it.href }, it.label) : h('span', it.label)]));
}

const modIndex = (m) => course.modules.indexOf(m);
export const moduleLabel = (m) => (m.chapter ? `Kapitel ${m.chapter}` : m.plus ? 'Plus-Modul' : m.custom ? 'Eigene Lektion' : 'Modul');

export function moduleView(main, id) {
  const m = getModule(id);
  if (!m) return notFound(main);
  const p = store.profile;
  const pr = moduleProgress(m, p);
  setCoachContext({ title: `Modul: ${m.title}`, text: m.lessons.map(lessonPlainText).join('\n\n'), link: `#/modul/${m.id}` });

  const first = m.lessons.find((l) => !p?.lessons[l.id]) || m.lessons[0];

  main.append(
    crumbs({ href: '#/', label: 'Übersicht' }, { label: moduleLabel(m) }),
    h('div.card',
      h('div.row', { style: { alignItems: 'flex-start', gap: '16px' } },
        h('div.mc-icon', { style: { width: '64px', height: '64px', display: 'grid', placeItems: 'center', borderRadius: '14px', background: m.isNew ? 'var(--accent-soft)' : 'var(--primary-soft)', color: m.isNew ? 'var(--accent)' : 'var(--primary)' } }, pixelIcon(m.icon, 40)),
        h('div', { style: { flex: 1, minWidth: '240px' } },
          h('div.row', m.chapter ? h('span.chip.chip-primary', `📘 Kapitel ${m.chapter} des Theorieskripts`) : null, m.plus ? h('span.chip.chip-new', '★ Plus-Modul – über das Skript hinaus') : null, m.custom ? h('span.chip.chip-warn', 'Eigene Lektion') : null, h('span.chip', `⏱ ca. ${m.minutes} Min.`), h('span.chip', `${m.lessons.length} Lektionen`), pr.complete ? h('span.chip.chip-ok', '✅ Abgeschlossen') : null),
          h('h1', { style: { marginTop: '8px' } }, m.title),
          h('p.muted', m.subtitle),
          h('div.progress', h('i', { style: { width: pr.pct + '%' } })),
          h('p.small.muted', { style: { marginTop: '6px' } }, `${pr.done}/${pr.total} Lektionen · Quiz: ${pr.quizPct == null ? 'noch offen' : pr.quizPct + ' %'} · Übungen: ${pr.exDone}/${m.exercises.length}`),
          h('div.row', h('a.btn.btn-primary', { href: `#/modul/${m.id}/lektion/${first.id}` }, pr.done ? '▶ Weiterlernen' : '▶ Starten'), h('a.btn', { href: `#/modul/${m.id}/quiz` }, '🎯 Modul-Quiz'))))),
  );

  if (m.skript?.length) {
    main.append(h('div.block-skript', { style: { marginTop: '16px' } },
      h('div.ho-head', `📘 Bezug zum Theorieskript „KI-Management“ (${COURSE.skript.publisher} ${COURSE.skript.code})`, skriptLink()),
      h('div.row', m.skript.map((x) => h('span.chip.chip-primary', `${x.chapter} ${x.title || ''} · S. ${x.page}`)))));
  }
  if (m.plus) {
    main.append(h('div.block-update', { style: { marginTop: '16px' } }, h('h4', '★ Plus-Modul'), h('p', { style: { margin: 0 } }, 'Dieses Thema geht über das Theorieskript hinaus oder vertieft es praktisch – für KI-Management heute zentral. Alle Aussagen sind mit Quellen belegt.')));
  }

  const tabs = [
    ['Lektionen', () => lessonsTab(m, p)],
    ['Lernziele', () => h('ul', m.objectives.map((o) => h('li', o)))],
    [`Übungen (${m.exercises.length})`, () => exercisesTab(m, p)],
    ['Glossar', () => glossaryTab(m)],
    [`Quellen (${m.sources.length})`, () => renderSources(m.sources)],
  ];
  const panel = h('div');
  const bar = h('div.tabs', { role: 'tablist' }, tabs.map(([label, fn], i) => {
    const b = h('button.tab', { type: 'button', role: 'tab', onclick: () => { bar.querySelectorAll('.tab').forEach((x) => x.classList.remove('active')); b.classList.add('active'); clear(panel).append(fn()); } }, label);
    if (!i) b.classList.add('active');
    return b;
  }));
  main.append(h('section.section', bar, panel));
  panel.append(tabs[0][1]());

  if (m.custom) main.append(customActions(m));
}

function lessonsTab(m, p) {
  return h('div.stack', m.lessons.map((l, i) => h('a.card.card-flat', { href: `#/modul/${m.id}/lektion/${l.id}`, style: { textDecoration: 'none', color: 'inherit', display: 'flex', gap: '14px', alignItems: 'center' } },
    h('span.pixel', { style: { fontSize: '.7rem', color: p?.lessons[l.id] ? 'var(--success)' : 'var(--muted)', width: '28px' } }, p?.lessons[l.id] ? '✓' : String(i + 1).padStart(2, '0')),
    h('div', { style: { flex: 1 } }, h('strong', l.title), h('div.small.muted', `${l.skript ? `📘 Skript S. ${l.skript.page} · ` : ''}${l.deepening ? 'Vertiefung · ' : ''}⏱ ${l.minutes || 10} Min. · ${l.blocks.length} Abschnitte${l.blocks.some((b) => b.type === 'interactive') ? ' · 🕹️ interaktiv' : ''}${l.blocks.some((b) => b.type === 'video' || b.type === 'youtube') ? ' · 🎬 Video' : ''}`)),
    h('span', '→'))).concat([
    h('a.card.card-flat', { href: `#/modul/${m.id}/quiz`, style: { textDecoration: 'none', color: 'inherit', display: 'flex', gap: '14px', alignItems: 'center', borderColor: 'var(--accent)' } },
      h('span', { style: { width: '28px' } }, '🎯'), h('div', { style: { flex: 1 } }, h('strong', 'Modul-Quiz'), h('div.small.muted', `${m.quiz.length} Fragen · ab 70 % bestanden · bestes Ergebnis: ${p?.quiz[m.id] ? `${p.quiz[m.id].best}/${p.quiz[m.id].total}` : '–'}`)), h('span', '→')),
  ]));
}

function exercisesTab(m, p) {
  if (!m.exercises.length) return h('p.muted', 'Keine Übungen in diesem Modul.');
  return h('div.stack', m.exercises.map((e) => h('a.card.card-flat', { href: `#/modul/${m.id}/uebung/${e.id}`, style: { textDecoration: 'none', color: 'inherit' } },
    h('div.row', h('strong', e.title), h('span.spacer'), p?.exercises[e.id]?.submitted ? h('span.chip.chip-ok', 'eingereicht') : h('span.chip', 'offen')),
    h('div.small.muted', { style: { marginTop: '6px' } }, mdEl(e.scenario || e.task)))));
}

function glossaryTab(m) {
  if (!m.glossary?.length) return h('p.muted', 'Kein Glossar.');
  return h('dl', m.glossary.map((g) => [h('dt', h('strong', g.term)), h('dd', { style: { margin: '2px 0 12px' } }, mdEl(g.def, 'span'))]));
}

function customActions(m) {
  return h('section.section.card.card-flat',
    h('h3', 'Eigene Lektion verwalten'),
    h('p.small.muted', `Quelle: ${m.sources?.[0]?.title || 'unbekannt'} · erstellt ${m.createdAt ? new Date(m.createdAt).toLocaleString('de-DE') : ''} · Generator: ${m.generator}`),
    h('div.row',
      h('button.btn', { type: 'button', onclick: () => {
        const blob = new Blob([JSON.stringify(m, null, 2)], { type: 'application/json' });
        const a = h('a', { href: URL.createObjectURL(blob), download: `lektion-${m.title.replace(/[^\wäöüß-]+/gi, '-').toLowerCase()}.json` });
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      } }, '⬇ Als Datei exportieren (zum Teilen)'),
      h('button.btn', { type: 'button', style: { color: 'var(--danger)' }, onclick: () => modal('Lektion löschen?', h('p', `„${m.title}“ wird aus diesem Browser entfernt.`), { actions: [{ label: 'Abbrechen' }, { label: 'Löschen', primary: true, onClick: async () => { await idb.del('custom', m.id); const { reloadCustom } = await import('../app.js'); await reloadCustom(); location.hash = '#/eigene'; toast('Lektion gelöscht.', { icon: '🗑️' }); } }] }) }, '🗑 Löschen')));
}

export function lessonView(main, id, lid) {
  const m = getModule(id);
  if (!m) return notFound(main);
  const li = m.lessons.findIndex((l) => l.id === lid);
  if (li < 0) return notFound(main);
  const l = m.lessons[li];
  const p = store.profile;
  setCoachContext({ title: `${m.title} › ${l.title}`, text: lessonPlainText(l), link: location.hash });

  const toc = h('aside.lesson-toc.card.card-flat',
    h('div.pixel.small', { style: { fontSize: '.55rem', color: 'var(--muted)', marginBottom: '8px' } }, 'LEKTIONEN'),
    m.lessons.map((x, i) => h(`a${x.id === l.id ? '.active' : ''}`, { href: `#/modul/${m.id}/lektion/${x.id}` }, h('span.ck', p?.lessons[x.id] ? '✅' : `${i + 1}.`), h('span', x.title))),
    h('a', { href: `#/modul/${m.id}/quiz` }, h('span.ck', '🎯'), h('span', 'Modul-Quiz')),
    m.exercises.map((e) => h('a', { href: `#/modul/${m.id}/uebung/${e.id}` }, h('span.ck', '✍️'), h('span', e.title))));

  const article = h('article',
    crumbs({ href: '#/', label: 'Übersicht' }, { href: `#/modul/${m.id}`, label: m.title }, { label: `Lektion ${li + 1}` }),
    h('div.row', h('span.chip', `${moduleLabel(m)} · Lektion ${li + 1} von ${m.lessons.length}`), l.skript ? skriptChip(l.skript.chapter, l.skript.page) : null, l.deepening ? h('span.chip.chip-new', 'Vertiefung') : null, h('span.chip', `⏱ ${l.minutes || 10} Min.`), p?.lessons[l.id] ? h('span.chip.chip-ok', '✅ erledigt') : null),
    h('h1', { style: { marginTop: '10px' } }, l.title),
    l.blocks.map((b) => renderBlock(b, { lessonId: l.id, moduleId: m.id })));

  const next = m.lessons[li + 1];
  const doneBtn = h('button.btn.btn-accent.btn-lg', { type: 'button', onclick: () => {
    markLesson(m, l);
    location.hash = next ? `#/modul/${m.id}/lektion/${next.id}` : `#/modul/${m.id}/quiz`;
  } }, next ? '✓ Erledigt – weiter zur nächsten Lektion' : '✓ Erledigt – weiter zum Modul-Quiz');

  article.append(h('div.lesson-nav',
    li > 0 ? h('a.btn', { href: `#/modul/${m.id}/lektion/${m.lessons[li - 1].id}` }, '← Zurück') : h('a.btn', { href: `#/modul/${m.id}` }, '← Modulübersicht'),
    doneBtn));
  main.classList.add('wide');
  main.append(h('div.lesson-layout', article, toc));
}

export function quizView(main, id) {
  const m = getModule(id);
  if (!m) return notFound(main);
  setCoachContext({ title: `Quiz: ${m.title}`, text: m.lessons.map(lessonPlainText).join('\n\n'), link: location.hash });
  main.append(crumbs({ href: '#/', label: 'Übersicht' }, { href: `#/modul/${m.id}`, label: m.title }, { label: 'Quiz' }),
    h('h1', '🎯 Modul-Quiz: ', m.title),
    h('p.muted', `${m.quiz.length} Fragen in zufälliger Reihenfolge. Ab 70 % ist das Quiz bestanden. Jede Antwort wird erklärt – Fehler sind Lernmomente!`));
  const box = h('div');
  main.append(box);
  const start = () => {
    clear(box);
    runQuiz(box, shuffle(m.quiz), {
      title: m.title,
      onAnswer: (ok) => { if (ok) award(10, 'Richtige Antwort', { silent: true, surprise: 0.07 }); },
      onFinish: (score, total, card) => {
        recordQuiz(m, score, total);
        const idx = modIndex(m);
        const nextMod = idx >= 0 ? course.modules[idx + 1] : null;
        card.append(h('div.row', { style: { justifyContent: 'center', marginTop: '18px' } },
          h('button.btn', { type: 'button', onclick: start }, '↻ Nochmal'),
          m.exercises[0] ? h('a.btn', { href: `#/modul/${m.id}/uebung/${m.exercises[0].id}` }, '✍️ Zur Übung') : null,
          nextMod ? h('a.btn.btn-primary', { href: `#/modul/${nextMod.id}` }, `Weiter: ${nextMod.title} →`) : h('a.btn.btn-primary', { href: '#/rangliste' }, '🏆 Zur Rangliste')));
      },
    });
  };
  start();
}

export function exerciseView(main, id, eid) {
  const m = getModule(id);
  const ex = m?.exercises.find((e) => e.id === eid);
  if (!ex) return notFound(main);
  setCoachContext({ title: `Übung: ${ex.title}`, text: `${ex.scenario}\n\n${ex.task}\n\nKriterien:\n${ex.rubric.map((r) => '- ' + r.criterion).join('\n')}\n\nHinweis an den Coach: Gib keine Musterlösung heraus, sondern führe mit Leitfragen hin.`, link: location.hash });
  main.append(crumbs({ href: '#/', label: 'Übersicht' }, { href: `#/modul/${m.id}`, label: m.title }, { label: 'Übung' }));
  renderExercise(main, m, ex);
}
