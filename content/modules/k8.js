export default {
  id: 'k8',
  order: 8,
  title: 'Aufkommende Trends und Zukunft des KI-Managements',
  subtitle: 'Agentische KI, LLMOps, regulatorischer Ausblick, nachhaltige KI und Arbeitswelt der Zukunft',
  icon: 'spark',
  chapter: 8,
  isNew: false,
  minutes: 145,
  skript: [
    { chapter: '8', title: 'Aufkommende Trends und Zukunft des KI-Managements', page: 164 },
    { chapter: '8.1', title: 'Agentische KI und autonome Systeme', page: 166 },
    { chapter: '8.2', title: 'Entwicklung hin zu LLMOps', page: 171 },
    { chapter: '8.3', title: 'Regulatorischer Ausblick und Compliance-Planung', page: 175 },
    { chapter: '8.4', title: 'Nachhaltige KI und Arbeitskräfte der Zukunft', page: 179 }
  ],
  objectives: [
    'Du erklärst agentische KI mit ihren drei Merkmalen und dem Kreislauf Wahrnehmen – Schlussfolgern – Handeln – Beobachten und leitest Management-Folgen, Grenzen und passende Kennzahlen ab.',
    'Du unterscheidest MLOps und LLMOps und planst Prompt-Registry, Evals sowie Kosten- und Qualitätsüberwachung für LLM-Anwendungen.',
    'Du ordnest die regulatorische Entwicklung (EU AI Act nach dem Digital Omnibus, USA, weitere Rechtsräume) ein und entwickelst einen vorausschauenden Compliance-Fahrplan.',
    'Du bewertest den ökologischen Fußabdruck von KI kritisch und wendest das Rahmenwerk Messen – Optimieren – Beschaffen – Steuern an.',
    'Du planst die Transformation der Arbeitswelt entlang von Automatisierung, Augmentierung, neuen Berufsbildern und Verdrängung – mit passenden Managementreaktionen.'
  ],
  lessons: [
    // ------------------------------------------------------------------ 8.1
    {
      id: 'k8-l1',
      title: '8.1 Agentische KI und autonome Systeme',
      minutes: 35,
      skript: { chapter: '8.1', page: 166 },
      blocks: [
        { type: 'video', scene: 'n8n' },
        {
          type: 'text',
          md: `Kapitel 8 schaut nach vorn. Das Skript nennt für die Einleitung drei Entwicklungen, die das KI-Management der nächsten zwei bis fünf Jahre prägen: **agentische Systeme**, die eigenständig handeln, **multimodale Modelle**, die Text, Bild und Video verbinden, und **verbindliche Regulierung** wie den EU AI Act. Für Führungskräfte geht es dabei nicht nur um Wettbewerbsvorteile: KI kann ganze Branchen in Monaten statt Jahren verändern. Wir beginnen mit dem Trend, der den Arbeitsalltag am direktesten verändert – Agenten.`
        },
        {
          type: 'skript',
          chapter: '8.1',
          page: 166,
          quote: 'autonom bedeutet nicht unbeaufsichtigt',
          md: `- **Definition:** Agentische KI bezeichnet den Wandel von **reaktiven Assistenten** (Prompt → Antwort) zu **autonomen Systemen**, die Aufgaben zerlegen, mehrstufig planen, über verschiedene Werkzeuge handeln, Fortschritt überwachen und ihre Strategie anpassen. Bild im Skript: Taschenrechner, der auf Eingaben wartet, vs. Finanzberater, der ein Portfolio nach vereinbarten Zielen selbst verwaltet.
- **Drei Merkmale:** **Autonomie** (ohne ständiges Eingreifen), **zielgerichtetes Verhalten** (verfolgt vorgegebene Ziele), **adaptives Lernen** (passt Strategien anhand von Rückmeldungen an).
- **Warum relevant:** KI wird vom Werkzeug zum „Kollegen", der ganze Arbeitsabläufe übernimmt. Das Skript zitiert McKinsey (2024): Agentische KI könnte bis 2030 **bis zu 45 % der Wissensarbeit** automatisieren, gegenüber 15–20 % bei heutigen promptbasierten Systemen.
- **Funktionsweise:** ein fortlaufender Kreislauf aus **Wahrnehmen – Schlussfolgern – Handeln – Beobachten**, bis das Ziel erreicht ist oder ein Mensch eingreift; Agenten behalten Zustand und Kontext über Interaktionen hinweg.
- **Management-Folgen:** Führung über **Ziele und Grenzen** statt Schrittanweisungen; neue Qualitätssicherung, weil Einzelprüfung jedes Ergebnisses unpraktisch wird; geklärte **Verantwortung** bei Fehlern (Zielgeber, Betreiberteam oder Anbieter?).
- **Beispiele 2024–2025 im Skript:** GitHub Copilot Workspace, Devin AI, Kundenservice-Agenten von Ada und Intercom; außerdem Finanzabgleiche, Marktforschungszusammenfassungen, Compliance-Überwachung.
- **Tipps und Fehler:** in klar abgegrenzten Bereichen mit überschaubaren Fehlerfolgen starten (Kundenservice, Datenanalyse, Content-Betrieb). Fehler: vage Ziele, unzureichende Überwachung, fehlende **Abbruchmechanismen**. Kennzahlen umstellen: Qualität der Ergebnisse, Effizienz pro Ziel, Zuverlässigkeit ohne Eingriff.`
        },
        {
          type: 'steps',
          items: [
            { title: 'Auftrag', md: 'Ziel statt Prompt: „Kundenbeschwerde zu einer fehlerhaften Abrechnung lösen." (Beispiel nach Skript S. 167)' },
            { title: '1 · Wahrnehmen', md: 'Beschwerde, Kundenhistorie und Abrechnungsdaten abrufen.' },
            { title: '2 · Schlussfolgern', md: 'Ursache ermitteln – z. B. ein Systemfehler bei der Anwendung eines Aktionscodes.' },
            { title: '3 · Handeln', md: 'Erstattung veranlassen, korrekte Preise anwenden, Kundendaten aktualisieren.' },
            { title: '4 · Beobachten', md: 'Erstattung prüfen, Kundenzufriedenheit kontrollieren.' },
            { title: '5 · Anpassen', md: 'Muster für ähnliche Fälle dokumentieren und Präventivmaßnahme markieren. Ergebnis: Fall gelöst, Kunde informiert, Dokumentation aktualisiert.' }
          ]
        },
        { type: 'interactive', widget: 'agent-loop', props: {} },
        {
          type: 'table',
          caption: 'Heutige KI-Systeme vs. agentische KI-Systeme (nach Skript S. 169)',
          head: ['Merkmal', 'Heutige KI-Systeme', 'Agentische KI-Systeme'],
          rows: [
            ['Interaktionsmodell', 'Prompt → Antwort', 'Ziel → autonome Ausführung'],
            ['Entscheidungsumfang', 'Einzelaufgabe', 'mehrstufige Arbeitsabläufe'],
            ['Kontext', 'nur pro Sitzung', 'sitzungsübergreifend dauerhaft'],
            ['Werkzeugnutzung', 'erfordert menschliche Einbindung', 'eigenständige Werkzeugauswahl'],
            ['Anpassungsfähigkeit', 'erfordert erneutes Training', 'lernt aus Rückmeldungen']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Genauer hingeschaut: Was heißt „lernt in Echtzeit"?',
          md: 'Heutige Agenten verändern in aller Regel **nicht** ihr Modell, während sie arbeiten. Sie „lernen", indem sie Beobachtungen in den Kontext aufnehmen, Notizen in einem **Gedächtnis (Memory)** ablegen oder neue Anleitungen (*Skills*) speichern. Für das Management ist das wichtig: Was ins Gedächtnis darf (personenbezogene Daten?) und wer gespeicherte Anleitungen prüft, muss geregelt werden – mehr dazu im Plus-Modul „Automatisierung & KI-Agenten mit n8n".'
        },
        {
          type: 'table',
          caption: 'Neue Kennzahlen für Agenten (Dimensionen nach Skript S. 170; Messbeispiele als eigene Ergänzung)',
          head: ['Dimension', 'Leitfrage', 'Beispielkennzahl'],
          rows: [
            ['Qualität der Ergebnisse', 'Wurde das Ziel wirklich erreicht?', 'Anteil korrekt gelöster Fälle (Stichprobe durch Fachkräfte)'],
            ['Effizienz', 'Was kostet ein erreichtes Ziel?', 'Tokens, Tool-Aufrufe und Kosten pro gelöstem Fall'],
            ['Zuverlässigkeit', 'Wie oft klappt es ohne Hilfe?', 'Anteil der Fälle ohne menschliches Eingreifen bzw. ohne Abbruch'],
            ['Sicherheit (Ergänzung)', 'Bleibt der Agent in seinen Grenzen?', 'Zahl blockierter Aktionen, Freigabe-Ablehnungen, Vorfälle']
          ]
        },
        {
          type: 'text',
          md: `### Agenten 2026: vom Antworten zum Handeln
Ein **Chatbot** antwortet auf Fragen. Ein **KI-Agent** plant dagegen selbstständig Schritte, nutzt Werkzeuge (E-Mail, Kalender, ERP, Websuche) und arbeitet eine Aufgabe ab, zum Beispiel: „Hol drei Angebote für Büromaterial ein und bereite einen Vergleich vor." Bitkom-Präsident Ralf Wintergerst sagte dazu im September 2026: „Ein Agent, der eigenständig handelt, braucht verlässliche Daten, verbundene Systeme und Regeln, was er darf und was er zu lassen hat."

Damit Agenten Werkzeuge einheitlich ansprechen können, hat sich das **Model Context Protocol (MCP)** etabliert. Anthropic hat es im November 2024 vorgestellt und im Dezember 2025 an die neu gegründete **Agentic AI Foundation** unter dem Dach der Linux Foundation übergeben.

Eine wichtige Unterscheidung für die Praxis stammt aus dem Beitrag „Building effective agents" (Anthropic, 2024): **Workflows** orchestrieren Modelle und Werkzeuge über vordefinierte Pfade, **Agenten** steuern ihren Ablauf selbst. Die Empfehlung: mit der einfachsten Lösung starten und Autonomie nur dort ergänzen, wo sie echten Mehrwert bringt – das passt zum Skript-Tipp, mit klar abgegrenzten Bereichen zu beginnen.`
        },
        {
          type: 'table',
          caption: 'Weitere Trends aus der Kapiteleinleitung im Faktencheck (Stand Oktober 2026)',
          head: ['Trend', 'Stand 2026', 'Beleg'],
          rows: [
            ['Generative KI im Unternehmen', 'Breit angekommen: Generative KI erreichte in drei Jahren 53 % Nutzung in der Bevölkerung. Neue Felder wie internes Wissensmanagement wachsen schnell.', 'Stanford AI Index 2026; Bitkom 2026'],
            ['Agenten', 'Von den Unternehmen, die KI nutzen oder planen, setzen 11 % bereits Agenten ein, 29 % planen es (Bitkom). Beim OSWorld-Benchmark für Computeraufgaben stieg die Erfolgsquote von 12 % auf rund 66 %.', 'Bitkom 2026; Stanford AI Index 2026'],
            ['Multimodale Modelle', 'Standard: Alle aktuellen Modelle von Anthropic und OpenAI verarbeiten Text und Bild. Gemini und Mistral Large 4 sind ebenfalls multimodal.', 'Herstellerdokumentation (siehe Plus-Modul „Generative KI anwenden: Prompting, RAG & Modellwahl")'],
            ['Edge AI & TinyML', 'Kleine, komprimierte Modelle laufen auf Laptop und Smartphone (z. B. Gemma 4 in quantisierter Form) – mit geringer Latenz und lokalem Datenschutz.', 'Google DeepMind Gemma; EDGE AI FOUNDATION'],
            ['Responsible AI', 'Der AI Act gilt schrittweise, der Digital Omnibus verschiebt Hochrisiko-Fristen (Lektion 8.3). Dokumentierte KI-Vorfälle stiegen von 233 (2024) auf 362 (2025).', 'EU-Kommission; Stanford AI Index 2026']
          ]
        },
        {
          type: 'youtube',
          id: 'F8NKVhkZZWI',
          title: 'What are AI Agents?',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 12
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Agenten-Standards, Sicherheitsrisiken und Realitätscheck',
          md: `Das Skript beschreibt agentische KI als Trend der Jahre 2024–2025. Stand Oktober 2026:
- **Werkzeuge entwickeln sich schnell weiter:** Die im Skript genannten Beispiele sind Momentaufnahmen. GitHub etwa stellte im Mai 2025 den **Copilot Coding Agent** vor, dem man Issues zuweist wie einem Teammitglied.
- **Offene Standards:** Das **Model Context Protocol (MCP)** verbindet Agenten mit Datenquellen und Tools; seit Dezember 2025 wird es herstellerneutral in der **Agentic AI Foundation** (Linux Foundation) weiterentwickelt.
- **Eigene Sicherheitsrahmen:** Die **OWASP Top 10 for Agentic Applications 2026** beschreiben agentenspezifische Risiken; zentral sind zu weitreichende Berechtigungen (*Excessive Agency*) und Prompt Injection über Mails, Webseiten oder Dokumente.
- **Realitätscheck:** Gartner prognostizierte im Juni 2025, dass **über 40 %** der Agenten-Projekte bis Ende 2027 eingestellt werden – wegen steigender Kosten, unklarem Nutzen und schwacher Risikokontrollen. Gartner warnt zudem vor „Agent Washing": Viele Produkte sind umetikettierte Chatbots oder RPA-Tools; nur rund 130 der tausenden Anbieter seien echte Agenten-Anbieter. Das bestätigt die Skript-Warnung vor vagen Zielen und fehlender Überwachung.`,
          sources: [
            { title: 'GitHub Changelog: Copilot coding agent in public preview (19.05.2025)', url: 'https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/' },
            { title: 'Anthropic: Donating MCP and establishing the Agentic AI Foundation (2025)', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
            { title: 'OWASP Top 10 for Agentic Applications for 2026', url: 'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/' },
            { title: 'Gartner: Over 40% of Agentic AI Projects Will Be Canceled by End of 2027 (25.06.2025)', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027' }
          ]
        },
        {
          type: 'praxis',
          title: 'Erster Agenten-Pilot in der Kanzlei',
          company: 'Hofmann & Partner Steuerberatung (fiktiv), 30 Mitarbeitende, Leipzig',
          scenario: `Die Kanzlei erhält täglich zahlreiche Belege per E-Mail. Ein Partner möchte einen KI-Agenten, der Belege aus dem Postfach holt, der richtigen Mandantin oder dem richtigen Mandanten zuordnet, im Dokumentenmanagement ablegt und eine Buchungsvorlage erstellt. Ein Anbieter verspricht: „Läuft vollautomatisch."`,
          steps: [
            '**Ziel und Grenzen festlegen:** Der Agent darf Belege lesen, zuordnen und Buchungen **vorschlagen**, aber nicht selbst buchen oder E-Mails versenden.',
            '**Berechtigungen minimal halten** (Least Privilege): Lesezugriff auf ein eigenes Postfach statt auf alle Konten.',
            '**Abbruchkriterien definieren:** Bei unklarer Zuordnung, fehlenden Pflichtangaben oder Beträgen über einer Schwelle stoppt der Agent und übergibt an eine Fachkraft.',
            '**Freigabe einbauen:** Jede Buchungsvorlage wird von einer Fachkraft geprüft (Human in the Loop).',
            '**Protokollieren:** Jede Aktion des Agenten wird nachvollziehbar geloggt – auch für Berufsrecht und Haftung.',
            '**Vier Wochen pilotieren und messen:** Qualität (korrekte Zuordnungen), Effizienz (Kosten pro Beleg), Zuverlässigkeit (Anteil ohne Eingriff), Fehler.'
          ],
          takeaway: `Agenten entfalten ihren Nutzen erst mit **klaren Grenzen**. Je mehr ein Agent selbstständig darf, desto wichtiger werden Berechtigungskonzept, Abbruchkriterien, Freigaben und Protokollierung – genau wie das Skript es empfiehlt.`
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Selbst ausprobieren',
          md: 'Wie ein Agent mit Tools, Gedächtnis und menschlicher Freigabe praktisch gebaut wird, zeigt das Plus-Modul **„Automatisierung & KI-Agenten mit n8n"** – inklusive AI-Agent-Node, Human-in-the-loop und MCP.'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe den Kreislauf eines agentischen Systems in die richtige Reihenfolge.',
          items: ['Wahrnehmen', 'Schlussfolgern', 'Handeln', 'Beobachten'],
          explain: 'Der Kreislauf läuft, bis das Ziel erreicht ist oder ein Mensch eingreift (Skript S. 167). Im Beispiel des Skripts folgt noch das Anpassen für künftige Fälle.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche drei Merkmale kennzeichnen agentische KI laut Skript? (Mehrfachauswahl)',
          options: ['Autonomie', 'Zielgerichtetes Verhalten', 'Adaptives Lernen', 'Vollständige Unabhängigkeit von menschlicher Aufsicht'],
          answer: [0, 1, 2],
          explain: 'Autonomie, Zielgerichtetheit und adaptives Lernen. Unabhängig von Aufsicht sind Agenten gerade nicht: „autonom bedeutet nicht unbeaufsichtigt".'
        }
      ]
    },
    // ------------------------------------------------------------------ 8.2
    {
      id: 'k8-l2',
      title: '8.2 Entwicklung hin zu LLMOps',
      minutes: 30,
      skript: { chapter: '8.2', page: 171 },
      blocks: [
        { type: 'video', scene: 'rag' },
        {
          type: 'text',
          md: `In Kapitel 6.1 hast du MLOps kennengelernt: Daten, Modelle und Pipelines versionieren, testen, überwachen. Bei Anwendungen mit großen Sprachmodellen verschiebt sich der Schwerpunkt. Du trainierst das Modell meist nicht selbst, sondern mietest es per API – deine Stellschrauben sind **Prompts, Kontext, Bewertung und Kosten**. Genau das beschreibt das Skript mit dem Begriff **LLMOps**.`
        },
        {
          type: 'skript',
          chapter: '8.2',
          page: 171,
          quote: 'Du verwaltest Prompts statt Features, überwachst Sprachqualität statt numerischer Genauigkeit und kontrollierst Kosten pro API-Aufruf statt Rechenleistung für die Inferenz.',
          md: `- **Definition:** LLMOps (Large Language Model Operations) erweitert bewährte MLOps-Verfahren für **Foundation-Modelle und generative KI**. Diese Modelle sind von Drittanbietern vortrainiert, erzeugen natürliche Sprache, verlangen **Prompt Engineering statt Feature Engineering** und bringen neue Herausforderungen: **Prompt-Drift**, **Context-Window-Management** und schnell wechselnde Basismodell-Versionen.
- **Warum:** Bei klassischem ML kontrollierst du die gesamte Pipeline; bei LLMs nutzt du meist ein Modell per API. Laut einer im Skript genannten Gartner-Umfrage (2024) sagen **73 %** der Organisationen mit generativer KI, dass bestehende MLOps-Werkzeuge und -Prozesse nicht ausreichen.
- **Prompts als Vermögenswerte:** Sie werden versioniert, getestet (A/B-Tests nach Genauigkeit, Kosten, Latenz) und verfeinert. Bewertet wird sprachlich: relevant, sachlich korrekt, im Ton angemessen, frei von problematischen Inhalten.
- **Überwachung:** Bewertungsrahmen aus automatischen Prüfungen (problematische Inhalte, Relevanz, Faktenprüfung) plus menschlichen Stichproben. **Kosten** werden zentral: LLM-API-Aufrufe können laut Skript **100- bis 1.000-mal teurer** sein als klassische Inferenz; ein ineffizientes Prompt-Muster kann fünfstellige Überraschungen verursachen.
- **Werkzeuge im Skript:** Prompt-Management (PromptLayer, Humanloop), LLM-Observability (LangSmith, Arize), Bewertungsframeworks (OpenAI Evals, Werkzeuge von Anthropic). Führende Organisationen bauen eigene Teams für Prompt-Standards, Bewertung und Anbieterbeziehungen auf.
- **Tipps und Fehler:** früh eine **Prompt-Registry** einrichten gegen „Prompt-Wildwuchs"; Modellwechsel einplanen und Prompt-Tests in die Bereitstellungspipeline einbauen. Fehler: Prompts als Einweg-Code, fehlende systematische Bewertung, fehlende Kostenkontrollen.`
        },
        {
          type: 'table',
          caption: 'Vom datenzentrierten zum promptzentrierten Ablauf (nach Skript S. 173)',
          head: ['Schritt', 'Traditionelles MLOps', 'LLMOps'],
          rows: [
            ['1', 'Daten sammeln & labeln', 'Foundation-Modell auswählen'],
            ['2', 'Modell trainieren', 'Prompts entwickeln'],
            ['3', 'Validieren', 'Prompt-Varianten testen'],
            ['4', 'Bereitstellen', 'per API bereitstellen'],
            ['5', 'auf Drift überwachen', 'Qualität & Kosten überwachen'],
            ['6', 'regelmäßig neu trainieren', 'Prompts & Kontext verfeinern']
          ]
        },
        {
          type: 'table',
          caption: 'Operative Unterschiede (nach Skript S. 174)',
          head: ['Herausforderung', 'Traditionelles MLOps', 'LLMOps'],
          rows: [
            ['Primäres Artefakt', 'Modellgewichte & Features', 'Prompts & Kontext'],
            ['Leistungsabfall', 'Erkennung von Datendrift', 'Prompt-Drift & Änderungen der Modellversion'],
            ['Qualitätsbewertung', 'numerische Metriken (Accuracy, F1)', 'Bewertung der Sprachqualität'],
            ['Kostenkontrolle', 'Recheninfrastruktur', 'tokenbasierte API-Kosten'],
            ['Aktualisierung', 'erneutes Modelltraining', 'Prompt-Verfeinerung & Modellwechsel']
          ]
        },
        {
          type: 'text',
          md: `### Was gehört in eine Prompt-Registry?
Eine Prompt-Registry ist das „Modellregister" der LLM-Welt. Pro Prompt (bzw. System Message) hält sie mindestens fest:
- **Kennung und Version** mit Änderungshistorie (wer, wann, warum),
- **Zielmodell und Parameter** (Modellname inkl. Version, Temperatur, maximale Länge),
- **Kontextquellen** (welche Dokumente oder RAG-Wissensbasis),
- **Eval-Ergebnis** der aktuellen Version und Freigabestatus,
- **Verantwortliche Person** und betroffene Anwendungen.

Für kleine Teams reicht anfangs ein Git-Repository mit Prompt-Dateien plus Eval-Skript; Werkzeuge wie Langfuse oder LangSmith bringen Versionierung, Tracing und Kostenauswertung mit.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Erfolgskriterien definieren', md: 'Was heißt „gut" für diesen Use Case? Z. B. „sachlich korrekt laut Wissensbasis", „nennt die Quelle", „max. 120 Wörter", „keine personenbezogenen Daten Dritter".' },
            { title: '2 · Testfälle sammeln', md: 'Echte (anonymisierte) Anfragen plus gezielte Randfälle: Tippfehler, mehrdeutige Fragen, Fragen ohne Antwort in der Wissensbasis, Manipulationsversuche.' },
            { title: '3 · Rubrik schreiben', md: 'Je Kriterium eine Skala mit klaren Ankern (z. B. 1 = falsch, 5 = vollständig korrekt mit Quelle) oder Ja/Nein-Fragen.' },
            { title: '4 · Bewertungsmethode wählen', md: 'Code-basiert, wo möglich (Format, Länge, Pflichtangaben), LLM-as-a-Judge für inhaltliche Kriterien, Menschen für Stichproben und Kalibrierung.' },
            { title: '5 · Baseline-Lauf', md: 'Aktuelle Version durchlaufen lassen und Ergebnis festhalten – die Messlatte für jede Änderung.' },
            { title: '6 · Bei jeder Änderung wiederholen', md: 'Neuer Prompt, neues Modell, neue Dokumente → Eval-Lauf in der Bereitstellungspipeline. So fallen Regressionen vor dem Go-live auf.' }
          ]
        },
        {
          type: 'table',
          caption: 'Bewertungsmethoden im Vergleich',
          head: ['Methode', 'Stärken', 'Grenzen', 'Einsatz'],
          rows: [
            ['**Code-basiert** (exakter Abgleich, Formatprüfung, Schlüsselwörter)', 'schnell, billig, reproduzierbar', 'erfasst keine inhaltliche Qualität freier Texte', 'Format, Pflichtfelder, Klassifikation'],
            ['**Menschliche Bewertung**', 'erfasst Nuancen, Fachwissen, Tonalität', 'teuer, langsam, Bewertende sind sich nicht immer einig', 'Stichproben, Kalibrierung, kritische Fälle'],
            ['**LLM-as-a-Judge**', 'skalierbar, schnell, für viele Kriterien nutzbar', 'Verzerrungen, kann selbst irren, muss kalibriert werden', 'große Eval-Sets, Regressionstests']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Grenzen von LLM-as-a-Judge – und Gegenmaßnahmen',
          md: `Zheng et al. (2023) fanden, dass starke Modelle als Bewerter über 80 % Übereinstimmung mit menschlichen Präferenzen erreichen, beschreiben aber auch Verzerrungen; Wang et al. (2023) zeigten, dass schon die Reihenfolge der verglichenen Antworten das Urteil kippen kann.
- **Positions-Bias:** Reihenfolge tauschen und beide Urteile auswerten.
- **Ausführlichkeits-Bias:** Länge in der Rubrik explizit regeln.
- **Selbstbevorzugung:** möglichst ein anderes Modell als Bewerter nutzen.
- **Begrenzte Prüffähigkeit:** Referenzantworten bzw. Quellen mitgeben.
- **Kalibrierung:** regelmäßig eine Stichprobe zusätzlich von Menschen bewerten lassen – das ist die „stichprobenartige menschliche Überprüfung" aus dem Skript.`
        },
        {
          type: 'table',
          caption: 'Qualitätsdimensionen für LLM-Antworten',
          head: ['Dimension', 'Leitfrage', 'Typische Messung'],
          rows: [
            ['Korrektheit', 'Stimmt die Aussage?', 'Abgleich mit Referenzantwort, Fachprüfung'],
            ['Quellentreue (Faithfulness)', 'Ist alles durch die bereitgestellten Dokumente gedeckt?', 'LLM-as-a-Judge mit Kontext, RAG-Metriken'],
            ['Relevanz & Vollständigkeit', 'Beantwortet sie die Frage ganz?', 'Rubrik 1–5'],
            ['Tonalität & Verständlichkeit', 'Passt sie zu Zielgruppe und Persona?', 'Rubrik, menschliche Stichprobe'],
            ['Sicherheit & Compliance', 'Keine vertraulichen Daten, keine problematischen Inhalte?', 'Ja/Nein-Prüfungen, Red-Teaming-Fälle'],
            ['Effizienz', 'Wie schnell und wie teuer?', 'Latenz, Tokens, Kosten pro Antwort']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Kosten im Griff: Budgets mit Warnmeldung',
          md: 'Das Skript empfiehlt **Kostenbudgets mit Warnmeldungen**, damit hohe Rechnungen nicht erst im Nachhinein auffallen. Praktisch: Budget je Anwendung und Monat beim API-Anbieter bzw. im Observability-Tool hinterlegen, Alarm bei 80 % und Tagesspitzen, Kosten pro Vorgang als Kennzahl berichten. Wie du Token-Kosten senkst (kleinere Modelle, Caching, Batch), behandelt Kapitel 6.4; einen Kosten- und Energie-Schätzer findest du in Lektion 8.4.'
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Werkzeuglandschaft und Modellwechsel (Stand Oktober 2026)',
          md: `- **Humanloop**, im Skript als Prompt-Management-Plattform genannt, ist nicht mehr eigenständig: Das Team ist zu Anthropic gewechselt, die Plattform wurde eingestellt. Das zeigt, wie schnell sich der LLMOps-Markt konsolidiert – plane Werkzeugwechsel ein und halte Prompts und Eval-Sets **exportierbar** (z. B. als Dateien im eigenen Repository).
- **Modellwechsel sind Routine:** Die Beispiele im Skript (GPT-3.5 → GPT-4, Claude 2 → Claude 3) sind längst überholt. Anbieter veröffentlichen eigene Abkündigungspläne, z. B. Anthropic auf der Seite „Model deprecations". Wer Modellversion und Prompt versioniert und ein Eval-Set pflegt, macht daraus eine Routineaufgabe (Praxisfall in Kapitel 6.1).
- **Offene Standards für Observability:** Die **OpenTelemetry Semantic Conventions für generative KI** legen herstellerneutral fest, wie Modellaufrufe (Modell, Tokens, Latenz) protokolliert werden – hilfreich, um nicht an ein Observability-Tool gebunden zu sein.
- **Evals bei Anthropic:** Statt eines eigenständigen Produkts „Claude Eval" bietet Anthropic einen Leitfaden zu Erfolgskriterien und Evaluationen in seiner Entwicklerdokumentation.`,
          sources: [
            { title: 'Humanloop: Humanloop is joining Anthropic', url: 'https://humanloop.com/' },
            { title: 'Anthropic Docs: Model deprecations', url: 'https://platform.claude.com/docs/en/about-claude/model-deprecations' },
            { title: 'OpenTelemetry: Semantic conventions for generative AI systems', url: 'https://opentelemetry.io/docs/specs/semconv/gen-ai/' },
            { title: 'Anthropic: Define success criteria and build evaluations', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests' }
          ]
        },
        {
          type: 'links',
          title: 'LLMOps-Werkzeuge (Auswahl)',
          items: [
            { title: 'LangSmith', url: 'https://www.langchain.com/langsmith', note: 'Observability, Tracing und Evaluation für LLM-Anwendungen (im Skript genannt)' },
            { title: 'Arize', url: 'https://arize.com/', note: 'ML- und LLM-Observability (im Skript genannt)' },
            { title: 'PromptLayer', url: 'https://promptlayer.com/', note: 'Prompt-Management und -Versionierung (im Skript genannt)' },
            { title: 'Langfuse', url: 'https://langfuse.com/', note: 'Open Source, selbst hostbar: Traces, Kosten, Prompt-Versionierung, Evals' },
            { title: 'promptfoo', url: 'https://www.promptfoo.dev/', note: 'Open-Source-Werkzeug für Prompt-Tests, Evals und Red-Teaming' },
            { title: 'Ragas', url: 'https://docs.ragas.io/', note: 'Open-Source-Bibliothek zur Evaluation von RAG- und LLM-Anwendungen' }
          ]
        },
        {
          type: 'youtube',
          id: 'cvPEiPt7HXo',
          title: 'Large Language Model Operations (LLMOps) Explained',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 7
        },
        {
          type: 'praxis',
          title: 'Prompt-Wildwuchs beenden',
          company: 'Kanzlei- und Steuerservice Weser GmbH (fiktiv), 260 Mitarbeitende, Bremen',
          scenario: `Fünf Teams nutzen dasselbe Sprachmodell per API – mit insgesamt über 40 Prompt-Varianten, die in Tabellen, Chatverläufen und Code verstreut sind. Als der Anbieter eine Modellversion abkündigt, weiß niemand, welche Prompts betroffen sind. Gleichzeitig hat sich die Monatsrechnung verdreifacht, weil ein Team versehentlich ganze Mandantenakten in jeden Aufruf kopiert.`,
          steps: [
            '**Inventur:** alle produktiven Prompts sammeln, Dubletten zusammenführen, je Prompt eine verantwortliche Person benennen.',
            '**Prompt-Registry einführen:** Prompts als versionierte Dateien mit Zielmodell, Parametern, Kontextquellen und Freigabestatus; Änderungen nur per Review.',
            '**Eval-Sets aufbauen:** je Anwendung 50–100 anonymisierte Testfälle mit Rubrik; Baseline-Lauf für alle Prompts.',
            '**Pipeline-Regel:** Kein Prompt- oder Modellwechsel ohne grünen Eval-Lauf – so wird die Abkündigung zur planbaren Aufgabe.',
            '**Kosten steuern:** Budget je Anwendung mit Alarm, Kontext auf relevante Abschnitte begrenzen (Kosten pro Vorgang als Kennzahl).',
            '**Menschliche Schleife:** monatliche Stichprobe von 30 Antworten durch Fachkräfte, besonders bei steuerrechtlich sensiblen Auskünften.'
          ],
          takeaway: 'LLMOps beginnt nicht mit einem Tool, sondern mit der Haltung **„Prompts sind Vermögenswerte"**: versioniert, getestet, verantwortet und mit Kostenbudget.'
        },
        {
          type: 'praxis',
          title: 'Ein Eval-Set für den internen Wissensassistenten',
          company: 'Bildungswerk Nordhessen e. V. (fiktiv), 140 Mitarbeitende, Kassel',
          scenario: `Ein RAG-Assistent beantwortet Fragen der Mitarbeitenden zu Förderrichtlinien, Teilnahmebedingungen und internen Abläufen. Bevor er für alle freigegeben wird, sollst du die Qualität belegen.`,
          steps: [
            'Du sammelst 80 echte Fragen aus dem Team-Postfach und ergänzt 20 Randfälle (u. a. Fragen, zu denen es keine Antwort in den Dokumenten gibt, und eine Frage mit eingeschleuster Anweisung).',
            'Zwei Fachkräfte schreiben zu jeder Frage eine kurze Referenzantwort mit Quelle.',
            'Rubrik: Korrektheit (1–5), Quellentreue (ja/nein), sagt „weiß ich nicht", wenn nichts gefunden wird (ja/nein), Länge unter 150 Wörtern (Code-Prüfung).',
            'Ein anderes Modell als der Assistent bewertet alle 100 Fälle; drei Mitarbeitende bewerten zusätzlich 30 zufällige Fälle. Du vergleichst die Urteile und schärfst die Rubrik dort, wo Mensch und Modell oft abweichen.',
            'Ergebnis des Baseline-Laufs: Bei Fragen ohne Antwort in den Dokumenten „erfindet" der Assistent in mehreren Fällen eine Regel. Du passt den System-Prompt an und wiederholst den Lauf, bevor du freigibst.'
          ],
          takeaway: `Evals machen Qualität **sichtbar und vergleichbar**. Die Kombination aus automatischer Bewertung und menschlicher Stichprobe ist schnell genug für den Alltag und vertrauenswürdig genug für Entscheidungen.`
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne der MLOps-Praxis ihre LLMOps-Entsprechung zu.',
          pairs: [
            ['Modellgewichte & Features verwalten', 'Prompts & Kontext verwalten'],
            ['Datendrift erkennen', 'Prompt-Drift und Modellversionswechsel erkennen'],
            ['Accuracy und F1 messen', 'Sprachqualität bewerten (Evals, Rubrik)'],
            ['Modell neu trainieren', 'Prompts verfeinern bzw. Modell wechseln']
          ],
          explain: 'So fasst das Skript (S. 174) die operativen Unterschiede zusammen: „Modelltraining" wird zur „Prompt-Verfeinerung", „erneutes Training" zur „Prompt-Versionierung".'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Weil LLM-as-a-Judge im Mittel ähnlich oft mit Menschen übereinstimmt wie Menschen untereinander, kann man auf menschliche Bewertung vollständig verzichten.',
          answer: false,
          explain: 'Falsch. Bewerter-Modelle haben bekannte Verzerrungen und müssen für den eigenen Use Case kalibriert werden – auch das Skript verlangt stichprobenartige menschliche Überprüfung, besonders bei sensiblen Anwendungen.'
        }
      ]
    },
    // ------------------------------------------------------------------ 8.3
    {
      id: 'k8-l3',
      title: '8.3 Regulatorischer Ausblick und Compliance-Planung',
      minutes: 30,
      skript: { chapter: '8.3', page: 175 },
      blocks: [
        {
          type: 'text',
          md: `Regulierung ist für KI-Verantwortliche kein Randthema mehr, sondern Planungsgrundlage. Kapitel 5.3 hat dir die Inhalte des EU AI Act erklärt. Hier geht es um den **Blick nach vorn**: Welche Fristen kommen, wie entwickeln sich andere Rechtsräume – und wie baust du Compliance so auf, dass sie mit den Vorschriften mitwächst?`
        },
        {
          type: 'skript',
          chapter: '8.3',
          page: 175,
          quote: 'Für Führungskräfte lautet die entscheidende Frage nicht, ob sie Vorschriften einhalten müssen, sondern wie sie vorausschauende Compliance-Fähigkeiten aufbauen, die sich mit den Vorschriften weiterentwickeln.',
          md: `- **Entwicklung:** von freiwilligen Grundsätzen zu verbindlichen Rechtsrahmen. Der **EU AI Act** (in Kraft seit August 2024) ist die weltweit erste umfassende KI-Regulierung, mit Strafen bis **35 Mio. Euro oder 7 %** des weltweiten Umsatzes. Laut Skript arbeiten **über 45 Länder** an KI-Vorschriften; die USA setzen auf sektorspezifische Regeln, China auf Registrierungspflichten für Algorithmen, UN und OECD auf globale Standards.
- **Drei Treiber:** öffentlichkeitswirksame KI-Versagen (Gesichtserkennung, algorithmische Diskriminierung), die rasche Verbreitung generativer KI (Fehlinformation, Deepfakes) und wachsendes öffentliches Bewusstsein. Laut einer im Skript zitierten PwC-Befragung (2024) nennen **68 %** der Führungskräfte Compliance als größte KI-Sorge.
- **Globaler Trend:** **risikobasiert** – je höher das Risiko, desto strenger die Anforderungen. Die Risikokategorie deines Systems je Rechtsraum ist die Grundlage der Planung.
- **Zeitleiste 2025–2027 im Skript** (siehe Aktualisierung – teils überholt) und die Botschaft: mehrjährige Compliance-Fahrpläne statt reaktiver Maßnahmen.
- **Vorausschauende Strategien:** (1) **KI-Inventar** – viele entdecken erst im Audit KI ohne zentrale Aufsicht; (2) **KI-Folgenabschätzungen** analog zur DSFA; (3) **Dokumentation von Anfang an** (Designentscheidungen, Tests, Risikominderung).
- **Aufkommende Themen:** algorithmische Transparenz, menschliche Aufsicht, Offenlegung von Umweltauswirkungen, Urheberrecht an KI-Inhalten.
- **Fehler und Tipps:** nur auf den EU AI Act schauen, Compliance als Einmalprojekt sehen, KI-Compliance isoliert von Datenschutz und Branchenregeln führen. Besser: Integration ins Risikomanagement, funktionsübergreifende Teams (Recht, Technik, Geschäft), Compliance-Technologie, eine **Funktion zur regulatorischen Überwachung** und klare Compliance-Pflichten in **Anbieterverträgen**.`
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Die EU-Zeitleiste nach dem Digital Omnibus',
          md: `Die Zeitleiste im Skript (S. 176) ist in mehreren Punkten überholt:
- **„2025 Q4: Anforderungen für allgemeine KI-Modelle"** – tatsächlich gelten die GPAI-Pflichten seit dem **02.08.2025**.
- **„2027 Q3: Compliance-Frist für Hochrisiko-KI"** – mit der **Verordnung (EU) 2026/1744** („Digital Omnibus on AI", in Kraft seit 27.07.2026) wurden die Hochrisiko-Pflichten verschoben: für eigenständige Systeme nach **Anhang III** auf den **02.12.2027**, für KI in regulierten Produkten nach **Anhang I** auf den **02.08.2028**.
- **Transparenzpflichten nach Art. 50** (z. B. Chatbot-Hinweis, Kennzeichnung) gelten seit dem **02.08.2026**; nur für generative Systeme, die schon vorher am Markt waren, läuft für die maschinenlesbare Kennzeichnung eine Übergangsfrist bis 02.12.2026.
- **Neue Verbote** (nicht-einvernehmliche intime Deepfakes, Missbrauchsdarstellungen) gelten ab dem 02.12.2026.
- **„2026 Q3: Internationale KI-Standards (ISO, IEEE) verabschiedet"** – die Managementsystem-Norm **ISO/IEC 42001** ist bereits seit Ende 2023 veröffentlicht (siehe Kapitel 5.1).`,
          sources: [
            { title: 'Verordnung (EU) 2026/1744 – EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
            { title: 'EU-Kommission: KI-Gesetz – Zeitplan und KI-Omnibus', url: 'https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai' },
            { title: 'NicFab: Digital Omnibus on AI – Regulation (EU) 2026/1744 published in the OJ', url: 'https://www.nicfab.eu/en/posts/digital-omnibus-ai-official-journal/' },
            { title: 'AI Act Implementation Timeline', url: 'https://artificialintelligenceact.eu/implementation-timeline/' }
          ]
        },
        {
          type: 'timeline',
          items: [
            { date: '01.08.2024', title: 'Inkrafttreten', md: 'Der AI Act (VO (EU) 2024/1689) tritt in Kraft; die Pflichten greifen gestaffelt.' },
            { date: '02.02.2025', title: 'Verbote und KI-Kompetenz', md: 'Verbotene Praktiken (Art. 5) und die Pflicht zur KI-Kompetenz (Art. 4) gelten.' },
            { date: '02.08.2025', title: 'GPAI und Governance', md: 'Pflichten für Anbieter von KI-Modellen mit allgemeinem Verwendungszweck, Regeln zu Behörden und Sanktionen.' },
            { date: '27.07.2026', title: 'Omnibus in Kraft', md: 'VO (EU) 2026/1744 tritt in Kraft; neu gefasster Art. 4 gilt.' },
            { date: '29.07.2026', title: 'KI-MIG in Kraft', md: 'Deutsches Durchführungsgesetz: Bundesnetzagentur wird zentrale KI-Aufsicht.' },
            { date: '02.08.2026', title: 'Allgemeine Geltung', md: 'Großteil der Verordnung gilt, insbesondere die **Transparenzpflichten nach Art. 50**; Aufsicht und Durchsetzung starten.' },
            { date: '02.12.2026', title: 'Neue Verbote, Kennzeichnung Bestandssysteme', md: 'Neue Verbote; Frist für maschinenlesbare Kennzeichnung bei generativen Systemen, die vor dem 02.08.2026 in Verkehr waren.' },
            { date: '02.08.2027', title: 'GPAI-Bestandsmodelle', md: 'Modelle, die vor dem 02.08.2025 in Verkehr gebracht wurden, müssen die GPAI-Pflichten erfüllen.' },
            { date: '02.12.2027', title: 'Hochrisiko Anhang III', md: 'Pflichten für eigenständige Hochrisiko-Systeme (Anhang III), vorher 02.08.2026.' },
            { date: '02.08.2028', title: 'Hochrisiko Anhang I', md: 'Pflichten für Hochrisiko-KI in regulierten Produkten (Anhang I), vorher 02.08.2027.' },
            { date: '02.08.2030', title: 'Öffentliche Hand', md: 'Hochrisiko-Bestandssysteme, die von Behörden genutzt werden, müssen konform sein.' }
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Verschoben heißt nicht abgeschafft',
          md: 'Die Verschiebung ist **Vorbereitungszeit**, kein Freifahrtschein. Verbote, KI-Kompetenz und Transparenzpflichten gelten bereits. Für Hochrisiko-Systeme brauchst du für Inventur, Lieferantengespräche, Schulung und Prozessanpassung realistisch 12–18 Monate – Dezember 2027 ist also näher, als es klingt.'
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Kurswechsel in den USA',
          md: `Das Skript beschreibt, wie die USA die „AI Bill of Rights" zu sektorspezifischen Regeln weiterentwickeln. Auf Bundesebene haben sich die Vorzeichen 2025 gedreht:
- **Executive Order 14179** (23.01.2025, „Removing Barriers to American Leadership in Artificial Intelligence") hat den Kurs der Vorgängerregierung (u. a. Executive Order 14110) beendet und stellt den Abbau von Hürden für KI-Innovation in den Vordergrund.
- **Executive Order 14365** (11.12.2025, „Ensuring a National Policy Framework for Artificial Intelligence") zielt auf einen möglichst wenig belastenden **nationalen Rahmen** und richtet u. a. eine *AI Litigation Task Force* ein, die gegen einzelstaatliche KI-Gesetze vorgehen soll, die der Bundespolitik widersprechen.
- Für dich heißt das: Einzelstaatliche Regeln (z. B. zu KI im Recruiting) und Verbraucherschutz-Durchsetzung bleiben relevant, ihre Zukunft ist aber unsicher. Genau deshalb empfiehlt das Skript eine **laufende regulatorische Überwachung** und Compliance-Programme, die sich an neue Anforderungen anpassen lassen.`,
          sources: [
            { title: 'The White House: Removing Barriers to American Leadership in Artificial Intelligence (EO 14179)', url: 'https://www.whitehouse.gov/presidential-actions/2025/01/removing-barriers-to-american-leadership-in-artificial-intelligence/' },
            { title: 'Federal Register: Executive Order 14365 – Ensuring a National Policy Framework for Artificial Intelligence', url: 'https://www.govinfo.gov/content/pkg/FR-2025-12-16/html/2025-23092.htm' }
          ]
        },
        {
          type: 'steps',
          items: [
            { title: '1 · KI-Inventar', md: 'Alle KI-Systeme mit Zweck, Anbieter, Rolle (Anbieter/Betreiber), Daten, Einsatzort und Risikoklasse erfassen – auch KI-Funktionen in Standardsoftware. Ohne Inventar keine Compliance.' },
            { title: '2 · KI-Folgenabschätzung', md: 'Potenzielle Schäden für Betroffene bewerten – analog zur DSFA nach DSGVO. Für bestimmte Betreiber von Hochrisiko-Systemen (z. B. öffentliche Stellen, Kreditwürdigkeit, Versicherung) verlangt Art. 27 AI Act eine Grundrechte-Folgenabschätzung.' },
            { title: '3 · Dokumentation von Anfang an', md: 'Designentscheidungen, Testverfahren, Evals und Risikominderung laufend festhalten – nachträgliches Dokumentieren kostet ein Vielfaches.' },
            { title: '4 · Regulatorische Überwachung', md: 'Eine Rolle oder ein fester Termin von Recht und Compliance verfolgt Änderungen in allen relevanten Rechtsräumen (EU, Deutschland, Exportmärkte, Branche).' },
            { title: '5 · Anbieter einbeziehen', md: 'In Auswahl und Vertrag: Compliance-Fähigkeiten, Dokumentationsstandards, Unterstützung bei eigenen Pflichten, klar verteilte Verantwortlichkeiten (vgl. Kapitel 4.3).' },
            { title: '6 · Integrieren statt isolieren', md: 'KI-Compliance mit Datenschutz, Informationssicherheit und Branchen-Compliance im unternehmensweiten Risikomanagement verzahnen; funktionsübergreifendes Team aus Recht, Technik und Fachbereich.' }
          ]
        },
        {
          type: 'table',
          caption: 'Regulatorische Bereiche und vorbereitende Maßnahmen (nach Skript S. 177 f., ergänzt um den Stand 2026)',
          head: ['Bereich', 'Wichtige Anforderungen', 'Jetzt vorbereiten'],
          rows: [
            ['EU AI Act', 'Risikoklassifizierung, Konformitätsbewertung, Dokumentation; Transparenz nach Art. 50', 'Systeme den Risikokategorien zuordnen, Testprotokolle festlegen, Fristen nach Omnibus einplanen'],
            ['Arbeitsrecht / KI im Personalwesen', 'Nichtdiskriminierung, Transparenz, menschliche Aufsicht; in Deutschland zusätzlich Mitbestimmung (BetrVG)', 'Recruiting-KI auf Verzerrungen prüfen, Entscheidungsprozesse dokumentieren, Betriebsrat einbinden'],
            ['Datenschutz (DSGVO)', 'Rechtsgrundlage, Datenminimierung, Betroffenenrechte', 'DSFAs für KI-Systeme aktualisieren, Data Governance umsetzen (Kapitel 5.4)'],
            ['Branchenspezifisch', 'je nach Branche (Gesundheit, Finanzen, Kritis …)', 'Branchenverbände einbeziehen, sektorale Entwicklungen verfolgen'],
            ['Global, bevorstehend', 'wahrscheinliche Angleichung an risikobasierte Rahmenwerke', 'Compliance-Programm modular und anpassbar gestalten']
          ]
        },
        {
          type: 'table',
          caption: 'Die „aufkommenden Themen" aus dem Skript – was 2026 schon geregelt ist (Auswahl)',
          head: ['Thema im Skript', 'Stand Oktober 2026 (EU)'],
          rows: [
            ['Algorithmische Transparenz', 'Transparenzpflichten nach Art. 50 AI Act gelten; Art. 86 gibt Betroffenen bei bestimmten Hochrisiko-Entscheidungen ein Recht auf Erläuterung.'],
            ['Menschliche Aufsicht', 'Art. 14 AI Act verlangt für Hochrisiko-Systeme eine wirksame menschliche Aufsicht; Art. 22 DSGVO begrenzt ausschließlich automatisierte Entscheidungen.'],
            ['Offenlegung von Umweltauswirkungen', 'GPAI-Anbieter dokumentieren den Energieverbrauch ihrer Modelle (Anhang XI AI Act); Berichtspflichten nach CSRD und EnEfG siehe Lektion 8.4.'],
            ['Urheberrecht', 'GPAI-Anbieter brauchen eine Urheberrechts-Strategie und eine Zusammenfassung der Trainingsinhalte (Art. 53 AI Act); der Status KI-generierter Inhalte bleibt umstritten.']
          ]
        },
        { type: 'interactive', widget: 'ai-act-classifier', props: {} },
        {
          type: 'text',
          md: `### Wer kontrolliert in Deutschland?
Mit dem **KI-Marktüberwachungs- und Innovationsförderungsgesetz (KI-MIG)**, in Kraft seit **29.07.2026**, ist die **Bundesnetzagentur** die zentrale Marktüberwachungsbehörde für den AI Act – soweit nicht andere Behörden zuständig sind, etwa die **BaFin** für KI bei beaufsichtigten Finanzinstituten oder Fachbehörden für KI in Produkten nach Anhang I. Die Bundesnetzagentur bietet einen **KI-Service-Desk**, den **KI-Compliance-Kompass** und **KI-Reallabore** – gute Startpunkte für deine regulatorische Überwachung.`
        },
        {
          type: 'links',
          title: 'Werkzeuge für die regulatorische Überwachung',
          items: [
            { title: 'Bundesnetzagentur – KI-Service-Desk', url: 'https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/start_ki.html', note: 'Zentrale deutsche Anlaufstelle, FAQ, Factsheets für KMU' },
            { title: 'EU-Kommission – KI-Gesetz', url: 'https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai', note: 'Offizieller Zeitplan und Leitlinien' },
            { title: 'artificialintelligenceact.eu', url: 'https://artificialintelligenceact.eu/implementation-timeline/', note: 'Gut lesbarer Gesetzestext und Zeitplan (nicht amtlich)' },
            { title: 'OECD AI Principles', url: 'https://oecd.ai/en/ai-principles', note: 'Internationale Grundsätze, an denen sich viele Rechtsräume orientieren' }
          ]
        },
        {
          type: 'praxis',
          title: 'Den AI-Act-Fahrplan nach dem Omnibus neu aufstellen',
          company: 'Weber Präzisionsteile GmbH (fiktiv), 220 MA, Heilbronn – mit Kunden in den USA',
          scenario: `Der Zulieferer hatte 2025 einen AI-Act-Projektplan mit Zieldatum August 2026 erstellt. Nach dem Omnibus fragt die Geschäftsführung, ob man das Projekt „erst mal auf Eis legen" könne. Du bereitest als KI-Manager eine Entscheidungsvorlage vor.`,
          steps: [
            '**KI-Inventar aktualisieren:** alle KI-Systeme mit Zweck, Anbieter, Rolle (Anbieter/Betreiber) und Risikoklasse erfassen – auch Copilot-Funktionen in Standardsoftware.',
            '**Pflichten nach Geltungsdatum sortieren:** schon fällig (Art. 4, Art. 5), seit 02.08.2026 fällig (Art. 50: Chatbot-Hinweis im Kundenportal), ab 02.12.2027 (Schichtplanungs-KI mit Leistungsbewertung → Anhang III Nr. 4) und ab 02.08.2028 (KI-Sicherheitsfunktion in einer selbst gebauten Maschine → Anhang I).',
            '**Sofortmaßnahmen umsetzen:** Schulungsnachweise für Art. 4, Chatbot-Hinweis, KI-Richtlinie.',
            '**Andere Rechtsräume prüfen:** Welche Anforderungen stellen US-Kunden vertraglich? Regulatorische Überwachung als Quartalstermin von Recht und Vertrieb.',
            '**Lieferanten einbinden:** Für Hochrisiko-Fälle Anbieter anschreiben, Compliance-Unterstützung vertraglich festhalten und Meilensteine rückwärts vom Stichtag planen.',
            'Vorlage mit Empfehlung „Projekt fortführen, Budget über 2026–2028 strecken" einbringen.'
          ],
          takeaway: 'Der Omnibus verschiebt Meilensteine, nicht das Ziel. Wer jetzt sauber inventarisiert und überwacht, nutzt die gewonnene Zeit für Qualität statt für Feuerwehreinsätze.'
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze das Datum.',
          text: 'Nach dem Digital Omnibus on AI gelten die Hochrisiko-Pflichten für Systeme nach Anhang III ab dem {{2. Dezember 2027|02.12.2027|2.12.2027|Dezember 2027}}.',
          explain: 'VO (EU) 2026/1744 verschiebt Anhang III von August 2026 auf den 02.12.2027 und Anhang I auf den 02.08.2028. Die Skript-Angabe „2027 Q3" ist damit überholt.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche vorausschauenden Compliance-Strategien nennt das Skript? (Mehrfachauswahl)',
          options: ['Ein KI-Inventar erstellen', 'KI-Folgenabschätzungen durchführen', 'Dokumentation von Anfang an aufbauen', 'Abwarten, bis Behörden konkrete Bußgelder verhängen'],
          answer: [0, 1, 2],
          explain: 'Inventar, Folgenabschätzung und Dokumentation sind die drei Kernelemente (Skript S. 177). Abwarten widerspricht dem Gedanken mehrjähriger Compliance-Fahrpläne.'
        }
      ]
    },
    // ------------------------------------------------------------------ 8.4 (Teil 1)
    {
      id: 'k8-l4',
      title: '8.4 Nachhaltige KI: Fußabdruck messen, senken, steuern',
      minutes: 30,
      skript: { chapter: '8.4', page: 179 },
      blocks: [
        {
          type: 'text',
          md: `Jede KI-Anfrage verbraucht Strom, Kühlwasser und Hardware-Ressourcen. Einzeln ist das wenig – im Unternehmensmaßstab nicht. Das Skript verbindet in Abschnitt 8.4 zwei Themen, die oft getrennt diskutiert werden: die **ökologische Verantwortung** und die **Transformation der Arbeitswelt**. Diese Lektion behandelt den ökologischen Teil, die nächste die Arbeitswelt. Grundlagen zu Training, Inferenz und Token-Kosten findest du in Kapitel 6.4.`
        },
        {
          type: 'skript',
          chapter: '8.4',
          page: 179,
          quote: 'Mache Modelleffizienz von Anfang an zu einer Designanforderung und nicht erst zu einem nachträglichen Gedanken.',
          md: `- **Ausgangslage:** Das Skript nennt für das Training von GPT-3 rund **550 t CO₂** (etwa 550 Hin- und Rückflüge New York – San Francisco) und schreibt, eine ChatGPT-Anfrage verbrauche fast **zehnmal so viel Energie** wie eine Google-Suche (siehe Aktualisierung).
- **Drei Gründe, warum es Führungskräfte betrifft:** regulatorischer Druck (CSRD, ESG-Erwartungen von Investoren), **Kosten** (Effizienz senkt CO₂ und Ausgaben zugleich) und **Talente** (laut Skript bevorzugen 70 % der jungen Fachkräfte Arbeitgeber mit klarem Nachhaltigkeitsbekenntnis).
- **Drei Dimensionen nachhaltiger KI:** ökologisch (Energie- und Ressourcenverbrauch minimieren), sozial (gerechte Übergänge in der Arbeitswelt), wirtschaftlich (langfristige Wertschöpfung ohne externe Schäden).
- **Woher der Fußabdruck stammt:** Training (wochenlang auf tausenden GPUs), **Inferenz mit laut Skript 60–90 %** des Energieverbrauchs über die Lebensdauer, Kühlung der Rechenzentren, Hardwareherstellung (besonders KI-Chips), Speicherung und Netzwerkübertragung.
- **Rahmenwerk:** Messen → Optimieren → Beschaffen → Steuern (siehe Schritte).
- **Grüne Praktiken:** Modelldestillation, vortrainierte Modelle nutzen statt neu trainieren, effiziente Architekturen, Regionen mit sauberem Strommix, **Inferenz-Caching**. Das Skript berichtet, Google habe den Energieverbrauch für ML-Inferenz durch Optimierung um 95 % gesenkt.
- **Tipp:** Nicht jede Aufgabe braucht ein Modell der GPT-4-Klasse – kleinere, spezialisierte Modelle liefern oft vergleichbare Ergebnisse mit einem Bruchteil der Energie.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Messen', md: 'CO₂-Fußabdruck berechnen: **Training** (GPU-Stunden × Energie/Effizienz), **Inferenz** (Anfragen × Modellgröße × Effizienz), **Speicherung und Übertragung**. Bei API-Diensten: Herstellerangaben und Spannen nutzen, Annahmen dokumentieren.' },
            { title: '2 · Optimieren', md: '**Modellkompression** (Pruning, Quantisierung), **kleinere Modelle**, wo möglich, **Stapelverarbeitung** (Batch) statt Echtzeit, wo sinnvoll – und unnötige Läufe vermeiden.' },
            { title: '3 · Beschaffen', md: 'Rechenzentren mit **erneuerbarer Energie**, Regionen mit sauberem Strommix; CO₂-Ausgleich höchstens als letzte Stufe.' },
            { title: '4 · Steuern', md: '**Nachhaltigkeitsanforderungen in der Anbieterauswahl**, KI-Folgenabschätzungen inklusive Umweltaspekten, Berichtsstandards und Transparenz.' }
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Was wir 2026 über den Energieverbrauch wissen',
          md: `- **GPT-3-Training:** Die Zahl im Skript stammt aus Patterson et al. (2021): geschätzt **552 t CO₂e** bei **1.287 MWh** Energie. Dieselbe Studie zeigt, dass die Wahl von Modellarchitektur, Rechenzentrum und Prozessor den Fußabdruck um den Faktor 100–1.000 verändern kann.
- **„Zehnmal so viel wie eine Google-Suche":** Dieser Vergleich beruht auf einer älteren Schätzung von rund 3 Wh pro ChatGPT-Anfrage. **Epoch AI** (2025) schätzt für eine typische GPT-4o-Textanfrage nur etwa **0,3 Wh** – und hält die 3 Wh für eine Überschätzung. **Google** veröffentlichte im August 2025 eine eigene Messung: **0,24 Wh**, 0,03 g CO₂e und 0,26 ml Wasser für einen **medianen** Gemini-Textprompt; Google berichtet außerdem, dass die Energie pro medianem Prompt binnen eines Jahres um den Faktor 33 gesunken sei (Selbstauskunft).
- **Der große Trend bleibt:** Pro Anfrage wird KI effizienter, insgesamt steigt der Verbrauch. Die Internationale Energieagentur (IEA) schätzt den Stromverbrauch von Rechenzentren 2024 auf rund **415 TWh** und erwartet bis 2030 etwa **945 TWh** – KI ist der wichtigste Treiber.
- **Lange Aufgaben zählen mehr:** Reasoning-Modelle, lange Dokumente und Bildgenerierung können ein Vielfaches des Medianwerts verbrauchen.`,
          sources: [
            { title: 'Patterson et al. (2021): Carbon Emissions and Large Neural Network Training', url: 'https://arxiv.org/abs/2104.10350' },
            { title: 'Epoch AI: How much energy does ChatGPT use?', url: 'https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use' },
            { title: 'Google Cloud: Measuring the environmental impact of AI inference', url: 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference' },
            { title: 'IEA: Energy and AI', url: 'https://www.iea.org/reports/energy-and-ai' }
          ]
        },
        {
          type: 'table',
          caption: 'Veröffentlichte Werte pro Anfrage – nicht direkt vergleichbar (unterschiedliche Modelle, Systemgrenzen, Annahmen)',
          head: ['Quelle', 'Bezug', 'Wert', 'Was ist (nicht) enthalten?'],
          rows: [
            ['Google (2025)', 'medianer Gemini-Apps-Textprompt', '0,24 Wh · 0,03 g CO₂e · 0,26 ml Wasser', 'inkl. Leerlauf, CPU/RAM, PUE, Kühlwasser; Wasser für Stromerzeugung und Hardware-Herstellung nicht ausgewiesen'],
            ['Epoch AI (2025)', 'typische ChatGPT-Anfrage mit GPT-4o (Schätzung)', 'ca. 0,3 Wh', 'Abschätzung von außen; lange Eingaben/Ausgaben und Reasoning deutlich mehr'],
            ['Mistral AI (2025)', 'Le-Chat-Antwort mit 400 Tokens', '1,14 g CO₂e · 45 ml Wasser', 'Lebenszyklusanalyse inkl. vorgelagerter Emissionen (Serverherstellung)']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Kritisch lesen: Warum die Zahlen so weit auseinanderliegen',
          md: `- **Systemgrenzen:** Nur Chip? Ganzer Server? Leerlauf? Kühlung? Herstellung der Hardware? Indirektes Wasser für die Stromerzeugung?
- **Median vs. Durchschnitt:** Ein *medianer* Textprompt sagt wenig über lange Dokumente, Bildgenerierung oder Reasoning-Modelle.
- **Selbstauskunft:** Herstellerangaben sind wertvoll, aber selten unabhängig geprüft.
- **Aufgabentyp:** Luccioni et al. (2023) zeigen, dass generative Mehrzweck-Modelle für viele Aufgaben **um Größenordnungen** mehr Energie benötigen als aufgabenspezifische Modelle – das stützt den Skript-Tipp, kleinere, spezialisierte Modelle zu wählen.`
        },
        {
          type: 'text',
          md: `### Der Skalierungseffekt
Im Workshop lautete die Kernbotschaft: **„1 Prompt ist wenig. 100.000 unnötige Prompts pro Monat sind ein schlecht designter Prozess."** Rechenbeispiel: 100.000 Prompts × 0,24 Wh = 24 kWh pro Monat. Ein Workflow mit 1.000 Anfragen pro Tag ergibt rund 30.000 Anfragen pro Monat – mit dem Google-Medianwert als grober Orientierung etwa **7,2 kWh pro Monat**, mit der Epoch-Schätzung etwa 9 kWh. Wichtiger als die exakte Zahl ist die Logik: **Verbrauch = Anfragen × Tokens × Modellgröße × Infrastruktur.** Jeder dieser Faktoren ist ein Hebel aus dem Rahmenwerk „Optimieren".`
        },
        { type: 'interactive', widget: 'token-calculator', props: {} },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: CSRD nach dem Omnibus-I-Paket',
          md: `Das Skript nennt die **CSRD** als Treiber für die Offenlegung von Umweltauswirkungen, auch digitaler Technologien. Die EU hat den Anwendungsbereich 2026 deutlich verkleinert: Die **Omnibus-I-Richtlinie** wurde am **26.02.2026** im Amtsblatt veröffentlicht und trat am 18.03.2026 in Kraft. Berichtspflichtig sind danach nur noch Unternehmen bzw. Gruppen mit **mehr als 1.000 Beschäftigten und über 450 Mio. Euro Nettoumsatz**; die neuen Schwellen gelten voll für Geschäftsjahre ab 2027, die Mitgliedstaaten haben zwölf Monate zur Umsetzung.

Für den Mittelstand heißt das: Die direkte Berichtspflicht entfällt oft – Nachhaltigkeitsdaten werden aber weiterhin von **großen Kunden, Banken und Investoren** angefragt, und für Rechenzentren gelten unabhängig davon die Vorgaben des **Energieeffizienzgesetzes** (siehe unten).`,
          sources: [
            { title: 'Latham & Watkins: EU Sustainability Omnibus Published in the Official Journal', url: 'https://www.lw.com/en/insights/EU-Sustainability-Omnibus-Published-in-the-Official-Journal' }
          ]
        },
        {
          type: 'table',
          caption: 'EnEfG – Anforderungen an Rechenzentren (§§ 11–15, Fassung laut gesetze-im-internet.de, abgerufen Oktober 2026)',
          head: ['Regelung', 'Inhalt'],
          rows: [
            ['§ 11 Abs. 1 – Bestandsrechenzentren (Betrieb vor 1.7.2026)', 'Energieverbrauchseffektivität (PUE) ≤ **1,5** ab 1.7.2027 und ≤ **1,3** ab 1.7.2030 im Jahresdurchschnitt'],
            ['§ 11 Abs. 2 – neue Rechenzentren (Betrieb ab 1.7.2026)', 'PUE ≤ **1,2**; Anteil wiederverwendeter Energie (Abwärme) mind. **10 %**, steigend auf 15 % (ab 1.7.2027) und 20 % (ab 1.7.2028)'],
            ['§ 11 Abs. 5 – Strom', 'bilanziell **50 %** erneuerbarer Strom ab 1.1.2024, **100 %** ab 1.1.2027'],
            ['§§ 12–14', 'Energie- und Umweltmanagementsysteme, jährliche Informationspflicht und Energieeffizienzregister für Rechenzentren'],
            ['§ 15 – Kundenverhältnis', 'Betreiber, die Dienstleistungen für Dritte anbieten, müssen die **den Kund:innen direkt zuzuordnenden Energieverbräuche pro Jahr** darstellen']
          ]
        },
        {
          type: 'text',
          md: `### Energie in der Modelldokumentation
Anbieter von **KI-Modellen mit allgemeinem Verwendungszweck (GPAI)** müssen nach Art. 53 AI Act eine technische Dokumentation führen; Anhang XI nennt ausdrücklich den **bekannten oder geschätzten Energieverbrauch** des Modells. Diese Pflicht gilt seit dem 02.08.2025 und trifft die **Modellanbieter**, nicht euch als Anwender – ihr könnt die Angaben aber in der Anbieterauswahl abfragen. Zusammen mit § 15 EnEfG ist das dein Werkzeugkasten für den Baustein **„Steuern"** aus dem Skript-Rahmenwerk.`
        },
        {
          type: 'praxis',
          title: 'Den Morgen-Briefing-Workflow entschlacken',
          company: 'Lernwerk Weiterbildung gGmbH (fiktiv), Bildungsträger, Köln',
          scenario: `Der Briefing-Workflow aus dem Plus-Modul „Automatisierung & KI-Agenten mit n8n" wurde von mehreren Teams kopiert. Inzwischen laufen zwölf Varianten – teils stündlich statt täglich, mit dem größten verfügbaren Modell und ohne Filter vor dem KI-Schritt. Die Monatsrechnung ist gestiegen, Nutzen hat niemand gemessen.`,
          steps: [
            '**Messen:** Executions auswerten – Läufe pro Monat, Tokens pro Lauf, Modell je Variante; Verbrauch mit Spannen (0,24–0,3 Wh pro kurzem Prompt) grob abschätzen.',
            '**Nutzen erfragen:** Welche Briefings werden gelesen? (Feedback-Link, kurze Umfrage)',
            '**Optimieren:** drei statt zwölf Varianten; Schedule von stündlich auf werktäglich; Duplikate und alte Artikel **vor** dem KI-Schritt entfernen.',
            '**Modell verkleinern:** Zusammenfassung mit kleinem Modell, nur bei Bedarf größeres Modell; wiederkehrende Systemanweisungen per Caching.',
            '**Steuern:** Regel in der KI-Richtlinie: neue zeitgesteuerte Workflows nur mit Nutzenbegründung und Modellwahl-Check.',
            '**Vorher-nachher dokumentieren:** Läufe, Tokens, Kosten, geschätzter Verbrauch, Zufriedenheit.'
          ],
          takeaway: 'Die größte Einsparung liegt fast immer im **Prozessdesign**: weniger unnötige Läufe, weniger Tokens, kleinere Modelle – bei gleichem oder höherem Nutzen. Effizienz spart CO₂ und Geld zugleich.'
        },
        {
          type: 'praxis',
          title: 'Energie-Transparenz in der Ausschreibung',
          company: 'Landratsamt Waldkirchen (fiktiv), 900 Beschäftigte, Bayern',
          scenario: `Das Landratsamt schreibt eine KI-Plattform für interne Assistenten aus. Der Kreistag hat Klimaneutralität bis 2035 beschlossen. Du sollst Nachhaltigkeitskriterien in die Leistungsbeschreibung einbringen, ohne den Wettbewerb unnötig einzuschränken.`,
          steps: [
            'Pflichtangaben definieren: Rechenzentrumsstandort(e), PUE, Anteil erneuerbarer Strom, ggf. Abwärmenutzung (Bezug EnEfG).',
            'Modelltransparenz anfragen: Angaben zum Energieverbrauch der eingesetzten Modelle (Bezug AI Act Anhang XI) bzw. Energie pro Anfrage, soweit verfügbar.',
            'Verbrauchsbericht vertraglich fordern: jährliche Darstellung der zuzuordnenden Energieverbräuche (Bezug § 15 EnEfG, soweit anwendbar).',
            'Funktionale Kriterien: Wahl kleinerer Modelle, Caching/Batch, Nutzungsstatistiken pro Use Case.',
            'Gewichtung festlegen (z. B. 10–15 % Nachhaltigkeit) und mit Vergabestelle sowie Klimaschutzmanagement abstimmen.'
          ],
          takeaway: 'Nachhaltigkeit wird steuerbar, wenn sie **messbar in Verträgen** steht – genau das meint der Baustein „Nachhaltigkeitsanforderungen bei der Anbieterauswahl" im Skript.'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die Schritte des Rahmenwerks zur KI-Nachhaltigkeitsbewertung in die Reihenfolge des Skripts.',
          items: ['Messen', 'Optimieren', 'Beschaffen', 'Steuern'],
          explain: 'Erst den Fußabdruck berechnen, dann die Effizienz steigern, saubere Energie wählen und schließlich Richtlinien festlegen (Skript S. 180).'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Wahr oder falsch: Laut aktuellen Messungen und Schätzungen verbraucht eine typische kurze Textanfrage an ein großes Sprachmodell rund 3 Wh – zehnmal so viel wie eine Google-Suche.',
          answer: false,
          explain: 'Falsch. Epoch AI schätzt rund 0,3 Wh für eine typische GPT-4o-Anfrage, Google misst 0,24 Wh für einen medianen Gemini-Textprompt. Lange Aufgaben und Reasoning können aber deutlich mehr verbrauchen.'
        }
      ]
    },
    // ------------------------------------------------------------------ 8.4 (Teil 2)
    {
      id: 'k8-l5',
      title: '8.4 Arbeitskräfte der Zukunft: Automatisierung, Augmentierung, neue Rollen',
      minutes: 20,
      skript: { chapter: '8.4', page: 182 },
      blocks: [
        {
          type: 'text',
          md: `Die zweite Hälfte von Abschnitt 8.4 betrifft die **soziale Dimension** nachhaltiger KI: Was passiert mit Rollen, Tätigkeiten und Karrieren, wenn KI-Systeme – bis hin zu Agenten aus Lektion 8.1 – immer mehr übernehmen? Das Skript beantwortet das nüchtern: Technik verwandelt Arbeit meist, statt sie abzuschaffen – aber nur, wenn das Management den Übergang aktiv gestaltet.`
        },
        {
          type: 'skript',
          chapter: '8.4',
          page: 182,
          quote: 'Verantwortungsvolles KI-Management schließt die Belange der Belegschaft mit ein.',
          md: `- **Muster der Auswirkung:** **Automatisierung** (KI ersetzt Tätigkeiten), **Augmentierung** (KI erweitert Fähigkeiten), **neue Berufsbilder** (z. B. KI-Trainer, Prompt Engineers, Ethikprüfer) – und in der Tabelle zusätzlich **Verdrängung** als vorübergehende Lücke zwischen wegfallenden und neuen Stellen.
- **Größenordnung:** Das Skript nennt McKinsey-Untersuchungen, nach denen bis 2030 rund **12 %** der Beschäftigten den Beruf wechseln müssen und **30 %** der Arbeitstätigkeiten automatisiert werden könnten. Historisches Beispiel: Geldautomaten haben Bankangestellte nicht ersetzt, sondern ihre Rolle Richtung Beratung verschoben.
- **Vier Strategien:** (1) **Auswirkungsanalysen** für die Belegschaft parallel zu Technologieentscheidungen, (2) massiv in **Um- und Weiterbildung** investieren (Beispiel im Skript: IBM nach eigenen Angaben 300 Mio. Dollar pro Jahr), (3) **Arbeit neu gestalten** statt nur automatisieren, (4) **transparent kommunizieren**.
- **Fehler:** Kostensenkung über Wertschöpfung stellen, Zeit und Aufwand unterschätzen, die psychologische Dimension vernachlässigen. Erfolgreiche Organisationen beziehen Mitarbeitende in KI-Designentscheidungen ein, schaffen Karrierepfade mit KI-Kompetenzen und investieren sichtbar in Weiterbildung.
- **Tipp:** KI als Werkzeug darstellen, das Routinearbeit übernimmt, damit Menschen sich auf Urteilsvermögen, Kreativität und Einfühlungsvermögen konzentrieren können.`
        },
        {
          type: 'table',
          caption: 'Auswirkungen von KI auf die Arbeitswelt und Managementreaktionen (nach Skript S. 182 f.)',
          head: ['Auswirkung', 'Beschreibung', 'Reaktion des Managements'],
          rows: [
            ['**Automatisierung**', 'KI übernimmt Routineaufgaben, die bisher Menschen erledigt haben', 'Umschulungsprogramme, Neugestaltung von Rollen, Personalplanung'],
            ['**Augmentierung**', 'KI verstärkt menschliche Fähigkeiten in bestehenden Rollen', 'Schulung an KI-Werkzeugen, Prozessneugestaltung, angepasste Leistungskennzahlen'],
            ['**Neue Berufsbilder**', 'neue Rollen entstehen (KI-Trainer, Prompt Engineers, Ethikprüfer)', 'Talentförderung, Recruitingstrategien, Karrierepfade'],
            ['**Verdrängung**', 'vorübergehende Diskrepanz zwischen wegfallenden und neu geschaffenen Stellen', 'Übergangsunterstützung, Auffangmaßnahmen, transparente Kommunikation']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Ergänzende Daten – und wie man sie liest',
          md: `- **[WEF Future of Jobs Report 2025](https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/):** Arbeitgeber erwarten bis 2030 weltweit rund **170 Mio. neue** und **92 Mio. wegfallende** Stellen, netto **+78 Mio.**; rund **39 %** der Kernkompetenzen ändern sich.
- **IAB-Kurzbericht 5/2024:** **38 %** der sozialversicherungspflichtig Beschäftigten in Deutschland arbeiten in Berufen mit hohem **Substituierbarkeitspotenzial** – das beschreibt, was technisch möglich wäre, nicht, was tatsächlich wegfällt.

Alle diese Werte sind **Potenziale oder Erwartungen**, keine Messungen. Für dein Unternehmen zählt die eigene Tätigkeitsanalyse. Ausführlich zu Ängsten und Daten: Kapitel 4.5.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Auswirkungen auf Tätigkeitsebene analysieren', md: 'Nicht „Welche Stellen fallen weg?", sondern: Welche **Tätigkeiten** einer Rolle übernimmt KI, welche werden unterstützt, welche bleiben menschlich? Parallel zur Technologieentscheidung, nicht danach.' },
            { title: '2 · Qualifizierung planen', md: 'Für jede betroffene Rolle einen Lernpfad; in Deutschland bestimmt der Betriebsrat bei Qualifizierungsmaßnahmen mit, wenn sich Tätigkeiten durch technische Veränderungen ändern (§ 97 Abs. 2 BetrVG).' },
            { title: '3 · Arbeit neu gestalten', md: 'Frei werdende Zeit bewusst umwidmen – z. B. in Beratung, Qualitätssicherung, Kundennähe. Leistungskennzahlen an die neue Rolle anpassen.' },
            { title: '4 · Karrierepfade schaffen', md: 'KI-Kompetenzen in Stellenprofilen und Entwicklungsgesprächen verankern; neue Rollen (z. B. KI-Produktverantwortliche, Key User, Eval-Verantwortliche) intern ausschreiben.' },
            { title: '5 · Transparent kommunizieren und beteiligen', md: 'Frühe, ehrliche Kommunikation über Ziele und Folgen; Beschäftigte an Design und Test der KI-Lösung beteiligen.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Tätigkeitsanalyse in der Kreditorenbuchhaltung',
          company: 'Mainfranken Agrarhandel eG (fiktiv), 480 Beschäftigte, Würzburg',
          scenario: `Mit einer KI-gestützten Rechnungserkennung sollen künftig rund 80 % der Eingangsrechnungen automatisch vorerfasst werden (Zielwert aus dem Business Case). In der Kreditorenbuchhaltung arbeiten acht Personen; das Gerücht „vier Stellen fallen weg" macht die Runde. Die Geschäftsführung bittet dich um einen Plan, bevor das Projekt startet.`,
          steps: [
            '**Tätigkeiten erfassen:** gemeinsam mit dem Team die Tätigkeiten und ihren Zeitanteil auflisten (Erfassen, Prüfen, Klären mit Lieferanten, Zahlungsläufe, Sonderfälle).',
            '**Muster zuordnen:** Erfassen → Automatisierung; Prüfen von Abweichungen → Augmentierung; Lieferantenklärung und Betrugsprävention → bleibt menschlich und wird wichtiger.',
            '**Neue Rolle definieren:** eine Person wird „Key User Rechnungsautomatisierung" (Regeln pflegen, Qualität überwachen, Eval-Stichproben).',
            '**Qualifizierung mit dem Betriebsrat vereinbaren** (§ 97 Abs. 2 BetrVG): Schulung zu Ausnahmeprüfung, Lieferantenmanagement und KI-Grundlagen.',
            '**Personalplanung:** Freiwerdende Kapazität deckt den geplanten Ruhestand von zwei Beschäftigten und den Aufbau eines Skonto- und Lieferantenmanagements – keine Kündigungen, schriftlich zugesagt.',
            '**Kommunizieren:** Plan vor Projektstart im Team vorstellen; Feedback nach drei Monaten.'
          ],
          takeaway: 'Wer die Tätigkeitsanalyse **vor** der Einführung macht, verwandelt Angst in Planbarkeit. Automatisierung, Augmentierung und neue Rollen liegen oft in derselben Abteilung.'
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Augmentierung zuerst:** KI übernimmt Routine, Menschen gewinnen Zeit für Urteilsvermögen, Kreativität und Einfühlungsvermögen. Diese Haltung senkt Widerstände – wenn sie durch Investitionen in Weiterbildung glaubwürdig wird.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Auswirkung auf die Arbeitswelt der passenden Managementreaktion zu.',
          pairs: [
            ['Automatisierung', 'Umschulungsprogramme und Personalplanung'],
            ['Augmentierung', 'Schulung an KI-Werkzeugen und Prozessneugestaltung'],
            ['Neue Berufsbilder', 'Talentförderung und Karrierepfade'],
            ['Verdrängung', 'Übergangsunterstützung und transparente Kommunikation']
          ],
          explain: 'So ordnet die Tabelle im Skript (S. 182 f.) die vier Auswirkungen den organisatorischen Reaktionen zu.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welcher Fehler bei der Transformation der Arbeitswelt wird im Skript genannt?',
          options: ['Zu viel in Weiterbildung investieren', 'Kostensenkung über Wertschöpfung stellen', 'Beschäftigte in KI-Designentscheidungen einbeziehen', 'Karrierepfade mit KI-Kompetenzen schaffen'],
          answer: 1,
          explain: 'Kostensenkung vor Wertschöpfung erzeugt Widerstand. Die übrigen Optionen beschreibt das Skript als Merkmale erfolgreicher Organisationen.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'single',
      q: 'Was unterscheidet agentische KI laut Skript grundlegend von heutigen KI-Assistenten?',
      options: [
        'Sie hat ein größeres Sprachmodell.',
        'Sie verfolgt Ziele, plant mehrstufig, handelt über Werkzeuge und passt sich mit minimalem menschlichem Eingriff an.',
        'Sie braucht keinen Strom.',
        'Sie darf grundsätzlich ohne Überwachung arbeiten.'
      ],
      answer: 1,
      explain: 'Interaktionsmodell „Ziel → autonome Ausführung" statt „Prompt → Antwort". Überwachung bleibt nötig: „autonom bedeutet nicht unbeaufsichtigt".'
    },
    {
      type: 'multi',
      q: 'Welche häufigen Fehler beim Einsatz agentischer KI nennt das Skript? (Mehrfachauswahl)',
      options: ['Vage Zielvorgaben', 'Unzureichende Überwachung', 'Fehlende Abbruchmechanismen', 'Zu enge Abgrenzung des ersten Einsatzbereichs'],
      answer: [0, 1, 2],
      explain: 'Ein eng abgegrenzter Startbereich ist laut Skript gerade empfehlenswert. Fehler sind vage Ziele, fehlende Überwachung und fehlende Kriterien, wann der Agent stoppt und Hilfe anfordert.'
    },
    {
      type: 'match',
      q: 'Ordne die Kennzahl-Dimension für Agenten ihrer Bedeutung zu.',
      pairs: [
        ['Qualität', 'erreichte Ziele'],
        ['Effizienz', 'Ressourcenverbrauch pro Ziel'],
        ['Zuverlässigkeit', 'Zielerreichung ohne menschliches Eingreifen']
      ],
      explain: 'Statt Arbeitsvolumen (erledigte Aufgaben) empfiehlt das Skript diese drei Dimensionen (S. 170).'
    },
    {
      type: 'tf',
      q: 'Gartner prognostizierte im Juni 2025, dass über 40 % der Agenten-Projekte bis Ende 2027 eingestellt werden.',
      answer: true,
      explain: 'Richtig. Gründe laut Gartner: steigende Kosten, unklarer Geschäftswert und unzureichende Risikokontrollen. Gartner warnt außerdem vor „Agent Washing".'
    },
    {
      type: 'single',
      q: 'Was ist laut Skript das primäre Artefakt, das im LLMOps verwaltet wird?',
      options: ['Modellgewichte', 'Prompts und Kontext', 'Trainingsdaten-Labels', 'GPU-Cluster'],
      answer: 1,
      explain: 'Im LLMOps-Kreislauf sind Prompts – nicht Modellgewichte – die primären Artefakte, die versioniert, getestet und weiterentwickelt werden.'
    },
    {
      type: 'order',
      q: 'Bringe den LLMOps-Workflow aus dem Skript in die richtige Reihenfolge.',
      items: ['Foundation-Modell auswählen', 'Prompts entwickeln', 'Prompt-Varianten testen', 'Per API bereitstellen', 'Qualität & Kosten überwachen', 'Prompts & Kontext verfeinern'],
      explain: 'Der Ablauf ist promptzentriert statt datenzentriert (Skript S. 173).'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Skript-Tipp gegen Prompt-Wildwuchs.',
      text: 'Richte frühzeitig eine {{Prompt-Registry|Prompt Registry|Promptregistry}} ein – ein zentrales System zur Versionierung, zum Testen und zur Bereitstellung von Prompts.',
      explain: 'So verhinderst du, dass Teams uneinheitliche, nicht nachverfolgte Prompt-Varianten nutzen und Qualitätskontrolle unmöglich wird.'
    },
    {
      type: 'multi',
      q: 'Welche Verzerrungen sind bei LLM-as-a-Judge beschrieben? (Mehrfachauswahl)',
      options: ['Positions-Bias', 'Ausführlichkeits-Bias', 'Selbstbevorzugung', 'Garantierte Fehlerfreiheit'],
      answer: [0, 1, 2],
      explain: 'Zheng et al. (2023) beschreiben Positions-, Ausführlichkeits- und Selbstbevorzugungs-Bias. Deshalb braucht es menschliche Stichproben zur Kalibrierung.'
    },
    {
      type: 'tf',
      q: 'Durch den Digital Omnibus gelten auch die Transparenzpflichten nach Art. 50 AI Act (z. B. Chatbot-Hinweis) erst ab Dezember 2027.',
      answer: false,
      explain: 'Art. 50 gilt seit dem 02.08.2026. Verschoben wurden die Hochrisiko-Pflichten (Anhang III auf 02.12.2027, Anhang I auf 02.08.2028).'
    },
    {
      type: 'match',
      q: 'Ordne die Skript-Angabe dem aktuellen Stand (Oktober 2026) zu.',
      pairs: [
        ['„2025 Q4: Anforderungen für allgemeine KI-Modelle"', 'gelten seit 02.08.2025'],
        ['„2027 Q3: Frist für Hochrisiko-KI"', 'Anhang III ab 02.12.2027, Anhang I ab 02.08.2028'],
        ['„2026 Q3: Internationale KI-Standards verabschiedet"', 'ISO/IEC 42001 existiert bereits seit 2023'],
        ['„USA entwickeln die AI Bill of Rights weiter"', 'Kurswechsel per Executive Orders 14179 und 14365']
      ],
      explain: 'Regulierung ändert sich schneller als Lehrmaterial – deshalb empfiehlt das Skript selbst eine laufende regulatorische Überwachung.'
    },
    {
      type: 'single',
      q: 'Welcher Anteil des Energieverbrauchs über die Lebensdauer eines Modells entfällt laut Skript auf die Inferenz?',
      options: ['5–10 %', '20–30 %', '60–90 %', '100 %'],
      answer: 2,
      explain: 'Weil Modelle im Betrieb kontinuierlich und in großem Umfang laufen, macht die Inferenz laut Skript 60–90 % aus – der wichtigste Hebel liegt also im Betrieb.'
    },
    {
      type: 'multi',
      q: 'Welche Praktiken für umweltfreundliche KI nennt das Skript? (Mehrfachauswahl)',
      options: ['Modelldestillation', 'Vortrainierte Modelle nutzen statt von Grund auf trainieren', 'Inferenz-Caching', 'Jede Aufgabe mit dem größten verfügbaren Modell lösen'],
      answer: [0, 1, 2],
      explain: 'Destillation, Wiederverwendung vortrainierter Modelle, effiziente Architekturen, saubere Strom-Regionen und Caching. Das größte Modell für alles widerspricht dem Skript-Tipp zur Modelleffizienz.'
    },
    {
      type: 'single',
      q: 'Welche Schwellen gelten nach der Omnibus-I-Richtlinie (2026) für die CSRD-Berichtspflicht von EU-Unternehmen?',
      options: ['mehr als 250 Beschäftigte', 'mehr als 1.000 Beschäftigte und über 450 Mio. Euro Nettoumsatz', 'alle kapitalmarktorientierten Unternehmen ab 10 Beschäftigten', 'mehr als 5.000 Beschäftigte'],
      answer: 1,
      explain: 'Die im Februar 2026 veröffentlichte Omnibus-I-Richtlinie beschränkt die Pflicht auf Unternehmen mit über 1.000 Beschäftigten und über 450 Mio. Euro Nettoumsatz; die neuen Schwellen gelten voll ab Geschäftsjahr 2027.'
    },
    {
      type: 'order',
      q: 'Bringe die vier Strategien zur Vorbereitung auf die KI-bedingte Transformation der Arbeitswelt in die Reihenfolge des Skripts.',
      items: ['Auswirkungsanalysen für die Belegschaft durchführen', 'In Um- und Weiterbildung investieren', 'Arbeit neu gestalten statt nur automatisieren', 'Transparent über die Rolle der KI kommunizieren'],
      explain: 'So zählt das Skript die Strategien auf S. 183 auf. In der Praxis laufen sie parallel und beginnen vor der Technologieeinführung.'
    }
  ],
  exercises: [
    {
      id: 'k8-e1',
      title: 'Agenten-Steckbrief mit Betriebskonzept',
      scenario: `Die **Rheinland Energie Service GmbH (fiktiv)**, 900 Beschäftigte, möchte einen KI-Agenten im Kundenservice einsetzen. Er soll Beschwerden zu Abschlagsrechnungen eigenständig lösen: Kundendaten und Verbrauch abrufen, Ursache ermitteln, Abschläge anpassen, Gutschriften bis 200 Euro veranlassen und die Kundin informieren. Ein Anbieter wirbt mit „90 % Automatisierung ab Tag 1". Der Vorstand will wissen, wie das sicher und messbar gelingt.`,
      task: `Erstelle einen Agenten-Steckbrief: Ziel und Grenzen (was allein, was mit Freigabe, was nie), Abbruchkriterien, Werkzeuge mit Rechten, Kennzahlen nach den drei Skript-Dimensionen, Verantwortlichkeiten bei Fehlern sowie ein LLMOps-Betriebskonzept (Prompt-Versionierung, Evals, Kosten- und Qualitätsüberwachung, Umgang mit Modellwechseln).`,
      deliverable: '300–450 Wörter oder strukturierter Steckbrief',
      template: `Ziel: …
Darf allein / nur mit Freigabe / nie: …
Abbruchkriterien: …
Werkzeuge und Rechte: …
Kennzahlen (Qualität, Effizienz, Zuverlässigkeit): …
Verantwortlichkeiten: …
LLMOps-Betrieb (Prompts, Evals, Kosten, Modellwechsel): …`,
      rubric: [
        { criterion: 'Formuliert klares Ziel und abgestufte Grenzen', keywords: ['ziel', 'grenze', 'freigabe', 'allein', 'nie', 'schwelle'], min: 3, hint: 'Was darf der Agent ohne Mensch, was nur nach Freigabe, was gar nicht?' },
        { criterion: 'Definiert Abbruchkriterien und menschliche Übergabe', keywords: ['abbruch', 'stopp', 'übergabe', 'eskal', 'mensch', 'human'], min: 2, hint: 'Wann soll der Agent anhalten und Hilfe anfordern?' },
        { criterion: 'Nutzt die drei Kennzahl-Dimensionen aus dem Skript', keywords: ['qualität', 'effizienz', 'zuverlässig', 'kosten pro', 'eingriff'], min: 3, hint: 'Wie misst du erreichte Ziele, Ressourcen pro Ziel und Erfolg ohne Eingriff?' },
        { criterion: 'Klärt Verantwortung und Protokollierung', keywords: ['verantwort', 'protokoll', 'log', 'owner', 'haftung'], min: 2, hint: 'Wer steht gerade, wenn der Agent eine falsche Gutschrift auslöst?' },
        { criterion: 'Beschreibt LLMOps-Bausteine', keywords: ['prompt', 'version', 'eval', 'registry', 'budget', 'modellwechsel', 'stichprobe'], min: 3, hint: 'Wie stellst du sicher, dass ein Prompt- oder Modellwechsel die Qualität nicht verschlechtert?' }
      ],
      hints: [
        'Beginne mit dem Kreislauf Wahrnehmen – Schlussfolgern – Handeln – Beobachten und frage bei jedem Schritt: Welche Rechte braucht der Agent dafür wirklich?',
        'Denke an die Skript-Fehler (vage Ziele, fehlende Überwachung, fehlende Abbruchmechanismen) und an die Kennzahlen Qualität, Effizienz, Zuverlässigkeit.',
        'Ein überzeugender Steckbrief startet mit Gutschriften nur als Vorschlag, eskaliert bei Unsicherheit, protokolliert jede Aktion, hat einen AI Product Owner und testet jede Prompt- oder Modelländerung gegen ein Eval-Set.'
      ],
      sample: `**Ziel:** Beschwerden zu Abschlagsrechnungen innerhalb von 24 Stunden korrekt lösen und die Kundin nachvollziehbar informieren.

**Grenzen:** *Allein:* Daten lesen, Ursache analysieren, Antwortentwurf erstellen, Abschlag im zulässigen Korridor anpassen. *Nur mit Freigabe:* Gutschriften (in den ersten drei Monaten jede, danach ab 50 Euro), Versand an Kundinnen mit offener Beschwerde bei der Schlichtungsstelle. *Nie:* Verträge kündigen, Bankdaten ändern, Zahlungen außerhalb des Kundenkontos.

**Abbruchkriterien:** widersprüchliche Daten, Ursache nicht eindeutig, Hinweis auf Härtefall oder Rechtsstreit, mehr als fünf Tool-Aufrufe ohne Fortschritt → Übergabe an Sachbearbeitung mit Zusammenfassung.

**Werkzeuge:** CRM lesend, Abrechnungssystem lesend plus eine eng definierte Funktion „Abschlag anpassen", Gutschrift als Vorschlag, Mail nur als Entwurf (bis zur Freigabe der Automatik).

**Kennzahlen:** Qualität = Anteil korrekt gelöster Fälle (wöchentliche Stichprobe von 50 Fällen); Effizienz = Kosten pro gelöstem Fall (Tokens, Tool-Aufrufe, Prüfzeit); Zuverlässigkeit = Anteil ohne Eingriff und ohne Abbruch. Realistisches Ziel nach 6 Monaten statt „90 % ab Tag 1".

**Verantwortung:** AI Product Owner aus dem Kundenservice; Teamleitung gibt Gutschriften frei; jede Aktion wird mit Begründung protokolliert; Anbieterpflichten im Vertrag.

**LLMOps:** System-Prompt und Modellversion in der Prompt-Registry; Eval-Set mit 150 anonymisierten Fällen inkl. Randfällen; kein Wechsel ohne grünen Eval-Lauf; Monatsbudget mit Alarm bei 80 %; monatliche menschliche Stichprobe zur Kalibrierung des LLM-Bewerters; Abkündigungsplan des Anbieters im Blick.`
    },
    {
      id: 'k8-e2',
      title: 'Vorausschauender Compliance-Fahrplan 2026–2028',
      scenario: `Die **MedTech Sauer GmbH (fiktiv)**, 350 Beschäftigte, Tuttlingen, entwickelt Diagnosegeräte mit KI-Bildauswertung, nutzt eine KI-Vorauswahl im Recruiting, einen Kundenchatbot und verkauft auch in die USA. Die Geschäftsführung fragt: „Was müssen wir wann tun – und wie behalten wir den Überblick, wenn sich die Regeln ständig ändern?"`,
      task: `Entwirf einen Compliance-Fahrplan: KI-Inventar mit vorläufiger Risikoeinordnung je System, Pflichten nach aktuellem Geltungsdatum (Stand Oktober 2026, Digital Omnibus), Folgenabschätzung und Dokumentation, eine Funktion zur regulatorischen Überwachung (inkl. USA), Anforderungen an Anbieter sowie die Einbindung in bestehende Datenschutz- und Branchen-Compliance.`,
      deliverable: 'Tabelle oder 300–450 Wörter',
      template: `KI-Inventar und Risikoeinordnung: …
Bereits geltende Pflichten: …
Fristen bis 2028: …
Folgenabschätzung und Dokumentation: …
Regulatorische Überwachung (EU, DE, USA): …
Anbieter und Verträge: …
Integration in bestehende Compliance: …`,
      rubric: [
        { criterion: 'Erstellt ein KI-Inventar mit Risikoeinordnung', keywords: ['inventar', 'hochrisiko', 'anhang', 'risikoklass', 'transparenz', 'chatbot'], min: 3, hint: 'Welche der drei Anwendungen ist voraussichtlich Hochrisiko – und nach welchem Anhang?' },
        { criterion: 'Nennt korrekte Fristen nach dem Digital Omnibus', keywords: ['2027', '2028', 'omnibus', 'art. 50', 'art. 4', '02.12', '02.08'], min: 3, hint: 'Was gilt schon, was ab Dezember 2027, was ab August 2028?' },
        { criterion: 'Plant Folgenabschätzung und laufende Dokumentation', keywords: ['folgenabschätz', 'dsfa', 'dokument', 'test', 'protokoll'], min: 2, hint: 'Welche Nachweise brauchst du – und wann beginnst du damit?' },
        { criterion: 'Richtet regulatorische Überwachung auch für andere Rechtsräume ein', keywords: ['überwach', 'monitoring', 'usa', 'executive order', 'bundesstaat', 'quartal'], min: 2, hint: 'Wer verfolgt Änderungen außerhalb der EU, und wie oft?' },
        { criterion: 'Bindet Anbieter und bestehende Compliance ein', keywords: ['anbieter', 'vertrag', 'mdr', 'medizinprodukt', 'datenschutz', 'risikomanagement', 'betriebsrat'], min: 2, hint: 'Wie hängt KI-Compliance mit Medizinprodukterecht, DSGVO und Mitbestimmung zusammen?' }
      ],
      hints: [
        'Ordne jedes System zuerst ein: KI in einem regulierten Produkt (Anhang I), KI im Beschäftigungskontext (Anhang III Nr. 4), Chatbot (Transparenz nach Art. 50).',
        'Nutze die Zeitleiste aus Lektion 8.3 und die drei Skript-Strategien Inventar, Folgenabschätzung, Dokumentation.',
        'Ein guter Fahrplan trennt „sofort" (Art. 4, Art. 50, Inventar), „bis Ende 2027" (Recruiting-KI) und „bis August 2028" (Diagnosegerät), benennt eine verantwortliche Rolle für die Überwachung und verankert alles im bestehenden Qualitäts- und Risikomanagement.'
      ],
      sample: `**Inventar:** (1) KI-Bildauswertung im Diagnosegerät – Sicherheitsbauteil eines Medizinprodukts → Hochrisiko nach **Anhang I**; (2) KI-Vorauswahl im Recruiting → Hochrisiko nach **Anhang III Nr. 4**; (3) Kundenchatbot → Transparenzpflicht nach **Art. 50**. Dazu alle KI-Funktionen in Standardsoftware erfassen.

**Bereits geltend:** KI-Kompetenzmaßnahmen nach **Art. 4** (seit 02.02.2025, Nachweis dokumentieren), Verbote nach Art. 5 prüfen, Chatbot-Hinweis nach **Art. 50** (seit 02.08.2026), DSGVO.

**Fristen:** Recruiting-KI ab **02.12.2027** (Betreiberpflichten: menschliche Aufsicht, Protokolle, Information von Betriebsrat und Bewerbenden; Anbieter-Nachweise einfordern). Diagnosegerät ab **02.08.2028** – Konformitätsbewertung im Rahmen des Medizinprodukterechts, deshalb jetzt mit benannter Stelle und Entwicklung planen.

**Folgenabschätzung und Dokumentation:** DSFA für Recruiting-KI aktualisieren und um Bias-Tests ergänzen; für das Gerät technische Dokumentation, Datensatzbeschreibung und Testprotokolle ab sofort mitführen statt nachträglich.

**Überwachung:** Rolle „Regulatory Monitoring KI" in der Rechtsabteilung, Quartalsbericht an die Geschäftsführung: EU (Leitlinien, Normen), Deutschland (Bundesnetzagentur), **USA** (Bundesebene nach EO 14179/14365 im Umbruch, FDA-Vorgaben für Medizinprodukte, einzelstaatliche Regeln zum Recruiting).

**Anbieter:** Recruiting-Tool-Anbieter muss Konformität, Dokumentation und Unterstützung vertraglich zusichern; Chatbot-Anbieter Kennzeichnung und Datenstandort.

**Integration:** KI-Risiken ins bestehende Qualitäts- und Risikomanagement (ISO 13485/MDR) aufnehmen, funktionsübergreifendes Team aus Recht, Entwicklung, Personal und Datenschutz, Betriebsrat bei der Recruiting-KI früh einbinden.`
    }
  ],
  glossary: [
    { term: 'Agentische KI', def: 'KI-Systeme, die vorgegebene Ziele eigenständig verfolgen, mehrstufig planen, über Werkzeuge handeln und ihre Strategie anhand von Rückmeldungen anpassen (Skript 8.1).' },
    { term: 'Agenten-Kreislauf', def: 'Fortlaufender Zyklus aus Wahrnehmen, Schlussfolgern, Handeln und Beobachten, bis das Ziel erreicht ist oder ein Mensch eingreift.' },
    { term: 'Abbruchmechanismus', def: 'Festgelegte Kriterien, wann ein Agent anhält und menschliche Hilfe anfordert.' },
    { term: 'Agent Washing', def: 'Von Gartner geprägter Begriff für das Umetikettieren von Chatbots, Assistenten oder RPA-Tools als „Agenten" ohne echte agentische Fähigkeiten.' },
    { term: 'Model Context Protocol (MCP)', def: 'Offener Standard, um KI-Anwendungen einheitlich mit Datenquellen und Tools zu verbinden; seit Dezember 2025 bei der Agentic AI Foundation (Linux Foundation).' },
    { term: 'LLMOps', def: 'Weiterentwicklung von MLOps für den Betrieb von Foundation-Modellen: Prompts und Kontext verwalten, Sprachqualität bewerten, tokenbasierte Kosten steuern.' },
    { term: 'Prompt-Drift', def: 'Schleichende Verschlechterung oder Veränderung der Ergebnisse eines Prompts, etwa durch geänderte Eingaben, Kontext oder Modellversionen.' },
    { term: 'Prompt-Registry', def: 'Zentrales System zur Versionierung, zum Testen und zur Bereitstellung von Prompts mit Zielmodell, Parametern, Eval-Ergebnis und Verantwortlichen.' },
    { term: 'Eval', def: 'Feste Sammlung von Testfällen mit Bewertungskriterien, mit der eine LLM-Anwendung wiederholt und vergleichbar geprüft wird.' },
    { term: 'LLM-as-a-Judge', def: 'Bewertung von KI-Ausgaben durch ein Sprachmodell anhand einer Rubrik – skalierbar, aber mit bekannten Verzerrungen.' },
    { term: 'Digital Omnibus on AI', def: 'Verordnung (EU) 2026/1744, in Kraft seit 27.07.2026; ändert den AI Act und verschiebt u. a. Hochrisiko-Fristen auf 02.12.2027 (Anhang III) und 02.08.2028 (Anhang I).' },
    { term: 'KI-Inventar', def: 'Vollständige Übersicht aller KI-Systeme einer Organisation mit Zweck, Anbieter, Rolle, Daten und Risikoklasse – Grundlage jeder Compliance-Planung.' },
    { term: 'Nachhaltige KI', def: 'KI-Einsatz, der ökologische (Energie, Ressourcen), soziale (gerechte Übergänge) und wirtschaftliche (Wertschöpfung ohne externe Schäden) Nachhaltigkeit verbindet.' },
    { term: 'Modelldestillation', def: 'Training eines kleineren Modells, das das Verhalten eines größeren nachbildet – mit deutlich geringerem Ressourcenverbrauch.' },
    { term: 'Augmentierung', def: 'Einsatz von KI zur Erweiterung menschlicher Fähigkeiten in bestehenden Rollen statt zu deren Ersatz.' }
  ],
  sources: [
    { title: 'Building effective agents', publisher: 'Anthropic', year: 2024, type: 'Artikel', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
    { title: 'Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027', publisher: 'Gartner', year: 2025, type: 'Studie', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027' },
    { title: 'OWASP Top 10 for Agentic Applications for 2026', publisher: 'OWASP GenAI Security Project', year: 2025, type: 'Leitfaden', url: 'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/' },
    { title: 'Erstmals nutzt die Mehrheit der Unternehmen KI', publisher: 'Bitkom e. V.', year: 2026, type: 'Studie', url: 'https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-die-Mehrheit-der-Unternehmen-KI' },
    { title: 'The 2026 AI Index Report', publisher: 'Stanford HAI', year: 2026, type: 'Studie', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report' },
    { title: 'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al.)', publisher: 'arXiv', year: 2023, type: 'Paper', url: 'https://arxiv.org/abs/2306.05685' },
    { title: 'Define success criteria and build evaluations', publisher: 'Anthropic', year: 2026, type: 'Doku', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests' },
    { title: 'Semantic conventions for generative AI systems', publisher: 'OpenTelemetry', year: 2026, type: 'Doku', url: 'https://opentelemetry.io/docs/specs/semconv/gen-ai/' },
    { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', publisher: 'EUR-Lex', year: 2026, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    { title: 'Executive Order 14365: Ensuring a National Policy Framework for Artificial Intelligence', publisher: 'Federal Register / govinfo.gov', year: 2025, type: 'Gesetz', url: 'https://www.govinfo.gov/content/pkg/FR-2025-12-16/html/2025-23092.htm' },
    { title: 'Carbon Emissions and Large Neural Network Training (Patterson et al.)', publisher: 'arXiv', year: 2021, type: 'Paper', url: 'https://arxiv.org/abs/2104.10350' },
    { title: 'How much energy does ChatGPT use?', publisher: 'Epoch AI', year: 2025, type: 'Artikel', url: 'https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use' },
    { title: 'Measuring the environmental impact of AI inference', publisher: 'Google Cloud', year: 2025, type: 'Artikel', url: 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference' },
    { title: 'EU Sustainability Omnibus Published in the Official Journal', publisher: 'Latham & Watkins', year: 2026, type: 'Artikel', url: 'https://www.lw.com/en/insights/EU-Sustainability-Omnibus-Published-in-the-Official-Journal' },
    { title: 'IAB-Kurzbericht 5/2024: Vor allem Hochqualifizierte bekommen die Digitalisierung verstärkt zu spüren', publisher: 'Institut für Arbeitsmarkt- und Berufsforschung', year: 2024, type: 'Studie', url: 'https://doku.iab.de/kurzber/2024/kb2024-05.pdf' }
  ]
};
