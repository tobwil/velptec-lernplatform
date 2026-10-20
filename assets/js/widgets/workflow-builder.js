// Widget: n8n-ähnlicher Workflow-Baukasten mit Validierung, Testlauf und Challenges.
import { h, pixelIcon } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, timers, prefersReducedMotion, fill } from './_shared.js';

const GROUPS = [
  { id: 'trigger', label: 'Trigger', nodes: [['mail', '📨', 'E-Mail-Eingang'], ['webhook', '🔗', 'Webhook'], ['schedule', '⏰', 'Zeitplan']] },
  { id: 'ai', label: 'KI', nodes: [['classify', '🏷️', 'Klassifizieren'], ['summarize', '📝', 'Zusammenfassen'], ['extract', '🔍', 'Extrahieren'], ['agent', '🤖', 'AI Agent']] },
  { id: 'logic', label: 'Logik', nodes: [['if', '🔀', 'IF'], ['switch', '🚦', 'Switch'], ['approval', '✋', 'Warten auf Freigabe']] },
  { id: 'action', label: 'Aktionen', nodes: [['ticket', '🎫', 'Ticket anlegen'], ['chat', '💬', 'Slack/Teams-Nachricht'], ['crm', '👥', 'CRM-Update'], ['sheet', '📊', 'Google Sheet']] },
];
const NODE = {};
GROUPS.forEach((g) => g.nodes.forEach(([id, icon, label]) => { NODE[id] = { id, icon, label, group: g.id }; }));

const SAMPLE = {
  mail: { von: 'kunde@beispiel.de', betreff: 'Rechnung doppelt abgebucht', text: 'Hallo, mir wurde die Rechnung 2026-118 zweimal abgebucht …' },
  webhook: { formular: 'Kontakt', name: 'Lea Sommer', firma: 'Sommer Bau GmbH', nachricht: 'Bitte Angebot für 20 Lizenzen' },
  schedule: { zeitpunkt: 'Montag 08:00', quelle: 'Support-Kennzahlen der Vorwoche' },
};
const OUT = {
  classify: { mail: { kategorie: 'Abrechnung', prioritaet: 'hoch', konfidenz: 0.93 }, webhook: { kategorie: 'Vertriebsanfrage', konfidenz: 0.88 }, schedule: { kategorie: 'Report', konfidenz: 0.97 } },
  summarize: { mail: 'Kunde meldet doppelte Abbuchung der Rechnung 2026-118 und bittet um Erstattung.', webhook: 'Angebotsanfrage über 20 Lizenzen von Sommer Bau GmbH.', schedule: '142 Tickets (+8 %), Ø Lösungszeit 5,2 h, Top-Thema: Abrechnung.' },
  extract: { mail: { rechnungsnr: '2026-118', betrag: '89,90 €' }, webhook: { name: 'Lea Sommer', firma: 'Sommer Bau GmbH', menge: 20 }, schedule: { tickets: 142, loesungszeit_h: 5.2 } },
  agent: { plan: ['Historie prüfen', 'Antwortentwurf erstellen'], ergebnis: 'Entwurf bereit' },
  if: 'Bedingung erfüllt → weiter im true-Zweig',
  switch: 'Route 1 von 4 gewählt',
  approval: 'Freigabe durch Teamleitung erteilt ✔ (simuliert)',
  ticket: { ticket: 'SUP-1042', status: 'offen' },
  chat: 'Nachricht im Kanal #team gepostet',
  crm: { kontakt: 'Lea Sommer', aktion: 'Lead angelegt' },
  sheet: 'Zeile 128 angehängt',
};

const CHALLENGES = [
  { id: 'c1', title: 'Supportmails klassifizieren und als Ticket anlegen', need: ['mail', 'classify', 'ticket'], hint: 'Trigger E-Mail-Eingang → KI Klassifizieren → (optional IF/Switch) → Ticket anlegen' },
  { id: 'c2', title: 'Montags-Report: Support-Zahlen zusammenfassen und ins Team posten', need: ['schedule', 'summarize', 'chat'], hint: 'Zeitplan → Zusammenfassen → Slack/Teams-Nachricht' },
  { id: 'c3', title: 'Webformular-Leads: Daten extrahieren und erst nach Freigabe ins CRM', need: ['webhook', 'extract', 'approval', 'crm'], hint: 'Webhook → Extrahieren → Warten auf Freigabe → CRM-Update' },
];

export function validate(chain) {
  const errors = [], warnings = [];
  if (!chain.length) return { errors: ['Füge Nodes aus der Palette hinzu.'], warnings };
  if (NODE[chain[0]].group !== 'trigger') errors.push('Ein Workflow beginnt immer mit einem Trigger (E-Mail-Eingang, Webhook oder Zeitplan).');
  chain.forEach((id, i) => {
    const n = NODE[id];
    const rest = chain.slice(i + 1).map((x) => NODE[x].group);
    if (i > 0 && n.group === 'trigger') errors.push(`„${n.label}“ (Position ${i + 1}): Ein Trigger gehört nur an den Anfang.`);
    if (n.group === 'ai' && !rest.some((g) => g === 'logic' || g === 'action')) errors.push(`Nach „${n.label}“ fehlt eine Logik- oder Aktions-Node – sonst verpufft das KI-Ergebnis.`);
    if (n.group === 'logic' && !rest.includes('action')) errors.push(`„${n.label}“ braucht danach eine Aktion.`);
  });
  if (chain.length === 1 && NODE[chain[0]].group === 'trigger') errors.push('Nach dem Trigger muss mindestens ein weiterer Schritt folgen.');
  if (!errors.length && NODE[chain[chain.length - 1]].group !== 'action') warnings.push('Der Workflow endet ohne Aktion – es passiert nichts Sichtbares.');
  const ai = chain.indexOf('agent');
  if (ai >= 0) {
    const act = chain.findIndex((x, i) => i > ai && NODE[x].group === 'action');
    if (act > 0 && !chain.slice(ai + 1, act).includes('approval')) warnings.push('Tipp: Vor Aktionen eines AI Agents eine Freigabe einbauen (Human-in-the-loop).');
  }
  if (chain.includes('webhook')) warnings.push('Webhook absichern: Authentifizierung/Secret, Eingaben validieren.');
  return { errors, warnings };
}

export function solves(chain, ch) {
  if (validate(chain).errors.length) return false;
  let j = 0;
  for (const id of chain) if (id === ch.need[j]) j++;
  return j === ch.need.length && chain[0] === ch.need[0];
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'workflow-builder');
  setupRoot(el, 'workflow-builder');
  const t = timers();
  let chain = [], outputs = {}, running = false, activeCh = 0;
  const solved = new Set();
  const MAX = 10;

  const palette = h('div.w-wf-palette', GROUPS.map((g) => h(`div.w-wf-group.g-${g.id}`,
    h('h4', g.label),
    h('div.w-wf-pbtns', g.nodes.map(([id, icon, label]) => h('button.btn.btn-sm.w-wf-pbtn', { type: 'button', onclick: () => add(id), 'aria-label': `${label} hinzufügen` }, h('span', { 'aria-hidden': 'true' }, icon), label))))));
  const packet = h('span.w-wf-packet', { 'aria-hidden': 'true' }, pixelIcon('box', 18));
  const chainEl = h('ol.w-wf-chain', { 'aria-label': 'Workflow-Kette' });
  const chainWrap = h('div.w-wf-chainwrap', chainEl, packet);
  const valEl = h('div.w-wf-val', { 'aria-live': 'polite' });
  const runBtn = h('button.btn.btn-primary', { type: 'button', onclick: () => testRun() }, '▶ Testlauf');
  const clearBtn = h('button.btn', { type: 'button', onclick: () => { chain = []; outputs = {}; render(); } }, 'Leeren');
  const chEl = h('div.w-wf-challenges');

  fill(el, 
    widgetHead('Workflow-Baukasten (n8n-Stil)', 'Klicke Nodes aus der Palette, um eine Automatisierungs-Kette zu bauen, ändere die Reihenfolge mit ↑/↓ und starte einen Testlauf mit Beispieldaten. Löse die drei Challenges!', 'flow'),
    chEl,
    h('div.w-wf-layout',
      h('div.w-wf-left', h('b.small', 'Palette'), palette),
      h('div.w-wf-right', h('div.row', h('b.small', 'Dein Workflow'), h('span.spacer'), runBtn, clearBtn), chainWrap, valEl)),
    h('p.notice.small', h('b', 'Datenschutz-Hinweis: '), 'n8n lässt sich selbst hosten (z. B. im eigenen Rechenzentrum oder bei einem EU-Hoster) – dann bleiben die Workflow-Daten in deiner Infrastruktur. Sobald ein KI-Node einen Cloud-Dienst aufruft, verlassen die Daten sie trotzdem: Prüfe Auftragsverarbeitungsvertrag (Art. 28 DSGVO), Serverstandort, Datenminimierung und ggf. ein lokales Modell.'),
  );

  function add(id) {
    if (running) return;
    if (chain.length >= MAX) { c.toast(`Maximal ${MAX} Nodes.`, { icon: '⚠️' }); return; }
    chain.push(id); outputs = {};
    render();
  }
  function move(i, d) {
    const j = i + d;
    if (running || j < 0 || j >= chain.length) return;
    [chain[i], chain[j]] = [chain[j], chain[i]]; outputs = {};
    render();
    chainEl.children[j]?.querySelector(d < 0 ? '[data-act="up"]' : '[data-act="down"]')?.focus();
  }
  function del(i) {
    if (running) return;
    chain.splice(i, 1); outputs = {};
    render();
    (chainEl.children[Math.min(i, chain.length - 1)]?.querySelector('[data-act="del"]') || palette.querySelector('button'))?.focus();
  }

  function fmtOut(o) {
    return typeof o === 'string' ? o : JSON.stringify(o).replace(/","/g, '", "').replace(/,"/g, ', "');
  }

  function renderChain() {
    fill(chainEl, ...chain.map((id, i) => {
      const n = NODE[id];
      return h(`li.w-wf-node.g-${n.group}${outputs[i] ? '.is-done' : ''}`, { dataset: { i } },
        h('div.w-wf-nhead',
          h('span.w-wf-icon', { 'aria-hidden': 'true' }, n.icon),
          h('span.w-wf-nlabel', h('b', n.label), h('span.small.muted', ` · ${GROUPS.find((g) => g.id === n.group).label}`)),
          h('span.w-wf-nbtns',
            h('button.icon-btn', { type: 'button', dataset: { act: 'up' }, 'aria-label': `${n.label} nach oben`, disabled: i === 0 || running, onclick: () => move(i, -1) }, '↑'),
            h('button.icon-btn', { type: 'button', dataset: { act: 'down' }, 'aria-label': `${n.label} nach unten`, disabled: i === chain.length - 1 || running, onclick: () => move(i, 1) }, '↓'),
            h('button.icon-btn', { type: 'button', dataset: { act: 'del' }, 'aria-label': `${n.label} löschen`, disabled: running, onclick: () => del(i) }, '✕'))),
        outputs[i] ? h('code.w-wf-out', '→ ', outputs[i]) : null);
    }));
    if (!chain.length) chainEl.append(h('li.w-wf-empty.muted.small', 'Noch leer – starte mit einem Trigger aus der Palette.'));
  }

  function renderVal() {
    const v = validate(chain);
    fill(valEl, 
      v.errors.length ? h('ul.w-wf-errors.small', v.errors.map((e) => h('li', '✖ ', e))) : chain.length ? h('p.w-wf-ok.small', '✔ Workflow ist gültig – starte den Testlauf.') : null,
      v.warnings.length ? h('ul.w-wf-warns.small', v.warnings.map((w) => h('li', '⚠ ', w))) : null);
    runBtn.disabled = running || !!v.errors.length;
  }

  function renderChallenges() {
    fill(chEl, 
      h('div.w-wf-chtabs', { role: 'tablist', 'aria-label': 'Challenges' }, CHALLENGES.map((ch, i) => h(`button.btn.btn-sm${i === activeCh ? '.btn-primary' : ''}`, {
        type: 'button', role: 'tab', 'aria-selected': i === activeCh ? 'true' : 'false', onclick: () => { activeCh = i; renderChallenges(); },
      }, solved.has(ch.id) ? '✅ ' : '', `Challenge ${i + 1}`))),
      h('div.w-wf-chbody', h('b', CHALLENGES[activeCh].title),
        h('details.small', h('summary', 'Hinweis anzeigen'), CHALLENGES[activeCh].hint),
        h('p.small.muted', `${solved.size}/3 gelöst · Gelöst wird eine Challenge mit einem erfolgreichen Testlauf.`)));
  }

  function render() { renderChain(); renderVal(); renderChallenges(); positionPacket(-1); }

  function positionPacket(i) {
    if (i < 0) { packet.classList.remove('is-on'); return; }
    const li = chainEl.children[i];
    if (!li) return;
    packet.classList.add('is-on');
    packet.style.transform = `translate(${-6}px, ${li.offsetTop + 10}px)`;
  }

  async function testRun() {
    if (running || validate(chain).errors.length) return;
    running = true; outputs = {};
    renderChain(); renderVal();
    const trig = chain[0];
    const ms = prefersReducedMotion() ? 250 : 700;
    for (let i = 0; i < chain.length; i++) {
      positionPacket(i);
      await new Promise((r) => t.timeout(r, ms));
      const id = chain[i];
      const o = id === trig && NODE[id].group === 'trigger' ? SAMPLE[trig] : (OUT[id]?.[trig] ?? OUT[id]);
      outputs[i] = fmtOut(o);
      renderChain();
      positionPacket(i);
    }
    running = false;
    renderVal();
    positionPacket(-1);
    const newly = CHALLENGES.filter((ch) => !solved.has(ch.id) && solves(chain, ch));
    if (newly.length) {
      newly.forEach((ch) => solved.add(ch.id));
      c.toast(`Challenge gelöst: ${newly.map((x) => x.title).join(', ')}`, { icon: '🏆', type: 'success' });
      c.confetti();
      c.award(10, 'Widget: Workflow-Challenge gelöst');
      const nextOpen = CHALLENGES.findIndex((ch) => !solved.has(ch.id));
      if (nextOpen >= 0) activeCh = nextOpen;
    } else {
      c.toast('Testlauf erfolgreich – alle Nodes haben Daten weitergereicht.', { icon: '✅' });
    }
    renderChallenges();
  }

  render();
  return () => t.clear();
}

