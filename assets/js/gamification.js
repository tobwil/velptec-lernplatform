// XP, Level, Streaks, Badges, Modulfortschritt.
import { store } from './store.js';
import { toast } from './ui.js';
import { confetti, maybeSurprise } from './confetti.js';

export const course = { modules: [], custom: [] };
export const allModules = () => [...course.modules, ...course.custom];
export const getModule = (id) => allModules().find((m) => m.id === id);

export const LEVELS = [
  { xp: 0, title: 'KI-Neugierige:r' },
  { xp: 120, title: 'Prompt-Pionier:in' },
  { xp: 300, title: 'Daten-Detektiv:in' },
  { xp: 550, title: 'Use-Case-Scout' },
  { xp: 850, title: 'Automations-Architekt:in' },
  { xp: 1250, title: 'Governance-Guide' },
  { xp: 1750, title: 'Change-Champion' },
  { xp: 2400, title: 'KI-Projektleiter:in' },
  { xp: 3200, title: 'KI-Manager:in' },
  { xp: 4200, title: 'KI-Stratege/Strategin' },
  { xp: 5500, title: 'KI-Legende' },
];

export function levelInfo(xp = 0) {
  let i = 0;
  while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++;
  const cur = LEVELS[i], next = LEVELS[i + 1];
  const pct = next ? Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100) : 100;
  return { level: i + 1, title: cur.title, next, pct, toNext: next ? next.xp - xp : 0 };
}

const today = () => new Date().toISOString().slice(0, 10);

export function streakInfo(p = store.profile) {
  const days = new Set(p?.days || []);
  let cur = 0;
  const d = new Date();
  // Heute noch nicht gelernt? Dann zählt die Serie bis gestern.
  if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (days.has(d.toISOString().slice(0, 10))) { cur++; d.setDate(d.getDate() - 1); }
  return { current: cur, total: days.size };
}

/** Vergibt XP. `once` verhindert Mehrfachvergabe für dasselbe Ereignis. */
export function award(xp, reason, { once, silent = false, surprise = 0 } = {}) {
  const p = store.profile;
  if (!p || !xp) return false;
  if (once && p.once[once]) return false;
  const before = levelInfo(p.xp).level;
  store.update((pp) => {
    if (once) pp.once[once] = Date.now();
    pp.xp += xp;
    pp.log.unshift({ t: Date.now(), xp, reason });
    pp.log = pp.log.slice(0, 200);
    const d = today();
    if (!pp.days.includes(d)) pp.days.push(d);
  });
  if (!silent) toast(`+${xp} XP · ${reason}`, { icon: '⭐', type: 'xp' });
  const after = levelInfo(store.profile.xp);
  if (after.level > before) {
    setTimeout(() => {
      toast(`Level ${after.level} erreicht: ${after.title}!`, { icon: '🏆', type: 'success', timeout: 5000 });
      confetti({ count: 220 });
    }, 400);
  } else if (surprise) {
    maybeSurprise(surprise);
  }
  checkBadges();
  return true;
}

export function moduleProgress(mod, p = store.profile) {
  const total = mod.lessons.length;
  const done = mod.lessons.filter((l) => p?.lessons[l.id]).length;
  const q = p?.quiz[mod.id];
  const quizPct = q ? Math.round((q.best / q.total) * 100) : null;
  const exDone = (mod.exercises || []).filter((e) => p?.exercises[e.id]?.submitted).length;
  const parts = total + 1 + (mod.exercises?.length ? 1 : 0);
  const score = done + (quizPct >= 70 ? 1 : 0) + (mod.exercises?.length && exDone ? 1 : 0);
  return {
    total, done, quizPct, exDone,
    pct: Math.round((score / parts) * 100),
    complete: done === total && quizPct != null && quizPct >= 70,
  };
}

export function markLesson(mod, lesson) {
  const p = store.profile;
  if (!p || p.lessons[lesson.id]) return;
  store.update((pp) => { pp.lessons[lesson.id] = Date.now(); });
  award(20, `Lektion „${lesson.title}"`, { once: 'lesson:' + lesson.id, surprise: 0.1 });
  afterModuleChange(mod);
}

export function recordQuiz(mod, correct, total) {
  const p = store.profile;
  if (!p) return;
  const prev = p.quiz[mod.id];
  store.update((pp) => {
    pp.quiz[mod.id] = { best: Math.max(prev?.best || 0, correct), total, last: correct, attempts: (prev?.attempts || 0) + 1, t: Date.now() };
  });
  if (correct === total) {
    award(50, 'Perfektes Quiz', { once: 'quiz-perfect:' + mod.id });
    confetti({ count: 260 });
  }
  afterModuleChange(mod);
}

function afterModuleChange(mod) {
  const pr = moduleProgress(mod);
  if (pr.complete && award(100, `Modul „${mod.title}" abgeschlossen`, { once: 'module:' + mod.id })) {
    setTimeout(() => confetti({ rain: true, count: 260 }), 300);
  }
  checkBadges();
}

// ---------- Badges ----------
export const BADGES = [
  { id: 'start', icon: '🚀', title: 'Startklar', desc: 'Erste Lektion abgeschlossen', test: (p) => Object.keys(p.lessons).length >= 1 },
  { id: 'reader', icon: '📚', title: 'Wissensdurst', desc: '10 Lektionen abgeschlossen', test: (p) => Object.keys(p.lessons).length >= 10 },
  { id: 'ace', icon: '🎯', title: 'Volltreffer', desc: 'Ein Quiz mit 100 % bestanden', test: (p) => Object.values(p.quiz).some((q) => q.best === q.total) },
  { id: 'module1', icon: '🧩', title: 'Erstes Modul', desc: 'Ein Modul komplett abgeschlossen', test: (p) => countComplete(p) >= 1 },
  { id: 'module3', icon: '🏗️', title: 'Fundament steht', desc: '3 Module abgeschlossen', test: (p) => countComplete(p) >= 3 },
  { id: 'allmods', icon: '👑', title: 'KI-Manager:in', desc: 'Alle Kursmodule abgeschlossen', test: (p) => course.modules.length > 0 && countComplete(p) >= course.modules.length },
  { id: 'automator', icon: '⚙️', title: 'Automatisierer:in', desc: 'Modul n8n & Agenten abgeschlossen', test: (p) => isComplete(p, 'm10') },
  { id: 'governance', icon: '🛡️', title: 'Compliance-Kompass', desc: 'Modul Risiko, Recht & Governance abgeschlossen', test: (p) => isComplete(p, 'm05') },
  { id: 'practice', icon: '✍️', title: 'Praxis-Profi', desc: '3 Übungsaufgaben eingereicht', test: (p) => Object.values(p.exercises).filter((e) => e.submitted).length >= 3 },
  { id: 'explorer', icon: '🕹️', title: 'Entdecker:in', desc: '5 interaktive Widgets ausprobiert', test: (p) => Object.keys(p.widgets).length >= 5 },
  { id: 'streak3', icon: '🔥', title: 'Dranbleiben', desc: '3 Tage in Folge gelernt', test: (p) => streakInfo(p).current >= 3 },
  { id: 'streak7', icon: '☄️', title: 'Lernserie', desc: '7 Tage in Folge gelernt', test: (p) => streakInfo(p).current >= 7 },
  { id: 'daily5', icon: '📅', title: 'Tagesfragen-Fan', desc: '5 Tagesfragen richtig beantwortet', test: (p) => Object.values(p.daily).filter((d) => d.correct).length >= 5 },
  { id: 'sprinter', icon: '⚡', title: 'Wissens-Sprinter:in', desc: 'Im Wissens-Sprint mindestens 10 Punkte', test: (p) => p.sprintBest >= 10 },
  { id: 'creator', icon: '🛠️', title: 'Content-Creator', desc: 'Eine eigene Lektion aus einem Dokument erzeugt', test: (p) => !!p.once['created-lesson'] },
  { id: 'cinema', icon: '🎬', title: 'Pixel-Kino', desc: 'Das Pixel-Erklärvideo komplett angesehen', test: (p) => !!p.video?.full },
];

function isComplete(p, id) { const m = getModule(id); return m ? moduleProgress(m, p).complete : false; }
function countComplete(p) { return course.modules.filter((m) => moduleProgress(m, p).complete).length; }

export function checkBadges() {
  const p = store.profile;
  if (!p) return;
  const fresh = BADGES.filter((b) => !p.badges[b.id] && safe(() => b.test(p)));
  if (!fresh.length) return;
  store.update((pp) => fresh.forEach((b) => { pp.badges[b.id] = Date.now(); }));
  fresh.forEach((b, i) => setTimeout(() => {
    toast(`Badge freigeschaltet: ${b.title}`, { icon: b.icon, type: 'success', timeout: 4500 });
    confetti({ count: 120, y: 0.8 });
  }, 600 + i * 900));
}
const safe = (fn) => { try { return fn(); } catch { return false; } };

export function markWidget(key) {
  const p = store.profile;
  if (!p || p.widgets[key]) return;
  store.update((pp) => { pp.widgets[key] = Date.now(); });
  checkBadges();
}
