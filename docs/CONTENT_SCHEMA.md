# Inhaltsschema der Lernplattform

Jedes Modul ist ein ES-Modul unter `content/modules/<id>.js`, das ein Objekt per
`export default` liefert. Alle Texte sind Deutsch (Du-Form, motivierend, präzise).
Texte in `md`-Feldern unterstützen ein kleines Markdown-Subset:

- `**fett**`, `*kursiv*`, `` `code` ``, `[Linktext](https://…)`
- Absätze (Leerzeile), Listen (`- ` bzw. `1. `), Zwischenüberschriften (`### `)
- `> ` Zitatzeile
- Tabellen im Pipe-Format (`| a | b |` + Trennzeile `|---|---|`)
- Kein HTML (wird escaped).

```js
export default {
  id: 'm01',                       // eindeutig, = Dateiname
  order: 1,
  title: 'Grundlagen der KI',
  subtitle: 'Begriffe, Disziplinen, Daten als Rohstoff',
  icon: 'brain',                   // Pixel-Icon: brain|chart|target|gear|shield|people|gauge|book|spark|flow|box|leaf
  chapter: 1,                      // Kapitel des Theorieskripts K7.0069 (k1–k8) – ODER plus: true für Plus-Module
  isNew: false,                    // true = Inhalte über das Skript hinaus (bei Plus-Modulen)
  minutes: 60,                     // geschätzte Lernzeit gesamt
  skript: [{ chapter: '1.1', title: 'Was ist Künstliche Intelligenz?', page: 4 }],  // Bezüge zum Theorieskript (gedruckte Seitenzahl)
  objectives: ['Du kannst …', '…'],
  lessons: [
    {
      id: 'm01-l1',
      title: 'Was ist Künstliche Intelligenz?',
      minutes: 15,
      skript: { chapter: '1.1', page: 4 },   // Pflicht in Kapitelmodulen; deepening: true für Vertiefungslektionen
      blocks: [ /* siehe Blocktypen */ ]
    }
  ],
  quiz: [ /* siehe Fragetypen, 8–12 Fragen */ ],
  exercises: [ /* 1–2 Übungsaufgaben */ ],
  glossary: [{ term: 'Bias', def: 'Systematische Verzerrung …' }],
  sources: [ /* Quellenliste des Moduls, siehe unten */ ]
}
```

## Blocktypen (`lessons[].blocks[]`)

| type | Felder | Zweck |
|---|---|---|
| `text` | `md` | Fließtext |
| `callout` | `variant`: `info`\|`merksatz`\|`warn`\|`tipp`, `title`, `md` | Hervorhebung |
| `praxis` | `title`, `company` (fiktives Beispielunternehmen o. reales mit Quelle), `scenario` (md), `steps` (string[]), `takeaway` (md), optional `source` ({title,url}) | **Praxisbezug** – Pflicht in jeder Lektion |
| `skript` | `chapter` (z. B. `'1.1'`), `page` (gedruckte Seite), `md` (Kernaussagen des Abschnitts in eigenen Worten), optional `quote` (kurzes wörtliches Zitat, max. 320 Zeichen) | Verweis aufs offizielle Theorieskript K7.0069 |
| `update` | `title`, `md`, `sources` ([{title,url}]) | „Aktualisierung zum Skript" – wenn das Skript veraltet/ergänzungsbedürftig ist |
| `table` | `head` (string[]), `rows` (string[][]), optional `caption` | Tabelle (Zellen: Inline-Markdown) |
| `flipcards` | `cards`: [{`front`, `back`}] | Lernkarten zum Umdrehen |
| `steps` | `items`: [{`title`, `md`}] | Animierte Schrittfolge (Prozess) |
| `timeline` | `items`: [{`date`, `title`, `md`}] | Zeitstrahl |
| `interactive` | `widget`, `props` | Interaktives Widget, siehe unten |
| `video` | `scene` | Pixel-Motion-Graphic-Szene aus dem Code-Video (siehe Szenenliste) |
| `youtube` | `id`, `title`, `channel`, `lang` (`de`/`en`), `minutes` | Externes Video (Zwei-Klick-Lösung, DSGVO). **ID muss per oEmbed verifiziert sein**: `curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json"` liefert JSON mit passendem Titel |
| `quickcheck` | `qtype` (= Fragetyp `single`\|`multi`\|`tf`\|`order`\|`match`\|`cloze`) + Felder dieses Fragetyps flach im Block | Mini-Verständnisfrage mitten in der Lektion, z. B. `{ type: 'quickcheck', qtype: 'single', q, options, answer, explain }` |
| `links` | `title`, `items`: [{`title`, `url`, `note`}] | Tool-/Weiterlese-Links |

### Widgets (`interactive.widget`)

| widget | props | Inhalt |
|---|---|---|
| `neural-net` | – | Animiertes neuronales Netz, Forward-Pass per Klick |
| `data-quality` | – | Mini-Spiel: Datensätze als brauchbar/fehlerhaft einsortieren |
| `usecase-matrix` | optional `cases`: [{`name`, `impact` 1-5, `feasibility` 1-5}] | Use-Case-Priorisierung Nutzen × Machbarkeit |
| `roi-calculator` | – | Business-Case/ROI-Rechner |
| `process-steps` | – | Vorgehensmodell (7 Phasen) animiert durchklicken |
| `ai-act-classifier` | – | Fragebogen → Risikoklasse nach EU AI Act |
| `risk-matrix` | – | Risiken nach Eintrittswahrscheinlichkeit × Schaden platzieren |
| `confusion-matrix` | – | Schwellenwert-Slider → Accuracy/Precision/Recall live |
| `prompt-builder` | – | Prompt aus Rolle/Kontext/Aufgabe/Format/Grenzen bauen, Qualitätsmeter |
| `rag-pipeline` | – | Animierte RAG-Pipeline mit Beispiel-Frage |
| `agent-loop` | – | Agenten-Schleife Plan→Tool→Beobachten schrittweise |
| `workflow-builder` | – | n8n-ähnlicher Workflow-Baukasten mit animiertem Testlauf |
| `token-calculator` | – | Kosten-/Energie-Schätzer für KI-Workflows pro Monat |
| `adkar-check` | – | ADKAR-Selbstcheck für ein Veränderungsvorhaben |

### Pixel-Video-Szenen (`video.scene`)

`intro`, `ki`, `daten`, `strategie`, `prozess`, `risiko`, `n8n`, `rag`, `change`, `kpi`, `outro`

## Fragetypen (`quiz[]` und `quickcheck`)

```js
{ type: 'single', q: 'Frage?', options: ['A','B','C','D'], answer: 1, explain: 'Warum …' }
{ type: 'multi',  q: 'Welche …? (Mehrfachauswahl)', options: [...], answer: [0,2], explain: '…' }
{ type: 'tf',     q: 'Aussage …', answer: true, explain: '…' }
{ type: 'order',  q: 'Bringe in die richtige Reihenfolge', items: ['Schritt 1','Schritt 2','…'], explain: '…' } // items in KORREKTER Reihenfolge, wird gemischt
{ type: 'match',  q: 'Ordne zu', pairs: [['Begriff','Definition'], …], explain: '…' }   // 3–5 Paare
{ type: 'cloze',  q: 'Lückentext', text: 'Garbage in, {{garbage}} out.', explain: '…' } // {{lösung|alternative}}
```
Jede Frage braucht `explain` (Lernerklärung, gern mit Skript-/Quellenbezug).

## Übungsaufgaben (`exercises[]`)

```js
{
  id: 'm01-e1',
  title: 'Datenqualität im eigenen Betrieb',
  scenario: 'md – Praxisszenario',
  task: 'md – was genau zu tun ist',
  deliverable: 'Was abgegeben wird (z. B. 150–300 Wörter, Tabelle …)',
  template: 'optionaler Starttext/Gliederung für das Eingabefeld',
  rubric: [   // dient Offline-Feedback (Keyword-Abgleich) UND der KI als Bewertungsraster
    { criterion: 'Benennt mindestens drei Qualitätskriterien', keywords: ['vollständig','aktuell','konsistent','genau','relevant'], min: 3, hint: 'Leitfrage, falls fehlt' }
  ],
  hints: ['Tipp 1 (sanft)', 'Tipp 2 (konkreter)', 'Tipp 3 (fast Lösung)'],
  sample: 'md – Musterlösung (wird erst nach eigenem Versuch gezeigt)'
}
```
`keywords` sind Kleinbuchstaben-Wortstämme (Teilstring-Match), `min` = wie viele davon mindestens vorkommen sollen (Standard 1).

## Quellen (`sources[]`)

```js
{ title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', publisher: 'EUR-Lex', year: 2024, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' }
```
`type`: `Gesetz` | `Norm` | `Studie` | `Leitfaden` | `Doku` | `Artikel` | `Fachbuch` | `Tool` | `Video` | `Paper`.
**Jede URL muss vor dem Eintragen geprüft werden** (erreichbar, Inhalt passt). Keine erfundenen Zahlen:
jede konkrete Zahl/Behauptung in Praxisbeispielen braucht eine Quelle oder wird als fiktives Beispiel gekennzeichnet.
