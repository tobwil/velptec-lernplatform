// App-Shell: Navigation, Routing, Theme, Onboarding.
import { h, $, clear, pixelIcon, pixelAvatar, modal, toast } from './ui.js';
import { store, on, idb } from './store.js';
import { course, levelInfo, streakInfo, moduleProgress, checkBadges } from './gamification.js';
import { loadModules, COURSE } from '../../content/course.js';
import { mountCoach, setCoachContext } from './coach.js';
import { aiEnabled } from './ai.js';

const routes = [
  [/^\/?$/, () => import('./views/dashboard.js').then((m) => m.dashboard)],
  [/^\/modul\/([\w-]+)$/, () => import('./views/module.js').then((m) => m.moduleView)],
  [/^\/modul\/([\w-]+)\/lektion\/([\w-]+)$/, () => import('./views/module.js').then((m) => m.lessonView)],
  [/^\/modul\/([\w-]+)\/quiz$/, () => import('./views/module.js').then((m) => m.quizView)],
  [/^\/modul\/([\w-]+)\/uebung\/([\w-]+)$/, () => import('./views/module.js').then((m) => m.exerciseView)],
  [/^\/sprint$/, () => import('./views/sprint.js').then((m) => m.sprintView)],
  [/^\/rangliste$/, () => import('./views/leaderboard.js').then((m) => m.leaderboardView)],
  [/^\/profil$/, () => import('./views/leaderboard.js').then((m) => m.profileView)],
  [/^\/video$/, () => import('./views/media.js').then((m) => m.videoView)],
  [/^\/unterlagen$/, () => import('./views/media.js').then((m) => m.docsView)],
  [/^\/glossar$/, () => import('./views/media.js').then((m) => m.glossaryView)],
  [/^\/quellen$/, () => import('./views/media.js').then((m) => m.sourcesView)],
  [/^\/eigene$/, () => import('./views/upload.js').then((m) => m.uploadView)],
  [/^\/einstellungen$/, () => import('./views/settings.js').then((m) => m.settingsView)],
];

let appEl, sideEl, mainEl, topXp, topStreak, cleanup = null;

export function applyTheme() {
  const t = store.settings.theme;
  if (t === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.dataset.theme = t;
  const dark = t === 'dark' || (t === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0e1320' : '#f4f3ee');
}

function cycleTheme() {
  const order = ['auto', 'light', 'dark'];
  const next = order[(order.indexOf(store.settings.theme) + 1) % 3];
  store.setSettings({ theme: next });
  applyTheme();
  toast(`Farbmodus: ${{ auto: 'automatisch (System)', light: 'hell', dark: 'dunkel' }[next]}`, { icon: next === 'dark' ? '🌙' : next === 'light' ? '☀️' : '🌗' });
  themeBtn.textContent = themeIcon();
}
const themeIcon = () => ({ auto: '🌗', light: '☀️', dark: '🌙' }[store.settings.theme]);
let themeBtn;

function navLink(href, icon, label, extra) {
  return h('a.nav-link', { href, dataset: { href } }, typeof icon === 'string' ? pixelIcon(icon, 20) : icon, h('span', label), extra || null);
}

function renderSidebar() {
  const p = store.profile;
  const mods = course.modules.map((m, i) => {
    const pr = p ? moduleProgress(m, p) : { pct: 0, complete: false };
    const a = navLink(`#/modul/${m.id}`, m.icon, `${m.order ?? i + 1}. ${m.title}`, h('span.nav-prog', pr.complete ? '✓' : `${pr.pct}%`));
    if (pr.complete) a.classList.add('done');
    return a;
  });
  const customs = course.custom.map((m) => navLink(`#/modul/${m.id}`, 'upload', m.title));
  clear(sideEl).append(
    h('a.brand', { href: '#/' }, brandLogo(), h('div', h('div.brand-title', 'VELPTEC'), h('div.brand-sub', 'Weiterbildung KI-Management'))),
    navLink('#/', 'spark', 'Übersicht'),
    h('div.nav-sec', 'Kursmodule'),
    ...mods,
    h('div.nav-sec', 'Üben & Spielen'),
    navLink('#/sprint', 'gauge', 'Wissens-Sprint'),
    navLink('#/rangliste', 'trophy', 'Rangliste'),
    navLink('#/profil', p ? pixelAvatar(p.name, 20) : 'people', 'Mein Fortschritt'),
    h('div.nav-sec', 'Material'),
    navLink('#/video', 'chart', 'Pixel-Erklärfilm'),
    navLink('#/unterlagen', 'book', 'Kursunterlagen (Handout)'),
    navLink('#/glossar', 'brain', 'Glossar'),
    navLink('#/quellen', 'target', 'Quellen & Links'),
    h('div.nav-sec', 'Eigene Lektionen'),
    navLink('#/eigene', 'upload', 'Dokument hochladen'),
    ...customs,
    h('div.sidebar-foot',
      navLink('#/einstellungen', 'gear', 'Einstellungen', h('span.nav-prog', aiEnabled() ? 'KI an' : 'KI aus'))),
  );
  highlightNav();
}

function brandLogo() {
  const c = h('canvas.brand-logo', { width: 16, height: 16, 'aria-hidden': 'true' });
  const x = c.getContext('2d');
  const rows = ['................', '.bbbbbbbbbbbbbb.', '.b............b.', '.b.aa......aa.b.', '.b..aa....aa..b.', '.b...aa..aa...b.', '.b....aaaa....b.', '.b.....aa.....b.', '.b............b.', '.b..mmmmmmmm..b.', '.b............b.', '.bbbbbbbbbbbbbb.', '.....bb..bb.....', '....bbbbbbbb....', '................', '................'];
  const pal = { b: '#5b7cff', a: '#ffb257', m: '#4fd1a1' };
  x.fillStyle = '#0b0f1d'; x.fillRect(0, 0, 16, 16);
  rows.forEach((r, y) => [...r].forEach((ch, xx) => { if (pal[ch]) { x.fillStyle = pal[ch]; x.fillRect(xx, y, 1, 1); } }));
  return c;
}

function highlightNav() {
  const cur = location.hash || '#/';
  sideEl.querySelectorAll('.nav-link').forEach((a) => {
    const href = a.dataset.href;
    a.classList.toggle('active', href === cur || (href !== '#/' && cur.startsWith(href + '/')));
  });
}

function renderTop() {
  const p = store.profile;
  if (!p) return;
  const li = levelInfo(p.xp);
  clear(topXp).append(h('span.lvl', `LV ${li.level}`), h('span', `${p.xp} XP`), h('span.xp-bar', h('i', { style: { width: li.pct + '%' } })));
  topXp.title = li.next ? `${li.title} – noch ${li.toNext} XP bis „${li.next.title}“` : li.title;
  const s = streakInfo(p);
  topStreak.textContent = s.current ? `🔥 ${s.current} Tag${s.current > 1 ? 'e' : ''}` : '🔥 0';
  topStreak.title = 'Lernserie (Tage in Folge)';
}

async function route() {
  const path = (location.hash || '#/').slice(1);
  appEl.classList.remove('nav-open');
  for (const [re, load] of routes) {
    const m = path.match(re);
    if (!m) continue;
    try { cleanup?.(); } catch { /* ignorieren */ }
    cleanup = null;
    const view = await load();
    clear(mainEl);
    mainEl.className = 'content';
    setCoachContext({ title: 'Kursübersicht', text: course.modules.map((x) => `${x.title}: ${x.subtitle}`).join('\n'), link: '#/' });
    cleanup = (await view(mainEl, ...m.slice(1))) || null;
    window.scrollTo({ top: 0, behavior: 'instant' });
    highlightNav();
    $('h1', mainEl)?.setAttribute('tabindex', '-1');
    return;
  }
  clear(mainEl).append(h('div.empty', h('h2', 'Seite nicht gefunden'), h('a.btn', { href: '#/' }, 'Zur Übersicht')));
}

function onboarding() {
  const name = h('input.input', { placeholder: 'z. B. Alex', maxlength: 32, 'aria-label': 'Dein Name oder Spitzname' });
  const go = () => {
    const n = name.value.trim() || 'Lernende:r';
    store.createProfile(n);
    toast(`Willkommen, ${n}! Los geht's.`, { icon: '👋', type: 'success' });
    route();
    return true;
  };
  const m = modal('Willkommen zur Weiterbildung KI-Management 👋',
    h('div.stack',
      h('p', 'Hier lernst du interaktiv mit Lektionen, Quiz, Animationen, Übungen mit Praxisbezug und einem Pixel-Erklärfilm. Dein Fortschritt wird nur lokal in diesem Browser gespeichert.'),
      h('label.field', 'Wie sollen wir dich nennen?', name, h('span.hint', 'Erscheint in der Rangliste. Ein Spitzname reicht völlig.')),
      h('p.small.muted', 'KI-Unterstützung (Feedback, Lerncoach) ist optional und kann später in den Einstellungen mit eigenem API-Key aktiviert werden. Alles funktioniert auch komplett ohne KI.')),
    { actions: [{ label: 'Loslegen 🚀', primary: true, onClick: go }] });
  name.focus();
  name.addEventListener('keydown', (e) => { if (e.key === 'Enter') { go(); m.close(); } });
}

export async function reloadCustom() {
  try {
    course.custom = (await idb.all('custom')).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  } catch (e) {
    console.warn('IndexedDB nicht verfügbar', e);
    course.custom = [];
  }
  renderSidebar();
}

async function boot() {
  applyTheme();
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);
  appEl = $('#app');
  sideEl = h('nav.sidebar', { 'aria-label': 'Hauptnavigation' });
  themeBtn = h('button.icon-btn', { type: 'button', onclick: cycleTheme, 'aria-label': 'Hell/Dunkel umschalten', title: 'Farbmodus wechseln' }, themeIcon());
  topXp = h('a.xp-pill', { href: '#/profil' });
  topStreak = h('span.streak');
  const top = h('header.topbar',
    h('button.icon-btn.menu-btn', { type: 'button', 'aria-label': 'Menü', onclick: () => appEl.classList.toggle('nav-open') }, '☰'),
    h('span.pixel.small.hide-sm', { style: { fontSize: '.6rem', color: 'var(--muted)' } }, `${COURSE.provider.toUpperCase()} · ${COURSE.title.toUpperCase()}`),
    h('span.spacer'), topStreak, topXp, themeBtn);
  mainEl = h('main.content', { id: 'main' });
  clear(appEl).append(sideEl, h('div.main', top, mainEl, h('footer.footer', 'Lernplattform zur Weiterbildung KI-Management · Inhalte auf Basis des Handouts „KI-Management kompakt“ (Zeitlmann & Wilhelm, KIsruptiv GbR), erweitert um aktuelle Themen · Fortschritt bleibt lokal in deinem Browser · ', h('a', { href: '#/einstellungen' }, 'Datenschutz & Einstellungen'))));
  appEl.addEventListener('click', (e) => { if (e.target === appEl) appEl.classList.remove('nav-open'); });

  clear(mainEl).append(h('div.empty', '⏳ Kurs wird geladen …'));
  course.modules = await loadModules();
  await reloadCustom();
  on((what) => { if (what === 'state') { renderTop(); renderSidebar(); } if (what === 'settings') renderSidebar(); });
  if (!store.profile) onboarding();
  renderTop();
  mountCoach();
  addEventListener('hashchange', route);
  await route();
  checkBadges();
}

boot().catch((e) => {
  console.error(e);
  document.body.append(h('div.notice.notice-warn', { style: { margin: '20px' } }, 'Die Lernplattform konnte nicht starten: ', e.message, '. Hinweis: Die Seite muss über einen Webserver geöffnet werden (z. B. „npm start“), nicht per Doppelklick als Datei.'));
});
