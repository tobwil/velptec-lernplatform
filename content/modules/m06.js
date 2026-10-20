export default {
  id: 'm06',
  order: 6,
  title: 'Change-Management & KI-Kompetenz',
  subtitle: 'Menschen mitnehmen: Kommunikation, ADKAR, Kotter, Mitbestimmung und Schulungspflicht',
  icon: 'people',
  isNew: false,
  minutes: 100,
  handout: [
    { section: '8', title: 'Change-Management', page: 5 },
    { section: '5.2', title: 'Erfolgsfaktoren (Change-Management-Plan)', page: 3 },
    { section: '13', title: 'Best-Practice-Checkliste (KI-Literacy)', page: 7 }
  ],
  objectives: [
    'Du kannst die vier Change-Hebel des Handouts (Kommunikation, Akzeptanz, Kultur, Führung) in konkrete Maßnahmen für ein KI-Projekt übersetzen.',
    'Du kannst Ängste vor Jobverlust mit belastbaren Studien (IAB, OECD, WEF, Bitkom) sachlich einordnen.',
    'Du kannst ADKAR und Kotters 8 Schritte anwenden und eine Stakeholder-Analyse durchführen.',
    'Du kennst die Beteiligungsrechte des Betriebsrats bei KI (§§ 80, 87, 90, 95 BetrVG) und die Informationspflicht nach Art. 26 Abs. 7 AI Act.',
    'Du kannst ein Programm zur KI-Kompetenz nach Art. 4 AI Act inklusive Champions-Netzwerk planen und dokumentieren.'
  ],
  lessons: [
    // ───────────────────────── Lektion 1 ─────────────────────────
    {
      id: 'm06-l1',
      title: 'Warum KI-Projekte an Menschen scheitern – und gelingen',
      minutes: 30,
      blocks: [
        { type: 'video', scene: 'change' },
        {
          type: 'text',
          md: `Die Technik ist selten das Hauptproblem. Die Boston Consulting Group fasst ihre Erfahrung aus KI-Programmen im **„70-20-10-Prinzip"** zusammen: Erfolgreiche Unternehmen stecken rund **10 %** des Aufwands in Algorithmen, **20 %** in Technologie und Daten und **70 %** in **Menschen und Prozesse**. In derselben Studie (2024, 1.000 Führungskräfte) zeigten **74 %** der Unternehmen noch keinen greifbaren Wert aus KI. ([BCG, 24.10.2024](https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value))

Auch in Deutschland ist der Qualifizierungsbedarf groß: Laut Bitkom-Studie „Künstliche Intelligenz in Deutschland" (Befragung von 604 Unternehmen, 2025) bieten **43 %** der Unternehmen ihren Beschäftigten **keine KI-Schulungen** an; nur **8 %** schulen alle Mitarbeitenden.

Das Handout nennt vier Hebel für Change-Management bei KI:`
        },
        {
          type: 'handout',
          section: '8',
          page: 5,
          quote: '1. Kommunikation: Nutzen transparent machen, Ängste adressieren. 2. Mitarbeiterakzeptanz: Frühzeitige Einbindung, Trainings, Pilotnutzer. 3. Kultur: Fehlertoleranz, Innovationsfreude, lebenslanges Lernen fördern. 4. Führung: Vorleben der KI-Nutzung, klare Verantwortlichkeiten.',
          md: 'Diese vier Hebel sind richtig – aber noch abstrakt. Die Tabelle zeigt, was sie im Alltag eines KI-Managers konkret bedeuten.'
        },
        {
          type: 'table',
          caption: 'Die vier Handout-Hebel in konkreten Maßnahmen',
          head: ['Hebel', 'Konkrete Maßnahmen', 'Typischer Fehler'],
          rows: [
            ['Kommunikation', 'Ehrliche Antwort auf „Was bedeutet das für meinen Job?", Nutzen am eigenen Arbeitsplatz zeigen, FAQ und offene Sprechstunde', 'Nur Erfolgsmeldungen, Schweigen zu Personalfragen'],
            ['Mitarbeiterakzeptanz', 'Fachbereiche bei Use-Case-Auswahl beteiligen, Pilotnutzer aus dem Team, Feedbackschleifen', 'Tool wird „von oben" ausgerollt, Nutzer erfahren es per Rundmail'],
            ['Kultur', 'Lernzeit einplanen, Fehler im Pilot als Erkenntnis werten, Use Cases teilen', 'Wer Fehler mit KI macht, wird bloßgestellt'],
            ['Führung', 'Führungskräfte nutzen KI sichtbar selbst, klare Rollen (wer entscheidet, wer prüft)', 'Chef fordert KI-Nutzung, nutzt sie selbst nicht']
          ]
        },
        {
          type: 'text',
          md: `### Angst vor Jobverlust: Was sagen die Daten?

- **IAB (Kurzbericht 5/2024):** Der Anteil sozialversicherungspflichtig Beschäftigter in Berufen, in denen mindestens 70 % der Tätigkeiten von Computern übernommen werden *könnten*, stieg von **34 % (2019) auf 38 % (2022)** – vor allem durch generative KI. Das IAB betont: Diese Potenziale wurden in der Vergangenheit nicht immer und nicht vollständig ausgeschöpft.
- **OECD (Employment Outlook 2023):** Berufe mit dem höchsten Automatisierungsrisiko machen im OECD-Schnitt rund **27 %** der Beschäftigung aus; Auswirkungen auf die Gesamtbeschäftigung waren bis dahin kaum messbar.
- **WEF (Future of Jobs Report 2025):** Unternehmen erwarten bis 2030 weltweit **170 Mio. neue** und **92 Mio. wegfallende** Stellen – netto **+78 Mio.** Rund **39 %** der heutigen Kernkompetenzen dürften sich bis 2030 verändern. Achtung: Das sind Erwartungen von Arbeitgebern, keine Messwerte.
- **Bitkom (2025):** **67 %** der deutschen Unternehmen erwarten in den nächsten fünf Jahren keine Auswirkungen von KI auf ihre Beschäftigtenzahl, **20 %** einen Rückgang, **7 %** einen Anstieg. 31 % sehen KI als Hebel gegen den Fachkräftemangel.`
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Potenzial ist keine Prognose.** Dass eine Tätigkeit automatisierbar *wäre*, heißt nicht, dass der Job wegfällt. Meist verändern sich Aufgaben. Ehrliche Kommunikation sagt beides: Was sich ändert – und was wir tun, damit niemand zurückbleibt.'
        },
        {
          type: 'update',
          title: 'Aktualisierung: Belege statt Bauchgefühl',
          md: 'Das Handout empfiehlt, „Ängste zu adressieren", nennt aber keine Daten. Für Gespräche mit Belegschaft und Betriebsrat solltest du auf seriöse, aktuelle Studien zurückgreifen und deren Grenzen offen benennen (Potenziale vs. tatsächliche Effekte, Arbeitgebererwartungen vs. Messdaten).',
          sources: [
            { title: 'IAB-Kurzbericht 5/2024: Folgen des technologischen Wandels für den Arbeitsmarkt', url: 'https://doku.iab.de/kurzber/2024/kb2024-05.pdf' },
            { title: 'OECD Employment Outlook 2023 – Pressemitteilung', url: 'https://www.oecd.org/en/about/news/press-releases/2023/07/oecd-job-markets-remain-tight-though-inflation-is-hitting-real-wages.html' },
            { title: 'WEF: Future of Jobs Report 2025 – Pressemitteilung', url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/' },
            { title: 'Bitkom: Künstliche Intelligenz in Deutschland (Studie 2025)', url: 'https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf' }
          ]
        },
        {
          type: 'flipcards',
          cards: [
            { front: '„Die KI nimmt mir meinen Job weg."', back: 'Ernst nehmen, nicht wegreden. Zeigen, welche Aufgaben sich ändern, und konkrete Zusagen machen (z. B. Qualifizierung, keine betriebsbedingten Kündigungen wegen des Projekts – nur wenn das wirklich gilt).' },
            { front: '„Damit werde ich überwacht."', back: 'Transparenz herstellen: Welche Daten werden erfasst, wer sieht sie? Leistungs- und Verhaltenskontrolle ausschließen bzw. per Betriebsvereinbarung regeln.' },
            { front: '„Ich bin zu alt / nicht technisch genug."', back: 'Niedrigschwellige Formate (Lernen im Tandem, Sprechstunden), Erfolgserlebnisse am eigenen Arbeitsplatz ermöglichen.' },
            { front: '„Wenn die KI Fehler macht, bin ich schuld."', back: 'Klare Regeln, wer prüft und freigibt; Fehlerkultur im Pilot; Verantwortung liegt bei Prozess und Organisation, nicht beim Einzelnen.' },
            { front: '„Das ist nur noch mehr Arbeit."', back: 'Mit einem echten Schmerzpunkt starten, Zeitgewinn messen und zurückspiegeln; Lernzeit offiziell einplanen.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Einführung eines KI-Dokumentationsassistenten',
          company: 'Sanitätshaus Lorenz GmbH (fiktiv), 120 MA, Kassel',
          scenario: `Ein KI-Assistent soll Beratungsgespräche in der Orthopädietechnik zusammenfassen und Kostenvoranschläge vorbereiten. In der Belegschaft kursiert das Gerücht, dass „der Innendienst halbiert wird". Die ersten Info-Mails wurden kaum gelesen.`,
          steps: [
            'Gerüchte ernst nehmen: Geschäftsführung und KI-Manager stellen sich in einer Betriebsversammlung den Fragen; klare Aussage zur Personalplanung.',
            'Nutzen konkret machen: Zwei Innendienst-Mitarbeitende testen das Tool vier Wochen und berichten selbst – Zeitgewinn, aber auch Schwächen.',
            'Betriebsrat früh beteiligen (Unterrichtung nach § 90 BetrVG, Mitbestimmung bei möglicher Leistungskontrolle).',
            'Kurze, rollenbezogene Schulungen anbieten und Lernzeit einplanen.',
            'Nach dem Pilot Kennzahlen und Erfahrungen offen teilen und die Weiterentwicklung gemeinsam planen.'
          ],
          takeaway: 'Glaubwürdigkeit entsteht durch Beteiligung und Ehrlichkeit. Kolleginnen und Kollegen, die selbst testen und berichten, überzeugen mehr als jede Hochglanz-Präsentation.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Wie verteilt sich laut BCG-„70-20-10-Prinzip" der Aufwand bei erfolgreichen KI-Vorhaben?',
          options: ['70 % Algorithmen, 20 % Daten, 10 % Menschen', '70 % Menschen und Prozesse, 20 % Technologie und Daten, 10 % Algorithmen', '70 % Hardware, 20 % Software, 10 % Schulung', 'Gleichmäßig auf alle Bereiche'],
          answer: 1,
          explain: 'BCG (2024): Die erfolgreichen Unternehmen investieren den Großteil in Menschen und Prozesse. Das passt zum Handout, das Change-Management als Erfolgsfaktor (§ 5.2) und Best Practice (§ 13) nennt.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Laut IAB arbeiten 38 % der Beschäftigten in Berufen mit hohem Substituierbarkeitspotenzial – also werden diese Jobs in den nächsten Jahren wegfallen.',
          answer: false,
          explain: 'Substituierbarkeitspotenzial beschreibt, was technisch möglich wäre. Das IAB weist ausdrücklich darauf hin, dass solche Potenziale in der Vergangenheit nicht immer und nicht vollständig ausgeschöpft wurden.'
        }
      ]
    },
    // ───────────────────────── Lektion 2 ─────────────────────────
    {
      id: 'm06-l2',
      title: 'Modelle für den Wandel: ADKAR, Kotter und Stakeholder-Analyse',
      minutes: 35,
      blocks: [
        {
          type: 'text',
          md: `Change-Modelle helfen dir, nichts Wichtiges zu vergessen und Probleme zu diagnostizieren. Zwei Modelle ergänzen sich besonders gut:

- **ADKAR** (Prosci) betrachtet die **einzelne Person**: Veränderung gelingt nur, wenn jeder Mensch fünf Stufen nacheinander durchläuft.
- **Kotters 8 Schritte** betrachten die **Organisation**: Wie schaffe ich Dringlichkeit, eine Führungskoalition und Momentum?`
        },
        {
          type: 'steps',
          items: [
            { title: 'A – Awareness (Bewusstsein)', md: 'Verstehen, *warum* die Veränderung nötig ist. KI-Beispiel: „Wir bekommen 30 % mehr Anfragen bei gleichem Team – ohne Unterstützung schaffen wir das nicht."' },
            { title: 'D – Desire (Wunsch)', md: 'Sich *entscheiden*, mitzumachen. Was habe ich persönlich davon? Weniger Routine, mehr Zeit für Beratung.' },
            { title: 'K – Knowledge (Wissen)', md: '*Wissen, wie* es geht: Schulung zu Tool, Prompting, Datenregeln und Grenzen der KI.' },
            { title: 'A – Ability (Fähigkeit)', md: 'Das Wissen *im Alltag anwenden* können: Übungszeit, Ansprechpartner, Vorlagen, Lernen am echten Fall.' },
            { title: 'R – Reinforcement (Verstärkung)', md: 'Das Neue *verankern*: Erfolge sichtbar machen, Feedback, Anpassung von Prozessen und Zielen, kein Rückfall in alte Routinen.' }
          ]
        },
        { type: 'interactive', widget: 'adkar-check', props: {} },
        {
          type: 'youtube',
          id: 'zYe2fG8m4Ow',
          title: 'The Prosci ADKAR® Change Management Model',
          channel: 'Prosci',
          lang: 'en',
          minutes: 1
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'ADKAR als Diagnosewerkzeug',
          md: 'Wenn ein Rollout stockt, frage: **An welcher Stufe hängen die Leute?** Die erste schwache Stufe ist der Engpass. Mehr Schulung (Knowledge) hilft nicht, wenn niemand den Sinn sieht (Awareness) oder keine Lust hat (Desire).'
        },
        {
          type: 'table',
          caption: 'Kotters 8 Schritte (Bezeichnungen nach Kotter Inc.) – übertragen auf eine KI-Einführung',
          head: ['Schritt', 'KI-Beispiel'],
          rows: [
            ['1. Create a Sense of Urgency', 'Konkrete Zahlen zu Engpässen, Wettbewerb, Fachkräftemangel teilen'],
            ['2. Build a Guiding Coalition', 'KI-Steuerkreis: Geschäftsführung, Fachbereiche, IT, Datenschutz, Betriebsrat'],
            ['3. Form a Strategic Vision', '„Wir nutzen KI, um Routine abzubauen und mehr Zeit für Kunden zu haben."'],
            ['4. Enlist a Volunteer Army', 'Champions-Netzwerk aus Freiwilligen in allen Bereichen'],
            ['5. Enable Action by Removing Barriers', 'Freigegebene Tools, klare Richtlinie, Lernzeit, IT-Support'],
            ['6. Generate Short-Term Wins', 'Erste Erfolge nach 4–8 Wochen zeigen („Use Case des Monats")'],
            ['7. Sustain Acceleration', 'Erfolgreiche Piloten skalieren, nächste Use Cases angehen'],
            ['8. Institute Change', 'KI in Prozessbeschreibungen, Einarbeitung und Zielsystemen verankern']
          ]
        },
        {
          type: 'youtube',
          id: 'SGYmPMcgDPg',
          title: "Kotter's 8 Steps for Leading Change",
          channel: 'Kotter',
          lang: 'en',
          minutes: 4
        },
        {
          type: 'text',
          md: `### Stakeholder-Analyse

Bevor du kommunizierst, kläre: **Wer ist betroffen, wer entscheidet mit, wer kann blockieren?** Typische Stakeholder bei KI-Projekten sind Geschäftsführung, Fachbereichsleitungen, Endnutzer, IT, Datenschutzbeauftragte, Informationssicherheit, Betriebsrat, Kundinnen und Kunden sowie Lieferanten bzw. KI-Anbieter.

Ein bewährtes Werkzeug ist die **Einfluss-Interesse-Matrix**: Du ordnest jede Gruppe nach ihrem Einfluss auf das Projekt und ihrem Interesse daran ein und leitest daraus die Strategie ab. Das Handout sieht die Stakeholder-Analyse ausdrücklich schon in der Initiierungsphase vor (§ 12, S. 6).`
        },
        {
          type: 'table',
          caption: 'Einfluss-Interesse-Matrix mit Strategien',
          head: ['Quadrant', 'Beispiel', 'Strategie'],
          rows: [
            ['Hoher Einfluss, hohes Interesse', 'Geschäftsführung, Betriebsrat, Leitung des Pilotbereichs', 'Eng einbinden, gemeinsam entscheiden'],
            ['Hoher Einfluss, geringes Interesse', 'Finanzleitung, IT-Leitung', 'Zufriedenstellen, gezielt informieren (Kosten, Sicherheit)'],
            ['Geringer Einfluss, hohes Interesse', 'Mitarbeitende im Pilotbereich', 'Aktiv informieren, beteiligen, Feedback einholen'],
            ['Geringer Einfluss, geringes Interesse', 'Andere Abteilungen', 'Beobachten, allgemein informieren']
          ]
        },
        {
          type: 'praxis',
          title: 'Ein stockender Copilot-Rollout mit ADKAR diagnostizieren',
          company: 'Kreisverwaltung Waldfeld (fiktiv), 600 Beschäftigte',
          scenario: `Die Verwaltung hat für 150 Beschäftigte einen KI-Assistenten für Texte und Zusammenfassungen lizenziert. Nach drei Monaten nutzen ihn nur 20 Personen regelmäßig. Die Amtsleitung fragt dich, ob man die Lizenzen kündigen soll.`,
          steps: [
            'Kurzbefragung entlang der ADKAR-Stufen (je 1–2 Fragen) und Gespräche mit Nutzenden und Nicht-Nutzenden.',
            'Ergebnis: Awareness und Desire sind gut, aber viele wissen nicht, welche Daten sie eingeben dürfen (Knowledge) und haben keine Zeit zum Ausprobieren (Ability).',
            'Maßnahmen: Datenampel als einseitige Kurzanleitung, Vorlagen für typische Verwaltungsschreiben, 30-Minuten-Lernslots pro Woche für sechs Wochen.',
            'Champions aus jedem Amt benennen, die Fragen vor Ort beantworten.',
            'Nach sechs Wochen Nutzung und Zufriedenheit erneut messen und Erfolge im Intranet zeigen (Reinforcement).'
          ],
          takeaway: 'Nicht das Tool war das Problem, sondern zwei konkrete ADKAR-Lücken. Eine gezielte Diagnose spart Geld – und Frust.'
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die ADKAR-Stufen in die richtige Reihenfolge.',
          items: ['Awareness – Bewusstsein für die Notwendigkeit', 'Desire – Wunsch, mitzumachen', 'Knowledge – Wissen, wie es geht', 'Ability – Fähigkeit zur Umsetzung', 'Reinforcement – Verstärkung und Verankerung'],
          explain: 'ADKAR ist sequenziell: Ohne Bewusstsein kein Wunsch, ohne Wissen keine Fähigkeit. Die erste schwache Stufe ist der Engpass.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Stakeholder der passenden Strategie zu.',
          pairs: [
            ['Betriebsrat (hoher Einfluss, hohes Interesse)', 'Eng einbinden, gemeinsam entscheiden'],
            ['IT-Leitung (hoher Einfluss, geringes Interesse)', 'Zufriedenstellen, gezielt informieren'],
            ['Mitarbeitende im Pilotbereich (geringer Einfluss, hohes Interesse)', 'Aktiv informieren und beteiligen'],
            ['Nicht betroffene Abteilungen', 'Beobachten, allgemein informieren']
          ],
          explain: 'Die Einfluss-Interesse-Matrix hilft, Kommunikationsaufwand gezielt einzusetzen. Beim Betriebsrat kommen zusätzlich gesetzliche Beteiligungsrechte hinzu (Lektion 3).'
        }
      ]
    },
    // ───────────────────────── Lektion 3 ─────────────────────────
    {
      id: 'm06-l3',
      title: 'Mitbestimmung und KI-Kompetenz nach Art. 4 AI Act',
      minutes: 35,
      blocks: [
        {
          type: 'text',
          md: `In Betrieben mit Betriebsrat ist dessen Beteiligung bei KI **keine Kür, sondern Pflicht** – und eine große Chance: Ein frühzeitig eingebundener Betriebsrat ist oft der beste Multiplikator für Akzeptanz. Das Betriebsrätemodernisierungsgesetz von 2021 hat KI ausdrücklich ins Betriebsverfassungsgesetz aufgenommen.`
        },
        {
          type: 'table',
          caption: 'Beteiligungsrechte des Betriebsrats bei KI (Auswahl)',
          head: ['Norm', 'Inhalt', 'Praxisfolge'],
          rows: [
            ['§ 90 Abs. 1 Nr. 3 BetrVG', 'Unterrichtung und Beratung bei der Planung von Arbeitsverfahren und Arbeitsabläufen **einschließlich des Einsatzes von Künstlicher Intelligenz**', 'Rechtzeitig, also schon in der Planungsphase informieren – nicht erst beim Rollout'],
            ['§ 87 Abs. 1 Nr. 6 BetrVG', 'Mitbestimmung bei Einführung und Anwendung technischer Einrichtungen, die dazu bestimmt sind, Verhalten oder Leistung der Arbeitnehmer zu überwachen', 'Nach ständiger Rechtsprechung des BAG genügt die objektive Eignung zur Überwachung – das trifft auf viele KI-Tools mit Protokollen zu. Ohne Einigung keine Einführung.'],
            ['§ 80 Abs. 3 BetrVG', 'Muss der Betriebsrat Einführung oder Anwendung von KI beurteilen, **gilt die Hinzuziehung eines Sachverständigen als erforderlich**', 'Kosten für KI-Sachverständige trägt der Arbeitgeber; früh einplanen und ggf. einen ständigen Sachverständigen vereinbaren'],
            ['§ 95 Abs. 2a BetrVG', 'Mitbestimmung bei Auswahlrichtlinien gilt auch, wenn bei ihrer Aufstellung KI zum Einsatz kommt', 'Relevant für KI im Recruiting oder bei Versetzungen'],
            ['Art. 26 Abs. 7 AI Act', 'Betreiber, die Arbeitgeber sind, informieren vor Einsatz eines Hochrisiko-KI-Systems am Arbeitsplatz Arbeitnehmervertretung und betroffene Beschäftigte', 'Zusätzliche, EU-rechtliche Informationspflicht']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Rahmen-Betriebsvereinbarung KI',
          md: 'Statt für jedes Tool neu zu verhandeln, schließen viele Unternehmen eine **Rahmen-Betriebsvereinbarung KI**: Grundsätze (z. B. keine Leistungs- und Verhaltenskontrolle, keine automatisierten Personalentscheidungen), ein Verfahren zur Prüfung neuer Tools, Qualifizierungszusagen und ein paritätisches Gremium. Neue Anwendungen werden dann als Anlage ergänzt.'
        },
        {
          type: 'handout',
          section: '13',
          page: 7,
          quote: '10. Kompetenzen intern aufbauen (KI-Literacy)',
          md: 'Was im Handout noch als Best Practice formuliert ist, ist seit dem 2. Februar 2025 eine gesetzliche Pflicht.'
        },
        {
          type: 'update',
          title: 'Aktualisierung: KI-Kompetenz ist Pflicht (Art. 4 AI Act)',
          md: `- **Seit 02.02.2025** müssen Anbieter und Betreiber von KI-Systemen Maßnahmen ergreifen, damit ihr Personal und andere Personen, die in ihrem Auftrag mit KI umgehen, über ausreichende KI-Kompetenz verfügen – abgestimmt auf Vorwissen, Einsatzkontext und Betroffene.
- **Digital Omnibus (VO (EU) 2026/1744, in Kraft seit 27.07.2026):** Art. 4 wurde neu gefasst. Die Pflicht zu Maßnahmen bleibt, es muss aber kein bestimmtes Kompetenzniveau jeder einzelnen Person garantiert werden; Kommission und Mitgliedstaaten sollen insbesondere KMU unterstützen.
- **Laut EU-Kommission** ist **kein Zertifikat** nötig; ein interner Nachweis über Schulungen und Maßnahmen ist sinnvoll. Aufsicht und Durchsetzung gelten ab **02.08.2026** (in Deutschland: Bundesnetzagentur).
- Für Betreiber von **Hochrisiko-Systemen** gilt zusätzlich: Die Personen, die die menschliche Aufsicht ausüben, müssen dafür kompetent und geschult sein (Art. 26).`,
          sources: [
            { title: 'EU-Kommission: AI Literacy – Questions & Answers', url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers' },
            { title: 'Art. 4 AI Act (konsolidierte Lesefassung)', url: 'https://artificialintelligenceact.eu/article/4/' },
            { title: 'Verordnung (EU) 2026/1744 – EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' }
          ]
        },
        {
          type: 'steps',
          items: [
            { title: '1. Ausgangslage klären', md: 'Welche KI-Systeme setzt ihr ein? Seid ihr Anbieter oder Betreiber? Welche Risiken haben die Systeme? (So strukturiert es auch die Kommission in ihren FAQ.)' },
            { title: '2. Zielgruppen bilden', md: 'Alle Nutzenden (Basis), Power-User/Champions, technische Rollen (Admins, Entwicklung), Führungskräfte, Betriebsrat und Datenschutz, Personen mit Aufsichtsfunktion bei Hochrisiko-KI.' },
            { title: '3. Inhalte festlegen', md: 'Basis: Was ist KI, Chancen und Grenzen (Halluzinationen, Bias), Datenregeln, Kennzeichnung, interne Richtlinie. Vertiefung je Rolle: Prompting, Prüfen von Ergebnissen, Rechtliches, Sicherheit.' },
            { title: '4. Formate mischen', md: 'Kurze E-Learnings, Live-Workshops am echten Fall, Sprechstunden, Lernen im Tandem, Prompt-Bibliothek.' },
            { title: '5. Dokumentieren', md: 'Wer hat wann was gelernt? Teilnahmelisten, Inhalte, Aktualisierungen – als interner Nachweis.' },
            { title: '6. Wiederholen und anpassen', md: 'Tools und Risiken ändern sich; Auffrischung mindestens jährlich und bei neuen Systemen.' }
          ]
        },
        {
          type: 'text',
          md: `### Power-User und Champions-Netzwerk

Ein **Champions-Netzwerk** besteht aus freiwilligen Mitarbeitenden aus allen Bereichen, die KI früh ausprobieren, Use Cases sammeln, Kolleginnen und Kollegen vor Ort helfen und Feedback an das KI-Team geben. Das entspricht Kotters Schritt 4 („Enlist a Volunteer Army") und stärkt in ADKAR vor allem *Desire* und *Ability*.

Gute Praxis: Champions bekommen offiziell Zeit (z. B. 2–4 Stunden pro Monat), früheren Zugang zu neuen Funktionen, einen eigenen Austauschkanal und Sichtbarkeit (z. B. „Use Case des Monats").`
        },
        {
          type: 'praxis',
          title: 'ogGPT: Interner KI-Assistent mit Community-Ansatz',
          company: 'Otto Group, Hamburg (reales Beispiel)',
          scenario: `Die Otto Group stellte Ende September 2023 mit **ogGPT** einen internen, datenschutzkonformen KI-Assistenten (Azure OpenAI Service, Hosting in der EU, keine Nutzung der Chats fürs Modelltraining) für rund 26.000 Beschäftigte im DACH-Raum bereit; in der ersten Woche nutzten ihn laut Unternehmen über 4.200 Personen. Ein Jahr später (September 2024) berichtete das Unternehmen von **7.000 monatlich aktiven Nutzenden** – bei freiwilliger Nutzung und ohne von der Unternehmensleitung vorgegebene Nutzungsziele.`,
          steps: [
            'Ein eigenes, sicheres Werkzeug statt Verbot privater Tools bereitstellen.',
            'Einstiegsformate und intensive Prompting-Workshops anbieten.',
            'Eine konzernweite „Discover AI"-Community mit eigener Konferenz aufbauen.',
            'Hackathons, „Use Case of the Week" mit Schritt-für-Schritt-Anleitungen und eine Veranstaltungsreihe mit über 25 Praxis-Sessions durchführen.',
            'Funktionen laufend nach Nutzerbedarf erweitern (u. a. Prompt-Marktplatz, CustomGPTs).'
          ],
          takeaway: 'Akzeptanz entstand hier nicht durch Pflichtvorgaben, sondern durch ein gutes Werkzeug, Lernangebote und eine aktive Community. Die Zahlen sind Unternehmensangaben.',
          source: { title: 'Otto Group: Transformation & Technology – ogGPT simplifies entry into AI age (18.09.2024)', url: 'https://www.ottogroup.com/en/stories/story/transformation-with-technology-oggpt-simplifies-entry-into-the-ai-age.php' }
        },
        {
          type: 'praxis',
          title: 'Rahmen-Betriebsvereinbarung KI vorbereiten',
          company: 'Kunststofftechnik Hagen GmbH (fiktiv), 310 MA, Westfalen',
          scenario: `Die Geschäftsführung möchte innerhalb eines Jahres mehrere KI-Anwendungen einführen (Schreibassistent, Qualitätsprüfung per Kamera, Wissens-Chatbot). Der Betriebsrat ist skeptisch und hat angekündigt, „jedes Tool einzeln prüfen" zu wollen.`,
          steps: [
            'Den Betriebsrat schon in der Planungsphase unterrichten (§ 90 Abs. 1 Nr. 3 BetrVG) und die Roadmap offenlegen.',
            'Einen KI-Sachverständigen für den Betriebsrat ermöglichen (§ 80 Abs. 3 BetrVG) – Kosten im Budget einplanen.',
            'Gemeinsam Grundsätze formulieren: keine Leistungs- und Verhaltenskontrolle durch KI, keine automatisierten Personalentscheidungen, Qualifizierungszusage.',
            'Ein Prüfverfahren für neue Tools mit Steckbrief (Zweck, Daten, Protokolle, Zugriffe) vereinbaren.',
            'Schulungskonzept nach Art. 4 AI Act als Anlage aufnehmen.'
          ],
          takeaway: 'Eine Rahmenvereinbarung schafft Vertrauen und beschleunigt spätere Einführungen, weil nicht jedes Mal bei null begonnen wird.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Regelungen des BetrVG erwähnen Künstliche Intelligenz ausdrücklich? (Mehrfachauswahl)',
          options: ['§ 90 Abs. 1 Nr. 3 (Unterrichtung und Beratung)', '§ 80 Abs. 3 (Sachverständige)', '§ 95 Abs. 2a (Auswahlrichtlinien)', '§ 87 Abs. 1 Nr. 6 (technische Einrichtungen)'],
          answer: [0, 1, 2],
          explain: 'KI wird in §§ 80 Abs. 3, 90 Abs. 1 Nr. 3 und 95 Abs. 2a ausdrücklich genannt. § 87 Abs. 1 Nr. 6 spricht allgemein von technischen Einrichtungen – greift aber bei vielen KI-Tools trotzdem.'
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze den Lückentext zu § 80 Abs. 3 BetrVG.',
          text: 'Muss der Betriebsrat die Einführung von KI beurteilen, gilt die Hinzuziehung eines {{Sachverständigen|Sachverständiger|Experten}} als erforderlich.',
          explain: 'Seit dem Betriebsrätemodernisierungsgesetz (2021) wird die Erforderlichkeit eines Sachverständigen bei KI-Themen gesetzlich vermutet – der Betriebsrat muss sie nicht mehr gesondert begründen.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'order',
      q: 'Bringe die ersten fünf Schritte nach Kotter in die richtige Reihenfolge.',
      items: ['Create a Sense of Urgency', 'Build a Guiding Coalition', 'Form a Strategic Vision', 'Enlist a Volunteer Army', 'Enable Action by Removing Barriers'],
      explain: 'Kotters Modell beginnt mit Dringlichkeit und Führungskoalition, bevor Vision und Beteiligung folgen. Danach: Short-Term Wins, Sustain Acceleration, Institute Change.'
    },
    {
      type: 'single',
      q: 'Ein Team kennt den Nutzen eines neuen KI-Tools und möchte es nutzen, weiß aber nicht, welche Daten erlaubt sind. Welche ADKAR-Stufe ist der Engpass?',
      options: ['Awareness', 'Desire', 'Knowledge', 'Reinforcement'],
      answer: 2,
      explain: 'Bewusstsein und Wunsch sind vorhanden, es fehlt Wissen. Gezielte Schulung und eine Datenampel helfen hier mehr als weitere Überzeugungsarbeit.'
    },
    {
      type: 'match',
      q: 'Ordne die Handout-Hebel (§ 8, S. 5) passenden Maßnahmen zu.',
      pairs: [
        ['Kommunikation', 'Nutzen transparent machen, Ängste offen ansprechen'],
        ['Mitarbeiterakzeptanz', 'Pilotnutzer aus dem Team einbinden'],
        ['Kultur', 'Fehler im Pilot als Lernchance behandeln'],
        ['Führung', 'Führungskräfte nutzen KI sichtbar selbst']
      ],
      explain: 'Das Handout nennt Kommunikation, Mitarbeiterakzeptanz, Kultur und Führung als die vier Hebel des Change-Managements.'
    },
    {
      type: 'tf',
      q: 'Nach Art. 4 AI Act müssen alle Beschäftigten ein externes KI-Zertifikat erwerben.',
      answer: false,
      explain: 'Laut EU-Kommission ist kein Zertifikat nötig. Unternehmen müssen Maßnahmen zur KI-Kompetenz ergreifen und sollten diese intern dokumentieren.'
    },
    {
      type: 'single',
      q: 'Welche Zahlen nennt der WEF Future of Jobs Report 2025 für den weltweiten Stellenwandel bis 2030?',
      options: ['300 Mio. Stellen fallen ersatzlos weg', '170 Mio. neue, 92 Mio. wegfallende Stellen, netto +78 Mio.', '50 Mio. neue Stellen, keine wegfallenden', 'Keine Veränderung erwartet'],
      answer: 1,
      explain: 'Der WEF-Report (Januar 2025) basiert auf Erwartungen von über 1.000 Arbeitgebern. Er prognostiziert starken Wandel, aber netto ein Plus – verbunden mit großem Weiterbildungsbedarf.'
    },
    {
      type: 'multi',
      q: 'Was ist bei der Einführung eines KI-Tools, das Arbeitsprotokolle mit Nutzerkennung speichert, in einem Betrieb mit Betriebsrat zu beachten? (Mehrfachauswahl)',
      options: ['Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG, da das Tool objektiv zur Überwachung geeignet ist', 'Unterrichtung bereits in der Planungsphase (§ 90 BetrVG)', 'Der Betriebsrat darf keine Sachverständigen hinzuziehen', 'Möglichkeit eines KI-Sachverständigen nach § 80 Abs. 3 BetrVG'],
      answer: [0, 1, 3],
      explain: 'Bei technischen Einrichtungen reicht die objektive Eignung zur Überwachung. Der Betriebsrat ist frühzeitig zu unterrichten und kann bei KI einen Sachverständigen hinzuziehen, dessen Erforderlichkeit gesetzlich vermutet wird.'
    },
    {
      type: 'cloze',
      q: 'Ergänze das BCG-Prinzip.',
      text: 'Nach dem 70-20-10-Prinzip entfallen rund 70 % des Aufwands erfolgreicher KI-Vorhaben auf {{Menschen und Prozesse|Menschen|People and Processes}}.',
      explain: 'BCG (2024): 10 % Algorithmen, 20 % Technologie und Daten, 70 % Menschen und Prozesse.'
    },
    {
      type: 'single',
      q: 'Welche Aussage zur Bitkom-Studie 2025 trifft zu?',
      options: ['Alle Unternehmen bieten KI-Schulungen an', '43 % der Unternehmen bieten bislang keine KI-Schulungen an', 'Die Mehrheit erwartet massiven Stellenabbau durch KI', 'KI wird in deutschen Unternehmen kaum genutzt'],
      answer: 1,
      explain: 'Laut Bitkom bieten 43 % keine KI-Schulungen an, nur 8 % schulen alle Mitarbeitenden. 67 % erwarten keine Auswirkungen auf die Beschäftigtenzahl; 36 % der Unternehmen nutzen KI bereits.'
    },
    {
      type: 'tf',
      q: 'Ein Champions-Netzwerk stärkt vor allem die ADKAR-Stufen Desire und Ability, weil Kolleginnen und Kollegen vor Ort motivieren und bei der Anwendung helfen.',
      answer: true,
      explain: 'Champions sind glaubwürdige Vorbilder (Desire) und praktische Ansprechpartner im Alltag (Ability). Sie entsprechen Kotters „Volunteer Army".'
    },
    {
      type: 'match',
      q: 'Ordne die Quellen ihren Kernaussagen zu.',
      pairs: [
        ['IAB-Kurzbericht 5/2024', 'Substituierbarkeitspotenzial: 38 % der Beschäftigten in Berufen mit hohem Potenzial (2019: 34 %)'],
        ['OECD Employment Outlook 2023', 'Rund 27 % der Beschäftigung in Berufen mit höchstem Automatisierungsrisiko'],
        ['WEF Future of Jobs 2025', 'Rund 39 % der Kernkompetenzen ändern sich bis 2030'],
        ['Bitkom-Studie 2025', '67 % der Unternehmen erwarten keine Auswirkung auf die Beschäftigtenzahl']
      ],
      explain: 'Alle vier Studien zeigen Wandel, aber keine Massenarbeitslosigkeit als Gewissheit. Wichtig ist, ihre Grenzen zu kennen: Potenziale und Erwartungen sind keine Messwerte.'
    },
    {
      type: 'single',
      q: 'Welche Pflicht kommt durch Art. 26 Abs. 7 AI Act zu den BetrVG-Rechten hinzu?',
      options: ['Der Betriebsrat muss jedem KI-Tool zustimmen', 'Arbeitgeber müssen vor Einsatz eines Hochrisiko-KI-Systems am Arbeitsplatz Arbeitnehmervertretung und Beschäftigte informieren', 'Beschäftigte dürfen KI nicht nutzen', 'Der Betriebsrat muss eine KI-Zertifizierung haben'],
      answer: 1,
      explain: 'Art. 26 Abs. 7 AI Act schafft eine eigene Informationspflicht für Betreiber, die Arbeitgeber sind. Mitbestimmungsrechte ergeben sich weiterhin aus dem BetrVG.'
    }
  ],
  exercises: [
    {
      id: 'm06-e1',
      title: 'Change-Plan nach ADKAR für einen KI-Assistenten',
      scenario: `Das **Ingenieurbüro Seidel & Kraus (fiktiv)**, 45 Mitarbeitende, Dresden, will einen KI-Assistenten für Berichte, Protokolle und Ausschreibungstexte einführen. Die jüngeren Kolleginnen und Kollegen nutzen schon privat ChatGPT, mehrere erfahrene Ingenieure sind skeptisch („Die KI erfindet Normen"). Einen Betriebsrat gibt es nicht. Die Geschäftsführung möchte in drei Monaten „durch" sein.`,
      task: `Entwickle einen Change-Plan entlang der fünf ADKAR-Stufen. Nenne je Stufe mindestens eine konkrete Maßnahme, wer sie verantwortet und woran du erkennst, dass die Stufe erreicht ist. Gehe ausdrücklich auf die skeptische Gruppe ein und berücksichtige die Pflicht aus Art. 4 AI Act.`,
      deliverable: 'Tabelle oder Gliederung mit 5 ADKAR-Stufen (Maßnahme, Verantwortung, Indikator) plus 3–5 Sätze zum Umgang mit Skepsis',
      template: `Awareness:
- Maßnahme / Verantwortlich / Indikator:

Desire:
-

Knowledge:
-

Ability:
-

Reinforcement:
-

Umgang mit den Skeptikern:`,
      rubric: [
        { criterion: 'Deckt alle fünf ADKAR-Stufen mit Maßnahmen ab', keywords: ['awareness', 'desire', 'knowledge', 'ability', 'reinforcement'], min: 5, hint: 'Hast du für jede Stufe von A bis R eine Maßnahme?' },
        { criterion: 'Benennt messbare Indikatoren oder Verantwortliche', keywords: ['indikator', 'messen', 'nutzung', 'umfrage', 'verantwort', 'quote'], min: 2, hint: 'Woran erkennst du, dass eine Stufe erreicht ist?' },
        { criterion: 'Nimmt die Skepsis ernst und nutzt sie konstruktiv', keywords: ['skep', 'halluzin', 'prüf', 'einbind', 'ernst', 'qualität'], min: 2, hint: 'Die Sorge „Die KI erfindet Normen" ist berechtigt – wie machst du daraus eine Stärke?' },
        { criterion: 'Berücksichtigt KI-Kompetenz/Schulungspflicht nach Art. 4 AI Act', keywords: ['art. 4', 'schulung', 'kompetenz', 'dokument'], min: 2, hint: 'Welche gesetzliche Pflicht gilt seit Februar 2025 für alle, die KI einsetzen?' },
        { criterion: 'Bezieht Champions/Power-User oder Pilotnutzer ein', keywords: ['champion', 'power-user', 'pilot', 'multiplikator', 'tandem'], min: 1, hint: 'Wer könnte im Büro als Vorbild und Ansprechpartner dienen?' }
      ],
      hints: [
        'Starte mit der Frage: Warum sollte ein erfahrener Ingenieur das Tool überhaupt nutzen wollen – was ist sein persönlicher Nutzen?',
        'Die Skeptiker haben fachlich recht: Sprachmodelle können Normen erfinden. Überlege, wie du sie zu „Qualitätsprüfern" machst, statt sie zu überreden.',
        'Denke an Tandems aus jüngeren Nutzenden und erfahrenen Fachleuten, an eine Prüfregel für Normzitate und an eine dokumentierte Basisschulung.'
      ],
      sample: `**Awareness:** Kick-off der Geschäftsführung mit konkreten Zahlen (z. B. Zeitaufwand für Protokolle pro Woche) und klarer Botschaft: Ziel ist Entlastung, nicht Personalabbau. *Verantwortlich:* GF. *Indikator:* In einer Kurzumfrage können ≥ 80 % den Zweck in eigenen Worten nennen.

**Desire:** Tandems aus je einer KI-erfahrenen Person und einer erfahrenen Ingenieurin bzw. einem erfahrenen Ingenieur; Skeptiker werden als „Qualitätspaten" eingeladen, Prüfregeln mitzugestalten. *Verantwortlich:* KI-Managerin. *Indikator:* Anmeldungen zum Pilot, Rückmeldungen in Sprechstunden.

**Knowledge:** 2-stündige Basisschulung für alle (Funktionsweise, Halluzinationen, Datenregeln, Kennzeichnung) – dokumentiert als Nachweis nach Art. 4 AI Act; Prompt-Vorlagen für Berichte und Protokolle. *Indikator:* 100 % Teilnahme, kurzer Wissenscheck.

**Ability:** Vier Wochen Pilot an echten Projekten mit wöchentlicher 30-Minuten-Sprechstunde; Regel: Normzitate und Zahlen werden immer an der Originalquelle geprüft. *Indikator:* Anteil der Protokolle mit KI-Unterstützung, gemessene Zeitersparnis.

**Reinforcement:** Erfolge und gefundene Fehler im Teammeeting teilen, Prompt-Bibliothek pflegen, Prüfregel in den QM-Prozess aufnehmen, Auffrischung nach sechs Monaten. *Indikator:* Nutzung bleibt nach drei Monaten stabil.

**Umgang mit Skepsis:** Die Sorge vor erfundenen Normen ist berechtigt und wird nicht weggeredet. Die Skeptiker definieren als Qualitätspaten die Prüfregeln und testen das Tool kritisch. So wird ihr Fachwissen sichtbar wertgeschätzt, und die Qualität der KI-Nutzung steigt. Die Drei-Monats-Frist bleibt, aber Nutzung wird nicht erzwungen, sondern durch Nutzen gewonnen.`
    },
    {
      id: 'm06-e2',
      title: 'Kommunikations- und Beteiligungsplan mit Betriebsrat',
      scenario: `Die **Logistik Nord GmbH (fiktiv)**, 480 Mitarbeitende, Bremen, plant ein KI-System, das Touren automatisch plant und dabei Fahrzeiten und Standzeiten der Fahrerinnen und Fahrer auswertet. Es gibt einen Betriebsrat. In der Belegschaft herrscht Sorge vor Überwachung und Arbeitsverdichtung.`,
      task: `Erstelle einen Kommunikations- und Beteiligungsplan für die ersten drei Monate. Lege dar, welche Beteiligungsrechte des Betriebsrats betroffen sind, welche Stakeholder du wie einbindest und wie du den Sorgen der Fahrerinnen und Fahrer begegnest. Prüfe außerdem, ob der AI Act zusätzliche Informationspflichten auslösen könnte.`,
      deliverable: 'Plan mit Zeitachse (Monat 1–3), Stakeholder-Übersicht und Begründung der rechtlichen Einordnung (ca. 250–400 Wörter)',
      template: `Rechtliche Einordnung (BetrVG, AI Act):

Stakeholder und Strategie:

Monat 1:
Monat 2:
Monat 3:

Umgang mit Sorgen:`,
      rubric: [
        { criterion: 'Erkennt die Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG wegen Überwachungseignung', keywords: ['87', 'überwach', 'mitbestimm', 'technische einrichtung'], min: 2, hint: 'Das System wertet Fahr- und Standzeiten aus – was folgt daraus nach BetrVG?' },
        { criterion: 'Nennt Unterrichtung nach § 90 und/oder Sachverständigen nach § 80 Abs. 3 BetrVG', keywords: ['90', '80', 'sachverständig', 'unterricht', 'planung'], min: 2, hint: 'Ab wann muss der Betriebsrat informiert werden und welche Unterstützung kann er holen?' },
        { criterion: 'Prüft den AI Act (Anhang III Nr. 4, Art. 26 Abs. 7)', keywords: ['ai act', 'anhang iii', 'hochrisiko', 'art. 26', 'leistung'], min: 2, hint: 'Anhang III Nr. 4 nennt auch die Zuweisung von Aufgaben und die Überwachung von Leistung und Verhalten.' },
        { criterion: 'Beschreibt Stakeholder-Einbindung und Kommunikation', keywords: ['stakeholder', 'fahrer', 'betriebsversammlung', 'pilot', 'feedback', 'faq'], min: 2, hint: 'Wer muss wann was erfahren – und wie holst du die Fahrerinnen und Fahrer selbst ins Boot?' },
        { criterion: 'Adressiert Überwachungs- und Verdichtungsängste konkret', keywords: ['betriebsvereinbarung', 'leistungskontrolle', 'transparen', 'zweckbind', 'anonym'], min: 2, hint: 'Welche verbindlichen Zusagen könnten die Sorgen glaubwürdig entkräften?' }
      ],
      hints: [
        'Beginne mit der Frage: Welche Daten über Beschäftigte verarbeitet das System – und könnte man damit Leistung oder Verhalten kontrollieren?',
        'Lies Anhang III Nr. 4 AI Act genau: Geht es nur um Touren oder auch um Aufgabenzuweisung und Leistungsbewertung von Personen? Das entscheidet über die Einstufung.',
        'Eine Betriebsvereinbarung mit Zweckbindung, Auswertungsverbot für Einzelleistungen und einem Fahrerbeirat im Pilot kann viel Vertrauen schaffen.'
      ],
      sample: `**Rechtliche Einordnung:** Das System wertet Fahr- und Standzeiten personenbezogen aus und ist damit objektiv geeignet, Leistung und Verhalten zu überwachen → **Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG**; ohne Einigung (oder Spruch der Einigungsstelle) keine Einführung. Bereits in der Planung ist der Betriebsrat nach **§ 90 Abs. 1 Nr. 3 BetrVG** zu unterrichten; er kann einen KI-Sachverständigen hinzuziehen (**§ 80 Abs. 3**). Weist das System Fahrerinnen und Fahrern Aufgaben auf Basis individueller Merkmale oder ihres Verhaltens zu oder überwacht es ihre Leistung, kommt eine Einstufung als **Hochrisiko nach Anhang III Nr. 4 AI Act** in Betracht – dann gilt u. a. die Informationspflicht nach **Art. 26 Abs. 7** (Pflichten ab 02.12.2027). Ich würde das mit dem Anbieter klären und vorsorglich so handeln.

**Stakeholder:** Betriebsrat und Geschäftsführung (eng einbinden), Disposition und Fahrer (aktiv beteiligen), IT und Datenschutz (zufriedenstellen), Kunden (informieren über Lieferzeiten).

**Monat 1:** Unterrichtung des Betriebsrats mit Systemsteckbrief; gemeinsamer Workshop; Sachverständiger; Betriebsversammlung mit offener Fragerunde und FAQ.
**Monat 2:** Verhandlung einer Betriebsvereinbarung (Zweckbindung auf Tourenplanung, keine Einzelleistungsauswertung, Löschfristen, Fahrerbeirat); Schulungskonzept nach Art. 4 AI Act.
**Monat 3:** Pilot mit freiwilligen Fahrerteams; wöchentliches Feedback; Auswertung nur aggregiert; Entscheidung über Rollout gemeinsam mit Betriebsrat.

**Umgang mit Sorgen:** Verbindliche Zusagen in der Betriebsvereinbarung statt mündlicher Beruhigung, Transparenz über Datenarten und Zugriffe, Fahrer im Pilot als Mitgestalter und eine Kennzahl für Arbeitsbelastung, die neben der Effizienz gemessen wird.`
    }
  ],
  glossary: [
    { term: 'ADKAR', def: 'Change-Modell von Prosci für individuelle Veränderung: Awareness, Desire, Knowledge, Ability, Reinforcement.' },
    { term: 'Kotters 8 Schritte', def: 'Organisationales Change-Modell von John P. Kotter: Dringlichkeit, Führungskoalition, Vision, Freiwilligen-Netzwerk, Hindernisse beseitigen, schnelle Erfolge, Momentum halten, Wandel verankern.' },
    { term: 'Stakeholder-Analyse', def: 'Systematische Erfassung aller Gruppen, die ein Projekt beeinflussen oder davon betroffen sind, z. B. mit einer Einfluss-Interesse-Matrix.' },
    { term: 'Champions-Netzwerk', def: 'Freiwillige Power-User aus verschiedenen Bereichen, die KI-Nutzung vorleben, Kolleginnen und Kollegen unterstützen und Feedback sammeln.' },
    { term: 'KI-Kompetenz (Art. 4 AI Act)', def: 'Pflicht von Anbietern und Betreibern, Maßnahmen zu ergreifen, damit Personal mit KI sachkundig umgehen kann; gilt seit 02.02.2025, 2026 durch den Digital Omnibus neu gefasst.' },
    { term: 'Rahmen-Betriebsvereinbarung KI', def: 'Vereinbarung zwischen Arbeitgeber und Betriebsrat mit Grundsätzen und einem Prüfverfahren für die Einführung von KI-Anwendungen.' },
    { term: 'Substituierbarkeitspotenzial', def: 'Anteil der Tätigkeiten eines Berufs, die nach aktuellem Stand der Technik von Computern oder computergesteuerten Maschinen erledigt werden könnten (IAB); keine Prognose über Jobverluste.' },
    { term: '70-20-10-Prinzip', def: 'BCG-Faustregel: 10 % des Aufwands für Algorithmen, 20 % für Technologie und Daten, 70 % für Menschen und Prozesse.' }
  ],
  sources: [
    { title: 'The Prosci ADKAR Model', publisher: 'Prosci', year: 2025, type: 'Doku', url: 'https://www.prosci.com/methodology/adkar' },
    { title: 'The 8-Step Process for Leading Change', publisher: 'Kotter Inc.', year: 2025, type: 'Doku', url: 'https://www.kotterinc.com/methodology/8-steps/' },
    { title: 'Betriebsverfassungsgesetz §§ 80, 87, 90, 95', publisher: 'gesetze-im-internet.de', year: 2021, type: 'Gesetz', url: 'https://www.gesetze-im-internet.de/betrvg/__90.html' },
    { title: 'AI Literacy – Questions & Answers', publisher: 'Europäische Kommission', year: 2026, type: 'Leitfaden', url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers' },
    { title: 'IAB-Kurzbericht 5/2024: Vor allem Hochqualifizierte bekommen die Digitalisierung verstärkt zu spüren', publisher: 'Institut für Arbeitsmarkt- und Berufsforschung', year: 2024, type: 'Studie', url: 'https://doku.iab.de/kurzber/2024/kb2024-05.pdf' },
    { title: 'OECD Employment Outlook 2023 – Pressemitteilung', publisher: 'OECD', year: 2023, type: 'Studie', url: 'https://www.oecd.org/en/about/news/press-releases/2023/07/oecd-job-markets-remain-tight-though-inflation-is-hitting-real-wages.html' },
    { title: 'Future of Jobs Report 2025 – Pressemitteilung', publisher: 'World Economic Forum', year: 2025, type: 'Studie', url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/' },
    { title: 'Künstliche Intelligenz in Deutschland – Studie 2025', publisher: 'Bitkom', year: 2026, type: 'Studie', url: 'https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf' },
    { title: 'AI Adoption in 2024: 74% of Companies Struggle to Achieve and Scale Value', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value' },
    { title: 'Transformation & Technology: ogGPT simplifies entry into AI age', publisher: 'Otto Group', year: 2024, type: 'Artikel', url: 'https://www.ottogroup.com/en/stories/story/transformation-with-technology-oggpt-simplifies-entry-into-the-ai-age.php' }
  ]
};
