// Modul 1 – Grundlagen der KI (Handout §2, S. 1–2)
export default {
  id: 'm01',
  order: 1,
  title: 'Grundlagen der KI',
  subtitle: 'Begriffe, Disziplinen, Lernarten und Daten als Rohstoff',
  icon: 'brain',
  isNew: false,
  minutes: 80,
  handout: [
    { section: '2.1', title: 'Was ist Künstliche Intelligenz?', page: 1 },
    { section: '2.2', title: 'Kerndisziplinen', page: 1 },
    { section: '2.3', title: 'Daten als „Rohstoff“', page: 2 },
  ],
  objectives: [
    'Du kannst KI mit eigenen Worten erklären und die Rechtsdefinition aus Art. 3 Nr. 1 der KI-Verordnung (EU AI Act) einordnen.',
    'Du unterscheidest schwache KI, starke KI und Superintelligenz und kannst begründen, warum heutige Systeme „schwache“ KI sind.',
    'Du kennst die sechs Kerndisziplinen aus dem Handout und ordnest typische Unternehmensanwendungen zu.',
    'Du erklärst überwachtes, unüberwachtes und bestärkendes Lernen und wählst für ein Geschäftsproblem die passende Lernart.',
    'Du bewertest Datenbestände nach Relevanz, Genauigkeit, Vollständigkeit, Konsistenz und Aktualität.',
    'Du unterscheidest Anonymisierung und Pseudonymisierung nach DSGVO und leitest daraus konkrete Schritte für KI-Projekte ab.',
  ],
  lessons: [
    // ───────────────────────── Lektion 1 ─────────────────────────
    {
      id: 'm01-l1',
      title: 'Was ist Künstliche Intelligenz?',
      minutes: 20,
      blocks: [
        { type: 'video', scene: 'intro' },
        {
          type: 'text',
          md: `Willkommen im ersten Modul! Bevor du KI-Projekte planst, bewertest oder steuerst, brauchst du eine **saubere Begriffsgrundlage**. In der Praxis meinen Menschen mit „KI“ sehr Unterschiedliches: den Chatbot auf der Website, eine Excel-Formel, die Kameraprüfung in der Fertigung oder ein großes Sprachmodell.

Als KI-Managerin oder KI-Manager bist du oft die Person, die diese Begriffe im Unternehmen **übersetzt**: für die Geschäftsführung, für die IT, für den Betriebsrat und für die Fachabteilungen. Genau darum geht es in dieser Lektion.`,
        },
        {
          type: 'handout',
          section: '2.1',
          page: 1,
          quote: 'KI bezeichnet Systeme, die Aufgaben übernehmen, für die sonst menschliche Intelligenz nötig wäre – z. B. Wahrnehmen, Lernen, Entscheiden oder Handeln.',
          md: `Diese **funktionale Definition** ist für den Einstieg ideal: Sie beschreibt KI über das, was sie *tut*. Für Verträge, Compliance und die Frage, ob die KI-Verordnung greift, brauchst du zusätzlich die **Rechtsdefinition** (siehe Aktualisierung unten).`,
        },
        {
          type: 'update',
          title: 'Ergänzung: Die verbindliche Definition aus dem EU AI Act',
          md: `Seit dem 1. August 2024 ist die **KI-Verordnung (EU) 2024/1689** in Kraft. Ihr Art. 3 Nr. 1 definiert ein KI-System als

> „ein maschinengestütztes System, das für einen in unterschiedlichem Grade autonomen Betrieb ausgelegt ist und das nach seiner Betriebsaufnahme anpassungsfähig sein kann und das aus den erhaltenen Eingaben für explizite oder implizite Ziele ableitet, wie Ausgaben wie etwa Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen erstellt werden, die physische oder virtuelle Umgebungen beeinflussen können“

Die Definition ist bewusst eng an die **OECD-Definition** angelehnt, die im November 2023 überarbeitet wurde. Damit gilt international ein sehr ähnliches Verständnis.

- **Kernmerkmal ist das „Ableiten“ (Inferenz):** Das System leitet aus Eingaben selbst ab, wie es zu Ausgaben kommt.
- **Nicht erfasst** sind laut Erwägungsgrund 12 Systeme, die ausschließlich auf Regeln beruhen, die von Menschen festgelegt wurden, um Vorgänge automatisch auszuführen (z. B. eine klassische Wenn-dann-Formel).
- Die EU-Kommission hat am 6. Februar 2025 **Leitlinien zur KI-System-Definition** veröffentlicht. Sie sind nicht verbindlich, helfen aber bei Grenzfällen.`,
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
            ['leitet aus Eingaben ab', '**Kern:** Modell erzeugt Ausgaben aus gelernten Mustern statt aus fest programmierten Regeln', 'Sprachmodell, Bilderkennung, Prognosemodell'],
            ['Ausgaben beeinflussen Umgebungen', 'Vorhersagen, Inhalte, Empfehlungen, Entscheidungen wirken real oder digital', 'Angebotsentwurf, Kreditscore, Wartungsalarm'],
          ],
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: `**KI leitet ab – klassische Software führt aus.** Wenn ein System nur von Menschen geschriebene Regeln abarbeitet, ist es nach dem AI Act in der Regel *kein* KI-System. Sobald es aus Daten gelernte Muster nutzt, um Ausgaben zu erzeugen, ist es sehr wahrscheinlich eins.`,
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Schwache KI (Narrow AI)', back: 'Auf einen engen Zweck beschränkt, z. B. Chatbot, Spamfilter, Bilderkennung. **Alle heute produktiv eingesetzten Systeme** fallen in diese Kategorie.' },
            { front: 'Starke KI (AGI)', back: 'Hypothetische KI, die in **allen** Domänen menschenähnlich denkt, lernt und handelt. Existiert bisher nicht, ist aber Ziel einiger Forschungslabore und wird intensiv diskutiert.' },
            { front: 'Superintelligenz', back: 'Theoretische KI, die menschliche Fähigkeiten in nahezu allen Bereichen **weit übertrifft**. Ein Thema der Zukunfts- und Sicherheitsforschung, keins der heutigen Projektplanung.' },
            { front: 'Ist ein großes Sprachmodell „starke KI“?', back: 'Nein. Sprachmodelle sind vielseitig, aber nicht allgemein intelligent. Der AI Act nennt sie **„KI-Modelle mit allgemeinem Verwendungszweck“** (Art. 3 Nr. 63), weil sie für viele Aufgaben einsetzbar sind.' },
          ],
        },
        {
          type: 'timeline',
          items: [
            { date: '1950', title: 'Turing-Test', md: 'Alan Turing fragt in „Computing Machinery and Intelligence“, ob Maschinen denken können.' },
            { date: '1956', title: 'Dartmouth-Workshop', md: 'Der Förderantrag von McCarthy, Minsky, Rochester und Shannon (1955) prägt den Begriff *Artificial Intelligence*. 1956 findet der Workshop statt, er gilt als Geburtsstunde der KI-Forschung.' },
            { date: '1970er–80er', title: 'Expertensysteme', md: 'Regelbasierte Systeme bilden Fachwissen in Wenn-dann-Regeln ab, z. B. für die medizinische Diagnose.' },
            { date: '1997', title: 'Deep Blue', md: 'IBMs Schachcomputer besiegt Weltmeister Garri Kasparow.' },
            { date: '2012', title: 'Deep-Learning-Durchbruch', md: 'Das neuronale Netz AlexNet gewinnt den ImageNet-Wettbewerb deutlich. Damit beginnt der Deep-Learning-Boom.' },
            { date: '2016', title: 'AlphaGo', md: 'DeepMinds System schlägt Lee Sedol im Go, mit Deep Learning und Reinforcement Learning.' },
            { date: '2017', title: 'Transformer', md: 'Das Paper „Attention Is All You Need“ legt die Architektur heutiger Sprachmodelle.' },
            { date: 'Nov. 2022', title: 'ChatGPT', md: 'Generative KI erreicht den Massenmarkt.' },
            { date: '1.8.2024', title: 'EU AI Act in Kraft', md: 'Erste umfassende KI-Regulierung weltweit. Die Pflichten gelten gestaffelt (Details in Modul 5).' },
          ],
        },
        {
          type: 'praxis',
          title: 'KI-Inventur: Was ist bei uns eigentlich KI?',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Die Geschäftsführung bittet dich, bis zur nächsten Leitungsrunde eine **Übersicht aller „KI-Anwendungen“** im Haus zu erstellen. Grund: Mitarbeitende brauchen eine KI-Schulung, und der Datenschutzbeauftragte fragt, welche Tools unter den AI Act fallen. Gemeldet wurden: ein Excel-Makro zur Angebotskalkulation, der Spamfilter des Mailservers, ein Chatbot auf der Website, ein Routenplaner für Servicetechniker und ein Sprachmodell, das einige Mitarbeitende privat für E-Mails nutzen.`,
          steps: [
            'Liste alle gemeldeten Tools in einer Tabelle (Name, Anbieter, Abteilung, Zweck, genutzte Daten).',
            'Prüfe jedes Tool gegen das Kernmerkmal „leitet aus Eingaben ab“. Das Excel-Makro mit festen Formeln fällt meist heraus, Spamfilter und Chatbot meist hinein.',
            'Kläre beim Routenplaner mit dem Anbieter, ob gelernte Modelle (z. B. Verkehrsprognosen) oder nur klassische Optimierung genutzt werden.',
            'Markiere „Schatten-KI“: Die private Nutzung des Sprachmodells mit Kundendaten ist ein Datenschutz- und Governance-Thema.',
            'Leite Maßnahmen ab: Nutzungsrichtlinie, freigegebenes Tool, Schulung zur KI-Kompetenz.',
          ],
          takeaway: `Eine **KI-Inventur** ist fast immer der erste Schritt im KI-Management. Sie schafft Transparenz, deckt Schatten-KI auf und ist die Grundlage für Risikoeinstufung, Schulung und Strategie.`,
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Ein Excel-Makro, das ausschließlich von Menschen festgelegte Wenn-dann-Regeln ausführt, ist nach dem AI Act in der Regel kein KI-System.',
          answer: true,
          explain: 'Richtig. Erwägungsgrund 12 der KI-Verordnung nimmt Systeme aus, die ausschließlich auf von Menschen festgelegten Regeln beruhen. Entscheidend ist die Fähigkeit, abzuleiten (Inferenz).',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welches Beispiel ist „schwache KI“?',
          options: ['Ein System, das jede menschliche Tätigkeit gleich gut beherrscht', 'Ein Bilderkennungsmodell, das Kratzer auf Blechteilen findet', 'Eine Superintelligenz, die Forschung autonom vorantreibt', 'Keines, schwache KI gibt es nicht'],
          answer: 1,
          explain: 'Schwache KI ist auf einen engen Zweck beschränkt, hier die Qualitätsprüfung. Starke KI und Superintelligenz sind bislang hypothetisch (Handout §2.1).',
        },
      ],
    },

    // ───────────────────────── Lektion 2 ─────────────────────────
    {
      id: 'm01-l2',
      title: 'Kerndisziplinen und Lernarten',
      minutes: 25,
      blocks: [
        { type: 'video', scene: 'ki' },
        {
          type: 'handout',
          section: '2.2',
          page: 1,
          quote: '1. Maschinelles Lernen (ML) 2. Deep Learning (DL) 3. Regelbasierte Expertensysteme 4. Natural Language Processing (NLP) 5. Computer Vision 6. Reinforcement Learning (RL)',
          md: `Die Liste mischt zwei Ebenen: **Methoden** (ML, DL, RL, Expertensysteme) und **Anwendungsfelder** (NLP, Computer Vision). Das ist kein Fehler, du solltest den Unterschied aber kennen. Ein NLP-System kann zum Beispiel mit Deep Learning *oder* mit Regeln gebaut sein.`,
        },
        {
          type: 'text',
          md: `### Das Zwiebelmodell

Stell dir KI als Zwiebel vor:

- **Künstliche Intelligenz** ist die äußerste Schicht. Sie umfasst auch symbolische Ansätze wie **regelbasierte Expertensysteme**, in denen Fachwissen als Regeln hinterlegt ist.
- **Maschinelles Lernen** ist eine Teilmenge: Systeme lernen Muster aus Daten, statt sie programmiert zu bekommen.
- **Deep Learning** ist eine Teilmenge von ML. Es nutzt künstliche neuronale Netze mit vielen Schichten.
- **Generative KI und große Sprachmodelle (LLMs)** sind Deep-Learning-Modelle, die neue Inhalte erzeugen. Mehr dazu in Modul 9.

**NLP** (Sprache verstehen und erzeugen) und **Computer Vision** (Bilder und Videos auswerten) sind *Anwendungsfelder*, die heute überwiegend mit Deep Learning arbeiten.`,
        },
        {
          type: 'table',
          caption: 'Kerndisziplinen mit typischen Einsatzfeldern im Mittelstand',
          head: ['Disziplin', 'Kurz erklärt', 'Typisches Unternehmensbeispiel'],
          rows: [
            ['Maschinelles Lernen (ML)', 'Lernt Muster aus Beispieldaten', 'Absatzprognose, Kündigerprognose, Preisoptimierung'],
            ['Deep Learning (DL)', 'Mehrschichtige neuronale Netze, stark bei Bild, Sprache, Text', 'Sprachmodelle, Spracherkennung, Bildanalyse'],
            ['Regelbasierte Expertensysteme', 'Wissen als Wenn-dann-Regeln, sehr gut nachvollziehbar', 'Konfiguratoren, Prüfregeln in der Sachbearbeitung'],
            ['Natural Language Processing (NLP)', 'Verarbeitung natürlicher Sprache', 'E-Mail-Klassifikation, Chatbots, Vertragsanalyse'],
            ['Computer Vision', 'Auswertung von Bildern und Videos', 'Optische Qualitätskontrolle, Belegerkennung (OCR)'],
            ['Reinforcement Learning (RL)', 'Lernen durch Belohnung und Bestrafung in einer Umgebung', 'Robotik, Steuerungsoptimierung, Training von Sprachmodellen (RLHF)'],
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

Im Widget siehst du ein **Forward-Pass**: Eingabewerte (z. B. Pixel oder Messwerte) laufen Schicht für Schicht durch das Netz. Jedes künstliche Neuron gewichtet seine Eingänge, summiert sie und gibt über eine Aktivierungsfunktion einen Wert weiter. Am Ende steht eine Ausgabe, etwa „Kratzer: ja, 92 %“.

Beim **Training** vergleicht das Netz seine Ausgabe mit der richtigen Antwort und passt die Gewichte schrittweise an (*Backpropagation*). Was das Netz „weiß“, steckt am Ende in Millionen bis Milliarden solcher Gewichte. Deshalb sind Deep-Learning-Modelle oft schwer erklärbar.`,
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
          type: 'handout',
          section: '14',
          page: 7,
          quote: 'Supervised Learning – Lernmethode mit gelabelten Daten',
          md: 'Das Handout-Glossar nennt nur das überwachte Lernen. Die folgende Tabelle ergänzt die beiden anderen klassischen Lernarten und das selbstüberwachte Lernen, das hinter heutigen Sprachmodellen steckt.',
        },
        {
          type: 'table',
          caption: 'Lernarten im Vergleich',
          head: ['Lernart', 'Daten', 'Ziel', 'Beispiel'],
          rows: [
            ['Überwacht (supervised)', 'Gelabelt: Eingabe **mit** richtiger Antwort', 'Vorhersagen oder Klassifizieren', 'Rechnungen automatisch der richtigen Kostenstelle zuordnen'],
            ['Unüberwacht (unsupervised)', 'Ungelabelt', 'Strukturen und Gruppen finden', 'Kundensegmente bilden, Auffälligkeiten erkennen'],
            ['Bestärkend (reinforcement)', 'Feedback aus der Umgebung (Belohnung)', 'Beste Handlungsstrategie lernen', 'Robotergreifen, Energiesteuerung, Feinabstimmung von Sprachmodellen'],
            ['Selbstüberwacht (self-supervised)', 'Riesige Rohdatenmengen, Labels entstehen aus den Daten selbst', 'Allgemeine Repräsentationen lernen', 'Ein Sprachmodell lernt, das nächste Wort vorherzusagen'],
          ],
        },
        {
          type: 'update',
          title: 'Ergänzung: Foundation Models und selbstüberwachtes Lernen',
          md: `Das Handout führt die drei klassischen Lernarten auf. Seit etwa 2018 sind **Foundation Models** dazugekommen: große Modelle, die per **selbstüberwachtem Lernen** auf riesigen Datenmengen vortrainiert und danach für viele Aufgaben angepasst werden. Der Begriff wurde 2021 von Forschenden der Stanford University geprägt. Grundlage ist meist die **Transformer-Architektur** von 2017.

Für dich als KI-Managerin oder KI-Manager heißt das: Viele Projekte beginnen heute nicht mehr mit eigenem Training, sondern mit der **Auswahl und Anpassung eines vortrainierten Modells**. Die KI-Verordnung trägt dem mit eigenen Pflichten für „KI-Modelle mit allgemeinem Verwendungszweck“ Rechnung.`,
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
            'Problem 1: Es gibt historische Sendungen **mit** bekanntem Ergebnis (pünktlich/verspätet). Das ist überwachtes Lernen (Klassifikation). Prüfe, ob genug Beispiele mit Label vorliegen.',
            'Problem 2: Es gibt keine vorgegebenen Gruppen, also unüberwachtes Lernen (Clustering). Plane, dass der Vertrieb die gefundenen Segmente fachlich bewertet.',
            'Problem 3: Bestärkendes Lernen ist datenhungrig und braucht meist eine Simulation. Frag zuerst Robotik-Anbieter nach fertigen Lösungen, statt selbst zu entwickeln.',
            'Priorisiere: Problem 1 hat klare Daten und messbaren Nutzen. Es eignet sich als Pilot.',
            'Halte Annahmen und offene Fragen in einem einseitigen Steckbrief fest (Ziel, Daten, Lernart, Erfolgskriterium).',
          ],
          takeaway: `Nicht die spannendste Methode gewinnt, sondern die, die zu **Problem, Daten und Reifegrad** passt. Überwachtes Lernen mit vorhandenen historischen Daten ist im Mittelstand oft der schnellste Weg zu messbarem Nutzen.`,
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Lernart dem passenden Anwendungsfall zu.',
          pairs: [
            ['Überwachtes Lernen', 'Rechnungen anhand gelabelter Beispiele Kostenstellen zuordnen'],
            ['Unüberwachtes Lernen', 'Kundengruppen ohne Vorgaben entdecken'],
            ['Bestärkendes Lernen', 'Roboter lernt Greifstrategie über Belohnungen'],
            ['Selbstüberwachtes Lernen', 'Sprachmodell lernt, das nächste Wort vorherzusagen'],
          ],
          explain: 'Ausschlaggebend ist die Art der Daten bzw. des Feedbacks: Labels (überwacht), keine Labels (unüberwacht), Belohnung aus der Umgebung (bestärkend) oder Labels, die aus den Rohdaten selbst entstehen (selbstüberwacht).',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Aussage zum Verhältnis von KI, ML und Deep Learning stimmt?',
          options: ['ML ist eine Teilmenge von Deep Learning', 'Deep Learning ist eine Teilmenge von ML, ML eine Teilmenge von KI', 'Expertensysteme sind eine Form von Deep Learning', 'NLP ist eine Lernart wie überwachtes Lernen'],
          answer: 1,
          explain: 'Zwiebelmodell: KI ⊃ ML ⊃ Deep Learning. Expertensysteme sind symbolische KI ohne Lernen aus Daten, NLP ist ein Anwendungsfeld.',
        },
      ],
    },

    // ───────────────────────── Lektion 3 ─────────────────────────
    {
      id: 'm01-l3',
      title: 'Daten als Rohstoff: Qualität und Datenarten',
      minutes: 20,
      blocks: [
        { type: 'video', scene: 'daten' },
        {
          type: 'handout',
          section: '2.3',
          page: 2,
          quote: 'Datenqualität bestimmt KI-Qualität („Garbage in, garbage out“). Wichtige Kriterien: Relevanz, Genauigkeit, Vollständigkeit, Konsistenz, Aktualität',
          md: 'Die fünf Kriterien sind ein guter Prüfrahmen für jedes KI-Vorhaben. Die Tabelle zeigt, wie du sie in der Praxis anwendest.',
        },
        {
          type: 'table',
          caption: 'Die fünf Qualitätskriterien aus dem Handout als Prüfliste',
          head: ['Kriterium', 'Leitfrage', 'Typischer Fehler', 'Einfache Prüfung'],
          rows: [
            ['Relevanz', 'Passen die Daten zur Fragestellung?', 'Wetterdaten für eine Rechnungsprüfung', 'Fachbereich bewertet jedes Merkmal'],
            ['Genauigkeit', 'Bilden die Werte die Realität korrekt ab?', 'Tippfehler, falsche Einheiten (kg/t)', 'Stichprobe gegen Originalbeleg'],
            ['Vollständigkeit', 'Fehlen Datensätze oder Felder?', 'Leere Pflichtfelder, fehlende Monate', 'Anteil fehlender Werte je Spalte'],
            ['Konsistenz', 'Sind Daten über Systeme hinweg widerspruchsfrei?', 'Kunde im CRM „aktiv“, im ERP „gelöscht“', 'Abgleich der Schlüssel zwischen Systemen'],
            ['Aktualität', 'Sind die Daten aktuell genug?', 'Preisliste von 2021 für Prognose 2026', 'Datum der letzten Änderung prüfen'],
          ],
        },
        {
          type: 'interactive',
          widget: 'data-quality',
          props: {},
        },
        {
          type: 'update',
          title: 'Ergänzung: Normen für Datenqualität',
          md: `Die fünf Kriterien des Handouts lassen sich mit internationalen Normen untermauern:

- **ISO/IEC 25012** beschreibt ein Datenqualitätsmodell mit **15 Merkmalen** aus zwei Blickwinkeln: *inhärent* (z. B. Genauigkeit, Vollständigkeit, Konsistenz, Glaubwürdigkeit, Aktualität) und *systemabhängig* (z. B. Verfügbarkeit, Portabilität, Wiederherstellbarkeit). Die Norm wurde zuletzt 2025 bestätigt.
- Die Reihe **ISO/IEC 5259** (Teil 1 erschienen 2024) überträgt das Thema gezielt auf **Analytics und maschinelles Lernen**, über den gesamten Datenlebenszyklus.

Für Hochrisiko-KI verlangt außerdem Art. 10 der KI-Verordnung Daten-Governance: Trainings-, Validierungs- und Testdaten müssen unter anderem relevant, hinreichend repräsentativ und so weit wie möglich fehlerfrei und vollständig sein.`,
          sources: [
            { title: 'ISO/IEC 25012:2008 – Data quality model', url: 'https://www.iso.org/standard/35736.html' },
            { title: 'ISO/IEC 5259-1:2024 – Data quality for analytics and ML', url: 'https://www.iso.org/standard/81088.html' },
            { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          ],
        },
        {
          type: 'table',
          caption: 'Strukturiert, halbstrukturiert, unstrukturiert',
          head: ['Datenart', 'Merkmal', 'Beispiele', 'Typische KI-Methode'],
          rows: [
            ['Strukturiert', 'Feste Tabellenform mit definierten Spalten', 'ERP-Buchungen, Sensormesswerte, CRM-Stammdaten', 'Klassisches ML (z. B. Entscheidungsbäume)'],
            ['Halbstrukturiert', 'Teilweise Struktur durch Tags oder Schlüssel', 'JSON/XML, E-Mails (Kopfzeilen + Freitext), Logfiles', 'Parsing + ML/NLP'],
            ['Unstrukturiert', 'Keine vorgegebene Struktur', 'PDFs, Fotos, Sprachaufnahmen, Chatverläufe', 'Deep Learning, LLMs, Computer Vision'],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: '1. Bestandsaufnahme', md: 'Welche Datenquellen gibt es? Wem gehören sie (Data Owner)? Wo liegen sie?' },
            { title: '2. Profiling', md: 'Daten automatisch analysieren: fehlende Werte, Ausreißer, Dubletten, Verteilungen.' },
            { title: '3. Bereinigung', md: 'Dubletten zusammenführen, Formate vereinheitlichen, Fehler korrigieren und jede Korrektur dokumentieren.' },
            { title: '4. Anreicherung und Labeling', md: 'Für überwachtes Lernen die richtigen Antworten ergänzen, idealerweise durch Fachleute und mit Vier-Augen-Prinzip.' },
            { title: '5. Dokumentation', md: 'Herkunft, Zeitraum, bekannte Lücken und mögliche Verzerrungen (Bias) in einem Datenblatt festhalten.' },
            { title: '6. Monitoring', md: 'Datenqualität laufend messen. Ändern sich die Daten (Data Drift), muss das Modell nachtrainiert werden.' },
          ],
        },
        {
          type: 'praxis',
          title: 'Datenqualitäts-Check vor dem ersten Prognosemodell',
          company: 'Müller Haustechnik GmbH (fiktiv), 85 Mitarbeitende, Augsburg',
          scenario: `Die Serviceleitung möchte vorhersagen, welche Heizungsanlagen in den nächsten drei Monaten voraussichtlich ausfallen, um Wartungen proaktiv anzubieten. Grundlage sollen 8 Jahre Serviceaufträge aus dem ERP, Freitext-Notizen der Techniker und Herstellerangaben zu Anlagentypen sein. Ein Dienstleister bietet an, „sofort ein Modell zu trainieren“.`,
          steps: [
            'Bremse den Schnellstart: Vereinbare zuerst ein zweiwöchiges Daten-Assessment.',
            'Prüfe die fünf Kriterien: Sind Anlagentypen einheitlich benannt (Konsistenz)? Gibt es Lücken nach dem ERP-Wechsel (Vollständigkeit)?',
            'Ordne die Datenarten zu: Aufträge sind strukturiert, Techniker-Notizen unstrukturiert. Für die Notizen brauchst du NLP oder ein LLM.',
            'Kläre den Personenbezug: Kundenadressen und Technikernamen sind personenbezogen. Plane Pseudonymisierung ein (Lektion 4).',
            'Definiere ein Abbruchkriterium: Fehlen in mehr als einem Drittel der Fälle die Ausfallursachen, folgt erst ein Prozessprojekt zur Datenerfassung.',
          ],
          takeaway: `In vielen KI-Projekten steckt der größte Aufwand in der **Datenvorbereitung**, nicht im Modell. Wer Datenqualität früh prüft, spart Geld und verhindert Modelle, die zwar gut aussehen, aber falsche Entscheidungen treffen.`,
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Kein KI-Projekt ohne Daten-Check.** Ein mittelmäßiges Modell mit guten Daten schlägt fast immer ein brillantes Modell mit schlechten Daten.',
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Vervollständige den Grundsatz aus dem Handout.',
          text: 'Garbage in, {{garbage}} out. Ein Kundenstatus, der im CRM „aktiv“ und im ERP „gelöscht“ lautet, verletzt das Kriterium der {{Konsistenz|konsistenz}}.',
          explain: 'Schlechte Eingabedaten führen zu schlechten Ergebnissen (Handout §2.3). Widersprüche zwischen Systemen sind ein Konsistenzproblem.',
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Eine E-Mail mit festen Kopfzeilen (Absender, Datum, Betreff) und Freitext ist …',
          options: ['strukturiert', 'halbstrukturiert', 'unstrukturiert', 'keine Datenart'],
          answer: 1,
          explain: 'Die Kopfzeilen geben eine Teilstruktur vor, der Inhalt ist Freitext. Das ist typisch für halbstrukturierte Daten.',
        },
      ],
    },

    // ───────────────────────── Lektion 4 ─────────────────────────
    {
      id: 'm01-l4',
      title: 'Datenethik, DSGVO und Anonymisierung',
      minutes: 15,
      blocks: [
        {
          type: 'handout',
          section: '2.3',
          page: 2,
          quote: 'Datenethik, DSGVO-Konformität, Anonymisierung',
          md: 'Das Handout nennt die drei Stichworte. Hier schauen wir genauer hin, denn bei personenbezogenen Daten entscheidet sich oft, ob ein KI-Projekt starten darf.',
        },
        {
          type: 'text',
          md: `### Die DSGVO-Grundsätze im KI-Kontext

Sobald ein KI-System **personenbezogene Daten** verarbeitet (Namen, Kundennummern, Stimmen, Fotos, IP-Adressen …), gilt die DSGVO. Die Grundsätze aus **Art. 5 DSGVO** sind dabei dein Kompass:

- **Rechtmäßigkeit und Transparenz:** Es braucht eine Rechtsgrundlage (Art. 6), und Betroffene müssen informiert werden.
- **Zweckbindung:** Daten aus der Buchhaltung dürfen nicht ohne Weiteres zum Training für ganz andere Zwecke genutzt werden.
- **Datenminimierung:** Nur die Daten verwenden, die für das Ziel wirklich nötig sind.
- **Richtigkeit:** Diesen Punkt kennst du schon als Datenqualität.
- **Speicherbegrenzung, Integrität und Vertraulichkeit:** Löschfristen, Zugriffsschutz, Verschlüsselung.
- **Rechenschaftspflicht:** Du musst die Einhaltung nachweisen können.

Besonders relevant sind außerdem **Art. 22** (Recht, keiner ausschließlich automatisierten Entscheidung mit erheblicher Wirkung unterworfen zu werden) und **Art. 35** (Datenschutz-Folgenabschätzung bei hohem Risiko).`,
        },
        {
          type: 'table',
          caption: 'Anonymisierung und Pseudonymisierung im Vergleich',
          head: ['', 'Anonymisierung', 'Pseudonymisierung'],
          rows: [
            ['Idee', 'Personenbezug wird **endgültig** entfernt', 'Identifizierende Merkmale werden durch Kennungen ersetzt, der Schlüssel liegt getrennt'],
            ['Rechtsgrundlage', 'Erwägungsgrund 26 DSGVO', 'Art. 4 Nr. 5 DSGVO'],
            ['Gilt die DSGVO?', '**Nein**, wenn wirklich niemand mehr identifizierbar ist', '**Ja**, die Daten bleiben für den Verantwortlichen personenbezogen'],
            ['Beispiel', 'Nur Anzahl der Serviceeinsätze pro Postleitzahl-Region und Monat', '„Kunde 4711“ statt „Familie Huber, Lindenweg 3“; Schlüsseltabelle bei der IT'],
            ['Risiko', 'Re-Identifizierung durch Kombination von Merkmalen', 'Schlüssel gelangt in falsche Hände'],
          ],
        },
        {
          type: 'update',
          title: 'Aktualisierung: Pseudonymisierung, EuGH-Rechtsprechung und Data Act',
          md: `Das Handout nennt nur die **Anonymisierung**. In der Praxis ist echte Anonymisierung schwer, weil oft schon wenige Merkmale genügen, um Personen wiederzuerkennen. Häufiger und realistischer ist die **Pseudonymisierung**:

- Art. 4 Nr. 5 DSGVO definiert sie als Verarbeitung, nach der Daten „ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können“. Die Zusatzinformationen müssen getrennt und geschützt aufbewahrt werden.
- Der Europäische Datenschutzausschuss (EDSA/EDPB) hat im Januar 2025 die **Leitlinien 01/2025 zur Pseudonymisierung** zur Konsultation gestellt.
- Der **EuGH** hat am 4. September 2025 (Rs. C-413/23 P, EDSB/SRB) entschieden: Ob pseudonymisierte Daten personenbezogen sind, hängt von der **Perspektive** ab. Für einen Empfänger ohne realistische Möglichkeit zur Re-Identifizierung können sie anonym sein. Der Verantwortliche bleibt aber an die DSGVO gebunden, etwa an seine Informationspflichten.
- Seit dem **12. September 2025** gilt außerdem der **EU Data Act**. Er regelt den Zugang zu Daten vernetzter Produkte, zum Beispiel Maschinen- und Gerätedaten, und kann damit neue Datenquellen für KI erschließen.`,
          sources: [
            { title: 'Art. 4 DSGVO – Begriffsbestimmungen (dejure.org)', url: 'https://dejure.org/gesetze/DSGVO/4.html' },
            { title: 'Erwägungsgrund 26 DSGVO', url: 'https://dsgvo-gesetz.de/erwaegungsgruende/nr-26/' },
            { title: 'EDPB Guidelines 01/2025 on Pseudonymisation', url: 'https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-012025-pseudonymisation_en' },
            { title: 'beck-aktuell: EuGH C-413/23 P zu pseudonymisierten Daten (05.09.2025)', url: 'https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/eugh-c41323p-pseudonymisierte-daten-personenbezogen-weitergabe-dritte-2025-09-05' },
            { title: 'EU-Kommission: Datengesetz (Data Act)', url: 'https://digital-strategy.ec.europa.eu/de/policies/data-act' },
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Pseudonym ist nicht anonym',
          md: 'Ein Datensatz ohne Namen ist nicht automatisch anonym. Postleitzahl, Geburtsjahr und Beruf zusammen können eine Person in einem kleinen Ort eindeutig identifizieren. Lass Anonymisierungskonzepte deshalb immer von der oder dem **Datenschutzbeauftragten** prüfen.',
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Datenethik: Fairness', back: 'Benachteiligt das System Gruppen systematisch? Ein **Bias** in den Trainingsdaten (z. B. nur Daten einer Region oder Kultur) wird vom Modell übernommen und manchmal sogar verstärkt.' },
            { front: 'Datenethik: Transparenz', back: 'Wissen Betroffene, dass KI im Spiel ist und wofür ihre Daten genutzt werden? Ab dem 2. August 2026 gelten dazu zusätzlich die Transparenzpflichten aus Art. 50 AI Act.' },
            { front: 'Datenethik: Verhältnismäßigkeit', back: 'Steht der Nutzen in einem vernünftigen Verhältnis zum Eingriff? Mitarbeitende per Video dauerhaft zu analysieren, um Pausen zu optimieren, wäre unverhältnismäßig.' },
            { front: 'Datenethik: Verantwortung', back: 'Wer haftet und wer entscheidet am Ende? Für relevante Entscheidungen braucht es einen **Menschen in der Schleife** (Human in the Loop) und klare Zuständigkeiten.' },
          ],
        },
        {
          type: 'praxis',
          title: 'KI-Tourenplanung mit Gesundheitsdaten',
          company: 'Pflegedienst Sonnenhof gGmbH (fiktiv), 60 Mitarbeitende, Freiburg',
          scenario: `Der Pflegedienst möchte die tägliche Tourenplanung mit einem KI-Tool optimieren. Das Tool soll Einsatzzeiten, Adressen, Pflegegrade und Qualifikationen der Pflegekräfte berücksichtigen. Der Anbieter sitzt in der EU und bietet eine Cloud-Lösung an. Du bereitest die Entscheidung für die Geschäftsführung vor.`,
          steps: [
            'Zweck festlegen und dokumentieren: Tourenoptimierung, keine Leistungskontrolle der Pflegekräfte.',
            'Datenkategorien prüfen: Pflegegrade sind Gesundheitsdaten (Art. 9 DSGVO, besonders schutzwürdig). Hinterfrage, ob statt Diagnosen nur der Zeitbedarf pro Einsatz genügt (Datenminimierung).',
            'Pseudonymisieren: Klientinnen und Klienten erscheinen im Tool nur mit Kennung und Koordinate. Die Zuordnungstabelle bleibt im eigenen System.',
            'Auftragsverarbeitungsvertrag (Art. 28 DSGVO) mit dem Anbieter schließen. Serverstandort, Unterauftragnehmer und Löschkonzept klären.',
            'Datenschutz-Folgenabschätzung (Art. 35) mit der oder dem Datenschutzbeauftragten durchführen und die Mitarbeitervertretung frühzeitig einbinden.',
          ],
          takeaway: `Datenschutz ist kein Projektstopper, sondern eine **Designaufgabe**: Mit Zweckbindung, Datenminimierung und Pseudonymisierung (Privacy by Design) lassen sich auch sensible Anwendungsfälle verantwortungsvoll umsetzen.`,
        },
        {
          type: 'links',
          title: 'Weiterlesen und vertiefen',
          items: [
            { title: 'WEIRD-Bias in KI-Systemen (KIsruptiv)', url: 'https://weird.kisruptiv.de/', note: 'Warum viele Modelle vor allem westliche, gebildete und wohlhabende Perspektiven abbilden' },
            { title: 'EDPB Guidelines 01/2025 on Pseudonymisation', url: 'https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-012025-pseudonymisation_en', note: 'Praxisnahe Hinweise des Europäischen Datenschutzausschusses (Englisch)' },
            { title: 'Erwägungsgrund 26 DSGVO', url: 'https://dsgvo-gesetz.de/erwaegungsgruende/nr-26/', note: 'Wann Daten als anonym gelten' },
          ],
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Pseudonymisierte Daten fallen für das Unternehmen, das die Schlüsseltabelle besitzt, nicht mehr unter die DSGVO.',
          answer: false,
          explain: 'Falsch. Für den Verantwortlichen, der die Daten wieder zuordnen kann, bleiben sie personenbezogen (Art. 4 Nr. 5 DSGVO). Nur echte Anonymisierung führt aus der DSGVO heraus (Erwägungsgrund 26).',
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Maßnahmen setzen „Privacy by Design“ in einem KI-Projekt um? (Mehrfachauswahl)',
          options: ['Nur notwendige Datenfelder ins Training übernehmen', 'Namen durch Kennungen ersetzen und den Schlüssel getrennt speichern', 'Alle verfügbaren Daten sammeln, falls man sie später braucht', 'Zweck vor Projektstart schriftlich festlegen'],
          answer: [0, 1, 3],
          explain: 'Datenminimierung, Pseudonymisierung und Zweckbindung sind Kernelemente von Privacy by Design. Daten „auf Vorrat“ zu sammeln widerspricht Art. 5 DSGVO.',
        },
      ],
    },
  ],

  // ───────────────────────── Quiz ─────────────────────────
  quiz: [
    {
      type: 'single',
      q: 'Was ist nach Art. 3 Nr. 1 AI Act das zentrale Merkmal, das ein KI-System von klassischer Software unterscheidet?',
      options: ['Es läuft in der Cloud', 'Es leitet aus Eingaben ab, wie Ausgaben erzeugt werden', 'Es hat eine grafische Benutzeroberfläche', 'Es wurde nach 2020 entwickelt'],
      answer: 1,
      explain: 'Die Fähigkeit zur Inferenz („ableiten“) ist laut Art. 3 Nr. 1 und Erwägungsgrund 12 das Kernmerkmal. Rein regelbasierte Automatisierung ist nicht erfasst.',
    },
    {
      type: 'tf',
      q: 'Starke KI, also eine in allen Domänen menschenähnliche KI, ist heute bereits in Unternehmen im Einsatz.',
      answer: false,
      explain: 'Starke KI ist laut Handout §2.1 hypothetisch. Alle produktiv genutzten Systeme, auch große Sprachmodelle, sind schwache KI für bestimmte Aufgaben.',
    },
    {
      type: 'match',
      q: 'Ordne die Kerndisziplin dem passenden Beispiel zu.',
      pairs: [
        ['Computer Vision', 'Kamerabasierte Prüfung von Schweißnähten'],
        ['NLP', 'Automatische Klassifikation eingehender E-Mails'],
        ['Regelbasiertes Expertensystem', 'Produktkonfigurator mit festen Wenn-dann-Regeln'],
        ['Reinforcement Learning', 'Steuerung lernt über Belohnung, Energie zu sparen'],
      ],
      explain: 'Computer Vision wertet Bilder aus, NLP verarbeitet Sprache, Expertensysteme arbeiten mit expliziten Regeln, und RL lernt durch Belohnung (Handout §2.2).',
    },
    {
      type: 'order',
      q: 'Bringe die Schichten des Zwiebelmodells von außen nach innen in die richtige Reihenfolge.',
      items: ['Künstliche Intelligenz', 'Maschinelles Lernen', 'Deep Learning', 'Große Sprachmodelle (LLMs)'],
      explain: 'KI ist der Oberbegriff, ML eine Teilmenge, Deep Learning eine Teilmenge von ML, und LLMs sind spezielle Deep-Learning-Modelle.',
    },
    {
      type: 'multi',
      q: 'Welche Qualitätskriterien nennt das Handout ausdrücklich? (Mehrfachauswahl)',
      options: ['Relevanz', 'Genauigkeit', 'Popularität', 'Vollständigkeit', 'Konsistenz', 'Aktualität'],
      answer: [0, 1, 3, 4, 5],
      explain: 'Handout §2.3 (S. 2): Relevanz, Genauigkeit, Vollständigkeit, Konsistenz, Aktualität. „Popularität“ ist kein Datenqualitätskriterium.',
    },
    {
      type: 'single',
      q: 'Ein Unternehmen hat 50.000 historische Reklamationen, jeweils mit der festgestellten Ursache. Welche Lernart passt, um die Ursache neuer Reklamationen vorherzusagen?',
      options: ['Unüberwachtes Lernen', 'Überwachtes Lernen', 'Bestärkendes Lernen', 'Gar kein Lernen, nur Regeln'],
      answer: 1,
      explain: 'Es gibt Beispiele mit bekannter richtiger Antwort (Label). Das ist der klassische Fall für überwachtes Lernen (Klassifikation).',
    },
    {
      type: 'cloze',
      q: 'Ergänze die Begriffe.',
      text: 'Werden Namen durch Kennungen ersetzt und der Schlüssel getrennt aufbewahrt, spricht man von {{Pseudonymisierung|pseudonymisierung}}. Ist eine Person gar nicht mehr identifizierbar, sind die Daten {{anonym|anonymisiert}}.',
      explain: 'Pseudonymisierung ist in Art. 4 Nr. 5 DSGVO definiert, anonyme Daten beschreibt Erwägungsgrund 26. Nur auf anonyme Daten ist die DSGVO nicht anwendbar.',
    },
    {
      type: 'single',
      q: 'Welche Daten sind typischerweise unstrukturiert?',
      options: ['Buchungssätze im ERP', 'Sensormesswerte im 10-Sekunden-Takt', 'Sprachaufnahmen aus der Service-Hotline', 'Eine Tabelle mit Artikelnummern und Preisen'],
      answer: 2,
      explain: 'Audio, Bilder, PDFs und Freitexte haben keine feste Tabellenstruktur. Für sie braucht es meist Deep Learning bzw. LLMs.',
    },
    {
      type: 'tf',
      q: 'Die Definition von KI-Systemen im EU AI Act ist eng an die überarbeitete OECD-Definition von 2023 angelehnt.',
      answer: true,
      explain: 'Richtig. Die OECD hat ihre Definition im November 2023 aktualisiert, und der AI Act übernimmt die Kernelemente (maschinengestützt, Autonomie, Anpassungsfähigkeit, Ableitung von Ausgaben).',
    },
    {
      type: 'multi',
      q: 'Welche Aussagen zu Foundation Models treffen zu? (Mehrfachauswahl)',
      options: ['Sie werden meist selbstüberwacht auf großen Datenmengen vortrainiert', 'Sie lassen sich für viele verschiedene Aufgaben anpassen', 'Sie müssen in jedem Unternehmen von Grund auf neu trainiert werden', 'Sie basieren häufig auf der Transformer-Architektur'],
      answer: [0, 1, 3],
      explain: 'Foundation Models (Bommasani et al. 2021) werden einmal groß vortrainiert und dann angepasst. Unternehmen nutzen sie meist, statt selbst von Grund auf zu trainieren.',
    },
    {
      type: 'order',
      q: 'Bringe die Schritte der Datenvorbereitung in eine sinnvolle Reihenfolge.',
      items: ['Bestandsaufnahme der Datenquellen', 'Profiling (Lücken, Ausreißer, Dubletten)', 'Bereinigung', 'Labeling bzw. Anreicherung', 'Dokumentation im Datenblatt', 'Laufendes Monitoring'],
      explain: 'Erst wissen, was da ist, dann analysieren, bereinigen, anreichern, dokumentieren und im Betrieb überwachen (Data Drift).',
    },
    {
      type: 'single',
      q: 'Ein Mitarbeiter fügt Kundendaten in einen privaten KI-Chat ein, um schneller E-Mails zu schreiben. Welche Maßnahme ist als KI-Manager/in am sinnvollsten?',
      options: ['Ignorieren, solange es Zeit spart', 'KI-Nutzung komplett verbieten', 'Nutzungsrichtlinie, freigegebenes Tool mit Auftragsverarbeitungsvertrag und Schulung einführen', 'Den Mitarbeiter abmahnen und sonst nichts ändern'],
      answer: 2,
      explain: 'Schatten-KI lässt sich nachhaltig nur durch eine klare Richtlinie, eine datenschutzkonforme Alternative und KI-Kompetenzaufbau lösen. Pauschale Verbote verlagern das Problem oft nur.',
    },
  ],

  // ───────────────────────── Übungen ─────────────────────────
  exercises: [
    {
      id: 'm01-e1',
      title: 'Datenqualität im eigenen Betrieb',
      scenario: `Die **Holzbau Kerner GmbH (fiktiv)**, ein Zimmereibetrieb mit 45 Mitarbeitenden aus dem Allgäu, möchte mit KI vorhersagen, wie viele Arbeitsstunden ein Dachstuhl-Auftrag voraussichtlich benötigt. Verfügbar sind: Angebote und Nachkalkulationen der letzten 6 Jahre (Excel, uneinheitliche Vorlagen), Stundenzettel (teilweise handschriftlich, eingescannt), Fotos der Baustellen und Notizen der Bauleiter in einer Messenger-Gruppe.`,
      task: `Bewerte die Datenlage für das Vorhaben. Gehe dabei auf **mindestens drei Qualitätskriterien** aus dem Handout ein, ordne die Datenquellen den Datenarten (strukturiert, halbstrukturiert, unstrukturiert) zu, nenne **Datenschutzaspekte** und schlage **konkrete nächste Schritte** vor.`,
      deliverable: '200–350 Wörter oder eine Tabelle mit kurzer Begründung',
      template: `Datenquellen und Datenart:
- …

Bewertung nach Qualitätskriterien:
- Relevanz: …
- Vollständigkeit: …
- Konsistenz: …

Datenschutz:
- …

Nächste Schritte:
1. …`,
      rubric: [
        { criterion: 'Bewertet mindestens drei der fünf Qualitätskriterien nachvollziehbar', keywords: ['relevan', 'genau', 'vollständig', 'konsisten', 'aktu'], min: 3, hint: 'Welche der fünf Kriterien aus Handout §2.3 sind bei uneinheitlichen Excel-Vorlagen und handschriftlichen Zetteln besonders kritisch?' },
        { criterion: 'Ordnet die Datenquellen korrekt den Datenarten zu', keywords: ['strukturiert', 'unstrukturiert', 'halbstrukturiert'], min: 2, hint: 'Welche Quelle hat eine feste Tabellenform, und welche sind Fotos oder Freitext?' },
        { criterion: 'Benennt Datenschutzaspekte (z. B. Personenbezug der Stundenzettel, Messenger)', keywords: ['datenschutz', 'dsgvo', 'personenbez', 'pseudonym', 'anonym', 'mitarbeit'], min: 2, hint: 'Wessen Daten stehen auf den Stundenzetteln, und wo liegen die Messenger-Notizen?' },
        { criterion: 'Leitet konkrete, priorisierte nächste Schritte ab', keywords: ['bereinig', 'vereinheitlich', 'vorlage', 'digitalis', 'pilot', 'erfass', 'ocr'], min: 2, hint: 'Was muss passieren, bevor überhaupt ein Modell trainiert werden kann?' },
      ],
      hints: [
        'Starte mit einer Liste der vier Datenquellen und frage dich bei jeder: Liegt sie in Tabellenform vor oder nicht?',
        'Überlege, welche Informationen das Modell wirklich braucht (geplante vs. tatsächliche Stunden, Dachgröße, Dachform). Welche Quelle liefert sie, und wie verlässlich?',
        'Denk an die Lektion 3: Bestandsaufnahme, Profiling, Bereinigung, Dokumentation. Und an Lektion 4: Namen auf Stundenzetteln lassen sich durch Kennungen ersetzen.',
      ],
      sample: `**Datenquellen und Datenart**
- Angebote/Nachkalkulationen (Excel): **strukturiert**, aber uneinheitliche Vorlagen
- Stundenzettel (Scans): **unstrukturiert**, erst per OCR auslesbar
- Baustellenfotos: **unstrukturiert**
- Messenger-Notizen: **halbstrukturiert** (Zeitstempel und Absender plus Freitext)

**Bewertung**
- *Relevanz:* Für die Stundenprognose sind Nachkalkulationen (Soll/Ist) und Stundenzettel zentral. Fotos und Chat-Notizen liefern höchstens Zusatzinformationen.
- *Vollständigkeit:* Handschriftliche Zettel fehlen vermutlich teilweise. Der Anteil fehlender Aufträge muss gemessen werden.
- *Konsistenz:* Verschiedene Excel-Vorlagen benennen Felder unterschiedlich („Std.“, „Stunden“, „h“), deshalb ist eine Vereinheitlichung nötig.
- *Genauigkeit:* Bei OCR von Handschrift entstehen Lesefehler. Eine Stichprobe muss gegen die Originale geprüft werden.

**Datenschutz**
Stundenzettel enthalten Namen und Arbeitszeiten von Mitarbeitenden, also personenbezogene Daten. Für das Training reicht eine Kennung pro Auftrag (Pseudonymisierung), Namen werden nicht benötigt. Messenger-Gruppen auf privaten Geräten sind problematisch und kein geeigneter Datenspeicher. Betriebsrat bzw. Mitarbeitende früh informieren.

**Nächste Schritte**
1. Einheitliche Nachkalkulationsvorlage einführen und Altdaten der letzten 3 Jahre überführen
2. Stundenerfassung künftig digital (App) statt auf Papier
3. Daten-Assessment: Lücken und Ausreißer messen
4. Erst danach ein einfaches Prognosemodell als Pilot testen`,
    },
    {
      id: 'm01-e2',
      title: 'KI oder nicht KI? Vier Tools einordnen',
      scenario: `Du bist neu als KI-Beauftragte/r bei der **Stadtverwaltung Lindenau (fiktiv)**, rund 400 Beschäftigte. Für ein KI-Register sollst du vier Anwendungen einordnen: (A) ein Formular-Assistent, der Pflichtfelder nach festen Regeln prüft, (B) eine Software, die eingescannte Anträge automatisch der richtigen Fachabteilung zuordnet und mit Beispielen trainiert wurde, (C) ein Chatbot auf Basis eines großen Sprachmodells für Bürgeranfragen, (D) eine Ampelschaltung, die per Kamera Fahrzeuge zählt und die Grünphasen anpasst.`,
      task: `Entscheide für jede Anwendung, ob es sich nach Art. 3 Nr. 1 AI Act **wahrscheinlich um ein KI-System** handelt, und begründe es mit den Definitionsmerkmalen. Ordne außerdem jede KI-Anwendung einer **Kerndisziplin** und, wo möglich, einer **Lernart** zu.`,
      deliverable: 'Tabelle mit vier Zeilen (Tool, KI-System ja/nein, Begründung, Disziplin, Lernart) plus 2–3 Sätze Fazit',
      template: `| Tool | KI-System? | Begründung | Disziplin | Lernart |
|---|---|---|---|---|
| A Formular-Assistent | | | | |
| B Antragszuordnung | | | | |
| C Bürger-Chatbot | | | | |
| D Ampelschaltung | | | | |

Fazit: …`,
      rubric: [
        { criterion: 'Nutzt das Kernmerkmal der Ableitung/Inferenz zur Abgrenzung', keywords: ['ableit', 'inferenz', 'regel', 'gelernt', 'lernt'], min: 2, hint: 'Was unterscheidet laut Erwägungsgrund 12 ein KI-System von reiner Regelautomatisierung?' },
        { criterion: 'Ordnet A als (wahrscheinlich) kein KI-System ein', keywords: ['kein ki', 'nicht ki', 'kein ki-system', 'regelbasiert', 'feste regeln'], min: 1, hint: 'Der Formular-Assistent prüft nur Pflichtfelder nach festen Regeln. Leitet er etwas ab?' },
        { criterion: 'Ordnet passende Kerndisziplinen zu', keywords: ['nlp', 'computer vision', 'sprach', 'bild', 'ocr', 'llm'], min: 2, hint: 'Welche Tools verarbeiten Sprache, welche Bilder?' },
        { criterion: 'Ordnet Lernarten plausibel zu', keywords: ['überwacht', 'supervised', 'selbstüberwacht', 'vortrain', 'bestärk'], min: 1, hint: 'Wurde B mit Beispielen inklusive richtiger Abteilung trainiert? Wie lernen Sprachmodelle?' },
      ],
      hints: [
        'Nimm dir die Tabelle mit den fünf Definitionsmerkmalen aus Lektion 1 vor und gehe sie für jedes Tool durch.',
        'Die Schlüsselfrage lautet: Hat ein Mensch jede Regel selbst geschrieben, oder hat das System Muster aus Daten gelernt?',
        'Bei D lohnt der Blick auf zwei Teile: die Fahrzeugzählung per Kamera (gelernt?) und die Steuerung der Grünphasen (Regeln oder gelernte Strategie?). Frag im Zweifel beim Hersteller nach.',
      ],
      sample: `| Tool | KI-System? | Begründung | Disziplin | Lernart |
|---|---|---|---|---|
| A Formular-Assistent | **Nein** (wahrscheinlich) | Führt nur von Menschen festgelegte Regeln aus, ohne eigene Ableitung (EG 12) | – | – |
| B Antragszuordnung | **Ja** | Leitet aus gescannten Texten ab, welche Abteilung zuständig ist, mit Mustern aus Trainingsbeispielen | NLP + Computer Vision (OCR) | Überwacht (gelabelte Beispiele) |
| C Bürger-Chatbot | **Ja** | LLM erzeugt Inhalte aus Eingaben und beeinflusst die Kommunikation mit Bürgerinnen und Bürgern | NLP / generative KI | Selbstüberwacht vortrainiert, ggf. Feinabstimmung mit RL |
| D Ampelschaltung | **Ja** (wahrscheinlich) | Kamera-Erkennung leitet Fahrzeuganzahl aus Bildern ab, die Ausgabe beeinflusst die physische Umgebung | Computer Vision | Überwacht (Objekterkennung); Steuerung je nach Hersteller regelbasiert oder RL |

**Fazit:** Drei der vier Anwendungen sind voraussichtlich KI-Systeme und gehören ins KI-Register. Bei D sollte die Verwaltung beim Hersteller die genaue Funktionsweise erfragen. Weil der Chatbot direkt mit Menschen interagiert, kommen zusätzlich Transparenzpflichten in Betracht (Art. 50 AI Act).`,
    },
  ],

  glossary: [
    { term: 'KI-System (AI Act)', def: 'Maschinengestütztes System, das mit unterschiedlichem Grad an Autonomie arbeitet und aus Eingaben ableitet, wie es Ausgaben wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen erzeugt (Art. 3 Nr. 1 VO (EU) 2024/1689).' },
    { term: 'Schwache KI', def: 'KI, die auf einen eng umrissenen Zweck beschränkt ist. Alle heute produktiv genutzten KI-Systeme gehören dazu.' },
    { term: 'Maschinelles Lernen (ML)', def: 'Teilgebiet der KI, in dem Systeme Muster aus Daten lernen, statt explizit programmiert zu werden.' },
    { term: 'Deep Learning', def: 'ML mit mehrschichtigen künstlichen neuronalen Netzen. Besonders leistungsfähig bei Bildern, Sprache und Text.' },
    { term: 'Supervised Learning', def: 'Überwachtes Lernen mit gelabelten Daten, also Beispielen mit bekannter richtiger Antwort (Handout-Glossar, S. 7).' },
    { term: 'Reinforcement Learning', def: 'Bestärkendes Lernen: Ein Agent lernt durch Belohnung und Bestrafung in einer Umgebung eine Handlungsstrategie.' },
    { term: 'Foundation Model', def: 'Großes, meist selbstüberwacht vortrainiertes Modell, das für viele Aufgaben angepasst werden kann (z. B. ein LLM).' },
    { term: 'Datenqualität', def: 'Eignung von Daten für einen Zweck, bewertet z. B. nach Relevanz, Genauigkeit, Vollständigkeit, Konsistenz und Aktualität.' },
    { term: 'Pseudonymisierung', def: 'Ersetzen identifizierender Merkmale durch Kennungen, wobei der Schlüssel getrennt und geschützt aufbewahrt wird. Die Daten bleiben personenbezogen (Art. 4 Nr. 5 DSGVO).' },
    { term: 'Anonymisierung', def: 'Endgültiges Entfernen des Personenbezugs, sodass niemand mehr identifiziert werden kann. Anonyme Daten fallen nicht unter die DSGVO (Erwägungsgrund 26).' },
  ],

  sources: [
    { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', publisher: 'EUR-Lex', year: 2024, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { title: 'Art. 3 KI-VO – Begriffsbestimmungen', publisher: 'dejure.org', year: 2024, type: 'Gesetz', url: 'https://dejure.org/gesetze/KI-VO/3.html' },
    { title: 'Updates to the OECD’s definition of an AI system explained', publisher: 'OECD.AI', year: 2023, type: 'Artikel', url: 'https://oecd.ai/en/wonk/ai-system-definition-update' },
    { title: 'Guidelines on the definition of an AI system', publisher: 'Europäische Kommission', year: 2025, type: 'Leitfaden', url: 'https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application' },
    { title: 'On the Opportunities and Risks of Foundation Models (Bommasani et al.)', publisher: 'arXiv / Stanford CRFM', year: 2021, type: 'Paper', url: 'https://arxiv.org/abs/2108.07258' },
    { title: 'Attention Is All You Need (Vaswani et al.)', publisher: 'arXiv', year: 2017, type: 'Paper', url: 'https://arxiv.org/abs/1706.03762' },
    { title: 'ISO/IEC 25012:2008 – Data quality model', publisher: 'ISO', year: 2008, type: 'Norm', url: 'https://www.iso.org/standard/35736.html' },
    { title: 'ISO/IEC 5259-1:2024 – Data quality for analytics and machine learning', publisher: 'ISO', year: 2024, type: 'Norm', url: 'https://www.iso.org/standard/81088.html' },
    { title: 'Art. 4 DSGVO – Begriffsbestimmungen', publisher: 'dejure.org', year: 2016, type: 'Gesetz', url: 'https://dejure.org/gesetze/DSGVO/4.html' },
    { title: 'Guidelines 01/2025 on Pseudonymisation', publisher: 'European Data Protection Board', year: 2025, type: 'Leitfaden', url: 'https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-012025-pseudonymisation_en' },
    { title: 'EuGH C-413/23 P: Musste Behörde über Weitergabe pseudonymisierter Daten informieren?', publisher: 'beck-aktuell', year: 2025, type: 'Artikel', url: 'https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/eugh-c41323p-pseudonymisierte-daten-personenbezogen-weitergabe-dritte-2025-09-05' },
    { title: 'But what is a neural network? | Deep learning chapter 1', publisher: '3Blue1Brown (YouTube)', year: 2017, type: 'Video', url: 'https://www.youtube.com/watch?v=aircAruvnKk' },
  ],
};
