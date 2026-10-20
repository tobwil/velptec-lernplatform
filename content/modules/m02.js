// Modul 2 – Anwendungen & Trends (Handout §3, S. 2 und §11, S. 6)
export default {
  id: 'm02',
  order: 2,
  title: 'Anwendungen & Trends',
  subtitle: 'Verbreitung, Branchenbeispiele aus dem DACH-Raum und KI-Trends 2026',
  icon: 'chart',
  isNew: false,
  minutes: 75,
  handout: [
    { section: '3', title: 'Aktuelle Anwendungen und Trends', page: 2 },
    { section: '11', title: 'Ausblick: KI-Trends 2025+', page: 6 },
  ],
  objectives: [
    'Du kannst aktuelle, belegte Zahlen zur KI-Verbreitung in Deutschland, Österreich und der EU nennen und ihre Aussagekraft einschätzen.',
    'Du beschreibst für Gesundheitswesen, Finanzwesen, Handel und Industrie je ein reales Anwendungsbeispiel aus dem DACH-Raum.',
    'Du erklärst die fünf Trends aus dem Handout (GenAI, Edge/TinyML, Agenten, Responsible AI, Multimodalität) mit dem Stand Oktober 2026.',
    'Du kennst die wichtigsten Änderungen durch den KI-Omnibus (VO (EU) 2026/1744) im Überblick.',
    'Du bewertest Trends mit einer Nutzen-Machbarkeits-Matrix und leitest daraus Pilotvorhaben ab.',
  ],
  lessons: [
    // ───────────────────────── Lektion 1 ─────────────────────────
    {
      id: 'm02-l1',
      title: 'Wie verbreitet ist KI? Zahlen richtig lesen',
      minutes: 15,
      blocks: [
        {
          type: 'text',
          md: `„Alle machen jetzt KI!“ Diesen Satz hörst du in jeder zweiten Besprechung. Doch was heißt *alle*? Als KI-Managerin oder KI-Manager brauchst du **belastbare Zahlen**, um Investitionen zu begründen, den eigenen Betrieb einzuordnen und überzogenen Erwartungen zu begegnen.

In dieser Lektion lernst du die wichtigsten Quellen kennen und erfährst, warum ihre Zahlen so unterschiedlich ausfallen.`,
        },
        {
          type: 'update',
          title: 'Aktuelle Verbreitungszahlen (Stand Oktober 2026)',
          md: `Das Handout enthält keine Zahlen zur Verbreitung. Hier der aktuelle, belegte Stand:

- **Destatis (amtliche Statistik, Erhebung 2025):** 26 % der Unternehmen in Deutschland mit mindestens 10 Beschäftigten nutzten 2025 KI (2024: 20 %). Kleine Unternehmen (10–49 Beschäftigte) lagen bei 23 %, mittlere (50–249) bei 36 % und große (ab 250) bei 57 %. Die Ergebnisse der Erhebung 2026 sind für November/Dezember 2026 angekündigt.
- **Eurostat (EU-27, 2025):** 20,0 % der Unternehmen mit mindestens 10 Beschäftigten nutzten KI (2024: 13,5 %). Spitzenreiter war Dänemark mit 42,0 %. Am häufigsten wurde KI zur Analyse geschriebener Sprache eingesetzt (11,8 %).
- **Statistik Austria (2025):** In Österreich nutzten 30 % der Unternehmen KI, 2021 waren es noch 9 %.
- **Bitkom (Befragung von 603 Unternehmen ab 20 Beschäftigten, veröffentlicht 14.09.2026):** 57 % setzen KI ein (Vorjahr 36 %, vor zwei Jahren 20 %), weitere 38 % planen oder diskutieren den Einsatz.
- **Stanford AI Index 2026 (weltweit):** Die organisationale KI-Nutzung erreichte 88 %. Generative KI kam innerhalb von drei Jahren auf 53 % Nutzung in der Bevölkerung.`,
          sources: [
            { title: 'Destatis: Nutzung von IKT in Unternehmen, Ergebnisse 2025', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/IKT-U-Erhebung/info.html' },
            { title: 'Eurostat News (11.12.2025): 20% of EU enterprises use AI technologies', url: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2' },
            { title: 'Statistik Austria, Pressemitteilung vom 24.06.2026 (PDF)', url: 'https://www.statistik.at/fileadmin/announcement/2026/06/20260624IKTU2025.pdf' },
            { title: 'Bitkom (14.09.2026): Erstmals nutzt die Mehrheit der Unternehmen KI', url: 'https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-die-Mehrheit-der-Unternehmen-KI' },
            { title: 'Stanford HAI: The 2026 AI Index Report', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report' },
          ],
        },
        {
          type: 'table',
          caption: 'Warum die Zahlen so verschieden sind',
          head: ['Quelle', 'Wer wurde gefragt?', 'Bezugsjahr', 'KI-Nutzung'],
          rows: [
            ['Destatis', 'Unternehmen ab 10 Beschäftigten, amtliche Pflichterhebung (EU-harmonisiert)', '2025', '26 %'],
            ['Eurostat', 'Unternehmen ab 10 Beschäftigten in der EU-27', '2025', '20,0 %'],
            ['Statistik Austria', 'Unternehmen ab 10 Beschäftigten in Österreich', '2025', '30 %'],
            ['Bitkom', '603 Unternehmen ab 20 Beschäftigten, Befragung im Auftrag des Verbands', '2026', '57 %'],
            ['Stanford AI Index', 'Organisationen weltweit (aus mehreren Quellen zusammengetragen)', '2025/26', '88 %'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Äpfel nicht mit Birnen vergleichen',
          md: `Die Zahlen unterscheiden sich vor allem wegen **Stichprobe** (ab 10 oder ab 20 Beschäftigten, nur Deutschland oder weltweit), **Zeitpunkt** (2025 oder 2026) und **Definition**. Zählt schon ein einzelnes ChatGPT-Konto als „Nutzung“? Zitiere deshalb immer Quelle, Jahr und Grundgesamtheit, also etwa „26 % der Unternehmen ab 10 Beschäftigten (Destatis, 2025)“.`,
        },
        {
          type: 'table',
          caption: 'Warum Unternehmen KI (noch) nicht nutzen: Destatis 2025, Unternehmen, die einen Einsatz erwogen, aber nicht umgesetzt haben',
          head: ['Hemmnis', 'Anteil', 'Was du als KI-Manager/in tun kannst'],
          rows: [
            ['Fehlendes Wissen', '72 %', 'KI-Kompetenz aufbauen (Schulungen, Lernpfade, Pilotnutzende)'],
            ['Unklarheit über rechtliche Folgen', '62 %', 'Leitfaden zu AI Act und DSGVO, Freigabeprozess'],
            ['Datenschutz und Privatsphäre', '60 %', 'Datenschutzkonforme Tools mit Auftragsverarbeitungsvertrag auswählen'],
            ['Inkompatibilität mit vorhandenen Systemen', '45 %', 'Schnittstellen prüfen, Low-Code-Integration (z. B. n8n)'],
            ['Verfügbarkeit oder Qualität der Daten', '44 %', 'Daten-Assessment vor dem Projekt (Modul 1)'],
            ['Kosten', '32 %', 'Klein starten, Business Case rechnen (Modul 3)'],
            ['Ethische Überlegungen', '23 %', 'Responsible-AI-Leitlinien, Einbindung der Mitarbeitervertretung'],
          ],
        },
        {
          type: 'text',
          md: `### Wofür KI genutzt wird

Laut Bitkom (2026) arbeitet KI am häufigsten im **Kundenkontakt**, etwa bei der Bearbeitung von Anfragen (72 %), sowie in **Marketing und Kommunikation** (54 %). Stark zugelegt haben **internes Wissensmanagement** (22 %, Vorjahr 11 %), **Controlling und Rechnungswesen** (25 %, Vorjahr 17 %) und KI in **eigenen Produkten** (20 %, Vorjahr 12 %). Gleichzeitig sagen 59 % der KI-nutzenden Unternehmen, dass sie das Potenzial von KI *überhaupt nicht* ausschöpfen. Die meisten stehen also noch am Anfang.`,
        },
        {
          type: 'praxis',
          title: 'Mit Zahlen die Geschäftsführung überzeugen',
          company: 'Brenner Metallbau GmbH (fiktiv), 120 Mitarbeitende, Heilbronn',
          scenario: `Der Geschäftsführer ist skeptisch: „KI ist doch nur was für Konzerne.“ Du sollst in der Leitungsrunde in fünf Minuten zeigen, wo das Unternehmen im Vergleich steht und was die größten Hürden sind.`,
          steps: [
            'Ordne den Betrieb ein: Mit 120 Beschäftigten gehört er zu den mittleren Unternehmen. Davon nutzten 2025 laut Destatis 36 % KI.',
            'Nenne den Trend: Bei Bitkom stieg die Nutzung von 20 % auf 57 % in zwei Jahren. Gib dabei die andere Stichprobe an.',
            'Spiegele die Hemmnisse: Frag im Team ab, welche der Destatis-Gründe (Wissen, Recht, Datenschutz …) auch bei euch zutreffen.',
            'Leite einen ersten Schritt ab: z. B. eine KI-Grundlagenschulung plus einen kleinen Pilot im Angebotswesen.',
            'Belege jede Zahl mit Quelle und Jahr auf der Folie.',
          ],
          takeaway: `Zahlen wirken nur, wenn sie **sauber zitiert** und **auf den eigenen Betrieb bezogen** werden. Der Vergleich mit Unternehmen ähnlicher Größe überzeugt mehr als globale Rekordwerte.`,
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Wie hoch war laut Destatis der Anteil der Unternehmen in Deutschland (ab 10 Beschäftigten), die 2025 KI nutzten?',
          options: ['12 %', '20 %', '26 %', '57 %'],
          answer: 2,
          explain: '26 % laut Destatis (Erhebung 2025). 20 % war der Wert für 2024. 57 % stammt aus der Bitkom-Befragung 2026 mit anderer Stichprobe (ab 20 Beschäftigten).',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Die Bitkom-Zahl (57 %) und die Destatis-Zahl (26 %) widersprechen sich, eine der beiden muss also falsch sein.',
          answer: false,
          explain: 'Falsch. Die Erhebungen unterscheiden sich in Jahr (2026 vs. 2025), Unternehmensgröße (ab 20 vs. ab 10 Beschäftigten) und Methode. Beide können korrekt sein.',
        },
      ],
    },

    // ───────────────────────── Lektion 2 ─────────────────────────
    {
      id: 'm02-l2',
      title: 'Branchenbeispiele aus dem DACH-Raum',
      minutes: 20,
      blocks: [
        {
          type: 'handout',
          section: '3',
          page: 2,
          quote: 'Gesundheitswesen KI-Diagnostik (Radiologie) Genauere Befunde, Zeitersparnis Multimodale KI-Modelle',
          md: `Das Handout fasst vier Branchen in einer Tabelle zusammen (Branche, Beispiel, Hauptnutzen, Trend). Hier eine Zeile davon. Unten findest du die ganze Matrix, ergänzt um **reale, belegte Beispiele aus Deutschland**.`,
        },
        {
          type: 'table',
          caption: 'Handout-Matrix (S. 2), ergänzt um reale Beispiele',
          head: ['Branche', 'Beispiel laut Handout', 'Hauptnutzen', 'Reales Beispiel (DACH)'],
          rows: [
            ['Gesundheitswesen', 'KI-Diagnostik (Radiologie)', 'Genauere Befunde, Zeitersparnis', 'KI-gestütztes Mammographie-Screening in Deutschland (PRAIM-Studie, *Nature Medicine* 2025)'],
            ['Finanzwesen', 'Betrugserkennung in Echtzeit', 'Risikoreduktion', 'Commerzbank: KI-Avatar „Ava“ für Serviceanliegen in der Banking-App (seit April 2025)'],
            ['Handel', 'Personalisierte Empfehlungen', 'Höhere Conversion', 'Zalando Assistant: KI-Modeberatung in allen 25 Märkten (seit Oktober 2024)'],
            ['Industrie', 'Predictive Maintenance', 'Weniger Ausfälle', 'Siemens und Schaeffler: Industrial Copilot erzeugt Steuerungscode aus natürlicher Sprache (SPS 2023)'],
          ],
        },
        {
          type: 'praxis',
          title: 'KI im Brustkrebs-Screening: was die PRAIM-Studie zeigt',
          company: 'Deutsches Mammographie-Screening-Programm, 12 Screening-Standorte (reales Beispiel)',
          scenario: `In der bislang größten Real-World-Studie zu KI im Mammographie-Screening wurden zwischen Juli 2021 und Februar 2023 insgesamt **463.094 Frauen** an 12 Standorten in Deutschland untersucht, davon 260.739 mit KI-Unterstützung. **119 Radiologinnen und Radiologen** entschieden selbst, ob sie das KI-System nutzen. Mit KI lag die Brustkrebs-Entdeckungsrate bei **6,7 pro 1.000** Frauen, ohne KI bei 5,7. Das sind **17,6 % mehr**. Gleichzeitig stieg die Rate der Wiedereinbestellungen nicht (37,4 vs. 38,3 pro 1.000).`,
          steps: [
            'KI ersetzt nicht, sondern unterstützt: Die Befundung blieb eine Doppelbefundung durch Fachärztinnen und Fachärzte (Human in the Loop).',
            'Freiwilligkeit schafft Akzeptanz: Die Radiologinnen und Radiologen entschieden selbst über den KI-Einsatz.',
            'Wirkung im Echtbetrieb messen, nicht nur im Labor: Erst die Real-World-Daten zeigen den tatsächlichen Nutzen.',
            'Zwei Kennzahlen gemeinsam betrachten: mehr entdeckte Fälle *und* keine Zunahme von Fehlalarmen (Wiedereinbestellungen).',
            'Übertrag auf dein Unternehmen: Definiere für jeden KI-Pilot eine Nutzen-KPI und eine Gegen-KPI (z. B. Fehlerquote).',
          ],
          takeaway: `Gute KI-Projekte zeigen ihren Nutzen **unter realen Bedingungen** und mit **ausgewogenen Kennzahlen**. Die Kombination aus Mensch und KI war hier besser als der Mensch allein.`,
          source: { title: 'Eisemann et al. (2025): Nationwide real-world implementation of AI for cancer detection in population-based mammography screening, Nature Medicine', url: 'https://www.nature.com/articles/s41591-024-03408-6' },
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Finanzwesen: Commerzbank „Ava“', back: 'KI-Avatar in der Banking-App auf Basis von Microsoft-Azure-KI. Er beantwortet Serviceanfragen in natürlicher Sprache, wird schrittweise freigeschaltet und leitet komplexere Anliegen an Expertinnen und Experten im Kundencenter weiter. **Lehre:** schrittweiser Roll-out und klare Übergabe an Menschen.' },
            { front: 'Handel: Zalando Assistant', back: 'KI-Modeberatung, die eigene Zalando-Modelle mit großen Sprachmodellen von OpenAI kombiniert. Seit 1. Oktober 2024 in allen 25 Märkten in der jeweiligen Landessprache verfügbar (zunächst als Beta). **Lehre:** erst in wenigen Märkten testen, dann skalieren.' },
            { front: 'Industrie: Siemens × Schaeffler', back: 'Der Industrial Copilot ist an die Engineering-Software TIA Portal angebunden und erzeugt SPS-Code aus natürlicher Sprache. Ziel: weniger Aufwand und weniger Fehler, auch angesichts des Fachkräftemangels. **Lehre:** GenAI wirkt auch abseits von Texten, im Engineering.' },
            { front: 'Gesundheit: PRAIM-Studie', back: '463.094 Frauen, 119 Radiologinnen und Radiologen, 12 Standorte: 17,6 % höhere Entdeckungsrate mit KI ohne mehr Fehlalarme. **Lehre:** Mensch und KI im Team, Wirkung im Echtbetrieb gemessen.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Erfolgsmeldungen kritisch lesen',
          md: `Unterscheide **begutachtete Studien** (wie PRAIM in *Nature Medicine*) von **Unternehmensangaben** in Pressemitteilungen. Beide sind nützlich, aber Herstellerzahlen sind selten unabhängig geprüft. Frag immer: Wer hat gemessen, wie, über welchen Zeitraum und im Vergleich zu was?`,
        },
        {
          type: 'links',
          title: 'Quellen zu den Branchenbeispielen',
          items: [
            { title: 'Commerzbank startet Banking-Avatar auf Basis künstlicher Intelligenz', url: 'https://www.commerzbank.de/konzern/newsroom/pressemitteilungen/avatar.html', note: 'Pressemitteilung der Commerzbank' },
            { title: 'Zalando brings its AI-powered assistant to all markets', url: 'https://corporate.zalando.com/en/node/10667', note: 'Pressemitteilung vom 1. Oktober 2024 (Englisch)' },
            { title: 'AI for industry: Schaeffler and Siemens bring Industrial Copilot to shop floor (PDF)', url: 'https://assets.new.siemens.com/siemens/assets/api/uuid:35d7d519-ce50-465a-b0f8-6aa3dfcd1b8c/HQDIPR202311076808EN.pdf', note: 'Siemens-Pressemitteilung vom 14. November 2023 (Englisch)' },
            { title: 'KI-Landkarte der Plattform Lernende Systeme', url: 'https://www.plattform-lernende-systeme.de/ki-landkarte.html', note: 'Hunderte KI-Anwendungsbeispiele aus Deutschland, filterbar nach Branche' },
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Erfolgreiche KI-Anwendungen lösen ein konkretes Problem, starten klein und halten den Menschen in der Schleife.** Das gilt im Krankenhaus genauso wie in der Bank, im Onlinehandel oder in der Fabrik.',
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne das reale Beispiel der Branche zu.',
          pairs: [
            ['Gesundheitswesen', 'KI-gestützte Doppelbefundung im Mammographie-Screening'],
            ['Finanzwesen', 'KI-Avatar beantwortet Serviceanfragen in der Banking-App'],
            ['Handel', 'KI-Modeberatung in 25 Märkten'],
            ['Industrie', 'SPS-Code aus natürlicher Sprache erzeugen'],
          ],
          explain: 'PRAIM (Gesundheit), Commerzbank Ava (Finanzen), Zalando Assistant (Handel), Siemens/Schaeffler Industrial Copilot (Industrie).',
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Was lässt sich aus der PRAIM-Studie auf eigene KI-Projekte übertragen? (Mehrfachauswahl)',
          options: ['Nutzen und Nebenwirkungen (z. B. Fehlalarme) gemeinsam messen', 'Fachleute entscheiden über den KI-Einsatz mit', 'KI sollte Fachleute möglichst vollständig ersetzen', 'Wirkung unter realen Bedingungen prüfen'],
          answer: [0, 1, 3],
          explain: 'Die Studie kombinierte KI mit menschlicher Doppelbefundung, ließ Ärztinnen und Ärzte frei entscheiden und maß Entdeckungsrate und Wiedereinbestellungen im Echtbetrieb.',
        },
      ],
    },

    // ───────────────────────── Lektion 3 ─────────────────────────
    {
      id: 'm02-l3',
      title: 'KI-Trends 2026: vom Handout zum aktuellen Stand',
      minutes: 25,
      blocks: [
        {
          type: 'handout',
          section: '11',
          page: 6,
          quote: 'GenAI im Unternehmen: Automatisierte Content-Erstellung, Code-Assistenz • Edge & Tiny ML: KI auf Geräten, geringe Latenz, Datenschutz lokal • Autonome Agenten: Orchestrieren komplexe Arbeitsabläufe • Responsible AI: EU-AI-Act treibt Governance-Strukturen • Multimodale Modelle: Kombination aus Text, Bild, Audio, Sensordaten',
          md: 'Alle fünf Trends aus dem Handout sind eingetreten, teils schneller als erwartet. Die Tabelle zeigt, wo sie im Oktober 2026 stehen.',
        },
        {
          type: 'table',
          caption: 'Die fünf Handout-Trends im Faktencheck (Stand Oktober 2026)',
          head: ['Trend', 'Stand 2026', 'Beleg'],
          rows: [
            ['GenAI im Unternehmen', 'Breit angekommen: Generative KI erreichte in drei Jahren 53 % Nutzung in der Bevölkerung. Neue Felder wie internes Wissensmanagement wachsen schnell.', 'Stanford AI Index 2026; Bitkom 2026'],
            ['Edge & TinyML', 'Kleine, komprimierte Modelle laufen auf Laptop und Smartphone (z. B. Gemma 4 in quantisierter Form). Die frühere tinyML Foundation firmiert heute als EDGE AI FOUNDATION.', 'Google DeepMind Gemma; EDGE AI FOUNDATION'],
            ['Autonome Agenten', 'Von den Unternehmen, die KI nutzen oder planen, setzen 11 % bereits Agenten ein, 29 % planen es (Bitkom). Beim OSWorld-Benchmark für Computeraufgaben stieg die Erfolgsquote von 12 % auf rund 66 %.', 'Bitkom 2026; Stanford AI Index 2026'],
            ['Responsible AI', 'Der AI Act gilt schrittweise. Der KI-Omnibus verschiebt die Hochrisiko-Fristen. Dokumentierte KI-Vorfälle stiegen von 233 (2024) auf 362 (2025).', 'EU-Kommission; Stanford AI Index 2026'],
            ['Multimodale Modelle', 'Standard: Alle aktuellen Modelle von Anthropic und OpenAI verarbeiten Text und Bild. Gemini und Mistral Large 4 sind ebenfalls multimodal.', 'Herstellerdokumentation (siehe Modul 9)'],
          ],
        },
        {
          type: 'text',
          md: `### Agenten: vom Antworten zum Handeln

Ein **Chatbot** antwortet auf Fragen. Ein **KI-Agent** plant dagegen selbstständig Schritte, nutzt Werkzeuge (E-Mail, Kalender, ERP, Websuche) und arbeitet eine Aufgabe ab, zum Beispiel: „Hol drei Angebote für Büromaterial ein und bereite einen Vergleich vor.“ Bitkom-Präsident Ralf Wintergerst sagte dazu im September 2026: „Ein Agent, der eigenständig handelt, braucht verlässliche Daten, verbundene Systeme und Regeln, was er darf und was er zu lassen hat.“

Damit Agenten Werkzeuge einheitlich ansprechen können, hat sich das **Model Context Protocol (MCP)** etabliert. Anthropic hat es im November 2024 vorgestellt und im Dezember 2025 an die neu gegründete **Agentic AI Foundation** unter dem Dach der Linux Foundation übergeben.`,
        },
        {
          type: 'youtube',
          id: 'F8NKVhkZZWI',
          title: 'What are AI Agents?',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 12,
        },
        {
          type: 'update',
          title: 'Aktualisierung: Agenten-Standards und neue Sicherheitsrisiken',
          md: `Das Handout beschreibt Agenten als Systeme, die „komplexe Arbeitsabläufe orchestrieren“. Seit 2025 gibt es dafür offene Standards und eigene Sicherheitsrahmen:

- **Model Context Protocol (MCP):** ein offener Standard, um KI-Anwendungen mit Datenquellen und Tools zu verbinden. Laut Anthropic unterstützen ihn unter anderem ChatGPT, Gemini, Microsoft Copilot und Visual Studio Code.
- **Agentic AI Foundation (AAIF):** gegründet im Dezember 2025 von Anthropic, Block und OpenAI als Fonds unter der Linux Foundation. Hier wird MCP herstellerneutral weiterentwickelt.
- **OWASP Top 10 for Agentic Applications 2026:** Die Sicherheits-Community hat eigene Top-10-Risiken für Agenten veröffentlicht. Ein zentrales Risiko sind zu weitreichende Berechtigungen (*Excessive Agency*).`,
          sources: [
            { title: 'Anthropic: Introducing the Model Context Protocol (2024)', url: 'https://www.anthropic.com/news/model-context-protocol' },
            { title: 'Anthropic: Donating MCP and establishing the Agentic AI Foundation (2025)', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
            { title: 'OWASP Top 10 for Agentic Applications for 2026', url: 'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/' },
          ],
        },
        {
          type: 'text',
          md: `### Edge & TinyML: KI direkt auf dem Gerät

**Edge AI** heißt: Das Modell läuft auf dem Endgerät (Kamera, Maschine, Laptop, Smartphone) statt in der Cloud. Das bringt drei Vorteile, die schon das Handout nennt: **geringe Latenz**, **Datenschutz lokal** und Unabhängigkeit von der Internetverbindung. Dazu kommen oft niedrigere laufende Kosten. **TinyML** ist die extreme Form davon, mit Modellen auf Mikrocontrollern mit wenigen Kilobyte Speicher.

Praxisbeispiele: eine Kamera an der Fertigungslinie, die Fehlteile in Millisekunden aussortiert, oder ein lokales Sprachmodell auf dem Laptop (z. B. über LM Studio), das vertrauliche Dokumente zusammenfasst, ohne dass Daten das Haus verlassen.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung: Responsible AI und der KI-Omnibus 2026',
          md: `Das Handout sagt: „EU-AI-Act treibt Governance-Strukturen“. Seither ist viel passiert:

- Der **AI Act** ist seit dem **1. August 2024** in Kraft. Verbote und die Pflicht zur KI-Kompetenz gelten seit dem 2. Februar 2025, die Pflichten für KI-Modelle mit allgemeinem Verwendungszweck seit dem 2. August 2025. Der überwiegende Teil gilt seit dem **2. August 2026**, darunter die Transparenzpflichten nach Art. 50.
- Der **KI-Omnibus (VO (EU) 2026/1744)** ist am **27. Juli 2026** in Kraft getreten. Er verschiebt die Hochrisiko-Pflichten: für Bereiche nach **Anhang III** (z. B. Beschäftigung, Bildung, kritische Infrastruktur) auf den **2. Dezember 2027**, für KI in Produkten nach **Anhang I** auf den **2. August 2028**.
- Die **KI-Kompetenzpflicht (Art. 4)** wurde abgeschwächt: Statt die KI-Kompetenz des Personals *sicherzustellen*, müssen Anbieter und Betreiber sie nun *fördern*.
- Neu ist ein **Verbot** von KI-Praktiken zur Erzeugung nicht-einvernehmlicher intimer Inhalte und von Missbrauchsdarstellungen. Es gilt ab Dezember 2026.

Für dich heißt das: Mehr Zeit für Hochrisiko-Systeme ist **kein Grund zum Abwarten**. Transparenzpflichten, Verbote und Datenschutz gelten bereits.`,
          sources: [
            { title: 'EU-Kommission: KI-Gesetz – Zeitplan und KI-Omnibus', url: 'https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai' },
            { title: 'IHK Frankfurt am Main: Der neue KI-Omnibus (VO (EU) 2026/1744)', url: 'https://www.frankfurt-main.ihk.de/recht/uebersicht-alle-rechtsthemen/digitalisierung2/neue-ki-omnibus-verordnung-eu-2026-1744-7137020' },
            { title: 'KPMG Österreich: Digital Omnibus on AI', url: 'https://kpmg.com/at/de/insights/2026/07/digital-omnibus-on-ai.html' },
          ],
        },
        {
          type: 'praxis',
          title: 'Erster Agenten-Pilot im Büro',
          company: 'Hofmann & Partner Steuerberatung (fiktiv), 30 Mitarbeitende, Leipzig',
          scenario: `Die Kanzlei erhält täglich zahlreiche Belege per E-Mail. Ein Partner möchte einen KI-Agenten, der Belege aus dem Postfach holt, der richtigen Mandantin oder dem richtigen Mandanten zuordnet, im Dokumentenmanagement ablegt und eine Buchungsvorlage erstellt. Ein Anbieter verspricht: „Läuft vollautomatisch.“`,
          steps: [
            'Scope eng fassen: Der Agent darf Belege lesen, zuordnen und Buchungen **vorschlagen**, aber nicht selbst buchen oder E-Mails versenden.',
            'Berechtigungen minimal halten (Least Privilege): Lesezugriff auf ein eigenes Postfach statt auf alle Konten.',
            'Freigabe durch Menschen einbauen: Jede Buchungsvorlage wird von einer Fachkraft geprüft (Human in the Loop).',
            'Protokollierung aktivieren: Jede Aktion des Agenten wird nachvollziehbar geloggt, auch für Berufsrecht und Haftung.',
            'Vier Wochen pilotieren und messen: Zuordnungsquote, Korrekturaufwand, Zeitersparnis und Fehler.',
          ],
          takeaway: `Agenten entfalten ihren Nutzen erst mit **klaren Grenzen**. Je mehr ein Agent selbstständig darf, desto wichtiger werden Berechtigungskonzept, Freigaben und Protokollierung.`,
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz aus dem Workshop',
          md: '**Die Zukunft liegt in Systemen, die sinnvoll handeln können.** Ein Chatbot antwortet, ein Assistent hilft kontextbewusst, ein Agent plant und handelt mit Tools. Mit jeder Stufe wachsen Nutzen *und* Verantwortung.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Was unterscheidet einen KI-Agenten von einem klassischen Chatbot?',
          options: ['Er hat eine schönere Oberfläche', 'Er plant selbstständig Schritte und nutzt Werkzeuge, um eine Aufgabe zu erledigen', 'Er funktioniert ohne Sprachmodell', 'Er darf grundsätzlich ohne menschliche Kontrolle arbeiten'],
          answer: 1,
          explain: 'Agenten planen, handeln mit Tools (E-Mail, ERP, Web …) und beobachten das Ergebnis. Menschliche Kontrolle bleibt gerade deshalb wichtig.',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Durch den KI-Omnibus (2026) gelten die Hochrisiko-Pflichten für Anhang-III-Bereiche wie Beschäftigung erst ab dem 2. Dezember 2027.',
          answer: true,
          explain: 'Richtig. VO (EU) 2026/1744 hat die Frist für Anhang III auf den 2.12.2027 und für Anhang I auf den 2.8.2028 verschoben. Andere Pflichten wie Art. 50 gelten bereits seit dem 2.8.2026.',
        },
      ],
    },

    // ───────────────────────── Lektion 4 ─────────────────────────
    {
      id: 'm02-l4',
      title: 'Trends bewerten und priorisieren',
      minutes: 15,
      blocks: [
        {
          type: 'handout',
          section: '3',
          page: 2,
          quote: 'Zukunftstrends: Automatisierung 2.0, generative Modelle, KI für Nachhaltigkeit, Demokratisierung von KI-Tools, Ethik & Explainability.',
          md: 'Trends sind kein Selbstzweck. Entscheidend ist, welcher Trend **für dein Unternehmen** Nutzen stiftet und mit vertretbarem Aufwand umsetzbar ist.',
        },
        {
          type: 'steps',
          items: [
            { title: '1. Beobachten', md: 'Trendquellen festlegen (z. B. AI Index, Bitkom, Fachnewsletter) und Neuigkeiten monatlich sichten, statt jedem Hype hinterherzulaufen.' },
            { title: '2. Übersetzen', md: 'Jeden Trend in einen konkreten Anwendungsfall übersetzen: „Agenten“ wird zu „Belegzuordnung im Rechnungseingang“.' },
            { title: '3. Bewerten', md: 'Nutzen (Zeit, Qualität, Umsatz) und Machbarkeit (Daten, Kompetenzen, Recht, Kosten) jeweils von 1 bis 5 einschätzen.' },
            { title: '4. Ausprobieren', md: 'Die besten Kandidaten in einer geschützten Testumgebung (Sandbox) mit echten, aber unkritischen Daten testen.' },
            { title: '5. Entscheiden', md: 'Klares Go oder No-Go anhand vorher definierter Kriterien. Auch ein No-Go ist ein Ergebnis.' },
          ],
        },
        {
          type: 'interactive',
          widget: 'usecase-matrix',
          props: {
            cases: [
              { name: 'GenAI-Texte für Social Media', impact: 3, feasibility: 5 },
              { name: 'Absatzprognose gegen Lebensmittelverschwendung', impact: 5, feasibility: 3 },
              { name: 'Agent für Lieferantenbestellungen', impact: 4, feasibility: 2 },
              { name: 'Kamera-Qualitätskontrolle am Ofen (Edge)', impact: 3, feasibility: 2 },
              { name: 'Interner Wissens-Chatbot für Rezepturen', impact: 3, feasibility: 4 },
            ],
          },
        },
        {
          type: 'text',
          md: `### KI für Nachhaltigkeit und nachhaltige KI

Das Handout nennt „KI für Nachhaltigkeit“ als Trend. Dazu gehören zwei Seiten:

- **KI *für* Nachhaltigkeit:** bessere Prognosen gegen Verschwendung, effizientere Routen, vorausschauende Wartung, die Material schont.
- **Nachhaltige KI:** KI selbst verbraucht Energie und Wasser, beim Training und bei jeder Anfrage (Inferenz). Google beziffert den Median-Textprompt seiner Gemini-Apps auf rund **0,24 Wh**, **0,03 g CO₂e** und **0,26 ml Wasser**. Andere Berechnungen, etwa mit indirektem Wasserverbrauch, kommen auf höhere Werte.

Ein einzelner Prompt ist wenig. **100.000 unnötige Prompts pro Monat** sind dagegen ein schlecht designter Prozess.`,
        },
        {
          type: 'update',
          title: 'Ergänzung: Was KI-Anfragen an Energie kosten',
          md: `Google hat im August 2025 eine Methodik zur Messung von Energie, Emissionen und Wasser pro Gemini-Prompt veröffentlicht. Nach eigenen Angaben sanken Energie und CO₂-Fußabdruck des Median-Prompts über einen 12-Monats-Zeitraum um den Faktor 33 bzw. 44. Das sind **Herstellerangaben**, die eine erste Orientierung geben. Für die eigene Planung zählt vor allem: **Braucht die Aufgabe ein großes Modell? Reicht ein kleineres oder lokales? Läuft die Automatisierung nur bei echtem Nutzen?**`,
          sources: [
            { title: 'Google Cloud Blog: Measuring the environmental impact of AI inference (2025)', url: 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference' },
          ],
        },
        {
          type: 'praxis',
          title: 'Trend-Radar für eine Filialbäckerei',
          company: 'Bäckerei Hofer KG (fiktiv), 9 Filialen, 110 Mitarbeitende, Linz (AT)',
          scenario: `Die Inhaberin hat auf einer Messe von „GenAI, Agenten und Edge-KI“ gehört und will „bei KI nicht den Anschluss verpassen“. Gleichzeitig wirft die Bäckerei täglich zu viel Ware weg. Du sollst aus fünf Ideen die zwei besten Pilotprojekte auswählen.`,
          steps: [
            'Ideen in der Matrix oben platzieren: Nutzen und Machbarkeit gemeinsam mit Filialleitungen und Backstube einschätzen.',
            'Quick Win auswählen: GenAI-Texte für Social Media sind schnell machbar, aber von begrenztem Nutzen. Gut geeignet, um KI-Kompetenz aufzubauen.',
            'Strategisches Projekt auswählen: Die Absatzprognose hat den größten Nutzen (weniger Retouren, Nachhaltigkeit). Datenbasis prüfen: Kassendaten, Wetter, Feiertage.',
            'Ideen mit niedriger Machbarkeit (Agent für Bestellungen, Edge-Kamera) bewusst auf später verschieben und dokumentieren, was dafür fehlt.',
            'Für beide Piloten Ziel-KPIs festlegen, z. B. Retourenquote je Filiale und Zeitaufwand für Social-Media-Posts.',
          ],
          takeaway: `Ein **Trend-Radar** übersetzt Hype in Entscheidungen. Die Kombination aus einem schnellen Lernprojekt und einem strategischen Nutzenprojekt hat sich im Mittelstand bewährt.`,
        },
        {
          type: 'links',
          title: 'Trends verfolgen und Tools ausprobieren',
          items: [
            { title: 'KIsruptiv News', url: 'https://news.kisruptiv.de/', note: 'Täglich gefilterte KI-News und Tools (aus dem Workshop)' },
            { title: 'Stanford HAI: AI Index Report 2026', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report', note: 'Jährlicher Datenreport zu KI weltweit (Englisch)' },
            { title: 'n8n', url: 'https://n8n.io/', note: 'Workflow-Automatisierung mit KI-Bausteinen (Demokratisierung von KI-Tools)' },
            { title: 'Langdock', url: 'https://langdock.com/de', note: 'KI-Plattform aus Deutschland für den Unternehmenseinsatz' },
            { title: 'Hugging Face', url: 'https://huggingface.co/', note: 'Offene Modelle nach Aufgabe, Größe, Lizenz und Sprache durchsuchen' },
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Der nachhaltigste KI-Workflow ist derjenige, der mit dem kleinsten passenden Modell echten Nutzen erzeugt.** Trends sind Werkzeuge, kein Ziel.',
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die Schritte des Trend-Radars in die richtige Reihenfolge.',
          items: ['Beobachten', 'In Anwendungsfall übersetzen', 'Nutzen und Machbarkeit bewerten', 'In der Sandbox ausprobieren', 'Go/No-Go entscheiden'],
          explain: 'Vom Beobachten über das Übersetzen in konkrete Use Cases und die Bewertung bis zum Test und zur Entscheidung.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Frage hilft am meisten, einen KI-Workflow nachhaltiger zu machen?',
          options: ['Welches ist das größte verfügbare Modell?', 'Reicht für diese Aufgabe ein kleineres oder lokales Modell?', 'Wie können wir möglichst viele Prompts automatisieren?', 'Welches Tool ist gerade im Trend?'],
          answer: 1,
          explain: 'Das kleinste passende Modell spart Energie, Kosten und oft auch Zeit. Für Klassifikation oder kurze Antworten reicht häufig ein kleines Modell.',
        },
      ],
    },
  ],

  // ───────────────────────── Quiz ─────────────────────────
  quiz: [
    {
      type: 'single',
      q: 'Welcher Anteil der EU-Unternehmen (ab 10 Beschäftigten) nutzte laut Eurostat 2025 KI?',
      options: ['8,1 %', '13,5 %', '20,0 %', '42,0 %'],
      answer: 2,
      explain: '20,0 % in 2025 (2024: 13,5 %, 2023: 8,1 %). 42,0 % war der Wert für Dänemark, den Spitzenreiter.',
    },
    {
      type: 'multi',
      q: 'Welche Gründe für die Nicht-Nutzung von KI nannten Unternehmen laut Destatis (2025) am häufigsten? (Mehrfachauswahl)',
      options: ['Fehlendes Wissen', 'Unklarheit über rechtliche Folgen', 'Datenschutzbedenken', 'Zu viele KI-Fachkräfte am Markt'],
      answer: [0, 1, 2],
      explain: 'Fehlendes Wissen (72 %), rechtliche Unklarheit (62 %) und Datenschutz (60 %) lagen vorn. Ein Überangebot an Fachkräften wurde nicht genannt.',
    },
    {
      type: 'match',
      q: 'Ordne die Quelle ihrer Grundgesamtheit zu.',
      pairs: [
        ['Destatis', 'Unternehmen ab 10 Beschäftigten in Deutschland'],
        ['Bitkom', '603 Unternehmen ab 20 Beschäftigten'],
        ['Eurostat', 'Unternehmen ab 10 Beschäftigten in der EU-27'],
        ['Stanford AI Index', 'Organisationen weltweit'],
      ],
      explain: 'Unterschiedliche Grundgesamtheiten sind der Hauptgrund, warum sich die Verbreitungszahlen unterscheiden.',
    },
    {
      type: 'single',
      q: 'Welches Ergebnis zeigte die PRAIM-Studie zum KI-gestützten Mammographie-Screening in Deutschland?',
      options: ['KI ersetzte die Radiologinnen und Radiologen vollständig', 'Die Entdeckungsrate stieg um 17,6 %, ohne dass die Wiedereinbestellungen zunahmen', 'Die Fehlalarme verdoppelten sich', 'Die KI wurde allen Ärztinnen und Ärzten verpflichtend vorgegeben'],
      answer: 1,
      explain: '6,7 statt 5,7 Entdeckungen pro 1.000 Frauen (+17,6 %), die Wiedereinbestellungsrate lag nicht höher (37,4 vs. 38,3 pro 1.000). Die KI-Nutzung war freiwillig.',
    },
    {
      type: 'tf',
      q: 'Edge AI bedeutet, dass das KI-Modell direkt auf dem Endgerät läuft, was Latenz senkt und Daten lokal halten kann.',
      answer: true,
      explain: 'So beschreibt es auch das Handout-Glossar: „Edge AI – KI-Verarbeitung direkt auf dem Endgerät“ (S. 7), mit den Vorteilen geringe Latenz und Datenschutz lokal (S. 6).',
    },
    {
      type: 'cloze',
      q: 'Ergänze den Fachbegriff.',
      text: 'Der offene Standard, mit dem KI-Anwendungen einheitlich an Datenquellen und Tools angebunden werden, heißt Model Context {{Protocol|Protokoll}} (MCP).',
      explain: 'MCP wurde 2024 von Anthropic vorgestellt und im Dezember 2025 an die Agentic AI Foundation der Linux Foundation übergeben.',
    },
    {
      type: 'order',
      q: 'Bringe die Meilensteine des EU AI Act in die zeitliche Reihenfolge.',
      items: ['Inkrafttreten des AI Act (1.8.2024)', 'Verbote und KI-Kompetenz gelten (2.2.2025)', 'Pflichten für GPAI-Modelle gelten (2.8.2025)', 'Transparenzpflichten nach Art. 50 gelten (2.8.2026)', 'Hochrisiko-Pflichten für Anhang III (2.12.2027)'],
      explain: 'Die Fristen sind gestaffelt. Durch den KI-Omnibus (in Kraft seit 27.7.2026) wurden die Hochrisiko-Fristen nach hinten verschoben.',
    },
    {
      type: 'single',
      q: 'Wie hat der KI-Omnibus die Pflicht zur KI-Kompetenz (Art. 4 AI Act) verändert?',
      options: ['Sie wurde ersatzlos gestrichen', 'Sie gilt erst ab 2028', 'Aus „sicherstellen“ wurde „fördern“: eine Handlungs- statt einer Erfolgspflicht', 'Sie gilt nur noch für Konzerne'],
      answer: 2,
      explain: 'Anbieter und Betreiber müssen die KI-Kompetenz ihres Personals nun fördern statt sie sicherzustellen. Schulungen bleiben damit sinnvoll und erwartet.',
    },
    {
      type: 'multi',
      q: 'Welche Maßnahmen machen einen Agenten-Pilot sicherer? (Mehrfachauswahl)',
      options: ['Minimale Berechtigungen (Least Privilege)', 'Menschliche Freigabe vor kritischen Aktionen', 'Vollzugriff auf alle Systeme, damit der Agent flexibel ist', 'Protokollierung aller Aktionen'],
      answer: [0, 1, 3],
      explain: 'Zu weitreichende Befugnisse (Excessive Agency) gehören zu den Hauptrisiken laut OWASP. Least Privilege, Freigaben und Logging begrenzen sie.',
    },
    {
      type: 'tf',
      q: 'Laut Bitkom (2026) schöpft die Mehrheit der KI-nutzenden Unternehmen das Potenzial von KI bereits weitgehend aus.',
      answer: false,
      explain: 'Im Gegenteil: 59 % sagen, sie schöpfen das Potenzial überhaupt nicht aus, 28 % eher wenig. Nur 3 % nutzen es eher stark.',
    },
    {
      type: 'match',
      q: 'Ordne den Handout-Trend dem aktuellen Beleg zu.',
      pairs: [
        ['GenAI im Unternehmen', '53 % Nutzung generativer KI in der Bevölkerung nach drei Jahren'],
        ['Autonome Agenten', '11 % der Unternehmen, die KI nutzen oder planen, setzen Agenten ein'],
        ['Responsible AI', 'KI-Omnibus verschiebt Hochrisiko-Fristen'],
        ['Edge & TinyML', 'Komprimierte Modelle laufen auf Laptop und Smartphone'],
      ],
      explain: 'Belege aus Stanford AI Index 2026, Bitkom 2026, EU-Kommission und Herstellerdokumentation.',
    },
    {
      type: 'single',
      q: 'Eine Filiale möchte „irgendwas mit Agenten“ machen. Was ist der beste erste Schritt?',
      options: ['Sofort einen Agenten mit Vollzugriff einführen', 'Den Trend in einen konkreten Anwendungsfall übersetzen und Nutzen sowie Machbarkeit bewerten', 'Abwarten, bis alle Wettbewerber Agenten nutzen', 'Ein eigenes Sprachmodell trainieren'],
      answer: 1,
      explain: 'Erst übersetzen und bewerten, dann gezielt pilotieren. So wird aus einem Trend ein steuerbares Projekt.',
    },
  ],

  // ───────────────────────── Übungen ─────────────────────────
  exercises: [
    {
      id: 'm02-e1',
      title: 'Trend-Radar für ein Autohaus',
      scenario: `Das **Autohaus Seidl GmbH (fiktiv)** mit 70 Mitarbeitenden in Passau verkauft Neu- und Gebrauchtwagen und betreibt eine Werkstatt. Die Geschäftsführung hat von „GenAI, Agenten, Edge-KI und multimodalen Modellen“ gehört und möchte wissen, was davon sich lohnt. Vorhanden sind ein Dealer-Management-System, ein Werkstattplaner, eine Website mit Kontaktformular und viele Fotos von Gebrauchtwagen.`,
      task: `Wähle **drei Trends** aus Handout §11 und übersetze sie jeweils in einen **konkreten Anwendungsfall** für das Autohaus. Bewerte jeden Anwendungsfall nach **Nutzen** und **Machbarkeit** (1–5) und nenne je ein **Risiko** (z. B. Datenschutz, AI Act). Empfiehl abschließend **einen Pilot** mit Begründung und Erfolgskennzahl.`,
      deliverable: 'Tabelle (3 Zeilen: Trend, Anwendungsfall, Nutzen, Machbarkeit, Risiko) plus 3–5 Sätze Empfehlung',
      template: `| Trend | Anwendungsfall | Nutzen (1–5) | Machbarkeit (1–5) | Risiko |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Empfehlung für den Pilot: …
Erfolgskennzahl: …`,
      rubric: [
        { criterion: 'Nennt drei Trends aus dem Handout korrekt', keywords: ['genai', 'generativ', 'agent', 'edge', 'tiny', 'multimodal', 'responsible'], min: 3, hint: 'Welche fünf Trends nennt Handout §11 auf S. 6?' },
        { criterion: 'Übersetzt die Trends in konkrete Anwendungsfälle im Autohaus', keywords: ['werkstatt', 'fahrzeug', 'gebrauchtwagen', 'termin', 'anfrage', 'foto', 'inserat', 'kund'], min: 2, hint: 'Was passiert im Autohaus täglich? Denk an Anfragen, Terminvergabe, Fahrzeugbeschreibungen, Schadensfotos.' },
        { criterion: 'Bewertet Nutzen und Machbarkeit', keywords: ['nutzen', 'machbar', 'aufwand', 'daten'], min: 2, hint: 'Hast du für jeden Fall beide Dimensionen eingeschätzt und kurz begründet?' },
        { criterion: 'Benennt Risiken wie Datenschutz, Transparenz oder Fehlentscheidungen', keywords: ['datenschutz', 'dsgvo', 'ai act', 'transparen', 'halluzin', 'fehler', 'berechtig', 'risik'], min: 2, hint: 'Was kann schiefgehen, wenn ein Chatbot Kundendaten verarbeitet oder ein Agent Termine bucht?' },
        { criterion: 'Empfiehlt einen Pilot mit messbarer Erfolgskennzahl', keywords: ['pilot', 'kpi', 'kennzahl', 'messen', 'quote', 'zeit', 'prozent'], min: 2, hint: 'Woran erkennst du nach acht Wochen, ob der Pilot erfolgreich war?' },
      ],
      hints: [
        'Lies Handout §11 (S. 6) und die Faktencheck-Tabelle aus Lektion 3 noch einmal. Welche Trends passen zu einem Autohaus mit Werkstatt?',
        'Denk an konkrete Abläufe: Fahrzeugbeschreibungen für Inserate (GenAI), Bildanalyse von Schäden (multimodal), Terminvorschläge im Werkstattplaner (Agent).',
        'Für die Empfehlung eignet sich ein Fall mit hoher Machbarkeit und messbarem Nutzen. Nenne eine Kennzahl wie „Zeit pro Inserat“ oder „Anteil automatisch beantworteter Anfragen“.',
      ],
      sample: `| Trend | Anwendungsfall | Nutzen | Machbarkeit | Risiko |
|---|---|---|---|---|
| GenAI im Unternehmen | Fahrzeugbeschreibungen für Gebrauchtwagen-Inserate aus Ausstattungsdaten erzeugen | 4 | 5 | Halluzinierte Ausstattungsmerkmale, deshalb Prüfung durch Verkauf |
| Multimodale Modelle | Fotos von Unfallschäden vorab auswerten und Kostenrahmen schätzen | 4 | 2 | Fehleinschätzungen; Fotos können Kennzeichen und Personen zeigen (Datenschutz) |
| Autonome Agenten | Agent beantwortet Terminanfragen und schlägt freie Werkstatt-Slots vor | 3 | 3 | Zu weitreichende Berechtigungen; Transparenzpflicht, dass Kunden mit KI kommunizieren (Art. 50 AI Act) |

**Empfehlung:** Start mit den GenAI-Inseratstexten. Daten liegen strukturiert im Dealer-Management-System vor, das Risiko ist durch die menschliche Prüfung gering, und das Team lernt den Umgang mit KI. Der Agent für Terminanfragen folgt in einem zweiten Schritt, sobald Berechtigungen und Datenschutz geklärt sind.

**Erfolgskennzahl:** durchschnittliche Zeit pro Inserat (vorher/nachher) und Korrekturquote der KI-Texte über acht Wochen.`,
    },
    {
      id: 'm02-e2',
      title: 'Faktencheck: KI-Verbreitung richtig zitieren',
      scenario: `Ein Kollege aus dem Marketing hat für die Betriebsversammlung der **Elektro Wagner GmbH (fiktiv)**, 95 Mitarbeitende, Kassel, folgende Folie vorbereitet: *„KI-Revolution: 88 % aller Unternehmen nutzen KI! Destatis meldet nur 26 %, die Behörde ist eben veraltet. Wir sind mit 0 % die Letzten.“*`,
      task: `Prüfe die Folie. Erkläre, **woher die Zahlen stammen** und **warum sie sich unterscheiden** (Stichprobe, Bezugsjahr, Region, Methode). Formuliere eine **korrigierte Folie** mit sauberer Quellenangabe, die den Betrieb fair einordnet.`,
      deliverable: '150–250 Wörter Erläuterung plus korrigierter Folientext (max. 4 Zeilen)',
      template: `Prüfung der Zahlen:
- 88 %: …
- 26 %: …

Warum unterschiedlich: …

Korrigierte Folie:
…`,
      rubric: [
        { criterion: 'Ordnet die 88 % korrekt dem Stanford AI Index (weltweit, Organisationen) zu', keywords: ['stanford', 'ai index', 'weltweit', 'global'], min: 1, hint: 'Aus welchem internationalen Report stammt die 88-%-Zahl?' },
        { criterion: 'Erklärt methodische Unterschiede', keywords: ['stichprobe', 'grundgesamt', 'beschäftigt', 'methode', 'definition', 'befrag', 'region'], min: 2, hint: 'Wer wurde jeweils gefragt, ab welcher Unternehmensgröße und wo?' },
        { criterion: 'Berücksichtigt das Bezugsjahr', keywords: ['2025', '2026', 'jahr', 'zeitpunkt'], min: 1, hint: 'Auf welches Jahr beziehen sich die Destatis-Zahlen, und wann erscheinen neue?' },
        { criterion: 'Formuliert eine korrigierte Aussage mit Quelle und passender Vergleichsgruppe', keywords: ['quelle', 'destatis', 'mittlere', '36', 'bitkom', 'eurostat'], min: 2, hint: 'Mit welcher Unternehmensgröße sollte sich ein Betrieb mit 95 Mitarbeitenden vergleichen?' },
      ],
      hints: [
        'Schau dir die Tabelle „Warum die Zahlen so verschieden sind“ in Lektion 1 an.',
        'Amtliche Statistik ist nicht „veraltet“, sondern hat einen festen Erhebungsrhythmus. Wann wurde erhoben, und wann erscheinen die nächsten Ergebnisse?',
        'Ein Betrieb mit 95 Beschäftigten ist ein mittleres Unternehmen (50–249). Für diese Gruppe nennt Destatis einen eigenen Wert.',
      ],
      sample: `**Prüfung der Zahlen**
- *88 %* stammt aus dem **Stanford AI Index 2026** und beschreibt die organisationale KI-Nutzung **weltweit**. Die Zahl wird aus verschiedenen Quellen zusammengetragen und ist nicht auf den deutschen Mittelstand übertragbar.
- *26 %* stammt von **Destatis** und betrifft Unternehmen **ab 10 Beschäftigten in Deutschland im Jahr 2025**. Das ist amtliche, EU-harmonisierte Statistik, nicht „veraltet“. Die Ergebnisse für 2026 sind für Ende 2026 angekündigt.

**Warum unterschiedlich:** Region (weltweit vs. Deutschland), Grundgesamtheit (Organisationen aller Art vs. Unternehmen ab 10 Beschäftigten), Bezugsjahr und Definition von „Nutzung“. Bitkom (2026) kommt mit 603 Unternehmen ab 20 Beschäftigten auf 57 %, wieder eine andere Stichprobe.

**Korrigierte Folie:**
„2025 nutzten 36 % der mittleren Unternehmen (50–249 Beschäftigte) in Deutschland KI (Destatis). Bitkom meldet 2026 bereits 57 % (Unternehmen ab 20 Beschäftigten). Wir stehen am Anfang, und genau jetzt ist ein guter Zeitpunkt für den Einstieg.“`,
    },
  ],

  glossary: [
    { term: 'KI-Agent', def: 'KI-System, das selbstständig Schritte plant, Werkzeuge nutzt (z. B. E-Mail, ERP, Websuche) und Aufgaben über mehrere Schritte erledigt.' },
    { term: 'Edge AI', def: 'KI-Verarbeitung direkt auf dem Endgerät statt in der Cloud (Handout-Glossar, S. 7). Vorteile: geringe Latenz, lokaler Datenschutz.' },
    { term: 'TinyML', def: 'Maschinelles Lernen auf sehr kleinen Geräten wie Mikrocontrollern mit wenig Speicher und Energie.' },
    { term: 'Multimodales Modell', def: 'Modell, das mehrere Datenarten wie Text, Bild, Audio oder Sensordaten verarbeiten und kombinieren kann.' },
    { term: 'Model Context Protocol (MCP)', def: 'Offener Standard, um KI-Anwendungen einheitlich mit Datenquellen und Tools zu verbinden. Seit Dezember 2025 bei der Agentic AI Foundation (Linux Foundation).' },
    { term: 'KI-Omnibus', def: 'Verordnung (EU) 2026/1744, in Kraft seit 27.7.2026. Sie ändert den AI Act, verschiebt u. a. Hochrisiko-Fristen und schwächt die KI-Kompetenzpflicht zur Förderpflicht ab.' },
    { term: 'Responsible AI', def: 'Verantwortungsvolle Entwicklung und Nutzung von KI mit Blick auf Fairness, Transparenz, Datenschutz, Sicherheit und Rechenschaft.' },
    { term: 'Trend-Radar', def: 'Methode, um technologische Trends systematisch zu beobachten, in Anwendungsfälle zu übersetzen und nach Nutzen und Machbarkeit zu priorisieren.' },
  ],

  sources: [
    { title: 'Nutzung von IKT in Unternehmen – Ergebnisse 2025', publisher: 'Statistisches Bundesamt (Destatis)', year: 2025, type: 'Studie', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/IKT-U-Erhebung/info.html' },
    { title: '20% of EU enterprises use AI technologies', publisher: 'Eurostat', year: 2025, type: 'Studie', url: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2' },
    { title: 'Österreichs Unternehmen beim Einsatz von künstlicher Intelligenz im EU-Spitzenfeld', publisher: 'Statistik Austria', year: 2026, type: 'Studie', url: 'https://www.statistik.at/fileadmin/announcement/2026/06/20260624IKTU2025.pdf' },
    { title: 'Erstmals nutzt die Mehrheit der Unternehmen KI', publisher: 'Bitkom e. V.', year: 2026, type: 'Studie', url: 'https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-die-Mehrheit-der-Unternehmen-KI' },
    { title: 'The 2026 AI Index Report', publisher: 'Stanford HAI', year: 2026, type: 'Studie', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report' },
    { title: 'Nationwide real-world implementation of AI for cancer detection in population-based mammography screening (Eisemann et al.)', publisher: 'Nature Medicine', year: 2025, type: 'Paper', url: 'https://www.nature.com/articles/s41591-024-03408-6' },
    { title: 'Commerzbank startet Banking-Avatar auf Basis künstlicher Intelligenz', publisher: 'Commerzbank AG', year: 2025, type: 'Artikel', url: 'https://www.commerzbank.de/konzern/newsroom/pressemitteilungen/avatar.html' },
    { title: 'Zalando brings its AI-powered assistant to all markets', publisher: 'Zalando SE', year: 2024, type: 'Artikel', url: 'https://corporate.zalando.com/en/node/10667' },
    { title: 'AI for industry: Schaeffler and Siemens bring Industrial Copilot to shop floor', publisher: 'Siemens AG', year: 2023, type: 'Artikel', url: 'https://assets.new.siemens.com/siemens/assets/api/uuid:35d7d519-ce50-465a-b0f8-6aa3dfcd1b8c/HQDIPR202311076808EN.pdf' },
    { title: 'KI-Gesetz (AI Act) – Zeitplan und KI-Omnibus', publisher: 'Europäische Kommission', year: 2026, type: 'Gesetz', url: 'https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai' },
    { title: 'Donating the Model Context Protocol and establishing the Agentic AI Foundation', publisher: 'Anthropic', year: 2025, type: 'Artikel', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
    { title: 'Measuring the environmental impact of AI inference', publisher: 'Google Cloud', year: 2025, type: 'Artikel', url: 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference' },
  ],
};
