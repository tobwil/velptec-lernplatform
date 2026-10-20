// Übungsdokumente hochladen → neue Lektionen generieren (offline oder mit KI).
import { h, clear, toast, mdEl } from '../ui.js';
import { idb, store } from '../store.js';
import { course, award } from '../gamification.js';
import { extractText, ACCEPT } from '../extract.js';
import { generateOffline, generateWithAI } from '../generator.js';
import { aiEnabled, aiConfig, PROVIDERS } from '../ai.js';
import { confetti } from '../confetti.js';

export function uploadView(main) {
  let doc = null; // { name, text }
  const fileInput = h('input', { type: 'file', accept: ACCEPT, class: 'hidden' });
  const drop = h('div.dropzone', { tabindex: '0', role: 'button', 'aria-label': 'Datei auswählen oder hierher ziehen', onclick: () => fileInput.click(), onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); } } },
    h('div', { style: { fontSize: '2.2rem' } }, '📄⬆'),
    h('strong', 'Übungsdokument hierher ziehen oder klicken'),
    h('p.small.muted', { style: { margin: '6px 0 0' } }, 'PDF, DOCX, PPTX, XLSX, ODT, TXT, Markdown, HTML · max. 25 MB · die Datei verlässt deinen Browser nicht (außer du nutzt die KI-Variante)'));
  ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', (e) => { const f = e.dataTransfer.files[0]; if (f) load(f); });
  fileInput.addEventListener('change', () => { if (fileInput.files[0]) load(fileInput.files[0]); fileInput.value = ''; });

  const step2 = h('div');
  const existing = h('div');

  async function load(file) {
    clear(step2).append(h('div.card', h('p', `⏳ „${file.name}“ wird gelesen …`), h('div.progress', h('i', { style: { width: '10%' } }))));
    try {
      doc = await extractText(file, (p) => { const bar = step2.querySelector('.progress i'); if (bar) bar.style.width = Math.round(p * 100) + '%'; });
      renderStep2();
    } catch (e) {
      clear(step2).append(h('div.notice.notice-warn', '⚠️ ', e.message));
    }
  }

  function renderStep2() {
    const words = (doc.text.match(/\S+/g) || []).length;
    const heading = doc.text.match(/^#{1,2}\s+(.{4,80})$/m)?.[1];
    const title = h('input.input', { value: heading || doc.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' '), 'aria-label': 'Titel der Lektion' });
    const preview = h('textarea.textarea', { rows: 10, 'aria-label': 'Extrahierter Text (bearbeitbar)' });
    preview.value = doc.text;
    const ai = aiEnabled();
    const c = aiConfig();
    const modeOffline = h('input', { type: 'radio', name: 'gen', value: 'offline', checked: !ai });
    const modeAI = h('input', { type: 'radio', name: 'gen', value: 'ai', checked: ai, disabled: !ai });
    const out = h('div');
    const btn = h('button.btn.btn-accent.btn-lg', { type: 'button', onclick: async () => {
      const text = preview.value.trim();
      if (text.length < 300) { toast('Der Text ist sehr kurz – für eine sinnvolle Lektion braucht es mindestens ein paar Absätze.', { icon: '✍️', timeout: 5000 }); return; }
      btn.disabled = true;
      const useAI = modeAI.checked && aiEnabled();
      clear(out).append(h('div.card', h('p', useAI ? `🤖 ${PROVIDERS[c.provider].label} erstellt deine Lektion … (das kann 20–90 Sekunden dauern)` : '⚙️ Lektion wird offline erzeugt …'), h('div.progress', h('i', { style: { width: '60%' } }))));
      try {
        let mod;
        if (useAI) {
          try { mod = await generateWithAI(text, { title: title.value.trim(), fileName: doc.name }); }
          catch (e) {
            toast(`KI-Erstellung fehlgeschlagen (${e.message}). Ich erstelle die Lektion stattdessen offline.`, { icon: '⚠️', type: 'error', timeout: 7000 });
            mod = generateOffline(text, { title: title.value.trim(), fileName: doc.name });
          }
        } else mod = generateOffline(text, { title: title.value.trim(), fileName: doc.name });
        mod.createdAt = Date.now();
        mod.docExcerpt = text.slice(0, 200000);
        await idb.put('custom', mod);
        const { reloadCustom } = await import('../app.js');
        await reloadCustom();
        award(30, 'Eigene Lektion erstellt', { once: 'created-lesson' });
        store.update((p) => { p.once['created-lesson'] = p.once['created-lesson'] || Date.now(); });
        confetti({ count: 200 });
        clear(out).append(h('div.card.pop-in',
          h('h3', '✅ Lektion erstellt: ', mod.title),
          h('p.muted', `${mod.lessons.length} Lektionen · ${mod.quiz.length} Quizfragen · ${mod.exercises.length} Übung · ${mod.glossary.length} Glossarbegriffe · ${mod.generator}`),
          mod.generator === 'offline' ? h('p.small.notice', 'Offline erzeugt per Textanalyse: Kernaussagen, Merksätze, Lernkarten und Lückentext-Fragen stammen direkt aus deinem Dokument. Für didaktisch ausformulierte Inhalte kannst du optional die KI in den Einstellungen aktivieren.') : null,
          h('div.row', h('a.btn.btn-primary', { href: `#/modul/${mod.id}` }, 'Zur neuen Lektion →'))));
        renderExisting();
      } catch (e) {
        console.error(e);
        clear(out).append(h('div.notice.notice-warn', '⚠️ ', e.message));
      } finally {
        btn.disabled = false;
      }
    } }, '✨ Lektion erzeugen');

    clear(step2).append(h('div.card.pop-in',
      h('h3', `2. Text prüfen · ${doc.name}`),
      h('p.small.muted', `${words.toLocaleString('de-DE')} Wörter erkannt. Du kannst den Text vor dem Erzeugen bearbeiten (z. B. Kopf-/Fußzeilen oder vertrauliche Stellen entfernen).`),
      h('label.field', 'Titel der neuen Lektion', title),
      h('div', { style: { height: '10px' } }),
      preview,
      h('h3', { style: { marginTop: '18px' } }, '3. Art der Erstellung'),
      h('div.grid.grid-2',
        h('label.card.card-flat', { style: { cursor: 'pointer' } }, h('div.row', modeOffline, h('strong', '⚙️ Offline (ohne KI)')), h('p.small.muted', { style: { margin: '6px 0 0' } }, 'Textanalyse direkt im Browser: Abschnitte, Schlüsselbegriffe, Kernsätze, Lückentext-Quiz, Transferaufgabe. Datenschutzfreundlich, sofort.')),
        h('label.card.card-flat', { style: { cursor: ai ? 'pointer' : 'not-allowed', opacity: ai ? 1 : 0.6 } }, h('div.row', modeAI, h('strong', '🤖 Mit KI')), h('p.small.muted', { style: { margin: '6px 0 0' } }, ai ? `Didaktisch ausformulierte Lektion mit Praxisszenario, gemischtem Quiz und Bewertungsraster (${PROVIDERS[c.provider].label}, ${c.model}). Der Text wird dafür an den Anbieter gesendet.` : 'Optional: in den Einstellungen mit eigenem API-Key aktivieren.'), !ai ? h('a.small', { href: '#/einstellungen' }, 'Einstellungen öffnen →') : null)),
      h('p.small.muted', '🔐 Keine personenbezogenen oder vertraulichen Daten hochladen, wenn du die KI-Variante nutzt.'),
      h('div.row', btn),
      out));
  }

  async function renderExisting() {
    const list = course.custom;
    clear(existing).append(h('h2', `Deine eigenen Lektionen (${list.length})`),
      list.length ? h('div.grid.grid-3', list.map((m) => h('a.card.module-card.is-new', { href: `#/modul/${m.id}` },
        h('h3', m.title), h('p', m.subtitle), h('div.mc-foot', h('span', `${m.lessons.length} Lektionen · ${m.quiz.length} Fragen`))))) : h('p.muted', 'Noch keine – lade oben dein erstes Übungsdokument hoch.'));
    existing.append(h('div.row', { style: { marginTop: '12px' } }, importBtn()));
  }

  function importBtn() {
    const inp = h('input', { type: 'file', accept: '.json', class: 'hidden' });
    inp.addEventListener('change', async () => {
      try {
        const m = JSON.parse(await inp.files[0].text());
        if (!m.id?.startsWith('u-') || !Array.isArray(m.lessons)) throw new Error('Keine gültige Lektionsdatei');
        m.custom = true;
        await idb.put('custom', m);
        const { reloadCustom } = await import('../app.js');
        await reloadCustom();
        toast('Lektion importiert.', { icon: '📥', type: 'success' });
        renderExisting();
      } catch (e) { toast(e.message, { icon: '⚠️', type: 'error' }); }
    });
    return h('span', inp, h('button.btn', { type: 'button', onclick: () => inp.click() }, '📥 Geteilte Lektion (JSON) importieren'));
  }

  main.append(
    h('h1', '🛠️ Eigene Lektionen aus Übungsdokumenten'),
    h('p.muted', 'Lade Unterlagen aus deinem Betrieb oder dem Kurs hoch (z. B. Prozessbeschreibung, Richtlinie, Protokoll, Präsentation). Die Plattform erzeugt daraus eine neue Lerneinheit mit Kernaussagen, Lernkarten, Quiz und einer Praxis-Transferaufgabe – auch komplett ohne KI.'),
    h('div.card', h('h3', '1. Dokument wählen'), drop, fileInput),
    h('section.section', step2),
    h('section.section', existing),
    h('details.card.card-flat', h('summary', h('strong', 'Wie funktioniert die Offline-Erstellung?')), mdEl(`
- **Textextraktion** direkt im Browser (PDF über das lokal eingebundene pdf.js, Office-Dateien durch Entpacken des XML).
- **Abschnitte** werden anhand von Überschriften erkannt, lange Abschnitte geteilt.
- **Schlüsselbegriffe** über Häufigkeit (Substantive werden bevorzugt, Füllwörter gefiltert).
- **Kernsätze** = Sätze mit der höchsten Dichte an Schlüsselbegriffen → Kernaussagen, Merksatz, Lückentext-Fragen und Richtig/Falsch-Fragen (mit vertauschtem Begriff).
- **Transferaufgabe** mit Bewertungsraster für den Offline-Check.

Die Ergebnisse sind so gut wie das Dokument strukturiert ist – prüfe sie kurz. Mit aktivierter KI entstehen ausformulierte Erklärungen und Praxisszenarien.`)),
  );
  renderExisting();
}
