// Persistenz im Browser: Fortschritt/Profile in localStorage, große Daten (eigene Lektionen) in IndexedDB.

const KEY = 'vlp:state:v1';
const SKEY = 'vlp:settings:v1';
const listeners = new Set();

export const DEFAULT_SETTINGS = {
  theme: 'auto', // auto | light | dark
  confetti: true,
  sound: true,
  ai: {
    enabled: false,
    provider: 'anthropic',
    models: { anthropic: 'claude-haiku-5-5', openai: 'gpt-6-luna', gemini: 'gemini-3.8-flash', compatible: '' },
    keys: { anthropic: '', openai: '', gemini: '', compatible: '' },
    baseUrl: 'http://localhost:1234/v1',
  },
  leaderboard: { url: '', enabled: false },
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.warn('Speichern fehlgeschlagen', e);
  }
}

function deepMerge(base, over) {
  if (Array.isArray(base) || typeof base !== 'object' || base == null) return over ?? base;
  const out = { ...base };
  for (const [k, v] of Object.entries(over || {})) out[k] = typeof v === 'object' && v && !Array.isArray(v) ? deepMerge(base[k] ?? {}, v) : v;
  return out;
}

let settings = deepMerge(DEFAULT_SETTINGS, read(SKEY, {}));
let state = read(KEY, null) || { profiles: {}, active: null, imported: [] };

export function newProfile(name) {
  const id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  return {
    id, name: name || 'Lernende:r', created: Date.now(),
    xp: 0, log: [], lessons: {}, quiz: {}, exercises: {}, widgets: {}, badges: {},
    days: [], daily: {}, sprintBest: 0, once: {}, video: {},
  };
}

export const store = {
  get state() { return state; },
  get settings() { return settings; },
  get profile() { return state.profiles[state.active] || null; },
  profiles() { return Object.values(state.profiles); },
  createProfile(name) {
    const p = newProfile(name);
    state.profiles[p.id] = p;
    state.active = p.id;
    this.save();
    return p;
  },
  switchProfile(id) { if (state.profiles[id]) { state.active = id; this.save(); } },
  deleteProfile(id) {
    delete state.profiles[id];
    if (state.active === id) state.active = Object.keys(state.profiles)[0] || null;
    this.save();
  },
  update(fn) { const p = this.profile; if (!p) return; fn(p); this.save(); },
  save() { write(KEY, state); emit('state'); },
  setSettings(patch) { settings = deepMerge(settings, patch); write(SKEY, settings); emit('settings'); },
  resetAll() { localStorage.removeItem(KEY); state = { profiles: {}, active: null, imported: [] }; emit('state'); },
  exportAll() { return JSON.stringify({ state, settings: { ...settings, ai: { ...settings.ai, keys: {} } } }, null, 2); },
  importAll(json) {
    const data = JSON.parse(json);
    if (!data.state?.profiles) throw new Error('Ungültige Sicherung');
    state = data.state;
    this.save();
  },
};

export function on(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit(what) { listeners.forEach((fn) => fn(what)); }

// ---------- IndexedDB (eigene Lektionen, hochgeladene Dokumente) ----------
let dbp;
function db() {
  if (!dbp) {
    dbp = new Promise((res, rej) => {
      const req = indexedDB.open('vlp-db', 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore('custom', { keyPath: 'id' });
        req.result.createObjectStore('docs', { keyPath: 'id' });
      };
      req.onsuccess = () => res(req.result);
      req.onerror = () => rej(req.error);
    });
  }
  return dbp;
}
async function tx(storeName, mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const t = d.transaction(storeName, mode);
    const r = fn(t.objectStore(storeName));
    t.oncomplete = () => res(r?.result);
    t.onerror = () => rej(t.error);
  });
}
export const idb = {
  all: (s) => tx(s, 'readonly', (os) => os.getAll()),
  get: (s, id) => tx(s, 'readonly', (os) => os.get(id)),
  put: (s, v) => tx(s, 'readwrite', (os) => os.put(v)),
  del: (s, id) => tx(s, 'readwrite', (os) => os.delete(id)),
};
