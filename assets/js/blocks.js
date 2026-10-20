// Rendert Lektionsblöcke (siehe docs/CONTENT_SCHEMA.md).
import { h, md, mdEl, mdInline, toast } from './ui.js';
import { renderQuestion } from './quiz.js';
import { award, markWidget } from './gamification.js';
import { confetti } from './confetti.js';
import { createPlayer } from './video/player.js';
import { store } from './store.js';
import { aiEnabled, chat } from './ai.js';
import { COURSE } from '../../content/course.js';

const CALLOUT_TITLES = { info: 'Gut zu wissen', merksatz: 'Merksatz', warn: 'Achtung', tipp: 'Praxistipp' };

export function renderBlock(b, ctx = {}) {
  const fn = R[b.type];
  if (!fn) return h('div.notice.notice-warn', `Unbekannter Blocktyp: ${b.type}`);
  try {
    return h(`div.block.block-${b.type}-wrap`, fn(b, ctx));
  } catch (e) {
    console.error(e);
    return h('div.notice.notice-warn', 'Block konnte nicht dargestellt werden.');
  }
}

export function handoutLink(page, label) {
  return h('a', { href: `${COURSE.handout.file}#page=${page}`, target: '_blank', rel: 'noopener' }, label || `Handout S. ${page} öffnen ↗`);
}

const R = {
  text: (b) => mdEl(b.md),

  callout: (b) => h(`div.block-callout.callout-${b.variant || 'info'}`,
    h('h4', b.title || CALLOUT_TITLES[b.variant] || 'Hinweis'),
    mdEl(b.md)),

  praxis: (b) => h('div.block-praxis',
    h('span.praxis-tag', 'PRAXIS'),
    h('h4', { style: { marginTop: '4px' } }, b.title || 'Praxisbezug'),
    b.company ? h('div.company', '🏢 ', b.company) : null,
    mdEl(b.scenario),
    b.steps?.length ? h('ol', b.steps.map((s) => h('li', { html: mdInline(s) }))) : null,
    b.takeaway ? h('div.notice', { style: { marginTop: '10px' } }, h('strong', 'Take-away: '), h('span', { html: mdInline(b.takeaway) })) : null,
    b.source ? h('p.small.muted', { style: { marginTop: '8px', marginBottom: 0 } }, 'Quelle: ', h('a', { href: b.source.url, target: '_blank', rel: 'noopener noreferrer' }, b.source.title || b.source.url)) : null),

  handout: (b) => h('div.block-handout',
    h('div.ho-head', '📄 Original-Handout „KI-Management kompakt"', h('span.chip.chip-primary', `Kap. ${b.section} · S. ${b.page}`), handoutLink(b.page)),
    h('q', b.quote),
    b.md ? mdEl(b.md) : null),

  update: (b) => h('div.block-update',
    h('h4', '🔄 ', b.title || 'Aktualisierung zum Handout'),
    mdEl(b.md),
    b.sources?.length ? h('p.small', { style: { margin: '8px 0 0' } }, 'Belege: ', b.sources.map((s, i) => [i ? ' · ' : '', h('a', { href: s.url, target: '_blank', rel: 'noopener noreferrer' }, s.title)])) : null),

  table: (b) => h('div',
    h('div.tbl-wrap', h('table.tbl',
      b.caption ? h('caption', b.caption) : null,
      h('thead', h('tr', b.head.map((c) => h('th', { html: mdInline(c) })))),
      h('tbody', b.rows.map((r) => h('tr', r.map((c) => h('td', { html: mdInline(c) })))))))),

  flipcards: (b) => h('div.flip-grid', b.cards.map((c) => {
    const card = h('button.flip', { type: 'button', 'aria-label': 'Karte umdrehen', onclick: () => card.classList.toggle('flipped') },
      h('div.flip-inner', h('div.flip-face.front', { html: mdInline(c.front) }), h('div.flip-face.back', { html: md(c.back) })));
    return card;
  })),

  steps: (b) => {
    const list = h('div.steps-list', b.items.map((it, i) => h('div.step-item', h('div.num', String(i + 1)), h('div', h('strong', it.title), it.md ? mdEl(it.md) : null))));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        [...list.children].forEach((c, i) => setTimeout(() => c.classList.add('in'), i * 140));
        io.disconnect();
      }
    }), { threshold: 0.2 });
    io.observe(list);
    return list;
  },

  timeline: (b) => h('div.timeline', b.items.map((it) => h('div.tl-item', h('div.tl-date', it.date), h('strong', it.title), it.md ? mdEl(it.md) : null))),

  interactive: (b, ctx) => {
    const host = h('div.card.widget-host', h('div.empty', '⏳ Interaktives Element wird geladen …'));
    import('./widgets/index.js').then(async ({ widgets }) => {
      const loader = widgets[b.widget];
      if (!loader) throw new Error('Widget fehlt: ' + b.widget);
      const mod = await loader();
      host.replaceChildren();
      const key = `${ctx.lessonId || 'x'}:${b.widget}`;
      mod.default(host, b.props || {}, {
        confetti: (o) => confetti(o),
        award: (xp, reason) => { award(Math.min(xp, 25), reason || 'Interaktives Element', { once: 'widget:' + key }); markWidget(key); },
        toast,
        ai: { enabled: aiEnabled, chat: (messages, opts = {}) => chat(messages, opts) },
      });
      // Bereits das Öffnen/Benutzen zählt für die Entdecker-Badge
      host.addEventListener('pointerdown', () => markWidget(key), { once: true });
    }).catch((e) => {
      console.error(e);
      host.replaceChildren(h('div.notice.notice-warn', 'Dieses interaktive Element ist noch nicht verfügbar.'));
    });
    return host;
  },

  video: (b) => {
    const player = createPlayer({ scene: b.scene, getSound: () => store.settings.sound });
    return h('div', player.el, h('p.small.muted', { style: { marginTop: '6px' } }, '🎬 Pixel-Motion-Graphic – komplett aus Code generiert. ', h('a', { href: '#/video' }, 'Ganzen Film ansehen →')));
  },

  youtube: (b) => {
    const box = h('div.yt');
    const consent = h('div.yt-consent',
      h('div',
        h('div', { style: { fontSize: '2rem' } }, '▶'),
        h('strong', b.title),
        h('p', `${b.channel || 'YouTube'} · ${b.lang === 'en' ? 'Englisch' : 'Deutsch'}${b.minutes ? ` · ca. ${b.minutes} Min.` : ''}`),
        h('p', 'Beim Abspielen werden Daten an YouTube (Google) übertragen. Das Video wird im erweiterten Datenschutzmodus (youtube-nocookie.com) geladen.'),
        h('div.row', { style: { justifyContent: 'center' } },
          h('button.btn.btn-accent', { type: 'button', onclick: load }, 'Video laden'),
          h('a.btn', { href: `https://www.youtube.com/watch?v=${b.id}`, target: '_blank', rel: 'noopener noreferrer' }, 'Auf YouTube öffnen ↗'))));
    box.append(consent);
    function load() {
      box.replaceChildren(h('iframe', { src: `https://www.youtube-nocookie.com/embed/${b.id}?rel=0`, title: b.title, allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen', allowfullscreen: true, loading: 'lazy', referrerpolicy: 'strict-origin-when-cross-origin' }));
      award(5, 'Video gestartet', { once: 'yt:' + b.id, silent: true });
    }
    return box;
  },

  quickcheck: (b) => {
    const r = renderQuestion({ ...b, type: b.qtype || 'single' }, {
      onResult: (ok) => { if (ok) award(5, 'Quick-Check', { once: 'qc:' + b.q.slice(0, 60), surprise: 0.06 }); },
    });
    return h('div.qc', h('div.pixel.small', { style: { color: 'var(--accent)', marginBottom: '8px' } }, '⚡ QUICK-CHECK'), r.el);
  },

  links: (b) => h('div.card.card-flat',
    h('h4', { style: { marginTop: 0 } }, '🔗 ', b.title || 'Links'),
    h('ul.sources-list', b.items.map((it) => h('li', h('span.src-type', 'Link'), h('div', h('a', { href: it.url, target: '_blank', rel: 'noopener noreferrer' }, it.title), it.note ? h('div.small.muted', it.note) : null))))),
};

export function renderSources(sources = []) {
  if (!sources.length) return h('p.muted', 'Keine Quellen hinterlegt.');
  return h('ul.sources-list', sources.map((s) => h('li',
    h('span.src-type', s.type || 'Quelle'),
    h('div',
      s.url ? h('a', { href: s.url, target: '_blank', rel: 'noopener noreferrer' }, s.title) : h('strong', s.title),
      h('div.small.muted', [s.publisher, s.year].filter(Boolean).join(' · '), s.note ? ` – ${s.note}` : '')))));
}

/** Text einer Lektion als Klartext (für KI-Kontext und Offline-Suche). */
export function lessonPlainText(lesson) {
  const parts = [lesson.title];
  for (const b of lesson.blocks || []) {
    if (b.md) parts.push(b.md);
    if (b.title) parts.push(b.title);
    if (b.scenario) parts.push(b.scenario);
    if (b.steps) parts.push(b.steps.join('\n'));
    if (b.takeaway) parts.push(b.takeaway);
    if (b.quote) parts.push(b.quote);
    if (b.cards) parts.push(b.cards.map((c) => `${c.front}: ${c.back}`).join('\n'));
    if (b.items) parts.push(b.items.map((i) => [i.title, i.md, i.date].filter(Boolean).join(' ')).join('\n'));
    if (b.rows) parts.push([b.head, ...b.rows].map((r) => r.join(' | ')).join('\n'));
  }
  return parts.join('\n\n');
}

/** Kleiner Helfer, falls KI im Widget genutzt werden soll. */
export async function askAI(prompt, system) {
  if (!aiEnabled()) throw new Error('KI ist deaktiviert');
  return chat([{ role: 'user', content: prompt }], { system });
}
