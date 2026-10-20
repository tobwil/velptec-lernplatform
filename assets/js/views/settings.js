// Einstellungen: Darstellung, optionale KI (Anbieter, Modell, API-Key im localStorage), Rangliste, Daten.
import { h, clear, toast, modal } from '../ui.js';
import { store } from '../store.js';
import { PROVIDERS, aiConfig, testConnection, listModels } from '../ai.js';
import { applyTheme } from '../app.js';
import { confetti } from '../confetti.js';

export function settingsView(main) {
  const s = store.settings;

  // ---------- Darstellung ----------
  const theme = h('select.select', { 'aria-label': 'Farbmodus' }, [['auto', '🌗 Automatisch (System)'], ['light', '☀️ Hell'], ['dark', '🌙 Dunkel']].map(([v, l]) => h('option', { value: v, selected: s.theme === v }, l)));
  theme.addEventListener('change', () => { store.setSettings({ theme: theme.value }); applyTheme(); });
  const conf = h('input', { type: 'checkbox', checked: s.confetti });
  conf.addEventListener('change', () => { store.setSettings({ confetti: conf.checked }); if (conf.checked) confetti({ count: 120 }); });
  const snd = h('input', { type: 'checkbox', checked: s.sound });
  snd.addEventListener('change', () => store.setSettings({ sound: snd.checked }));

  // ---------- KI ----------
  const aiOn = h('input', { type: 'checkbox', checked: s.ai.enabled });
  const provider = h('select.select', { 'aria-label': 'KI-Anbieter' }, Object.entries(PROVIDERS).map(([k, p]) => h('option', { value: k, selected: s.ai.provider === k }, p.label)));
  const model = h('input.input', { list: 'model-list', 'aria-label': 'Modell' });
  const dl = h('datalist', { id: 'model-list' });
  const key = h('input.input', { type: 'password', autocomplete: 'off', spellcheck: 'false', 'aria-label': 'API-Key' });
  const showKey = h('button.btn.btn-sm', { type: 'button', onclick: () => { key.type = key.type === 'password' ? 'text' : 'password'; showKey.textContent = key.type === 'password' ? '👁 zeigen' : '🙈 verbergen'; } }, '👁 zeigen');
  const baseUrl = h('input.input', { value: s.ai.baseUrl, 'aria-label': 'Basis-URL' });
  const baseWrap = h('label.field', 'Basis-URL des OpenAI-kompatiblen Servers', baseUrl, h('span.hint', 'LM Studio: http://localhost:1234/v1 · Ollama: http://localhost:11434/v1 (CORS-Freigabe nötig, z. B. OLLAMA_ORIGINS)'));
  const keyHint = h('span.hint');
  const result = h('div');
  const aiFields = h('div.stack');

  const fill = () => {
    const pv = provider.value;
    model.value = store.settings.ai.models[pv] ?? PROVIDERS[pv].defaultModel;
    model.placeholder = PROVIDERS[pv].defaultModel || 'Modellname, z. B. aus LM Studio';
    key.value = store.settings.ai.keys[pv] || '';
    clear(keyHint).append(`${PROVIDERS[pv].keyHint} · `, h('a', { href: PROVIDERS[pv].keyUrl, target: '_blank', rel: 'noopener noreferrer' }, pv === 'compatible' ? 'Doku ↗' : 'API-Key erstellen ↗'));
    baseWrap.classList.toggle('hidden', pv !== 'compatible');
    clear(dl);
  };
  const persist = () => {
    const pv = provider.value;
    store.setSettings({ ai: { enabled: aiOn.checked, provider: pv, models: { [pv]: model.value.trim() }, keys: { [pv]: key.value.trim() }, baseUrl: baseUrl.value.trim() } });
    aiFields.style.opacity = aiOn.checked ? 1 : 0.55;
  };
  provider.addEventListener('change', () => { store.setSettings({ ai: { provider: provider.value } }); fill(); persist(); });
  [model, key, baseUrl].forEach((el) => el.addEventListener('change', persist));
  aiOn.addEventListener('change', () => { persist(); toast(aiOn.checked ? 'KI-Unterstützung aktiviert' : 'KI-Unterstützung deaktiviert – alles läuft weiter offline', { icon: aiOn.checked ? '🤖' : '📴' }); });

  const testBtn = h('button.btn.btn-primary', { type: 'button', onclick: async () => {
    persist();
    clear(result).append(h('p.small', '⏳ Teste Verbindung …'));
    try {
      const r = await testConnection();
      const c = aiConfig();
      clear(result).append(h('div.notice', `✅ Verbindung ok (${r.ms} ms, ${PROVIDERS[c.provider].label} · ${c.model}): „${r.text.slice(0, 120)}“`));
    } catch (e) {
      clear(result).append(h('div.notice.notice-warn', '⚠️ ', e.message));
    }
  } }, '🔌 Verbindung testen');
  const listBtn = h('button.btn', { type: 'button', onclick: async () => {
    persist();
    try {
      const ids = await listModels();
      clear(dl).append(...ids.map((id) => h('option', { value: id })));
      toast(`${ids.length} Modelle gefunden – ins Modellfeld klicken zum Auswählen.`, { icon: '📋', timeout: 4500 });
    } catch (e) { toast(e.message, { icon: '⚠️', type: 'error', timeout: 6000 }); }
  } }, '📋 Verfügbare Modelle laden');

  aiFields.append(
    h('label.field', 'Anbieter', provider, h('span.hint', 'Frei wählbar – die Plattform ist nicht an einen Anbieter gebunden.')),
    h('label.field', 'Modell', model, dl, h('span.hint', 'Standard für Anthropic: claude-haiku-5-5 (schnell und günstig für Text-Interaktion). Modellnamen ändern sich – „Verfügbare Modelle laden“ zeigt die aktuellen.')),
    h('label.field', 'API-Key', h('div.row', { style: { flexWrap: 'nowrap' } }, key, showKey), keyHint),
    baseWrap,
    h('div.row', testBtn, listBtn),
    result);

  // ---------- Rangliste ----------
  const lbOn = h('input', { type: 'checkbox', checked: s.leaderboard.enabled });
  const lbUrl = h('input.input', { value: s.leaderboard.url, placeholder: 'https://dein-n8n.example.de/webhook/rangliste' });
  const lbSave = () => store.setSettings({ leaderboard: { enabled: lbOn.checked, url: lbUrl.value.trim() } });
  lbOn.addEventListener('change', lbSave);
  lbUrl.addEventListener('change', lbSave);

  // ---------- Daten ----------
  const backup = () => {
    const a = h('a', { href: URL.createObjectURL(new Blob([store.exportAll()], { type: 'application/json' })), download: `lernfortschritt-${new Date().toISOString().slice(0, 10)}.json` });
    a.click();
    toast('Sicherung heruntergeladen (ohne API-Keys).', { icon: '💾' });
  };
  const restoreInput = h('input', { type: 'file', accept: '.json', class: 'hidden' });
  restoreInput.addEventListener('change', async () => {
    try { store.importAll(await restoreInput.files[0].text()); toast('Sicherung wiederhergestellt.', { icon: '✅' }); setTimeout(() => location.reload(), 600); }
    catch (e) { toast(e.message, { icon: '⚠️', type: 'error' }); }
  });

  main.append(
    h('h1', '⚙️ Einstellungen'),
    h('section.card',
      h('h3', '🎨 Darstellung'),
      h('div.grid.grid-3',
        h('label.field', 'Farbmodus', theme),
        h('label.switch', conf, 'Konfetti-Überraschungen'),
        h('label.switch', snd, 'Ton im Pixel-Film')),
      h('p.small.muted', { style: { marginBottom: 0 } }, 'Das Farbschema nutzt ein ruhiges Indigo-Blau für Konzentration und warmes Amber als motivierenden Akzent. Animationen werden reduziert, wenn dein System „Bewegung reduzieren“ eingestellt hat.')),
    h('section.card',
      h('div.row', h('h3', { style: { margin: 0 } }, '🤖 KI-Unterstützung (optional)'), h('span.spacer'), h('label.switch', aiOn, 'aktiv')),
      h('p.muted', 'Die Plattform funktioniert vollständig ohne KI. Wenn du möchtest, gibt eine KI dir hinführendes Feedback zu Übungen, beantwortet Fragen als Lerncoach und erzeugt ausführlichere Lektionen aus deinen Dokumenten.'),
      h('div.notice', { style: { marginBottom: '14px' } },
        h('strong', '🔐 Datenschutz: '),
        'Dein API-Key wird ausschließlich im localStorage dieses Browsers gespeichert und nur direkt an den gewählten Anbieter gesendet – es gibt keinen Zwischenserver. Bei aktiver KI werden deine Eingaben (Abgaben, Fragen, Dokumenttext) an diesen Anbieter übertragen. Gib keine personenbezogenen oder vertraulichen Daten ein und nutze im Unternehmen nur freigegebene Anbieter/Keys. Auf gemeinsam genutzten Geräten den Key nach der Nutzung löschen.'),
      aiFields,
      h('div.row', { style: { marginTop: '12px' } }, h('button.btn.btn-sm', { type: 'button', style: { color: 'var(--danger)' }, onclick: () => { store.setSettings({ ai: { keys: { anthropic: '', openai: '', gemini: '', compatible: '' } } }); fill(); toast('Alle API-Keys gelöscht.', { icon: '🗑️' }); } }, '🗑 Alle API-Keys löschen'))),
    h('section.card',
      h('h3', '🏆 Gemeinsame Online-Rangliste (optional)'),
      h('p.muted', 'Ohne Server tauscht ihr Score-Karten per Code aus. Für eine automatische Kursrangliste kann die Lehrkraft einen Webhook bereitstellen – ein schönes Praxisprojekt mit n8n: Der Webhook nimmt per POST eine Score-Karte (JSON) an und liefert per GET die Liste aller Karten zurück. Eine importierbare Vorlage liegt im Repository unter docs/n8n-rangliste-workflow.json.'),
      h('label.switch', lbOn, 'Online-Rangliste nutzen'),
      h('label.field', { style: { marginTop: '10px' } }, 'Webhook-URL', lbUrl, h('span.hint', 'Gesendet werden nur: Name, XP, Level, Anzahl Module/Lektionen/Badges, Sprint-Highscore.'))),
    h('section.card',
      h('h3', '💾 Daten & Sicherung'),
      h('p.muted', 'Dein Fortschritt liegt nur in diesem Browser (localStorage, eigene Lektionen in IndexedDB). Sichere ihn, um Gerät oder Browser zu wechseln.'),
      h('div.row',
        h('button.btn', { type: 'button', onclick: backup }, '⬇ Fortschritt sichern'),
        h('button.btn', { type: 'button', onclick: () => restoreInput.click() }, '⬆ Sicherung laden'), restoreInput,
        h('button.btn', { type: 'button', style: { color: 'var(--danger)' }, onclick: () => modal('Alles zurücksetzen?', h('p', 'Alle Profile und der gesamte Lernfortschritt auf diesem Gerät werden gelöscht. Einstellungen und eigene Lektionen bleiben erhalten.'), { actions: [{ label: 'Abbrechen' }, { label: 'Zurücksetzen', primary: true, onClick: () => { store.resetAll(); location.hash = '#/'; location.reload(); } }] }) }, '♻ Fortschritt zurücksetzen'))),
  );
  fill();
  aiFields.style.opacity = s.ai.enabled ? 1 : 0.55;
}
