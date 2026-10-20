export default {
  id: 'm03',
  order: 3,
  title: 'KI-Strategie & Business Case',
  subtitle: 'Vom Wettbewerbsvorteil über das Use-Case-Portfolio zum belastbaren Business Case',
  icon: 'target',
  isNew: false,
  minutes: 95,
  handout: [
    { section: '4', title: 'Strategische Bedeutung für Unternehmen', page: 2 },
    { section: '5', title: 'Entwicklung einer KI-Strategie', page: 3 }
  ],
  objectives: [
    'Du kannst die strategische Bedeutung von KI für ein Unternehmen anhand von Wettbewerbsvorteil, datengestützter Führung und Risiko-/Chancen-Balance begründen.',
    'Du kennst die sechs Bausteine einer KI-Strategie und formulierst SMART-Ziele mit passenden KPIs.',
    'Du identifizierst Use Cases systematisch (Pain-Point-Workshop, Prozessanalyse/Process Mining) und priorisierst sie nach Nutzen × Machbarkeit.',
    'Du triffst begründete Build-/Buy-/Partner-Entscheidungen.',
    'Du erstellst einen einfachen Business Case mit ROI und Amortisationszeit und kennst aktuelle Förder- und Unterstützungsangebote (Stand Oktober 2026).'
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      id: 'm03-l1',
      title: 'Warum KI Chefsache ist: strategische Bedeutung',
      minutes: 20,
      blocks: [
        { type: 'video', scene: 'strategie' },
        {
          type: 'text',
          md: `KI ist kein IT-Projekt, das man „nebenbei" erledigt. Sie verändert, **wie** ein Unternehmen Entscheidungen trifft, **was** es anbietet und **womit** es Geld verdient. Genau deshalb gehört sie in die Unternehmensstrategie – und genau hier setzt deine Rolle als KI-Managerin oder KI-Manager an: Du übersetzt technische Möglichkeiten in strategische Optionen und machst sie entscheidbar.

Das Handout fasst die strategische Bedeutung in drei Punkten zusammen. Schau sie dir an – und dann, wie du sie im Betrieb konkret machst.`
        },
        {
          type: 'handout',
          section: '4',
          page: 2,
          quote: '1. Wettbewerbsvorteil: Schnellere Entscheidungen, neue Geschäftsmodelle, Kostensenkung. 2. Datengestützte Führung: Echtzeit-Analysen ersetzen Intuition. 3. Risiko-/Chancen-Balance: Datenschutz, Bias, regulatorische Vorgaben müssen von Anfang an berücksichtigt werden.',
          md: `Die drei Punkte sind ein guter Kompass. In der Praxis lohnt es sich, jeden davon in **Leitfragen** für die Geschäftsführung zu übersetzen (siehe Tabelle).`
        },
        {
          type: 'table',
          caption: 'Die drei strategischen Dimensionen – übersetzt in Leitfragen für die Praxis',
          head: ['Dimension (Handout §4)', 'Leitfrage für die Geschäftsführung', 'Typischer Denkfehler'],
          rows: [
            ['**Wettbewerbsvorteil**', 'Wo verlieren wir heute Zeit, Geld oder Kundschaft – und wo könnte KI das messbar ändern?', '„Die Konkurrenz macht was mit KI, also brauchen wir auch einen Chatbot."'],
            ['**Datengestützte Führung**', 'Welche Entscheidungen treffen wir regelmäßig – und welche Daten hätten wir gern dafür?', 'Dashboards bauen, ohne zu klären, wer welche Entscheidung damit trifft.'],
            ['**Risiko-/Chancen-Balance**', 'Welche rechtlichen, ethischen und Sicherheitsrisiken entstehen – und wer ist verantwortlich?', 'Compliance erst ganz am Ende prüfen – dann wird es teuer oder unmöglich.']
          ]
        },
        {
          type: 'update',
          title: 'Einordnung: „ersetzen" oder „ergänzen"? – und wie weit ist der Mittelstand wirklich?',
          md: `Die Formulierung „Echtzeit-Analysen **ersetzen** Intuition" ist zugespitzt. Gute Praxis ist heute: Daten und KI **ergänzen** Erfahrungswissen, machen Annahmen überprüfbar und decken blinde Flecken auf – die Verantwortung für die Entscheidung bleibt beim Menschen. Das passt auch zum Prinzip der menschlichen Aufsicht in der KI-Verordnung.

Aktuelle Zahlen zeigen, dass viele Unternehmen noch am Anfang stehen:
- Laut **Statistischem Bundesamt** nutzten 2025 **26 %** der Unternehmen in Deutschland (ab 10 Beschäftigten) KI – bei kleinen Unternehmen (10–49 Beschäftigte) 23 %, bei mittleren 36 %, bei großen (über 250) 57 %.
- Wer KI erwogen, aber (noch) nicht eingesetzt hat, nennt als Gründe vor allem **fehlendes Wissen (72 %)**, **Unklarheit über rechtliche Folgen (62 %)** und **Datenschutzbedenken (60 %)**.
- Die Studie „Where's the Value in AI?" (BCG, Oktober 2024) – auch im Handout (§15) empfohlen – kommt zu dem Ergebnis, dass nur **22 %** der befragten Unternehmen über den Proof of Concept hinausgekommen sind und einen gewissen Wert erzeugen; nur **4 %** erzeugen substanziellen Wert.

Für dich heißt das: Der Engpass ist selten die Technik, sondern Wissen, Rechtssicherheit, Daten und Umsetzungskompetenz – also genau das, was eine Strategie adressieren muss.`,
          sources: [
            { title: 'Destatis: Unternehmen mit Nutzung von KI nach Beschäftigtengrößenklassen (2025)', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html' },
            { title: 'Destatis: Gründe gegen die Nutzung von KI (2025)', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-gegen-nutzung-kuenstliche-intelligenz.html' },
            { title: 'BCG (2024): Where\'s the Value in AI?', url: 'https://www.bcg.com/publications/2024/wheres-value-in-ai' }
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: `**Eine KI-Strategie ist Unternehmensstrategie mit KI – nicht IT-Strategie mit Chatbot.** Sie beginnt bei Geschäftszielen und Engpässen, nicht bei Tools.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Effizienz', back: 'KI übernimmt oder beschleunigt Routinearbeit: Dokumente auslesen, E-Mails vorsortieren, Angebote vorformulieren. Typische KPI: Bearbeitungszeit pro Vorgang.' },
            { front: 'Qualität', back: 'Weniger Fehler, konsistentere Entscheidungen, z. B. Prüfung von Rechnungen oder Sichtprüfung in der Fertigung. Typische KPI: Fehlerquote, Reklamationen.' },
            { front: 'Kundenerlebnis', back: 'Schnellere, persönlichere Antworten rund um die Uhr. Typische KPI: Antwortzeit, Kundenzufriedenheit.' },
            { front: 'Neue Geschäftsmodelle', back: 'Daten und KI werden selbst zum Produkt, z. B. Wartungsprognosen als Service. Typische KPI: neuer Umsatz, Anteil wiederkehrender Erlöse.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Vom „Wir müssen was mit KI machen" zur strategischen Frage',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg – Heizung, Sanitär, Wartungsverträge',
          scenario: `Der Geschäftsführer kommt von einer Messe zurück: „Alle reden von KI. Bis Jahresende will ich auch einen KI-Chatbot auf der Website." Du bist seit Kurzem als KI-Managerin im Unternehmen. Statt sofort ein Tool auszuwählen, holst du das Thema auf die strategische Ebene.`,
          steps: [
            'Du fragst nach den drei größten unternehmerischen Herausforderungen der nächsten zwei Jahre. Antwort: Fachkräftemangel im Büro, lange Angebotsdurchlaufzeiten, steigende Zahl an Wartungsverträgen.',
            'Du ordnest jede Herausforderung den drei Dimensionen aus dem Handout zu (Wettbewerbsvorteil, datengestützte Führung, Risiko/Chancen).',
            'Du sammelst mit Büro, Technik und Kundendienst konkrete Engpässe (z. B. „Angebote dauern im Schnitt mehrere Tage, weil Daten aus drei Systemen zusammengesucht werden").',
            'Du prüfst früh Risiken: Welche personenbezogenen Daten sind betroffen? Welche Daten dürfen in welche Cloud? Wer haftet für falsche Auskünfte eines Chatbots?',
            'Du legst der Geschäftsführung eine Seite mit drei strategischen Stoßrichtungen vor – der Website-Chatbot ist eine Option unter mehreren, nicht der Startpunkt.'
          ],
          takeaway: `Deine erste Aufgabe ist nicht die Toolauswahl, sondern die **Übersetzung von Geschäftszielen in KI-Fragestellungen**. Das schützt vor teuren „Leuchtturm-Projekten" ohne Wirkung.`
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Was nennen Unternehmen in Deutschland laut Destatis (2025) am häufigsten als Grund, KI trotz Interesse (noch) nicht einzusetzen?',
          options: ['Zu hohe Kosten', 'Fehlendes Wissen', 'Ethische Bedenken', 'KI sei nicht sinnvoll'],
          answer: 1,
          explain: 'Mit 72 % liegt „fehlendes Wissen" vorn, gefolgt von rechtlicher Unklarheit (62 %) und Datenschutzbedenken (60 %). Kosten nennen 32 %. Kompetenzaufbau gehört deshalb in jede KI-Strategie (Baustein „Ressourcen- & Kompetenzplanung").'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Das Handout sagt: „Echtzeit-Analysen ersetzen Intuition." Für die Praxis ist es sinnvoll, Erfahrungswissen komplett durch KI-Auswertungen zu ersetzen.',
          answer: false,
          explain: 'Daten und KI sollen Erfahrungswissen ergänzen und überprüfbar machen. Die Entscheidungsverantwortung bleibt beim Menschen – das entspricht auch dem Gedanken menschlicher Aufsicht in der KI-Verordnung.'
        }
      ]
    },
    // ------------------------------------------------------------------ L2
    {
      id: 'm03-l2',
      title: 'Die sechs Bausteine einer KI-Strategie',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Eine KI-Strategie muss kein 80-Seiten-Dokument sein. Für ein mittelständisches Unternehmen reicht oft ein **Strategie-One-Pager** plus eine priorisierte Use-Case-Liste und eine Roadmap. Entscheidend ist, dass alle sechs Bausteine aus dem Handout bedacht sind.`
        },
        {
          type: 'handout',
          section: '5.1',
          page: 3,
          quote: '1. Vision & Nutzenversprechen 2. SMART-Ziele und KPIs 3. Governance-Rahmen (Ethik, Compliance, Security) 4. Use-Case-Portfolio und Priorisierung 5. Ressourcen- & Kompetenzplanung 6. Roadmap mit Meilensteinen'
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Vision & Nutzenversprechen', md: `Ein bis zwei Sätze: **Wofür** setzen wir KI ein – und wofür ausdrücklich nicht? Beispiel: „Wir nutzen KI, um unsere Fachkräfte von Routinearbeit zu entlasten und Kundschaft schneller zu bedienen – Entscheidungen über Menschen trifft bei uns immer ein Mensch."` },
            { title: '2 · SMART-Ziele und KPIs', md: `Spezifisch, messbar, attraktiv/erreichbar, realistisch, terminiert. Zu jedem Ziel gehören eine **Baseline** (Ist-Wert vor Einführung) und eine Messmethode. Mehr dazu in Modul 7.` },
            { title: '3 · Governance-Rahmen', md: `Wer darf welche KI-Tools mit welchen Daten nutzen? Wer gibt neue Use Cases frei? Wie werden Ethik, Datenschutz (DSGVO), KI-Verordnung und IT-Sicherheit geprüft? Ergebnis: KI-Richtlinie, Freigabeprozess, klare Rollen.` },
            { title: '4 · Use-Case-Portfolio & Priorisierung', md: `Eine Liste aller Ideen mit Steckbrief – bewertet nach **Nutzen × Machbarkeit** (Lektion 3). Mischung aus Quick Wins und wenigen strategischen Vorhaben.` },
            { title: '5 · Ressourcen- & Kompetenzplanung', md: `Budget, Personen, Zeit, externe Partner. Und: KI-Kompetenz aller Mitarbeitenden, die mit KI arbeiten (siehe Update unten).` },
            { title: '6 · Roadmap mit Meilensteinen', md: `Was passiert in welchem Quartal? Wann wird über Fortsetzung oder Abbruch entschieden (Go/No-Go)? Roadmaps sind **lebende Dokumente** und werden mindestens halbjährlich überprüft.` }
          ]
        },
        {
          type: 'table',
          caption: 'Aus vagen Wünschen werden SMART-Ziele (Beispiele, fiktiv)',
          head: ['Vage', 'SMART formuliert', 'KPI & Baseline'],
          rows: [
            ['„Wir wollen schneller antworten."', 'Bis 30.06. sinkt die mittlere Erstantwortzeit auf Kundenanfragen per E-Mail von 2 Arbeitstagen auf unter 4 Stunden.', 'Mittlere Erstantwortzeit; Baseline: 4 Wochen Messung vor Start'],
            ['„KI soll im Büro helfen."', 'Bis Jahresende wird die Erfassung von Eingangsrechnungen zu 80 % automatisch vorbefüllt; Korrekturquote unter 5 %.', 'Automatisierungsgrad, Korrekturquote; Baseline: heute 0 %'],
            ['„Alle sollen KI können."', 'Bis 31.03. haben alle Mitarbeitenden mit KI-Zugang eine 2-stündige Schulung zu Nutzung, Datenschutz und Grenzen absolviert.', 'Schulungsquote; Baseline: Teilnahmeliste']
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die SMART-Buchstaben ihrer Bedeutung zu.',
          pairs: [
            ['S', 'Spezifisch – eindeutig beschrieben'],
            ['M', 'Messbar – mit Kennzahl und Messmethode'],
            ['A', 'Attraktiv bzw. erreichbar – akzeptiert und erreichbar'],
            ['R', 'Realistisch – mit vorhandenen Ressourcen machbar'],
            ['T', 'Terminiert – mit klarem Zieldatum']
          ],
          explain: 'SMART-Ziele (Handout §5.1, Baustein 2) machen KI-Vorhaben überprüfbar. Ohne Baseline und Termin lässt sich später kein Erfolg nachweisen.'
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Governance nicht neu erfinden',
          md: `Für den Governance-Baustein gibt es etablierte Rahmenwerke, an denen du dich orientieren kannst:
- **ISO/IEC 42001:2023** – internationale Norm für ein KI-Managementsystem (zertifizierbar, aufgebaut wie ISO 27001).
- **NIST AI Risk Management Framework** – frei verfügbarer Leitfaden mit den Funktionen Govern, Map, Measure, Manage.

Für ein KMU reicht oft: KI-Richtlinie + Tool-Freigabeliste + Use-Case-Steckbrief mit Risikoprüfung + benannte Verantwortliche.`
        },
        {
          type: 'update',
          title: 'Aktualisierung: KI-Kompetenzpflicht und KI-Verordnung nach dem „Digital Omnibus" (Stand Oktober 2026)',
          md: `Das Handout nennt den EU AI Act noch als „Entwurf 2024" (§15). Tatsächlich gilt die **KI-Verordnung (EU) 2024/1689** seit dem **1. August 2024**; die Pflicht zur KI-Kompetenz (Art. 4) gilt seit dem **2. Februar 2025**.

Mit der **Verordnung (EU) 2026/1744** („Digital Omnibus on AI", veröffentlicht im Amtsblatt am 24.07.2026, in Kraft seit 27.07.2026) wurde die KI-Verordnung geändert. Für deine Strategie besonders relevant:
- **Art. 4 KI-Kompetenz:** Nach übereinstimmender Darstellung in Fachkommentaren müssen Anbieter und Betreiber nun **Maßnahmen ergreifen, die den Aufbau von KI-Kompetenz unterstützen**, statt ein bestimmtes Kompetenzniveau sicherzustellen. Schulungen bleiben also Pflichtprogramm – nur der Maßstab ist ein Bemühens-, kein Erfolgsmaßstab.
- **Hochrisiko-Pflichten** wurden verschoben: für eigenständige Hochrisiko-Systeme nach Anhang III auf den **2. Dezember 2027**, für Systeme in regulierten Produkten nach Anhang I auf den **2. August 2028**.

Für die Strategie heißt das: Kompetenzaufbau gehört in Baustein 5, Risikoklassifizierung in Baustein 3 – unabhängig von verschobenen Fristen. Details behandelt das Modul zu Recht und Governance; prüfe vor Entscheidungen immer den Originaltext.`,
          sources: [
            { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung), EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
            { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI), EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
            { title: 'Gibson Dunn: EU AI Act Omnibus Agreement – Postponed High-Risk Deadlines and Other Key Changes', url: 'https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/' }
          ]
        },
        {
          type: 'handout',
          section: '5.2',
          page: 3,
          quote: 'Top-Management-Commitment • Interdisziplinäre Teams • Datenstrategie (Ownership, Qualität, Plattform) • Proof-of-Concept vor Roll-out • Change-Management-Plan',
          md: 'Die Erfolgsfaktoren sind der Prüfstein für jede Strategie: Fehlt einer, wird es meist im Projekt sichtbar – zu spät.'
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Top-Management-Commitment – woran erkennst du es?', back: 'Die Geschäftsführung gibt Budget und Zeit frei, nennt KI in eigenen Kommunikationen und entscheidet bei Go/No-Go-Terminen selbst.' },
            { front: 'Interdisziplinäre Teams – woran erkennst du sie?', back: 'Fachbereich, IT, Datenschutz und Betriebsrat sitzen von Anfang an am Tisch – nicht erst bei der Abnahme.' },
            { front: 'Datenstrategie – woran erkennst du sie?', back: 'Für wichtige Datenbestände gibt es benannte Verantwortliche (Ownership), Qualitätsregeln und eine Plattform, auf der Daten auffindbar sind.' },
            { front: 'PoC vor Roll-out – woran erkennst du es?', back: 'Jedes Vorhaben startet klein, mit vorab definierten Erfolgskriterien und einer echten Abbruchoption.' },
            { front: 'Change-Management-Plan – woran erkennst du ihn?', back: 'Es gibt Kommunikations-, Schulungs- und Beteiligungsmaßnahmen mit Terminen und Verantwortlichen (siehe Change-Modul).' }
          ]
        },
        {
          type: 'timeline',
          items: [
            { date: 'Q1', title: 'Fundament', md: 'KI-Richtlinie verabschiedet, Tool-Freigabeliste, Basisschulung für alle mit KI-Zugang, Use-Case-Workshop.' },
            { date: 'Q2', title: 'Quick Wins', md: 'Zwei PoCs (z. B. E-Mail-Vorsortierung, Rechnungseingang) mit Baseline-Messung; Go/No-Go Ende Q2.' },
            { date: 'Q3', title: 'Pilot & Daten', md: 'Erfolgreicher PoC geht in den Pilotbetrieb; parallel: Datenbereinigung für das strategische Vorhaben.' },
            { date: 'Q4', title: 'Skalieren & Überprüfen', md: 'Roll-out des Piloten, KPI-Review, Strategie-Update für das Folgejahr.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Der Strategie-One-Pager',
          company: 'Bildungswerk Nordhessen e. V. (fiktiv), 140 Mitarbeitende, Kassel – Weiterbildung und Beratung',
          scenario: `Der Vorstand möchte „eine KI-Strategie", hat aber wenig Zeit. Du bekommst zwei Workshops à drei Stunden mit Vorstand, Bereichsleitungen, IT, Datenschutzbeauftragter und Betriebsrat.`,
          steps: [
            'Workshop 1, Teil A: Vision formulieren – „Wir nutzen KI, um Teilnehmende besser zu begleiten und Verwaltung zu entlasten; Bewertungen von Teilnehmenden trifft immer ein Mensch."',
            'Workshop 1, Teil B: drei SMART-Ziele mit KPI und Baseline-Plan festlegen.',
            'Zwischen den Workshops: Use-Case-Ideen per kurzer Umfrage einsammeln und als Steckbriefe aufbereiten.',
            'Workshop 2, Teil A: Use Cases gemeinsam in der Nutzen-×-Machbarkeits-Matrix bewerten; Top 3 auswählen.',
            'Workshop 2, Teil B: Governance (wer gibt frei, welche Daten sind tabu), Ressourcen und eine Vier-Quartals-Roadmap festhalten.',
            'Ergebnis auf einer Seite zusammenfassen, vom Vorstand beschließen lassen und im Intranet veröffentlichen.'
          ],
          takeaway: `Eine Strategie wird gelebt, wenn sie **kurz, beschlossen und sichtbar** ist. Der Betriebsrat früh einzubinden spart später Monate – bei KI-Systemen, die Leistung oder Verhalten von Beschäftigten erfassen können, hat er in Deutschland Mitbestimmungsrechte.`
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Vision gibt die Richtung, SMART-Ziele machen sie messbar, Governance macht sie sicher, das Portfolio macht sie konkret, Ressourcen machen sie möglich, die Roadmap macht sie verbindlich.**'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Aussagen zu den Bausteinen einer KI-Strategie treffen zu? (Mehrfachauswahl)',
          options: [
            'Zu jedem KPI gehört eine Baseline, die vor der Einführung gemessen wird.',
            'Die Roadmap wird einmal beschlossen und danach nicht mehr verändert.',
            'Zum Governance-Rahmen gehört ein Freigabeprozess für neue Use Cases.',
            'Kompetenzplanung betrifft nur das IT-Team.'
          ],
          answer: [0, 2],
          explain: 'Ohne Baseline kein Erfolgsnachweis; ein Freigabeprozess ist Kern der Governance. Roadmaps sind lebende Dokumente, und KI-Kompetenz betrifft alle, die mit KI arbeiten (vgl. Art. 4 KI-Verordnung).'
        }
      ]
    },
    // ------------------------------------------------------------------ L3
    {
      id: 'm03-l3',
      title: 'Use Cases finden, priorisieren und entscheiden: Build, Buy oder Partner',
      minutes: 28,
      blocks: [
        {
          type: 'text',
          md: `Gute Use Cases fallen selten vom Himmel. Sie entstehen dort, wo **Schmerz** (Zeitfresser, Fehler, Wartezeiten, Medienbrüche) auf **Daten** und ein passendes **KI-Muster** trifft. Typische Quellen für Ideen:

- **Pain-Point-Workshops** mit den Menschen, die die Arbeit täglich machen
- **Prozessanalyse** – klassisch per Prozessaufnahme oder datengetrieben per **Process Mining** aus Ereignisprotokollen (Event Logs) von ERP-, CRM- oder Ticketsystemen
- **Daten-Inventur**: Welche Daten haben wir, die bisher niemand nutzt?
- **Kundenperspektive**: Wo warten Kundinnen und Kunden, wo beschweren sie sich?
- **Ideen der Mitarbeitenden** (z. B. aus der Nutzung freigegebener KI-Assistenten)`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Vorbereiten', md: 'Einen Prozess auswählen (z. B. „Vom Kundenanruf bis zur Rechnung"), 5–8 Beteiligte aus allen Stationen einladen, vorhandene Kennzahlen mitbringen.' },
            { title: '2 · Prozess ablaufen', md: 'Gemeinsam den Ist-Prozess an der Wand skizzieren: Schritte, Systeme, Übergaben, Dokumente.' },
            { title: '3 · Schmerzpunkte markieren', md: 'Jede Person klebt Punkte an Zeitfresser, Fehlerquellen, Wartezeiten und Medienbrüche – mit kurzer Schätzung „Wie oft? Wie lange?".' },
            { title: '4 · KI-Muster zuordnen', md: 'Passt eines der typischen Muster? **Klassifizieren** (z. B. E-Mails sortieren), **Extrahieren** (Daten aus Dokumenten), **Vorhersagen** (Ausfälle, Nachfrage), **Generieren** (Texte, Angebote), **Suchen & Zusammenfassen** (Wissen finden), **Optimieren** (Touren, Pläne).' },
            { title: '5 · Steckbrief schreiben', md: 'Für die besten Ideen einen Use-Case-Steckbrief anlegen (Tabelle unten) – das ist die Basis für die Priorisierung.' }
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Process Mining in einem Satz',
          md: `Process Mining rekonstruiert aus den Zeitstempeln in IT-Systemen (z. B. „Auftrag angelegt", „Angebot versendet", „Rechnung gebucht"), **wie Prozesse tatsächlich ablaufen** – inklusive Schleifen, Wartezeiten und Abweichungen. Das ist eine hervorragende, objektive Quelle für Use Cases und liefert gleich die Baseline. Grundlagen beschreibt das *Process Mining Manifesto* der IEEE Task Force on Process Mining.`
        },
        {
          type: 'table',
          caption: 'Use-Case-Steckbrief – Mindestinhalt',
          head: ['Feld', 'Leitfrage'],
          rows: [
            ['Problem & Ziel', 'Welcher Schmerz wird gelöst? Welches SMART-Ziel?'],
            ['Nutzende & Prozess', 'Wer arbeitet damit, an welcher Stelle im Prozess?'],
            ['KI-Muster & Lösungsidee', 'Klassifizieren, Extrahieren, Vorhersagen, Generieren, Suchen, Optimieren?'],
            ['Daten', 'Welche Daten werden gebraucht, sind sie vorhanden, in welcher Qualität, mit Personenbezug?'],
            ['Nutzen', 'Geschätzte Wirkung (Zeit, Kosten, Qualität, Umsatz), Häufigkeit des Vorgangs'],
            ['Machbarkeit & Risiken', 'Technik, Kompetenz, Integration, Recht (DSGVO, KI-Verordnung), Akzeptanz'],
            ['Aufwand & Optionen', 'Build, Buy oder Partner? Grobe Kosten?'],
            ['Verantwortlich', 'Wer ist fachlich Owner?']
          ]
        },
        {
          type: 'text',
          md: `### Priorisierung: Nutzen × Machbarkeit

Bewerte jeden Use Case auf zwei Achsen von 1 bis 5:
- **Nutzen (Impact):** Wertbeitrag, Häufigkeit, strategische Passung, Skalierbarkeit
- **Machbarkeit (Feasibility):** Datenlage, technische Reife, Kompetenz, Integrationsaufwand, rechtliches Risiko, Akzeptanz

Daraus ergeben sich vier Felder: **Quick Wins** (hoch/hoch – zuerst umsetzen), **strategische Vorhaben** (hoher Nutzen, geringe Machbarkeit – Voraussetzungen wie Daten schaffen), **Füller** (geringer Nutzen, hohe Machbarkeit – nur nebenbei) und **Finger weg** (gering/gering). Probier es im Widget mit den Ideen von Müller Haustechnik (fiktiv) aus – und verschiebe die Werte, wenn du anderer Meinung bist.`
        },
        {
          type: 'interactive',
          widget: 'usecase-matrix',
          props: {
            cases: [
              { name: 'Angebots-Assistent (Textbausteine + Materialliste)', impact: 4, feasibility: 4 },
              { name: 'E-Mail-Vorsortierung im Kundendienst', impact: 3, feasibility: 5 },
              { name: 'Rechnungseingang automatisch erfassen', impact: 3, feasibility: 4 },
              { name: 'Ausfallprognose für gewartete Heizungsanlagen', impact: 5, feasibility: 2 },
              { name: 'Tourenplanung für Monteure', impact: 4, feasibility: 3 },
              { name: 'Website-Chatbot für allgemeine Fragen', impact: 2, feasibility: 4 }
            ]
          }
        },
        {
          type: 'table',
          caption: 'Build, Buy oder Partner? – Entscheidungshilfe',
          head: ['Option', 'Passt, wenn …', 'Vorteile', 'Risiken'],
          rows: [
            ['**Buy** (Standardsoftware, SaaS, KI-Funktion im bestehenden System)', 'der Use Case verbreitet ist (z. B. Rechnungserfassung, Transkription, Office-Assistenz)', 'schnell, planbare Kosten, Wartung beim Anbieter', 'Abhängigkeit (Lock-in), Datenstandort, wenig Differenzierung'],
            ['**Build** (eigene Lösung, z. B. mit Open-Source-Modellen oder APIs)', 'der Use Case Kerngeschäft und Wettbewerbsvorteil ist und eigene Daten entscheidend sind', 'maximale Kontrolle, Differenzierung', 'braucht Kompetenz, Betrieb (MLOps) und langfristige Pflege'],
            ['**Partner** (Dienstleister, Hochschule, Forschungseinrichtung)', 'Kompetenz fehlt, aber der Use Case ist spezifisch', 'Know-how-Transfer, geteiltes Risiko', 'Wissen bleibt beim Partner, wenn Übergabe nicht geplant ist']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Fallstrick: der PoC-Friedhof',
          md: `Viele Unternehmen sammeln Proofs of Concept, die nie in den Betrieb gehen. Die BCG-Studie (2024) fand nur 22 % der Unternehmen jenseits der PoC-Phase mit erkennbarem Wert. Gegenmittel: **vor dem PoC** festlegen, welche Kennzahl welchen Wert erreichen muss, wer den Betrieb übernimmt und wie der Weg in den Regelprozess aussieht.`
        },
        {
          type: 'praxis',
          title: 'Pain-Point-Workshop „Vom Anruf bis zur Rechnung"',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Du moderierst einen halbtägigen Workshop mit Disposition, Kundendienst, zwei Monteuren, Buchhaltung und IT. Ziel: die Use-Case-Liste für die Strategie füllen und priorisieren.`,
          steps: [
            'Du zeichnest mit dem Team den Ist-Prozess: Anruf/E-Mail → Termin → Einsatz → Material → Angebot/Rechnung.',
            'Die Teilnehmenden markieren Schmerzpunkte; am häufigsten: E-Mails von Hand verteilen, Angebote aus drei Systemen zusammensuchen, Monteursberichte abtippen.',
            'Du ordnest KI-Muster zu: Klassifizieren (E-Mails), Generieren/Extrahieren (Angebote), Extrahieren aus Sprache/Foto (Berichte).',
            'Gemeinsam bewertet ihr die Ideen in der Nutzen-×-Machbarkeits-Matrix. Die Ausfallprognose hat hohen Nutzen, aber kaum strukturierte Sensordaten – sie wird als strategisches Vorhaben mit vorgelagertem Datenprojekt eingeplant.',
            'Für den Angebots-Assistenten entscheidet ihr „Buy + Konfiguration" (KI-Funktion des vorhandenen Branchenprogramms prüfen), für die E-Mail-Sortierung einen kleinen Automatisierungs-Workflow (Build mit Low-Code).',
            'Zu jedem Top-Use-Case schreibst du einen Steckbrief und benennst einen fachlichen Owner.'
          ],
          takeaway: `Die besten Use Cases kommen von den Menschen am Prozess. Deine Aufgabe ist **Struktur**: Muster erkennen, ehrlich bewerten, Entscheidung dokumentieren.`
        },
        {
          type: 'links',
          title: 'Werkzeuge & Weiterlesen',
          items: [
            { title: 'Process Mining Manifesto (IEEE Task Force on Process Mining)', url: 'https://www.tf-pm.org/resources/manifesto', note: 'Grundlagen und Leitprinzipien des Process Mining' },
            { title: 'European Digital Innovation Hubs – Katalog & Reifegrad-Check', url: 'https://european-digital-innovation-hubs.ec.europa.eu/home', note: 'EU-Netzwerk; u. a. kostenloses Digital Maturity Assessment' },
            { title: 'Hugging Face', url: 'https://huggingface.co/', note: 'Open-Source-Modelle finden – relevant für „Build"-Optionen' },
            { title: 'Langdock', url: 'https://langdock.com/de', note: 'KI-Plattform aus Deutschland (Workshop-Empfehlung) – Beispiel für „Buy"' }
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Use Case hat hohen Nutzen (5), aber geringe Machbarkeit (2), weil die nötigen Daten fehlen. Was ist die sinnvollste Einordnung?',
          options: [
            'Sofort als Quick Win umsetzen',
            'Verwerfen, da die Machbarkeit gering ist',
            'Als strategisches Vorhaben einplanen und zuerst die Voraussetzungen (Daten) schaffen',
            'Nur umsetzen, wenn ein Fördermittelgeber es verlangt'
          ],
          answer: 2,
          explain: 'Hoher Nutzen bei geringer Machbarkeit heißt: strategisch wichtig, aber noch nicht reif. Die Roadmap sollte vorgelagerte Schritte (z. B. Datenerfassung, Datenqualität) enthalten.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Situation der passenden Beschaffungsoption zu.',
          pairs: [
            ['Verbreiteter Standardfall, z. B. Transkription von Besprechungen', 'Buy'],
            ['Kerngeschäft mit eigenen, einzigartigen Daten und eigenem Know-how im Team', 'Build'],
            ['Spezifischer Use Case, aber keine internen KI-Kompetenzen', 'Partner']
          ],
          explain: 'Standardprobleme kauft man, Differenzierendes baut man (wenn Kompetenz da ist), und fehlende Kompetenz holt man sich über Partner – idealerweise mit geplantem Wissenstransfer (vgl. Handout §13: „Partnerschaften … clever nutzen", „Kompetenzen intern aufbauen").'
        }
      ]
    },
    // ------------------------------------------------------------------ L4
    {
      id: 'm03-l4',
      title: 'Business Case, ROI und Förderung',
      minutes: 22,
      blocks: [
        {
          type: 'text',
          md: `Ein Business Case beantwortet eine einfache Frage: **Lohnt sich das – und unter welchen Annahmen?** Er besteht aus:

1. **Ausgangslage & Baseline** – Wie oft passiert der Vorgang, wie lange dauert er, was kostet er heute?
2. **Nutzen** – quantitativ (Zeit, Kosten, Umsatz, Fehler) und qualitativ (Zufriedenheit, Attraktivität als Arbeitgeber, Risikoreduktion)
3. **Kosten** – einmalig und laufend (Tabelle)
4. **Risiken & Annahmen** – Was muss stimmen, damit sich der Nutzen einstellt?
5. **Szenarien** – vorsichtig, realistisch, optimistisch`
        },
        {
          type: 'table',
          caption: 'Kostenarten im KI-Business-Case',
          head: ['Einmalig', 'Laufend'],
          rows: [
            ['Projektleitung, Workshops, Anforderungsanalyse', 'Lizenzen bzw. Abonnements pro Nutzer'],
            ['Datenaufbereitung und -bereinigung', 'Nutzungsabhängige Kosten (z. B. Token/API-Aufrufe, Rechenzeit)'],
            ['Integration in bestehende Systeme', 'Betrieb, Monitoring, Support'],
            ['Schulung und Change-Maßnahmen', 'Weiterentwicklung, Nachtraining, Prompt-/Workflow-Pflege'],
            ['Rechts- und Datenschutzprüfung (z. B. DSFA)', 'Interne Zeit für Qualitätskontrolle (Mensch im Loop)']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Die zwei wichtigsten Formeln',
          md: `**ROI = (Nutzen − Kosten) / Kosten × 100 %** (für einen definierten Zeitraum, z. B. Jahr 1)

**Amortisationszeit = einmalige Kosten / (monatlicher Nutzen − monatliche laufende Kosten)**`
        },
        {
          type: 'praxis',
          title: 'Rechenbeispiel: Angebots-Assistent',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg – alle Zahlen sind fiktive Annahmen',
          scenario: `Das Büro erstellt rund **120 Angebote pro Monat**. Ein KI-Assistent soll pro Angebot **20 Minuten** sparen. Interner Stundensatz: **55 €**. Kosten: **15.000 €** einmalig (Einrichtung, Integration, Schulung) und **600 €/Monat** laufend.`,
          steps: [
            'Zeitersparnis: 120 × 20 min = 2.400 min = 40 Stunden pro Monat.',
            'Monatlicher Nutzen: 40 h × 55 € = 2.200 € → Jahr 1: 26.400 €.',
            'Kosten Jahr 1: 15.000 € + 12 × 600 € = 22.200 €.',
            'ROI Jahr 1: (26.400 − 22.200) / 22.200 ≈ 19 %.',
            'Amortisation: 15.000 € / (2.200 € − 600 €) ≈ 9,4 Monate.',
            'Sensitivität: Spart der Assistent nur 10 statt 20 Minuten, sinkt der Nutzen auf 13.200 € – ROI Jahr 1 ≈ −41 %, Amortisation ≈ 30 Monate. Die Zeitersparnis ist also die kritische Annahme und muss im PoC gemessen werden.'
          ],
          takeaway: `Ein Business Case ist nur so gut wie seine **kritischste Annahme**. Identifiziere sie, und prüfe genau diese im PoC.`
        },
        {
          type: 'interactive',
          widget: 'roi-calculator'
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Typische Fehler im KI-Business-Case',
          md: `- **Zeitersparnis ≠ Kosteneinsparung:** Gesparte Stunden sind nur dann Geld wert, wenn sie sinnvoll genutzt werden (mehr Aufträge, weniger Überstunden, keine Neueinstellung).
- **Adoptionskurve vergessen:** In den ersten Monaten nutzen nicht alle das Tool – rechne mit einem Hochlauf.
- **Laufende Kosten unterschätzen:** Nutzungsabhängige Kosten steigen mit dem Erfolg; Pflege und Qualitätskontrolle kosten Zeit.
- **Keine Baseline:** Ohne Messung vorher lässt sich der Nutzen nachher nicht belegen.`
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Vervollständige die Formel.',
          text: 'ROI = (Nutzen − {{Kosten}}) / Kosten. Die Amortisationszeit teilt die {{einmaligen|einmalige}} Kosten durch den monatlichen Nettonutzen.',
          explain: 'Der ROI setzt den Überschuss ins Verhältnis zu den Kosten; die Amortisationszeit zeigt, nach wie vielen Monaten die Anfangsinvestition wieder eingespielt ist.'
        },
        {
          type: 'text',
          md: `### Unterstützung und Förderung nutzen

Gerade für KMU gibt es kostenfreie Beratung und finanzielle Förderung. Wichtig: Förderprogramme ändern sich häufig – **prüfe vor jeder Empfehlung den aktuellen Stand** auf der offiziellen Seite oder in der Förderdatenbank des Bundes.`
        },
        {
          type: 'update',
          title: 'Aktualisierung: go-digital und Digital Jetzt sind ausgelaufen',
          md: `In vielen Präsentationen und älteren Leitfäden werden noch die Bundesprogramme **„go-digital"** und **„Digital Jetzt"** empfohlen. Stand Oktober 2026 gilt:
- **Digital Jetzt:** Die Richtlinie ist zum **31.12.2023** ausgelaufen; Anträge sind nicht mehr möglich (das Portal dient nur noch für Verwendungsnachweise).
- **go-digital:** Das Programm war bis **Ende 2024** verlängert; Bewilligungen waren bis einschließlich **31.12.2024** möglich.

Ein direktes Nachfolgeprogramm als Bundeszuschuss ist uns nicht bekannt. Aktuelle Alternativen findest du in der Tabelle unten.`,
          sources: [
            { title: 'IHK Bonn/Rhein-Sieg: Digitalisierung & Digitalförderung', url: 'https://www.ihk-bonn.de/innovation-und-umwelt/digitalisierung-/-it-sicherheit/digitalisierung-digitalfoerderung' },
            { title: 'IHK Ostwürttemberg: go-digital', url: 'https://www.ihk.de/ostwuerttemberg/produktmarken/innovation-und-digitalisierung/foerderprogramme/go-digital-3902374' }
          ]
        },
        {
          type: 'table',
          caption: 'Ausgewählte Unterstützungsangebote (Stand Oktober 2026 – vor Nutzung aktuellen Stand prüfen)',
          head: ['Angebot', 'Was?', 'Hinweis'],
          rows: [
            ['[Mittelstand-Digital Zentren](https://www.mittelstand-digital.de/MD/Navigation/DE/Ueber-uns/was-ist-mittelstand-digital/was-ist-md.html) (BMWE)', 'Kostenfreie, anbieterneutrale Beratung, Workshops, KI-Trainer, Praxisprojekte', 'Das aktuelle Netzwerk läuft bis Ende 2026; das BMWE hat einen [Förderaufruf für ein Nachfolgenetzwerk](https://www.nrwbank.de/de/unternehmen/nrw-bank-innovationspartner/aktuelles/foerderaufruf-netztwerk-mittelstanddigitalzentren.html) veröffentlicht.'],
            ['[European Digital Innovation Hubs](https://european-digital-innovation-hubs.ec.europa.eu/home) (EU)', 'Regionale Anlaufstellen: Schulung, Technologie-Tests („test before invest"), Finanzierungsberatung', 'Angebote unterscheiden sich je Hub.'],
            ['[KfW ERP-Förderkredit Digitalisierung (511/512)](https://www.kfw.de/inlandsfoerderung/Unternehmen/Innovation-und-Digitalisierung/F%C3%B6rderprodukte/ERP-F%C3%B6rderkredit-Digitalisierung-%28511-512%29/)', 'Förderkredit über die Hausbank; seit 01.07.2025 Nachfolger des ERP-Digitalisierungs- und Innovationskredits', 'In Stufe 2/3 zusätzlich Zuschuss von 3 % bzw. 5 % auf den ausgezahlten Kreditbetrag.'],
            ['[BAFA – Förderung von Unternehmensberatungen für KMU](https://www.bafa.de/DE/Wirtschaft/Beratung_Finanzierung/Unternehmensberatung/unternehmensberatung_node.html)', 'Zuschuss zu Beratungskosten (auch für Digitalisierungs-/KI-Beratung)', 'Richtlinie gilt bis 31.12.2026; förderfähig max. 3.500 € Beratungskosten, Zuschuss 50 % bzw. 80 % je nach Region.'],
            ['[KI-Kompetenzzentren](https://www.bmftr.bund.de/DE/Forschung/Schluesseltechnologien/KuenstlicheIntelligenz/kuenstlicheintelligenz_node.html) (BMFTR)', 'Forschungszentren (u. a. BIFOLD, Lamarr, MCML, ScaDS.AI, Tübingen AI Center, DFKI) mit Transferangeboten', 'Eher für Forschungs- und Kooperationsprojekte, nicht für Standardberatung.'],
            ['Landesprogramme', 'Zuschüsse für Digitalisierung je Bundesland', 'Sehr unterschiedlich – Landesförderbank bzw. Förderdatenbank prüfen.']
          ]
        },
        {
          type: 'youtube',
          id: 'GrVYBlc0R1I',
          title: 'Die KI-Trainer von Mittelstand-Digital machen Unternehmen fit für das Thema Künstliche Intelligenz',
          channel: 'Mittelstand-Digital',
          lang: 'de',
          minutes: 3
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Ein Handwerksbetrieb fragt im Oktober 2026, ob er für sein KI-Projekt noch einen „go-digital"-Zuschuss beantragen kann. Das ist möglich.',
          answer: false,
          explain: 'go-digital ist ausgelaufen (Bewilligungen bis 31.12.2024), Digital Jetzt bereits Ende 2023. Alternativen: kostenfreie Mittelstand-Digital Zentren, EDIH, BAFA-Beratungsförderung, KfW-Förderkredit Digitalisierung oder Landesprogramme – jeweils aktuellen Stand prüfen.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'single',
      q: 'Welcher der folgenden Punkte gehört laut Handout (§4) NICHT zur strategischen Bedeutung von KI?',
      options: ['Wettbewerbsvorteil', 'Datengestützte Führung', 'Risiko-/Chancen-Balance', 'Vollständiger Verzicht auf menschliche Entscheidungen'],
      answer: 3,
      explain: 'Das Handout nennt Wettbewerbsvorteil, datengestützte Führung und Risiko-/Chancen-Balance. Ein vollständiger Verzicht auf menschliche Entscheidungen ist weder Ziel noch gute Praxis.'
    },
    {
      type: 'order',
      q: 'Bringe die Bausteine einer KI-Strategie in die Reihenfolge des Handouts (§5.1).',
      items: ['Vision & Nutzenversprechen', 'SMART-Ziele und KPIs', 'Governance-Rahmen', 'Use-Case-Portfolio und Priorisierung', 'Ressourcen- & Kompetenzplanung', 'Roadmap mit Meilensteinen'],
      explain: 'So listet das Handout die sechs Bausteine auf Seite 3. Die Logik: erst Richtung und Ziele, dann Leitplanken, dann konkrete Vorhaben, Ressourcen und Zeitplan.'
    },
    {
      type: 'multi',
      q: 'Welche Erfolgsfaktoren nennt das Handout (§5.2)? (Mehrfachauswahl)',
      options: ['Top-Management-Commitment', 'Möglichst großes Modell wählen', 'Interdisziplinäre Teams', 'Proof-of-Concept vor Roll-out', 'Change-Management-Plan'],
      answer: [0, 2, 3, 4],
      explain: 'Das Handout nennt Top-Management-Commitment, interdisziplinäre Teams, Datenstrategie, PoC vor Roll-out und einen Change-Management-Plan. Modellgröße ist kein Erfolgsfaktor an sich.'
    },
    {
      type: 'tf',
      q: 'Ein SMART-Ziel für ein KI-Vorhaben sollte eine Baseline enthalten, die vor der Einführung gemessen wird.',
      answer: true,
      explain: 'Nur mit einem Ausgangswert lässt sich die Wirkung belegen. Die Baseline ist auch die Grundlage des Business Case.'
    },
    {
      type: 'match',
      q: 'Ordne das KI-Muster dem passenden Beispiel zu.',
      pairs: [
        ['Klassifizieren', 'Eingehende E-Mails nach Anliegen sortieren'],
        ['Extrahieren', 'Rechnungsdaten aus PDFs auslesen'],
        ['Vorhersagen', 'Ausfallwahrscheinlichkeit einer Anlage schätzen'],
        ['Generieren', 'Angebotstext aus Stichpunkten entwerfen']
      ],
      explain: 'KI-Muster helfen im Pain-Point-Workshop, Schmerzpunkte schnell in mögliche Lösungen zu übersetzen.'
    },
    {
      type: 'single',
      q: 'Was ist Process Mining?',
      options: [
        'Das Schürfen von Kryptowährung mit KI',
        'Die Rekonstruktion tatsächlicher Prozessabläufe aus Ereignisprotokollen von IT-Systemen',
        'Ein Verfahren zum Training großer Sprachmodelle',
        'Eine Interviewtechnik für Workshops'
      ],
      answer: 1,
      explain: 'Process Mining nutzt Event Logs (z. B. aus ERP-Systemen), um reale Abläufe, Schleifen und Wartezeiten sichtbar zu machen – eine objektive Quelle für Use Cases und Baselines.'
    },
    {
      type: 'single',
      q: 'Ein Use Case bekommt Nutzen 4 und Machbarkeit 5. In welches Feld der Matrix fällt er?',
      options: ['Quick Win', 'Strategisches Vorhaben', 'Füller', 'Finger weg'],
      answer: 0,
      explain: 'Hoher Nutzen und hohe Machbarkeit = Quick Win. Solche Vorhaben eignen sich gut als Einstieg, um schnell Erfahrung und Vertrauen aufzubauen.'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Merksatz.',
      text: 'Ein Business Case ist nur so gut wie seine kritischste {{Annahme}}.',
      explain: 'Im Rechenbeispiel war die Zeitersparnis pro Angebot die kritische Annahme: Halbiert sie sich, kippt der ROI ins Negative. Genau diese Annahme muss im PoC gemessen werden.'
    },
    {
      type: 'single',
      q: 'Einmalige Kosten 12.000 €, monatlicher Nutzen 1.500 €, laufende Kosten 500 € pro Monat. Wie lang ist die Amortisationszeit?',
      options: ['8 Monate', '12 Monate', '24 Monate', '6 Monate'],
      answer: 1,
      explain: '12.000 € / (1.500 € − 500 €) = 12 Monate.'
    },
    {
      type: 'tf',
      q: 'Jede Stunde, die ein KI-Tool einspart, ist automatisch eine Kosteneinsparung in gleicher Höhe.',
      answer: false,
      explain: 'Zeitersparnis wird erst zu Geld, wenn die Zeit anders genutzt wird (mehr Aufträge, weniger Überstunden, keine zusätzliche Stelle). Das muss der Business Case ehrlich darstellen.'
    },
    {
      type: 'multi',
      q: 'Welche Angebote kannst du einem KMU im Oktober 2026 für KI-Vorhaben empfehlen – nach Prüfung des aktuellen Stands? (Mehrfachauswahl)',
      options: ['Mittelstand-Digital Zentren', 'Digital Jetzt', 'BAFA-Förderung von Unternehmensberatungen', 'KfW ERP-Förderkredit Digitalisierung', 'go-digital'],
      answer: [0, 2, 3],
      explain: 'Digital Jetzt (Ende 2023) und go-digital (Ende 2024) sind ausgelaufen. Mittelstand-Digital Zentren (kostenfrei), BAFA-Beratungsförderung (Richtlinie bis Ende 2026) und der KfW-Förderkredit Digitalisierung (seit 07/2025) sind verfügbar.'
    },
    {
      type: 'single',
      q: 'Was ist laut KI-Verordnung in der durch den „Digital Omnibus" geänderten Fassung beim Thema KI-Kompetenz (Art. 4) gefordert?',
      options: [
        'Nichts mehr – die Pflicht wurde gestrichen',
        'Ein staatliches Zertifikat für alle Mitarbeitenden',
        'Maßnahmen, die den Aufbau von KI-Kompetenz bei den Beschäftigten unterstützen',
        'Nur Anbieter, nicht Betreiber, müssen schulen'
      ],
      answer: 2,
      explain: 'Die Pflicht besteht weiter, wurde aber laut Fachkommentaren zu einer Bemühenspflicht umformuliert: Anbieter und Betreiber müssen Maßnahmen zur Förderung von KI-Kompetenz ergreifen. Ein Zertifikat ist nicht vorgeschrieben.'
    }
  ],
  exercises: [
    {
      id: 'm03-e1',
      title: 'Use-Case-Portfolio für ein Autohaus',
      scenario: `Du berätst das **Autohaus Berger GmbH (fiktiv)**, 60 Mitarbeitende, Regensburg: Neu- und Gebrauchtwagenverkauf, Werkstatt, Teileverkauf. Die Geschäftsführerin sagt: „Unsere Werkstatt ist ausgebucht, das Telefon klingelt ununterbrochen, im Verkauf schreiben wir Fahrzeugbeschreibungen von Hand, und die Garantieanträge beim Hersteller kosten uns jede Woche Stunden." Daten: Werkstattplanungssystem, Dealer-Management-System, E-Mail-Postfächer.`,
      task: `1. Leite aus der Beschreibung **mindestens vier Use Cases** ab und ordne jedem ein KI-Muster zu.
2. Bewerte jeden Use Case nach **Nutzen** und **Machbarkeit** (je 1–5) mit kurzer Begründung.
3. Ordne die Use Cases den Feldern der Matrix zu und wähle **zwei** für den Start.
4. Triff für die zwei gewählten Use Cases eine **Build-/Buy-/Partner-Entscheidung** und nenne ein Risiko (z. B. Datenschutz) mit Gegenmaßnahme.`,
      deliverable: 'Tabelle oder strukturierte Liste (ca. 250–400 Wörter)',
      template: `Use Case | KI-Muster | Nutzen (1–5) | Machbarkeit (1–5) | Begründung
...

Auswahl für den Start:
1. ...
2. ...

Build/Buy/Partner + Risiko & Gegenmaßnahme:
...`,
      rubric: [
        { criterion: 'Leitet mindestens vier passende Use Cases aus dem Szenario ab', keywords: ['telefon', 'werkstatt', 'fahrzeugbeschreib', 'garantie', 'termin', 'e-mail'], min: 3, hint: 'Lies das Zitat der Geschäftsführerin noch einmal: Welche vier Schmerzpunkte nennt sie?' },
        { criterion: 'Ordnet KI-Muster zu', keywords: ['klassifi', 'extrahier', 'generier', 'vorhersag', 'optimier', 'zusammenfass'], min: 2, hint: 'Welches der sechs Muster passt zu jedem Schmerzpunkt?' },
        { criterion: 'Bewertet nach Nutzen und Machbarkeit mit Begründung', keywords: ['nutzen', 'machbar', 'daten', 'aufwand'], min: 3, hint: 'Begründe die Machbarkeit vor allem mit der Datenlage und dem Integrationsaufwand.' },
        { criterion: 'Trifft Build-/Buy-/Partner-Entscheidung', keywords: ['buy', 'build', 'partner', 'kaufen', 'standard', 'dienstleist'], min: 1, hint: 'Ist der Use Case ein verbreiteter Standardfall oder Kerngeschäft?' },
        { criterion: 'Benennt Risiko und Gegenmaßnahme', keywords: ['datenschutz', 'dsgvo', 'risiko', 'personenbez', 'mensch', 'prüf'], min: 2, hint: 'Welche personenbezogenen Daten sind im Spiel – und wer kontrolliert das Ergebnis?' }
      ],
      hints: [
        'Starte bei den Schmerzpunkten, nicht bei Tools: Was kostet heute Zeit oder Nerven?',
        'Die Garantieanträge sind ein typischer Fall für „Extrahieren + Generieren"; das Telefon eher für „Klassifizieren/Zusammenfassen" (z. B. Anrufnotizen, Rückrufliste).',
        'Typische Quick Wins: Fahrzeugbeschreibungen generieren (Daten liegen strukturiert vor, Mensch prüft) und E-Mail-/Anfrage-Vorsortierung. Werkstatt-Auslastungsprognose ist eher ein strategisches Vorhaben.'
      ],
      sample: `- **Fahrzeugbeschreibungen aus Fahrzeugdaten** – Generieren; Nutzen 3, Machbarkeit 5: Daten strukturiert im DMS, Mensch prüft vor Veröffentlichung
- **Anfragen per E-Mail/Webformular vorsortieren und Antwortentwurf** – Klassifizieren/Generieren; Nutzen 4, Machbarkeit 4: hohe Menge, Standardanliegen, geringe Integration
- **Garantieanträge vorbefüllen** – Extrahieren/Generieren; Nutzen 4, Machbarkeit 3: Hersteller-Portal, Formate wechseln, Prüfpflicht
- **Werkstattauslastung prognostizieren** – Vorhersagen; Nutzen 4, Machbarkeit 2: Historie lückenhaft, Integration in Planung aufwendig
- **Telefon: Anrufe transkribieren und Rückrufliste** – Zusammenfassen; Nutzen 3, Machbarkeit 3: Einwilligung/Information der Anrufenden nötig

**Start:** (1) Anfragen-Vorsortierung (Quick Win, entlastet Telefon/E-Mail), (2) Fahrzeugbeschreibungen (Quick Win, sichtbarer Nutzen im Verkauf).

**Build/Buy/Partner:** Fahrzeugbeschreibungen: *Buy* – KI-Funktion des Börsen- bzw. DMS-Anbieters prüfen. Anfragen-Vorsortierung: *Build* mit Low-Code-Workflow und EU-gehostetem Modell, unterstützt durch einen Partner fürs Setup.

**Risiko:** Kundendaten in E-Mails (DSGVO). Gegenmaßnahme: Auftragsverarbeitungsvertrag, EU-Datenverarbeitung, Datensparsamkeit, Antwortentwürfe werden immer von Mitarbeitenden geprüft und versendet (Mensch im Loop).`
    },
    {
      id: 'm03-e2',
      title: 'Business Case für einen Dokumenten-Assistenten',
      scenario: `Die **Steuerkanzlei Hoffmann & Partner (fiktiv)**, 25 Mitarbeitende, Leipzig, erhält von Mandantinnen und Mandanten monatlich rund **900 Belege** per Upload, die heute manuell vorkontiert werden (durchschnittlich **4 Minuten** pro Beleg). Ein Anbieter verspricht, dass sein KI-Tool die Zeit auf **1 Minute** pro Beleg (Prüfung) senkt. Kosten laut Angebot: **8.000 €** einmalig (Einrichtung, Schulung) und **450 €/Monat**. Interner Stundensatz: **48 €**.`,
      task: `1. Berechne den monatlichen Nutzen, die Kosten im ersten Jahr, den **ROI für Jahr 1** und die **Amortisationszeit**.
2. Benenne die **kritischste Annahme** und rechne ein vorsichtiges Szenario.
3. Nenne zwei **nicht-monetäre** Nutzen- oder Risikoaspekte.
4. Formuliere eine Empfehlung an die Partner (inkl. PoC-Erfolgskriterium).`,
      deliverable: 'Kurzer Business Case (ca. 200–350 Wörter) mit Rechenweg',
      template: `Nutzen pro Monat: ...
Kosten Jahr 1: ...
ROI Jahr 1: ...
Amortisation: ...
Kritische Annahme + vorsichtiges Szenario: ...
Nicht-monetäre Aspekte: ...
Empfehlung & PoC-Kriterium: ...`,
      rubric: [
        { criterion: 'Rechnet Nutzen, Kosten, ROI und Amortisation nachvollziehbar', keywords: ['roi', 'amortis', 'nutzen', 'kosten'], min: 4, hint: 'Zeitersparnis pro Beleg × Belege × Stundensatz – und dann die Formeln aus Lektion 4.' },
        { criterion: 'Benennt die kritische Annahme und ein vorsichtiges Szenario', keywords: ['annahme', 'szenario', 'vorsichtig', 'sensitiv', 'pessimist'], min: 1, hint: 'Welche Zahl im Angebot stammt vom Anbieter und ist noch nicht gemessen?' },
        { criterion: 'Berücksichtigt nicht-monetäre Aspekte und Risiken', keywords: ['datenschutz', 'berufsgeheim', 'fehler', 'qualität', 'zufriedenheit', 'fachkräfte', 'haftung'], min: 2, hint: 'Denke an Mandatsgeheimnis, Fehlerrisiko und die Situation der Mitarbeitenden.' },
        { criterion: 'Gibt eine Empfehlung mit messbarem PoC-Kriterium', keywords: ['poc', 'pilot', 'test', 'kriterium', 'messen', 'baseline'], min: 2, hint: 'Was muss der Test zeigen, damit ihr weitermacht?' }
      ],
      hints: [
        'Beginne mit der eingesparten Zeit pro Monat in Stunden.',
        '900 Belege × 3 Minuten Ersparnis = 2.700 Minuten = 45 Stunden. Jetzt mit dem Stundensatz multiplizieren.',
        'Vorsichtiges Szenario: Was, wenn die Prüfung 2 statt 1 Minute dauert? Rechne den Nutzen mit 2 Minuten Ersparnis neu.'
      ],
      sample: `**Nutzen:** 900 × 3 min = 2.700 min = 45 h/Monat × 48 € = **2.160 €/Monat**, Jahr 1: 25.920 €.
**Kosten Jahr 1:** 8.000 € + 12 × 450 € = **13.400 €**.
**ROI Jahr 1:** (25.920 − 13.400) / 13.400 ≈ **93 %**.
**Amortisation:** 8.000 / (2.160 − 450) ≈ **4,7 Monate**.

**Kritische Annahme:** 1 Minute Prüfzeit stammt vom Anbieter. *Vorsichtig:* 2 Minuten Prüfzeit → 900 × 2 min = 30 h × 48 € = 1.440 €/Monat; Jahr 1: 17.280 €; ROI ≈ 29 %; Amortisation ≈ 8.000 / 990 ≈ 8,1 Monate. Auch vorsichtig gerechnet lohnt es sich – vorausgesetzt, die Zeit wird für Beratung oder zusätzliche Mandate genutzt.

**Nicht-monetär:** Entlastung bei Fachkräftemangel und weniger monotone Arbeit (+); Risiko Berufsgeheimnis/Datenschutz – Anbieter muss Auftragsverarbeitung, EU-Datenverarbeitung und Verschwiegenheitsverpflichtung zusichern; Fehlerrisiko bei Vorkontierung → Prüfung durch Fachkraft bleibt Pflicht.

**Empfehlung:** 6-wöchiger PoC mit 2 Mitarbeitenden. Vorher Baseline messen (aktuelle Minuten pro Beleg). Erfolgskriterium: Prüfzeit ≤ 2 Minuten bei einer Korrekturquote unter 10 %. Danach Go/No-Go durch die Partner.`
    }
  ],
  glossary: [
    { term: 'KI-Strategie', def: 'Teil der Unternehmensstrategie, der festlegt, wofür, mit welchen Zielen, Regeln, Ressourcen und in welcher Reihenfolge KI eingesetzt wird (Handout §5).' },
    { term: 'SMART-Ziel', def: 'Ziel, das spezifisch, messbar, attraktiv/erreichbar, realistisch und terminiert ist.' },
    { term: 'Baseline', def: 'Ausgangswert einer Kennzahl, gemessen vor Einführung einer Lösung – Grundlage für jeden Erfolgsnachweis.' },
    { term: 'Use-Case-Portfolio', def: 'Gesamtheit aller bewerteten KI-Anwendungsideen eines Unternehmens, priorisiert nach Nutzen und Machbarkeit.' },
    { term: 'Quick Win', def: 'Use Case mit hohem Nutzen und hoher Machbarkeit – geeignet für einen schnellen, sichtbaren Start.' },
    { term: 'Process Mining', def: 'Analyse von Ereignisprotokollen aus IT-Systemen, um tatsächliche Prozessabläufe sichtbar zu machen.' },
    { term: 'Build / Buy / Partner', def: 'Grundsatzentscheidung, ob eine KI-Lösung selbst entwickelt, als Produkt eingekauft oder mit einem Partner umgesetzt wird.' },
    { term: 'ROI', def: 'Return on Investment: (Nutzen − Kosten) / Kosten, bezogen auf einen definierten Zeitraum.' },
    { term: 'Amortisationszeit', def: 'Zeitraum, nach dem die einmaligen Investitionskosten durch den laufenden Nettonutzen wieder eingespielt sind.' }
  ],
  sources: [
    { title: 'Where\'s the Value in AI?', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/publications/2024/wheres-value-in-ai' },
    { title: 'Unternehmen mit Nutzung von Technologien der künstlichen Intelligenz nach Beschäftigtengrößenklassen', publisher: 'Statistisches Bundesamt (Destatis)', year: 2025, type: 'Studie', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html' },
    { title: 'Gründe gegen die Nutzung von Technologien der künstlichen Intelligenz', publisher: 'Statistisches Bundesamt (Destatis)', year: 2025, type: 'Studie', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-gegen-nutzung-kuenstliche-intelligenz.html' },
    { title: 'ISO/IEC 42001:2023 – AI management systems', publisher: 'ISO/IEC', year: 2023, type: 'Norm', url: 'https://www.iso.org/standard/42001' },
    { title: 'AI Risk Management Framework', publisher: 'NIST', year: 2023, type: 'Leitfaden', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', publisher: 'EUR-Lex', year: 2026, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    { title: 'Process Mining Manifesto', publisher: 'IEEE Task Force on Process Mining', year: 2012, type: 'Leitfaden', url: 'https://www.tf-pm.org/resources/manifesto' },
    { title: 'Was ist Mittelstand-Digital?', publisher: 'Mittelstand-Digital / BMWE', year: 2026, type: 'Doku', url: 'https://www.mittelstand-digital.de/MD/Navigation/DE/Ueber-uns/was-ist-mittelstand-digital/was-ist-md.html' },
    { title: 'Förderaufruf Netzwerk Mittelstand-Digital Zentren', publisher: 'NRW.BANK', year: 2026, type: 'Artikel', url: 'https://www.nrwbank.de/de/unternehmen/nrw-bank-innovationspartner/aktuelles/foerderaufruf-netztwerk-mittelstanddigitalzentren.html' },
    { title: 'ERP-Förderkredit Digitalisierung (511, 512)', publisher: 'KfW', year: 2026, type: 'Doku', url: 'https://www.kfw.de/inlandsfoerderung/Unternehmen/Innovation-und-Digitalisierung/F%C3%B6rderprodukte/ERP-F%C3%B6rderkredit-Digitalisierung-%28511-512%29/' },
    { title: 'Förderung von Unternehmensberatungen für KMU', publisher: 'BAFA', year: 2026, type: 'Doku', url: 'https://www.bafa.de/DE/Wirtschaft/Beratung_Finanzierung/Unternehmensberatung/unternehmensberatung_node.html' },
    { title: 'European Digital Innovation Hubs', publisher: 'Europäische Kommission', year: 2026, type: 'Doku', url: 'https://european-digital-innovation-hubs.ec.europa.eu/home' }
  ]
}
