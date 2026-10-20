export default {
  id: 'k6',
  order: 6,
  chapter: 6,
  title: 'KI-Betrieb und kontinuierliche Verbesserung',
  subtitle: 'MLOps, Monitoring, Drift, Nachtraining, A/B-Tests und nachhaltiger Betrieb – damit KI auch im zweiten Jahr noch Nutzen stiftet',
  icon: 'gauge',
  isNew: false,
  minutes: 225,
  skript: [
    { chapter: '6', title: 'KI-Betrieb und kontinuierliche Verbesserung', page: 132 },
    { chapter: '6.1', title: 'Einführung in MLOps', page: 133 },
    { chapter: '6.2', title: 'Modellüberwachung und Leistungsverfolgung', page: 136 },
    { chapter: '6.3', title: 'Drift-Erkennung und Modellwartung', page: 141 },
    { chapter: '6.4', title: 'Kontinuierliche Verbesserung und Nachhaltigkeit', page: 146 }
  ],
  objectives: [
    'Du erklärst, warum ML-Systeme anders betrieben werden müssen als klassische Software, kennst den MLOps-Lebenszyklus und ordnest dein Unternehmen einer MLOps-Reifestufe zu.',
    'Du entwirfst eine Überwachung auf technischer, betrieblicher und geschäftlicher Ebene – mit Dashboards, Warnschwellen, Schweregraden, Zuständigkeiten und Feedback-Erhebung.',
    'Du berechnest und interpretierst Accuracy, Precision, Recall und F1 und erkennst, welche Metrik für welchen Geschäftsfall zählt.',
    'Du unterscheidest Daten- und Konzeptdrift, kennst Verfahren zur Drift-Erkennung (z. B. KS-Test, PSI) und wählst eine passende Nachtrainingsstrategie mit Validierung.',
    'Du planst kontinuierliche Verbesserung mit Rückmeldungsschleifen, A/B-Tests, Modellversionierung und Außerbetriebnahme.',
    'Du bewertest die ökologische, wirtschaftliche und organisatorische Nachhaltigkeit des KI-Betriebs und steuerst Token-Kosten mit FinOps.'
  ],
  lessons: [
    // ───────────────────────── 6.1 ─────────────────────────
    {
      id: 'k6-l1',
      title: '6.1 Einführung in MLOps',
      minutes: 30,
      skript: { chapter: '6.1', page: 133 },
      blocks: [
        {
          type: 'text',
          md: `Der Go-live wird gefeiert, die Projektgruppe löst sich auf – und ein halbes Jahr später wundert sich jemand, warum die Prognosen so danebenliegen. Das ist eines der häufigsten Muster im KI-Betrieb. Der wahre Wert einer KI-Investition zeigt sich nicht beim Start, sondern im **dauerhaft guten Betrieb über Monate und Jahre**. Dafür gibt es **MLOps**.`
        },
        {
          type: 'skript',
          chapter: '6.1',
          page: 133,
          quote: 'Was du nicht messen kannst, kannst du auch nicht verbessern.',
          md: `- **KI-Umsetzungslücke:** Laut Branchenuntersuchungen schaffen es 60–90 % der KI-Modelle nie in den Produktivbetrieb, und rund 75 % der übrigen liefern keinen nachhaltigen Nutzen – vor allem wegen unzureichender Betriebspraktiken, nicht wegen technischer Grenzen.
- **MLOps** (Machine Learning Operations) umfasst Praktiken, Werkzeuge und Abläufe, um ML-Systeme zuverlässig bereitzustellen, zu überwachen und zu warten – die **Brücke zwischen Data-Science-Experiment und Geschäftsnutzen**.
- **Warum anders als Software:** Code verhält sich morgen wie heute; ein Modell verliert Leistung, wenn sich die Welt ändert (Kundenverhalten, Märkte, Datenmuster). Es reicht nicht zu prüfen, *ob* es läuft – sondern *ob es richtig vorhersagt*. Und Modelle müssen nachtrainiert werden.
- **Lebenszyklus:** Entwicklung → Bereitstellung → Überwachung → Wartung, als Kreislauf.
- **Reifestufen 0–3:** manuell → automatisiertes Training → automatisierte Bereitstellung (CI/CD) → fortlaufendes Training.
- **Herausforderungen:** Abhängigkeiten, Reproduzierbarkeit, Skalierbarkeit, Zusammenarbeit. **Nutzen:** Modelle zwei- bis dreimal schneller produktiv, Probleme vor dem Schaden erkannt, mehr Vertrauen.
- **Tipp:** Mit Überwachung und Benachrichtigungen beginnen, Automatisierung schrittweise entlang echter Engpässe aufbauen.`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Wie belastbar sind die Ausfallquoten?',
          md: 'Die im Skript genannten Quoten kursieren seit Jahren in Branchenumfragen; Methodik und Definitionen („Produktivbetrieb", „Nutzen") sind oft unklar. Eine viel zitierte Einordnung liefert RAND (2024): Nach einigen Schätzungen scheitern **mehr als 80 %** der KI-Projekte – etwa doppelt so viele wie IT-Projekte ohne KI. Als Hauptursachen nennen die Interviewten u. a. unklare Problemdefinition, fehlende Daten und fehlende Infrastruktur für den Betrieb. ([RAND, The Root Causes of Failure for Artificial Intelligence Projects, 2024](https://www.rand.org/pubs/research_reports/RRA2680-1.html)) Die Botschaft ist dieselbe: **Betrieb ist kein Nachgedanke.**'
        },
        {
          type: 'text',
          md: `### Von DevOps zu MLOps

MLOps hat sich aus **DevOps** entwickelt, das Softwareentwicklung durch automatisierte Bereitstellung, Überwachung und Betrieb verändert hat. Der Unterschied: Bei DevOps stellst du *Code* bereit, der sich vorhersagbar verhält. Bei MLOps stellst du ein *Modell* bereit, dessen Verhalten davon abhängt, wie ähnlich die Daten im Einsatz den Trainingsdaten sind.

Ein viel zitiertes Paper von Google-Forschenden („Hidden Technical Debt in Machine Learning Systems", NeurIPS 2015) zeigt zudem: Der eigentliche ML-Code ist nur ein **kleiner Teil** eines realen ML-Systems – der Rest ist Datensammlung, Konfiguration, Monitoring und Infrastruktur.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Entwicklung', md: 'Data Scientists experimentieren mit Algorithmen, Merkmalen und Parametern – versioniert und reproduzierbar.' },
            { title: '2 · Bereitstellung', md: 'Erfolgreiche Modelle gehen in den Produktivbetrieb und bedienen echte Nutzende – kontrolliert und mit Rückfalloption.' },
            { title: '3 · Überwachung', md: 'Modellleistung und Datenqualität werden laufend verfolgt (siehe 6.2).' },
            { title: '4 · Wartung', md: 'Nachtrainieren bei nachlassender Leistung, Aktualisierung bei neuen Anforderungen (siehe 6.3). Erkenntnisse fließen zurück in die Entwicklung – der Kreislauf beginnt neu.' }
          ]
        },
        {
          type: 'table',
          caption: 'Praktiken, die den Kreislauf tragen (Ergänzung zum Skript)',
          head: ['Praktik', 'Was konkret?'],
          rows: [
            ['**Versionieren**', 'Daten, Code, Modelle und Hyperparameter – bei GenAI zusätzlich Prompts, Modellversion und Wissensbasis'],
            ['**Automatisieren**', 'Trainings- und Aufbereitungsschritte als Pipeline statt Handarbeit in Notebooks'],
            ['**Testen & validieren**', 'Vor jedem Deployment: Datenchecks, Modellmetriken, Regressionstests (Eval-Set), Sicherheitstests'],
            ['**Ausrollen (CI/CD)**', 'Neue Versionen automatisiert und schrittweise bereitstellen, z. B. erst für einen Teil der Nutzenden'],
            ['**Überwachen**', 'Qualität, Drift, Latenz, Kosten, Fehler und Feedback – mit Alarmen und Verantwortlichen'],
            ['**Verbessern**', 'Feedback und neue Daten fließen in Nachtraining bzw. Anpassung zurück']
          ]
        },
        {
          type: 'table',
          caption: 'MLOps-Reifegrade nach Skript (S. 135)',
          head: ['Stufe', 'Merkmale', 'Typisch für'],
          rows: [
            ['**0 – Manuell**', 'Manuelles Training, manuelle Bereitstellung, manuelle Überwachung; Modelle wandern per E-Mail oder Laufwerk', 'KI-Einsteiger, Proof-of-Concept-Phase'],
            ['**1 – Automatisiertes Training**', 'Pipeline automatisiert das (Nach-)Training, Bereitstellung bleibt manuell', 'Erste KI-Systeme im Produktivbetrieb'],
            ['**2 – Automatisierte Bereitstellung**', 'CI/CD für Modelle, nahtloser Weg in den Produktivbetrieb', 'Ausgereifter KI-Betrieb'],
            ['**3 – Fortlaufendes Training**', 'Vollautomatisches Nachtrainieren und Bereitstellen auf Basis von Schwellenwerten oder Zeitplänen', 'Fortgeschrittene, KI-gesteuerte Unternehmen']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Andere Reifegradmodelle',
          md: 'Reifegradmodelle unterscheiden sich in der Zahl der Stufen: **Google Cloud** beschreibt drei Level (0 manuell, 1 Pipeline-Automatisierung/Continuous Training, 2 CI/CD-Automatisierung), **Microsoft** fünf (0 „No MLOps" bis 4 „Full MLOps automated operations"). Die Logik ist überall gleich: vom Handbetrieb über automatisiertes Training zur automatisierten Bereitstellung. Wichtiger als die Nummer ist, dass du weißt, **welcher Engpass dich gerade bremst**.'
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Nicht direkt auf Stufe 3 springen',
          md: 'Das Skript warnt: Wer MLOps-Prozesse voreilig optimiert, verschwendet Ressourcen für Automatisierung, die vielleicht gar nicht gebraucht wird. **Fang einfach an, miss die Ergebnisse und automatisiere dort, wo wiederkehrende manuelle Arbeit entsteht.** Der erste Schritt ist fast immer: Überwachung und Benachrichtigungen.'
        },
        {
          type: 'table',
          caption: 'Typische MLOps-Herausforderungen (nach Skript S. 135–136)',
          head: ['Herausforderung', 'Worum es geht', 'Gegenmittel'],
          rows: [
            ['**Abhängigkeiten**', 'Modelle brauchen bestimmte Versionen von Bibliotheken, Frameworks, Betriebssystemen', 'Container, festgeschriebene Paketversionen'],
            ['**Reproduzierbarkeit**', 'Auch Monate später nachvollziehen, wie ein Modell trainiert wurde', 'Daten-, Code- und Modellversionierung, Experiment-Tracking'],
            ['**Skalierbarkeit**', 'Was mit Testdaten funktioniert, versagt bei Millionen täglicher Vorhersagen', 'Lasttests, skalierbare Infrastruktur (siehe Vertiefung)'],
            ['**Zusammenarbeit**', 'Data Science, Entwicklung, Betrieb und Fachbereiche brauchen klare Abläufe', 'Rollen, Übergabe-Checklisten, gemeinsame Dashboards']
          ]
        },
        {
          type: 'table',
          caption: 'Ausblick: MLOps und LLMOps – was ist anders? (vertieft in Kapitel 8, 8.2)',
          head: ['Aspekt', 'Klassisches ML (MLOps)', 'LLM-Anwendungen (LLMOps)'],
          rows: [
            ['Was wird versioniert?', 'Trainingsdaten, Features, Modellgewichte', 'Modellname/-version, System-Prompt, Prompt-Vorlagen, RAG-Wissensbasis, Tools/Workflows'],
            ['Wie wird getestet?', 'Metriken auf Testdaten (z. B. Precision, Recall)', 'Evals: Testfälle mit Rubrik, menschliche Bewertung, LLM-as-a-Judge'],
            ['Was wird überwacht?', 'Genauigkeit, Daten-/Konzeptdrift, Latenz', 'zusätzlich: Halluzinationen, Quellentreue, Kosten pro Anfrage, Token-Verbrauch, Prompt-Injection-Versuche'],
            ['Typisches Risiko', 'Modell veraltet mit den Daten', 'Anbieter ändert Modell, Antwortstil oder Preise; Wissensbasis veraltet']
          ]
        },
        {
          type: 'links',
          title: 'Bewährte Open-Source-Werkzeuge (Auswahl, Stand Oktober 2026)',
          items: [
            { title: 'MLflow', url: 'https://mlflow.org/', note: 'Experiment-Tracking, Modellregister, inzwischen auch GenAI-Evaluation und Tracing' },
            { title: 'Evidently AI', url: 'https://www.evidentlyai.com/', note: 'Daten- und Modell-Monitoring (Drift) sowie LLM-Evaluationen' },
            { title: 'Langfuse', url: 'https://langfuse.com/', note: 'LLM-Observability: Traces, Kosten, Prompt-Versionierung; selbst hostbar' },
            { title: 'OpenTelemetry GenAI Semantic Conventions', url: 'https://opentelemetry.io/docs/specs/semconv/gen-ai/', note: 'Herstellerneutraler Standard für die Protokollierung von KI-Aufrufen' }
          ]
        },
        {
          type: 'youtube',
          id: 'L6sPHoZwGTY',
          title: 'MLOps: Automate Machine Learning',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 8
        },
        {
          type: 'praxis',
          title: 'Von Stufe 0 zu Stufe 1: die Absatzprognose einer Bäckereikette',
          company: 'Backhaus Feldmann GmbH (fiktiv), 28 Filialen, 310 MA, Oldenburg',
          scenario: `Ein Werkstudent hat vor einem Jahr ein Prognosemodell für den Tagesabsatz je Filiale gebaut. Es läuft als Notebook auf seinem Laptop; die Ergebnisse schickt er jeden Abend als Excel-Datei. Er verlässt das Unternehmen in acht Wochen. Niemand weiß, mit welchen Daten das Modell zuletzt trainiert wurde.`,
          steps: [
            'Reifestufe ehrlich feststellen: Stufe 0 – manuell, nicht reproduzierbar, Schlüsselperson-Risiko.',
            'Zuerst Überwachung: Prognose und tatsächlicher Abverkauf je Filiale täglich in ein einfaches Dashboard schreiben; Warnung, wenn der mittlere Fehler eine Woche lang deutlich über dem Normalwert liegt.',
            'Reproduzierbarkeit herstellen: Code ins Firmen-Repository, Paketversionen festschreiben, Trainingsdaten-Snapshot und Kennzahlen in MLflow ablegen.',
            'Training als Pipeline: wöchentliches automatisches Nachtraining auf dem Server; die Freigabe der neuen Version bleibt vorerst manuell (= Stufe 1).',
            'Übergabe dokumentieren und eine zweite Person einarbeiten; Stufe 2 erst angehen, wenn häufige Releases wirklich zum Engpass werden.'
          ],
          takeaway: 'Der größte Hebel war nicht mehr Automatisierung, sondern **Sichtbarkeit und Reproduzierbarkeit**. Genau das empfiehlt das Skript als Startpunkt.'
        },
        {
          type: 'praxis',
          title: 'Wenn der Anbieter das Modell wechselt',
          company: 'Gartenwelt Nord GmbH (fiktiv), 45 Mitarbeitende, Lüneburg – Onlinehandel für Gartenbedarf',
          scenario: `Seit einem halben Jahr schreibt ein LLM-gestützter Workflow Antwortentwürfe auf Kundenmails; das Service-Team prüft und versendet. Der Modellanbieter kündigt die verwendete Modellversion ab, ein Nachfolger steht bereit.`,
          steps: [
            'Weil Modellversion und System-Prompt versioniert sind, weißt du genau, was heute produktiv läuft.',
            'Du lässt das bestehende Eval-Set (rund 150 echte, anonymisierte Kundenanfragen mit Bewertungsrubrik: korrekt, freundlich, Rückgaberegeln eingehalten) gegen das neue Modell laufen.',
            'Ergebnis: Das neue Modell antwortet ausführlicher und nennt in einigen Fällen eine veraltete Rückgabefrist aus seinem Weltwissen statt aus der Wissensbasis.',
            'Du passt den System-Prompt an („Nutze für Fristen ausschließlich die bereitgestellten Richtlinien") und wiederholst die Evals, bis die Ergebnisse mindestens auf altem Niveau liegen.',
            'Umstellung erst für einen Teil der Anfragen; im Dashboard beobachtest du Korrekturquote der Mitarbeitenden, Kosten pro Antwort und Latenz, bevor du komplett umstellst.'
          ],
          takeaway: `Ohne Versionierung und Eval-Set wäre der Wechsel ein Blindflug gewesen. **MLOps-Disziplin macht Modellwechsel zu einer Routineaufgabe statt zu einem Risiko.**`
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Unternehmen trainiert sein Modell per Pipeline automatisch nach, gibt neue Versionen aber manuell frei. Welche Reifestufe nach Skript ist das?',
          options: ['Stufe 0: Manuell', 'Stufe 1: Automatisiertes Training', 'Stufe 2: Automatisierte Bereitstellung', 'Stufe 3: Fortlaufendes Training'],
          answer: 1,
          explain: 'Stufe 1 automatisiert das Training, die Bereitstellung bleibt manuell. Stufe 2 ergänzt CI/CD für die Bereitstellung, Stufe 3 trainiert und stellt vollautomatisch bereit.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Was sollte versioniert werden, damit ein KI-System reproduzierbar und rückrollbar bleibt? (Mehrfachauswahl)',
          options: ['Trainingsdaten-Snapshot', 'Hyperparameter und Code', 'Bei LLM-Anwendungen: Modellversion, System-Prompt und Wissensbasis', 'Die Farbe des Dashboards'],
          answer: [0, 1, 2],
          explain: 'Daten, Code, Parameter und – bei GenAI – Prompts und Wissensbasis bestimmen das Verhalten. Nur wenn sie versioniert sind, lassen sich Ergebnisse nachvollziehen und Änderungen zurückrollen.'
        }
      ]
    },
    // ───────────────────────── 6.1 Vertiefung ─────────────────────────
    {
      id: 'k6-l2',
      title: 'Vertiefung: Infrastruktur & Sicherheit für den KI-Betrieb',
      minutes: 28,
      skript: { chapter: '6.1', page: 135, deepening: true },
      blocks: [
        {
          type: 'skript',
          chapter: '6.1',
          page: 135,
          md: 'Das Skript nennt **Abhängigkeiten** (Bibliotheken, Frameworks, Betriebssysteme), **Skalierbarkeit** (Millionen Vorhersagen pro Tag) und **Zusammenarbeit** zwischen Data Science, Entwicklung und Betrieb als zentrale MLOps-Herausforderungen. Diese Vertiefung ergänzt, *wo* und *wie sicher* KI betrieben wird: Betriebsmodelle, Rechenleistung, Datenplattform, Vektordatenbanken und Sicherheitsbausteine bis hin zu Zero Trust.'
        },
        {
          type: 'table',
          caption: 'Betriebsmodelle für KI im Vergleich',
          head: ['Modell', 'Vorteile', 'Nachteile', 'Passt für'],
          rows: [
            ['**Public Cloud / API** großer Anbieter', 'leistungsfähigste Modelle, kein eigener Betrieb, schnell startklar', 'Abhängigkeit, Datenübermittlung ggf. in Drittstaaten prüfen, nutzungsabhängige Kosten', 'Prototypen, unkritische Daten, Standardaufgaben'],
            ['**EU-/souveräne Cloud** (z. B. EU-Rechenzentren großer Anbieter, deutsche Anbieter wie STACKIT oder IONOS)', 'Datenhaltung in der EU, oft bessere Vertragslage für Datenschutz', 'Modellauswahl teils kleiner, Preise und Funktionsumfang vergleichen', 'personenbezogene/vertrauliche Daten, öffentliche Hand'],
            ['**On-Premises / lokal** (eigene Server, z. B. mit Ollama, vLLM oder LM Studio)', 'volle Datenkontrolle, keine Daten verlassen das Haus', 'Hardware (GPU) und Betrieb selbst, Modelle oft kleiner als Spitzenmodelle', 'hochsensible Daten, stabile Last, vorhandene IT-Kompetenz'],
            ['**Hybrid**', 'pro Use Case das passende Modell und den passenden Ort', 'mehr Komplexität, Governance nötig', 'die meisten Unternehmen mittelfristig']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Datensouveränität und Cloud-Nutzung (Stand Oktober 2026)',
          md: `„Cloud vs. On-Prem" ist keine Entweder-oder-Frage mehr. 2025 nutzten laut Destatis **54 %** der Unternehmen in Deutschland (ab 10 Beschäftigten) kostenpflichtige Cloud-Dienste – bei großen Unternehmen **86 %** ([Destatis, PM Nr. 416 vom 24.11.2025](https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/11/PD25_416_52911.html)). Souveräne Angebote wachsen, z. B. die **AWS European Sovereign Cloud**, die im Januar 2026 mit einer ersten Region in Brandenburg allgemein verfügbar wurde ([Amazon, Januar 2026](https://press.aboutamazon.com/aws/2026/1/aws-launches-aws-european-sovereign-cloud-and-announces-expansion-across-europe)).

„Souverän" ist kein geschützter Begriff. Prüfe im Einzelfall Datenstandort, Betreibergesellschaft, Zugriffsmöglichkeiten Dritter, Vertragslage (Auftragsverarbeitung) und Exit-Möglichkeiten – gemeinsam mit Datenschutz und IT-Sicherheit.`
        },
        {
          type: 'text',
          md: `### Rechenleistung: Wann brauchst du GPUs?

GPUs (oder spezialisierte Chips wie TPUs) brauchst du vor allem für **Training und Fine-Tuning** sowie für den **Betrieb eigener Modelle**. Wer Modelle per API oder als SaaS nutzt, mietet die Rechenleistung indirekt mit. Für lokale Sprachmodelle ist vor allem der **Grafikspeicher (VRAM)** entscheidend: Je größer das Modell, desto mehr Speicher. Werkzeuge wie LM Studio oder Ollama machen das Ausprobieren auf einem Arbeitsplatzrechner leicht – für den produktiven Mehrbenutzerbetrieb brauchst du aber Server, Monitoring und Zuständigkeiten.

### Datenplattform und Vektordatenbank

- **ETL/ELT-Pipelines** holen Daten aus Quellsystemen, bereinigen und laden sie.
- **Data Warehouse** (strukturiert, für Auswertungen) und **Data Lake** (Rohdaten aller Art) – heute oft kombiniert als „Lakehouse".
- Für **RAG** kommen **Vektordatenbanken** hinzu: Dokumente werden in Abschnitte zerlegt, als Zahlenvektoren (Embeddings) gespeichert und per Ähnlichkeitssuche gefunden. Optionen reichen von einer Erweiterung für bestehende Datenbanken (z. B. **pgvector** für PostgreSQL) bis zu spezialisierten Systemen (z. B. **Qdrant**). Wichtig: Auch im Vektorindex gelten **Zugriffsrechte** – sonst findet die KI Dokumente, die die fragende Person gar nicht sehen dürfte.`
        },
        {
          type: 'table',
          caption: 'Sicherheitsbausteine für KI-Systeme',
          head: ['Baustein', 'Was konkret?', 'Bezug'],
          rows: [
            ['**IAM & Least Privilege**', 'Jede Person, jeder Dienst und jeder KI-Agent bekommt nur die Rechte, die er braucht; Service-Accounts statt geteilter Zugänge', 'Zero Trust'],
            ['**Verschlüsselung**', 'Daten bei Übertragung und Speicherung verschlüsseln, Schlüssel verwalten', 'DSGVO Art. 32, Kapitel 5.4'],
            ['**Zero Trust**', 'Kein implizites Vertrauen, auch nicht im internen Netz; jede Anfrage authentifizieren und autorisieren', 'NIST SP 800-207, BSI/ANSSI'],
            ['**Eingaben & Ausgaben absichern**', 'Schutz gegen (indirekte) Prompt Injection, Ausgaben nie ungeprüft ausführen', 'OWASP LLM01, LLM05; BSI'],
            ['**Agenten begrenzen**', 'Keine übermäßigen Befugnisse, Freigabe durch Menschen bei kritischen Aktionen', 'OWASP LLM06 „Excessive Agency"'],
            ['**Logging & Monitoring**', 'Nachvollziehbare Protokolle, Anomalien erkennen', 'Kapitel 6.2, BSI/ANSSI'],
            ['**Lieferkette**', 'Herkunft von Modellen, Bibliotheken und Daten prüfen', 'OWASP LLM03']
          ]
        },
        {
          type: 'text',
          md: `### Über das Skript hinaus: Empfehlungen des BSI für LLM-Systeme

- **BSI & ANSSI: „Design Principles for LLM-based Systems with Zero Trust"** (August 2025) – deutsch-französische Designprinzipien: Zugriffsrechte begrenzen, Entscheidungsprozesse transparent machen, Menschen bei kritischen Entscheidungen beteiligen.
- **BSI-Themenseite Künstliche Intelligenz** mit u. a. „Basisschutz gegen Indirect Prompt Injection in dokumentbasierten LLM-Chats", „Evasion-Attacks auf LLMs – Gegenmaßnahmen in der Praxis" und dem „Kriterienkatalog zur Integration von extern bereitgestellten generativen KI-Modellen".
- **BSI AIC4** – Kriterienkatalog für KI-Cloud-Dienste als Ergänzung zum Cloud-Kriterienkatalog **C5**; hilfreich bei der Bewertung von Anbietern.
- **OWASP Top 10 for LLM Applications 2025** – die zehn wichtigsten Sicherheitsrisiken, u. a. Prompt Injection, Offenlegung sensibler Informationen, übermäßige Handlungsbefugnis (Excessive Agency) und Schwächen in Vektoren/Embeddings (ausführlich in Kapitel 4, 4.4).`
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Besonders kritisch: KI-Agenten mit Werkzeugen',
          md: `Sobald eine KI nicht nur antwortet, sondern **handelt** (E-Mails senden, Daten ändern, Bestellungen auslösen), kann eine eingeschleuste Anweisung – etwa versteckt in einer eingehenden E-Mail oder einem Dokument – echten Schaden anrichten. Faustregeln: so wenige Rechte wie möglich, nur lesende Zugriffe wo es geht, **menschliche Freigabe** vor irreversiblen Aktionen, alle Aktionen protokollieren.`
        },
        {
          type: 'praxis',
          title: 'Infrastrukturentscheidung für einen Bürgerinfo-Assistenten',
          company: 'Gemeindeverwaltung Talheim (fiktiv), 120 Beschäftigte',
          scenario: `Nach dem erfolgreichen Posteingangs-Projekt soll ein interner Assistent Mitarbeitenden Fragen zu Satzungen, Gebührenordnungen und Dienstanweisungen beantworten (RAG über rund 2.000 Dokumente). Später sind auch Akten mit personenbezogenen Daten im Gespräch.`,
          steps: [
            'Du klassifizierst die Daten: Satzungen und Gebührenordnungen sind öffentlich, Dienstanweisungen intern, Akten personenbezogen und teils besonders schutzbedürftig.',
            'Entscheidung Phase 1: EU-Cloud-Betrieb bei einem Anbieter mit Auftragsverarbeitungsvertrag und Rechenzentrum in Deutschland; nur öffentliche und interne Dokumente.',
            'Datenplattform: Dokumente aus dem Dokumentenmanagementsystem werden nächtlich per Pipeline aktualisiert; die Vektordatenbank übernimmt die Leserechte aus dem DMS.',
            'Sicherheit: Anmeldung über das bestehende Verwaltungs-Login (IAM), keine Schreibrechte für den Assistenten, Protokollierung aller Anfragen, Test auf indirekte Prompt Injection mit präparierten Dokumenten.',
            'Für Phase 2 (Akten) prüfst du mit Datenschutz und IT einen lokalen Betrieb auf eigener GPU-Hardware oder im kommunalen Rechenzentrum – inklusive Datenschutz-Folgenabschätzung.'
          ],
          takeaway: `Die Infrastruktur folgt der **Datenklassifizierung**, nicht umgekehrt. Ein hybrider Ansatz – unkritische Daten in der EU-Cloud, hochsensible lokal – ist oft der pragmatische Weg.`
        },
        {
          type: 'links',
          title: 'Werkzeuge und Leitfäden zum Vertiefen',
          items: [
            { title: 'BSI/ANSSI: Design Principles for LLM-based Systems with Zero Trust', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/ANSSI-BSI-joint-releases/LLM-based_Systems_Zero_Trust.html', note: 'Zero-Trust-Designprinzipien für LLM-Systeme (2025)' },
            { title: 'BSI: Künstliche Intelligenz (Themenseite)', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/KI.html', note: 'Publikationen u. a. zu Prompt Injection' },
            { title: 'BSI: Kriterienkatalog für KI-Cloud-Dienste – AIC4', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/AIC4/aic4.html', note: 'Ergänzt den C5-Katalog' },
            { title: 'NIST SP 800-207: Zero Trust Architecture', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Grundlagendokument zu Zero Trust' },
            { title: 'LM Studio', url: 'https://lmstudio.ai/', note: 'Sprachmodelle lokal auf dem eigenen Rechner testen' },
            { title: 'Ollama', url: 'https://ollama.com/', note: 'Open-Source-Werkzeug zum lokalen Betrieb von Sprachmodellen' },
            { title: 'pgvector', url: 'https://github.com/pgvector/pgvector', note: 'Vektorsuche als Erweiterung für PostgreSQL' },
            { title: 'Qdrant', url: 'https://qdrant.tech/', note: 'Open-Source-Vektordatenbank' }
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Aussagen entsprechen dem Zero-Trust-Prinzip? (Mehrfachauswahl)',
          options: [
            'Jede Anfrage wird authentifiziert und autorisiert – auch im internen Netz.',
            'Wer im Firmennetz ist, gilt automatisch als vertrauenswürdig.',
            'Rechte werden so feingranular und knapp wie möglich vergeben.',
            'Ein KI-Agent bekommt Administratorrechte, damit er flexibel arbeiten kann.'
          ],
          answer: [0, 2],
          explain: 'Zero Trust bedeutet: kein implizites Vertrauen, Authentifizierung und Autorisierung bei jeder Interaktion, Least Privilege. Das gilt laut BSI/ANSSI ausdrücklich auch für LLM-Systeme und Agenten.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'In einer RAG-Anwendung müssen die Zugriffsrechte der Quelldokumente auch bei der Suche in der Vektordatenbank berücksichtigt werden.',
          answer: true,
          explain: 'Sonst kann die KI Inhalte aus Dokumenten wiedergeben, die die fragende Person nicht sehen darf. OWASP führt dazu „Vector and Embedding Weaknesses" (LLM08).'
        }
      ]
    },
    // ───────────────────────── 6.2 (1) ─────────────────────────
    {
      id: 'k6-l3',
      title: '6.2 Modellüberwachung: drei Ebenen und die richtigen Metriken',
      minutes: 30,
      skript: { chapter: '6.2', page: 136 },
      blocks: [
        { type: 'video', scene: 'kpi' },
        {
          type: 'text',
          md: `Eine klassische Anwendung, die kaputtgeht, stürzt ab oder zeigt eine Fehlermeldung – du merkst es sofort. Ein KI-Modell, das schlechter wird, liefert einfach weiter Vorhersagen. Nur eben zunehmend falsche. **KI-Modelle versagen lautlos.** Deshalb muss Überwachung die *Vorhersagequalität* verfolgen, nicht nur die Frage „Läuft der Server?".`
        },
        {
          type: 'skript',
          chapter: '6.2',
          page: 136,
          quote: 'KI-Modelle versagen lautlos durch schleichenden Leistungsabfall statt durch offensichtliche Abstürze.',
          md: `- **Modellüberwachung** beobachtet KI im Produktivbetrieb fortlaufend: Vorhersagequalität, Datenmuster und Geschäftsergebnisse – mehr als die übliche Anwendungsüberwachung (Verfügbarkeit, Antwortzeit).
- Ohne Überwachung merkst du Probleme erst, wenn Geschäftskennzahlen einbrechen oder Kunden sich beschweren – nach Wochen schlechter Entscheidungen.
- **Drei Ebenen, die gleichzeitig zu überwachen sind** – erstens **technische Leistungskennzahlen:** Genauigkeit, Präzision, Trefferquote (Recall), F1, bei Regression z. B. der mittlere absolute Fehler. Dafür braucht es echte Ergebnisdaten – beim Kreditmodell oft erst nach Monaten.
- Zweitens **Betriebskennzahlen:** Latenz, Durchsatz, Fehlerquoten, Ressourcenauslastung (CPU, Speicher, GPU). Ein Modell, das 30 Sekunden für eine Kreditentscheidung braucht, ist untragbar, wenn unter einer Sekunde gefordert ist.
- Drittens **Geschäftskennzahlen:** z. B. Klickrate, Kaufrate, Bestellwert, Umsatz pro Nutzer bei Empfehlungen – die Frage „Hilft das System dem Unternehmen wirklich?".`
        },
        {
          type: 'table',
          caption: 'Die drei Überwachungsebenen (nach Skript S. 137–138)',
          head: ['Ebene', 'Leitfrage', 'Beispielkennzahlen', 'Wer schaut hin?'],
          rows: [
            ['**Technisch**', 'Sagt das Modell richtig vorher?', 'Accuracy, Precision, Recall, F1, MAE', 'Data Science'],
            ['**Betrieblich**', 'Läuft das System zuverlässig und schnell genug?', 'Latenz (p95), Durchsatz, Fehlerquote, CPU/GPU/Speicher, Uptime', 'IT-Betrieb'],
            ['**Geschäftlich**', 'Hilft es dem Unternehmen?', 'Kaufrate, Bestellwert, Bearbeitungszeit, Kosten pro Vorgang, Kundenzufriedenheit', 'Fachbereich, Management']
          ]
        },
        {
          type: 'text',
          md: `### Technische Metriken verstehen: die Confusion Matrix

Viele KI-Anwendungen sind **Klassifikationen**: Ist diese E-Mail eine Beschwerde? Ist das Bauteil fehlerhaft? Ist die Transaktion Betrug? Für die Bewertung vergleicht man Vorhersagen mit der Wahrheit und sortiert sie in die **Confusion Matrix** (Wahrheitsmatrix):

- **TP** (True Positive): Modell sagt „ja", stimmt.
- **FP** (False Positive): Modell sagt „ja", ist aber „nein" – Fehlalarm.
- **FN** (False Negative): Modell sagt „nein", ist aber „ja" – übersehener Fall.
- **TN** (True Negative): Modell sagt „nein", stimmt.`
        },
        {
          type: 'table',
          caption: 'Die wichtigsten Klassifikationsmetriken',
          head: ['Metrik', 'Formel', 'Frage dahinter'],
          rows: [
            ['**Accuracy** (Genauigkeit)', '(TP + TN) / alle', 'Wie viele Vorhersagen sind insgesamt richtig?'],
            ['**Precision** (Präzision)', 'TP / (TP + FP)', 'Wenn das Modell „ja" sagt – wie oft zu Recht?'],
            ['**Recall** (Trefferquote)', 'TP / (TP + FN)', 'Von allen echten „Ja"-Fällen – wie viele findet das Modell?'],
            ['**F1-Score**', '2 · Precision · Recall / (Precision + Recall)', 'Wie gut ist die Balance aus Precision und Recall?']
          ]
        },
        { type: 'interactive', widget: 'confusion-matrix', props: {} },
        {
          type: 'text',
          md: `Beobachte im Widget: Senkst du den **Schwellenwert**, meldet das Modell öfter „ja" – der Recall steigt, die Precision sinkt. Hebst du ihn an, wird es vorsichtiger – Precision steigt, Recall sinkt. Welcher Punkt richtig ist, ist **keine technische, sondern eine geschäftliche Entscheidung**: Was kostet ein Fehlalarm, was kostet ein übersehener Fall?

### Das Accuracy-Paradox
Angenommen, nur 1 % aller Transaktionen sind Betrug. Ein „Modell", das immer „kein Betrug" sagt, erreicht **99 % Accuracy** – und findet keinen einzigen Betrugsfall (Recall = 0). Bei unausgewogenen Klassen ist Accuracy allein deshalb irreführend. Das Skript warnt entsprechend davor, sich in der Überwachung **ausschließlich auf die Genauigkeit** zu konzentrieren.`
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Precision schützt vor Fehlalarmen, Recall schützt vor Übersehenem.** Welche wichtiger ist, entscheiden die Kosten der Fehler im Geschäftsprozess.'
        },
        {
          type: 'table',
          caption: 'Welche Metrik zählt wann? (Beispiele)',
          head: ['Anwendungsfall', 'Teurer Fehler', 'Schwerpunkt'],
          rows: [
            ['Sichtprüfung sicherheitsrelevanter Bauteile', 'Fehlerhaftes Teil wird ausgeliefert (FN)', '**Recall** hoch, Fehlalarme prüft ein Mensch'],
            ['Betrugserkennung im Zahlungsverkehr', 'Legitime Zahlungen werden blockiert (FP) – Kundenärger', 'Precision im Blick, sonst Alarm (siehe Schweregrade in der nächsten Lektion)'],
            ['Spam-Filter für das Rechnungspostfach', 'Echte Rechnung landet im Spam (FP für „Spam")', '**Precision** für „Spam" hoch'],
            ['Vorsortierung von Kundenmails zur schnelleren Bearbeitung', 'beide Fehler moderat', '**F1** als ausgewogenes Maß']
          ]
        },
        {
          type: 'praxis',
          title: 'Ein Beschwerde-Erkenner im Praxistest',
          company: 'Versandhandel Kerner KG (fiktiv), 120 Mitarbeitende, Bielefeld – alle Zahlen fiktiv',
          scenario: `Ein Modell soll Beschwerden in eingehenden E-Mails erkennen, damit sie bevorzugt bearbeitet werden. Im Test mit **1.000** gelabelten E-Mails sind **100** echte Beschwerden. Das Modell markiert **120** E-Mails als Beschwerde, davon sind **80** tatsächlich Beschwerden.`,
          steps: [
            'Confusion Matrix: TP = 80, FP = 120 − 80 = 40, FN = 100 − 80 = 20, TN = 1.000 − 80 − 40 − 20 = 860.',
            'Accuracy = (80 + 860) / 1.000 = 94 % – klingt sehr gut.',
            'Precision = 80 / 120 ≈ 67 % – jede dritte Markierung ist ein Fehlalarm.',
            'Recall = 80 / 100 = 80 % – jede fünfte Beschwerde wird übersehen.',
            'F1 = 2 · 0,67 · 0,80 / (0,67 + 0,80) ≈ 0,73.',
            'Entscheidung mit der Serviceleitung: Übersehene Beschwerden sind teurer als Fehlalarme → Schwellenwert senken, Ziel-Recall ≥ 90 %, mehr Fehlalarme werden akzeptiert. Danach neu messen – und als Geschäftskennzahl die Zeit bis zur Antwort auf Beschwerden verfolgen.'
          ],
          takeaway: `Eine hohe Accuracy kann über Schwächen hinwegtäuschen. **Übersetze Metriken in Geschäftsfolgen** („jede fünfte Beschwerde bleibt liegen") – so werden sie entscheidbar.`
        },
        {
          type: 'text',
          md: `### Betriebskennzahlen: Latenz und Uptime
- **Latenz:** Antwortzeit. Berichte nicht nur den Durchschnitt, sondern auch das **95. Perzentil (p95)** – die Zeit, unter der 95 % der Anfragen liegen. Nutzende erinnern sich an die langsamen Fälle.
- **Uptime/Verfügbarkeit:** Anteil der Zeit, in der das System nutzbar ist. 99,9 % klingt viel, erlaubt aber bei 30 Tagen rund **43 Minuten** Ausfall pro Monat. Kläre mit Anbietern, was im Vertrag (SLA) steht – und was passiert, wenn die KI ausfällt (Rückfallprozess).`
        },
        {
          type: 'youtube',
          id: 'Kdsp6soqA7o',
          title: 'Machine Learning Fundamentals: The Confusion Matrix',
          channel: 'StatQuest with Josh Starmer',
          lang: 'en',
          minutes: 7
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Modell meldet 50 Bauteile als fehlerhaft; 40 davon sind wirklich fehlerhaft. Insgesamt gab es 80 fehlerhafte Teile. Wie hoch ist die Precision?',
          options: ['50 %', '62,5 %', '80 %', '40 %'],
          answer: 2,
          explain: 'Precision = TP / (TP + FP) = 40 / 50 = 80 %. Der Recall wäre 40 / 80 = 50 % – das Modell übersieht also die Hälfte der fehlerhaften Teile.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Kennzahl der Überwachungsebene zu.',
          pairs: [
            ['F1-Score', 'Technische Leistung'],
            ['Latenz p95', 'Betrieb'],
            ['Kaufrate nach Empfehlung', 'Geschäft'],
            ['GPU-Auslastung', 'Betrieb (Ressourcen)']
          ],
          explain: 'Das Skript fordert, alle drei Ebenen gleichzeitig zu überwachen – technische, betriebliche und geschäftliche Kennzahlen liefern unterschiedliche Einblicke.'
        }
      ]
    },
    // ───────────────────────── 6.2 (2) ─────────────────────────
    {
      id: 'k6-l4',
      title: '6.2 Dashboards, Warnmeldungen und Feedback-Erhebung',
      minutes: 28,
      skript: { chapter: '6.2', page: 138 },
      blocks: [
        {
          type: 'text',
          md: `Kennzahlen allein helfen nicht – jemand muss sie sehen, verstehen und handeln. In dieser Lektion geht es um die Werkzeuge dafür: **Dashboards** für den Überblick, **Warnmeldungen** für den Ernstfall und **Feedback** als Quelle der Wahrheit.`
        },
        {
          type: 'skript',
          chapter: '6.2',
          page: 138,
          md: `- **Dashboards** zeigen aktuellen Stand, historische Trends und Vergleich mit Referenzwerten; sie heben Auffälligkeiten automatisch hervor. Wichtigste Kennzahlen gut sichtbar, passende Darstellungsform, Weg von der Übersicht zur Diagnose.
- **Getrennte Sichten:** Data Science (technisch), Betrieb (Systemzustand), Management (Geschäftsergebnisse).
- **Referenzwerte** in den ersten Wochen nach dem Start festlegen – viele „Probleme" sind normale Schwankungen.
- **Warnsysteme** balancieren Empfindlichkeit und Trennschärfe; zu viele Meldungen führen zu **Alarmmüdigkeit**. Schwellen statistisch begründen, nicht mit runden Zahlen.
- **Schweregrade:** kritisch (sofort), Warnhinweis (bald untersuchen), Information (beachtenswert).
- **Fehler:** nur Genauigkeit beachten, Warnungen auf Einzelwerte statt Trends, zu viele Kennzahlen, **unklare Zuständigkeiten** (wer empfängt, untersucht, darf zurückrollen oder nachtrainieren?).
- **Feedback-Erhebung** gleicht Vorhersagen mit der Realität ab – automatisch (Wetter) oder aktiv (Personalentscheidungen). Die **Dauer bis zur Rückmeldung** reicht von Stunden (Betrug) über Monate (Kredit) bis Jahre (Medizin).
- **Schrittweise aufbauen** statt alles auf einmal.`
        },
        {
          type: 'table',
          caption: 'Elemente eines typischen Überwachungs-Dashboards (Skript S. 139)',
          head: ['Element', 'Zweck', 'Aktualisierung'],
          rows: [
            ['Aktuelle Genauigkeit', 'Hält das Modell seine Leistung?', 'Echtzeit oder stündlich'],
            ['Vorhersagevolumen', 'Erkennt Nutzungsveränderungen', 'Echtzeit'],
            ['Latenztrend', 'Überwacht die Antwortgeschwindigkeit', 'Echtzeit'],
            ['Merkmalsverteilung', 'Erkennt Datendrift (siehe 6.3)', 'Täglich'],
            ['Geschäftliche Wirkung', 'Verfolgt Umsatz und Kaufraten', 'Täglich oder wöchentlich']
          ]
        },
        {
          type: 'table',
          caption: 'Praxisbeispiel: Dashboard für einen KI-Assistenten im Kundenservice (Werte fiktiv)',
          head: ['Kennzahl', 'Quelle', 'Alarm-Schwelle', 'Verantwortlich'],
          rows: [
            ['Übernahmequote der Antwortentwürfe', 'Ticketsystem', 'unter 60 % im Wochenmittel', 'Projektleitung'],
            ['Recall „Beschwerde"', 'wöchentliche Stichprobe (50 Fälle)', 'unter 90 %', 'Fachbereich'],
            ['Latenz p95', 'Anwendungs-Logs', 'über 8 Sekunden', 'IT-Betrieb'],
            ['Kosten pro bearbeiteter E-Mail', 'Anbieter-Abrechnung + Ticketzahl', '+20 % zum Vormonat', 'Controlling'],
            ['Aktive Nutzende / Berechtigte', 'Login-Statistik', 'unter 70 %', 'Change-Management'],
            ['Negative Rückmeldungen (Daumen runter)', 'Feedback-Button', 'über 10 %', 'Projektleitung']
          ]
        },
        {
          type: 'table',
          caption: 'Schweregrade von Warnmeldungen (nach Skript S. 139–140)',
          head: ['Schweregrad', 'Bedeutung', 'Beispiel', 'Reaktion'],
          rows: [
            ['🔴 **Kritisch**', 'Unmittelbare geschäftliche Auswirkung', 'Präzision des Betrugsmodells fällt rapide, legitime Zahlungen werden blockiert', 'Sofort: Bereitschaft alarmieren, ggf. Rückfall auf Vorversion oder Regeln'],
            ['🟠 **Warnhinweis**', 'Problem entwickelt sich', 'Merkmalsverteilungen verschieben sich allmählich', 'Innerhalb weniger Tage untersuchen'],
            ['🔵 **Information**', 'Ungewöhnliches Muster, nicht unbedingt bedenklich', 'Vorhersagevolumen am Feiertag halbiert', 'Im nächsten Review ansehen']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Alarmmüdigkeit vermeiden',
          md: 'Wer zu oft alarmiert wird, beginnt Meldungen zu überfliegen oder zu ignorieren – das beschreibt auch Googles Site-Reliability-Handbuch für den IT-Betrieb ([Google SRE Book: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)). Regeln: Schwellen aus der **normalen Schwankungsbreite** ableiten (z. B. Mittelwert ± 3 Standardabweichungen der Referenzwochen), auf **Trends** statt Einzelwerte reagieren, nur wirklich handlungsrelevante Meldungen als kritisch einstufen – und für jede Meldung eine **verantwortliche Person mit Handlungsbefugnis** festlegen.'
        },
        {
          type: 'text',
          md: `### Feedback-Erhebung: die Wahrheit kommt manchmal spät

Ohne Rückmeldung aus der Realität misst du nur Hilfskennzahlen. Manche Rückmeldungen kommen **automatisch** (die Wettervorhersage wird vom tatsächlichen Wetter bestätigt), andere musst du **aktiv einholen** – etwa, ob vom Modell empfohlene Bewerbende tatsächlich eingeladen und eingestellt wurden.`
        },
        {
          type: 'table',
          caption: 'Dauer bis zur Rückmeldung und Folgen für die Überwachung (nach Skript S. 140)',
          head: ['Anwendung', 'Rückmeldung nach …', 'Was du in der Zwischenzeit überwachst'],
          rows: [
            ['Betrugserkennung', 'Stunden bis Tage (Reklamationen)', 'Direkt Precision/Recall, Blockierquote'],
            ['Kreditrisiko', 'Monate bis Jahre (Ausfälle)', 'Merkmalsdrift, Score-Verteilung, frühe Zahlungsverzüge als Hilfskennzahl'],
            ['Medizinische Diagnose', 'unter Umständen Jahre', 'Zweitbefundung von Stichproben, Übereinstimmung mit Fachärzten'],
            ['KI-Assistent im Kundenservice', 'sofort (Übernahme/Korrektur durch Mitarbeitende)', 'Übernahmequote, Korrekturgrund, Daumen hoch/runter']
          ]
        },
        {
          type: 'text',
          md: `### Nutzung und Akzeptanz messen
Für Nutzungs-KPIs bietet sich das **HEART-Framework** an (Rodden, Hutchinson & Fu, Google, 2010): **H**appiness (Zufriedenheit), **E**ngagement (Nutzungsintensität), **A**doption (neue Nutzende), **R**etention (Wiederkehr), **T**ask Success (Aufgabenerfolg). Für jede Dimension legst du ein Ziel, ein Signal und eine Kennzahl fest – z. B. Adoption: „Anteil der Berechtigten, die das Tool in den ersten vier Wochen mindestens einmal nutzen". Wie du KPIs und Baseline vor dem Projekt festlegst, steht in **Kapitel 2 (2.4)**.`
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Typische Messfallen',
          md: `- **Neuheitseffekt:** Am Anfang wird ein neues Tool begeistert genutzt – die ehrliche Messung beginnt nach einigen Wochen. Deshalb legt das Skript Referenzwerte erst *nach* den ersten Wochen fest.
- **Saisonalität:** Vergleiche Dezember nicht mit März, wenn das Geschäft saisonal schwankt.
- **Kennzahlen-Wildwuchs:** Lieber fünf Kennzahlen, auf die reagiert wird, als dreißig, die niemand liest.
- **Durchschnittsfalle:** Gesamtwerte verstecken Probleme einzelner Teams, Standorte oder Kundengruppen – aufschlüsseln.`
        },
        {
          type: 'praxis',
          title: 'Das Quartals-Review',
          company: 'Stadtwerke Lindenau GmbH (fiktiv), 300 Mitarbeitende',
          scenario: `Drei Monate nach dem Roll-out des E-Mail-Assistenten bereitest du das Review für die Geschäftsführung vor. Insgesamt sinkt die Erstantwortzeit deutlich gegenüber der Baseline – aber ein Team nutzt den Assistenten kaum.`,
          steps: [
            'Du zeigst die drei Ebenen: technische Qualität stabil, Betrieb ohne kritische Meldungen, Geschäftskennzahlen (Erstantwortzeit, Kosten pro E-Mail) besser als die Baseline.',
            'Du schlüsselst nach Teams auf: Im Team „Gewerbekunden" liegt die Adoptionsrate deutlich niedriger, die Übernahmequote ebenfalls.',
            'Die Feedback-Auswertung zeigt: Die Anliegen der Gewerbekunden (Sonderverträge) sind in der Wissensbasis kaum abgebildet – die Entwürfe sind oft unbrauchbar.',
            'Maßnahme: Sonderverträge in die Wissensbasis aufnehmen, Eval-Set um 30 Gewerbefälle erweitern, zwei Pilotnutzende aus dem Team als Ansprechpersonen benennen.',
            'Zuständigkeiten nachschärfen: Wer erhält welche Warnung, wer darf eine Version zurückrollen? Das wird im Betriebshandbuch festgehalten.',
            'Die Geschäftsführung entscheidet über Fortführung und Budget auf Basis der Zahlen – nicht auf Basis von Einzelmeinungen.'
          ],
          takeaway: `Durchschnittswerte verstecken Probleme. **Aufschlüsseln, Ursachen über Feedback finden, gezielt verbessern, erneut messen.**`
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Punkte nennt das Skript als häufige Überwachungsfehler? (Mehrfachauswahl)',
          options: ['Nur auf Genauigkeit achten, Geschäftskennzahlen ignorieren', 'Warnungen auf Basis einzelner Datenpunkte statt Trends', 'Getrennte Dashboards für verschiedene Zielgruppen', 'Unklare Zuständigkeiten für Warnungen und Maßnahmen'],
          answer: [0, 1, 3],
          explain: 'Getrennte Dashboards sind ein Tipp des Skripts, kein Fehler. Fehler sind einseitiger Genauigkeitsfokus, Einzelwert-Alarme, zu viele Kennzahlen ohne Priorität und fehlende Zuständigkeiten.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Bei einem Kreditrisikomodell kann die echte Genauigkeit oft erst nach Monaten gemessen werden – bis dahin sind Hilfskennzahlen und Drift-Überwachung besonders wichtig.',
          answer: true,
          explain: 'Ob Kreditnehmer ausfallen, zeigt sich spät. Bei langen Rückmeldungsschleifen stützt du dich laut Skript stärker auf Hilfskennzahlen und indirekte Indikatoren.'
        }
      ]
    },
    // ───────────────────────── 6.3 ─────────────────────────
    {
      id: 'k6-l5',
      title: '6.3 Drift-Erkennung und Modellwartung',
      minutes: 35,
      skript: { chapter: '6.3', page: 141 },
      blocks: [
        {
          type: 'text',
          md: `Ein Modell ist eine Momentaufnahme der Welt zum Zeitpunkt des Trainings. Die Welt bleibt aber nicht stehen: Preise steigen, Kundengruppen ändern sich, ein Wettbewerber startet eine Rabattaktion, ein Gesetz ändert die Spielregeln. **Das Modell selbst hat sich nicht verändert – die Welt um es herum schon.** Diese Veränderung heißt **Drift**.`
        },
        {
          type: 'skript',
          chapter: '6.3',
          page: 141,
          quote: 'Das Modell selbst hat sich nicht verändert – die Welt um es herum schon.',
          md: `- **Drift** = Veränderungen in Datenmustern oder in den Zusammenhängen zwischen Ein- und Ausgaben, die die Leistung mit der Zeit senken. Sie verletzt die Grundannahme, dass künftige Daten den Trainingsdaten ähneln.
- **Datendrift** (Merkmalsdrift, Kovariatenverschiebung): Die Verteilung der Eingaben ändert sich – z. B. steigen durch Inflation alle Transaktionsbeträge um 20 %.
- **Konzeptdrift:** Der Zusammenhang zwischen Eingabe und Ergebnis ändert sich – „Trendprodukt" im Dezember ist etwas anderes als im Juli. Tückisch, weil allein über die Eingaben nicht erkennbar; erkannt wird sie über die Ausgaben bzw. Ergebnisse.
- **Erkennung:** zusammenfassende Statistiken (Mittelwert, Median, Standardabweichung), statistische Tests (**Kolmogorow-Smirnow**, **Population Stability Index**), ML-basierte Verfahren (Klassifikator unterscheidet Trainings- von Produktivdaten), visuelle Prüfung mit Histogrammen.
- **Wartung:** zeitgesteuertes, anlassbezogenes oder hybrides Nachtrainieren; Auswahl der Trainingsdaten (gleitendes Fenster); **Validierung vor jeder Bereitstellung**; automatisierte Pipelines; typische Fehler; Versionierung.`
        },
        {
          type: 'table',
          caption: 'Drift-Arten im Vergleich',
          head: ['Art', 'Was ändert sich?', 'Beispiel (Skript)', 'Wie erkennen?'],
          rows: [
            ['**Datendrift** (Kovariatenverschiebung)', 'Verteilung der Eingabemerkmale', 'Inflation hebt alle Transaktionsbeträge um 20 %; Kreditmodell kennt diese Werte nicht', 'Eingaben überwachen: Verteilungen vergleichen'],
            ['**Konzeptdrift**', 'Zusammenhang Eingabe → Ergebnis', 'Gleiche Produktaufrufe bedeuten im Dezember etwas anderes als im Juli', 'Ausgaben/Ergebnisse überwachen: Fehlerraten, Feedback'],
            ['*Ergänzung:* **Label-/Prior-Drift**', 'Häufigkeit der Zielklassen', 'Anteil Betrugsfälle steigt nach einer neuen Betrugsmasche von 1 % auf 3 %', 'Verteilung der Vorhersagen und Labels'],
            ['*Ergänzung:* **Modelländerung beim Anbieter**', 'Das (eingekaufte) Modell selbst', 'API-Anbieter liefert neue Modellversion aus', 'Eval-Set bei jedem Versionswechsel (siehe 6.1)']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Drift-Erkennung vor dem Go-live einrichten',
          md: 'Das Skript rät: Warte nicht, bis Probleme auftreten. Setze **statistische Tests** auf, die aktuelle Verteilungen automatisch mit den Trainingsverteilungen vergleichen – **wöchentlich oder monatlich**, je nachdem, wie schnell sich dein Anwendungsbereich verändert. Und lege die Trainingsverteilungen als Referenz gleich beim Training ab.'
        },
        {
          type: 'text',
          md: `### Verfahren zur Drift-Erkennung

1. **Zusammenfassende Statistiken:** Mittelwert, Median, Standardabweichung vergleichen. Lag der Transaktionsbetrag im Training im Schnitt bei 100 $, jetzt bei 140 $, ist das eine messbare Verschiebung.
2. **Statistische Tests:**
   - Der **Kolmogorow-Smirnow-Test (KS-Test)** vergleicht die kumulierten Verteilungen zweier Stichproben und misst den größten Abstand; ein kleiner p-Wert spricht gegen „gleiche Verteilung". Achtung: Bei sehr vielen Datenpunkten wird fast jede winzige Abweichung „signifikant" – schau auch auf die Größe des Unterschieds.
   - Der **Population Stability Index (PSI)** teilt ein Merkmal in Klassen (Bins) und summiert **(Anteil aktuell − Anteil Training) · ln(Anteil aktuell / Anteil Training)**. Verbreitet in der Kreditrisiko-Praxis; als Faustregel gilt oft: unter 0,1 stabil, 0,1–0,25 beobachten, über 0,25 deutliche Verschiebung – das ist eine Konvention, kein Standard.
3. **ML-basierte Verfahren:** Trainiere einen Klassifikator, der Trainings- von Produktivdaten unterscheiden soll. Gelingt ihm das deutlich besser als Raten, haben sich die Verteilungen auseinanderentwickelt. **Domänenklassifikatoren** erkennen so auch subtile, mehrdimensionale Drift, die Einzelstatistiken übersehen (vgl. Rabanser et al., „Failing Loudly", 2019).
4. **Visuelle Prüfung:** Histogramme oder Dichtekurven von Trainings- und aktuellen Daten übereinanderlegen – Menschen sehen Muster oft, bevor ein Test anschlägt.`
        },
        {
          type: 'praxis',
          title: 'PSI für das Merkmal „Warenkorbwert" berechnen',
          company: 'Modehaus Brückner Online GmbH (fiktiv), Retourenprognose – alle Zahlen fiktiv',
          scenario: `Ein Modell sagt voraus, welche Bestellungen wahrscheinlich retourniert werden. Du prüfst das Merkmal „Warenkorbwert" in drei Klassen. **Training:** bis 50 € = 40 %, 50–150 € = 40 %, über 150 € = 20 %. **Letzter Monat:** 30 % / 40 % / 30 %.`,
          steps: [
            'Klasse „bis 50 €": (0,30 − 0,40) · ln(0,30 / 0,40) = (−0,10) · (−0,288) ≈ 0,029.',
            'Klasse „50–150 €": (0,40 − 0,40) · ln(1) = 0.',
            'Klasse „über 150 €": (0,30 − 0,20) · ln(0,30 / 0,20) = 0,10 · 0,405 ≈ 0,041.',
            'PSI ≈ 0,029 + 0 + 0,041 = **0,07** → nach Faustregel noch stabil.',
            'Trotzdem prüfen: Die Retourenquote in der Klasse „über 150 €" steigt laut Feedback-Daten – Hinweis auf **Konzeptdrift**, die der PSI der Eingaben nicht zeigen kann.',
            'Entscheidung: Merkmal weiter wöchentlich beobachten, Fehlerrate nach Warenkorbklasse ins Dashboard aufnehmen, Nachtraining für den nächsten Monatszyklus einplanen.'
          ],
          takeaway: 'Ein unauffälliger Eingabe-Test heißt nicht, dass alles gut ist. **Datendrift erkennst du an den Eingaben, Konzeptdrift an den Ergebnissen** – du brauchst beides.'
        },
        {
          type: 'table',
          caption: 'Nachtrainingsstrategien im Vergleich (Skript S. 144)',
          head: ['Strategie', 'Vorteile', 'Nachteile', 'Geeignet für'],
          rows: [
            ['**Zeitgesteuert** (wöchentlich, monatlich, vierteljährlich)', 'Planbar, einfach, garantiert regelmäßige Aktualisierung', 'Trainiert ggf. unnötig nach oder wartet bei plötzlichen Änderungen zu lange', 'Stabile Anwendungsbereiche, begrenzte Ressourcen'],
            ['**Anlassbezogen** (leistungs- oder driftbasiert)', 'Ressourceneffizient, reagiert auf Veränderungen', 'Erfordert ausgefeilte Überwachung und klare Auslöser, unvorhersehbare Zeitpunkte', 'Dynamische Bereiche, ausgereiftes MLOps'],
            ['**Hybrid**', 'Zeitplan als Sicherheitsnetz + schnelle Reaktion auf gravierende Probleme', 'Aufwendiger in Umsetzung und Verwaltung', 'Die meisten Produktivsysteme']
          ]
        },
        {
          type: 'text',
          md: `Viele Unternehmen beginnen **zeitgesteuert** und wechseln zu **anlassbezogenen** Ansätzen, sobald ihre Überwachung reifer ist. Welcher Genauigkeitsabfall ein Nachtraining rechtfertigt, ist laut Skript nicht allgemeingültig zu beantworten – lege die Auslöser gemeinsam mit dem Fachbereich anhand der Fehlerkosten fest.

### Welche Daten fürs Nachtraining?

- **Alle historischen Daten:** bewahrt langfristige Muster, kann aktuelle Trends aber verwässern.
- **Nur aktuelle Daten:** bildet die Gegenwart ab, wirft aber nützliche Historie weg (z. B. das letzte Weihnachtsgeschäft).
- **Gleitendes Zeitfenster** (z. B. die letzten 12 Monate): häufiger Kompromiss aus Aktualität und Datenvolumen. Beachte dabei auch die **Speicherbegrenzung nach DSGVO** (Kapitel 5.4).`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Bedarf erkennen', md: 'Zeitplan erreicht oder Drift-/Leistungsschwelle überschritten.' },
            { title: '2 · Daten extrahieren', md: 'Aktuelle, gelabelte Daten im festgelegten Zeitfenster ziehen und als Snapshot versionieren.' },
            { title: '3 · Vorverarbeiten', md: 'Gleiche Aufbereitungsschritte wie beim ursprünglichen Training – automatisiert.' },
            { title: '4 · Kandidaten trainieren', md: 'Einen oder mehrere Modellkandidaten mit **unveränderter Architektur** trainieren.' },
            { title: '5 · Validieren', md: 'Mit zurückgehaltenen, aktuellen Daten testen – nie ohne Validierung bereitstellen.' },
            { title: '6 · Vergleichen', md: 'Neues Modell gegen das bestehende Produktivmodell auf denselben aktuellen Daten (Champion/Challenger); optional A/B-Test (siehe 6.4).' },
            { title: '7 · Bedingt bereitstellen', md: 'Nur wenn der Kandidat besser ist; sonst bleibt das alte Modell, und die Ursache wird untersucht.' }
          ]
        },
        {
          type: 'table',
          caption: 'Häufige Fehler beim Nachtrainieren (Skript S. 145–146)',
          head: ['Fehler', 'Warum problematisch?', 'Besser'],
          rows: [
            ['Modellarchitektur beim Nachtrainieren ändern', 'Leistungsänderungen lassen sich nicht mehr Daten oder Modell zuordnen', 'Architekturwechsel als eigenes Experiment'],
            ['Trainingsdaten nicht versionieren', 'Reproduzierbarkeit geht verloren', 'Snapshot, Hyperparameter und Kennzahlen je Lauf ablegen'],
            ['Automatisch ohne Validierung bereitstellen', 'Leistungsrückschritte gehen live', 'Validierung + Vergleich als Pflichtschritt der Pipeline'],
            ['Datenaufbereitung unterschätzen', 'Saubere, zugängliche Nachtrainingsdaten fehlen', 'Daten-Pipeline als eigenes Arbeitspaket planen (Kapitel 3)']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Dokumentiere jedes Nachtrainieren',
          md: 'Mit Versionskontrolle – inklusive Momentaufnahme der Trainingsdaten, Hyperparametern und Bewertungskennzahlen. Wenn sich das Modellverhalten ändert, weißt du, ob Nachtraining, Drift oder etwas anderes die Ursache ist – und kannst **zurückrollen**, falls das neue Modell schlechter ist.'
        },
        {
          type: 'praxis',
          title: 'Nachtrainingsstrategie für eine Lastprognose',
          company: 'Stadtwerke Kranichfeld GmbH (fiktiv), 220 MA',
          scenario: `Ein Modell prognostiziert den Stromverbrauch im Netzgebiet für den nächsten Tag. Es wurde vor zwei Jahren trainiert und seitdem nie aktualisiert. Seit vielen Kundinnen und Kunden Wärmepumpen und PV-Anlagen installiert haben, liegt der Prognosefehler an kalten und an sonnigen Tagen deutlich höher.`,
          steps: [
            'Diagnose: Datendrift (andere Verbrauchsprofile, mehr Einspeisung) **und** Konzeptdrift (Temperatur wirkt durch Wärmepumpen stärker auf den Verbrauch als früher).',
            'Strategie hybrid: monatliches Nachtraining als Sicherheitsnetz, zusätzlich anlassbezogen, wenn der mittlere absolute Fehler sieben Tage über der Referenzschwelle liegt.',
            'Trainingsdaten: gleitendes Fenster von 24 Monaten, damit jede Jahreszeit zweimal enthalten ist; ältere Daten nur für Vergleichstests.',
            'Validierung: Kandidat und Produktivmodell auf den letzten vier Wochen vergleichen (Champion/Challenger); Bereitstellung nur bei klarer Verbesserung, Freigabe durch die Netzleitstelle.',
            'Dokumentation in MLflow: Daten-Snapshot, Parameter, Fehlermaße je Version; Rückfall auf Vorversion jederzeit möglich.'
          ],
          takeaway: 'Drift ist bei Energie, Handel und Finanzen kein Ausnahmefall, sondern Normalzustand. **Wer Nachtraining plant, validiert und dokumentiert, macht aus Drift Routine.**'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Nach einer Gesetzesänderung sind die bisher „richtigen" Antworten eines Klassifikators teilweise falsch, obwohl die Eingaben gleich aussehen. Wie nennt man das?',
          options: ['Datendrift', 'Konzeptdrift', 'Overfitting', 'Latenz'],
          answer: 1,
          explain: 'Beim Konzeptdrift ändert sich der Zusammenhang zwischen Eingabe und richtiger Ausgabe. Er ist laut Skript besonders tückisch, weil die Überwachung der Eingaben ihn nicht zeigt.'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die Schritte einer automatisierten Nachtrainingspipeline in die richtige Reihenfolge.',
          items: ['Nachtrainingsbedarf erkennen', 'Daten extrahieren und versionieren', 'Vorverarbeiten', 'Modellkandidaten trainieren', 'Validieren und mit dem Produktivmodell vergleichen', 'Nur bei Verbesserung bereitstellen'],
          explain: 'So beschreibt das Skript die Pipeline (S. 145): von der Erkennung bis zur bedingten Bereitstellung – nur wenn das neue Modell das bestehende übertrifft.'
        }
      ]
    },
    // ───────────────────────── 6.4 (1) ─────────────────────────
    {
      id: 'k6-l6',
      title: '6.4 Kontinuierliche Verbesserung: Rückmeldungsschleifen, A/B-Tests und Versionierung',
      minutes: 30,
      skript: { chapter: '6.4', page: 146 },
      blocks: [
        {
          type: 'text',
          md: `Stell dir zwei Unternehmen vor, die im selben Monat dasselbe KI-System starten. Das erste betrachtet es danach als „fertig". Das zweite verbessert es jedes Quartal ein kleines Stück. Nach zwei Jahren spielen beide in unterschiedlichen Ligen. **Kontinuierliche Verbesserung** macht aus einer einmaligen Einführung einen dauerhaften Wettbewerbsvorteil.`
        },
        {
          type: 'skript',
          chapter: '6.4',
          page: 146,
          quote: 'Kontinuierliche Verbesserung verwandelt KI von einer einmaligen Technologieeinführung in einen dauerhaften Wettbewerbsvorteil',
          md: `- KI-Systeme sind **sich weiterentwickelnde Fähigkeiten**, keine abgeschlossenen Projekte. Wer sie als „fertig" betrachtet, verliert Leistung und Vorsprung; wer verbessert, profitiert von einem **Zinseszinseffekt**.
- **Rückmeldungsschleifen** auf mehreren Zeitebenen: Echtzeit (Betriebsparameter), täglich (Vorhersagen verfeinern), monatlich (strategische Verbesserungen) – Beispiel dynamische Preisgestaltung.
- **A/B-Tests** teilen den Verkehr zwischen Kontroll- und Testgruppe und zeigen statistisch, ob eine Verbesserung echt ist. Genug Laufzeit, Stichprobengröße, zeitliche Einflüsse beachten; vorsichtig starten (z. B. 95 % / 5 %).
- **Modellversionierung** mit Metadaten und **Modellregister** (Versionen, Kennzahlen, Freigabestatus, Bereitstellungshistorie; Entwicklung → Staging → Produktion).
- **Außerbetriebnahme** als geordnete letzte Phase; auch die **MLOps-Prozesse selbst** werden laufend verbessert.`
        },
        {
          type: 'table',
          caption: 'Rückmeldungsschleifen auf drei Zeitebenen – Beispiel dynamische Preisgestaltung (Skript S. 146–147)',
          head: ['Schleife', 'Takt', 'Was passiert?'],
          rows: [
            ['**Schnell**', 'Echtzeit', 'Preise werden über den Tag anhand aktueller Nachfragesignale und Kaufraten angepasst'],
            ['**Mittel**', 'Täglich', 'Tägliche Verkaufsdaten verfeinern die Schätzungen der Preiselastizität je Produktkategorie'],
            ['**Langsam**', 'Monatlich', 'Tiefenanalyse der Preisstrategie; ggf. neue Merkmale (z. B. saisonale Muster) oder überarbeitete Modellarchitektur']
          ]
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Erfassen', md: 'Feedback dort einsammeln, wo gearbeitet wird: Daumen hoch/runter, Korrekturen an KI-Vorschlägen, kurze Freitext-Hinweise, echte Ergebnisse.' },
            { title: '2 · Auswerten', md: 'Regelmäßig (z. B. alle zwei Wochen) Muster suchen: Welche Anliegen, Produkte oder Teams sind auffällig?' },
            { title: '3 · Priorisieren', md: 'Häufige und teure Fehler zuerst – nicht der lauteste Einzelfall.' },
            { title: '4 · Verbessern', md: 'Merkmale, Trainingsdaten, Prompt oder Wissensbasis anpassen; ggf. Nachtraining (siehe 6.3).' },
            { title: '5 · Testen', md: 'Validierung bzw. A/B-Test, bevor die Änderung für alle gilt.' },
            { title: '6 · Zurückmelden', md: 'Den Nutzenden zeigen, was sich durch ihr Feedback geändert hat – das erhält die Bereitschaft, Rückmeldung zu geben.' }
          ]
        },
        {
          type: 'text',
          md: `### A/B-Tests: Verbesserungen belegen statt vermuten

Statt das alte Modell für alle auf einmal zu ersetzen, teilt ein A/B-Test den Verkehr **zufällig** zwischen dem bestehenden Modell (**Kontrollgruppe**) und dem neuen (**Testgruppe**). Eine statistische Auswertung zeigt, ob der Unterschied echt oder Zufall ist. Wichtige Regeln aus Skript und Praxis:

- **Erfolgskennzahl und Signifikanzschwelle vor dem Start festlegen** – und nicht beim ersten guten Zwischenstand abbrechen („Peeking").
- **Lange genug laufen lassen** und **genug Fälle** sammeln – je nach Verkehr und Effektgröße Tage oder Wochen.
- **Zeitliche Einflüsse** beachten: Nur am Wochenende gegen werktags zu testen, misst Nutzerverhalten statt Modellqualität.
- **Eine Änderung pro Test** – sonst weißt du nicht, was gewirkt hat.
- **Leitplanken-Metriken** mitbeobachten (z. B. Kosten, Beschwerden), damit eine Verbesserung nicht anderswo schadet.
- **Vorsichtig starten:** z. B. 95 % Kontrolle / 5 % Test, dann schrittweise erhöhen.

Für KMU mit wenig Volumen sind Alternativen oft praktischer: **Stufen-Roll-out** (erst Team A, später Team B) oder ein Vorher-Nachher-Vergleich mit einer Kontrollgruppe, die vorerst ohne die Änderung arbeitet.`
        },
        {
          type: 'steps',
          items: [
            { title: 'Entwicklung', md: 'Neue Version wird trainiert und mit Metadaten registriert: Daten-Snapshot, Hyperparameter, Codeversion, Kennzahlen.' },
            { title: 'Staging', md: 'Test in produktionsnaher Umgebung: Validierung, Last- und Integrationstests, ggf. Schattenbetrieb parallel zur Produktion.' },
            { title: 'Produktion', md: 'Freigabe im Modellregister, schrittweise Ausrollung (A/B); das Register zeigt jederzeit, welche Version produktiv ist.' },
            { title: 'Archiv / Rollback', md: 'Vorversionen bleiben abrufbar – Zurückrollen in Minuten, Untersuchung auch Monate später reproduzierbar.' }
          ]
        },
        {
          type: 'text',
          md: `### Außerbetriebnahme: Auch Modelle gehen in Rente

Nicht jedes Modell soll ewig laufen. Wenn sich Anforderungen ändern, bessere Ansätze verfügbar sind oder die Wartungskosten den Nutzen übersteigen, sorgt ein geordnetes Verfahren für den Abschied: **Nutzer auf das Nachfolgesystem überführen**, **Modellartefakte archivieren** (Nachweispflichten, Wissenssicherung – bei Hochrisiko-KI auch für Dokumentationspflichten nach AI Act) und einen **Rückblick** durchführen, um die Erkenntnisse festzuhalten. Entferne das System danach auch aus dem **KI-Inventar** (Kapitel 5.1).

### Der Zinseszinseffekt – kurz nachgerechnet

Das Skript rechnet: **2 % Verbesserung pro Quartal** ergeben nach zwei Jahren (8 Quartale) **16 %**. Das ist die einfache Summe. Wenn jede Verbesserung *relativ* auf der vorherigen aufbaut, sind es sogar 1,02⁸ ≈ 1,172, also rund **17 %**. Vorsicht bei Genauigkeitswerten in Prozentpunkten: Ein Modell mit 90 % Genauigkeit kann nicht beliebig weiter um 2 Punkte steigen – je näher am Maximum, desto teurer wird jeder Fortschritt.

Auch die **MLOps-Prozesse selbst** verdienen diese Schleife: Was bremst uns? Was verursacht wiederkehrende Probleme? Wie steigern wir Qualität und Effizienz?`
        },
        {
          type: 'praxis',
          title: 'Ein neues Empfehlungsmodell vorsichtig testen',
          company: 'Zoofachhandel Pfotenglück GmbH (fiktiv), Onlineshop, 60 MA, Kassel – alle Zahlen fiktiv',
          scenario: `Das Data-Team hat ein neues Empfehlungsmodell, das im Offline-Test 8 % mehr Klicks verspricht. Die Geschäftsführung will es „sofort für alle" ausrollen, weil das Weihnachtsgeschäft beginnt.`,
          steps: [
            'Hypothese, Erfolgskennzahl (Umsatz pro Besuch) und Leitplanken (Retourenquote, Ladezeit) vor dem Start festlegen; Signifikanzniveau und Mindestlaufzeit (zwei volle Wochen, damit Wochentage und Wochenenden enthalten sind) dokumentieren.',
            'Start mit 95 % Kontrolle / 5 % Test; nach drei Tagen ohne Auffälligkeiten bei den Leitplanken auf 80 / 20 erhöhen.',
            'Kein Peeking: Die Auswertung erfolgt erst nach Ablauf der geplanten Laufzeit.',
            'Ergebnis: Klicks deutlich höher, Umsatz pro Besuch aber nur leicht und nicht signifikant höher – das Modell empfiehlt häufiger günstiges Zubehör.',
            'Entscheidung: Modell im Register als „Kandidat" belassen, Zielgröße im Training von Klicks auf Warenkorbwert umstellen, neu testen. Version und Testbericht werden archiviert.'
          ],
          takeaway: 'Offline-Gewinne sind nur Versprechen. **Erst der kontrollierte A/B-Test mit vorab festgelegter Geschäftskennzahl zeigt, ob die Verbesserung echt ist.**'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Du willst prüfen, ob ein neues Modell die Kaufrate verbessert. Was ist laut Skript das sauberste Vorgehen?',
          options: [
            'Modell für alle umstellen und nach zwei Tagen die Stimmung im Team abfragen',
            'Verkehr zufällig aufteilen (z. B. 95/5), Erfolgskennzahl und Signifikanzschwelle vorab festlegen, lange genug laufen lassen',
            'Gleichzeitig Modell, Merkmale und Oberfläche ändern, um Zeit zu sparen',
            'Den Test abbrechen, sobald die neue Variante erstmals vorne liegt'
          ],
          answer: 1,
          explain: 'Zufällige Zuteilung, vorsichtiger Start, vorab festgelegte Kennzahl und ausreichende Laufzeit – so verhinderst du, dass Zufallsrauschen für eine echte Verbesserung gehalten wird (vgl. Kohavi, Tang & Xu 2020).'
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze den Begriff.',
          text: 'Ein {{Modellregister|Model Registry|Modell-Register}} katalogisiert alle Modelle mit Versionen, Leistungskennzahlen, Freigabestatus und Bereitstellungshistorie.',
          explain: 'Modellregister (z. B. in MLflow) zeigen, welche Version produktiv ist, und steuern den Weg von Entwicklung über Staging in die Produktion – mit Rückfalloption.'
        }
      ]
    },
    // ───────────────────────── 6.4 (2) ─────────────────────────
    {
      id: 'k6-l7',
      title: '6.4 Nachhaltiger KI-Betrieb: ökologisch und organisatorisch',
      minutes: 25,
      skript: { chapter: '6.4', page: 148 },
      blocks: [
        {
          type: 'skript',
          chapter: '6.4',
          page: 148,
          md: `- **Nachhaltigkeit im KI-Betrieb** heißt langfristige Tragfähigkeit in drei Dimensionen: **ökologisch**, **wirtschaftlich**, **organisatorisch**.
- **Ökologisch:** CO₂-Fußabdruck von Training und Betrieb; große Modelle können laut Skript so viel Energie verbrauchen wie Hunderte Transatlantikflüge. Hebel: effiziente Architekturen, Trainings- und Bereitstellungsstrategien, **Modellkomprimierung** (Quantisierung, Pruning, Wissensdestillation) – kleinere Modelle erreichen oft 95 % und mehr der Leistung großer.
- **Wirtschaftlich:** Nutzen muss die **Gesamtbetriebskosten** über den ganzen Lebenszyklus übersteigen (Infrastruktur, Datenverwaltung, Überwachung, Nachtraining, menschliche Aufsicht) – viele unterschätzen die Betriebskosten (nächste Lektion).
- **Organisatorisch:** Betrieb darf nicht von seltenem Spezialwissen oder einzelnen Schlüsselpersonen abhängen – Prozesse dokumentieren, gegenseitig einarbeiten, Komplexität beherrschbar halten.`
        },
        {
          type: 'table',
          caption: 'Drei Dimensionen der Nachhaltigkeit im KI-Betrieb (Skript S. 149)',
          head: ['Dimension', 'Zentrale Aspekte', 'Verbesserungsstrategien'],
          rows: [
            ['**Ökologisch**', 'Energieverbrauch, CO₂-Fußabdruck, Wasser', 'Effiziente Architekturen, Modellkomprimierung, optimierte Infrastruktur, kleinstes passendes Modell'],
            ['**Wirtschaftlich**', 'Infrastrukturkosten, betrieblicher Aufwand', 'Bedarfsgerechte Ressourcendimensionierung, Automatisierung, Wirtschaftlichkeitsprüfung'],
            ['**Organisatorisch**', 'Fachkräftebedarf, Wissenskonzentration', 'Dokumentation, gegenseitige Einarbeitung, beherrschbare Komplexität']
          ]
        },
        {
          type: 'text',
          md: `### Wo KI Ressourcen verbraucht

Wenn über den „Stromverbrauch von KI" gesprochen wird, werden oft drei sehr unterschiedliche Dinge vermischt:

1. **Training** – das einmalige (aber sehr aufwendige) Lernen eines Modells auf großen Rechenclustern über Wochen oder Monate.
2. **Inferenz** – jede einzelne Nutzung: jeder Prompt, jede Vorhersage, jeder Workflow-Durchlauf. Pro Anfrage klein, aber milliardenfach.
3. **Hardware & Infrastruktur** – Herstellung von Chips und Servern („graue" Emissionen), Kühlung, Stromversorgung, Gebäude – und das Wasser für die Kühlung.

Als KI-Manager:in beeinflusst du vor allem die **Inferenz**: welches Modell, wie oft, mit wie vielen Daten bzw. Tokens, auf welcher Infrastruktur.`
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

Eine zweite Aussage derselben Studie ist für dich noch wichtiger: Die Wirkungen sind **ungefähr proportional zur Modellgröße** – ein **zehnmal größeres Modell** verursacht für dieselbe Menge erzeugter Tokens etwa **eine Größenordnung mehr** Umweltwirkung. Wie viel ein einzelner Prompt verbraucht und was das Energieeffizienzgesetz verlangt, vertieft **Kapitel 8 (8.4)**.`
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Modellkomprimierung: klein, aber fast so gut',
          md: `Das Skript empfiehlt **Quantisierung** (Zahlen mit geringerer Genauigkeit speichern, z. B. 8 oder 4 Bit statt 16), **Pruning** (unwichtige Verbindungen entfernen) und **Wissensdestillation** (ein kleines „Schüler"-Modell lernt von einem großen „Lehrer"; Hinton, Vinyals & Dean 2015). Ein bekanntes Beispiel: **DistilBERT** ist 40 % kleiner und 60 % schneller als BERT und behält laut den Autoren 97 % seiner Sprachverständnis-Leistung ([Sanh et al. 2019](https://arxiv.org/abs/1910.01108)). Die „95 % und mehr" aus dem Skript sind also realistisch – aber immer mit deinen eigenen Testdaten prüfen.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'PUE', back: 'Power Usage Effectiveness (im EnEfG: Energieverbrauchseffektivität): Gesamtenergie des Rechenzentrums ÷ Energie der IT. 1,0 wäre ideal; Google nennt für seine Flotte 1,09.' },
            { front: 'CO₂e', back: 'CO₂-Äquivalente: alle Treibhausgase in ihrer Wirkung auf CO₂ umgerechnet. Hängt stark vom Strommix des Standorts ab.' },
            { front: 'Wasserverbrauch', back: 'Direkt: Kühlwasser im Rechenzentrum. Indirekt: Wasser für die Stromerzeugung. Studien unterscheiden sich stark darin, was sie einrechnen.' },
            { front: 'Graue Emissionen', back: 'Emissionen aus Herstellung und Transport der Hardware (Chips, Server) – fallen an, bevor die erste Anfrage läuft.' },
            { front: 'Bus-Faktor', back: 'Wie viele Personen dürften ausfallen, bevor der Betrieb stillsteht? Bei „1" besteht das organisatorische Nachhaltigkeitsrisiko, vor dem das Skript warnt.' }
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
          scenario: `Das Unternehmen erstellt einen freiwilligen Nachhaltigkeitsbericht. Die Geschäftsführung fragt: „Wie viel CO₂ verursacht eigentlich unsere KI-Nutzung – und sind wir da gut aufgestellt?" Genutzt werden ein Enterprise-Chat, zwei Workflows mit Cloud-Modellen und ein Qualitätsprüfungsmodell auf einem eigenen Server, das nur ein Mitarbeiter wirklich versteht.`,
          steps: [
            'Inventar erstellen: Welche KI-Dienste, welche Modelle, wie viele Anfragen bzw. Tokens pro Monat (aus Abrechnungen und Workflow-Logs)?',
            'Nach Verantwortungsbereich trennen: eigener Server (Stromzähler, Strommix bekannt) vs. Cloud-Dienste (Angaben der Anbieter: Energie pro Anfrage, PUE, Strommix, Standort).',
            'Wo keine Daten vorliegen: mit veröffentlichten Werten als **Spanne** rechnen und Annahmen offenlegen.',
            'Ökologischer Hebel: Für das Qualitätsprüfungsmodell eine quantisierte Version testen – gleiche Erkennungsrate auf dem Testset, deutlich weniger Rechenzeit.',
            'Organisatorischer Hebel: Betriebshandbuch für das Prüfmodell schreiben, eine zweite Person einarbeiten, Wissen nicht an einer Person hängen lassen.',
            'Im Bericht ehrlich formulieren: Größenordnung, Quellen, Unsicherheit – und welche Maßnahmen ergriffen wurden.'
          ],
          takeaway: 'Exakte Zahlen gibt es selten. Professionell ist eine **transparente Abschätzung mit Spannen und Quellen** – plus konkrete Maßnahmen in allen drei Nachhaltigkeitsdimensionen.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Laut Mistral-Lebenszyklusanalyse verursacht ein zehnmal größeres Modell für dieselbe Menge erzeugter Tokens …',
          options: ['etwa gleich viel Umweltwirkung', 'etwa doppelt so viel', 'etwa eine Größenordnung mehr Umweltwirkung', 'weniger, weil es effizienter ist'],
          answer: 2,
          explain: 'Mistral beschreibt die Wirkungen als ungefähr proportional zur Modellgröße. Daraus folgt: das passende, nicht das größte Modell wählen – und Komprimierung prüfen.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Maßnahme der Nachhaltigkeitsdimension zu.',
          pairs: [
            ['Quantisierung des Modells', 'Ökologisch'],
            ['Wirtschaftlichkeitsprüfung der Gesamtbetriebskosten', 'Wirtschaftlich'],
            ['Gegenseitige Einarbeitung im Betriebsteam', 'Organisatorisch']
          ],
          explain: 'Das Skript betont: Alle drei Dimensionen brauchen bewusste Aufmerksamkeit (S. 149).'
        }
      ]
    },
    // ───────────────────────── 6.4 (3) ─────────────────────────
    {
      id: 'k6-l8',
      title: '6.4 Wirtschaftlich nachhaltig: Kosten pro Vorgang, Token-Kosten und FinOps',
      minutes: 25,
      skript: { chapter: '6.4', page: 148 },
      blocks: [
        {
          type: 'skript',
          chapter: '6.4',
          page: 148,
          md: 'Wirtschaftliche Nachhaltigkeit heißt laut Skript: Ein KI-System muss über seinen **gesamten Lebenszyklus** mehr Nutzen bringen, als es kostet – nicht nur bei der Einführung. Dafür müssen die **Gesamtbetriebskosten** verfolgt werden: Infrastruktur, Datenverwaltung, Überwachung, Nachtraining und menschliche Aufsicht. Viele Unternehmen stellen fest, dass der Betrieb deutlich mehr kostet als geplant – das untergräbt die wirtschaftliche Rechtfertigung. Strategien: bedarfsgerechte Ressourcendimensionierung, Automatisierung, regelmäßige Wirtschaftlichkeitsprüfung.'
        },
        {
          type: 'text',
          md: `### Kosten pro Vorgang

**Kosten pro Vorgang = (Lizenzen + nutzungsabhängige Gebühren + Betrieb + menschliche Prüfzeit) / Anzahl Vorgänge**

Vergleiche diesen Wert mit den Kosten pro Vorgang **vor** der Einführung (Baseline). *Fiktives Beispiel:* Früher kostete eine E-Mail-Bearbeitung 8 Minuten Arbeitszeit à 0,80 €/Minute = 6,40 €. Mit KI: 3 Minuten Prüfung (2,40 €) + 0,15 € Nutzungskosten + 0,25 € anteilige Lizenz und Betrieb = 2,80 €. Wichtig: Steigt die Nutzung, steigen auch die nutzungsabhängigen Kosten – beobachte deshalb beide Werte. Rechne verschiedene Szenarien im ROI-Rechner durch (Grundlagen des Business Case: **Kapitel 2, 2.3**).`
        },
        { type: 'interactive', widget: 'roi-calculator', props: {} },
        {
          type: 'text',
          md: `### Token-Kosten bei generativer KI

KI-APIs rechnen nach **Tokens** ab – Textbausteinen von grob einem dreiviertel Wort im Englischen (im Deutschen oft etwas mehr Tokens pro Wort). Bezahlt werden **Eingabe-Tokens** (Prompt, System Message, Dokumente, Verlauf) und **Ausgabe-Tokens** (Antwort, bei Reasoning-Modellen auch Denk-Tokens). Ausgabe-Tokens sind meist deutlich teurer als Eingabe-Tokens.

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
30.000 Anfragen pro Monat (Beispiel), je **1.500 Eingabe-** und **300 Ausgabe-Tokens** = **45 Mio. Eingabe-** und **9 Mio. Ausgabe-Tokens** pro Monat:

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
          title: 'Merksatz',
          md: 'Der nachhaltigste KI-Workflow ist derjenige, der mit dem **kleinsten passenden Modell** echten Nutzen erzeugt.'
        },
        {
          type: 'text',
          md: `### FinOps für KI
**FinOps** ist eine Praxis aus dem Cloud-Kostenmanagement. Die FinOps Foundation beschreibt drei Phasen, die iterativ durchlaufen werden: **Inform** (Transparenz: Wer verbraucht was?), **Optimize** (Verbesserungen identifizieren) und **Operate** (Änderungen umsetzen und dauerhaft steuern). Übertragen auf KI heißt das: Tokens und Kosten **pro Use Case** sichtbar machen, Budgets und Alarme setzen, Modelle regelmäßig neu bewerten – und kleines gegen großes Modell per **A/B-Test** (Lektion 6.4 oben) vergleichen. FinOps ist damit die wirtschaftliche Seite der kontinuierlichen Verbesserung.`
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
            '**Operate**: Monatsbudget je Use Case mit Alarm bei 80 %; Kennzahl „Kosten pro bearbeitetem Ticket" ins Geschäfts-Dashboard.'
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
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Posten gehören laut Skript zu den Gesamtbetriebskosten eines KI-Systems? (Mehrfachauswahl)',
          options: ['Infrastruktur', 'Überwachung und Nachtraining', 'Menschliche Aufsicht', 'Nur die einmalige Entwicklung'],
          answer: [0, 1, 2],
          explain: 'Das Skript nennt Infrastruktur, Datenverwaltung, Überwachung, Nachtraining und menschliche Aufsicht. Wer nur die Entwicklung rechnet, unterschätzt den Betrieb.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'single',
      q: 'Warum braucht ML eigene Betriebspraktiken (MLOps) statt nur DevOps?',
      options: [
        'Weil ML-Code nicht versioniert werden kann',
        'Weil sich die Modellleistung ohne Codeänderung verschlechtern kann, wenn sich die Daten der realen Welt ändern',
        'Weil ML-Systeme keine Server brauchen',
        'Weil DevOps für Cloud-Anwendungen verboten ist'
      ],
      answer: 1,
      explain: 'Klassische Software verhält sich morgen wie heute. Ein Modell hängt davon ab, wie ähnlich die Einsatzdaten den Trainingsdaten sind – deshalb überwacht MLOps die Vorhersagequalität und trainiert nach (Skript S. 133–134).'
    },
    {
      type: 'order',
      q: 'Bringe die MLOps-Reifestufen nach Skript in die richtige Reihenfolge.',
      items: ['Manuell', 'Automatisiertes Training', 'Automatisierte Bereitstellung (CI/CD)', 'Fortlaufendes Training'],
      explain: 'Die meisten Unternehmen starten bei Stufe 0 und entwickeln sich schrittweise weiter – entlang echter Engpässe, nicht „direkt auf Stufe 3".'
    },
    {
      type: 'match',
      q: 'Ordne die Kennzahl der Überwachungsebene zu.',
      pairs: [
        ['Recall', 'Technische Leistung'],
        ['Durchsatz (Vorhersagen pro Sekunde)', 'Betrieb'],
        ['Umsatz pro Nutzer', 'Geschäft'],
        ['Merkmalsverteilung', 'Datendrift-Erkennung']
      ],
      explain: 'Technische, betriebliche und geschäftliche Kennzahlen werden gleichzeitig überwacht; Merkmalsverteilungen im Dashboard dienen der Drift-Erkennung (Skript S. 137–139).'
    },
    {
      type: 'single',
      q: 'Nur 2 % aller Fälle sind positiv. Ein Modell sagt immer „negativ". Welche Aussage stimmt?',
      options: ['Accuracy 2 %, Recall 100 %', 'Accuracy 98 %, Recall 0 %', 'Accuracy 50 %, Recall 50 %', 'Accuracy 98 %, Precision 98 %'],
      answer: 1,
      explain: 'Das Accuracy-Paradox: 98 % richtig, aber kein einziger positiver Fall gefunden. Bei unausgewogenen Klassen immer Precision und Recall betrachten.'
    },
    {
      type: 'single',
      q: 'TP = 60, FP = 20, FN = 40. Wie hoch ist der Recall?',
      options: ['75 %', '60 %', '40 %', '33 %'],
      answer: 1,
      explain: 'Recall = 60 / (60 + 40) = 60 %. Die Precision läge bei 60 / 80 = 75 %.'
    },
    {
      type: 'tf',
      q: 'Warnschwellen sollten auf runden Zahlen beruhen (z. B. „Alarm unter 90 % Genauigkeit"), weil sie so für alle Modelle gleich gelten.',
      answer: false,
      explain: 'Laut Skript sollen Schwellen auf einem statistischen Verständnis der normalen Schwankungsbreite beruhen. 90 % kann für ein Modell sinnvoll, für ein anderes völlig unpassend sein.'
    },
    {
      type: 'multi',
      q: 'Welche Aussagen zur Drift stimmen? (Mehrfachauswahl)',
      options: [
        'Datendrift wird durch Überwachung der Eingaben erkannt',
        'Konzeptdrift ist allein über die Eingaben nicht erkennbar',
        'Drift entsteht nur, wenn jemand den Modellcode ändert',
        'Der Population Stability Index vergleicht die Verteilung eines Merkmals zwischen Training und Gegenwart'
      ],
      answer: [0, 1, 3],
      explain: 'Drift entsteht, weil sich die Welt ändert – nicht der Code. Datendrift zeigt sich in den Eingaben, Konzeptdrift über Ausgaben und Ergebnisse (Skript S. 141–143).'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Fachbegriff.',
      text: 'Verändern sich die Eingabedaten eines Modells im Zeitverlauf, spricht man von {{Datendrift|Data Drift|Merkmalsdrift|Kovariatenverschiebung}}.',
      explain: 'Datendrift (z. B. inflationsbedingt höhere Beträge) ist von Konzeptdrift zu unterscheiden, bei der sich der Zusammenhang zwischen Eingabe und richtiger Antwort ändert.'
    },
    {
      type: 'match',
      q: 'Ordne die Nachtrainingsstrategie ihrem typischen Einsatz zu.',
      pairs: [
        ['Zeitgesteuert', 'Stabile Anwendungsbereiche, begrenzte Ressourcen'],
        ['Anlassbezogen', 'Dynamische Bereiche mit ausgereiftem MLOps'],
        ['Hybrid', 'Die meisten Produktivsysteme']
      ],
      explain: 'Viele beginnen zeitgesteuert und entwickeln sich zu anlassbezogenen Ansätzen, sobald die Überwachung reift (Skript S. 144).'
    },
    {
      type: 'tf',
      q: 'Ein nachtrainiertes Modell kann automatisch bereitgestellt werden, sobald das Training ohne Fehlermeldung durchgelaufen ist.',
      answer: false,
      explain: 'Das Skript betont: Nachtrainierte Modelle nie ohne Validierung bereitstellen. Erst mit aktuellen zurückgehaltenen Daten testen und gegen das Produktivmodell vergleichen.'
    },
    {
      type: 'single',
      q: 'Wie sollte ein A/B-Test für ein neues Modell laut Skript starten?',
      options: ['50 / 50, damit es schnell geht', 'Mit vorsichtiger Aufteilung, z. B. 95 % Kontrolle / 5 % Test, und vorab festgelegten Erfolgskennzahlen', '100 % Test, die Kontrollgruppe ist überflüssig', 'Nur am Wochenende, weil dann weniger los ist'],
      answer: 1,
      explain: 'Ein kleiner Testanteil begrenzt mögliche Nachteile. Erfolgskennzahlen und Signifikanzschwellen werden immer vor dem Start festgelegt; zeitliche Einflüsse (Wochenende vs. Werktag) beachten.'
    },
    {
      type: 'multi',
      q: 'Was gehört zu einer geordneten Außerbetriebnahme eines Modells? (Mehrfachauswahl)',
      options: ['Nutzer auf das Nachfolgesystem überführen', 'Modellartefakte archivieren', 'Rückblick mit gewonnenen Erkenntnissen', 'Alle Unterlagen sofort löschen'],
      answer: [0, 1, 2],
      explain: 'Archivierung dient Vorschriften und Wissenssicherung; der Rückblick hält Erkenntnisse fest (Skript S. 149–150). Sofortiges Löschen widerspricht Nachweispflichten.'
    },
    {
      type: 'match',
      q: 'Ordne die Komprimierungstechnik ihrer Idee zu.',
      pairs: [
        ['Quantisierung', 'Gewichte mit geringerer Zahlengenauigkeit speichern'],
        ['Pruning', 'Unwichtige Verbindungen entfernen'],
        ['Wissensdestillation', 'Kleines Modell lernt von einem großen']
      ],
      explain: 'Komprimierte Modelle sind günstiger, schneller und ökologisch nachhaltiger und erreichen oft 95 % und mehr der Leistung (Skript S. 149).'
    },
    {
      type: 'single',
      q: 'Ein Workflow: 30.000 Anfragen/Monat, je 1.500 Eingabe- und 300 Ausgabe-Tokens, Modell mit 2 $ / 10 $ pro 1 Mio. Tokens. Wie hoch sind die monatlichen Tokenkosten?',
      options: ['18 $', '90 $', '180 $', '1.800 $'],
      answer: 2,
      explain: '45 Mio. Eingabe × 2 $ = 90 $; 9 Mio. Ausgabe × 10 $ = 90 $; zusammen 180 $.'
    }
  ],
  exercises: [
    {
      id: 'k6-e1',
      title: 'Überwachungs- und Wartungskonzept für einen KI-Assistenten in der Hausverwaltung',
      scenario: `Die **Hausverwaltung Brandt & Söhne GmbH (fiktiv)**, 40 Mitarbeitende, Hannover, führt einen KI-Assistenten ein, der Mieteranfragen (Schadensmeldungen, Nebenkostenfragen, Schlüsselverlust) per E-Mail und Kontaktformular erkennt, an die zuständige Person weiterleitet und einen Antwortentwurf erstellt. Die Geschäftsführung fragt: „Woran merken wir, wenn das Ding schlechter wird – und wer kümmert sich dann?"`,
      task: `1. Lege Kennzahlen auf den **drei Überwachungsebenen** (technisch, betrieblich, geschäftlich) fest, plus mindestens eine Nutzungskennzahl.
2. Beschreibe, wie du **Referenzwerte** festlegst, und definiere für drei Kennzahlen **Warnschwellen mit Schweregrad** (kritisch/Warnhinweis/Information) und Verantwortlichen.
3. Beschreibe, wie du **Feedback** erhebst und wie lange es bis zur Rückmeldung dauert.
4. Erläutere, welche **Drift** in diesem Anwendungsfall zu erwarten ist und wie du sie erkennst.
5. Lege eine **Wartungsstrategie** fest (Nachtraining bzw. Anpassung von Prompt/Wissensbasis, Validierung, Versionierung).`,
      deliverable: 'Tabelle + Erläuterung (ca. 300–450 Wörter)',
      template: `Ebene | Kennzahl | Quelle | Referenzwert | Schwelle/Schweregrad | Verantwortlich
...

Referenzwerte: ...
Feedback: ...
Drift: ...
Wartung: ...`,
      rubric: [
        { criterion: 'Kennzahlen auf allen drei Ebenen plus Nutzung', keywords: ['technisch', 'betrieb', 'geschäft', 'latenz', 'recall', 'precision', 'nutzung', 'übernahme'], min: 4, hint: 'Hast du neben der Modellqualität auch Systemzustand, Geschäftsnutzen und Nutzung bedacht?' },
        { criterion: 'Referenzwerte und Warnschwellen mit Schweregrad und Verantwortlichen', keywords: ['referenz', 'baseline', 'schwelle', 'kritisch', 'warnhinweis', 'information', 'verantwort'], min: 4, hint: 'Ab welchem Wert muss wer wie schnell reagieren – und woher kommt der Wert?' },
        { criterion: 'Feedback-Erhebung und Rückmeldungsdauer beschrieben', keywords: ['feedback', 'rückmeld', 'korrektur', 'stichprobe', 'daumen'], min: 2, hint: 'Woher weißt du, ob eine Weiterleitung richtig war?' },
        { criterion: 'Erwartete Drift und Erkennung benannt', keywords: ['drift', 'konzeptdrift', 'datendrift', 'saison', 'verteilung', 'nebenkosten'], min: 2, hint: 'Was ändert sich im Jahr einer Hausverwaltung – und was bei neuen Gesetzen?' },
        { criterion: 'Wartungsstrategie mit Validierung und Versionierung', keywords: ['nachtrain', 'validier', 'version', 'eval', 'rollback', 'zurückroll', 'hybrid', 'zeitgesteuert'], min: 3, hint: 'Wie stellst du sicher, dass eine Änderung wirklich besser ist – und rückgängig gemacht werden kann?' }
      ],
      hints: [
        'Beginne mit der Frage der Geschäftsführung: Welche Folgen hätte eine schlechter werdende KI? (z. B. liegengebliebene Wasserschäden) – daraus ergibt sich, welche Kennzahl kritisch ist.',
        'Die Weiterleitung ist eine Klassifikation – Recall je Anliegenart passt technisch, Latenz und Fehlerquote betrieblich, Zeit bis Erstantwort geschäftlich. Feedback liefern Umleitungen im Ticketsystem und Korrekturen an Entwürfen – praktisch sofort.',
        'Drift: Saisonalität (Nebenkostenabrechnung, Heizperiode), neue Gesetze oder Mietverträge (Konzeptdrift). Wartung: Referenzwerte nach 4–6 Wochen, monatlicher Review, anlassbezogene Anpassung bei Schwellenüberschreitung, Eval-Set vor jeder Änderung, Versionen im Register.'
      ],
      sample: `| Ebene | Kennzahl | Quelle | Referenzwert | Schwelle/Schweregrad | Verantwortlich |
|---|---|---|---|---|---|
| Technisch | Recall „Schadensmeldung" | Stichprobe 50 Fälle/Woche | nach 6 Wochen, z. B. 96 % | < 90 % → **kritisch** | Projektleitung |
| Technisch | Precision je Anliegenart | Ticket-Umleitungen | nach 6 Wochen | −10 Punkte im 4-Wochen-Trend → Warnhinweis | Projektleitung |
| Betrieb | Latenz p95, Fehlerquote | Logs | Woche 1–4 | p95 > 10 s an 3 Tagen → Warnhinweis | IT-Dienstleister |
| Geschäft | Zeit bis Erstantwort | Zeitstempel Postfach | Baseline vor Start | +30 % im Monatsvergleich → Warnhinweis | Teamleitung |
| Nutzung | Übernahmequote Antwortentwürfe | Tool-Logs | nach 6 Wochen | < 50 % → Information für Review | Change-Verantwortliche |

**Referenzwerte:** Die ersten sechs Wochen nach dem Start dienen als Beobachtungsphase; Schwellen ergeben sich aus Mittelwert und Streuung dieser Wochen, nicht aus runden Zahlen. Für Wasserschäden gilt zusätzlich eine harte Grenze.

**Feedback:** Jede Umleitung eines Tickets gilt als Fehlklassifikation, jede Korrektur am Entwurf wird mit Grund erfasst (Daumen + Auswahlliste). Die Rückmeldung kommt praktisch sofort – gute Voraussetzung für schnelle Schleifen.

**Drift:** Datendrift durch saisonale Anliegen (Nebenkostenabrechnung im Frühjahr, Heizungsausfälle im Winter) – Verteilung der Anliegenarten wöchentlich mit dem Referenzzeitraum vergleichen. Konzeptdrift durch neue Gesetze oder Vertragsmuster (z. B. geänderte Abrechnungsregeln) – erkennbar an steigenden Korrekturen bei bestimmten Anliegen.

**Wartung:** Hybrid: monatlicher Review mit Aktualisierung von Wissensbasis und Prompts; anlassbezogen bei kritischen Meldungen. Jede Änderung läuft erst gegen ein Eval-Set aus 150 anonymisierten Anfragen (inkl. Saisonfällen), wird versioniert und schrittweise ausgerollt; Vorversion bleibt für ein Rollback verfügbar. Zuständigkeiten (wer darf zurückrollen?) stehen im Betriebshandbuch.`
    },
    {
      id: 'k6-e2',
      title: 'Betriebsreview: Metriken, Drift und Nachtrainingsentscheidung',
      scenario: `Die **Kreishandwerkerschaft Oberland (fiktiv)** betreibt seit einem Jahr einen Klassifikator, der eingehende Mitgliederanfragen als „dringend" markiert. Für das Quartalsreview liegen vor (alle Zahlen fiktiv):

**(A) Stichprobe der letzten vier Wochen** mit 500 Anfragen: **TP = 45, FP = 30, FN = 15, TN = 410**. Zum Start lag der Recall bei 88 %.

**(B) Merkmal „Anfragekanal"** – Anteil im Training vs. letzter Monat: E-Mail 50 % → 30 %, Kontaktformular 30 % → 40 %, Messenger 20 % → 30 %.

Ein Mitarbeiter schlägt vor: „Wir trainieren einfach jeden Monat automatisch neu und spielen das Ergebnis direkt ein."`,
      task: `1. Berechne für (A) **Accuracy, Precision, Recall und F1** und interpretiere die Werte in Geschäftssprache – auch im Vergleich zum Start.
2. Berechne für (B) den **Population Stability Index** und ordne ihn ein.
3. Welche **Drift-Art(en)** vermutest du, und wie würdest du sie bestätigen?
4. Bewerte den Vorschlag des Mitarbeiters und empfiehl eine **Nachtrainingsstrategie** inkl. Datenauswahl, Validierung und Versionierung.`,
      deliverable: 'Rechenweg + Kurzkonzept (ca. 250–400 Wörter)',
      template: `(A) Accuracy = …  Precision = …  Recall = …  F1 = …
Interpretation: …

(B) PSI = … + … + … = …
Einordnung: …

Drift-Diagnose: …

Bewertung des Vorschlags & Strategie: …`,
      rubric: [
        { criterion: 'Berechnet die vier Metriken korrekt', keywords: ['91', '60', '75', '0,67', '0.67'], min: 3, hint: 'Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = 2PR/(P+R).' },
        { criterion: 'Berechnet und interpretiert den PSI', keywords: ['psi', '0,17', '0.17', '0,1', '0,25', 'beobacht'], min: 2, hint: 'Summiere je Klasse (aktuell − Training) · ln(aktuell / Training).' },
        { criterion: 'Diagnostiziert Drift-Arten und nennt Bestätigungswege', keywords: ['datendrift', 'konzeptdrift', 'kanal', 'fehlerrate', 'je kanal', 'feedback'], min: 2, hint: 'Ändert sich nur die Verteilung der Eingaben – oder auch der Zusammenhang zur Dringlichkeit?' },
        { criterion: 'Bewertet den Vorschlag und empfiehlt eine validierte Strategie', keywords: ['validier', 'vergleich', 'champion', 'version', 'hybrid', 'anlass', 'zeitfenster', 'nicht automatisch'], min: 3, hint: 'Was sagt das Skript zur automatischen Bereitstellung ohne Validierung?' }
      ],
      hints: [
        'Accuracy = (45 + 410) / 500. Für die Precision brauchst du alle als „dringend" markierten Anfragen (TP + FP).',
        'PSI-Terme: E-Mail (0,30 − 0,50) · ln(0,6); Formular (0,40 − 0,30) · ln(1,333); Messenger (0,30 − 0,20) · ln(1,5). Ergebnis zwischen 0,1 und 0,25.',
        'Der Recall ist von 88 % auf 75 % gefallen, und der Kanal-Mix hat sich verschoben: Prüfe die Fehlerrate je Kanal. Strategie: hybrid, gleitendes Fenster, Validierung gegen das Produktivmodell, Bereitstellung nur bei Verbesserung, alles versioniert.'
      ],
      sample: `**(A)** Accuracy = (45 + 410) / 500 = **91 %**. Precision = 45 / 75 = **60 %**. Recall = 45 / 60 = **75 %**. F1 = 2 · 0,60 · 0,75 / 1,35 ≈ **0,67**.
*Interpretation:* Von zehn als dringend markierten Anfragen sind vier nicht dringend – und **jede vierte wirklich dringende Anfrage wird übersehen**. Zum Start war es nur etwa jede achte (Recall 88 %). Die hohe Accuracy täuscht, weil die meisten Anfragen nicht dringend sind. Das ist ein klarer Leistungsabfall.

**(B)** PSI = (0,30 − 0,50) · ln(0,6) + (0,40 − 0,30) · ln(1,333) + (0,30 − 0,20) · ln(1,5) ≈ 0,102 + 0,029 + 0,041 = **0,17**. Nach gängiger Faustregel liegt das im Bereich „beobachten/untersuchen" (0,1–0,25): eine spürbare Verschiebung hin zu Formular und Messenger.

**Drift-Diagnose:** **Datendrift** beim Kanal ist belegt. Vermutlich auch **Konzeptdrift**: Messenger-Nachrichten sind kürzer und formulieren Dringlichkeit anders („bitte schnell!!" statt „Frist am …"). Bestätigung: Recall und Precision **je Kanal** auswerten; wenn der Recall vor allem beim Messenger einbricht, passt das Bild. Zusätzlich die Mitarbeitenden-Korrekturen der letzten Wochen nach Kanal auswerten.

**Bewertung & Strategie:** Monatliches Nachtrainieren ist sinnvoll – **automatisches Einspielen ohne Validierung** aber nicht: Das Skript nennt es ausdrücklich als Fehler, weil Leistungsrückschritte live gehen. Empfehlung **hybrid**: monatlicher Zyklus als Sicherheitsnetz plus anlassbezogenes Nachtraining, wenn der Recall „dringend" in der Wochenstichprobe unter 85 % fällt. Daten: gleitendes Fenster von 12 Monaten, Messenger-Fälle gezielt nachlabeln. Validierung mit zurückgehaltenen Daten der letzten vier Wochen, Vergleich gegen das Produktivmodell (Champion/Challenger), Bereitstellung nur bei besserem Recall ohne deutlichen Precision-Verlust. Architektur beim Nachtraining nicht ändern; Daten-Snapshot, Parameter und Kennzahlen im Modellregister versionieren, Rollback ermöglichen.`
    }
  ],
  glossary: [
    { term: 'MLOps', def: 'Machine Learning Operations: Praktiken, Werkzeuge und Abläufe, um ML-Systeme zuverlässig bereitzustellen, zu überwachen und zu warten – die Brücke zwischen Data Science und Geschäftsnutzen.' },
    { term: 'MLOps-Reifegrad', def: 'Entwicklungsstufe des KI-Betriebs; im Skript Stufe 0 (manuell) bis Stufe 3 (fortlaufendes, automatisiertes Training und Bereitstellung).' },
    { term: 'Modellüberwachung', def: 'Fortlaufende Beobachtung von KI im Produktivbetrieb auf technischer, betrieblicher und geschäftlicher Ebene.' },
    { term: 'Alarmmüdigkeit', def: 'Zustand, in dem Teams Warnmeldungen ignorieren, weil zu viele (Fehl-)Alarme eingehen.' },
    { term: 'Confusion Matrix', def: 'Tabelle aus richtig/falsch positiven und richtig/falsch negativen Vorhersagen; Grundlage für Accuracy, Precision, Recall und F1.' },
    { term: 'Precision / Recall', def: 'Precision: Anteil der positiven Vorhersagen, die stimmen (TP / (TP + FP)). Recall: Anteil der echten positiven Fälle, die gefunden werden (TP / (TP + FN)).' },
    { term: 'Datendrift', def: 'Veränderung der Verteilung der Eingabemerkmale (auch Merkmalsdrift oder Kovariatenverschiebung).' },
    { term: 'Konzeptdrift', def: 'Veränderung des Zusammenhangs zwischen Eingaben und richtigem Ergebnis; nur über Ausgaben bzw. Ergebnisse erkennbar.' },
    { term: 'Population Stability Index (PSI)', def: 'Kennzahl, die die Verteilung eines Merkmals zwischen Referenz- und aktuellem Zeitraum vergleicht; verbreitet in der Kreditrisiko-Praxis.' },
    { term: 'Kolmogorow-Smirnow-Test', def: 'Statistischer Test, der zwei Verteilungen über den größten Abstand ihrer kumulierten Verteilungsfunktionen vergleicht.' },
    { term: 'Nachtrainieren (Retraining)', def: 'Neuerstellen eines Modells mit aktuellen Daten – zeitgesteuert, anlassbezogen oder hybrid; immer mit Validierung vor der Bereitstellung.' },
    { term: 'A/B-Test', def: 'Kontrolliertes Experiment, das den Verkehr zufällig zwischen bestehendem (Kontrolle) und neuem Modell (Test) aufteilt und anhand einer vorab festgelegten Kennzahl vergleicht.' },
    { term: 'Modellregister', def: 'Zentrales Verzeichnis aller Modelle mit Versionen, Kennzahlen, Freigabestatus und Bereitstellungshistorie.' },
    { term: 'Wissensdestillation', def: 'Komprimierungstechnik, bei der ein kleines Modell das Verhalten eines großen nachlernt.' },
    { term: 'FinOps', def: 'Praxis des Cloud-Kostenmanagements mit den Phasen Inform, Optimize und Operate; übertragbar auf KI-Kosten.' }
  ],
  sources: [
    { title: 'MLOps: Continuous delivery and automation pipelines in machine learning', publisher: 'Google Cloud', year: 2024, type: 'Doku', url: 'https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning' },
    { title: 'MLOps Maturity Model', publisher: 'Microsoft Learn (Azure Architecture Center)', year: 2025, type: 'Doku', url: 'https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/mlops-maturity-model' },
    { title: 'Hidden Technical Debt in Machine Learning Systems (Sculley et al.)', publisher: 'NeurIPS', year: 2015, type: 'Paper', url: 'https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html' },
    { title: 'The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed', publisher: 'RAND Corporation', year: 2024, type: 'Studie', url: 'https://www.rand.org/pubs/research_reports/RRA2680-1.html' },
    { title: 'Monitoring Distributed Systems (Site Reliability Engineering)', publisher: 'Google', year: 2016, type: 'Fachbuch', url: 'https://sre.google/sre-book/monitoring-distributed-systems/' },
    { title: 'Failing Loudly: An Empirical Study of Methods for Detecting Dataset Shift (Rabanser, Günnemann, Lipton)', publisher: 'arXiv', year: 2019, type: 'Paper', url: 'https://arxiv.org/abs/1810.11953' },
    { title: 'What is data drift in ML, and how to detect and handle it', publisher: 'Evidently AI', year: 2025, type: 'Artikel', url: 'https://www.evidentlyai.com/ml-in-production/data-drift' },
    { title: 'MLflow Model Registry', publisher: 'MLflow Project (Linux Foundation)', year: 2026, type: 'Doku', url: 'https://mlflow.org/docs/latest/ml/model-registry/' },
    { title: 'Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing (Kohavi, Tang, Xu)', publisher: 'Cambridge University Press', year: 2020, type: 'Fachbuch', url: 'https://experimentguide.com/' },
    { title: 'Classification: Accuracy, recall, precision, and related metrics', publisher: 'Google for Developers (Machine Learning Crash Course)', year: 2025, type: 'Doku', url: 'https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall' },
    { title: 'Energy and AI', publisher: 'International Energy Agency (IEA)', year: 2025, type: 'Studie', url: 'https://www.iea.org/reports/energy-and-ai' },
    { title: 'Our contribution to a global environmental standard for AI', publisher: 'Mistral AI', year: 2025, type: 'Studie', url: 'https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai' },
    { title: 'DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter (Sanh et al.)', publisher: 'arXiv', year: 2019, type: 'Paper', url: 'https://arxiv.org/abs/1910.01108' },
    { title: 'Pricing (inkl. Prompt Caching und Batch)', publisher: 'Anthropic / Claude Docs', year: 2026, type: 'Doku', url: 'https://platform.claude.com/docs/en/about-claude/pricing' },
    { title: 'FinOps Framework – Phases', publisher: 'FinOps Foundation', year: 2026, type: 'Leitfaden', url: 'https://www.finops.org/framework/phases/' }
  ]
};
