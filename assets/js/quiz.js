// Quiz-Engine: Fragetypen single, multi, tf, order, match, cloze + Modul-Quiz-Runner.
import { h, mdEl, mdInline, shuffle, clear } from './ui.js';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const PAIR_COLORS = ['#3554d1', '#e8831c', '#17895d', '#9b51e0', '#c93b46'];

const norm = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').replace(/[^a-z0-9%]+/g, ' ').trim();

/**
 * Rendert eine Frage. onResult(correct:boolean) wird nach dem Prüfen aufgerufen.
 * Gibt { el, check, isAnswered } zurück.
 */
export function renderQuestion(q, { onResult, showCheck = true } = {}) {
  const body = h('div.q-body');
  const feedback = h('div');
  let answered = false;
  let impl;

  switch (q.type) {
    case 'single': case 'multi': impl = choice(q); break;
    case 'tf': impl = choice({ ...q, options: ['Richtig', 'Falsch'], answer: q.answer ? 0 : 1, type: 'single' }); break;
    case 'order': impl = order(q); break;
    case 'match': impl = match(q); break;
    case 'cloze': impl = cloze(q); break;
    default: impl = { el: h('p', 'Unbekannter Fragetyp'), ready: () => true, grade: () => true };
  }
  body.append(impl.el);

  const btn = h('button.btn.btn-primary', { type: 'button', onclick: () => check() }, 'Prüfen');
  const actions = h('div.q-actions', h('span.muted.small', hintFor(q.type)), showCheck ? btn : null);

  function check() {
    if (answered) return true;
    if (!impl.ready()) {
      btn.animate?.([{ transform: 'translateX(-3px)' }, { transform: 'translateX(3px)' }, { transform: 'none' }], { duration: 200 });
      return false;
    }
    answered = true;
    const ok = impl.grade();
    btn.disabled = true;
    btn.textContent = ok ? 'Richtig!' : 'Leider nicht ganz';
    clear(feedback).append(h(`div.explain.${ok ? 'ok' : 'bad'}`, h('strong', ok ? '✅ Richtig. ' : '💡 Lernmoment: '), mdEl(q.explain || '', 'span', 'md')));
    onResult?.(ok);
    return true;
  }

  const el = h('div.question', h('div.q-text', { html: mdInline(q.q) }), body, actions, feedback);
  return { el, check, isAnswered: () => answered };
}

function hintFor(type) {
  return { multi: 'Mehrfachauswahl möglich', order: 'Ziehen oder mit ↑/↓ sortieren', match: 'Links und rechts nacheinander anklicken', cloze: 'Lücken ausfüllen', tf: 'Stimmt die Aussage?' }[type] || 'Eine Antwort wählen';
}

function choice(q) {
  const multi = q.type === 'multi';
  const sel = new Set();
  const idx = q.options.map((_, i) => i);
  const order = q.noShuffle || q.type === 'tf' || q.options.length === 2 ? idx : shuffle(idx);
  const btns = order.map((i, pos) => {
    const b = h('button.opt', { type: 'button', 'aria-pressed': 'false', onclick: () => toggle(i, b) }, h('span.key', KEYS[pos]), h('span', { html: mdInline(q.options[i]) }));
    b.dataset.i = i;
    return b;
  });
  function toggle(i, b) {
    if (b.disabled) return;
    if (!multi) { sel.clear(); btns.forEach((x) => { x.classList.remove('selected'); x.setAttribute('aria-pressed', 'false'); }); }
    if (sel.has(i)) { sel.delete(i); b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false'); }
    else { sel.add(i); b.classList.add('selected'); b.setAttribute('aria-pressed', 'true'); }
  }
  const correct = new Set(multi ? q.answer : [q.answer]);
  return {
    el: h('div.opts', { role: multi ? 'group' : 'radiogroup' }, btns),
    ready: () => sel.size > 0,
    grade: () => {
      btns.forEach((b) => {
        const i = +b.dataset.i;
        b.disabled = true;
        if (correct.has(i)) b.classList.add('correct');
        else if (sel.has(i)) b.classList.add('wrong');
      });
      return sel.size === correct.size && [...sel].every((i) => correct.has(i));
    },
  };
}

function order(q) {
  let items = shuffle(q.items.map((t, i) => ({ t, i })));
  if (items.every((x, k) => x.i === k)) items = items.reverse();
  const list = h('ol.order-list');
  let dragSrc = null;
  function render() {
    clear(list);
    items.forEach((it, k) => {
      const li = h('li.order-item', { draggable: 'true', tabindex: '0', dataset: { k } },
        h('span.grip', '⋮⋮'), h('span', { html: mdInline(it.t) }),
        h('span.mv', h('button.btn.btn-sm', { type: 'button', 'aria-label': 'nach oben', onclick: () => move(k, -1) }, '↑'), h('button.btn.btn-sm', { type: 'button', 'aria-label': 'nach unten', onclick: () => move(k, 1) }, '↓')));
      li.addEventListener('dragstart', () => { dragSrc = k; li.classList.add('dragging'); });
      li.addEventListener('dragend', () => li.classList.remove('dragging'));
      li.addEventListener('dragover', (e) => e.preventDefault());
      li.addEventListener('drop', (e) => { e.preventDefault(); if (dragSrc != null && dragSrc !== k) { const [m] = items.splice(dragSrc, 1); items.splice(k, 0, m); render(); } });
      li.addEventListener('keydown', (e) => { if (e.key === 'ArrowUp') { e.preventDefault(); move(k, -1, true); } if (e.key === 'ArrowDown') { e.preventDefault(); move(k, 1, true); } });
      list.append(li);
    });
  }
  function move(k, d, refocus) {
    const j = k + d;
    if (locked || j < 0 || j >= items.length) return;
    [items[k], items[j]] = [items[j], items[k]];
    render();
    if (refocus) list.children[j]?.focus();
  }
  let locked = false;
  render();
  return {
    el: list,
    ready: () => true,
    grade: () => {
      locked = true;
      let ok = true;
      [...list.children].forEach((li, k) => {
        const good = items[k].i === k;
        ok &&= good;
        li.classList.add(good ? 'correct' : 'wrong');
        li.draggable = false;
        li.querySelector('.mv').replaceChildren(h('span.small', good ? '✓' : `→ Platz ${items[k].i + 1}`));
      });
      return ok;
    },
  };
}

function match(q) {
  const left = q.pairs.map((p, i) => ({ t: p[0], i }));
  const right = shuffle(q.pairs.map((p, i) => ({ t: p[1], i })));
  const assign = new Map(); // leftIndex -> rightIndex
  let selLeft = null;
  const lBtns = left.map((l) => h('button.match-item', { type: 'button', onclick: () => pickLeft(l.i) }, h('span.pair-tag'), h('span', { html: mdInline(l.t) })));
  const rBtns = right.map((r) => h('button.match-item', { type: 'button', onclick: () => pickRight(r.i) }, h('span.pair-tag'), h('span', { html: mdInline(r.t) })));
  let locked = false;
  function pickLeft(i) {
    if (locked) return;
    selLeft = i;
    paint();
  }
  function pickRight(ri) {
    if (locked || selLeft == null) return;
    for (const [k, v] of assign) if (v === ri) assign.delete(k);
    assign.set(selLeft, ri);
    selLeft = null;
    paint();
  }
  function paint() {
    lBtns.forEach((b, i) => {
      b.classList.toggle('sel', selLeft === i);
      b.classList.toggle('paired', assign.has(i));
      const tag = b.querySelector('.pair-tag');
      tag.textContent = assign.has(i) ? String(i + 1) : '';
      tag.style.background = assign.has(i) ? PAIR_COLORS[i % PAIR_COLORS.length] : 'transparent';
    });
    rBtns.forEach((b, k) => {
      const ri = right[k].i;
      const li = [...assign].find(([, v]) => v === ri)?.[0];
      b.classList.toggle('paired', li != null);
      const tag = b.querySelector('.pair-tag');
      tag.textContent = li != null ? String(li + 1) : '';
      tag.style.background = li != null ? PAIR_COLORS[li % PAIR_COLORS.length] : 'transparent';
    });
  }
  const grid = h('div.match-grid');
  const n = Math.max(lBtns.length, rBtns.length);
  for (let k = 0; k < n; k++) grid.append(lBtns[k] || h('span'), rBtns[k] || h('span'));
  return {
    el: grid,
    ready: () => assign.size === left.length,
    grade: () => {
      locked = true;
      let ok = true;
      lBtns.forEach((b, i) => {
        const good = assign.get(i) === i;
        ok &&= good;
        b.classList.add(good ? 'correct' : 'wrong');
      });
      rBtns.forEach((b, k) => {
        const ri = right[k].i;
        const li = [...assign].find(([, v]) => v === ri)?.[0];
        b.classList.add(li === ri ? 'correct' : 'wrong');
        if (li !== ri) b.append(h('div.small.muted', `gehört zu ${ri + 1}`));
      });
      return ok;
    },
  };
}

function cloze(q) {
  const parts = q.text.split(/(\{\{[^}]+\}\})/g);
  const inputs = [];
  const wrap = h('div.cloze-text');
  for (const part of parts) {
    const m = part.match(/^\{\{([^}]+)\}\}$/);
    if (m) {
      const answers = m[1].split('|').map((a) => a.trim());
      const inp = h('input.input.cloze-input', { type: 'text', 'aria-label': 'Lücke', autocomplete: 'off', size: Math.max(8, answers[0].length + 2) });
      inp.answers = answers;
      inputs.push(inp);
      wrap.append(inp);
    } else if (part) {
      wrap.append(h('span', { html: mdInline(part) }));
    }
  }
  return {
    el: wrap,
    ready: () => inputs.every((i) => i.value.trim()),
    grade: () => {
      let ok = true;
      inputs.forEach((i) => {
        const good = i.answers.some((a) => norm(a) === norm(i.value));
        ok &&= good;
        i.classList.add(good ? 'correct' : 'wrong');
        i.disabled = true;
        if (!good) i.after(h('span.small.muted', ` (${i.answers[0]})`));
      });
      return ok;
    },
  };
}

/** Modul-Quiz: alle Fragen nacheinander, Ergebnis am Ende. */
export function runQuiz(container, questions, { title = 'Quiz', onFinish, onAnswer } = {}) {
  let i = 0, score = 0;
  const results = [];
  const card = h('div.card.quiz-card');
  container.append(card);
  next();

  function next() {
    clear(card);
    if (i >= questions.length) return finish();
    const q = questions[i];
    const head = h('div.q-head', h('span', `${title} · Frage ${i + 1} von ${questions.length}`), h('span', `⭐ ${score}`));
    const prog = h('div.progress', { style: { marginBottom: '16px' } }, h('i', { style: { width: `${(i / questions.length) * 100}%` } }));
    let cont;
    const r = renderQuestion(q, {
      onResult: (ok) => {
        results.push({ q, ok });
        if (ok) score++;
        onAnswer?.(ok, q);
        cont.disabled = false;
        cont.focus();
      },
    });
    cont = h('button.btn.btn-accent', { type: 'button', disabled: true, onclick: () => { i++; next(); } }, i + 1 < questions.length ? 'Weiter →' : 'Auswertung');
    card.append(head, prog, r.el, h('div.q-actions', h('span'), cont));
    card.querySelector('.opt, .order-item, .match-item, .cloze-input')?.focus?.();
  }

  function finish() {
    const pct = Math.round((score / questions.length) * 100);
    const msg = pct === 100 ? 'Perfekt! Du hast alles drauf. 🏆' : pct >= 70 ? 'Bestanden – stark! Schau dir die offenen Punkte noch einmal an.' : 'Noch nicht bestanden (ab 70 %). Wiederhole die Lektionen und versuch es erneut – Wiederholen ist Lernen!';
    const wrong = results.filter((r) => !r.ok);
    card.append(
      h('div.quiz-result',
        h('div.pixel.small.muted', title),
        h('div.big', `${score}/${questions.length}`),
        h('div.progress.accent', h('i', { style: { width: pct + '%' } })),
        h('p', { style: { marginTop: '14px' } }, msg)),
      wrong.length ? h('details', { style: { marginTop: '14px' } }, h('summary', `Erklärungen zu ${wrong.length} offenen Fragen`),
        h('div.stack', { style: { marginTop: '10px' } }, wrong.map((r) => h('div.explain.bad', h('strong', { html: mdInline(r.q.q) }), mdEl(r.q.explain || ''))))) : null,
    );
    onFinish?.(score, questions.length, card);
  }
}
