// Optionale KI-Anbindung, anbieterunabhängig. Der API-Key liegt ausschließlich im localStorage
// der Nutzerin/des Nutzers; Anfragen gehen direkt vom Browser zum gewählten Anbieter.
import { store } from './store.js';

export const PROVIDERS = {
  anthropic: {
    label: 'Anthropic Claude',
    defaultModel: 'claude-haiku-5-5',
    keyUrl: 'https://console.anthropic.com/settings/keys',
    docs: 'https://docs.claude.com/en/api/overview',
    keyHint: 'beginnt mit sk-ant-',
  },
  openai: {
    label: 'OpenAI',
    defaultModel: 'gpt-6-luna',
    keyUrl: 'https://platform.openai.com/api-keys',
    docs: 'https://platform.openai.com/docs/api-reference/chat',
    keyHint: 'beginnt mit sk-',
  },
  gemini: {
    label: 'Google Gemini',
    defaultModel: 'gemini-3.8-flash',
    keyUrl: 'https://aistudio.google.com/apikey',
    docs: 'https://ai.google.dev/gemini-api/docs',
    keyHint: 'aus Google AI Studio',
  },
  compatible: {
    label: 'OpenAI-kompatibel (z. B. LM Studio, Ollama – lokal)',
    defaultModel: '',
    keyUrl: 'https://lmstudio.ai/docs/app/api/endpoints/openai',
    docs: 'https://lmstudio.ai/docs/app/api/endpoints/openai',
    keyHint: 'bei lokalen Servern meist leer lassen',
  },
};

export function aiConfig() {
  const a = store.settings.ai;
  const provider = a.provider in PROVIDERS ? a.provider : 'anthropic';
  return {
    provider,
    model: (a.models?.[provider] || PROVIDERS[provider].defaultModel).trim(),
    key: (a.keys?.[provider] || '').trim(),
    baseUrl: (a.baseUrl || '').replace(/\/+$/, ''),
  };
}

export function aiEnabled() {
  const a = store.settings.ai;
  if (!a.enabled) return false;
  const c = aiConfig();
  return c.provider === 'compatible' ? !!(c.baseUrl && c.model) : !!(c.key && c.model);
}

export class AIError extends Error {
  constructor(msg, status) { super(msg); this.status = status; }
}

function explain(status, body) {
  const detail = body?.error?.message || body?.error?.status || (typeof body === 'string' ? body.slice(0, 200) : '');
  if (status === 401 || status === 403) return `Zugriff verweigert (${status}) – ist der API-Key korrekt? ${detail}`;
  if (status === 404) return `Modell oder Endpunkt nicht gefunden (404) – Modellname prüfen. ${detail}`;
  if (status === 429) return `Rate-Limit oder Guthaben erschöpft (429). Kurz warten oder Kontingent prüfen. ${detail}`;
  if (status >= 500) return `Der Anbieter ist gerade nicht erreichbar (${status}). Bitte später erneut versuchen.`;
  return `Fehler ${status}: ${detail}`;
}

async function post(url, headers, body, signal) {
  let res;
  try {
    res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body), signal });
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    throw new AIError('Netzwerkfehler – keine Verbindung zum Anbieter (offline, Firewall oder CORS bei lokalen Servern?).', 0);
  }
  let data;
  const text = await res.text();
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) throw new AIError(explain(res.status, data), res.status);
  return data;
}

async function get(url, headers) {
  const res = await fetch(url, { headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new AIError(explain(res.status, data), res.status);
  return data;
}

function anthropicHeaders(key) {
  return {
    'x-api-key': key,
    'anthropic-version': '2023-06-01',
    // Erforderlich für direkte Aufrufe aus dem Browser (Key bleibt beim Nutzer).
    'anthropic-dangerous-direct-browser-access': 'true',
  };
}

/**
 * Einheitliche Chat-Schnittstelle.
 * @param {{role:'user'|'assistant', content:string}[]} messages
 * @param {{system?:string, json?:boolean, maxTokens?:number, signal?:AbortSignal}} opts
 * @returns {Promise<string>}
 */
export async function chat(messages, { system = '', json = false, maxTokens = 2000, signal } = {}) {
  const c = aiConfig();
  const msgs = messages.filter((m) => m.content && String(m.content).trim());
  if (c.provider === 'anthropic') {
    const body = { model: c.model, max_tokens: maxTokens, messages: msgs.map((m) => ({ role: m.role, content: String(m.content) })) };
    if (system) body.system = system;
    // Aktuelle Claude-Modelle (Generation 5) denken adaptiv; für schnelles Tutoring niedriger Aufwand.
    if (/^claude-(haiku|sonnet|opus|fable)-5/.test(c.model)) body.output_config = { effort: 'low' };
    const data = await post('https://api.anthropic.com/v1/messages', anthropicHeaders(c.key), body, signal);
    if (data.stop_reason === 'refusal') throw new AIError('Das Modell hat die Anfrage abgelehnt. Bitte formuliere sie anders.', 200);
    return (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
  }
  if (c.provider === 'openai' || c.provider === 'compatible') {
    const base = c.provider === 'openai' ? 'https://api.openai.com/v1' : c.baseUrl;
    const body = { model: c.model, messages: [...(system ? [{ role: 'system', content: system }] : []), ...msgs] };
    if (c.provider === 'openai') {
      body.max_completion_tokens = maxTokens * 2; // Reasoning-Modelle verbrauchen zusätzlich interne Tokens
      if (json) body.response_format = { type: 'json_object' };
    } else {
      body.max_tokens = maxTokens;
    }
    const headers = c.key ? { authorization: `Bearer ${c.key}` } : {};
    const data = await post(`${base}/chat/completions`, headers, body, signal);
    const msg = data.choices?.[0]?.message;
    const content = Array.isArray(msg?.content) ? msg.content.map((p) => p.text || '').join('') : msg?.content;
    if (!content && msg?.refusal) throw new AIError('Das Modell hat die Anfrage abgelehnt: ' + msg.refusal, 200);
    return String(content || '').trim();
  }
  if (c.provider === 'gemini') {
    const body = {
      contents: msgs.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.content) }] })),
      generationConfig: { maxOutputTokens: maxTokens * 3 },
    };
    if (system) body.systemInstruction = { parts: [{ text: system }] };
    if (json) body.generationConfig.responseMimeType = 'application/json';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(c.model)}:generateContent`;
    const data = await post(url, { 'x-goog-api-key': c.key }, body, signal);
    const cand = data.candidates?.[0];
    if (!cand) throw new AIError('Keine Antwort erhalten' + (data.promptFeedback?.blockReason ? ` (blockiert: ${data.promptFeedback.blockReason})` : ''), 200);
    return (cand.content?.parts || []).filter((p) => p.text && !p.thought).map((p) => p.text).join('').trim();
  }
  throw new AIError('Unbekannter Anbieter');
}

/** Listet verfügbare Modelle des Anbieters (hilft, wenn sich Modellnamen ändern). */
export async function listModels() {
  const c = aiConfig();
  if (c.provider === 'anthropic') {
    const d = await get('https://api.anthropic.com/v1/models?limit=100', anthropicHeaders(c.key));
    return (d.data || []).map((m) => m.id);
  }
  if (c.provider === 'openai' || c.provider === 'compatible') {
    const base = c.provider === 'openai' ? 'https://api.openai.com/v1' : c.baseUrl;
    const d = await get(`${base}/models`, c.key ? { authorization: `Bearer ${c.key}` } : {});
    return (d.data || []).map((m) => m.id).sort();
  }
  if (c.provider === 'gemini') {
    const d = await get('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { 'x-goog-api-key': c.key });
    return (d.models || []).filter((m) => (m.supportedGenerationMethods || []).includes('generateContent')).map((m) => m.name.replace(/^models\//, ''));
  }
  return [];
}

export async function testConnection() {
  const t0 = performance.now();
  const out = await chat([{ role: 'user', content: 'Antworte nur mit: OK – bereit zum Lernen!' }], { maxTokens: 200 });
  return { text: out, ms: Math.round(performance.now() - t0) };
}

/** Robustes JSON-Parsen aus Modellantworten (entfernt Code-Fences, sucht erstes Objekt). */
export function parseJSON(text) {
  const s = String(text).replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
  try { return JSON.parse(s); } catch { /* weiter */ }
  const start = s.indexOf('{');
  const end = s.lastIndexOf('}');
  if (start >= 0 && end > start) return JSON.parse(s.slice(start, end + 1));
  throw new Error('Antwort enthielt kein gültiges JSON');
}

// ---------- Prompts ----------
export const TUTOR_SYSTEM = `Du bist „Pixel", der KI-Lerncoach der geförderten Weiterbildung „KI-Management" bei velpTEC.
Deine Haltung: freundlich, motivierend, auf Augenhöhe, Du-Form, Deutsch.
Didaktik: Du unterstützt und führst hin, statt vorzusagen.
- Stelle bei Aufgaben zuerst eine Leitfrage oder gib einen kleinen Denkanstoß; gib Lösungen erst, wenn die Person ausdrücklich darum bittet UND schon einen eigenen Versuch gezeigt hat.
- Knüpfe an Praxis an (Mittelstand, Verwaltung, Handwerk, Bildung) und an die Kursinhalte, die dir als Kontext mitgegeben werden. Verweise auf das passende Kapitel des Theorieskripts „KI-Management“ (velpTEC K7.0069), wenn es im Kontext angegeben ist.
- Halte Antworten kurz (max. ca. 150 Wörter), strukturiert, mit konkreten nächsten Schritten.
- Wenn du dir unsicher bist oder ein Fakt aktuell sein muss (Gesetze, Preise, Modelle), sag das offen und nenne, wo man es prüfen kann (z. B. EUR-Lex, offizielle Doku).
- Keine Rechtsberatung; weise bei Rechtsfragen auf Fachleute/Datenschutzbeauftragte hin.
- Ermutige, keine personenbezogenen oder vertraulichen Daten in KI-Tools einzugeben.`;

export function feedbackPrompt(ex, answer, moduleTitle) {
  const rubric = ex.rubric.map((r, i) => `${i + 1}. ${r.criterion}`).join('\n');
  return `Modul: ${moduleTitle}
Übungsaufgabe: ${ex.title}

Szenario:
${ex.scenario || '-'}

Aufgabe:
${ex.task}

Erwartetes Ergebnis: ${ex.deliverable || '-'}

Bewertungskriterien:
${rubric}

Abgabe der/des Lernenden:
"""
${answer}
"""

Gib formatives Feedback auf Deutsch (Du-Form) in genau dieser Markdown-Struktur:
### Gesamteindruck
1–2 Sätze, wertschätzend und ehrlich.
### Kriterien
Für jedes Kriterium eine Zeile: "- ✅/🟡/❌ **Kriterium kurz**: 1 Satz Begründung".
### Stärken
2–3 Stichpunkte.
### Nächster Schritt
1–2 Leitfragen oder Denkanstöße, die zur Verbesserung hinführen – KEINE fertige Lösung.
Letzte Zeile exakt im Format: PUNKTE: <0-10>/10`;
}
