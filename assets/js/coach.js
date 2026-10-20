// Lerncoach „Pixel“: mit KI ein hinführender Tutor-Chat, ohne KI eine Offline-Suche im Kursmaterial.
import { h, mdEl, clear, esc } from './ui.js';
import { aiEnabled, chat, TUTOR_SYSTEM, aiConfig, PROVIDERS } from './ai.js';
import { allModules } from './gamification.js';
import { lessonPlainText } from './blocks.js';
import { normalize } from './exercise.js';

let ctx = { title: 'Kursübersicht', text: '', link: '#/' };
let panel = null;
let history = [];

export function setCoachContext(c) {
  if (c.title !== ctx.title) history = [];
  ctx = { ...ctx, ...c };
  if (panel) renderHead();
}

export function mountCoach() {
  const fab = h('button.btn.btn-accent.coach-fab', { type: 'button', onclick: toggle, 'aria-label': 'Lerncoach öffnen' }, '🤖 Coach');
  document.body.append(fab);
}

let headEl, chatEl, inputEl;
function toggle() {
  if (panel) { panel.remove(); panel = null; return; }
  headEl = h('div.coach-head');
  chatEl = h('div.chat');
  inputEl = h('textarea.textarea', { rows: 1, placeholder: aiEnabled() ? 'Frag mich etwas zur Lektion …' : 'Begriff oder Frage eingeben (Offline-Suche) …', 'aria-label': 'Frage an den Coach' });
  inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
  const form = h('form', { onsubmit: (e) => { e.preventDefault(); send(); } }, inputEl, h('button.btn.btn-primary', { type: 'submit' }, '➤'));
  panel = h('div.coach-panel', { role: 'dialog', 'aria-label': 'Lerncoach' }, headEl, chatEl, form);
  document.body.append(panel);
  renderHead();
  if (!history.length) greet();
  else history.forEach((m) => chatEl.append(msgEl(m)));
  inputEl.focus();
}

function renderHead() {
  if (!headEl) return;
  const ai = aiEnabled();
  const c = aiConfig();
  clear(headEl).append(
    h('span', '🤖 Pixel · Lerncoach'),
    h('span.chip', { style: { marginLeft: 'auto' } }, ai ? `KI: ${PROVIDERS[c.provider].label.split(' ')[0]}` : 'Offline-Modus'),
    h('button.icon-btn', { type: 'button', 'aria-label': 'Schließen', onclick: toggle }, '✕'));
}

function greet() {
  const ai = aiEnabled();
  const m = {
    role: 'assistant',
    content: ai
      ? `Hi! Ich bin Pixel. Ich helfe dir bei **${ctx.title}** – mit Denkanstößen statt fertiger Lösungen. Was ist dir noch unklar?`
      : `Hi! Ich bin Pixel. Die KI ist gerade **aus** (optional in den [Einstellungen](#/einstellungen) aktivierbar). Ich kann trotzdem helfen: Gib einen Begriff oder eine Frage ein und ich suche passende Stellen in allen Lektionen und im Glossar.`,
  };
  history.push(m);
  chatEl.append(msgEl(m));
}

function msgEl(m) {
  if (m.html) return h(`div.msg.${m.role}`, m.html);
  return h(`div.msg.${m.role}`, m.role === 'assistant' ? mdEl(m.content) : m.content);
}

async function send() {
  const q = inputEl.value.trim();
  if (!q) return;
  inputEl.value = '';
  const um = { role: 'user', content: q };
  history.push(um);
  chatEl.append(msgEl(um));
  if (aiEnabled()) {
    const typing = h('div.msg.assistant.typing', 'denkt nach');
    chatEl.append(typing);
    chatEl.scrollTop = chatEl.scrollHeight;
    try {
      const system = `${TUTOR_SYSTEM}\n\nAktueller Kontext der Lernplattform: ${ctx.title}\n\nInhalt (Auszug):\n"""\n${(ctx.text || '').slice(0, 14000)}\n"""`;
      const msgs = history.filter((m) => !m.html && m !== history[0]).map((m) => ({ role: m.role, content: m.content }));
      const a = await chat(msgs, { system, maxTokens: 900 });
      typing.remove();
      const am = { role: 'assistant', content: a };
      history.push(am);
      chatEl.append(msgEl(am));
    } catch (e) {
      typing.remove();
      chatEl.append(h('div.msg.assistant', '⚠️ ', e.message));
    }
  } else {
    const res = offlineSearch(q);
    const html = res.length
      ? h('div', h('p', `Ich habe ${res.length} passende Stellen gefunden:`), ...res.map((r) => h('div', { style: { margin: '8px 0' } }, h('a', { href: r.link, onclick: () => toggle() }, h('strong', r.where)), h('div.small', { html: highlight(r.snippet, q) }))))
      : h('div', h('p', 'Dazu habe ich nichts gefunden. Versuch es mit einem anderen Begriff (z. B. „RAG“, „AI Act“, „ROI“, „n8n“).'));
    const am = { role: 'assistant', html };
    history.push(am);
    chatEl.append(msgEl(am));
  }
  chatEl.scrollTop = chatEl.scrollHeight;
}

function highlight(s, q) {
  let out = esc(s);
  for (const t of q.split(/\s+/).filter((x) => x.length > 2)) {
    out = out.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
  }
  return out;
}

/** Einfache Volltextsuche über Lektionen + Glossar. */
export function offlineSearch(q, limit = 5) {
  const terms = normalize(q).split(/[^a-z0-9]+/).filter((t) => t.length > 2);
  if (!terms.length) return [];
  const hits = [];
  for (const m of allModules()) {
    for (const g of m.glossary || []) {
      const s = normalize(g.term + ' ' + g.def);
      const score = terms.reduce((a, t) => a + (normalize(g.term).includes(t) ? 5 : s.includes(t) ? 1 : 0), 0);
      if (score) hits.push({ score: score + 2, where: `Glossar: ${g.term}`, snippet: g.def, link: `#/glossar` });
    }
    for (const l of m.lessons) {
      const paras = lessonPlainText(l).split(/\n{2,}/);
      for (const p of paras) {
        const s = normalize(p);
        const score = terms.reduce((a, t) => a + (s.split(t).length - 1), 0);
        if (score) hits.push({ score, where: `${m.title} › ${l.title}`, snippet: p.replace(/[#*`>]/g, '').slice(0, 220) + (p.length > 220 ? ' …' : ''), link: `#/modul/${m.id}/lektion/${l.id}` });
      }
    }
  }
  const seen = new Set();
  return hits.sort((a, b) => b.score - a.score).filter((x) => !seen.has(x.where) && seen.add(x.where)).slice(0, limit);
}
