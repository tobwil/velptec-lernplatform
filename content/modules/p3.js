// Plus-Modul 3 – KI-Werkzeugkasten (Inhalte über das Theorieskript K7.0069 hinaus)
export default {
  id: 'p3',
  order: 11,
  plus: true,
  isNew: true,
  title: 'KI-Werkzeugkasten: Open Source, lokale Modelle & Vibe Coding',
  subtitle: 'Hugging Face, LM Studio & Ollama, souveräne Anbieter und Apps per Sprache',
  icon: 'box',
  minutes: 95,
  skript: [
    { chapter: '1.3', title: 'Generative KI und große Sprachmodelle', page: 13 },
    { chapter: '4.3', title: 'Anbieterauswahl und Beschaffung', page: 84 },
    { chapter: '6.4', title: 'Kontinuierliche Verbesserung und Nachhaltigkeit', page: 146 },
    { chapter: '8.1', title: 'Agentische KI und autonome Systeme', page: 166 }
  ],
  objectives: [
    'Du kannst Open Source, Open Weight und proprietäre Modelle unterscheiden und die OSI-Definition für Open Source AI einordnen.',
    'Du kannst auf Hugging Face Modelle nach Aufgabe, Größe, Lizenz und Sprache auswählen und eine Model Card lesen.',
    'Du kannst abschätzen, welche Hardware ein lokales Modell (LM Studio, Ollama) braucht und was Quantisierung bewirkt.',
    'Du kennst europäische bzw. souveräne Anbieter und Plattformen und bewertest Tools nach Datenschutz, AVV, Serverstandort, Kosten und Lock-in.',
    'Du kannst Chancen und Risiken von Vibe Coding (Lovable, Google AI Studio, Claude Code, Cursor, GitHub Copilot) einschätzen und einen sicheren Prüfprozess beschreiben.'
  ],
  lessons: [
    {
      id: 'p3-l1',
      title: 'Open Source, Open Weight & Hugging Face',
      minutes: 22,
      skript: { chapter: '1.3', page: 13 },
      blocks: [
        { type: 'video', scene: 'intro' },
        {
          type: 'text',
          md: 'Dieses Plus-Modul geht über das Theorieskript hinaus. Es zeigt dir die Werkzeuge, mit denen du generative KI **selbst in die Hand nehmen** kannst: offene Modelle finden und prüfen, sie lokal betreiben, souveräne Anbieter vergleichen und mit Vibe Coding eigene kleine Anwendungen bauen – jeweils mit dem Blick einer KI-Managerin bzw. eines KI-Managers auf Nutzen, Risiko und Verantwortung.'
        },
        {
          type: 'skript',
          chapter: '1.3',
          page: 13,
          md: `**Bezug zum Skript (Abschnitt 1.3, S. 13–17):** Das Skript erklärt generative KI und große Sprachmodelle (LLMs) am Beispiel bekannter **geschlossener** Modelle wie GPT-4, Claude und Gemini, die du per App oder API nutzt. Es betont: Ein einziges LLM bewältigt viele Aufgaben allein durch Prompting, kann aber halluzinieren und Verzerrungen übernehmen – menschliche Kontrolle bleibt Pflicht.

**Was dieses Modul ergänzt:** Neben geschlossenen Modellen gibt es eine große Welt **offener Modelle**, die man herunterladen, selbst betreiben und anpassen kann. Damit wächst die Kontrolle über Daten und Kosten – aber auch die Verantwortung für Lizenzprüfung, Sicherheit und Qualität im eigenen Haus.`
        },
        {
          type: 'text',
          md: `### Drei Arten, ein Modell bereitzustellen
- **Proprietär / geschlossen**: Du nutzt das Modell nur über App oder API des Anbieters. Gewichte und Trainingsdaten bleiben verborgen.
- **Open Weight**: Die **Modellgewichte** sind herunterladbar – du kannst das Modell selbst betreiben und oft feintunen. Trainingsdaten und Trainingscode sind aber meist nicht offen, und die Lizenz kann Einschränkungen enthalten.
- **Open Source AI** (nach OSI): Neben den Gewichten müssen auch der vollständige Code für Training und Betrieb sowie ausreichend detaillierte **Informationen über die Trainingsdaten** unter offenen Bedingungen verfügbar sein.

Die meisten „offenen" Modelle, über die in den Medien gesprochen wird, sind genau genommen **Open-Weight-Modelle**.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Use', back: 'Das System für jeden Zweck nutzen, ohne um Erlaubnis zu fragen (OSI Open Source AI Definition 1.0).' },
            { front: 'Study', back: 'Untersuchen, wie das System funktioniert, und seine Komponenten inspizieren.' },
            { front: 'Modify', back: 'Das System für jeden Zweck verändern – auch seine Ausgaben.' },
            { front: 'Share', back: 'Das System mit oder ohne Änderungen für jeden Zweck weitergeben.' },
            { front: '„Preferred form"', back: 'Voraussetzung für die vier Freiheiten: Zugang zu Data Information, vollständigem Code und Parametern (Gewichten).' }
          ]
        },
        {
          type: 'text',
          md: `### Hugging Face: der „Marktplatz" für offene Modelle
[Hugging Face](https://huggingface.co/) ist die zentrale Plattform für offene Modelle, Datensätze und Demos („Spaces"). Im Workshop haben wir gelernt, Modelle gezielt zu **filtern**:
- nach **Aufgabe** (Text Generation, Übersetzung, Zusammenfassung, Spracherkennung, Bildklassifikation …),
- nach **Größe** (Parameterzahl – entscheidet über Hardware und Kosten),
- nach **Lizenz** (z. B. Apache 2.0, MIT oder eigene Modell-Lizenzen),
- nach **Sprache** (gibt es gute Ergebnisse auf Deutsch?).

Jedes seriöse Modell hat eine **Model Card**: eine Beschreibung mit Einsatzzweck, Grenzen, Trainingsdaten, Bias-Hinweisen, Evaluationsergebnissen und Lizenz. Fehlt die Model Card oder ist sie dünn, ist das ein Warnsignal.`
        },
        {
          type: 'table',
          caption: 'Worauf du in einer Model Card achtest',
          head: ['Abschnitt', 'Leitfrage für KI-Manager:innen'],
          rows: [
            ['Intended use / Out-of-scope', 'Passt unser Use Case zum vorgesehenen Einsatz – oder ist er ausdrücklich ausgeschlossen?'],
            ['Training data', 'Woher stammen die Daten? Ist Deutsch ausreichend vertreten?'],
            ['Bias, risks, limitations', 'Welche Verzerrungen und Grenzen nennt der Anbieter selbst?'],
            ['Evaluation', 'Auf welchen Benchmarks wurde getestet – sind sie für unsere Aufgabe aussagekräftig?'],
            ['License', 'Ist kommerzielle Nutzung erlaubt? Gibt es Nutzungsbeschränkungen oder Pflichten zur Namensnennung?']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Lizenz immer einzeln prüfen',
          md: '„Offen" heißt nicht „ohne Bedingungen". Selbst innerhalb eines Anbieters variieren die Lizenzen: In der Modellübersicht von Mistral AI (Stand Oktober 2026) stehen z. B. Modelle unter **Apache 2.0** neben einem Modell unter einer **„Modified MIT"**-Lizenz. Lies die Lizenzdatei im Repository – nicht nur das Etikett im Suchfilter.'
        },
        {
          type: 'praxis',
          title: 'Modellauswahl für die Zusammenfassung von Mandantenakten',
          company: 'Kanzlei Richter & Partner (fiktiv), Steuerberatung, 25 Mitarbeitende, Hannover',
          scenario: `Die Kanzlei möchte lange Schriftwechsel intern zusammenfassen lassen – ohne Daten an US-Clouddienste zu geben. Du sollst auf Hugging Face eine Vorauswahl von drei Modellen treffen.`,
          steps: [
            'Aufgabe festlegen: **Text Generation** mit Fokus Zusammenfassung, Sprache **Deutsch**.',
            'Größe begrenzen: Modelle, die auf vorhandener Hardware lokal laufen (siehe Lektion 2).',
            'Lizenzfilter: kommerzielle Nutzung erlaubt (z. B. Apache 2.0, MIT); Lizenzdatei im Repository lesen.',
            'Model Cards vergleichen: Deutschkenntnisse, Kontextlänge, bekannte Grenzen.',
            'Mit 10 anonymisierten Beispielakten testen und Ergebnisse von zwei Steuerberater:innen bewerten lassen.',
            'Entscheidung mit Begründung dokumentieren (Modell, Version, Lizenz, Testergebnis).'
          ],
          takeaway: 'Die Modellwahl ist eine **dokumentierte Management-Entscheidung**: Aufgabe, Sprache, Größe, Lizenz und Praxistest – nicht der Platz in einer Rangliste.'
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz aus dem Workshop',
          md: 'Open Source gibt **Kontrolle** zurück – aber gute **Modellwahl** bleibt entscheidend.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Anbieter veröffentlicht Modellgewichte zum Download, aber weder Trainingscode noch Informationen über die Trainingsdaten. Wie ordnest du das Modell ein?',
          options: ['Open Source AI nach OSI', 'Open-Weight-Modell', 'Proprietäres API-Modell', 'Public Domain'],
          answer: 1,
          explain: 'Ohne Code und Data Information erfüllt das Modell die OSI Open Source AI Definition 1.0 nicht. Es ist ein Open-Weight-Modell.'
        },
        {
          type: 'links',
          title: 'Hugging Face & Lizenzen',
          items: [
            { title: 'Hugging Face – Model Hub', url: 'https://huggingface.co/models', note: 'Filter nach Aufgabe, Bibliothek, Sprache und Lizenz.' },
            { title: 'Hugging Face Docs – Model Cards', url: 'https://huggingface.co/docs/hub/model-cards', note: 'Was in eine Model Card gehört.' },
            { title: 'Hugging Face Docs – Licenses', url: 'https://huggingface.co/docs/hub/repositories-licenses', note: 'Übersicht der Lizenzkennungen im Hub.' },
            { title: 'OSI – Open Source AI Definition 1.0', url: 'https://opensource.org/ai/open-source-ai-definition', note: 'Die Definition im Wortlaut (englisch).' }
          ]
        }
      ]
    },
    {
      id: 'p3-l2',
      title: 'Lokale Modelle mit LM Studio & Ollama',
      minutes: 22,
      skript: { chapter: '6.4', page: 149 },
      blocks: [
        {
          type: 'text',
          md: 'Ein Sprachmodell muss nicht in der Cloud laufen. Auf einem Arbeitsplatz-PC oder einem Server im eigenen Haus verlassen die Daten das Gerät nicht. Die Kehrseite: Hardware, Wartung und Qualitätssicherung liegen bei dir.'
        },
        {
          type: 'skript',
          chapter: '6.4',
          page: 149,
          quote: 'Kleinere Modelle sind günstiger im Betrieb, schneller in der Bereitstellung und ökologisch nachhaltiger',
          md: `**Bezug zum Skript (Abschnitt 6.4, S. 149):** Im Kapitel zu Betrieb und Nachhaltigkeit empfiehlt das Skript **Modellkomprimierung** – etwa **Quantisierung**, Pruning und Wissensdestillation –, um den Rechenbedarf zu senken, ohne die Genauigkeit wesentlich zu beeinträchtigen. Laut Skript erreichen kleinere Modelle oft 95 % und mehr der Leistung großer Modelle. Genau diese Technik macht es möglich, Sprachmodelle **lokal** zu betreiben. Ob die Qualität für deine Aufgabe reicht, musst du aber immer selbst testen.`
        },
        {
          type: 'text',
          md: `### Zwei verbreitete Werkzeuge
**LM Studio** ist eine Desktop-App mit grafischer Oberfläche: Modelle suchen, herunterladen, im Chat testen, Dokumente einbinden oder einen lokalen Server starten. Seit dem **8. Juli 2025** ist LM Studio laut Hersteller auch für die Nutzung **am Arbeitsplatz kostenlos** – vorher war dafür eine separate kommerzielle Lizenz nötig. Die App kann laut Doku vollständig offline arbeiten, sobald die Modelldateien geladen sind.

**Ollama** ist ein Open-Source-Werkzeug (MIT-Lizenz) für die Kommandozeile und als lokaler Dienst mit API – ideal, um Modelle in Anwendungen und Automatisierungen einzubinden, z. B. über den *Ollama Chat Model*-Node in n8n (siehe Plus-Modul „Automatisierung & KI-Agenten mit n8n“). Ein Befehl wie \`ollama run <modell>\` lädt ein Modell und startet einen Chat.`
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Achtung: „Cloud-Modelle" in Ollama',
          md: 'Ollama bietet inzwischen auch **Cloud-Modelle** an, die auf Ollamas Servern laufen („Run models without a local GPU"). Dann verlassen die Daten deinen Rechner! Für vertrauliche Daten in Richtlinien festlegen: **nur lokale Modelle** – und das technisch prüfen.'
        },
        {
          type: 'table',
          caption: 'Systemanforderungen von LM Studio laut Hersteller-Doku (Stand Oktober 2026)',
          head: ['System', 'Mindestens / empfohlen'],
          rows: [
            ['macOS', 'Apple Silicon (M1–M4), macOS 14+, 16 GB RAM empfohlen; mit 8 GB nur kleine Modelle und kurze Kontexte; Intel-Macs nicht unterstützt'],
            ['Windows', 'x64 mit AVX2 oder ARM (Snapdragon X Elite); mind. 16 GB RAM empfohlen; GPU mit mind. 4 GB dediziertem VRAM empfohlen'],
            ['Linux', 'x64 oder ARM64, als AppImage; Ubuntu 20.04 oder neuer']
          ]
        },
        {
          type: 'text',
          md: `### Quantisierung: Modelle „verkleinern"
Ein Modell besteht aus Milliarden Zahlen (Parametern). Im Originalformat belegt jeder Parameter oft 16 Bit. **Quantisierung** speichert die Parameter mit weniger Bits (z. B. 8 oder 4 Bit). Das Modell wird deutlich kleiner und schneller – meist mit nur geringem Qualitätsverlust. Für lokale Werkzeuge ist das Format **GGUF** verbreitet.

**Faustformel für den Speicherbedarf der Gewichte:** Parameter × Bits ÷ 8 = Bytes.
- 8 Mrd. Parameter in 16 Bit: 8 × 16 ÷ 8 = **16 GB**
- dasselbe Modell in 4 Bit: 8 × 4 ÷ 8 = **4 GB**

Dazu kommt Speicher für den Kontext (Gesprächsverlauf, Dokumente) und das Betriebssystem. Plane daher immer **Reserve** ein.`
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Rechne mit der Faustformel: Ein Modell mit 14 Mrd. Parametern wird in 4 Bit quantisiert.',
          text: 'Die Gewichte belegen etwa {{7|7 GB|sieben}} GB Speicher (ohne Kontext und Reserve).',
          explain: '14 Mrd. × 4 Bit ÷ 8 = 7 Mrd. Bytes ≈ 7 GB. Mit Kontext und Betriebssystem solltest du deutlich mehr Arbeitsspeicher bzw. VRAM einplanen.'
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Installieren', md: 'LM Studio von [lmstudio.ai](https://lmstudio.ai/) herunterladen – Freigabe durch die IT einholen.' },
            { title: '2 · Modell wählen', md: 'In der Modellsuche ein kleines Modell (z. B. 3–8 Mrd. Parameter, 4-Bit-Variante) wählen; Lizenz und Model Card prüfen.' },
            { title: '3 · Offline testen', md: 'Netzwerk trennen und prüfen, ob der Chat weiter funktioniert – so belegst du, dass lokal gerechnet wird.' },
            { title: '4 · Qualität bewerten', md: 'Mit 10 typischen, anonymisierten Aufgaben aus dem Arbeitsalltag gegen ein Cloud-Modell vergleichen.' },
            { title: '5 · Anbinden', md: 'Bei Erfolg den lokalen Server bzw. Ollama an Automatisierungen (z. B. n8n) anschließen.' }
          ]
        },
        {
          type: 'youtube',
          id: '5RIOQuHOihY',
          title: 'What is Ollama? Running Local LLMs Made Simple',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 7
        },
        {
          type: 'praxis',
          title: 'Lokaler KI-Arbeitsplatz für vertrauliche Unterlagen',
          company: 'Kanzlei Richter & Partner (fiktiv), Steuerberatung, Hannover',
          scenario: `Nach der Modell-Vorauswahl aus Lektion 1 soll ein Pilot zeigen, ob ein lokales Modell im Alltag reicht. Zwei Arbeitsplätze haben 32 GB RAM, einer davon eine Grafikkarte mit 12 GB VRAM.`,
          steps: [
            'Speicherbedarf der drei Kandidaten mit der Faustformel abschätzen; nur Modelle wählen, die mit Reserve passen.',
            'LM Studio auf dem GPU-Arbeitsplatz installieren; Offline-Test durchführen und dokumentieren.',
            'Eine Woche lang typische Aufgaben (Zusammenfassen, Briefentwurf) parallel lokal und mit dem bisherigen Verfahren bearbeiten.',
            'Bewertung durch Fachkräfte: Qualität, Geschwindigkeit, Aufwand für Nachbearbeitung.',
            'Ergebnis: Für Zusammenfassungen reicht das lokale Modell; komplexe Steuerrechtsfragen bleiben bei Fachkräften mit Fachdatenbanken.',
            'Nutzungsrichtlinie ergänzen: welche Modelle, welche Daten, keine Ollama-Cloud-Modelle, Update-Verantwortung.'
          ],
          takeaway: 'Lokal heißt **Datenhoheit**, aber nicht automatisch **gleiche Qualität** wie große Cloud-Modelle. Ein ehrlicher Pilot mit echten Aufgaben klärt, wofür es reicht.'
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Lokal ist nicht automatisch sicher',
          md: 'Modelldateien nur aus vertrauenswürdigen Quellen laden, Versionen dokumentieren, Updates der Werkzeuge einspielen. Und: Ein lokales Modell kann genauso **halluzinieren** wie ein Cloud-Modell – Prüfpflichten bleiben bestehen.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Wahr oder falsch: Wer in Ollama ein Cloud-Modell nutzt, verarbeitet die Daten weiterhin nur auf dem eigenen Rechner.',
          answer: false,
          explain: 'Falsch. Cloud-Modelle laufen laut Ollama-Doku in Ollamas Cloud – die Eingaben verlassen also den Rechner.'
        }
      ]
    },
    {
      id: 'p3-l3',
      title: 'Souveräne Anbieter, Enterprise-Plattformen & Tool-Auswahl',
      minutes: 23,
      skript: { chapter: '4.3', page: 84 },
      blocks: [
        {
          type: 'skript',
          chapter: '4.3',
          page: 84,
          md: `**Bezug zum Skript (Abschnitte 4.3 und 4.4, S. 84–89 und 96):** Das Skript liefert das Raster für jede Anbieterentscheidung: Make or Buy nach strategischer Bedeutung, Differenzierung, Kompetenz und Zeitdruck; Anbieterbewertung nach Fähigkeit, Gesamtbetriebskosten, Tragfähigkeit, Kompatibilität sowie Sicherheit und Compliance (u. a. **Datenstandort**); dazu das **Risiko der Anbieterabhängigkeit** mit Diversifizierung und Exit-Klauseln. Als Plattformbeispiele nennt es Azure ML und Google Vertex AI.

**Was dieses Modul ergänzt:** Neben den großen US-Anbietern gibt es europäische Modelle und Plattformen mit Rechenzentren in der EU. Die Auswahl folgt aber immer den Kriterien aus Kapitel 4.3 – nicht dem Etikett „souverän“.`
        },
        {
          type: 'table',
          caption: 'Europäische bzw. souveräne Angebote – Angaben laut Anbieter bzw. zitierter Quelle, Stand Oktober 2026',
          head: ['Anbieter', 'Was es ist', 'Bemerkenswert'],
          rows: [
            ['[Mistral AI](https://docs.mistral.ai/models) (Frankreich)', 'Modellanbieter mit offenen und kommerziellen Modellen; Chat-Assistent „Le Chat"', 'Mehrere Modelle als Open Weight, viele unter Apache 2.0 (z. B. Mistral Small 4, Ministral 3)'],
            ['[Langdock](https://langdock.com/de) (Berlin)', 'Enterprise-KI-Plattform: Chat, Assistenten, Agenten, API', 'Modellagnostisch (u. a. GPT, Claude, Gemini, Llama, Mistral); laut Anbieter Hosting in Frankfurt, ISO 27001 und SOC 2 Type II'],
            ['[IONOS AI Model Hub](https://cloud.ionos.de/managed/ai-model-hub)', 'Modelle per API aus der IONOS Cloud', 'OpenAI-kompatible API; laut Anbieter europäische Rechenzentren, keine Nutzung der Daten für Training'],
            ['[STACKIT AI Model Serving](https://stackit.com/de/produkte/data-ai/stackit-ai-model-serving)', 'Modelle per API aus der Cloud der Schwarz-Gruppe', 'Region EU01; offene Modelle wie gpt-oss, Llama, Gemma, Qwen mit Preisen pro 1 Mio. Tokens'],
            ['Aleph Alpha (Heidelberg)', 'Früher eigene Modelle, zuletzt Fokus auf Unternehmens- und Verwaltungskund:innen', 'Fusion mit Cohere angekündigt (siehe Update unten)']
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung: Aleph Alpha und Cohere (2026)',
          md: `Aleph Alpha galt lange als deutsches Aushängeschild für „souveräne KI". Im **April 2026** gaben das kanadische KI-Unternehmen **Cohere** und Aleph Alpha die Übernahme bzw. Fusion bekannt; die Schwarz-Gruppe (bereits Anteilseignerin) unterstützt das Vorhaben mit strukturierter Finanzierung und erwartet den Betrieb auf **STACKIT**. Laut Wikipedia (Stand 17.10.2026) wurde im **September 2026** eine verbindliche Fusionsvereinbarung unterzeichnet; das gemeinsame Unternehmen soll als Cohere mit Sitzen in Berlin und Toronto auftreten. Der Abschluss steht unter dem Vorbehalt behördlicher Genehmigungen. **Für dich heißt das:** Bei bestehenden Verträgen Roadmap, Vertragspartner und Datenverarbeitung neu prüfen.`,
          sources: [
            { title: 'TechCrunch – Why Cohere is merging with Aleph Alpha (25.04.2026)', url: 'https://techcrunch.com/2026/04/25/why-cohere-is-merging-with-aleph-alpha/' },
            { title: 'Wikipedia – Aleph Alpha', url: 'https://en.wikipedia.org/wiki/Aleph_Alpha' }
          ]
        },
        {
          type: 'text',
          md: `### Enterprise-Chat-Plattformen
Viele Unternehmen führen statt einzelner Consumer-Apps eine **zentrale KI-Plattform** ein (z. B. Langdock, aber auch Enterprise-Varianten der großen Anbieter). Typische Funktionen: Single Sign-on (SAML/SCIM), Rollen und Rechte, Audit-Logs, einstellbare Aufbewahrungsfristen, eigene Assistenten mit Firmenwissen, Wahl zwischen mehreren Modellen und teils „Bring your own key".

Der Vorteil: Ein kontrollierter Ort für KI-Nutzung statt **Schatten-KI** in privaten Accounts. Der Nachteil: Eine weitere Plattform, die Kosten verursacht und von der du abhängig wirst.`
        },
        {
          type: 'table',
          caption: 'Tool-Auswahl-Kriterien – deine Bewertungsmatrix (Ergänzung zur Anbieterbewertung aus Kapitel 4.3)',
          head: ['Kriterium', 'Leitfragen'],
          rows: [
            ['**Datenschutz**', 'Welche Daten fließen? Werden Eingaben zum Training genutzt? Gibt es Opt-out und Löschfristen?'],
            ['**AVV**', 'Bietet der Anbieter einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO? Sind Unterauftragsverarbeiter gelistet?'],
            ['**Serverstandort**', 'Wo wird gespeichert **und** verarbeitet? EU/EWR? Unterliegt der Anbieter bzw. seine Muttergesellschaft Drittstaatenrecht?'],
            ['**Kosten**', 'Lizenz pro Nutzer:in oder nach Verbrauch (Tokens)? Wie verhalten sich die Kosten bei 10-facher Nutzung?'],
            ['**Lock-in**', 'Kann ich Modell und Anbieter wechseln? Offene Schnittstellen (z. B. OpenAI-kompatible API, MCP), Export von Assistenten und Daten?'],
            ['**Qualität & Fit**', 'Liefert das Tool für **unsere** Aufgaben gute Ergebnisse (eigener Test), auch auf Deutsch?'],
            ['**Sicherheit & Betrieb**', 'Zertifikate (z. B. ISO 27001, SOC 2), SSO, Rollen, Logs, Support, Verfügbarkeit']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Herstellerangaben sind ein Startpunkt, kein Beweis',
          md: 'Aussagen wie „DSGVO-konform" oder „souverän" sind Selbstauskünfte. Lass dir AVV, Liste der Unterauftragsverarbeiter, Zertifikate und den genauen Verarbeitungsort zeigen – und prüfe, ob einzelne Funktionen (z. B. Websuche, Bildgenerierung) andere Dienste oder Regionen nutzen.'
        },
        {
          type: 'praxis',
          title: 'KI-Plattform für eine Stadtverwaltung auswählen',
          company: 'Stadt Neubrunn (fiktiv), 450 Beschäftigte, Hessen',
          scenario: `Mehrere Ämter nutzen bereits private KI-Accounts („Schatten-KI"). Die Verwaltungsleitung beauftragt dich, innerhalb von acht Wochen eine Plattform zu empfehlen.`,
          steps: [
            'Bestandsaufnahme: Welche Tools werden wofür genutzt? (anonyme Umfrage, keine Sanktionen ankündigen).',
            'Anforderungen mit Datenschutz, IT-Sicherheit, Personalrat und zwei Fachämtern festlegen und gewichten.',
            'Drei Kandidaten auswählen (z. B. eine Enterprise-Chat-Plattform, ein Angebot eines EU-Cloudanbieters, eine Enterprise-Variante eines großen Anbieters).',
            'Unterlagen anfordern: AVV, Unterauftragsverarbeiter, Zertifikate, Verarbeitungsorte, Preismodell.',
            'Vier Wochen Pilot mit 20 Personen und festen Testaufgaben; Bewertung mit der Kriterienmatrix.',
            'Empfehlung inkl. Exit-Strategie (Datenexport, Wechsel des Modells) und Schulungsplan vorlegen.'
          ],
          takeaway: 'Gute Tool-Auswahl ist ein **strukturiertes Vergabeverfahren im Kleinen**: Kriterien vorher festlegen, Belege einfordern, im Pilot messen, Ausstieg mitdenken.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Maßnahmen senken das Risiko eines Lock-in bei KI-Plattformen? (Mehrfachauswahl)',
          options: [
            'Plattform mit Wahl zwischen mehreren Modellen bevorzugen',
            'Offene Schnittstellen wie eine OpenAI-kompatible API oder MCP nutzen',
            'Alle Assistenten ausschließlich in proprietärem Format ohne Export bauen',
            'Exit-Strategie und Datenexport vertraglich regeln'
          ],
          answer: [0, 1, 3],
          explain: 'Modellwahl, offene Schnittstellen und geregelter Export halten den Wechsel möglich. Proprietäre Formate ohne Export erhöhen die Abhängigkeit.'
        },
        {
          type: 'links',
          title: 'Anbieter-Informationen',
          items: [
            { title: 'Langdock – Sicherheit', url: 'https://langdock.com/de/security', note: 'Sicherheits- und Datenschutzangaben des Anbieters (KI-Plattform aus Deutschland, im Workshop vorgestellt).' },
            { title: 'Mistral AI – Modellübersicht', url: 'https://docs.mistral.ai/models', note: 'Modelle mit Lizenzangabe.' },
            { title: 'IONOS AI Model Hub', url: 'https://cloud.ionos.de/managed/ai-model-hub', note: 'Modelle und Preise pro 1 Mio. Tokens.' },
            { title: 'STACKIT AI Model Serving', url: 'https://stackit.com/de/produkte/data-ai/stackit-ai-model-serving', note: 'Modelle und Preise pro 1 Mio. Tokens.' }
          ]
        }
      ]
    },
    {
      id: 'p3-l4',
      title: 'Vibe Coding: Apps per Sprache – mit Verantwortung',
      minutes: 28,
      skript: { chapter: '8.1', page: 169 },
      blocks: [
        {
          type: 'text',
          md: `**Vibe Coding** bedeutet: Du beschreibst eine Idee in natürlicher Sprache, und eine KI erzeugt daraus Code oder eine lauffähige App. Der Begriff geht auf den KI-Forscher **Andrej Karpathy** zurück (Februar 2025); Collins Dictionary kürte „vibe coding" zum **Wort des Jahres 2025**.

Für KI-Manager:innen ist das doppelt relevant: Fachabteilungen können Prototypen und kleine Tools selbst bauen – und genau deshalb entstehen neue Risiken jenseits der IT-Abteilung.`
        },
        {
          type: 'skript',
          chapter: '8.1',
          page: 169,
          md: `**Bezug zum Skript (Abschnitte 1.3 und 8.1):** In Abschnitt 1.3 (S. 17) nennt das Skript **Softwareentwicklung** als Einsatzfeld generativer KI – Codeerzeugung, Tests, Dokumentation, Fehlersuche – und zitiert GitHub, wonach bei Copilot-Nutzenden 46 % des Codes KI-gestützt entstehen. In Abschnitt 8.1 (S. 169) führt es **GitHub Copilot Workspace** (behebt Fehler eigenständig über mehrere Dateien) und **Devin AI** (autonomer Software-Entwickler) als Beispiele agentischer KI aus 2024–2025 an und rät, mit klar abgegrenzten Bereichen mit überschaubaren Fehlerfolgen zu beginnen.

**Was dieses Modul ergänzt:** Wie Fachabteilungen heute selbst Apps per Sprache bauen – und welche Prüfprozesse dafür nötig sind.`
        },
        {
          type: 'table',
          caption: 'Werkzeuge im Überblick (Stand Oktober 2026)',
          head: ['Tool', 'Typ', 'Typischer Einsatz'],
          rows: [
            ['[Lovable](https://docs.lovable.dev/)', 'Web-App-Builder im Browser', 'Web-Apps und Landing Pages aus Beschreibungen, inkl. Hosting und Backend'],
            ['[Google AI Studio](https://aistudio.google.com/)', 'Experimentierumgebung für Gemini-Modelle', 'Prompts testen, Prototypen und kleine Apps bauen'],
            ['[Claude Code](https://code.claude.com/docs/en/overview)', 'Agentisches Coding-Werkzeug (Terminal, IDE, Web)', 'Code in bestehenden Projekten lesen, ändern, testen'],
            ['[Cursor](https://cursor.com/docs)', 'KI-gestützter Code-Editor', 'Entwickeln mit Chat, Autovervollständigung und Agent im Editor'],
            ['[GitHub Copilot](https://docs.github.com/de/copilot)', 'KI-Assistent in IDE und GitHub', 'Codevorschläge, Chat, Agent-Aufgaben im Repository']
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Von Code-Assistenz zu Vibe Coding und agentischem Coding',
          md: `**Zur 46-%-Zahl:** Sie stammt aus einem Interview mit dem damaligen GitHub-CEO Thomas Dohmke (Juni 2023) und bezieht sich auf **Dateien, in denen Copilot aktiviert ist** – nicht auf allen Code. Es ist eine Herstellerangabe.

Seitdem ist aus der Code-Assistenz **Vibe Coding** und **agentisches Coding** geworden: Werkzeuge erstellen ganze Anwendungen aus einer Beschreibung oder bearbeiten selbstständig mehrere Dateien eines Projekts. Gleichzeitig zeigen Studien und Vorfälle die Risiken: Der *GenAI Code Security Report* von Veracode (2025) fand in **45 %** der getesteten KI-Codebeispiele Sicherheitslücken aus den OWASP Top 10. Für mit Lovable erstellte Apps wurde [CVE-2025-48757](https://www.cve.org/CVERecord?id=CVE-2025-48757) veröffentlicht: Unzureichende Row-Level-Security-Regeln der Datenbank erlaubten Unbefugten Lese- und Schreibzugriffe (vom Anbieter bestritten, da jede Kundin/jeder Kunde selbst für den Schutz der eigenen App verantwortlich sei – genau das ist der Punkt).`,
          sources: [
            { title: 'Freethink: GitHub CEO says Copilot will write 80% of code (17.06.2023)', url: 'https://www.freethink.com/robots-ai/github-copilot' },
            { title: 'Veracode – 2025 GenAI Code Security Report', url: 'https://www.veracode.com/blog/genai-code-security-report/' },
            { title: 'CVE-2025-48757 (CVE Program)', url: 'https://www.cve.org/CVERecord?id=CVE-2025-48757' },
            { title: 'Collins – Word of the Year 2025', url: 'https://blog.collinsdictionary.com/language-lovers/collins-word-of-the-year-2025-ai-meets-authenticity-as-society-shifts/' }
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz aus dem Workshop',
          md: 'Vibe Coding **demokratisiert** Entwicklung – **Verantwortung, Prüfung und Produktdenken** bleiben beim Menschen.'
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Einstufen', md: 'Prototyp, internes Tool oder öffentliche App? Verarbeitet sie personenbezogene Daten, Logins, Zahlungen? Davon hängt der Prüfaufwand ab.' },
            { title: '2 · Daten schützen', md: 'In der Bauphase nur Testdaten verwenden. Keine echten Kundendaten in Prompts von Diensten ohne AVV.' },
            { title: '3 · Sicherheit prüfen', md: 'Zugriffsregeln der Datenbank (z. B. Row-Level Security), Authentifizierung, Eingabevalidierung, keine API-Schlüssel im Frontend.' },
            { title: '4 · Review', md: 'Vor Livegang: Code- bzw. Sicherheitsreview durch eine fachkundige Person, ggf. automatisierte Scans.' },
            { title: '5 · Betrieb', md: 'Verantwortliche Person benennen, Updates und Abhängigkeiten pflegen, Impressum/Datenschutzerklärung prüfen.' }
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Behördliche Empfehlungen: BSI & ANSSI',
          md: 'Das BSI und die französische ANSSI haben 2024 gemeinsam das Papier [„AI Coding Assistants"](https://cyber.gouv.fr/en/publications/jointly-led-international-publications/ai-coding-assistants/) veröffentlicht. Kernaussagen: KI-generierter Code enthält häufig leichte bis schwere Sicherheitsmängel, Eingaben können je nach Vertragsbedingungen sensible Daten preisgeben – generierter Code muss daher wie Code von Dritten geprüft werden.'
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Nutzungsbedingungen von Prototyping-Tools lesen',
          md: 'Beispiel Google AI Studio: Laut [Gemini API Terms](https://ai.google.dev/gemini-api/terms) nutzt Google Inhalte aus kostenlosen Diensten grundsätzlich zur Verbesserung seiner Produkte, ggf. mit menschlicher Prüfung. Für Nutzer:innen im **EWR, der Schweiz und dem Vereinigten Königreich** gelten laut Bedingungen jedoch die Datenregeln der bezahlten Dienste für alle Dienste. Die Bedingungen ändern sich – vor dem Einsatz mit Firmendaten immer aktuell prüfen.'
        },
        {
          type: 'praxis',
          title: 'Ein gevibecodeter News-Aggregator aus dem Workshop',
          company: 'KIsruptiv – news.kisruptiv.de (reales Beispiel des Dozenten)',
          scenario: `Im Workshop haben wir den News-Aggregator [news.kisruptiv.de](https://news.kisruptiv.de/) angesehen, der per Vibe Coding entstanden ist: Er sammelt KI-News, filtert und strukturiert sie, und eine KI fasst sie zusammen. Es gibt zusätzlich eine Wochen-Rückschau (Recap) und eine Tool-Übersicht.`,
          steps: [
            'Problem klar formulieren: zu viele Quellen, zu wenig Zeit zum Lesen.',
            'Funktionsumfang klein halten: sammeln → filtern → strukturieren → zusammenfassen.',
            'Mit einem Vibe-Coding-Werkzeug einen ersten Prototyp erzeugen und iterativ per Sprache verfeinern.',
            'Inhalte prüfen: Quellenangaben sichtbar halten, damit Leser:innen die Zusammenfassung nachprüfen können.',
            'Veröffentlichen, beobachten, verbessern (Recap- und Tool-Seiten als Erweiterungen).'
          ],
          takeaway: 'Der Wert liegt im **Filtern, Verdichten, Einordnen** – und darin, dass ein Mensch das Produkt verantwortet und weiterentwickelt.',
          source: { title: 'news.kisruptiv.de', url: 'https://news.kisruptiv.de/' }
        },
        {
          type: 'praxis',
          title: 'Vibe-Coding-Richtlinie im Mittelstand',
          company: 'Bäckerei Sonnenkorn GmbH (fiktiv), 14 Filialen, 160 Mitarbeitende, Franken',
          scenario: `Die Marketingleiterin hat mit Lovable in einem Nachmittag ein Vorbestell-Formular für Torten gebaut – mit Namen, Telefonnummer und Abholfiliale. Sie möchte es nächste Woche online stellen.`,
          steps: [
            'Einstufen: öffentliche App mit personenbezogenen Daten → hoher Prüfbedarf.',
            'AVV mit dem Anbieter prüfen bzw. abschließen; Hosting-Ort und Unterauftragsverarbeiter dokumentieren.',
            'Sicherheitscheck durch die externe IT: Zugriffsregeln der Datenbank, keine offenen Tabellen, Spam-Schutz.',
            'Datenschutzerklärung und Löschfrist für Bestelldaten ergänzen.',
            'Richtlinie „Vibe Coding" verabschieden: Prototypen ja, Livegang nur nach Freigabe-Checkliste.'
          ],
          takeaway: 'Nicht verbieten, sondern **begleiten**: Eine einfache Freigabe-Checkliste macht aus Schatten-IT ein beherrschbares Innovationswerkzeug.'
        },
        { type: 'interactive', widget: 'prompt-builder', props: {} },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Aussage zu KI-generiertem Code ist laut den zitierten Quellen (Veracode, BSI/ANSSI) zutreffend?',
          options: [
            'Er ist sicher, wenn er fehlerfrei läuft.',
            'Er enthält häufig Sicherheitsmängel und muss wie Code von Dritten geprüft werden.',
            'Größere Modelle erzeugen grundsätzlich sicheren Code.',
            'Prüfung ist nur bei Programmiersprache Java nötig.'
          ],
          answer: 1,
          explain: 'Funktionierender Code ist nicht automatisch sicherer Code. Veracode fand in 45 % der Fälle Lücken aus den OWASP Top 10; BSI und ANSSI empfehlen konsequente Prüfung.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'single',
      q: 'Was unterscheidet laut OSI ein Open-Source-KI-System von einem reinen Open-Weight-Modell?',
      options: [
        'Open Source AI ist immer kostenlos, Open Weight nicht',
        'Bei Open Source AI sind zusätzlich Code und ausreichende Informationen über die Trainingsdaten unter offenen Bedingungen verfügbar',
        'Open-Weight-Modelle dürfen nicht lokal betrieben werden',
        'Es gibt keinen Unterschied'
      ],
      answer: 1,
      explain: 'Die OSI Open Source AI Definition 1.0 verlangt Zugang zur „preferred form": Data Information, vollständiger Code und Parameter.'
    },
    {
      type: 'multi',
      q: 'Nach welchen Kriterien solltest du auf Hugging Face Modelle filtern (Workshop)? (Mehrfachauswahl)',
      options: ['Aufgabe', 'Größe', 'Lizenz', 'Sprache', 'Anzahl der Likes als einziges Kriterium'],
      answer: [0, 1, 2, 3],
      explain: 'Aufgabe, Größe, Lizenz und Sprache sind die Filter aus dem Workshop. Likes zeigen Beliebtheit, sagen aber nichts über die Eignung für deinen Use Case.'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Seit Juli 2025 ist LM Studio laut Hersteller auch für die Nutzung am Arbeitsplatz kostenlos.',
      answer: true,
      explain: 'Wahr. Laut LM-Studio-Blog vom 8. Juli 2025 ist die separate kommerzielle Lizenz für die Nutzung in Unternehmen entfallen.'
    },
    {
      type: 'cloze',
      q: 'Faustformel für den Speicherbedarf der Gewichte',
      text: 'Ein Modell mit 8 Mrd. Parametern benötigt in 4-Bit-Quantisierung etwa {{4|4 GB|vier}} GB, in 16 Bit etwa {{16|16 GB|sechzehn}} GB.',
      explain: 'Parameter × Bits ÷ 8 = Bytes: 8 Mrd. × 4 ÷ 8 = 4 GB; 8 Mrd. × 16 ÷ 8 = 16 GB. Kontext und System brauchen zusätzlich Speicher.'
    },
    {
      type: 'single',
      q: 'Was bewirkt Quantisierung eines Sprachmodells?',
      options: [
        'Sie trainiert das Modell mit neuen Daten',
        'Sie speichert die Parameter mit weniger Bits – kleiner und schneller, meist mit geringem Qualitätsverlust',
        'Sie macht das Modell zu Open Source',
        'Sie verbindet das Modell mit dem Internet'
      ],
      answer: 1,
      explain: 'Quantisierung reduziert die Genauigkeit der gespeicherten Zahlen (z. B. von 16 auf 4 Bit). Das senkt Speicherbedarf und Rechenaufwand.'
    },
    {
      type: 'match',
      q: 'Ordne das Werkzeug seiner Beschreibung zu.',
      pairs: [
        ['LM Studio', 'Desktop-App zum Suchen, Laden und lokalen Ausführen von Modellen'],
        ['Ollama', 'Open-Source-Werkzeug (MIT) für Kommandozeile und lokale API'],
        ['Hugging Face', 'Plattform für offene Modelle, Datensätze und Model Cards'],
        ['Lovable', 'Browserbasierter Builder für Web-Apps aus Beschreibungen']
      ],
      explain: 'Alle vier begegnen dir im KI-Werkzeugkasten: Modelle finden (Hugging Face), lokal betreiben (LM Studio, Ollama), Apps bauen (Lovable).'
    },
    {
      type: 'order',
      q: 'Bringe einen sicheren Vibe-Coding-Prozess in die richtige Reihenfolge.',
      items: ['Anwendung nach Risiko einstufen', 'Mit Testdaten bauen', 'Sicherheit prüfen (Zugriffsregeln, Authentifizierung, Schlüssel)', 'Review durch fachkundige Person vor Livegang', 'Betrieb mit verantwortlicher Person und Updates'],
      explain: 'Erst einstufen, dann sicher bauen, prüfen, freigeben und verantwortlich betreiben – so bleibt Vibe Coding beherrschbar.'
    },
    {
      type: 'single',
      q: 'Was ist der Kern von CVE-2025-48757 im Zusammenhang mit Lovable-Apps?',
      options: [
        'Ein Fehler im Browser der Nutzer:innen',
        'Unzureichende Row-Level-Security-Regeln erlaubten unbefugte Lese- und Schreibzugriffe auf Datenbanktabellen generierter Seiten',
        'Ein Ausfall der Lovable-Server',
        'Eine Urheberrechtsverletzung im generierten Code'
      ],
      answer: 1,
      explain: 'Laut CVE-Eintrag konnten unauthentifizierte Angreifende Tabellen lesen oder beschreiben. Der Anbieter bestreitet die Zuständigkeit – die Verantwortung liegt bei den App-Betreibenden.'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Die Angabe „DSGVO-konform" auf der Website eines KI-Anbieters ersetzt die Prüfung von AVV, Unterauftragsverarbeitern und Verarbeitungsort.',
      answer: false,
      explain: 'Falsch. Das ist eine Selbstauskunft. Für eine Entscheidung brauchst du Belege: AVV nach Art. 28 DSGVO, Liste der Unterauftragsverarbeiter, Zertifikate, konkrete Verarbeitungsorte.'
    },
    {
      type: 'multi',
      q: 'Welche Aussagen zu Aleph Alpha und Cohere sind laut den Quellen (Stand Oktober 2026) richtig? (Mehrfachauswahl)',
      options: [
        'Im April 2026 wurde die Übernahme/Fusion angekündigt',
        'Die Schwarz-Gruppe unterstützt das Vorhaben finanziell und erwartet den Betrieb auf STACKIT',
        'Der Abschluss steht unter dem Vorbehalt behördlicher Genehmigungen',
        'Aleph Alpha wurde 2026 aufgelöst und alle Produkte eingestellt'
      ],
      answer: [0, 1, 2],
      explain: 'Ankündigung im April 2026, Unterstützung der Schwarz-Gruppe mit Bezug zu STACKIT, Abschluss vorbehaltlich Genehmigungen (TechCrunch, Wikipedia). Von einer Auflösung ist keine Rede.'
    },
    {
      type: 'match',
      q: 'Ordne das Auswahlkriterium der passenden Leitfrage zu.',
      pairs: [
        ['AVV', 'Gibt es einen Vertrag nach Art. 28 DSGVO mit Liste der Unterauftragsverarbeiter?'],
        ['Serverstandort', 'Wo werden Daten gespeichert und verarbeitet?'],
        ['Lock-in', 'Kann ich Modell und Anbieter später wechseln?'],
        ['Kosten', 'Wie entwickeln sich die Kosten bei zehnfacher Nutzung?']
      ],
      explain: 'Diese Kriterien gehören in jede Bewertungsmatrix für KI-Tools – ergänzt um Qualität im eigenen Test und Sicherheit/Betrieb.'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Laut der im Skript (S. 17) zitierten GitHub-Angabe schreibt Copilot 46 % des gesamten Codes auf GitHub.',
      answer: false,
      explain: 'Falsch. Die Herstellerangabe aus 2023 bezieht sich auf Dateien, in denen Copilot aktiviert ist – im Schnitt stammen dort 46 % des Codes aus Vorschlägen. Zitiere solche Zahlen immer mit ihrem Bezugsrahmen.'
    },
    {
      type: 'single',
      q: 'Welche Techniken zur Modellkomprimierung nennt das Skript in Abschnitt 6.4, um Rechenbedarf zu senken?',
      options: ['Quantisierung, Pruning und Wissensdestillation', 'Prompt Injection und Jailbreaking', 'Feature Engineering und Normalisierung', 'Fine-Tuning auf möglichst großen Datensätzen'],
      answer: 0,
      explain: 'Das Skript empfiehlt Quantisierung, Pruning und Wissensdestillation (S. 149). Quantisierung ist die Technik, die lokale Modelle mit LM Studio oder Ollama auf normaler Hardware möglich macht.'
    }
  ],
  exercises: [
    {
      id: 'p3-e1',
      title: 'Entscheidungsvorlage: Cloud-KI, EU-Plattform oder lokal?',
      scenario: `Die **Pflegedienst Lebenszeit GmbH (fiktiv)**, 70 Mitarbeitende, betreut Patient:innen ambulant in Sachsen. Die Pflegedienstleitung möchte Pflegeberichte und Übergabenotizen mit KI zusammenfassen lassen. Es geht um **Gesundheitsdaten** (besondere Kategorien nach Art. 9 DSGVO). Die IT besteht aus einem externen Dienstleister.`,
      task: `Vergleiche drei Optionen – (A) Consumer-Chat eines großen US-Anbieters, (B) Enterprise-Plattform bzw. API-Angebot mit Verarbeitung in der EU, (C) lokales Modell mit LM Studio/Ollama – anhand der Kriterien Datenschutz, AVV, Serverstandort, Kosten, Lock-in und Qualität. Gib eine begründete Empfehlung und nenne die nächsten drei Schritte.`,
      deliverable: 'Tabelle oder Fließtext, 250–400 Wörter',
      template: '| Kriterium | A Consumer | B EU-Plattform/API | C Lokal |\n|---|---|---|---|\n| Datenschutz | | | |\n| AVV | | | |\n| Serverstandort | | | |\n| Kosten | | | |\n| Lock-in | | | |\n| Qualität | | | |\n\nEmpfehlung: …\nNächste Schritte: …',
      rubric: [
        { criterion: 'Erkennt die besondere Sensibilität von Gesundheitsdaten', keywords: ['gesundheit', 'art. 9', 'besondere kategorie', 'sensib'], min: 1, hint: 'Um welche Art personenbezogener Daten handelt es sich in Pflegeberichten?' },
        { criterion: 'Vergleicht die Optionen anhand von Datenschutz, AVV und Serverstandort', keywords: ['avv', 'dsgvo', 'standort', 'eu', 'unterauftrag'], min: 2, hint: 'Welche Verträge und Verarbeitungsorte sind je Option zu prüfen?' },
        { criterion: 'Bewertet Kosten, Lock-in und Hardware realistisch', keywords: ['kosten', 'lock-in', 'hardware', 'ram', 'token', 'wechsel'], min: 2, hint: 'Was kostet jede Option im Betrieb – und wie schwer ist ein späterer Wechsel?' },
        { criterion: 'Berücksichtigt Qualität und Pilot/Test', keywords: ['qualität', 'pilot', 'test', 'halluz', 'prüf'], min: 1, hint: 'Woher weißt du, ob die Zusammenfassungen gut genug sind?' },
        { criterion: 'Gibt eine begründete Empfehlung mit konkreten nächsten Schritten', keywords: ['empfehl', 'schritt', 'datenschutzbeauftrag', 'dsfa', 'folgenabschätzung'], min: 2, hint: 'Wer muss beteiligt werden, und was passiert als Erstes?' }
      ],
      hints: [
        'Beginne mit der Frage, welche Daten verarbeitet werden – das bestimmt, welche Optionen überhaupt in Frage kommen.',
        'Bei Gesundheitsdaten ist eine Datenschutz-Folgenabschätzung naheliegend. Prüfe für Option B, ob es einen AVV und eine Verarbeitung ausschließlich in der EU gibt; für Option C, ob Hardware und Betreuung vorhanden sind.',
        'Eine typische Empfehlung kombiniert: Option A ausschließen, B oder C in einem kleinen Pilot mit pseudonymisierten Berichten testen, Datenschutzbeauftragte:n und Pflegefachkräfte einbinden.'
      ],
      sample: `| Kriterium | A Consumer-Chat | B EU-Plattform/API | C Lokal (LM Studio/Ollama) |
|---|---|---|---|
| Datenschutz | Eingaben ggf. zur Produktverbesserung genutzt; für Gesundheitsdaten ungeeignet | Training-Opt-out/Ausschluss vertraglich regelbar | Daten verlassen das Gerät nicht |
| AVV | in Consumer-Tarifen in der Regel nicht vorgesehen | AVV nach Art. 28 DSGVO verfügbar, Unterauftragsverarbeiter prüfen | nicht nötig für das Modell; aber für den IT-Dienstleister |
| Serverstandort | meist USA | EU (z. B. Frankfurt, EU01) – genau belegen lassen | eigener Rechner/Server |
| Kosten | gering | nutzungsabhängig (Tokens) oder pro Platz | Hardware + Betreuung, keine Tokenkosten |
| Lock-in | hoch | mittel, gering bei Modellwahl und offener API | gering (offene Modelle) |
| Qualität | sehr gut | sehr gut bis gut, je nach Modell | gut für Zusammenfassungen, im Pilot prüfen |

**Empfehlung:** Option A scheidet wegen Gesundheitsdaten (Art. 9 DSGVO) aus. Ich empfehle einen vierwöchigen Pilot mit **Option C** auf einem Rechner mit ausreichend RAM/VRAM und parallel ein Angebot für **Option B** einzuholen, falls die Qualität lokal nicht reicht.

**Nächste Schritte:** 1. Datenschutzbeauftragte:n einbinden und Datenschutz-Folgenabschätzung starten. 2. 20 pseudonymisierte Berichte als Testset erstellen und von Pflegefachkräften bewerten lassen. 3. Nutzungsrichtlinie (nur lokales Modell, keine Cloud-Modelle in Ollama, Prüfpflicht) und Schulung vorbereiten.`
    },
    {
      id: 'p3-e2',
      title: 'Freigabe-Checkliste für Vibe-Coding-Projekte',
      scenario: `In der **Möbelhaus Lindner KG (fiktiv)**, 220 Mitarbeitende, bauen Fachabteilungen zunehmend eigene Tools mit Lovable, Google AI Studio und Cursor: ein Urlaubsplaner, ein Reklamationsformular für Kund:innen, ein internes Preis-Dashboard. Die IT ist überlastet und möchte „das alles verbieten".`,
      task: `Erstelle eine Freigabe-Checkliste (8–12 Punkte) für Vibe-Coding-Projekte und ordne die drei genannten Tools einer Risikostufe zu. Begründe, warum ein Verbot nicht die beste Lösung ist, und nenne eine Quelle oder Studie, die die Sicherheitsrisiken belegt.`,
      deliverable: 'Checkliste plus Risikoeinstufung, 200–350 Wörter',
      template: 'Risikoeinstufung:\n- Urlaubsplaner: …\n- Reklamationsformular: …\n- Preis-Dashboard: …\n\nFreigabe-Checkliste:\n1. …\n\nWarum kein Verbot: …',
      rubric: [
        { criterion: 'Stuft die Anwendungen nachvollziehbar nach Risiko ein', keywords: ['risiko', 'öffentlich', 'intern', 'personenbezogen', 'stufe'], min: 2, hint: 'Wer nutzt das Tool, und welche Daten verarbeitet es?' },
        { criterion: 'Enthält technische Sicherheitsprüfungen', keywords: ['zugriff', 'authentif', 'row-level', 'api-schlüssel', 'schlüssel', 'review', 'validier'], min: 2, hint: 'Was muss technisch geprüft werden, bevor eine App mit Daten live geht?' },
        { criterion: 'Berücksichtigt Datenschutz und Verträge', keywords: ['avv', 'dsgvo', 'datenschutz', 'testdaten', 'löschfrist'], min: 2, hint: 'Welche Daten dürfen beim Bauen und im Betrieb verwendet werden?' },
        { criterion: 'Regelt Verantwortung und Betrieb', keywords: ['verantwort', 'owner', 'betrieb', 'update', 'wartung'], min: 1, hint: 'Wer kümmert sich nach dem Livegang um die App?' },
        { criterion: 'Belegt Risiken mit einer Quelle', keywords: ['veracode', 'bsi', 'anssi', 'cve', 'owasp'], min: 1, hint: 'Welche Studie oder Behörde hat sich mit der Sicherheit von KI-Code befasst?' }
      ],
      hints: [
        'Unterscheide zuerst: intern ohne sensible Daten, intern mit Personaldaten, öffentlich mit Kundendaten.',
        'Denke an den Prozess aus Lektion 4: einstufen → Testdaten → Sicherheit prüfen → Review → Betrieb.',
        'Ein Verbot treibt Projekte in die Schatten-IT. Eine abgestufte Freigabe mit wenigen klaren Regeln entlastet die IT, weil nur riskante Projekte ein volles Review brauchen. Belege: Veracode 2025, BSI/ANSSI 2024, CVE-2025-48757.'
      ],
      sample: `**Risikoeinstufung**
- *Preis-Dashboard* (intern, keine personenbezogenen Daten): **niedrig** – Selbstfreigabe mit Checkliste.
- *Urlaubsplaner* (intern, Personaldaten): **mittel** – Freigabe durch IT und Datenschutz, ggf. Personalrat.
- *Reklamationsformular* (öffentlich, Kundendaten, Fotos): **hoch** – volles Sicherheitsreview vor Livegang.

**Freigabe-Checkliste**
1. Zweck, Nutzerkreis und verantwortliche Person (Owner) benannt.
2. Datenarten erfasst; personenbezogene Daten → Datenschutz eingebunden.
3. Beim Bauen nur Testdaten verwendet.
4. AVV mit dem Tool-/Hosting-Anbieter geprüft; Hosting-Ort dokumentiert.
5. Authentifizierung vorhanden, wo nötig; Rollen sinnvoll gesetzt.
6. Datenbank-Zugriffsregeln (z. B. Row-Level Security) geprüft – keine offenen Tabellen.
7. Keine API-Schlüssel oder Passwörter im Frontend oder Code-Repository.
8. Eingaben werden validiert; Spam-/Missbrauchsschutz bei öffentlichen Formularen.
9. Bei mittlerem/hohem Risiko: Review durch fachkundige Person vor Livegang.
10. Löschfristen, Datenschutzerklärung und Impressum geprüft.
11. Update- und Wartungsverantwortung festgelegt; Wiedervorlage nach 6 Monaten.

**Warum kein Verbot:** Ein Verbot verlagert die Projekte in private Accounts (Schatten-IT) und verschenkt Innovationspotenzial. Abgestufte Freigaben konzentrieren die knappe IT-Kapazität auf riskante Fälle. Dass Prüfung nötig ist, belegen der Veracode GenAI Code Security Report 2025 (Lücken in 45 % der Codebeispiele), das BSI/ANSSI-Papier „AI Coding Assistants" (2024) und CVE-2025-48757 zu unzureichenden Zugriffsregeln in Lovable-Apps.`
    }
  ],
  glossary: [
    { term: 'Open-Weight-Modell', def: 'Modell, dessen Gewichte herunterladbar sind; Trainingsdaten und -code sind meist nicht offen, die Lizenz kann Einschränkungen enthalten.' },
    { term: 'Open Source AI (OSAID 1.0)', def: 'Definition der Open Source Initiative: KI-System mit den Freiheiten Use, Study, Modify, Share; erfordert Zugang zu Data Information, Code und Parametern.' },
    { term: 'Model Card', def: 'Begleitdokument eines Modells mit Einsatzzweck, Grenzen, Trainingsdaten, Bias-Hinweisen, Evaluation und Lizenz.' },
    { term: 'Quantisierung', def: 'Speichern von Modellparametern mit weniger Bits (z. B. 4 statt 16), um Speicherbedarf und Rechenaufwand zu senken.' },
    { term: 'GGUF', def: 'Verbreitetes Dateiformat für (oft quantisierte) Modelle, die lokal mit Werkzeugen wie LM Studio oder Ollama ausgeführt werden.' },
    { term: 'LM Studio', def: 'Desktop-App zum Suchen, Herunterladen und lokalen Ausführen von Sprachmodellen; seit Juli 2025 auch für die Arbeit kostenlos.' },
    { term: 'Ollama', def: 'Open-Source-Werkzeug (MIT-Lizenz) zum Ausführen von Modellen per Kommandozeile und lokaler API; bietet zusätzlich Cloud-Modelle an.' },
    { term: 'Vibe Coding', def: 'Softwareentwicklung, bei der eine Idee in natürlicher Sprache beschrieben und der Code von einer KI erzeugt wird; Begriff von Andrej Karpathy (2025).' },
    { term: 'Lock-in', def: 'Abhängigkeit von einem Anbieter, die einen späteren Wechsel teuer oder schwierig macht – etwa durch proprietäre Formate oder fehlende Exportmöglichkeiten.' },
    { term: 'AVV', def: 'Auftragsverarbeitungsvertrag nach Art. 28 DSGVO zwischen Verantwortlichem und Dienstleister, der personenbezogene Daten im Auftrag verarbeitet.' }
  ],
  sources: [
    { title: 'Model Cards', publisher: 'Hugging Face Docs', year: 2026, type: 'Doku', url: 'https://huggingface.co/docs/hub/model-cards' },
    { title: 'The Open Source AI Definition 1.0', publisher: 'Open Source Initiative', year: 2024, type: 'Leitfaden', url: 'https://opensource.org/ai/open-source-ai-definition' },
    { title: 'System Requirements', publisher: 'LM Studio Docs', year: 2026, type: 'Doku', url: 'https://lmstudio.ai/docs/app/system-requirements' },
    { title: 'LM Studio is free for use at work', publisher: 'LM Studio Blog', year: 2025, type: 'Artikel', url: 'https://lmstudio.ai/blog/free-for-work' },
    { title: 'Ollama Documentation', publisher: 'Ollama', year: 2026, type: 'Doku', url: 'https://docs.ollama.com/' },
    { title: 'Models Overview', publisher: 'Mistral AI Docs', year: 2026, type: 'Doku', url: 'https://docs.mistral.ai/models' },
    { title: 'Langdock – KI-Plattform', publisher: 'Langdock GmbH', year: 2026, type: 'Tool', url: 'https://langdock.com/de' },
    { title: 'AI Model Hub', publisher: 'IONOS', year: 2026, type: 'Tool', url: 'https://cloud.ionos.de/managed/ai-model-hub' },
    { title: 'STACKIT AI Model Serving', publisher: 'STACKIT (Schwarz Digits)', year: 2026, type: 'Tool', url: 'https://stackit.com/de/produkte/data-ai/stackit-ai-model-serving' },
    { title: 'Why Cohere is merging with Aleph Alpha', publisher: 'TechCrunch', year: 2026, type: 'Artikel', url: 'https://techcrunch.com/2026/04/25/why-cohere-is-merging-with-aleph-alpha/' },
    { title: '2025 GenAI Code Security Report', publisher: 'Veracode', year: 2025, type: 'Studie', url: 'https://www.veracode.com/blog/genai-code-security-report/' },
    { title: 'AI Coding Assistants', publisher: 'ANSSI & BSI', year: 2024, type: 'Leitfaden', url: 'https://cyber.gouv.fr/en/publications/jointly-led-international-publications/ai-coding-assistants/' },
    { title: 'GitHub CEO says Copilot will write 80% of code “sooner than later”', publisher: 'Freethink', year: 2023, type: 'Artikel', url: 'https://www.freethink.com/robots-ai/github-copilot' }
  ]
}
