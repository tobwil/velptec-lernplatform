export default {
  id: 'm07',
  order: 7,
  title: 'Erfolgsmessung & Optimierung',
  subtitle: 'KPIs, Baseline, Evals und Monitoring – die Wirkung von KI belegen und laufend verbessern',
  icon: 'gauge',
  isNew: false,
  minutes: 95,
  handout: [
    { section: '9', title: 'Erfolgsmessung und Optimierung', page: 5 }
  ],
  objectives: [
    'Du baust ein KPI-Set über technische, Prozess-, Business-, Nutzungs- und Kosten-Kennzahlen auf und misst eine Baseline vor der Einführung.',
    'Du berechnest und interpretierst Accuracy, Precision, Recall und F1 und erkennst, welche Metrik für welchen Geschäftsfall zählt.',
    'Du planst die Evaluation von LLM-Anwendungen mit Eval-Sets, menschlicher Bewertung und LLM-as-a-Judge – und kennst dessen Grenzen.',
    'Du richtest Monitoring, A/B-Tests und Feedback-Loops ein und berechnest Kosten pro Vorgang.'
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      id: 'm07-l1',
      title: 'Das KPI-Set: von der Technik bis zum Business – und die Baseline',
      minutes: 22,
      blocks: [
        { type: 'video', scene: 'kpi' },
        {
          type: 'text',
          md: `„Das Tool kommt gut an" reicht nicht, wenn die Geschäftsführung über Budget fürs nächste Jahr entscheidet. Als KI-Managerin oder KI-Manager musst du **Wirkung belegen** – und erkennen, wenn eine Lösung nachlässt. Dafür brauchst du ein KPI-Set, das mehrere Ebenen verbindet: Funktioniert das Modell? Wird der Prozess besser? Lohnt es sich? Wird die Lösung überhaupt genutzt?`
        },
        {
          type: 'handout',
          section: '9',
          page: 5,
          quote: 'Technische KPIs: Accuracy, Precision, Recall, Latenz, Uptime • Prozess-KPIs: Durchlaufzeit, Automatisierungsgrad, Fehlerquote • Business-KPIs: ROI, Umsatzsteigerung, Kundenzufriedenheit • Kontinuierliches Monitoring, A/B-Tests, Feedback-Loops'
        },
        {
          type: 'table',
          caption: 'KPI-Ebenen – Handout plus zwei ergänzende Ebenen',
          head: ['Ebene', 'Beispiele', 'Wen interessiert es?', 'Wie oft?'],
          rows: [
            ['**Technisch** (Handout)', 'Accuracy, Precision, Recall, F1, Latenz, Uptime', 'Projektteam, IT', 'laufend / täglich'],
            ['**Prozess** (Handout)', 'Durchlaufzeit, Automatisierungsgrad, Fehlerquote', 'Fachbereichsleitung', 'wöchentlich / monatlich'],
            ['**Business** (Handout)', 'ROI, Umsatzsteigerung, Kundenzufriedenheit', 'Geschäftsführung', 'quartalsweise'],
            ['**Nutzung & Adoption** (Ergänzung)', 'aktive Nutzende / Berechtigte, Übernahmequote von KI-Vorschlägen, Wiederkehr', 'Projektteam, Change-Management', 'wöchentlich'],
            ['**Kosten** (Ergänzung)', 'Kosten pro Vorgang, Token-/API-Kosten, Prüfaufwand', 'Controlling, Projektteam', 'monatlich']
          ]
        },
        {
          type: 'text',
          md: `Die Ebenen hängen zusammen wie ein **KPI-Baum**: Eine hohe technische Qualität (z. B. Recall) ist nur ein Mittel, damit die Prozess-KPI (z. B. Bearbeitungszeit) sinkt – und diese wiederum zahlt auf die Business-KPI (z. B. Kosten, Kundenzufriedenheit) ein. Und keine der Ebenen bewegt sich, wenn die Lösung **nicht genutzt** wird. Deshalb gehören Adoptions-KPIs immer dazu.`
        },
        {
          type: 'update',
          title: 'Ergänzung zum Handout: Nutzung, Kosten und Wirkungsnachweise',
          md: `Das Handout listet technische, Prozess- und Business-KPIs. Bei generativer KI sind zwei weitere Ebenen entscheidend geworden:
- **Nutzung/Adoption:** Viele GenAI-Werkzeuge werden lizenziert, aber kaum genutzt. Ohne Adoptions-KPIs bleibt das unsichtbar.
- **Kosten pro Vorgang:** Bei nutzungsabhängiger Abrechnung (Token, API-Aufrufe) steigen die Kosten mit der Nutzung – sie gehören in jedes Dashboard.

Wie aussagekräftig gute Messung ist, zeigt eine viel zitierte Feldstudie: Brynjolfsson, Li und Raymond untersuchten 5.179 Kundenservice-Mitarbeitende. Der Zugang zu einem KI-Assistenten erhöhte die Produktivität – gemessen als **gelöste Anfragen pro Stunde** – im Schnitt um **14 %**, bei unerfahrenen und gering qualifizierten Beschäftigten um **34 %**. Die Lehre: Eine klar definierte Prozess-KPI und eine **Aufschlüsselung nach Gruppen** zeigen, wo KI wirklich wirkt.`,
          sources: [
            { title: 'Brynjolfsson, Li, Raymond: Generative AI at Work (NBER Working Paper 31161)', url: 'https://www.nber.org/papers/w31161' }
          ]
        },
        {
          type: 'steps',
          items: [
            { title: '1 · KPI festlegen', md: 'Welche Kennzahl soll sich verbessern? Eindeutige Definition (z. B. „Zeit von Eingang bis Erstantwort in Arbeitsstunden").' },
            { title: '2 · Messmethode wählen', md: 'Systemdaten (Zeitstempel, Ticket- oder ERP-Logs), Stichproben mit Zeitmessung oder Befragung – so objektiv wie möglich.' },
            { title: '3 · Messzeitraum bestimmen', md: 'Lang genug für normale Schwankungen (oft 4–8 Wochen), Sondereffekte wie Urlaubszeit oder Saisonspitzen beachten.' },
            { title: '4 · Messen und dokumentieren', md: 'Werte erfassen, Rahmenbedingungen notieren (Personalstand, Volumen), Baseline „einfrieren".' },
            { title: '5 · Zielwert ableiten', md: 'Erst mit der Baseline lässt sich ein realistisches SMART-Ziel formulieren (siehe Modul 3).' }
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Miss vor der Einführung – sonst misst du hinterher nur Meinungen.** Ohne Baseline gibt es keinen Wirkungsnachweis.'
        },
        {
          type: 'praxis',
          title: 'KPI-Baum für einen KI-E-Mail-Assistenten',
          company: 'Stadtwerke Lindenau GmbH (fiktiv), 300 Mitarbeitende – Strom, Gas, Wasser',
          scenario: `Im Kundenservice gehen täglich viele E-Mails zu Abschlägen, Zählerständen und Umzügen ein. Ein KI-Assistent soll Anliegen erkennen und Antwortentwürfe vorschlagen; Mitarbeitende prüfen und versenden. Du sollst das Messkonzept aufsetzen.`,
          steps: [
            'Business-Ziel: Kundenzufriedenheit im Service steigern, ohne zusätzliches Personal trotz wachsenden Volumens.',
            'Prozess-KPIs: mittlere Zeit bis zur Erstantwort, Bearbeitungszeit pro E-Mail, Anteil Rückfragen von Kundinnen und Kunden.',
            'Technische KPIs: Precision und Recall der Anliegenerkennung je Kategorie, Anteil der Entwürfe, die ohne Änderung versendet werden, Latenz.',
            'Adoption & Kosten: Anteil der Mitarbeitenden, die den Assistenten täglich nutzen; Kosten pro bearbeiteter E-Mail (Lizenz, API, Prüfzeit).',
            'Baseline: Sechs Wochen vor dem Start werden Zeitstempel aus dem Ticketsystem ausgewertet und eine Stichprobe von 200 E-Mails mit Zeitmessung bearbeitet.',
            'Du legst fest, wer welche Kennzahl wann berichtet – und welche Schwelle eine Überprüfung auslöst.'
          ],
          takeaway: `Ein gutes Messkonzept verbindet **Technik, Prozess, Business, Nutzung und Kosten** – und hat für jede Kennzahl eine Baseline, eine Quelle und eine verantwortliche Person.`
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Durchlaufzeit', back: 'Zeit vom Start bis zum Abschluss eines Vorgangs – inklusive Wartezeiten. Nicht verwechseln mit der reinen Bearbeitungszeit.' },
            { front: 'Automatisierungsgrad', back: 'Anteil der Vorgänge (oder Arbeitsschritte), die ohne manuelles Eingreifen erledigt werden.' },
            { front: 'Übernahmequote', back: 'Anteil der KI-Vorschläge, die unverändert oder mit kleinen Änderungen übernommen werden – ein guter Qualitäts- und Akzeptanzindikator.' },
            { front: 'Adoptionsrate', back: 'Aktive Nutzende im Verhältnis zu allen Berechtigten in einem Zeitraum (z. B. wöchentlich).' },
            { front: 'Kosten pro Vorgang', back: 'Alle laufenden Kosten (Lizenzen, Nutzungsgebühren, Betrieb, menschliche Prüfzeit) geteilt durch die Anzahl bearbeiteter Vorgänge.' }
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Kennzahl ihrer KPI-Ebene zu.',
          pairs: [
            ['Recall', 'Technische KPI'],
            ['Durchlaufzeit', 'Prozess-KPI'],
            ['Kundenzufriedenheit', 'Business-KPI'],
            ['Aktive Nutzende pro Woche', 'Nutzungs-/Adoptions-KPI']
          ],
          explain: 'Die ersten drei Ebenen nennt das Handout (§9). Adoptions-KPIs ergänzen das Bild: Ohne Nutzung keine Wirkung.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Die Baseline kann man problemlos auch nach der Einführung schätzen – Hauptsache, man hat aktuelle Zahlen.',
          answer: false,
          explain: 'Nachträgliche Schätzungen sind verzerrt (Erinnerung, Wunschdenken). Die Baseline muss vor der Einführung mit derselben Methode gemessen werden wie später die Wirkung.'
        }
      ]
    },
    // ------------------------------------------------------------------ L2
    {
      id: 'm07-l2',
      title: 'Technische Metriken verstehen: Confusion Matrix, Precision, Recall, F1',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Viele KI-Anwendungen sind **Klassifikationen**: Ist diese E-Mail eine Beschwerde? Ist das Bauteil fehlerhaft? Ist die Transaktion Betrug? Für die Bewertung vergleicht man Vorhersagen mit der Wahrheit und sortiert sie in die **Confusion Matrix** (Wahrheitsmatrix):

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
            ['**Accuracy**', '(TP + TN) / alle', 'Wie viele Vorhersagen sind insgesamt richtig?'],
            ['**Precision**', 'TP / (TP + FP)', 'Wenn das Modell „ja" sagt – wie oft zu Recht?'],
            ['**Recall**', 'TP / (TP + FN)', 'Von allen echten „Ja"-Fällen – wie viele findet das Modell?'],
            ['**F1-Score**', '2 · Precision · Recall / (Precision + Recall)', 'Wie gut ist die Balance aus Precision und Recall?']
          ]
        },
        {
          type: 'interactive',
          widget: 'confusion-matrix'
        },
        {
          type: 'text',
          md: `Beobachte im Widget: Senkst du den **Schwellenwert**, meldet das Modell öfter „ja" – der Recall steigt, die Precision sinkt. Hebst du ihn an, wird es vorsichtiger – Precision steigt, Recall sinkt. Welcher Punkt richtig ist, ist **keine technische, sondern eine geschäftliche Entscheidung**: Was kostet ein Fehlalarm, was kostet ein übersehener Fall?

### Das Accuracy-Paradox
Angenommen, nur 1 % aller Transaktionen sind Betrug. Ein „Modell", das immer „kein Betrug" sagt, erreicht **99 % Accuracy** – und findet keinen einzigen Betrugsfall (Recall = 0). Bei unausgewogenen Klassen ist Accuracy allein deshalb irreführend.`
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
            ['Automatisches Aussortieren von Bewerbungen', 'Geeignete Person wird aussortiert (FN) – zudem Hochrisiko nach KI-Verordnung', 'KI nicht allein entscheiden lassen; Recall und Fairness prüfen'],
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
            'Entscheidung mit der Serviceleitung: Übersehene Beschwerden sind teurer als Fehlalarme → Schwellenwert senken, Ziel-Recall ≥ 90 %, mehr Fehlalarme werden akzeptiert. Danach neu messen.'
          ],
          takeaway: `Eine hohe Accuracy kann über Schwächen hinwegtäuschen. **Übersetze Metriken in Geschäftsfolgen** („jede fünfte Beschwerde bleibt liegen") – so werden sie entscheidbar.`
        },
        {
          type: 'text',
          md: `### Latenz und Uptime
- **Latenz:** Antwortzeit. Berichte nicht nur den Durchschnitt, sondern auch das **95. Perzentil (p95)** – also die Zeit, unter der 95 % der Anfragen liegen. Nutzende erinnern sich an die langsamen Fälle.
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
          qtype: 'cloze',
          q: 'Ergänze die Definition.',
          text: 'Der {{Recall|Sensitivität}} gibt an, welchen Anteil aller tatsächlich positiven Fälle das Modell findet; die {{Precision|Präzision}} gibt an, wie viele der positiven Vorhersagen stimmen.',
          explain: 'Recall = TP / (TP + FN), Precision = TP / (TP + FP). Beide stehen im Handout (§9) bei den technischen KPIs; F1 ist ihr harmonisches Mittel.'
        }
      ]
    },
    // ------------------------------------------------------------------ L3
    {
      id: 'm07-l3',
      title: 'LLM-Anwendungen evaluieren: Evals, Human Ratings, LLM-as-a-Judge',
      minutes: 25,
      blocks: [
        {
          type: 'text',
          md: `Bei generativer KI gibt es selten die *eine* richtige Antwort. Eine Zusammenfassung kann auf viele Arten gut sein – und auf subtile Weise falsch (eine erfundene Zahl, eine veraltete Frist). Precision und Recall reichen hier nicht. Stattdessen arbeitest du mit **Evals**: einer festen Sammlung von Testfällen mit klaren Bewertungskriterien, die du bei jeder Änderung erneut durchlaufen lässt.`
        },
        {
          type: 'update',
          title: 'Ergänzung zum Handout: Evaluation generativer KI',
          md: `Das Handout (§9) nennt klassische technische KPIs. Für LLM-Anwendungen haben sich seither eigene Methoden etabliert:
- **Eval-Sets mit Rubrik:** Anthropic empfiehlt in seiner Dokumentation, Erfolgskriterien spezifisch und messbar zu formulieren, Testfälle an der realen Verteilung inklusive Randfällen auszurichten, möglichst automatisiert zu bewerten und mehrere Dimensionen gleichzeitig zu messen.
- **Menschliche Bewertung (Human Ratings):** am verlässlichsten, aber teuer – gezielt für Stichproben und Kalibrierung einsetzen.
- **LLM-as-a-Judge:** Ein Sprachmodell bewertet Antworten anhand einer Rubrik. Zheng et al. (2023) fanden, dass starke Modelle als Bewerter **über 80 % Übereinstimmung** mit menschlichen Präferenzen erreichen – etwa so viel wie Menschen untereinander. Sie beschreiben aber auch **Verzerrungen**: Positions-, Ausführlichkeits- und Selbstbevorzugungs-Bias. Wang et al. (2023) zeigten, dass schon die **Reihenfolge** der verglichenen Antworten das Urteil kippen kann.`,
          sources: [
            { title: 'Anthropic: Define success criteria and build evaluations', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests' },
            { title: 'Zheng et al. (2023): Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena', url: 'https://arxiv.org/abs/2306.05685' },
            { title: 'Wang et al. (2023): Large Language Models are not Fair Evaluators', url: 'https://arxiv.org/abs/2305.17926' }
          ]
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Erfolgskriterien definieren', md: 'Was heißt „gut" für diesen Use Case? Z. B. „sachlich korrekt laut Wissensbasis", „nennt die Quelle", „max. 120 Wörter", „keine personenbezogenen Daten Dritter".' },
            { title: '2 · Testfälle sammeln', md: 'Echte (anonymisierte) Anfragen aus dem Alltag plus gezielte Randfälle: Tippfehler, mehrdeutige Fragen, Fragen ohne Antwort in der Wissensbasis, Manipulationsversuche.' },
            { title: '3 · Rubrik schreiben', md: 'Je Kriterium eine Skala mit klaren Ankern (z. B. 1 = falsch, 3 = teilweise korrekt, 5 = vollständig korrekt mit Quelle) oder Ja/Nein-Fragen.' },
            { title: '4 · Bewertungsmethode wählen', md: 'Code-basiert, wo möglich (Format, Länge, Pflichtangaben), LLM-as-a-Judge für inhaltliche Kriterien, Menschen für Stichproben und Kalibrierung.' },
            { title: '5 · Baseline-Lauf', md: 'Aktuelle Version durchlaufen lassen und Ergebnis festhalten – das ist die Messlatte für jede Änderung.' },
            { title: '6 · Bei jeder Änderung wiederholen', md: 'Neuer Prompt, neues Modell, neue Dokumente → Eval-Lauf. Verschlechterungen (Regressionen) fallen so vor dem Go-live auf.' }
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
          md: `- **Positions-Bias:** Bei Vergleichen wird eine Position bevorzugt → Reihenfolge tauschen und beide Urteile auswerten.
- **Ausführlichkeits-Bias:** Längere Antworten wirken besser → Länge in der Rubrik explizit regeln.
- **Selbstbevorzugung:** Ein Modell bewertet eigene Ausgaben milder → möglichst ein anderes Modell als Bewerter nutzen.
- **Begrenzte Prüffähigkeit:** Bei Fachfragen kann der Bewerter selbst irren → Referenzantworten bzw. Quellen mitgeben.
- **Kalibrierung:** Regelmäßig eine Stichprobe zusätzlich von Menschen bewerten lassen und die Übereinstimmung messen.`
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
            ['Sicherheit & Compliance', 'Keine vertraulichen Daten, keine verbotenen Inhalte?', 'Ja/Nein-Prüfungen, Red-Teaming-Fälle'],
            ['Effizienz', 'Wie schnell und wie teuer?', 'Latenz, Token, Kosten pro Antwort']
          ]
        },
        {
          type: 'links',
          title: 'Werkzeuge für Evals',
          items: [
            { title: 'Ragas', url: 'https://docs.ragas.io/', note: 'Open-Source-Bibliothek zur Evaluation von RAG- und LLM-Anwendungen' },
            { title: 'promptfoo', url: 'https://www.promptfoo.dev/', note: 'Open-Source-Werkzeug für Prompt-Tests, Evals und Red-Teaming' },
            { title: 'Evidently AI', url: 'https://www.evidentlyai.com/', note: 'Open-Source-Monitoring und LLM-Evaluation' },
            { title: 'Anthropic: Define success criteria and build evaluations', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests', note: 'Praxisleitfaden mit Beispielen für Code-, Human- und LLM-basierte Bewertung' }
          ]
        },
        {
          type: 'youtube',
          id: 'Qj3u_kzfJVo',
          title: 'LLM-as-a-judge: evaluating LLMs with LLMs',
          channel: 'Evidently AI',
          lang: 'en',
          minutes: 20
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
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Kein Prompt-, Modell- oder Wissensbasis-Update ohne Eval-Lauf.** Evals sind die Regressionstests der generativen KI.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Verzerrungen sind bei LLM-as-a-Judge beschrieben? (Mehrfachauswahl)',
          options: ['Positions-Bias', 'Ausführlichkeits-Bias', 'Selbstbevorzugung', 'Garantierte Fehlerfreiheit'],
          answer: [0, 1, 2],
          explain: 'Zheng et al. (2023) beschreiben Positions-, Ausführlichkeits- und Selbstbevorzugungs-Bias. Fehlerfrei ist kein Bewerter – deshalb braucht es Kalibrierung mit menschlichen Stichproben.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Weil LLM-as-a-Judge ähnlich oft mit Menschen übereinstimmt wie Menschen untereinander, kann man auf menschliche Bewertung vollständig verzichten.',
          answer: false,
          explain: 'Die Übereinstimmung gilt im Durchschnitt und unter Studienbedingungen. Für den eigenen Use Case muss der Bewerter kalibriert werden – mit regelmäßigen menschlichen Stichproben, besonders bei Fach- und Sicherheitsfragen.'
        }
      ]
    },
    // ------------------------------------------------------------------ L4
    {
      id: 'm07-l4',
      title: 'Monitoring, A/B-Tests, Feedback-Loops und Kosten pro Vorgang',
      minutes: 23,
      blocks: [
        {
          type: 'text',
          md: `Nach dem Go-live beginnt die Phase, die das Handout „Kontinuierliches Monitoring, A/B-Tests, Feedback-Loops" nennt. Ziel: Probleme früh erkennen, Verbesserungen belegen und den Nutzen dauerhaft sichern. Ein schlankes **Monitoring-Dashboard** reicht für den Anfang – entscheidend ist, dass jemand hinschaut und handelt.`
        },
        {
          type: 'table',
          caption: 'Beispiel-Dashboard für einen KI-Assistenten im Kundenservice (Werte fiktiv)',
          head: ['Kennzahl', 'Quelle', 'Alarm-Schwelle', 'Verantwortlich'],
          rows: [
            ['Übernahmequote der Antwortentwürfe', 'Ticketsystem', 'unter 60 % im Wochenmittel', 'Projektleitung'],
            ['Recall „Beschwerde"', 'wöchentliche Stichprobe (50 Fälle)', 'unter 90 %', 'Fachbereich'],
            ['Latenz p95', 'Anwendungs-Logs', 'über 8 Sekunden', 'IT-Ops'],
            ['Kosten pro bearbeiteter E-Mail', 'Anbieter-Abrechnung + Ticketzahl', '+20 % zum Vormonat', 'Controlling'],
            ['Aktive Nutzende / Berechtigte', 'Login-Statistik', 'unter 70 %', 'Change-Management'],
            ['Negative Rückmeldungen (Daumen runter)', 'Feedback-Button', 'über 10 %', 'Projektleitung']
          ]
        },
        {
          type: 'text',
          md: `### A/B-Tests: Verbesserungen belegen statt vermuten

Bei einem A/B-Test werden Vorgänge oder Nutzende **zufällig** auf zwei Varianten verteilt (z. B. alter vs. neuer Prompt) und eine vorher festgelegte Kennzahl verglichen. Wichtige Regeln:
- **Eine Änderung pro Test** – sonst weißt du nicht, was gewirkt hat.
- **Zielmetrik und Laufzeit vorher festlegen** und nicht bei der ersten guten Zwischenzahl abbrechen.
- **Leitplanken-Metriken** mitbeobachten (z. B. Kosten, Beschwerden), damit eine Verbesserung nicht anderswo schadet.
- **Genug Fälle:** Bei kleinen Mengen sind Unterschiede oft Zufall.

Für KMU mit wenig Volumen sind Alternativen oft praktischer: **Stufen-Roll-out** (erst Team A, später Team B, beide vergleichen) oder Vorher-Nachher-Vergleich mit einer Kontrollgruppe, die vorerst ohne KI arbeitet.`
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Typische Messfallen',
          md: `- **Neuheitseffekt:** Am Anfang wird ein neues Tool begeistert genutzt – die ehrliche Messung beginnt nach einigen Wochen.
- **Zu frühes Abbrechen („Peeking"):** Wer täglich nachschaut und beim ersten positiven Ausschlag stoppt, findet fast immer einen „Erfolg".
- **Saisonalität:** Vergleiche Dezember nicht mit März, wenn das Geschäft saisonal schwankt.
- **Kennzahlen-Wildwuchs:** Lieber fünf Kennzahlen, auf die reagiert wird, als dreißig, die niemand liest.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Erfassen', md: 'Feedback dort einsammeln, wo gearbeitet wird: Daumen hoch/runter, Korrekturen an KI-Vorschlägen, kurze Freitext-Hinweise.' },
            { title: '2 · Auswerten', md: 'Regelmäßig (z. B. alle zwei Wochen) Muster suchen: Welche Anliegen, Dokumente oder Teams sind auffällig?' },
            { title: '3 · Priorisieren', md: 'Häufige und teure Fehler zuerst – nicht der lauteste Einzelfall.' },
            { title: '4 · Verbessern', md: 'Prompt, Wissensbasis, Regeln oder Trainingsdaten anpassen; bei klassischem ML ggf. Retraining.' },
            { title: '5 · Testen', md: 'Eval-Lauf bzw. A/B-Test, bevor die Änderung für alle gilt.' },
            { title: '6 · Zurückmelden', md: 'Den Nutzenden zeigen, was sich durch ihr Feedback geändert hat – das erhöht die Bereitschaft, weiter Rückmeldung zu geben.' }
          ]
        },
        {
          type: 'text',
          md: `### Kosten pro Vorgang

**Kosten pro Vorgang = (Lizenzen + nutzungsabhängige Gebühren + Betrieb + menschliche Prüfzeit) / Anzahl Vorgänge**

Vergleiche diesen Wert mit den Kosten pro Vorgang **vor** der Einführung (Baseline). *Fiktives Beispiel:* Früher kostete eine E-Mail-Bearbeitung 8 Minuten Arbeitszeit à 0,80 €/Minute = 6,40 €. Mit KI: 3 Minuten Prüfung (2,40 €) + 0,15 € Nutzungskosten + 0,25 € anteilige Lizenz und Betrieb = 2,80 €. Wichtig: Steigt die Nutzung, steigen auch die nutzungsabhängigen Kosten – beobachte deshalb beide Werte. Rechne verschiedene Szenarien im ROI-Rechner durch.`
        },
        {
          type: 'interactive',
          widget: 'roi-calculator'
        },
        {
          type: 'text',
          md: `### Nutzung und Akzeptanz messen
Für Adoptions-KPIs bietet sich das **HEART-Framework** an (Rodden, Hutchinson & Fu, Google, 2010): **H**appiness (Zufriedenheit), **E**ngagement (Nutzungsintensität), **A**doption (neue Nutzende), **R**etention (Wiederkehr), **T**ask Success (Aufgabenerfolg). Für jede Dimension legst du ein Ziel, ein Signal und eine Kennzahl fest – z. B. Adoption: „Anteil der Berechtigten, die das Tool in den ersten vier Wochen mindestens einmal nutzen".`
        },
        {
          type: 'praxis',
          title: 'Das Quartals-Review',
          company: 'Stadtwerke Lindenau GmbH (fiktiv), 300 Mitarbeitende',
          scenario: `Drei Monate nach dem Roll-out des E-Mail-Assistenten bereitest du das Review für die Geschäftsführung vor. Insgesamt sinkt die Erstantwortzeit deutlich gegenüber der Baseline – aber ein Team nutzt den Assistenten kaum.`,
          steps: [
            'Du zeigst den KPI-Baum: technische Qualität stabil, Prozess-KPI verbessert, Kosten pro E-Mail unter der Baseline.',
            'Du schlüsselst nach Teams auf: Im Team „Gewerbekunden" liegt die Adoptionsrate deutlich niedriger, die Übernahmequote ebenfalls.',
            'Die Feedback-Auswertung zeigt: Die Anliegen der Gewerbekunden (Sonderverträge) sind in der Wissensbasis kaum abgebildet – die Entwürfe sind oft unbrauchbar.',
            'Maßnahme: Sonderverträge in die Wissensbasis aufnehmen, Eval-Set um 30 Gewerbefälle erweitern, zwei Pilotnutzende aus dem Team als Ansprechpersonen benennen.',
            'Du schlägst einen Stufen-Test vor: Verbesserte Version zuerst für Gewerbekunden, Vergleich der Übernahmequote nach vier Wochen.',
            'Die Geschäftsführung entscheidet über Fortführung und Budget auf Basis der Zahlen – nicht auf Basis von Einzelmeinungen.'
          ],
          takeaway: `Durchschnittswerte verstecken Probleme. **Aufschlüsseln, Ursachen über Feedback finden, gezielt verbessern, erneut messen** – das ist Optimierung im Sinne des Handouts.`
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Messen → Lernen → Verbessern ist eine Schleife, kein Abschlussbericht.**'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die Schritte eines Feedback-Loops in die richtige Reihenfolge.',
          items: ['Feedback erfassen', 'Muster auswerten', 'Verbesserungen priorisieren', 'Anpassung umsetzen', 'Änderung testen (Eval / A/B)', 'Nutzenden zurückmelden'],
          explain: 'Ohne Test vor dem Ausrollen können „Verbesserungen" an anderer Stelle schaden; ohne Rückmeldung an die Nutzenden versiegt das Feedback.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Du willst prüfen, ob ein neuer System-Prompt die Übernahmequote verbessert. Was ist das sauberste Vorgehen?',
          options: [
            'Prompt für alle umstellen und nach zwei Tagen die Stimmung im Team abfragen',
            'Anfragen zufällig auf alten und neuen Prompt verteilen, Zielmetrik und Laufzeit vorher festlegen',
            'Gleichzeitig Prompt, Modell und Wissensbasis ändern, um Zeit zu sparen',
            'Den Test abbrechen, sobald die neue Variante erstmals vorne liegt'
          ],
          answer: 1,
          explain: 'Zufällige Zuteilung, eine Änderung, vorab festgelegte Metrik und Laufzeit – das sind die Grundregeln kontrollierter Experimente (vgl. Kohavi, Tang & Xu 2020).'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'multi',
      q: 'Welche technischen KPIs nennt das Handout (§9)? (Mehrfachauswahl)',
      options: ['Accuracy', 'Precision', 'Recall', 'Latenz', 'Umsatzsteigerung'],
      answer: [0, 1, 2, 3],
      explain: 'Das Handout nennt Accuracy, Precision, Recall, Latenz und Uptime als technische KPIs. Umsatzsteigerung ist eine Business-KPI.'
    },
    {
      type: 'match',
      q: 'Ordne die Metrik ihrer Formel zu.',
      pairs: [
        ['Accuracy', '(TP + TN) / alle'],
        ['Precision', 'TP / (TP + FP)'],
        ['Recall', 'TP / (TP + FN)'],
        ['F1-Score', '2 · P · R / (P + R)']
      ],
      explain: 'Die Confusion Matrix (TP, FP, FN, TN) ist die Grundlage aller vier Metriken.'
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
      q: 'Bei der Sichtprüfung sicherheitsrelevanter Bauteile ist ein hoher Recall für „fehlerhaft" meist wichtiger als eine hohe Precision.',
      answer: true,
      explain: 'Ein übersehenes fehlerhaftes Teil (FN) ist teurer als ein Fehlalarm (FP), den ein Mensch nachprüft. Die Gewichtung folgt den Fehlerkosten.'
    },
    {
      type: 'cloze',
      q: 'Ergänze den Merksatz.',
      text: 'Ohne {{Baseline|Ausgangswert|Nullmessung}} gibt es keinen Wirkungsnachweis.',
      explain: 'Die Baseline wird vor der Einführung mit derselben Methode gemessen wie später die Wirkung.'
    },
    {
      type: 'multi',
      q: 'Welche Maßnahmen verringern die Verzerrungen von LLM-as-a-Judge? (Mehrfachauswahl)',
      options: [
        'Reihenfolge der verglichenen Antworten tauschen',
        'Ein anderes Modell als Bewerter nutzen als das bewertete',
        'Rubrik mit klaren Skalenankern formulieren',
        'Menschliche Stichproben zur Kalibrierung',
        'Längere Antworten grundsätzlich besser bewerten'
      ],
      answer: [0, 1, 2, 3],
      explain: 'Positions-, Selbstbevorzugungs- und Ausführlichkeits-Bias lassen sich so reduzieren. Längere Antworten pauschal zu bevorzugen verstärkt dagegen den Ausführlichkeits-Bias.'
    },
    {
      type: 'order',
      q: 'Bringe die Schritte zum Aufbau eines Eval-Sets in eine sinnvolle Reihenfolge.',
      items: ['Erfolgskriterien definieren', 'Testfälle inkl. Randfällen sammeln', 'Bewertungsrubrik schreiben', 'Bewertungsmethode wählen', 'Baseline-Lauf durchführen', 'Bei jeder Änderung wiederholen'],
      explain: 'Erst Kriterien, dann Fälle und Rubrik, dann Methode und Baseline – und danach jeder Änderung einen Eval-Lauf voranstellen.'
    },
    {
      type: 'single',
      q: 'Was misst die Kennzahl „Kosten pro Vorgang" bei einer KI-Lösung sinnvollerweise?',
      options: [
        'Nur die Lizenzkosten pro Monat',
        'Alle laufenden Kosten inkl. Nutzungsgebühren, Betrieb und menschlicher Prüfzeit, geteilt durch die Anzahl Vorgänge',
        'Die einmaligen Projektkosten',
        'Die Anzahl der Token pro Prompt'
      ],
      answer: 1,
      explain: 'Erst die Vollkosten pro Vorgang sind mit der Baseline vergleichbar. Die menschliche Prüfzeit wird oft vergessen.'
    },
    {
      type: 'tf',
      q: 'Bei einem A/B-Test sollte man den Test beenden, sobald die neue Variante zum ersten Mal besser aussieht.',
      answer: false,
      explain: 'Zu frühes Abbrechen („Peeking") führt häufig zu Scheinerfolgen. Zielmetrik und Laufzeit werden vorher festgelegt.'
    },
    {
      type: 'match',
      q: 'Ordne die HEART-Dimension ihrem Beispielsignal zu.',
      pairs: [
        ['Happiness', 'Zufriedenheitsbewertung im Tool'],
        ['Adoption', 'Anteil Berechtigter, die das Tool erstmals nutzen'],
        ['Retention', 'Anteil Nutzender, die nach vier Wochen noch aktiv sind'],
        ['Task Success', 'Anteil der Vorgänge, die mit KI-Unterstützung erfolgreich abgeschlossen werden']
      ],
      explain: 'Das HEART-Framework (Rodden, Hutchinson & Fu 2010) hilft, Nutzungs- und Akzeptanz-KPIs systematisch abzuleiten; Engagement (Nutzungsintensität) ist die fünfte Dimension.'
    },
    {
      type: 'single',
      q: 'Die Studie von Brynjolfsson, Li und Raymond zeigte die größten Produktivitätszuwächse durch einen KI-Assistenten im Kundenservice bei …',
      options: ['erfahrenen Spitzenkräften', 'unerfahrenen und gering qualifizierten Beschäftigten', 'Führungskräften', 'IT-Mitarbeitenden'],
      answer: 1,
      explain: 'Im Schnitt +14 % gelöste Anfragen pro Stunde, bei unerfahrenen und gering qualifizierten Beschäftigten +34 %. Die Aufschlüsselung nach Gruppen macht solche Effekte erst sichtbar.'
    }
  ],
  exercises: [
    {
      id: 'm07-e1',
      title: 'Messkonzept für einen KI-Assistenten in der Hausverwaltung',
      scenario: `Die **Hausverwaltung Brandt & Söhne GmbH (fiktiv)**, 40 Mitarbeitende, Hannover, führt einen KI-Assistenten ein, der Mieteranfragen (Schadensmeldungen, Nebenkostenfragen, Schlüsselverlust) per E-Mail und Kontaktformular erkennt, an die zuständige Person weiterleitet und einen Antwortentwurf erstellt. Die Geschäftsführung fragt: „Woran sehen wir in einem halben Jahr, ob sich das gelohnt hat?"`,
      task: `1. Lege ein **KPI-Set** mit mindestens je einer Kennzahl für die Ebenen technisch, Prozess, Business, Nutzung/Adoption und Kosten fest.
2. Beschreibe, **wie und wie lange** du die **Baseline** misst.
3. Lege für zwei Kennzahlen eine **Alarm-Schwelle** und eine verantwortliche Person fest.
4. Beschreibe einen **Feedback-Loop** für die Mitarbeitenden.`,
      deliverable: 'Tabelle + Erläuterung (ca. 250–400 Wörter)',
      template: `Ebene | KPI | Messquelle | Baseline | Ziel
...

Baseline-Messung: ...
Alarm-Schwellen & Verantwortliche: ...
Feedback-Loop: ...`,
      rubric: [
        { criterion: 'KPIs auf allen fünf Ebenen', keywords: ['technisch', 'prozess', 'business', 'nutzung', 'adoption', 'kosten'], min: 4, hint: 'Hast du neben Technik, Prozess und Business auch Nutzung und Kosten bedacht?' },
        { criterion: 'Konkrete, messbare Kennzahlen', keywords: ['precision', 'recall', 'durchlaufzeit', 'bearbeitungszeit', 'zufriedenheit', 'übernahme', 'pro vorgang', 'aktive'], min: 4, hint: 'Formuliere jede Kennzahl so, dass man sie aus einem System oder einer Stichprobe ablesen kann.' },
        { criterion: 'Baseline-Messung vor Einführung beschrieben', keywords: ['baseline', 'vor', 'wochen', 'stichprobe', 'zeitstempel'], min: 3, hint: 'Wann, womit und wie lange misst du den Ist-Zustand?' },
        { criterion: 'Alarm-Schwellen mit Verantwortlichen', keywords: ['schwelle', 'alarm', 'verantwort', 'unter', 'über'], min: 2, hint: 'Ab welchem Wert muss wer reagieren?' },
        { criterion: 'Feedback-Loop beschrieben', keywords: ['feedback', 'auswert', 'verbesser', 'test', 'rückmeld'], min: 3, hint: 'Wie kommt Feedback von den Mitarbeitenden zurück in die Lösung – und wieder zu ihnen?' }
      ],
      hints: [
        'Starte mit der Frage der Geschäftsführung: Welche Business-Kennzahl würde sie überzeugen? Leite dann rückwärts Prozess- und Technik-KPIs ab.',
        'Die Weiterleitung ist eine Klassifikation – hier passen Precision und Recall je Anliegenart. Der Antwortentwurf lässt sich über die Übernahmequote messen.',
        'Für die Baseline eignen sich Zeitstempel aus dem Postfach bzw. Ticketsystem über 4–6 Wochen plus eine Stichprobe mit Zeitmessung. Denk an Saisoneffekte wie die Nebenkostenabrechnung.'
      ],
      sample: `- **Technisch:** Recall „Schadensmeldung" – Quelle: Stichprobe 50 Fälle/Woche; Baseline: – (neu); Ziel: ≥ 95 %
- **Technisch:** Precision je Anliegenart – Quelle: Stichprobe; Baseline: –; Ziel: ≥ 85 %
- **Prozess:** Zeit bis Erstantwort – Quelle: Zeitstempel Postfach; Baseline: gemessen, z. B. 1,8 Tage; Ziel: ≤ 0,5 Tage
- **Prozess:** Weiterleitungsfehler – Quelle: Ticket-Umleitungen; Baseline: gemessen; Ziel: −50 %
- **Business:** Mieterzufriedenheit (Kurzumfrage nach Abschluss) – Quelle: Umfrage; Baseline: gemessen; Ziel: +0,5 Punkte
- **Nutzung:** Übernahmequote Antwortentwürfe; aktive Nutzende/Berechtigte – Quelle: Tool-Logs; Baseline: –; Ziel: ≥ 60 % bzw. ≥ 80 %
- **Kosten:** Kosten pro Anfrage (Lizenz, API, Prüfzeit) – Quelle: Abrechnung + Zeitmessung; Baseline: Arbeitszeit × Satz; Ziel: −30 %

**Baseline:** sechs Wochen vor Start, außerhalb der Nebenkosten-Saison; Zeitstempel aus dem Postfach, zusätzlich 150 Anfragen mit Zeitmessung; Ergebnisse dokumentiert und eingefroren.

**Alarm:** Recall „Schadensmeldung" unter 90 % → Projektleitung prüft sofort (Wasserschäden dürfen nicht liegen bleiben). Kosten pro Anfrage +20 % zum Vormonat → Controlling und Projektleitung.

**Feedback-Loop:** Daumen hoch/runter plus Korrekturgrund im Tool; alle zwei Wochen Auswertung durch die Projektleitung; Top-3-Probleme werden behoben, per Eval-Set getestet und im Teammeeting zurückgemeldet („Ihr habt gemeldet – wir haben geändert").`
    },
    {
      id: 'm07-e2',
      title: 'Metriken berechnen und eine Eval-Strategie entwerfen',
      scenario: `Die **Kreishandwerkerschaft Oberland (fiktiv)** testet zwei KI-Bausteine für ihre Mitgliederberatung:
(A) Einen Klassifikator, der eingehende Anfragen als „dringend" markiert. Testergebnis bei 500 Anfragen: **TP = 45, FP = 30, FN = 15, TN = 410**.
(B) Einen RAG-Assistenten, der Fragen zu Ausbildungsordnungen beantwortet. Bisher wurde er nur „mal ausprobiert".`,
      task: `1. Berechne für (A) **Accuracy, Precision, Recall und F1** und interpretiere die Werte in Geschäftssprache.
2. Empfiehl, ob der **Schwellenwert** eher gesenkt oder erhöht werden sollte – mit Begründung über Fehlerkosten.
3. Entwirf für (B) eine **Eval-Strategie**: Kriterien, Testfälle, Bewertungsmethoden (inkl. LLM-as-a-Judge) und wie du dessen **Grenzen** absicherst.`,
      deliverable: 'Rechenweg + Kurzkonzept (ca. 250–400 Wörter)',
      template: `(A) Accuracy = ...
Precision = ...
Recall = ...
F1 = ...
Interpretation: ...
Schwellenwert-Empfehlung: ...

(B) Eval-Strategie:
- Kriterien: ...
- Testfälle: ...
- Methoden: ...
- Absicherung LLM-as-a-Judge: ...`,
      rubric: [
        { criterion: 'Berechnet die vier Metriken korrekt', keywords: ['accuracy', 'precision', 'recall', 'f1'], min: 4, hint: 'Nutze die Formeln aus Lektion 2: TP/(TP+FP), TP/(TP+FN) …' },
        { criterion: 'Interpretiert in Geschäftssprache und begründet den Schwellenwert über Fehlerkosten', keywords: ['übersehen', 'fehlalarm', 'kosten', 'schwellenwert', 'dringend', 'senken'], min: 3, hint: 'Was bedeutet es für ein Mitglied, wenn eine dringende Anfrage übersehen wird?' },
        { criterion: 'Definiert Eval-Kriterien und Testfälle inkl. Randfällen', keywords: ['korrekt', 'quelle', 'testfäll', 'randfäll', 'rubrik', 'referenz'], min: 3, hint: 'Woran erkennst du eine gute Antwort – und welche schwierigen Fragen gehören ins Set?' },
        { criterion: 'Kombiniert Bewertungsmethoden und sichert LLM-as-a-Judge ab', keywords: ['mensch', 'stichprobe', 'kalibr', 'bias', 'anderes modell', 'reihenfolge', 'llm-as-a-judge'], min: 3, hint: 'Welche Verzerrungen hat ein KI-Bewerter, und wie prüfst du ihn?' }
      ],
      hints: [
        'Accuracy = (TP + TN) / 500. Für Precision brauchst du alle als „dringend" markierten Anfragen (TP + FP).',
        'Precision = 45/75 = 60 %, Recall = 45/60 = 75 %. Jetzt F1 berechnen und überlegen: Ist eine übersehene dringende Anfrage schlimmer als ein Fehlalarm?',
        'Für (B): echte Fragen aus der Beratung sammeln, Referenzantworten mit Quelle schreiben lassen, Fragen ohne Antwort in den Dokumenten ergänzen; LLM-as-a-Judge mit anderem Modell, menschliche Stichprobe zur Kalibrierung.'
      ],
      sample: `**(A)** Accuracy = (45 + 410) / 500 = **91 %**. Precision = 45 / (45 + 30) = **60 %**. Recall = 45 / (45 + 15) = **75 %**. F1 = 2 · 0,60 · 0,75 / (0,60 + 0,75) = 0,9 / 1,35 ≈ **0,67**.

*Interpretation:* Von zehn als dringend markierten Anfragen sind vier nicht dringend (Fehlalarme). Und jede vierte wirklich dringende Anfrage wird übersehen. Die hohe Accuracy täuscht, weil die meisten Anfragen nicht dringend sind.

*Schwellenwert:* Eine übersehene dringende Anfrage (z. B. Frist läuft ab) ist für das Mitglied teurer als ein Fehlalarm, den die Beratung schnell aussortiert. → Schwellenwert **senken**, Ziel-Recall ≥ 90 %; danach prüfen, ob die Zahl der Fehlalarme für das Team tragbar ist.

**(B) Eval-Strategie:**
- *Kriterien:* sachlich korrekt laut Ausbildungsordnung (1–5), nennt die Quelle (ja/nein), sagt „dazu liegen mir keine Informationen vor", wenn nichts gefunden wird (ja/nein), verständlich für Betriebsinhaber (1–5).
- *Testfälle:* 80 echte, anonymisierte Fragen aus der Beratung + 20 Randfälle (veraltete Ordnung, Frage ohne Antwort, mehrdeutige Berufsbezeichnung, eingeschleuste Anweisung).
- *Methoden:* Code-Prüfung für Quellenangabe und Länge; LLM-as-a-Judge für Korrektheit und Verständlichkeit mit Referenzantworten; zwei Ausbildungsberaterinnen bewerten 25 Zufallsfälle.
- *Absicherung:* anderes Modell als Bewerter, klare Skalenanker, bei Vergleichen Reihenfolge tauschen, Übereinstimmung Mensch–Modell messen und Rubrik nachschärfen; Eval-Lauf vor jeder Änderung an Prompt, Modell oder Dokumenten.`
    }
  ],
  glossary: [
    { term: 'Baseline', def: 'Ausgangswert einer Kennzahl, gemessen vor der Einführung – Messlatte für jeden Wirkungsnachweis.' },
    { term: 'Confusion Matrix', def: 'Tabelle aus richtig/falsch positiven und richtig/falsch negativen Vorhersagen; Grundlage für Accuracy, Precision, Recall und F1.' },
    { term: 'Accuracy', def: 'Anteil richtiger Vorhersagen an allen Vorhersagen (vgl. Handout-Glossar) – bei unausgewogenen Klassen irreführend.' },
    { term: 'Precision', def: 'Anteil der positiven Vorhersagen, die tatsächlich positiv sind: TP / (TP + FP).' },
    { term: 'Recall', def: 'Anteil der tatsächlich positiven Fälle, die das Modell findet: TP / (TP + FN).' },
    { term: 'F1-Score', def: 'Harmonisches Mittel aus Precision und Recall.' },
    { term: 'Eval', def: 'Feste Sammlung von Testfällen mit Bewertungskriterien, mit der eine KI-Anwendung wiederholt und vergleichbar geprüft wird.' },
    { term: 'LLM-as-a-Judge', def: 'Bewertung von KI-Ausgaben durch ein Sprachmodell anhand einer Rubrik – skalierbar, aber mit bekannten Verzerrungen.' },
    { term: 'A/B-Test', def: 'Kontrolliertes Experiment, bei dem Fälle zufällig auf zwei Varianten verteilt und anhand einer vorab festgelegten Kennzahl verglichen werden.' },
    { term: 'Kosten pro Vorgang', def: 'Alle laufenden Kosten einer Lösung inkl. menschlicher Prüfzeit, geteilt durch die Anzahl bearbeiteter Vorgänge.' }
  ],
  sources: [
    { title: 'Metrics and scoring: quantifying the quality of predictions', publisher: 'scikit-learn', year: 2026, type: 'Doku', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html' },
    { title: 'Classification: Accuracy, recall, precision, and related metrics', publisher: 'Google for Developers (Machine Learning Crash Course)', year: 2025, type: 'Doku', url: 'https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall' },
    { title: 'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al.)', publisher: 'arXiv', year: 2023, type: 'Paper', url: 'https://arxiv.org/abs/2306.05685' },
    { title: 'Large Language Models are not Fair Evaluators (Wang et al.)', publisher: 'arXiv', year: 2023, type: 'Paper', url: 'https://arxiv.org/abs/2305.17926' },
    { title: 'Define success criteria and build evaluations', publisher: 'Anthropic', year: 2026, type: 'Doku', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests' },
    { title: 'Generative AI at Work (Brynjolfsson, Li, Raymond), NBER Working Paper 31161', publisher: 'NBER', year: 2023, type: 'Studie', url: 'https://www.nber.org/papers/w31161' },
    { title: 'Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing (Kohavi, Tang, Xu)', publisher: 'Cambridge University Press', year: 2020, type: 'Fachbuch', url: 'https://experimentguide.com/' },
    { title: 'Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications (HEART)', publisher: 'Google Research / CHI 2010', year: 2010, type: 'Paper', url: 'https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/' },
    { title: 'Ragas Documentation', publisher: 'Ragas', year: 2026, type: 'Tool', url: 'https://docs.ragas.io/' },
    { title: 'promptfoo', publisher: 'promptfoo', year: 2026, type: 'Tool', url: 'https://www.promptfoo.dev/' },
    { title: 'Evidently AI', publisher: 'Evidently AI', year: 2026, type: 'Tool', url: 'https://www.evidentlyai.com/' },
    { title: 'AI Risk Management Framework (Funktion „Measure")', publisher: 'NIST', year: 2023, type: 'Leitfaden', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }
  ]
}
