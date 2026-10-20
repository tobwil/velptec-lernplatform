// Kapitel 2 – KI-Anwendungsfälle erkennen und bewerten (Theorieskript K7.0069, S. 29–51)
export default {
  id: 'k2',
  order: 2,
  title: 'KI-Anwendungsfälle erkennen und bewerten',
  subtitle: 'Chancen entdecken, bewerten, Business Case rechnen, Erfolg messen und das Portfolio priorisieren',
  icon: 'target',
  chapter: 2,
  isNew: false,
  minutes: 140,
  skript: [
    { chapter: '2', title: 'KI-Anwendungsfälle erkennen und bewerten', page: 29 },
    { chapter: '2.1', title: 'KI-Chancen entdecken', page: 30 },
    { chapter: '2.2', title: 'Bewertungsmethoden und Kriterien', page: 34 },
    { chapter: '2.3', title: 'ROI-Analyse und Business-Case-Entwicklung', page: 38 },
    { chapter: '2.4', title: 'Erfolgskennzahlen und KPIs', page: 43 },
    { chapter: '2.5', title: 'Portfoliopriorisierung und Reihenfolgeplanung', page: 47 },
  ],
  objectives: [
    'Du findest KI-Chancen systematisch mit dem 5P-Framework, der Jobs-to-be-Done-Methode und bereichsübergreifenden Pain-Point-Workshops – problemorientiert statt technologiegetrieben.',
    'Du bewertest Anwendungsfälle nach geschäftlicher Wirkung, technischer Machbarkeit und strategischer Passung, unter anderem mit dem AI Use Case Canvas und der Wirkungs-Machbarkeits-Matrix.',
    'Du berechnest den ROI eines KI-Vorhabens über drei Jahre, unterscheidest harten und weichen ROI und baust einen überzeugenden Business Case.',
    'Du legst SMART-Kennzahlen fest, unterscheidest Früh- und Spätindikatoren, misst eine Baseline und baust ein dreistufiges Kennzahlensystem.',
    'Du priorisierst ein KI-Portfolio mit gewichtetem Scoring, wählst ein Verteilungsmodell und planst die Umsetzung in Wellen unter Berücksichtigung von Abhängigkeiten.',
  ],
  lessons: [
    // ───────────────────────── 2.1 ─────────────────────────
    {
      id: 'k2-l1',
      title: '2.1 KI-Chancen entdecken',
      minutes: 30,
      skript: { chapter: '2.1', page: 30 },
      blocks: [
        { type: 'video', scene: 'strategie' },
        {
          type: 'text',
          md: `Gute Use Cases fallen selten vom Himmel. Sie entstehen dort, wo ein **echtes Geschäftsproblem** (Zeitfresser, Fehler, Wartezeiten, Medienbrüche) auf **Daten** und eine passende **KI-Fähigkeit** trifft. In diesem Abschnitt lernst du die Methoden, mit denen du solche Stellen systematisch findest, statt der Technologie hinterherzulaufen.`,
        },
        {
          type: 'skript',
          chapter: '2.1',
          page: 30,
          quote: 'Erfolgreiche KI-Einführung beginnt mit dem Problem, nicht mit der Technologie.',
          md: `**Kernaussagen des Abschnitts (S. 30–34):**

- **KI-Chancen entdecken** heißt, systematisch Geschäftsprobleme und Abläufe zu finden, in denen KI messbaren Mehrwert schafft. Ohne fundierte Bestandsaufnahme entstehen „Lösungen, die ein Problem suchen“. Das Skript verweist auf Gartner (85 % der KI-Projekte mit fehlerhaften Ergebnissen bis 2022) und sieht die Ursache oft in einer schlechten Problemauswahl.
- **5P-Framework:** fünf Blickwinkel auf das Geschäft – *Purpose* (strategische Ziele), *People* (Bedürfnisse der Beteiligten), *Process* (operative Abläufe), *Platform* (vorhandene Technologie), *Performance* (messbare Ergebnisse).
- **Jobs-to-be-Done** (Clayton Christensen): Welche Aufgabe will jemand eigentlich erledigen – funktional, emotional, sozial? Der „Job“ einer Servicekraft ist nicht „Telefonate annehmen“, sondern „Kundenprobleme effizient lösen und Zufriedenheit sichern“. Daraus werden Chancen wie intelligente Weiterleitung, Stimmungsanalyse oder Lösungsvorschläge sichtbar.
- **Bereichsübergreifend suchen:** Der größte Nutzen liegt oft an **Schnittstellen**. Ein Workshop mit Vertrieb, Betrieb, Finanzen, Kundenservice und IT kartiert Abläufe und Reibungsverluste.
- **Fünf Signale für KI-Potenzial:** viele wiederkehrende Aufgaben, Entscheidungen auf Basis großer Datenmengen, schwankende Qualität, Personalisierungsbedarf in Kundeninteraktionen, Prognosebedarf (z. B. Bedarfsplanung).
- **Typische Muster** nach Bereich: Vertrieb & Marketing, Betrieb, Kundenservice, Finanzen, Personal – jeweils mit eigenen Werttreibern.
- **Die Basis einbeziehen:** Beschäftigte und mittleres Management kennen die Prozessschwächen aus erster Hand. Workshops nur mit dem Top-Management übersehen oft die wertvollsten Chancen.
- **Problemorientiert schlägt technologieorientiert:** „Wo können wir KI einsetzen?“ ist die falsche Frage. Besser: „Welche Probleme verursachen die größten Reibungsverluste oder Opportunitätskosten?“
- **„KI-Tourismus“ vermeiden:** nicht bloß zum Ausprobieren in unwichtigen Bereichen experimentieren. Auch kleine Erfolge sollen echte Probleme lösen.
- **Beispiel Walmart:** Filialleitungen nannten wiederholt das Problem, die lokale Nachfrage vorherzusagen. Die daraus entstandene KI-gestützte Sortimentsoptimierung senkte laut Skript den Überbestand um 15 %.`,
        },
        {
          type: 'table',
          caption: 'Das 5P-Framework als Workshop-Raster',
          head: ['P', 'Leitfrage', 'Beispiel (Handwerksbetrieb)'],
          rows: [
            ['**Purpose** – strategische Ziele', 'Welche Unternehmensziele sind für die nächsten 2–3 Jahre entscheidend?', 'Wachstum bei Wartungsverträgen trotz Fachkräftemangel'],
            ['**People** – Beteiligte', 'Was brauchen Kundschaft, Beschäftigte, Partner? Wo sind sie frustriert?', 'Kundschaft wartet auf Rückruf, Büro jongliert Termine'],
            ['**Process** – Abläufe', 'Wo gibt es Wartezeiten, Schleifen, Medienbrüche, Fehler?', 'Monteursberichte werden abgetippt'],
            ['**Platform** – Technologie', 'Welche Systeme und Daten haben wir, was lässt sich anbinden?', 'Branchensoftware mit Schnittstelle, Wartungshistorie seit 2019'],
            ['**Performance** – Ergebnisse', 'Woran messen wir Erfolg, und wo liegen wir heute?', 'Angebotsdurchlaufzeit, Erstlösungsquote im Service'],
          ],
        },
        {
          type: 'text',
          md: `### Jobs-to-be-Done: hinter die Tätigkeit schauen

Die Methode stellt eine einfache Frage: **Welchen „Job“ will diese Person erledigen?** Unterschieden werden drei Ebenen:

- **funktional:** Was soll sachlich erreicht werden? („Störung beim Kunden schnell beheben“)
- **emotional:** Wie will sich die Person dabei fühlen? („sicher, nichts zu übersehen“)
- **sozial:** Wie will sie wahrgenommen werden? („als kompetente Ansprechperson“)

Ein Servicetechniker „liest Handbücher“, sein eigentlicher Job ist aber „beim ersten Besuch die richtige Lösung finden“. Damit wird ein Wissensassistent mit Quellenangabe zur Chance, nicht ein „Handbuch-Digitalisierungsprojekt“.`,
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Vorbereiten', md: 'Einen Ablauf über Abteilungsgrenzen auswählen (z. B. „Vom Kundenanruf bis zur Rechnung“), 5–8 Beteiligte **aller Ebenen** einladen, vorhandene Kennzahlen mitbringen.' },
            { title: '2 · Ablauf kartieren', md: 'Gemeinsam den Ist-Prozess skizzieren: Schritte, Systeme, Übergaben, Dokumente. Besonders auf **Schnittstellen** achten.' },
            { title: '3 · Reibungsverluste markieren', md: 'Jede Person markiert Zeitfresser, Fehlerquellen, Wartezeiten und Medienbrüche, mit kurzer Schätzung „Wie oft? Wie lange?“.' },
            { title: '4 · Signale prüfen', md: 'Trifft eines der fünf Signale aus dem Skript zu (Menge, datenreiche Entscheidung, schwankende Qualität, Personalisierung, Prognose)?' },
            { title: '5 · KI-Muster zuordnen', md: '**Klassifizieren** (E-Mails sortieren), **Extrahieren** (Daten aus Dokumenten), **Vorhersagen** (Ausfälle, Nachfrage), **Generieren** (Texte, Angebote), **Suchen & Zusammenfassen** (Wissen finden), **Optimieren** (Touren, Pläne).' },
            { title: '6 · Ideen festhalten', md: 'Für jede vielversprechende Idee Problem, Betroffene, Daten und grobe Wirkung notieren. Die Bewertung folgt in Abschnitt 2.2.' },
          ],
        },
        {
          type: 'table',
          caption: 'Typische KI-Anwendungsfälle nach Geschäftsbereich (nach Skript S. 32–33)',
          head: ['Geschäftsbereich', 'Typische Anwendungsfälle', 'Werttreiber'],
          rows: [
            ['Vertrieb & Marketing', 'Lead-Scoring, personalisierte Inhalte, Abwanderungsprognose', 'Umsatzwachstum, höhere Konversion'],
            ['Betrieb', 'Bedarfsprognose, Qualitätskontrolle, Prozessoptimierung', 'Kostensenkung, Effizienz'],
            ['Kundenservice', 'Chatbots, Stimmungsanalyse, intelligente Weiterleitung', 'Zufriedenheit, Kosten pro Kontakt'],
            ['Finanzen', 'Betrugserkennung, Spesenautomatisierung, Risikobewertung', 'Risikominderung, Prozesseffizienz'],
            ['Personalwesen', 'Lebenslauf-Screening, Bindungsprognose, Kompetenzabgleich', 'Einstellungsqualität, Mitarbeiterbindung'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Achtung Hochrisiko',
          md: `Nicht jede Idee aus der Tabelle ist gleich unkritisch: **Lebenslauf-Screening** und andere KI-Systeme für Einstellung und Personalentscheidungen gelten nach dem EU AI Act als **Hochrisiko-Systeme** (Anhang III). Solche Ideen brauchen von Anfang an eine rechtliche Prüfung (Kapitel 5).`,
        },
        {
          type: 'table',
          caption: 'Zwei Denkweisen bei der Chancensuche',
          head: ['', 'Technologieorientiert', 'Problemorientiert'],
          rows: [
            ['Startfrage', '„Wo können wir KI einsetzen?“', '„Welche Probleme kosten uns am meisten Zeit, Geld oder Kundschaft?“'],
            ['Typisches Ergebnis', 'Chatbot, weil die Konkurrenz einen hat', 'Lösung für einen gemessenen Engpass'],
            ['Risiko', 'Lösung sucht Problem, „KI-Tourismus“', 'Manche Probleme brauchen gar keine KI (und das ist ein gutes Ergebnis)'],
            ['Erfolgsaussicht laut Skript', 'deutlich geringer', 'deutlich höher'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Process Mining als objektive Ideenquelle',
          md: `Neben Workshops hilft **Process Mining**: Es rekonstruiert aus den Zeitstempeln in IT-Systemen (z. B. „Auftrag angelegt“, „Angebot versendet“, „Rechnung gebucht“), **wie Abläufe tatsächlich laufen**, mit Schleifen, Wartezeiten und Abweichungen. Das liefert gleich die Baseline für die spätere Erfolgsmessung (Abschnitt 2.4). Grundlagen beschreibt das *Process Mining Manifesto* der IEEE Task Force on Process Mining.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Die Gartner-Zahl richtig einordnen',
          md: `Das Skript schreibt, Gartner-Untersuchungen „zeigen“, dass 85 % der KI-Projekte bis 2022 fehlerhafte Ergebnisse lieferten. Tatsächlich war das eine **Prognose aus dem Jahr 2018**: Gartner sagte voraus, dass bis 2022 85 % der KI-Projekte fehlerhafte Ergebnisse liefern würden, verursacht durch Verzerrungen in Daten, Algorithmen oder den verantwortlichen Teams. Die Zahl wird oft fälschlich als „85 % der KI-Projekte scheitern“ zitiert.

Belastbarer für die Praxis ist die BCG-Studie „Where’s the Value in AI?“ (Oktober 2024): Nur **22 %** der befragten Unternehmen waren über den Proof of Concept hinaus und erzeugten einen gewissen Wert, nur **4 %** substanziellen Wert. Die Kernbotschaft des Skripts bleibt richtig: Sorgfältige Problemauswahl ist erfolgsentscheidend.`,
          sources: [
            { title: 'ITWeb (14.02.2018): Four AI deployment lessons from Gartner', url: 'https://www.itweb.co.za/article/four-ai-deployment-lessons-from-gartner/mQwkoM6K3XLq3r9A' },
            { title: 'BCG (2024): Where’s the Value in AI?', url: 'https://www.bcg.com/publications/2024/wheres-value-in-ai' },
          ],
        },
        {
          type: 'praxis',
          title: 'KI im Brustkrebs-Screening: ein echtes Problem zuerst',
          company: 'Deutsches Mammographie-Screening-Programm, 12 Screening-Standorte (reales Beispiel)',
          scenario: `Das Problem war klar und gemessen: Im Screening sollen möglichst viele Tumoren früh entdeckt werden, ohne dass Fehlalarme und unnötige Wiedereinbestellungen zunehmen. In der bislang größten Real-World-Studie zu KI im Mammographie-Screening wurden zwischen Juli 2021 und Februar 2023 insgesamt **463.094 Frauen** an 12 Standorten untersucht, davon 260.739 mit KI-Unterstützung. **119 Radiologinnen und Radiologen** entschieden selbst, ob sie das KI-System nutzen. Mit KI lag die Entdeckungsrate bei **6,7 pro 1.000** Frauen, ohne KI bei 5,7, also **17,6 % mehr**. Die Rate der Wiedereinbestellungen stieg nicht (37,4 vs. 38,3 pro 1.000).`,
          steps: [
            'Problemorientiert: Ausgangspunkt war ein gemessener Engpass in der Kernaufgabe (Entdeckungsrate), nicht der Wunsch, „KI auszuprobieren“.',
            'Jobs-to-be-Done: Der Job der Radiologin ist nicht „Bilder anschauen“, sondern „keinen Tumor übersehen, ohne Frauen unnötig zu beunruhigen“. Genau darauf zielt die KI-Unterstützung.',
            'Die Basis einbeziehen: Die Fachleute entschieden selbst über den Einsatz. Das schafft Akzeptanz.',
            'Wirkung und Nebenwirkung zusammen betrachten: mehr Entdeckungen *und* keine Zunahme von Fehlalarmen.',
            'Übertrag: Formuliere jede KI-Chance als Problem mit Kennzahl und Gegen-Kennzahl, bevor du über Technik sprichst.',
          ],
          takeaway: `Die besten KI-Chancen setzen an einem **gemessenen Problem in der Kernarbeit** an und lassen den Menschen in der Verantwortung.`,
          source: { title: 'Eisemann et al. (2025): Nationwide real-world implementation of AI for cancer detection in population-based mammography screening, Nature Medicine', url: 'https://www.nature.com/articles/s41591-024-03408-6' },
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Finanzwesen: Commerzbank „Ava“', back: '**Problem:** viele Standardanliegen in der Banking-App. **Lösung:** KI-Avatar auf Basis von Microsoft-Azure-KI, der Serviceanfragen in natürlicher Sprache beantwortet und komplexere Anliegen an das Kundencenter weitergibt. **Lehre:** schrittweiser Roll-out, klare Übergabe an Menschen.' },
            { front: 'Handel: Zalando Assistant', back: '**Problem:** Kundschaft findet in riesigen Sortimenten nicht das Passende. **Lösung:** KI-Modeberatung aus eigenen Modellen und Sprachmodellen von OpenAI, seit 1. Oktober 2024 in allen 25 Märkten (zunächst als Beta). **Lehre:** erst testen, dann skalieren.' },
            { front: 'Industrie: Siemens × Schaeffler', back: '**Problem:** SPS-Programmierung ist aufwendig, Fachkräfte fehlen. **Lösung:** Der Industrial Copilot im TIA Portal erzeugt Steuerungscode aus natürlicher Sprache. **Lehre:** KI-Chancen liegen auch im Engineering, nicht nur in Texten.' },
          ],
        },
        {
          type: 'praxis',
          title: 'Pain-Point-Workshop „Vom Anruf bis zur Rechnung“',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Du moderierst einen halbtägigen Workshop mit Disposition, Kundendienst, zwei Monteuren, Buchhaltung und IT. Ziel: eine Ideenliste für KI-Chancen, die auf echten Problemen beruht.`,
          steps: [
            'Du nutzt das 5P-Raster: Purpose (Wachstum bei Wartungsverträgen), People (Kundschaft wartet auf Rückruf), Process, Platform, Performance.',
            'Ihr kartiert den Ist-Prozess: Anruf/E-Mail → Termin → Einsatz → Material → Angebot/Rechnung. Die Monteure ergänzen Schritte, die im Büro niemand kannte.',
            'Am häufigsten markiert: E-Mails von Hand verteilen, Angebote aus drei Systemen zusammensuchen, Monteursberichte abtippen, Fehlercodes telefonisch im Büro erfragen.',
            'Ihr ordnet Signale und KI-Muster zu: große Menge wiederkehrender Aufgaben (E-Mails → Klassifizieren), Wissensfragen (Fehlercodes → Suchen & Zusammenfassen), Dokumente (Angebote → Generieren/Extrahieren), Prognosebedarf (Ausfälle → Vorhersagen).',
            'Du hältst sechs Ideen mit Problem, Betroffenen, Daten und grob geschätzter Häufigkeit fest. Bewertet wird in einem zweiten Termin (Abschnitt 2.2).',
          ],
          takeaway: `Die wertvollsten Ideen kommen oft **von der Basis** und von den **Schnittstellen**. Deine Aufgabe ist Struktur: Methoden anwenden, Muster erkennen, sauber dokumentieren.`,
        },
        {
          type: 'links',
          title: 'Werkzeuge und Weiterlesen',
          items: [
            { title: 'KI-Landkarte der Plattform Lernende Systeme', url: 'https://www.plattform-lernende-systeme.de/ki-landkarte.html', note: 'Hunderte KI-Anwendungsbeispiele aus Deutschland, filterbar nach Branche' },
            { title: 'Know Your Customers’ “Jobs to Be Done” (Harvard Business Review, 2016)', url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done', note: 'Der Grundlagenartikel von Clayton Christensen und Kollegen (Englisch)' },
            { title: 'Process Mining Manifesto (IEEE Task Force on Process Mining)', url: 'https://www.tf-pm.org/resources/manifesto', note: 'Grundlagen und Leitprinzipien des Process Mining' },
            { title: 'Commerzbank startet Banking-Avatar auf Basis künstlicher Intelligenz', url: 'https://www.commerzbank.de/konzern/newsroom/pressemitteilungen/avatar.html', note: 'Pressemitteilung der Commerzbank' },
            { title: 'Zalando brings its AI-powered assistant to all markets', url: 'https://corporate.zalando.com/en/node/10667', note: 'Pressemitteilung vom 1. Oktober 2024 (Englisch)' },
            { title: 'AI for industry: Schaeffler and Siemens bring Industrial Copilot to shop floor (PDF)', url: 'https://assets.new.siemens.com/siemens/assets/api/uuid:35d7d519-ce50-465a-b0f8-6aa3dfcd1b8c/HQDIPR202311076808EN.pdf', note: 'Siemens-Pressemitteilung vom 14. November 2023 (Englisch)' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die 5P-Dimension der passenden Leitfrage zu.',
          pairs: [
            ['Purpose', 'Welche strategischen Ziele verfolgen wir?'],
            ['People', 'Was brauchen Kundschaft und Beschäftigte?'],
            ['Process', 'Wo hakt es in den operativen Abläufen?'],
            ['Platform', 'Welche Technologie und Daten sind vorhanden?'],
            ['Performance', 'Welche messbaren Ergebnisse zählen?'],
          ],
          explain: 'Das 5P-Framework deckt strategische, operative und technische Aspekte gleichzeitig ab (Skript S. 30–31).',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Frage ist laut Skript typisch für den erfolgreicheren, problemorientierten Ansatz?',
          options: ['„Wo können wir KI einsetzen?“', '„Welche Geschäftsprobleme verursachen die größten Reibungsverluste oder Opportunitätskosten?“', '„Welches KI-Tool ist gerade im Trend?“', '„Was hat die Konkurrenz gekauft?“'],
          answer: 1,
          explain: 'Der problemorientierte Ansatz startet beim Geschäftsproblem und prüft dann, ob KI passt. Er ist laut Skript deutlich häufiger erfolgreich (S. 33).',
        },
      ],
    },

    // ───────────────────────── 2.2 ─────────────────────────
    {
      id: 'k2-l2',
      title: '2.2 Bewertungsmethoden und Kriterien',
      minutes: 28,
      skript: { chapter: '2.2', page: 34 },
      blocks: [
        {
          type: 'text',
          md: `Nach dem Workshop liegt eine Liste mit Ideen auf dem Tisch. Jetzt kommt die unbequemere Aufgabe: **Welche verdienen Geld und Zeit, welche werden zurückgestellt, welche verworfen?** Ohne Methode entscheidet die lauteste Stimme. Mit Methode entscheidet die Sache.`,
        },
        {
          type: 'skript',
          chapter: '2.2',
          page: 34,
          quote: 'Eine wirksame Bewertung von KI-Anwendungsfällen berücksichtigt drei entscheidende Dimensionen: geschäftliche Wirkung (Wertschöpfungspotenzial), technische Machbarkeit (Umsetzbarkeit) und strategische Passung',
          md: `**Kernaussagen des Abschnitts (S. 34–38):**

- **Warum systematisch?** Ohne Methode treiben Begeisterung der Geschäftsleitung, Abteilungspolitik oder Hype die Entscheidungen. Laut Skript (Deloitte 2024) erzielten Unternehmen mit formalen Bewertungsmethoden einen 2,3-mal höheren ROI.
- **Drei Dimensionen:** geschäftliche Wirkung, technische Machbarkeit, strategische Passung.
- **AI Use Case Canvas:** aus dem Business Model Canvas abgeleitet, mit **neun Elementen** – Geschäftsproblem, Erfolgskennzahlen, Datenanforderungen, KI-Ansatz, technische Machbarkeit/Architektur, Teamkompetenzen, Zeitplan, Kosten, Nutzen. Es macht verborgene Annahmen und Hindernisse sichtbar.
- **Wirkungs-Machbarkeits-Matrix:** Wirkung (vertikal) × Umsetzbarkeit (horizontal) ergibt vier Felder: **schnelle Erfolge** (zuerst), **strategische Wetten** (hohe Wirkung, schwierig), **zurückstellen** (geringe Wirkung, leicht), **vermeiden** (geringe Wirkung, komplex).
- **Bereichsübergreifend bewerten:** Data Scientists und operative Führungskräfte schätzen Machbarkeit unterschiedlich ein; beide Sichten zählen.
- **Strategische Passung:** Unterstützt das Vorhaben unsere wichtigsten Ziele? Gibt es Rückhalt der Geschäftsleitung? Haben wir Zugriff auf die Daten? Haben oder entwickeln wir die Kompetenzen? Passt es zur Risikobereitschaft und zu den Planungszyklen?
- **Technische Machbarkeit:** Datenverfügbarkeit und -qualität, Lösbarkeit mit heutiger KI (anderswo schon gelöst?), Infrastrukturbereitschaft, Integrationsaufwand.
- **Datenbereitschaft** ist das häufigste Hindernis. Fragen: Werden die Daten erhoben, wo liegen sie, wie gut sind sie, dürfen wir sie rechtlich und ethisch nutzen, wie viel Aufbereitung ist nötig? Faustregel: **60–80 % der Projektzeit** fließen in Datenaufbereitung.
- **Beispiel Versicherung:** hohe Wirkung bei mittlerer Machbarkeit wegen uneinheitlicher Schadendaten; erst sechs Monate Datenvereinheitlichung, dann die KI-Lösung, die die Einsparungen erreichte.
- **Typische Fehler:** Neuheit statt Nutzen, Veränderungsaufwand unterschätzt, Datenschutz und Ethik vergessen, nur Technik statt Passung geprüft, keine Erfolgskennzahlen vorab.
- **Tipp:** gewichtete Bewertungsbögen passend zu den Unternehmensprioritäten (risikoscheu: Compliance stark gewichten; Start-up: Geschwindigkeit).`,
        },
        {
          type: 'table',
          caption: 'Das AI Use Case Canvas am fiktiven Beispiel „Angebots-Assistent“ (Müller Haustechnik, alle Werte Annahmen)',
          head: ['Element', 'Leitfrage', 'Beispiel'],
          rows: [
            ['1 · Geschäftsproblem', 'Welches konkrete Problem besteht?', 'Angebote dauern im Schnitt mehrere Tage, weil Daten aus drei Systemen gesucht werden'],
            ['2 · Erfolgskennzahlen', 'Woran messen wir Erfolg?', 'Durchlaufzeit Anfrage → Angebot halbieren, Zeit pro Angebot −20 min'],
            ['3 · Datenanforderungen', 'Welche Daten brauchen wir?', 'Artikelstamm, Textbausteine, frühere Angebote, Kundendaten'],
            ['4 · KI-Ansatz', 'Welche Art von KI?', 'Generativ (Textentwurf) plus Extraktion aus Anfragen'],
            ['5 · Technische Machbarkeit', 'Können wir das umsetzen?', 'KI-Funktion der Branchensoftware vorhanden, Schnittstelle zum Artikelstamm nötig'],
            ['6 · Teamkompetenzen', 'Welche Fähigkeiten brauchen wir?', 'Fachlicher Owner im Büro, IT für Integration, Anbieter-Support'],
            ['7 · Zeitplan', 'Wann entsteht Nutzen?', '6 Wochen Pilot, 3 Monate bis Regelbetrieb'],
            ['8 · Kosten', 'Was kostet es?', '15.000 € einmalig, 600 €/Monat (siehe Abschnitt 2.3)'],
            ['9 · Nutzen', 'Welcher Wert entsteht?', 'Rund 40 Stunden Bürozeit pro Monat, schnellere Auftragsvergabe'],
          ],
        },
        {
          type: 'interactive',
          widget: 'usecase-matrix',
          props: {
            cases: [
              { name: 'Angebots-Assistent (Textbausteine + Materialliste)', impact: 4, feasibility: 4 },
              { name: 'E-Mail-Vorsortierung im Kundendienst', impact: 3, feasibility: 5 },
              { name: 'Wissensassistent für Fehlercodes', impact: 4, feasibility: 3 },
              { name: 'Ausfallprognose für gewartete Heizungsanlagen', impact: 5, feasibility: 2 },
              { name: 'Tourenplanung für Monteure', impact: 4, feasibility: 3 },
              { name: 'Website-Chatbot für allgemeine Fragen', impact: 2, feasibility: 4 },
            ],
          },
        },
        {
          type: 'text',
          md: `### Die vier Felder der Matrix

Bewerte jeden Use Case auf beiden Achsen von 1 bis 5 und schiebe ihn im Widget an seinen Platz. Die Felder heißen im Skript:

- **Schnelle Erfolge** (hohe Wirkung, hohe Machbarkeit): zuerst umsetzen
- **Strategische Wetten** (hohe Wirkung, schwierige Umsetzung): Voraussetzungen wie Daten schaffen, gezielt angehen
- **Zurückstellen** (geringe Wirkung, leichte Umsetzung): höchstens nebenbei
- **Vermeiden** (geringe Wirkung, hohe Komplexität): nicht verfolgen

In der Praxis hörst du auch „Quick Wins“, „Füller“ und „Finger weg“. Gemeint ist dasselbe.`,
        },
        {
          type: 'table',
          caption: 'Prüffragen für Passung, Machbarkeit und Datenbereitschaft (nach Skript S. 36–37)',
          head: ['Prüfbereich', 'Leitfragen'],
          rows: [
            ['**Strategische Passung**', 'Zahlt es auf unsere wichtigsten Ziele ein? Gibt es Rückhalt der Geschäftsleitung? Kommen wir an die Daten? Haben oder entwickeln wir die Kompetenzen? Passt es zur Risikobereitschaft? Passt der Zeitplan zu den Planungszyklen?'],
            ['**Technische Machbarkeit**', 'Gibt es genug genaue, vollständige historische Daten? Wurde das Problem anderswo schon mit KI gelöst? Können unsere Systeme das tragen? Wie aufwendig ist die Integration in Arbeitsabläufe?'],
            ['**Datenbereitschaft**', 'Werden die Daten schon erhoben? Wo liegen sie? Wie gut sind sie? Dürfen wir sie rechtlich und ethisch nutzen (DSGVO, Kapitel 5)? Wie viel Aufbereitung ist nötig?'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: `**60–80 % der Projektzeit stecken in den Daten, nicht im Modell.** Wer die Datenbereitschaft nicht prüft, bewertet die Machbarkeit zu optimistisch. Wie du Datenqualität konkret misst, zeigt Kapitel 3.`,
        },
        {
          type: 'table',
          caption: 'Build, Buy oder Partner? – Machbarkeit und Passung entscheiden mit (Details zur Anbieterauswahl in Kapitel 4.3)',
          head: ['Option', 'Passt, wenn …', 'Vorteile', 'Risiken'],
          rows: [
            ['**Buy** (Standardsoftware, SaaS, KI-Funktion im bestehenden System)', 'der Use Case verbreitet ist (z. B. Rechnungserfassung, Transkription, Office-Assistenz)', 'schnell, planbare Kosten, Wartung beim Anbieter', 'Abhängigkeit (Lock-in), Datenstandort, wenig Differenzierung'],
            ['**Build** (eigene Lösung, z. B. mit Open-Source-Modellen oder APIs)', 'der Use Case Kerngeschäft und Wettbewerbsvorteil ist und eigene Daten entscheidend sind', 'maximale Kontrolle, Differenzierung', 'braucht Kompetenz, Betrieb (MLOps) und langfristige Pflege'],
            ['**Partner** (Dienstleister, Hochschule, Forschungseinrichtung)', 'Kompetenz fehlt, der Use Case aber spezifisch ist', 'Know-how-Transfer, geteiltes Risiko', 'Wissen bleibt beim Partner, wenn die Übergabe nicht geplant ist'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Fünf Bewertungsfehler (Skript S. 38)',
          md: `1. Technologische **Neuheit** höher gewichten als geschäftlichen Nutzen
2. Aufwand für **Veränderungsmanagement** unterschätzen
3. **Datenschutz und Ethik** vernachlässigen
4. Nur die **technische Machbarkeit** prüfen und die strategische Passung vergessen
5. **Erfolgskennzahlen** nicht vorab festlegen`,
        },
        {
          type: 'praxis',
          title: 'Von der Ideenliste zur Entscheidungsvorlage',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Aus dem Pain-Point-Workshop (Abschnitt 2.1) liegen sechs Ideen vor. Die Geschäftsführung will in vier Wochen entscheiden, womit begonnen wird. Du organisierst die Bewertung.`,
          steps: [
            'Bewertungsteam bilden: Büroleitung (operative Sicht), IT, ein externer Berater mit Data-Science-Erfahrung und der Datenschutzbeauftragte. Keine Einzelentscheidung.',
            'Für die drei vielversprechendsten Ideen je ein AI Use Case Canvas ausfüllen. Dabei zeigt sich: Für die Ausfallprognose fehlen strukturierte Sensordaten, die Wartungshistorie liegt nur als Freitext vor.',
            'Ideen in der Matrix platzieren: Angebots-Assistent und E-Mail-Vorsortierung sind schnelle Erfolge, die Ausfallprognose ist eine strategische Wette mit vorgelagertem Datenprojekt, der Website-Chatbot wird zurückgestellt.',
            'Strategische Passung prüfen: Der Angebots-Assistent zahlt direkt auf das Ziel „mehr Aufträge trotz Fachkräftemangel“ ein, Rückhalt der Geschäftsführung ist da.',
            'Build/Buy/Partner: Angebots-Assistent als „Buy + Konfiguration“ (KI-Funktion der Branchensoftware), E-Mail-Vorsortierung als kleiner Low-Code-Workflow mit Partner.',
            'Für jede Idee vorab Erfolgskennzahlen festhalten, dann Business Case rechnen (Abschnitt 2.3).',
          ],
          takeaway: `Das Canvas zwingt zu Ehrlichkeit über Daten, Kompetenzen und Kosten. Die Matrix macht die Entscheidung **sichtbar und diskutierbar**.`,
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Use Case hat hohe Wirkung (5), aber geringe Machbarkeit (2), weil die nötigen Daten fehlen. Wie heißt das Feld laut Skript, und was ist sinnvoll?',
          options: ['Schneller Erfolg – sofort umsetzen', 'Strategische Wette – Voraussetzungen wie Daten zuerst schaffen', 'Zurückstellen – nur nebenbei', 'Vermeiden – nie verfolgen'],
          answer: 1,
          explain: 'Hohe Wirkung bei schwieriger Umsetzung ist eine strategische Wette. Wie im Versicherungsbeispiel des Skripts: erst die Daten vereinheitlichen, dann die KI-Lösung umsetzen.',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Laut Faustregel im Skript fließt der größte Teil der Projektzeit (60–80 %) in die Modellentwicklung.',
          answer: false,
          explain: 'Falsch. 60–80 % der Projektzeit fließen laut Data Scientists in die Datenaufbereitung, nicht in die Modellentwicklung (Skript S. 37).',
        },
      ],
    },

    // ───────────────────────── 2.3 ─────────────────────────
    {
      id: 'k2-l3',
      title: '2.3 ROI-Analyse und Business-Case-Entwicklung',
      minutes: 30,
      skript: { chapter: '2.3', page: 38 },
      blocks: [
        {
          type: 'text',
          md: `Ein Business Case beantwortet eine einfache Frage: **Lohnt sich das – und unter welchen Annahmen?** Bei KI ist die Antwort schwieriger als bei klassischer IT, weil Nutzen oft schrittweise kommt, Kosten laufend anfallen und manche Vorteile schwer in Euro zu fassen sind. Dieser Abschnitt gibt dir das Handwerkszeug.`,
        },
        {
          type: 'skript',
          chapter: '2.3',
          page: 38,
          quote: 'ROI = (Gesamtnutzen - Gesamtkosten) / Gesamtkosten × 100 %.',
          md: `**Kernaussagen des Abschnitts (S. 38–42):**

- **ROI-Analyse** beziffert den finanziellen Wert eines KI-Vorhabens im Verhältnis zu den Kosten und liefert die Begründung für die Freigabe. Laut Skript (McKinsey) erzielen Unternehmen, die den ROI konsequent messen, drei- bis fünfmal höhere Renditen.
- **Unterschiede zu klassischer IT:** Nutzen entfaltet sich schrittweise, Kosten umfassen laufende Pflege und Nachtraining, manche Vorteile (bessere Entscheidungen) sind schwer zu beziffern.
- **Drei Kostenkategorien:** *Erstentwicklung* (Datenaufbereitung oft 40–50 % des Entwicklungsbudgets, Modellentwicklung, Lösungsdesign, Tests), *Einführung* (Integration, Schulung und Change, Produktionsinfrastruktur), *laufender Betrieb* (Überwachung, Nachtraining, Infrastruktur/Cloud, Pflege der Datenpipelines).
- **Formel und Zeitraum:** Beispiel: 200.000 $ Kosten, 600.000 $ Nutzen = 200 % ROI. Nutzen und Kosten über **denselben Zeitraum** betrachten, bei KI üblicherweise **drei Jahre**.
- **Typische Kostenverteilung** (Skript-Beispiel, 500.000 $ über drei Jahre): Erstentwicklung 45 %, Einführung 20 %, Betrieb 12 % + 12 % + 11 %. Rund **35 %** entfallen also auf den laufenden Betrieb.
- **Puffer:** 20–30 % auf die Kostenschätzung aufschlagen.
- **Harter ROI:** Umsatzsteigerung, Kostensenkung, Risikominderung. **Weicher ROI:** schnellere Entscheidungen, Mitarbeiterzufriedenheit, Kundenerlebnis, Wettbewerbsvorteile, Wissensaufbau.
- **Wirkungsketten:** KI-Fähigkeit über überprüfbare Glieder mit dem Geschäftsergebnis verbinden (z. B. Bedarfsprognose → genauere Bestände → weniger Fehlbestände → mehr Umsatz). Jedes Glied möglichst mit Daten oder Branchenwerten belegen.
- **Bankbeispiel im Skript:** KI-Kreditrisikobewertung mit sehr hohem Drei-Jahres-ROI, der die Vorstandsfreigabe sicherte.
- **Inhalt eines Business Case:** Zusammenfassung, Problem und Chance, Erfolgskennzahlen, Umsetzungsansatz und Zeitplan, Kosten-Nutzen-Analyse mit ROI, Risiken mit Gegenmaßnahmen, Ressourcen und Kompetenzen. Er beantwortet: **Warum ist das strategisch wichtig, und was passiert, wenn wir es nicht tun?**
- **Typische ROI-Fehler:** volle Akzeptanz und fehlerfreie Umsetzung unterstellt, Change und Datenaufbereitung vergessen, zu frühe Nutzenkurve, Opportunitätskosten ignoriert, keine Messverfahren für den Soll-Ist-Abgleich.
- **Einordnen:** mit der **Mindestrendite (Hurdle Rate)** und alternativen Verwendungen des Budgets vergleichen. **Konservativer Basisfall**, optimistische Szenarien getrennt.`,
        },
        {
          type: 'table',
          caption: 'Die drei Kostenkategorien eines KI-Projekts',
          head: ['Kategorie', 'Bestandteile', 'Typischer Anteil (Skript-Beispiel, 3 Jahre)'],
          rows: [
            ['**Erstentwicklung**', 'Datenaufbereitung und -bereinigung, Modellentwicklung und Training, Lösungsdesign und Architektur, Tests und Validierung', '45 %'],
            ['**Einführung**', 'Integration in bestehende Systeme, Schulung und Veränderungsmanagement, Produktionsinfrastruktur', '20 %'],
            ['**Laufender Betrieb** (Jahr 1–3)', 'Überwachung und Leistungsmessung, Nachtraining, Infrastruktur und Cloud, Pflege der Datenpipelines; bei generativer KI zusätzlich nutzungsabhängige Token-/API-Kosten und menschliche Prüfzeit', '35 % (12 + 12 + 11)'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Die zwei wichtigsten Formeln',
          md: `**ROI = (Gesamtnutzen − Gesamtkosten) / Gesamtkosten × 100 %** – Nutzen und Kosten über denselben Zeitraum, bei KI meist drei Jahre.

**Amortisationszeit = einmalige Kosten / (monatlicher Nutzen − monatliche laufende Kosten)** – zeigt, wann die Anfangsinvestition wieder eingespielt ist (Ergänzung zum Skript).`,
        },
        {
          type: 'steps',
          items: [
            { title: 'KI-Fähigkeit', md: 'Eine KI-gestützte Bedarfsprognose schätzt die Nachfrage je Artikel und Filiale genauer.' },
            { title: 'Operative Wirkung', md: 'Die Lagerbestände passen besser zur Nachfrage.' },
            { title: 'Messbare Zwischenwirkung', md: 'Weniger Fehlbestände (im Skript-Beispiel −15 %). Beleg: historische Fehlbestandsquote, Pilotfilialen.' },
            { title: 'Geschäftsergebnis', md: 'Mehr erfüllte Nachfrage, also mehr Umsatz (im Skript-Beispiel +3 %).' },
            { title: 'Finanzieller Wert', md: 'Umsatzplus in Euro pro Jahr. Jede Annahme in der Kette ist ausdrücklich und damit überprüfbar.' },
          ],
        },
        {
          type: 'table',
          caption: 'Harter und weicher ROI',
          head: ['Harter ROI (direkt messbar)', 'Weicher ROI (wertvoll, schwer exakt zu beziffern)'],
          rows: [
            ['Umsatzsteigerung (bessere Kundenansprache, Konversion, neue KI-Angebote)', 'Schnellere Entscheidungen'],
            ['Kostensenkung (Automatisierung, Effizienz, weniger Abfall)', 'Höhere Mitarbeiterzufriedenheit'],
            ['Risikominderung (Betrugsprävention, Qualität, Compliance)', 'Besseres Kundenerlebnis, Wettbewerbsvorteile, Wissens- und Kompetenzaufbau'],
          ],
        },
        {
          type: 'praxis',
          title: 'Rechenbeispiel: Angebots-Assistent über drei Jahre',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg – alle Zahlen sind fiktive Annahmen',
          scenario: `Das Büro erstellt rund **120 Angebote pro Monat**. Ein KI-Assistent soll pro Angebot **20 Minuten** sparen. Interner Stundensatz: **55 €**. Kosten: **15.000 €** einmalig (Einrichtung, Integration, Schulung) und **600 €/Monat** laufend.`,
          steps: [
            'Zeitersparnis: 120 × 20 min = 2.400 min = 40 Stunden pro Monat. Monatlicher Nutzen: 40 h × 55 € = 2.200 €, pro Jahr 26.400 €.',
            'Jahr 1: Kosten 15.000 € + 12 × 600 € = 22.200 €. ROI Jahr 1 = (26.400 − 22.200) / 22.200 ≈ 19 %. Amortisation: 15.000 € / (2.200 € − 600 €) ≈ 9,4 Monate.',
            'Drei Jahre (Skript-Empfehlung): Nutzen 3 × 26.400 € = 79.200 €, Kosten 15.000 € + 36 × 600 € = 36.600 €. ROI = (79.200 − 36.600) / 36.600 ≈ 116 %.',
            'Mit 25 % Kostenpuffer (Skript: 20–30 %): Kosten 45.750 €, ROI = (79.200 − 45.750) / 45.750 ≈ 73 %.',
            'Konservativer Basisfall: Spart der Assistent nur 10 statt 20 Minuten, sinkt der Nutzen auf 39.600 € in drei Jahren. ROI ohne Puffer = (39.600 − 36.600) / 36.600 ≈ 8 %. Die Zeitersparnis ist die kritische Annahme und muss im Pilot gemessen werden.',
          ],
          takeaway: `Ein Business Case ist nur so gut wie seine **kritischste Annahme**. Rechne über drei Jahre, plane einen Puffer ein, präsentiere einen konservativen Basisfall und prüfe genau die kritische Annahme im Pilot.`,
        },
        {
          type: 'interactive',
          widget: 'roi-calculator',
        },
        {
          type: 'table',
          caption: 'Gliederung eines KI-Business-Case (nach Skript S. 42)',
          head: ['Abschnitt', 'Inhalt'],
          rows: [
            ['1 · Zusammenfassung', 'Eine Seite: Chance, Investition, erwartete Rendite'],
            ['2 · Problem und Chance', 'Ist-Zustand mit Baseline, geplante KI-Lösung'],
            ['3 · Erfolgskennzahlen und KPIs', 'Konkrete, messbare Ergebnisse (Abschnitt 2.4)'],
            ['4 · Umsetzung und Zeitplan', 'Phasen, Meilensteine, Abhängigkeiten'],
            ['5 · Kosten-Nutzen-Analyse und ROI', 'Finanzmodell über drei Jahre, Basisfall und Szenarien'],
            ['6 · Risiken und Gegenmaßnahmen', 'Technik, Daten, Recht, Akzeptanz'],
            ['7 · Ressourcen und Kompetenzen', 'Team, Partner, Budget'],
            ['Leitfrage', '**Warum ist das strategisch wichtig, und was passiert, wenn wir es nicht tun?**'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Typische Fehler im KI-Business-Case',
          md: `- **Volle Akzeptanz unterstellt:** In den ersten Monaten nutzen nicht alle das Tool, rechne mit einem Hochlauf.
- **Kosten vergessen:** Change Management, Datenaufbereitung und laufende Pflege. Nutzungsabhängige Kosten steigen mit dem Erfolg.
- **Zu frühe Nutzenkurve:** Nutzen erst ab Regelbetrieb ansetzen, nicht ab Projektstart.
- **Zeitersparnis ≠ Kosteneinsparung:** Gesparte Stunden sind nur Geld wert, wenn sie sinnvoll genutzt werden (mehr Aufträge, weniger Überstunden, keine Neueinstellung).
- **Opportunitätskosten ignoriert** und **keine Messverfahren** für den späteren Soll-Ist-Abgleich.`,
        },
        {
          type: 'text',
          md: `### Investitionen vergleichen: Hurdle Rate und Alternativen

Ein ROI ist nie „gut“ an sich. Vergleiche ihn mit der **Mindestrendite (Hurdle Rate)** deines Unternehmens und mit anderen Verwendungen desselben Budgets. Das Skript bringt es auf den Punkt: Ein KI-Projekt mit 150 % Drei-Jahres-ROI wirkt weniger überzeugend, wenn ein anderes Vorhaben bei geringerem Risiko 300 % verspricht. Und: Präsentiere einen **konservativen Basisfall** und modelliere optimistische Szenarien getrennt. Das schafft Glaubwürdigkeit.

### Unterstützung und Förderung nutzen

Gerade für KMU gibt es kostenfreie Beratung und finanzielle Förderung, die den Business Case verbessern. Förderprogramme ändern sich häufig: **Prüfe vor jeder Empfehlung den aktuellen Stand** auf der offiziellen Seite oder in der Förderdatenbank des Bundes.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Förderlandschaft (Stand Oktober 2026)',
          md: `Das Skript behandelt keine Förderung. In vielen älteren Leitfäden werden noch die Bundesprogramme **„go-digital“** und **„Digital Jetzt“** empfohlen. Stand Oktober 2026 gilt:
- **Digital Jetzt:** Die Richtlinie ist zum **31.12.2023** ausgelaufen; Anträge sind nicht mehr möglich.
- **go-digital:** Bewilligungen waren bis einschließlich **31.12.2024** möglich.

Ein direktes Nachfolgeprogramm als Bundeszuschuss ist uns nicht bekannt. Aktuelle Alternativen findest du in der Tabelle unten.`,
          sources: [
            { title: 'IHK Bonn/Rhein-Sieg: Digitalisierung & Digitalförderung', url: 'https://www.ihk-bonn.de/innovation-und-umwelt/digitalisierung-/-it-sicherheit/digitalisierung-digitalfoerderung' },
            { title: 'IHK Ostwürttemberg: go-digital', url: 'https://www.ihk.de/ostwuerttemberg/produktmarken/innovation-und-digitalisierung/foerderprogramme/go-digital-3902374' },
          ],
        },
        {
          type: 'table',
          caption: 'Ausgewählte Unterstützungsangebote (Stand Oktober 2026 – vor Nutzung aktuellen Stand prüfen)',
          head: ['Angebot', 'Was?', 'Hinweis'],
          rows: [
            ['[Mittelstand-Digital Zentren](https://www.mittelstand-digital.de/MD/Navigation/DE/Ueber-uns/was-ist-mittelstand-digital/was-ist-md.html) (BMWE)', 'Kostenfreie, anbieterneutrale Beratung, Workshops, KI-Trainer, Praxisprojekte', 'Das aktuelle Netzwerk läuft bis Ende 2026; das BMWE hat einen [Förderaufruf für ein Nachfolgenetzwerk](https://www.nrwbank.de/de/unternehmen/nrw-bank-innovationspartner/aktuelles/foerderaufruf-netztwerk-mittelstanddigitalzentren.html) veröffentlicht.'],
            ['[European Digital Innovation Hubs](https://european-digital-innovation-hubs.ec.europa.eu/home) (EU)', 'Regionale Anlaufstellen: Schulung, Technologie-Tests („test before invest“), Finanzierungsberatung', 'Angebote unterscheiden sich je Hub.'],
            ['[KfW ERP-Förderkredit Digitalisierung (511/512)](https://www.kfw.de/inlandsfoerderung/Unternehmen/Innovation-und-Digitalisierung/F%C3%B6rderprodukte/ERP-F%C3%B6rderkredit-Digitalisierung-%28511-512%29/)', 'Förderkredit über die Hausbank; seit 01.07.2025 Nachfolger des ERP-Digitalisierungs- und Innovationskredits', 'In Stufe 2/3 zusätzlich Zuschuss von 3 % bzw. 5 % auf den ausgezahlten Kreditbetrag.'],
            ['[BAFA – Förderung von Unternehmensberatungen für KMU](https://www.bafa.de/DE/Wirtschaft/Beratung_Finanzierung/Unternehmensberatung/unternehmensberatung_node.html)', 'Zuschuss zu Beratungskosten (auch für Digitalisierungs-/KI-Beratung)', 'Richtlinie gilt bis 31.12.2026; förderfähig max. 3.500 € Beratungskosten, Zuschuss 50 % bzw. 80 % je nach Region.'],
            ['Landesprogramme', 'Zuschüsse für Digitalisierung je Bundesland', 'Sehr unterschiedlich – Landesförderbank bzw. Förderdatenbank prüfen.'],
          ],
        },
        {
          type: 'youtube',
          id: 'GrVYBlc0R1I',
          title: 'Die KI-Trainer von Mittelstand-Digital machen Unternehmen fit für das Thema Künstliche Intelligenz',
          channel: 'Mittelstand-Digital',
          lang: 'de',
          minutes: 3,
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Rechne mit der Formel aus dem Skript.',
          text: 'Ein KI-Projekt kostet über drei Jahre 200.000 € und erzeugt 600.000 € Nutzen. Der ROI beträgt {{200|200 %|200%}} Prozent. Nutzen und Kosten müssen über {{denselben|den gleichen}} Zeitraum betrachtet werden.',
          explain: '(600.000 − 200.000) / 200.000 × 100 % = 200 %. Das Skript empfiehlt bei KI üblicherweise einen Zeitraum von drei Jahren (S. 39).',
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne den Nutzen der richtigen ROI-Kategorie zu.',
          pairs: [
            ['Weniger Kreditausfälle in Euro', 'Harter ROI'],
            ['Eingesparte Prozesskosten durch Automatisierung', 'Harter ROI'],
            ['Höhere Mitarbeiterzufriedenheit', 'Weicher ROI'],
            ['Wissensaufbau in der Organisation', 'Weicher ROI'],
          ],
          explain: 'Harter ROI ist direkt in Geld messbar (Umsatz, Kosten, Risiko). Weicher ROI ist wertvoll, aber schwer exakt zu beziffern (Skript S. 41).',
        },
      ],
    },

    // ───────────────────────── 2.4 ─────────────────────────
    {
      id: 'k2-l4',
      title: '2.4 Erfolgskennzahlen und KPIs',
      minutes: 25,
      skript: { chapter: '2.4', page: 43 },
      blocks: [
        {
          type: 'text',
          md: `„Das Tool kommt gut an“ reicht nicht, wenn die Geschäftsführung über das Budget fürs nächste Jahr entscheidet. Als KI-Managerin oder KI-Manager musst du **Wirkung belegen** und erkennen, wenn eine Lösung nachlässt. Dafür brauchst du Kennzahlen, die du **vor** dem Start festlegst.`,
        },
        {
          type: 'skript',
          chapter: '2.4',
          page: 43,
          quote: 'Erhebe Ausgangswerte (Baselines), bevor du KI-Lösungen einführst. Ohne Kenntnis des aktuellen Leistungsniveaus kannst du Verbesserungen nicht glaubwürdig belegen.',
          md: `**Kernaussagen des Abschnitts (S. 43–47):**

- **Erfolgskennzahlen und KPIs** legen fest, woran ein KI-Vorhaben gemessen wird. Ohne sie fehlt Ergebnisverantwortung. Laut Skript schaffen es 62 % der KI-Projekte nicht vom Pilot in den Betrieb (Stanford HAI), unklare Erfolgskriterien sind eine Hauptursache.
- **Spätindikatoren** messen Endergebnisse (Umsatz, Kosten, Kundenbindung, Ausschuss): aussagekräftig, aber langsam. **Frühindikatoren** messen Zwischenergebnisse und Verhalten (Modellgenauigkeit, Nutzerakzeptanz, Antwortzeit, Datenqualität): frühe Signale für rechtzeitige Korrekturen.
- **SMART:** spezifisch, messbar, attraktiv/erreichbar, relevant, terminiert. Nicht „Zufriedenheit verbessern“, sondern einen konkreten Wert in einer konkreten Frist.
- **Operative KPIs** (Technik und Betrieb): Modellleistung (Genauigkeit, Precision, Recall, F1), Vorhersagelatenz, Verfügbarkeit, Datenqualitätswerte, Modelldrift, Häufigkeit und Ergebnis des Nachtrainings.
- **Geschäftsergebnis-KPIs** je Anwendungstyp: Umsatzsteigerung, Kostensenkung, Kundenerlebnis, Risikomanagement, operative Effizienz, jeweils mit eigenem Messansatz (Kohortenvergleich, Vorher-Nachher, Umfragen, Vorfallverfolgung, Process Mining).
- **Dreistufiges Kennzahlensystem:** Geschäftsleitung (3–5 Kennzahlen, monatlich), operatives Management (10–15, wöchentlich), technische Überwachung (20–30, täglich bzw. in Echtzeit). Beispiel im Skript: Routenoptimierung eines Logistikunternehmens.
- **Baseline:** möglichst **3–6 Monate** Ausgangsdaten erheben oder Kontrollgruppen nutzen.
- **Dashboards** je Zielgruppe: Geschäftsleitung mit Trends, Zielwerten und Ampel; operative und technische Dashboards detaillierter (z. B. mit Tableau, Power BI, Looker).
- **Typische Fehler:** nur technische Metriken, zu viele Kennzahlen, unrealistische Ziele, **Outputs statt Outcomes**, Kennzahlen nie angepasst, keine Verknüpfung mit Anreizen und Verantwortlichkeiten.
- **Kreislauf:** Messen zeigt Optimierungspotenzial (Nachtraining, Prozessverfeinerung, Ausweitung). Laut Skript (Deloitte) erzielen Unternehmen mit starker Messkultur 40 % höheren ROI. Kennzahlen im ersten Jahr **vierteljährlich** überprüfen.`,
        },
        {
          type: 'table',
          caption: 'Früh- und Spätindikatoren am Beispiel eines KI-E-Mail-Assistenten',
          head: ['', 'Frühindikator (Leading)', 'Spätindikator (Lagging)'],
          rows: [
            ['Misst …', 'Zwischenergebnisse und Verhalten', 'Geschäftliche Endergebnisse'],
            ['Beispiele', 'Erkennungsgenauigkeit je Kategorie, Anteil aktiver Nutzender, Übernahmequote der Entwürfe', 'Kundenzufriedenheit, Bearbeitungskosten pro Anfrage, Abwanderung'],
            ['Messrhythmus', 'täglich bis wöchentlich', 'monatlich bis quartalsweise'],
            ['Nutzen', 'Früh gegensteuern', 'Wert gegenüber Geschäftsleitung belegen'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'SMART formulieren',
          md: `**Schwach:** „Der KI-Assistent soll den Kundenservice verbessern.“

**SMART:** „Die mittlere Zeit bis zur Erstantwort auf E-Mails sinkt bis zum 30. Juni von 26 auf 8 Arbeitsstunden (Baseline Januar–März), ohne dass die Beschwerdequote steigt.“ (fiktives Beispiel)`,
        },
        {
          type: 'table',
          caption: 'Geschäftsergebnis-KPIs nach Anwendungstyp (nach Skript S. 44–45)',
          head: ['Anwendungstyp', 'Typische KPIs', 'Messansatz'],
          rows: [
            ['Umsatzsteigerung', 'Umsatz pro Kunde, Konversionsrate, Auftragsgröße', 'Vergleich von Kohorten mit und ohne KI'],
            ['Kostensenkung', 'Prozesskosten pro Einheit, eingesparte Stunden, Fehlerquote', 'Vorher-Nachher-Analyse'],
            ['Kundenerlebnis', 'CSAT, NPS, Lösungszeit, Abwanderung', 'Umfragen und operative Kennzahlen'],
            ['Risikomanagement', 'Betrugserkennungsrate, Falsch-Positiv-Rate, Compliance-Verstöße', 'Vorfallverfolgung'],
            ['Operative Effizienz', 'Durchsatz, Durchlaufzeit, Ressourcenauslastung', 'Process Mining und Zeitstudien'],
          ],
        },
        {
          type: 'table',
          caption: 'Das dreistufige Kennzahlensystem',
          head: ['Ebene', 'Zielgruppe', 'Umfang', 'Rhythmus', 'Beispiel (KI-E-Mail-Assistent)'],
          rows: [
            ['**Geschäftsleitung**', 'Führungsebene', '3–5 Kennzahlen', 'monatlich', 'Kosten pro Anfrage, Kundenzufriedenheit, ROI'],
            ['**Operatives Management**', 'Projektteam, Fachverantwortliche', '10–15 Kennzahlen', 'wöchentlich', 'Erstantwortzeit, Rückfragenquote, aktive Nutzende, Übernahmequote'],
            ['**Technische Überwachung**', 'Data Science, Engineering, IT', '20–30 Kennzahlen', 'täglich / Echtzeit', 'Precision und Recall je Kategorie, Latenz, Verfügbarkeit, Drift-Warnungen, Token-Kosten'],
          ],
        },
        {
          type: 'text',
          md: `Die Ebenen hängen zusammen wie ein **KPI-Baum**: Hohe technische Qualität (z. B. Recall) ist nur ein Mittel, damit die Prozess-KPI (z. B. Bearbeitungszeit) sinkt, und diese zahlt auf die Business-KPI (Kosten, Zufriedenheit) ein. Keine Ebene bewegt sich, wenn die Lösung **nicht genutzt** wird. Bei generativer KI gehören deshalb **Nutzung/Adoption** und **Kosten pro Vorgang** (Lizenz, Token, menschliche Prüfzeit) immer dazu. Wie du technische Metriken wie Precision, Recall und F1 berechnest und überwachst, zeigt Kapitel 6.2.`,
        },
        {
          type: 'steps',
          items: [
            { title: '1 · KPI festlegen', md: 'Welche Kennzahl soll sich verbessern? Eindeutige Definition, z. B. „Zeit von Eingang bis Erstantwort in Arbeitsstunden“.' },
            { title: '2 · Messmethode wählen', md: 'Systemdaten (Zeitstempel, Ticket- oder ERP-Logs), Stichproben mit Zeitmessung oder Befragung, so objektiv wie möglich.' },
            { title: '3 · Messzeitraum bestimmen', md: 'Laut Skript möglichst **3–6 Monate**, damit normale Schwankungen und Saisoneffekte sichtbar werden. Ist das nicht machbar: **Kontrollgruppe** (z. B. ein Team mit, eins ohne KI).' },
            { title: '4 · Messen und dokumentieren', md: 'Werte erfassen, Rahmenbedingungen notieren (Personalstand, Volumen), Baseline „einfrieren“.' },
            { title: '5 · Zielwert ableiten', md: 'Erst mit der Baseline lässt sich ein realistisches SMART-Ziel formulieren.' },
          ],
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Wie gute Messung Wirkung sichtbar macht',
          md: `Das Skript nennt die Kennzahlen, aber keine unabhängig geprüfte Feldstudie. Eine viel zitierte Untersuchung zeigt, warum Aufschlüsselung wichtig ist: Brynjolfsson, Li und Raymond werteten Daten von 5.179 Kundenservice-Mitarbeitenden aus. Der Zugang zu einem KI-Assistenten erhöhte die Produktivität, gemessen als **gelöste Anfragen pro Stunde**, im Schnitt um **14 %**, bei unerfahrenen und gering qualifizierten Beschäftigten um **34 %**.

Die Lehre: Eine klar definierte Prozess-KPI und eine **Aufschlüsselung nach Gruppen** zeigen, wo KI wirklich wirkt. Ein Durchschnittswert allein hätte den größten Effekt verdeckt.`,
          sources: [
            { title: 'Brynjolfsson, Li, Raymond: Generative AI at Work (NBER Working Paper 31161)', url: 'https://www.nber.org/papers/w31161' },
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Sechs Kennzahlen-Fehler (Skript S. 46)',
          md: `1. Nur **technische Metriken** (Genauigkeit, Latenz), keine Geschäftsergebnisse
2. **Zu viele Kennzahlen**, die den Fokus verwässern
3. **Unrealistische Ziele**, die Teams demotivieren
4. **Outputs statt Outcomes:** „Anzahl Vorhersagen“ statt „geschaffener Wert“
5. Kennzahlen **nie anpassen**, obwohl das Projekt sich entwickelt
6. Kennzahlen **nicht mit Verantwortung und Anreizen** verknüpfen`,
        },
        {
          type: 'praxis',
          title: 'Kennzahlensystem für einen KI-E-Mail-Assistenten',
          company: 'Stadtwerke Lindenau GmbH (fiktiv), 300 Mitarbeitende – Strom, Gas, Wasser',
          scenario: `Im Kundenservice gehen täglich viele E-Mails zu Abschlägen, Zählerständen und Umzügen ein. Ein KI-Assistent soll Anliegen erkennen und Antwortentwürfe vorschlagen; Mitarbeitende prüfen und versenden. Du sollst das Messkonzept nach dem Skript aufsetzen.`,
          steps: [
            'SMART-Ziel mit der Leitung vereinbaren: Erstantwortzeit innerhalb von sechs Monaten deutlich senken, ohne zusätzliches Personal und ohne steigende Beschwerdequote.',
            'Geschäftsleitungsebene (monatlich, 4 Kennzahlen): Kosten pro bearbeiteter E-Mail, Kundenzufriedenheit im Service, Erstantwortzeit, Beschwerdequote (Gegen-KPI).',
            'Managementebene (wöchentlich): Bearbeitungszeit pro E-Mail, Rückfragenquote, aktive Nutzende, Anteil der Entwürfe, die ohne Änderung versendet werden.',
            'Technische Ebene (täglich): Precision und Recall je Anliegen-Kategorie, Latenz, Verfügbarkeit, Token-Kosten, Drift-Hinweise bei neuen Anliegen (z. B. nach Tarifänderungen).',
            'Baseline: Zeitstempel der letzten drei Monate aus dem Ticketsystem auswerten und eine Stichprobe von 200 E-Mails mit Zeitmessung bearbeiten. Ein Team startet zwei Monate später und dient so lange als Kontrollgruppe.',
            'Review: vierteljährlich im ersten Jahr prüfen, welche Kennzahlen den Wert wirklich treiben, und die Liste anpassen.',
          ],
          takeaway: `Ein gutes Messkonzept verbindet **Früh- und Spätindikatoren** über drei Ebenen und hat für jede Kennzahl eine Baseline, eine Quelle und eine verantwortliche Person.`,
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Output vs. Outcome', back: '**Output:** was das System produziert (z. B. 10.000 Vorhersagen). **Outcome:** welcher Geschäftswert dadurch entsteht (z. B. 12 % weniger Kraftstoffkosten). Gemessen werden sollen Outcomes.' },
            { front: 'Durchlaufzeit', back: 'Zeit vom Start bis zum Abschluss eines Vorgangs, inklusive Wartezeiten. Nicht verwechseln mit der reinen Bearbeitungszeit.' },
            { front: 'Übernahmequote', back: 'Anteil der KI-Vorschläge, die unverändert oder mit kleinen Änderungen übernommen werden. Ein guter Frühindikator für Qualität und Akzeptanz.' },
            { front: 'Kontrollgruppe', back: 'Gruppe, die (noch) ohne KI arbeitet. Ihr Vergleich mit der KI-Gruppe zeigt die Wirkung, wenn keine lange Baseline möglich ist.' },
            { front: 'Kosten pro Vorgang', back: 'Alle laufenden Kosten (Lizenzen, Nutzungsgebühren, Betrieb, menschliche Prüfzeit) geteilt durch die Anzahl bearbeiteter Vorgänge.' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Kennzahl richtig zu.',
          pairs: [
            ['Modellgenauigkeit', 'Frühindikator'],
            ['Nutzerakzeptanzrate', 'Frühindikator'],
            ['Kundenbindungsrate', 'Spätindikator'],
            ['Kostensenkung', 'Spätindikator'],
          ],
          explain: 'Frühindikatoren messen Zwischenergebnisse und Verhalten und reagieren schnell. Spätindikatoren messen geschäftliche Endergebnisse (Skript S. 43).',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Die Baseline kann man problemlos auch nach der Einführung schätzen, Hauptsache, man hat aktuelle Zahlen.',
          answer: false,
          explain: 'Nachträgliche Schätzungen sind verzerrt. Das Skript empfiehlt, 3–6 Monate vorher Ausgangsdaten zu erheben oder Kontrollgruppen zu nutzen (S. 45).',
        },
      ],
    },

    // ───────────────────────── 2.5 ─────────────────────────
    {
      id: 'k2-l5',
      title: '2.5 Portfoliopriorisierung und Reihenfolgeplanung',
      minutes: 27,
      skript: { chapter: '2.5', page: 47 },
      blocks: [
        {
          type: 'text',
          md: `Bisher hast du einzelne Use Cases bewertet. In der Realität konkurrieren aber viele Ideen um **dieselben knappen Ressourcen**: ein kleines Team, ein begrenztes Budget und die Aufmerksamkeit der Geschäftsführung. Portfoliomanagement beantwortet: **Was machen wir, in welcher Reihenfolge, mit welchem Einsatz – und was lassen wir bewusst?**`,
        },
        {
          type: 'skript',
          chapter: '2.5',
          page: 47,
          quote: 'Portfoliodisziplin verhindert Zombie-Projekte, die Ressourcen binden, ohne Nutzen zu liefern.',
          md: `**Kernaussagen des Abschnitts (S. 47–51):**

- **Portfolio statt Einzelentscheidung:** Alle KI-Vorhaben werden wie ein Investitionsportfolio gesteuert. Laut Skript (BCG) haben Unternehmen mit zu vielen parallelen Piloten eine 60 % niedrigere Erfolgsquote als solche, die sich auf wenige, strategisch gewählte Vorhaben konzentrieren.
- **Drei konkurrierende Ziele:** aggregierten Nutzen maximieren, Risiken durch Diversifikation steuern, Fähigkeiten schrittweise von einfach zu komplex aufbauen.
- **Gewichtetes Scoring:** Kriterien (Wirkung, Machbarkeit, Passung, Dringlichkeit, Ressourcenbedarf) gewichten, jede Chance bewerten, Werte × Gewichte summieren. Beispiel: (9 × 0,40) + (7 × 0,30) = 5,7.
- **Drei Verteilungsmodelle:** *konzentriert* (2–3 Top-Vorhaben), *ausgewogen* (5–7 Vorhaben, mehr Risikostreuung und Lernen), *phasenweise* (Wellen, Welle 1 vollständig vor Welle 2). Bei geringer KI-Reife schneiden konzentriert oder phasenweise besser ab.
- **Vier Reihenfolge-Ansätze:** *Schnelle Erfolge zuerst*, *Kompetenzaufbau* (einfach vor komplex), *Wertmaximierung* (Wertvollstes zuerst, egal wie schwer), *strategische Reihenfolge* (nach Prioritäten und Geschäftszyklen).
- **Schnelle Erfolge** brechen Skepsis auf: Ein Projekt, das in vier Monaten spürbar spart, erzeugt mehr Schwung als ein mehrjähriges Vorhaben mit ungewissem Ausgang.
- **Teamkapazität:** Ein erfahrenes Data-Science-Team betreut üblicherweise **2–3 Entwicklungsprojekte** plus **4–5 Produktivsysteme**.
- **Abhängigkeiten:** Personalisierung braucht eine Kundendatenplattform, Betrugserkennung Echtzeit-Datenpipelines, jede Hochrisiko-Anwendung Governance-Strukturen.
- **Schnelle Erfolge** (90–180 Tage, klarer ROI) und **Transformationsprojekte** (12–24+ Monate, Durchbruchswert) haben verschiedene Rollen. Ein ausgewogenes Portfolio enthält beides.
- **Beispiel Fertigung (drei Wellen):** Welle 1 Bilderkennung in der Qualitätskontrolle und Wartungshinweise, Welle 2 Bedarfsprognose und Lieferkette, Welle 3 ganzheitliche Produktionsoptimierung mit Reinforcement Learning.
- **Typische Fehler:** zu viele Piloten ohne Produktivsetzung, Change in der Reihenfolge vergessen, **Sunk-Cost-Falle**, Personal- und Datenengpässe ignoriert, alles als Experiment statt als strategische Verpflichtung behandelt.
- **Werkzeuge:** Portfolio-Maps (Matrix mit Blasengröße = Investition), Roadmap-Zeitleisten mit Abhängigkeiten, Ressourcenverteilungsdiagramme. **Vierteljährlicher Portfolio-Review** mit ausdrücklichen Entscheidungen: fortführen, umsteuern oder beenden.`,
        },
        {
          type: 'table',
          caption: 'Gewichtetes Scoring am fiktiven Beispiel einer Filialbäckerei (Gewichte wie im Skript: 40/30/20/10)',
          head: ['Use Case', 'Wirkung (40 %)', 'Machbarkeit (30 %)', 'Passung (20 %)', 'Dringlichkeit (10 %)', 'Gesamt', 'Rang'],
          rows: [
            ['Absatzprognose gegen Retouren', '9 × 0,4 = 3,6', '6 × 0,3 = 1,8', '9 × 0,2 = 1,8', '7 × 0,1 = 0,7', '**7,9**', '1'],
            ['Interner Wissens-Chatbot für Rezepturen', '5 × 0,4 = 2,0', '8 × 0,3 = 2,4', '6 × 0,2 = 1,2', '4 × 0,1 = 0,4', '**6,0**', '2'],
            ['GenAI-Texte für Social Media', '4 × 0,4 = 1,6', '9 × 0,3 = 2,7', '5 × 0,2 = 1,0', '6 × 0,1 = 0,6', '**5,9**', '3'],
            ['Agent für Lieferantenbestellungen', '7 × 0,4 = 2,8', '3 × 0,3 = 0,9', '7 × 0,2 = 1,4', '5 × 0,1 = 0,5', '**5,6**', '4'],
            ['Kamera-Qualitätskontrolle am Ofen', '6 × 0,4 = 2,4', '4 × 0,3 = 1,2', '5 × 0,2 = 1,0', '3 × 0,1 = 0,3', '**4,9**', '5'],
          ],
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Genau hinschauen lohnt sich',
          md: `In der Beispieltabelle des Skripts (S. 48) ist die Rangfolge vertauscht: Nach Punkten liegt die Betrugserkennung (7,5) auf **Rang 3** und die Dokumentenverarbeitung (6,9) auf **Rang 4**, nicht umgekehrt. Genau deshalb lohnt sich gewichtetes Scoring: Es ist **transparent und nachrechenbar**. Und: Das Ergebnis ist ein Diskussionsvorschlag, keine Automatik. Die hohe Wirkung der Betrugserkennung kann trotz Rang 3 eine strategische Wette rechtfertigen.`,
        },
        {
          type: 'interactive',
          widget: 'usecase-matrix',
          props: {
            cases: [
              { name: 'Absatzprognose gegen Retouren', impact: 5, feasibility: 3 },
              { name: 'Interner Wissens-Chatbot für Rezepturen', impact: 3, feasibility: 4 },
              { name: 'GenAI-Texte für Social Media', impact: 2, feasibility: 5 },
              { name: 'Agent für Lieferantenbestellungen', impact: 4, feasibility: 2 },
              { name: 'Kamera-Qualitätskontrolle am Ofen', impact: 3, feasibility: 2 },
            ],
          },
        },
        {
          type: 'text',
          md: `### Von der Matrix zur Portfolio-Map

Die Matrix im Widget wird zur **Portfolio-Map**, wenn du gedanklich noch eine dritte Information ergänzt: die **Investitionshöhe** als Blasengröße. So siehst du auf einen Blick, ob viel Geld in Felder mit geringer Wirkung fließt. Ergänze sie um eine **Roadmap-Zeitleiste** (Quartale, Abhängigkeiten) und ein **Ressourcendiagramm** (Wer arbeitet woran?).

Wo kommen die Kandidaten her? Neben dem Pain-Point-Workshop (Abschnitt 2.1) hilft ein **Trend-Radar**: Trends beobachten, in konkrete Anwendungsfälle übersetzen („Agenten“ wird zu „Belegzuordnung im Rechnungseingang“), bewerten, in einer geschützten Testumgebung ausprobieren und dann klar mit Go oder No-Go entscheiden.`,
        },
        {
          type: 'table',
          caption: 'Drei Modelle zur Ressourcenverteilung (nach Skript S. 48–49)',
          head: ['Modell', 'So funktioniert es', 'Passt zu …'],
          rows: [
            ['**Konzentriert**', 'Ressourcen auf die 2–3 höchstpriorisierten Vorhaben bündeln', 'geringer KI-Reife, kleinem Team, hohem Erfolgsdruck'],
            ['**Ausgewogen**', '5–7 Vorhaben parallel, Risiko streuen, schneller lernen', 'reiferen Organisationen mit mehreren Teams'],
            ['**Phasenweise**', 'Vorhaben in Wellen, Welle 1 vollständig abschließen, dann Welle 2', 'geringer KI-Reife, Aufbau von Vertrauen und Kompetenz'],
          ],
        },
        {
          type: 'table',
          caption: 'Vier Ansätze für die Reihenfolge',
          head: ['Ansatz', 'Logik', 'Stärke', 'Risiko'],
          rows: [
            ['**Schnelle Erfolge zuerst**', 'Hohe Wirkung und hohe Machbarkeit zuerst', 'Glaubwürdigkeit und Schwung, bricht Skepsis', 'Nur „Leichtes“, strategische Themen bleiben liegen'],
            ['**Kompetenzaufbau**', 'Einfache vor komplexen Projekten', 'Fähigkeiten wachsen systematisch', 'Langsamer Wertbeitrag'],
            ['**Wertmaximierung**', 'Werthaltigstes zuerst, unabhängig von der Schwierigkeit', 'Größter möglicher Nutzen', 'Hohes Scheiterrisiko bei geringer Reife'],
            ['**Strategische Reihenfolge**', 'Nach strategischen Prioritäten oder Geschäftszyklen', 'Passt zu Planung und Budgetrunden', 'Kann Abhängigkeiten übersehen'],
          ],
        },
        {
          type: 'table',
          caption: 'Schnelle Erfolge und Transformationsprojekte im Portfolio',
          head: ['', 'Schnelle Erfolge', 'Transformationsprojekte'],
          rows: [
            ['Laufzeit', '90–180 Tage', '12–24+ Monate'],
            ['Merkmale', 'Klarer ROI, begrenzte Komplexität', 'Tiefgreifender organisatorischer Wandel, Durchbruchspotenzial'],
            ['Rolle', 'Schwung erzeugen, weitere Investitionen über nachgewiesene Renditen finanzieren', 'Nachhaltigen Wettbewerbsvorteil sichern'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Fallstricke: PoC-Friedhof, Sunk Costs und Zombie-Projekte',
          md: `Viele Unternehmen sammeln Proofs of Concept, die nie in den Betrieb gehen. Die BCG-Studie „Where’s the Value in AI?“ (2024) fand nur 22 % der Unternehmen jenseits der PoC-Phase mit erkennbarem Wert. Gegenmittel:
- **vor dem PoC** festlegen, welche Kennzahl welchen Wert erreichen muss, wer den Betrieb übernimmt und wie der Weg in den Regelprozess aussieht
- die **Teamkapazität** ehrlich planen (Skript: 2–3 Entwicklungsprojekte plus 4–5 Produktivsysteme pro erfahrenem Team)
- im **vierteljährlichen Portfolio-Review** ausdrücklich entscheiden: fortführen, umsteuern oder beenden. Bereits investiertes Geld ist kein Grund weiterzumachen (Sunk-Cost-Falle).`,
        },
        {
          type: 'praxis',
          title: 'Ein Portfolio in drei Wellen für eine Filialbäckerei',
          company: 'Bäckerei Hofer KG (fiktiv), 9 Filialen, 110 Mitarbeitende, Linz (AT)',
          scenario: `Die Inhaberin hat auf einer Messe von „GenAI, Agenten und Edge-KI“ gehört und will „bei KI nicht den Anschluss verpassen“. Gleichzeitig wirft die Bäckerei täglich zu viel Ware weg. Es gibt keine eigene IT-Abteilung, nur einen externen Dienstleister und eine engagierte Assistentin der Geschäftsführung. Der Readiness-Check (Kapitel 1.5) ergab die Stufe „Einsteiger“.`,
          steps: [
            'Gewichtetes Scoring (Tabelle oben): Absatzprognose klar vorn, Wissens-Chatbot und Social-Media-Texte fast gleichauf, Agent und Kamera dahinter.',
            'Verteilungsmodell: Wegen geringer Reife und kleinem Team **phasenweise** statt ausgewogen.',
            'Abhängigkeiten prüfen: Die Absatzprognose braucht saubere Kassendaten je Filiale und Artikel plus Wetter- und Feiertagsdaten. Die Kassendaten müssen erst vereinheitlicht werden.',
            'Welle 1 (Monat 1–4): Social-Media-Texte und Wissens-Chatbot als schnelle Erfolge zum Kompetenzaufbau; parallel Kassendaten bereinigen.',
            'Welle 2 (Monat 5–12): Absatzprognose als Pilot in drei Filialen, Ziel-KPI Retourenquote je Filiale gegenüber einer Baseline aus den Vormonaten.',
            'Welle 3 (ab Monat 13): Agent für Lieferantenbestellungen erst, wenn die Prognose zuverlässig läuft und Freigaberegeln stehen. Die Kamera-Idee wird dokumentiert und im nächsten Review neu bewertet.',
          ],
          takeaway: `Ein gutes Portfolio verbindet **schnelle Erfolge** mit einem **strategischen Nutzenprojekt**, berücksichtigt Abhängigkeiten und baut Fähigkeiten in Wellen auf.`,
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Rechne den gewichteten Teilwert aus dem Skript nach.',
          text: 'Wirkung 9 bei 40 % Gewicht und Passung 7 bei 30 % Gewicht ergeben (9 × 0,40) + (7 × 0,30) = {{5,7|5.7}}.',
          explain: '3,6 + 2,1 = 5,7 (Skript S. 47–48). Für die Gesamtpunktzahl kommen die übrigen gewichteten Kriterien hinzu.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Unternehmen mit geringer KI-Reife und einem kleinen Team hat zwölf Ideen. Welches Verteilungsmodell empfiehlt das Skript tendenziell?',
          options: ['Alle zwölf parallel starten', 'Ausgewogen mit 5–7 Vorhaben', 'Konzentriert oder phasenweise', 'Gar keine Vorhaben, bis die Reife hoch ist'],
          answer: 2,
          explain: 'Bei geringer KI-Reife schneiden konzentrierte oder phasenweise Ansätze besser ab; reifere Organisationen können mehr parallel steuern (Skript S. 49).',
        },
      ],
    },
  ],

  // ───────────────────────── Quiz ─────────────────────────
  quiz: [
    {
      type: 'multi',
      q: 'Welche Dimensionen umfasst das 5P-Framework? (Mehrfachauswahl)',
      options: ['Purpose', 'People', 'Process', 'Platform', 'Performance', 'Price'],
      answer: [0, 1, 2, 3, 4],
      explain: 'Purpose (strategische Ziele), People (Beteiligte), Process (Abläufe), Platform (Technologie) und Performance (messbare Ergebnisse) – Skript S. 30–31. „Price“ gehört nicht dazu.',
    },
    {
      type: 'single',
      q: 'Was ist laut Jobs-to-be-Done-Methode der eigentliche „Job“ einer Kundenservice-Fachkraft?',
      options: ['Telefonate annehmen', 'Kundenprobleme effizient lösen und dabei die Zufriedenheit sichern', 'Tickets schließen', 'Möglichst kurze Gespräche führen'],
      answer: 1,
      explain: 'Die Methode fragt nach der Aufgabe hinter der Tätigkeit. Daraus werden Chancen wie intelligente Weiterleitung oder Lösungsvorschläge sichtbar (Skript S. 32).',
    },
    {
      type: 'tf',
      q: 'Workshops nur mit dem Top-Management sind laut Skript der beste Weg, die wertvollsten KI-Anwendungsfälle zu finden.',
      answer: false,
      explain: 'Beschäftigte an der Basis und das mittlere Management kennen Prozessschwächen aus erster Hand. Reine Top-Management-Workshops übersehen oft die wirkungsvollsten Chancen (Skript S. 32).',
    },
    {
      type: 'match',
      q: 'Ordne das Feld der Wirkungs-Machbarkeits-Matrix der richtigen Kombination zu.',
      pairs: [
        ['Schnelle Erfolge', 'Hohe Wirkung, hohe Machbarkeit'],
        ['Strategische Wetten', 'Hohe Wirkung, schwierige Umsetzung'],
        ['Zurückstellen', 'Geringe Wirkung, leichte Umsetzung'],
        ['Vermeiden', 'Geringe Wirkung, hohe Komplexität'],
      ],
      explain: 'So beschreibt das Skript die vier Quadranten (S. 36).',
    },
    {
      type: 'multi',
      q: 'Welche Elemente gehören zum AI Use Case Canvas? (Mehrfachauswahl)',
      options: ['Geschäftsproblem', 'Datenanforderungen', 'Teamkompetenzen', 'Kosten und Nutzen', 'Lieblingsfarbe des Sponsors', 'Erfolgskennzahlen'],
      answer: [0, 1, 2, 3, 5],
      explain: 'Das Canvas hat neun Elemente: Problem, Kennzahlen, Daten, KI-Ansatz, technische Machbarkeit, Kompetenzen, Zeitplan, Kosten, Nutzen (Skript S. 35).',
    },
    {
      type: 'single',
      q: 'Ein KI-Projekt kostet über drei Jahre 500.000 € und erzeugt in dieser Zeit 1,25 Mio. € Nutzen. Wie hoch ist der ROI?',
      options: ['150 %', '250 %', '75 %', '40 %'],
      answer: 0,
      explain: '(1.250.000 − 500.000) / 500.000 × 100 % = 150 %.',
    },
    {
      type: 'single',
      q: 'Welcher Anteil der Drei-Jahres-Kosten entfällt im Skript-Beispiel auf den laufenden Betrieb?',
      options: ['Etwa 5 %', 'Etwa 35 %', 'Etwa 70 %', 'Nichts, Betrieb ist kostenlos'],
      answer: 1,
      explain: '12 % + 12 % + 11 % = 35 % für Betrieb über drei Jahre (Skript S. 40). KI-Kosten gehen weit über die Erstentwicklung hinaus.',
    },
    {
      type: 'cloze',
      q: 'Ergänze die Begriffe aus dem Skript.',
      text: 'Die Mindestrendite, mit der ein Unternehmen Investitionen vergleicht, heißt {{Hurdle Rate|Hurdle-Rate}}. Auf Kostenschätzungen für KI sollte man einen Puffer von 20–{{30}} % aufschlagen.',
      explain: 'Hurdle Rate und Vergleich mit Alternativen: Skript S. 42. Puffer 20–30 %: Skript S. 40–41.',
    },
    {
      type: 'tf',
      q: 'Jede Stunde, die ein KI-Tool einspart, ist automatisch eine Kosteneinsparung in gleicher Höhe.',
      answer: false,
      explain: 'Zeitersparnis wird erst zu Geld, wenn die Zeit anders genutzt wird (mehr Aufträge, weniger Überstunden, keine zusätzliche Stelle). Das muss der Business Case ehrlich darstellen.',
    },
    {
      type: 'order',
      q: 'Bringe die Ebenen des Kennzahlensystems in die Reihenfolge von der geringsten zur größten Zahl an Kennzahlen.',
      items: ['Geschäftsleitungsebene (3–5)', 'Operative Managementebene (10–15)', 'Technische Überwachungsebene (20–30)'],
      explain: 'Je näher an der Technik, desto mehr und desto häufiger aktualisierte Kennzahlen (Skript S. 45).',
    },
    {
      type: 'single',
      q: 'Was ist ein „Output“ im Gegensatz zu einem „Outcome“?',
      options: ['Die Kundenzufriedenheit', 'Die Anzahl erzeugter Vorhersagen', 'Die eingesparten Kosten', 'Der Umsatzzuwachs'],
      answer: 1,
      explain: 'Outputs beschreiben, was das System produziert. Outcomes beschreiben den geschaffenen Geschäftswert. Das Skript warnt davor, nur Outputs zu messen (S. 46).',
    },
    {
      type: 'match',
      q: 'Ordne den Reihenfolge-Ansatz seiner Logik zu.',
      pairs: [
        ['Schnelle Erfolge zuerst', 'Hohe Wirkung und Machbarkeit zuerst, um Schwung aufzubauen'],
        ['Kompetenzaufbau', 'Einfache Projekte vor komplexen'],
        ['Wertmaximierung', 'Werthaltigste Projekte zuerst, egal wie schwierig'],
        ['Strategische Reihenfolge', 'Ausrichtung an Prioritäten und Geschäftszyklen'],
      ],
      explain: 'Die vier Ansätze beschreibt das Skript auf S. 49.',
    },
    {
      type: 'order',
      q: 'Bringe die Wellen aus dem Fertigungsbeispiel des Skripts in die richtige Reihenfolge.',
      items: ['Bilderkennung in der Qualitätskontrolle und Wartungshinweise', 'Bedarfsprognose und Lieferkettenoptimierung', 'Ganzheitliche Produktionsoptimierung mit Reinforcement Learning'],
      explain: 'Jede Welle schafft die Voraussetzungen für die nächste: erst hohe Machbarkeit, dann mehr Komplexität, zuletzt der transformative Nutzen (Skript S. 50).',
    },
    {
      type: 'tf',
      q: 'Die oft zitierte Gartner-Zahl „85 % der KI-Projekte liefern fehlerhafte Ergebnisse“ war ursprünglich eine Prognose aus dem Jahr 2018 für den Zeitraum bis 2022.',
      answer: true,
      explain: 'Gartner sagte 2018 voraus, dass bis 2022 85 % der KI-Projekte wegen Verzerrungen fehlerhafte Ergebnisse liefern würden. Das Skript stellt sie als Untersuchungsergebnis dar.',
    },
  ],

  // ───────────────────────── Übungen ─────────────────────────
  exercises: [
    {
      id: 'k2-e1',
      title: 'Use-Case-Portfolio für ein Autohaus',
      scenario: `Du berätst das **Autohaus Berger GmbH (fiktiv)**, 60 Mitarbeitende, Regensburg: Neu- und Gebrauchtwagenverkauf, Werkstatt, Teileverkauf. Die Geschäftsführerin sagt: „Unsere Werkstatt ist ausgebucht, das Telefon klingelt ununterbrochen, im Verkauf schreiben wir Fahrzeugbeschreibungen von Hand, und die Garantieanträge beim Hersteller kosten uns jede Woche Stunden.“ Daten: Werkstattplanungssystem, Dealer-Management-System, E-Mail-Postfächer. Es gibt eine IT-Fachkraft und einen externen Dienstleister.`,
      task: `1. Leite **mindestens vier Use Cases** problemorientiert aus der Beschreibung ab (Problem + KI-Muster).
2. Bewerte sie mit **gewichtetem Scoring** (Wirkung 40 %, Machbarkeit 30 %, Passung 20 %, Dringlichkeit 10 %, je 1–10) und ordne sie den **Feldern der Matrix** zu.
3. Wähle ein **Verteilungsmodell** und plane **zwei Wellen** mit Begründung und mindestens einer **Abhängigkeit**.
4. Triff für den ersten Use Case eine **Build-/Buy-/Partner-Entscheidung** und nenne ein Risiko mit Gegenmaßnahme.`,
      deliverable: 'Scoring-Tabelle plus 200–350 Wörter zu Matrix, Wellen und Entscheidung',
      template: `| Use Case | Problem / KI-Muster | Wirkung | Machbarkeit | Passung | Dringlichkeit | Gesamt |
|---|---|---|---|---|---|---|

Matrix-Felder: …
Verteilungsmodell: …
Welle 1: …  Welle 2: …  Abhängigkeit: …
Build/Buy/Partner + Risiko: …`,
      rubric: [
        { criterion: 'Leitet mindestens vier Use Cases aus den genannten Problemen ab', keywords: ['telefon', 'werkstatt', 'fahrzeugbeschreib', 'garantie', 'termin', 'e-mail', 'anfrage'], min: 3, hint: 'Welche vier Schmerzpunkte nennt die Geschäftsführerin?' },
        { criterion: 'Rechnet ein nachvollziehbares gewichtetes Scoring', keywords: ['0,4', '0,3', '0,2', '0,1', 'gewicht', 'gesamt'], min: 2, hint: 'Multipliziere jeden Wert mit seinem Gewicht und addiere.' },
        { criterion: 'Ordnet die Matrix-Felder zu', keywords: ['schnelle erfolg', 'quick win', 'strategische wette', 'zurückstell', 'vermeid'], min: 2, hint: 'Welche Use Cases sind schnelle Erfolge, welche strategische Wetten?' },
        { criterion: 'Wählt ein Verteilungsmodell und plant Wellen mit Abhängigkeit', keywords: ['konzentriert', 'phasen', 'ausgewogen', 'welle', 'abhängig', 'voraussetz'], min: 3, hint: 'Passt bei einer IT-Fachkraft eher konzentriert/phasenweise oder ausgewogen?' },
        { criterion: 'Trifft Build/Buy/Partner-Entscheidung mit Risiko und Gegenmaßnahme', keywords: ['buy', 'build', 'partner', 'datenschutz', 'dsgvo', 'risiko', 'mensch', 'prüf'], min: 2, hint: 'Ist der Use Case ein verbreiteter Standardfall? Welche personenbezogenen Daten sind im Spiel?' },
      ],
      hints: [
        'Starte bei den Schmerzpunkten, nicht bei Tools: Was kostet heute Zeit oder Nerven?',
        'Typische Muster: Fahrzeugbeschreibungen generieren, Anfragen klassifizieren und Antworten entwerfen, Garantieanträge extrahieren/vorbefüllen, Werkstattauslastung vorhersagen.',
        'Mit nur einer IT-Fachkraft passt phasenweise. Welle 1: zwei schnelle Erfolge. Welle 2: ein Vorhaben, das von Welle 1 profitiert, z. B. Werkstattprognose, sobald die Planungsdaten gepflegt sind.',
      ],
      sample: `| Use Case | Problem / KI-Muster | W | M | P | D | Gesamt |
|---|---|---|---|---|---|---|
| Anfragen vorsortieren + Antwortentwurf | Telefon/E-Mail überlastet · Klassifizieren/Generieren | 8 | 8 | 8 | 9 | 3,2 + 2,4 + 1,6 + 0,9 = **8,1** |
| Fahrzeugbeschreibungen | Handarbeit im Verkauf · Generieren | 6 | 9 | 6 | 6 | 2,4 + 2,7 + 1,2 + 0,6 = **6,9** |
| Garantieanträge vorbefüllen | Stunden pro Woche · Extrahieren/Generieren | 7 | 5 | 7 | 7 | 2,8 + 1,5 + 1,4 + 0,7 = **6,4** |
| Werkstattauslastung prognostizieren | ausgebucht, schlecht planbar · Vorhersagen | 8 | 3 | 8 | 5 | 3,2 + 0,9 + 1,6 + 0,5 = **6,2** |

**Matrix:** Anfragen und Fahrzeugbeschreibungen sind schnelle Erfolge, die Werkstattprognose ist eine strategische Wette (Historie lückenhaft), Garantieanträge liegen dazwischen.

**Verteilungsmodell:** phasenweise, weil nur eine IT-Fachkraft und geringe KI-Reife.

**Welle 1 (Monat 1–4):** Anfragen-Vorsortierung und Fahrzeugbeschreibungen. **Welle 2 (Monat 5–12):** Garantieanträge, danach die Werkstattprognose. **Abhängigkeit:** Die Prognose braucht sauber gepflegte Auftragsdaten im Werkstattplaner, die ab Welle 1 konsequent erfasst werden.

**Build/Buy/Partner (Anfragen):** Low-Code-Workflow mit EU-gehostetem Modell, Einrichtung durch den Dienstleister (*Partner*), Betrieb danach intern. **Risiko:** Kundendaten in E-Mails (DSGVO). **Gegenmaßnahme:** Auftragsverarbeitungsvertrag, EU-Verarbeitung, Datensparsamkeit; Entwürfe werden immer von Mitarbeitenden geprüft und versendet.`,
    },
    {
      id: 'k2-e2',
      title: 'Business Case mit Kennzahlensystem für einen Dokumenten-Assistenten',
      scenario: `Die **Steuerkanzlei Hoffmann & Partner (fiktiv)**, 25 Mitarbeitende, Leipzig, erhält monatlich rund **900 Belege** per Upload, die heute manuell vorkontiert werden (durchschnittlich **4 Minuten** pro Beleg). Ein Anbieter verspricht, dass sein KI-Tool die Zeit auf **1 Minute** pro Beleg (Prüfung) senkt. Kosten laut Angebot: **8.000 €** einmalig (Einrichtung, Schulung) und **450 €/Monat**. Interner Stundensatz: **48 €**.`,
      task: `1. Berechne Nutzen und Kosten über **drei Jahre**, den **Drei-Jahres-ROI** und die **Amortisationszeit**, zusätzlich mit **25 % Kostenpuffer**.
2. Benenne die **kritischste Annahme** und rechne einen **konservativen Basisfall**.
3. Lege je eine **Kennzahl für jede Ebene** des Kennzahlensystems fest (Geschäftsleitung, Management, Technik) und unterscheide **Früh- und Spätindikator**. Beschreibe, wie du die **Baseline** misst.
4. Formuliere eine Empfehlung mit einem **SMART-Erfolgskriterium** für den Pilot.`,
      deliverable: 'Kurzer Business Case (ca. 250–400 Wörter) mit Rechenweg und Kennzahlentabelle',
      template: `Nutzen 3 Jahre: …
Kosten 3 Jahre (ohne/mit Puffer): …
ROI 3 Jahre: …   Amortisation: …
Kritische Annahme + konservativer Basisfall: …

| Ebene | Kennzahl | Früh/Spät |
|---|---|---|

Baseline: …
Empfehlung + SMART-Kriterium: …`,
      rubric: [
        { criterion: 'Rechnet Nutzen, Kosten, ROI und Amortisation über drei Jahre nachvollziehbar', keywords: ['roi', 'amortis', 'drei jahre', '3 jahre', 'nutzen', 'kosten'], min: 4, hint: 'Zeitersparnis pro Beleg × Belege × Stundensatz × 36 Monate – und dann die Formel aus Abschnitt 2.3.' },
        { criterion: 'Berücksichtigt Puffer und konservativen Basisfall', keywords: ['puffer', 'konservativ', 'basisfall', 'annahme', 'szenario'], min: 2, hint: 'Welche Zahl stammt vom Anbieter und ist noch nicht gemessen?' },
        { criterion: 'Legt Kennzahlen für alle drei Ebenen fest', keywords: ['geschäftsleitung', 'management', 'technisch', 'ebene'], min: 2, hint: 'Was will die Partnerrunde sehen, was das Team, was die technische Betreuung?' },
        { criterion: 'Unterscheidet Früh- und Spätindikatoren und plant die Baseline', keywords: ['früh', 'spät', 'baseline', 'ausgangswert', 'kontrollgruppe', 'vorher'], min: 2, hint: 'Woran erkennst du früh, dass es klappt? Und wie misst du den Ist-Zustand vor dem Start?' },
        { criterion: 'Gibt eine Empfehlung mit SMART-Kriterium', keywords: ['pilot', 'smart', 'bis', 'wochen', 'korrektur', 'minute'], min: 2, hint: 'Was genau muss bis wann erreicht sein, damit ihr weitermacht?' },
      ],
      hints: [
        'Beginne mit der eingesparten Zeit pro Monat: 900 Belege × 3 Minuten.',
        '2.700 Minuten = 45 Stunden × 48 € = 2.160 € pro Monat. Für drei Jahre mal 36. Kosten: 8.000 € + 36 × 450 €.',
        'Konservativ: Was, wenn die Prüfung 2 statt 1 Minute dauert? Frühindikator: Korrekturquote der KI-Vorschläge. Spätindikator: Kosten pro Beleg oder freie Kapazität für Beratung.',
      ],
      sample: `**Nutzen 3 Jahre:** 900 × 3 min = 45 h/Monat × 48 € = 2.160 €/Monat → 36 × 2.160 € = **77.760 €**.
**Kosten 3 Jahre:** 8.000 € + 36 × 450 € = **24.200 €**; mit 25 % Puffer **30.250 €**.
**ROI 3 Jahre:** (77.760 − 24.200) / 24.200 ≈ **221 %**; mit Puffer (77.760 − 30.250) / 30.250 ≈ **157 %**.
**Amortisation:** 8.000 / (2.160 − 450) ≈ **4,7 Monate**.

**Kritische Annahme:** 1 Minute Prüfzeit (Anbieterangabe). *Konservativ:* 2 Minuten → 900 × 2 min = 30 h × 48 € = 1.440 €/Monat → 51.840 € in drei Jahren; ROI mit Puffer (51.840 − 30.250) / 30.250 ≈ 71 %. Auch konservativ lohnt es sich, vorausgesetzt, die Zeit wird für Beratung oder zusätzliche Mandate genutzt.

| Ebene | Kennzahl | Früh/Spät |
|---|---|---|
| Geschäftsleitung | Kosten pro Beleg (inkl. Prüfzeit und Lizenz) | Spät |
| Management | Durchschnittliche Prüfzeit pro Beleg, Anteil aktiv nutzender Mitarbeitender | Früh |
| Technik | Anteil korrekt vorkontierter Belege (Korrekturquote), Verarbeitungszeit | Früh |

**Baseline:** Vier Wochen vor dem Start misst das Team bei einer Stichprobe von 300 Belegen die Minuten pro Beleg; zusätzlich arbeitet ein Team im Pilot noch ohne Tool weiter (Kontrollgruppe).

**Empfehlung:** sechswöchiger Pilot mit zwei Mitarbeitenden. **SMART:** „Bis Ende des Pilots liegt die durchschnittliche Prüfzeit bei höchstens 2 Minuten pro Beleg bei einer Korrekturquote unter 10 %.“ Danach Go/No-Go durch die Partner. Risiken: Berufsgeheimnis und Datenschutz (Auftragsverarbeitung, EU-Verarbeitung) und Fehler in der Vorkontierung (Prüfung durch Fachkraft bleibt Pflicht).`,
    },
  ],

  glossary: [
    { term: '5P-Framework', def: 'Raster zur Chancensuche mit fünf Dimensionen: Purpose (Ziele), People (Beteiligte), Process (Abläufe), Platform (Technologie), Performance (Ergebnisse).' },
    { term: 'Jobs-to-be-Done', def: 'Methode nach Clayton Christensen, die nach der eigentlichen Aufgabe (funktional, emotional, sozial) hinter einer Tätigkeit fragt.' },
    { term: 'KI-Tourismus', def: 'Experimentieren mit KI in unwichtigen Bereichen ohne echten Geschäftsnutzen.' },
    { term: 'AI Use Case Canvas', def: 'Aus dem Business Model Canvas abgeleitetes Bewertungsinstrument mit neun Elementen von Geschäftsproblem bis Nutzen.' },
    { term: 'Wirkungs-Machbarkeits-Matrix', def: 'Priorisierungswerkzeug mit den Feldern schnelle Erfolge, strategische Wetten, zurückstellen und vermeiden.' },
    { term: 'ROI', def: 'Return on Investment: (Gesamtnutzen − Gesamtkosten) / Gesamtkosten × 100 %, bei KI meist über drei Jahre.' },
    { term: 'Harter / weicher ROI', def: 'Harter ROI ist direkt in Geld messbar (Umsatz, Kosten, Risiko); weicher ROI umfasst wertvolle, schwer bezifferbare Effekte wie Zufriedenheit oder Wissensaufbau.' },
    { term: 'Hurdle Rate', def: 'Mindestrendite, die eine Investition erreichen muss, um gegenüber anderen Verwendungen des Kapitals attraktiv zu sein.' },
    { term: 'Amortisationszeit', def: 'Zeitraum, nach dem die einmaligen Kosten durch den laufenden Nettonutzen wieder eingespielt sind.' },
    { term: 'Früh- und Spätindikator', def: 'Frühindikatoren (Leading) messen Zwischenergebnisse und Verhalten, Spätindikatoren (Lagging) die geschäftlichen Endergebnisse.' },
    { term: 'Baseline', def: 'Ausgangswert einer Kennzahl vor der Einführung, laut Skript möglichst über 3–6 Monate erhoben. Grundlage jedes Wirkungsnachweises.' },
    { term: 'SMART', def: 'Zielkriterien: spezifisch, messbar, attraktiv/erreichbar, relevant, terminiert.' },
    { term: 'Gewichtetes Scoring', def: 'Priorisierung, bei der Bewertungen je Kriterium mit Gewichten multipliziert und zu einem Gesamtwert addiert werden.' },
    { term: 'Sunk-Cost-Falle', def: 'Festhalten an einem schlecht laufenden Vorhaben, nur weil bereits viel investiert wurde.' },
    { term: 'Zombie-Projekt', def: 'Vorhaben, das Ressourcen bindet, ohne Nutzen zu liefern, und mangels Portfolio-Review nicht beendet wird.' },
  ],

  sources: [
    { title: 'Know Your Customers’ “Jobs to Be Done” (Christensen, Hall, Dillon, Duncan)', publisher: 'Harvard Business Review', year: 2016, type: 'Artikel', url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done' },
    { title: 'The Business Model Canvas', publisher: 'Strategyzer', year: 2026, type: 'Leitfaden', url: 'https://www.strategyzer.com/library/the-business-model-canvas' },
    { title: 'Process Mining Manifesto', publisher: 'IEEE Task Force on Process Mining', year: 2012, type: 'Leitfaden', url: 'https://www.tf-pm.org/resources/manifesto' },
    { title: 'Where’s the Value in AI?', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/publications/2024/wheres-value-in-ai' },
    { title: 'Four AI deployment lessons from Gartner', publisher: 'ITWeb', year: 2018, type: 'Artikel', url: 'https://www.itweb.co.za/article/four-ai-deployment-lessons-from-gartner/mQwkoM6K3XLq3r9A' },
    { title: 'Nationwide real-world implementation of AI for cancer detection in population-based mammography screening (Eisemann et al.)', publisher: 'Nature Medicine', year: 2025, type: 'Paper', url: 'https://www.nature.com/articles/s41591-024-03408-6' },
    { title: 'KI-Landkarte', publisher: 'Plattform Lernende Systeme', year: 2026, type: 'Tool', url: 'https://www.plattform-lernende-systeme.de/ki-landkarte.html' },
    { title: 'Generative AI at Work (Brynjolfsson, Li, Raymond), NBER Working Paper 31161', publisher: 'NBER', year: 2023, type: 'Studie', url: 'https://www.nber.org/papers/w31161' },
    { title: 'Was ist Mittelstand-Digital?', publisher: 'Mittelstand-Digital / BMWE', year: 2026, type: 'Doku', url: 'https://www.mittelstand-digital.de/MD/Navigation/DE/Ueber-uns/was-ist-mittelstand-digital/was-ist-md.html' },
    { title: 'ERP-Förderkredit Digitalisierung (511, 512)', publisher: 'KfW', year: 2026, type: 'Doku', url: 'https://www.kfw.de/inlandsfoerderung/Unternehmen/Innovation-und-Digitalisierung/F%C3%B6rderprodukte/ERP-F%C3%B6rderkredit-Digitalisierung-%28511-512%29/' },
    { title: 'Förderung von Unternehmensberatungen für KMU', publisher: 'BAFA', year: 2026, type: 'Doku', url: 'https://www.bafa.de/DE/Wirtschaft/Beratung_Finanzierung/Unternehmensberatung/unternehmensberatung_node.html' },
    { title: 'European Digital Innovation Hubs', publisher: 'Europäische Kommission', year: 2026, type: 'Doku', url: 'https://european-digital-innovation-hubs.ec.europa.eu/home' },
    { title: 'Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing (Kohavi, Tang, Xu)', publisher: 'Cambridge University Press', year: 2020, type: 'Fachbuch', url: 'https://experimentguide.com/' },
    { title: 'AI Risk Management Framework (Funktion „Measure“)', publisher: 'NIST', year: 2023, type: 'Leitfaden', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  ],
};
