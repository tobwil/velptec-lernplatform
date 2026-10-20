export default {
  id: 'm08',
  order: 8,
  title: 'Fallstudien & Best Practices',
  subtitle: 'Aus Erfolgen und Fehlschlägen lernen – Handout-Fälle, reale Beispiele, Checkliste',
  icon: 'book',
  isNew: false,
  minutes: 100,
  handout: [
    { section: '10', title: 'Fallstudien (Kurzüberblick)', page: 5 },
    { section: '13', title: 'Best-Practice-Checkliste', page: 7 }
  ],
  objectives: [
    'Du kannst Fallstudien kritisch lesen und Aussagen zu Ergebnissen auf Belegbarkeit und Übertragbarkeit prüfen.',
    'Du kennst die sechs Fallstudien aus dem Handout und ihre Lessons Learned.',
    'Du kannst aus realen KI-Vorfällen (Air Canada, DPD, Amazon) konkrete Gegenmaßnahmen ableiten.',
    'Du kannst Erfolgsbeispiele (Klarna, Otto Group, F13 Baden-Württemberg) differenziert bewerten – inklusive späterer Kurskorrekturen.',
    'Du kannst die Best-Practice-Checkliste des Handouts auf ein eigenes Vorhaben anwenden und um aktuelle Punkte ergänzen.'
  ],
  lessons: [
    // ───────────────────────── Lektion 1 ─────────────────────────
    {
      id: 'm08-l1',
      title: 'Die Handout-Fallstudien kritisch lesen',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Fallstudien sind wertvoll, weil sie zeigen, *wie* KI in echten Organisationen wirkt. Sie haben aber typische Schwächen: Veröffentlicht werden vor allem Erfolge (**Survivorship Bias**), Zahlen stammen oft vom Anbieter selbst, und die Ausgangslage („vorher") ist selten sauber gemessen.

Das Handout enthält sechs anonymisierte Kurzfallstudien aus verschiedenen Branchen. Sie sind gute **Denkanstöße** – die genannten Prozentwerte sind im Handout aber nicht mit Quellen belegt. Behandle sie deshalb als Illustration, nicht als Benchmark für deinen Business Case.`
        },
        {
          type: 'handout',
          section: '10',
          page: 5,
          quote: 'Versicherung | Automatisierte Schadenbearbeitung | Bearbeitung Tage → Stunden, +25% Kundenzufriedenheit | Mensch-in-the-Loop sinnvoll',
          md: 'Beispielzeile aus der Fallstudien-Tabelle des Handouts (Spalten: Organisation, KI-Use-Case, Ergebnis, Lesson Learned). Die vollständige Übersicht findest du in der Tabelle unten.'
        },
        {
          type: 'table',
          caption: 'Die sechs Fallstudien aus dem Handout (§ 10, S. 5) – mit kritischer Prüffrage',
          head: ['#', 'Organisation (laut Handout)', 'Use Case', 'Ergebnis (laut Handout)', 'Lesson Learned (laut Handout)', 'Deine Prüffrage'],
          rows: [
            ['1', 'Globaler Händler', 'Lieferketten-Optimierung', '−30 % Lagerkosten, +15 % Liefertempo', 'Lieferanten früh einbinden', 'Welche Effekte kamen von der KI, welche von Prozessänderungen?'],
            ['2', 'Versicherung', 'Automatisierte Schadenbearbeitung', 'Tage → Stunden, +25 % Kundenzufriedenheit', 'Mensch-in-the-Loop sinnvoll', 'Welche Fälle entscheidet die KI allein – und wie werden Ablehnungen geprüft?'],
            ['3', 'Krankenhaus', 'Radiologie-Diagnostik', '+20 % Erkennung kritischer Befunde', 'Mediziner & Tech eng vernetzen', 'Gemessen gegen welche Vergleichsgruppe? Medizinprodukt-Zulassung?'],
            ['4', 'E-Commerce', 'Empfehlungssystem', '+35 % Conversion', 'Algorithmen laufend retrainen', 'Wurde per A/B-Test gemessen, und über welchen Zeitraum?'],
            ['5', 'Elektronikfertigung', 'Predictive Maintenance', '−40 % Ausfallzeit', 'Datenqualität entscheidend', 'Wie viele Sensordaten und Ausfälle gab es zum Training?'],
            ['6', 'Supermarkt', 'Anti-Food-Waste-KI', '−50 % Verderb, +15 % Profit', 'Preisaktionen automatisieren', 'Gilt der Profit für die Filiale oder nur die Warengruppe?']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Zahlen nie ungeprüft übernehmen',
          md: 'Die Ergebniswerte aus Fallstudien – auch aus dem Handout – sind **keine Planwerte** für dein Unternehmen. Für einen Business Case brauchst du eine eigene Baseline (Ist-Messung) und einen Pilot mit Kennzahlen (siehe Modul zu KPIs).'
        },
        {
          type: 'steps',
          items: [
            { title: '1. Quelle & Interessenlage', md: 'Wer berichtet – Anbieter, Kunde, unabhängige Stelle? Gibt es eine Primärquelle?' },
            { title: '2. Ausgangslage', md: 'Was war vorher? Gibt es eine gemessene Baseline?' },
            { title: '3. Messmethode & Zeitraum', md: 'Wie und wie lange wurde gemessen? A/B-Test oder Vorher-Nachher? Saisoneffekte?' },
            { title: '4. Kosten & Nebenwirkungen', md: 'Was hat es gekostet (Lizenzen, Personal, Daten)? Gab es negative Effekte (Kundenbeschwerden, Fehler)?' },
            { title: '5. Übertragbarkeit', md: 'Passen Größe, Datenlage, Branche und Regulierung zu deinem Unternehmen?' }
          ]
        },
        {
          type: 'interactive',
          widget: 'usecase-matrix',
          props: {
            cases: [
              { name: 'Lieferketten-Optimierung', impact: 4, feasibility: 2 },
              { name: 'Automatisierte Schadenbearbeitung', impact: 4, feasibility: 3 },
              { name: 'Radiologie-Diagnostik', impact: 5, feasibility: 1 },
              { name: 'Empfehlungssystem', impact: 3, feasibility: 4 },
              { name: 'Predictive Maintenance', impact: 4, feasibility: 3 },
              { name: 'Anti-Food-Waste-KI', impact: 3, feasibility: 4 }
            ]
          }
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Zur Matrix',
          md: 'Die Werte sind eine **Beispielbewertung** aus Sicht eines fiktiven mittelständischen Handelsunternehmens mit begrenzter Datenbasis – keine Messwerte. Verschiebe die Fälle so, wie sie für *dein* Unternehmen passen würden, und begründe die Position.'
        },
        {
          type: 'praxis',
          title: 'Eine Handout-Fallstudie auf den eigenen Betrieb übertragen',
          company: 'Frischemarkt Sommer GmbH (fiktiv), 6 Filialen, 140 MA, Oberfranken',
          scenario: `Der Inhaber hat die Supermarkt-Fallstudie aus dem Handout gelesen („−50 % Verderb, +15 % Profit") und möchte „genau das" auch. Du sollst einschätzen, was realistisch ist.`,
          steps: [
            'Baseline erheben: Abschriften je Warengruppe und Filiale der letzten 12 Monate aus dem Warenwirtschaftssystem auswerten.',
            'Datenlage prüfen: Gibt es tagesgenaue Abverkäufe, Mindesthaltbarkeitsdaten, Wetter- und Aktionsdaten?',
            'Den Fall mit dem 5-Fragen-Check prüfen: Quelle unbekannt, Messmethode unklar → nur als Inspiration nutzen.',
            'Einen begrenzten Pilot definieren: zwei Filialen, Warengruppe Obst/Gemüse und Backwaren, 12 Wochen, Kontrollfilialen zum Vergleich.',
            'Erfolgskriterium vorab festlegen (z. B. Abschriften in Euro, Kundenreaktion auf Preisreduzierungen) und erst danach über den Rollout entscheiden.'
          ],
          takeaway: 'Fallstudien liefern Ideen, aber keine Garantien. Der eigene, sauber gemessene Pilot ist die einzige belastbare Grundlage für eine Investitionsentscheidung.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Lesson Learned nennt das Handout für die automatisierte Schadenbearbeitung einer Versicherung?',
          options: ['Lieferanten früh einbinden', 'Mensch-in-the-Loop sinnvoll', 'Preisaktionen automatisieren', 'Algorithmen laufend retrainen'],
          answer: 1,
          explain: 'Handout § 10, S. 5: Bei der Versicherung wurde die Bearbeitung von Tagen auf Stunden verkürzt; die Lesson Learned lautet „Mensch-in-the-Loop sinnvoll".'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Die Prozentwerte aus den Handout-Fallstudien eignen sich direkt als Planwerte für den eigenen Business Case.',
          answer: false,
          explain: 'Die Fälle sind anonymisiert und ohne Quellen- und Methodikangaben. Für den eigenen Business Case brauchst du eine eigene Baseline und Pilotmessung.'
        }
      ]
    },
    // ───────────────────────── Lektion 2 ─────────────────────────
    {
      id: 'm08-l2',
      title: 'Wenn KI schiefgeht: Lessons Learned aus realen Fällen',
      minutes: 30,
      blocks: [
        {
          type: 'text',
          md: `Aus Fehlschlägen lernt man oft mehr als aus Erfolgen. Die folgenden drei Fälle sind gut dokumentiert und zeigen typische Muster: **Haftung für KI-Aussagen**, **fehlende Schutzmechanismen** und **verzerrte Trainingsdaten**.`
        },
        {
          type: 'praxis',
          title: 'Moffatt v. Air Canada: Das Unternehmen haftet für seinen Chatbot',
          company: 'Air Canada (reales Beispiel), Kanada',
          scenario: `Nach dem Tod seiner Großmutter im November 2022 fragte Jake Moffatt den Chatbot auf der Website von Air Canada nach Trauerfall-Tarifen. Der Chatbot erklärte, man könne den Rabatt **nachträglich** beantragen – laut den Tarifbedingungen auf einer anderen Seite der Website ging das nicht. Air Canada lehnte die Erstattung ab und argumentierte vor dem Civil Resolution Tribunal von British Columbia u. a., der Chatbot sei für seine eigenen Aussagen verantwortlich. Das Tribunal wies das im Februar 2024 zurück (2024 BCCRT 149): Ein Unternehmen ist für alle Informationen auf seiner Website verantwortlich, egal ob sie von einer statischen Seite oder einem Chatbot stammen. Air Canada musste Schadenersatz zahlen – mit Zinsen und Gebühren rund 812 kanadische Dollar.`,
          steps: [
            'Chatbot-Aussagen rechtlich so behandeln wie jede andere Unternehmenskommunikation.',
            'Antworten zu Preisen, Tarifen und Rechten nur aus geprüften Quellen generieren (RAG mit freigegebenen Dokumenten, Zitate anzeigen).',
            'Bei verbindlichen Themen auf die maßgebliche Seite verlinken oder an Menschen übergeben.',
            'Chatbot-Antworten regelmäßig stichprobenartig gegen die gültigen Bedingungen testen.'
          ],
          takeaway: 'Der Betrag war klein, der Reputationsschaden groß. **Du haftest für deinen Bot** – „Die KI hat sich geirrt" ist keine Ausrede.',
          source: { title: 'Civil Resolution Tribunal BC: Moffatt v. Air Canada, 2024 BCCRT 149', url: 'https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do' }
        },
        {
          type: 'praxis',
          title: 'DPD: Ein Chatbot beschimpft das eigene Unternehmen',
          company: 'DPD UK (reales Beispiel), Großbritannien',
          scenario: `Im Januar 2024 suchte ein Kunde vergeblich nach einem verlorenen Paket. Weil er keinen Menschen erreichte, testete er den KI-Chatbot – und brachte ihn mit wenigen Eingaben dazu, zu fluchen und ein Gedicht darüber zu schreiben, wie nutzlos DPD sei. Die Screenshots verbreiteten sich viral. DPD erklärte, nach einem System-Update sei ein Fehler aufgetreten; das KI-Element wurde sofort deaktiviert.`,
          steps: [
            'Vor jedem Update Regressionstests mit Missbrauchs- und Red-Teaming-Prompts durchführen.',
            'Schutzregeln (Guardrails) für Ton, Themen und Markennennung technisch durchsetzen – nicht nur im Systemprompt.',
            'Ein Monitoring auf auffällige Antworten einrichten, um schnell reagieren zu können.',
            'Immer einen erreichbaren menschlichen Kanal anbieten, besonders bei Beschwerden.'
          ],
          takeaway: 'Ein Chatbot ist ein öffentliches Aushängeschild. Ohne Tests, Guardrails und menschlichen Fallback wird aus einer Effizienzmaßnahme ein PR-Problem.',
          source: { title: 'The Guardian: DPD AI chatbot swears, calls itself useless and criticises delivery firm (20.01.2024)', url: 'https://www.theguardian.com/technology/2024/jan/20/dpd-ai-chatbot-swears-calls-itself-useless-and-criticises-firm' }
        },
        {
          type: 'praxis',
          title: 'Amazon: Ein Recruiting-Tool lernt Vorurteile',
          company: 'Amazon (reales Beispiel), USA',
          scenario: `Laut Reuters (Oktober 2018) entwickelte Amazon ab 2014 ein experimentelles System, das Lebensläufe mit einem bis fünf Sternen bewerten sollte. Trainiert wurde es auf Bewerbungen aus zehn Jahren – überwiegend von Männern. 2015 stellte das Team fest, dass das System Bewerberinnen für technische Stellen benachteiligte; es wertete z. B. Lebensläufe ab, die das Wort „women's" enthielten. Amazon gab das Projekt auf, das Team wurde bis Anfang 2017 aufgelöst; laut Reuters haben Recruiter die Empfehlungen angesehen, sich aber nie allein darauf verlassen.`,
          steps: [
            'Trainingsdaten auf historische Verzerrungen prüfen – „so haben wir es immer gemacht" ist kein neutraler Maßstab.',
            'Ergebnisse nach Gruppen auswerten (Fairness-Tests), bevor ein System produktiv geht.',
            'Ersatzmerkmale (Proxy-Variablen) für geschützte Merkmale identifizieren.',
            'Heute einordnen: Solche Systeme sind nach dem AI Act Hochrisiko (Anhang III Nr. 4) – mit Daten-Governance-Pflichten und menschlicher Aufsicht.'
          ],
          takeaway: 'Ein Modell lernt die Vergangenheit – inklusive ihrer Ungerechtigkeiten. Bias-Prüfung gehört an den Anfang, nicht ans Ende.',
          source: { title: 'Reuters (J. Dastin, 10.10.2018): Amazon scraps secret AI recruiting tool that showed bias against women', url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G' }
        },
        {
          type: 'table',
          caption: 'Muster hinter den Vorfällen',
          head: ['Fall', 'Was ging schief?', 'Ursache', 'Gegenmaßnahme'],
          rows: [
            ['Air Canada', 'Falsche Auskunft zu Tarifen', 'Keine Bindung der Antworten an verbindliche Quellen', 'RAG auf freigegebenen Dokumenten, Quellenangabe, Haftung mitdenken'],
            ['DPD', 'Beleidigende, markenschädigende Antworten', 'Fehler nach Update, unzureichende Guardrails und Tests', 'Regressionstests, Red Teaming, Monitoring, menschlicher Kanal'],
            ['Amazon', 'Benachteiligung von Frauen', 'Verzerrte historische Trainingsdaten', 'Bias-Analyse, Fairness-Tests, menschliche Entscheidung']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Verantwortung lässt sich nicht an die KI delegieren.** Gerichte, Kundschaft und Aufsichtsbehörden halten sich an das Unternehmen – deshalb gehören Tests, Quellenbindung, Bias-Prüfung und ein menschlicher Fallback zu jedem KI-Einsatz mit Außenwirkung.'
        },
        {
          type: 'youtube',
          id: 'cfqtFvWOfg0',
          title: 'Why Large Language Models Hallucinate',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 10
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne jedem Fall die wichtigste Lesson Learned zu.',
          pairs: [
            ['Air Canada', 'Das Unternehmen haftet für die Aussagen seines Chatbots'],
            ['DPD', 'Updates testen und Guardrails technisch durchsetzen'],
            ['Amazon', 'Historische Trainingsdaten auf Verzerrungen prüfen']
          ],
          explain: 'Drei Fälle, drei Muster: Haftung, fehlende Schutzmechanismen, Bias. Alle drei lassen sich mit bekannten Maßnahmen deutlich reduzieren.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Maßnahmen hätten den Air-Canada-Fall wahrscheinlich verhindert? (Mehrfachauswahl)',
          options: ['Antworten nur aus freigegebenen Tarifdokumenten erzeugen', 'Link auf die verbindliche Tarifseite anzeigen', 'Den Chatbot als eigene juristische Person registrieren', 'Regelmäßige Tests der Antworten gegen aktuelle Bedingungen'],
          answer: [0, 1, 3],
          explain: 'Ein Chatbot kann keine eigene juristische Person sein – genau dieses Argument hat das Tribunal zurückgewiesen. Quellenbindung, Verlinkung und Tests reduzieren das Risiko falscher Auskünfte.'
        },
        {
          type: 'links',
          title: 'Datenbanken mit KI-Vorfällen',
          items: [
            { title: 'AI Incident Database', url: 'https://incidentdatabase.ai/', note: 'Gesammelte, dokumentierte KI-Vorfälle weltweit' },
            { title: 'OECD AI Incidents and Hazards Monitor', url: 'https://oecd.ai/en/incidents', note: 'Automatisch erfasste KI-Vorfälle aus Nachrichtenquellen' }
          ]
        }
      ]
    },
    // ───────────────────────── Lektion 3 ─────────────────────────
    {
      id: 'm08-l3',
      title: 'Erfolgsgeschichten mit Lernkurve: Klarna, Otto Group, F13',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Erfolgsgeschichten lohnen einen zweiten Blick: Was wurde *wirklich* erreicht, wer berichtet darüber – und wie ging es weiter? Drei Beispiele, eines international und zwei aus dem DACH-Raum.`
        },
        {
          type: 'praxis',
          title: 'Klarna 2024: KI-Assistent übernimmt zwei Drittel der Service-Chats',
          company: 'Klarna (reales Beispiel), Schweden',
          scenario: `Am **27.02.2024** meldete der Zahlungsdienstleister Klarna, sein KI-Assistent habe im ersten Monat **2,3 Millionen Gespräche** geführt – **zwei Drittel** aller Service-Chats. Laut Pressemitteilung leistete er die Arbeit von **700 Vollzeitkräften**, die Kundenzufriedenheit liege auf dem Niveau menschlicher Agents, Anliegen würden in unter 2 statt 11 Minuten gelöst, Wiederholungsanfragen seien um 25 % gesunken. Der Assistent war in 23 Märkten und über 35 Sprachen verfügbar; Klarna schätzte eine Ergebnisverbesserung von 40 Mio. US-Dollar für 2024. Kundinnen und Kunden konnten weiterhin menschliche Agents wählen.`,
          steps: [
            'Klar abgegrenzter, volumenstarker Use Case (Standardanfragen im Kundenservice).',
            'Messbare Kennzahlen von Anfang an: Volumen, Lösungszeit, Zufriedenheit, Wiederholungsanfragen.',
            'Menschliche Agents als Option beibehalten.',
            'Kritisch lesen: Alle Zahlen sind Unternehmensangaben nach nur einem Monat.'
          ],
          takeaway: 'Ein beeindruckender Start – aber Effizienzzahlen nach einem Monat sagen noch wenig über Qualität und Kundenbindung auf Dauer.',
          source: { title: 'Klarna: AI assistant handles two-thirds of customer service chats in its first month (27.02.2024)', url: 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/' }
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Die Kurskorrektur 2025',
          md: 'Im Mai 2025 sagte Klarna-CEO Sebastian Siemiatkowski gegenüber Bloomberg, man stelle wieder Menschen im Kundenservice ein. Weil die Kosten bei der Organisation ein zu dominanter Bewertungsfaktor gewesen seien, sei am Ende eine **geringere Qualität** herausgekommen; Investitionen in die Qualität menschlicher Unterstützung seien „der Weg der Zukunft", und Kundinnen und Kunden sollten immer einen Menschen erreichen können. ([Entrepreneur, 09.05.2025, unter Berufung auf Bloomberg](https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396)) **Lesson Learned:** Optimiere nicht nur auf Kosten – Qualität und Kundenerlebnis gehören von Anfang an ins Zielsystem.'
        },
        {
          type: 'praxis',
          title: 'Otto Group: Ein interner KI-Assistent für alle',
          company: 'Otto Group (reales Beispiel), Hamburg',
          scenario: `Statt die Nutzung öffentlicher Chatbots zu verbieten, entwickelte die Otto Group in rund zwei Monaten den internen Assistenten **ogGPT** (Azure OpenAI Service, EU-Hosting, keine Nutzung der Chats für das Modelltraining) und stellte ihn Ende September 2023 rund 26.000 Beschäftigten im DACH-Raum bereit. Nach einem Jahr meldete das Unternehmen 7.000 monatlich aktive Nutzende, mehr als zwölf neue Funktionen (z. B. Prompt-Marktplatz, CustomGPTs) und eine Community mit Workshops, Hackathons und einem „Use Case of the Week".`,
          steps: [
            'Sicheres internes Werkzeug als Alternative zu Schatten-KI bereitstellen.',
            'Iterativ aus vorhandenen Bausteinen, PoCs und Hackathons entwickeln.',
            'Nutzung freiwillig halten und durch Lernangebote und Community fördern.',
            'Funktionen anhand des Nutzerfeedbacks erweitern.'
          ],
          takeaway: 'Ein guter Rahmen (Datenschutz, Firmen-Tool) plus Befähigung schlägt Verbote. Die Kennzahlen sind Unternehmensangaben.',
          source: { title: 'Otto Group: ogGPT – internal, privacy-compliant tool with generative AI for all employees (16.10.2023)', url: 'https://www.ottogroup.com/en/medien/newsroom/meldungen/oggpt-otto-group-launches-internal-privacy-compliant-tool-with-generative-ai-for-all-employees.php' }
        },
        {
          type: 'praxis',
          title: 'F13: KI-Assistenz für die Landesverwaltung Baden-Württemberg',
          company: 'Land Baden-Württemberg (reales Beispiel), Landesverwaltung',
          scenario: `Mit **F13** führte Baden-Württemberg nach eigenen Angaben die erste Verwaltungs-KI-Assistenz in Deutschland ein. Ein Prototyp war seit Mai 2023 im Einsatz, die Vollversion folgte 2024 und wird von der Landesoberbehörde IT Baden-Württemberg (BITBW) betrieben. F13 bietet u. a. einen KI-Chat, Zusammenfassungen und Recherche in Verwaltungsdokumenten. Laut Kabinettsbericht war der Rollout in den Landesministerien, beim Rechnungshof und bei der BITBW Ende Oktober 2024 abgeschlossen. Im Juli 2025 wurde F13 als **Open-Source-Software** auf openCode freigegeben, damit Bund, Länder und Kommunen es nachnutzen können; die Lösung ist modellagnostisch.`,
          steps: [
            'Mit einem Prototyp starten und schrittweise ausbauen.',
            'Auf digitale Souveränität achten: Betrieb in deutschen Rechenzentren, modellagnostische Architektur gegen Lock-in.',
            'Datenschutzaufsicht früh einbinden.',
            'Ergebnisse als Open Source teilen und Nachnutzung ermöglichen.'
          ],
          takeaway: 'Auch die öffentliche Verwaltung kann KI pragmatisch einführen – mit Prototyp, Souveränität und Kooperation statt Insellösungen.',
          source: { title: 'Land Baden-Württemberg: KI-Assistenz F13 wird zur Open-Source-Software (23.07.2025)', url: 'https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/ki-assistenz-f13-wird-zur-open-source-software' }
        },
        {
          type: 'table',
          caption: 'Drei Erfolgsbeispiele im Vergleich',
          head: ['Kriterium', 'Klarna', 'Otto Group (ogGPT)', 'F13 (BW)'],
          rows: [
            ['Ziel', 'Kundenservice automatisieren', 'Produktivität und Wissenszugang für Beschäftigte', 'Entlastung der Verwaltung bei Textarbeit'],
            ['Zielgruppe', 'Externe Kundschaft', 'Interne Beschäftigte', 'Interne Beschäftigte'],
            ['Stärke', 'Klare Kennzahlen, großer Volumeneffekt', 'Community, Freiwilligkeit, Datenschutz', 'Souveränität, Open Source, Nachnutzung'],
            ['Lernpunkt', 'Kostenfokus allein senkte die Qualität → Korrektur 2025', 'Befähigung statt Verbot', 'Prototyp → Rollout → Teilen']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Erfolg ist kein Zeitpunkt, sondern ein Verlauf.** Gute KI-Manager messen nicht nur Effizienz, sondern auch Qualität, Akzeptanz und Kundenerlebnis – und korrigieren den Kurs, wenn die Daten es verlangen.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Was war der Hauptgrund für Klarnas Kurskorrektur im Jahr 2025 laut CEO?',
          options: ['Der AI Act verbot den Chatbot', 'Kosten waren ein zu dominanter Bewertungsfaktor, das Ergebnis war geringere Qualität', 'Der Chatbot war zu teuer im Betrieb', 'Die Kundschaft wollte gar keine digitalen Kanäle'],
          answer: 1,
          explain: 'Siemiatkowski sagte gegenüber Bloomberg, der zu starke Kostenfokus habe zu geringerer Qualität geführt; Klarna stellte wieder menschliche Service-Mitarbeitende ein.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'F13 aus Baden-Württemberg ist an ein einziges KI-Modell gebunden.',
          answer: false,
          explain: 'Laut Landesregierung ist F13 modellagnostisch und lässt sich mit nahezu jedem verfügbaren Modell betreiben – ein Schutz gegen Anbieter-Lock-in.'
        }
      ]
    },
    // ───────────────────────── Lektion 4 ─────────────────────────
    {
      id: 'm08-l4',
      title: 'Die Best-Practice-Checkliste anwenden',
      minutes: 20,
      blocks: [
        {
          type: 'handout',
          section: '13',
          page: 7,
          quote: '1. Start mit Use-Case > Business-Nutzen 2. Datenstrategie früh definieren 3. Proof-of-Concept vor großem Roll-out 4. MLOps für Wartung & Skalierung etablieren 5. Responsible AI: Fairness, Privacy, Explainability 6. Change-Management parallel organisieren 7. KPIs & Monitoring kontinuierlich 8. Iteratives Lernen: Pilot → Feedback → Verbesserung 9. Partnerschaften (Cloud, Forschung) clever nutzen 10. Kompetenzen intern aufbauen (KI-Literacy)',
          md: 'Die zehn Punkte des Handouts sind ein solides Fundament. Unten verbinden wir sie mit den Fällen dieses Moduls.'
        },
        {
          type: 'table',
          caption: 'Checkliste trifft Praxis',
          head: ['Handout-Punkt', 'Prüffrage für dein Projekt', 'Beleg aus den Fällen'],
          rows: [
            ['1. Use Case > Business-Nutzen', 'Welches konkrete Problem lösen wir – und für wen?', 'Klarna: klar abgegrenzter Service-Use-Case'],
            ['2. Datenstrategie', 'Sind die Daten vollständig, aktuell und frei von Verzerrungen?', 'Amazon: verzerrte Trainingsdaten'],
            ['3. PoC vor Roll-out', 'Haben wir einen begrenzten Pilot mit Erfolgskriterien?', 'F13: Prototyp seit 2023, Rollout 2024'],
            ['4. MLOps', 'Wie testen wir Updates, bevor sie live gehen?', 'DPD: Fehler nach System-Update'],
            ['5. Responsible AI', 'Fairness, Datenschutz, Erklärbarkeit geprüft?', 'Amazon, Air Canada'],
            ['6. Change-Management', 'Sind Nutzende befähigt und beteiligt?', 'Otto: Community statt Pflicht'],
            ['7. KPIs & Monitoring', 'Messen wir neben Effizienz auch Qualität?', 'Klarna: Qualitätsproblem trotz Effizienz'],
            ['8. Iteratives Lernen', 'Gibt es Feedbackschleifen und Kurskorrekturen?', 'Klarna 2025, ogGPT-Funktionsausbau'],
            ['9. Partnerschaften', 'Vermeiden wir Lock-in?', 'F13: modellagnostisch, Open Source'],
            ['10. KI-Literacy', 'Ist die Schulungspflicht (Art. 4 AI Act) erfüllt und dokumentiert?', 'Otto: Workshops, Lernpfade']
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung: Was in der Checkliste 2026 fehlt',
          md: `Die Handout-Checkliste ist vor der breiten Nutzung generativer KI und vor dem Inkrafttreten des AI Act entstanden. Ergänze sie um:

- **11. Rechtliche Einstufung:** Risikoklasse nach AI Act und Rolle (Anbieter/Betreiber) zu Projektbeginn klären; Transparenzpflichten (Art. 50) gelten seit 02.08.2026.
- **12. Haftung & Außenwirkung:** Chatbot-Aussagen an verbindliche Quellen binden, menschlichen Fallback anbieten (Air Canada, DPD).
- **13. Sicherheit von LLM-Anwendungen und Agenten:** OWASP Top 10 für LLM-Anwendungen prüfen, Rechte von Agenten minimieren.
- **14. Schatten-KI vermeiden:** freigegebene Tools plus Richtlinie (laut Bitkom stellen erst 26 % der Unternehmen einen offiziellen Zugang zu generativer KI bereit).
- **15. Ressourcen & Nachhaltigkeit:** das kleinste passende Modell wählen und Automatisierungen nur bei echtem Nutzen laufen lassen.`,
          sources: [
            { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
            { title: 'OWASP Top 10 for LLM Applications 2025', url: 'https://genai.owasp.org/llm-top-10/' },
            { title: 'Bitkom: Beschäftigte nutzen vermehrt Schatten-KI (21.10.2025)', url: 'https://www.bitkom.org/Presse/Presseinformation/Beschaeftigte-nutzen-Schatten-KI' }
          ]
        },
        {
          type: 'text',
          md: `### Warum Checklisten trotzdem oft scheitern

Die BCG-Studie „Where's the Value in AI?" (Oktober 2024, 1.000 Führungskräfte in 59 Ländern) ergab: **74 %** der Unternehmen konnten noch keinen greifbaren Wert aus KI zeigen. Nur **26 %** hatten die Fähigkeiten aufgebaut, um über Proofs of Concept hinauszukommen. Die Vorreiter konzentrieren sich auf wenige, besonders wertvolle Vorhaben und investieren den Großteil ihres Aufwands in Menschen und Prozesse. Eine Checkliste wirkt also nur, wenn sie mit **Priorisierung** und **Change-Management** verbunden ist. ([BCG, 24.10.2024](https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value))`
        },
        {
          type: 'steps',
          items: [
            { title: '1. Fakten sammeln', md: 'Kennzahlen, Nutzerfeedback, Vorfälle und Kosten des Pilots zusammentragen.' },
            { title: '2. Retrospektive', md: 'Was lief gut? Was nicht? Was hat uns überrascht? Ohne Schuldzuweisung (blameless).' },
            { title: '3. Ursachen klären', md: 'Bei Problemen nach dem Warum fragen: Daten, Technik, Prozess oder Menschen?' },
            { title: '4. Maßnahmen ableiten', md: 'Konkrete Verbesserungen mit Verantwortlichen und Terminen festlegen.' },
            { title: '5. Wissen teilen', md: 'Lessons Learned dokumentieren, im Champions-Netzwerk teilen und die Checkliste aktualisieren.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Checkliste vor dem Rollout eines Kunden-Chatbots',
          company: 'Druckerei Albrecht KG (fiktiv), 60 MA, Würzburg',
          scenario: `Nach einem dreimonatigen Pilot will die Druckerei ihren KI-Chatbot für Auftragsanfragen (Formate, Papiersorten, Lieferzeiten, Preise) auf der Website für alle freischalten. Du prüfst als KI-Managerin vorher mit der erweiterten Checkliste.`,
          steps: [
            'Punkt 7 (KPIs): Neben Antwortzeit und Entlastung auch Korrektheit der Preisangaben in 100 Stichproben prüfen – Ergebnis: einige falsche Lieferzeiten.',
            'Punkt 12 (Haftung): Preise und Lieferzeiten nur noch aus dem Warenwirtschaftssystem ausspielen, mit Hinweis „unverbindlich bis zur Auftragsbestätigung".',
            'Punkt 11 (AI Act): Hinweis „Sie chatten mit einem KI-Assistenten" einbauen (Art. 50).',
            'Punkt 4/13 (Tests & Sicherheit): Missbrauchs-Prompts testen, Regressionstest vor jedem Update.',
            'Punkt 6 (Change): Vertriebsteam als menschlichen Fallback schulen und Übergabe im Chat einrichten.'
          ],
          takeaway: 'Die Checkliste hat zwei Probleme vor dem Livegang aufgedeckt, die sonst Kundschaft und Haftung getroffen hätten. Zehn Minuten Prüfen pro Punkt sind gut investiert.'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die Schritte einer Lessons-Learned-Retrospektive in die richtige Reihenfolge.',
          items: ['Fakten sammeln', 'Retrospektive ohne Schuldzuweisung', 'Ursachen klären', 'Maßnahmen ableiten', 'Wissen teilen und Checkliste aktualisieren'],
          explain: 'Erst Fakten, dann Bewertung, dann Ursachen und Maßnahmen – und zum Schluss das Teilen, damit die ganze Organisation lernt (Handout-Punkt 8: Iteratives Lernen).'
        },
        {
          type: 'links',
          title: 'Weitere Fallbeispiele und Studien',
          items: [
            { title: 'Plattform Lernende Systeme – KI-Landkarte', url: 'https://www.plattform-lernende-systeme.de/ki-landkarte.html', note: 'Anwendungsbeispiele aus Deutschland (im Handout als Best-Practice-Sammlung genannt)' },
            { title: 'BCG: AI Adoption in 2024 – 74% of Companies Struggle', url: 'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value', note: 'Pressemitteilung zur im Handout genannten Studie' },
            { title: 'AI Incident Database', url: 'https://incidentdatabase.ai/', note: 'Aus Fehlern anderer lernen' }
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'single',
      q: 'Welches Ergebnis nennt das Handout für das Predictive-Maintenance-Projekt in der Elektronikfertigung?',
      options: ['−30 % Lagerkosten', '−40 % Ausfallzeit', '+35 % Conversion', '−50 % Verderb'],
      answer: 1,
      explain: 'Handout § 10, S. 5: Elektronikfertigung, Predictive Maintenance, −40 % Ausfallzeit, Lesson Learned „Datenqualität entscheidend".'
    },
    {
      type: 'match',
      q: 'Ordne die Handout-Fallstudien ihrer Lesson Learned zu.',
      pairs: [
        ['Globaler Händler – Lieferketten', 'Lieferanten früh einbinden'],
        ['Krankenhaus – Radiologie', 'Mediziner & Tech eng vernetzen'],
        ['E-Commerce – Empfehlungssystem', 'Algorithmen laufend retrainen'],
        ['Supermarkt – Anti-Food-Waste', 'Preisaktionen automatisieren']
      ],
      explain: 'Die Lessons Learned aus § 10 des Handouts zeigen: Erfolg hängt an Beteiligung, Zusammenarbeit, Wartung und Prozessintegration.'
    },
    {
      type: 'tf',
      q: 'Im Fall Moffatt v. Air Canada akzeptierte das Tribunal das Argument, der Chatbot sei für seine Aussagen selbst verantwortlich.',
      answer: false,
      explain: 'Das Civil Resolution Tribunal wies das Argument zurück: Air Canada ist für alle Informationen auf der eigenen Website verantwortlich, auch für die des Chatbots.'
    },
    {
      type: 'single',
      q: 'Was war laut Reuters die Ursache für die Benachteiligung von Frauen im Amazon-Recruiting-Tool?',
      options: ['Ein Programmierfehler', 'Trainingsdaten aus zehn Jahren mit überwiegend männlichen Bewerbungen', 'Bewusste Vorgaben des Managements', 'Zu wenig Rechenleistung'],
      answer: 1,
      explain: 'Das Modell lernte Muster aus historischen Bewerbungen, die überwiegend von Männern stammten, und übertrug diese Verzerrung auf neue Bewerbungen.'
    },
    {
      type: 'multi',
      q: 'Welche Maßnahmen hätten den DPD-Vorfall wahrscheinlich verhindert oder begrenzt? (Mehrfachauswahl)',
      options: ['Regressionstests mit Missbrauchs-Prompts vor dem Update', 'Technisch durchgesetzte Guardrails für Ton und Themen', 'Den menschlichen Kundenservice abschaffen', 'Monitoring auffälliger Antworten'],
      answer: [0, 1, 3],
      explain: 'Der Fehler trat laut DPD nach einem System-Update auf. Tests, Guardrails und Monitoring helfen – ein erreichbarer menschlicher Kanal hätte zudem den Frust des Kunden vermieden.'
    },
    {
      type: 'cloze',
      q: 'Ergänze die Klarna-Zahlen aus der Pressemitteilung vom Februar 2024.',
      text: 'Der KI-Assistent führte im ersten Monat 2,3 Millionen Gespräche – das waren {{zwei Drittel|2/3|zwei drittel}} aller Service-Chats.',
      explain: 'Laut Klarna entsprach das der Arbeit von 700 Vollzeitkräften. Alle Werte sind Unternehmensangaben nach einem Monat.'
    },
    {
      type: 'single',
      q: 'Welche Lehre zieht man am besten aus Klarnas Kurskorrektur 2025?',
      options: ['KI im Kundenservice funktioniert grundsätzlich nicht', 'Qualität und Kundenerlebnis gehören neben Kosten ins Zielsystem', 'Menschen sollten nie mit KI zusammenarbeiten', 'Pressemitteilungen sind immer falsch'],
      answer: 1,
      explain: 'Klarna setzt weiter auf KI, korrigierte aber den einseitigen Kostenfokus. Ausgewogene KPIs (Handout § 9: technische, Prozess- und Business-KPIs inkl. Kundenzufriedenheit) beugen dem vor.'
    },
    {
      type: 'tf',
      q: 'Die Otto Group stellte ogGPT als internes Tool mit EU-Hosting bereit, bei dem Chats nicht für das Training der Modelle genutzt werden.',
      answer: true,
      explain: 'Laut Otto Group läuft ogGPT über den Azure OpenAI Service mit Hosting in der EU; Chats und Daten bleiben unter Kontrolle der Konzern-IT und werden nicht zum Training genutzt.'
    },
    {
      type: 'order',
      q: 'Bringe die Entwicklung von F13 in die richtige zeitliche Reihenfolge.',
      items: ['Prototyp im Einsatz (ab Mai 2023)', 'Vollversion eingeführt (2024)', 'Rollout in den Ministerien abgeschlossen (Ende Oktober 2024)', 'Freigabe als Open-Source-Software (Juli 2025)'],
      explain: 'F13 zeigt den Weg Prototyp → Vollversion → Rollout → Teilen. Das entspricht den Handout-Punkten „PoC vor Roll-out" und „Iteratives Lernen".'
    },
    {
      type: 'multi',
      q: 'Welche Punkte solltest du der Handout-Checkliste für 2026 ergänzen? (Mehrfachauswahl)',
      options: ['Rechtliche Einstufung nach AI Act', 'Sicherheit von LLM-Anwendungen (z. B. OWASP)', 'Verzicht auf jede Erfolgsmessung', 'Maßnahmen gegen Schatten-KI'],
      answer: [0, 1, 3],
      explain: 'AI Act, LLM-Sicherheit und Schatten-KI sind seit Erstellung des Handouts deutlich wichtiger geworden. Erfolgsmessung bleibt zentral (Handout-Punkt 7).'
    },
    {
      type: 'single',
      q: 'Welcher Anteil der Unternehmen konnte laut BCG-Studie 2024 noch keinen greifbaren Wert aus KI zeigen?',
      options: ['4 %', '26 %', '50 %', '74 %'],
      answer: 3,
      explain: 'BCG „Where\'s the Value in AI?" (2024): 74 % ohne greifbaren Wert, 26 % mit Fähigkeiten über den PoC hinaus, davon 4 % mit Spitzenfähigkeiten.'
    }
  ],
  exercises: [
    {
      id: 'm08-e1',
      title: 'Fallanalyse: Ein Chatbot-Vorfall im eigenen Haus',
      scenario: `Bei der **Stadtwerke Talbach GmbH (fiktiv)**, 210 Mitarbeitende, beantwortet seit sechs Monaten ein KI-Chatbot Fragen zu Tarifen und Abschlägen. Ein Kunde postet in sozialen Medien einen Screenshot: Der Bot hat ihm eine Sonderkündigung „jederzeit ohne Frist" zugesagt – laut AGB gilt das nur bei Preiserhöhungen. Der Kunde verlangt, dass die Zusage eingehalten wird. Ein Lokalreporter fragt nach.`,
      task: `Analysiere den Vorfall nach dem Muster dieses Moduls: Was ist passiert, welche Ursachen kommen in Frage, welche Parallelen gibt es zu den realen Fällen? Lege Sofortmaßnahmen (erste 48 Stunden) und dauerhafte Maßnahmen fest und formuliere eine kurze Lessons-Learned-Zusammenfassung für die Geschäftsführung.`,
      deliverable: 'Strukturierte Analyse (Sachverhalt, Ursachen, Parallelen, Sofortmaßnahmen, dauerhafte Maßnahmen, Lessons Learned), 250–400 Wörter',
      template: `Sachverhalt:

Mögliche Ursachen:

Parallelen zu realen Fällen:

Sofortmaßnahmen (48 h):

Dauerhafte Maßnahmen:

Lessons Learned für die Geschäftsführung:`,
      rubric: [
        { criterion: 'Erkennt die Haftungsfrage und zieht die Parallele zu Air Canada', keywords: ['air canada', 'haft', 'verantwort', 'zusage'], min: 2, hint: 'Gibt es einen realen Fall, in dem ein Unternehmen für eine falsche Chatbot-Auskunft einstehen musste?' },
        { criterion: 'Benennt plausible technische und organisatorische Ursachen', keywords: ['quelle', 'agb', 'halluzin', 'rag', 'test', 'update', 'prompt'], min: 2, hint: 'Woher hatte der Bot sein Wissen – und wurde es geprüft?' },
        { criterion: 'Legt Sofortmaßnahmen fest (Kommunikation, Kulanzentscheidung, Bot-Anpassung)', keywords: ['sofort', 'kommunik', 'kulanz', 'deaktiv', 'presse', 'kunde'], min: 2, hint: 'Was tust du in den ersten 48 Stunden gegenüber Kunde, Presse und System?' },
        { criterion: 'Leitet dauerhafte Maßnahmen ab', keywords: ['monitor', 'test', 'quellenbind', 'fallback', 'mensch', 'freigabe', 'guardrail'], min: 2, hint: 'Wie verhinderst du, dass so etwas wieder passiert?' },
        { criterion: 'Formuliert Lessons Learned verständlich für die Geschäftsführung', keywords: ['lesson', 'lern', 'empfehl', 'checkliste'], min: 1, hint: 'Was soll die Geschäftsführung aus dem Fall mitnehmen?' }
      ],
      hints: [
        'Beginne mit den Fakten: Was hat der Bot gesagt, was steht in den AGB, wer war betroffen?',
        'Vergleiche mit Air Canada (falsche Tarifauskunft) und DPD (öffentlicher Imageschaden). Welche Lehren lassen sich übertragen?',
        'Denke an drei Ebenen: Kundin bzw. Kunde (Kulanz?), Öffentlichkeit (transparente Stellungnahme) und System (Antworten an AGB binden, Tests, menschliche Übergabe bei Vertragsfragen).'
      ],
      sample: `**Sachverhalt:** Der Tarif-Chatbot hat einem Kunden eine fristlose Sonderkündigung zugesagt, die laut AGB nur bei Preiserhöhungen gilt. Der Fall ist öffentlich und die Presse fragt nach.

**Mögliche Ursachen:** Der Bot erzeugt Antworten aus allgemeinem Modellwissen statt aus den aktuellen AGB (keine Quellenbindung); möglicherweise wurden die AGB nach einer Änderung nicht in die Wissensbasis übernommen; es fehlen Tests für Vertragsfragen und eine Übergabe an Menschen.

**Parallelen:** Wie bei **Air Canada** geht es um eine falsche, für Kunden günstige Auskunft – das Tribunal sah das Unternehmen in der Verantwortung. Wie bei **DPD** droht vor allem ein Reputationsschaden.

**Sofortmaßnahmen (48 h):** Kulanzlösung für den Kunden prüfen und zügig anbieten (rechtliche Einschätzung einholen); kurze, ehrliche Stellungnahme an die Presse; Bot für Kündigungs- und Vertragsfragen vorübergehend auf „Bitte wenden Sie sich an unser Service-Team" umstellen; Chatprotokolle nach ähnlichen Aussagen durchsuchen.

**Dauerhafte Maßnahmen:** Antworten zu Verträgen nur aus den freigegebenen AGB generieren und Quelle verlinken (RAG); Testkatalog mit 50 typischen Vertragsfragen vor jedem Update; laufendes Monitoring; bei verbindlichen Themen automatische Übergabe an Menschen; Hinweis, dass nur die Vertragsunterlagen verbindlich sind.

**Lessons Learned:** Wir haften für die Aussagen unseres Bots. Effizienz darf nicht vor Korrektheit gehen. Chatbots mit Außenwirkung brauchen Quellenbindung, Tests und einen menschlichen Fallback – wir nehmen diese Punkte in unsere KI-Checkliste auf.`
    },
    {
      id: 'm08-e2',
      title: 'Eine eigene Fallstudie nach der Best-Practice-Checkliste schreiben',
      scenario: `Du sollst für das interne Wissensportal deines Unternehmens (oder eines fiktiven Unternehmens deiner Wahl, klar als fiktiv gekennzeichnet) eine Kurzfallstudie zu einem abgeschlossenen oder laufenden KI-Pilotprojekt schreiben, damit andere Abteilungen davon lernen können.`,
      task: `Schreibe die Fallstudie im Format „Ausgangslage – Ziel – Vorgehen – Ergebnisse – Lessons Learned". Prüfe das Projekt anschließend mit der Best-Practice-Checkliste des Handouts (mindestens fünf Punkte) und mit mindestens zwei der Ergänzungen für 2026. Kennzeichne, welche Zahlen gemessen und welche geschätzt sind.`,
      deliverable: 'Fallstudie (200–350 Wörter) plus Checklisten-Abgleich (Tabelle oder Liste)',
      template: `Unternehmen (real/fiktiv):
Ausgangslage:
Ziel:
Vorgehen:
Ergebnisse (gemessen/geschätzt kennzeichnen):
Lessons Learned:

Checklisten-Abgleich:
| Punkt | erfüllt? | Begründung |
|---|---|---|`,
      rubric: [
        { criterion: 'Folgt der Struktur Ausgangslage, Ziel, Vorgehen, Ergebnisse, Lessons Learned', keywords: ['ausgangslage', 'ziel', 'vorgehen', 'ergebnis', 'lesson'], min: 4, hint: 'Sind alle fünf Abschnitte vorhanden?' },
        { criterion: 'Unterscheidet gemessene und geschätzte Ergebnisse bzw. nennt eine Baseline', keywords: ['gemessen', 'geschätzt', 'baseline', 'vorher', 'messung'], min: 2, hint: 'Woher stammen deine Zahlen – und wie belastbar sind sie?' },
        { criterion: 'Gleicht mit mindestens fünf Handout-Checklistenpunkten ab', keywords: ['use-case', 'datenstrategie', 'proof', 'mlops', 'responsible', 'change', 'kpi', 'iterativ', 'partner', 'literacy'], min: 5, hint: 'Nimm die zehn Punkte aus § 13 des Handouts als Raster.' },
        { criterion: 'Berücksichtigt mindestens zwei Ergänzungen für 2026', keywords: ['ai act', 'haftung', 'owasp', 'sicherheit', 'schatten', 'nachhaltig', 'modell'], min: 2, hint: 'Welche Themen sind seit dem Handout hinzugekommen?' },
        { criterion: 'Kennzeichnet reale bzw. fiktive Angaben transparent', keywords: ['fiktiv', 'real', 'quelle'], min: 1, hint: 'Ist für Lesende klar, ob das Beispiel echt ist?' }
      ],
      hints: [
        'Wähle ein überschaubares Projekt – ein Pilot mit einem klaren Ziel eignet sich besser als ein großes Programm.',
        'Schreibe die Lessons Learned so, dass eine andere Abteilung sofort etwas damit anfangen kann („Beim nächsten Mal würden wir …").',
        'Gehe für den Checklisten-Abgleich jeden Punkt kurz durch und sei ehrlich: Ein „nicht erfüllt" mit Begründung ist wertvoller als ein geschöntes „erfüllt".'
      ],
      sample: `**Unternehmen:** Möbelhaus Brenner GmbH (fiktiv), 95 MA, Ulm.

**Ausgangslage:** Der Kundenservice beantwortete pro Woche rund 400 E-Mails zu Lieferterminen und Reklamationen (gemessen über das Ticketsystem, Januar–März). Die mittlere Antwortzeit lag bei 2,5 Arbeitstagen.

**Ziel:** Antwortzeit halbieren, ohne die Kundenzufriedenheit zu senken.

**Vorgehen:** 8-wöchiger Pilot: KI erstellt Antwortentwürfe aus Ticket und Auftragsdaten, Mitarbeitende prüfen und senden. Firmen-Tool mit AVV, Schulung aller sechs Servicekräfte, wöchentliche Feedbackrunde.

**Ergebnisse:** Antwortzeit 1,1 Arbeitstage (gemessen). Zeitersparnis pro E-Mail ca. 3 Minuten (geschätzt durch Selbstauskunft). Zufriedenheit unverändert (gemessen, Kurzumfrage nach Ticketabschluss). 6 % der Entwürfe enthielten falsche Liefertermine und wurden korrigiert.

**Lessons Learned:** Liefertermine müssen direkt aus der Warenwirtschaft kommen, nicht aus dem Modell. Die menschliche Prüfung war entscheidend. Feedbackrunden haben die Prompt-Vorlagen stark verbessert.

| Punkt | erfüllt? | Begründung |
|---|---|---|
| 1. Use Case > Nutzen | ja | Klares Problem (Antwortzeit) |
| 3. PoC vor Roll-out | ja | 8-Wochen-Pilot |
| 5. Responsible AI | teilweise | Datenschutz geregelt, keine Bias-Prüfung nötig, Erklärbarkeit offen |
| 6. Change-Management | ja | Schulung, Feedbackrunden |
| 7. KPIs | ja | Antwortzeit, Zufriedenheit, Fehlerquote |
| 10. KI-Literacy | ja | Schulung dokumentiert (Art. 4 AI Act) |
| Ergänzung AI Act | ja | Minimales Risiko, kein Kundenkontakt mit der KI direkt |
| Ergänzung Nachhaltigkeit | teilweise | Kleineres Modell für Klassifikation noch nicht getestet |`
    }
  ],
  glossary: [
    { term: 'Fallstudie', def: 'Strukturierte Beschreibung eines realen oder beispielhaften Projekts mit Ausgangslage, Vorgehen, Ergebnissen und Lessons Learned.' },
    { term: 'Lessons Learned', def: 'Dokumentierte Erkenntnisse aus einem Projekt, die künftige Vorhaben verbessern sollen.' },
    { term: 'Survivorship Bias', def: 'Verzerrung, weil vor allem erfolgreiche Fälle sichtbar werden und gescheiterte im Dunkeln bleiben.' },
    { term: 'Baseline', def: 'Gemessener Ausgangswert vor Einführung einer Lösung; Grundlage für jede seriöse Erfolgsmessung.' },
    { term: 'Guardrails', def: 'Technische und organisatorische Schutzmechanismen, die das Verhalten eines KI-Systems begrenzen, z. B. Themenfilter oder Ausgabeprüfungen.' },
    { term: 'Red Teaming', def: 'Gezieltes Angreifen bzw. Provozieren eines KI-Systems, um Schwachstellen vor dem Livegang zu finden.' },
    { term: 'Human-in-the-Loop', def: 'Ein Mensch prüft oder entscheidet an definierten Punkten eines KI-gestützten Prozesses mit (im Handout: „Mensch-in-the-Loop").' },
    { term: 'Retrospektive', def: 'Strukturierte Rückschau im Team, um ohne Schuldzuweisung aus einem Projektabschnitt zu lernen.' }
  ],
  sources: [
    { title: 'Moffatt v. Air Canada, 2024 BCCRT 149', publisher: 'Civil Resolution Tribunal British Columbia', year: 2024, type: 'Doku', url: 'https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do' },
    { title: 'DPD AI chatbot swears, calls itself useless and criticises delivery firm', publisher: 'The Guardian', year: 2024, type: 'Artikel', url: 'https://www.theguardian.com/technology/2024/jan/20/dpd-ai-chatbot-swears-calls-itself-useless-and-criticises-firm' },
    { title: 'Amazon scraps secret AI recruiting tool that showed bias against women', publisher: 'Reuters', year: 2018, type: 'Artikel', url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G' },
    { title: 'Klarna AI assistant handles two-thirds of customer service chats in its first month', publisher: 'Klarna', year: 2024, type: 'Artikel', url: 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/' },
    { title: 'Klarna Is Hiring Customer Service Agents After AI Couldn\'t Cut It on Calls', publisher: 'Entrepreneur (unter Berufung auf Bloomberg)', year: 2025, type: 'Artikel', url: 'https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396' },
    { title: 'ogGPT: Otto Group launches internal, privacy-compliant tool with generative AI for all employees', publisher: 'Otto Group', year: 2023, type: 'Artikel', url: 'https://www.ottogroup.com/en/medien/newsroom/meldungen/oggpt-otto-group-launches-internal-privacy-compliant-tool-with-generative-ai-for-all-employees.php' },
    { title: 'Transformation & Technology: ogGPT simplifies entry into AI age', publisher: 'Otto Group', year: 2024, type: 'Artikel', url: 'https://www.ottogroup.com/en/stories/story/transformation-with-technology-oggpt-simplifies-entry-into-the-ai-age.php' },
    { title: 'KI-Assistenz F13 wird zur Open-Source-Software', publisher: 'Land Baden-Württemberg', year: 2025, type: 'Artikel', url: 'https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/ki-assistenz-f13-wird-zur-open-source-software' },
    { title: 'Bericht aus dem Kabinett vom 12. November 2024 (Rollout F13)', publisher: 'Land Baden-Württemberg', year: 2024, type: 'Artikel', url: 'https://www.baden-wuerttemberg.de/de/service/alle-meldungen/meldung/pid/bericht-aus-dem-kabinett-vom-12-november-2024' },
    { title: 'AI Adoption in 2024: 74% of Companies Struggle to Achieve and Scale Value', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value' },
    { title: 'AI Incident Database', publisher: 'Responsible AI Collaborative', year: 2026, type: 'Tool', url: 'https://incidentdatabase.ai/' },
    { title: 'KI-Landkarte', publisher: 'Plattform Lernende Systeme', year: 2026, type: 'Tool', url: 'https://www.plattform-lernende-systeme.de/ki-landkarte.html' }
  ]
};
