#!/usr/bin/env node
// Prüft Moduldateien gegen docs/CONTENT_SCHEMA.md.
// Aufruf: node tools/validate-content.mjs [content/modules/m01.js ...]
import { readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { COURSE } from '../content/course.js';

const BLOCKS = ['text', 'callout', 'praxis', 'skript', 'update', 'table', 'flipcards', 'steps', 'timeline', 'interactive', 'video', 'youtube', 'quickcheck', 'links'];
const WIDGETS = ['neural-net', 'data-quality', 'usecase-matrix', 'roi-calculator', 'process-steps', 'ai-act-classifier', 'risk-matrix', 'confusion-matrix', 'prompt-builder', 'rag-pipeline', 'agent-loop', 'workflow-builder', 'token-calculator', 'adkar-check'];
const SCENES = ['intro', 'ki', 'daten', 'strategie', 'prozess', 'risiko', 'n8n', 'rag', 'change', 'kpi', 'outro'];
const ICONS = ['brain', 'chart', 'target', 'gear', 'shield', 'people', 'gauge', 'book', 'spark', 'flow', 'box', 'leaf'];
const SOURCE_TYPES = ['Gesetz', 'Norm', 'Studie', 'Leitfaden', 'Doku', 'Artikel', 'Fachbuch', 'Tool', 'Video', 'Paper'];

export function validateQuestion(q, where, err) {
  const need = (cond, msg) => { if (!cond) err(`${where}: ${msg}`); };
  need(typeof q.q === 'string' && q.q.length > 3, 'q fehlt');
  need(typeof q.explain === 'string' && q.explain.length > 3, 'explain fehlt');
  switch (q.type) {
    case 'single':
      need(Array.isArray(q.options) && q.options.length >= 2, 'options fehlt');
      need(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < (q.options || []).length, 'answer ungültig');
      break;
    case 'multi':
      need(Array.isArray(q.options) && q.options.length >= 3, 'options fehlt');
      need(Array.isArray(q.answer) && q.answer.length >= 1 && q.answer.every((a) => Number.isInteger(a) && a < q.options.length), 'answer ungültig');
      break;
    case 'tf':
      need(typeof q.answer === 'boolean', 'answer muss boolean sein');
      break;
    case 'order':
      need(Array.isArray(q.items) && q.items.length >= 3, 'items fehlt');
      break;
    case 'match':
      need(Array.isArray(q.pairs) && q.pairs.length >= 3 && q.pairs.every((p) => p.length === 2), 'pairs ungültig');
      break;
    case 'cloze':
      need(typeof q.text === 'string' && /\{\{[^}]+\}\}/.test(q.text), 'text braucht {{lücke}}');
      break;
    default:
      err(`${where}: unbekannter Fragetyp ${q.type}`);
  }
}

export function validateModule(m, file = m?.id) {
  const errors = [];
  const err = (msg) => errors.push(`${file}: ${msg}`);
  const need = (cond, msg) => { if (!cond) err(msg); };
  need(/^[a-z0-9-]+$/.test(m.id || ''), 'id ungültig');
  need(typeof m.title === 'string', 'title fehlt');
  need(typeof m.subtitle === 'string', 'subtitle fehlt');
  need(ICONS.includes(m.icon), `icon ungültig (${m.icon})`);
  need(typeof m.minutes === 'number', 'minutes fehlt');
  need(Array.isArray(m.objectives) && m.objectives.length, 'objectives fehlt');
  need(!/handout/i.test(JSON.stringify(m)), 'enthält noch Verweise auf das Handout (entfernt – bitte auf das Theorieskript umstellen)');
  const chap = COURSE.skript.chapters.find((c) => c.module === m.id);
  if (chap) {
    need(String(m.chapter) === chap.chapter, `chapter muss ${chap.chapter} sein`);
    need(Array.isArray(m.skript) && m.skript.length, 'skript (Verweise aufs Theorieskript) fehlt');
    const covered = new Set((m.lessons || []).map((l) => l.skript?.chapter));
    chap.sections.forEach((sec) => need(covered.has(sec.chapter), `Skript-Abschnitt ${sec.chapter} „${sec.title}“ hat keine Lektion`));
    (m.lessons || []).forEach((l) => need(l.skript?.chapter && Number.isInteger(l.skript?.page), `${l.id}: skript {chapter, page} fehlt`));
  } else {
    need(m.plus === true, 'Modul ist weder Skriptkapitel (k1–k8) noch Plus-Modul (plus: true)');
  }
  need(Array.isArray(m.lessons) && m.lessons.length >= 1, 'lessons fehlt');
  const ids = new Set();
  (m.lessons || []).forEach((l, li) => {
    const w = `lesson[${li}] ${l.id}`;
    need(l.id && !ids.has(l.id), `${w}: id fehlt/doppelt`); ids.add(l.id);
    need(typeof l.title === 'string', `${w}: title fehlt`);
    need(Array.isArray(l.blocks) && l.blocks.length, `${w}: blocks fehlt`);
    let hasPraxis = false;
    (l.blocks || []).forEach((b, bi) => {
      const bw = `${w} block[${bi}] ${b.type}`;
      need(BLOCKS.includes(b.type), `${bw}: unbekannter Blocktyp`);
      if (b.type === 'praxis') { hasPraxis = true; need(b.scenario && Array.isArray(b.steps), `${bw}: scenario/steps fehlt`); }
      if (b.type === 'interactive') need(WIDGETS.includes(b.widget), `${bw}: unbekanntes widget ${b.widget}`);
      if (b.type === 'video') need(SCENES.includes(b.scene), `${bw}: unbekannte scene ${b.scene}`);
      if (b.type === 'youtube') need(/^[\w-]{11}$/.test(b.id || ''), `${bw}: youtube id ungültig`);
      if (b.type === 'quickcheck') validateQuestion({ ...b, type: b.qtype }, bw, err);
      if (b.type === 'table') need(Array.isArray(b.head) && Array.isArray(b.rows) && b.rows.every((r) => r.length === b.head.length), `${bw}: Tabellenzeilen passen nicht zum Kopf`);
      if (b.type === 'skript') need(b.chapter && Number.isInteger(b.page) && b.md && (!b.quote || b.quote.length <= 320), `${bw}: chapter/page/md fehlt oder quote > 320 Zeichen`);
      if (b.type === 'links') need(Array.isArray(b.items) && b.items.every((i) => /^https:\/\//.test(i.url)), `${bw}: items/url ungültig`);
      if (b.type === 'update') need(Array.isArray(b.sources) && b.sources.length, `${bw}: sources fehlt`);
    });
    need(hasPraxis, `${w}: kein praxis-Block (Praxisbezug ist Pflicht)`);
  });
  need(Array.isArray(m.quiz) && m.quiz.length >= 6, 'quiz braucht >= 6 Fragen');
  (m.quiz || []).forEach((q, i) => validateQuestion(q, `quiz[${i}]`, err));
  need(Array.isArray(m.exercises) && m.exercises.length >= 1, 'exercises fehlt');
  (m.exercises || []).forEach((e, i) => {
    const w = `exercise[${i}]`;
    need(e.id && e.title && e.task && e.sample, `${w}: id/title/task/sample fehlt`);
    need(Array.isArray(e.rubric) && e.rubric.length >= 2 && e.rubric.every((r) => r.criterion && Array.isArray(r.keywords) && r.keywords.length), `${w}: rubric ungültig`);
    need(Array.isArray(e.hints) && e.hints.length >= 2, `${w}: hints fehlt`);
  });
  need(Array.isArray(m.sources) && m.sources.length >= 3, 'sources braucht >= 3 Einträge');
  (m.sources || []).forEach((s, i) => {
    need(/^https:\/\//.test(s.url || ''), `source[${i}]: url muss https sein`);
    need(s.title && s.publisher, `source[${i}]: title/publisher fehlt`);
    need(SOURCE_TYPES.includes(s.type), `source[${i}]: type ungültig (${s.type})`);
  });
  return errors;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  let files = process.argv.slice(2);
  if (!files.length) {
    const dir = resolve('content/modules');
    files = readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => join(dir, f));
  }
  let total = 0;
  for (const f of files) {
    const mod = (await import(pathToFileURL(resolve(f)).href)).default;
    const errs = validateModule(mod, f);
    total += errs.length;
    errs.forEach((e) => console.error('✗', e));
    if (!errs.length) {
      const q = mod.quiz.length, l = mod.lessons.length, s = mod.sources.length;
      console.log(`✓ ${f}: ${l} Lektionen, ${q} Quizfragen, ${mod.exercises.length} Übungen, ${s} Quellen`);
    }
  }
  process.exit(total ? 1 : 0);
}
