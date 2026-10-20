// Wissens-Sprint: 90 Sekunden, Fragen aus allen Modulen, Combo-Bonus, Highscore für die Rangliste.
import { h, clear, mdInline, shuffle } from '../ui.js';
import { store } from '../store.js';
import { course, award } from '../gamification.js';
import { confetti } from '../confetti.js';

const DURATION = 90;

export function sprintView(main) {
  const box = h('div.card.quiz-card');
  main.append(
    h('h1', '⚡ Wissens-Sprint'),
    h('p.muted', `${DURATION} Sekunden, so viele Wissensfragen wie möglich aus allen Modulen. Richtig = +1 Punkt, drei richtige in Folge = Combo-Bonus. Dein Highscore landet in der Rangliste.`),
    box);
  let timer = 0;
  intro();

  function intro() {
    const best = store.profile?.sprintBest || 0;
    clear(box).append(h('div.quiz-result',
      h('div.big', '⚡ READY?'),
      h('p', `Dein Highscore: ${best} Punkte`),
      h('div.row', { style: { justifyContent: 'center' } },
        h('button.btn.btn-accent.btn-lg', { type: 'button', onclick: start }, 'Sprint starten'),
        h('a.btn', { href: '#/rangliste' }, 'Rangliste'))));
  }

  function start() {
    const pool = [];
    course.modules.forEach((m) => m.quiz.forEach((q) => {
      if (q.type === 'single' || q.type === 'tf') pool.push({ q, m });
    }));
    const qs = shuffle(pool);
    let i = 0, score = 0, combo = 0, left = DURATION, answered = 0;
    const timeBar = h('div.timer-bar', h('i', { style: { width: '100%' } }));
    const head = h('div.q-head');
    const body = h('div');
    clear(box).append(timeBar, head, body);
    const tick = () => {
      left--;
      timeBar.firstChild.style.width = (left / DURATION) * 100 + '%';
      paintHead();
      if (left <= 0) finish();
    };
    timer = setInterval(tick, 1000);
    const paintHead = () => { head.replaceChildren(h('span', `⏱ ${left}s`), h('span', combo >= 3 ? `🔥 Combo x${combo}` : ''), h('span', `⭐ ${score}`)); };
    paintHead();
    next();

    function next() {
      if (left <= 0) return;
      if (i >= qs.length) { finish(); return; }
      const { q, m } = qs[i++];
      const opts = q.type === 'tf' ? [{ t: 'Richtig', ok: q.answer === true }, { t: 'Falsch', ok: q.answer === false }] : shuffle(q.options.map((t, k) => ({ t, ok: k === q.answer })));
      clear(body).append(
        h('div.small.muted', m.title),
        h('div.q-text', { html: mdInline(q.q) }),
        h('div.opts', opts.map((o) => {
          const b = h('button.opt', { type: 'button', onclick: () => pick(o, b) }, h('span', { html: mdInline(o.t) }));
          return b;
        })));
      function pick(o, b) {
        answered++;
        body.querySelectorAll('.opt').forEach((x) => { x.disabled = true; });
        if (o.ok) {
          combo++;
          score += combo >= 3 ? 2 : 1;
          b.classList.add('correct');
          if (combo === 5) confetti({ count: 60, y: 0.6 });
        } else {
          combo = 0;
          b.classList.add('wrong');
          body.querySelectorAll('.opt').forEach((x, k) => { if (opts[k].ok) x.classList.add('correct'); });
        }
        paintHead();
        setTimeout(next, o.ok ? 350 : 1100);
      }
    }

    function finish() {
      clearInterval(timer);
      const best = store.profile?.sprintBest || 0;
      const record = score > best;
      store.update((p) => { p.sprintBest = Math.max(p.sprintBest || 0, score); });
      award(Math.min(30, score * 2), `Wissens-Sprint: ${score} Punkte`, { surprise: 0.1 });
      if (record && score > 0) confetti({ count: 220 });
      clear(box).append(h('div.quiz-result',
        h('div.pixel.small.muted', 'ZEIT ABGELAUFEN'),
        h('div.big', `${score} PUNKTE`),
        h('p', record ? '🏆 Neuer persönlicher Rekord!' : `Dein Rekord: ${Math.max(best, score)} Punkte`),
        h('p.small.muted', `${answered} Fragen beantwortet`),
        h('div.row', { style: { justifyContent: 'center' } },
          h('button.btn.btn-accent', { type: 'button', onclick: start }, '↻ Nochmal'),
          h('a.btn', { href: '#/rangliste' }, '🏆 Rangliste'))));
    }
  }
  return () => clearInterval(timer);
}
