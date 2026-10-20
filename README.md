# velpTEC Lernplattform · Weiterbildung KI-Management

Interaktive Lernplattform zur geförderten Weiterbildung **KI-Management** (velpTEC).
Sie läuft komplett statisch im Browser (kein Server, kein Build, keine Datenbank) und funktioniert **vollständig ohne KI**.
KI-Unterstützung ist optional und wird von den Lernenden in den Einstellungen mit eigenem API-Key aktiviert.

## Funktionen

| Bereich | Was es gibt |
|---|---|
| **12 Module** | 8 Module auf Basis des Original-Handouts „KI-Management kompakt“ + 4 neue Module, die im Handout fehlen: Generative KI & LLMs, **Automatisierung & KI-Agenten mit n8n**, KI-Werkzeugkasten (Open Source, lokale Modelle, Vibe Coding), Nachhaltigkeit & Kosten |
| **Praxisbezug** | Jede Lektion enthält mindestens einen Praxisfall (fiktive Mittelstandsbeispiele oder reale, belegte Fälle) |
| **Originaldokument** | `docs/Handout-KI-Management.pdf` ist eingebunden (Viewer + Download); jede Lektion verweist mit Kapitel und Seite darauf. Wo das Handout veraltet ist (z. B. EU AI Act), gibt es markierte **Aktualisierungen** mit Belegen |
| **Quellen** | Überprüfbare Quellen je Modul (Gesetze, Normen, Studien, offizielle Dokus) + Gesamtverzeichnis; Linkprüfung per `npm run links` |
| **Interaktiv** | 14 Widgets (u. a. AI-Act-Klassifizierer, n8n-Workflow-Baukasten, Agenten-Schleife, RAG-Pipeline, Konfusionsmatrix, ROI- und Token-Rechner, Use-Case-Matrix, ADKAR-Check), Lernkarten, animierte Schrittfolgen, Zeitstrahlen |
| **Quiz** | 6 Fragetypen (Single/Multi-Choice, Richtig/Falsch, Reihenfolge, Zuordnung, Lückentext) mit Erklärung zu jeder Antwort, Quick-Checks in Lektionen, Tagesfrage |
| **Gamification** | XP, 11 Level, 16 Badges, Lernserie, **Wissens-Sprint** (90 s), **Rangliste** (lokale Profile, teilbare Score-Karten, optional Online-Rangliste per n8n-Webhook), gelegentlicher Konfetti-Regen |
| **Video** | **Pixel-Motion-Graphic-Film** (~1:50), komplett aus Code: eigener 5×7-Bitmap-Font, Sprites als Zeichenketten, Szenen als Zeitfunktionen, synthetisierter Chiptune-Soundtrack. Im Browser abspielbar (mit Kapiteln, Szenen auch in Lektionen), als WebM aufnehmbar, als MP4 vorgerendert (`media/`). Dazu geprüfte YouTube-Videos (Zwei-Klick-Lösung, youtube-nocookie) |
| **Übungen** | Praxisszenario, Aufgabe, Bewertungsraster, gestufte Tipps, Offline-Check (Rubrik-Abgleich), Dateianhang (PDF/DOCX …), Musterlösung erst nach Abgabe |
| **KI-Feedback (optional)** | Formatives Feedback je Kriterium + Nachfrage-Dialog; der Coach „Pixel“ führt mit Leitfragen hin statt vorzusagen. Ohne KI: Offline-Suche im Kursmaterial |
| **Eigene Lektionen** | Übungsdokumente hochladen (PDF, DOCX, PPTX, XLSX, ODT, TXT, MD, HTML) → neue Lektion mit Kernaussagen, Merksatz, Lernkarten, Quiz und Transferaufgabe. Offline per Textanalyse oder mit KI; als JSON teil- und importierbar |
| **Design** | Hell/Dunkel/Auto, ruhiges Indigo (Fokus) + warmes Amber (Motivation), responsiv, Tastaturbedienung, `prefers-reduced-motion` |

## KI-Anbieter (optional)

Einstellungen → „KI-Unterstützung“: Anbieter wählen, Modell, API-Key. Der Key wird **nur im localStorage** des Browsers gespeichert und direkt an den Anbieter gesendet (kein Zwischenserver).

| Anbieter | Standardmodell | Hinweis |
|---|---|---|
| Anthropic Claude | `claude-haiku-5-5` | Standard für textbasierte Interaktion |
| OpenAI | `gpt-6-luna` | |
| Google Gemini | `gemini-3.8-flash` | |
| OpenAI-kompatibel | frei | z. B. LM Studio (`http://localhost:1234/v1`) oder Ollama (`http://localhost:11434/v1`) – Daten bleiben lokal |

Modellnamen ändern sich – „Verfügbare Modelle laden“ fragt die aktuelle Liste beim Anbieter ab.

## Starten

```bash
npm start            # http://localhost:8080 (oder: node tools/static-server.mjs 8080)
```

Die Seite muss über einen Webserver laufen (ES-Module), nicht per Doppelklick. Für den Einsatz reicht jedes statische Hosting (GitHub Pages, Netlify, Moodle-Dateiablage mit Webserver …). Ein GitHub-Pages-Workflow liegt unter `.github/workflows/pages.yml` (in den Repository-Einstellungen „Pages → Source: GitHub Actions“ aktivieren).

## Entwicklung

```bash
npm run validate     # Inhaltsmodule gegen docs/CONTENT_SCHEMA.md prüfen
npm test             # End-to-End-Test in Headless-Chromium (Playwright)
npm run links        # Alle Quellen-Links und YouTube-IDs prüfen
npm run video        # Pixel-Film als MP4 rendern (benötigt ffmpeg + Playwright)
```

### Struktur

```
index.html                  App-Shell
assets/css/                 Design-Tokens (hell/dunkel), Komponenten, Widget-Styles
assets/js/app.js            Routing, Navigation, Onboarding
assets/js/ai.js             Anbieterneutrale KI-Schnittstelle + Tutor-Prompts
assets/js/quiz.js           Quiz-Engine
assets/js/exercise.js       Übungen, Offline-Check, KI-Feedback
assets/js/generator.js      Lektionen aus Dokumenten (offline/KI)
assets/js/extract.js        Textextraktion (PDF via vendor/pdfjs, Office via ZIP/XML)
assets/js/video/            Pixel-Engine, Szenen, Chiptune, Player
assets/js/widgets/          14 interaktive Widgets
content/course.js           Kursindex + Handout-Kapitelzuordnung
content/modules/m01–m12.js  Lerninhalte (Schema: docs/CONTENT_SCHEMA.md)
docs/                       Original-Handout (PDF), Inhaltsschema, n8n-Vorlage Rangliste
media/                      Vorgerendertes MP4 des Pixel-Films
tools/                      Validator, Linkprüfer, Video-Renderer, statischer Server
tests/                      E2E-Test, Widget-Testseite
```

### Inhalte erweitern

Neues Modul als `content/modules/mXX.js` nach `docs/CONTENT_SCHEMA.md` anlegen, die ID in `content/course.js` (`MODULE_IDS`) eintragen und `npm run validate` ausführen.

### Online-Rangliste mit n8n (optional)

`docs/n8n-rangliste-workflow.json` in n8n importieren, aktivieren und die Produktions-Webhook-URL in den Einstellungen der Plattform eintragen. Der Workflow nimmt Score-Karten per POST an und liefert sie per GET zurück (Speicherung in den statischen Workflow-Daten, nur im aktiven Workflow persistent). Die Vorlage ist ein Startpunkt und sollte in der eigenen n8n-Instanz getestet werden.

## Datenschutz

- Lernfortschritt, Profile und eigene Lektionen bleiben im Browser (localStorage/IndexedDB). Sicherung/Wiederherstellung in den Einstellungen.
- Ohne aktivierte KI werden keine Inhalte an Dritte übertragen. Externe Ressourcen: Google Fonts (Pixel-Schrift) und YouTube erst nach Klick.
- Mit aktivierter KI gehen Eingaben an den gewählten Anbieter – keine personenbezogenen oder vertraulichen Daten eingeben.

## Lizenzen & Quellen

- Handout „KI-Management kompakt“: © Zeitlmann & Wilhelm KIsruptiv GbR.
- pdf.js 4.10.38 (Mozilla, Apache-2.0) unverändert unter `vendor/pdfjs/`.
- Alle übrigen Inhalte und der Code wurden für diese Plattform erstellt; externe Quellen sind in den Modulen verlinkt.
