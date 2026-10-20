// Übungsaufgaben: Bearbeitung, Offline-Feedback (Rubrik-Abgleich), gestufte Tipps,
// optional KI-Feedback und hinführender Nachfrage-Dialog.
import { h, mdEl, toast, clear } from './ui.js';
import { store } from './store.js';
import { award } from './gamification.js';
import { confetti } from './confetti.js';
import { aiEnabled, chat, feedbackPrompt, TUTOR_SYSTEM, aiConfig, PROVIDERS } from './ai.js';
import { extractText, ACCEPT } from './extract.js';

export const normalize = (s) => String(s).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

/** Offline-Bewertung: Schlüsselbegriffe je Kriterium + Umfang. */
export function offlineCheck(ex, text) {
  const t = normalize(text);
  const wordsCount = (text.match(/\S+/g) || []).length;
  const results = ex.rubric.map((r) => {
    const found = r.keywords.filter((k) => t.includes(normalize(k)));
    const need = r.min || 1;
    return { ...r, found, hit: found.length >= need, need };
  });
  const range = (ex.deliverable || '').match(/(\d+)\s*[–-]\s*(\d+)\s*W/);
  let lengthNote = null;
  if (range) {
    const [lo, hi] = [+range[1], +range[2]];
    if (wordsCount < lo * 0.8) lengthNote = `Dein Text hat ${wordsCount} Wörter – gefordert sind etwa ${lo}–${hi}. Ergänze noch Details oder ein Beispiel.`;
    else if (wordsCount > hi * 1.3) lengthNote = `Dein Text hat ${wordsCount} Wörter – gefordert sind etwa ${lo}–${hi}. Versuche zu verdichten: Was ist wirklich wichtig?`;
  }
  const score = Math.round((results.filter((r) => r.hit).length / results.length) * 10);
  return { results, wordsCount, lengthNote, score };
}

export function renderExercise(container, mod, ex) {
  const state = () => store.profile?.exercises[ex.id] || {};
  const save = (patch) => store.update((p) => { p.exercises[ex.id] = { ...(p.exercises[ex.id] || {}), ...patch, t: Date.now() }; });

  const ta = h('textarea.textarea', { 'aria-label': 'Deine Bearbeitung', rows: 14, placeholder: 'Schreibe hier deine Lösung …' });
  ta.value = state().draft ?? ex.template ?? '';
  let saveTimer;
  const wc = h('span.small.muted');
  const updWc = () => { wc.textContent = `${(ta.value.match(/\S+/g) || []).length} Wörter · automatisch gespeichert`; };
  ta.addEventListener('input', () => { clearTimeout(saveTimer); saveTimer = setTimeout(() => save({ draft: ta.value }), 500); updWc(); });
  updWc();

  const fileInput = h('input', { type: 'file', accept: ACCEPT, class: 'hidden' });
  fileInput.addEventListener('change', async () => {
    const f = fileInput.files[0];
    if (!f) return;
    try {
      toast('Datei wird gelesen …', { icon: '📄' });
      const { text } = await extractText(f);
      ta.value = (ta.value.trim() ? ta.value.trim() + '\n\n' : '') + `--- Inhalt aus ${f.name} ---\n` + text.slice(0, 20000);
      save({ draft: ta.value });
      updWc();
      toast('Text aus der Datei übernommen.', { icon: '✅', type: 'success' });
    } catch (e) {
      toast(e.message, { icon: '⚠️', type: 'error', timeout: 6000 });
    }
    fileInput.value = '';
  });

  // ---------- Tipps ----------
  let hintIdx = state().hints || 0;
  const hintBox = h('div.stack');
  const renderHints = () => {
    clear(hintBox);
    ex.hints.slice(0, hintIdx).forEach((hint, i) => hintBox.append(h('div.block-callout.callout-tipp', h('h4', `💡 Tipp ${i + 1} von ${ex.hints.length}`), mdEl(hint))));
    hintBtn.disabled = hintIdx >= ex.hints.length;
    hintBtn.textContent = hintIdx >= ex.hints.length ? 'Alle Tipps gezeigt' : `💡 Tipp ${hintIdx + 1} anzeigen`;
  };
  const hintBtn = h('button.btn', { type: 'button', onclick: () => { hintIdx++; save({ hints: hintIdx }); renderHints(); } });

  // ---------- Offline-Check ----------
  const checkBox = h('div');
  const runOffline = () => {
    if (ta.value.trim().length < 30) { toast('Schreib zuerst ein paar Sätze – dann gebe ich dir Feedback.', { icon: '✍️' }); return; }
    const r = offlineCheck(ex, ta.value);
    save({ offlineScore: r.score });
    clear(checkBox).append(h('div.card.card-flat.pop-in',
      h('h4', { style: { marginTop: 0 } }, `✅ Offline-Check: ${r.results.filter((x) => x.hit).length} von ${r.results.length} Kriterien erkennbar`),
      h('p.small.muted', 'Automatischer Abgleich mit dem Bewertungsraster über Schlüsselbegriffe – ein Hinweisgeber, keine Note. Inhaltliche Qualität bewertest du am besten zusätzlich selbst (oder mit KI-Feedback).'),
      h('ul.rubric', r.results.map((x) => h(`li.${x.hit ? 'hit' : 'miss'}`,
        h('span', x.hit ? '✅' : '🟡'),
        h('div', h('strong', x.criterion),
          x.hit ? h('div.small.muted', `Gefunden: ${x.found.slice(0, 5).join(', ')}`) : h('div.small', '🤔 ', x.hint || 'Hier fehlt noch etwas – schau ins Bewertungsraster.'))))),
      r.lengthNote ? h('p.notice.notice-warn', r.lengthNote) : null));
    award(10, 'Übung selbst geprüft', { once: 'offline:' + ex.id });
  };

  // ---------- KI-Feedback ----------
  const aiBox = h('div');
  let thread = state().chat || [];
  const renderThread = (chatEl) => {
    clear(chatEl);
    thread.forEach((m, i) => {
      if (i === 0) return; // erste Nachricht = Abgabe-Prompt, nicht anzeigen
      chatEl.append(h(`div.msg.${m.role}`, m.role === 'assistant' ? mdEl(m.content) : m.content));
    });
    chatEl.scrollTop = chatEl.scrollHeight;
  };
  const askAI = async () => {
    if (!aiEnabled()) return;
    if (ta.value.trim().length < 30) { toast('Schreib zuerst ein paar Sätze.', { icon: '✍️' }); return; }
    const c = aiConfig();
    thread = [{ role: 'user', content: feedbackPrompt(ex, ta.value, mod.title) }];
    const chatEl = h('div.chat', h('div.msg.assistant.typing', 'Pixel liest deine Abgabe'));
    const form = followUpForm(chatEl);
    clear(aiBox).append(h('div.ai-box.pop-in', h('div.ai-head', '🤖 KI-Feedback', h('span.chip', `${PROVIDERS[c.provider].label} · ${c.model}`)), chatEl, form));
    try {
      const answer = await chat(thread, { system: TUTOR_SYSTEM });
      thread.push({ role: 'assistant', content: answer });
      save({ chat: thread });
      const pts = answer.match(/PUNKTE:\s*(\d+)\s*\/\s*10/i);
      if (pts) save({ aiScore: +pts[1] });
      renderThread(chatEl);
      award(10, 'KI-Feedback eingeholt', { once: 'aifb:' + ex.id });
    } catch (e) {
      clear(chatEl).append(h('div.notice.notice-warn', '⚠️ ', e.message));
    }
  };
  const followUpForm = (chatEl) => {
    const inp = h('textarea.textarea', { rows: 2, style: { minHeight: '60px' }, placeholder: 'Nachfragen, z. B. „Wie kann ich das Risiko konkreter beschreiben?“' });
    const form = h('form.row', { style: { marginTop: '10px', alignItems: 'flex-end' }, onsubmit: async (e) => {
      e.preventDefault();
      const q = inp.value.trim();
      if (!q) return;
      inp.value = '';
      thread.push({ role: 'user', content: `Aktueller Stand meiner Abgabe:\n"""\n${ta.value}\n"""\n\nMeine Frage: ${q}` });
      chatEl.append(h('div.msg.user', q), h('div.msg.assistant.typing', 'denkt nach'));
      chatEl.scrollTop = chatEl.scrollHeight;
      try {
        const a = await chat(thread, { system: TUTOR_SYSTEM });
        thread.push({ role: 'assistant', content: a });
        save({ chat: thread });
      } catch (err) {
        thread.pop();
        toast(err.message, { icon: '⚠️', type: 'error', timeout: 6000 });
      }
      // Anzeige: Nutzerfragen ohne angehängten Abgabe-Kontext
      clear(chatEl);
      thread.forEach((m, i) => {
        if (i === 0) return;
        const content = m.role === 'user' ? m.content.replace(/^Aktueller Stand[\s\S]*?Meine Frage: /, '') : m.content;
        chatEl.append(h(`div.msg.${m.role}`, m.role === 'assistant' ? mdEl(content) : content));
      });
      chatEl.scrollTop = chatEl.scrollHeight;
    } }, h('div', { style: { flex: 1 } }, inp), h('button.btn.btn-primary', { type: 'submit' }, 'Senden'));
    return form;
  };
  if (thread.length > 1 && aiEnabled()) {
    const chatEl = h('div.chat');
    aiBox.append(h('div.ai-box', h('div.ai-head', '🤖 Letztes KI-Feedback'), chatEl, followUpForm(chatEl)));
    thread.forEach((m, i) => {
      if (i === 0) return;
      const content = m.role === 'user' ? m.content.replace(/^Aktueller Stand[\s\S]*?Meine Frage: /, '') : m.content;
      chatEl.append(h(`div.msg.${m.role}`, m.role === 'assistant' ? mdEl(content) : content));
    });
  }

  // ---------- Abgabe & Musterlösung ----------
  const sampleBox = h('div');
  const renderSample = () => {
    clear(sampleBox);
    if (!state().submitted) {
      sampleBox.append(h('p.small.muted', '🔒 Die Musterlösung wird nach deiner Abgabe freigeschaltet – erst selbst denken, dann vergleichen.'));
      return;
    }
    sampleBox.append(h('details.card.card-flat', h('summary', h('strong', '📘 Musterlösung / Lösungsskizze anzeigen')), h('div', { style: { marginTop: '10px' } }, mdEl(ex.sample))));
  };
  const submit = () => {
    if (ta.value.trim().length < 50) { toast('Deine Abgabe ist noch sehr kurz – ergänze etwas mehr.', { icon: '✍️' }); return; }
    const first = !state().submitted;
    save({ submitted: Date.now(), text: ta.value, draft: ta.value });
    if (first) {
      award(40, `Übung „${ex.title}“ eingereicht`);
      confetti({ count: 160 });
    } else toast('Neue Version gespeichert.', { icon: '💾' });
    renderSample();
    submitBtn.textContent = '💾 Neue Version abgeben';
  };
  const submitBtn = h('button.btn.btn-accent', { type: 'button', onclick: submit }, state().submitted ? '💾 Neue Version abgeben' : '📨 Abgeben');

  const aiBtn = aiEnabled()
    ? h('button.btn.btn-primary', { type: 'button', onclick: askAI }, '🤖 KI-Feedback holen')
    : h('a.btn', { href: '#/einstellungen', title: 'KI ist optional – in den Einstellungen aktivierbar' }, '🤖 KI-Feedback (optional aktivieren)');

  container.append(
    h('div.card',
      h('div.row', h('span.chip.chip-ok', 'ÜBUNG'), h('span.chip', mod.title)),
      h('h1', { style: { marginTop: '10px', fontSize: '1.6rem' } }, ex.title),
      ex.scenario ? h('div.block-praxis', { style: { margin: '18px 0' } }, h('span.praxis-tag', 'SZENARIO'), mdEl(ex.scenario)) : null,
      h('h4', 'Deine Aufgabe'), mdEl(ex.task),
      ex.deliverable ? h('p.small', h('strong', 'Ergebnis: '), ex.deliverable) : null,
      h('details', h('summary', 'Bewertungsraster ansehen'), h('ul.rubric', ex.rubric.map((r) => h('li', h('span', '▫️'), h('div', r.criterion)))))),
    h('div.card',
      h('div.row', { style: { justifyContent: 'space-between' } }, h('h3', { style: { margin: 0 } }, '✍️ Deine Bearbeitung'),
        h('button.btn.btn-sm', { type: 'button', onclick: () => fileInput.click() }, '📎 Datei anhängen (PDF, DOCX, TXT …)')),
      fileInput,
      h('div', { style: { marginTop: '10px' } }, ta),
      wc,
      h('div.row', { style: { marginTop: '12px' } }, hintBtn, h('button.btn', { type: 'button', onclick: runOffline }, '✅ Offline-Check'), aiBtn, h('span.spacer'), submitBtn),
      h('p.small.muted', { style: { marginTop: '10px', marginBottom: 0 } }, '🔐 Bitte keine personenbezogenen oder vertraulichen Daten eingeben. Ohne KI bleibt alles lokal in deinem Browser.')),
    hintBox, checkBox, aiBox, sampleBox,
  );
  renderHints();
  renderSample();
}
