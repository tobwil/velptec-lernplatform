// Kapitel 4 – KI-Projektmanagement und Umsetzung (Theorieskript K7.0069, S. 72–107)
export default {
  id: 'k4',
  order: 4,
  chapter: 4,
  title: 'KI-Projektmanagement und Umsetzung',
  subtitle: 'Lebenszyklus und hybride Methoden, Teams, Beschaffung, Risiken, Change Management, Pilot und Skalierung',
  icon: 'flow',
  isNew: false,
  minutes: 195,
  skript: [
    { chapter: '4.1', title: 'KI-Projektlebenszyklus und Methoden', page: 74 },
    { chapter: '4.2', title: 'Aufbau von KI-Teams und Kompetenzen', page: 78 },
    { chapter: '4.3', title: 'Anbieterauswahl und Beschaffung', page: 84 },
    { chapter: '4.4', title: 'Risikomanagement für KI-Projekte', page: 89 },
    { chapter: '4.5', title: 'Change Management und Akzeptanz', page: 96 },
    { chapter: '4.6', title: 'Pilotprojekte und Skalierung', page: 102 },
  ],
  objectives: [
    'Du steuerst ein KI-Projekt durch die vier Lebenszyklusphasen Ideenfindung, Entwicklung, Bereitstellung und Betrieb und begründest, warum ein hybrider Ansatz aus Wasserfall und Agil meist am besten passt.',
    'Du stellst ein funktionsübergreifendes KI-Team zusammen, wägst internen Kompetenzaufbau gegen externe Einstellung ab und wählst ein passendes Teammodell (zentral, dezentral, Hub-and-Spoke).',
    'Du triffst Make-or-Buy-Entscheidungen anhand von vier Dimensionen, bewertest Anbieter strukturiert und kennst die entscheidenden Vertragsklauseln.',
    'Du identifizierst technische, organisatorische und externe Projektrisiken, bewertest sie und leitest Gegenmaßnahmen ab – inklusive GenAI-spezifischer Risiken.',
    'Du erkennst die Quellen von Widerstand gegen KI und setzt ADKAR, Kotters 8 Stufen, Kommunikation, Schulung und Akzeptanzkennzahlen gezielt ein.',
    'Du gestaltest Pilotprojekte mit klaren Go-/No-Go-Kriterien und planst eine schrittweise Skalierung.',
  ],
  lessons: [
    // ───────────────────────── Lektion 1 – 4.1 ─────────────────────────
    {
      id: 'k4-l1',
      title: '4.1 KI-Projektlebenszyklus und Methoden',
      minutes: 30,
      skript: { chapter: '4.1', page: 74 },
      blocks: [
        { type: 'video', scene: 'prozess' },
        {
          type: 'text',
          md: `Die Strategie steht, die Use Cases sind priorisiert (Kapitel 2), die Daten geprüft (Kapitel 3) – jetzt geht es um die **Umsetzung**. KI-Projekte unterscheiden sich grundlegend von klassischen IT-Projekten: Ob eine Lösung funktioniert, weißt du oft erst **nach Experimenten mit den Daten**. Wer ein KI-Projekt wie die Einführung einer Buchhaltungssoftware plant, wird enttäuscht.`,
        },
        {
          type: 'skript',
          chapter: '4.1',
          page: 74,
          quote: 'Der größte Fehler, den Unternehmen machen, ist es, KI-Projekte in reine Wasserfall- oder rein agile Rahmenwerke zu zwängen.',
          md: `**Kernaussagen des Abschnitts 4.1 (S. 74–78):**

- Der KI-Lebenszyklus hat **vier Phasen:** **Ideenfindung** (Problem erkennen und eingrenzen), **Entwicklung** (Modelle erstellen und trainieren), **Bereitstellung** (in den Produktivbetrieb bringen), **Betrieb** (warten und kontinuierlich verbessern). Feedback aus dem Betrieb fließt zurück in die Entwicklung.
- **Wasserfall** setzt vollständig vorab definierbare Anforderungen voraus – das widerspricht der experimentellen Natur von KI.
- **Agil** passt gut zur Entwicklung (Sprints, schnelles Feedback), hat aber Grenzen: Die „Definition of Done“ wird unscharf, und Fachbereiche tun sich mit Unsicherheit schwer.
- **Hybrid** ist der bevorzugte Ansatz: strukturierte Planung in der Ideenfindung, agile Sprints in der Entwicklung, formale Gates in der Bereitstellung, DevOps/MLOps im Betrieb.
- **Erfolgsfaktoren:** Geschäftsziel im Blick, feste Lernschleifen, klare Go-/No-Go-Punkte, funktionsübergreifende Zusammenarbeit, von Anfang an für den Produktivbetrieb planen.
- **Häufige Fehler:** Bereitstellung unterschätzen, KI wie klassische IT behandeln, Datenaufwand (60–80 %) ignorieren, Endanwender zu spät einbinden, fehlende Rückendeckung der Geschäftsleitung.`,
        },
        {
          type: 'table',
          caption: 'Die vier Lebenszyklusphasen und der passende Steuerungsstil (hybrider Ansatz nach Skript)',
          head: ['Phase', 'Kernfrage', 'Inhalte laut Skript', 'Steuerungsstil'],
          rows: [
            ['**Ideenfindung**', 'Kann KI dieses Problem lösen – und haben wir die Daten?', 'Geschäftsproblem mit Umfang und Erfolgskriterien, Datenverfügbarkeit, technische Machbarkeit, ROI-Schätzung, Abstimmung mit Stakeholdern', 'Strukturiert (Wasserfall-Denken): Business Case, Ziele, Metriken'],
            ['**Entwicklung**', 'Welcher Ansatz erreicht die nötige Qualität?', 'Iterativ und experimentell, Hypothesen testen, schnelles Prototyping, enge Zusammenarbeit Technik–Fachbereich, „gescheiterte“ Experimente als Lernchance', 'Agil: zweiwöchige Sprints, regelmäßige Demos'],
            ['**Bereitstellung**', 'Ist das Modell produktionsreif?', 'Infrastruktur, Monitoring, Governance, Sicherheit, Dokumentation, kontrollierter Rollout', 'Strukturierte Gates mit formalen Tests'],
            ['**Betrieb**', 'Funktioniert es weiterhin – und lohnt es sich?', 'Monitoring, Wartung, kontinuierliche Verbesserung', 'DevOps-/MLOps-Prinzipien (Kapitel 6)'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Definiere das Problem rigoros, experimentiere iterativ, stelle mit Gates bereit.** Passe die Methode an den Unsicherheitsgrad der jeweiligen Phase an.',
        },
        {
          type: 'text',
          md: `### Feinere Sicht: sieben Arbeitsschritte

Viele Praxisleitfäden zerlegen die vier Phasen in kleinere Schritte. Das folgende Widget zeigt ein verbreitetes Modell mit sieben Schritten. So passen sie zum Lebenszyklus des Skripts: **Planung** → Ideenfindung; **Daten** und **Modell** → Entwicklung; **Integration**, **Pilot** und **Roll-out** → Bereitstellung; **Monitoring** → Betrieb. Achte darauf, dass der letzte Schritt wieder in den ersten zurückführt: KI-Projekte sind Kreisläufe.`,
        },
        { type: 'interactive', widget: 'process-steps' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Entwicklung bei generativer KI',
          md: `Bei Anwendungen mit großen Sprachmodellen wird selten selbst trainiert. Die Entwicklungsphase heißt dann eher **Modellauswahl und Konfiguration**: passendes Modell wählen (oft reicht ein kleineres, günstigeres), System-Prompt definieren, Wissen per **RAG** (Retrieval-Augmented Generation) anbinden und nur in Ausnahmefällen feinjustieren. Getestet wird mit **Evals** – mehr dazu in Kapitel 8.2 (LLMOps) und im Plus-Modul „Generative KI anwenden: Prompting, RAG & Modellwahl“.`,
        },
        {
          type: 'text',
          md: `### CRISP-DM: der Klassiker für Datenprojekte

In Data-Science-Teams ist zusätzlich **CRISP-DM** (Cross-Industry Standard Process for Data Mining) verbreitet – ein Ende der 1990er-Jahre von einem Industriekonsortium entwickeltes Prozessmodell. Seine Stärke passt genau zur Botschaft des Skripts: Es betont, dass man zwischen den Phasen **vor- und zurückspringt**.`,
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Business Understanding', md: 'Geschäftsziel verstehen und in eine Datenfragestellung übersetzen, Erfolgskriterien festlegen (→ Ideenfindung).' },
            { title: '2 · Data Understanding', md: 'Daten sammeln, sichten, Qualitätsprobleme erkennen. Häufig Rücksprung zu Phase 1: „Mit diesen Daten lässt sich die Frage so nicht beantworten.“' },
            { title: '3 · Data Preparation', md: 'Daten bereinigen, verknüpfen, aufbereiten – oft der größte Zeitblock (Kapitel 3.4).' },
            { title: '4 · Modeling', md: 'Verfahren auswählen, Modelle trainieren bzw. konfigurieren; Rücksprung zu Phase 3, wenn das Verfahren andere Datenformate braucht.' },
            { title: '5 · Evaluation', md: 'Erfüllt das Modell die **geschäftlichen** Erfolgskriterien – nicht nur die technischen Metriken?' },
            { title: '6 · Deployment', md: 'Einsatz im Prozess, Übergabe an den Betrieb, Monitoring planen (→ Bereitstellung und Betrieb).' },
          ],
        },
        {
          type: 'timeline',
          items: [
            { date: 'Woche 1–2', title: 'Initiierung', md: 'Business Case, Stakeholder-Analyse, Projektauftrag durch die Geschäftsführung (Ideenfindung).' },
            { date: 'Woche 3–6', title: 'Planung', md: 'Ziele, KPIs und Baseline-Messung, Datenbewertung, Risikoanalyse (Datenschutz, KI-Verordnung, Sicherheit).' },
            { date: 'Woche 7–12', title: 'PoC / Pilot', md: 'Datenaufbereitung, Modellauswahl/-training in Sprints, „Integration light“ in einen Teilprozess (Entwicklung).' },
            { date: 'Woche 13–14', title: 'Evaluation', md: 'KPI-Review gegen Baseline, Nutzerfeedback – **Go-/No-Go-Entscheidung**.' },
            { date: 'Woche 15–18', title: 'Roll-out', md: 'Schrittweise Skalierung, Change Management, Schulung, Support-Prozess (Bereitstellung).' },
            { date: 'ab Woche 19', title: 'Betrieb', md: 'Monitoring, Nachtraining bzw. Anpassung, Optimierung, regelmäßige Reviews.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Musterplan als Startwert',
          md: 'Der Zeitstrahl oben ist ein typischer Musterplan von rund 18 Wochen bis zum Regelbetrieb. Ein einfacher GenAI-Use-Case mit Standardsoftware geht oft schneller, eigenes Modelltraining mit schwieriger Datenlage dauert länger. Nutze die Dauer als **Startwert, nicht als Versprechen**.',
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Wie viele Unternehmen skalieren KI wirklich?',
          md: `Das Skript zitiert eine McKinsey-Umfrage von 2024, wonach nur 15 % der Unternehmen KI erfolgreich in großem Maßstab eingeführt hätten. Die neuere McKinsey-Umfrage **„The state of AI in 2025“** zeigt dasselbe Muster mit aktuellen Zahlen: **88 %** der Befragten berichten, dass ihre Organisation KI in mindestens einer Funktion regelmäßig nutzt – aber **fast zwei Drittel** haben noch **nicht begonnen, KI unternehmensweit zu skalieren**. **62 %** experimentieren zumindest mit KI-Agenten, doch in keiner einzelnen Funktion skalieren mehr als 10 % Agenten.

**Die Kernaussage des Skripts bleibt also gültig:** Die Lücke zwischen Ausprobieren und produktivem Nutzen schließt man nicht mit Technik allein, sondern mit Projektmanagement, klaren Gates und Change Management.`,
          sources: [
            { title: 'McKinsey: The state of AI in 2025 – Agents, innovation, and transformation', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
          ],
        },
        {
          type: 'praxis',
          title: 'Hybrider Projektplan für einen KI-Posteingang',
          company: 'Gemeindeverwaltung Talheim (fiktiv), 120 Beschäftigte',
          scenario: `Der Bürgermeister möchte, dass eingehende E-Mails und eingescannte Briefe automatisch dem richtigen Fachbereich zugeordnet werden. Du sollst einen Projektplan vorlegen – und der Kämmerer fragt, warum man „nicht einfach ein festes Pflichtenheft schreibt“.`,
          steps: [
            'Ideenfindung strukturiert: Gemeinsam mit der Poststelle die Baseline messen (Vorgänge pro Tag, Minuten pro Zuordnung, Fehlzuordnungen), Ziel festlegen („80 % der Vorgänge korrekt vorgeschlagen, Poststelle bestätigt per Klick“), Datenschutz und Betriebsort klären.',
            'Dem Kämmerer erklären: Ob 80 % erreichbar sind, zeigt erst das Experiment mit echten Daten. Ein starres Pflichtenheft würde eine Sicherheit vortäuschen, die es nicht gibt.',
            'Entwicklung agil: Zweiwöchige Sprints mit Demo vor Poststelle und zwei Fachbereichen; jeder Sprint liefert eine Erkenntnis (z. B. „Bauanträge werden oft mit Gewerbe verwechselt“).',
            'Go-/No-Go nach Sprint 3: Liegt die Trefferquote unter 60 %, wird der Ansatz gewechselt oder abgebrochen.',
            'Bereitstellung mit Gates: Sicherheitsprüfung, Personalrat informiert, Schulung, kontrollierter Start mit „KI schlägt vor, Mensch entscheidet“.',
            'Betrieb: monatliches Review der Fehlzuordnungen als Verbesserungsquelle und Nachtraining bei Bedarf.',
          ],
          takeaway: `Der hybride Ansatz gibt der Verwaltung **Struktur, wo sie Planbarkeit braucht**, und **Flexibilität, wo gelernt wird**. Und: In Behörden heißt der Betriebsrat Personalrat.`,
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die vier Phasen des KI-Projektlebenszyklus nach Skript in die richtige Reihenfolge.',
          items: ['Ideenfindung', 'Entwicklung', 'Bereitstellung', 'Betrieb'],
          explain: 'Ideenfindung → Entwicklung → Bereitstellung → Betrieb; Erkenntnisse aus dem Betrieb fließen zurück in die Entwicklung (Skript S. 74 und 76).',
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne der Phase den Steuerungsstil des hybriden Ansatzes zu.',
          pairs: [
            ['Ideenfindung', 'Strukturierte Planung mit Business Case und Erfolgsmetriken'],
            ['Entwicklung', 'Agile Sprints mit regelmäßigen Demos'],
            ['Bereitstellung', 'Formale Gates mit Tests und Sicherheitsprüfung'],
            ['Betrieb', 'DevOps-/MLOps-Prinzipien mit kontinuierlicher Überwachung'],
          ],
          explain: 'So beschreibt das Skript das praktische hybride Rahmenwerk (S. 76–77).',
        },
      ],
    },

    // ───────────────────────── Lektion 2 – 4.2 ─────────────────────────
    {
      id: 'k4-l2',
      title: '4.2 Aufbau von KI-Teams und Kompetenzen',
      minutes: 25,
      skript: { chapter: '4.2', page: 78 },
      blocks: [
        {
          type: 'text',
          md: `KI-Teams müssen gleichzeitig **erkunden, was möglich ist**, **bestimmen, was wertvoll ist**, und **liefern, was praktisch umsetzbar ist**. Das gelingt nur, wenn die Welt der Data Science und die Welt des Geschäfts wirklich zusammenarbeiten – nicht durch Übergaben zwischen isolierten Spezialisten.`,
        },
        {
          type: 'skript',
          chapter: '4.2',
          page: 78,
          quote: 'Ein fähiges Team mit einfachen Werkzeugen wird ein unfähiges Team mit der besten Technologie immer übertreffen.',
          md: `**Kernaussagen des Abschnitts 4.2 (S. 78–84):**

- Ein KI-Team ist **funktionsübergreifend**: technisches Fachwissen, Domänenwissen und unternehmerisches Denken mit gleichwertiger Vertretung.
- **Sechs Kernrollen:** Data Scientist, ML Engineer, Data Engineer, Product Owner, Fachexperte (Domain Expert), KI-Ethik- und Governance-Spezialist.
- **Minimales Projektteam (5–7 Personen):** 1 Product Owner, 2 Data Scientists, 1 ML Engineer, 1 Data Engineer, 1 Fachexperte, 1 Governance-Spezialist (Teilzeit).
- Gemeinsames Verständnis durch **gemeinsame Stand-ups, Demos laufender Arbeit, gemeinsame Sprintplanung und gemeinsame Erfolgsmetriken**. Ein kleines **Vollzeitteam** schlägt eine große Teilzeitgruppe.
- **Intern aufbauen** (6–12 Monate, höherer langfristiger ROI) vs. **extern einstellen** (sofort verfügbar, aber umkämpfter Markt und fehlendes Domänenwissen) → am besten **kombinieren**.
- **Drei Weiterbildungsstufen:** KI-Grundwissen (alle), KI-Vertiefung (Fachkräfte), KI-Handlungskompetenz (Technik).
- **Teammodelle:** zentral, dezentral, Hub-and-Spoke – meist **zentral starten** und mit wachsender Reife verteilen.`,
        },
        {
          type: 'table',
          caption: 'Die sechs Kernrollen (Skript S. 79) – und wie sie im Mittelstand oft besetzt werden',
          head: ['Rolle', 'Aufgabe laut Skript', 'Im KMU häufig …'],
          rows: [
            ['Product Owner', 'Vertritt den Fachbereich, definiert Erfolgskriterien, priorisiert, trifft Abwägungen', 'KI-Managerin bzw. KI-Manager oder Leitung des Fachbereichs'],
            ['Data Scientist', 'Entwickelt und trainiert Modelle, statistische Analysen, bewertet die Modellleistung', 'Externer Partner oder weitergebildete Fachkraft'],
            ['ML Engineer', 'Bringt Modelle in Produktion: Pipelines, Skalierbarkeit, Zuverlässigkeit', 'Systemhaus, Plattformanbieter oder AI Engineer beim Partner'],
            ['Data Engineer', 'Baut die Dateninfrastruktur, sorgt für Verfügbarkeit und Qualität der Daten', 'IT-Abteilung oder externer Partner'],
            ['Fachexperte (Domain Expert)', 'Bringt Fachwissen ein, prüft Ergebnisse auf Plausibilität, verhindert „technisch gut, fachlich irrelevant“', 'Erfahrene Mitarbeitende aus dem Fachbereich'],
            ['KI-Ethik- und Governance-Spezialist', 'Compliance, ethische Folgen, verantwortungsvolle KI', 'Datenschutzbeauftragte(r), Informationssicherheit, ggf. Rechtsberatung'],
            ['(ergänzend) Betriebs- bzw. Personalrat', 'Mitbestimmung bei technischen Einrichtungen, die Leistung oder Verhalten erfassen können (Kapitel 7.4)', 'Früh einbinden, nicht erst vor dem Go-live'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: 'Erfolg entsteht durch **Zusammenarbeit, nicht durch Übergaben**. Technik braucht genug Geschäftskontext, um sinnvoll zu optimieren – der Fachbereich braucht genug Technikverständnis, um Möglichkeiten, Unsicherheiten und Kompromisse einzuschätzen.',
        },
        {
          type: 'table',
          caption: 'Intern aufbauen, extern einstellen oder beides? (nach Skript S. 81–82)',
          head: ['', 'Interner Kompetenzaufbau', 'Externe Einstellung', 'Kombination (Empfehlung)'],
          rows: [
            ['**Vorteile**', 'Bewahrt institutionelles Wissen, dauerhafte Fähigkeiten, meist höherer langfristiger ROI', 'Sofortige Expertise, bewährte Praktiken aus anderen Unternehmen', 'Schneller Start und nachhaltiges Talent'],
            ['**Nachteile**', 'Braucht Zeit (laut Skript 6–12 Monate bis zur Kompetenz), Risiko, dass Schulung nicht in Praxis mündet', 'Stark umkämpfter Markt, hohe Gehälter, oft fehlendes Domänenwissen', 'Erfordert bewusste Mentoring-Struktur'],
            ['**Skript-Beispiel**', '–', '–', 'Siemens: kleines Kernteam (5–7 erfahrene Fachleute) setzt Architektur und Standards, über 50 interne Ingenieure werden per Weiterbildung und Projektarbeit qualifiziert'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Zu den Gehaltsangaben im Skript',
          md: 'Das Skript nennt für erfahrene Data Scientists 150.000 bis über 250.000 US-Dollar „in großen Märkten“ – gemeint sind vor allem US-Technologiestandorte. Für den deutschen Mittelstand sind diese Zahlen nicht übertragbar. Für deine Planung zählt die Kernaussage: Spezialisten sind **knapp und teuer**, deshalb lohnt sich die Kombination aus wenigen Erfahrenen, Partnern und gezielter Weiterbildung.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Stufe 1 · KI-Grundwissen (alle)', md: 'Was ist KI, wo wird sie eingesetzt, wie verändert sie die eigene Arbeit? Workshops, E-Learning, Aufklärungskampagnen. Diese Stufe deckt zugleich die Pflicht zur **KI-Kompetenz nach Art. 4 AI Act** ab, die seit 02.02.2025 gilt.' },
            { title: 'Stufe 2 · KI-Vertiefung (Fachkräfte)', md: 'Chancen erkennen, mit Technikteams zusammenarbeiten: vertiefende Schulungen zu Fähigkeiten, Anwendungsfällen und Projektabläufen – genau das, was du in dieser Weiterbildung tust.' },
            { title: 'Stufe 3 · KI-Handlungskompetenz (Technik)', md: 'KI-Lösungen entwickeln und bereitstellen: intensive Programme, Bootcamps, praktische Projekterfahrung.' },
          ],
        },
        {
          type: 'table',
          caption: 'Fünf Praktiken erfolgreicher Weiterbildungsprogramme (laut Skript nach BCG-Forschung 2024)',
          head: ['Praktik', 'So setzt du sie um'],
          rows: [
            ['Mit Geschäftsproblemen statt Technologie beginnen', 'Schulungen an echten Prozessen aufhängen („Angebotserstellung beschleunigen“), nicht an Tool-Funktionen'],
            ['Strukturiertes Lernen mit Projektarbeit verbinden', 'Jede Schulung endet mit einem kleinen Anwendungsfall aus dem eigenen Bereich'],
            ['Laufendes Coaching und Mentoring', 'Sprechstunden, Tandems aus Erfahrenen und Neulingen'],
            ['Praxisgemeinschaften (Communities of Practice)', 'Regelmäßiger Austausch, gemeinsame Prompt- und Fallsammlung'],
            ['Erfolg am Geschäftsnutzen messen', 'Zeitersparnis und Qualität statt bloßer Teilnahmequote'],
          ],
        },
        {
          type: 'table',
          caption: 'Teamstrukturmodelle (Skript S. 83–84)',
          head: ['Modell', 'Aufbau', 'Stärke', 'Schwäche'],
          rows: [
            ['Zentral', 'Ein dediziertes KI-Team bedient die ganze Organisation', 'Kompetenzaufbau, Austausch von Best Practices', 'Engpässe, Distanz zu den Fachbereichen'],
            ['Dezentral', 'KI-Fachleute sitzen direkt in den Fachabteilungen', 'Enge fachliche Ausrichtung, schnelle Umsetzung', 'Doppelarbeit, uneinheitliche Praktiken'],
            ['Hub-and-Spoke', 'Zentrales Kompetenzzentrum (Standards, Werkzeuge, Spezialwissen) plus verteilte Teams in den Bereichen', 'Vereint die Vorteile beider Ansätze', 'Braucht klare Rollen und Abstimmung (Kapitel 7.3)'],
          ],
        },
        {
          type: 'text',
          md: `Das Skript empfiehlt, **zentral zu beginnen**: Ein Team von 10–15 Personen kann die ersten 5–10 KI-Projekte betreuen und dabei Standards, Governance und wiederverwendbare Komponenten aufbauen. Mit wachsender Nachfrage werden KI-Fachkräfte in vorrangige Fachbereiche eingebettet, während das zentrale Team für Fortgeschrittenes und Governance bleibt. Im Mittelstand ist dieses „zentrale Team“ oft deutlich kleiner – manchmal eine KI-Managerin mit externem Partner und einem Netzwerk von KI-Champions.`,
        },
        {
          type: 'praxis',
          title: 'Ein KI-Team für 180 Mitarbeitende zusammenstellen',
          company: 'Elektro Hahn GmbH & Co. KG (fiktiv), Elektrogroßhandel, 180 Mitarbeitende, Bielefeld',
          scenario: `Die Geschäftsführung will in zwölf Monaten drei KI-Use-Cases umsetzen: Angebotsassistent, Retourenprognose, Wissensassistent für den Innendienst. Budget für zwei neue Stellen ist da; die IT besteht aus vier Personen. Ein Vorschlag lautet, „aus jeder Abteilung jemanden mit 10 % Zeit“ ins Projekt zu holen.`,
          steps: [
            'Teilzeit-Flickwerk vermeiden: Ein kleines **dediziertes Kernteam** bilden – KI-Manager als Product Owner (Vollzeit), ein neu eingestellter Data/AI Engineer, eine weitere Stelle als Data Engineer in der IT.',
            'Data Science für das Prognosemodell über einen Partner einkaufen und vertraglich **Wissenstransfer** vereinbaren (Pairing mit dem internen Engineer).',
            'Je Use Case eine **Fachexpertin bzw. einen Fachexperten** mit festem Zeitanteil von 20–30 % benennen – nicht 10 %.',
            'Governance-Rolle: Datenschutzbeauftragter und Informationssicherheit als Teilzeit-Mitglieder, Betriebsrat von Beginn an informiert.',
            'Weiterbildung in drei Stufen planen: Grundschulung für alle (Art. 4 AI Act), Vertiefung für Abteilungsleitungen, Handlungskompetenz für die zwei Neuen und die IT.',
            'Zentral starten, nach den ersten Erfolgen KI-Champions in Vertrieb und Lager benennen (Ansatz Hub-and-Spoke).',
          ],
          takeaway: `Der Engpass ist selten die Technik, sondern **Menschen mit Zeit und Kompetenz**. Ein kleines Vollzeit-Kernteam plus Fachexperten mit echtem Zeitbudget schlägt eine große Teilzeitgruppe.`,
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Rolle ihrer Hauptaufgabe im KI-Team zu.',
          pairs: [
            ['ML Engineer', 'Überführt experimentelle Modelle in Produktivsysteme'],
            ['Data Engineer', 'Baut und pflegt die Dateninfrastruktur'],
            ['Product Owner', 'Definiert Erfolgskriterien und priorisiert aus Geschäftssicht'],
            ['Fachexperte', 'Prüft Ergebnisse auf fachliche Plausibilität'],
          ],
          explain: 'Zusammen mit Data Scientist und Governance-Spezialist ergeben diese Rollen das vollständige Kompetenzprofil (Skript S. 79).',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welches Teammodell empfiehlt das Skript für Unternehmen am Anfang ihrer KI-Reise?',
          options: ['Sofort dezentral in allen Abteilungen', 'Zentral beginnen und mit steigender Reife verteilen', 'Nur externe Dienstleister, kein eigenes Team', 'Hub-and-Spoke ab dem ersten Projekt mit 20 Spokes'],
          answer: 1,
          explain: 'Zentral starten baut eine kritische Masse an Fachwissen und Standards auf; danach werden Fachkräfte schrittweise in die Fachbereiche eingebettet (Skript S. 83–84).',
        },
      ],
    },

    // ───────────────────────── Lektion 3 – 4.3 ─────────────────────────
    {
      id: 'k4-l3',
      title: '4.3 Anbieterauswahl und Beschaffung',
      minutes: 25,
      skript: { chapter: '4.3', page: 84 },
      blocks: [
        {
          type: 'text',
          md: `Selbst entwickeln oder zukaufen? Bei klassischer Software ist Zukauf meist die Standardantwort. Bei KI hängen an dieser Entscheidung zusätzlich **Datenkontrolle, strategische Fähigkeiten und langfristige Flexibilität**. Abschnitt 4.3 gibt dir dafür ein Raster – vom Make-or-Buy bis zur Vertragsklausel.`,
        },
        {
          type: 'skript',
          chapter: '4.3',
          page: 84,
          quote: 'Entwickle selbst, wenn KI einen Wettbewerbsvorteil schafft; kaufe zu, wenn es um Standardfähigkeiten geht.',
          md: `**Kernaussagen des Abschnitts 4.3 (S. 84–89):**

- **Eigenentwicklung:** maximale Kontrolle, eigenes geistiges Eigentum, dauerhafte Kompetenz – aber 6–18 Monate und ein spezialisiertes Team; lohnt sich nur für strategisch entscheidende Fälle.
- **Zukauf:** in Wochen statt Monaten einsatzbereit, mit Support, Kosten verteilt auf viele Kunden – aber weniger Flexibilität und Abhängigkeit vom Anbieter.
- **Hybrid:** Plattformen für Infrastruktur und Standardkomponenten kaufen (z. B. Azure ML, Google Vertex AI), darauf eigene Modelle bauen.
- **Vier Entscheidungsdimensionen:** strategische Bedeutung, Differenzierungspotenzial, vorhandene Kompetenz, Zeitdruck.
- **Anbieterbewertung:** Fähigkeit (mit **echten Daten** testen), Finanzen/Gesamtbetriebskosten, Tragfähigkeit des Anbieters, technische Kompatibilität, Sicherheit und Compliance.
- **Vertragsklauseln:** Datenrechte und Eigentum, geistiges Eigentum, Leistungsgarantien (besser **SLAs** für Verfügbarkeit/Antwortzeit als Genauigkeitsgarantien), Anpassung und Integration, Support und Wartung, Kündigung und Ausstieg, Haftung und Schadloshaltung.
- **Best Practices:** 2–3-monatiger Pilot mit echten Daten vor der Unternehmenslizenz, straffreie Ausstiegsklausel, mehrere Anbieterbeziehungen, Technik, Fachbereich und Recht gemeinsam beteiligen.`,
        },
        {
          type: 'table',
          caption: 'Entscheidungsmatrix für häufige Szenarien (Skript S. 85–86)',
          head: ['Anwendungsfall', 'Strateg. Wert', 'Differenzierung', 'Interne Kompetenz', 'Zeitrahmen', 'Entscheidung'],
          rows: [
            ['Kundenservice-Chatbot', 'Mittel', 'Gering', 'Begrenzt', '3 Monate', 'Zukauf einer Plattformlösung'],
            ['Betrugserkennung im Bankwesen', 'Hoch', 'Hoch', 'Stark', '12 Monate', 'Eigenentwicklung'],
            ['Dokumentenklassifizierung', 'Gering', 'Gering', 'Begrenzt', '1 Monat', 'Zukauf einer SaaS-Lösung'],
            ['Vorausschauende Instandhaltung', 'Hoch', 'Mittel', 'Mittel', '6 Monate', 'Hybrid (Plattform + Eigenentwicklung)'],
            ['Absatzprognose', 'Mittel', 'Mittel', 'Mittel', '4 Monate', 'Zukauf und anschließende Anpassung'],
          ],
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Im Mittelstand: fast immer „Buy“ oder „Hybrid“',
          md: 'Für die meisten KMU ist Eigenentwicklung von Grund auf selten sinnvoll. Häufiger lautet die Frage: **Welches Standardprodukt** (z. B. eine Enterprise-Chat-Plattform), **welche Plattform mit eigener Konfiguration** (z. B. ein Wissensassistent mit RAG auf eigenen Dokumenten) – und wo liegt das wirklich **differenzierende Wissen**, das wir selbst kontrollieren wollen?',
        },
        {
          type: 'table',
          caption: 'Anbieterbewertung: Skript-Dimensionen und konkrete Prüffragen',
          head: ['Dimension (Skript)', 'Prüffragen für die Praxis'],
          rows: [
            ['**Fähigkeit**', 'Demo mit **unseren** Daten statt Demo-Daten? Nachweise bei ähnlichen Problemen? Skaliert die Lösung auf unser Volumen? Funktioniert sie auf Deutsch?'],
            ['**Finanzen / Gesamtbetriebskosten**', 'Lizenz, Einführung, Schulung, Support? Preismodell pro Transaktion, Nutzer oder Rechenleistung (Tokens)? Wie verhalten sich die Kosten bei 10-facher Nutzung?'],
            ['**Tragfähigkeit des Anbieters**', 'Finanzielle Stabilität, Marktposition, Kundenstamm, Referenzen? Was passiert bei Übernahme oder Produkteinstellung?'],
            ['**Technische Kompatibilität**', 'Integration in bestehende Systeme und Datenplattform? Offene Schnittstellen (z. B. OpenAI-kompatible API, MCP)? Integrationsaufwand kann die Softwarekosten übersteigen.'],
            ['**Sicherheit & Compliance**', 'Datenstandort (Speicherung **und** Verarbeitung), Modelltransparenz, Zertifikate (ISO 27001, SOC 2, BSI C5), Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit Liste der Unterauftragsverarbeiter, Nutzung unserer Daten fürs Training?'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Herstellerangaben sind ein Startpunkt, kein Beweis',
          md: 'Aussagen wie „DSGVO-konform“ oder „souverän“ sind Selbstauskünfte. Lass dir AVV, Liste der Unterauftragsverarbeiter, Zertifikate und den genauen Verarbeitungsort zeigen – und prüfe, ob einzelne Funktionen (z. B. Websuche, Bildgenerierung) andere Dienste oder Regionen nutzen. Einen Überblick über europäische Anbieter und lokale Alternativen findest du im Plus-Modul „KI-Werkzeugkasten: Open Source, lokale Modelle & Vibe Coding“.',
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Datenrechte & Eigentum', back: 'Wem gehören die Trainingsdaten? Darf der Anbieter unsere Daten nutzen, um Modelle für andere Kunden zu verbessern (meist inakzeptabel)? Was passiert mit den Daten bei Vertragsende?' },
            { front: 'Geistiges Eigentum', back: 'Wem gehören Anpassungen und Modelle, die während der Zusammenarbeit entstehen?' },
            { front: 'Leistungsgarantien', back: 'Realistisch bleiben: Genauigkeit hängt von unseren Daten ab. Besser SLAs für Verfügbarkeit und Antwortzeiten vereinbaren.' },
            { front: 'Anpassung & Integration', back: 'Welche Konfigurations- und Integrationsarbeit ist enthalten, was kostet extra?' },
            { front: 'Support & Wartung', back: 'Fehlerbehebung, Modellaktualisierungen, Reaktionszeiten – und Ankündigungsfristen bei Modellwechseln.' },
            { front: 'Kündigung & Ausstieg', back: 'Datenrückgabe, Übergangsunterstützung, dürfen wir trainierte Modelle behalten?' },
            { front: 'Haftung & Schadloshaltung', back: 'Wer trägt die Verantwortung bei Ausfällen oder Fehlentscheidungen – besonders bei automatisierten Entscheidungen gegenüber Kunden? Freistellung von IP-Ansprüchen?' },
          ],
        },
        {
          type: 'table',
          caption: 'Fünf häufige Beschaffungsfehler (Skript S. 88)',
          head: ['Fehler', 'Gegenmittel'],
          rows: [
            ['Integrationskomplexität unterschätzen', 'Integration im Pilot mit echten Systemen testen und im Angebot getrennt ausweisen lassen'],
            ['Nur auf den Kaufpreis schauen', 'Gesamtbetriebskosten über 3 Jahre rechnen (Einführung, Schulung, Support, Nutzungskosten)'],
            ['Herstellerangaben ungeprüft übernehmen', 'Immer mit eigenen Daten und Anwendungsfällen testen'],
            ['Change Management vergessen', 'Schulung und Einführung mitplanen – ungenutzte Lizenzen sind verschwendetes Geld (Abschnitt 4.5)'],
            ['Weiterentwicklung nicht einplanen', 'Vertraglich Upgrades auf neuere Funktionen und Modelle sichern'],
          ],
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Rechtsrahmen für KI-Beschaffung (Stand Oktober 2026)',
          md: `- **AI Act:** Das Skript schreibt, der AI Act mache die Compliance-Prüfung von Anbietern bei Hochrisiko-KI verpflichtend. Präziser: Wer ein Hochrisiko-System einsetzt, ist **Betreiber** mit eigenen Pflichten (Art. 26, u. a. Nutzung nach Betriebsanleitung, menschliche Aufsicht, Protokolle). Wer ein System unter eigenem Namen vertreibt oder wesentlich verändert, kann selbst zum **Anbieter** werden (Art. 25). Die Hochrisiko-Pflichten nach Anhang III gelten nach dem Digital Omnibus (VO (EU) 2026/1744) ab **02.12.2027**, nach Anhang I ab **02.08.2028**. Lass dir Konformitätsnachweise trotzdem schon jetzt zusichern.
- **EU Data Act:** Kapitel VI regelt den **Wechsel zwischen Cloud- und Datenverarbeitungsdiensten**. Ab **12.01.2027** dürfen Anbieter für den Wechselprozess **keine Wechselentgelte** mehr verlangen; bis dahin nur reduzierte, kostenbasierte Entgelte. Das stärkt deine Verhandlungsposition gegen Lock-in.
- **Musterklauseln:** Die EU stellt **Model Contractual Clauses for AI (MCC-AI)** für die öffentliche Beschaffung bereit – je eine Fassung für Hochrisiko- und Nicht-Hochrisiko-Systeme. Sie sind auch für private Unternehmen eine gute Checkliste.`,
          sources: [
            { title: 'Art. 25 KI-Verordnung – Verantwortlichkeiten entlang der KI-Wertschöpfungskette', url: 'https://artificialintelligenceact.eu/article/25/' },
            { title: 'Art. 26 KI-Verordnung – Pflichten der Betreiber', url: 'https://artificialintelligenceact.eu/article/26/' },
            { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
            { title: 'Bundesnetzagentur: Glossar Data Act – Switching charge', url: 'https://www.bundesnetzagentur.de/SharedDocs/A_Z_Glossar_DataAct_ENG/S/switching-charge.html' },
            { title: 'EU Model Contractual AI Clauses (MCC-AI)', url: 'https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources/eu-model-contractual-ai-clauses-pilot-procurements-ai' },
          ],
        },
        {
          type: 'praxis',
          title: 'Beschaffung eines KI-Angebotsassistenten',
          company: 'Sanitär Weidner GmbH (fiktiv), Großhandel für Haustechnik, 230 Mitarbeitende, Würzburg',
          scenario: `Der Vertrieb will einen KI-Assistenten, der Angebote aus Kundenanfragen vorbereitet. Zwei Anbieter haben beeindruckende Demos gezeigt – beide mit eigenen Beispieldaten. Anbieter A ist ein großer US-Plattformanbieter, Anbieter B ein deutsches Start-up mit Hosting in Frankfurt. Die Geschäftsführung möchte „bis Monatsende unterschreiben“.`,
          steps: [
            'Make-or-Buy mit den vier Dimensionen: Angebotslogik ist mittel strategisch, Differenzierung liegt in Preisen und Artikelstamm, Kompetenz begrenzt, Zeitrahmen 4 Monate → **Zukauf einer Plattform plus eigene Konfiguration** (hybrid).',
            'Bewertungsmatrix vorab festlegen und gewichten: Fähigkeit 30 %, Gesamtbetriebskosten 20 %, Sicherheit/Compliance 25 %, Kompatibilität mit ERP 15 %, Tragfähigkeit 10 %.',
            'Beide Anbieter erhalten **dieselben 30 echten, anonymisierten Anfragen**; die Ergebnisse bewerten zwei Vertriebsprofis blind.',
            'Unterlagen anfordern: AVV und Unterauftragsverarbeiter, Zertifikate, Verarbeitungsorte, Preismodell bei 10-facher Nutzung, Zusicherung „keine Nutzung unserer Daten fürs Training“.',
            'Vertrag nach dem Muster aus dem Skript verhandeln: Daten in EU-Rechenzentren, Ergebnisse und Konfigurationen gehören uns, 90 Tage Übergangsunterstützung bei Kündigung, Freistellung von IP-Ansprüchen.',
            'Start mit **3-monatigem Pilot und straffreier Ausstiegsklausel** statt Unternehmenslizenz; Unterschrift „bis Monatsende“ nur für den Pilotvertrag.',
          ],
          takeaway: `Die schönere Demo gewinnt nicht automatisch. **Eigene Daten, vorher festgelegte Kriterien, belastbare Verträge und ein Pilot mit Ausstieg** schützen vor teuren Fehlentscheidungen.`,
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche vier Dimensionen steuern laut Skript die Entscheidung zwischen Eigenentwicklung und Zukauf? (Mehrfachauswahl)',
          options: ['Strategische Bedeutung', 'Differenzierungspotenzial', 'Vorhandene Kompetenz', 'Zeitdruck', 'Anzahl der Social-Media-Follower des Anbieters'],
          answer: [0, 1, 2, 3],
          explain: 'Hohe strategische Bedeutung, einzigartige Anforderungen, starke Kompetenz und lange Zeitrahmen sprechen für Eigenentwicklung, das Gegenteil für Zukauf (Skript S. 85).',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Bei KI-Verträgen solltest du vom Anbieter vor allem eine feste Genauigkeitsgarantie (z. B. 95 %) verlangen.',
          answer: false,
          explain: 'Falsch. Die Modellleistung hängt stark von deinen Daten ab, feste Genauigkeitsgarantien sind schwierig. Das Skript empfiehlt SLAs für Verfügbarkeit und Antwortzeiten (S. 87–88) – Qualität sicherst du über den Pilot und eigene Tests.',
        },
      ],
    },

    // ───────────────────────── Lektion 4 – 4.4 ─────────────────────────
    {
      id: 'k4-l4',
      title: '4.4 Risikomanagement für KI-Projekte',
      minutes: 30,
      skript: { chapter: '4.4', page: 89 },
      blocks: [
        {
          type: 'text',
          md: `KI-Projekte haben ein eigenes Risikoprofil: Ein Modell erreicht trotz großer Investition vielleicht nie die nötige Genauigkeit, Datenprobleme zeigen sich oft erst spät, und selbst ein technisch gutes System kann am Widerstand der Nutzenden scheitern. Deine Aufgabe als KI-Managerin oder KI-Manager ist nicht, jedes Risiko auszuschließen, sondern Risiken **früh sichtbar zu machen, zu bewerten und bewusst zu steuern**: vermeiden, vermindern, übertragen oder akzeptieren.`,
        },
        {
          type: 'skript',
          chapter: '4.4',
          page: 89,
          quote: 'Das Risikomanagement muss diese Unsicherheit annehmen, statt so zu tun, als gäbe es sie nicht.',
          md: `**Kernaussagen des Abschnitts 4.4 (S. 89–96):**

- Drei Risikokategorien: **technisch** (Modellleistung, Datenqualität, Algorithmen), **organisatorisch** (Kompetenzlücken, Widerstand, Akzeptanz), **extern** (Regulierung, Wettbewerb, Anbieterabhängigkeit).
- **Modellleistungsrisiko:** Gegenmittel ist ein **4–6-wöchiger Proof of Concept** mit repräsentativen Daten, vorab definierten Schwellenwerten und Go-/No-Go-Kriterien.
- **Datenrisiko:** sechs Prüfdimensionen (Verfügbarkeit, Umfang, Qualität, Relevanz, Verzerrung, Aktualität), jeweils hoch/mittel/niedrig bewertet; **2–4 Wochen Datenuntersuchung** vor der Modellentwicklung.
- **Datendrift:** Modelle verlieren schleichend an Leistung → Monitoring, Alarm bei Schwellenwerten, automatisiertes Nachtraining, Wartung als **laufende Betriebskosten**.
- **Organisatorisch:** Laut Skript hängen **70 %** der Einführungsprobleme mit Menschen und Prozessen zusammen. Eine einzige falsche Empfehlung kann Vertrauen zerstören. Für Change Management **20–30 % des Projektbudgets** einplanen.
- **Extern:** Regulierungsänderungen beobachten und Compliance von Anfang an einbauen; Anbieterabhängigkeit durch Diversifizierung, Verträge (z. B. Quellcode-Hinterlegung), interne Expertise und Notfallpläne begrenzen.`,
        },
        {
          type: 'table',
          caption: 'Die drei Skript-Kategorien, ergänzt um typische GenAI-Risiken (Stand 2026)',
          head: ['Kategorie', 'Typische Risiken (Skript + Ergänzung)', 'Gegenmaßnahmen'],
          rows: [
            ['**Technisch**', 'Modellleistung, Datenqualität und -verfügbarkeit, Datendrift; **neu:** Halluzinationen, Prompt Injection, ungeprüfte Weiterverarbeitung von Modellausgaben', 'PoC mit Schwellenwerten, Datenbewertung, Monitoring und Nachtraining, Evaluations-Sets, Ausgabevalidierung, Human-in-the-Loop'],
            ['**Organisatorisch**', 'Kompetenzlücken, Akzeptanz und Vertrauen, Change Management; **neu:** Schatten-KI, blindes Vertrauen in Ausgaben (Automation Bias), unklare Verantwortlichkeiten', 'Einstellen + Weiterbilden (4.2), Transparenz, frühe Erfolge, menschliche Aufsicht, KI-Richtlinie, freigegebene Tools, Art.-4-Schulung'],
            ['**Extern**', 'Regulierung (AI Act, DSGVO), Wettbewerbsdynamik, Anbieterabhängigkeit; **neu:** Modelländerungen und Preissprünge beim API-Anbieter, Ausfälle', 'Regulatorisches Monitoring, Compliance by Design, Diversifizierung, Exit-Klauseln, modellagnostische Architektur, Notfallplan'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Und was ist mit rechtlichen und ethischen Risiken?',
          md: 'Das Skript ordnet die Regulierung den **externen** Risiken zu. Viele Unternehmen führen **rechtlich/ethisch** (DSGVO-Verstoß, Bias, Haftung für Chatbot-Aussagen, Urheberrecht) als eigene vierte Kategorie, weil diese Risiken sehr wohl im eigenen Einflussbereich liegen – etwa durch Privacy by Design und Fairness-Prüfungen. Beides ist zulässig; wichtig ist, dass diese Risiken **nicht unter den Tisch fallen**. Vertiefung in Kapitel 5.',
        },
        {
          type: 'table',
          caption: 'Datenrisikobewertung nach Skript (S. 91) – Vorlage mit Beispielbewertung für einen fiktiven Retourenprognose-Fall',
          head: ['Dimension', 'Leitfrage', 'Beispiel-Bewertung', 'Maßnahme bei hohem Risiko'],
          rows: [
            ['Verfügbarkeit', 'Gibt es die Daten, und dürfen/können wir zugreifen?', 'Niedrig', '–'],
            ['Umfang', 'Genug Beispiele zum Trainieren?', 'Mittel', 'Zeitraum erweitern, ähnliche Produktgruppen zusammenfassen'],
            ['Qualität', 'Wie viel ist genau, vollständig, konsistent?', '**Hoch**', 'Retourengründe vereinheitlichen, Scorecard (Kapitel 3.2)'],
            ['Relevanz', 'Hängen die Daten wirklich mit dem Problem zusammen?', 'Niedrig', '–'],
            ['Verzerrung (Bias)', 'Systematische Verzerrungen, die zu unfairen oder ungenauen Modellen führen?', 'Mittel', 'Verteilung nach Kundengruppen prüfen'],
            ['Aktualität', 'Bilden die Daten die heutigen Verhältnisse ab?', 'Mittel', 'Daten vor Sortimentswechsel geringer gewichten'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Risiko = Eintrittswahrscheinlichkeit × Schadensausmaß.** Bei KI kommt hinzu: Risiken sind *dynamisch*. Ein Modell, das heute gut funktioniert, kann morgen durch neue Daten, ein Modell-Update des Anbieters oder einen neuen Angriffstrick schlechter werden. Risikomanagement ist ein Kreislauf, kein einmaliges Dokument.',
        },
        { type: 'interactive', widget: 'risk-matrix', props: {} },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Sicherheitsrisiken generativer KI',
          md: `Das Skript behandelt vor allem Risiken klassischer ML-Projekte. Für Sprachmodelle gibt es inzwischen etablierte Referenzen:

- Die **OWASP Top 10 for LLM Applications (Version 2025)** listen die zehn wichtigsten Sicherheitsrisiken von LLM-Anwendungen – von Prompt Injection bis „Unbounded Consumption“ (ausufernde Kosten und Ressourcen).
- Das **BSI** beschreibt in „Generative KI-Modelle – Chancen und Risiken für Industrie und Behörden“ (Version 2.0 vom 17.01.2025) Risiken und Gegenmaßnahmen entlang des Lebenszyklus.
- Das **NIST AI Risk Management Framework** (mit Profil für generative KI, NIST AI 600-1) strukturiert Risikomanagement in **Govern, Map, Measure, Manage**.
- Ein reales Beispiel für das **Regulierungsrisiko**, das das Skript beschreibt: Der Digital Omnibus (VO (EU) 2026/1744) hat 2026 die Hochrisiko-Fristen des AI Act verschoben (Anhang III ab 02.12.2027, Anhang I ab 02.08.2028). Wer seinen Fahrplan nicht laufend prüft, plant mit falschen Daten.`,
          sources: [
            { title: 'OWASP Top 10 for LLM Applications 2025', url: 'https://genai.owasp.org/llm-top-10/' },
            { title: 'BSI: Generative KI-Modelle – Chancen und Risiken für Industrie und Behörden (v2.0)', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KI/Generative_KI-Modelle.pdf' },
            { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
            { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
          ],
        },
        {
          type: 'table',
          caption: 'OWASP Top 10 for LLM Applications 2025 – kurz erklärt',
          head: ['ID', 'Risiko', 'Was heißt das im Alltag?'],
          rows: [
            ['LLM01', 'Prompt Injection', 'Versteckte Anweisungen in Eingaben, E-Mails oder Webseiten bringen das Modell dazu, Regeln zu ignorieren.'],
            ['LLM02', 'Sensitive Information Disclosure', 'Das System gibt vertrauliche oder personenbezogene Daten preis.'],
            ['LLM03', 'Supply Chain', 'Unsichere Modelle, Plugins oder Bibliotheken von Dritten.'],
            ['LLM04', 'Data and Model Poisoning', 'Manipulierte Trainings- oder Wissensdaten verfälschen das Verhalten.'],
            ['LLM05', 'Improper Output Handling', 'Modellausgaben werden ungeprüft weiterverarbeitet (z. B. als Code oder SQL).'],
            ['LLM06', 'Excessive Agency', 'Ein Agent hat mehr Rechte oder Werkzeuge als nötig – und richtet Schaden an.'],
            ['LLM07', 'System Prompt Leakage', 'Interne Anweisungen (inkl. Geheimnisse darin) werden ausgelesen.'],
            ['LLM08', 'Vector and Embedding Weaknesses', 'Schwachstellen in RAG-Systemen, z. B. fehlende Zugriffsrechte in der Vektordatenbank.'],
            ['LLM09', 'Misinformation', 'Halluzinationen und überzeugend falsche Aussagen.'],
            ['LLM10', 'Unbounded Consumption', 'Unkontrollierte Nutzung treibt Kosten und Last in die Höhe.'],
          ],
        },
        {
          type: 'youtube',
          id: 'cYuesqIKf9A',
          title: 'Explained: The OWASP Top 10 for Large Language Model Applications',
          channel: 'IBM Technology',
          lang: 'en',
          minutes: 14,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Hinweis zum Video',
          md: 'Das IBM-Video erklärt die erste Fassung der OWASP-Liste (2023). Reihenfolge und einzelne Einträge wurden 2025 überarbeitet (z. B. neu: System Prompt Leakage, Vector and Embedding Weaknesses). Die Grundidee – Eingaben misstrauen, Ausgaben prüfen, Rechte begrenzen – gilt unverändert.',
        },
        {
          type: 'praxis',
          title: 'Vertrauen aufbauen in der vorausschauenden Instandhaltung',
          company: 'Fertigungsunternehmen (Fallbeispiel aus dem Skript, S. 95)',
          scenario: `Ein Fertigungsunternehmen führte KI für vorausschauende Instandhaltung ein. Die Wartungstechniker misstrauten den Empfehlungen zum Wartungszeitpunkt – ein klassisches **Akzeptanz- und Vertrauensrisiko**. Das Projekt wurde trotzdem ein Erfolg.`,
          steps: [
            'Leitende Techniker wurden **in die Modellentwicklung eingebunden**.',
            'Es wurde gezeigt, **wie die Vorhersagen zustande kommen** (Transparenz).',
            'Zunächst gab es nur **Empfehlungen**, keine automatisierten Maßnahmen.',
            'Fälle, in denen die KI Probleme erkannte, die Menschen entgangen waren, wurden **sichtbar gemacht**.',
            'Das Vertrauen wuchs schrittweise durch **nachgewiesenen Nutzen**.',
          ],
          takeaway: `Organisatorische Risiken sind oft schwerer als technische. Die wirksamsten Gegenmittel waren hier **Beteiligung, Transparenz und ein schrittweiser Übergang** von der Empfehlung zur Automatisierung.`,
        },
        {
          type: 'praxis',
          title: 'Risikoworkshop für einen KI-Angebotsassistenten',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Die Geschäftsführung möchte, dass ein KI-Assistent aus Kundenanfragen per E-Mail automatisch Angebotsentwürfe erstellt. Der Assistent soll dafür auf die Preisliste und das CRM zugreifen. Du moderierst einen 90-minütigen Risikoworkshop mit Vertrieb, IT, Datenschutzbeauftragtem und einem Monteur.`,
          steps: [
            'Use Case und Datenflüsse auf einer Seite skizzieren: E-Mail → KI → CRM/Preisliste → Entwurf → Freigabe durch Vertrieb.',
            'Risiken je Kategorie sammeln (technisch, organisatorisch, extern – plus rechtlich/ethisch) und um OWASP-Risiken ergänzen, z. B. Prompt Injection über eine manipulierte Kunden-E-Mail (LLM01) oder zu weitreichende CRM-Schreibrechte (LLM06).',
            'Jedes Risiko in der Risikomatrix nach Wahrscheinlichkeit × Schaden einordnen.',
            'Für die roten Felder Maßnahmen festlegen: nur Leserechte auf das CRM, Preise aus der Datenbank statt aus dem Modell, Pflichtfreigabe jedes Angebots durch einen Menschen; vorab ein 4-wöchiger PoC mit Schwellenwert.',
            'Risiko-Verantwortliche und einen Termin für den nächsten Review festlegen (z. B. nach 4 Wochen Pilot).',
          ],
          takeaway: 'Die wirksamste Gegenmaßnahme war hier keine Technik, sondern **Architektur**: Das Modell formuliert nur, Preise und Rechte kommen aus kontrollierten Systemen, und ein Mensch gibt frei.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Team will sechs Monate und ein großes Budget in ein Betrugserkennungsmodell investieren. Was empfiehlt das Skript, um das Modellleistungsrisiko zu senken?',
          options: ['Sofort die volle Entwicklung starten', 'Einen 4–6-wöchigen PoC mit repräsentativen Daten, vorab definierten Schwellenwerten und Go-/No-Go-Kriterien', 'Das Risiko ignorieren, weil KI immer lernt', 'Nur einen größeren Algorithmus wählen'],
          answer: 1,
          explain: 'Der kurze PoC zeigt früh, ob die geforderte Genauigkeit mit den vorhandenen Daten erreichbar ist (Skript S. 90).',
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne das Risiko seiner Skript-Kategorie zu.',
          pairs: [
            ['Datendrift', 'Technisch'],
            ['Kompetenzlücke im Team', 'Organisatorisch'],
            ['Anbieter stellt das Produkt ein', 'Extern'],
            ['Neue Regulierungsanforderungen vor der Bereitstellung', 'Extern'],
          ],
          explain: 'Technische Risiken betreffen das System selbst, organisatorische Menschen und Prozesse, externe liegen außerhalb der direkten Kontrolle (Skript S. 89).',
        },
      ],
    },

    // ───────────────────────── Lektion 5 – 4.5 (Widerstände) ─────────────────────────
    {
      id: 'k4-l5',
      title: '4.5 Change Management und Akzeptanz: Widerstände verstehen',
      minutes: 30,
      skript: { chapter: '4.5', page: 96 },
      blocks: [
        { type: 'video', scene: 'change' },
        {
          type: 'text',
          md: `Die fortschrittlichste KI liefert keinen Nutzen, wenn niemand sie verwendet. Das Skript nennt Beispiele, die du aus der Praxis kennen wirst: Kundendienstmitarbeitende ignorieren KI-Antwortvorschläge, Kreditsachbearbeiter übergehen das Scoring nach Bauchgefühl, Ärztinnen misstrauen Diagnoseempfehlungen. Dieser Widerstand ist **keine irrationale Sturheit**, sondern Ausdruck berechtigter Fragen zu Vertrauen, Transparenz, Verantwortung und Arbeitsplatzsicherheit.`,
        },
        {
          type: 'skript',
          chapter: '4.5',
          page: 96,
          quote: 'Menschen wehren sich gegen KI nicht, weil sie Technologie ablehnen, sondern weil KI Machtverhältnisse, Entscheidungsbefugnisse und das berufliche Selbstverständnis verändert.',
          md: `**Kernaussagen des Abschnitts 4.5, Teil Widerstände (S. 96–100):**

- Change Management überbrückt die Kluft zwischen **technischer Fähigkeit und menschlicher Akzeptanz**; laut Skript sind rund **70 %** der Einführungsprobleme menschlicher Natur.
- **Vier Quellen von Widerstand** mit je eigenen Gegenmitteln: Angst vor Arbeitsplatzverlust, Vertrauens- und Transparenzbedenken („Black Box“), Kontroll- und Autonomieverlust, mangelndes Verständnis bzw. fehlende KI-Kompetenz.
- **Nie als „Big Bang“ einführen:** erst KI als beratende Unterstützung, dann schrittweise Automatisierung.
- **Human-in-the-Loop:** KI empfiehlt, Mensch entscheidet – mit Überstimmung inklusive Begründungspflicht.
- **Zielgruppengerechte Bildung:** Geschäftsleitung (Strategie, Nutzen), mittlere Führungsebene (KI-unterstützte Teams führen, Ergebnisse interpretieren), Endanwender (Umgang, Interpretation, Grenzen) – fortlaufend, nicht einmalig.`,
        },
        {
          type: 'table',
          caption: 'Vier Quellen von Widerstand und passende Gegenmaßnahmen (Skript S. 97–100)',
          head: ['Quelle', 'Typischer Satz', 'Gegenmaßnahmen laut Skript'],
          rows: [
            ['**Angst vor Arbeitsplatzverlust**', '„Die KI ersetzt mich.“', 'Ehrlich kommunizieren, was sich ändert und was nicht; Weiterbildung für KI-unterstützte Rollen; Umsetzen statt Abbauen zusagen, wo möglich; KI als Ergänzung darstellen'],
            ['**Vertrauen & Transparenz**', '„Warum lehnt das System diesen Antrag ab?“', 'Erklärbarkeit auf passendem Detailniveau; schrittweise Einführung (beratend → automatisiert); menschliche Aufsicht bei großer Tragweite'],
            ['**Kontroll- und Autonomieverlust**', '„Ich soll einfach tun, was die KI sagt?“', 'KI ergänzt Urteilsvermögen; Routinefälle an KI, komplexe Fälle an Menschen; Human-in-the-Loop; Überstimmen mit Begründung; KI übernimmt die mühsame Arbeit'],
            ['**Mangelndes Verständnis**', '„KI kann alles“ – oder „KI ist nur Hype“', 'Bildungsprogramme je Zielgruppe (Geschäftsleitung, mittlere Führung, Endanwender), fortlaufend statt einmalig'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Kein „Big Bang“',
          md: 'Führe KI-Systeme nie so ein, dass Beschäftigte eines Morgens feststellen, dass ihre Prozesse komplett automatisiert sind. Erst **beratend**, dann **teilautomatisiert**, dann – wo sinnvoll – **automatisiert**. So lernen die Anwenderinnen und Anwender Stärken und Grenzen des Systems kennen und bauen Vertrauen durch Erfahrung auf.',
        },
        {
          type: 'text',
          md: `### Angst vor Jobverlust: Was sagen die Daten?

Das Skript empfiehlt **ehrliche Kommunikation** über die Auswirkungen auf die Belegschaft. Dafür brauchst du belastbare Zahlen – und musst ihre Grenzen kennen:

- **IAB (Kurzbericht 5/2024):** Der Anteil sozialversicherungspflichtig Beschäftigter in Berufen, in denen mindestens 70 % der Tätigkeiten von Computern übernommen werden *könnten*, stieg von **34 % (2019) auf 38 % (2022)** – vor allem durch generative KI. Das IAB betont: Solche Potenziale wurden in der Vergangenheit nicht immer und nicht vollständig ausgeschöpft.
- **OECD (Employment Outlook 2023):** Berufe mit dem höchsten Automatisierungsrisiko machen im OECD-Schnitt rund **27 %** der Beschäftigung aus; Auswirkungen auf die Gesamtbeschäftigung waren bis dahin kaum messbar.
- **WEF (Future of Jobs Report 2025):** Unternehmen erwarten bis 2030 weltweit **170 Mio. neue** und **92 Mio. wegfallende** Stellen – netto **+78 Mio.** Rund **39 %** der heutigen Kernkompetenzen dürften sich verändern. Das sind Erwartungen von Arbeitgebern, keine Messwerte.
- **Bitkom (Studie 2025):** **67 %** der deutschen Unternehmen erwarten in den nächsten fünf Jahren keine Auswirkungen von KI auf ihre Beschäftigtenzahl, **20 %** einen Rückgang, **7 %** einen Anstieg. Gleichzeitig bieten **43 %** ihren Beschäftigten **keine KI-Schulungen** an.`,
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Potenzial ist keine Prognose.** Dass eine Tätigkeit automatisierbar *wäre*, heißt nicht, dass der Job wegfällt – meist verändern sich Aufgaben. Ehrliche Kommunikation sagt beides: was sich ändert und was wir tun, damit niemand zurückbleibt.',
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Woher kommt die „70 %“-Zahl?',
          md: `Das Skript nennt die 70-%-Statistik ohne Quelle. Eine verbreitete Herkunft ist das **„10-20-70“-Prinzip der Boston Consulting Group**: Erfolgreiche Unternehmen stecken rund **10 %** ihres Aufwands in Algorithmen, **20 %** in Technologie und Daten und **70 %** in **Menschen und Prozesse**. In derselben BCG-Studie (2024, 1.000 Führungskräfte) zeigten **74 %** der Unternehmen noch keinen greifbaren Wert aus KI. Für Gespräche mit Belegschaft und Betriebsrat solltest du außerdem auf die Arbeitsmarktstudien oben zurückgreifen und ihre Grenzen offen benennen.`,
          sources: [
            { title: 'BCG: AI Adoption in 2024 – 74 % of Companies Struggle to Achieve and Scale Value', url: 'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value' },
            { title: 'IAB-Kurzbericht 5/2024', url: 'https://doku.iab.de/kurzber/2024/kb2024-05.pdf' },
            { title: 'OECD Employment Outlook 2023 – Pressemitteilung', url: 'https://www.oecd.org/en/about/news/press-releases/2023/07/oecd-job-markets-remain-tight-though-inflation-is-hitting-real-wages.html' },
            { title: 'WEF: Future of Jobs Report 2025 – Pressemitteilung', url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/' },
            { title: 'Bitkom: Künstliche Intelligenz in Deutschland (Studie 2025)', url: 'https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf' },
          ],
        },
        {
          type: 'flipcards',
          cards: [
            { front: '„Die KI nimmt mir meinen Job weg.“', back: 'Ernst nehmen, nicht wegreden. Zeigen, welche Aufgaben sich ändern, und konkrete Zusagen machen (z. B. Qualifizierung, keine betriebsbedingten Kündigungen wegen des Projekts – nur wenn das wirklich gilt).' },
            { front: '„Damit werde ich überwacht.“', back: 'Transparenz herstellen: Welche Daten werden erfasst, wer sieht sie? Leistungs- und Verhaltenskontrolle ausschließen bzw. per Betriebsvereinbarung regeln (Kapitel 7.4).' },
            { front: '„Ich bin zu alt / nicht technisch genug.“', back: 'Niedrigschwellige Formate (Lernen im Tandem, Sprechstunden), Erfolgserlebnisse am eigenen Arbeitsplatz ermöglichen.' },
            { front: '„Wenn die KI Fehler macht, bin ich schuld.“', back: 'Klare Regeln, wer prüft und freigibt; Überstimmen mit Begründung ist ausdrücklich erwünscht; Verantwortung liegt bei Prozess und Organisation, nicht beim Einzelnen.' },
            { front: '„Das ist nur noch mehr Arbeit.“', back: 'Mit einem echten Schmerzpunkt starten, Zeitgewinn messen und zurückspiegeln; Lernzeit offiziell einplanen.' },
          ],
        },
        {
          type: 'praxis',
          title: 'Einführung eines KI-Dokumentationsassistenten',
          company: 'Sanitätshaus Lorenz GmbH (fiktiv), 120 Mitarbeitende, Kassel',
          scenario: `Ein KI-Assistent soll Beratungsgespräche in der Orthopädietechnik zusammenfassen und Kostenvoranschläge vorbereiten. In der Belegschaft kursiert das Gerücht, dass „der Innendienst halbiert wird“. Erfahrene Orthopädietechniker sagen: „Was im Kostenvoranschlag steht, entscheide immer noch ich.“`,
          steps: [
            'Jobangst: Geschäftsführung und KI-Manager stellen sich in einer Betriebsversammlung den Fragen; klare, ehrliche Aussage zur Personalplanung.',
            'Autonomie: Der Assistent liefert nur **Entwürfe**; Techniker entscheiden und können jeden Vorschlag mit kurzer Begründung überstimmen (Human-in-the-Loop).',
            'Vertrauen: Zwei Innendienst-Mitarbeitende testen vier Wochen und berichten selbst – Zeitgewinn, aber auch Schwächen.',
            'Kompetenz: Kurze, rollenbezogene Schulungen für Leitung, Teamleitungen und Anwender mit eingeplanter Lernzeit.',
            'Betriebsrat früh beteiligen (Unterrichtung nach § 90 BetrVG, Mitbestimmung bei möglicher Leistungskontrolle).',
          ],
          takeaway: 'Jede der vier Widerstandsquellen brauchte ein **eigenes Gegenmittel**. Glaubwürdigkeit entsteht durch Beteiligung und Ehrlichkeit; Kolleginnen und Kollegen, die selbst testen, überzeugen mehr als jede Präsentation.',
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Widerstandsquelle der wirksamsten Gegenmaßnahme zu.',
          pairs: [
            ['Angst vor Arbeitsplatzverlust', 'Ehrliche Kommunikation und Weiterbildung für KI-unterstützte Rollen'],
            ['Black-Box-Misstrauen', 'Erklärbarkeit und schrittweise Einführung als Beratung'],
            ['Kontrollverlust', 'Human-in-the-Loop mit Überstimmung und Begründung'],
            ['Fehlende KI-Kompetenz', 'Zielgruppengerechte, fortlaufende Bildungsprogramme'],
          ],
          explain: 'Das Skript betont, dass jede Quelle eigene Gegenmaßnahmen erfordert (S. 97–100).',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Laut IAB arbeiten 38 % der Beschäftigten in Berufen mit hohem Substituierbarkeitspotenzial – also werden diese Jobs in den nächsten Jahren wegfallen.',
          answer: false,
          explain: 'Substituierbarkeitspotenzial beschreibt, was technisch möglich wäre. Das IAB weist ausdrücklich darauf hin, dass solche Potenziale in der Vergangenheit nicht immer und nicht vollständig ausgeschöpft wurden.',
        },
      ],
    },

    // ───────────────────────── Lektion 6 – 4.5 (Modelle & Messung) ─────────────────────────
    {
      id: 'k4-l6',
      title: '4.5 Change Management und Akzeptanz: ADKAR, Kotter, Kommunikation und Erfolgsmessung',
      minutes: 30,
      skript: { chapter: '4.5', page: 100 },
      blocks: [
        {
          type: 'text',
          md: `Change-Modelle helfen dir, nichts Wichtiges zu vergessen und Probleme zu diagnostizieren. Das Skript stellt zwei Modelle vor, die sich gut ergänzen:

- **ADKAR** (Prosci) betrachtet die **einzelne Person**: Veränderung gelingt nur, wenn jeder Mensch fünf Stufen nacheinander durchläuft.
- **Kotters 8 Stufen** betrachten die **Organisation**: Wie schaffe ich Dringlichkeit, eine Führungskoalition und Momentum?`,
        },
        {
          type: 'skript',
          chapter: '4.5',
          page: 100,
          md: `**Kernaussagen des Abschnitts 4.5, Teil Rahmenwerke und Umsetzung (S. 100–102):**

- **ADKAR:** Awareness (warum KI gebraucht wird), Desire (Nutzen zeigen, Bedenken aufgreifen), Knowledge (Schulung), Ability (Üben und Unterstützung), Reinforcement (Erfolge feiern, Rückschläge aufarbeiten).
- **Kotters 8 Stufen:** Dringlichkeit schaffen, Führungskoalition, Vision, Freiwillige gewinnen, Hindernisse beseitigen, kurzfristige Erfolge, Dynamik halten, Wandel verankern.
- **Beispiel Versicherer (Skript):** KI-gestützte Schadenbearbeitung nach Kotter – laut Skript **40 % kürzere Bearbeitungszeit** bei höherer Mitarbeiterzufriedenheit.
- **Kommunikation:** ehrlich, Nutzen für Unternehmen **und** Einzelne, Zwei-Wege-Kanäle, konkrete Beispiele, Erfolgsgeschichten, konsistente Botschaft von oben bis unten. Fünf typische Fehler vermeiden.
- **Schulung und Unterstützung:** Vorabschulung, bedarfsgerechte Unterstützung (Doku, Helpdesk, erfahrene Kolleginnen, Sprechstunden), fortlaufendes Lernen (Updates, Praxisgemeinschaften, Power-User).
- **Erfolg messen:** Akzeptanzrate, Nutzungstiefe, Überstimmungsrate, Zufriedenheit/NPS, geschäftliche Wirkung.`,
        },
        {
          type: 'steps',
          items: [
            { title: 'A – Awareness (Bewusstsein)', md: 'Verstehen, *warum* KI gebraucht wird – das Geschäftsproblem und die Chance. Beispiel: „Wir bekommen 30 % mehr Anfragen bei gleichem Team.“' },
            { title: 'D – Desire (Wunsch)', md: 'Sich *entscheiden*, mitzumachen: Nutzen aufzeigen, Bedenken aufgreifen. Was habe ich persönlich davon?' },
            { title: 'K – Knowledge (Wissen)', md: '*Wissen, wie* es geht: Schulung zu Tool, Datenregeln und Grenzen der KI.' },
            { title: 'A – Ability (Fähigkeit)', md: 'Das Wissen *im Alltag anwenden*: praktisches Üben, Ansprechpartner, Vorlagen, Lernen am echten Fall.' },
            { title: 'R – Reinforcement (Festigung)', md: 'Das Neue *verankern*: Erfolge feiern, Rückschläge aufarbeiten, Prozesse und Ziele anpassen.' },
          ],
        },
        { type: 'interactive', widget: 'adkar-check', props: {} },
        {
          type: 'youtube',
          id: 'zYe2fG8m4Ow',
          title: 'The Prosci ADKAR® Change Management Model',
          channel: 'Prosci',
          lang: 'en',
          minutes: 1,
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'ADKAR als Diagnosewerkzeug',
          md: 'Wenn ein Rollout stockt, frage: **An welcher Stufe hängen die Leute?** Die erste schwache Stufe ist der Engpass. Mehr Schulung (Knowledge) hilft nicht, wenn niemand den Sinn sieht (Awareness) oder keine Lust hat (Desire).',
        },
        {
          type: 'table',
          caption: 'Kotters 8 Stufen – mit dem Versicherungsbeispiel aus dem Skript (S. 100)',
          head: ['Stufe', 'Bedeutung für KI', 'So machte es der Versicherer'],
          rows: [
            ['1. Dringlichkeit schaffen', 'Warum jetzt?', 'Hinweis auf Wettbewerbsdruck durch KI-fähige Versicherer'],
            ['2. Führungskoalition aufbauen', 'KI-Befürworter mit Einfluss', 'Angesehene Schadenmanager als Botschafter'],
            ['3. Vision entwickeln', 'Bild vom KI-unterstützten Betrieb', '„Sachbearbeiter freistellen für komplexe Fälle“'],
            ['4. Freiwillige gewinnen', 'Vorreiter und Botschafter', 'Pilotprogramme mit Freiwilligen'],
            ['5. Hindernisse beseitigen', 'Ressourcen, Tools, Regeln', 'Schulungen und Unterstützung'],
            ['6. Kurzfristige Erfolge', 'Nutzen sichtbar machen', 'Beschleunigte Fälle hervorgehoben'],
            ['7. Dynamik halten', 'Auf Erfolgen aufbauen', 'Weitere Schadensarten einbezogen'],
            ['8. Wandel verankern', 'KI in Kultur und Prozesse einbetten', 'KI-Kompetenz als berufliche Anforderung'],
          ],
        },
        {
          type: 'youtube',
          id: 'SGYmPMcgDPg',
          title: "Kotter's 8 Steps for Leading Change",
          channel: 'Kotter',
          lang: 'en',
          minutes: 4,
        },
        {
          type: 'text',
          md: `### Stakeholder-Analyse als Vorarbeit

Bevor du kommunizierst, kläre: **Wer ist betroffen, wer entscheidet mit, wer kann blockieren?** Typische Stakeholder sind Geschäftsführung, Fachbereichsleitungen, Endnutzer, IT, Datenschutz, Informationssicherheit, Betriebsrat, Kundinnen und Kunden sowie KI-Anbieter. Ein bewährtes Werkzeug ist die **Einfluss-Interesse-Matrix**: hoher Einfluss und hohes Interesse → eng einbinden; hoher Einfluss, geringes Interesse → zufriedenstellen; geringer Einfluss, hohes Interesse → aktiv informieren und beteiligen; beides gering → beobachten.`,
        },
        {
          type: 'table',
          caption: 'Kommunikation: Grundsätze und typische Fehler (Skript S. 101)',
          head: ['Grundsatz', 'Typischer Fehler'],
          rows: [
            ['Ehrlich sein über das, was sich ändert und warum – inkl. Auswirkungen auf die Belegschaft', 'Schwierige Themen wie Arbeitsplätze vermeiden und hoffen, dass sich Bedenken von selbst auflösen'],
            ['Nutzen für das Unternehmen **und** für den Einzelnen zeigen', 'KI-Fähigkeiten übertreiben → Enttäuschung, wenn die Realität dem Hype nicht entspricht'],
            ['Zwei-Wege-Kanäle, über die Bedenken geäußert und aufgegriffen werden', 'Einseitig informieren, ohne zuzuhören'],
            ['Konkrete Beispiele statt abstrakter Konzepte, Erfolgsgeschichten teilen', 'Nur formale Kanäle, kein informeller Dialog'],
            ['Konsistente Botschaft von der Geschäftsleitung bis auf alle Ebenen', 'Kommunikation nach dem Start einstellen statt fortlaufenden Dialog zu pflegen'],
          ],
        },
        {
          type: 'table',
          caption: 'Fünf Akzeptanzkennzahlen (Skript S. 101–102) – mit Messvorschlag',
          head: ['Kennzahl', 'Was sie zeigt', 'Messvorschlag'],
          rows: [
            ['Akzeptanzrate', 'Anteil der Zielgruppe, der das System regelmäßig nutzt', 'Aktive Nutzende pro Woche ÷ Zielgruppe'],
            ['Nutzungstiefe', 'Werden auch fortgeschrittene Funktionen genutzt?', 'Anteil Nutzender mit ≥ 3 genutzten Funktionen'],
            ['Überstimmungsrate', 'Wie oft werden KI-Empfehlungen übergangen? Hohe Werte deuten auf Vertrauensprobleme', 'Überstimmte ÷ alle Empfehlungen, mit Begründungen auswerten'],
            ['Zufriedenheit / NPS', 'Stimmung, Weiterempfehlung', 'Kurzumfrage nach 4 und 12 Wochen'],
            ['Geschäftliche Wirkung', 'Schnellere Bearbeitung, bessere Entscheidungen, zufriedenere Kunden', 'Vergleich mit der Baseline (Kapitel 2.4)'],
          ],
        },
        {
          type: 'praxis',
          title: 'Ein stockender Copilot-Rollout mit ADKAR diagnostizieren',
          company: 'Kreisverwaltung Waldfeld (fiktiv), 600 Beschäftigte',
          scenario: `Die Verwaltung hat für 150 Beschäftigte einen KI-Assistenten für Texte und Zusammenfassungen lizenziert. Nach drei Monaten nutzen ihn nur 20 Personen regelmäßig (Akzeptanzrate rund 13 %). Die Amtsleitung fragt dich, ob man die Lizenzen kündigen soll.`,
          steps: [
            'Kurzbefragung entlang der ADKAR-Stufen (je 1–2 Fragen) und Gespräche mit Nutzenden und Nicht-Nutzenden.',
            'Ergebnis: Awareness und Desire sind gut, aber viele wissen nicht, welche Daten sie eingeben dürfen (Knowledge) und haben keine Zeit zum Ausprobieren (Ability).',
            'Maßnahmen: Datenampel als einseitige Kurzanleitung, Vorlagen für typische Verwaltungsschreiben, 30-Minuten-Lernslots pro Woche für sechs Wochen.',
            'Bedarfsgerechte Unterstützung: Champions aus jedem Amt benennen, die Fragen vor Ort beantworten; offene Sprechstunde.',
            'Nach sechs Wochen Akzeptanzrate, Nutzungstiefe und Zufriedenheit erneut messen und Erfolge im Intranet zeigen (Reinforcement).',
          ],
          takeaway: 'Nicht das Tool war das Problem, sondern zwei konkrete ADKAR-Lücken. Eine gezielte Diagnose mit **Akzeptanzkennzahlen** spart Geld – und Frust.',
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die ADKAR-Stufen in die richtige Reihenfolge.',
          items: ['Awareness – Bewusstsein für die Notwendigkeit', 'Desire – Wunsch, mitzumachen', 'Knowledge – Wissen, wie es geht', 'Ability – Fähigkeit zur Umsetzung', 'Reinforcement – Festigung'],
          explain: 'ADKAR ist sequenziell: Ohne Bewusstsein kein Wunsch, ohne Wissen keine Fähigkeit. Die erste schwache Stufe ist der Engpass.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein KI-Modell hat 95 % Genauigkeit, wird aber in 80 % der Fälle von den Nutzenden überstimmt. Welche Kennzahl macht das Problem sichtbar – und worauf deutet sie?',
          options: ['Akzeptanzrate – auf zu wenig Lizenzen', 'Überstimmungsrate – auf Vertrauensprobleme', 'Nutzungstiefe – auf zu viele Funktionen', 'NPS – auf zu hohe Kosten'],
          answer: 1,
          explain: 'Eine hohe Überstimmungsrate deutet laut Skript auf Vertrauensprobleme hin (S. 101, Beispiel S. 105). Werte die Begründungen aus: Liegt es am Modell, an fehlender Erklärbarkeit oder an fehlender Schulung?',
        },
      ],
    },

    // ───────────────────────── Lektion 7 – 4.6 ─────────────────────────
    {
      id: 'k4-l7',
      title: '4.6 Pilotprojekte und Skalierung',
      minutes: 30,
      skript: { chapter: '4.6', page: 102 },
      blocks: [
        {
          type: 'text',
          md: `Der Pilot ist der Prüfstand: Hier zeigt sich unter realen Bedingungen, ob KI messbaren Nutzen liefert – und welche Probleme vor einer breiten Einführung gelöst werden müssen. Es geht **nicht** darum, eine perfekte Lösung zu bauen, sondern herauszufinden, was funktioniert, was nicht und was die vollständige Umsetzung kostet.`,
        },
        {
          type: 'skript',
          chapter: '4.6',
          page: 102,
          quote: 'Pilotprojekte sollten auf Lernen ausgelegt sein, nicht nur auf Erfolg.',
          md: `**Kernaussagen des Abschnitts 4.6 (S. 102–107):**

- Ein Pilot prüft vier Dinge: **technische Machbarkeit, geschäftlichen Nutzen, betriebliche Tragfähigkeit und organisatorische Bereitschaft**. Auch ein gescheiterter Pilot liefert wertvolle Erkenntnisse.
- **Optimaler Zuschnitt:** ein klar definierter Anwendungsfall, begrenzt auf Gebiet/Abteilung/Segment, **reale Umgebung mit echten Anwendern und Daten**, **3–6 Monate**, dediziertes Team.
- **Gestaltungsvorlage:** Geschäftsziel, Umfangsgrenzen, Erfolgskriterien, Rahmenbedingungen, Lernziele, Go-/No-Go-Kriterien.
- **Erfolgskriterien in drei Kategorien:** technisch, geschäftlich, Akzeptanz. Go-/No-Go-Schwellen **vor dem Start** festlegen – gegen den Sunk-Cost-Trugschluss.
- **Typische Pilotfehler:** Kluft zwischen Pilot und Produktion, zu kleine Stichprobe, ignorierte Akzeptanzsignale.
- **Skalierung braucht:** Infrastruktur, Integration, Monitoring und Betrieb, Governance und Compliance, Change Management für alle.
- **Schrittweise skalieren:** geografisch, funktional oder phasenweise nach Funktionen – statt „Big Bang“. Erkenntnisse systematisch auswerten und vor der Skalierung umsetzen.`,
        },
        {
          type: 'table',
          caption: 'Gestaltungsvorlage für Pilotprojekte (Skript S. 103–104)',
          head: ['Element', 'Leitfrage', 'Beispiel aus dem Skript'],
          rows: [
            ['Geschäftsziel', 'Welches konkrete Ergebnis soll erreicht werden?', 'Reaktionszeit im Kundenservice um 30 % senken'],
            ['Umfangsgrenzen', 'Geografie, Abteilung, Kundensegment, Zeitraum', 'Kundenservice Produktlinie A, eine Region, 4 Monate'],
            ['Erfolgskriterien', 'Welche quantitativen Kennzahlen definieren Erfolg?', '30 % kürzere Reaktionszeit, 90 % Anwenderzufriedenheit, 95 % Genauigkeit'],
            ['Rahmenbedingungen', 'Budget, Zeitrahmen, Ressourcen', '150.000 € Budget, 4 Monate, 1 Data Scientist + 2 ML Engineers'],
            ['Lernziele', 'Was müssen wir lernen?', 'Erreichen unsere Daten die Genauigkeit? Vertrauen die Mitarbeitenden? Welche Integrationsprobleme gibt es?'],
            ['Go-/No-Go-Kriterien', 'Wann skalieren, wann abbrechen?', '< 20 % Verbesserung oder < 80 % Genauigkeit: abbrechen; ≥ 30 % Verbesserung und ≥ 90 % Genauigkeit: skalieren'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Fallstrick: Pilot-Dauerschleife und Sunk Cost',
          md: `Ohne vorab festgelegte **Gate-Kriterien** (Welcher Wert muss erreicht sein? Wer entscheidet? Bis wann?) bleiben Projekte monatelang „im Pilot“ – oder es wird weiter investiert, nur weil schon so viel Geld geflossen ist (**Sunk-Cost-Trugschluss**). Lege für jedes Gate fest: Kennzahl + Schwellenwert, Entscheidungsgremium, Termin – und was bei „No-Go“ passiert. Abbruch ist ein legitimes Ergebnis.`,
        },
        {
          type: 'table',
          caption: 'Ergänzung: PoC, Pilot und Roll-out im Vergleich',
          head: ['', 'Proof of Concept (PoC)', 'Pilot', 'Roll-out'],
          rows: [
            ['**Frage**', 'Geht es technisch – mit unseren Daten?', 'Hilft es im echten Arbeitsalltag?', 'Trägt es im ganzen Unternehmen?'],
            ['**Umfang**', 'Ausschnitt, oft historische Daten', 'ein Team / Standort, Echtbetrieb', 'alle relevanten Bereiche, schrittweise'],
            ['**Nutzende**', 'Projektteam, 1–2 Fachleute', 'ausgewählte echte Anwender', 'alle Zielnutzenden'],
            ['**Erfolgskriterien**', 'technisch (z. B. Trefferquote)', 'technisch + geschäftlich + Akzeptanz', 'Business-KPI, stabiler Betrieb'],
            ['**Typische Dauer laut Skript**', '4–6 Wochen (Abschnitt 4.4)', '3–6 Monate', 'phasenweise'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Der PoC beweist, dass es geht. Der Pilot beweist, dass es hilft. Der Roll-out beweist, dass es trägt.**',
        },
        {
          type: 'table',
          caption: 'Drei typische Pilotfehler (Skript S. 105) und Gegenmittel',
          head: ['Fehler', 'Beispiel', 'Gegenmittel'],
          rows: [
            ['Kluft zwischen Pilot und Produktion', 'Chatbot glänzt mit vorbereiteten Fragen, versagt bei echten Kundenanfragen', 'Produktionsnah testen: echte Anwender, ungefilterte Daten'],
            ['Zu kleine Stichprobe', '3 Wochen, 50 Anwender – ermutigend, aber im großen Maßstab nicht bestätigt', 'Lange genug laufen lassen, um Schwankungen und Sonderfälle zu erfassen'],
            ['Akzeptanzsignale ignorieren', '95 % Genauigkeit, aber 80 % Überstimmungen', 'Akzeptanzkennzahlen gleichrangig mit technischen Kennzahlen messen'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: 'Infrastruktur', md: 'Rechenleistung, Speicher und Netzwerk für das Produktionsvolumen – was für 100 Anwender reicht, bricht bei 10.000 womöglich zusammen.' },
            { title: 'Integration', md: 'Anbindung an **alle** nötigen Systeme und Datenquellen, nicht nur an die Pilotschnittstellen.' },
            { title: 'Monitoring & Betrieb', md: 'Produktionsreifes Monitoring, Alarmierung und Support (Kapitel 6).' },
            { title: 'Governance & Compliance', md: 'Formale Freigabeprozesse, regulatorische Konformität (Kapitel 5).' },
            { title: 'Change Management', md: 'Schulung und Unterstützung für **alle** Anwender, nicht nur die Pilotteilnehmenden.' },
          ],
        },
        {
          type: 'table',
          caption: 'Drei schrittweise Skalierungsstrategien (Skript S. 106)',
          head: ['Strategie', 'Vorgehen', 'Beispiel'],
          rows: [
            ['Geografischer Rollout', 'Eine Region nach der anderen, Erkenntnisse jeder Phase nutzen', 'Erst eine Filiale, dann die Region, dann bundesweit'],
            ['Funktionaler Rollout', 'Erst eine Abteilung oder Geschäftseinheit, dann weitere', 'Nutzen im Kundenservice beweisen, dann Vertrieb und Marketing'],
            ['Phasenweiser Funktions-Rollout', 'Mit Kernfunktionen starten, erweiterte Funktionen schrittweise ergänzen', 'Erst einfacher Chatbot, dann Personalisierung, dann Transaktionen'],
          ],
        },
        {
          type: 'text',
          md: `**Skalierungskriterien laut Skript:** Pilot-Schwellenwerte bei allen Schlüsselkennzahlen erreicht; positiver ROI mit klarem Weg zu besserem ROI bei Skalierung; akzeptable Leistung auch bei **Sonderfällen und vielfältigen Daten**; positives Anwenderfeedback und nachgewiesene Akzeptanz; im Pilot aufgedeckte Probleme gelöst; Ressourcen und Rückhalt der Geschäftsleitung gesichert.

**Lernen systematisch auswerten:** Retrospektiven, Anwenderfeedback (Umfragen, Interviews, Beobachtung), Vorfallsdokumentation und Leistungsanalysen (Ist gegen Prognose). Daraus folgen vor der Skalierung: Modelle aktualisieren, Prozesse verfeinern, Schulungen verbessern, Datenqualität steigern, Infrastruktur anpassen. Das Skript berichtet von einer Bank, die KI-Kreditentscheidungen erst in einem Bundesstaat (3 Monate, 500 Anträge), dann in drei Bundesstaaten (6 Monate, 5.000 Anträge) und dann landesweit einführte – bei der Ausweitung zeigten sich **Datenqualitätsprobleme**, die bei einem sofortigen Big Bang katastrophale Folgen gehabt hätten.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Viele GenAI-Projekte enden nach dem PoC',
          md: `Wie wichtig gute Pilotgestaltung ist, zeigt eine Prognose von **Gartner** (Juli 2024): Mindestens **30 % der Projekte mit generativer KI** würden bis Ende 2025 nach dem Proof of Concept aufgegeben – wegen schlechter Datenqualität, unzureichender Risikokontrollen, steigender Kosten oder unklarem Geschäftsnutzen. Das ist eine Vorhersage, kein gemessener Wert. Die genannten Gründe decken sich aber genau mit den Pilot-Elementen des Skripts: **Geschäftsziel, Erfolgskriterien, Rahmenbedingungen und Go-/No-Go-Kriterien** vorher festlegen.

**Achtung bei Agenten und GenAI:** Weil Modelle des Anbieters sich ändern können, gehört zum Pilot ein **Eval-Set** (feste Testfälle), mit dem du vor jeder Skalierungsstufe erneut prüfst (Kapitel 6 und 8.2).`,
          sources: [
            { title: 'Gartner predicts 30 % of GenAI projects will be abandoned after proof of concept by end of 2025 (Intelligent CIO)', url: 'https://www.intelligentcio.com/eu/2024/08/05/gartner-predicts-30-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025/' },
          ],
        },
        {
          type: 'praxis',
          title: 'Sichtprüfung mit Bilderkennung – vom PoC zum Roll-out',
          company: 'Präzisionsteile Schwab GmbH (fiktiv), 210 Mitarbeitende, Pforzheim – Drehteile für die Medizintechnik',
          scenario: `Die manuelle Sichtprüfung auf Kratzer bindet Personal und ist abhängig von der Tagesform. Ein Kamerasystem mit Bilderkennung soll unterstützen. Du leitest das Projekt mit der Pilotvorlage aus dem Skript.`,
          steps: [
            'Geschäftsziel: nicht „100 % automatisch“, sondern Entlastung – die KI sortiert eindeutig gute Teile aus, unklare Fälle prüft weiterhin ein Mensch. Ziel: Prüfaufwand je Los um 30 % senken.',
            'PoC (5 Wochen): Mit einigen hundert gelabelten Bildern prüfen, ob Kratzer zuverlässig erkannt werden. Gate: Fehlerhafte Teile dürfen praktisch nie als „gut“ durchrutschen (hoher Recall für „fehlerhaft“). Rücksprung: Die Bilder einer Schicht sind unterbelichtet – Beleuchtung anpassen.',
            'Pilot (4 Monate, eine Linie, echte Prüferinnen und Prüfer): Feedback per Knopfdruck zu jeder KI-Einschätzung; gemessen werden technische Kennzahlen (Recall), geschäftliche (Prüfzeit, Fehlerschlupf gegen Baseline) und Akzeptanz (Überstimmungsrate).',
            'Go-/No-Go vorab festgelegt: Unter 15 % Zeitersparnis oder ein einziger durchgerutschter kritischer Fehler → Stopp; ab 30 % Zeitersparnis ohne Fehlerschlupf → Skalierung.',
            'Skalierung funktional und schrittweise: Linie für Linie, mit Monitoring der Erkennungsrate je Linie; das Qualitätsmanagement gibt jede Stufe frei.',
          ],
          takeaway: `Pilotieren heißt: **kurze Zyklen, klare Gates, alle drei Kennzahlenkategorien und Mut zum Rücksprung**. In regulierten Branchen gehört das Qualitätsmanagement von Anfang an ins Team.`,
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Go/No-Go', back: 'Formale Entscheidung an einem Gate: weitermachen, anpassen oder abbrechen – anhand vorab definierter Kriterien.' },
            { front: 'Sunk-Cost-Trugschluss', back: 'Weiter investieren, nur weil schon viel ausgegeben wurde. Vorab festgelegte Abbruchkriterien schützen davor.' },
            { front: 'Pilot-Produktions-Kluft', back: 'Pilot funktioniert in kontrollierter Umgebung, scheitert aber im realen Einsatz, weil die echte Komplexität fehlte.' },
            { front: 'MVP', back: 'Minimum Viable Product: kleinste Version, mit der echte Nutzende einen Nutzen erfahren und Feedback geben können.' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Merkmale hat laut Skript ein optimal zugeschnittenes Pilotprojekt? (Mehrfachauswahl)',
          options: ['Ein konkreter, klar definierter Anwendungsfall', 'Reale Umgebung mit echten Anwendern und Daten', 'Dauer von meist 3–6 Monaten', 'Gleichzeitige Lösung möglichst vieler Probleme im ganzen Unternehmen', 'Dedizierte Teammitglieder statt Teilzeitbetreuung'],
          answer: [0, 1, 2, 4],
          explain: 'Fokus, Begrenzung, reale Bedingungen, 3–6 Monate und ausreichende Ressourcen (Skript S. 103). Ein Pilot für das ganze Unternehmen wäre faktisch eine vollständige Umsetzung.',
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze den Fachbegriff.',
          text: 'Wer weiter in ein schwaches Pilotprojekt investiert, nur weil schon so viel Geld geflossen ist, unterliegt dem {{Sunk-Cost-Trugschluss|Sunk-Cost-Effekt|Sunk Cost}}. Dagegen helfen {{Go-/No-Go-Kriterien|Go/No-Go-Kriterien|Abbruchkriterien}}, die vor dem Start festgelegt werden.',
          explain: 'Das Skript empfiehlt klare Schwellenwerte für Erfolg und Misserfolg vor Pilotbeginn (S. 104).',
        },
      ],
    },
  ],

  // ───────────────────────── Quiz ─────────────────────────
  quiz: [
    {
      type: 'order',
      q: 'Bringe die Phasen des KI-Projektlebenszyklus in die richtige Reihenfolge.',
      items: ['Ideenfindung', 'Entwicklung', 'Bereitstellung', 'Betrieb'],
      explain: 'Die vier Phasen nach Skript S. 74. Erkenntnisse aus dem Betrieb fließen zurück in die Entwicklung.',
    },
    {
      type: 'single',
      q: 'Welchen methodischen Ansatz empfiehlt das Skript für die meisten KI-Projekte in Unternehmen?',
      options: ['Reines Wasserfall-Vorgehen mit vollständigem Pflichtenheft', 'Rein agiles Vorgehen ohne Gates', 'Hybrid: strukturiert in Ideenfindung und Bereitstellung, agil in der Entwicklung', 'Gar keine Methode, da KI ohnehin unvorhersehbar ist'],
      answer: 2,
      explain: 'Der hybride Ansatz bietet Flexibilität, wo gelernt wird, und Struktur, wo Vorhersehbarkeit gebraucht wird (Skript S. 76–77).',
    },
    {
      type: 'tf',
      q: 'CRISP-DM ist ein streng lineares Modell: Eine abgeschlossene Phase wird nie wieder aufgenommen.',
      answer: false,
      explain: 'CRISP-DM ist ausdrücklich iterativ. Rücksprünge – etwa von der Datenanalyse zurück zum Business Understanding – sind typisch und gewollt, genau wie im hybriden Lebenszyklus des Skripts.',
    },
    {
      type: 'multi',
      q: 'Welche Rollen gehören laut Skript zu einem minimalen KI-Projektteam (5–7 Personen)? (Mehrfachauswahl)',
      options: ['Product Owner', 'Data Scientists', 'ML Engineer', 'Data Engineer', 'Fachexperte', 'Influencer für Social Media'],
      answer: [0, 1, 2, 3, 4],
      explain: 'Dazu kommt ein KI-Governance-Spezialist in Teilzeit (Skript S. 80).',
    },
    {
      type: 'match',
      q: 'Ordne das Teamstrukturmodell seinem Kennzeichen zu.',
      pairs: [
        ['Zentral', 'Ein KI-Team bedient die ganze Organisation – Gefahr von Engpässen'],
        ['Dezentral', 'KI-Fachleute sitzen in den Fachabteilungen – Gefahr von Doppelarbeit'],
        ['Hub-and-Spoke', 'Kompetenzzentrum plus verteilte Teams – vereint beide Vorteile'],
      ],
      explain: 'Das Skript empfiehlt, zentral zu beginnen und mit steigender Reife zu verteilen (S. 83–84).',
    },
    {
      type: 'single',
      q: 'Für welchen Fall sieht die Entscheidungsmatrix des Skripts eine Eigenentwicklung vor?',
      options: ['Kundenservice-Chatbot', 'Dokumentenklassifizierung', 'Betrugserkennung im Bankwesen', 'Absatzprognose'],
      answer: 2,
      explain: 'Hoher strategischer Wert, hohe Differenzierung, starke interne Kompetenz und 12 Monate Zeit sprechen für Eigenentwicklung (Skript S. 85).',
    },
    {
      type: 'multi',
      q: 'Welche Vertragsthemen sind bei der KI-Beschaffung laut Skript besonders wichtig? (Mehrfachauswahl)',
      options: ['Datenrechte und Eigentum', 'Kündigungs- und Ausstiegsklauseln', 'Haftung und Schadloshaltung', 'Leistungsgarantien als SLAs für Verfügbarkeit und Antwortzeit', 'Farbe des Firmenlogos des Anbieters'],
      answer: [0, 1, 2, 3],
      explain: 'Dazu kommen geistiges Eigentum, Anpassung/Integration sowie Support und Wartung (Skript S. 87–88).',
    },
    {
      type: 'match',
      q: 'Ordne das Projektrisiko der passenden Gegenmaßnahme zu.',
      pairs: [
        ['Modellleistungsrisiko', '4–6-wöchiger PoC mit vorab definierten Schwellenwerten'],
        ['Datendrift', 'Monitoring mit Alarm und automatisiertem Nachtraining'],
        ['Anbieterabhängigkeit', 'Diversifizierung, Exit-Klauseln, interne Expertise'],
        ['Change-Management-Risiko', '20–30 % des Budgets für Change Management einplanen'],
      ],
      explain: 'Alle vier Gegenmaßnahmen stammen aus Abschnitt 4.4 (S. 90–96).',
    },
    {
      type: 'single',
      q: 'Welche OWASP-Kategorie beschreibt einen KI-Agenten, der mehr Rechte und Werkzeuge hat, als er für seine Aufgabe braucht?',
      options: ['LLM06 Excessive Agency', 'LLM02 Sensitive Information Disclosure', 'LLM07 System Prompt Leakage', 'LLM09 Misinformation'],
      answer: 0,
      explain: 'Excessive Agency: zu viel Funktionalität, Berechtigung oder Autonomie. Gegenmaßnahme ist das Prinzip der minimalen Rechte plus menschliche Freigabe für kritische Aktionen.',
    },
    {
      type: 'order',
      q: 'Bringe die Stufen von Kotters Modell (die ersten fünf) in die richtige Reihenfolge.',
      items: ['Dringlichkeit schaffen', 'Führungskoalition aufbauen', 'Vision entwickeln', 'Freiwillige gewinnen', 'Hindernisse beseitigen'],
      explain: 'Danach folgen kurzfristige Erfolge, Dynamik halten und Wandel verankern (Skript S. 100).',
    },
    {
      type: 'single',
      q: 'Ein Team kennt den Nutzen eines neuen KI-Tools und möchte es nutzen, weiß aber nicht, welche Daten erlaubt sind. Welche ADKAR-Stufe ist der Engpass?',
      options: ['Awareness', 'Desire', 'Knowledge', 'Reinforcement'],
      answer: 2,
      explain: 'Bewusstsein und Wunsch sind vorhanden, es fehlt Wissen. Gezielte Schulung und eine Datenampel helfen hier mehr als weitere Überzeugungsarbeit.',
    },
    {
      type: 'cloze',
      q: 'Ergänze die Akzeptanzkennzahl.',
      text: 'Wie oft Anwender KI-Empfehlungen übergehen, misst die {{Überstimmungsrate|Override-Rate|Überstimmungsquote}}. Hohe Werte deuten auf {{Vertrauensprobleme|Vertrauensprobleme hin|mangelndes Vertrauen}}.',
      explain: 'Neben Akzeptanzrate, Nutzungstiefe, Zufriedenheit/NPS und geschäftlicher Wirkung eine der fünf Kennzahlen aus Skript S. 101.',
    },
    {
      type: 'tf',
      q: 'Ein Pilotprojekt sollte laut Skript möglichst unter Laborbedingungen mit vorbereiteten Daten laufen, damit die Ergebnisse sauber sind.',
      answer: false,
      explain: 'Falsch. Gerade dadurch entsteht die Kluft zwischen Pilot und Produktion. Das Skript fordert eine reale Umgebung mit echten Anwendern und ungefilterten Daten (S. 103 und 105).',
    },
    {
      type: 'multi',
      q: 'Welche schrittweisen Skalierungsstrategien nennt das Skript? (Mehrfachauswahl)',
      options: ['Geografischer Rollout', 'Funktionaler Rollout', 'Phasenweiser Funktions-Rollout', '„Big Bang“ an einem Stichtag für alle'],
      answer: [0, 1, 2],
      explain: 'Schrittweise Strategien verringern das Risiko im Vergleich zu Big-Bang-Bereitstellungen (Skript S. 106).',
    },
  ],

  // ───────────────────────── Übungen ─────────────────────────
  exercises: [
    {
      id: 'k4-e1',
      title: 'Hybrider Projektplan mit Pilotdesign für einen KI-Angebotsassistenten',
      scenario: `Die **Schreinerei Lindner GmbH (fiktiv)**, 35 Mitarbeitende, Rosenheim, möchte Angebote für Einbaumöbel schneller erstellen. Idee: Ein KI-Assistent erzeugt aus Aufmaß-Notizen, Fotos und der Materialpreisliste einen Angebotsentwurf, den die Meisterin prüft. Die IT macht ein externes Systemhaus; es gibt eine externe Datenschutzbeauftragte. Ein Software-Anbieter bietet eine fertige Lösung an. Die Geschäftsführung will „in zwei Monaten live“ sein.`,
      task: `1. Ordne das Vorhaben den **vier Lebenszyklusphasen** zu und beschreibe für jede Phase den Steuerungsstil (hybrider Ansatz).
2. Fülle die **Pilot-Gestaltungsvorlage** aus Abschnitt 4.6 aus (Geschäftsziel, Umfangsgrenzen, Erfolgskriterien in allen drei Kategorien, Rahmenbedingungen, Lernziele, Go-/No-Go-Kriterien).
3. Besetze die **Rollen** realistisch für einen 35-Personen-Betrieb.
4. Triff eine begründete **Make-or-Buy-Entscheidung** anhand der vier Dimensionen und
5. nimm Stellung zum Wunsch „in zwei Monaten live“.`,
      deliverable: 'Tabelle(n) + kurze Begründung, ca. 300–450 Wörter',
      template: `1. Lebenszyklus:
- Ideenfindung (Stil): …
- Entwicklung: …
- Bereitstellung: …
- Betrieb: …

2. Pilotvorlage:
| Element | Festlegung |
|---|---|
| Geschäftsziel | |
| Umfangsgrenzen | |
| Erfolgskriterien (technisch/geschäftlich/Akzeptanz) | |
| Rahmenbedingungen | |
| Lernziele | |
| Go-/No-Go | |

3. Rollen:
4. Make or Buy:
5. Zwei Monate?`,
      rubric: [
        { criterion: 'Nutzt die vier Lebenszyklusphasen mit passendem Steuerungsstil', keywords: ['ideenfindung', 'entwicklung', 'bereitstellung', 'betrieb', 'agil', 'hybrid', 'gate'], min: 4, hint: 'Wo brauchst du Struktur, wo Sprints, wo formale Gates?' },
        { criterion: 'Füllt die Pilotvorlage mit messbaren Kriterien in drei Kategorien', keywords: ['baseline', 'minuten', 'genauigkeit', 'akzeptanz', 'überstimm', 'zufriedenheit', 'geschäft'], min: 3, hint: 'Hast du technische, geschäftliche UND Akzeptanzkennzahlen?' },
        { criterion: 'Formuliert eindeutige Go-/No-Go-Schwellen', keywords: ['go', 'no-go', 'abbruch', 'abbrechen', 'skalier', 'schwell'], min: 2, hint: 'Ab welchem Wert wird skaliert, unter welchem abgebrochen?' },
        { criterion: 'Realistische Rollenbesetzung', keywords: ['meister', 'product owner', 'systemhaus', 'datenschutz', 'fachexpert', 'geschäftsführ'], min: 3, hint: 'Wer im Betrieb kennt die Angebote am besten? Wer betreibt die IT?' },
        { criterion: 'Begründet Make-or-Buy und den Zeitplan', keywords: ['zukauf', 'buy', 'kauf', 'strategisch', 'differenz', 'kompetenz', 'zeitdruck', 'realistisch'], min: 3, hint: 'Wie fallen die vier Dimensionen aus – und was ist in acht Wochen wirklich erreichbar?' },
      ],
      hints: [
        'Starte mit Make-or-Buy: Angebotserstellung ist wichtig, aber kaum differenzierend; Kompetenz ist begrenzt; Zeitdruck hoch. Was folgt daraus?',
        'Ein gutes Erfolgskriterium ist z. B. „Erstellungszeit pro Angebot sinkt von X auf Y Minuten“ (geschäftlich), „16 von 20 Entwürfen ohne Preisfehler“ (technisch), „Meisterin übernimmt ≥ 70 % der Entwürfe ohne grundlegende Überarbeitung“ (Akzeptanz). X kommt aus der Baseline-Messung.',
        'Zwei Monate reichen für Ideenfindung und einen laufenden Pilot mit Zwischenergebnis, aber nicht für einen gesicherten Regelbetrieb. Das Skript nennt 3–6 Monate für Pilotprojekte; schlage einen 2–3-monatigen Pilot mit Ausstiegsklausel vor.',
      ],
      sample: `**1. Lebenszyklus (hybrid)**
- *Ideenfindung (strukturiert, 2 Wochen):* Baseline messen (Ø 90 Minuten pro Angebot, 40 Angebote/Monat), Ziel und Kriterien festlegen, Datenschutzcheck (Kundendaten, Fotos), Make-or-Buy.
- *Entwicklung (agil, 2-Wochen-Sprints):* Konfiguration der eingekauften Lösung, Prompt-Vorlagen und Preisliste anbinden, Demo bei der Meisterin am Ende jedes Sprints.
- *Bereitstellung (Gates):* Test mit 20 alten Angeboten, Sicherheits- und Datenschutzfreigabe, Schulung.
- *Betrieb (MLOps-Denken):* monatlicher Review, Preisliste aktuell halten, Eval-Set aus 20 Angeboten bei jedem Modell-Update erneut prüfen.

**2. Pilotvorlage**
| Element | Festlegung |
|---|---|
| Geschäftsziel | Erstellungszeit pro Angebot um 30 % senken |
| Umfangsgrenzen | nur Einbauschränke, Meisterin + 1 Mitarbeiter, 3 Monate |
| Erfolgskriterien | technisch: ≥ 16 von 20 Testentwürfen ohne Preis- oder Maßfehler; geschäftlich: Ø ≤ 63 Minuten; Akzeptanz: Meisterin übernimmt ≥ 70 % der Entwürfe, Zufriedenheit ≥ 4 von 5 |
| Rahmenbedingungen | Lizenz Pilot ca. 3 Monate, 4 h/Woche Meisterin, Systemhaus 5 Tage |
| Lernziele | Reichen unsere Aufmaß-Notizen? Vertraut die Meisterin den Preisen? Wie aufwendig ist die Anbindung der Preisliste? |
| Go-/No-Go | < 15 % Zeitersparnis oder Preisfehler im Versand → abbrechen; ≥ 30 % und Akzeptanzziel erreicht → auf alle Angebotsarten ausweiten |

**3. Rollen:** Product Owner: Büroleitung als KI-Verantwortliche; Fachexpertin: Meisterin; Integration/Betrieb: Systemhaus; Governance: externe Datenschutzbeauftragte; Entscheidung: Geschäftsführung. Data Science liefert der Anbieter.

**4. Make or Buy:** Mittlere strategische Bedeutung, geringe Differenzierung (die Differenzierung liegt in Handwerk und Preisen, nicht im Assistenten), begrenzte Kompetenz, hoher Zeitdruck → **Zukauf** mit eigener Konfiguration. Vertrag: Daten in der EU, keine Nutzung fürs Training, straffreier Ausstieg nach dem Pilot.

**5. Zwei Monate:** Realistisch ist nach acht Wochen ein **laufender Pilot mit erstem Zwischenergebnis**, nicht der Regelbetrieb. Wer die Gates überspringt, riskiert falsche Preise, fehlende Akzeptanz und keinen Nachweis des Nutzens.`,
    },
    {
      id: 'k4-e2',
      title: 'Change-Plan nach ADKAR mit Akzeptanzkennzahlen',
      scenario: `Das **Ingenieurbüro Seidel & Kraus (fiktiv)**, 45 Mitarbeitende, Dresden, will einen KI-Assistenten für Berichte, Protokolle und Ausschreibungstexte einführen. Die jüngeren Kolleginnen und Kollegen nutzen schon privat ChatGPT, mehrere erfahrene Ingenieure sind skeptisch („Die KI erfindet Normen“). Einen Betriebsrat gibt es nicht. Die Geschäftsführung möchte in drei Monaten „durch“ sein.`,
      task: `1. Ordne die Skepsis einer oder mehreren der **vier Widerstandsquellen** aus Abschnitt 4.5 zu.
2. Entwickle einen Change-Plan entlang der **fünf ADKAR-Stufen**: je Stufe mindestens eine konkrete Maßnahme, wer sie verantwortet und ein Indikator.
3. Lege **drei Akzeptanzkennzahlen** aus dem Skript mit Zielwert fest.
4. Berücksichtige die Pflicht zur **KI-Kompetenz nach Art. 4 AI Act** und eine **schrittweise Einführung** (kein Big Bang).`,
      deliverable: 'Gliederung oder Tabelle (ADKAR-Stufen, Maßnahme, Verantwortung, Indikator) plus Kennzahlen und 3–5 Sätze zum Umgang mit Skepsis',
      template: `Widerstandsquelle(n):

Awareness:
Desire:
Knowledge:
Ability:
Reinforcement:

Akzeptanzkennzahlen (mit Zielwert):
1.
2.
3.

Umgang mit den Skeptikern / schrittweise Einführung:`,
      rubric: [
        { criterion: 'Deckt alle fünf ADKAR-Stufen mit Maßnahmen ab', keywords: ['awareness', 'desire', 'knowledge', 'ability', 'reinforcement'], min: 5, hint: 'Hast du für jede Stufe von A bis R eine Maßnahme?' },
        { criterion: 'Ordnet die Skepsis einer Widerstandsquelle zu', keywords: ['vertrauen', 'transparenz', 'kontroll', 'autonomie', 'kompetenz', 'verständnis'], min: 1, hint: 'Geht es bei „Die KI erfindet Normen“ um Jobangst – oder um etwas anderes?' },
        { criterion: 'Legt Akzeptanzkennzahlen mit Zielwerten fest', keywords: ['akzeptanzrate', 'nutzungstiefe', 'überstimm', 'zufriedenheit', 'nps', 'wirkung'], min: 2, hint: 'Welche der fünf Kennzahlen aus dem Skript passen hier?' },
        { criterion: 'Nimmt die Skepsis ernst und nutzt sie konstruktiv', keywords: ['skep', 'halluzin', 'prüf', 'einbind', 'ernst', 'qualität'], min: 2, hint: 'Die Sorge ist berechtigt – wie machst du daraus eine Stärke?' },
        { criterion: 'Berücksichtigt Art. 4 AI Act und schrittweise Einführung', keywords: ['art. 4', 'schulung', 'kompetenz', 'schrittweise', 'pilot', 'beratend', 'big bang'], min: 2, hint: 'Welche Pflicht gilt seit Februar 2025 – und wie vermeidest du den Big Bang?' },
      ],
      hints: [
        'Die Skeptiker sorgen sich um Qualität und Kontrolle, nicht um ihren Job. Das sind die Quellen „Vertrauen & Transparenz“ und „Kontroll- und Autonomieverlust“.',
        'Mache die Skeptiker zu „Qualitätspaten“, die Prüfregeln mitgestalten (Desire durch Beteiligung). Für die Kennzahlen bieten sich Akzeptanzrate, Überstimmungsrate (hier: Anteil verworfener Entwürfe) und Zufriedenheit an.',
        'Schrittweise: erst Protokolle (geringes Risiko), dann Berichte, zuletzt Ausschreibungstexte mit Normbezug – jeweils mit Prüfregel. Basisschulung für alle dokumentieren (Art. 4).',
      ],
      sample: `**Widerstandsquellen:** Die Sorge „Die KI erfindet Normen“ betrifft **Vertrauen & Transparenz** (Halluzinationen) und **Kontrollverlust** (Wer verantwortet den Bericht?). Sie ist fachlich berechtigt.

**Awareness:** Kick-off der Geschäftsführung mit Zahlen (Zeitaufwand für Protokolle pro Woche) und klarer Botschaft: Ziel ist Entlastung, nicht Personalabbau. *Verantwortlich:* GF. *Indikator:* ≥ 80 % können den Zweck in einer Kurzumfrage nennen.

**Desire:** Tandems aus KI-Erfahrenen und erfahrenen Ingenieuren; Skeptiker als **Qualitätspaten**, die Prüfregeln mitgestalten. *Verantwortlich:* KI-Managerin. *Indikator:* Anmeldungen zum Pilot.

**Knowledge:** 2-stündige Basisschulung für alle (Funktionsweise, Halluzinationen, Datenregeln) – dokumentiert als Nachweis nach **Art. 4 AI Act**; Prompt-Vorlagen. *Indikator:* 100 % Teilnahme, Wissenscheck.

**Ability:** Pilot in Stufen: **erst Protokolle, dann Berichte, zuletzt Ausschreibungstexte** (kein Big Bang); wöchentliche Sprechstunde; Regel: Normzitate und Zahlen immer an der Originalquelle prüfen. *Indikator:* Anteil Protokolle mit KI-Unterstützung.

**Reinforcement:** Erfolge **und** gefundene Fehler im Teammeeting teilen, Prompt-Bibliothek pflegen, Prüfregel ins QM-Handbuch, Auffrischung nach sechs Monaten.

**Akzeptanzkennzahlen:**
1. Akzeptanzrate: ≥ 60 % der Zielgruppe nutzen den Assistenten wöchentlich nach 3 Monaten.
2. Überstimmungsrate: Anteil komplett verworfener Entwürfe < 25 %; Begründungen werden ausgewertet.
3. Zufriedenheit: ≥ 4 von 5 in der Umfrage nach 12 Wochen.

**Umgang mit Skepsis:** Die Sorge wird nicht weggeredet, sondern zum Qualitätsprozess gemacht. Die Skeptiker prüfen das Tool kritisch und definieren die Prüfregeln – so wird ihr Fachwissen sichtbar wertgeschätzt. Die Drei-Monats-Frist bleibt, aber Nutzung wird nicht erzwungen, sondern durch Nutzen gewonnen.`,
    },
  ],

  glossary: [
    { term: 'KI-Projektlebenszyklus', def: 'Vier Phasen nach Skript: Ideenfindung, Entwicklung, Bereitstellung, Betrieb – mit Rückkopplung vom Betrieb in die Entwicklung.' },
    { term: 'Hybrider Ansatz', def: 'Kombination aus strukturierter Planung (Ideenfindung), agilen Sprints (Entwicklung), formalen Gates (Bereitstellung) und DevOps/MLOps (Betrieb).' },
    { term: 'CRISP-DM', def: 'Cross-Industry Standard Process for Data Mining: iteratives Prozessmodell mit sechs Phasen von Business Understanding bis Deployment.' },
    { term: 'Product Owner', def: 'Vertritt im KI-Team die fachlichen Stakeholder, definiert Erfolgskriterien und priorisiert.' },
    { term: 'ML Engineer', def: 'Rolle, die experimentelle Modelle in zuverlässige, skalierbare Produktivsysteme überführt.' },
    { term: 'Hub-and-Spoke', def: 'Teammodell mit zentralem KI-Kompetenzzentrum (Standards, Werkzeuge, Spezialwissen) und verteilten Teams in den Fachbereichen.' },
    { term: 'Make or Buy', def: 'Entscheidung zwischen Eigenentwicklung und Zukauf; laut Skript gesteuert durch strategische Bedeutung, Differenzierung, Kompetenz und Zeitdruck.' },
    { term: 'Gesamtbetriebskosten (TCO)', def: 'Alle Kosten über die Nutzungsdauer: Lizenz, Einführung, Integration, Schulung, Support und laufende Nutzungskosten.' },
    { term: 'SLA', def: 'Service Level Agreement: vertraglich zugesicherte Werte, z. B. Verfügbarkeit und Antwortzeit eines KI-Dienstes.' },
    { term: 'Proof of Concept (PoC)', def: 'Kurzer Test (laut Skript 4–6 Wochen), ob ein Ansatz technisch mit den vorhandenen Daten die geforderte Leistung erreicht.' },
    { term: 'Datendrift', def: 'Veränderung der Muster in den Daten im Zeitverlauf, durch die ein Modell schleichend an Leistung verliert.' },
    { term: 'ADKAR', def: 'Change-Modell von Prosci für individuelle Veränderung: Awareness, Desire, Knowledge, Ability, Reinforcement.' },
    { term: 'Kotters 8 Stufen', def: 'Organisationales Change-Modell: Dringlichkeit, Führungskoalition, Vision, Freiwillige, Hindernisse beseitigen, kurzfristige Erfolge, Dynamik halten, Wandel verankern.' },
    { term: 'Überstimmungsrate', def: 'Anteil der KI-Empfehlungen, die Anwender übergehen; hohe Werte deuten auf Vertrauensprobleme hin.' },
    { term: 'Go-/No-Go-Kriterien', def: 'Vor Pilotstart festgelegte Schwellenwerte, ab denen skaliert bzw. abgebrochen wird; schützen vor dem Sunk-Cost-Trugschluss.' },
  ],

  sources: [
    { title: 'The state of AI in 2025: Agents, innovation, and transformation', publisher: 'McKinsey & Company', year: 2025, type: 'Studie', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
    { title: 'What is CRISP-DM?', publisher: 'Data Science Process Alliance', year: 2024, type: 'Artikel', url: 'https://www.datascience-pm.com/crisp-dm-2/' },
    { title: 'AI Adoption in 2024: 74% of Companies Struggle to Achieve and Scale Value', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value' },
    { title: 'Art. 4 KI-Verordnung – KI-Kompetenz', publisher: 'artificialintelligenceact.eu', year: 2024, type: 'Gesetz', url: 'https://artificialintelligenceact.eu/article/4/' },
    { title: 'Art. 26 KI-Verordnung – Pflichten der Betreiber', publisher: 'artificialintelligenceact.eu', year: 2024, type: 'Gesetz', url: 'https://artificialintelligenceact.eu/article/26/' },
    { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', publisher: 'EUR-Lex', year: 2026, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    { title: 'EU Model Contractual AI Clauses to pilot in procurements of AI', publisher: 'Europäische Kommission – Public Buyers Community', year: 2023, type: 'Leitfaden', url: 'https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources/eu-model-contractual-ai-clauses-pilot-procurements-ai' },
    { title: 'Glossar Data Act: Switching charge', publisher: 'Bundesnetzagentur', year: 2025, type: 'Leitfaden', url: 'https://www.bundesnetzagentur.de/SharedDocs/A_Z_Glossar_DataAct_ENG/S/switching-charge.html' },
    { title: 'Kriterienkatalog C5 (Cloud Computing Compliance Criteria Catalogue)', publisher: 'BSI', year: 2025, type: 'Norm', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/kriterienkatalog-c5_node.html' },
    { title: 'OWASP Top 10 for LLM Applications 2025', publisher: 'OWASP GenAI Security Project', year: 2025, type: 'Leitfaden', url: 'https://genai.owasp.org/llm-top-10/' },
    { title: 'AI Risk Management Framework (AI RMF 1.0) und Generative AI Profile (NIST AI 600-1)', publisher: 'NIST', year: 2024, type: 'Norm', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Generative KI-Modelle – Chancen und Risiken für Industrie und Behörden (Version 2.0)', publisher: 'BSI', year: 2025, type: 'Leitfaden', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KI/Generative_KI-Modelle.pdf' },
    { title: 'The Prosci ADKAR Model', publisher: 'Prosci', year: 2025, type: 'Doku', url: 'https://www.prosci.com/methodology/adkar' },
    { title: 'The 8-Step Process for Leading Change', publisher: 'Kotter Inc.', year: 2025, type: 'Doku', url: 'https://www.kotterinc.com/methodology/8-steps/' },
    { title: 'Gartner predicts 30% of generative AI projects will be abandoned after proof of concept by end of 2025', publisher: 'Intelligent CIO Europe (Gartner-Pressemitteilung)', year: 2024, type: 'Artikel', url: 'https://www.intelligentcio.com/eu/2024/08/05/gartner-predicts-30-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025/' },
  ],
};
