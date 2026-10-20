// Rangliste (lokale Profile + importierte Score-Karten + optional Online-Sync z. B. über einen n8n-Webhook)
// sowie Profilseite mit Badges und Verlauf.
import { h, clear, pixelAvatar, toast, modal, hashStr, fmtDate } from '../ui.js';
import { store } from '../store.js';
import { course, levelInfo, moduleProgress, BADGES, streakInfo } from '../gamification.js';

const SALT = 'velptec-ki-management';

export function scoreCard(p = store.profile) {
  const card = {
    v: 1, id: p.id, name: p.name, xp: p.xp, level: levelInfo(p.xp).level,
    modules: course.modules.filter((m) => moduleProgress(m, p).complete).length,
    lessons: Object.keys(p.lessons).length, sprintBest: p.sprintBest || 0,
    badges: Object.keys(p.badges).length, updated: Date.now(),
  };
  card.sig = sign(card);
  return card;
}
function sign(c) { return hashStr(SALT + [c.id, c.name, c.xp, c.modules, c.lessons, c.sprintBest, c.badges, c.updated].join('|')).toString(36); }
export const verify = (c) => c && c.v === 1 && typeof c.name === 'string' && Number.isFinite(c.xp) && c.sig === sign(c);
const encode = (c) => btoa(unescape(encodeURIComponent(JSON.stringify(c))));
const decode = (s) => JSON.parse(decodeURIComponent(escape(atob(s.trim()))));

function mergeCards(list) {
  const byId = new Map();
  for (const c of list) {
    if (!verify(c)) continue;
    const prev = byId.get(c.id);
    if (!prev || prev.updated < c.updated) byId.set(c.id, c);
  }
  return [...byId.values()];
}

async function remoteFetch() {
  const { url, enabled } = store.settings.leaderboard;
  if (!enabled || !url) return [];
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`Online-Rangliste nicht erreichbar (${res.status})`);
  const data = await res.json();
  return Array.isArray(data) ? data : data.cards || [];
}
async function remotePush() {
  const { url, enabled } = store.settings.leaderboard;
  if (!enabled || !url) return;
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(scoreCard()) });
  if (!res.ok) throw new Error(`Senden fehlgeschlagen (${res.status})`);
}

export function leaderboardView(main) {
  let remote = [];
  let metric = 'xp';
  const listEl = h('div');
  const status = h('p.small.muted');
  const render = () => {
    const local = store.profiles().map((p) => scoreCard(p));
    const all = mergeCards([...local, ...(store.state.imported || []), ...remote]);
    const val = (c) => (metric === 'xp' ? c.xp : metric === 'sprint' ? c.sprintBest : c.modules * 1000 + c.lessons);
    const label = (c) => (metric === 'xp' ? `${c.xp} XP` : metric === 'sprint' ? `${c.sprintBest} Pkt.` : `${c.modules} Module · ${c.lessons} Lekt.`);
    all.sort((a, b) => val(b) - val(a));
    clear(listEl).append(...(all.length ? all.map((c, i) => h(`div.lb-row${c.id === store.state.active ? '.me' : ''}`,
      h('div.lb-rank', i < 3 ? ['🥇', '🥈', '🥉'][i] : `#${i + 1}`),
      pixelAvatar(c.name, 40),
      h('div', h('strong', c.name), h('div.small.muted', `Level ${c.level} · ${levelInfo(c.xp).title} · 🏅 ${c.badges}${c.id === store.state.active ? ' · das bist du' : ''}`)),
      h('strong', label(c)))) : [h('p.empty', 'Noch keine Einträge.')]));
  };

  const tabs = h('div.tabs', [['xp', 'Gesamt-XP'], ['sprint', 'Wissens-Sprint'], ['modules', 'Lernfortschritt']].map(([k, l], i) => {
    const b = h(`button.tab${i ? '' : '.active'}`, { type: 'button', onclick: () => { metric = k; tabs.querySelectorAll('.tab').forEach((x) => x.classList.remove('active')); b.classList.add('active'); render(); } }, l);
    return b;
  }));

  const exportCard = () => {
    const card = scoreCard();
    const code = encode(card);
    const ta = h('textarea.textarea', { readonly: true, rows: 4, style: { minHeight: '90px', fontFamily: 'var(--mono)', fontSize: '.8rem' } }, code);
    modal('Meine Score-Karte teilen', h('div.stack',
      h('p', 'Schicke diesen Code (oder die Datei) an deine Lerngruppe oder Lehrkraft. Die Karte enthält nur Name, XP, Level, Anzahl Module/Lektionen/Badges und Sprint-Highscore – keine Antworten.'),
      ta,
      h('div.row',
        h('button.btn.btn-primary', { type: 'button', onclick: async () => { try { await navigator.clipboard.writeText(code); toast('Code kopiert!', { icon: '📋' }); } catch { ta.select(); } } }, '📋 Code kopieren'),
        h('button.btn', { type: 'button', onclick: () => {
          const a = h('a', { href: URL.createObjectURL(new Blob([JSON.stringify(card, null, 2)], { type: 'application/json' })), download: `scorekarte-${card.name.replace(/\W+/g, '-')}.json` });
          a.click();
        } }, '⬇ Als Datei'))));
  };

  const importCards = () => {
    const ta = h('textarea.textarea', { rows: 5, placeholder: 'Score-Karten-Codes einfügen (einer pro Zeile) …' });
    const file = h('input', { type: 'file', accept: '.json', multiple: true });
    modal('Score-Karten importieren', h('div.stack', h('p', 'Füge Codes ein oder wähle Score-Karten-Dateien. Ungültige oder veränderte Karten werden ignoriert (Fair-Play-Prüfsumme).'), ta, file), {
      actions: [{ label: 'Abbrechen' }, { label: 'Importieren', primary: true, onClick: async () => {
        const cards = [];
        ta.value.split(/\s+/).filter(Boolean).forEach((s) => { try { cards.push(decode(s)); } catch { /* ignorieren */ } });
        for (const f of file.files) { try { const d = JSON.parse(await f.text()); (Array.isArray(d) ? d : [d]).forEach((c) => cards.push(c)); } catch { /* ignorieren */ } }
        const valid = cards.filter(verify);
        store.state.imported = mergeCards([...(store.state.imported || []), ...valid]);
        store.save();
        toast(`${valid.length} Score-Karte(n) importiert${cards.length - valid.length ? `, ${cards.length - valid.length} ungültig` : ''}.`, { icon: '🏆' });
        render();
      } }],
    });
  };

  const syncBtn = h('button.btn', { type: 'button', onclick: async () => {
    try { status.textContent = 'Synchronisiere …'; await remotePush(); remote = await remoteFetch(); status.textContent = `Online-Rangliste aktualisiert (${remote.length} Einträge).`; render(); }
    catch (e) { status.textContent = '⚠️ ' + e.message; }
  } }, '🔄 Online synchronisieren');

  main.append(
    h('h1', '🏆 Rangliste'),
    h('p.muted', 'Vergleiche Lernfortschritt und Wissens-Sprint mit deiner Lerngruppe. Ohne Server: Profile auf diesem Gerät + importierte Score-Karten. Optional: gemeinsame Online-Rangliste über einen eigenen Webhook (z. B. mit n8n – siehe Einstellungen).'),
    h('div.row', h('button.btn.btn-primary', { type: 'button', onclick: exportCard }, '📤 Meine Score-Karte teilen'), h('button.btn', { type: 'button', onclick: importCards }, '📥 Karten importieren'), store.settings.leaderboard.enabled ? syncBtn : null, h('a.btn.btn-ghost', { href: '#/sprint' }, '⚡ Sprint spielen')),
    status,
    h('section.section', tabs, listEl));
  render();
  if (store.settings.leaderboard.enabled) remoteFetch().then((r) => { remote = r; render(); status.textContent = `Online-Rangliste geladen (${r.length}).`; }).catch((e) => { status.textContent = '⚠️ ' + e.message; });
}

export function profileView(main) {
  const p = store.profile;
  if (!p) return;
  const li = levelInfo(p.xp);
  const st = streakInfo(p);
  const nameInput = h('input.input', { value: p.name, maxlength: 32, 'aria-label': 'Name' });
  main.append(
    h('div.card', h('div.row', { style: { gap: '18px' } },
      pixelAvatar(p.name, 72),
      h('div', { style: { flex: 1 } },
        h('h1', { style: { marginBottom: '4px' } }, p.name),
        h('div.muted', `Level ${li.level} · ${li.title} · ${p.xp} XP · 🔥 ${st.current} Tage Serie · ${st.total} Lerntage gesamt`),
        h('div.progress.accent', { style: { marginTop: '10px', maxWidth: '420px' } }, h('i', { style: { width: li.pct + '%' } })),
        h('div.small.muted', { style: { marginTop: '4px' } }, li.next ? `Noch ${li.toNext} XP bis „${li.next.title}“` : 'Höchstes Level erreicht!')))),
    h('section.section', h('h2', `Badges (${Object.keys(p.badges).length}/${BADGES.length})`),
      h('div.badges', BADGES.map((b) => h(`div.badge-card${p.badges[b.id] ? '.got' : ''}`, h('div.b-ico', b.icon), h('b', b.title), h('span', b.desc), p.badges[b.id] ? h('div.small.muted', fmtDate(p.badges[b.id])) : null)))),
    h('section.section', h('h2', 'Fortschritt je Modul'),
      h('div.stack', course.modules.map((m) => {
        const pr = moduleProgress(m, p);
        return h('a.card.card-flat', { href: `#/modul/${m.id}`, style: { textDecoration: 'none', color: 'inherit' } },
          h('div.row', h('strong', m.title), h('span.spacer'), h('span.small.muted', pr.complete ? '✅ abgeschlossen' : `${pr.pct}%`)),
          h('div.progress', { style: { marginTop: '8px' } }, h('i', { style: { width: pr.pct + '%' } })));
      }))),
    h('section.section.grid.grid-2',
      h('div.card', h('h3', 'Letzte Aktivitäten'),
        p.log.length ? h('ul.small', { style: { paddingLeft: '1.2em' } }, p.log.slice(0, 15).map((x) => h('li', `${fmtDate(x.t)} · +${x.xp} XP · ${x.reason}`))) : h('p.muted', 'Noch keine Aktivitäten.')),
      h('div.card', h('h3', 'Profil & Geräte'),
        h('label.field', 'Name ändern', nameInput),
        h('div.row', { style: { marginTop: '10px' } },
          h('button.btn', { type: 'button', onclick: () => { store.update((pp) => { pp.name = nameInput.value.trim() || pp.name; }); toast('Name gespeichert.', { icon: '✅' }); location.reload(); } }, 'Speichern')),
        h('h4', 'Profile auf diesem Gerät'),
        h('p.small.muted', 'Praktisch im Schulungsraum: Mehrere Lernende können sich ein Gerät teilen.'),
        h('div.stack', store.profiles().map((x) => h('div.row', pixelAvatar(x.name, 28), h('span', x.name, x.id === p.id ? ' (aktiv)' : ''), h('span.spacer'),
          x.id !== p.id ? h('button.btn.btn-sm', { type: 'button', onclick: () => { store.switchProfile(x.id); location.reload(); } }, 'Wechseln') : null)),
        ),
        h('div.row', { style: { marginTop: '10px' } },
          h('button.btn.btn-sm', { type: 'button', onclick: () => { const n = prompt('Name des neuen Profils?'); if (n) { store.createProfile(n.trim()); location.reload(); } } }, '+ Neues Profil'),
          h('button.btn.btn-sm', { type: 'button', style: { color: 'var(--danger)' }, onclick: () => modal('Profil löschen?', h('p', `Der gesamte Fortschritt von „${p.name}“ wird gelöscht.`), { actions: [{ label: 'Abbrechen' }, { label: 'Löschen', primary: true, onClick: () => { store.deleteProfile(p.id); location.hash = '#/'; location.reload(); } }] }) }, 'Profil löschen')))));
}
