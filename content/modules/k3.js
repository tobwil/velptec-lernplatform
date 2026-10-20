// Kapitel 3 – Datenmanagement und Datenqualität für KI (Theorieskript K7.0069, S. 52–71)
export default {
  id: 'k3',
  order: 3,
  chapter: 3,
  title: 'Datenmanagement und Datenqualität für KI',
  subtitle: 'Daten als Fundament, sechs Qualitätsdimensionen, Data Governance, Aufbereitung und Datenschutz',
  icon: 'chart',
  isNew: false,
  minutes: 120,
  skript: [
    { chapter: '3.1', title: 'Daten als Grundlage für KI', page: 53 },
    { chapter: '3.2', title: 'Dimensionen der Datenqualität und ihre Bewertung', page: 57 },
    { chapter: '3.3', title: 'Data Governance für KI', page: 61 },
    { chapter: '3.4', title: 'Datenaufbereitung und Datenschutz', page: 66 },
  ],
  objectives: [
    'Du erklärst, warum Datenqualität Leistung und Geschäftsnutzen eines KI-Systems unmittelbar bestimmt, und kennst die Bedarfshierarchie Menge → Merkmale → Qualität.',
    'Du unterscheidest den Datenbedarf von überwachtem, unüberwachtem und bestärkendem Lernen und beschreibst die Grundarchitektur eines Trainingsdatensatzes (Labels, Merkmale, Beispiele).',
    'Du bewertest Unternehmensdaten anhand der sechs Kerndimensionen Korrektheit, Vollständigkeit, Konsistenz, Aktualität, Gültigkeit und Eindeutigkeit und baust dafür eine Datenqualitäts-Scorecard.',
    'Du entwirfst eine Data-Governance-Struktur mit Rat, Data Owners, Data Stewards, Technik- und Compliance-Rollen sowie den passenden Richtlinien, Katalog und Datenherkunft (Lineage).',
    'Du beschreibst die fünf Schritte der Datenaufbereitung und typische Fehler wie Data Leakage.',
    'Du wählst passende Datenschutzverfahren (Datenminimierung, Anonymisierung, Pseudonymisierung, Differential Privacy, föderiertes Lernen, DSFA) für ein KI-Projekt aus.',
  ],
  lessons: [
    // ───────────────────────── Lektion 1 – 3.1 ─────────────────────────
    {
      id: 'k3-l1',
      title: '3.1 Daten als Grundlage für KI',
      minutes: 25,
      skript: { chapter: '3.1', page: 53 },
      blocks: [
        { type: 'video', scene: 'daten' },
        {
          type: 'text',
          md: `Klassische Software folgt Regeln, die ein Mensch geschrieben hat: „Berechne 19 % Umsatzsteuer“ – egal, welche Daten durchlaufen. Ein KI-System dagegen **lernt seine Regeln aus Beispielen**. Damit übernimmt es alles, was in diesen Beispielen steckt: Muster, aber auch Lücken, Fehler und Verzerrungen. Deshalb beginnt Kapitel 3 des Skripts mit einem Satz, den du dir für jedes KI-Projekt merken solltest: *Müll rein, Müll raus.*`,
        },
        {
          type: 'skript',
          chapter: '3.1',
          page: 53,
          quote: 'Das Prinzip „Müll rein, Müll raus” ist bei KI um ein Vielfaches kritischer als bei herkömmlicher Software.',
          md: `**Kernaussagen des Abschnitts 3.1 (S. 53–56):**

- Daten sind der **Rohstoff** von KI. Wie ein Gebäude von seinem Fundament hängt ein KI-System von der Qualität seiner Trainingsdaten ab.
- Fehlerhafte Trainingsdaten erzeugen **dauerhaft fehlerhafte Modelle** – behoben wird das nur durch neues Training mit besseren Daten. Anders als ein Mensch „merkt“ das System nicht, dass etwas nicht stimmt, sondern handelt mit voller Überzeugung.
- **Beispiel Bank (Skript):** Historische Kreditentscheidungen mit Benachteiligung bestimmter Gruppen bringen der KI Diskriminierung bei – in großem Maßstab und mit rechtlichen Folgen. Fehlende oder veraltete Einkommensdaten führen zu zu riskanten oder zu vorsichtigen Entscheidungen.
- **Bedarfshierarchie:** ausreichende **Menge** → relevante **Merkmale** → **Qualität** (korrekt, vollständig, konsistent, aktuell).
- Jede **Lernart** stellt eigene Anforderungen an die Daten (gelabelt, ungelabelt, Feedbackschleifen).
- **Datenzentrierte statt modellzentrierte KI:** Meist begrenzt die Datenqualität die erreichbare Leistung stärker als die Wahl des Algorithmus.
- Faustregel des Skripts: **60–70 % des Projektaufwands** für Datenarbeit, 30–40 % für Modellierung. Wer Daten als **strategisches Gut** behandelt, verschafft sich schwer kopierbare Wettbewerbsvorteile.`,
        },
        {
          type: 'steps',
          items: [
            { title: 'Ebene 1 · Menge', md: 'Genug Beispiele, damit verlässliche Muster entstehen – meist Hunderte bis Tausende. Für eine Abwanderungsprognose brauchst du Tausende Kundinnen und Kunden, und zwar **gebliebene und abgewanderte**.' },
            { title: 'Ebene 2 · Relevante Merkmale', md: 'Die Daten müssen Informationen mit **Vorhersagekraft** enthalten: Kaufhäufigkeit, Support-Anfragen, Nutzungskennzahlen – nicht die Stellplatznummer auf dem Firmenparkplatz.' },
            { title: 'Ebene 3 · Qualität', md: 'Erst wenn Menge und Merkmale stimmen, entscheidet die Qualität: korrekt, vollständig, konsistent, aktuell. Die Dimensionen im Detail lernst du in Abschnitt 3.2.' },
          ],
        },
        {
          type: 'table',
          caption: 'Lernarten und ihr Datenbedarf (nach Skript 3.1, ergänzt um Praxisbeispiele)',
          head: ['Lernart', 'Was die Daten brauchen', 'Beispiel aus dem Skript', 'Beispiel im Mittelstand'],
          rows: [
            ['Überwachtes Lernen (Supervised)', 'Gelabelte Beispiele: jedes mit der richtigen Antwort', 'Tausende Transaktionen, markiert als „betrügerisch“ oder „legitim“', 'Reklamationen mit festgestellter Ursache'],
            ['Unüberwachtes Lernen (Unsupervised)', 'Ungelabelte Daten; das System sucht selbst Gruppen', 'Kundensegmentierung', 'Artikel nach Bestellmustern clustern'],
            ['Bestärkendes Lernen (Reinforcement)', 'Simulationsumgebung oder Rückmeldeschleifen aus der Realität', 'Autonome Entscheidungen durch Versuch und Irrtum', 'Lagerroboter lernt Wege in einer Simulation'],
          ],
        },
        {
          type: 'table',
          caption: 'Grundarchitektur eines Trainingsdatensatzes am Beispiel „Kundenabwanderung vorhersagen“ (Skript S. 54–55)',
          head: ['Datentyp', 'Beispiele', 'Warum unverzichtbar'],
          rows: [
            ['Zielvariable (Label)', 'Abgewandert: ja/nein', 'Daran lernt die KI, wie Abwanderung aussieht'],
            ['Verhaltensmerkmale', 'Kaufhäufigkeit, Anmeldemuster, Support-Anfragen', 'Muster, die Abwanderung ankündigen'],
            ['Demografische Merkmale', 'Kontoalter, Abostufe, Unternehmensgröße', 'Kontext, der Abwanderung beeinflusst'],
            ['Zeitliche Merkmale', 'Trendänderungen, Saisonalität', 'Veränderungen über die Zeit zeigen Risiken an'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: 'Ein Trainingsdatensatz braucht drei Dinge: das **Ergebnis**, das du vorhersagen willst (Label), **Merkmale mit Vorhersagekraft** und **genug Beispiele aus verschiedenen Situationen**, damit das Modell verallgemeinern kann.',
        },
        {
          type: 'table',
          caption: 'Ergänzung: Datenarten und typische KI-Methoden',
          head: ['Datenart', 'Merkmal', 'Beispiele', 'Typische KI-Methode'],
          rows: [
            ['Strukturiert', 'Feste Tabellenform mit definierten Spalten', 'ERP-Buchungen, Sensormesswerte, CRM-Stammdaten', 'Klassisches ML (z. B. Entscheidungsbäume)'],
            ['Halbstrukturiert', 'Teilweise Struktur durch Tags oder Schlüssel', 'JSON/XML, E-Mails (Kopfzeilen + Freitext), Logfiles', 'Parsing + ML/NLP'],
            ['Unstrukturiert', 'Keine vorgegebene Struktur', 'PDFs, Fotos, Sprachaufnahmen, Chatverläufe', 'Deep Learning, LLMs, Computer Vision'],
          ],
        },
        {
          type: 'text',
          md: `### Datenzentriert statt modellzentriert

In der frühen KI-Entwicklung galt: Wer bessere Ergebnisse will, probiert andere Netzarchitekturen oder optimiert Hyperparameter (**modellzentriert**). Der KI-Forscher **Andrew Ng** hat ab 2021 den Gegenentwurf populär gemacht: **datenzentrierte KI** – die Daten systematisch verbessern, statt immer neue Modelle zu testen. Das Skript nennt als Größenordnung: Datenverbesserung bringe oft 10–20 % mehr Genauigkeit, ein Algorithmuswechsel meist nur 1–3 %. Nimm solche Spannen als **Faustregel**, nicht als Naturgesetz.

Ein Beispiel aus Ngs Vortrag: Bei einer Fehlererkennung auf Stahlblechen brachte monatelanges Modell-Tuning praktisch keinen Fortschritt; erst **einheitlichere Labels** (Fachleute einigten sich, was als welcher Defekt gilt) hoben die Genauigkeit deutlich an. Für dich als KI-Managerin oder KI-Manager heißt das: Budget und Zeit gehören zuerst in **Datenerhebung, Bereinigung, Labeling und Validierung**.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Woher stammen die 12,9 Mio. US-Dollar?',
          md: `Das Skript nennt in der Kapiteleinleitung eine „Gartner-Studie aus dem Jahr 2024“, nach der mangelhafte Datenqualität Unternehmen im Schnitt **12,9 Mio. US-Dollar pro Jahr** kostet. Die Zahl wird tatsächlich seit Jahren von Gartner verbreitet – sie geht aber auf Gartner-Forschung aus **2020** zurück: Kundinnen und Kunden von Datenqualitäts-Softwareanbietern haben ihre Kosten **selbst geschätzt**. Das macht die Zahl nicht wertlos, aber sie ist kein gemessener Durchschnitt für alle Unternehmen – und schon gar nicht für den deutschen Mittelstand.

**Für deine Praxis:** Zitiere solche Zahlen mit Herkunft und Grenzen. Überzeugender ist eine eigene Rechnung: Wie viele Retouren, Fehlbestellungen oder Nacharbeiten gehen in deinem Haus auf falsche Stammdaten zurück?`,
          sources: [
            { title: 'Reliable: The Cost of Bad Manufacturing Data (Herkunft der Gartner-Zahl)', url: 'https://reliamag.com/topics/guides/cost-of-bad-manufacturing-data' },
            { title: 'MIT Sloan: Why it’s time for „data-centric artificial intelligence“ (2022)', url: 'https://mitsloan.mit.edu/ideas-made-to-matter/why-its-time-data-centric-artificial-intelligence' },
          ],
        },
        {
          type: 'praxis',
          title: 'Datenqualitäts-Check vor dem ersten Prognosemodell',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Die Serviceleitung möchte vorhersagen, welche Heizungsanlagen in den nächsten drei Monaten voraussichtlich ausfallen, um Wartungen proaktiv anzubieten. Grundlage sollen 8 Jahre Serviceaufträge aus dem ERP, Freitext-Notizen der Techniker und Herstellerangaben zu Anlagentypen sein. Ein Dienstleister bietet an, „sofort ein Modell zu trainieren“.`,
          steps: [
            'Bremse den Schnellstart: Vereinbare zuerst ein zwei- bis vierwöchiges Daten-Assessment – im Projektplan rechnest du ohnehin mit 60–70 % Datenarbeit.',
            'Prüfe die Bedarfshierarchie von unten: Gibt es genug **Ausfälle** im Datensatz (Menge)? Sind Merkmale mit Vorhersagekraft vorhanden – Anlagenalter, Störungshistorie, Wartungsintervalle (Merkmale)?',
            'Kläre das Label: Wo ist „Ausfall“ eindeutig erfasst? Wenn Techniker Ursachen uneinheitlich eintragen, ist das ein datenzentriertes Problem, kein Modellproblem.',
            'Ordne die Datenarten zu: Aufträge sind strukturiert, Techniker-Notizen unstrukturiert. Für die Notizen brauchst du NLP oder ein LLM.',
            'Definiere ein Abbruchkriterium: Fehlen in mehr als einem Drittel der Fälle die Ausfallursachen, folgt erst ein Prozessprojekt zur sauberen Datenerfassung.',
          ],
          takeaway: `Der größte Hebel liegt fast immer in den **Daten**, nicht im Modell. Wer Menge, Merkmale und Labels früh prüft, spart Geld und verhindert Modelle, die gut aussehen, aber falsche Entscheidungen treffen.`,
        },
        {
          type: 'links',
          title: 'Vertiefen: datenzentrierte KI',
          items: [
            { title: 'A Chat with Andrew on MLOps: From Model-centric to Data-centric AI (DeepLearningAI, YouTube)', url: 'https://www.youtube.com/watch?v=06-AZXmwHjo', note: 'Vortrag von Andrew Ng (englisch), in dem er den datenzentrierten Ansatz vorstellt' },
            { title: 'Data-Centric AI Resource Hub', url: 'https://datacentricai.org/', note: 'Sammlung von Material zum datenzentrierten Ansatz (englisch)' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Vervollständige die Bedarfshierarchie aus Abschnitt 3.1.',
          text: 'Unterste Ebene: ausreichende {{Menge|Datenmenge}}. Mittlere Ebene: relevante {{Merkmale|Features}}. Oberste Ebene: {{Qualität|Datenqualität}}.',
          explain: 'Ohne genug Beispiele entstehen keine verlässlichen Muster; ohne Merkmale mit Vorhersagekraft hilft auch die beste Qualität nicht (Skript S. 54).',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Versicherer will Betrugsfälle erkennen und hat 40.000 alte Schadensmeldungen, jeweils mit dem Prüfergebnis „Betrug“ oder „kein Betrug“. Welche Lernart passt – und was ist die wichtigste Datenvoraussetzung?',
          options: ['Unüberwachtes Lernen – möglichst viele Merkmale', 'Überwachtes Lernen – korrekte, einheitliche Labels', 'Bestärkendes Lernen – eine Simulationsumgebung', 'Gar kein Lernen – feste Regeln reichen immer'],
          answer: 1,
          explain: 'Es gibt Beispiele mit bekannter richtiger Antwort, also überwachtes Lernen. Sind die Labels falsch oder uneinheitlich, lernt das Modell ein verzerrtes Bild von Betrug (Skript S. 54 und S. 58).',
        },
      ],
    },

    // ───────────────────────── Lektion 2 – 3.2 ─────────────────────────
    {
      id: 'k3-l2',
      title: '3.2 Dimensionen der Datenqualität und ihre Bewertung',
      minutes: 25,
      skript: { chapter: '3.2', page: 57 },
      blocks: [
        {
          type: 'text',
          md: `„Unsere Daten sind schlecht“ ist keine Diagnose. Erst wenn du sagen kannst, **in welcher Hinsicht** sie schlecht sind und **wie stark**, kannst du Maßnahmen priorisieren und Fortschritt messen. Genau dafür gibt dir Abschnitt 3.2 sechs Dimensionen an die Hand.`,
        },
        {
          type: 'skript',
          chapter: '3.2',
          page: 57,
          md: `**Kernaussagen des Abschnitts 3.2 (S. 57–61):**

- Datenqualität ist **mehrdimensional**, nicht einfach „gut“ oder „schlecht“.
- Das verbreitetste Rahmenwerk kennt **sechs Kerndimensionen:** Korrektheit, Vollständigkeit, Konsistenz, Aktualität, Gültigkeit, Eindeutigkeit.
- **Jede Dimension braucht einen Mindestwert** – eine einzige schwache Dimension beeinträchtigt das ganze KI-System.
- Jede Dimension wird mit einer **konkreten Kennzahl** gemessen (z. B. Duplikatquote).
- Startpunkt ist eine **Datenqualitäts-Scorecard** mit Ausgangswerten, Zielen und monatlichem Tracking.
- Das Skript nennt **sechs typische Problemquellen** (Silos, Altsysteme, manuelle Eingabe, fehlende Validierung, fehlende Verantwortliche, technische Altlasten) und **fünf bewährte Gegenmaßnahmen**.`,
        },
        {
          type: 'table',
          caption: 'Die sechs Kerndimensionen mit Leitfrage, Skript-Beispiel, KI-Folge und Kennzahl',
          head: ['Dimension', 'Leitfrage', 'Beispiel aus dem Skript', 'Folge für die KI', 'Kennzahl'],
          rows: [
            ['**Korrektheit**', 'Bildet der Wert die Realität richtig ab?', 'Telekommunikationsanbieter: nur 73 % der Adressen korrekt', 'Bei 30 % falschen Betrugslabels lernt das Modell ein verzerrtes Bild', 'Anteil per Stichprobe bestätigter Datensätze'],
            ['**Vollständigkeit**', 'Sind alle nötigen Felder gefüllt?', 'Gesundheitsdienstleister: bei 40 % der Akten fehlen Allergieangaben', 'Datensätze verwerfen oder schätzen (Imputation); fehlen Daten systematisch, entsteht Bias', 'Anteil der Datensätze mit allen Pflichtfeldern'],
            ['**Konsistenz**', 'Hat dasselbe Element überall denselben Wert?', '„Hauptstr. 123“ im Shop, „Hauptstraße 123“ im CRM', 'Widersprüchliche Signale, z. B. drei Regionen mit unterschiedlichen Betrugsstandards', 'Übereinstimmungsrate zwischen Quellsystemen'],
            ['**Aktualität**', 'Ist der Wert aktuell und rechtzeitig verfügbar?', 'Empfehlungssystem mit drei Jahre alten Kaufdaten', 'Vorschläge passen nicht mehr; Pipeline-Verzögerungen bremsen', 'Durchschnittsalter, Anteil innerhalb der Frischevorgabe'],
            ['**Gültigkeit**', 'Hält der Wert Formate und Geschäftsregeln ein?', 'Telefonnummer „ruf mich an“; Bestellsumme ≠ Summe der Posten', 'Ungültige Werte fließen bis in die Trainingsdaten', 'Anteil regelkonformer Datensätze'],
            ['**Eindeutigkeit**', 'Kommt jede Entität genau einmal vor?', 'Beste Kunden dreifach im Datensatz', 'Übergewichtung einzelner Gruppen, verzerrte Vorhersagen', 'Duplikatquote'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Zum Mini-Spiel',
          md: 'Im folgenden Spiel sortierst du Kundendatensätze. Die Auflösungen verwenden teils andere, ebenfalls gebräuchliche Begriffe: Formatfehler (z. B. Komma in der E-Mail-Adresse) heißen im Skript **Gültigkeit**, Duplikate **Eindeutigkeit**. „Relevanz“ gehört im Skript zur Bedarfshierarchie aus 3.1 (relevante Merkmale). Ordne beim Spielen jede Auflösung gedanklich einer der sechs Skript-Dimensionen zu.',
        },
        { type: 'interactive', widget: 'data-quality', props: {} },
        {
          type: 'text',
          md: `### Die Datenqualitäts-Scorecard

Das Skript empfiehlt, mit einer **Scorecard** zu starten: Für jeden wichtigen Datenbestand misst du jede Dimension, legst einen **Ausgangswert** fest, definierst ein **Ziel mit Termin** (z. B. Vollständigkeit in sechs Monaten von 82 % auf 95 %) und verfolgst den Fortschritt **monatlich**. Das schafft Verbindlichkeit und macht Qualitätsarbeit sichtbar.`,
        },
        {
          type: 'table',
          caption: 'Beispiel-Scorecard „Kundenstammdaten“ – fiktive Werte',
          head: ['Dimension', 'Kennzahl', 'Ausgangswert', 'Ziel (6 Monate)', 'Verantwortlich'],
          rows: [
            ['Korrektheit', 'Stichprobe 200 Adressen gegen Rücklauf/Adressprüfung', '88 %', '97 %', 'Data Steward Vertrieb'],
            ['Vollständigkeit', 'Datensätze mit E-Mail, PLZ, Kundentyp', '82 %', '95 %', 'Data Steward Vertrieb'],
            ['Konsistenz', 'Übereinstimmung Kundennummer/Adresse ERP ↔ CRM', '91 %', '99 %', 'IT / Data Engineer'],
            ['Aktualität', 'Anteil mit Änderung in den letzten 24 Monaten', '70 %', '85 %', 'Innendienst'],
            ['Gültigkeit', 'PLZ-Ort-Abgleich, E-Mail-Format', '94 %', '99 %', 'IT (Validierung im Formular)'],
            ['Eindeutigkeit', 'Duplikatquote per Fuzzy-Matching', '6 %', '< 1 %', 'Data Steward Vertrieb'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: 'Problemquelle 1 · Datensilos', md: 'Daten liegen verstreut in Abteilungen und sind nicht integriert → **Konsistenz** leidet.' },
            { title: 'Problemquelle 2 · Altsysteme', md: 'Veraltete Formate und Zeichenkodierungen (z. B. Umlaute) → **Gültigkeit** leidet.' },
            { title: 'Problemquelle 3 · Manuelle Eingabe', md: 'Das Skript nennt Fehlerquoten von **3–5 %** bei manueller Erfassung.' },
            { title: 'Problemquelle 4 · Fehlende Validierung', md: 'Am Erfassungspunkt wird nichts geprüft, ungültige Werte gelangen ins System.' },
            { title: 'Problemquelle 5 · Keine Verantwortlichen', md: 'Niemand ist dauerhaft für die Qualität eines Datenbestands zuständig (→ Abschnitt 3.3).' },
            { title: 'Problemquelle 6 · Technische Altlasten', md: 'Schlecht dokumentierte Transformationen in Datenpipelines schleusen Fehler ein.' },
          ],
        },
        {
          type: 'table',
          caption: 'Fünf bewährte Gegenmaßnahmen (Skript S. 61) – und wie sie im Mittelstand aussehen',
          head: ['Gegenmaßnahme', 'Konkret im Betrieb'],
          rows: [
            ['Automatisierte Validierungsregeln am Erfassungspunkt', 'Pflichtfelder, Formatprüfung, PLZ-Ort-Abgleich direkt im Formular oder Shop'],
            ['Klare Datenverantwortung je Datenbestand', 'Für Kundendaten, Artikelstamm und Lieferanten je eine benannte Person'],
            ['Regelmäßige Prüfungen per statistischer Stichprobe', 'Monatlich 100 Datensätze gegen Belege prüfen und in der Scorecard eintragen'],
            ['Rückmeldeschleifen für Datennutzer', 'Button oder Ticket „Fehler im Datensatz melden“, Rückmeldung an die meldende Person'],
            ['Werkzeuge für Profiling, Bereinigung, Überwachung', 'Vom Excel-Profil bis zu Open-Source-Werkzeugen wie Great Expectations für automatische Datentests'],
          ],
        },
        {
          type: 'update',
          title: 'Ergänzung: Normen und Rechtsrahmen für Datenqualität',
          md: `Die sechs Dimensionen des Skripts lassen sich mit internationalen Normen untermauern:

- **ISO/IEC 25012** beschreibt ein Datenqualitätsmodell mit **15 Merkmalen** aus zwei Blickwinkeln: *inhärent* (z. B. Genauigkeit, Vollständigkeit, Konsistenz, Aktualität) und *systemabhängig* (z. B. Verfügbarkeit, Portabilität, Wiederherstellbarkeit).
- Die Reihe **ISO/IEC 5259** (Teil 1 erschienen 2024) überträgt das Thema gezielt auf **Analytics und maschinelles Lernen** über den gesamten Datenlebenszyklus.
- Für **Hochrisiko-KI** verlangt **Art. 10 der KI-Verordnung** Daten-Governance: Trainings-, Validierungs- und Testdaten müssen u. a. relevant, hinreichend repräsentativ und so weit wie möglich fehlerfrei und vollständig sein. Die Hochrisiko-Pflichten nach Anhang III gelten nach dem Digital Omnibus (VO (EU) 2026/1744) ab **02.12.2027**, nach Anhang I ab **02.08.2028** (Details in Kapitel 5).`,
          sources: [
            { title: 'ISO/IEC 25012:2008 – Data quality model', url: 'https://www.iso.org/standard/35736.html' },
            { title: 'ISO/IEC 5259-1:2024 – Data quality for analytics and ML', url: 'https://www.iso.org/standard/81088.html' },
            { title: 'Art. 10 KI-Verordnung – Daten und Daten-Governance', url: 'https://artificialintelligenceact.eu/article/10/' },
            { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
          ],
        },
        {
          type: 'praxis',
          title: 'Scorecard vor dem Abwanderungsmodell',
          company: 'Stadtwerke Talbach GmbH (fiktiv), 260 Mitarbeitende, Energie- und Wasserversorger',
          scenario: `Der Vertrieb möchte vorhersagen, welche Strom-Privatkunden in den nächsten sechs Monaten kündigen. Die Daten liegen im Abrechnungssystem (seit einer Migration 2021), im CRM und im Kundenportal. Bei einem ersten Blick fallen doppelte Kundenkonten nach Umzügen und viele leere E-Mail-Felder auf.`,
          steps: [
            'Datenbestände festlegen: Vertrags-, Verbrauchs-, Kontakt- und Beschwerdedaten.',
            'Für jeden Bestand die sechs Dimensionen messen: Stichprobe für Korrektheit, Pflichtfeldquote, Abgleich Abrechnung ↔ CRM, Datum der letzten Änderung, Formatregeln, Duplikatquote.',
            'Befund: Eindeutigkeit ist der Engpass – Umzüge erzeugen neue Konten. Ein Kunde mit drei Konten würde im Modell als drei „Kündigungen“ erscheinen.',
            'Mindestwerte vor Modellstart festlegen (z. B. Duplikatquote < 1 %, Abgleichrate > 98 %) und Verantwortliche benennen.',
            'Ursache abstellen statt nur bereinigen: Umzugsprozess so ändern, dass das bestehende Konto weitergeführt wird; Validierung im Kundenportal ergänzen.',
            'Scorecard monatlich in der Vertriebsrunde zeigen; Modellentwicklung startet erst, wenn alle Mindestwerte erreicht sind.',
          ],
          takeaway: `Die Scorecard verwandelt ein diffuses „Datenproblem“ in **messbare Ziele mit Verantwortlichen** – und zeigt, welche Dimension wirklich bremst.`,
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Dimension ihrer Kennzahl zu.',
          pairs: [
            ['Eindeutigkeit', 'Duplikatquote'],
            ['Vollständigkeit', 'Anteil der Datensätze mit allen Pflichtfeldern'],
            ['Konsistenz', 'Übereinstimmungsrate zwischen Quellsystemen'],
            ['Gültigkeit', 'Anteil der Datensätze, die den Geschäftsregeln entsprechen'],
          ],
          explain: 'So schlägt das Skript die Messung vor (S. 59). Korrektheit misst du per Stichprobe gegen die Realität, Aktualität über das Durchschnittsalter der Daten.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Im Webshop steht bei vielen Kundinnen und Kunden als Telefonnummer „1234567890“. Welche Dimension ist in erster Linie verletzt?',
          options: ['Aktualität', 'Gültigkeit', 'Eindeutigkeit', 'Konsistenz'],
          answer: 1,
          explain: 'Der Wert hält Format- und Plausibilitätsregeln nicht ein – ein Gültigkeitsproblem, meist verursacht durch fehlende Validierung am Erfassungspunkt (Skript S. 60).',
        },
      ],
    },

    // ───────────────────────── Lektion 3 – 3.3 ─────────────────────────
    {
      id: 'k3-l3',
      title: '3.3 Data Governance für KI',
      minutes: 25,
      skript: { chapter: '3.3', page: 61 },
      blocks: [
        {
          type: 'text',
          md: `Qualität entsteht nicht durch einmaliges Aufräumen, sondern durch **klare Zuständigkeiten und Regeln**. Ohne sie fragt im KI-Projekt jeder: Wer darf die Kundendaten fürs Training freigeben? Welche Definition von „aktiver Kunde“ gilt? Wie lange dürfen wir die Daten behalten? Data Governance beantwortet genau diese Fragen.`,
        },
        {
          type: 'skript',
          chapter: '3.3',
          page: 61,
          md: `**Kernaussagen des Abschnitts 3.3 (S. 61–66):**

- Data Governance ist der **Entscheidungsrahmen**, der festlegt, wer mit welchen Daten unter welchen Umständen was tun darf – mit Verantwortung, Richtlinien und Standards, Zugriffskontrollen, Metadaten/Datenkatalog und Compliance.
- Für KI ist Governance **Pflicht, keine Kür**: Ohne sie drohen uneinheitliche Definitionen, unklare Zuständigkeiten und Rechtsverstöße.
- **Fünf Leitfragen:** Wer ist verantwortlich? Welche Richtlinien regeln Erhebung, Nutzung, Aufbewahrung? Wie wird Qualität gemessen? Wo wird dokumentiert? Wann wird gelöscht oder anonymisiert?
- **Rollen:** Data-Governance-Rat, Datenverantwortliche (Data Owners) **aus dem Fachbereich**, Datenverwalter (Data Stewards), Datenarchitekten und -ingenieure, Datenschutzbeauftragte(r), ggf. KI-Ethikbeauftragte(r).
- **Sechs Richtlinien** und **vier Governance-Säulen** (Qualitätsstandards, Zugriffskontrollen, Compliance-Überwachung, Dokumentation und Herkunftsnachweise).
- **Metadaten, Datenkatalog und Datenherkunft (Lineage)** machen Daten auffindbar und Entscheidungen bis zu den Trainingsdaten rückverfolgbar.
- Widerstände begegnest du mit **schlanker Governance als Service**, nicht als Kontrollapparat.`,
        },
        {
          type: 'table',
          caption: 'Rollen der Data Governance (Skript S. 62–64) – und typische Besetzung im Mittelstand',
          head: ['Rolle', 'Verantwortung laut Skript', 'Im KMU häufig …'],
          rows: [
            ['Data-Governance-Rat', 'Strategische Ausrichtung, genehmigt Richtlinien, entscheidet eskalierte Streitfälle (IT, Recht, Compliance, Fachbereiche)', 'Bestehende Leitungsrunde mit festem Tagesordnungspunkt „Daten & KI“'],
            ['Datenverantwortliche (Data Owner)', 'Führungskraft **aus dem Fachbereich**, rechenschaftspflichtig für Qualität, Zugriff und Compliance „ihres“ Datenbereichs', 'Vertriebsleitung für Kundendaten, kaufmännische Leitung für Finanzdaten'],
            ['Datenverwalter (Data Steward)', 'Setzt Richtlinien im Alltag um: Qualitätsüberwachung, Zugriffsfreigaben, Problemlösung', 'Erfahrene Sachbearbeiterin im Innendienst mit festem Zeitanteil'],
            ['Datenarchitekten / Dateningenieure', 'Technische Infrastruktur: Katalog, Zugriffskontrollen, Qualitätsmonitoring, Lineage', 'IT-Abteilung oder Systemhaus'],
            ['Datenschutzbeauftragte(r)', 'DSGVO-Konformität, Ansprechpartner der Aufsichtsbehörde', 'Oft extern bestellt'],
            ['KI-Ethikbeauftragte(r) (optional)', 'Bias-Prüfung, Erklärbarkeit, algorithmische Rechenschaft', 'Teil der Rolle KI-Managerin/KI-Manager'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Data Owner sitzen im Fachbereich, nicht in der IT.** Entscheidungen über Daten sind Geschäftsentscheidungen mit technischen Folgen – nicht umgekehrt.',
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Datenqualitätsrichtlinie', back: 'Qualitätsstandards, Messverfahren und Zuständigkeiten (die Scorecard aus 3.2 wird hier verbindlich).' },
            { front: 'Richtlinie für Zugriff und Sicherheit', back: 'Wer darf unter welchen Bedingungen, mit welchen Schutzmaßnahmen und zu welchem Zweck auf welche Daten zugreifen – besonders wichtig, weil KI-Training oft sensible Daten braucht.' },
            { front: 'Aufbewahrungs- und Löschrichtlinie', back: 'Wie lange welche Daten bleiben – Abwägung zwischen dem Wunsch der KI nach Historie, Datenschutz und Speicherkosten.' },
            { front: 'Klassifizierungsrichtlinie', back: 'Vier Stufen: öffentlich, intern, vertraulich, streng vertraulich – je Stufe festgelegte Handhabung.' },
            { front: 'Datenschutzrichtlinie', back: 'Umgang mit personenbezogenen Daten nach DSGVO (und anderen Regelwerken wie dem kalifornischen CCPA bei internationaler Tätigkeit).' },
            { front: 'KI-spezifische Datennutzungsrichtlinie', back: 'Prüfung auf Verzerrungen, Dokumentation der Erklärbarkeit, Nachverfolgbarkeit der Trainingsdaten.' },
          ],
        },
        {
          type: 'table',
          caption: 'Die vier Governance-Säulen (Skript S. 64–65)',
          head: ['Säule', 'Beitrag zu vertrauenswürdiger KI'],
          rows: [
            ['Standards zur Datenqualität', 'Trainingsdaten erfüllen definierte Qualitätsschwellen'],
            ['Zugriffskontrollen', 'Schützen sensible Daten, die fürs Training genutzt werden'],
            ['Compliance-Überwachung', 'Prüft laufend die Einhaltung von Vorschriften'],
            ['Dokumentation & Herkunftsnachweise', 'Verfolgen Ursprung und Transformationen der Daten'],
          ],
        },
        {
          type: 'text',
          md: `### Metadaten, Datenkatalog und Datenherkunft

**Metadaten** sind „Daten über Daten“: Was enthält ein Datensatz, woher stammt er, wie ist er aufgebaut, was bedeuten die Felder, wie wurde er verarbeitet? Ein **Datenkatalog** macht diese Informationen durchsuchbar – das Skript nennt ihn die „interne Suchmaschine für Daten“. Teams finden dort Datensätze, sehen Qualitätskennzahlen, beantragen Zugriff und verfolgen die Herkunft. Das Skript nennt kommerzielle Kataloge wie **Alation** oder **Collibra**; als Open-Source-Alternativen sind zum Beispiel **DataHub** oder **OpenMetadata** verbreitet.

**Datenherkunft (Data Lineage)** dokumentiert, woher Daten kommen, durch welche Systeme sie fließen, wie sie transformiert werden und wo sie landen. Trifft ein Modell eine fragwürdige Entscheidung, kannst du so bis zu den Trainingsdaten zurückverfolgen, ob ein Qualitätsproblem, ein Transformationsfehler oder ein Fehler im Quellsystem die Ursache war. Für Hochrisiko-KI verlangt der EU AI Act dokumentierte Datenherkunft und Daten-Governance (Art. 10, technische Dokumentation nach Art. 11).`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: DSGVO-Bußgelder richtig einordnen',
          md: `Das Skript schreibt, DSGVO-Bußgelder lägen „im Durchschnitt bei 20 Millionen Euro“. Das ist so nicht richtig: **20 Mio. € oder 4 % des weltweiten Jahresumsatzes** (je nachdem, was höher ist) ist der **Höchstrahmen** nach **Art. 83 Abs. 5 DSGVO** für schwere Verstöße, kein Durchschnittswert. Die Mehrzahl der verhängten Bußgelder liegt weit darunter; einzelne Rekordbußgelder gegen große Plattformkonzerne liegen deutlich darüber.

Das Argument des Skripts bleibt trotzdem richtig: Governance senkt Rechts- und Reputationsrisiken und spart Projektzeit. Für deine Argumentation gegenüber der Geschäftsführung ist der **Bußgeldrahmen** plus der eigene **Aufwand für Datensuche und -aufbereitung** meist überzeugender als eine Durchschnittszahl.`,
          sources: [
            { title: 'Art. 83 DSGVO – Allgemeine Bedingungen für die Verhängung von Geldbußen (dejure.org)', url: 'https://dejure.org/gesetze/DSGVO/83.html' },
          ],
        },
        {
          type: 'praxis',
          title: 'Governance „light“ für das erste KI-Projekt',
          company: 'Feinkost Brandner GmbH (fiktiv), Großhandel, 140 Mitarbeitende, Regensburg',
          scenario: `Der Einkauf will mit KI den Bedarf an Frischware prognostizieren und dafür Abverkaufs-, Kunden- und Wetterdaten zusammenführen. Bisher pflegt jede Abteilung „ihre“ Excel-Listen; niemand weiß genau, welche Artikelnummernliste gilt. Die Geschäftsführung fürchtet „noch mehr Bürokratie“.`,
          steps: [
            'Schlank starten: Kein neues Gremium – die monatliche Leitungsrunde übernimmt die Rolle des Data-Governance-Rats (15 Minuten, fester Tagesordnungspunkt).',
            'Data Owner benennen: Einkaufsleitung für Artikelstamm, Vertriebsleitung für Kundendaten. Je ein Data Steward pflegt die Daten im Alltag.',
            'Drei Richtlinien zuerst: Datenqualität (Scorecard), Klassifizierung (öffentlich/intern/vertraulich/streng vertraulich), Aufbewahrung fürs KI-Training.',
            'Einen einfachen Datenkatalog anlegen: Tabelle oder Wiki mit Datensatz, Owner, Quelle, Bedeutung der Felder, Qualitätswert, Zugriffsweg.',
            'Lineage für das Prognosemodell dokumentieren: welche Quellen, welche Transformationen, welche Version ging ins Training.',
            'Governance als Service kommunizieren: Der Katalog spart dem Projektteam die wochenlange Suche nach der „richtigen“ Liste.',
          ],
          takeaway: `Das Skript berichtet von einem Fertigungskonzern, dessen Rat eine Aufbewahrungsrichtlinie fürs KI-Training beschloss (Verhaltensdaten fünf Jahre nutzbar, nach zwei Jahren anonymisieren). Im Mittelstand gelingt dasselbe mit **wenigen Rollen und drei, vier klaren Regeln** – Hauptsache, die Verantwortung ist eindeutig.`,
        },
        {
          type: 'links',
          title: 'Werkzeuge für Katalog und Lineage (Open Source)',
          items: [
            { title: 'DataHub', url: 'https://datahubproject.io/', note: 'Open-Source-Datenkatalog mit Suche, Ownership und Lineage' },
            { title: 'OpenMetadata', url: 'https://open-metadata.org/', note: 'Open-Source-Plattform für Metadaten, Datenqualität und Governance' },
            { title: 'OpenLineage', url: 'https://openlineage.io/', note: 'Offener Standard, um Datenherkunft aus Pipelines zu erfassen' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Rolle ihrer Hauptaufgabe zu.',
          pairs: [
            ['Data-Governance-Rat', 'Genehmigt Richtlinien und entscheidet eskalierte Streitfälle'],
            ['Data Owner', 'Fachbereichsführungskraft, rechenschaftspflichtig für einen Datenbereich'],
            ['Data Steward', 'Überwacht Qualität und Zugriffe im Tagesgeschäft'],
            ['Dateningenieur', 'Baut Katalog, Zugriffskontrollen und Lineage-Werkzeuge'],
          ],
          explain: 'Die Struktur verläuft von der strategischen Aufsicht über die operative Verwaltung bis zur technischen Umsetzung (Skript S. 64–65).',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Data Owner sollten grundsätzlich aus der IT-Abteilung kommen, weil sie die Systeme am besten kennen.',
          answer: false,
          explain: 'Falsch. Laut Skript sind Data Owner Führungskräfte aus dem Fachbereich, weil Data-Governance-Entscheidungen Geschäftsentscheidungen sind. Die IT setzt technisch um.',
        },
      ],
    },

    // ───────────────────────── Lektion 4 – 3.4 (Aufbereitung) ─────────────────────────
    {
      id: 'k3-l4',
      title: '3.4 Datenaufbereitung: vom Rohdatenbestand zum Trainingsdatensatz',
      minutes: 25,
      skript: { chapter: '3.4', page: 66 },
      blocks: [
        {
          type: 'text',
          md: `Die Daten sind bewertet, die Verantwortlichen benannt – jetzt werden aus Rohdaten **KI-taugliche Trainingsdatensätze**. Diese Phase wird laut Skript von Unternehmen ohne KI-Erfahrung regelmäßig unterschätzt.`,
        },
        {
          type: 'skript',
          chapter: '3.4',
          page: 66,
          md: `**Kernaussagen des Abschnitts 3.4, Teil Datenaufbereitung (S. 66–69 und 71):**

- Die Datenaufbereitung verschlingt typischerweise **60–80 %** von Zeit und Aufwand eines KI-Projekts.
- Sie folgt fünf Schritten: **Bereinigung → Integration → Transformation → Feature Engineering → Aufteilung** in Trainings-, Validierungs- und Testdaten.
- **Fehlende Werte:** Löschung, Imputation oder Kennzeichnung – je nach Kontext; Löschung ist eher vertretbar, wenn Daten zufällig fehlen und weniger als 5 % betroffen sind.
- **Ausreißer** können seltene echte Ereignisse oder Fehler sein – Fachwissen entscheidet.
- **Duplikate** werden mit Fuzzy-Matching erkannt („Max Müller“ = „M. Müller“ an derselben Adresse).
- **Feature Engineering** ist der Bereich, in dem Fachwissen den größten Mehrwert schafft.
- **Typische Fehler:** Trainings- und Testdaten unterschiedlich bereinigen, Data Leakage, fehlende Dokumentation, Überoptimierung auf Testdaten, keine Versionierung.`,
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Bereinigung', md: 'Fehler beheben, fehlende Werte behandeln, Ausreißer prüfen, Duplikate zusammenführen. Jede Entscheidung wird dokumentiert, denn sie verändert das Modellverhalten.' },
            { title: '2 · Integration', md: 'Daten aus mehreren Quellen zusammenführen. Herausforderungen: **Schemaunterschiede**, **Zuordnung von Identifikatoren** (derselbe Kunde in allen Systemen) und **zeitliche Abstimmung** (gleicher Zeitraum).' },
            { title: '3 · Transformation', md: '**Standardisierung** (Datum JJJJ-MM-TT, alle Beträge in Euro), **Normalisierung** (Merkmale auf ähnliche Wertebereiche skalieren), **Kodierung** kategorialer Werte (Nord/Süd/Ost/West → Zahlen), **Aggregation** (z. B. „durchschnittlicher Monatsumsatz“).' },
            { title: '4 · Feature Engineering', md: 'Neue Variablen mit mehr Vorhersagekraft: „Jahre als Kunde“ statt Alter, „Auslastung des Kreditrahmens“, „Ausgabentrend der letzten 6 Monate“.' },
            { title: '5 · Aufteilung', md: 'In **Trainings-, Validierungs- und Testdaten** trennen, damit das Modell an Daten bewertet wird, die es beim Lernen nicht gesehen hat.' },
          ],
        },
        {
          type: 'table',
          caption: 'Fehlende Werte behandeln – drei Optionen',
          head: ['Option', 'Vorgehen', 'Wann sinnvoll?', 'Risiko'],
          rows: [
            ['Löschung', 'Unvollständige Datensätze entfernen', 'Daten fehlen zufällig und < 5 % der Datensätze sind betroffen', 'Informationsverlust; Bias, wenn Lücken systematisch sind'],
            ['Imputation', 'Fehlende Werte schätzen (Mittelwert, prädiktive Imputation)', 'Lücken sind verbreitet oder systematisch, Datenvolumen soll erhalten bleiben', 'Bringt Unsicherheit ins Modell'],
            ['Kennzeichnung', 'Datensatz behalten, fehlendes Feld markieren', 'Das Fehlen selbst ist eine Information („Einkommen nicht angegeben“)', 'Modell kann die Markierung überbewerten'],
          ],
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Ausreißer: Fehler oder wertvoller Sonderfall?',
          md: 'Ein Einkauf über 50.000 € kann ein echter Großkunde sein – oder ein Tippfehler statt 500 €. Lass Ausreißer **von Fachleuten** beurteilen. Falsch behandelt, dominieren sie das Training, und das Modell passt sich an Anomalien an statt an verallgemeinerbare Muster.',
        },
        {
          type: 'text',
          md: `### Feature Engineering: wo Fachwissen zählt

Das Skript beschreibt eine Privatkundenbank, die für ein Ausfallmodell Daten aus fünf Systemen zusammenführte (Kernbank, Kreditvergabe, Inkasso, CRM, Auskunftei). Aus 127 Rohmerkmalen wurden durch Feature Engineering 340 Merkmale – gleitende Durchschnitte, Trendindikatoren, Wechselwirkungen. Ergebnis laut Skript: **12 % höhere Genauigkeit** als mit den Rohmerkmalen allein.

Die Lehre: Der Unterschied zwischen mittelmäßigen und sehr guten KI-Systemen liegt oft im **Feature Engineering** – und dafür braucht das Data-Science-Team die Menschen aus dem Fachbereich, die wissen, welche Signale wirklich etwas bedeuten.`,
        },
        {
          type: 'table',
          caption: 'Fünf typische Aufbereitungsfehler (Skript S. 71) – und wie du sie verhinderst',
          head: ['Fehler', 'Folge', 'Gegenmittel'],
          rows: [
            ['Trainings- und Testdaten unterschiedlich bereinigen', 'Unrealistisch gute oder schlechte Testergebnisse', 'Eine gemeinsame, automatisierte Pipeline für alle Teilmengen'],
            ['**Data Leakage** – Zukunftsinformation im Training', 'Scheinbar hervorragende Leistung, die im Betrieb einbricht', 'Strikt zeitlich trennen; nur Merkmale nutzen, die zum Vorhersagezeitpunkt bekannt sind'],
            ['Aufbereitungsschritte nicht dokumentieren', 'Ergebnisse nicht reproduzierbar', 'Schritte als Code oder Rezept festhalten, Datenblatt führen'],
            ['Merkmale auf Basis der Testdaten überoptimieren', 'Overfitting – das Modell kennt den Test „auswendig“', 'Testdaten erst ganz am Ende nutzen; Auswahl auf Validierungsdaten'],
            ['Keine Versionierung von Daten und Pipelines', 'Unklar, mit welchen Daten ein Modell trainiert wurde', 'Daten- und Pipeline-Versionen speichern (z. B. mit DVC), Modell ↔ Datenversion verknüpfen'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Data Leakage an einem Beispiel',
          md: 'Ein Kündigungsmodell nutzt das Merkmal „Anzahl Rückrufe der Kündigungsabteilung“. Im Test glänzt es – denn Rückrufe gibt es nur, **nachdem** jemand gekündigt hat. Im Betrieb, wo diese Information zum Vorhersagezeitpunkt fehlt, ist das Modell nutzlos. Frage bei jedem Merkmal: *Wüssten wir das zum Zeitpunkt der Vorhersage schon?*',
        },
        {
          type: 'praxis',
          title: 'Aufbereitungsplan für eine Reklamationsprognose',
          company: 'Kunststofftechnik Albers GmbH (fiktiv), 190 Mitarbeitende, Lüdenscheid',
          scenario: `Das Qualitätsmanagement möchte vorhersagen, welche Fertigungsaufträge ein hohes Reklamationsrisiko haben. Daten liegen im ERP (Aufträge), in der Maschinendatenerfassung (Temperaturen, Zykluszeiten), im Reklamationssystem und in Excel-Prüfprotokollen.`,
          steps: [
            'Bereinigung: Fehlende Temperaturwerte kennzeichnen statt löschen (Sensorausfälle betreffen bestimmte Maschinen systematisch); Ausreißer mit den Einrichtern besprechen.',
            'Integration: Auftragsnummer als gemeinsamer Schlüssel; Maschinendaten auf den Fertigungszeitraum des Auftrags zuschneiden (zeitliche Abstimmung).',
            'Transformation: Einheiten vereinheitlichen (°C, Sekunden), Werkzeugtypen kodieren, Messreihen je Auftrag zu Mittelwert und Schwankungsbreite aggregieren.',
            'Feature Engineering mit dem QM: „Tage seit letzter Werkzeugwartung“, „Anteil Neuware im Granulat“.',
            'Leakage-Check: Merkmale aus der Endprüfung nach Auslieferung werden ausgeschlossen – sie wären zum Vorhersagezeitpunkt unbekannt.',
            'Zeitliche Aufteilung: Training 2023–2024, Validierung 1. Halbjahr 2025, Test 2. Halbjahr 2025; jede Version mit Datenstand dokumentiert.',
          ],
          takeaway: `Eine gute Aufbereitung ist **Teamarbeit von Data Science und Fachbereich** – und sie ist dokumentiert und versioniert, damit jedes Ergebnis nachvollziehbar bleibt.`,
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die fünf Schritte der Datenaufbereitung in die Reihenfolge des Skripts.',
          items: ['Bereinigung', 'Integration', 'Transformation', 'Feature Engineering', 'Aufteilung in Trainings-, Validierungs- und Testdaten'],
          explain: 'So beschreibt das Skript den typischen Ablauf (S. 67). In der Praxis springst du gelegentlich zurück, etwa wenn bei der Integration neue Qualitätsprobleme auftauchen.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Modell zur Zahlungsausfallprognose erreicht im Test 99 % Genauigkeit. Später zeigt sich: Ein Merkmal war „Mahnstufe 3 erreicht“. Welcher Fehler liegt vor?',
          options: ['Overfitting durch zu wenige Daten', 'Data Leakage', 'Fehlende Normalisierung', 'Zu viele Duplikate'],
          answer: 1,
          explain: 'Die Mahnstufe ist eine Folge des Ausfalls, also Zukunftsinformation. Sie bläht die Testleistung auf, steht aber zum Vorhersagezeitpunkt nicht zur Verfügung (Skript S. 71).',
        },
      ],
    },

    // ───────────────────────── Lektion 5 – 3.4 (Datenschutz) ─────────────────────────
    {
      id: 'k3-l5',
      title: '3.4 Datenschutz in der Datenaufbereitung: von Datenminimierung bis föderiertes Lernen',
      minutes: 25,
      skript: { chapter: '3.4', page: 69 },
      blocks: [
        {
          type: 'text',
          md: `Sobald ein KI-System **personenbezogene Daten** verarbeitet – Namen, Kundennummern, Stimmen, Fotos, IP-Adressen –, gilt die DSGVO. Datenschutz ist dabei kein Schlussstein, den man am Ende prüft, sondern läuft laut Skript **durch die gesamte Datenaufbereitung**.`,
        },
        {
          type: 'skript',
          chapter: '3.4',
          page: 69,
          md: `**Kernaussagen des Abschnitts 3.4, Teil Datenschutz (S. 69–71):**

- Erste Frage: **Brauchst du überhaupt personenbezogene Daten** – oder reichen anonymisierte bzw. aggregierte Daten? (Grundsatz der **Datenminimierung**)
- **Anonymisierung** entfernt den Personenbezug so, dass niemand mehr identifizierbar ist – dann gilt die DSGVO nicht mehr. Das ist schwer: Alter, Postleitzahl und Diagnose zusammen können Personen wiedererkennbar machen. Verfahren: **Löschung** identifizierender Felder, **Generalisierung** (Altersgruppe statt Alter), **Verrauschung**.
- **Pseudonymisierung** ersetzt Identifikatoren durch Codes; der Schlüssel liegt getrennt. Die Daten bleiben **personenbezogen**, aber das Risiko sinkt – in vielen KI-Trainings die praktikable Wahl.
- **Differential Privacy** fügt kalibriertes Rauschen hinzu, sodass sich nicht ableiten lässt, ob eine Person im Datensatz ist (genutzt z. B. von Apple und Google).
- **Föderiertes Lernen** bringt „das Modell zu den Daten“: Standorte trainieren lokal, nur Modellaktualisierungen werden zusammengeführt (z. B. mehrere Krankenhäuser).
- Bei personenbezogenen Daten: **Datenschutz-Folgenabschätzung (DSFA) nach Art. 35 DSGVO**, oft mit dem Nebeneffekt, dass unnötige Daten entfallen.
- **Sicherheitspraktiken** für Trainingsdaten: Verschlüsselung, rollenbasierte Zugriffe, Prüfprotokolle, sichere Enklaven/Confidential Computing, Löschung nach Abschluss.`,
        },
        {
          type: 'text',
          md: `### Die DSGVO-Grundsätze als Kompass

Die Grundsätze aus **Art. 5 DSGVO** übersetzen sich direkt in Fragen an dein KI-Projekt:

- **Rechtmäßigkeit und Transparenz:** Es braucht eine Rechtsgrundlage (Art. 6), und Betroffene müssen informiert werden.
- **Zweckbindung:** Daten aus der Buchhaltung dürfen nicht ohne Weiteres zum Training für ganz andere Zwecke genutzt werden.
- **Datenminimierung:** Nur die Daten verwenden, die für das Ziel wirklich nötig sind – die erste Frage des Skripts.
- **Richtigkeit:** kennst du schon als Datenqualität (Korrektheit, Aktualität).
- **Speicherbegrenzung, Integrität und Vertraulichkeit:** Löschfristen, Zugriffsschutz, Verschlüsselung.
- **Rechenschaftspflicht:** Du musst die Einhaltung nachweisen können – Governance und Dokumentation aus 3.3 helfen dabei.

Wichtig sind außerdem **Art. 25** (Datenschutz durch Technikgestaltung, *Privacy by Design*), **Art. 22** (keine ausschließlich automatisierte Entscheidung mit erheblicher Wirkung ohne Schutzmechanismen) und **Art. 35** (DSFA bei voraussichtlich hohem Risiko).`,
        },
        {
          type: 'table',
          caption: 'Datenschutzfreundliche Verfahren im Vergleich',
          head: ['Verfahren', 'Idee', 'Gilt die DSGVO weiter?', 'Typischer Einsatz'],
          rows: [
            ['Anonymisierung', 'Personenbezug **endgültig** entfernen (Löschen, Generalisieren, Verrauschen)', '**Nein**, wenn wirklich niemand mehr identifizierbar ist (Erwägungsgrund 26)', 'Statistiken je PLZ-Region und Monat, Datenweitergabe'],
            ['Pseudonymisierung', 'Identifikatoren durch Codes ersetzen, Schlüssel getrennt und geschützt (Art. 4 Nr. 5)', '**Ja**, für den Verantwortlichen bleiben die Daten personenbezogen', 'Kundenverläufe über eine Zufalls-ID analysieren'],
            ['Differential Privacy', 'Kalibriertes Rauschen auf Daten oder Abfrageergebnisse', 'Senkt das Risiko mathematisch belegbar; rechtliche Bewertung im Einzelfall', 'Nutzungsstatistiken, Veröffentlichung von Auswertungen'],
            ['Föderiertes Lernen', 'Modell wandert zu den Daten, nur Updates werden geteilt', 'Ja, lokal werden personenbezogene Daten verarbeitet – aber nicht zentral gesammelt', 'Training über mehrere Kliniken, Filialen oder Partner hinweg'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Pseudonym ist nicht anonym',
          md: 'Ein Datensatz ohne Namen ist nicht automatisch anonym. Postleitzahl, Geburtsjahr und Beruf zusammen können eine Person in einem kleinen Ort eindeutig identifizieren. Lass Anonymisierungskonzepte deshalb immer von der oder dem **Datenschutzbeauftragten** prüfen.',
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Rechtsprechung und Leitlinien seit 2024',
          md: `Das Skript erklärt die Verfahren richtig, nennt aber keine aktuellen europäischen Vorgaben. Für die Praxis wichtig:

- Der Europäische Datenschutzausschuss (EDSA/EDPB) hat im Januar 2025 die **Leitlinien 01/2025 zur Pseudonymisierung** zur Konsultation gestellt – mit praktischen Hinweisen, wie Schlüssel und Zusatzinformationen zu schützen sind.
- In der **Stellungnahme 28/2024** (18.12.2024) zu KI-Modellen betont der EDSA: Ein mit personenbezogenen Daten trainiertes Modell ist **nicht automatisch anonym**; das muss im Einzelfall nachgewiesen werden. Außerdem geht es um berechtigtes Interesse als Rechtsgrundlage und die Folgen unrechtmäßig verarbeiteter Trainingsdaten.
- Der **EuGH** hat am 4. September 2025 (Rs. C-413/23 P, EDSB/SRB) entschieden: Ob pseudonymisierte Daten personenbezogen sind, hängt von der **Perspektive** ab. Für einen Empfänger ohne realistische Möglichkeit zur Re-Identifizierung können sie anonym sein; der Verantwortliche bleibt an die DSGVO gebunden.
- **NIST SP 800-226** (2025) gibt Leitlinien, wie man die Garantien von Differential Privacy bewertet.
- Seit dem **12. September 2025** gilt der **EU Data Act**. Er regelt den Zugang zu Daten vernetzter Produkte (z. B. Maschinen- und Gerätedaten) und kann neue Datenquellen für KI erschließen.`,
          sources: [
            { title: 'EDPB Guidelines 01/2025 on Pseudonymisation', url: 'https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-012025-pseudonymisation_en' },
            { title: 'EDPB Opinion 28/2024 on AI models', url: 'https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en' },
            { title: 'beck-aktuell: EuGH C-413/23 P zu pseudonymisierten Daten (05.09.2025)', url: 'https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/eugh-c41323p-pseudonymisierte-daten-personenbezogen-weitergabe-dritte-2025-09-05' },
            { title: 'NIST SP 800-226: Guidelines for Evaluating Differential Privacy Guarantees', url: 'https://csrc.nist.gov/pubs/sp/800/226/final' },
            { title: 'EU-Kommission: Datengesetz (Data Act)', url: 'https://digital-strategy.ec.europa.eu/de/policies/data-act' },
          ],
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Verschlüsselung', back: 'Trainingsdaten im Ruhezustand und bei der Übertragung verschlüsseln.' },
            { front: 'Rollenbasierte Zugriffe', back: 'Nur befugte Personen sehen Trainingsdaten – abgeleitet aus der Zugriffsrichtlinie (3.3).' },
            { front: 'Prüfprotokolle', back: 'Wer hat wann auf welche Daten zugegriffen? Wichtig für Rechenschaftspflicht und Vorfallaufklärung.' },
            { front: 'Confidential Computing', back: 'Sichere Enklaven verarbeiten besonders sensible Daten so, dass selbst der Betreiber der Infrastruktur nicht hineinsehen kann.' },
            { front: 'Löschen nach Projektende', back: 'Trainingsdaten nach Abschluss der Modellentwicklung löschen, wo angemessen – statt sie unbefristet zu horten.' },
          ],
        },
        {
          type: 'praxis',
          title: 'KI-Tourenplanung mit Gesundheitsdaten',
          company: 'Pflegedienst Sonnenhof gGmbH (fiktiv), 60 Mitarbeitende, Freiburg',
          scenario: `Der Pflegedienst möchte die tägliche Tourenplanung mit einem KI-Tool optimieren. Das Tool soll Einsatzzeiten, Adressen, Pflegegrade und Qualifikationen der Pflegekräfte berücksichtigen. Der Anbieter sitzt in der EU und bietet eine Cloud-Lösung an. Du bereitest die Entscheidung für die Geschäftsführung vor.`,
          steps: [
            'Zweck festlegen und dokumentieren: Tourenoptimierung, keine Leistungskontrolle der Pflegekräfte.',
            'Datenminimierung zuerst: Pflegegrade sind Gesundheitsdaten (Art. 9 DSGVO). Prüfe, ob statt Diagnosen nur der **Zeitbedarf pro Einsatz** genügt.',
            'Pseudonymisieren: Klientinnen und Klienten erscheinen im Tool nur mit Kennung und Koordinate. Die Zuordnungstabelle bleibt im eigenen System.',
            'Auftragsverarbeitungsvertrag (Art. 28 DSGVO) schließen; Serverstandort, Unterauftragnehmer, Verschlüsselung und Löschkonzept klären.',
            'DSFA nach Art. 35 mit der oder dem Datenschutzbeauftragten durchführen und die Mitarbeitervertretung frühzeitig einbinden.',
          ],
          takeaway: `Datenschutz ist kein Projektstopper, sondern eine **Designaufgabe**: Mit Zweckbindung, Datenminimierung und Pseudonymisierung (Privacy by Design) lassen sich auch sensible Anwendungsfälle verantwortungsvoll umsetzen – und die DSFA zeigt oft, welche Daten gar nicht nötig sind.`,
        },
        {
          type: 'links',
          title: 'Weiterlesen und vertiefen',
          items: [
            { title: 'Art. 35 DSGVO – Datenschutz-Folgenabschätzung (dejure.org)', url: 'https://dejure.org/gesetze/DSGVO/35.html', note: 'Wann eine DSFA Pflicht ist und was sie enthalten muss' },
            { title: 'Erwägungsgrund 26 DSGVO', url: 'https://dsgvo-gesetz.de/erwaegungsgruende/nr-26/', note: 'Wann Daten als anonym gelten' },
            { title: 'Google Research: Federated Learning (2017)', url: 'https://research.google/blog/federated-learning-collaborative-machine-learning-without-centralized-training-data/', note: 'Ursprungsartikel zum föderierten Lernen (englisch)' },
            { title: 'Apple: Differential Privacy Overview (PDF)', url: 'https://www.apple.com/privacy/docs/Differential_Privacy_Overview.pdf', note: 'Wie Apple Differential Privacy für Nutzungsstatistiken einsetzt (englisch)' },
            { title: 'WEIRD-Bias in KI-Systemen (KIsruptiv)', url: 'https://weird.kisruptiv.de/', note: 'Warum viele Modelle vor allem westliche, gebildete und wohlhabende Perspektiven abbilden' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Pseudonymisierte Daten fallen für das Unternehmen, das die Schlüsseltabelle besitzt, nicht mehr unter die DSGVO.',
          answer: false,
          explain: 'Falsch. Für den Verantwortlichen, der die Daten wieder zuordnen kann, bleiben sie personenbezogen (Art. 4 Nr. 5 DSGVO, Skript S. 69–70). Nur echte Anonymisierung führt aus der DSGVO heraus.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Fünf Kliniken wollen gemeinsam ein Modell zur Sepsis-Früherkennung trainieren, ohne Patientenakten auszutauschen. Welches Verfahren passt am besten?',
          options: ['Alle Daten anonymisiert in eine zentrale Cloud kopieren', 'Föderiertes Lernen', 'Nur Generalisierung des Alters', 'Gar kein Training, sondern feste Regeln'],
          answer: 1,
          explain: 'Beim föderierten Lernen trainiert jede Klinik lokal, nur Modellaktualisierungen werden zusammengeführt. Das Skript nennt genau dieses Szenario (S. 70–71).',
        },
      ],
    },
  ],

  // ───────────────────────── Quiz ─────────────────────────
  quiz: [
    {
      type: 'single',
      q: 'Warum ist „Müll rein, Müll raus“ bei KI laut Skript kritischer als bei herkömmlicher Software?',
      options: ['Weil KI-Systeme langsamer rechnen', 'Weil KI-Systeme ihre Regeln aus den Daten lernen und Fehler dauerhaft ins Modell übernehmen', 'Weil KI nur mit strukturierten Daten arbeitet', 'Weil herkömmliche Software keine Daten verarbeitet'],
      answer: 1,
      explain: 'KI lernt Muster aus Daten. Fehlerhafte Trainingsdaten führen zu dauerhaft fehlerhaften Ergebnissen, die sich nur durch neues Training mit besseren Daten beheben lassen (Skript S. 53).',
    },
    {
      type: 'order',
      q: 'Bringe die Ebenen der Bedarfshierarchie von unten nach oben in die richtige Reihenfolge.',
      items: ['Ausreichende Menge an Beispielen', 'Relevante Merkmale mit Vorhersagekraft', 'Datenqualität (korrekt, vollständig, konsistent, aktuell)'],
      explain: 'Erst Menge, dann relevante Merkmale, dann Qualität (Skript S. 54).',
    },
    {
      type: 'multi',
      q: 'Welche sechs Kerndimensionen der Datenqualität nennt das Skript? Wähle alle zutreffenden. (Mehrfachauswahl)',
      options: ['Korrektheit', 'Vollständigkeit', 'Popularität', 'Konsistenz', 'Aktualität', 'Gültigkeit', 'Eindeutigkeit'],
      answer: [0, 1, 3, 4, 5, 6],
      explain: 'Korrektheit, Vollständigkeit, Konsistenz, Aktualität, Gültigkeit und Eindeutigkeit (Skript S. 58). „Popularität“ ist kein Qualitätskriterium.',
    },
    {
      type: 'match',
      q: 'Ordne das Beispiel der verletzten Qualitätsdimension zu.',
      pairs: [
        ['Bei 40 % der Patientenakten fehlen Allergieangaben', 'Vollständigkeit'],
        ['„Hauptstr. 123“ im Shop, „Hauptstraße 123“ im CRM', 'Konsistenz'],
        ['Empfehlungen auf Basis drei Jahre alter Käufe', 'Aktualität'],
        ['Derselbe Kunde dreimal im Trainingsdatensatz', 'Eindeutigkeit'],
      ],
      explain: 'Alle vier Beispiele stammen aus Abschnitt 3.2 des Skripts (S. 58–60).',
    },
    {
      type: 'single',
      q: 'Welche Aufwandsverteilung empfiehlt das Skript für ein KI-Projekt?',
      options: ['10 % Daten, 90 % Modellierung', '30–40 % Daten, 60–70 % Modellierung', '60–70 % Datenarbeit, 30–40 % Modellierung', '100 % Modellierung, die Daten liefert der Anbieter'],
      answer: 2,
      explain: 'Erhebung, Bereinigung, Kennzeichnung und Validierung brauchen den Großteil des Aufwands (Skript S. 55). Für die gesamte Aufbereitung nennt das Skript sogar 60–80 % (S. 66).',
    },
    {
      type: 'tf',
      q: 'Datenzentrierte KI bedeutet: Statt immer neue Algorithmen auszuprobieren, werden die Trainingsdaten systematisch verbessert.',
      answer: true,
      explain: 'Richtig. Der Ansatz geht auf Andrew Ng zurück und betont, dass bei den meisten Geschäftsanwendungen die Datenqualität die erreichbare Leistung stärker begrenzt als die Wahl des Algorithmus (Skript S. 55).',
    },
    {
      type: 'cloze',
      q: 'Ergänze die Rollen der Data Governance.',
      text: 'Die strategische Verantwortung für Kundendaten trägt ein {{Data Owner|Datenverantwortlicher|Datenverantwortliche}} aus dem Fachbereich; die tägliche Qualitätsüberwachung übernimmt ein {{Data Steward|Datenverwalter|Datenverwalterin}}.',
      explain: 'Data Owner sind rechenschaftspflichtige Führungskräfte aus dem Fachbereich, Data Stewards die „Hüter der Daten“ im Tagesgeschäft (Skript S. 63).',
    },
    {
      type: 'multi',
      q: 'Welche Bestandteile gehören laut Skript zu den vier Governance-Säulen? (Mehrfachauswahl)',
      options: ['Standards zur Datenqualität', 'Zugriffskontrollen', 'Compliance-Überwachung', 'Dokumentation und Herkunftsnachweise', 'Maximale Datensammlung auf Vorrat'],
      answer: [0, 1, 2, 3],
      explain: 'Die vier Säulen ermöglichen zuverlässige KI (Skript S. 64–65). Datensammlung „auf Vorrat“ widerspricht dem Grundsatz der Datenminimierung.',
    },
    {
      type: 'single',
      q: 'Wozu dient Data Lineage (Datenherkunft) im KI-Kontext vor allem?',
      options: ['Um Daten schneller zu löschen', 'Um eine fragwürdige Modellentscheidung bis zu den Trainingsdaten und ihren Transformationen zurückzuverfolgen', 'Um die Modellgröße zu reduzieren', 'Um Lizenzkosten zu senken'],
      answer: 1,
      explain: 'Lineage zeigt, woher Daten stammen und wie sie verarbeitet wurden. So lassen sich Qualitäts-, Transformations- oder Quellsystemfehler als Ursache identifizieren (Skript S. 65–66).',
    },
    {
      type: 'order',
      q: 'Bringe die Schritte der Datenaufbereitung in die richtige Reihenfolge.',
      items: ['Bereinigung', 'Integration', 'Transformation', 'Feature Engineering', 'Aufteilung in Trainings-, Validierungs- und Testdaten'],
      explain: 'Ablauf laut Skript S. 67.',
    },
    {
      type: 'match',
      q: 'Ordne das Transformationsverfahren seiner Beschreibung zu.',
      pairs: [
        ['Standardisierung', 'Alle Datumsangaben im Format JJJJ-MM-TT, alle Beträge in Euro'],
        ['Normalisierung', 'Numerische Merkmale auf ähnliche Wertebereiche skalieren'],
        ['Kodierung', 'Kategorien wie Nord/Süd/Ost/West in Zahlen umwandeln'],
        ['Aggregation', 'Einzeltransaktionen zum durchschnittlichen Monatsumsatz verdichten'],
      ],
      explain: 'Die vier Transformationsarten aus Skript S. 68.',
    },
    {
      type: 'tf',
      q: 'Wenn Name und Adresse aus einem Datensatz entfernt wurden, sind die Daten in jedem Fall anonym im Sinne der DSGVO.',
      answer: false,
      explain: 'Falsch. Kombinationen wie Alter, Postleitzahl und Diagnose können Personen wieder identifizierbar machen. Echte Anonymisierung ist schwer (Skript S. 69).',
    },
    {
      type: 'single',
      q: 'Ein KI-Projekt soll Personaldaten nutzen. Welcher Schritt ist laut Skript vorgesehen, bevor das Projekt fortgesetzt wird?',
      options: ['Eine Pressemitteilung', 'Eine Datenschutz-Folgenabschätzung nach Art. 35 DSGVO', 'Ein Wechsel des Modellanbieters', 'Ein Hackathon'],
      answer: 1,
      explain: 'Die DSFA bewertet Risiken, dokumentiert Datenflüsse, benennt Schutzmaßnahmen und bildet einen Freigabeschritt (Skript S. 70).',
    },
    {
      type: 'cloze',
      q: 'Ergänze den Fachbegriff.',
      text: 'Gelangen Informationen ins Training, die zum Vorhersagezeitpunkt noch gar nicht bekannt wären, spricht man von {{Data Leakage|Datenleck|Leakage}}.',
      explain: 'Data Leakage bläht die scheinbare Leistung auf und gehört zu den häufigsten Aufbereitungsfehlern (Skript S. 71).',
    },
  ],

  // ───────────────────────── Übungen ─────────────────────────
  exercises: [
    {
      id: 'k3-e1',
      title: 'Datenqualitäts-Scorecard für einen Zimmereibetrieb',
      scenario: `Die **Holzbau Kerner GmbH (fiktiv)**, ein Zimmereibetrieb mit 45 Mitarbeitenden aus dem Allgäu, möchte mit KI vorhersagen, wie viele Arbeitsstunden ein Dachstuhl-Auftrag voraussichtlich benötigt. Verfügbar sind: Angebote und Nachkalkulationen der letzten 6 Jahre (Excel, uneinheitliche Vorlagen), Stundenzettel (teilweise handschriftlich, eingescannt), Fotos der Baustellen und Notizen der Bauleiter in einer Messenger-Gruppe.`,
      task: `1. Prüfe die **Bedarfshierarchie** (Menge, Merkmale, Qualität) für das Vorhaben und benenne das Label.
2. Erstelle eine **Scorecard** mit mindestens **vier der sechs Qualitätsdimensionen** aus Abschnitt 3.2: je eine Kennzahl, eine plausible Einschätzung des Ausgangswerts und ein Ziel.
3. Nenne **Datenschutzaspekte** und
4. schlage **konkrete nächste Schritte** vor (inkl. Verantwortlichkeit).`,
      deliverable: '200–350 Wörter oder Tabelle mit kurzer Begründung',
      template: `Bedarfshierarchie und Label:
- …

Scorecard:
| Dimension | Kennzahl | Ausgangswert (geschätzt) | Ziel |
|---|---|---|---|
| | | | |

Datenschutz:
- …

Nächste Schritte (wer?):
1. …`,
      rubric: [
        { criterion: 'Bewertet mindestens vier der sechs Skript-Dimensionen', keywords: ['korrekt', 'vollständig', 'konsisten', 'aktu', 'gültig', 'eindeutig', 'duplikat'], min: 4, hint: 'Welche der sechs Dimensionen aus 3.2 sind bei uneinheitlichen Excel-Vorlagen und handschriftlichen Zetteln besonders kritisch?' },
        { criterion: 'Formuliert messbare Kennzahlen und Ziele (Scorecard)', keywords: ['kennzahl', 'quote', 'anteil', '%', 'ziel', 'stichprobe'], min: 2, hint: 'Wie misst du zum Beispiel Vollständigkeit konkret?' },
        { criterion: 'Prüft die Bedarfshierarchie und benennt das Label', keywords: ['menge', 'merkmal', 'label', 'zielvariable', 'ist-stunden', 'tatsächlich'], min: 2, hint: 'Was genau soll vorhergesagt werden – und gibt es genug abgeschlossene Aufträge?' },
        { criterion: 'Benennt Datenschutzaspekte', keywords: ['datenschutz', 'dsgvo', 'personenbez', 'pseudonym', 'anonym', 'mitarbeit'], min: 2, hint: 'Wessen Daten stehen auf den Stundenzetteln, und wo liegen die Messenger-Notizen?' },
        { criterion: 'Leitet konkrete nächste Schritte mit Verantwortlichen ab', keywords: ['vorlage', 'vereinheitlich', 'digital', 'steward', 'owner', 'verantwort', 'erfass'], min: 2, hint: 'Was muss passieren, bevor ein Modell trainiert werden kann – und wer kümmert sich darum?' },
      ],
      hints: [
        'Starte mit dem Label: Die Zielgröße sind die tatsächlich geleisteten Stunden je Auftrag. Wo stehen die verlässlich?',
        'Für die Scorecard: Vollständigkeit = Anteil der Aufträge mit Ist-Stunden; Konsistenz = einheitliche Feldbezeichnungen über die Vorlagen; Korrektheit = Stichprobe OCR gegen Original; Eindeutigkeit = doppelt erfasste Aufträge.',
        'Datenschutz: Namen auf Stundenzetteln braucht das Modell nicht – eine Auftragskennung reicht (Pseudonymisierung). Messenger auf Privatgeräten ist kein geeigneter Datenspeicher. Als Data Owner bietet sich die Betriebsleitung an, als Data Steward die Bürokraft, die die Nachkalkulation pflegt.',
      ],
      sample: `**Bedarfshierarchie und Label**
- *Label:* tatsächliche Arbeitsstunden je Auftrag (aus Nachkalkulation bzw. Stundenzetteln).
- *Menge:* Bei rund 120 Dachstühlen pro Jahr liegen ca. 700 Aufträge vor – genug für ein einfaches Modell, wenn die Ist-Stunden vorhanden sind.
- *Merkmale:* Dachfläche, Dachform, Holzmenge, Anzahl Gauben, Jahreszeit. Fotos und Chat-Notizen liefern höchstens Zusatzinformationen.

**Scorecard (Ausgangswerte geschätzt, per Stichprobe zu prüfen)**
| Dimension | Kennzahl | Ausgangswert | Ziel |
|---|---|---|---|
| Vollständigkeit | Anteil Aufträge mit Ist-Stunden | ca. 70 % | 95 % für die letzten 3 Jahre |
| Konsistenz | Aufträge in einheitlicher Feldstruktur | ca. 40 % | 100 % nach Überführung |
| Korrektheit | Stichprobe 50 OCR-Zettel gegen Original | unbekannt | ≥ 98 % |
| Eindeutigkeit | doppelt erfasste Aufträge | unbekannt | < 1 % |
| Gültigkeit | Stundenwerte im plausiblen Bereich (0–12 h/Tag) | unbekannt | 100 % |

**Datenschutz**
Stundenzettel enthalten Namen und Arbeitszeiten, also personenbezogene Daten. Für das Training reicht eine Auftragskennung (Pseudonymisierung). Messenger-Gruppen auf privaten Geräten sind kein geeigneter Datenspeicher. Mitarbeitende früh informieren; Zweck ist Kalkulation, keine Leistungskontrolle.

**Nächste Schritte**
1. Data Owner: Betriebsleitung; Data Steward: Bürokraft für die Nachkalkulation.
2. Einheitliche Nachkalkulationsvorlage einführen, Altdaten der letzten 3 Jahre überführen.
3. Stundenerfassung künftig digital mit Validierung (Pflichtfelder, Plausibilitätsgrenzen).
4. Scorecard monatlich aktualisieren; erst bei Erreichen der Ziele ein einfaches Prognosemodell als Pilot testen.`,
    },
    {
      id: 'k3-e2',
      title: 'Governance- und Datenschutzkonzept für ein Kündigungsmodell',
      scenario: `Die **Fitnessstudio-Kette VitaMove GmbH (fiktiv)**, 18 Studios, 320 Mitarbeitende, möchte vorhersagen, welche Mitglieder in den nächsten drei Monaten kündigen, um ihnen rechtzeitig ein Angebot zu machen. Daten: Vertragsdaten, Check-in-Zeiten am Drehkreuz, Kursbuchungen per App, Beschwerden, Zahlungsdaten. Einige Studioleiter wollen zusätzlich Trainingsdaten aus Fitness-Trackern (Herzfrequenz) nutzen. Es gibt bisher keine Zuständigkeiten für Daten.`,
      task: `Entwirf ein kompaktes Konzept mit vier Teilen:
1. **Governance-Rollen** (mindestens vier) mit konkreter Besetzung.
2. **Richtlinien:** Welche zwei bis drei Richtlinien aus Abschnitt 3.3 brauchst du zuerst – und was regeln sie?
3. **Datenschutz:** Welche Daten brauchst du wirklich (Datenminimierung)? Welches Verfahren setzt du ein (Anonymisierung, Pseudonymisierung …)? Wie gehst du mit den Fitness-Tracker-Daten um?
4. **Aufbereitung:** Nenne zwei Risiken für Data Leakage oder andere Aufbereitungsfehler in diesem Fall.`,
      deliverable: 'Gegliedertes Konzept, ca. 300–450 Wörter',
      template: `1. Rollen:
2. Richtlinien:
3. Datenschutz:
4. Aufbereitungsrisiken:`,
      rubric: [
        { criterion: 'Benennt Governance-Rollen mit Besetzung (Data Owner aus dem Fachbereich)', keywords: ['owner', 'steward', 'rat', 'datenschutzbeauftrag', 'dateningenieur', 'fachbereich'], min: 3, hint: 'Wer ist rechenschaftspflichtig für Mitgliederdaten – und wer pflegt sie im Alltag?' },
        { criterion: 'Wählt passende Richtlinien und beschreibt ihren Inhalt', keywords: ['qualität', 'zugriff', 'aufbewahr', 'lösch', 'klassifiz', 'richtlinie'], min: 2, hint: 'Welche Regeln brauchst du, bevor Daten ins Training fließen?' },
        { criterion: 'Wendet Datenminimierung an und erkennt Gesundheitsdaten', keywords: ['minimier', 'gesundheit', 'art. 9', 'herzfrequenz', 'nicht nötig', 'verzicht'], min: 2, hint: 'Sind Herzfrequenzdaten für eine Kündigungsprognose nötig – und welche Datenkategorie sind sie?' },
        { criterion: 'Wählt ein geeignetes Schutzverfahren und nennt DSFA', keywords: ['pseudonym', 'anonym', 'dsfa', 'folgenabschätzung', 'art. 35', 'verschlüssel'], min: 2, hint: 'Wie trennst du Identität und Trainingsdaten – und welcher Prüfschritt ist bei Profiling ratsam?' },
        { criterion: 'Benennt konkrete Aufbereitungsrisiken', keywords: ['leakage', 'zukunft', 'kündigungsdatum', 'versionier', 'duplikat', 'testdaten'], min: 2, hint: 'Welche Information kennt man erst nach einer Kündigung?' },
      ],
      hints: [
        'Data Owner sind Führungskräfte aus dem Fachbereich, nicht aus der IT. Wer verantwortet bei VitaMove die Mitgliederbeziehung?',
        'Frage bei jeder Datenquelle: Brauchen wir das wirklich für die Kündigungsprognose? Herzfrequenzdaten sind Gesundheitsdaten (Art. 9 DSGVO) und für die Frage kaum nötig.',
        'Leakage-Kandidaten: „Kündigungsgrund“, „Rückgewinnungsanruf erfolgt“, Daten nach dem Kündigungsdatum. Außerdem: Mitglieder mit Studiowechsel als Duplikate.',
      ],
      sample: `**1. Rollen**
- *Data-Governance-Rat:* Geschäftsführung, Leitung Mitgliederservice, IT-Leitung, externe(r) Datenschutzbeauftragte(r) – monatlich 30 Minuten.
- *Data Owner Mitgliederdaten:* Leitung Mitgliederservice (Fachbereich).
- *Data Steward:* erfahrene Mitarbeiterin im Mitgliederservice, 20 % Zeitanteil.
- *Dateningenieur:* App- und IT-Dienstleister (Pipeline, Zugriffsrechte, Katalog).
- *Datenschutzbeauftragte(r):* Beratung, DSFA.

**2. Richtlinien zuerst**
- *Datenqualität:* Scorecard für Vertrags- und Check-in-Daten (u. a. Duplikatquote bei Studiowechseln).
- *Zugriff und Sicherheit:* Trainingsdaten nur pseudonymisiert, Zugriff nur für das Projektteam, Protokollierung.
- *Aufbewahrung und Löschung:* Check-in-Daten 24 Monate fürs Training, danach Aggregation auf Wochenwerte.

**3. Datenschutz**
Für die Prognose genügen Vertragslaufzeit, Tarif, Check-in-Häufigkeit (wöchentlich aggregiert), Kursbuchungen, Beschwerden und Zahlungsverzug. **Herzfrequenzdaten werden nicht genutzt:** Sie sind Gesundheitsdaten (Art. 9 DSGVO) und für die Frage nicht erforderlich (Datenminimierung). Trainingsdaten werden **pseudonymisiert** (Zufalls-ID, Schlüssel getrennt beim IT-Dienstleister). Weil Mitglieder profiliert werden, führen wir vorab eine **DSFA** nach Art. 35 durch und informieren transparent in der Datenschutzerklärung. Die Ansprache bleibt menschlich gesteuert.

**4. Aufbereitungsrisiken**
- *Data Leakage:* Felder wie „Kündigungsgrund“ oder „Rückgewinnungsanruf“ entstehen erst nach der Kündigung und werden ausgeschlossen; Merkmale nur bis zum Vorhersagezeitpunkt berechnen.
- *Eindeutigkeit:* Mitglieder mit Studiowechsel haben zwei Verträge – vor dem Training zusammenführen, sonst erscheinen sie als „Kündigung“.
- Daten- und Pipeline-Versionen werden dokumentiert, damit jedes Modell nachvollziehbar bleibt.`,
    },
  ],

  glossary: [
    { term: 'Datenzentrierte KI', def: 'Ansatz, die Leistung eines KI-Systems vor allem durch systematische Verbesserung der Trainingsdaten zu steigern statt durch immer neue Algorithmen (geprägt von Andrew Ng).' },
    { term: 'Label (Zielvariable)', def: 'Die richtige Antwort zu einem Trainingsbeispiel, etwa „abgewandert: ja/nein“. Grundlage des überwachten Lernens.' },
    { term: 'Merkmal (Feature)', def: 'Eingangsgröße mit möglichst hoher Vorhersagekraft, z. B. Kaufhäufigkeit oder Vertragsdauer.' },
    { term: 'Datenqualitätsdimensionen', def: 'Die sechs Kerndimensionen nach Skript: Korrektheit, Vollständigkeit, Konsistenz, Aktualität, Gültigkeit, Eindeutigkeit.' },
    { term: 'Datenqualitäts-Scorecard', def: 'Übersicht, die je Datenbestand und Dimension Kennzahl, Ausgangswert, Ziel und Verantwortliche festhält und regelmäßig aktualisiert wird.' },
    { term: 'Data Governance', def: 'Entscheidungsrahmen aus Rollen, Richtlinien, Standards und Prozessen, der festlegt, wer mit welchen Daten unter welchen Umständen was tun darf.' },
    { term: 'Data Owner', def: 'Führungskraft aus dem Fachbereich, die für Qualität, Zugriff und Compliance eines Datenbereichs rechenschaftspflichtig ist.' },
    { term: 'Data Steward', def: 'Person, die Governance-Richtlinien für einen Datenbestand im Tagesgeschäft umsetzt: Qualitätsüberwachung, Freigaben, Problemlösung.' },
    { term: 'Data Lineage', def: 'Dokumentation der Datenherkunft: woher Daten stammen, wie sie transformiert werden und wo sie verwendet werden.' },
    { term: 'Feature Engineering', def: 'Erstellen neuer, aussagekräftigerer Merkmale aus Rohdaten, z. B. „Jahre als Kunde“ statt Geburtsdatum.' },
    { term: 'Data Leakage', def: 'Fehler, bei dem Informationen ins Training gelangen, die zum Vorhersagezeitpunkt nicht verfügbar wären; die Testleistung wird dadurch künstlich aufgebläht.' },
    { term: 'Pseudonymisierung', def: 'Ersetzen identifizierender Merkmale durch Kennungen, wobei der Schlüssel getrennt und geschützt aufbewahrt wird. Die Daten bleiben personenbezogen (Art. 4 Nr. 5 DSGVO).' },
    { term: 'Anonymisierung', def: 'Endgültiges Entfernen des Personenbezugs, sodass niemand mehr identifiziert werden kann. Anonyme Daten fallen nicht unter die DSGVO (Erwägungsgrund 26).' },
    { term: 'Differential Privacy', def: 'Verfahren, das kalibriertes statistisches Rauschen hinzufügt, sodass sich nicht zuverlässig ableiten lässt, ob eine bestimmte Person im Datensatz enthalten ist.' },
    { term: 'Föderiertes Lernen', def: 'Training eines Modells über mehrere Standorte, ohne Rohdaten zentral zusammenzuführen; nur Modellaktualisierungen werden geteilt.' },
  ],

  sources: [
    { title: 'Why it’s time for „data-centric artificial intelligence“', publisher: 'MIT Sloan School of Management', year: 2022, type: 'Artikel', url: 'https://mitsloan.mit.edu/ideas-made-to-matter/why-its-time-data-centric-artificial-intelligence' },
    { title: 'A Chat with Andrew on MLOps: From Model-centric to Data-centric AI', publisher: 'DeepLearningAI (YouTube)', year: 2021, type: 'Video', url: 'https://www.youtube.com/watch?v=06-AZXmwHjo' },
    { title: 'The Cost of Bad Manufacturing Data (Herkunft der Gartner-Zahl 12,9 Mio. USD)', publisher: 'Reliable', year: 2026, type: 'Artikel', url: 'https://reliamag.com/topics/guides/cost-of-bad-manufacturing-data' },
    { title: 'ISO/IEC 25012:2008 – Data quality model', publisher: 'ISO', year: 2008, type: 'Norm', url: 'https://www.iso.org/standard/35736.html' },
    { title: 'ISO/IEC 5259-1:2024 – Data quality for analytics and machine learning', publisher: 'ISO', year: 2024, type: 'Norm', url: 'https://www.iso.org/standard/81088.html' },
    { title: 'Art. 10 KI-Verordnung – Daten und Daten-Governance', publisher: 'artificialintelligenceact.eu', year: 2024, type: 'Gesetz', url: 'https://artificialintelligenceact.eu/article/10/' },
    { title: 'Art. 83 DSGVO – Geldbußen', publisher: 'dejure.org', year: 2016, type: 'Gesetz', url: 'https://dejure.org/gesetze/DSGVO/83.html' },
    { title: 'Art. 35 DSGVO – Datenschutz-Folgenabschätzung', publisher: 'dejure.org', year: 2016, type: 'Gesetz', url: 'https://dejure.org/gesetze/DSGVO/35.html' },
    { title: 'Art. 4 DSGVO – Begriffsbestimmungen', publisher: 'dejure.org', year: 2016, type: 'Gesetz', url: 'https://dejure.org/gesetze/DSGVO/4.html' },
    { title: 'Guidelines 01/2025 on Pseudonymisation', publisher: 'European Data Protection Board', year: 2025, type: 'Leitfaden', url: 'https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-012025-pseudonymisation_en' },
    { title: 'Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models', publisher: 'European Data Protection Board', year: 2024, type: 'Leitfaden', url: 'https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en' },
    { title: 'SP 800-226: Guidelines for Evaluating Differential Privacy Guarantees', publisher: 'NIST', year: 2025, type: 'Norm', url: 'https://csrc.nist.gov/pubs/sp/800/226/final' },
    { title: 'Federated Learning: Collaborative Machine Learning without Centralized Training Data', publisher: 'Google Research', year: 2017, type: 'Artikel', url: 'https://research.google/blog/federated-learning-collaborative-machine-learning-without-centralized-training-data/' },
    { title: 'Datasheets for Datasets (Gebru et al.)', publisher: 'arXiv', year: 2018, type: 'Paper', url: 'https://arxiv.org/abs/1803.09010' },
    { title: 'Common pitfalls and recommended practices (Data Leakage)', publisher: 'scikit-learn', year: 2026, type: 'Doku', url: 'https://scikit-learn.org/stable/common_pitfalls.html' },
  ],
};
