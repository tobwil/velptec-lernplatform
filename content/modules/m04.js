export default {
  id: 'm04',
  order: 4,
  title: 'Implementierung & Infrastruktur',
  subtitle: 'Vorgehensmodell, Projektplan, MLOps/LLMOps und eine sichere, souveräne Infrastruktur',
  icon: 'gear',
  isNew: false,
  minutes: 100,
  handout: [
    { section: '6', title: 'Implementierung von KI-Projekten', page: 4 },
    { section: '12', title: 'Projektplan (Muster)', page: 6 }
  ],
  objectives: [
    'Du steuerst ein KI-Projekt entlang des 7-Schritte-Vorgehensmodells und planst Phasen, Dauer und Rollen nach dem Projektplan-Muster.',
    'Du kennst CRISP-DM und agiles Vorgehen und unterscheidest PoC, Pilot und Roll-out mit klaren Go/No-Go-Kriterien.',
    'Du erklärst, warum KI im Betrieb MLOps bzw. LLMOps braucht (Versionierung, Monitoring, Drift, Evals).',
    'Du wägst Infrastruktur-Optionen ab: Public Cloud, EU-/souveräne Cloud, On-Premises und Hybrid – inklusive GPU-Bedarf, Datenplattform und Vektordatenbank.',
    'Du leitest Sicherheitsmaßnahmen nach Zero Trust und aktuellen BSI-Empfehlungen für LLM-Systeme ab.'
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      id: 'm04-l1',
      title: 'Vom Plan zum Betrieb: Vorgehensmodell, Projektplan und Rollen',
      minutes: 25,
      blocks: [
        { type: 'video', scene: 'prozess' },
        {
          type: 'text',
          md: `Die Strategie steht, die Use Cases sind priorisiert – jetzt geht es um die **Umsetzung**. KI-Projekte unterscheiden sich von klassischen IT-Projekten: Das Ergebnis ist zu Beginn unsicher (funktioniert das Modell mit unseren Daten gut genug?), Daten kosten oft mehr Zeit als Technik, und mit dem Go-live beginnt erst der eigentliche Betrieb. Ein klares Vorgehensmodell gibt dir Struktur und Entscheidungspunkte.`
        },
        {
          type: 'handout',
          section: '6.1',
          page: 4,
          quote: '1. Planung & Zielsetzung 2. Datensammlung & -vorbereitung 3. Modellauswahl & Training 4. Integration in Prozesse 5. Pilot- / Testphase 6. Roll-out & Skalierung 7. Monitoring & Optimierung',
          md: 'Klick dich im Widget durch die sieben Phasen. Achte darauf, dass Phase 7 wieder in Phase 1 zurückführt: KI-Projekte sind Kreisläufe.'
        },
        { type: 'interactive', widget: 'process-steps' },
        {
          type: 'table',
          caption: 'Die sieben Phasen – was du als KI-Managerin oder KI-Manager je Phase sicherstellst',
          head: ['Phase', 'Kernfrage', 'Ergebnis', 'Typischer Fallstrick'],
          rows: [
            ['1 Planung & Zielsetzung', 'Welches Problem, welches SMART-Ziel, welche Baseline?', 'Projektsteckbrief, KPIs, Go/No-Go-Kriterien', 'Ziel bleibt vage („KI einführen")'],
            ['2 Daten', 'Welche Daten, in welcher Qualität, mit welchem Personenbezug?', 'Datenbestand, Qualitätsbericht, Rechtsgrundlage', 'Datenaufwand massiv unterschätzt'],
            ['3 Modellauswahl & Training', 'Fertiges Modell, Konfiguration (Prompt/RAG) oder eigenes Training?', 'Prototyp + Testergebnisse', 'Gleich das größte Modell wählen'],
            ['4 Integration', 'Wo im Prozess, in welchem System, wer prüft?', 'Schnittstellen, angepasster Soll-Prozess', 'Insellösung neben dem Prozess'],
            ['5 Pilot/Test', 'Hilft es echten Nutzenden im Alltag?', 'Pilotbericht, Nutzerfeedback, KPI-Vergleich', 'Kein Vergleich mit der Baseline'],
            ['6 Roll-out & Skalierung', 'Wie bringen wir es zu allen – stabil und geschult?', 'Betriebskonzept, Schulungen, Support', 'Change-Management vergessen'],
            ['7 Monitoring & Optimierung', 'Funktioniert es weiterhin – und lohnt es sich?', 'Dashboards, Review-Termine, Verbesserungs-Backlog', 'Nach Go-live niemand zuständig']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Phase 3 bei generativer KI',
          md: `Bei Anwendungen mit großen Sprachmodellen wird selten „trainiert". Phase 3 heißt dann eher **Modellauswahl & Konfiguration**: passendes Modell wählen (oft reicht ein kleineres, günstigeres), System-Prompt und Persona definieren, Wissen per **RAG** (Retrieval-Augmented Generation) anbinden und nur in Ausnahmefällen feinjustieren (Fine-Tuning). Getestet wird mit **Evals** – dazu mehr in Lektion 3 und in Modul 7.`
        },
        {
          type: 'handout',
          section: '12',
          page: 6,
          quote: '1. Initiierung 2 Wo Business-Case, Stakeholder-Analyse · 2. Planung 4 Wo Ziele, KPIs, Datenquellen, Risks · 3. PoC / Pilot 6 Wo Datenaufbereitung, Modelltraining, Integration Light · 4. Evaluation 2 Wo KPI-Review, Nutzer-Feedback, Nachjustieren · 5. Roll-out 4 Wo Skalierung, Change-Management, Schulung · 6. Betrieb fortl. Monitoring, Retraining, Optimierung',
          md: 'Das Muster ergibt rund 18 Wochen bis zum Regelbetrieb. Für einen einfachen GenAI-Use-Case mit Standardsoftware geht es oft schneller, für eigenes Modelltraining mit schwieriger Datenlage länger. Nutze die Dauer als Startwert, nicht als Versprechen.'
        },
        {
          type: 'timeline',
          items: [
            { date: 'Woche 1–2', title: 'Initiierung', md: 'Business Case, Stakeholder-Analyse, Projektauftrag durch die Geschäftsführung.' },
            { date: 'Woche 3–6', title: 'Planung', md: 'SMART-Ziele, KPIs und Baseline-Messung, Datenquellen, Risikoanalyse (Datenschutz, KI-Verordnung, Sicherheit).' },
            { date: 'Woche 7–12', title: 'PoC / Pilot', md: 'Datenaufbereitung, Modellauswahl/-training, „Integration Light" in einen Teilprozess.' },
            { date: 'Woche 13–14', title: 'Evaluation', md: 'KPI-Review gegen Baseline, Nutzerfeedback, Nachjustieren – **Go/No-Go-Entscheidung**.' },
            { date: 'Woche 15–18', title: 'Roll-out', md: 'Skalierung, Change-Management, Schulung, Support-Prozess.' },
            { date: 'ab Woche 19', title: 'Betrieb', md: 'Monitoring, Retraining bzw. Anpassung, Optimierung, regelmäßige Reviews.' }
          ]
        },
        {
          type: 'handout',
          section: '12',
          page: 6,
          quote: 'Rollen: Projektleitung, Data Scientist, Data Engineer, Domain-Expert, IT-Ops, Compliance.'
        },
        {
          type: 'table',
          caption: 'Rollen im KI-Projekt – und wie sie im Mittelstand oft besetzt werden',
          head: ['Rolle', 'Aufgabe', 'Im KMU häufig …'],
          rows: [
            ['Projektleitung / Product Owner', 'Ziele, Budget, Prioritäten, Go/No-Go vorbereiten', 'KI-Managerin bzw. KI-Manager'],
            ['Domain-Expert', 'Fachwissen, Testfälle, Abnahme der Ergebnisse', 'erfahrene Mitarbeitende aus dem Fachbereich'],
            ['Data Engineer', 'Datenzugang, Pipelines, Datenqualität', 'IT-Abteilung oder externer Partner'],
            ['Data Scientist / AI Engineer', 'Modellauswahl, Prompting/RAG, Evaluation', 'externer Partner oder weitergebildete Fachkraft'],
            ['IT-Ops', 'Betrieb, Zugriffsrechte, Sicherheit, Monitoring', 'IT-Abteilung oder Systemhaus'],
            ['Compliance', 'Datenschutz, KI-Verordnung, Informationssicherheit', 'Datenschutzbeauftragte, ISB, ggf. Rechtsberatung'],
            ['(ergänzend) Betriebsrat', 'Mitbestimmung bei technischen Einrichtungen, die Leistung/Verhalten erfassen können', 'früh einbinden, nicht erst vor Go-live']
          ]
        },
        {
          type: 'praxis',
          title: 'Projektplan für einen KI-Posteingang',
          company: 'Gemeindeverwaltung Talheim (fiktiv), 120 Beschäftigte',
          scenario: `Der Bürgermeister möchte, dass eingehende E-Mails und eingescannte Briefe automatisch dem richtigen Fachbereich zugeordnet werden. Du sollst einen Projektplan vorlegen.`,
          steps: [
            'Initiierung (2 Wochen): Du misst gemeinsam mit der Poststelle die Baseline (Vorgänge pro Tag, Minuten pro Zuordnung, Fehlzuordnungen) und holst den Projektauftrag ein.',
            'Planung (4 Wochen): Du definierst das Ziel (z. B. „80 % der Vorgänge werden korrekt vorgeschlagen, Poststelle bestätigt per Klick"), prüfst mit der Datenschutzbeauftragten die Rechtsgrundlage und mit der IT den Betriebsort.',
            'Du besetzt die Rollen: Poststelle und zwei Fachbereiche als Domain-Experts, IT-Dienstleister als Data Engineer/IT-Ops, ein externer Partner für das Modell-Setup, Personalrat informiert.',
            'PoC/Pilot (6 Wochen): Test mit anonymisierten historischen Vorgängen, dann Pilot im Echtbetrieb – die KI schlägt nur vor, Menschen entscheiden.',
            'Evaluation (2 Wochen): Trefferquote und Zeitersparnis gegen die Baseline; Go/No-Go durch die Verwaltungsleitung.',
            'Roll-out (4 Wochen) und Betrieb: Schulung, Support, monatliches Review der Fehlzuordnungen als Verbesserungsquelle.'
          ],
          takeaway: `Das Projektplan-Muster aus dem Handout funktioniert auch in der Verwaltung – entscheidend sind **Baseline, Rollen und ein echtes Go/No-Go**. Und: In Behörden heißt der Betriebsrat Personalrat.`
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die sieben Phasen des Vorgehensmodells (Handout §6.1) in die richtige Reihenfolge.',
          items: ['Planung & Zielsetzung', 'Datensammlung & -vorbereitung', 'Modellauswahl & Training', 'Integration in Prozesse', 'Pilot- / Testphase', 'Roll-out & Skalierung', 'Monitoring & Optimierung'],
          explain: 'So beschreibt das Handout das vereinfachte Vorgehensmodell. In der Praxis führen Erkenntnisse aus dem Monitoring zurück in neue Planungs- und Datenschritte.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Wer sollte im KI-Projekt Testfälle liefern und die fachliche Qualität der Ergebnisse abnehmen?',
          options: ['IT-Ops', 'Domain-Expert', 'Compliance', 'Data Engineer'],
          answer: 1,
          explain: 'Domain-Experts kennen die Fälle, Ausnahmen und Qualitätsansprüche des Fachbereichs. Ohne sie wird an der Realität vorbei optimiert.'
        }
      ]
    },
    // ------------------------------------------------------------------ L2
    {
      id: 'm04-l2',
      title: 'CRISP-DM und agiles Vorgehen: PoC → Pilot → Roll-out',
      minutes: 22,
      blocks: [
        {
          type: 'text',
          md: `Das 7-Schritte-Modell des Handouts ist eine gute Übersicht. In Datenprojekten hat sich zusätzlich **CRISP-DM** (Cross-Industry Standard Process for Data Mining) etabliert – ein Ende der 1990er-Jahre von einem Industriekonsortium entwickeltes Prozessmodell, das bis heute in vielen Data-Science-Teams genutzt wird. Seine Stärke: Es betont, dass man zwischen den Phasen **vor- und zurückspringt**.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Business Understanding', md: 'Geschäftsziel verstehen und in eine Datenfragestellung übersetzen. Erfolgskriterien festlegen.' },
            { title: '2 · Data Understanding', md: 'Daten sammeln, sichten, erste Qualitätsprobleme erkennen. Häufig Rücksprung zu Phase 1: „Mit diesen Daten lässt sich die Frage so nicht beantworten."' },
            { title: '3 · Data Preparation', md: 'Daten bereinigen, verknüpfen, aufbereiten – oft der größte Zeitblock.' },
            { title: '4 · Modeling', md: 'Verfahren auswählen, Modelle trainieren bzw. konfigurieren. Rücksprung zu Phase 3, wenn das Verfahren andere Datenformate braucht.' },
            { title: '5 · Evaluation', md: 'Erfüllt das Modell die **geschäftlichen** Erfolgskriterien – nicht nur die technischen Metriken?' },
            { title: '6 · Deployment', md: 'Einsatz im Prozess, Übergabe an den Betrieb, Monitoring planen.' }
          ]
        },
        {
          type: 'table',
          caption: 'Handout-Modell und CRISP-DM im Vergleich',
          head: ['Handout §6.1', 'CRISP-DM', 'Unterschied'],
          rows: [
            ['Planung & Zielsetzung', 'Business Understanding', 'nahezu gleich'],
            ['Datensammlung & -vorbereitung', 'Data Understanding + Data Preparation', 'CRISP-DM trennt Verstehen und Aufbereiten'],
            ['Modellauswahl & Training', 'Modeling', 'nahezu gleich'],
            ['Pilot- / Testphase', 'Evaluation', 'CRISP-DM bewertet vor allem gegen Geschäftsziele'],
            ['Integration, Roll-out, Monitoring', 'Deployment', 'Handout beschreibt den Betrieb ausführlicher']
          ]
        },
        {
          type: 'text',
          md: `### Agil statt Wasserfall

KI-Ergebnisse sind zu Beginn unsicher. Deshalb arbeiten erfolgreiche Teams **iterativ**: kurze Zyklen (z. B. zweiwöchige Sprints), früh ein funktionsfähiges Minimum (MVP) zeigen, Feedback der Nutzenden einholen, verbessern. Das Handout fasst es in der Best-Practice-Checkliste (§13) zusammen: „Iteratives Lernen: Pilot → Feedback → Verbesserung". Die drei Stufen dabei:`
        },
        {
          type: 'table',
          caption: 'PoC, Pilot und Roll-out im Vergleich',
          head: ['', 'Proof of Concept (PoC)', 'Pilot', 'Roll-out'],
          rows: [
            ['**Frage**', 'Geht es technisch – mit unseren Daten?', 'Hilft es im echten Arbeitsalltag?', 'Trägt es im ganzen Unternehmen?'],
            ['**Umfang**', 'Ausschnitt, oft historische Daten', 'ein Team / Standort, Echtbetrieb', 'alle relevanten Bereiche'],
            ['**Nutzende**', 'Projektteam, 1–2 Fachleute', 'ausgewählte Pilotnutzende', 'alle Zielnutzenden'],
            ['**Erfolgskriterium**', 'technische Metrik erreicht (z. B. Trefferquote)', 'Prozess-KPI besser als Baseline, Akzeptanz', 'Business-KPI, stabiler Betrieb'],
            ['**Typische Dauer**', 'wenige Wochen', 'einige Wochen bis Monate', 'schrittweise']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Der PoC beweist, dass es geht. Der Pilot beweist, dass es hilft. Der Roll-out beweist, dass es trägt.**'
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Fallstrick: Pilot-Dauerschleife',
          md: `Ohne vorab festgelegte **Gate-Kriterien** (Welcher Wert muss erreicht sein? Wer entscheidet? Bis wann?) bleiben Projekte monatelang „im Pilot". Lege für jedes Gate fest: Kennzahl + Zielwert, Entscheidungsgremium, Termin – und was bei „No-Go" passiert (Abbruch ist ein legitimes Ergebnis).`
        },
        {
          type: 'praxis',
          title: 'Sichtprüfung mit Bilderkennung – vom PoC zum Roll-out',
          company: 'Präzisionsteile Schwab GmbH (fiktiv), 210 Mitarbeitende, Pforzheim – Drehteile für die Medizintechnik',
          scenario: `Die manuelle Sichtprüfung auf Kratzer bindet Personal und ist abhängig von der Tagesform. Ein Kamerasystem mit Bilderkennung soll unterstützen. Du leitest das Projekt agil.`,
          steps: [
            'Business Understanding: Ziel ist nicht „100 % automatisch", sondern Entlastung – die KI sortiert eindeutig gute Teile aus, unklare Fälle prüft weiterhin ein Mensch.',
            'PoC (Sprint 1–3): Du lässt mit einigen hundert gelabelten Bildern prüfen, ob das Modell Kratzer zuverlässig erkennt. Gate: Fehlerhafte Teile dürfen praktisch nie als „gut" durchrutschen (hoher Recall für „fehlerhaft").',
            'Rücksprung: Die Bilder einer Schicht sind unterbelichtet – zurück zur Datenaufbereitung, Beleuchtung an der Station wird angepasst.',
            'Pilot (an einer Linie, 8 Wochen): Prüferinnen und Prüfer geben per Knopfdruck Feedback zu jeder KI-Einschätzung; Durchlaufzeit und Fehlerschlupf werden mit der Baseline verglichen.',
            'Gate-Entscheidung durch Produktionsleitung und Qualitätsmanagement; Roll-out schrittweise auf weitere Linien, mit Monitoring der Erkennungsrate je Linie.'
          ],
          takeaway: `Agil heißt nicht planlos: **kurze Zyklen, klare Gates, Mut zum Rücksprung**. In regulierten Branchen gehört das Qualitätsmanagement von Anfang an ins Team.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'MVP', back: 'Minimum Viable Product: kleinste Version, mit der echte Nutzende einen Nutzen erfahren und Feedback geben können.' },
            { front: 'Go/No-Go', back: 'Formale Entscheidung an einem Gate: weitermachen, anpassen oder abbrechen – anhand vorab definierter Kriterien.' },
            { front: 'Sprint-Review', back: 'Termin am Ende eines Sprints, an dem das Team Ergebnisse zeigt und Feedback der Fachseite einholt.' },
            { front: 'Definition of Done', back: 'Gemeinsam vereinbarte Kriterien, wann eine Aufgabe wirklich fertig ist (z. B. getestet, dokumentiert, datenschutzgeprüft).' }
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne der Projektstufe ihre zentrale Frage zu.',
          pairs: [
            ['Proof of Concept', 'Geht es technisch mit unseren Daten?'],
            ['Pilot', 'Hilft es im echten Arbeitsalltag?'],
            ['Roll-out', 'Trägt es stabil im ganzen Unternehmen?']
          ],
          explain: 'Jede Stufe beantwortet eine andere Frage und braucht deshalb eigene Erfolgskriterien – technische, Prozess- bzw. Business-KPIs.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'CRISP-DM ist ein streng lineares Modell: Eine abgeschlossene Phase wird nie wieder aufgenommen.',
          answer: false,
          explain: 'CRISP-DM ist ausdrücklich iterativ. Rücksprünge – etwa von der Datenanalyse zurück zum Business Understanding – sind typisch und gewollt.'
        }
      ]
    },
    // ------------------------------------------------------------------ L3
    {
      id: 'm04-l3',
      title: 'MLOps und LLMOps: KI zuverlässig betreiben',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Ein Modell, das im Test gut funktioniert, kann im Betrieb schleichend schlechter werden: Die Daten ändern sich, Prozesse ändern sich, der Modellanbieter aktualisiert sein Modell. **MLOps** überträgt DevOps-Prinzipien (Automatisierung, Versionierung, kontinuierliches Testen) auf Machine Learning – so definiert es auch das Glossar des Handouts. Ein viel zitiertes Paper von Google-Forschenden („Hidden Technical Debt in Machine Learning Systems", NeurIPS 2015) zeigt: Der eigentliche ML-Code ist nur ein kleiner Teil eines realen ML-Systems – der Rest ist Datensammlung, Konfiguration, Monitoring, Infrastruktur.`
        },
        {
          type: 'handout',
          section: '6.2',
          page: 4,
          quote: 'MLOps-Werkzeuge: CI/CD-Pipelines, Modell-Versionierung',
          md: 'Das Handout nennt zwei Kernwerkzeuge. Zum vollständigen Lebenszyklus gehören aber noch mehr Bausteine (siehe Schritte).'
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Versionieren', md: 'Daten, Code, Modelle **und** (bei GenAI) Prompts, Modellversion und Wissensbasis versionieren – damit jedes Ergebnis nachvollziehbar und rückrollbar ist.' },
            { title: '2 · Automatisieren', md: 'Trainings- bzw. Aufbereitungsschritte als Pipeline statt als Handarbeit in Notebooks.' },
            { title: '3 · Testen & validieren', md: 'Vor jedem Deployment: Datenchecks, Modellmetriken, Regressionstests (Eval-Set), Sicherheitstests.' },
            { title: '4 · Ausrollen (CI/CD)', md: 'Neue Versionen automatisiert, kontrolliert und mit Rückfalloption bereitstellen (z. B. erst für einen Teil der Nutzenden).' },
            { title: '5 · Überwachen', md: 'Qualität, Drift, Latenz, Kosten, Fehler und Nutzerfeedback laufend messen – mit Alarmen und Verantwortlichen.' },
            { title: '6 · Verbessern', md: 'Feedback und neue Daten fließen in Retraining bzw. Anpassung von Prompts und Wissensbasis zurück.' }
          ]
        },
        {
          type: 'table',
          caption: 'MLOps-Reifegrade nach Google Cloud (vereinfacht)',
          head: ['Level', 'Beschreibung', 'Passt für'],
          rows: [
            ['0 – manuell', 'Jeder Schritt per Hand, seltene Releases, keine CI/CD', 'erste PoCs'],
            ['1 – Pipeline-Automatisierung', 'Automatisiertes (Nach-)Training mit neuen Daten, Daten- und Modellvalidierung', 'produktive Modelle mit sich ändernden Daten'],
            ['2 – CI/CD-Automatisierung', 'Automatisiertes Bauen, Testen und Ausrollen auch neuer Pipeline-Komponenten', 'Teams mit vielen Modellen und häufigen Änderungen']
          ]
        },
        {
          type: 'text',
          md: `### Drift – wenn die Welt sich ändert

- **Data Drift:** Die Eingabedaten verändern sich (z. B. neue Produktnamen, andere Kundengruppen, neue Kamera an der Prüfstation).
- **Concept Drift:** Der Zusammenhang zwischen Eingabe und richtiger Antwort ändert sich (z. B. neue Rechtslage, geänderte Preispolitik – was gestern „richtig" war, ist heute falsch).

Das Handout nennt als Gegenmaßnahme in §7 „Automatisierte Datenchecks, Retraining". Bei LLM-Anwendungen kommt hinzu: Auch **das Modell selbst** kann sich ändern, wenn der Anbieter eine neue Version ausliefert oder eine alte abkündigt.`
        },
        {
          type: 'table',
          caption: 'MLOps und LLMOps – was ist anders?',
          head: ['Aspekt', 'Klassisches ML (MLOps)', 'LLM-Anwendungen (LLMOps)'],
          rows: [
            ['Was wird versioniert?', 'Trainingsdaten, Features, Modellgewichte', 'Modellname/-version, System-Prompt, Prompt-Vorlagen, RAG-Wissensbasis, Tools/Workflows'],
            ['Wie wird getestet?', 'Metriken auf Testdaten (z. B. Precision, Recall)', 'Evals: Testfälle mit Rubrik, menschliche Bewertung, LLM-as-a-Judge'],
            ['Was wird überwacht?', 'Genauigkeit, Data/Concept Drift, Latenz', 'zusätzlich: Halluzinationen, Quellentreue, Kosten pro Anfrage, Token-Verbrauch, Prompt-Injection-Versuche'],
            ['Typisches Risiko', 'Modell veraltet mit den Daten', 'Anbieter ändert Modell, Antwortstil oder Preise; Wissensbasis veraltet']
          ]
        },
        {
          type: 'update',
          title: 'Ergänzung zum Handout: LLMOps und aktuelle Werkzeuge',
          md: `Das Handout nennt MLOps; für generative KI hat sich zusätzlich der Begriff **LLMOps** etabliert. Bewährte Open-Source-Werkzeuge (Auswahl, Stand Oktober 2026):
- **MLflow** – Experiment-Tracking, Modellregister, inzwischen auch Funktionen für GenAI-Evaluation und Tracing.
- **Langfuse** – Open-Source-Plattform für LLM-Observability: Traces, Kosten, Prompt-Versionierung, Evaluationen; selbst hostbar.
- **Evidently** – Open-Source-Bibliothek für Daten-/Modell-Monitoring (Drift) und LLM-Evaluationen.
- **OpenTelemetry GenAI Semantic Conventions** – herstellerneutraler Standard, wie Aufrufe von KI-Modellen (Modell, Token, Latenz) einheitlich protokolliert werden.

Für ein KMU gilt: Lieber ein schlankes, gut gepflegtes Setup (Versionierung + Eval-Set + Kosten-/Qualitätsdashboard) als ein überdimensionierter Werkzeugzoo.`,
          sources: [
            { title: 'MLflow', url: 'https://mlflow.org/' },
            { title: 'Langfuse', url: 'https://langfuse.com/' },
            { title: 'Evidently AI', url: 'https://www.evidentlyai.com/' },
            { title: 'OpenTelemetry: Semantic conventions for generative AI systems', url: 'https://opentelemetry.io/docs/specs/semconv/gen-ai/' }
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
          type: 'youtube',
          id: 'cvPEiPt7HXo',
          title: 'Large Language Model Operations (LLMOps) Explained',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 7
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
          takeaway: `Ohne Versionierung und Eval-Set wäre der Wechsel ein Blindflug gewesen. **LLMOps macht Modellwechsel zu einer Routineaufgabe statt zu einem Risiko.**`
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Der Go-live ist nicht das Projektende, sondern der Beginn des Betriebs.** Wer KI betreibt, braucht Versionierung, Tests, Monitoring und eine verantwortliche Person.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Nach einer Gesetzesänderung sind die bisher „richtigen" Antworten eines Klassifikators teilweise falsch, obwohl die Eingaben gleich aussehen. Wie nennt man das?',
          options: ['Data Drift', 'Concept Drift', 'Overfitting', 'Latenz'],
          answer: 1,
          explain: 'Beim Concept Drift ändert sich der Zusammenhang zwischen Eingabe und richtiger Ausgabe. Gegenmaßnahmen: Monitoring, neue gelabelte Daten, Retraining bzw. Anpassung der Regeln/Wissensbasis.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Was sollte bei einer LLM-Anwendung versioniert werden? (Mehrfachauswahl)',
          options: ['Modellname und -version', 'System-Prompt und Prompt-Vorlagen', 'Die RAG-Wissensbasis', 'Die Farbe des Chat-Fensters'],
          answer: [0, 1, 2],
          explain: 'Modell, Prompts und Wissensbasis bestimmen das Verhalten der Anwendung. Nur wenn sie versioniert sind, lassen sich Ergebnisse nachvollziehen und Änderungen zurückrollen.'
        }
      ]
    },
    // ------------------------------------------------------------------ L4
    {
      id: 'm04-l4',
      title: 'Infrastruktur & Sicherheit: Cloud, EU-Cloud, On-Prem – und Zero Trust',
      minutes: 28,
      blocks: [
        {
          type: 'handout',
          section: '6.2',
          page: 4,
          quote: 'Rechenleistung: GPU/TPU, Cloud vs. On-Prem • Datenplattform: ETL, Data Lake / Warehouse • MLOps-Werkzeuge: CI/CD-Pipelines, Modell-Versionierung • Sicherheit: Verschlüsselung, IAM, Zero-Trust-Netzwerke',
          md: 'Die vier Punkte bleiben gültig. Seit Erscheinen des Handouts sind vor allem **Datensouveränität**, **Vektordatenbanken** für RAG und **LLM-spezifische Sicherheit** wichtiger geworden.'
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
          type: 'update',
          title: 'Aktualisierung: Datensouveränität und Cloud-Nutzung (Stand Oktober 2026)',
          md: `„Cloud vs. On-Prem" ist heute keine Entweder-oder-Frage mehr. Zwei aktuelle Entwicklungen:
- **Cloud ist Standard:** 2025 nutzten laut Destatis 54 % der Unternehmen in Deutschland (ab 10 Beschäftigten) kostenpflichtige Cloud-Dienste – bei großen Unternehmen 86 %.
- **Souveräne Cloud-Angebote wachsen:** Ein Beispiel ist die **AWS European Sovereign Cloud**, die im Januar 2026 mit einer ersten Region in Brandenburg allgemein verfügbar wurde – als von anderen AWS-Regionen getrennte, in der EU betriebene Umgebung. Daneben bieten europäische und deutsche Anbieter eigene Cloud- und KI-Plattformen an.

Wichtig für dich: „Souverän" ist kein geschützter Begriff. Prüfe im Einzelfall Datenstandort, Betreibergesellschaft, Zugriffsmöglichkeiten Dritter, Vertragslage (Auftragsverarbeitung) und Exit-Möglichkeiten – gemeinsam mit Datenschutz und IT-Sicherheit.`,
          sources: [
            { title: 'Destatis, Pressemitteilung Nr. 416 vom 24.11.2025: Jedes zweite Unternehmen nutzt kostenpflichtige Cloud-Services', url: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/11/PD25_416_52911.html' },
            { title: 'Amazon: AWS launches AWS European Sovereign Cloud and announces expansion across Europe (Januar 2026)', url: 'https://press.aboutamazon.com/aws/2026/1/aws-launches-aws-european-sovereign-cloud-and-announces-expansion-across-europe' }
          ]
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
            ['**IAM & Least Privilege**', 'Jede Person, jeder Dienst und jeder KI-Agent bekommt nur die Rechte, die er braucht; Service-Accounts statt geteilter Zugänge', 'Handout §6.2, Zero Trust'],
            ['**Verschlüsselung**', 'Daten bei Übertragung und Speicherung verschlüsseln, Schlüssel verwalten', 'Handout §6.2'],
            ['**Zero Trust**', 'Kein implizites Vertrauen, auch nicht im internen Netz; jede Anfrage authentifizieren und autorisieren', 'NIST SP 800-207, BSI/ANSSI'],
            ['**Eingaben & Ausgaben absichern**', 'Schutz gegen (indirekte) Prompt Injection, Ausgaben nie ungeprüft ausführen', 'OWASP LLM01, LLM05; BSI'],
            ['**Agenten begrenzen**', 'Keine übermäßigen Befugnisse, Freigabe durch Menschen bei kritischen Aktionen', 'OWASP LLM06 „Excessive Agency"'],
            ['**Logging & Monitoring**', 'Nachvollziehbare Protokolle, Anomalien erkennen', 'BSI/ANSSI'],
            ['**Lieferkette**', 'Herkunft von Modellen, Bibliotheken und Daten prüfen', 'OWASP LLM03']
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung: BSI-Empfehlungen für LLM-Systeme',
          md: `Das Handout nennt Zero Trust allgemein. Inzwischen gibt es konkrete Empfehlungen für KI:
- **BSI & ANSSI: „Design Principles for LLM-based Systems with Zero Trust"** (August 2025) – deutsch-französische Designprinzipien: Zugriffsrechte begrenzen, Entscheidungsprozesse transparent machen, Menschen bei kritischen Entscheidungen beteiligen.
- **BSI-Themenseite Künstliche Intelligenz** mit u. a. „Basisschutz gegen Indirect Prompt Injection in dokumentbasierten LLM-Chats", „Evasion-Attacks auf LLMs – Gegenmaßnahmen in der Praxis" und dem „Kriterienkatalog zur Integration von extern bereitgestellten generativen KI-Modellen".
- **BSI AIC4** – Kriterienkatalog für KI-Cloud-Dienste als Ergänzung zum Cloud-Kriterienkatalog **C5**; hilfreich bei der Bewertung von Anbietern.
- **OWASP Top 10 for LLM Applications 2025** – die zehn wichtigsten Sicherheitsrisiken, u. a. Prompt Injection, Offenlegung sensibler Informationen, übermäßige Handlungsbefugnis (Excessive Agency) und Schwächen in Vektoren/Embeddings.`,
          sources: [
            { title: 'BSI/ANSSI: Design Principles for LLM-based Systems with Zero Trust', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/ANSSI-BSI-joint-releases/LLM-based_Systems_Zero_Trust.html' },
            { title: 'BSI: Künstliche Intelligenz (Themenseite mit Publikationen)', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/KI.html' },
            { title: 'BSI: Kriterienkatalog für KI-Cloud-Dienste – AIC4', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/AIC4/aic4.html' },
            { title: 'OWASP Top 10 for LLM Applications 2025', url: 'https://genai.owasp.org/llm-top-10/' }
          ]
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
          title: 'Werkzeuge zum Ausprobieren und Vertiefen',
          items: [
            { title: 'LM Studio', url: 'https://lmstudio.ai/', note: 'Sprachmodelle lokal auf dem eigenen Rechner testen (Workshop-Tool)' },
            { title: 'Ollama', url: 'https://ollama.com/', note: 'Open-Source-Werkzeug zum lokalen Betrieb von Sprachmodellen' },
            { title: 'pgvector', url: 'https://github.com/pgvector/pgvector', note: 'Vektorsuche als Erweiterung für PostgreSQL' },
            { title: 'Qdrant', url: 'https://qdrant.tech/', note: 'Open-Source-Vektordatenbank' },
            { title: 'NIST SP 800-207: Zero Trust Architecture', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Grundlagendokument zu Zero Trust' }
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
          qtype: 'single',
          q: 'Ein KI-Agent darf selbstständig E-Mails versenden und Kundendaten ändern, ohne dass ein Mensch freigibt. Welches OWASP-Risiko ist vor allem betroffen?',
          options: ['LLM06: Excessive Agency', 'LLM09: Misinformation', 'LLM10: Unbounded Consumption', 'LLM07: System Prompt Leakage'],
          answer: 0,
          explain: '„Excessive Agency" beschreibt zu weitreichende Befugnisse, Funktionen oder Autonomie eines LLM-Systems. Gegenmittel: Rechte begrenzen, menschliche Freigabe bei kritischen Aktionen.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'order',
      q: 'Bringe die Phasen des Projektplan-Musters (Handout §12) in die richtige Reihenfolge.',
      items: ['Initiierung', 'Planung', 'PoC / Pilot', 'Evaluation', 'Roll-out', 'Betrieb'],
      explain: 'Das Muster sieht 2 + 4 + 6 + 2 + 4 Wochen bis zum Betrieb vor, der dann fortlaufend ist.'
    },
    {
      type: 'single',
      q: 'Welche Dauer sieht das Projektplan-Muster des Handouts für die Phase „PoC / Pilot" vor?',
      options: ['2 Wochen', '4 Wochen', '6 Wochen', '12 Wochen'],
      answer: 2,
      explain: 'Laut Handout §12 sind es 6 Wochen mit Datenaufbereitung, Modelltraining und „Integration Light". Die Dauer ist ein Richtwert und hängt vom Use Case ab.'
    },
    {
      type: 'multi',
      q: 'Welche Rollen nennt das Handout für KI-Projekte? (Mehrfachauswahl)',
      options: ['Projektleitung', 'Data Engineer', 'Influencer', 'Domain-Expert', 'Compliance'],
      answer: [0, 1, 3, 4],
      explain: 'Das Handout nennt Projektleitung, Data Scientist, Data Engineer, Domain-Expert, IT-Ops und Compliance.'
    },
    {
      type: 'match',
      q: 'Ordne die CRISP-DM-Phase ihrem Inhalt zu.',
      pairs: [
        ['Business Understanding', 'Geschäftsziel in eine Datenfragestellung übersetzen'],
        ['Data Preparation', 'Daten bereinigen, verknüpfen, aufbereiten'],
        ['Evaluation', 'Prüfen, ob die geschäftlichen Erfolgskriterien erfüllt sind'],
        ['Deployment', 'Einsatz im Prozess und Übergabe an den Betrieb']
      ],
      explain: 'CRISP-DM hat sechs Phasen; zusätzlich gibt es Data Understanding und Modeling. Rücksprünge zwischen den Phasen sind ausdrücklich vorgesehen.'
    },
    {
      type: 'tf',
      q: 'Ein erfolgreicher Proof of Concept belegt bereits, dass die Lösung im Arbeitsalltag Nutzen stiftet.',
      answer: false,
      explain: 'Der PoC zeigt technische Machbarkeit. Ob die Lösung im Alltag hilft, zeigt erst der Pilot mit echten Nutzenden und Vergleich zur Baseline.'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Satz.',
      text: 'Verändern sich die Eingabedaten eines Modells im Zeitverlauf, spricht man von {{Data Drift|Datendrift}}.',
      explain: 'Data Drift (z. B. neue Produktnamen, neue Kamera) ist von Concept Drift zu unterscheiden, bei dem sich der Zusammenhang zwischen Eingabe und richtiger Antwort ändert.'
    },
    {
      type: 'single',
      q: 'Was beschreibt Level 1 der MLOps-Reifegrade nach Google Cloud?',
      options: [
        'Alle Schritte werden manuell ausgeführt',
        'Automatisierte Trainingspipeline mit Daten- und Modellvalidierung (Continuous Training)',
        'Vollständig automatisiertes CI/CD auch für neue Pipeline-Komponenten',
        'Verzicht auf Monitoring'
      ],
      answer: 1,
      explain: 'Level 0 ist manuell, Level 1 automatisiert die ML-Pipeline (Continuous Training), Level 2 ergänzt CI/CD für die Pipeline selbst.'
    },
    {
      type: 'multi',
      q: 'Was wird bei LLM-Anwendungen typischerweise zusätzlich überwacht? (Mehrfachauswahl)',
      options: ['Kosten pro Anfrage bzw. Token-Verbrauch', 'Quellentreue und Halluzinationen', 'Versuche von Prompt Injection', 'Die Anzahl der Mitarbeitenden im Lager'],
      answer: [0, 1, 2],
      explain: 'LLMOps ergänzt klassisches Monitoring um Kosten, Quellentreue/Halluzinationen und Sicherheitsereignisse wie Prompt-Injection-Versuche.'
    },
    {
      type: 'single',
      q: 'Ein Unternehmen will einen Assistenten für Patientenakten (besonders schutzbedürftige Gesundheitsdaten) aufbauen. Welche Infrastruktur-Überlegung steht am Anfang?',
      options: [
        'Das leistungsfähigste Modell eines beliebigen Anbieters wählen',
        'Datenklassifizierung und daraus abgeleitet Betriebsort, Vertragslage und Schutzmaßnahmen',
        'Zuerst GPUs kaufen',
        'Die Vektordatenbank mit den meisten Sternen auf GitHub wählen'
      ],
      answer: 1,
      explain: 'Die Infrastruktur folgt der Datenklassifizierung. Bei besonders schutzbedürftigen Daten kommen EU-Cloud mit strengen Verträgen oder lokaler Betrieb in Frage – mit Datenschutz-Folgenabschätzung.'
    },
    {
      type: 'tf',
      q: 'In einer RAG-Anwendung müssen die Zugriffsrechte der Quelldokumente auch bei der Suche in der Vektordatenbank berücksichtigt werden.',
      answer: true,
      explain: 'Sonst kann die KI Inhalte aus Dokumenten wiedergeben, die die fragende Person nicht sehen darf. OWASP führt dazu u. a. „Vector and Embedding Weaknesses" (LLM08).'
    },
    {
      type: 'match',
      q: 'Ordne die Sicherheitsquelle ihrem Inhalt zu.',
      pairs: [
        ['BSI/ANSSI Design Principles', 'Zero-Trust-Designprinzipien für LLM-basierte Systeme'],
        ['BSI AIC4', 'Kriterienkatalog für KI-Cloud-Dienste, ergänzt C5'],
        ['OWASP Top 10 for LLM Applications', 'Die zehn wichtigsten Sicherheitsrisiken von LLM-Anwendungen'],
        ['NIST SP 800-207', 'Grundlagendokument zur Zero-Trust-Architektur']
      ],
      explain: 'Diese Quellen ergänzen die allgemeinen Sicherheitspunkte des Handouts (Verschlüsselung, IAM, Zero Trust) um KI-spezifische Empfehlungen.'
    },
    {
      type: 'single',
      q: 'Was ist laut dem Paper „Hidden Technical Debt in Machine Learning Systems" (2015) eine zentrale Erkenntnis?',
      options: [
        'ML-Systeme bestehen fast nur aus ML-Code',
        'Der ML-Code ist nur ein kleiner Teil; Daten, Konfiguration, Infrastruktur und Monitoring machen den Großteil aus',
        'ML-Systeme benötigen keine Wartung',
        'Technische Schulden entstehen nur bei klassischer Software'
      ],
      answer: 1,
      explain: 'Genau deshalb braucht es MLOps: Der Aufwand für Betrieb, Daten und Infrastruktur übersteigt den Modellcode deutlich.'
    }
  ],
  exercises: [
    {
      id: 'm04-e1',
      title: 'Projektplan mit Gates für einen KI-Angebotsassistenten',
      scenario: `Die **Schreinerei Lindner GmbH (fiktiv)**, 35 Mitarbeitende, Rosenheim, möchte Angebote für Einbaumöbel schneller erstellen. Idee: Ein KI-Assistent erzeugt aus Aufmaß-Notizen, Fotos und der Materialpreisliste einen Angebotsentwurf, den die Meisterin prüft. IT macht ein externes Systemhaus; es gibt eine Datenschutzbeauftragte (extern). Die Geschäftsführung will „in zwei Monaten live" sein.`,
      task: `1. Erstelle einen **Projektplan** nach dem Muster aus Handout §12 (Phasen, Dauer, Kerntätigkeiten) – angepasst an diesen Fall.
2. Lege für **PoC/Pilot und Evaluation** jeweils ein **Gate-Kriterium** (Kennzahl + Zielwert) fest.
3. Besetze die **Rollen** realistisch für einen 35-Personen-Betrieb.
4. Nimm Stellung zum Wunsch „in zwei Monaten live" – was ist realistisch, was ist das Risiko?`,
      deliverable: 'Tabelle + kurze Begründung (ca. 250–400 Wörter)',
      template: `Phase | Dauer | Kerntätigkeiten
...

Gate PoC/Pilot: ...
Gate Evaluation: ...

Rollen: ...

Stellungnahme „zwei Monate": ...`,
      rubric: [
        { criterion: 'Projektplan mit Phasen, Dauer und Tätigkeiten', keywords: ['initiierung', 'planung', 'poc', 'pilot', 'evaluation', 'roll-out', 'rollout', 'betrieb'], min: 4, hint: 'Orientiere dich an den sechs Phasen des Handout-Musters (S. 6).' },
        { criterion: 'Messbare Gate-Kriterien mit Baseline-Bezug', keywords: ['baseline', 'minuten', 'quote', 'zielwert', 'kriteri', 'go'], min: 2, hint: 'Woran erkennst du nach dem Pilot, dass es besser ist als vorher?' },
        { criterion: 'Realistische Rollenbesetzung', keywords: ['meister', 'projektleit', 'systemhaus', 'datenschutz', 'domain', 'geschäftsführ'], min: 3, hint: 'Wer im Betrieb kennt die Angebote am besten? Wer betreibt die IT?' },
        { criterion: 'Begründete Einschätzung zum Zeitplan und zu Risiken', keywords: ['risiko', 'realistisch', 'daten', 'akzeptanz', 'schulung', 'zeit'], min: 2, hint: 'Welche Phasen lassen sich verkürzen, welche nicht – und was passiert, wenn man das Gate überspringt?' }
      ],
      hints: [
        'Starte mit dem Handout-Muster (18 Wochen) und überlege, welche Phasen bei einem eingekauften oder einfach konfigurierten Tool kürzer sein können.',
        'Ein gutes Gate-Kriterium ist z. B. „Erstellungszeit pro Angebot sinkt von X auf Y Minuten, bei maximal Z Korrekturen pro Angebot". X kommt aus der Baseline-Messung.',
        'Zwei Monate sind für einen Pilot mit wenigen Nutzenden realistisch – aber nicht für Roll-out und stabilen Betrieb. Schlage einen Zwischenstand „Pilot läuft nach acht Wochen" vor.'
      ],
      sample: `- **Initiierung** (1 Woche): Baseline messen (Minuten pro Angebot, Anzahl/Monat), Business Case, Auftrag GF
- **Planung** (2 Wochen): Ziel/KPIs, Datenquellen (Preisliste, Musterangebote), Datenschutzcheck (Kundendaten, Fotos), Toolauswahl
- **PoC** (2 Wochen): 20 alte Angebote nachbauen lassen, Qualität bewerten
- **Pilot** (3 Wochen): Meisterin + 1 Mitarbeiter nutzen den Assistenten im Echtbetrieb
- **Evaluation** (1 Woche): KPI-Review, Feedback, Go/No-Go
- **Roll-out** (3 Wochen): alle Angebotsersteller schulen, Vorlage/Prompts finalisieren
- **Betrieb** (fortlaufend): monatlicher Review, Preisliste aktuell halten

**Gate PoC:** Mindestens 16 von 20 Entwürfen sind nach max. 10 Minuten Nacharbeit versandfähig.
**Gate Evaluation:** Durchschnittliche Erstellungszeit sinkt gegenüber der Baseline um mindestens 30 %; keine falschen Preise im Versand (Mensch prüft immer).

**Rollen:** Projektleitung: KI-Managerin (bzw. Büroleitung); Domain-Expert: Meisterin; IT-Ops/Integration: Systemhaus; Compliance: externe Datenschutzbeauftragte; Entscheidung: Geschäftsführung.

**Zwei Monate:** Realistisch ist nach ca. acht Wochen ein laufender Pilot mit Go/No-Go-Entscheidung, nicht der vollständige Roll-out. Risiko bei Abkürzung: ungeprüfte Preise, fehlende Akzeptanz, kein Nachweis des Nutzens.`
    },
    {
      id: 'm04-e2',
      title: 'Infrastruktur- und Sicherheitskonzept für einen Wissensassistenten',
      scenario: `Der **Ambulante Pflegedienst Sonnenhof (fiktiv)**, 70 Mitarbeitende, Erfurt, möchte einen KI-Assistenten, der Pflegekräften Fragen zu internen Standards, Hygieneplänen und Abrechnungsregeln beantwortet (RAG). Langfristig soll er auch Pflegedokumentationen zusammenfassen. IT: ein externer Dienstleister, Microsoft-365-Umgebung, kein eigenes Rechenzentrum.`,
      task: `1. **Klassifiziere** die beteiligten Daten (mindestens drei Klassen).
2. Empfiehl ein **Betriebsmodell** (Public Cloud, EU-Cloud, On-Prem, Hybrid) für Phase 1 und Phase 2 und begründe es.
3. Beschreibe die **Datenplattform**: Woher kommen die Dokumente, wie bleiben sie aktuell, wie werden Zugriffsrechte in der Vektordatenbank umgesetzt?
4. Nenne mindestens **vier Sicherheitsmaßnahmen** mit Bezug zu Zero Trust, BSI- oder OWASP-Empfehlungen.`,
      deliverable: 'Strukturiertes Kurzkonzept (ca. 300–450 Wörter)',
      template: `1. Datenklassen: ...
2. Betriebsmodell Phase 1 / Phase 2: ...
3. Datenplattform & Rechte: ...
4. Sicherheitsmaßnahmen: ...`,
      rubric: [
        { criterion: 'Klassifiziert Daten nachvollziehbar inkl. Gesundheitsdaten', keywords: ['öffentlich', 'intern', 'vertraulich', 'gesundheit', 'personenbez', 'art. 9', 'besonder'], min: 3, hint: 'Welche Daten sind besonders schutzbedürftig im Sinne der DSGVO?' },
        { criterion: 'Begründet ein Betriebsmodell je Phase', keywords: ['eu-cloud', 'eu', 'on-prem', 'lokal', 'hybrid', 'cloud', 'auftragsverarbeit'], min: 2, hint: 'Passt dasselbe Betriebsmodell für Hygienepläne und für Pflegedokumentationen?' },
        { criterion: 'Beschreibt Datenplattform und Rechtekonzept', keywords: ['pipeline', 'aktualis', 'vektor', 'rechte', 'berechtig', 'sharepoint', 'quelle'], min: 3, hint: 'Wie gelangen neue Versionen eines Hygieneplans in den Assistenten – und wer darf was finden?' },
        { criterion: 'Nennt mindestens vier passende Sicherheitsmaßnahmen', keywords: ['iam', 'least privilege', 'zero trust', 'verschlüssel', 'prompt injection', 'protokoll', 'logging', 'mfa', 'owasp', 'bsi'], min: 4, hint: 'Denke an Anmeldung, Rechte, Verschlüsselung, Eingabeschutz und Nachvollziehbarkeit.' }
      ],
      hints: [
        'Beginne mit der Frage: Welche Dokumente enthalten Personenbezug – und welche sind reine Organisationsdokumente?',
        'Für Phase 1 (nur interne Standards) ist eine EU-Cloud mit Auftragsverarbeitungsvertrag meist ausreichend. Für Pflegedokumentationen (Gesundheitsdaten) brauchst du deutlich strengere Maßnahmen und eine Datenschutz-Folgenabschätzung.',
        'Sicherheitsbausteine: Anmeldung über bestehendes Konto mit MFA, Least Privilege, Rechteübernahme aus der Dokumentenablage, Verschlüsselung, Schutz gegen indirekte Prompt Injection, Protokollierung, keine Schreibrechte für den Assistenten.'
      ],
      sample: `**1. Datenklassen:** (a) öffentlich/organisatorisch: allgemeine Hygienepläne, Formulare; (b) intern: Pflegestandards, Abrechnungsregeln, Dienstanweisungen; (c) besonders schutzbedürftig: Pflegedokumentationen mit Gesundheitsdaten (Art. 9 DSGVO).

**2. Betriebsmodell:** Phase 1 (Klassen a+b): EU-Cloud – z. B. im bestehenden Microsoft-365-Tenant mit EU-Datenhaltung oder bei einem deutschen KI-Plattformanbieter –, Auftragsverarbeitungsvertrag, keine Nutzung der Daten für Training. Phase 2 (Klasse c): erst nach Datenschutz-Folgenabschätzung; Optionen: Anbieter mit nachgewiesener Eignung für Gesundheitsdaten in deutschem Rechenzentrum oder lokaler Betrieb eines kleineren Modells beim Dienstleister. → hybrid.

**3. Datenplattform:** Quelle ist die SharePoint-Ablage der Qualitätsbeauftragten. Eine nächtliche Pipeline übernimmt neue/geänderte Dokumente, zerlegt sie in Abschnitte und aktualisiert den Vektorindex; veraltete Versionen werden entfernt. Jeder Abschnitt trägt die Berechtigungsgruppen des Quelldokuments; die Suche filtert nach den Rechten der angemeldeten Person.

**4. Sicherheit:** Anmeldung über bestehendes Konto mit MFA (IAM, Zero Trust); Least Privilege – Assistent hat nur Leserechte; Verschlüsselung bei Übertragung und Speicherung; Schutz gegen indirekte Prompt Injection gemäß BSI-Basisschutz (Dokumente nur aus freigegebener Ablage, Ausgaben nicht automatisch ausführen); Protokollierung der Anfragen mit Löschkonzept; Prüfung nach OWASP LLM Top 10 (u. a. LLM02, LLM08) vor Go-live.`
    }
  ],
  glossary: [
    { term: 'CRISP-DM', def: 'Cross-Industry Standard Process for Data Mining: iteratives Prozessmodell mit sechs Phasen von Business Understanding bis Deployment.' },
    { term: 'Proof of Concept (PoC)', def: 'Kleiner, zeitlich begrenzter Test, ob ein Ansatz technisch mit den vorhandenen Daten funktioniert.' },
    { term: 'Pilotprojekt', def: 'Begrenzter Test-Roll-out im echten Arbeitsalltag zur Validierung von Nutzen und Akzeptanz (vgl. Handout-Glossar).' },
    { term: 'MLOps', def: 'DevOps-Prinzipien für ML-Modelle: Versionierung, Automatisierung, Tests, Deployment und Monitoring über den gesamten Lebenszyklus.' },
    { term: 'LLMOps', def: 'Betrieb von Anwendungen mit großen Sprachmodellen: Versionierung von Modell, Prompts und Wissensbasis, Evals, Monitoring von Qualität, Kosten und Sicherheit.' },
    { term: 'Drift', def: 'Veränderung der Daten (Data Drift) oder des Zusammenhangs zwischen Eingabe und richtiger Antwort (Concept Drift), die Modellqualität im Betrieb verschlechtert.' },
    { term: 'Vektordatenbank', def: 'Datenbank, die Texte oder Bilder als Zahlenvektoren (Embeddings) speichert und per Ähnlichkeitssuche findet – Grundlage für RAG.' },
    { term: 'Zero Trust', def: 'Sicherheitsprinzip ohne implizites Vertrauen: Jede Anfrage wird authentifiziert und autorisiert, Rechte werden minimal vergeben.' },
    { term: 'Prompt Injection', def: 'Angriff, bei dem eingeschleuste Anweisungen (direkt oder versteckt in Dokumenten/E-Mails) ein LLM zu unerwünschtem Verhalten bringen.' }
  ],
  sources: [
    { title: 'MLOps: Continuous delivery and automation pipelines in machine learning', publisher: 'Google Cloud', year: 2024, type: 'Doku', url: 'https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning' },
    { title: 'Hidden Technical Debt in Machine Learning Systems (Sculley et al.)', publisher: 'NeurIPS', year: 2015, type: 'Paper', url: 'https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html' },
    { title: 'What is CRISP-DM?', publisher: 'Data Science Process Alliance', year: 2024, type: 'Artikel', url: 'https://www.datascience-pm.com/crisp-dm-2/' },
    { title: 'SP 800-207: Zero Trust Architecture', publisher: 'NIST', year: 2020, type: 'Norm', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'Design Principles for LLM-based Systems with Zero Trust', publisher: 'BSI & ANSSI', year: 2025, type: 'Leitfaden', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/ANSSI-BSI-joint-releases/LLM-based_Systems_Zero_Trust.html' },
    { title: 'Künstliche Intelligenz – Publikationen und Empfehlungen', publisher: 'BSI', year: 2026, type: 'Leitfaden', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/KI.html' },
    { title: 'Kriterienkatalog für KI-Cloud-Dienste – AIC4', publisher: 'BSI', year: 2021, type: 'Norm', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Kuenstliche-Intelligenz/AIC4/aic4.html' },
    { title: 'OWASP Top 10 for LLM Applications 2025', publisher: 'OWASP GenAI Security Project', year: 2025, type: 'Leitfaden', url: 'https://genai.owasp.org/llm-top-10/' },
    { title: 'AWS launches AWS European Sovereign Cloud and announces expansion across Europe', publisher: 'Amazon', year: 2026, type: 'Artikel', url: 'https://press.aboutamazon.com/aws/2026/1/aws-launches-aws-european-sovereign-cloud-and-announces-expansion-across-europe' },
    { title: 'Jedes zweite Unternehmen nutzt kostenpflichtige Cloud-Services (PM Nr. 416)', publisher: 'Statistisches Bundesamt (Destatis)', year: 2025, type: 'Studie', url: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/11/PD25_416_52911.html' },
    { title: 'MLflow', publisher: 'MLflow Project (Linux Foundation)', year: 2026, type: 'Tool', url: 'https://mlflow.org/' },
    { title: 'Langfuse – Open Source LLM Engineering Platform', publisher: 'Langfuse', year: 2026, type: 'Tool', url: 'https://langfuse.com/' }
  ]
}
