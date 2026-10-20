export default {
  id: 'm12',
  order: 12,
  title: 'Nachhaltigkeit & Kosten von KI',
  subtitle: 'Energie, Wasser, CO₂, Token-Kosten & FinOps – und was Gesetze verlangen',
  icon: 'leaf',
  isNew: true,
  minutes: 85,
  handout: [
    { section: '3', title: 'Aktuelle Anwendungen und Trends', page: 2 },
    { section: '6.2', title: 'Technische Infrastruktur', page: 4 },
    { section: '9', title: 'Erfolgsmessung und Optimierung', page: 5 },
    { section: '15', title: 'Weiterführende Ressourcen', page: 8 }
  ],
  objectives: [
    'Du kannst den Ressourcenverbrauch von KI nach Training, Inferenz und Hardware unterscheiden.',
    'Du kannst veröffentlichte Messwerte pro Prompt (z. B. Google, Mistral, Epoch AI) einordnen und ihre Grenzen benennen.',
    'Du kannst den Skalierungseffekt berechnen und Token-Kosten eines Workflows pro Monat abschätzen.',
    'Du kennst Hebel für günstigere und nachhaltigere KI: passende Modellgröße, Caching, Batch, lokale Modelle, Trigger-Design.',
    'Du kennst die Anforderungen des Energieeffizienzgesetzes an Rechenzentren und die Energie-Dokumentationspflicht für GPAI-Modelle im AI Act.'
  ],
  lessons: [
    {
      id: 'm12-l1',
      title: 'Wo KI Ressourcen verbraucht: Training, Inferenz, Hardware',
      minutes: 20,
      blocks: [
        {
          type: 'text',
          md: `Wenn über den „Stromverbrauch von KI" gesprochen wird, werden oft drei sehr unterschiedliche Dinge vermischt:

1. **Training** – das einmalige (aber sehr aufwendige) Lernen eines Modells auf großen Rechenclustern über Wochen oder Monate.
2. **Inferenz** – jede einzelne Nutzung: jeder Prompt, jede Zusammenfassung, jeder Workflow-Durchlauf. Pro Anfrage klein, aber milliardenfach.
3. **Hardware & Infrastruktur** – Herstellung von Chips und Servern („graue" Emissionen), Kühlung, Stromversorgung, Gebäude – und das Wasser für die Kühlung.

Als KI-Manager:in beeinflusst du vor allem die **Inferenz**: welches Modell, wie oft, mit wie vielen Tokens, auf welcher Infrastruktur.`
        },
        {
          type: 'handout',
          section: '6.2',
          page: 4,
          quote: 'Rechenleistung: GPU/TPU, Cloud vs. On-Prem',
          md: 'Das Handout behandelt Rechenleistung als technische Infrastrukturfrage. Ergänze die Perspektive **Energie und Kosten**: Welche Hardware wo läuft, bestimmt Stromverbrauch, Emissionen (Strommix) und Wasserbedarf – und damit auch, was du in Nachhaltigkeitsberichte schreiben kannst.'
        },
        {
          type: 'table',
          caption: 'Rechenzentren weltweit – Kennzahlen der IEA („Energy and AI", 2025)',
          head: ['Kennzahl', 'Wert laut IEA'],
          rows: [
            ['Stromverbrauch Rechenzentren 2024', 'ca. **415 TWh**, rund **1,5 %** des weltweiten Stromverbrauchs'],
            ['Wachstum seit 2017', 'rund **12 % pro Jahr**'],
            ['Anteile 2024', 'USA 45 %, China 25 %, Europa 15 %'],
            ['Projektion 2030 (Base Case)', 'mehr als Verdopplung auf ca. **945 TWh**'],
            ['Treiber', 'KI ist der wichtigste Wachstumstreiber; Unsicherheit steigt nach 2030 deutlich']
          ]
        },
        {
          type: 'text',
          md: `### Training oder Nutzung – was wiegt schwerer?
Das hängt von der Nutzungsintensität ab. Die Lebenszyklusanalyse von **Mistral AI** (Juli 2025, mit Carbone 4 und der französischen Umweltagentur ADEME) nennt für **Mistral Large 2** nach 18 Monaten Nutzung (Stand Januar 2025) **20,4 kt CO₂e**, **281.000 m³ Wasser** und 660 kg Sb-Äquivalent (Ressourcenverbrauch). Für eine einzelne Antwort von „Le Chat" mit 400 Tokens: **1,14 g CO₂e** und **45 ml Wasser** – inklusive vorgelagerter Emissionen aus der Serverherstellung.

Eine zweite Aussage derselben Studie ist für dich noch wichtiger: Die Wirkungen sind **ungefähr proportional zur Modellgröße** – ein **zehnmal größeres Modell** verursacht für dieselbe Menge erzeugter Tokens etwa **eine Größenordnung mehr** Umweltwirkung.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'PUE', back: 'Power Usage Effectiveness (im EnEfG: Energieverbrauchseffektivität): Gesamtenergie des Rechenzentrums ÷ Energie der IT. 1,0 wäre ideal; Google nennt für seine Flotte 1,09.' },
            { front: 'CO₂e', back: 'CO₂-Äquivalente: alle Treibhausgase in ihrer Wirkung auf CO₂ umgerechnet. Hängt stark vom Strommix des Standorts ab.' },
            { front: 'Wasserverbrauch', back: 'Direkt: Kühlwasser im Rechenzentrum. Indirekt: Wasser für die Stromerzeugung. Studien unterscheiden sich stark darin, was sie einrechnen.' },
            { front: 'Graue Emissionen', back: 'Emissionen aus Herstellung und Transport der Hardware (Chips, Server) – fallen an, bevor die erste Anfrage läuft.' },
            { front: 'Inferenz', back: 'Die Nutzung eines trainierten Modells: jede Anfrage, jeder Workflow-Lauf. Hier liegt dein größter Gestaltungshebel.' }
          ]
        },
        {
          type: 'youtube',
          id: 'eXdVDhOGqoE',
          title: 'AI Is Dangerous, but Not for the Reasons You Think',
          channel: 'TED (Sasha Luccioni)',
          lang: 'en',
          minutes: 10
        },
        {
          type: 'praxis',
          title: 'KI im Nachhaltigkeitsbericht: Was können wir überhaupt sagen?',
          company: 'Kunststofftechnik Albrecht GmbH (fiktiv), 300 Mitarbeitende, Sauerland',
          scenario: `Das Unternehmen erstellt einen freiwilligen Nachhaltigkeitsbericht. Die Geschäftsführung fragt: „Wie viel CO₂ verursacht eigentlich unsere KI-Nutzung?" Genutzt werden ein Enterprise-Chat, zwei n8n-Workflows mit Cloud-Modellen und ein lokales Modell auf einem Server.`,
          steps: [
            'Inventar erstellen: Welche KI-Dienste, welche Modelle, wie viele Anfragen bzw. Tokens pro Monat (aus Abrechnungen und n8n-Executions)?',
            'Nach Verantwortungsbereich trennen: eigener Server (Stromzähler, Strommix bekannt) vs. Cloud-Dienste (Angaben der Anbieter).',
            'Anbieter um Daten bitten: Energie pro Anfrage oder pro Token, PUE, Strommix, Standort; bei Rechenzentrumsdienstleistern Verbrauchsangaben nach § 15 EnEfG (siehe Lektion 4).',
            'Wo keine Daten vorliegen: mit veröffentlichten Werten als **Spanne** rechnen und Annahmen offenlegen.',
            'Im Bericht ehrlich formulieren: Größenordnung, Quellen, Unsicherheit – und welche Maßnahmen zur Reduktion ergriffen wurden.'
          ],
          takeaway: 'Exakte Zahlen gibt es selten. Professionell ist eine **transparente Abschätzung mit Spannen und Quellen** – plus konkrete Maßnahmen zur Reduktion.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Laut Mistral-Lebenszyklusanalyse verursacht ein zehnmal größeres Modell für dieselbe Menge erzeugter Tokens …',
          options: ['etwa gleich viel Umweltwirkung', 'etwa doppelt so viel', 'etwa eine Größenordnung mehr Umweltwirkung', 'weniger, weil es effizienter ist'],
          answer: 2,
          explain: 'Mistral beschreibt die Wirkungen als ungefähr proportional zur Modellgröße. Daraus folgt: das passende, nicht das größte Modell wählen.'
        }
      ]
    },
    {
      id: 'm12-l2',
      title: 'Was „kostet" ein Prompt? Messungen, Spannen, Kritik',
      minutes: 20,
      blocks: [
        {
          type: 'text',
          md: `### Die Google-Messung (August 2025)
Google hat am 21.08.2025 erstmals eine umfassende Messung für die Inferenz veröffentlicht (Blog plus technisches Paper *„Measuring the environmental impact of delivering AI at Google Scale"*). Für einen **medianen Gemini-Apps-Textprompt** (Daten aus Mai 2025):
- **0,24 Wh** Energie (laut Google weniger als neun Sekunden Fernsehen),
- **0,03 g CO₂e**,
- **0,26 ml Wasser** (etwa fünf Tropfen).

Eingerechnet sind laut Google: aktive Beschleuniger-Chips, Host-CPU und Arbeitsspeicher, **im Leerlauf vorgehaltene Kapazität** sowie der Rechenzentrums-Overhead (PUE der Flotte: 1,09) und das Kühlwasser im Rechenzentrum. Nur aktive Chips gerechnet ergäbe sich 0,10 Wh – Google selbst nennt diese enge Sicht „bestenfalls optimistisch". Zudem berichtet Google, dass Energie pro medianem Prompt zwischen Mai 2024 und Mai 2025 um den Faktor **33** und der CO₂-Fußabdruck um den Faktor **44** gesunken sei – nach Googles Angabe nicht unabhängig verifiziert.`
        },
        {
          type: 'table',
          caption: 'Veröffentlichte Werte pro Anfrage – nicht direkt vergleichbar (unterschiedliche Modelle, Systemgrenzen, Annahmen)',
          head: ['Quelle', 'Bezug', 'Wert', 'Was ist (nicht) enthalten?'],
          rows: [
            ['Google (2025)', 'medianer Gemini-Apps-Textprompt', '0,24 Wh · 0,03 g CO₂e · 0,26 ml Wasser', 'inkl. Leerlauf, CPU/RAM, PUE, Kühlwasser; Wasser für Stromerzeugung und Hardware-Herstellung nicht ausgewiesen'],
            ['Epoch AI (2025)', 'typische ChatGPT-Anfrage mit GPT-4o (Schätzung)', 'ca. 0,3 Wh', 'Abschätzung von außen; lange Eingaben/Ausgaben und Reasoning deutlich mehr'],
            ['Mistral AI (2025)', 'Le-Chat-Antwort mit 400 Tokens', '1,14 g CO₂e · 45 ml Wasser', 'Lebenszyklusanalyse inkl. vorgelagerter Emissionen (Serverherstellung)'],
            ['Li et al. (2023)', 'Training GPT-3 in US-Rechenzentren von Microsoft', 'bis zu 700.000 l direkt verdunstetes Frischwasser', 'Abschätzung; zeigt die Bedeutung des Wasser-Fußabdrucks']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Kritisch lesen: Warum die Zahlen so weit auseinanderliegen',
          md: `- **Systemgrenzen**: Nur Chip? Ganzer Server? Leerlauf? Kühlung? Herstellung der Hardware? Indirektes Wasser für die Stromerzeugung?
- **Median vs. Durchschnitt**: Ein *medianer* Textprompt sagt wenig über lange Dokumente, Bildgenerierung oder Reasoning-Modelle mit vielen Denk-Tokens.
- **Selbstauskunft**: Herstellerangaben sind wertvoll, aber selten unabhängig geprüft.
- **Aufgabentyp**: Luccioni et al. (2023) zeigen, dass generative Mehrzweck-Modelle für viele Aufgaben **um Größenordnungen** mehr Energie benötigen als aufgabenspezifische Modelle – selbst bei gleicher Parameterzahl.`
        },
        {
          type: 'handout',
          section: '3',
          page: 2,
          quote: 'Zukunftstrends: Automatisierung 2.0, generative Modelle, KI für Nachhaltigkeit, Demokratisierung von KI-Tools, Ethik & Explainability.',
          md: 'Das Handout nennt „KI für Nachhaltigkeit" – etwa Predictive Maintenance oder Anti-Food-Waste. Ebenso wichtig ist die Kehrseite: die **Nachhaltigkeit von KI selbst**. Ein guter Business Case rechnet beides: Einsparungen durch KI **und** ihren eigenen Verbrauch.'
        },
        {
          type: 'text',
          md: `### Der Skalierungseffekt
Im Workshop lautete die Kernbotschaft: **„1 Prompt ist wenig. 100.000 unnötige Prompts pro Monat sind ein schlecht designter Prozess."**

Rechenbeispiel aus dem Workshop: Ein Workflow mit **1.000 Anfragen pro Tag** ergibt rund **30.000 Anfragen pro Monat**. Mit dem Google-Medianwert (0,24 Wh) als grober Orientierung wären das etwa **7,2 kWh pro Monat** – mit Epoch-Schätzung (0,3 Wh) etwa 9 kWh. Bei langen Dokumenten, Bildern oder Reasoning-Modellen kann der Wert ein Vielfaches betragen. Wichtiger als die exakte Zahl ist die **Logik**: Verbrauch = Anfragen × Tokens × Modellgröße × Infrastruktur.`
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Rechne mit dem Google-Medianwert von 0,24 Wh pro Textprompt.',
          text: '100.000 unnötige Prompts pro Monat entsprechen etwa {{24|24 kWh|vierundzwanzig}} kWh pro Monat.',
          explain: '100.000 × 0,24 Wh = 24.000 Wh = 24 kWh. Grobe Orientierung: Der reale Wert hängt von Modell, Länge der Anfrage und Infrastruktur ab.'
        },
        {
          type: 'praxis',
          title: 'Den Morgen-Briefing-Workflow entschlacken',
          company: 'Lernwerk Weiterbildung gGmbH (fiktiv), Bildungsträger, Köln',
          scenario: `Der Briefing-Workflow aus Modul 10 wurde von mehreren Teams kopiert. Inzwischen laufen zwölf Varianten – teils stündlich statt täglich, mit dem größten verfügbaren Modell und ohne Filter vor dem KI-Schritt. Die Monatsrechnung ist gestiegen, Nutzen hat niemand gemessen.`,
          steps: [
            'n8n-Executions auswerten: Läufe pro Monat, Tokens pro Lauf, Modell je Variante.',
            'Nutzen erfragen: Welche Briefings werden gelesen? (Feedback-Link, kurze Umfrage)',
            'Konsolidieren: drei statt zwölf Varianten; Schedule von stündlich auf werktäglich.',
            'Vorfiltern: Duplikate und alte Artikel **vor** dem KI-Schritt entfernen – weniger Eingabe-Tokens.',
            'Modell verkleinern: Zusammenfassung mit kleinem Modell, nur bei Bedarf größeres Modell.',
            'Vorher-nachher dokumentieren: Läufe, Tokens, Kosten, Zufriedenheit.'
          ],
          takeaway: 'Die größte Einsparung liegt fast immer im **Prozessdesign**: weniger unnötige Läufe, weniger Tokens, kleinere Modelle – bei gleichem oder höherem Nutzen.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Wahr oder falsch: Die Google-Werte für einen medianen Textprompt lassen sich direkt auf ein Reasoning-Modell übertragen, das lange Dokumente analysiert.',
          answer: false,
          explain: 'Falsch. Der Median beschreibt typische kurze Textprompts in Gemini Apps. Lange Eingaben, lange Ausgaben und Reasoning erhöhen den Verbrauch deutlich (so auch Epoch AI).'
        }
      ]
    },
    {
      id: 'm12-l3',
      title: 'Token-Kosten & FinOps: Klein, gezielt, gemessen',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `KI-APIs rechnen nach **Tokens** ab – Textbausteinen von grob einem dreiviertel Wort im Englischen (im Deutschen oft etwas mehr Tokens pro Wort). Bezahlt werden **Eingabe-Tokens** (Prompt, System Message, Dokumente, Verlauf) und **Ausgabe-Tokens** (Antwort, bei Reasoning-Modellen auch Denk-Tokens). Ausgabe-Tokens sind meist deutlich teurer als Eingabe-Tokens.

Kosten und Energie hängen an denselben Stellschrauben – **was Geld spart, spart meist auch Strom**.`
        },
        {
          type: 'table',
          caption: 'Listenpreise pro 1 Mio. Tokens (Eingabe / Ausgabe), Stand 20.10.2026 – Größenordnungen, keine Empfehlung. Preise ändern sich häufig.',
          head: ['Anbieter / Modell', 'Eingabe', 'Ausgabe', 'Quelle'],
          rows: [
            ['Anthropic Claude Haiku 5.5 (Prompts bis 100.000 Tokens)', '0,10 $', '0,50 $', '[Claude Pricing](https://platform.claude.com/docs/en/about-claude/pricing)'],
            ['Anthropic Claude Sonnet 5.5', '2 $', '10 $', '[Claude Pricing](https://platform.claude.com/docs/en/about-claude/pricing)'],
            ['Anthropic Claude Opus 5.5', '4 $', '20 $', '[Claude Pricing](https://platform.claude.com/docs/en/about-claude/pricing)'],
            ['Anthropic Claude Fable 5.1', '10 $', '50 $', '[Claude Pricing](https://platform.claude.com/docs/en/about-claude/pricing)'],
            ['STACKIT gpt-oss-20b (Region EU01)', '0,15 €', '0,25 €', '[STACKIT AI Model Serving](https://stackit.com/de/produkte/data-ai/stackit-ai-model-serving)'],
            ['STACKIT gpt-oss-120b (Region EU01)', '0,45 €', '0,65 €', '[STACKIT AI Model Serving](https://stackit.com/de/produkte/data-ai/stackit-ai-model-serving)'],
            ['IONOS Mistral Small 24B Instruct', '0,10 €', '0,30 €', '[IONOS AI Model Hub](https://cloud.ionos.de/managed/ai-model-hub)']
          ]
        },
        {
          type: 'text',
          md: `### Rechenbeispiel: derselbe Workflow, verschiedene Modelle
30.000 Anfragen pro Monat (Workshop-Beispiel), je **1.500 Eingabe-** und **300 Ausgabe-Tokens** = **45 Mio. Eingabe-** und **9 Mio. Ausgabe-Tokens** pro Monat:

- Claude Haiku 5.5: 45 × 0,10 $ + 9 × 0,50 $ = **9 $**
- Claude Sonnet 5.5: 45 × 2 $ + 9 × 10 $ = **180 $**
- Claude Fable 5.1: 45 × 10 $ + 9 × 50 $ = **900 $**
- STACKIT gpt-oss-20b: 45 × 0,15 € + 9 × 0,25 € = **9 €**

Faktor **100** zwischen kleinstem und größtem Modell – für eine E-Mail-Klassifikation, bei der das kleine Modell im Test vielleicht genauso gut abschneidet.`
        },
        { type: 'interactive', widget: 'token-calculator', props: {} },
        {
          type: 'steps',
          items: [
            { title: '1 · Passende Modellgröße', md: 'Für Klassifikation, Extraktion und kurze Antworten mit kleinen Modellen starten; großes Modell nur, wenn der Test es zeigt. Optional **Routing**: kleines Modell entscheidet, ob ein großes nötig ist.' },
            { title: '2 · Prompt Caching', md: 'Gleichbleibende Teile (lange System Message, Handbuch) zwischenspeichern. Bei Anthropic kostet ein Cache-Treffer standardmäßig 0,1× des Eingabepreises (bei Opus 5.5/Sonnet 5.5: 0,05×); das Schreiben in den Cache kostet einmalig mehr (1,25× für 5 Minuten).' },
            { title: '3 · Batch-Verarbeitung', md: 'Was nicht sofort fertig sein muss (Nacht-Auswertungen, Massenklassifikation), über eine Batch-API schicken: bei Anthropic **50 % Rabatt** auf Ein- und Ausgabe.' },
            { title: '4 · Tokens sparen', md: 'Vorfiltern, kürzen, nur relevante Dokumentteile mitgeben (RAG), Ausgabelänge begrenzen, strukturierte Kurzformate (JSON) statt Prosa.' },
            { title: '5 · Lokal oder EU-Open-Weight', md: 'Für hohe, gleichmäßige Volumen kann ein lokales Modell oder ein offenes Modell bei einem EU-Anbieter günstiger sein – Hardware, Betrieb und Qualität ehrlich mitrechnen.' },
            { title: '6 · Trigger-Design', md: 'Läuft die Automatisierung nur bei echtem Nutzen? Zeitpläne, Filter und Bedingungen vor dem KI-Schritt verhindern Leerläufe.' }
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz aus dem Workshop',
          md: 'Der nachhaltigste KI-Workflow ist derjenige, der mit dem **kleinsten passenden Modell** echten Nutzen erzeugt.'
        },
        {
          type: 'text',
          md: `### FinOps für KI
**FinOps** ist eine Praxis aus dem Cloud-Kostenmanagement. Die FinOps Foundation beschreibt drei Phasen, die iterativ durchlaufen werden: **Inform** (Transparenz: Wer verbraucht was?), **Optimize** (Verbesserungen identifizieren) und **Operate** (Änderungen umsetzen und dauerhaft steuern). Übertragen auf KI heißt das: Tokens und Kosten **pro Use Case** sichtbar machen, Budgets und Alarme setzen, Modelle regelmäßig neu bewerten.`
        },
        {
          type: 'handout',
          section: '9',
          page: 5,
          quote: 'Kontinuierliches Monitoring, A/B-Tests, Feedback-Loops',
          md: 'Genau so funktioniert KI-FinOps: Kosten und Tokens laufend messen, kleines gegen großes Modell im **A/B-Test** vergleichen, Nutzerfeedback als Qualitätsmaß nutzen.'
        },
        {
          type: 'praxis',
          title: 'FinOps-Review im Onlinehandel',
          company: 'Gartenwelt Online GmbH (fiktiv), Onlineshop, 45 Mitarbeitende, Bremen',
          scenario: `Der Shop nutzt KI für Produkttexte, Kundenservice-Antwortentwürfe und die Klassifikation von Retourengründen. Die monatliche API-Rechnung hat sich in einem Quartal verdreifacht. Die Geschäftsführung will wissen, warum – und was sich ändern lässt.`,
          steps: [
            '**Inform**: Kosten nach Use Case aufschlüsseln (separate API-Schlüssel oder Projekte je Workflow); Tokens pro Anfrage auswerten.',
            'Ursache finden: Der Kundenservice-Workflow schickt bei jeder Antwort den kompletten Gesprächsverlauf und das ganze Retourenhandbuch mit.',
            '**Optimize**: Handbuch als gecachten Prompt-Präfix bzw. per RAG nur relevante Abschnitte; Verlauf auf die letzten Nachrichten begrenzen.',
            'Retourenklassifikation per A/B-Test auf ein kleines Modell umstellen; Produkttexte nachts per Batch erzeugen.',
            '**Operate**: Monatsbudget je Use Case mit Alarm bei 80 %; Kennzahl „Kosten pro bearbeitetem Ticket" ins Reporting.'
          ],
          takeaway: 'Ohne Aufschlüsselung **pro Use Case** gibt es keine Steuerung. Erst Transparenz, dann Optimierung, dann dauerhafte Regeln.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Workflow schickt 30.000-mal pro Monat dasselbe lange Handbuch als Teil des Prompts mit. Welcher Hebel senkt die Kosten hier am gezieltesten?',
          options: ['Größeres Modell wählen', 'Prompt Caching bzw. RAG für das Handbuch', 'Mehr Ausgabe-Tokens erlauben', 'Den Workflow stündlich statt täglich laufen lassen'],
          answer: 1,
          explain: 'Gleichbleibende Prompt-Teile lassen sich cachen (Cache-Treffer kosten nur einen Bruchteil des Eingabepreises), oder per RAG werden nur relevante Abschnitte mitgeschickt.'
        }
      ]
    },
    {
      id: 'm12-l4',
      title: 'Regulierung: Energieeffizienzgesetz, EU-Richtlinie & AI Act',
      minutes: 20,
      blocks: [
        {
          type: 'text',
          md: `Nachhaltigkeit von KI ist nicht nur freiwillig: In Deutschland regelt das **Energieeffizienzgesetz (EnEfG)** seit 2023 Anforderungen an Rechenzentren, auf EU-Ebene verlangen die **Energieeffizienzrichtlinie** und der **AI Act** Transparenz über Energieverbrauch. Für dich als KI-Manager:in sind vor allem zwei Fragen relevant: *Welche Angaben kann ich von meinen Dienstleistern verlangen?* und *Welche Pflichten treffen uns selbst?*`
        },
        {
          type: 'table',
          caption: 'EnEfG – Anforderungen an Rechenzentren (§§ 11–15, Fassung laut gesetze-im-internet.de, abgerufen Oktober 2026)',
          head: ['Regelung', 'Inhalt'],
          rows: [
            ['§ 11 Abs. 1 – Bestandsrechenzentren (Betrieb vor 1.7.2026)', 'Energieverbrauchseffektivität (PUE) ≤ **1,5** ab 1.7.2027 und ≤ **1,3** ab 1.7.2030 im Jahresdurchschnitt'],
            ['§ 11 Abs. 2 – neue Rechenzentren (Betrieb ab 1.7.2026)', 'PUE ≤ **1,2**; Anteil wiederverwendeter Energie (Abwärme) mind. **10 %**, steigend auf 15 % (ab 1.7.2027) und 20 % (ab 1.7.2028)'],
            ['§ 11 Abs. 5 – Strom', 'bilanziell **50 %** erneuerbarer Strom ab 1.1.2024, **100 %** ab 1.1.2027'],
            ['§ 12', 'Energie- und Umweltmanagementsysteme in Rechenzentren'],
            ['§§ 13, 14', 'Informationspflicht der Betreiber (jährlich bis 31. März) und Energieeffizienzregister für Rechenzentren'],
            ['§ 15 – Kundenverhältnis', 'Betreiber, die Dienstleistungen für Dritte anbieten, müssen ab 1.1.2024 die **den Kund:innen direkt zuzuordnenden Energieverbräuche pro Jahr** darstellen']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Praxis-Hebel § 15 EnEfG',
          md: 'Nutzt ihr Colocation oder Server bei einem Rechenzentrumsbetreiber in Deutschland, könnt ihr euch auf § 15 EnEfG berufen und die euch zuzuordnenden Jahresverbräuche anfordern – eine solide Grundlage für den Nachhaltigkeitsbericht. Bei großen internationalen Cloud- und KI-Diensten hilft das nur, soweit sie unter das Gesetz fallen; dort bleiben Herstellerangaben und Spannen.'
        },
        {
          type: 'text',
          md: `### EU-Energieeffizienzrichtlinie
Die Richtlinie **(EU) 2023/1791** verpflichtet in Art. 12 Betreiber von Rechenzentren ab **500 kW** installierter IT-Leistung, jährlich Kennzahlen zur Energieeffizienz an eine **europäische Datenbank** zu melden (Details zu den Kennzahlen – u. a. Energieverbrauch, Abwärmenutzung, Wasser, erneuerbare Energien – regelt die Delegierte Verordnung (EU) 2024/1364). Das deutsche EnEfG setzt diese Vorgaben um und geht teilweise darüber hinaus.

### AI Act: Energie in der GPAI-Dokumentation
Anbieter von **KI-Modellen mit allgemeinem Verwendungszweck (GPAI)** müssen nach Art. 53 eine technische Dokumentation führen. Anhang XI nennt dort ausdrücklich den **„bekannten oder geschätzten Energieverbrauch des Modells"**; ist er unbekannt, darf er auf Angaben zu den genutzten Rechenressourcen gestützt werden. Diese Pflichten gelten seit dem **2. August 2025**. Der freiwillige GPAI-Verhaltenskodex der EU-Kommission enthält dafür ein *Model Documentation Form*.

**Wichtig:** Diese Pflicht trifft die **Modellanbieter**, nicht euch als Anwender. Aber: Ihr könnt nachgelagerte Informationen anfragen und in die Anbieterauswahl einbeziehen.`
        },
        {
          type: 'handout',
          section: '15',
          page: 8,
          quote: 'EU AI Act – Regulatorischer Rahmen (Entwurf 2024)',
          md: 'Diese Angabe im Handout ist veraltet – siehe Aktualisierung.'
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Handout: Der AI Act ist kein Entwurf mehr',
          md: `Die KI-Verordnung **(EU) 2024/1689** ist am **1. August 2024** in Kraft getreten und gilt gestaffelt; die Pflichten für GPAI-Modelle (inkl. Energieangaben in der Dokumentation) gelten seit dem **2. August 2025**. Mit der **„Digital-Omnibus-Verordnung zur KI" (EU) 2026/1744** vom 8. Juli 2026 (ABl. vom 24.07.2026) wurden u. a. Fristen geändert: Die Hochrisiko-Pflichten für eigenständige Systeme nach Anhang III gelten nun ab dem **2. Dezember 2027**, für KI in regulierten Produkten nach Anhang I ab dem **2. August 2028**. Prüfe Fristen stets in der konsolidierten Fassung auf EUR-Lex.`,
          sources: [
            { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung) – EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
            { title: 'Verordnung (EU) 2026/1744 (Digital-Omnibus zur KI) – EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj?locale=de' },
            { title: 'Gibson Dunn – EU AI Act Omnibus: Postponed High-Risk Deadlines', url: 'https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/' }
          ]
        },
        {
          type: 'steps',
          items: [
            { title: 'Frage 1 · Braucht die Aufgabe ein großes Modell?', md: 'Klassifikation, Extraktion, kurze Antworten: meist nein. Erst klein testen.' },
            { title: 'Frage 2 · Reicht ein kleineres oder lokales Modell?', md: 'Für Standardaufgaben mit hohem Volumen oft ja – mit Qualitätstest belegen.' },
            { title: 'Frage 3 · Läuft die Automatisierung nur bei echtem Nutzen?', md: 'Trigger, Zeitplan und Filter prüfen: Keine Läufe „auf Vorrat".' },
            { title: 'Dokumentieren', md: 'Modellwahl, Volumen, Kosten und geschätzten Verbrauch je Use Case festhalten – für Governance, Nachhaltigkeitsbericht und Anbieterauswahl.' }
          ]
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
          takeaway: 'Nachhaltigkeit wird steuerbar, wenn sie **messbar in Verträgen** steht: Standort, PUE, erneuerbarer Strom, Verbrauchsberichte und Modellwahl.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Vorgabe der richtigen Regelung zu.',
          pairs: [
            ['PUE ≤ 1,2 für neue Rechenzentren ab 1.7.2026', '§ 11 Abs. 2 EnEfG'],
            ['100 % erneuerbarer Strom (bilanziell) ab 1.1.2027', '§ 11 Abs. 5 EnEfG'],
            ['Energieverbräuche gegenüber Kund:innen darstellen', '§ 15 EnEfG'],
            ['Bekannter oder geschätzter Energieverbrauch des GPAI-Modells', 'AI Act, Anhang XI']
          ],
          explain: 'EnEfG § 11 regelt Effizienz und Strom, § 15 das Kundenverhältnis; der AI Act verlangt in Anhang XI Energieangaben in der technischen Dokumentation von GPAI-Modellen.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'multi',
      q: 'Welche Bereiche gehören zum Ressourcenverbrauch von KI? (Mehrfachauswahl)',
      options: ['Training', 'Inferenz', 'Herstellung von Hardware', 'Kühlung im Rechenzentrum'],
      answer: [0, 1, 2, 3],
      explain: 'Alle vier tragen bei: Training, jede Nutzung (Inferenz), graue Emissionen der Hardware und der Infrastruktur-Overhead inkl. Kühlwasser.'
    },
    {
      type: 'single',
      q: 'Welche Werte nannte Google im August 2025 für einen medianen Gemini-Apps-Textprompt?',
      options: ['2,4 Wh · 3 g CO₂e · 26 ml Wasser', '0,24 Wh · 0,03 g CO₂e · 0,26 ml Wasser', '0,024 Wh · 0,3 g CO₂e · 2,6 ml Wasser', '24 Wh · 30 g CO₂e · 260 ml Wasser'],
      answer: 1,
      explain: 'Google: 0,24 Wh, 0,03 g CO₂e, 0,26 ml Wasser (Daten aus Mai 2025, umfassende Methodik inkl. Leerlauf und PUE).'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Die Messwerte von Google, Mistral und Epoch AI sind direkt miteinander vergleichbar.',
      answer: false,
      explain: 'Falsch. Sie beziehen sich auf unterschiedliche Modelle und Anfragen und verwenden verschiedene Systemgrenzen (z. B. mit oder ohne Hardware-Herstellung).'
    },
    {
      type: 'single',
      q: 'Wie viel Strom verbrauchten Rechenzentren weltweit 2024 laut IEA?',
      options: ['ca. 41,5 TWh', 'ca. 415 TWh (rund 1,5 % des weltweiten Stromverbrauchs)', 'ca. 4.150 TWh', 'ca. 945 TWh'],
      answer: 1,
      explain: 'Rund 415 TWh bzw. 1,5 %. Für 2030 projiziert die IEA im Base Case rund 945 TWh.'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Workshop-Merksatz.',
      text: 'Der nachhaltigste KI-Workflow ist derjenige, der mit dem {{kleinsten}} passenden Modell echten {{Nutzen}} erzeugt.',
      explain: 'Kleinstes passendes Modell + echter Nutzen = weniger Kosten, weniger Energie, oft schnellere Antworten.'
    },
    {
      type: 'single',
      q: 'Ein Workflow: 30.000 Anfragen/Monat, je 1.500 Eingabe- und 300 Ausgabe-Tokens, Modell mit 2 $ / 10 $ pro 1 Mio. Tokens. Wie hoch sind die monatlichen Tokenkosten?',
      options: ['18 $', '90 $', '180 $', '1.800 $'],
      answer: 2,
      explain: '45 Mio. Eingabe × 2 $ = 90 $; 9 Mio. Ausgabe × 10 $ = 90 $; zusammen 180 $.'
    },
    {
      type: 'match',
      q: 'Ordne den Kostenhebel seiner Wirkung zu.',
      pairs: [
        ['Prompt Caching', 'gleichbleibende Prompt-Teile werden günstiger erneut gelesen'],
        ['Batch-API', 'asynchrone Verarbeitung mit Rabatt (bei Anthropic 50 %)'],
        ['Kleineres Modell', 'niedrigerer Preis und Verbrauch pro Token'],
        ['Vorfiltern im Workflow', 'weniger Anfragen und weniger Eingabe-Tokens']
      ],
      explain: 'Alle vier Hebel senken Kosten und in der Regel auch den Energieverbrauch.'
    },
    {
      type: 'order',
      q: 'Bringe die FinOps-Phasen (FinOps Foundation) in die richtige Reihenfolge.',
      items: ['Inform', 'Optimize', 'Operate'],
      explain: 'Erst Transparenz schaffen (Inform), dann Verbesserungen identifizieren (Optimize), dann umsetzen und dauerhaft steuern (Operate) – und den Zyklus wiederholen.'
    },
    {
      type: 'single',
      q: 'Welche PUE müssen Rechenzentren, die ab dem 1. Juli 2026 den Betrieb aufnehmen, nach § 11 EnEfG erreichen?',
      options: ['≤ 2,0', '≤ 1,5', '≤ 1,3', '≤ 1,2'],
      answer: 3,
      explain: '§ 11 Abs. 2 EnEfG: PUE ≤ 1,2 für neue Rechenzentren ab 1.7.2026 (spätestens zwei Jahre nach Inbetriebnahme im Jahresdurchschnitt).'
    },
    {
      type: 'tf',
      q: 'Wahr oder falsch: Der AI Act verlangt von Anbietern von GPAI-Modellen, den bekannten oder geschätzten Energieverbrauch des Modells zu dokumentieren.',
      answer: true,
      explain: 'Wahr. Anhang XI (technische Dokumentation nach Art. 53) nennt ausdrücklich den bekannten oder geschätzten Energieverbrauch; die Pflichten gelten seit 2. August 2025.'
    },
    {
      type: 'multi',
      q: 'Welche drei Fragen aus dem Workshop helfen, KI-Workflows nachhaltiger zu gestalten? (Mehrfachauswahl)',
      options: [
        'Braucht die Aufgabe ein großes Modell?',
        'Reicht ein kleineres oder lokales Modell?',
        'Läuft die Automatisierung nur bei echtem Nutzen?',
        'Welches Modell steht in der Rangliste ganz oben?'
      ],
      answer: [0, 1, 2],
      explain: 'Die drei Workshop-Fragen zielen auf passende Modellgröße und Prozessdesign – eine Rangliste sagt nichts über den Bedarf deiner Aufgabe.'
    },
    {
      type: 'single',
      q: 'Was regelt § 15 EnEfG?',
      options: [
        'Ein Verbot von KI-Rechenzentren',
        'Die Pflicht von Rechenzentrumsbetreibern, Kund:innen die direkt zuzuordnenden Energieverbräuche pro Jahr darzustellen',
        'Die Preise für KI-APIs',
        'Die Kennzeichnung von KI-generierten Inhalten'
      ],
      answer: 1,
      explain: '§ 15 EnEfG („Information und Beratung im Kundenverhältnis") gilt seit 1.1.2024 für Betreiber, die Dienstleistungen für Dritte anbieten.'
    }
  ],
  exercises: [
    {
      id: 'm12-e1',
      title: 'Kosten- und Energieabschätzung für einen KI-Workflow',
      scenario: `Die **Versicherungsagentur Hoffmann & Söhne (fiktiv)**, 35 Mitarbeitende, plant einen n8n-Workflow, der eingehende Schadensmeldungen per E-Mail zusammenfasst und klassifiziert. Erwartet werden **800 Mails pro Werktag** (rund 17.600 pro Monat bei 22 Werktagen). Pro Mail rechnet ihr mit **2.000 Eingabe-Tokens** (Mail + System Message) und **250 Ausgabe-Tokens**. Zur Wahl stehen ein kleines Modell (0,10 $ / 0,50 $ pro 1 Mio. Tokens) und ein großes Modell (10 $ / 50 $ pro 1 Mio. Tokens).`,
      task: `Berechne die monatlichen Tokenkosten für beide Modelle und schätze den Energiebedarf grob mit dem Google-Medianwert (0,24 Wh pro Anfrage) ab – mit kritischer Einordnung. Schlage drei Maßnahmen vor, die Kosten und Verbrauch weiter senken, und beschreibe, wie du die Modellwahl absicherst.`,
      deliverable: 'Rechnung + 150–300 Wörter Begründung',
      template: 'Tokens pro Monat: Eingabe … Mio. / Ausgabe … Mio.\nKosten kleines Modell: …\nKosten großes Modell: …\nEnergie (grob): …\nEinordnung: …\nMaßnahmen: 1. … 2. … 3. …\nAbsicherung der Modellwahl: …',
      rubric: [
        { criterion: 'Berechnet Tokenmengen und Kosten korrekt', keywords: ['35,2', '35.2', '4,4', '4.4', '5,72', '5.72', '572'], min: 2, hint: 'Multipliziere Anfragen × Tokens und rechne in Millionen um; dann mit dem Preis pro 1 Mio. Tokens multiplizieren.' },
        { criterion: 'Schätzt den Energiebedarf und ordnet die Unsicherheit ein', keywords: ['kwh', '4,2', '4.2', 'median', 'spanne', 'unsicher'], min: 2, hint: '17.600 × 0,24 Wh – und warum ist das nur eine grobe Orientierung?' },
        { criterion: 'Nennt wirksame Maßnahmen zur Reduktion', keywords: ['cach', 'batch', 'kleiner', 'filter', 'kürz', 'lokal', 'trigger'], min: 3, hint: 'Denke an Prompt-Teile, die sich nie ändern, an Verarbeitung, die nicht sofort fertig sein muss, und an Vorfiltern.' },
        { criterion: 'Sichert die Modellwahl mit einem Test ab', keywords: ['test', 'a/b', 'evaluat', 'stichprobe', 'qualität'], min: 1, hint: 'Woher weißt du, dass das kleine Modell gut genug ist?' }
      ],
      hints: [
        'Rechne zuerst die Tokens pro Monat: 17.600 × 2.000 und 17.600 × 250.',
        'Kleines Modell: Eingabe-Mio. × 0,10 $ + Ausgabe-Mio. × 0,50 $. Großes Modell analog mit 10 $ und 50 $. Für Energie: 17.600 × 0,24 Wh in kWh umrechnen.',
        'Ergebnis-Größenordnung: kleines Modell einstellige Dollarbeträge, großes Modell mehrere Hundert Dollar; Energie im einstelligen kWh-Bereich – mit dem Hinweis, dass lange Mails und große Modelle mehr verbrauchen. Maßnahmen: Caching der System Message, Batch für nicht eilige Fälle, Vorfiltern/Kürzen, A/B-Test.'
      ],
      sample: `**Tokens pro Monat:** Eingabe 17.600 × 2.000 = 35,2 Mio.; Ausgabe 17.600 × 250 = 4,4 Mio.

**Kosten kleines Modell:** 35,2 × 0,10 $ = 3,52 $ + 4,4 × 0,50 $ = 2,20 $ → **5,72 $ pro Monat**.
**Kosten großes Modell:** 35,2 × 10 $ = 352 $ + 4,4 × 50 $ = 220 $ → **572 $ pro Monat** (Faktor 100).

**Energie (grob):** 17.600 × 0,24 Wh ≈ 4.224 Wh ≈ **4,2 kWh pro Monat**. Einordnung: Der Google-Wert ist ein *Median* für kurze Gemini-Textprompts mit Googles Infrastruktur. Unsere Mails sind länger, Modell und Rechenzentrum andere – realistisch ist eine **Spanne**, beim großen Modell eher deutlich höher (Mistral: Wirkung etwa proportional zur Modellgröße).

**Maßnahmen:** 1. System Message und Kategorienbeschreibung per **Prompt Caching** wiederverwenden. 2. Signaturen, Zitatverläufe und Anhänge-Text **vor** dem KI-Schritt entfernen bzw. kürzen. 3. Nicht dringende Meldungen (z. B. Nachreichungen) nachts per **Batch** verarbeiten; dringende sofort.

**Absicherung:** 100 anonymisierte Schadensmeldungen als Testset; kleines und großes Modell im **A/B-Test** vergleichen (Kategorie korrekt? Zusammenfassung vollständig?). Wenn das kleine Modell ≥ 95 % der Qualität erreicht, wird es Standard; das große Modell nur für unklare Fälle (Routing).`
    },
    {
      id: 'm12-e2',
      title: 'Nachhaltigkeitsleitlinie für KI im Unternehmen',
      scenario: `Die **Stadtwerke Rheintal GmbH (fiktiv)**, 400 Mitarbeitende, wollen ihre KI-Nutzung in den Nachhaltigkeitsbericht aufnehmen und eine interne Leitlinie „Nachhaltige KI" verabschieden. Es gibt einen Enterprise-Chat, mehrere n8n-Workflows und ein eigenes Rechenzentrum mit Colocation-Flächen bei einem regionalen Anbieter.`,
      task: `Formuliere eine Leitlinie mit 6–10 Punkten. Sie soll Modellwahl, Prozessdesign, Messung/Reporting und Anforderungen an Dienstleister abdecken und mindestens zwei rechtliche Bezüge (EnEfG, AI Act) korrekt nutzen.`,
      deliverable: 'Leitlinie als nummerierte Liste, 200–350 Wörter',
      template: 'Leitlinie „Nachhaltige KI" der Stadtwerke Rheintal\n1. …\n2. …',
      rubric: [
        { criterion: 'Regelt passende Modellwahl', keywords: ['klein', 'passend', 'modell', 'lokal'], min: 2, hint: 'Welches Modell soll standardmäßig eingesetzt werden?' },
        { criterion: 'Regelt Prozessdesign gegen unnötige Läufe', keywords: ['trigger', 'filter', 'nutzen', 'zeitplan', 'unnötig', 'batch', 'cach'], min: 2, hint: 'Wie verhinderst du 100.000 unnötige Prompts?' },
        { criterion: 'Legt Messung und Reporting fest', keywords: ['mess', 'token', 'kwh', 'bericht', 'kennzahl', 'kpi', 'monitor'], min: 2, hint: 'Welche Zahlen werden regelmäßig erhoben und wo berichtet?' },
        { criterion: 'Nutzt rechtliche Bezüge korrekt', keywords: ['enefg', '§ 15', '§ 11', 'pue', 'ai act', 'anhang xi', 'gpai'], min: 2, hint: 'Welche Angaben kannst du vom Rechenzentrumsbetreiber bzw. Modellanbieter verlangen?' }
      ],
      hints: [
        'Gliedere in vier Bereiche: Modellwahl, Prozessdesign, Messung, Dienstleister.',
        'Nutze die drei Workshop-Fragen als Kern der Leitlinie und ergänze Caching/Batch und Vorfiltern.',
        'Für Dienstleister: § 15 EnEfG (Verbräuche gegenüber Kund:innen), § 11 EnEfG (PUE, erneuerbarer Strom); für Modellanbieter: Energieangaben nach AI Act Anhang XI (GPAI) anfragen.'
      ],
      sample: `**Leitlinie „Nachhaltige KI" der Stadtwerke Rheintal**
1. **Kleinstes passendes Modell**: Neue Use Cases starten mit einem kleinen Modell; ein größeres wird nur eingesetzt, wenn ein dokumentierter Test es erfordert.
2. **Drei Fragen vor jedem Workflow**: Braucht die Aufgabe ein großes Modell? Reicht ein kleineres oder lokales? Läuft die Automatisierung nur bei echtem Nutzen?
3. **Prozessdesign**: Filter und Bedingungen *vor* dem KI-Schritt; Zeitpläne so selten wie fachlich nötig; keine Läufe „auf Vorrat".
4. **Effizienztechniken**: Prompt Caching für gleichbleibende Prompt-Teile, Batch-Verarbeitung für nicht eilige Aufgaben, Ausgabelänge begrenzen.
5. **Messung**: Für jeden Use Case werden monatlich Anfragen, Tokens und Kosten erfasst (n8n-Executions, Abrechnungen); daraus wird der Energiebedarf als Spanne geschätzt, Annahmen werden offengelegt.
6. **Reporting**: Kennzahlen „Kosten pro Vorgang" und „geschätzte kWh pro Monat" fließen in den Nachhaltigkeitsbericht.
7. **Rechenzentrum & Colocation**: Vom Colocation-Anbieter werden die uns zuzuordnenden Jahresverbräuche nach **§ 15 EnEfG** sowie PUE und Anteil erneuerbaren Stroms (Bezug **§ 11 EnEfG**) angefordert.
8. **Modellanbieter**: Bei der Auswahl werden Angaben zum Energieverbrauch der Modelle angefragt (Bezug **AI Act, Anhang XI** für GPAI-Modelle) und mit 10 % in der Bewertung berücksichtigt.
9. **Review**: Die Leitlinie und alle Workflows mit mehr als 10.000 Läufen pro Monat werden jährlich überprüft.`
    }
  ],
  glossary: [
    { term: 'Inferenz', def: 'Nutzung eines trainierten Modells – jede einzelne Anfrage bzw. jeder Workflow-Durchlauf.' },
    { term: 'Token', def: 'Abrechnungs- und Verarbeitungseinheit von Sprachmodellen (Wortbestandteil); bezahlt werden Eingabe- und Ausgabe-Tokens.' },
    { term: 'PUE (Energieverbrauchseffektivität)', def: 'Verhältnis von Gesamtenergie eines Rechenzentrums zur Energie der IT-Geräte; 1,0 wäre ideal. Das EnEfG schreibt Grenzwerte vor.' },
    { term: 'CO₂e', def: 'CO₂-Äquivalente: Treibhausgasemissionen, umgerechnet auf die Klimawirkung von CO₂.' },
    { term: 'Prompt Caching', def: 'Zwischenspeichern gleichbleibender Prompt-Teile, damit sie bei Folgeanfragen günstiger (und schneller) verarbeitet werden.' },
    { term: 'Batch-API', def: 'Asynchrone Verarbeitung vieler Anfragen ohne Echtzeitanspruch, meist zu reduzierten Preisen (bei Anthropic 50 % Rabatt).' },
    { term: 'FinOps', def: 'Praxis des Cloud-Kostenmanagements mit den Phasen Inform, Optimize und Operate; übertragbar auf KI-Kosten.' },
    { term: 'EnEfG', def: 'Energieeffizienzgesetz (Deutschland); §§ 11–15 regeln u. a. PUE-Grenzwerte, erneuerbaren Strom, Abwärme, Register und Kundeninformation für Rechenzentren.' },
    { term: 'GPAI-Modell', def: 'KI-Modell mit allgemeinem Verwendungszweck nach AI Act; Anbieter müssen u. a. eine technische Dokumentation inkl. Energieverbrauch führen.' }
  ],
  sources: [
    { title: 'How much energy does Google’s AI use? We did the math', publisher: 'Google Cloud Blog', year: 2025, type: 'Artikel', url: 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference' },
    { title: 'Measuring the environmental impact of delivering AI at Google Scale (Elsworth et al.)', publisher: 'arXiv', year: 2025, type: 'Paper', url: 'https://arxiv.org/abs/2508.15734' },
    { title: 'Energy and AI', publisher: 'International Energy Agency (IEA)', year: 2025, type: 'Studie', url: 'https://www.iea.org/reports/energy-and-ai' },
    { title: 'Our contribution to a global environmental standard for AI', publisher: 'Mistral AI', year: 2025, type: 'Studie', url: 'https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai' },
    { title: 'How much energy does ChatGPT use?', publisher: 'Epoch AI', year: 2025, type: 'Artikel', url: 'https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use' },
    { title: 'Power Hungry Processing: Watts Driving the Cost of AI Deployment? (Luccioni et al.)', publisher: 'arXiv', year: 2023, type: 'Paper', url: 'https://arxiv.org/abs/2311.16863' },
    { title: 'Making AI Less "Thirsty": Uncovering and Addressing the Secret Water Footprint of AI Models (Li et al.)', publisher: 'arXiv', year: 2023, type: 'Paper', url: 'https://arxiv.org/abs/2304.03271' },
    { title: 'Pricing (inkl. Prompt Caching und Batch)', publisher: 'Anthropic / Claude Docs', year: 2026, type: 'Doku', url: 'https://platform.claude.com/docs/en/about-claude/pricing' },
    { title: 'FinOps Framework – Phases', publisher: 'FinOps Foundation', year: 2026, type: 'Leitfaden', url: 'https://www.finops.org/framework/phases/' },
    { title: 'Energieeffizienzgesetz (EnEfG), § 11 Klimaneutrale Rechenzentren', publisher: 'Bundesministerium der Justiz – gesetze-im-internet.de', year: 2023, type: 'Gesetz', url: 'https://www.gesetze-im-internet.de/enefg/__11.html' },
    { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', publisher: 'EUR-Lex', year: 2024, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { title: 'Verordnung (EU) 2026/1744 (Digital-Omnibus-Verordnung zur KI)', publisher: 'EUR-Lex', year: 2026, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj?locale=de' }
  ]
}
