// Kapitel 1 – KI-Grundlagen und strategischer Kontext (Theorieskript K7.0069, S. 3–28)
export default {
  id: 'k1',
  order: 1,
  title: 'KI-Grundlagen und strategischer Kontext',
  subtitle: 'Was KI ist, wie ML, Deep Learning und generative KI funktionieren und warum KI Chefsache ist',
  icon: 'brain',
  chapter: 1,
  isNew: false,
  minutes: 150,
  skript: [
    { chapter: '1', title: 'KI-Grundlagen und strategischer Kontext', page: 3 },
    { chapter: '1.1', title: 'Was ist Künstliche Intelligenz?', page: 4 },
    { chapter: '1.2', title: 'Machine Learning und Deep Learning erklärt', page: 7 },
    { chapter: '1.3', title: 'Generative KI und große Sprachmodelle', page: 13 },
    { chapter: '1.4', title: 'Strategische Bedeutung von KI für Organisationen', page: 18 },
    { chapter: '1.5', title: 'Bewertung der organisatorischen KI-Bereitschaft', page: 23 },
  ],
  objectives: [
    'Du definierst Künstliche Intelligenz und grenzt KI, Machine Learning, Deep Learning und generative KI sauber voneinander ab.',
    'Du unterscheidest schwache KI (Narrow AI) von allgemeiner KI (AGI) und räumst mit gängigen Fehlvorstellungen über KI auf.',
    'Du erklärst überwachtes, unüberwachtes und bestärkendes Lernen und weißt, wann klassisches ML und wann Deep Learning passt.',
    'Du kennst Fähigkeiten und Grenzen großer Sprachmodelle (Halluzinationen, Bias, fehlender Weltbezug) und leitest Kontrollmechanismen ab.',
    'Du begründest die strategische Bedeutung von KI mit den fünf Werttreibern und dem Daten-Schwungrad und kennst typische strategische Fehler.',
    'Du bewertest die KI-Bereitschaft einer Organisation in fünf Dimensionen und ordnest sie einer von vier Reifegradstufen zu.',
    'Du liest Verbreitungs- und Renditezahlen kritisch: Quelle, Jahr, Grundgesamtheit und Auftraggeber.',
  ],
  lessons: [
    // ───────────────────────── 1.1 ─────────────────────────
    {
      id: 'k1-l1',
      title: '1.1 Was ist Künstliche Intelligenz?',
      minutes: 22,
      skript: { chapter: '1.1', page: 4 },
      blocks: [
        { type: 'video', scene: 'intro' },
        {
          type: 'text',
          md: `Willkommen im ersten Kapitel! Bevor du KI-Projekte planst, bewertest oder steuerst, brauchst du eine **saubere Begriffsgrundlage**. Im Alltag meinen Menschen mit „KI“ sehr Unterschiedliches: den Chatbot auf der Website, eine Excel-Formel, die Kameraprüfung in der Fertigung oder ein großes Sprachmodell.

Als KI-Managerin oder KI-Manager bist du oft die Person, die diese Begriffe im Unternehmen **übersetzt**: für die Geschäftsführung, die IT, den Betriebsrat und die Fachabteilungen. Genau darum geht es in dieser Lektion.`,
        },
        {
          type: 'skript',
          chapter: '1.1',
          page: 4,
          quote: 'Künstliche Intelligenz ist die Fähigkeit von Computersystemen, Aufgaben auszuführen, die typischerweise menschliche Intelligenz erfordern. Dies wird durch das Lernen aus Daten erreicht, statt explizit programmierten Regeln zu folgen.',
          md: `**Kernaussagen des Abschnitts (S. 4–6):**

- **Definition:** KI-Systeme erledigen Aufgaben, für die sonst menschliche Intelligenz nötig ist, etwa Muster erkennen, entscheiden, Sprache verstehen und komplexe Probleme lösen. Anders als klassische Software **lernen** sie aus Daten und werden mit der Zeit besser, statt für jeden Fall einzeln programmiert zu werden.
- **Geschichte:** Den Begriff prägte John McCarthy rund um die **Dartmouth-Konferenz 1956**. Die frühe Forschung setzte auf symbolisches Schlussfolgern und Regeln. Mehrere **„KI-Winter“** folgten, als überzogene Versprechen nicht eingelöst wurden. Die moderne KI-Welle begann **um 2012** mit Durchbrüchen im Deep Learning.
- **Drei Treiber** des heutigen Booms: massive **Rechenleistung**, riesige **Datenmengen** und **algorithmische Innovationen**.
- **Spektrum:** **Schwache KI (Narrow AI)** ist auf bestimmte Aufgaben spezialisiert (Spamfilter, Empfehlungen, Sprachassistenten). **Alle** heute eingesetzten Systeme gehören dazu. **Allgemeine KI (Strong AI, AGI)** mit menschenähnlichem Denken über alle Aufgaben hinweg bleibt ein theoretisches Konzept. Ob und wann sie kommt, ist offen.
- **Empfehlung des Skripts:** Strategische Planung konzentriert sich ausschließlich auf schwache KI, die konkrete Geschäftsprobleme löst.
- **Klassisch vs. KI am Spamfilter:** Feste Regeln („free money“ → Spam) sind starr und leicht zu umgehen. Ein trainiertes Modell lernt Muster aus Tausenden gelabelten E-Mails und kommt mit Variationen zurecht.
- **Fehlvorstellungen:** KI ist weder empfindungsfähig noch bewusst, sie „versteht“ nicht im menschlichen Sinn, sondern betreibt Mustererkennung und statistische Vorhersage. Viele Systeme können ihre Ergebnisse nicht erklären (**Black-Box-Problem**, Thema in Kapitel 5). Wer KI **vermenschlicht**, verschleiert, was sie tatsächlich tut.`,
        },
        {
          type: 'table',
          caption: 'Klassische Programmierung vs. KI-Ansatz am Beispiel Spamfilter (nach Skript S. 5–6)',
          head: ['', 'Klassische Programmierung', 'KI-Ansatz (Machine Learning)'],
          rows: [
            ['Woher kommt das Wissen?', 'Menschen schreiben Regeln, z. B. „enthält ‚free money‘ → Spam“', 'Das Modell lernt Muster aus Tausenden gelabelten Beispiel-E-Mails'],
            ['Umgang mit Variationen', 'Starr: „fr3e m0ney“ rutscht durch', 'Erkennt auch abgewandelte Muster'],
            ['Pflege', 'Jede neue Masche braucht eine neue Regel', 'Nachtraining mit neuen Beispielen'],
            ['Nachvollziehbarkeit', 'Hoch: jede Regel ist lesbar', 'Oft eingeschränkt (Black Box)'],
            ['Stark bei …', 'klaren, stabilen Regeln (z. B. Pflichtfeldprüfung)', 'komplexen Mustern, die sich schwer in Regeln fassen lassen'],
          ],
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Schwache KI (Narrow AI)', back: 'Auf eine eng umrissene Aufgabe spezialisiert, z. B. Spamfilter, Empfehlungssystem, Bilderkennung. **Alle heute produktiv eingesetzten Systeme** gehören laut Skript in diese Kategorie.' },
            { front: 'Allgemeine KI (Strong AI / AGI)', back: 'Hypothetische KI mit menschenähnlichem Denkvermögen über **alle** kognitiven Aufgaben hinweg. Existiert nicht. Über Zeitpunkt und Machbarkeit gibt es keinen Konsens.' },
            { front: 'Superintelligenz', back: 'Theoretische KI, die menschliche Fähigkeiten in nahezu allen Bereichen weit übertrifft. Thema der Zukunfts- und Sicherheitsforschung, nicht der heutigen Projektplanung.' },
            { front: 'Ist ein großes Sprachmodell „allgemeine KI“?', back: 'Nein. Sprachmodelle sind vielseitig, bleiben aber schwache KI. Der AI Act nennt sie **„KI-Modelle mit allgemeinem Verwendungszweck“** (Art. 3 Nr. 63), weil sie für viele Aufgaben einsetzbar sind, nicht weil sie allgemein intelligent wären.' },
          ],
        },
        {
          type: 'timeline',
          items: [
            { date: '1950', title: 'Turing-Test', md: 'Alan Turing fragt in „Computing Machinery and Intelligence“, ob Maschinen denken können.' },
            { date: '1956', title: 'Dartmouth-Konferenz', md: 'John McCarthy und Kollegen prägen den Begriff *Artificial Intelligence*. Der Workshop gilt als Geburtsstunde der KI-Forschung (Skript S. 4).' },
            { date: '1970er–80er', title: 'Symbolische KI und Expertensysteme', md: 'Regelbasierte Systeme bilden Fachwissen in Wenn-dann-Regeln ab, z. B. für die medizinische Diagnose.' },
            { date: 'Mitte 1970er / Ende 1980er', title: 'KI-Winter', md: 'Zwei Phasen mit gekürzter Förderung und sinkendem Interesse, weil Erwartungen nicht erfüllt wurden.' },
            { date: '1997', title: 'Deep Blue', md: 'IBMs Schachcomputer besiegt Weltmeister Garri Kasparow.' },
            { date: '2012', title: 'Deep-Learning-Durchbruch', md: 'Ein tiefes neuronales Netz (AlexNet) gewinnt den ImageNet-Wettbewerb deutlich. Laut Skript der Startpunkt der aktuellen KI-Revolution.' },
            { date: '2016', title: 'AlphaGo', md: 'DeepMinds System schlägt Lee Sedol im Go, mit Deep Learning und bestärkendem Lernen.' },
            { date: '2017', title: 'Transformer', md: 'Das Paper „Attention Is All You Need“ legt die Architektur heutiger Sprachmodelle.' },
            { date: 'Nov. 2022', title: 'ChatGPT', md: 'Generative KI erreicht den Massenmarkt (mehr dazu in Abschnitt 1.3).' },
            { date: '1.8.2024', title: 'EU AI Act in Kraft', md: 'Erste umfassende KI-Regulierung weltweit, mit gestaffelten Pflichten (Details in Kapitel 5).' },
          ],
        },
        {
          type: 'table',
          caption: 'Fehlvorstellungen über KI und was tatsächlich dahintersteckt',
          head: ['Fehlvorstellung', 'Realität', 'Folge für dein KI-Management'],
          rows: [
            ['„Die KI versteht, was sie schreibt.“', 'Statistische Vorhersage auf Basis gelernter Muster, kein Verständnis im menschlichen Sinn', 'Ergebnisse immer fachlich prüfen lassen'],
            ['„Die KI ist kreativ wie ein Mensch.“', 'Rekombination von Mustern aus Trainingsdaten', 'Urheberrecht und Originalität bewusst klären'],
            ['„Die KI weiß, warum sie so entscheidet.“', 'Viele Modelle sind Black Boxes ohne nachvollziehbare Begründung', 'Erklärbarkeit früh einplanen (Kapitel 5)'],
            ['„Bald denkt KI wie wir.“', 'Alle heutigen Systeme sind schwache KI', 'Planung auf konkrete Geschäftsprobleme ausrichten'],
          ],
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Die Rechtsdefinition im EU AI Act',
          md: `Das Skript definiert KI über das **Lernen aus Daten**. Für Verträge, Compliance und die Frage, ob die KI-Verordnung greift, zählt aber die **Rechtsdefinition**. Seit dem 1. August 2024 ist die **KI-Verordnung (EU) 2024/1689** in Kraft. Ihr Art. 3 Nr. 1 definiert ein KI-System als

> „ein maschinengestütztes System, das für einen in unterschiedlichem Grade autonomen Betrieb ausgelegt ist und das nach seiner Betriebsaufnahme anpassungsfähig sein kann und das aus den erhaltenen Eingaben für explizite oder implizite Ziele ableitet, wie Ausgaben wie etwa Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen erstellt werden, die physische oder virtuelle Umgebungen beeinflussen können“

- **Kernmerkmal ist das „Ableiten“ (Inferenz).** Laut Erwägungsgrund 12 gehören dazu Verfahren des maschinellen Lernens, aber auch **logik- und wissensbasierte Ansätze**. Die Rechtsdefinition ist also etwas breiter als die Skript-Definition.
- **Nicht erfasst** sind Systeme, die ausschließlich auf von Menschen festgelegten Regeln beruhen, um Vorgänge automatisch auszuführen (z. B. eine klassische Wenn-dann-Formel).
- Die Definition ist eng an die **OECD-Definition** (überarbeitet im November 2023) angelehnt. Die EU-Kommission hat am 6. Februar 2025 unverbindliche **Leitlinien zur KI-System-Definition** veröffentlicht.`,
          sources: [
            { title: 'Verordnung (EU) 2024/1689, Art. 3 (EUR-Lex)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
            { title: 'Art. 3 KI-VO – Wortlaut (dejure.org)', url: 'https://dejure.org/gesetze/KI-VO/3.html' },
            { title: 'OECD.AI: Updates to the OECD’s definition of an AI system explained (29.11.2023)', url: 'https://oecd.ai/en/wonk/ai-system-definition-update' },
            { title: 'EU-Kommission: Leitlinien zur Definition von KI-Systemen (06.02.2025)', url: 'https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application' },
          ],
        },
        {
          type: 'table',
          caption: 'Die Bausteine der AI-Act-Definition, übersetzt in die Praxis',
          head: ['Merkmal', 'Was es bedeutet', 'Beispiel aus dem Betrieb'],
          rows: [
            ['maschinengestützt', 'Läuft auf Hardware/Software', 'Cloud-Dienst, Edge-Gerät, PC-Software'],
            ['unterschiedlicher Grad an Autonomie', 'Arbeitet zumindest teilweise ohne menschliches Eingreifen', 'Sortierroboter, E-Mail-Klassifizierer'],
            ['Anpassungsfähigkeit (optional, „kann“)', 'Kann nach dem Start weiterlernen', 'Empfehlungssystem, das aus Klicks lernt'],
            ['leitet aus Eingaben ab', '**Kern:** erzeugt Ausgaben aus gelernten Mustern oder hinterlegtem Wissen statt nur aus fest programmierten Abläufen', 'Sprachmodell, Bilderkennung, Prognosemodell'],
            ['Ausgaben beeinflussen Umgebungen', 'Vorhersagen, Inhalte, Empfehlungen, Entscheidungen wirken real oder digital', 'Angebotsentwurf, Kreditscore, Wartungsalarm'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: `**KI leitet ab – klassische Software führt aus.** Und: **Alle heutige KI ist schwache KI.** Plane deshalb nicht für eine hypothetische „Super-KI“, sondern für konkrete Aufgaben, bei denen Mustererkennung messbaren Nutzen stiftet.`,
        },
        {
          type: 'praxis',
          title: 'KI-Inventur: Was ist bei uns eigentlich KI?',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Die Geschäftsführung bittet dich, bis zur nächsten Leitungsrunde eine **Übersicht aller „KI-Anwendungen“** im Haus zu erstellen. Grund: Mitarbeitende brauchen eine KI-Schulung, und der Datenschutzbeauftragte fragt, welche Tools unter den AI Act fallen. Gemeldet wurden: ein Excel-Makro zur Angebotskalkulation, der Spamfilter des Mailservers, ein Chatbot auf der Website, ein Routenplaner für Servicetechniker und ein Sprachmodell, das einige Mitarbeitende privat für E-Mails nutzen.`,
          steps: [
            'Liste alle gemeldeten Tools in einer Tabelle (Name, Anbieter, Abteilung, Zweck, genutzte Daten).',
            'Prüfe jedes Tool mit der Spamfilter-Logik aus dem Skript: Arbeitet es mit festen Regeln oder mit gelernten Mustern? Das Excel-Makro mit festen Formeln fällt meist heraus, Spamfilter und Chatbot meist hinein.',
            'Kläre beim Routenplaner mit dem Anbieter, ob gelernte Modelle (z. B. Verkehrsprognosen) oder nur klassische Optimierung genutzt werden.',
            'Markiere „Schatten-KI“: Die private Nutzung eines Sprachmodells mit Kundendaten ist ein Datenschutz- und Governance-Thema.',
            'Leite Maßnahmen ab: Nutzungsrichtlinie, freigegebenes Tool, Schulung zur KI-Kompetenz.',
          ],
          takeaway: `Eine **KI-Inventur** ist fast immer der erste Schritt im KI-Management. Sie schafft Transparenz, deckt Schatten-KI auf und ist die Grundlage für Risikoeinstufung, Schulung und Strategie.`,
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Laut Skript sind alle heute im Einsatz befindlichen KI-Systeme schwache KI, auch große Sprachmodelle.',
          answer: true,
          explain: 'Richtig. Schwache KI ist auf definierte Aufgaben spezialisiert. Allgemeine KI (AGI) bleibt ein theoretisches Konzept (Skript 1.1, S. 4–5).',
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche drei Faktoren treiben laut Skript die heutigen KI-Fähigkeiten? (Mehrfachauswahl)',
          options: ['Massive Rechenleistung', 'Riesige Datenmengen', 'Algorithmische Innovationen', 'Bewusstsein der Maschinen', 'Gesetzliche Vorgaben'],
          answer: [0, 1, 2],
          explain: 'Das Skript nennt das Zusammentreffen von Rechenleistung, Daten und algorithmischen Innovationen (S. 4). KI ist weder bewusst noch empfindungsfähig.',
        },
      ],
    },

    // ───────────────────────── 1.2 ─────────────────────────
    {
      id: 'k1-l2',
      title: '1.2 Machine Learning und Deep Learning erklärt',
      minutes: 28,
      skript: { chapter: '1.2', page: 7 },
      blocks: [
        { type: 'video', scene: 'ki' },
        {
          type: 'skript',
          chapter: '1.2',
          page: 7,
          quote: 'Machine Learning ist keine Magie – es ist Statistik im großen Maßstab.',
          md: `**Kernaussagen des Abschnitts (S. 7–12):**

- **Machine Learning (ML)** ist der Teilbereich der KI, in dem Algorithmen Muster aus Daten lernen, statt für jeden Fall programmiert zu werden. ML steckt in den meisten praktischen KI-Anwendungen, vom Spamfilter über die medizinische Diagnose bis zur Betrugserkennung.
- **Training:** Ein mathematisches Modell passt auf historischen Daten seine internen **Parameter** so an, dass die Vorhersagefehler bei bekannten Beispielen möglichst klein werden. Danach sagt es neue, unbekannte Fälle vorher.
- **„Müll rein, Müll raus“:** Menge, Qualität und Verzerrungsfreiheit der Trainingsdaten bestimmen die Leistung unmittelbar.
- **Drei Lernansätze:** *überwacht* (gelabelte Beispiele, z. B. Spam, Kundenabwanderung, Kreditrisiko, Bedarfsprognose – dominiert im Geschäftsalltag), *unüberwacht* (Muster ohne Labels, z. B. Kundensegmentierung, explorative Analyse) und *bestärkend* (Lernen durch Belohnung und Bestrafung in einer Umgebung, z. B. AlphaGo, Robotersteuerung, Ressourcenoptimierung, Handelsstrategien).
- **Beispiel Kundenabwanderung:** historische Kunden mit bekanntem Ergebnis (Alter, Käufe, Support-Anrufe → geblieben/abgewandert), Merkmale (X) und Label (y) trennen, Modell trainieren, neuen Kunden vorhersagen.
- **Faustregel:** Für zuverlässiges überwachtes Lernen brauchst du **Hunderte bis Tausende gelabelte Beispiele pro Kategorie**.
- **Deep Learning** nutzt neuronale Netze mit vielen verborgenen Schichten. Frühe Schichten erkennen Kanten, mittlere Formen, tiefe ganze Objekte. Es glänzt bei **unstrukturierten Daten** (Bild, Audio, Text). Der Durchbruch kam **2012 bei ImageNet**.
- **Deep Learning ist nicht immer besser:** Bei strukturierten Geschäftsdaten (Verkaufszahlen, Kundendatenbanken) liefert klassisches ML oft bessere Ergebnisse mit weniger Daten und Rechenleistung.
- **Stolperfallen:** zu wenige oder schlechte Trainingsdaten, **Overfitting** (Auswendiglernen statt Verallgemeinern) und **Datendrift** im Betrieb (Kapitel 6). Datenqualität und Repräsentativität sind wichtiger als ausgefeilte Algorithmen.`,
        },
        {
          type: 'text',
          md: `### Das Zwiebelmodell

Stell dir KI als Zwiebel vor:

- **Künstliche Intelligenz** ist die äußerste Schicht. Sie umfasst auch symbolische Ansätze wie **regelbasierte Expertensysteme**, in denen Fachwissen als Regeln hinterlegt ist.
- **Machine Learning** ist eine Teilmenge: Systeme lernen Muster aus Daten.
- **Deep Learning** ist eine Teilmenge von ML und nutzt neuronale Netze mit vielen Schichten.
- **Generative KI und große Sprachmodelle (LLMs)** sind Deep-Learning-Modelle, die neue Inhalte erzeugen (Abschnitt 1.3).

Daneben gibt es **Anwendungsfelder**, die quer dazu liegen: **NLP** (Sprache verstehen und erzeugen) und **Computer Vision** (Bilder und Videos auswerten). Sie arbeiten heute überwiegend mit Deep Learning.`,
        },
        {
          type: 'table',
          caption: 'Die drei Lernansätze aus dem Skript, ergänzt um das selbstüberwachte Lernen',
          head: ['Lernart', 'Daten', 'Ziel', 'Beispiel'],
          rows: [
            ['Überwacht (supervised)', 'Gelabelt: Eingabe **mit** richtiger Antwort', 'Vorhersagen oder Klassifizieren', 'Spam erkennen, Kundenabwanderung oder Kreditrisiko vorhersagen'],
            ['Unüberwacht (unsupervised)', 'Ungelabelt', 'Strukturen und Gruppen finden', 'Kundensegmente bilden, Auffälligkeiten entdecken'],
            ['Bestärkend (reinforcement)', 'Feedback aus der Umgebung (Belohnung/Bestrafung)', 'Beste Abfolge von Entscheidungen lernen', 'AlphaGo, Robotersteuerung, Ressourcenoptimierung'],
            ['Selbstüberwacht (self-supervised, Ergänzung)', 'Riesige Rohdatenmengen, Labels entstehen aus den Daten selbst', 'Allgemeine Repräsentationen lernen', 'Ein Sprachmodell lernt, das nächste Wort vorherzusagen'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: '1. Historische Fälle sammeln', md: 'Zum Beispiel Kundinnen und Kunden der letzten Jahre mit **bekanntem Ergebnis**: geblieben oder abgewandert.' },
            { title: '2. Merkmale und Label trennen', md: '**Merkmale (Features, X):** Alter, Anzahl Käufe, Support-Anrufe. **Label (y):** 0 = geblieben, 1 = abgewandert.' },
            { title: '3. Modell trainieren', md: 'Ein Algorithmus (im Skript ein *Random Forest*) lernt, welche Merkmalskombinationen mit Abwanderung zusammenhängen. In Code heißt dieser Schritt oft `fit`.' },
            { title: '4. Neue Fälle vorhersagen', md: 'Für eine neue Kundin liefert das Modell eine Vorhersage oder Wahrscheinlichkeit (`predict`).' },
            { title: '5. Prüfen und überwachen', md: 'Mit zurückgehaltenen Testdaten prüfen, ob das Modell verallgemeinert (kein Overfitting), und im Betrieb auf Drift achten.' },
          ],
        },
        {
          type: 'table',
          caption: 'Klassisches Machine Learning vs. Deep Learning (nach Skript S. 11)',
          head: ['Merkmal', 'Klassisches Machine Learning', 'Deep Learning'],
          rows: [
            ['Datenbedarf', 'Hunderte bis Tausende Beispiele', 'Typischerweise Millionen Beispiele'],
            ['Feature-Engineering', 'Manuell: Fachleute legen relevante Merkmale fest', 'Automatisch: lernt Merkmale aus Rohdaten'],
            ['Besonders geeignet für', 'Strukturierte, tabellarische Daten', 'Unstrukturierte Daten (Bild, Text, Audio)'],
            ['Erklärbarkeit', 'Oft nachvollziehbar', 'Meist „Black Box“'],
            ['Rechenleistung', 'Moderat, läuft auf Standardrechnern', 'Hoch, meist GPUs nötig'],
          ],
        },
        {
          type: 'interactive',
          widget: 'neural-net',
          props: {},
        },
        {
          type: 'text',
          md: `### Was passiert im neuronalen Netz?

Im Widget siehst du einen **Forward-Pass**: Eingabewerte (z. B. Pixel oder Messwerte) laufen Schicht für Schicht durch das Netz. Jedes künstliche Neuron gewichtet seine Eingänge, summiert sie und gibt über eine Aktivierungsfunktion einen Wert weiter. Am Ende steht eine Ausgabe, etwa „Kratzer: ja, 92 %“.

Beim **Training** vergleicht das Netz seine Ausgabe mit der richtigen Antwort und passt die Gewichte schrittweise an (*Backpropagation*). Genau das meint das Skript mit „Parameter anpassen, um Vorhersagefehler zu minimieren“. Was das Netz „weiß“, steckt am Ende in Millionen bis Milliarden Gewichten. Deshalb sind Deep-Learning-Modelle oft schwer erklärbar.`,
        },
        {
          type: 'youtube',
          id: 'aircAruvnKk',
          title: 'But what is a neural network? | Deep learning chapter 1',
          channel: '3Blue1Brown',
          lang: 'en',
          minutes: 19,
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Drei Stolperfallen aus dem Skript',
          md: `- **Zu wenige oder schlechte Daten:** Prüfe vor jedem ML-Projekt, ob genug hochwertige historische Daten vorliegen (Faustregel: Hunderte bis Tausende gelabelte Beispiele pro Kategorie). Wie du Datenqualität bewertest, lernst du in Kapitel 3.
- **Overfitting:** Das Modell glänzt auf den Trainingsdaten und versagt bei neuen Fällen, weil es auswendig gelernt hat.
- **Datendrift:** Die Welt ändert sich, die Muster in den Daten auch, und die Leistung sinkt still. Überwachung und Drift-Erkennung behandelt Kapitel 6.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Foundation Models und selbstüberwachtes Lernen',
          md: `Das Skript erklärt die drei klassischen Lernansätze. Seit etwa 2018 prägen zusätzlich **Foundation Models** die Praxis: große Modelle, die per **selbstüberwachtem Lernen** auf riesigen Datenmengen vortrainiert und danach für viele Aufgaben angepasst werden. Der Begriff wurde 2021 von Forschenden der Stanford University geprägt. Grundlage ist meist die **Transformer-Architektur** von 2017.

Für dich heißt das: Viele Projekte beginnen heute nicht mehr mit eigenem Training, sondern mit der **Auswahl und Anpassung eines vortrainierten Modells**. Die Faustregel „Hunderte bis Tausende Beispiele pro Kategorie“ gilt für eigenes überwachtes Training. Mit einem vortrainierten Sprachmodell reichen für eine Klassifikation oft schon wenige gute Beispiele im Prompt, dafür brauchst du ein sauberes Test-Set zur Bewertung.`,
          sources: [
            { title: 'Bommasani et al. (2021): On the Opportunities and Risks of Foundation Models', url: 'https://arxiv.org/abs/2108.07258' },
            { title: 'Vaswani et al. (2017): Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' },
          ],
        },
        {
          type: 'praxis',
          title: 'Die passende Lernart für drei Geschäftsprobleme',
          company: 'Brandl Logistik GmbH (fiktiv), 140 Mitarbeitende, Regensburg',
          scenario: `Die Geschäftsführung hat drei Ideen gesammelt: (1) vorhersagen, welche Sendungen verspätet ankommen, (2) die rund 2.000 Geschäftskunden sinnvoll gruppieren und (3) einen Lagerroboter „selbst lernen lassen“, wie er Pakete am besten greift. Du sollst einschätzen, welche Lernart jeweils passt und was das für Daten und Aufwand bedeutet.`,
          steps: [
            'Problem 1: Es gibt historische Sendungen **mit** bekanntem Ergebnis (pünktlich/verspätet). Das ist überwachtes Lernen (Klassifikation) mit tabellarischen Daten, also ein Fall für klassisches ML statt Deep Learning. Prüfe, ob pro Klasse genug Beispiele vorliegen.',
            'Problem 2: Es gibt keine vorgegebenen Gruppen, also unüberwachtes Lernen (Clustering). Plane, dass der Vertrieb die gefundenen Segmente fachlich bewertet.',
            'Problem 3: Bestärkendes Lernen ist datenhungrig und braucht meist eine Simulation. Frag zuerst Robotik-Anbieter nach fertigen Lösungen, statt selbst zu entwickeln.',
            'Priorisiere: Problem 1 hat klare Daten und messbaren Nutzen. Es eignet sich als Pilot.',
            'Halte Annahmen und offene Fragen in einem einseitigen Steckbrief fest (Ziel, Daten, Lernart, Erfolgskriterium, Drift-Risiko).',
          ],
          takeaway: `Nicht die spannendste Methode gewinnt, sondern die, die zu **Problem, Daten und Reifegrad** passt. Überwachtes Lernen mit vorhandenen historischen Daten ist im Mittelstand oft der schnellste Weg zu messbarem Nutzen.`,
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Lernart dem passenden Anwendungsfall zu.',
          pairs: [
            ['Überwachtes Lernen', 'Kreditrisiko anhand historischer Fälle mit bekanntem Ausgang vorhersagen'],
            ['Unüberwachtes Lernen', 'Kundengruppen ohne Vorgaben entdecken'],
            ['Bestärkendes Lernen', 'Roboter lernt Greifstrategie über Belohnungen'],
            ['Selbstüberwachtes Lernen', 'Sprachmodell lernt, das nächste Wort vorherzusagen'],
          ],
          explain: 'Ausschlaggebend ist die Art der Daten bzw. des Feedbacks: Labels (überwacht), keine Labels (unüberwacht), Belohnung aus der Umgebung (bestärkend) oder Labels, die aus den Rohdaten selbst entstehen (selbstüberwacht).',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Händler will aus seiner Verkaufsdatenbank (Tabellen mit 8.000 Datensätzen) den Bedarf prognostizieren. Was empfiehlt das Skript tendenziell?',
          options: ['Unbedingt Deep Learning, weil es immer überlegen ist', 'Klassisches Machine Learning, weil es bei strukturierten Daten oft besser und günstiger ist', 'Bestärkendes Lernen', 'Gar keine KI, nur Regeln'],
          answer: 1,
          explain: 'Bei strukturierten, tabellarischen Geschäftsdaten liefert klassisches ML oft bessere Ergebnisse mit weniger Daten und Rechenleistung (Skript S. 11).',
        },
      ],
    },

    // ───────────────────────── 1.3 ─────────────────────────
    {
      id: 'k1-l3',
      title: '1.3 Generative KI und große Sprachmodelle',
      minutes: 28,
      skript: { chapter: '1.3', page: 13 },
      blocks: [
        {
          type: 'text',
          md: `Große Sprachmodelle (**Large Language Models, LLMs**) wie Claude, GPT, Gemini, Llama oder Mistral sind das Herzstück der generativen KI. Sie schreiben Texte, fassen Dokumente zusammen, programmieren und steuern zunehmend auch Agenten.

Du musst kein LLM selbst bauen. Als KI-Managerin oder KI-Manager solltest du aber verstehen, **wie** sie arbeiten. Nur so kannst du Nutzen realistisch einschätzen, Kosten abschätzen, Grenzen erklären und Kontrollen einbauen.`,
        },
        {
          type: 'skript',
          chapter: '1.3',
          page: 13,
          quote: 'Setze generative KI als Produktivitätsverstärker für menschliche Experten ein – nicht als Ersatz, der keine Kontrolle erfordert.',
          md: `**Kernaussagen des Abschnitts (S. 13–18):**

- **Generative KI** erzeugt neue Inhalte (Text, Bild, Code, Audio, Video). **Diskriminative KI** ordnet Eingaben dagegen ein („Ist diese E-Mail Spam?“).
- **ChatGPT (November 2022)** brachte generative KI ins öffentliche Bewusstsein und erreichte innerhalb von zwei Monaten 100 Millionen Nutzende.
- **Funktionsweise:** Das Modell lernt statistische Muster aus Trainingsdaten und erzeugt daraus neue, ähnliche Inhalte, ohne sie direkt zu kopieren. LLMs werden auf riesigen Textsammlungen trainiert und sagen **Token für Token** plausiblen Folgetext vorher. Bildmodelle lernen aus Millionen Bild-Text-Paaren.
- **Paradigmenwechsel:** Früher brauchte jede Sprachaufgabe ein eigenes Modell. LLMs zeigen **emergente Fähigkeiten**: Ein Modell erledigt viele Aufgaben allein durch **Prompting**.
- **Nutzen laut Skript:** 20–30 % Produktivitätsgewinn bei inhaltsintensiven Aufgaben (Deloitte 2024), 20–40 % Zeitersparnis bei Routine-Wissensarbeit.
- **Fünf Einsatzfelder:** Content-Erstellung, Kundenservice, Datenanalyse, Softwareentwicklung, Beschleunigung von Wissensarbeit.
- **Grenzen:** kein Faktenwissen im klassischen Sinn, **Halluzinationen**, kein Bezug zur realen Welt, übernommene **Verzerrungen** (Bias), unzuverlässige Berechnungen und Logik. Deshalb sind menschliche Kontrolle und Prüfung unverzichtbar, besonders bei folgenreichen Entscheidungen.
- **Generative ergänzt herkömmliche KI**, sie ersetzt sie nicht.
- **Typische Fehler:** blindes Vertrauen, ignorierte Bias- und Halluzinationsrisiken, fehlende Nutzungsrichtlinien, unterschätztes **Prompt-Engineering** sowie vernachlässigtes geistiges Eigentum und Datenschutz bei Cloud-Diensten.`,
        },
        {
          type: 'steps',
          items: [
            { title: '1. Tokenisierung', md: 'Der Eingabetext wird in **Tokens** zerlegt: Wörter, Wortteile oder Satzzeichen.' },
            { title: '2. Embeddings', md: 'Jedes Token wird in einen Zahlenvektor übersetzt. Ähnliche Bedeutungen liegen im Vektorraum nah beieinander.' },
            { title: '3. Transformer und Attention', md: 'In vielen Schichten berechnet das Modell per **Attention**, welche Tokens füreinander wichtig sind. Zum Beispiel: Worauf bezieht sich „sie“ in diesem Satz?' },
            { title: '4. Wahrscheinlichkeiten', md: 'Am Ende steht eine Wahrscheinlichkeitsverteilung über alle möglichen **nächsten Tokens**.' },
            { title: '5. Auswahl (Sampling)', md: 'Ein Token wird ausgewählt. Einstellungen wie die **Temperatur** steuern, wie kreativ bzw. zufällig die Auswahl ausfällt.' },
            { title: '6. Wiederholen', md: 'Das neue Token wird angehängt, und alles beginnt von vorn, Token für Token, bis die Antwort fertig ist. Genau das meint das Skript mit „Token für Token plausiblen Text vorhersagen“.' },
          ],
        },
        {
          type: 'text',
          md: `### Tokens: die Währung der LLMs

Abgerechnet, begrenzt und gemessen wird in **Tokens**. OpenAI nennt als grobe Faustregel für englische Texte: **1 Token entspricht etwa 4 Zeichen oder 0,75 Wörtern**. Deutsche Texte mit langen zusammengesetzten Wörtern brauchen oft mehr Tokens pro Wort.

Jedes Modell hat einen **eigenen Tokenizer**. Laut Anthropic zählt derselbe Prompt etwa bei Claude Fable 5.1 rund 30 % mehr Tokens als bei Modellen vor Claude Opus 4.7, weil ein neuer Tokenizer eingeführt wurde. Kostenvergleiche zwischen Modellen solltest du deshalb immer mit echten Beispieltexten machen.`,
        },
        {
          type: 'youtube',
          id: 'LPZh9BOjkQs',
          title: 'Large Language Models explained briefly',
          channel: '3Blue1Brown',
          lang: 'en',
          minutes: 8,
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Diskriminativ vs. generativ', back: '**Diskriminativ:** ordnet ein („Ist das Spam?“). **Generativ:** erzeugt Neues („Schreibe eine Marketing-E-Mail“). Beide ergänzen sich (Skript S. 13, 17).' },
            { front: 'Emergente Fähigkeiten', back: 'Fähigkeiten, die ein großes Modell zeigt, ohne eigens dafür trainiert zu sein: übersetzen, zusammenfassen, Fragen beantworten, allein durch die Formulierung des Prompts.' },
            { front: 'Kontextfenster', back: 'Maximale Zahl an Tokens, die das Modell auf einmal verarbeiten kann: Eingabe, Verlauf, Dokumente *und* Antwort zusammen.' },
            { front: 'Temperatur', back: 'Regler für die Zufälligkeit der Token-Auswahl. Niedrig bedeutet konsistente, sachliche Antworten, hoch bedeutet kreativere und variablere.' },
            { front: 'Wissensstichtag (Knowledge Cutoff)', back: 'Bis zu diesem Datum reichen die Trainingsdaten. Neueres weiß das Modell nur, wenn man es ihm mitgibt, z. B. per Websuche oder RAG.' },
          ],
        },
        {
          type: 'table',
          caption: 'Die fünf Einsatzfelder generativer KI aus dem Skript – mit passender Kontrolle',
          head: ['Einsatzfeld', 'Beispiele', 'Wichtigste Kontrolle'],
          rows: [
            ['Content-Erstellung', 'Marketing-Texte, Social-Media-Beiträge, Produktbeschreibungen, E-Mail-Entwürfe, Berichte', 'Menschliche Redaktion vor Veröffentlichung'],
            ['Kundenservice', 'Chatbots und virtuelle Assistenten für Routineanfragen', 'Übergabe an Menschen bei komplexen Anliegen, Transparenz „Sie sprechen mit einer KI“'],
            ['Datenanalyse', 'Erkenntnisse gewinnen, Visualisierungen, SQL-Abfragen schreiben, Berichte zusammenfassen', 'Ergebnisse gegen Quelldaten prüfen'],
            ['Softwareentwicklung', 'Code erzeugen, Tests, Dokumentation, Fehlersuche', 'Code-Review und automatisierte Tests'],
            ['Wissensarbeit beschleunigen', 'Recherche-Synthesen, Besprechungsprotokolle, Dokumententwürfe, Übersetzungen', 'Quellen- und Faktencheck'],
          ],
        },
        {
          type: 'table',
          caption: 'Herkömmliche und generative KI im Vergleich (nach Skript S. 17)',
          head: ['Merkmal', 'Herkömmliche KI', 'Generative KI'],
          rows: [
            ['Hauptfunktion', 'Klassifikation und Vorhersage', 'Inhalte erstellen'],
            ['Art der Ausgabe', 'Kategorien oder Zahlenwerte', 'Text, Bild, Code, Audio, Video'],
            ['Geschäftlicher Nutzen', 'Entscheidungen automatisieren', 'Inhaltsintensive Arbeit beschleunigen'],
            ['Zentrale Einschränkung', 'Braucht große gelabelte Datensätze', 'Kann fehlerhafte oder verzerrte Inhalte erzeugen'],
            ['Typische Anwendungsfälle', 'Betrugserkennung, Empfehlungssysteme', 'Kundenservice, Marketing, Softwareentwicklung'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Die Grenzen von LLMs (Skript S. 16)',
          md: `- **Halluzinationen:** überzeugend klingende, aber erfundene Aussagen
- **Kein Weltbezug:** das Modell kann Aussagen nicht selbst überprüfen
- **Bias:** übernommene gesellschaftliche Vorurteile aus den Trainingsdaten
- **Rechnen und Logik:** nicht zuverlässig, auch wenn Antworten so wirken

Daraus folgt: **Prüfmechanismen einbauen**, Nutzungsrichtlinien festlegen und bei folgenreichen Entscheidungen immer einen Menschen entscheiden lassen. Konkrete Techniken (Prompting, RAG, Modellwahl, Absicherung) vertieft das Plus-Modul „Generative KI anwenden: Prompting, RAG & Modellwahl“.`,
        },
        {
          type: 'text',
          md: `### Kontextfenster: groß, aber nicht grenzenlos

Aktuelle Spitzenmodelle verarbeiten sehr viel Kontext. Alle aktuellen Claude-Modelle haben laut Anthropic ein Kontextfenster von **1 Million Tokens**, Googles Gemini 4 Argon ebenfalls. Das sind mehrere dicke Handbücher auf einmal.

Aber: Mehr Kontext heißt nicht automatisch bessere Antworten. Die Studie **„Lost in the Middle“** (Liu et al., 2023) zeigte, dass Modelle Informationen am **Anfang und Ende** des Kontexts oft besser nutzen als in der **Mitte**. Außerdem kostet jedes Token Geld und Energie.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Modellnamen, Code-Beispiel und Copilot-Zahl',
          md: `- **Modellnamen:** Das Skript nennt GPT-4, Claude und Gemini. Stand Oktober 2026 sind u. a. Claude Fable 5.1 / Opus 5.5 / Sonnet 5.5 / Haiku 5.5, GPT-6 Astra / Sol / Luna und Gemini 4 Argon aktuell. Modellnamen veralten im Abstand weniger Monate. Prüfe immer die offiziellen Modellübersichten.
- **Code-Beispiel:** Das Skript ruft \`openai.ChatCompletion.create(model="gpt-4", …)\` auf. Diese Schreibweise stammt aus einer **alten Version** der OpenAI-Python-Bibliothek. Heute erstellt man einen Client (\`client = OpenAI()\`) und nutzt laut OpenAI für neue Projekte die **Responses API** (\`client.responses.create(…)\`); Chat Completions wird weiterhin unterstützt. Für dein KI-Management ist die Lehre wichtiger als der Code: Schnittstellen ändern sich, plane Wartung ein.
- **„46 % des Codes“:** Die Zahl stammt aus einer GitHub-Mitteilung vom **Februar 2023** und beschreibt den Durchschnitt bei Copilot-Nutzenden über alle Programmiersprachen, nicht den Anteil an *allem* Code weltweit.`,
          sources: [
            { title: 'OpenAI: Migrate to the Responses API', url: 'https://developers.openai.com/api/docs/guides/migrate-to-responses' },
            { title: 'GitHub Blog (14.02.2023): GitHub Copilot for Business is now available', url: 'https://github.blog/news-insights/product-news/github-copilot-for-business-is-now-available/' },
            { title: 'Anthropic: Models overview', url: 'https://platform.claude.com/docs/en/models/overview' },
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Ein LLM berechnet das wahrscheinlich nächste Token, es schlägt nicht in einer Datenbank nach.** Daraus erklären sich seine Stärken (flüssige Sprache, Vielseitigkeit) und seine Schwächen (plausibel klingende Fehler). Generative KI ist ein **Produktivitätsverstärker** für Fachleute, kein Ersatz ohne Kontrolle.',
        },
        {
          type: 'praxis',
          title: 'LLM-Grundlagen für die Sachbearbeitung erklären',
          company: 'Landratsamt Talkreis (fiktiv), rund 600 Beschäftigte',
          scenario: `Das Landratsamt hat eine datenschutzkonforme KI-Plattform eingeführt. In der ersten Woche gibt es Beschwerden: „Die KI antwortet jedes Mal anders“, „Sie kennt die neue Gebührensatzung nicht“, „Sie hat eine Zahl im Bescheid falsch zusammengerechnet“ und „Das Hochladen des 400-seitigen Haushaltsplans bringt komische Ergebnisse“. Du sollst eine 45-minütige Schulung konzipieren.`,
          steps: [
            'Live-Demo: Stell dieselbe Frage zweimal und erkläre Sampling und Temperatur. Variation ist normal, für Fakten braucht es Vorgaben und Quellen.',
            'Wissensstichtag erklären: Die neue Satzung ist nicht im Training enthalten und muss als Dokument mitgegeben oder per RAG angebunden werden.',
            'Grenzen aus dem Skript zeigen: Rechnen und Logik sind unzuverlässig. Beträge immer mit einem Rechenwerkzeug oder von Hand prüfen.',
            'Kontextfenster zeigen: Statt 400 Seiten auf einmal besser gezielt die relevanten Kapitel nutzen („Lost in the Middle“).',
            'Regeln vereinbaren: keine personenbezogenen Daten ohne Freigabe, Ergebnisse immer prüfen, Quellen verlangen. Die Nutzungsrichtlinie fehlt laut Skript in vielen Organisationen.',
          ],
          takeaway: `Viele „KI-Fehler“ sind **Verständnisprobleme**. Wer Tokens, Sampling, Wissensstichtag und Grenzen erklärt, senkt Frust und Fehlnutzung. Das ist gelebte KI-Kompetenz im Sinne von Art. 4 AI Act.`,
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Aufgabe ist ein typischer Fall für diskriminative (herkömmliche) statt generative KI?',
          options: ['Eine Marketing-E-Mail entwerfen', 'Eine Transaktion als betrugsverdächtig einstufen', 'Ein Produktbild erzeugen', 'Ein Besprechungsprotokoll zusammenfassen'],
          answer: 1,
          explain: 'Betrugserkennung ordnet Eingaben in Kategorien ein (Klassifikation). Die anderen Aufgaben erzeugen neue Inhalte, typisch für generative KI (Skript S. 13, 17).',
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Grenzen großer Sprachmodelle nennt das Skript? (Mehrfachauswahl)',
          options: ['Halluzinationen', 'Kein Bezug zur realen Welt', 'Übernahme von Verzerrungen aus Trainingsdaten', 'Unzuverlässige Berechnungen', 'Sie können grundsätzlich keine Texte zusammenfassen'],
          answer: [0, 1, 2, 3],
          explain: 'Das Skript nennt Halluzinationen, fehlenden Weltbezug, Bias und unzuverlässige Berechnungen/Logik (S. 16). Zusammenfassen gehört dagegen zu den Stärken.',
        },
      ],
    },

    // ───────────────────────── 1.4 ─────────────────────────
    {
      id: 'k1-l4',
      title: '1.4 Strategische Bedeutung von KI für Organisationen',
      minutes: 25,
      skript: { chapter: '1.4', page: 18 },
      blocks: [
        {
          type: 'text',
          md: `KI ist kein IT-Projekt, das man „nebenbei“ erledigt. Sie verändert, **wie** ein Unternehmen Entscheidungen trifft, **was** es anbietet und **womit** es Geld verdient. Genau deshalb gehört sie in die Unternehmensstrategie. Deine Rolle als KI-Managerin oder KI-Manager: technische Möglichkeiten in strategische Optionen übersetzen und sie entscheidbar machen.`,
        },
        {
          type: 'skript',
          chapter: '1.4',
          page: 18,
          quote: 'KI hat den Wandel von einer experimentellen Technologie zur strategischen Notwendigkeit vollzogen.',
          md: `**Kernaussagen des Abschnitts (S. 18–23):**

- **Vom Experiment zur Notwendigkeit:** Wer KI erfolgreich nutzt, gewinnt bei Effizienz, Kundenerlebnis, Produktinnovation und Entscheidungsqualität. Wer sie nicht einführt, riskiert, gegen KI-gestützte Konkurrenz zurückzufallen.
- **Zahlen im Skript:** im Schnitt 3,7-fache Rendite pro investiertem Dollar, Spitzenreiter über das Zehnfache, 20–30 % höhere Margen bei organisationsweit eingebetteter KI, Nutzung 75 % (2024) nach 55 % (2023) und 20 % (2020). Die Frage lautet nicht mehr „ob“, sondern „wie schnell skalieren wir?“.
- **Fünf Werttreiber:** operative Effizienz (20–40 % Effizienzgewinn in KI-unterstützten Prozessen), bessere Entscheidungsqualität, überlegenes Kundenerlebnis, Produktinnovation, Wettbewerbsanalyse. Wirkung entsteht, wenn mehrere Treiber gleichzeitig verfolgt werden. **Amazon** nutzt laut Skript alle fünf.
- **Branchen:** Finanzdienstleistungen (z. B. JPMorgans COIN-System für juristische Dokumente), Gesundheitswesen (Bilddiagnostik), Einzelhandel (Prognosen, kassenlose Geschäfte), Fertigung (vorausschauende Wartung), professionelle Dienstleistungen. In manchen Branchen ist KI schon **Pflichtprogramm**, in anderen schafft sie Differenzierung.
- **Daten-Schwungrad:** Bessere KI zieht mehr Kunden an, die mehr Daten erzeugen, die die KI weiter verbessern. Das schafft sich selbst verstärkende Vorteile.
- **Markttrends laut Skript:** weltweite KI-Ausgaben 154 Mrd. US-Dollar (2024), über 300 Mrd. bis 2026 erwartet; Nachfrage nach Data Scientists und ML-Fachleuten übersteigt das Angebot etwa 3:1. Daher sind Make-or-Buy- und Weiterbildungsentscheidungen erfolgskritisch.
- **Empfehlungen:** zuerst Use Cases mit sich selbst verstärkenden Datenvorteilen; KI auf die **zentralen wertschöpfenden Aktivitäten** ausrichten, nicht nur auf Backoffice-Randprozesse.
- **Strategische Fehler:** KI als bloßes IT-Projekt statt als Transformation mit Vorstandsführung, die **„Pilot-Falle“** (Dauerpiloten ohne Skalierung), unterschätztes Change Management (laut Skript betreffen 70 % der Herausforderungen Menschen und Prozesse) und zu ambitionierte Erstprojekte.`,
        },
        {
          type: 'flipcards',
          cards: [
            { front: '1 · Operative Effizienz', back: 'KI automatisiert kognitive Routinearbeit und kommt, anders als klassische Automatisierung, mit Variationen und Ausnahmen zurecht. Beispiel: Belege auslesen, E-Mails vorsortieren. KPI: Bearbeitungszeit pro Vorgang.' },
            { front: '2 · Entscheidungsqualität', back: 'KI wertet große Datenmengen aus und liefert datengestützte **Empfehlungen**, die Entscheidung bleibt beim Menschen. Beispiel: Kreditrisiko, Bestandsoptimierung. KPI: Fehlentscheidungsquote, Prognosegenauigkeit.' },
            { front: '3 · Kundenerlebnis', back: 'Personalisierung im großen Maßstab: Empfehlungen, Chatbots, vorausschauender Service. Steigert Zufriedenheit und Bindung bei sinkenden Servicekosten. KPI: CSAT, Antwortzeit, Abwanderung.' },
            { front: '4 · Produktinnovation', back: 'Neue Produkte und Geschäftsmodelle, die ohne KI undenkbar wären, z. B. vorausschauende Wartung als Service oder Sprachschnittstellen. KPI: Umsatz mit neuen Angeboten, Preisaufschlag.' },
            { front: '5 · Wettbewerbsanalyse', back: 'Marktsignale, Wettbewerberbewegungen und Kundenstimmung nahezu in Echtzeit auswerten; Frühwarnsysteme erkennen Veränderungen, bevor sie in den Finanzzahlen auftauchen. KPI: Reaktionszeit auf Marktänderungen.' },
          ],
        },
        {
          type: 'table',
          caption: 'Wettbewerbswirkung von KI nach Branche (nach Skript S. 21–22)',
          head: ['Branche', 'Wichtigste KI-Anwendungen', 'Wettbewerbswirkung'],
          rows: [
            ['Finanzdienstleistungen', 'Betrugserkennung, Kreditbewertung, Handel', 'Pflichtprogramm, um wettbewerbsfähig zu bleiben'],
            ['Gesundheitswesen', 'Diagnoseunterstützung, Medikamentenentwicklung', 'Neue Fähigkeiten, bessere Ergebnisse'],
            ['Einzelhandel', 'Empfehlungen, Bedarfsprognose, Automatisierung', 'Effizienz-Vorreiter setzen sich ab'],
            ['Fertigung', 'Vorausschauende Wartung, Qualitätskontrolle, Optimierung', 'Laut Skript 15–25 % Produktivitätsvorteil'],
            ['Professionelle Dienstleistungen', 'Recherche, Analyse, Content-Erstellung', 'Verändert Geschäftsmodelle und Preise'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: '1. Bessere KI', md: 'Ein Produkt oder Service wird durch KI spürbar besser, z. B. treffendere Empfehlungen.' },
            { title: '2. Mehr Nutzung', md: 'Mehr Kundinnen und Kunden nutzen das Angebot häufiger.' },
            { title: '3. Mehr Daten', md: 'Jede Nutzung erzeugt neue, passende Daten (Klicks, Rückmeldungen, Ergebnisse).' },
            { title: '4. Noch bessere KI', md: 'Mit den neuen Daten wird das Modell nachtrainiert. Das Schwungrad dreht sich weiter, und der Vorsprung wächst.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Daten-Schwungrad im Mittelstand',
          md: `Du musst nicht Amazon sein. Ein Heizungsbauer, dessen Wartungs-App Störungen dokumentiert, sammelt mit jedem Einsatz Daten für bessere Ausfallprognosen. Frag bei jedem Use Case: **Erzeugt die Nutzung Daten, mit denen die Lösung besser wird?** Solche Vorhaben schaffen laut Skript nachhaltigere Vorteile als einmalige Effizienzprojekte.`,
        },
        {
          type: 'table',
          caption: 'Die Werttreiber als Leitfragen für die Geschäftsführung',
          head: ['Werttreiber', 'Leitfrage', 'Typischer Denkfehler'],
          rows: [
            ['Operative Effizienz', 'Wo verlieren wir heute Zeit durch Routinearbeit mit vielen Ausnahmen?', '„Wir automatisieren erst mal irgendwas im Backoffice.“'],
            ['Entscheidungsqualität', 'Welche wiederkehrenden Entscheidungen würden mit besseren Daten besser?', 'Dashboards bauen, ohne zu klären, wer damit entscheidet'],
            ['Kundenerlebnis', 'Wo warten Kunden oder bekommen Standardantworten?', '„Die Konkurrenz hat einen Chatbot, also brauchen wir auch einen.“'],
            ['Produktinnovation', 'Welches Angebot wäre mit KI möglich, das es heute nicht gibt?', 'Innovation ohne Geschäftsmodell und Zahlungsbereitschaft'],
            ['Wettbewerbsanalyse', 'Welche Marktsignale erkennen wir heute zu spät?', 'Daten sammeln, aber nicht reagieren'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Vier strategische Fehler (Skript S. 23)',
          md: `1. **KI als IT-Projekt** behandeln statt als unternehmerische Transformation mit Führung von oben
2. **Pilot-Falle:** endlos pilotieren, nie in den Betrieb skalieren
3. **Change Management unterschätzen:** Die meisten Hürden betreffen Menschen und Prozesse, nicht Technik (Kapitel 4.5 und 7)
4. **Zu große Erstprojekte:** lieber gezielte Anwendungsfälle mit hohem Mehrwert`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Woher die Zahlen stammen – und wie weit Deutschland ist',
          md: `Das Skript ordnet die Werte „75 % Nutzung nach 55 %“ sowie „3,7-fache Rendite, Spitzenreiter über das Zehnfache“ dem McKinsey Global Survey zu. Genau diese Zahlenkombination veröffentlichte Microsoft im **Januar 2025** als Ergebnis einer von **Microsoft gesponserten IDC-Studie** zu **generativer KI** („2024 Business Opportunity of AI“): Nutzung 75 % (2024) nach 55 % (2023), Rendite das 3,7-Fache pro Dollar, bei Spitzenreitern 10,3-fach. Zitiere solche Werte deshalb mit Quelle, Auftraggeber und Bezug (generative KI, Selbstauskunft der Befragten).

Neuere und lokalere Zahlen ergänzen das Bild:
- **Stanford AI Index 2026:** Die organisationale KI-Nutzung weltweit erreichte **88 %**.
- **BCG „Where’s the Value in AI?“ (Oktober 2024):** Nur **22 %** der Unternehmen sind über den Proof of Concept hinaus und erzeugen einen gewissen Wert, nur **4 %** substanziellen Wert. Das bestätigt die „Pilot-Falle“ aus dem Skript.
- **Destatis (2025):** In Deutschland nutzten **26 %** der Unternehmen ab 10 Beschäftigten KI. Hohe Nutzungszahlen in Umfragen heißen also nicht, dass der Mittelstand schon weit ist. Mehr dazu in der folgenden Vertiefung.`,
          sources: [
            { title: 'Microsoft (14.01.2025): Generative AI delivering substantial ROI … (Microsoft-sponsored IDC report)', url: 'https://news.microsoft.com/source/emea/2025/01/generative-ai-delivering-substantial-roi-to-businesses-integrating-the-technology-across-operations-microsoft-sponsored-idc-report/' },
            { title: 'Stanford HAI: The 2026 AI Index Report', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report' },
            { title: 'BCG (2024): Where’s the Value in AI?', url: 'https://www.bcg.com/publications/2024/wheres-value-in-ai' },
            { title: 'Destatis: Unternehmen mit Nutzung von KI nach Beschäftigtengrößenklassen (2025)', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html' },
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: `**Eine KI-Strategie ist Unternehmensstrategie mit KI – nicht IT-Strategie mit Chatbot.** Sie setzt an den zentralen wertschöpfenden Aktivitäten an, verfolgt mehrere Werttreiber und baut, wo möglich, ein Daten-Schwungrad auf.`,
        },
        {
          type: 'praxis',
          title: 'Vom „Wir müssen was mit KI machen“ zur strategischen Frage',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg – Heizung, Sanitär, Wartungsverträge',
          scenario: `Der Geschäftsführer kommt von einer Messe zurück: „Alle reden von KI. Bis Jahresende will ich auch einen KI-Chatbot auf der Website.“ Du bist seit Kurzem als KI-Managerin im Unternehmen. Statt sofort ein Tool auszuwählen, holst du das Thema auf die strategische Ebene.`,
          steps: [
            'Du fragst nach den drei größten unternehmerischen Herausforderungen der nächsten zwei Jahre. Antwort: Fachkräftemangel im Büro, lange Angebotsdurchlaufzeiten, steigende Zahl an Wartungsverträgen.',
            'Du ordnest sie den fünf Werttreibern zu: Angebote (Effizienz), Wartungsplanung (Entscheidungsqualität), Erreichbarkeit für Kunden (Kundenerlebnis), Wartung als digitaler Service (Produktinnovation).',
            'Du prüfst, wo ein Daten-Schwungrad möglich ist: Jeder Wartungseinsatz erzeugt Störungsdaten, die künftige Ausfallprognosen verbessern.',
            'Du prüfst früh Risiken: Welche personenbezogenen Daten sind betroffen? Welche Daten dürfen in welche Cloud? Wer haftet für falsche Auskünfte eines Chatbots?',
            'Du legst der Geschäftsführung eine Seite mit drei strategischen Stoßrichtungen vor. Der Website-Chatbot ist eine Option unter mehreren, nicht der Startpunkt, und das erste Projekt bleibt bewusst klein.',
          ],
          takeaway: `Deine erste Aufgabe ist nicht die Toolauswahl, sondern die **Übersetzung von Geschäftszielen in KI-Fragestellungen**. Das schützt vor teuren „Leuchtturm-Projekten“ ohne Wirkung und vor der Pilot-Falle.`,
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne das Beispiel dem KI-Werttreiber zu.',
          pairs: [
            ['Lagerroboter beschleunigen die Kommissionierung', 'Operative Effizienz'],
            ['Dynamische Preisgestaltung auf Datenbasis', 'Entscheidungsqualität'],
            ['Personalisierte Produktempfehlungen', 'Kundenerlebnis'],
            ['Sprachassistent als neues Produkt', 'Produktinnovation'],
            ['Auswertung von Markttrends und Wettbewerberpreisen', 'Wettbewerbsanalyse'],
          ],
          explain: 'Das Skript zeigt am Beispiel Amazon, dass ein Unternehmen alle fünf Werttreiber gleichzeitig nutzen kann (S. 20).',
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Die „Pilot-Falle“ beschreibt, dass Organisationen KI dauerhaft pilotieren, ohne erfolgreiche Anwendungen in den Produktivbetrieb zu skalieren.',
          answer: true,
          explain: 'Richtig. Das Skript nennt die Pilot-Falle als einen der häufigsten strategischen Fehler (S. 23). BCG fand 2024 nur 22 % der Unternehmen jenseits des Proof of Concept mit erkennbarem Wert.',
        },
      ],
    },

    // ───────────────────────── Vertiefung zu 1.4 ─────────────────────────
    {
      id: 'k1-l5',
      title: 'Vertiefung: Wie verbreitet ist KI? Zahlen richtig lesen',
      minutes: 15,
      skript: { chapter: '1.4', page: 18, deepening: true },
      blocks: [
        {
          type: 'text',
          md: `„Alle machen jetzt KI!“ Diesen Satz hörst du in jeder zweiten Besprechung, und auch das Skript arbeitet mit eindrucksvollen Prozentwerten. Doch was heißt *alle*? Als KI-Managerin oder KI-Manager brauchst du **belastbare Zahlen**, um Investitionen zu begründen, den eigenen Betrieb einzuordnen und überzogenen Erwartungen zu begegnen.`,
        },
        {
          type: 'skript',
          chapter: '1.4',
          page: 18,
          md: `Das Skript belegt die strategische Dringlichkeit mit globalen Umfragewerten: 75 % regelmäßige KI-Nutzung, eine Verbreitung generativer KI schneller als Cloud, Mobilgeräte oder Internet und stark steigende KI-Ausgaben. Diese Vertiefung zeigt, **wie unterschiedlich** Verbreitungszahlen ausfallen, je nachdem, wer wen wann gefragt hat, und welche Werte für Unternehmen in Deutschland, Österreich und der EU gelten.`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Verbreitungszahlen (Stand Oktober 2026)',
          md: `- **Destatis (amtliche Statistik, Erhebung 2025):** 26 % der Unternehmen in Deutschland mit mindestens 10 Beschäftigten nutzten 2025 KI (2024: 20 %). Kleine Unternehmen (10–49 Beschäftigte) lagen bei 23 %, mittlere (50–249) bei 36 % und große (ab 250) bei 57 %. Die Ergebnisse der Erhebung 2026 sind für November/Dezember 2026 angekündigt.
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
            ['IDC (im Auftrag von Microsoft)', 'Führungskräfte weltweit, Nutzung *generativer* KI', '2024', '75 %'],
            ['Stanford AI Index', 'Organisationen weltweit (aus mehreren Quellen zusammengetragen)', '2025/26', '88 %'],
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Äpfel nicht mit Birnen vergleichen',
          md: `Die Zahlen unterscheiden sich vor allem wegen **Stichprobe** (ab 10 oder ab 20 Beschäftigten, nur Deutschland oder weltweit), **Zeitpunkt**, **Definition** (zählt schon ein einzelnes Chat-Konto als „Nutzung“?) und **Auftraggeber** (amtliche Statistik, Verband, Anbieter). Zitiere deshalb immer Quelle, Jahr und Grundgesamtheit, also etwa „26 % der Unternehmen ab 10 Beschäftigten (Destatis, 2025)“.`,
        },
        {
          type: 'table',
          caption: 'Warum Unternehmen KI (noch) nicht nutzen: Destatis 2025, Unternehmen, die einen Einsatz erwogen, aber nicht umgesetzt haben',
          head: ['Hemmnis', 'Anteil', 'Was du als KI-Manager/in tun kannst'],
          rows: [
            ['Fehlendes Wissen', '72 %', 'KI-Kompetenz aufbauen (Schulungen, Lernpfade, Pilotnutzende)'],
            ['Unklarheit über rechtliche Folgen', '62 %', 'Leitfaden zu AI Act und DSGVO, Freigabeprozess (Kapitel 5)'],
            ['Datenschutz und Privatsphäre', '60 %', 'Datenschutzkonforme Tools mit Auftragsverarbeitungsvertrag auswählen'],
            ['Inkompatibilität mit vorhandenen Systemen', '45 %', 'Schnittstellen prüfen, Low-Code-Integration (z. B. n8n)'],
            ['Verfügbarkeit oder Qualität der Daten', '44 %', 'Daten-Assessment vor dem Projekt (Kapitel 3)'],
            ['Kosten', '32 %', 'Klein starten, Business Case rechnen (Kapitel 2)'],
            ['Ethische Überlegungen', '23 %', 'Ethik-Leitlinien, Einbindung der Mitarbeitervertretung (Kapitel 5)'],
          ],
        },
        {
          type: 'text',
          md: `### Wofür KI genutzt wird

Laut Bitkom (2026) arbeitet KI am häufigsten im **Kundenkontakt**, etwa bei der Bearbeitung von Anfragen (72 %), sowie in **Marketing und Kommunikation** (54 %). Stark zugelegt haben **internes Wissensmanagement** (22 %, Vorjahr 11 %), **Controlling und Rechnungswesen** (25 %, Vorjahr 17 %) und KI in **eigenen Produkten** (20 %, Vorjahr 12 %). Gleichzeitig sagen 59 % der KI-nutzenden Unternehmen, dass sie das Potenzial von KI *überhaupt nicht* ausschöpfen. Die meisten stehen also noch am Anfang. Wie du den eigenen Stand ehrlich misst, zeigt Abschnitt 1.5.`,
        },
        {
          type: 'praxis',
          title: 'Mit Zahlen die Geschäftsführung überzeugen',
          company: 'Brenner Metallbau GmbH (fiktiv), 120 Mitarbeitende, Heilbronn',
          scenario: `Der Geschäftsführer ist skeptisch: „KI ist doch nur was für Konzerne.“ Du sollst in der Leitungsrunde in fünf Minuten zeigen, wo das Unternehmen im Vergleich steht und was die größten Hürden sind.`,
          steps: [
            'Ordne den Betrieb ein: Mit 120 Beschäftigten gehört er zu den mittleren Unternehmen. Davon nutzten 2025 laut Destatis 36 % KI.',
            'Nenne den Trend: Bei Bitkom stieg die Nutzung von 20 % auf 57 % in zwei Jahren. Gib dabei die andere Stichprobe an.',
            'Vermeide globale Rekordwerte ohne Kontext: Die 75 % aus dem Skript beziehen sich auf generative KI in einer weltweiten, anbietergesponserten Befragung.',
            'Spiegele die Hemmnisse: Frag im Team ab, welche der Destatis-Gründe (Wissen, Recht, Datenschutz …) auch bei euch zutreffen.',
            'Leite einen ersten Schritt ab: z. B. eine KI-Grundlagenschulung plus einen kleinen Pilot im Angebotswesen. Belege jede Zahl mit Quelle und Jahr auf der Folie.',
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

    // ───────────────────────── 1.5 ─────────────────────────
    {
      id: 'k1-l6',
      title: '1.5 Organisatorische KI-Bereitschaft bewerten',
      minutes: 25,
      skript: { chapter: '1.5', page: 23 },
      blocks: [
        {
          type: 'text',
          md: `Viele KI-Projekte scheitern nicht an der Idee, sondern daran, dass die Organisation **noch nicht bereit** ist: Die Daten liegen verstreut, niemand ist verantwortlich, die Geschäftsführung schaut nur zu. Bevor du große Vorhaben startest, brauchst du deshalb eine ehrliche **Standortbestimmung**. Dieser Abschnitt gibt dir das Werkzeug dafür.`,
        },
        {
          type: 'skript',
          chapter: '1.5',
          page: 23,
          quote: 'Die häufigste Bereitschaftslücke betrifft Datenqualität und Datenzugänglichkeit.',
          md: `**Kernaussagen des Abschnitts (S. 23–28):**

- **KI-Bereitschaft** ist die Fähigkeit einer Organisation, KI erfolgreich einzuführen und zu skalieren. Sie umfasst mehr als Technik: Infrastruktur, Datenreife, Kompetenzen, Kultur und Engagement der Geschäftsführung. Hohe Bereitschaft bringt schnellere Wertschöpfung, höheren ROI und weniger Risiko; fehlende Bereitschaft führt zu gescheiterten Piloten, verschwendetem Geld und demotivierten Teams.
- Die Bewertung liefert eine **Ausgangsbasis** für Investitionsplanung und zeigt Kompetenzlücken. Reifegradmodelle teilen meist dieselben Dimensionen. Viele Organisationen **überschätzen** ihre Bereitschaft.
- **Fünf Dimensionen:** *Strategie* (Rückhalt der Geschäftsleitung, KI-Vision, priorisierte Use Cases), *Daten* (Qualität, Zugänglichkeit, Governance – oft der größte Engpass), *Technologie* (Cloud, Werkzeuge, Rechenleistung, MLOps – oft am leichtesten lösbar), *Personal* (Fachkräfte, Weiterbildung, Talente halten – Lücken lassen sich nicht einfach „freikaufen“), *Governance* (Richtlinien, Ethik, Rollen, Kontrollen).
- **Selbsteinschätzung:** jede Dimension von 1 (große Lücken) bis 5 (branchenführend) bewerten, Durchschnitt bilden. **Unter 2,5:** grundlegende Lücken zuerst schließen. **Über 4,0:** bereit für ambitionierte Vorhaben. Eine Checkliste mit je vier Prüfpunkten pro Dimension hilft beim Einstieg; vertiefend nennt das Skript das AI Adoption Framework von Google Cloud und das AI Maturity Model von Microsoft.
- **Vier Reifegradstufen:** Einsteiger, Aufbauend, Fortgeschritten, Vorreiter, jeweils mit passenden Maßnahmen. **Immer nur eine Stufe auf einmal** nehmen.
- **Kultur:** KI-reife Kulturen experimentieren, akzeptieren Scheitern, entscheiden datenbasiert statt nach Hierarchie und arbeiten bereichsübergreifend. Kulturwandel dauert Jahre.
- **Führung:** Unterstützung durch die Geschäftsleitung ist der wirksamste Faktor; laut Skript sind Initiativen mit aktivem Vorstandsrückhalt dreimal häufiger erfolgreich. Führungskräfte brauchen keine Technikexpertise, aber strategisches Verständnis, Ressourcen und Durchhaltevermögen.
- **Typische Fehler:** geschönte Anbieter-Assessments, fehlende ehrliche Selbstreflexion, ignorierte Ergebnisse, einmalige statt regelmäßige Bewertung. Bei großen Lücken ist ein **Kompetenzaufbau über 12–24 Monate** die richtige Antwort, nicht ein Projekt, das zum Scheitern verurteilt ist.`,
        },
        {
          type: 'table',
          caption: 'Die fünf Dimensionen der KI-Bereitschaft',
          head: ['Dimension', 'Leitfrage', 'Warnsignal'],
          rows: [
            ['**Strategie**', 'Versteht und unterstützt die Geschäftsleitung KI, gibt es eine Vision und priorisierte Use Cases?', 'KI ist eine „technische Spielerei“ ohne Budget und Rückhalt'],
            ['**Daten**', 'Sind Daten in ausreichender Qualität zugänglich, integrierbar und geregelt?', 'Daten in Silos, Excel-Insellösungen, niemand verantwortlich'],
            ['**Technologie**', 'Gibt es Cloud-Plattformen, Werkzeuge, Rechenleistung und MLOps für den Betrieb?', 'Jedes Projekt baut seine eigene Insel'],
            ['**Personal**', 'Gibt es KI-Kompetenz, Weiterbildung und die Fähigkeit, Fachkräfte zu gewinnen und zu halten?', 'Ein einzelner „KI-Enthusiast“ trägt alles'],
            ['**Governance**', 'Gibt es Richtlinien, ethische Leitlinien, klare Rollen und Kontrollen?', 'Schatten-KI, keine Regeln, unklare Verantwortung'],
          ],
        },
        {
          type: 'table',
          caption: 'Checkliste zur Selbsteinschätzung (nach Skript S. 26, in eigenen Worten)',
          head: ['Dimension', 'Prüfpunkte', 'Bewertung'],
          rows: [
            ['Strategie', 'Geschäftsleitung versteht KI · Strategiedokument wird genutzt · Budget vorhanden · Use Cases priorisiert', '__ / 5'],
            ['Daten', 'Qualität wird gemessen · Zugriff über Silos hinweg · Daten-Governance-Regeln · genug historische Daten', '__ / 5'],
            ['Technologie', 'Cloud-Infrastruktur · Entwicklungs- und Bereitstellungswerkzeuge · ausreichende Rechenressourcen · Sicherheits- und Datenschutzkontrollen', '__ / 5'],
            ['Personal', 'KI-/ML-Kompetenz im Haus · aktive Weiterbildung · Fachkräfte gewinnen und halten · bereichsübergreifende Zusammenarbeit', '__ / 5'],
            ['Governance', 'Ethische Leitlinien · Rollen und Verantwortlichkeiten · KI-Risikomanagement · Compliance-Mechanismen', '__ / 5'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: '1. Team zusammenstellen', md: 'Geschäftsführung, IT, Fachbereiche, Datenschutz und, wo vorhanden, Betriebsrat. Eine Person allein bewertet zu optimistisch.' },
            { title: '2. Jede Dimension bewerten', md: 'Pro Dimension 1 bis 5 Punkte vergeben und jede Zahl mit einem Beleg begründen (z. B. „Kundendaten liegen in drei Systemen ohne Abgleich“).' },
            { title: '3. Durchschnitt bilden', md: 'Summe der fünf Werte geteilt durch 5. Zusätzlich die **schwächste Dimension** markieren: Hervorragende Technik gleicht schwache Daten oder Governance nicht aus.' },
            { title: '4. Ergebnis deuten', md: '**Unter 2,5:** Grundlagen schaffen, bevor größer investiert wird. **Über 4,0:** bereit für ambitionierte Vorhaben. **Dazwischen** (eigene Lesart): gezielte Piloten in den starken Bereichen und die Lücken parallel schließen.' },
            { title: '5. Roadmap ableiten und wiederholen', md: 'Maßnahmen für 12–24 Monate planen und die Bewertung regelmäßig, z. B. jährlich, wiederholen. Bereitschaft ist dynamisch.' },
          ],
        },
        {
          type: 'table',
          caption: 'Reifegradstufen und passende Maßnahmen (nach Skript S. 27)',
          head: ['Stufe', 'Merkmale', 'Empfohlene Maßnahmen'],
          rows: [
            ['**Einsteiger**', 'KI wird erkundet, wenige Piloten, unstrukturierter Datenzugang', 'Strategische Ausrichtung schaffen, Datenqualität bewerten, Weiterbildung starten'],
            ['**Aufbauend**', 'Strategische Ausrichtung, erste Systeme im Einsatz, Infrastruktur wird verbessert', 'Erfolgreiche Piloten skalieren, Daten-Governance stärken, KI-Team aufbauen'],
            ['**Fortgeschritten**', 'Mehrere Produktivsysteme, robuste Dateninfrastruktur, wachsender Fachkräftepool', 'Weitere Use Cases, MLOps einführen, KI-Kompetenzzentrum aufbauen (Kapitel 7)'],
            ['**Vorreiter**', 'KI unternehmensweit eingebettet, ausgefeilte Governance, klarer Wettbewerbsvorteil', 'Optimieren und skalieren, Best Practices teilen, Branchenstandards mitprägen'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: `**Daten zuerst, eine Stufe nach der anderen.** Mangelhafte Daten garantieren KI-Misserfolg, egal wie gut Algorithmen oder Infrastruktur sind. Und eine Bereitschaftsbewertung begründet eine **mehrjährige Kompetenz-Roadmap**, keine sofortige Großinvestition.`,
        },
        {
          type: 'text',
          md: `### Kultur und Führung: die unterschätzten Faktoren

Das Skript hebt zwei Faktoren besonders hervor:

- **Kultur:** KI-reife Organisationen probieren aus, akzeptieren, dass viele Experimente scheitern, entscheiden nach Daten statt nach Hierarchie und arbeiten über Abteilungsgrenzen hinweg. Risikoscheue Kulturen, die Fehler bestrafen, Bauchgefühl folgen oder in Silos arbeiten, tun sich schwer. Schnelllösungen gibt es nicht. Wie du Kultur gezielt entwickelst, behandeln Kapitel 4.5 und 7.4.
- **Führung:** Wirksame KI-Führungskräfte müssen nicht programmieren können. Sie verstehen die strategischen Auswirkungen, stellen Ressourcen bereit, räumen bürokratische Hindernisse aus dem Weg, sorgen für Zusammenarbeit über Bereiche hinweg und halten Kurs, wenn es schwierig wird.`,
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Vier Fehler bei der Bereitschaftsbewertung',
          md: `1. **Anbieter-Assessments** blind übernehmen: Sie blähen den Reifegrad oft auf, um Verkäufe zu rechtfertigen.
2. **Schönfärben** statt ehrlicher Selbstreflexion
3. **Ergebnisse ignorieren**, nachdem die Bewertung gemacht ist
4. **Nur einmal bewerten:** Fähigkeiten und Anforderungen ändern sich, also regelmäßig wiederholen`,
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Die genannten Reifegrad-Rahmenwerke heute',
          md: `- **Google Cloud AI Adoption Framework (2020):** Es baut auf vier Bereichen auf (Menschen, Prozesse, Technologie, Daten) und leitet daraus sechs Themen ab: **Lead, Learn, Access, Scale, Automate, Secure**. Jedes Thema wird einer von drei Reifephasen zugeordnet: **taktisch, strategisch, transformativ**.
- **Microsoft:** Das Skript nennt ein „AI Maturity Model“. Aktuell bündelt Microsoft seine Empfehlungen zur KI-Einführung im **Cloud Adoption Framework für KI** mit den Phasen *Plan, Ready, Govern, Secure, Manage* und betont Führung, zentrale Governance (z. B. ein AI Center of Excellence) und geschulten Zugang für Beschäftigte. Beachte: Beide Rahmenwerke stammen von Cloud-Anbietern und führen naturgemäß zu deren Produkten.
- **Anbieterneutral und kostenfrei:** Die **European Digital Innovation Hubs** bieten u. a. ein Digital Maturity Assessment an, die **Mittelstand-Digital Zentren** beraten KMU kostenfrei (siehe Kapitel 2.3).`,
          sources: [
            { title: 'Google Cloud Blog (29.06.2020): Build a transformative AI capability with AI Adoption Framework', url: 'https://cloud.google.com/blog/products/ai-machine-learning/build-a-transformative-ai-capability-with-ai-adoption-framework' },
            { title: 'Microsoft Learn: AI adoption – Cloud Adoption Framework', url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/' },
            { title: 'European Digital Innovation Hubs', url: 'https://european-digital-innovation-hubs.ec.europa.eu/home' },
          ],
        },
        {
          type: 'praxis',
          title: 'Readiness-Check vor dem ersten großen KI-Projekt',
          company: 'Kerner Feinkost GmbH (fiktiv), 160 Mitarbeitende, Lebensmittelgroßhandel bei Würzburg',
          scenario: `Die Geschäftsführung möchte „im nächsten Quartal“ eine KI-gestützte Bedarfsprognose für 4.000 Artikel einführen und hat bereits ein Angebot eines Softwareanbieters, inklusive dessen „KI-Reifegrad-Analyse“, die dem Unternehmen eine 4 von 5 bescheinigt. Du moderierst eine eigene Selbsteinschätzung mit Geschäftsführung, Einkauf, Lager, IT und Datenschutz.`,
          steps: [
            'Das Team bewertet: Strategie 3 (Rückhalt da, aber kein Strategiedokument), Daten 2 (Abverkaufsdaten in zwei Warenwirtschaftssystemen, Artikelstammdaten uneinheitlich), Technologie 3 (Cloud-ERP, aber kein MLOps), Personal 2 (keine Data-Science-Kompetenz), Governance 1 (keine KI-Richtlinie, Schatten-KI im Vertrieb).',
            'Durchschnitt: (3 + 2 + 3 + 2 + 1) / 5 = 2,2. Das liegt unter 2,5, also grundlegende Lücken. Stufe: Einsteiger. Die Anbieter-Bewertung (4/5) war deutlich zu optimistisch.',
            'Schwächste Dimensionen: Governance und Daten. Ohne saubere Stammdaten wird jede Prognose unzuverlässig.',
            'Roadmap über 18 Monate: KI-Richtlinie und Verantwortliche (Monat 1–3), Stammdatenbereinigung und Zusammenführung der Abverkaufsdaten (Monat 1–9), Schulungen für Einkauf und Lager (laufend), danach Pilot der Bedarfsprognose für eine Warengruppe.',
            'Wiederholung des Checks nach 12 Monaten, Ziel: Durchschnitt über 3,0 und keine Dimension unter 2.',
          ],
          takeaway: `Eine ehrliche Selbsteinschätzung bewahrt vor einem Projekt, das an seinen Voraussetzungen scheitern würde. Sie macht aus „Wir sind noch nicht so weit“ einen **konkreten Fahrplan**.`,
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze das Ergebnis der Selbsteinschätzung.',
          text: 'Ein Unternehmen bewertet sich mit 4, 3, 2, 2 und 2 Punkten. Der Durchschnitt beträgt {{2,6|2.6}}. Laut Skript gilt ein Wert unter {{2,5|2.5}} als Hinweis auf grundlegende Bereitschaftslücken.',
          explain: '(4 + 3 + 2 + 2 + 2) / 5 = 13 / 5 = 2,6. Das liegt knapp über der Schwelle von 2,5, aber drei Dimensionen sind schwach. Deshalb immer auch auf die schwächste Dimension schauen.',
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die Reifegradstufen aus dem Skript in die richtige Reihenfolge.',
          items: ['Einsteiger', 'Aufbauend', 'Fortgeschritten', 'Vorreiter'],
          explain: 'Organisationen sollten jeweils eine Stufe vorankommen, statt Stufen überspringen zu wollen (Skript S. 27).',
        },
      ],
    },
  ],

  // ───────────────────────── Quiz ─────────────────────────
  quiz: [
    {
      type: 'single',
      q: 'Was unterscheidet laut Skript KI-Systeme grundlegend von herkömmlicher Software?',
      options: ['Sie laufen immer in der Cloud', 'Sie lernen Muster aus Daten, statt nur explizit programmierten Regeln zu folgen', 'Sie haben eine grafische Benutzeroberfläche', 'Sie sind empfindungsfähig'],
      answer: 1,
      explain: 'KI-Systeme lernen aus Daten und verbessern sich, statt für jedes Szenario programmiert zu werden (Skript 1.1, S. 4). Der AI Act stellt auf das „Ableiten“ aus Eingaben ab.',
    },
    {
      type: 'tf',
      q: 'Allgemeine KI (AGI), also eine in allen kognitiven Aufgaben menschenähnliche KI, ist heute bereits in Unternehmen im Einsatz.',
      answer: false,
      explain: 'AGI bleibt laut Skript ein theoretisches Konzept. Alle heute eingesetzten Systeme, auch große Sprachmodelle, sind schwache KI.',
    },
    {
      type: 'order',
      q: 'Bringe die Schichten des Zwiebelmodells von außen nach innen in die richtige Reihenfolge.',
      items: ['Künstliche Intelligenz', 'Machine Learning', 'Deep Learning', 'Große Sprachmodelle (LLMs)'],
      explain: 'KI ist der Oberbegriff, ML eine Teilmenge, Deep Learning eine Teilmenge von ML, und LLMs sind spezielle Deep-Learning-Modelle.',
    },
    {
      type: 'single',
      q: 'Ein Unternehmen hat 50.000 historische Reklamationen, jeweils mit der festgestellten Ursache. Welche Lernart passt, um die Ursache neuer Reklamationen vorherzusagen?',
      options: ['Unüberwachtes Lernen', 'Überwachtes Lernen', 'Bestärkendes Lernen', 'Gar kein Lernen, nur Regeln'],
      answer: 1,
      explain: 'Es gibt Beispiele mit bekannter richtiger Antwort (Label). Das ist der klassische Fall für überwachtes Lernen, das laut Skript geschäftliche Anwendungen dominiert.',
    },
    {
      type: 'match',
      q: 'Ordne das Merkmal dem passenden Ansatz zu (nach Skript S. 11).',
      pairs: [
        ['Merkmale werden automatisch aus Rohdaten gelernt', 'Deep Learning'],
        ['Fachleute legen relevante Merkmale manuell fest', 'Klassisches Machine Learning'],
        ['Braucht typischerweise Millionen Beispiele und GPUs', 'Deep Learning'],
        ['Oft nachvollziehbar, stark bei Tabellendaten', 'Klassisches Machine Learning'],
      ],
      explain: 'Deep Learning ist nicht immer überlegen: Bei strukturierten Geschäftsdaten ist klassisches ML oft besser und günstiger.',
    },
    {
      type: 'cloze',
      q: 'Ergänze den Fachbegriff.',
      text: 'Wenn ein Modell die Trainingsbeispiele auswendig lernt und bei neuen Fällen versagt, spricht man von {{Overfitting|Überanpassung}}. Ändern sich die Muster in den realen Daten im Lauf der Zeit, spricht man von {{Datendrift|Drift|Data Drift}}.',
      explain: 'Beide nennt das Skript als typische Stolperfallen (S. 11). Drift-Erkennung behandelt Kapitel 6.',
    },
    {
      type: 'multi',
      q: 'Welche Einsatzfelder generativer KI nennt das Skript? (Mehrfachauswahl)',
      options: ['Content-Erstellung', 'Kundenservice', 'Datenanalyse', 'Softwareentwicklung', 'Beschleunigung von Wissensarbeit', 'Ersatz jeglicher menschlicher Kontrolle'],
      answer: [0, 1, 2, 3, 4],
      explain: 'Das Skript nennt fünf Einsatzfelder (S. 17) und betont, dass generative KI Fachleute verstärkt, aber nicht ohne Kontrolle ersetzt.',
    },
    {
      type: 'single',
      q: 'Warum können große Sprachmodelle „halluzinieren“?',
      options: ['Weil sie absichtlich lügen', 'Weil sie plausiblen Text aus statistischen Mustern vorhersagen, ohne Aussagen an der Realität prüfen zu können', 'Weil sie zu wenig Strom bekommen', 'Weil sie nur Bilder verarbeiten'],
      answer: 1,
      explain: 'LLMs sagen Token für Token plausiblen Text vorher. Sie haben kein Faktenwissen im klassischen Sinn und keinen Weltbezug (Skript S. 16).',
    },
    {
      type: 'match',
      q: 'Ordne das Branchenbeispiel aus dem Skript der Branche zu.',
      pairs: [
        ['Prüfung juristischer Dokumente in Sekunden (COIN)', 'Finanzdienstleistungen'],
        ['Kassenlose Geschäfte per Bildverarbeitung', 'Einzelhandel'],
        ['Geräteausfälle vorab vorhersagen', 'Fertigung'],
        ['Bilddiagnostik in Radiologie und Pathologie', 'Gesundheitswesen'],
      ],
      explain: 'Die Beispiele stammen aus Skript 1.4 (S. 21). In der Finanzbranche ist KI laut Skript bereits Pflichtprogramm.',
    },
    {
      type: 'single',
      q: 'Was beschreibt der „Daten-Schwungradeffekt“?',
      options: ['Daten verlieren mit der Zeit an Wert', 'Bessere KI zieht mehr Kunden an, die mehr Daten erzeugen, was die KI weiter verbessert', 'Daten werden auf rotierenden Festplatten gespeichert', 'Ein Schwungrad zur Kühlung von Rechenzentren'],
      answer: 1,
      explain: 'Das Schwungrad erzeugt sich selbst verstärkende Vorteile. Das Skript rät, solche Use Cases in der Strategie zu bevorzugen (S. 22).',
    },
    {
      type: 'multi',
      q: 'Welche typischen strategischen Fehler nennt das Skript in Abschnitt 1.4? (Mehrfachauswahl)',
      options: ['KI als reines IT-Projekt behandeln', 'Die Pilot-Falle', 'Change Management unterschätzen', 'Mit gezielten, wertvollen Anwendungsfällen beginnen', 'Zu ambitionierte Erstprojekte'],
      answer: [0, 1, 2, 4],
      explain: 'Mit gezielten Anwendungsfällen mit hohem Mehrwert zu beginnen ist die Empfehlung, kein Fehler (Skript S. 23).',
    },
    {
      type: 'multi',
      q: 'Welche fünf Dimensionen umfasst die KI-Bereitschaft laut Skript? (Mehrfachauswahl)',
      options: ['Strategie', 'Daten', 'Technologie', 'Personal', 'Governance', 'Marketingbudget'],
      answer: [0, 1, 2, 3, 4],
      explain: 'Strategie, Daten, Technologie, Personal (Menschen) und Governance (Skript 1.5, S. 24–25). Die Datendimension ist oft der größte Engpass.',
    },
    {
      type: 'single',
      q: 'Eine Selbsteinschätzung ergibt einen Durchschnitt von 2,2. Was ist laut Skript die richtige Reaktion?',
      options: ['Sofort ein großes Transformationsprojekt starten', 'Systematischen Kompetenzaufbau über 12–24 Monate planen', 'Die Bewertung ignorieren und einem Anbieter-Assessment folgen', 'Auf die Stufe „Vorreiter“ springen'],
      answer: 1,
      explain: 'Unter 2,5 bestehen grundlegende Lücken. Die Bewertung soll eine mehrjährige Kompetenz-Roadmap begründen, keine sofortige Großinvestition (Skript S. 28).',
    },
    {
      type: 'tf',
      q: 'Die im Skript McKinsey zugeschriebene Kombination „75 % Nutzung nach 55 %“ und „3,7-fache Rendite“ findet sich in einer von Microsoft gesponserten IDC-Studie zu generativer KI.',
      answer: true,
      explain: 'Microsoft veröffentlichte diese Werte im Januar 2025 als Ergebnis der IDC-Studie „2024 Business Opportunity of AI“. Zahlen deshalb immer mit Quelle, Auftraggeber und Bezug zitieren.',
    },
  ],

  // ───────────────────────── Übungen ─────────────────────────
  exercises: [
    {
      id: 'k1-e1',
      title: 'KI oder nicht KI? Vier Tools einordnen',
      scenario: `Du bist neu als KI-Beauftragte/r bei der **Stadtverwaltung Lindenau (fiktiv)**, rund 400 Beschäftigte. Für ein KI-Register sollst du vier Anwendungen einordnen: (A) ein Formular-Assistent, der Pflichtfelder nach festen Regeln prüft, (B) eine Software, die eingescannte Anträge automatisch der richtigen Fachabteilung zuordnet und mit Beispielen trainiert wurde, (C) ein Chatbot auf Basis eines großen Sprachmodells für Bürgeranfragen, (D) eine Ampelschaltung, die per Kamera Fahrzeuge zählt und die Grünphasen anpasst.`,
      task: `Entscheide für jede Anwendung, ob es sich **wahrscheinlich um KI** handelt (Skript-Definition und Art. 3 Nr. 1 AI Act), und begründe es. Ordne jede KI-Anwendung außerdem ein: **diskriminativ oder generativ**, **klassisches ML oder Deep Learning** und, wo möglich, eine **Lernart**.`,
      deliverable: 'Tabelle mit vier Zeilen (Tool, KI ja/nein, Begründung, diskriminativ/generativ, ML/DL, Lernart) plus 2–3 Sätze Fazit',
      template: `| Tool | KI? | Begründung | diskriminativ/generativ | ML/DL | Lernart |
|---|---|---|---|---|---|
| A Formular-Assistent | | | | | |
| B Antragszuordnung | | | | | |
| C Bürger-Chatbot | | | | | |
| D Ampelschaltung | | | | | |

Fazit: …`,
      rubric: [
        { criterion: 'Grenzt mit dem Kernmerkmal Lernen/Ableiten statt fester Regeln ab', keywords: ['ableit', 'inferenz', 'regel', 'gelernt', 'lernt', 'muster'], min: 2, hint: 'Was unterscheidet laut Skript und AI Act ein KI-System von reiner Regelautomatisierung?' },
        { criterion: 'Ordnet A als (wahrscheinlich) keine KI ein', keywords: ['kein ki', 'nicht ki', 'keine ki', 'kein ki-system', 'regelbasiert', 'feste regeln'], min: 1, hint: 'Der Formular-Assistent prüft nur Pflichtfelder nach festen Regeln. Lernt er etwas?' },
        { criterion: 'Unterscheidet diskriminative und generative KI', keywords: ['diskrimin', 'generativ', 'klassifi'], min: 2, hint: 'Welche Tools ordnen ein, welches erzeugt neue Inhalte?' },
        { criterion: 'Ordnet ML/Deep Learning und Lernarten plausibel zu', keywords: ['deep learning', 'überwacht', 'supervised', 'selbstüberwacht', 'vortrain', 'neuronal', 'bestärk'], min: 2, hint: 'Gescannte Dokumente und Kamerabilder sind unstrukturiert. Welcher Ansatz passt dazu?' },
      ],
      hints: [
        'Nimm dir die Spamfilter-Tabelle aus Lektion 1.1 vor: feste Regeln oder gelernte Muster?',
        'Unstrukturierte Daten (Bilder, Scans, Freitext) sprechen für Deep Learning; ein Chatbot, der Texte formuliert, ist generativ.',
        'Bei D lohnt der Blick auf zwei Teile: die Fahrzeugzählung per Kamera (gelernt?) und die Steuerung der Grünphasen (Regeln oder gelernte Strategie?). Frag im Zweifel beim Hersteller nach.',
      ],
      sample: `| Tool | KI? | Begründung | diskriminativ/generativ | ML/DL | Lernart |
|---|---|---|---|---|---|
| A Formular-Assistent | **Nein** (wahrscheinlich) | Führt nur von Menschen festgelegte Regeln aus, lernt nichts (EG 12 AI Act) | – | – | – |
| B Antragszuordnung | **Ja** | Hat aus gelabelten Beispielen gelernt, welche Abteilung zuständig ist | diskriminativ (Klassifikation) | Deep Learning für Scan/Text (OCR, NLP) | überwacht |
| C Bürger-Chatbot | **Ja** | LLM erzeugt neue Texte aus gelernten Sprachmustern | generativ | Deep Learning (LLM) | selbstüberwacht vortrainiert, ggf. Feinabstimmung mit menschlichem Feedback |
| D Ampelschaltung | **Ja** (wahrscheinlich) | Kamera-Erkennung leitet Fahrzeuganzahl aus Bildern ab, die Ausgabe beeinflusst die physische Umgebung | diskriminativ (Objekterkennung) | Deep Learning (Computer Vision) | überwacht; Steuerung je nach Hersteller regelbasiert oder bestärkend |

**Fazit:** Drei der vier Anwendungen sind voraussichtlich KI und gehören ins KI-Register. Bei D sollte die Verwaltung die genaue Funktionsweise beim Hersteller erfragen. Für den Chatbot gelten zusätzlich Transparenzpflichten (Art. 50 AI Act), und wegen möglicher Halluzinationen braucht er klare Grenzen und eine Übergabe an Menschen.`,
    },
    {
      id: 'k1-e2',
      title: 'KI-Bereitschaftscheck für einen Mittelständler',
      scenario: `Die **Sander Kunststofftechnik GmbH (fiktiv)**, 210 Mitarbeitende, Spritzguss für die Autoindustrie, Ostwestfalen. Aus Gesprächen weißt du: Der Geschäftsführer hält KI für „wichtig“, es gibt aber weder Budget noch Strategiepapier. Maschinendaten werden seit drei Jahren in einem MES erfasst, Qualitätsdaten liegen in Excel-Listen je Schicht. Die IT (4 Personen) betreibt ein Cloud-ERP, ML-Werkzeuge gibt es nicht. Ein Werkstudent hat privat mit Bilderkennung experimentiert, eine Weiterbildung gibt es nicht. Mehrere Mitarbeitende nutzen kostenlose Chatbots, Regeln dazu fehlen.`,
      task: `Bewerte die KI-Bereitschaft in den **fünf Dimensionen** (je 1–5, mit Begründung), berechne den **Durchschnitt**, ordne das Unternehmen einer **Reifegradstufe** zu und leite die **drei wichtigsten Maßnahmen** für die nächsten 12–24 Monate ab. Nenne einen **typischen Bewertungsfehler**, den du vermeiden willst.`,
      deliverable: 'Bewertungstabelle (5 Zeilen) plus 150–250 Wörter Einordnung und Maßnahmen',
      template: `| Dimension | Punkte (1–5) | Begründung |
|---|---|---|
| Strategie | | |
| Daten | | |
| Technologie | | |
| Personal | | |
| Governance | | |

Durchschnitt: …
Reifegradstufe: …
Maßnahmen (12–24 Monate): 1. … 2. … 3. …
Bewertungsfehler, den ich vermeide: …`,
      rubric: [
        { criterion: 'Bewertet alle fünf Dimensionen', keywords: ['strategie', 'daten', 'technolog', 'personal', 'governance'], min: 5, hint: 'Hast du Strategie, Daten, Technologie, Personal und Governance jeweils bewertet?' },
        { criterion: 'Berechnet den Durchschnitt und deutet ihn mit den Schwellen des Skripts', keywords: ['durchschnitt', '2,5', '4,0', 'schwelle', 'lücke'], min: 2, hint: 'Welche Bedeutung haben Werte unter 2,5 und über 4,0?' },
        { criterion: 'Ordnet eine Reifegradstufe zu', keywords: ['einsteiger', 'aufbauend', 'fortgeschritten', 'vorreiter'], min: 1, hint: 'Welche der vier Stufen passt zu „wenige Experimente, keine Produktivsysteme“?' },
        { criterion: 'Leitet passende Maßnahmen mit Zeithorizont ab', keywords: ['richtlinie', 'weiterbild', 'schulung', 'daten', 'budget', 'strategie', 'monat', 'roadmap'], min: 3, hint: 'Welche Maßnahmen empfiehlt das Skript für Einsteiger? Und was hilft gegen Schatten-KI?' },
        { criterion: 'Benennt einen typischen Bewertungsfehler', keywords: ['anbieter', 'ehrlich', 'ignor', 'einmal', 'regelmäßig', 'schönfärb'], min: 1, hint: 'Denk an die vier Fehler aus Lektion 1.5.' },
      ],
      hints: [
        'Gehe die Checkliste aus Lektion 1.5 Dimension für Dimension durch und such im Szenario nach Belegen.',
        'Die Maschinendaten sind ein Pluspunkt bei den Daten, die Excel-Qualitätslisten ein Minuspunkt. Die fehlenden Regeln zur Chatbot-Nutzung betreffen die Governance.',
        'Ein plausibles Ergebnis liegt knapp über 2: Stufe Einsteiger. Typische erste Maßnahmen: Strategie und Budget, KI-Richtlinie gegen Schatten-KI, Qualitätsdaten digitalisieren, Weiterbildung starten.',
      ],
      sample: `| Dimension | Punkte | Begründung |
|---|---|---|
| Strategie | 2 | Geschäftsführer sieht Bedeutung, aber kein Budget, keine Strategie, keine priorisierten Use Cases |
| Daten | 3 | Drei Jahre MES-Maschinendaten (gut), Qualitätsdaten verstreut in Excel je Schicht (schwach) |
| Technologie | 2 | Cloud-ERP vorhanden, aber keine ML-Werkzeuge, kein MLOps |
| Personal | 2 | Kleines IT-Team, ein interessierter Werkstudent, keine Weiterbildung |
| Governance | 1 | Schatten-KI mit kostenlosen Chatbots, keine Richtlinie, keine Rollen |

**Durchschnitt:** (2 + 3 + 2 + 2 + 1) / 5 = **2,0**, also unter 2,5: grundlegende Lücken. **Stufe: Einsteiger.**

**Maßnahmen (12–24 Monate):**
1. *Governance sofort:* KI-Richtlinie, freigegebenes Chat-Tool mit Auftragsverarbeitungsvertrag, verantwortliche Person (Monat 1–3).
2. *Strategie und Daten:* Budget und ein zweiseitiges Strategiepapier mit zwei priorisierten Use Cases; Qualitätsdaten digital im MES statt in Excel erfassen (Monat 1–9).
3. *Personal:* Grundlagenschulung für Führungskräfte und Fachbereiche, gezielte Weiterbildung für zwei IT-Mitarbeitende; erst danach ein Pilot, z. B. Ausschussprognose aus Maschinendaten.

**Bewertungsfehler, den ich vermeide:** keine einmalige Bewertung. Wir wiederholen den Check nach 12 Monaten und lassen ihn nicht von einem Anbieter durchführen, der uns gleichzeitig Software verkaufen will.`,
    },
  ],

  glossary: [
    { term: 'Künstliche Intelligenz (KI)', def: 'Fähigkeit von Computersystemen, Aufgaben auszuführen, die typischerweise menschliche Intelligenz erfordern, erreicht durch Lernen aus Daten statt explizit programmierter Regeln (Skript 1.1).' },
    { term: 'KI-System (AI Act)', def: 'Maschinengestütztes System, das mit unterschiedlichem Grad an Autonomie arbeitet und aus Eingaben ableitet, wie es Ausgaben wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen erzeugt (Art. 3 Nr. 1 VO (EU) 2024/1689).' },
    { term: 'Schwache KI (Narrow AI)', def: 'KI, die für eine bestimmte Aufgabe entwickelt wurde. Alle heute eingesetzten KI-Systeme gehören dazu.' },
    { term: 'Allgemeine KI (AGI)', def: 'Hypothetische KI mit menschenähnlichem Denkvermögen über alle kognitiven Aufgaben hinweg. Bisher nicht erreicht.' },
    { term: 'Machine Learning (ML)', def: 'Teilbereich der KI, in dem Algorithmen Muster aus Daten lernen und damit Vorhersagen oder Entscheidungen treffen.' },
    { term: 'Deep Learning', def: 'ML mit neuronalen Netzen aus vielen Schichten; besonders stark bei unstrukturierten Daten wie Bild, Audio und Text.' },
    { term: 'Overfitting', def: 'Überanpassung: Ein Modell lernt Trainingsbeispiele auswendig, statt verallgemeinerbare Muster zu erkennen, und versagt bei neuen Fällen.' },
    { term: 'Generative KI', def: 'KI, die neue Inhalte (Text, Bild, Code, Audio, Video) erzeugt, statt Eingaben nur zu klassifizieren oder vorherzusagen.' },
    { term: 'Large Language Model (LLM)', def: 'Großes Sprachmodell, das auf riesigen Textmengen trainiert wurde und Text Token für Token vorhersagt.' },
    { term: 'Halluzination', def: 'Überzeugend klingende, aber erfundene oder falsche Ausgabe eines Sprachmodells.' },
    { term: 'Daten-Schwungrad', def: 'Selbstverstärkender Kreislauf: Bessere KI zieht mehr Nutzung an, die mehr Daten erzeugt, mit denen die KI besser wird.' },
    { term: 'Pilot-Falle', def: 'Strategischer Fehler, KI dauerhaft zu pilotieren, ohne erfolgreiche Anwendungen in den Produktivbetrieb zu skalieren.' },
    { term: 'KI-Bereitschaft (AI Readiness)', def: 'Fähigkeit einer Organisation, KI erfolgreich einzuführen und zu skalieren, bewertet in den Dimensionen Strategie, Daten, Technologie, Personal und Governance.' },
    { term: 'Reifegradmodell', def: 'Stufenmodell zur Einordnung der KI-Fähigkeiten einer Organisation, im Skript: Einsteiger, Aufbauend, Fortgeschritten, Vorreiter.' },
  ],

  sources: [
    { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', publisher: 'EUR-Lex', year: 2024, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { title: 'Updates to the OECD’s definition of an AI system explained', publisher: 'OECD.AI', year: 2023, type: 'Artikel', url: 'https://oecd.ai/en/wonk/ai-system-definition-update' },
    { title: 'Guidelines on the definition of an AI system', publisher: 'Europäische Kommission', year: 2025, type: 'Leitfaden', url: 'https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application' },
    { title: 'On the Opportunities and Risks of Foundation Models (Bommasani et al.)', publisher: 'arXiv / Stanford CRFM', year: 2021, type: 'Paper', url: 'https://arxiv.org/abs/2108.07258' },
    { title: 'Attention Is All You Need (Vaswani et al.)', publisher: 'arXiv', year: 2017, type: 'Paper', url: 'https://arxiv.org/abs/1706.03762' },
    { title: 'Lost in the Middle: How Language Models Use Long Contexts (Liu et al.)', publisher: 'arXiv', year: 2023, type: 'Paper', url: 'https://arxiv.org/abs/2307.03172' },
    { title: 'Migrate to the Responses API', publisher: 'OpenAI', year: 2026, type: 'Doku', url: 'https://developers.openai.com/api/docs/guides/migrate-to-responses' },
    { title: 'GitHub Copilot for Business is now available', publisher: 'GitHub Blog', year: 2023, type: 'Artikel', url: 'https://github.blog/news-insights/product-news/github-copilot-for-business-is-now-available/' },
    { title: 'Generative AI delivering substantial ROI … (Microsoft-sponsored IDC report)', publisher: 'Microsoft', year: 2025, type: 'Studie', url: 'https://news.microsoft.com/source/emea/2025/01/generative-ai-delivering-substantial-roi-to-businesses-integrating-the-technology-across-operations-microsoft-sponsored-idc-report/' },
    { title: 'Where’s the Value in AI?', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/publications/2024/wheres-value-in-ai' },
    { title: 'The 2026 AI Index Report', publisher: 'Stanford HAI', year: 2026, type: 'Studie', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report' },
    { title: 'Nutzung von IKT in Unternehmen – Ergebnisse 2025', publisher: 'Statistisches Bundesamt (Destatis)', year: 2025, type: 'Studie', url: 'https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/IKT-U-Erhebung/info.html' },
    { title: 'Erstmals nutzt die Mehrheit der Unternehmen KI', publisher: 'Bitkom e. V.', year: 2026, type: 'Studie', url: 'https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-die-Mehrheit-der-Unternehmen-KI' },
    { title: 'Build a transformative AI capability with AI Adoption Framework', publisher: 'Google Cloud', year: 2020, type: 'Leitfaden', url: 'https://cloud.google.com/blog/products/ai-machine-learning/build-a-transformative-ai-capability-with-ai-adoption-framework' },
    { title: 'AI adoption – Cloud Adoption Framework', publisher: 'Microsoft Learn', year: 2026, type: 'Leitfaden', url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/' },
  ],
};
