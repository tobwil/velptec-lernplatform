export default {
  id: 'p2',
  order: 10,
  title: 'Automatisierung & KI-Agenten mit n8n',
  subtitle: 'Plus-Modul: Workflows, AI-Agent-Node, Human-in-the-loop, MCP und Agenten-Architektur – die Praxis zu Skript 8.1',
  icon: 'flow',
  plus: true,
  isNew: true,
  minutes: 100,
  skript: [
    { chapter: '8.1', title: 'Agentische KI und autonome Systeme', page: 166 },
    { chapter: '8.2', title: 'Entwicklung hin zu LLMOps', page: 171 },
    { chapter: '4.5', title: 'Change Management und Akzeptanz', page: 96 },
    { chapter: '2.4', title: 'Erfolgskennzahlen und KPIs', page: 43 }
  ],
  objectives: [
    'Du kannst die Grundbausteine von n8n (Workflow, Node, Trigger, Credential, Execution) erklären und einordnen.',
    'Du kannst die Lizenz (Sustainable Use License, fair-code) sowie Cloud vs. Self-Hosting unter Datenschutzgesichtspunkten bewerten.',
    'Du kannst einen KI-Workflow mit AI-Agent-Node, Tools, Memory, Human-in-the-loop und Fehlerbehandlung skizzieren.',
    'Du kannst typische Praxis-Workflows (E-Mail → Ticket, Rechnungseingang, Lead-Qualifizierung, Morgen-Briefing) Schritt für Schritt planen.',
    'Du unterscheidest Chatbot, Assistent und Agent sowie Workflows und Agenten (Anthropic) und kennst MCP als Standard für Tool-Anbindung.',
    'Du übersetzt den Agenten-Kreislauf und die Management-Empfehlungen aus Skript 8.1 (Grenzen, Abbruchmechanismen, Protokollierung, neue Kennzahlen) in konkrete n8n-Bausteine.'
  ],
  lessons: [
    {
      id: 'p2-l1',
      title: 'n8n verstehen: Workflows, Nodes, Trigger & Hosting',
      minutes: 25,
      blocks: [
        { type: 'video', scene: 'n8n' },
        {
          type: 'text',
          md: `**n8n** (gesprochen „n-eight-n") ist eine Plattform zur **Workflow-Automatisierung**, entwickelt von der n8n GmbH in Berlin. Du baust Abläufe auf einer grafischen Arbeitsfläche (*Canvas*), indem du Bausteine – sogenannte **Nodes** – miteinander verbindest. n8n beschreibt sich selbst als „fair-code licensed workflow automation tool", das KI-Funktionen mit klassischer Prozessautomatisierung verbindet.

### Die fünf Grundbegriffe
- **Workflow**: eine Sammlung verbundener Nodes, die einen Prozess automatisiert. Er startet durch einen Trigger, manuell oder durch einen anderen Workflow.
- **Node**: ein einzelner Baustein – holt Daten, verarbeitet sie, steuert den Ablauf oder spricht einen externen Dienst an.
- **Trigger-Node**: startet den Workflow bei einem Ereignis (neue E-Mail, Webhook, Zeitplan, Chat-Nachricht). Jeder produktive Workflow braucht mindestens einen Trigger.
- **Credential**: gespeicherte Zugangsdaten (API-Key, OAuth, Passwort) für einen Dienst – getrennt vom Workflow und verschlüsselt abgelegt.
- **Execution**: ein einzelner Durchlauf des Workflows – mit Protokoll, welche Daten durch welchen Node gelaufen sind. Executions sind dein wichtigstes Werkzeug für Fehlersuche und Nachvollziehbarkeit.

Dazu kommen **Expressions** (dynamische Werte aus vorherigen Nodes) und **Sub-Workflows** (wiederverwendbare Teil-Abläufe).`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Trigger', back: 'Startet den Workflow – z. B. „Neue E-Mail im Postfach", Webhook, Zeitplan (Schedule) oder Chat-Nachricht.' },
            { front: 'Node', back: 'Ein Arbeitsschritt: Daten holen, umwandeln, verzweigen (IF/Switch), KI aufrufen, Ergebnis senden.' },
            { front: 'Credential', back: 'Zugangsdaten zu einem Dienst. Gehören ins Credential-Management – niemals im Klartext in einen Node oder Prompt.' },
            { front: 'Execution', back: 'Ein konkreter Durchlauf mit allen Ein- und Ausgabedaten – Grundlage für Debugging, Audit und Kostenkontrolle.' },
            { front: 'Expression', back: 'Dynamischer Wert, z. B. der Betreff der eingegangenen Mail, der in einen späteren Node übernommen wird.' },
            { front: 'Sub-Workflow', back: 'Ein Workflow, den ein anderer Workflow aufruft – hält große Automationen übersichtlich und wiederverwendbar.' }
          ]
        },
        {
          type: 'skript',
          chapter: '8.1',
          page: 166,
          md: 'Kapitel 8.1 beschreibt agentische KI als Wandel von Assistenten, die auf Prompts reagieren, zu Systemen, die Ziele verfolgen, mehrstufig planen und **über Werkzeuge und Plattformen hinweg handeln**. Werkzeuge wie n8n machen genau das heute für den Mittelstand zugänglich – ohne eigenes Entwicklungsteam. Das Skript rät, mit **klar abgegrenzten Bereichen** zu beginnen, in denen Ziele eindeutig und Fehlerfolgen überschaubar sind (z. B. Kundenservice, Datenanalyse, Content-Betrieb). Deshalb gilt in diesem Plus-Modul: Nicht jeder Ablauf braucht einen „autonomen" Agenten; oft reicht ein klar definierter Workflow mit einem KI-Schritt (siehe Lektion 4).'
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz aus dem Workshop',
          md: 'Gute KI-Automatisierung beginnt nicht beim Prompt, sondern beim **Design des gesamten Ablaufs**.'
        },
        {
          type: 'text',
          md: `### Lizenz: „fair-code", nicht Open Source im engeren Sinn
n8n steht unter der **Sustainable Use License (SUL)** – einer von n8n 2022 geschaffenen *fair-code*-Lizenz; Enterprise-Funktionen (Dateien mit \`.ee.\` im Namen) laufen unter der separaten **n8n Enterprise License**. Der Quellcode ist einsehbar und du darfst n8n kostenlos selbst betreiben und anpassen – aber mit Einschränkungen. Laut n8n gilt: *Wenn Workflows nur von dir oder Personen in deiner Organisation erstellt oder geändert werden, kannst du die Community-Version kostenlos nutzen.*`
        },
        {
          type: 'table',
          caption: 'Sustainable Use License in der Praxis (Quelle: n8n License FAQ, Stand Oktober 2026)',
          head: ['Erlaubt (Community Edition, selbst gehostet)', 'Nicht erlaubt ohne kommerzielle Lizenz'],
          rows: [
            ['n8n zur Unterstützung des eigenen Geschäfts nutzen', 'n8n als Dienst hosten, in dem Kund:innen eigene Workflows bauen'],
            ['Automationen für Kund:innen auf der eigenen Instanz bauen, solange diese sie nicht selbst bearbeiten', 'Externe Endnutzer:innen Workflows konfigurieren lassen – auch über eigene UI, API, MCP oder einen KI-Agenten'],
            ['Einrichtung, Wartung, Schulung und Beratung rund um n8n abrechnen', 'n8n forken und als eigenes Automatisierungsprodukt vermarkten'],
            ['n8n unsichtbar als Backend im eigenen Produkt einsetzen', 'White-Label: Branding entfernen und n8n „as is" anbieten'],
            ['Mehrere Community-Instanzen betreiben', 'Enterprise-Funktionen mit Lizenzschlüssel ohne Enterprise-Lizenz nutzen']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Fair-code ≠ OSI-Open-Source',
          md: 'Die SUL schränkt die kommerzielle Weitergabe ein und ist daher **keine** von der Open Source Initiative anerkannte Open-Source-Lizenz. Für interne Automatisierung im Unternehmen ist sie meist unproblematisch – wer aber ein SaaS-Produkt auf n8n plant, sollte die [License FAQ](https://docs.n8n.io/n8n-community-license/community-license/license-faq) lesen und im Zweifel `license@n8n.io` bzw. die Rechtsabteilung fragen.'
        },
        {
          type: 'table',
          caption: 'Cloud oder Self-Hosting? (Quellen: n8n Docs „Choose how to use n8n", n8n Pricing-FAQ, n8n Security-Seite)',
          head: ['Kriterium', 'n8n Cloud', 'Self-Hosting (Community/Business/Enterprise)'],
          rows: [
            ['Betrieb & Updates', 'durch n8n', 'durch dich bzw. deine IT (Updates, Backups, Monitoring)'],
            ['Datenstandort', 'laut n8n EU, Server in Frankfurt; Hosting auf Microsoft Azure', 'frei wählbar: eigener Server, deutscher Hoster, On-Prem'],
            ['DSGVO-Aspekte', 'AVV mit n8n nötig; Unterauftragsverarbeiter (u. a. Azure) prüfen', 'volle Kontrolle – aber auch volle Verantwortung für Sicherheit'],
            ['Kosten', 'Abo-Pläne, nach Executions gestaffelt', 'Community Edition kostenlos; Kosten für Server und Betriebsaufwand'],
            ['Zugriff auf interne Systeme', 'nur über das Internet erreichbare Systeme', 'auch interne Datenbanken/Netze ohne Freigabe nach außen'],
            ['Einstieg', 'sofort, ohne Installation', 'Docker/Server-Kenntnisse nötig']
          ]
        },
        {
          type: 'praxis',
          title: 'Hosting-Entscheidung im Handwerksbetrieb',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Die Geschäftsführung möchte Kundenanfragen per E-Mail automatisch vorsortieren. Du sollst als KI-Managerin bzw. KI-Manager entscheiden, ob n8n in der Cloud oder selbst gehostet betrieben wird. In den Mails stehen Namen, Adressen und teils Fotos aus Privatwohnungen.`,
          steps: [
            'Datenarten klären: personenbezogene Daten (Name, Adresse, Fotos) → DSGVO-relevant, Datenschutzbeauftragte:n früh einbinden.',
            'Prototyp in der n8n-Cloud-Testphase mit **Testdaten** bauen (keine echten Kundendaten), um den Nutzen zu prüfen.',
            'IT-Kapazität ehrlich bewerten: Wer spielt Sicherheitsupdates ein, wer überwacht Backups? Ohne verantwortliche Person ist Self-Hosting riskant.',
            'Für den Echtbetrieb vergleichen: n8n Cloud (EU/Frankfurt, AVV) vs. Self-Hosting bei einem deutschen Hoster mit AVV.',
            'Entscheidung dokumentieren (Verarbeitungsverzeichnis, AVV, Zuständigkeiten) und nach drei Monaten überprüfen.'
          ],
          takeaway: 'Self-Hosting ist **nicht automatisch** datenschutzfreundlicher – es verschiebt die Verantwortung zu dir. Entscheidend sind AVV, Standort, Zuständigkeiten und Update-Disziplin.'
        },
        { type: 'interactive', widget: 'workflow-builder', props: {} },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Softwarehaus will seinen Kund:innen eine Oberfläche anbieten, in der diese eigene Automationen auf Basis von n8n zusammenklicken. Was gilt laut Sustainable Use License?',
          options: [
            'Erlaubt, solange n8n selbst gehostet wird',
            'Erlaubt, wenn das n8n-Logo sichtbar bleibt',
            'Nicht erlaubt ohne separate kommerzielle (Enterprise-)Vereinbarung',
            'Erlaubt, weil n8n Open Source nach OSI ist'
          ],
          answer: 2,
          explain: 'Laut n8n License FAQ ist es nicht erlaubt, externen Endnutzer:innen das Bauen oder Konfigurieren eigener Workflows zu ermöglichen – auch nicht über eine eigene UI. Dafür braucht es eine kommerzielle Lizenz.'
        },
        {
          type: 'links',
          title: 'Zum Weitermachen',
          items: [
            { title: 'n8n Launchpad by KIsruptiv', url: 'https://how-to-n8n.kisruptiv.de/', note: 'Interaktiver Begleiter des Dozenten: In drei Fragen zum passenden Hosting-Pfad (lokal mit Docker, VPS bei einem Hoster, DigitalOcean) – inkl. Hinweis, zuerst in der Cloud zu testen.' },
            { title: 'n8n Docs – Key concept glossary', url: 'https://docs.n8n.io/key-concept-glossary', note: 'Offizielle Begriffsdefinitionen (englisch).' },
            { title: 'n8n Docs – Choose how to use n8n', url: 'https://docs.n8n.io/choose-how-to-use-n8n', note: 'Cloud vs. Self-Hosting, Editionen und Pläne.' },
            { title: 'n8n Workflow-Vorlagen', url: 'https://n8n.io/workflows/', note: 'Community-Templates als Startpunkt – Credentials und Datenschutz immer selbst prüfen.' }
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Wahr oder falsch: Ein selbst gehostetes n8n ist automatisch DSGVO-konform, weil die Daten im eigenen Haus bleiben.',
          answer: false,
          explain: 'Falsch. Self-Hosting gibt dir Kontrolle über den Standort, aber DSGVO-Konformität hängt auch von Zweck, Rechtsgrundlage, Zugriffsrechten, Updates, Löschkonzept – und davon ab, welche externen KI-Dienste der Workflow aufruft.'
        }
      ]
    },
    {
      id: 'p2-l2',
      title: 'KI im Workflow: AI-Agent-Node, Tools, Memory & Human-in-the-loop',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Im Workshop haben wir gesehen: Ein KI-Chatbot oder -Agent entsteht nicht durch „einen guten Prompt", sondern durch eine **Architektur** aus vier Teilen:

1. **Modellwahl** – nicht immer das größte Modell. Für Klassifikation oder kurze Antworten reicht oft ein kleineres, günstigeres und schnelleres Modell.
2. **Persona** – Rolle, Tonalität, Grenzen. Beispiel: *„Du bist ein freundlicher Support-Assistent für ein Museum, der einfache Sprache verwendet."*
3. **Kontext** – Zielgruppe, Hintergrundwissen, Regeln, Dokumente, Gesprächsverlauf.
4. **Workflow-Logik** – was vorher und nachher passiert: Daten holen, prüfen, verzweigen, freigeben, protokollieren.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Im Modell eingebrannt', md: 'Was das Modell aus dem Training „mitbringt": Sprachgefühl, Weltwissen, Grundverhalten. Darauf hast du kaum Einfluss – außer über die Modellwahl.' },
            { title: '2 · System Message', md: 'Die dauerhafte Arbeitsanweisung: Persona, Regeln, Grenzen, Ausgabeformat. Im AI-Agent-Node von n8n ist das der *System Message*-Bereich.' },
            { title: '3 · User Input', md: 'Die konkrete Aufgabe im Moment – z. B. der Text der eingegangenen E-Mail oder die Frage im Chat.' }
          ]
        },
        {
          type: 'text',
          md: `### So ist der AI-Agent-Node aufgebaut
n8n setzt KI über **Cluster-Nodes** um, die auf dem JavaScript-Framework **LangChain** basieren: Ein *Root-Node* (z. B. **AI Agent**) bekommt *Sub-Nodes* angesteckt:
- **Chat Model** – das Sprachmodell (z. B. Anthropic, OpenAI, Google Gemini, Mistral oder ein lokales Modell über den *Ollama Chat Model*-Node).
- **Memory** – das Gesprächsgedächtnis. *Simple Memory* speichert eine einstellbare Anzahl vorheriger Nachrichten; für Produktion gibt es z. B. Postgres- oder Redis-Chat-Memory.
- **Tools** – Werkzeuge, die der Agent selbst aufrufen darf: HTTP-Request, Google Sheets, Datenbank, ein anderer Workflow, ein **MCP-Client**. Der AI-Agent-Node braucht laut Doku mindestens ein Tool.

Der Agent entscheidet dann selbst, **welches Tool** er **wann** aufruft. Zusätzlich bietet n8n seit 2026 eigenständige **Agents** (Preview) mit Instructions, Skills, Kanälen (z. B. Slack, Telegram) und Zeitplänen neben den klassischen Workflows.`
        },
        { type: 'interactive', widget: 'agent-loop', props: {} },
        {
          type: 'skript',
          chapter: '8.1',
          page: 167,
          quote: 'autonom bedeutet nicht unbeaufsichtigt',
          md: 'Das Skript beschreibt den Kern agentischer KI als Kreislauf **Wahrnehmen – Schlussfolgern – Handeln – Beobachten**, der läuft, bis das Ziel erreicht ist oder ein Mensch eingreift. Als häufige Fehler nennt es vage Ziele, unzureichende Überwachung und fehlende **Abbruchmechanismen**; erfolgreiche Organisationen legen klare Grenzen fest, protokollieren die Entscheidungen des Agenten und behalten bei Ergebnissen mit hoher Tragweite die menschliche Kontrolle (S. 170). Die Tabelle zeigt, wo du diese Empfehlungen in n8n umsetzt.'
        },
        {
          type: 'table',
          caption: 'Skript 8.1 in n8n übersetzt (eigene Zuordnung; Node-Optionen laut n8n Docs)',
          head: ['Skript 8.1', 'Umsetzung in n8n'],
          rows: [
            ['**Wahrnehmen**', 'Trigger (E-Mail, Webhook, Chat, Zeitplan) und lesende Tools/Nodes, die Daten holen'],
            ['**Schlussfolgern**', 'Chat Model + System Message im AI-Agent-Node'],
            ['**Handeln**', 'Tools, die der Agent aufruft (HTTP Request, Datenbank, Sub-Workflow, MCP Client)'],
            ['**Beobachten**', 'Tool-Ergebnisse fließen zurück an den Agenten; Option *Return Intermediate Steps* und die Executions-Ansicht machen die Schritte nachvollziehbar'],
            ['**Kontext über Interaktionen**', 'Memory-Sub-Node (Simple Memory, Postgres/Redis Chat Memory)'],
            ['**Abbruchmechanismus**', 'Option *Max Iterations* begrenzt die Anzahl der Durchläufe; *Stop and Error* bei verletzten Bedingungen; Übergabe an Menschen per Human-in-the-loop'],
            ['**Menschliche Kontrolle bei hoher Tragweite**', 'Human-in-the-loop für einzelne Tools (Freigabe vor Ausführung)'],
            ['**Entscheidungen protokollieren**', 'Executions, Error Workflow, ggf. eigenes Log in einer Datenbank']
          ]
        },
        {
          type: 'skript',
          chapter: '4.5',
          page: 99,
          md: 'Auch beim Thema Akzeptanz empfiehlt das Skript einen **Human-in-the-Loop-Ansatz**: Die KI spricht Empfehlungen aus, der Mensch trifft die endgültige Entscheidung – zumindest anfangs; Überstimmungen mit Begründung schaffen Rechenschaft und bewahren Eigenständigkeit. Genau dieses Prinzip setzt n8n technisch um: Kritische Werkzeug-Aufrufe eines Agenten lassen sich an eine menschliche Freigabe koppeln.'
        },
        {
          type: 'text',
          md: `### Human-in-the-loop (HITL) in n8n
Du kannst festlegen, dass ein Agent bestimmte Tools **nur nach menschlicher Freigabe** ausführen darf. Der Workflow pausiert, die verantwortliche Person bekommt eine Anfrage – z. B. in Slack, Telegram oder im n8n-Chat – und sieht, **welches Tool mit welchen Parametern** aufgerufen werden soll. Sie kann **genehmigen** (Tool läuft) oder **ablehnen** (Aktion entfällt, der Agent wird informiert).

n8n empfiehlt HITL insbesondere bei
- **unumkehrbaren Aktionen** (Daten löschen, externe Nachrichten senden, Käufe),
- **Compliance-Vorgaben** in regulierten Branchen,
- **folgenreichen Entscheidungen** und
- in der **Vertrauensaufbau-Phase**: erst mit Freigabe starten, dann Schritt für Schritt reduzieren.`
        },
        {
          type: 'table',
          caption: 'Fehlerbehandlung & Qualitätssicherung in n8n (Quelle: n8n Docs)',
          head: ['Mechanismus', 'Wofür', 'Praxis-Tipp'],
          rows: [
            ['**Error Workflow** mit *Error Trigger*', 'läuft automatisch, wenn ein Workflow fehlschlägt', 'Ein zentraler „Error Handler" für alle Workflows: Mail/Teams-Nachricht an die verantwortliche Person'],
            ['**Stop and Error**-Node', 'Workflow bewusst scheitern lassen, wenn eine Bedingung verletzt ist', 'z. B. wenn die KI kein gültiges JSON liefert'],
            ['**Executions**-Ansicht', 'jeden Durchlauf nachvollziehen, Daten in den Editor laden', 'bei Beschwerden den konkreten Lauf prüfen'],
            ['**Guardrails**-Node', 'Ein- und Ausgaben prüfen: Jailbreak, personenbezogene Daten (PII), Secret Keys, Themenbindung', 'PII vor dem Versand an ein externes Modell maskieren („Sanitize Text")'],
            ['**Evaluations**', 'KI-Ausgaben gegen bekannte Testfälle prüfen', 'vor jedem Prompt- oder Modellwechsel 20–50 Testfälle laufen lassen']
          ]
        },
        {
          type: 'praxis',
          title: 'E-Mail-Klassifikation → Ticket',
          company: 'Stadtwerke Lindenau (fiktiv), Kundenservice mit 12 Mitarbeitenden',
          scenario: `Im Sammelpostfach landen täglich viele Mails: Zählerstände, Abschlagsänderungen, Störungsmeldungen, Beschwerden. Bisher sortiert eine Person jeden Morgen von Hand. Ziel: Jede Mail wird automatisch klassifiziert und als Ticket in der richtigen Queue angelegt – Störungen sofort an den Bereitschaftsdienst.`,
          steps: [
            '**Trigger**: *IMAP/E-Mail-Trigger* oder *Microsoft Outlook Trigger* auf das Sammelpostfach.',
            '**Vorverarbeitung**: Signaturen und Zitatverläufe entfernen; *Guardrails* (Sanitize) maskiert Bankverbindungen und Telefonnummern.',
            '**Klassifikation**: kleines, günstiges Modell mit System Message „Ordne die Mail genau einer Kategorie zu: Zählerstand, Abschlag, Störung, Beschwerde, Sonstiges. Antworte nur als JSON {kategorie, dringlichkeit, begruendung}."',
            '**Prüfung**: IF-Node prüft gültiges JSON und erlaubte Kategorie; sonst *Stop and Error* → Error Workflow informiert das Team.',
            '**Verzweigung** (Switch): Störung → sofort Ticket mit Priorität „hoch" + Nachricht an Bereitschaft; sonst Ticket in der passenden Queue.',
            '**Human-in-the-loop**: Automatische Antwort an Kund:innen nur als Entwurf, Versand erst nach Freigabe durch Mitarbeitende.',
            '**Messen**: Anteil korrekt klassifizierter Mails (Stichprobe), Durchlaufzeit bis Ticket, manuelle Korrekturen pro Woche.'
          ],
          takeaway: 'Die KI ist nur **ein** Node im Ablauf. Zuverlässigkeit entsteht durch Vorverarbeitung, Formatprüfung, Fehler-Workflow und Freigabe an den richtigen Stellen.'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe den Ablauf eines Agenten-Tools mit Human-in-the-loop in die richtige Reihenfolge.',
          items: [
            'Agent entscheidet, ein freigabepflichtiges Tool zu nutzen',
            'Workflow pausiert und sendet eine Freigabeanfrage (z. B. Slack)',
            'Mensch sieht Tool und Parameter und genehmigt oder lehnt ab',
            'Bei Genehmigung läuft das Tool, bei Ablehnung wird der Agent informiert'
          ],
          explain: 'So beschreibt es die n8n-Doku „Human-in-the-loop for tools". Die Freigabe kann über einen anderen Kanal laufen als die eigentliche Interaktion.'
        },
        {
          type: 'youtube',
          id: 'P5x0nsY8hCg',
          title: 'When to use the New Agents vs A workflow with AI',
          channel: 'n8n',
          lang: 'en',
          minutes: 4
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Self-Hosting heißt: Updates sind deine Pflicht',
          md: 'Auch n8n hatte kritische Sicherheitslücken, z. B. [CVE-2025-68613](https://www.cve.org/CVERecord?id=CVE-2025-68613) (Codeausführung über Expressions durch angemeldete Nutzer:innen, behoben u. a. in 1.120.4/1.122.0). Wer selbst hostet, braucht einen **Update-Prozess**, eingeschränkte Benutzerrechte und sollte Instanzen nicht unnötig öffentlich erreichbar machen.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Sub-Nodes kannst du an einen AI-Agent-Node in n8n anschließen? (Mehrfachauswahl)',
          options: ['Chat Model', 'Memory', 'Tools (z. B. HTTP Request, MCP Client)', 'Error Trigger'],
          answer: [0, 1, 2],
          explain: 'Chat Model, Memory und Tools sind Sub-Nodes des AI-Agent-Root-Nodes. Der Error Trigger ist dagegen der Start-Node eines separaten Error Workflows.'
        }
      ]
    },
    {
      id: 'p2-l3',
      title: 'Praxis-Workflows Schritt für Schritt & Tool-Vergleich',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Die folgenden drei Workflows sind typische Einstiegsprojekte im Mittelstand. Sie folgen alle demselben Muster: **Trigger → Daten holen → KI-Schritt mit klarer Aufgabe → Prüfung → Aktion → Protokoll**. Je klarer die Aufgabe des KI-Schritts, desto kleiner darf das Modell sein – und desto günstiger und nachhaltiger läuft der Workflow (mehr dazu in Kapitel 6.4 und 8.4 des Skripts).`
        },
        {
          type: 'praxis',
          title: 'Rechnungseingang automatisieren',
          company: 'Holzwerk Bauer Schreinerei GmbH (fiktiv), 40 Mitarbeitende, Niederbayern',
          scenario: `Eingangsrechnungen kommen als PDF per Mail an rechnung@… Die Buchhaltung tippt Lieferant, Rechnungsnummer, Datum, Netto/Brutto und Fälligkeit ab und gleicht mit Bestellungen ab.`,
          steps: [
            '**Trigger**: E-Mail-Trigger auf das Rechnungspostfach, Filter „hat PDF-Anhang".',
            '**Extraktion**: PDF-Text auslesen (*Extract from File*); bei gescannten PDFs ein OCR-/Vision-fähiges Modell.',
            '**KI-Schritt**: Modell extrahiert Felder in ein festes JSON-Schema (Lieferant, Rechnungsnr., Datum, Netto, USt, Brutto, IBAN, Fälligkeit).',
            '**Plausibilität**: Code-/IF-Node prüft Netto + USt = Brutto, IBAN-Format, Pflichtfelder; Abweichung → Ticket „manuelle Prüfung".',
            '**Abgleich**: Lookup in der Bestellliste (Datenbank oder Data Table); IBAN-Änderung bei bekanntem Lieferanten → **immer** Freigabe durch Buchhaltung (Betrugsschutz).',
            '**Aktion**: Datensatz an Buchhaltungssoftware bzw. DMS übergeben, PDF revisionssicher ablegen.',
            '**Kennzahlen**: Anteil ohne manuelle Korrektur, Durchlaufzeit Eingang → Buchung, entdeckte Abweichungen.'
          ],
          takeaway: 'Bei Finanzprozessen gilt: KI extrahiert, **Regeln prüfen**, Menschen geben Ausnahmen frei. Eine geänderte Bankverbindung darf nie automatisch übernommen werden.'
        },
        {
          type: 'praxis',
          title: 'Lead-Qualifizierung im Vertrieb',
          company: 'NetzWerk Systemhaus GmbH (fiktiv), IT-Dienstleister, 60 Mitarbeitende, Leipzig',
          scenario: `Über das Kontaktformular der Website kommen Anfragen von Privatpersonen, Kleinstbetrieben und mittelständischen Unternehmen. Der Vertrieb verliert Zeit mit unpassenden Anfragen, während gute Leads zu spät eine Antwort bekommen.`,
          steps: [
            '**Trigger**: *Webhook* oder *Form Trigger* empfängt die Formulardaten.',
            '**Anreicherung**: nur öffentlich verfügbare Firmendaten ergänzen (z. B. Website des Unternehmens) – Datenschutzhinweis im Formular anpassen.',
            '**KI-Schritt**: Modell bewertet anhand eines festen Kriterienkatalogs (Branche, Größe, Bedarf, Dringlichkeit) und liefert Score 1–5 plus Begründung.',
            '**Routing**: Score ≥ 4 → Aufgabe im CRM + Nachricht an Vertrieb; Score 2–3 → Nurturing-Liste; Score 1 → freundliche Standardantwort.',
            '**Human-in-the-loop**: Persönliche Antwort-Entwürfe werden nur vorgeschlagen; versendet wird nach Prüfung.',
            '**Fairness-Check**: Kriterien regelmäßig prüfen – bewertet das Modell z. B. Anfragen in einfacher Sprache systematisch schlechter?'
          ],
          takeaway: 'Ein transparenter Kriterienkatalog ist wichtiger als das Modell. Die KI begründet ihre Einstufung – so bleibt die Entscheidung nachvollziehbar und korrigierbar.'
        },
        {
          type: 'praxis',
          title: 'Morgen-Briefing-Agent',
          company: 'Lernwerk Weiterbildung gGmbH (fiktiv), Bildungsträger, 30 Mitarbeitende, Köln',
          scenario: `Die Bereichsleitung möchte jeden Morgen um 7:30 Uhr ein kurzes Briefing: neue Förderaufrufe, relevante Branchennews und die eigenen Termine des Tages – statt selbst zehn Quellen zu durchsuchen. Genau das Workshop-Beispiel: „Überwache neue Nachrichten, fasse sie zusammen und sende jeden Morgen ein Briefing."`,
          steps: [
            '**Trigger**: *Schedule Trigger* werktags 7:00 Uhr.',
            '**Sammeln**: RSS-Feeds ausgewählter Quellen, Kalender-Node für Tagestermine.',
            '**Filtern**: Duplikate und Artikel älter als 24 h entfernen – das spart Tokens, bevor überhaupt ein Modell gefragt wird.',
            '**Verdichten**: AI-Agent mit System Message „Fasse in max. 10 Stichpunkten zusammen, nenne je Punkt die Quelle, markiere Förderaufrufe mit Frist."',
            '**Versand**: Mail oder Teams-Nachricht an die Bereichsleitung; Feedback-Link „hilfreich / nicht hilfreich".',
            '**Pflege**: Quellenliste und Prompt monatlich anhand des Feedbacks anpassen.'
          ],
          takeaway: 'Wie beim Workshop-News-Aggregator gilt: Der Wert von KI liegt oft im **besseren Filtern, Verdichten, Einordnen** – nicht im Erzeugen von noch mehr Text.'
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Prozess verstehen', md: 'Ist-Ablauf mit den Fachleuten aufzeichnen: Auslöser, Daten, Entscheidungen, Ausnahmen, Volumen pro Tag.' },
            { title: '2 · KI-Schritt eng definieren', md: 'Eine klare Aufgabe (klassifizieren, extrahieren, zusammenfassen) mit festem Ausgabeformat statt „mach mal".' },
            { title: '3 · Mit Testdaten bauen', md: 'Workflow mit anonymisierten Beispielen und *gepinnten Daten* entwickeln; Evaluations mit 20–50 Fällen.' },
            { title: '4 · Absichern', md: 'Credentials sauber hinterlegen, Guardrails, Error Workflow, Freigaben für riskante Aktionen, Logging-Konzept.' },
            { title: '5 · Pilot & Messen', md: 'Mit einem Team starten, Prozess-KPIs messen, Feedback sammeln, erst dann ausrollen.' }
          ]
        },
        {
          type: 'skript',
          chapter: '2.4',
          page: 45,
          md: 'Das Skript ordnet KI-Anwendungstypen passende Geschäfts-KPIs zu – für **operative Effizienz** etwa Durchsatz, Durchlaufzeit und Ressourcenauslastung, für **Kostensenkung** Prozesskosten pro Einheit, eingesparte Arbeitsstunden und Fehlerquote. Diese Kennzahlen sind ideal, um n8n-Workflows zu bewerten. Für Agenten empfiehlt Kapitel 8.1 zusätzlich **Qualität** (erreichte Ziele), **Effizienz** (Ressourcen pro Ziel) und **Zuverlässigkeit** (Zielerreichung ohne menschliches Eingreifen). Ergänze für KI-Workflows außerdem den **Anteil manueller Korrekturen** und die **Kosten pro Durchlauf**.'
        },
        {
          type: 'table',
          caption: 'Automatisierungsplattformen im Vergleich – nur verifizierte Eigenschaften, Stand Oktober 2026. Angebote ändern sich – vor Entscheidungen aktuelle Herstellerangaben prüfen.',
          head: ['Kriterium', 'n8n', 'Make', 'Zapier', 'Microsoft Power Automate'],
          rows: [
            ['Anbieter', 'n8n GmbH, Berlin', 'Make, Teil der Celonis-Gruppe', 'Zapier (USA)', 'Microsoft, Teil der Power Platform'],
            ['Betriebsmodell', 'Cloud **oder** Self-Hosting', 'Cloud-Dienst (SaaS)', 'Cloud-Dienst (SaaS)', 'Cloud-Flows plus Desktop-Flows (RPA) für Desktop-Anwendungen'],
            ['Datenstandort', 'Cloud laut n8n: EU (Frankfurt, Azure); Self-Hosting frei wählbar', 'Datenzone US1/US2/EU1/EU2; laut [Make-Hilfe](https://help.make.com/ai-providers-and-data-zones-in-make) laufen einige KI-Funktionen trotz EU-Zone in den USA', 'laut [Zapier](https://zapier.com/legal/data-privacy) AWS-Server in den USA', 'Umgebungsregion im Tenant; für EU-Kund:innen [EU Data Boundary](https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn)'],
            ['Lizenz', 'Sustainable Use License (fair-code) + Enterprise License', 'proprietär', 'proprietär', 'proprietär, Microsoft-Lizenzmodell'],
            ['Typische Stärke (Einschätzung)', 'technische Tiefe, Code-Nodes (JavaScript/Python), KI-Agenten-Nodes, interne Systeme per Self-Hosting', 'visuelle Szenarien, schneller Einstieg', 'sehr einfacher Einstieg für Standard-Integrationen', 'tiefe Integration in Microsoft 365, Automatisierung alter Desktop-Software']
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Anforderung der passenden Plattform-Eigenschaft zu.',
          pairs: [
            ['Workflow muss auf eigenem Server im Firmennetz laufen', 'n8n Self-Hosting'],
            ['Alte Windows-Desktop-Software ohne API automatisieren', 'Power Automate Desktop-Flows (RPA)'],
            ['Cloud-Plattform mit wählbarer EU-Datenzone', 'Make (EU1/EU2)'],
            ['Daten werden laut Anbieter in den USA gehostet', 'Zapier']
          ],
          explain: 'Die Zuordnung folgt den Herstellerangaben (n8n Docs, Microsoft Learn, Make Help Center, Zapier Data Privacy). Für die Auswahl zählen außerdem Kosten, vorhandene Lizenzen und IT-Kompetenz.'
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Agenten sind 2026 Alltagswerkzeug',
          md: `Das Skript (Kapitel 8.1) beschreibt agentische KI als aufkommenden Trend mit Beispielen aus 2024–2025. Stand Oktober 2026 sind Agenten in Automatisierungsplattformen produktiv nutzbar: n8n bietet neben dem AI-Agent-Node eigenständige **Agents** (Preview) mit Skills, Kanälen und Zeitplänen sowie Human-in-the-loop für Tools. Das **Model Context Protocol (MCP)** hat sich als offener Standard zur Tool-Anbindung etabliert und wurde im Dezember 2025 von Anthropic an die **Agentic AI Foundation** unter dem Dach der Linux Foundation übergeben.`,
          sources: [
            { title: 'n8n Docs – Build and manage agents', url: 'https://docs.n8n.io/build/build-and-manage-agents' },
            { title: 'n8n Docs – Human-in-the-loop for tools', url: 'https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools' },
            { title: 'Anthropic – Donating the Model Context Protocol and establishing the Agentic AI Foundation', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' }
          ]
        }
      ]
    },
    {
      id: 'p2-l4',
      title: 'Chat, Assistent, Agent – Bausteine, Muster & MCP',
      minutes: 20,
      blocks: [
        {
          type: 'text',
          md: `Im Alltag werden „Chatbot", „KI-Assistent" und „KI-Agent" oft vermischt. Für Entscheidungen im Unternehmen lohnt sich eine klare Unterscheidung (Workshop):
- Ein **Chatbot** *antwortet* auf Fragen.
- Ein **KI-Assistent** *hilft kontextbewusst* – er kennt deine Dokumente, den Gesprächsverlauf, deine Rolle.
- Ein **KI-Agent** *plant und handelt mit Tools* – er verfolgt ein Ziel, zerlegt es in Schritte, ruft Werkzeuge auf und prüft das Ergebnis.`
        },
        {
          type: 'skript',
          chapter: '8.1',
          page: 169,
          md: 'Das Skript stellt heutige KI-Systeme und agentische Systeme gegenüber: **Prompt → Antwort** vs. **Ziel → autonome Ausführung**, Einzelaufgabe vs. mehrstufige Arbeitsabläufe, Kontext nur pro Sitzung vs. sitzungsübergreifend, Werkzeugnutzung mit menschlicher Einbindung vs. eigenständige Werkzeugauswahl. Führung verschiebt sich dadurch von Schrittanweisungen zu **Zielen und Grenzen** – und es muss geklärt sein, wer bei Fehlern verantwortlich ist. Der folgende Agenten-Steckbrief ist das Werkzeug dafür.'
        },
        {
          type: 'table',
          head: ['', 'Chatbot', 'KI-Assistent', 'KI-Agent'],
          rows: [
            ['Kernfähigkeit', 'antwortet', 'hilft mit Kontext', 'plant und handelt'],
            ['Beispiel', 'FAQ-Bot auf der Website', 'Assistent mit Zugriff auf Handbuch und Verlauf', '„Überwache neue Nachrichten, fasse sie zusammen und sende jeden Morgen ein Briefing."'],
            ['Tools', 'keine', 'Wissensabruf (z. B. RAG)', 'mehrere Tools, eigenständig gewählt'],
            ['Risiko', 'falsche Antwort', 'falsche Antwort mit Quellenschein', 'falsche **Handlung** – daher Freigaben und Grenzen']
          ]
        },
        {
          type: 'text',
          md: `### Workflows vs. Agents (Anthropic)
Der viel zitierte Beitrag [„Building effective agents"](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic, 19.12.2024) unterscheidet zwei Arten „agentischer Systeme":
- **Workflows**: LLMs und Tools werden über **vordefinierte Codepfade** orchestriert.
- **Agents**: LLMs **steuern ihre Prozesse und ihren Tool-Einsatz dynamisch selbst**.

Die zentrale Empfehlung: Mit der einfachsten Lösung starten und mehrstufige agentische Systeme nur ergänzen, wenn einfachere Lösungen nicht ausreichen. Agenten eignen sich für offene Probleme, bei denen sich die Zahl der Schritte nicht vorhersagen lässt – sie kosten aber mehr und Fehler können sich aufschaukeln.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Prompt Chaining', back: 'Aufgabe in feste Schritte zerlegen; jeder LLM-Aufruf verarbeitet das Ergebnis des vorherigen (z. B. Entwurf → Prüfung → Übersetzung).' },
            { front: 'Routing', back: 'Eingabe klassifizieren und an einen spezialisierten Folgeschritt geben – wie im E-Mail-→-Ticket-Workflow.' },
            { front: 'Parallelization', back: 'Teilaufgaben gleichzeitig bearbeiten (Sectioning) oder dieselbe Aufgabe mehrfach lösen und abstimmen (Voting).' },
            { front: 'Orchestrator-Workers', back: 'Ein zentrales LLM zerlegt die Aufgabe dynamisch und verteilt sie an „Worker".' },
            { front: 'Evaluator-Optimizer', back: 'Ein LLM erzeugt, ein zweites bewertet und gibt Feedback – Schleife bis zur Qualität.' }
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: 'Erst **Workflow**, dann **Agent**: Was sich als fester Ablauf beschreiben lässt, wird als Workflow gebaut. Agenten-Autonomie gibt es nur dort, wo sie echten Mehrwert bringt – und immer mit Grenzen und Freigaben.'
        },
        {
          type: 'text',
          md: `### Bausteine eines Agenten – Beispiel Hermes Agent
Im Workshop haben wir das Open-Source-Framework [Hermes Agent](https://hermes-agent.nousresearch.com/) von Nous Research (MIT-Lizenz, selbst hostbar) angesehen. Es macht die typischen Bausteine moderner Agenten gut sichtbar:
- **Memory** – dauerhaftes Gedächtnis über Sitzungen hinweg (Fakten, Vorlieben, Projektwissen).
- **Skills** – wiederverwendbare Fähigkeiten bzw. „prozedurales Gedächtnis": Anleitungen plus Werkzeuge für eine bestimmte Aufgabe.
- **Soul** – Identität, Ton und Werte des Agenten (bei Hermes in einer \`SOUL.md\`-Datei).
- **Crons** – zeitgesteuerte Aufgaben, z. B. das tägliche Briefing.
- **Self-Improvement** – der Agent legt aus Erfahrung neue Skills an und verbessert sie.

Für KI-Manager:innen heißt das: Jeder dieser Bausteine braucht **Governance** – Was darf ins Gedächtnis (personenbezogene Daten?), wer prüft neue Skills, wer verantwortet zeitgesteuerte Aktionen?`
        },
        {
          type: 'text',
          md: `### Model Context Protocol (MCP)
MCP ist ein **offener Standard**, mit dem KI-Anwendungen an externe Systeme angebunden werden – Datenquellen (Dateien, Datenbanken), Tools (Suche, Rechner) und Workflows. Die offizielle Doku vergleicht MCP mit einem **USB-C-Anschluss für KI-Anwendungen**. Anthropic hat MCP im November 2024 vorgestellt; seit Dezember 2025 liegt es bei der **Agentic AI Foundation** (Linux Foundation), mitgegründet von Anthropic, Block und OpenAI.

In n8n gibt es beides: den **MCP Client** (dein Agent nutzt Tools fremder MCP-Server) und den **MCP Server Trigger** (deine n8n-Workflows werden als Tools für andere KI-Anwendungen bereitgestellt).`
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Sicherheitsrisiken agentischer Systeme',
          md: 'Die [OWASP Top 10 für LLM-Anwendungen](https://genai.owasp.org/llm-top-10/) nennen u. a. **Prompt Injection** (versteckte Anweisungen in Mails, Webseiten oder Dokumenten) und **Excessive Agency** (zu viele Rechte für den Agenten). Gegenmittel: minimale Tool-Rechte, Lese- statt Schreibzugriff, Human-in-the-loop für kritische Aktionen, MCP-Server nur aus vertrauenswürdigen Quellen.'
        },
        {
          type: 'praxis',
          title: 'Agenten-Steckbrief statt Bauchgefühl',
          company: 'Lernwerk Weiterbildung gGmbH (fiktiv), Bildungsträger, Köln',
          scenario: `Der Morgen-Briefing-Workflow aus Lektion 3 läuft. Nun wünscht sich die Bereichsleitung mehr: Der Agent soll auf Rückfragen antworten, Termine verschieben und Förderanträge vorbereiten. Du sollst entscheiden, wie viel Autonomie sinnvoll ist.`,
          steps: [
            '**Ziel und Grenzen** schriftlich festlegen: Was darf der Agent allein, was nur mit Freigabe, was nie?',
            '**Memory**: Nur dienstliche Präferenzen speichern, keine Gesundheits- oder Personaldaten; Löschfrist definieren.',
            '**Tools**: Kalender zunächst nur lesend; Termin verschieben = Human-in-the-loop; Förderantrag nur als Entwurf.',
            '**Soul/Persona**: Ton, Sprache und Haltung definieren („sachlich, nennt immer Quellen, sagt, wenn er unsicher ist").',
            '**Crons**: Zeitgesteuerte Aufgaben inventarisieren und je eine verantwortliche Person benennen.',
            '**Review** nach 4 Wochen: Freigabequote, Fehler, Nutzen – erst dann Rechte schrittweise erweitern.'
          ],
          takeaway: 'Autonomie wird **verdient**, nicht vorausgesetzt. Ein Steckbrief mit Zielen, Rechten und Verantwortlichen macht Agenten steuerbar.'
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz aus dem Workshop',
          md: 'Die Zukunft liegt in Systemen, die **sinnvoll handeln** können.'
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze die Definition nach Anthropic.',
          text: 'Bei {{Workflows|Workflow}} werden LLMs und Tools über vordefinierte Codepfade orchestriert; bei {{Agents|Agenten|Agent}} steuert das LLM seine Prozesse und seinen Tool-Einsatz dynamisch selbst.',
          explain: 'So definiert Anthropic in „Building effective agents" (2024) die beiden Arten agentischer Systeme.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Wahr oder falsch: MCP ist ein proprietäres Protokoll, das nur mit Claude funktioniert.',
          answer: false,
          explain: 'Falsch. MCP ist ein offener Standard, der von vielen KI-Anwendungen unterstützt wird und seit Dezember 2025 bei der Agentic AI Foundation unter der Linux Foundation liegt.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'single',
      q: 'Was ist in n8n eine „Execution"?',
      options: ['Ein gespeicherter API-Schlüssel', 'Ein einzelner Durchlauf eines Workflows mit protokollierten Daten', 'Ein Node, der Code ausführt', 'Eine Vorlage aus der Community'],
      answer: 1,
      explain: 'Eine Execution ist ein einzelner Lauf eines Workflows. Die Execution-Ansicht zeigt, welche Daten durch welchen Node geflossen sind – zentral für Debugging und Nachvollziehbarkeit.'
    },
    {
      type: 'single',
      q: 'Unter welcher Lizenz steht die Community-Version von n8n?',
      options: ['MIT License', 'Apache 2.0', 'Sustainable Use License (fair-code)', 'GNU GPL v3'],
      answer: 2,
      explain: 'n8n nutzt die 2022 eingeführte Sustainable Use License (fair-code) und für Enterprise-Funktionen die n8n Enterprise License. Sie ist keine OSI-Open-Source-Lizenz.'
    },
    {
      type: 'multi',
      q: 'Was ist laut n8n License FAQ unter der Community-Lizenz erlaubt? (Mehrfachauswahl)',
      options: [
        'n8n intern nutzen, um das eigene Geschäft zu betreiben',
        'Beratung und Schulung zu n8n gegen Bezahlung anbieten',
        'n8n als White-Label-Produkt ohne Branding verkaufen',
        'Kund:innen über eine eigene Oberfläche eigene Workflows bauen lassen'
      ],
      answer: [0, 1],
      explain: 'Interne Nutzung sowie bezahlte Dienstleistungen (Einrichtung, Wartung, Schulung, Beratung) sind erlaubt. White-Label und das Konfigurieren von Workflows durch externe Endnutzer:innen erfordern eine kommerzielle Lizenz.'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Laut n8n werden Daten der gehosteten Cloud-Pläne in der EU auf Servern in Frankfurt gespeichert.',
      answer: true,
      explain: 'Wahr – so steht es in der FAQ der n8n-Preisseite; gehostet wird auf Microsoft Azure. Trotzdem bleibt ein AVV nötig, und externe KI-Dienste im Workflow können Daten in andere Regionen senden.'
    },
    {
      type: 'order',
      q: 'Bringe die Schichten, die das Verhalten eines KI-Chatbots prägen, in die Reihenfolge vom Grundlegenden zum Konkreten (Workshop).',
      items: ['Im Modell eingebrannt (Trainingsprägung)', 'System Message (dauerhafte Arbeitsanweisung)', 'User Input (konkrete Aufgabe)'],
      explain: 'Das Training prägt das Grundverhalten, die System Message legt Persona und Regeln fest, der User Input liefert die Aufgabe im Moment.'
    },
    {
      type: 'match',
      q: 'Ordne den n8n-Mechanismus seinem Zweck zu.',
      pairs: [
        ['Error Trigger', 'startet einen Error Workflow, wenn ein Workflow fehlschlägt'],
        ['Stop and Error', 'lässt einen Workflow bei verletzter Bedingung gezielt scheitern'],
        ['Guardrails', 'prüft Texte z. B. auf Jailbreak-Versuche oder personenbezogene Daten'],
        ['Simple Memory', 'speichert eine begrenzte Zahl vorheriger Chat-Nachrichten']
      ],
      explain: 'Alle vier stammen aus der offiziellen n8n-Dokumentation. Zusammen sorgen sie für robuste, nachvollziehbare KI-Workflows.'
    },
    {
      type: 'single',
      q: 'Ein Agent soll Rechnungen bezahlen können. Welche Maßnahme ist am wichtigsten?',
      options: [
        'Ein möglichst großes Modell wählen',
        'Human-in-the-loop-Freigabe für das Zahlungs-Tool einrichten',
        'Die Memory auf unbegrenzt stellen',
        'Den Workflow öfter ausführen lassen'
      ],
      answer: 1,
      explain: 'Zahlungen sind folgenreich und kaum umkehrbar. n8n empfiehlt Human-in-the-loop genau für solche Tools – passend zur Skript-Empfehlung, bei Ergebnissen mit hoher Tragweite die menschliche Kontrolle zu behalten (Kapitel 8.1, S. 170).'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Workshop-Merksatz.',
      text: 'Gute KI-Automatisierung beginnt nicht beim {{Prompt}}, sondern beim Design des gesamten {{Ablaufs|Ablauf|Workflows|Prozesses}}.',
      explain: 'Modellwahl, Persona, Kontext und Workflow-Logik zusammen bestimmen die Qualität – der Prompt ist nur ein Teil.'
    },
    {
      type: 'single',
      q: 'Welches Muster aus „Building effective agents" beschreibt den Workflow „E-Mail klassifizieren und je nach Kategorie weiterleiten" am besten?',
      options: ['Routing', 'Evaluator-Optimizer', 'Orchestrator-Workers', 'Voting'],
      answer: 0,
      explain: 'Routing klassifiziert eine Eingabe und leitet sie an einen spezialisierten Folgeschritt weiter.'
    },
    {
      type: 'match',
      q: 'Ordne die Agenten-Bausteine (Hermes Agent, Workshop) ihrer Bedeutung zu.',
      pairs: [
        ['Memory', 'dauerhaftes Gedächtnis über Sitzungen'],
        ['Skills', 'wiederverwendbare Fähigkeiten für bestimmte Aufgaben'],
        ['Soul', 'Identität, Ton und Werte des Agenten'],
        ['Crons', 'zeitgesteuerte Aufgaben']
      ],
      explain: 'Diese Bausteine machen Agenten leistungsfähig – und brauchen jeweils eigene Regeln (Datenschutz, Prüfung, Verantwortlichkeit).'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Wählt man bei Make die Datenzone EU1 oder EU2, bleiben laut Make garantiert alle KI-Anfragen in der EU.',
      answer: false,
      explain: 'Falsch. Laut Make Help Center laufen einige KI-Funktionen und Modelle unabhängig von der Datenzone in den USA, und mit eigener KI-Anbieter-Verbindung entfällt die EU-Zusage.'
    },
    {
      type: 'multi',
      q: 'Welche Maßnahmen reduzieren das Risiko von „Excessive Agency" bei Agenten? (Mehrfachauswahl)',
      options: ['Minimale Tool-Rechte (z. B. nur lesend)', 'Freigabe vor kritischen Aktionen', 'Alle verfügbaren MCP-Server anbinden', 'Klare Grenzen in der System Message'],
      answer: [0, 1, 3],
      explain: 'Weniger Rechte, Freigaben und klare Grenzen reduzieren das Risiko. Möglichst viele MCP-Server anzubinden vergrößert dagegen die Angriffsfläche (OWASP Top 10 für LLM-Anwendungen).'
    },
    {
      type: 'match',
      q: 'Ordne die Empfehlung aus Skript 8.1 dem passenden n8n-Baustein zu.',
      pairs: [
        ['Abbruchmechanismus gegen Endlosschleifen', 'Option Max Iterations im AI-Agent-Node'],
        ['Menschliche Kontrolle bei Ergebnissen mit hoher Tragweite', 'Human-in-the-loop für einzelne Tools'],
        ['Entscheidungen des Agenten protokollieren', 'Executions-Ansicht und Return Intermediate Steps'],
        ['Kontext über Interaktionen hinweg behalten', 'Memory-Sub-Node']
      ],
      explain: 'Das Skript nennt fehlende Abbruchmechanismen und unzureichende Überwachung als typische Fehler. In n8n gibt es dafür konkrete Einstellungen und Bausteine (n8n Docs, AI Agent / Tools Agent).'
    }
  ],
  exercises: [
    {
      id: 'p2-e1',
      title: 'Workflow-Konzept: Anfragen im Kundenservice',
      scenario: `Die **Autohaus Kessler GmbH (fiktiv)**, 120 Mitarbeitende, zwei Standorte in Baden-Württemberg, erhält täglich viele Mails zu Werkstattterminen, Rechnungsfragen, Reklamationen und Probefahrten. Die Geschäftsführung möchte mit n8n automatisieren – „aber bitte datenschutzkonform und ohne dass die KI Kund:innen falsche Zusagen macht".`,
      task: `Entwirf ein Workflow-Konzept in n8n. Beschreibe Trigger, die einzelnen Nodes (inkl. KI-Schritt mit System Message), Prüfungen, Fehlerbehandlung, Human-in-the-loop-Stellen sowie deine Hosting-Empfehlung mit Begründung. Nenne zwei Kennzahlen für den Pilot.`,
      deliverable: '250–400 Wörter oder eine nummerierte Schrittliste mit kurzen Begründungen',
      template: `1. Trigger: …
2. Vorverarbeitung: …
3. KI-Schritt (Modell + System Message): …
4. Prüfung / Fehlerbehandlung: …
5. Verzweigung & Aktionen: …
6. Human-in-the-loop: …
7. Hosting-Empfehlung: …
8. KPIs für den Pilot: …`,
      rubric: [
        { criterion: 'Benennt einen passenden Trigger und eine sinnvolle Node-Abfolge', keywords: ['trigger', 'node', 'switch', 'verzweig', 'ticket'], min: 2, hint: 'Womit startet der Workflow, und wie wird nach Kategorie verzweigt?' },
        { criterion: 'Definiert den KI-Schritt präzise (Aufgabe, Format, Modellwahl)', keywords: ['system message', 'json', 'kategorie', 'klassifi', 'modell'], min: 2, hint: 'Was genau soll die KI tun, und in welchem Format antwortet sie?' },
        { criterion: 'Sieht Fehlerbehandlung und Prüfungen vor', keywords: ['error', 'fehler', 'prüf', 'guardrail', 'stop'], min: 2, hint: 'Was passiert, wenn die KI ein ungültiges Ergebnis liefert oder ein Dienst ausfällt?' },
        { criterion: 'Setzt Human-in-the-loop an kritischen Stellen ein', keywords: ['freigabe', 'human', 'mensch', 'entwurf', 'genehmig'], min: 1, hint: 'Wo könnte eine automatische Aktion Kund:innen schaden oder falsche Zusagen machen?' },
        { criterion: 'Begründet die Hosting-Entscheidung mit Datenschutzaspekten', keywords: ['dsgvo', 'avv', 'self-host', 'cloud', 'frankfurt', 'datenschutz'], min: 2, hint: 'Welche Daten fließen, wo werden sie verarbeitet, und wer trägt die Verantwortung für den Betrieb?' }
      ],
      hints: [
        'Zeichne zuerst den heutigen Ablauf: Wer liest die Mails, wie wird entschieden, was passiert danach?',
        'Trenne „verstehen" (KI klassifiziert) von „handeln" (Ticket, Antwort). Wo braucht das Handeln eine Prüfung?',
        'Denke an Error Trigger, Stop and Error, Guardrails (PII maskieren), Antwort nur als Entwurf, und vergleiche n8n Cloud (EU/Frankfurt, AVV) mit Self-Hosting.'
      ],
      sample: `1. **Trigger**: Microsoft-Outlook-Trigger auf service@… (neue Mail).
2. **Vorverarbeitung**: Signaturen/Zitate entfernen; *Guardrails – Sanitize Text* maskiert Telefonnummern, IBAN und Kennzeichen, bevor Text an ein externes Modell geht.
3. **KI-Schritt**: kleines, günstiges Modell. System Message: „Du bist Assistenz im Kundenservice eines Autohauses. Ordne die Mail genau einer Kategorie zu: Werkstatttermin, Rechnung, Reklamation, Probefahrt, Sonstiges. Antworte nur als JSON {kategorie, standort, dringlichkeit, begruendung}. Mache keine Zusagen."
4. **Prüfung**: IF-Node prüft gültiges JSON und erlaubte Kategorie; sonst *Stop and Error*. Ein zentraler Error Workflow (Error Trigger) informiert das Serviceteam per Teams.
5. **Verzweigung**: Switch nach Kategorie → Ticket in der passenden Queue des Standorts; Reklamationen mit Priorität hoch.
6. **Human-in-the-loop**: Die KI erstellt nur Antwort-*Entwürfe*; Versand erst nach Freigabe. Terminzusagen ausschließlich durch Mitarbeitende.
7. **Hosting**: Start mit n8n Cloud (laut n8n EU/Frankfurt) mit AVV, weil keine eigene IT für Updates vorhanden ist; Unterauftragsverarbeiter (Azure, KI-Anbieter) ins Verarbeitungsverzeichnis. Self-Hosting erst, wenn interne Systeme ohne Internetzugang angebunden werden müssen und Update-Verantwortung geklärt ist.
8. **KPIs**: Durchlaufzeit Eingang → Ticket; Anteil manuell korrigierter Kategorien (Ziel < 10 % nach 4 Wochen).`
    },
    {
      id: 'p2-e2',
      title: 'Workflow oder Agent? Eine begründete Entscheidung',
      scenario: `Die **Kreisverwaltung Talheim (fiktiv)** möchte Bürgeranfragen zum Thema Sperrmüll, Wertstoffhof und Abfallkalender automatisiert beantworten. Ein Dienstleister schlägt einen „vollautonomen KI-Agenten mit Zugriff auf alle Fachverfahren" vor.`,
      task: `Bewerte den Vorschlag mithilfe der Unterscheidung Workflow vs. Agent (Anthropic) und der Bausteine Memory, Skills, Soul, Crons. Empfiehl eine Architektur, nenne die Tools mit Rechten und begründe, wo Human-in-the-loop nötig ist. Gehe auf mindestens ein Sicherheitsrisiko ein.`,
      deliverable: '200–350 Wörter',
      template: 'Einschätzung des Vorschlags: …\nEmpfohlene Architektur: …\nTools und Rechte: …\nHuman-in-the-loop: …\nRisiken und Gegenmaßnahmen: …',
      rubric: [
        { criterion: 'Unterscheidet Workflow und Agent korrekt und wendet sie an', keywords: ['workflow', 'agent', 'vordefin', 'dynamisch', 'einfach'], min: 2, hint: 'Lässt sich der Ablauf als fester Pfad beschreiben, oder ist er wirklich offen?' },
        { criterion: 'Begrenzt Tools und Rechte (Least Privilege)', keywords: ['lesend', 'recht', 'tool', 'zugriff', 'minimal'], min: 2, hint: 'Braucht ein Auskunftssystem Schreibrechte in Fachverfahren?' },
        { criterion: 'Setzt Human-in-the-loop begründet ein', keywords: ['freigabe', 'human', 'mensch', 'sachbearbeit'], min: 1, hint: 'Welche Fälle sollten an Sachbearbeitende gehen?' },
        { criterion: 'Benennt Sicherheitsrisiken und Gegenmaßnahmen', keywords: ['prompt injection', 'injection', 'excessive', 'owasp', 'missbrauch', 'datenschutz'], min: 1, hint: 'Was passiert, wenn jemand dem Bot versteckte Anweisungen schickt?' }
      ],
      hints: [
        'Lies noch einmal die Definition von Workflows und Agents in Lektion 4.',
        'Überlege, welche Anfragen standardisiert sind (Abfallkalender, Öffnungszeiten) und welche Ermessen erfordern (Beschwerden, Sonderfälle).',
        'Ein Routing-Workflow mit RAG auf geprüften Dokumenten, lesendem Kalender-Tool und Übergabe an Menschen ist oft sicherer als ein autonomer Agent.'
      ],
      sample: `**Einschätzung**: Die meisten Anfragen sind standardisiert (Abholtermine, Öffnungszeiten, Gebühren). Ein vollautonomer Agent mit Zugriff auf alle Fachverfahren widerspricht der Empfehlung aus „Building effective agents", mit der einfachsten Lösung zu starten, und erhöht das Risiko von *Excessive Agency*.

**Architektur**: Workflow mit **Routing**: Chat Trigger → Klassifikation (Abfallkalender, Sperrmüll, Wertstoffhof, Sonstiges) → je Kategorie ein Assistent mit RAG auf geprüften Satzungen und FAQ. Nur der Sperrmüll-Fall bekommt ein Tool für die Terminbuchung.

**Tools und Rechte**: Abfallkalender nur *lesend*; Terminbuchung als eigener Sub-Workflow mit festen Parametern (Adresse, Datum) statt freiem Datenbankzugriff; keinerlei Zugriff auf andere Fachverfahren.

**Human-in-the-loop**: Terminbuchungen über einer Mengengrenze, Beschwerden und alles unter „Sonstiges" gehen an Sachbearbeitende. **Memory** nur für die laufende Sitzung, keine dauerhafte Speicherung personenbezogener Daten; **Soul**: sachlich, einfache Sprache, verweist bei Unsicherheit auf die Servicenummer. **Crons**: nur ein nächtlicher Abgleich der FAQ-Dokumente.

**Risiken**: Prompt Injection über Chat-Eingaben → Guardrails-Node (Jailbreak, Themenbindung), keine Schreibrechte, Protokollierung über Executions; Datenschutz → AVV, Datenminimierung, Hinweis zur KI-Nutzung.`
    }
  ],
  glossary: [
    { term: 'n8n', def: 'Workflow-Automatisierungsplattform der n8n GmbH (Berlin) unter der fair-code-Lizenz „Sustainable Use License"; als Cloud-Dienst oder selbst gehostet nutzbar.' },
    { term: 'Trigger-Node', def: 'Node, der einen Workflow bei einem Ereignis startet (z. B. neue E-Mail, Webhook, Zeitplan, Chat-Nachricht).' },
    { term: 'Credential', def: 'In n8n gespeicherte, verschlüsselte Zugangsdaten (API-Key, OAuth, Passwort) für einen externen Dienst.' },
    { term: 'Execution', def: 'Ein einzelner Durchlauf eines Workflows inklusive protokollierter Ein- und Ausgabedaten.' },
    { term: 'Sustainable Use License', def: 'Fair-code-Lizenz von n8n (2022): erlaubt Nutzung für eigene interne Geschäftszwecke sowie nicht-kommerzielle/persönliche Nutzung, schränkt kommerzielle Weitergabe ein; keine OSI-Open-Source-Lizenz.' },
    { term: 'AI-Agent-Node', def: 'Root-Node in n8n (auf LangChain-Basis), an den Chat Model, Memory und Tools als Sub-Nodes angeschlossen werden; der Agent entscheidet selbst über Tool-Aufrufe.' },
    { term: 'Human-in-the-loop (HITL)', def: 'Menschliche Freigabe vor bestimmten automatisierten Aktionen, z. B. bevor ein Agent ein kritisches Tool ausführt.' },
    { term: 'Model Context Protocol (MCP)', def: 'Offener Standard zur Anbindung von KI-Anwendungen an Datenquellen, Tools und Workflows; 2024 von Anthropic vorgestellt, seit Dezember 2025 bei der Agentic AI Foundation (Linux Foundation).' },
    { term: 'KI-Agent', def: 'KI-System, das ein Ziel verfolgt, Schritte plant und dafür eigenständig Tools aufruft – im Unterschied zum Chatbot (antwortet) und Assistenten (hilft kontextbewusst).' },
    { term: 'Prompt Injection', def: 'Angriff, bei dem versteckte Anweisungen in Eingaben (Mails, Webseiten, Dokumenten) ein Sprachmodell zu unerwünschtem Verhalten bringen.' }
  ],
  sources: [
    { title: 'Key concept glossary', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/key-concept-glossary' },
    { title: 'License FAQ (Sustainable Use License)', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/n8n-community-license/community-license/license-faq' },
    { title: 'Choose how to use n8n (Cloud vs. Self-Hosting)', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/choose-how-to-use-n8n' },
    { title: 'Security at n8n (Cloud Hosting & Storage)', publisher: 'n8n GmbH', year: 2026, type: 'Doku', url: 'https://n8n.io/legal/security/' },
    { title: 'Human-in-the-loop for tools', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools' },
    { title: 'Build and manage agents', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/build/build-and-manage-agents' },
    { title: 'Handle errors gracefully', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/build/flow-logic/handle-errors-gracefully' },
    { title: 'AI Agent node – Tools Agent (Optionen u. a. Max Iterations, Return Intermediate Steps)', publisher: 'n8n Docs', year: 2026, type: 'Doku', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/' },
    { title: 'Building effective agents', publisher: 'Anthropic', year: 2024, type: 'Artikel', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', year: 2026, type: 'Doku', url: 'https://modelcontextprotocol.io/' },
    { title: 'Donating the Model Context Protocol and establishing the Agentic AI Foundation', publisher: 'Anthropic', year: 2025, type: 'Artikel', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
    { title: 'Hermes Agent – Open-Source AI Agent', publisher: 'Nous Research', year: 2026, type: 'Tool', url: 'https://hermes-agent.nousresearch.com/' },
    { title: 'n8n Launchpad – Hosting-Begleiter', publisher: 'KIsruptiv', year: 2026, type: 'Leitfaden', url: 'https://how-to-n8n.kisruptiv.de/' }
  ]
}
