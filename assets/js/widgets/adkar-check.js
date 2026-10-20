// Widget: ADKAR-Selbstcheck für eine KI-Einführung.
import { h } from '../ui.js';
import { safeCtx, widgetHead, setupRoot, rangeField, s, copyText, fill } from './_shared.js';

export const DIMS = [
  {
    id: 'A', name: 'Awareness', de: 'Bewusstsein', q: 'Verstehen die Betroffenen, *warum* KI eingeführt wird und was passiert, wenn nichts passiert?',
    measures: ['Nutzen und Anlass klar kommunizieren: Welches Problem löst die KI – für Kunden, Team und Unternehmen?', 'Führungskräfte erklären die Gründe persönlich (Townhall, Teammeeting) statt nur per Rundmail', 'Ängste offen ansprechen: Was ändert sich an Jobs und Aufgaben, was nicht?', 'Live-Demo mit einem echten Arbeitsbeispiel aus dem eigenen Bereich'],
  },
  {
    id: 'D', name: 'Desire', de: 'Wunsch / Bereitschaft', q: 'Wollen die Mitarbeitenden die Veränderung mittragen – sehen sie einen persönlichen Vorteil?',
    measures: ['Persönlichen Nutzen zeigen („weniger Routine, mehr Zeit für Kunden“)', 'Mitarbeitende früh einbinden: Use Cases gemeinsam auswählen, Pilotnutzer gewinnen', 'Betriebsrat und Datenschutz frühzeitig beteiligen – schafft Vertrauen', 'KI-Champions im Team benennen, Erfolge sichtbar machen'],
  },
  {
    id: 'K', name: 'Knowledge', de: 'Wissen', q: 'Wissen die Betroffenen, *wie* sie das KI-Tool richtig, sicher und regelkonform nutzen?',
    measures: ['Rollenspezifische Schulungen (KI-Kompetenz nach Art. 4 KI-Verordnung)', 'KI-Richtlinie: Welche Daten dürfen in welche Tools? Was muss geprüft werden?', 'Prompt-Leitfaden und Beispielbibliothek für typische Aufgaben', 'Grenzen erklären: Halluzinationen, Bias, Datenschutz'],
  },
  {
    id: 'A2', name: 'Ability', de: 'Fähigkeit', q: 'Können die Mitarbeitenden das Gelernte im Alltag tatsächlich anwenden – mit Zeit, Zugang und Unterstützung?',
    measures: ['Übungszeit im Arbeitsalltag einplanen (z. B. wöchentliche KI-Sprechstunde)', 'Lizenzen, Zugänge und Integration in die bestehenden Tools sicherstellen', 'Coaching am Arbeitsplatz durch KI-Champions, Peer-Learning', 'Mit einfachen Aufgaben starten, schrittweise steigern'],
  },
  {
    id: 'R', name: 'Reinforcement', de: 'Verstärkung', q: 'Wird die neue Arbeitsweise nachhaltig verankert, anerkannt und weiterentwickelt?',
    measures: ['Erfolge messen und teilen (KPIs: Zeitersparnis, Qualität, Nutzungsquote)', 'Anerkennung für gute Anwendungsfälle, Best-Practice-Runden', 'Feedback-Kanal: Probleme schnell beheben, Tool verbessern', 'Alte Parallelprozesse bewusst abschalten, Ziele und Rollen anpassen'],
  },
];

export function bottleneck(vals) {
  return DIMS.findIndex((d) => vals[d.id] < 3);
}

export default function mount(el, props = {}, ctx) {
  const c = safeCtx(ctx, 'adkar-check');
  setupRoot(el, 'adkar-check');
  // Beispiel-Startwerte (typisches Bild kurz nach dem Kick-off)
  const vals = { A: 4, D: 3, K: 2, A2: 2, R: 1 };
  const touched = new Set();
  let project = 'Einführung eines KI-Assistenten im Kundenservice';

  const chart = h('div.w-ad-chart');
  const res = h('div.w-ad-res', { 'aria-live': 'polite' });
  const projIn = h('input.input', { type: 'text', value: project, 'aria-label': 'Vorhaben', maxlength: 120 });
  projIn.addEventListener('input', () => { project = projIn.value; });

  const LABELS = ['1 – gar nicht', '2 – kaum', '3 – teilweise', '4 – überwiegend', '5 – voll'];
  const sliders = DIMS.map((d) => rangeField({
    label: `${d.name[0]} · ${d.name} (${d.de})`, value: vals[d.id], min: 1, max: 5, step: 1,
    format: (v) => LABELS[v - 1],
    hint: d.q.replace(/\*/g, ''),
    onInput: (v) => { vals[d.id] = v; touched.add(d.id); render(); if (touched.size === DIMS.length && c.award(10, 'Widget: ADKAR-Check ausgefüllt')) c.toast('ADKAR-Check komplett – schau dir deinen Engpass an!', { icon: '🧩' }); },
  }));

  fill(el, 
    widgetHead('ADKAR-Check für dein KI-Vorhaben', 'Schätze für dein Vorhaben ein, wie weit die Betroffenen in jeder ADKAR-Stufe sind (1 = gar nicht, 5 = voll). ADKAR wirkt nacheinander: Die erste Stufe unter 3 ist dein Engpass – dort setzt du zuerst an.', 'people'),
    h('label.field', h('span', 'Vorhaben'), projIn),
    h('div.w-ad-layout', h('div.w-ad-sliders', sliders.map((x) => x.el)), chart),
    res,
  );

  function radar() {
    const S = 260, cx = S / 2, cy = S / 2 + 6, R = 92;
    const ang = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / DIMS.length;
    const pt = (i, r) => [cx + Math.cos(ang(i)) * r, cy + Math.sin(ang(i)) * r];
    const rings = [1, 2, 3, 4, 5].map((lv) => s('polygon', { class: `w-ad-ring${lv === 3 ? ' is-mid' : ''}`, points: DIMS.map((_, i) => pt(i, (R * lv) / 5).join(',')).join(' ') }));
    const spokes = DIMS.map((_, i) => s('line', { class: 'w-ad-spoke', x1: cx, y1: cy, x2: pt(i, R)[0], y2: pt(i, R)[1] }));
    const poly = s('polygon', { class: 'w-ad-area', points: DIMS.map((d, i) => pt(i, (R * vals[d.id]) / 5).join(',')).join(' ') });
    const b = bottleneck(vals);
    const dots = DIMS.map((d, i) => s('circle', { class: `w-ad-dot${i === b ? ' is-neck' : ''}`, cx: pt(i, (R * vals[d.id]) / 5)[0], cy: pt(i, (R * vals[d.id]) / 5)[1], r: i === b ? 6 : 4 }));
    const labels = DIMS.map((d, i) => {
      const [x, y] = pt(i, R + 20);
      return s('text', { class: `w-ad-lbl${i === b ? ' is-neck' : ''}`, x, y: y + 4, 'text-anchor': Math.abs(x - cx) < 5 ? 'middle' : x > cx ? 'start' : 'end' }, `${d.name} ${vals[d.id]}`);
    });
    return s('svg', { viewBox: `-40 0 ${S + 80} ${S + 10}`, role: 'img', 'aria-label': `Radar-Diagramm: ${DIMS.map((d) => `${d.name} ${vals[d.id]}`).join(', ')}` }, rings, spokes, poly, dots, labels);
  }

  function render() {
    fill(chart, radar(), h('div.w-ad-bars', DIMS.map((d, i) => h(`div.w-ad-bar${i === bottleneck(vals) ? '.is-neck' : ''}`,
      h('span.w-ad-letter', d.name[0]), h('span.w-ad-track', h('i', { style: { width: `${vals[d.id] * 20}%` } })), h('span.small', vals[d.id])))));
    const b = bottleneck(vals);
    const low = DIMS.filter((d, i) => vals[d.id] < 3 && i !== b);
    if (b < 0) {
      fill(res, h('div.w-ad-ok', h('h4', '✅ Kein akuter Engpass'), h('p', 'Alle Stufen liegen bei 3 oder höher. Bleib dran: Stärke vor allem die Stufen unter 4 und plane Reinforcement von Anfang an mit ein.'),
        h('ul.small', DIMS.filter((d) => vals[d.id] < 4).map((d) => h('li', h('b', `${d.name}: `), d.measures[0])))));
    } else {
      const d = DIMS[b];
      fill(res, 
        h('div.w-ad-neck',
          h('h4', `🎯 Engpass: ${d.name} (${d.de}) – Wert ${vals[d.id]}`),
          h('p.small', b > 0 ? `Die Stufen davor sind solide. Solange ${d.name} schwach ist, verpuffen Maßnahmen in späteren Stufen – setze hier zuerst an.` : 'Ohne Verständnis für das „Warum“ greifen Schulungen und Tools kaum. Fang hier an.'),
          h('ul', d.measures.map((m) => h('li', m)))),
        low.length ? h('div.small', h('b', 'Ebenfalls unter 3 – danach angehen: '), low.map((x) => x.name).join(', ')) : null,
        h('div.row', h('button.btn.btn-sm', { type: 'button', onclick: copyPlan }, '⧉ Maßnahmenplan kopieren')),
      );
    }
  }

  async function copyPlan() {
    const b = bottleneck(vals);
    const lines = [`## ADKAR-Check: ${project || 'KI-Vorhaben'}`, '', ...DIMS.map((d) => `- ${d.name} (${d.de}): ${vals[d.id]}/5`), ''];
    if (b >= 0) lines.push(`**Engpass:** ${DIMS[b].name}`, '', ...DIMS[b].measures.map((m) => `- [ ] ${m}`));
    const ok = await copyText(lines.join('\n'));
    c.toast(ok ? 'Maßnahmenplan kopiert.' : 'Kopieren nicht möglich.', { icon: ok ? '📋' : '⚠️' });
  }

  render();
  return () => {};
}
