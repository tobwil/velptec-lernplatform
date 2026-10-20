export default {
  id: 'k7',
  order: 7,
  title: 'Fortgeschrittene KI-Strategie und organisatorische Transformation',
  subtitle: 'Unternehmensstrategie, Organisationsdesign, KI-Kompetenzzentrum und KI-orientierte Kultur',
  icon: 'people',
  chapter: 7,
  isNew: false,
  minutes: 130,
  skript: [
    { chapter: '7', title: 'Fortgeschrittene KI-Strategie und organisatorische Transformation', page: 151 },
    { chapter: '7.1', title: 'KI-Unternehmensstrategie entwickeln', page: 152 },
    { chapter: '7.2', title: 'Organisationsdesign für KI', page: 154 },
    { chapter: '7.3', title: 'Aufbau eines KI-Kompetenzzentrums', page: 157 },
    { chapter: '7.4', title: 'Aufbau einer KI-orientierten Unternehmenskultur', page: 160 }
  ],
  objectives: [
    'Du entwickelst eine KI-Unternehmensstrategie entlang der vier Phasen Bestandsaufnahme, Vision & Ziele, Schwerpunkte und Umsetzungsplan – abgestimmt auf die Geschäftsziele.',
    'Du vergleichst zentrale, dezentrale und Hub-and-Spoke-Organisationsmodelle und wählst begründet das passende Modell für einen Reifegrad.',
    'Du entwirfst ein KI-Kompetenzzentrum (CoE) mit Satzung, Verantwortungsmatrix (Festlegen, Unterstützen, Betreiben, Zusammenarbeiten) und passender Besetzung.',
    'Du planst den Aufbau einer KI-orientierten Kultur mit den vier Bausteinen psychologische Sicherheit, KI-Kompetenz, Anreize und Führungsengagement – und misst den Fortschritt mit kulturellen Indikatoren.',
    'Du beziehst Betriebsrat (BetrVG) und die KI-Kompetenzpflicht nach Art. 4 AI Act in die Transformation ein.'
  ],
  lessons: [
    // ------------------------------------------------------------------ 7.1
    {
      id: 'k7-l1',
      title: '7.1 KI-Unternehmensstrategie entwickeln',
      minutes: 30,
      skript: { chapter: '7.1', page: 152 },
      blocks: [
        { type: 'video', scene: 'strategie' },
        {
          type: 'text',
          md: `Viele Unternehmen haben inzwischen ein paar KI-Piloten hinter sich: ein Chatbot hier, eine Dokumentenerkennung dort. Kapitel 7 setzt eine Ebene höher an. Es geht um die Frage, wie KI vom **Experiment zur Transformation** wird – also wie Strategie, Organisation, Kompetenzzentrum und Kultur zusammenspielen müssen, damit KI im ganzen Unternehmen Wert schafft. Das Skript betont gleich zu Beginn: Dieser Übergang verlangt andere Strukturen, andere Governance und eine andere Kultur als einzelne Pilotprojekte.`
        },
        {
          type: 'skript',
          chapter: '7.1',
          page: 152,
          quote: 'Eine KI-Unternehmensstrategie unterscheidet sich grundlegend von einer Sammlung einzelner KI-Projekte.',
          md: `- **Definition:** Eine KI-Unternehmensstrategie ist der Gesamtplan, wie ein Unternehmen KI über **alle Funktionen und Geschäftsbereiche** hinweg nutzt. Sie beantwortet ganzheitlich: Wie bauen wir KI-Fähigkeiten auf, wo setzen wir sie ein, wer steuert sie und wie entwickeln sie sich weiter?
- **Warum:** Ohne strategische Klammer sammeln Unternehmen unverbundene Einzelprojekte, die keinen unternehmensweiten Mehrwert liefern. Das Skript zitiert eine McKinsey-Studie (2024), nach der Unternehmen mit dokumentierter KI-Strategie einen **3,5-mal höheren ROI** erzielen.
- **Kernspannung:** Die Strategie muss **Ehrgeiz und Realismus** ausbalancieren – sie startet bei den heutigen Fähigkeiten und zeigt trotzdem den Weg zu tiefgreifendem Wandel. Beispiel im Skript: Microsoft entschied 2023, KI in **alle Produkte** zu integrieren statt eigenständige KI-Produkte zu bauen – mit Folgen für Entwicklungsprozesse, Ingenieurskultur und Partnerschaften.
- **Rahmenwerk in vier Phasen:** strategische Bestandsaufnahme → Vision & Ziele → strategische Schwerpunkte → Umsetzungsplan (siehe Schritte unten).
- **Zeitbedarf:** typischerweise ein **Sechsmonatszyklus** (3 Monate Bestandsaufnahme und Planung, 3 Monate Einbindung und Verfeinerung). Laut einer im Skript genannten Deloitte-Studie (2024) erreichen Unternehmen, die sich diese Zeit nehmen, nach zwei Jahren eine um **60 % höhere KI-Nutzungsrate**.
- **Tipp und typische Fehler:** Fachbereiche früh einbinden – reine IT- oder Innovationsstrategien scheitern an fehlender Unterstützung. Häufige Fehler sind Technologiefokus statt Geschäftsergebnis, unterschätzter Veränderungsbedarf und unrealistische Zeitpläne.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Strategische Bestandsaufnahme', md: '**Ist-Zustand** (Fähigkeiten, Kultur, Daten) analysieren, das **Wettbewerbsumfeld** beobachten (Was tut die Konkurrenz?) und **Chancen ermitteln** (Wo schafft KI Mehrwert?). Werkzeuge dafür kennst du aus Kapitel 1.5 (Reifegrad) und Kapitel 2.1 (Chancen entdecken).' },
            { title: '2 · Vision & Ziele', md: 'Eine **KI-Vision für 3–5 Jahre**, daraus abgeleitete **messbare strategische Ziele** und die ausdrückliche **Verknüpfung mit der Unternehmensstrategie**. Faustregel: Jedes KI-Ziel zahlt auf ein bestehendes Unternehmensziel ein.' },
            { title: '3 · Strategische Schwerpunkte', md: '**Investitionsbereiche** festlegen (wo Ressourcen gebündelt werden), eine **Kompetenz-Roadmap** (was wann aufgebaut wird) und das **Portfolio** aus Projekten und Initiativen definieren – priorisiert nach den Methoden aus Kapitel 2.5.' },
            { title: '4 · Umsetzungsplan', md: '**Governance-Struktur** (wer entscheidet was), **Ressourcenverteilung** (Budget, Personal) und **Erfolgskennzahlen** (wie Fortschritt gemessen wird, vgl. Kapitel 2.4).' }
          ]
        },
        {
          type: 'table',
          caption: 'Projektplan oder Unternehmensstrategie? (eigene Gegenüberstellung nach Skript 7.1)',
          head: ['Merkmal', 'KI-Projektplan', 'KI-Unternehmensstrategie'],
          rows: [
            ['Reichweite', 'ein Use Case, ein Bereich', 'alle Funktionen und Geschäftsbereiche'],
            ['Leitfrage', '„Wie setzen wir dieses System um?"', '„Wie wird KI Teil unserer organisatorischen DNS?"'],
            ['Zeithorizont', 'Wochen bis Monate', 'Vision für 3–5 Jahre, jährlich überprüft'],
            ['Steuerung', 'Projektleitung', 'Governance-Struktur mit klaren Entscheidungsrechten'],
            ['Erfolg', 'Projektziel erreicht', 'messbarer Beitrag zu Unternehmenszielen und Aufbau von Fähigkeiten']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Zahlen im Skript richtig verwenden',
          md: `Das Skript nennt in Kapitel 7 mehrere eindrucksvolle Studienwerte (z. B. 3,5-facher ROI, +60 % Nutzungsrate), gibt aber keine Fundstellen an. Nutze sie als **Richtungsangabe**, nicht als Beleg für deine Vorstandsvorlage. Wenn du Zahlen zitierst, nimm eine Quelle, die du selbst geprüft hast – etwa die BCG-Studie vom Oktober 2024: Danach haben nur **26 %** der befragten Unternehmen die Fähigkeiten aufgebaut, um über Proof-of-Concepts hinaus greifbaren Wert zu erzeugen, **74 %** tun sich damit schwer. Die erfolgreichen Unternehmen stecken nach BCG rund **70 % des Aufwands in Menschen und Prozesse** (10-20-70-Regel) – ein starkes Argument dafür, Strategie nie nur als Technologieplan zu schreiben.`
        },
        {
          type: 'timeline',
          items: [
            { date: 'Monat 1–3', title: 'Bestandsaufnahme & Planung', md: 'Ist-Analyse (Daten, Fähigkeiten, Kultur), Wettbewerbsblick, Chancenliste, Entwurf von Vision und Zielen.' },
            { date: 'Monat 4–6', title: 'Einbindung & Verfeinerung', md: 'Workshops mit allen Geschäftsbereichen, Betriebsrat und Datenschutz; Portfolio und Roadmap schärfen; Beschluss durch die Geschäftsführung.' },
            { date: 'danach quartalsweise', title: 'Umsetzen & überprüfen', md: 'Roadmap-Review, KPI-Bericht, Go/No-Go-Entscheidungen für Initiativen.' },
            { date: 'jährlich', title: 'Strategie-Update', md: 'Vision, Ziele und Investitionsschwerpunkte an Markt, Technologie und Regulierung anpassen (vgl. Kapitel 8).' }
          ]
        },
        {
          type: 'table',
          caption: 'Phase 2 konkret: Aus vagen Wünschen werden messbare Ziele (Beispiele, fiktiv)',
          head: ['Vage', 'Messbar formuliert', 'KPI & Baseline'],
          rows: [
            ['„Wir wollen schneller antworten."', 'Bis 30.06. sinkt die mittlere Erstantwortzeit auf Kundenanfragen per E-Mail von 2 Arbeitstagen auf unter 4 Stunden.', 'Mittlere Erstantwortzeit; Baseline: 4 Wochen Messung vor Start'],
            ['„KI soll im Büro helfen."', 'Bis Jahresende wird die Erfassung von Eingangsrechnungen zu 80 % automatisch vorbefüllt; Korrekturquote unter 5 %.', 'Automatisierungsgrad, Korrekturquote; Baseline: heute 0 %'],
            ['„Alle sollen KI können."', 'Bis 31.03. haben alle Mitarbeitenden mit KI-Zugang eine 2-stündige Schulung zu Nutzung, Datenschutz und Grenzen absolviert.', 'Schulungsquote; Baseline: Teilnahmeliste']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Für den Mittelstand übersetzt',
          md: 'Ein Sechsmonatszyklus mit 4-Phasen-Rahmenwerk klingt nach Konzern. Für ein Unternehmen mit 100–500 Beschäftigten reicht oft ein **Strategie-One-Pager** plus priorisierte Use-Case-Liste und Vier-Quartals-Roadmap. Wichtig ist nicht der Umfang, sondern dass **alle vier Phasen** bedacht sind und die Fachbereiche – und, wo vorhanden, der Betriebsrat – mitgeschrieben haben.'
        },
        {
          type: 'praxis',
          title: 'Der Strategie-One-Pager in vier Phasen',
          company: 'Bildungswerk Nordhessen e. V. (fiktiv), 140 Mitarbeitende, Kassel – Weiterbildung und Beratung',
          scenario: `Der Vorstand möchte „eine KI-Strategie", hat aber wenig Zeit. Bisher laufen drei unverbundene Initiativen: ein Chatbot auf der Website, ein Schreibassistent im Marketing und ein Excel-Experiment zur Kursplanung. Du bekommst zwei Workshops à drei Stunden mit Vorstand, Bereichsleitungen, IT, Datenschutzbeauftragter und Betriebsrat.`,
          steps: [
            '**Bestandsaufnahme (vorab):** Kurzinterviews mit allen Bereichen zu Daten, Fähigkeiten und Schmerzpunkten; Blick auf zwei Mitbewerber; Liste der laufenden KI-Initiativen.',
            '**Workshop 1 – Vision & Ziele:** „Wir nutzen KI, um Teilnehmende besser zu begleiten und Verwaltung zu entlasten; Bewertungen von Teilnehmenden trifft immer ein Mensch." Dazu drei messbare Ziele mit KPI und Baseline-Plan.',
            '**Zwischen den Workshops:** Use-Case-Ideen per Umfrage sammeln und als Steckbriefe aufbereiten.',
            '**Workshop 2 – Schwerpunkte:** Use Cases in der Nutzen-×-Machbarkeits-Matrix bewerten; Investitionsschwerpunkt „Verwaltung entlasten" festlegen; Kompetenz-Roadmap (Basisschulung für alle, Vertiefung für Key User).',
            '**Workshop 2 – Umsetzungsplan:** Governance (wer gibt frei, welche Daten sind tabu), Budget, Verantwortliche, KPI-Review je Quartal.',
            'Ergebnis auf einer Seite zusammenfassen, vom Vorstand beschließen lassen, im Intranet veröffentlichen – die drei Altinitiativen werden dem Portfolio zugeordnet oder beendet.'
          ],
          takeaway: `Eine Strategie wird gelebt, wenn sie **kurz, beschlossen und sichtbar** ist und die vorhandenen Einzelprojekte einordnet. Der Betriebsrat früh einzubinden spart Monate – bei KI-Systemen, die Leistung oder Verhalten erfassen können, hat er Mitbestimmungsrechte (siehe Vertiefung am Ende dieses Kapitels).`
        },
        {
          type: 'interactive',
          widget: 'usecase-matrix',
          props: {
            cases: [
              { name: 'Website-Chatbot (FAQ)', impact: 2, feasibility: 5 },
              { name: 'Rechnungseingang automatisieren', impact: 4, feasibility: 4 },
              { name: 'KI-Kursplanung', impact: 4, feasibility: 2 },
              { name: 'Schreibassistent Marketing', impact: 2, feasibility: 4 },
              { name: 'Lernbegleiter für Teilnehmende', impact: 5, feasibility: 2 }
            ]
          }
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Fehler 1: Technologie statt Ergebnis', back: 'Die Strategie listet Tools und Modelle, aber keine Geschäftsziele. Gegenmittel: Jedes Vorhaben braucht ein Ziel mit KPI, das auf ein Unternehmensziel einzahlt.' },
            { front: 'Fehler 2: Veränderungsbedarf unterschätzt', back: 'Rollen, Prozesse und Kultur ändern sich mit – das wird nicht eingeplant. Gegenmittel: Change- und Kompetenzmaßnahmen sind fester Teil des Umsetzungsplans (Kapitel 4.5, 7.4).' },
            { front: 'Fehler 3: Unrealistische Zeitpläne', back: 'Transformation „bis Jahresende". Gegenmittel: Quick Wins und strategische Vorhaben trennen; Kulturwandel braucht laut Skript 18–36 Monate.' },
            { front: 'Fehler 4: Strategie aus dem Elfenbeinturm', back: 'Nur IT oder Innovationsteam schreiben mit. Gegenmittel: Fachbereiche, die KI später betreiben, von Anfang an beteiligen.' }
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'order',
          q: 'Bringe die vier Phasen des Strategie-Rahmenwerks aus Skript 7.1 in die richtige Reihenfolge.',
          items: ['Strategische Bestandsaufnahme', 'Vision & Ziele', 'Strategische Schwerpunkte', 'Umsetzungsplan'],
          explain: 'Erst verstehen, wo du stehst, dann das Ziel festlegen, dann Schwerpunkte und Portfolio wählen und zuletzt Governance, Ressourcen und Kennzahlen planen (Skript S. 153).'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Inhalte gehören laut Skript in den Umsetzungsplan (Phase 4)? (Mehrfachauswahl)',
          options: ['Governance-Struktur – wer entscheidet was', 'Ressourcenverteilung – Budget und Personal', 'Erfolgskennzahlen', 'Wettbewerbsanalyse'],
          answer: [0, 1, 2],
          explain: 'Die Wettbewerbsanalyse gehört zur strategischen Bestandsaufnahme (Phase 1). Der Umsetzungsplan regelt Governance, Ressourcen und Messung.'
        }
      ]
    },
    // ------------------------------------------------------------------ 7.2
    {
      id: 'k7-l2',
      title: '7.2 Organisationsdesign für KI',
      minutes: 25,
      skript: { chapter: '7.2', page: 154 },
      blocks: [
        {
          type: 'text',
          md: `KI-Vorhaben scheitern selten am Algorithmus und oft an der Frage: **Wer ist eigentlich zuständig?** Ein Modell für die Absatzprognose braucht Data Scientists, aber auch den Vertrieb, der die Prognose nutzt, die IT, die sie betreibt, und jemanden, der für das Ergebnis geradesteht. Organisationsdesign für KI regelt genau das – Teams, Berichtslinien und Entscheidungsrechte.`
        },
        {
          type: 'skript',
          chapter: '7.2',
          page: 154,
          quote: 'Weder rein zentrale noch vollständig dezentrale Ansätze sind in der Regel erfolgreich.',
          md: `- **Definition:** Organisationsdesign für KI beschreibt, wie Teams, Berichtslinien und Entscheidungsbefugnisse strukturiert werden, damit KI im großen Maßstab **entwickelt, eingesetzt und dauerhaft betrieben** werden kann – es geht um mehr als neue Rollen.
- **Warum:** KI überschreitet Abteilungsgrenzen und verlangt die Zusammenarbeit von Technik (Data Science, ML Engineering) und Fachbereich (Produktmanagement, Betriebsleitung). Laut einer im Skript zitierten BCG-Studie (2024) ist die Organisationsstruktur das **zweithäufigste Hindernis** für die KI-Skalierung (42 % der Unternehmen).
- **Grundspannung Zentralisierung vs. Dezentralisierung:** Zentral bringt Standards, effiziente Ressourcennutzung und Tiefe – birgt aber Engpassgefahr und Distanz zum Geschäft. Dezentral bringt Tempo und Nähe – aber Wildwuchs, Doppelarbeit und Steuerungsprobleme.
- **Hub-and-Spoke (föderiertes Modell):** für die meisten großen Unternehmen am wirksamsten – zentrale Expertise, dezentrale Umsetzung.
- **Rollen verändern sich:** Produktmanager müssen Möglichkeiten und Grenzen von KI verstehen, Betriebsleiter KI-Ergebnisse interpretieren, auch Recht und Personalwesen brauchen KI-Kompetenzen.
- **Typische Probleme und Lösungen:** Zuständigkeitsstreit, unklare Rechenschaft für KI-Ergebnisse, schwierige Gewinnung technischer Fachkräfte → klare Governance, attraktive Rollen mit Gestaltungsspielraum, Führung, die verteilte KI-Fähigkeiten strategisch unterstützt.
- **Nicht statisch:** Struktur alle **12–18 Monate** überprüfen; die bestehende Kultur entscheidet mit, ob ein föderiertes Modell trägt.`
        },
        {
          type: 'table',
          caption: 'Drei Organisationsmodelle im Vergleich (nach Skript 7.2, S. 156)',
          head: ['Merkmal', 'Zentral', 'Dezentral', 'Hub-and-Spoke (föderiert)'],
          rows: [
            ['Geschwindigkeit', 'langsamer (Engpassgefahr)', 'schneller (eigenständig)', 'ausgewogen'],
            ['Einheitlichkeit', 'hoch', 'niedrig', 'mittel bis hoch'],
            ['Geschäftliche Ausrichtung', 'geringer', 'höher', 'hoch'],
            ['Ressourceneffizienz', 'hoch', 'niedrig', 'mittel bis hoch'],
            ['Am besten geeignet für', 'frühe Phase der KI-Einführung', 'reife, KI-erfahrene Organisationen', 'die meisten großen Unternehmen']
          ]
        },
        {
          type: 'table',
          caption: 'So arbeitet das Hub-and-Spoke-Modell (nach Skript S. 155 f.)',
          head: ['Zentrale (Hub, KI-Kompetenzzentrum)', 'Außenstellen (Spokes, KI-Teams der Geschäftsbereiche)'],
          rows: [
            ['legt unternehmensweite Standards und Richtlinien fest', 'setzen KI-Lösungen für ihren Fachbereich um'],
            ['stellt gemeinsame Plattformen und Werkzeuge bereit', 'nutzen zentrale Plattformen und Fähigkeiten'],
            ['baut wiederverwendbare KI-Fähigkeiten auf', 'geben Erkenntnisse an die Zentrale zurück'],
            ['bietet Beratung und Schulungen an', 'behalten Eigenständigkeit bei der Umsetzung']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Ergänzung: Das Modell wandert mit dem Reifegrad',
          md: `Microsofts Cloud Adoption Framework empfiehlt ein ähnliches Muster: Unternehmen am Anfang profitieren von einem **zentralen** KI-Kompetenzzentrum, das Know-how bündelt. Mit wachsender Reife soll es sich zu einer **beratenden** Instanz entwickeln, die Leitplanken setzt, während Produkt- und Plattformteams selbst liefern. Warnsignale für den Wechsel: Freigaben stauen sich, die Expertinnen und Experten im Zentrum werden zum Nadelöhr, und Teams diskutieren mehr über Prioritäten als über Wert. Das deckt sich mit der Skript-Tabelle: zentral für die frühe Phase, föderiert für die Breite, dezentral erst für sehr reife Organisationen.`
        },
        {
          type: 'text',
          md: `### Rollen im Wandel – und neue Rollen
Das Skript nennt Beispiele, wie sich bestehende Rollen verändern. In der Praxis kommen einige neue Rollen hinzu (Details zu Teamaufbau und Kompetenzen in Kapitel 4.2):
- **Produktmanagement:** entscheidet über die Roadmap nur fundiert, wenn es Möglichkeiten **und Grenzen** von KI kennt.
- **Betriebsleitung / Teamleitung:** arbeitet mit KI-Systemen zusammen, interpretiert deren Ergebnisse und entscheidet, wann ein Mensch übernimmt.
- **Recht, Datenschutz, Personalwesen:** prüfen KI-Verträge, Folgenabschätzungen, Mitbestimmung und Qualifizierung.
- **Neu: KI-Produktverantwortliche (AI Product Owner)** – je produktivem KI-System eine Person, die für Nutzen, Qualität und Risiken geradesteht. Das löst das im Skript genannte Problem der **unklaren Rechenschaft**.
- **Neu: Key User / KI-Champions** in jedem Fachbereich – die „Speichen" des Modells (mehr in Lektion 7.3).`
        },
        {
          type: 'praxis',
          title: 'Vom Wildwuchs zum föderierten Modell',
          company: 'Rheintal Antriebstechnik GmbH (fiktiv), 1.800 Mitarbeitende, drei Werke in Baden-Württemberg',
          scenario: `In zwei Jahren sind elf KI-Initiativen entstanden – jedes Werk hat eigene Dienstleister, eigene Tools und eigene Datenregeln. Zwei Werke haben unabhängig voneinander fast dieselbe Bilderkennung für die Qualitätsprüfung bezahlt. Gleichzeitig beschwert sich der Vertrieb, dass die zentrale IT jede KI-Anfrage monatelang liegen lässt. Die Geschäftsführung bittet dich um einen Vorschlag zur Organisation.`,
          steps: [
            '**Bestandsaufnahme:** Alle elf Initiativen mit Zweck, Dienstleister, Daten, Kosten und Verantwortlichen erfassen – die Doppelung der Bilderkennung wird sichtbar.',
            '**Reifegrad und Kultur einschätzen:** Die Werke arbeiten traditionell stark eigenständig; laut Skript braucht eine solche Organisation **anfangs mehr zentrale Koordination**.',
            '**Hub definieren:** kleines KI-Kompetenzzentrum (vier Personen) bei der IT mit Mandat für Standards, Plattform (eine Bildverarbeitungs- und eine LLM-Plattform) und Freigabeprozess.',
            '**Spokes definieren:** je Werk und im Vertrieb ein KI-Verantwortlicher mit 30–50 % Zeitanteil, der Use Cases umsetzt und Erkenntnisse zurückmeldet.',
            '**Entscheidungsrechte klären:** Hub entscheidet über Plattform und Standards, Spokes über Priorisierung im eigenen Bereich; je KI-System ein AI Product Owner.',
            '**Review-Termin setzen:** Nach 12 Monaten prüfen, ob der Hub zum Engpass wird – dann Richtung beratende Rolle weiterentwickeln.'
          ],
          takeaway: 'Das föderierte Modell beseitigt Doppelarbeit, ohne den Fachbereichen das Tempo zu nehmen. Entscheidend sind **klare Entscheidungsrechte** – Struktur ohne Mandat bleibt ein Organigramm.'
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Zuständigkeitsstreit: „Wem gehört die KI?"', back: 'Klare Governance mit dokumentierten Entscheidungsrechten (z. B. RACI-Matrix): Was entscheidet der Hub, was der Fachbereich?' },
            { front: 'Unklare Rechenschaft für KI-Ergebnisse', back: 'Je produktivem System eine verantwortliche Person aus dem Fachbereich benennen – nicht „die IT" oder „der Anbieter".' },
            { front: 'Fachkräfte für geschäftsnahe Rollen gewinnen', back: 'Laut Skript: Gestaltungsspielraum und echte Wirkung betonen statt reiner Technologiearbeit.' },
            { front: 'Führung zieht nicht mit', back: 'Führungsebene auf die strategische Bedeutung verteilter KI-Fähigkeiten ausrichten – KI-Ziele in die Bereichsziele aufnehmen.' }
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Merksatz',
          md: '**Organisationsdesign ist nie fertig.** Was für die ersten Piloten passt, trägt selten den unternehmensweiten Einsatz – plane alle 12 bis 18 Monate einen Struktur-Check ein.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne das Organisationsmodell der Situation zu, für die es laut Skript am besten geeignet ist.',
          pairs: [
            ['Zentrales Modell', 'frühe Phase der KI-Einführung'],
            ['Dezentrales Modell', 'reife, KI-erfahrene Organisationen'],
            ['Hub-and-Spoke-Modell', 'die meisten großen Unternehmen']
          ],
          explain: 'So ordnet es die Vergleichstabelle im Skript (S. 156) ein. Das föderierte Hub-and-Spoke-Modell verbindet zentrale Expertise mit dezentraler Umsetzung.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Aufgabe gehört im Hub-and-Spoke-Modell zu den „Spokes" (KI-Teams der Geschäftsbereiche)?',
          options: ['Unternehmensweite KI-Richtlinien festlegen', 'Gemeinsame KI-Plattformen bereitstellen', 'KI-Lösungen für den eigenen Fachbereich umsetzen und Erkenntnisse zurückmelden', 'Zentrale Schulungsprogramme entwickeln'],
          answer: 2,
          explain: 'Die Spokes setzen fachspezifische Lösungen mit den zentralen Plattformen um und geben Erkenntnisse an den Hub zurück. Standards, Plattformen und Schulungen liegen beim Hub.'
        }
      ]
    },
    // ------------------------------------------------------------------ 7.3
    {
      id: 'k7-l3',
      title: '7.3 Aufbau eines KI-Kompetenzzentrums',
      minutes: 25,
      skript: { chapter: '7.3', page: 157 },
      blocks: [
        {
          type: 'text',
          md: `Das KI-Kompetenzzentrum (englisch *Center of Excellence*, CoE) ist der „Hub" aus Lektion 7.2. Ob es zum Motor oder zum Flaschenhals wird, entscheidet sich an einer einzigen Frage: **Was darf es selbst entscheiden – und wo hilft es nur?**`
        },
        {
          type: 'skript',
          chapter: '7.3',
          page: 158,
          quote: 'Ein wirksames KI-CoE arbeitet als Befähiger und Beschleuniger, nicht als Kontrollinstanz oder Engpass.',
          md: `- **Definition:** Ein KI-CoE ist ein zentrales Team mit gebündelten Fähigkeiten, das die KI-Einführung im ganzen Unternehmen **beschleunigt** – durch Fachwissen, Standards, Werkzeuge und bewährte Vorgehensweisen. Anders als eine klassische IT- oder Innovationsabteilung befähigt es die Geschäftsbereiche, statt alles selbst zu machen.
- **Warum:** Spezialwissen lässt sich nicht in jedem Bereich effizient aufbauen; ohne Koordination entstehen technische Altlasten und Steuerungsrisiken. Das Skript nennt eine KPMG-Studie (2024): Unternehmen mit etabliertem CoE bringen Lösungen **40 % schneller** in Produktion und haben **50 % weniger Governance-Probleme**.
- **Kernherausforderung:** Auftrag und Grenzen klar genug definieren – zu viel Kontrolle macht das CoE zum Engpass, zu wenig Befugnis verhindert Einheitlichkeit. Beispiel im Skript: Walmarts CoE (gegründet 2022) arbeitet nach dem Prinzip **„Plattformen statt Projekte"**.
- **Verantwortungsmatrix** in vier Kategorien: Festlegen, Unterstützen, Betreiben, Zusammenarbeiten (siehe Tabelle).
- **Besetzung:** ML-Ingenieure und Data Scientists (Plattform), KI-Architekten (Lösungsdesign), Change-Fachleute (Akzeptanz) und Strategieexperten (Wertrealisierung). Laut einer im Skript genannten IBM-Studie (2024) liegt die optimale Größe in großen Unternehmen bei etwa **einem zentralen Teammitglied pro 100 Beschäftigte** – abhängig vom Reifegrad.
- **Tipp und Fehler:** Mit einer **schriftlichen Satzung** starten (Aufgabenbereich, Befugnisse, Erfolgskennzahlen) und sie breit kommunizieren. Häufiger Fehler: das CoE als rein technische Einheit zu verstehen – KI-Transformation ist im Kern eine Veränderungsaufgabe.`
        },
        {
          type: 'table',
          caption: 'Verantwortungsmatrix eines KI-CoE (nach Skript S. 159 f.)',
          head: ['Kategorie', 'Rolle des CoE', 'Aufgaben'],
          rows: [
            ['**Festlegen**', 'CoE entscheidet', 'unternehmensweite KI-Standards und -Richtlinien; Auswahl von Plattformen und Werkzeugen; Sicherheits- und Compliance-Rahmenwerke; Qualitäts- und Leistungsmaßstäbe'],
            ['**Unterstützen**', 'CoE befähigt', 'Projektmethodik und Best Practices; Schulung und Kompetenzentwicklung; Architekturprüfung und Beratung; Fehlerbehebung und technische Begleitung'],
            ['**Betreiben**', 'CoE stellt bereit', 'gemeinsame KI-Plattformen und Infrastruktur; wiederverwendbare Modelle und Komponenten; Datenpipeline-Dienste; Monitoring- und Observability-Werkzeuge'],
            ['**Zusammenarbeiten**', 'CoE als Partner', 'Ermittlung und Priorisierung von Anwendungsfällen; Bewertung des geschäftlichen Nutzens; Change-Management und Akzeptanzförderung; Erfolgsmessung']
          ]
        },
        {
          type: 'table',
          caption: 'Wer gehört ins CoE? (Rollen nach Skript S. 160, Mittelstands-Variante als eigene Ergänzung)',
          head: ['Rolle', 'Wofür', 'Im Mittelstand oft …'],
          rows: [
            ['ML-Ingenieure, Data Scientists', 'Plattformaufbau, Modelle, Datenpipelines', 'externer Partner plus eine interne Person mit Datenaffinität'],
            ['KI-Architekten', 'Lösungsdesign, Integration, Sicherheit', 'IT-Leitung bzw. erfahrene Entwicklerin'],
            ['Change-Management-Fachleute', 'Akzeptanz, Schulung, Kommunikation', 'Personalentwicklung bzw. interne Weiterbildung'],
            ['Strategieexperten', 'Wertrealisierung, Business Cases, Portfolio', 'Controlling oder Assistenz der Geschäftsführung']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Die 1:100-Faustregel einordnen',
          md: 'Ein Konzern mit 5.000 Beschäftigten käme nach der im Skript genannten Faustregel auf rund 50 Personen im zentralen Team. Für ein Unternehmen mit 200 Beschäftigten ergäbe sie zwei Personen – realistisch ist dort ein **KI-Kernteam aus zwei bis drei Personen mit Teilzeitanteil**, ergänzt um externe Partner und Key User in den Fachbereichen. Die Regel ist ein Richtwert für große Unternehmen, keine Norm.'
        },
        {
          type: 'text',
          md: `### Ergänzung: So baut Microsoft ein KI-CoE auf
Das Cloud Adoption Framework von Microsoft (Stand 2026) beschreibt fünf Schritte, die gut zum Skript passen:
1. **Executive Sponsorship sichern** – Budget, Autorität und Glaubwürdigkeit; ein Lenkungskreis aus Fachbereich und IT mit direktem Draht zur Geschäftsleitung.
2. **Eine CoE-Leitung benennen** – eine Person als zentraler Ansprechpunkt für die Umsetzung der KI-Strategie.
3. **Ein interdisziplinäres Team bilden** – Fachbereich (Use Cases, Daten, Wirksamkeit) und Technik (Daten, Modelle, Betrieb), dazu Governance- und Sicherheitsexpertise.
4. **Die Einordnung klären** – möglichst auf bestehenden Teams aufbauen (z. B. einem Cloud-CoE), eine eigenständige Einheit nur, wenn nötig.
5. **Das Betriebsmodell festlegen** – am Anfang eher zentral, mit wachsender Reife beratend.

Zusätzlich nennt Microsoft einen strukturierten **Intake-Prozess**: Projektanfragen werden nach einheitlichen Kriterien (Nutzen, Machbarkeit, Ressourcen) bewertet und in einem priorisierten Backlog geführt – das ist die Kategorie „Zusammenarbeiten" aus dem Skript in Prozessform.`
        },
        {
          type: 'text',
          md: `### Die Speichen: ein Champions-Netzwerk
Ein CoE erreicht nicht jede Abteilung selbst. Bewährt hat sich ein **Champions-Netzwerk** aus freiwilligen Mitarbeitenden aller Bereiche, die KI früh ausprobieren, Use Cases sammeln, Kolleginnen und Kollegen vor Ort helfen und Feedback an das CoE geben. Change-theoretisch entspricht das Kotters „Volunteer Army" und stärkt in ADKAR vor allem *Desire* und *Ability* (Modelle siehe Kapitel 4.5).

Gute Praxis: Champions bekommen offiziell Zeit (z. B. 2–4 Stunden pro Monat), früheren Zugang zu neuen Funktionen, einen eigenen Austauschkanal und Sichtbarkeit (z. B. „Use Case des Monats").`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Auftrag', md: 'Wozu gibt es das CoE? Beispiel: „Wir befähigen die Fachbereiche, KI sicher, wirtschaftlich und schnell einzusetzen."' },
            { title: '2 · Befugnisse', md: 'Was das CoE **festlegt** (Standards, Plattformen, Sicherheitsvorgaben) und was es nur **empfiehlt**. Eskalationsweg bei Konflikten.' },
            { title: '3 · Leistungskatalog', md: 'Was die Fachbereiche bekommen: Plattform, Beratung, Architektur-Review, Schulungen, Vorlagen, Sprechstunde.' },
            { title: '4 · Intake & Priorisierung', md: 'Wie neue Ideen eingereicht, bewertet und priorisiert werden – mit festen Kriterien und Terminen.' },
            { title: '5 · Erfolgskennzahlen', md: 'Z. B. Zeit von der Idee bis zur Produktion, Anteil wiederverwendeter Komponenten, Nutzung der Plattform, Zufriedenheit der Fachbereiche.' },
            { title: '6 · Review', md: 'Satzung jährlich bzw. mit dem Struktur-Check (12–18 Monate) überprüfen und breit kommunizieren.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Eine CoE-Satzung gegen Zuständigkeitsstreit',
          company: 'Nordlicht Versicherung AG (fiktiv), 3.200 Beschäftigte, Hannover',
          scenario: `Die Versicherung hat vor einem Jahr ein „KI-Lab" gegründet. Inzwischen beschweren sich die Sparten: Das Lab will jedes Projekt selbst umsetzen, Anfragen stauen sich, und die Schadenabteilung hat aus Frust einen eigenen Dienstleister beauftragt. Der Vorstand bittet dich, das Lab zu einem echten Kompetenzzentrum umzubauen.`,
          steps: [
            '**Ist-Analyse:** Warteschlange, Projektliste und Interviews zeigen: Das Lab arbeitet als Projektfabrik und Kontrollinstanz zugleich – beides nach Skript ein Risiko.',
            '**Prinzip wechseln:** nach dem Vorbild „Plattformen statt Projekte" baut das CoE eine gemeinsame LLM-Plattform, Vorlagen und Eval-Sets, die Sparten setzen selbst um.',
            '**Satzung schreiben:** Auftrag, Befugnisse (Festlegen: Plattform, Sicherheits- und Qualitätsstandards; Unterstützen: Architektur-Review, Schulung), Leistungskatalog, Intake-Prozess mit Zwei-Wochen-Rückmeldung, Kennzahlen.',
            '**Besetzung ergänzen:** zu den sechs Data Scientists kommen eine Change-Managerin und ein Strategieexperte für Business Cases.',
            '**Champions benennen:** je Sparte zwei Champions mit festem Zeitbudget; monatlicher Austausch mit dem CoE.',
            '**Kommunizieren und messen:** Satzung im Führungskreis vorstellen; nach sechs Monaten Durchlaufzeit Idee → Produktion und Zufriedenheit der Sparten erheben.'
          ],
          takeaway: 'Ein CoE gewinnt Vertrauen, wenn es **befähigt statt kontrolliert** und seine Grenzen schriftlich festhält. Die Satzung ist das wichtigste Dokument gegen schleichende Aufgabenausweitung.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Aufgabe der Kategorie der CoE-Verantwortungsmatrix zu.',
          pairs: [
            ['Auswahl von Plattformen und Werkzeugen', 'Festlegen'],
            ['Architekturprüfung und Beratung', 'Unterstützen'],
            ['Monitoring- und Observability-Werkzeuge', 'Betreiben'],
            ['Bewertung des geschäftlichen Nutzens', 'Zusammenarbeiten']
          ],
          explain: 'Die vier Kategorien im Skript (S. 159 f.) zeigen, wo das CoE entscheidet, befähigt, bereitstellt oder als Partner der Geschäftsbereiche arbeitet.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Was bedeutet das Prinzip „Plattformen statt Projekte" (Beispiel Walmart im Skript)?',
          options: [
            'Das CoE führt alle KI-Projekte zentral selbst durch.',
            'Das CoE baut wiederverwendbare Fähigkeiten, die die Geschäftsbereiche für eigene Projekte nutzen.',
            'Das Unternehmen kauft nur fertige KI-Plattformen ein.',
            'Projekte werden abgeschafft, es gibt nur noch Daueraufgaben.'
          ],
          answer: 1,
          explain: 'Das CoE liefert gemeinsame Plattformen und Komponenten; die Umsetzung bleibt in den Geschäftsbereichen. So wird es Beschleuniger statt Engpass.'
        }
      ]
    },
    // ------------------------------------------------------------------ 7.4
    {
      id: 'k7-l4',
      title: '7.4 Aufbau einer KI-orientierten Unternehmenskultur',
      minutes: 25,
      skript: { chapter: '7.4', page: 160 },
      blocks: [
        { type: 'video', scene: 'change' },
        {
          type: 'text',
          md: `Stell dir zwei Unternehmen mit identischer KI-Ausstattung vor. Im einen nutzen nach einem Jahr zwei Drittel der Beschäftigten die Werkzeuge täglich, im anderen ein paar Enthusiasten – der Rest „wartet ab". Der Unterschied ist selten die Technik. Er ist **Kultur**: ob Menschen KI vertrauen, sie ausprobieren dürfen und ob Führungskräfte vorleben, was sie fordern.`
        },
        {
          type: 'skript',
          chapter: '7.4',
          page: 160,
          quote: 'Das Verhalten der Führungskräfte ist der stärkste Hebel für kulturellen Wandel.',
          md: `- **Definition:** Eine KI-orientierte Kultur ist eine Denk- und Verhaltensweise, in der Beschäftigte auf allen Ebenen KI als **selbstverständlichen Teil ihrer Arbeit** sehen, aktiv nach Einsatzmöglichkeiten suchen und die Veränderungen für Rollen und Prozesse annehmen – weg von KI als Spezialwerkzeug für Technikteams.
- **Warum:** Technik allein bringt selten nachhaltigen Nutzen; Menschen müssen KI nutzen, ihr vertrauen und ihre Arbeitsweise anpassen. Das Skript nennt eine McKinsey-Studie (2024), nach der kulturelle und verhaltensbezogene Faktoren **über 70 %** der Erfolgsunterschiede bei KI-Einführungen erklären.
- **Kernherausforderung:** KI kann Ängste um Arbeitsplatz, Relevanz und Kompetenz auslösen (Beispiele im Skript: Kundendienst neben Chatbots, Finanzanalyse neben Prognosetools). Diese Sorgen ernst nehmen und zeigen, wie KI Menschen **wirksamer** macht.
- **Leitbild Augmentierung:** KI ersetzt nicht das menschliche Urteil, sondern erweitert es – Menschen konzentrieren sich auf Aufgaben mit Kreativität und Urteilskraft.
- **Vier Bausteine:** psychologische Sicherheit, KI-Kompetenz, ausgerichtete Anreize, sichtbares Führungsengagement. Alle Dimensionen müssen zusammenspielen – eine Schwäche untergräbt das Ganze.
- **Messen:** neben Technik-Nutzung auch **kulturelle Indikatoren** (Anteil Nutzender, Vertrauen, selbst eingeschätzte Produktivität/Zufriedenheit, freiwillige Experimente). Laut einer im Skript genannten PwC-Studie (2024) erreichen Unternehmen, die das tun, in 18 Monaten eine **2,3-mal höhere Nutzungsrate**.
- **Zeit:** spürbarer Kulturwandel im großen Maßstab dauert **18–36 Monate** – kein einmaliges Projekt, sondern Daueraufgabe in Führungskommunikation, Leistungsmanagement und Weiterbildung.`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Psychologische Sicherheit schaffen', md: 'Bedenken offen ansprechen, Experimentierfreude würdigen – **auch bei Misserfolgen** –, Ergänzung statt Ersetzung betonen und Unterstützung bei veränderten Rollen anbieten. (Der Begriff geht auf die Harvard-Forscherin Amy Edmondson zurück: Teams lernen, wenn niemand Angst haben muss, Fehler oder Fragen anzusprechen.)' },
            { title: '2 · KI-Kompetenz aufbauen', md: 'Grundlagenschulung für alle, rollenspezifische Weiterbildung, Gelegenheiten zum praktischen Ausprobieren und **Praxisgemeinschaften** zum Wissensaustausch. In der EU zugleich Rechtspflicht (Art. 4 AI Act, siehe Vertiefung).' },
            { title: '3 · Anreize ausrichten', md: 'KI-Nutzung und Neuerungen belohnen, KI-Kennzahlen in Leistungsbeurteilungen einbeziehen, KI-Vorreiter anerkennen und fördern, **Hürden für Experimente abbauen** (z. B. freigegebene Sandbox, klare Datenampel).' },
            { title: '4 · Engagement der Führungsebene zeigen', md: 'Sichtbare KI-Nutzung durch Führungskräfte, durchgängige Kommunikation der KI-Vision, Investitionen in KI-Fähigkeiten und **Rechenschaft** für Transformationsziele.' }
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Vorsicht bei „KI-Kennzahlen in Leistungsbeurteilungen"',
          md: 'Das Skript empfiehlt, KI-Kennzahlen in Leistungsbeurteilungen aufzunehmen. In Deutschland ist das heikel: Wer individuelle Nutzungsdaten auswertet, nutzt eine technische Einrichtung zur **Leistungs- und Verhaltenskontrolle** – mitbestimmungspflichtig nach § 87 Abs. 1 Nr. 6 BetrVG und datenschutzrechtlich zu prüfen. Besser: Ziele auf **Team-Ebene** („Wir testen bis Q3 zwei KI-Anwendungsfälle"), freiwillige Beiträge sichtbar machen und Nutzungsstatistiken nur aggregiert auswerten.'
        },
        {
          type: 'table',
          caption: 'Kulturelle Indikatoren messen (Indikatoren nach Skript S. 163; Messung und Zielwerte als fiktive Beispiele)',
          head: ['Indikator', 'Wie messen?', 'Beispiel-Ziel (fiktiv)'],
          rows: [
            ['Anteil der Beschäftigten, die KI-Werkzeuge genutzt haben', 'aggregierte Nutzungsstatistik der freigegebenen Tools', '60 % mindestens einmal im Monat nach 12 Monaten'],
            ['Vertrauen im Umgang mit KI', 'Puls-Umfrage, Skala 1–5 („Ich weiß, wann ich KI-Ergebnissen trauen kann")', 'Mittelwert von 2,8 auf 3,8'],
            ['Selbst eingeschätzte Produktivität / Zufriedenheit', 'halbjährliche Befragung', 'Mehrheit berichtet Zeitgewinn bei Routineaufgaben'],
            ['Häufigkeit freiwilliger KI-Experimente', 'eingereichte Ideen, Hackathon-Beiträge, Beiträge in der Community', '20 neue Ideen pro Quartal']
          ]
        },
        {
          type: 'praxis',
          title: 'ogGPT: Interner KI-Assistent mit Community-Ansatz',
          company: 'Otto Group, Hamburg (reales Beispiel)',
          scenario: `Die Otto Group stellte Ende September 2023 mit **ogGPT** einen internen, datenschutzkonformen KI-Assistenten (Azure OpenAI Service, Hosting in der EU, keine Nutzung der Chats fürs Modelltraining) für rund 26.000 Beschäftigte im DACH-Raum bereit; in der ersten Woche nutzten ihn laut Unternehmen über 4.200 Personen. Ein Jahr später (September 2024) berichtete das Unternehmen von **7.000 monatlich aktiven Nutzenden** – bei freiwilliger Nutzung und ohne von der Unternehmensleitung vorgegebene Nutzungsziele.`,
          steps: [
            '**Psychologische Sicherheit:** ein eigenes, sicheres Werkzeug bereitstellen, statt private Tools nur zu verbieten.',
            '**KI-Kompetenz:** Einstiegsformate und intensive Prompting-Workshops anbieten.',
            '**Praxisgemeinschaft:** eine konzernweite „Discover AI"-Community mit eigener Konferenz aufbauen.',
            '**Anreize & Sichtbarkeit:** Hackathons, „Use Case of the Week" mit Schritt-für-Schritt-Anleitungen und eine Veranstaltungsreihe mit über 25 Praxis-Sessions.',
            '**Weiterentwickeln:** Funktionen laufend nach Nutzerbedarf erweitern (u. a. Prompt-Marktplatz, CustomGPTs).'
          ],
          takeaway: 'Akzeptanz entstand hier nicht durch Pflichtvorgaben, sondern durch ein gutes Werkzeug, Lernangebote und eine aktive Community – genau die Bausteine aus Skript 7.4. Die Zahlen sind Unternehmensangaben.',
          source: { title: 'Otto Group: Transformation & Technology – ogGPT simplifies entry into AI age (18.09.2024)', url: 'https://www.ottogroup.com/en/stories/story/transformation-with-technology-oggpt-simplifies-entry-into-the-ai-age.php' }
        },
        {
          type: 'praxis',
          title: 'Ängste im Kundenservice ernst nehmen',
          company: 'Stadtwerke Lindenau (fiktiv), Kundenservice mit 40 Mitarbeitenden',
          scenario: `Ein KI-Assistent soll Antwortentwürfe für Kundenmails schreiben. In der Teamversammlung fällt der Satz: „Dann braucht ihr uns ja bald nicht mehr." Die Nutzung im Pilot bleibt bei 15 %.`,
          steps: [
            '**Zuhören:** Die Bereichsleitung lädt zu offenen Gesprächsrunden ein und sammelt Bedenken ohne Rechtfertigung.',
            '**Klarheit geben:** Die Geschäftsführung erklärt schriftlich, dass der Assistent Entwürfe liefert, die Entscheidung beim Menschen bleibt und frei werdende Zeit in Rückrufe bei komplexen Fällen fließt.',
            '**Vorleben:** Die Teamleitung nutzt den Assistenten selbst sichtbar und zeigt auch Fälle, in denen sie den Entwurf verwirft.',
            '**Lernen erleichtern:** zwei Champions aus dem Team, wöchentliche 20-Minuten-Sprechstunde, Sammlung guter Prompts.',
            '**Messen:** monatlicher Vertrauens-Puls (anonym) und aggregierte Nutzungsquote; nach drei Monaten Nutzung bei 55 % (fiktiver Zielwert).'
          ],
          takeaway: 'Kultur ändert sich durch **erlebte Sicherheit**: klare Zusagen, Vorbilder und Lernzeit. Messung macht sichtbar, ob die Maßnahmen wirken.'
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Kultur und Change-Management – wie hängt das zusammen?',
          md: 'Kapitel 4.5 behandelt Change-Management für **einzelne Einführungen** (z. B. mit ADKAR oder Kotter). Kapitel 7.4 blickt auf die **dauerhafte Haltung** der ganzen Organisation. Jedes gelungene Change-Projekt zahlt auf die Kultur ein – und eine KI-offene Kultur macht jedes neue Change-Projekt leichter.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche kulturellen Indikatoren empfiehlt das Skript zur Erfolgsmessung? (Mehrfachauswahl)',
          options: ['Anteil der Mitarbeitenden, die KI-Werkzeuge genutzt haben', 'Vertrauen der Mitarbeitenden im Umgang mit KI', 'Häufigkeit freiwilliger KI-Experimente', 'Anzahl gekaufter KI-Lizenzen'],
          answer: [0, 1, 2],
          explain: 'Das Skript nennt Nutzungsanteil, Vertrauen, selbst eingeschätzte Produktivität/Zufriedenheit und freiwillige Experimente. Gekaufte Lizenzen sagen nichts über Kultur aus.'
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze die Zeitangabe aus dem Skript.',
          text: 'Spürbarer Kulturwandel im großen Maßstab braucht in der Regel {{18 bis 36|18–36|18-36}} Monate.',
          explain: 'Deshalb empfiehlt das Skript, kulturelle Verstärkung dauerhaft in Führungskommunikation, Leistungsmanagement und Weiterbildung zu verankern.'
        }
      ]
    },
    // ------------------------------------------------------------------ Vertiefung 7.4
    {
      id: 'k7-l5',
      title: 'Vertiefung: Mitbestimmung und KI-Kompetenz nach Art. 4 AI Act',
      minutes: 25,
      skript: { chapter: '7.4', page: 162, deepening: true },
      blocks: [
        {
          type: 'text',
          md: `Was das Skript als Kulturbausteine beschreibt – Bedenken offen ansprechen, KI-Kompetenz für alle –, ist in Deutschland zugleich **Recht**. In Betrieben mit Betriebsrat ist dessen Beteiligung bei KI **keine Kür, sondern Pflicht** – und eine große Chance: Ein früh eingebundener Betriebsrat ist oft der beste Multiplikator für Akzeptanz. Das Betriebsrätemodernisierungsgesetz von 2021 hat KI ausdrücklich ins Betriebsverfassungsgesetz aufgenommen.`
        },
        {
          type: 'skript',
          chapter: '7.4',
          page: 162,
          md: 'Der zweite Kulturbaustein im Skript, **KI-Kompetenz aufbauen**, umfasst Grundlagenschulungen für alle, rollenspezifische Weiterbildung, Gelegenheiten zum praktischen Ausprobieren und Praxisgemeinschaften. Der erste Baustein, **psychologische Sicherheit**, verlangt, Bedenken offen anzusprechen und bei veränderten Rollen zu unterstützen. Beides lässt sich in Deutschland mit Betriebsrat und Art. 4 AI Act rechtssicher verankern.'
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
          md: 'Statt für jedes Tool neu zu verhandeln, schließen viele Unternehmen eine **Rahmen-Betriebsvereinbarung KI**: Grundsätze (z. B. keine Leistungs- und Verhaltenskontrolle, keine automatisierten Personalentscheidungen), ein Verfahren zur Prüfung neuer Tools, Qualifizierungszusagen und ein paritätisches Gremium. Neue Anwendungen werden dann als Anlage ergänzt. Das ist gelebte psychologische Sicherheit mit Unterschrift.'
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: KI-Kompetenz ist Rechtspflicht (Art. 4 AI Act)',
          md: `Das Skript behandelt KI-Kompetenz als Kulturbaustein. In der EU ist sie seit 2025 zusätzlich gesetzliche Pflicht:
- **Seit 02.02.2025** müssen Anbieter und Betreiber von KI-Systemen Maßnahmen ergreifen, damit ihr Personal und andere Personen, die in ihrem Auftrag mit KI umgehen, über ausreichende KI-Kompetenz verfügen – abgestimmt auf Vorwissen, Einsatzkontext und Betroffene.
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
            { title: '4. Formate mischen', md: 'Kurze E-Learnings, Live-Workshops am echten Fall, Sprechstunden, Lernen im Tandem, Prompt-Bibliothek – das entspricht den Skript-Bausteinen „praktisches Ausprobieren" und „Praxisgemeinschaften".' },
            { title: '5. Dokumentieren', md: 'Wer hat wann was gelernt? Teilnahmelisten, Inhalte, Aktualisierungen – als interner Nachweis.' },
            { title: '6. Wiederholen und anpassen', md: 'Tools und Risiken ändern sich; Auffrischung mindestens jährlich und bei neuen Systemen.' }
          ]
        },
        {
          type: 'praxis',
          title: 'Rahmen-Betriebsvereinbarung KI vorbereiten',
          company: 'Kunststofftechnik Hagen GmbH (fiktiv), 310 MA, Westfalen',
          scenario: `Die Geschäftsführung möchte innerhalb eines Jahres mehrere KI-Anwendungen einführen (Schreibassistent, Qualitätsprüfung per Kamera, Wissens-Chatbot). Der Betriebsrat ist skeptisch und hat angekündigt, „jedes Tool einzeln prüfen" zu wollen.`,
          steps: [
            'Den Betriebsrat schon in der Planungsphase unterrichten (§ 90 Abs. 1 Nr. 3 BetrVG) und die KI-Roadmap aus der Unternehmensstrategie offenlegen.',
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
      type: 'single',
      q: 'Was unterscheidet eine KI-Unternehmensstrategie laut Skript von einer Sammlung einzelner KI-Projektpläne?',
      options: [
        'Sie enthält mehr Projekte.',
        'Sie betrachtet KI ganzheitlich: Aufbau von Fähigkeiten, Einsatzorte, Steuerung und Weiterentwicklung über alle Bereiche.',
        'Sie wird ausschließlich von der IT geschrieben.',
        'Sie legt sich auf einen KI-Anbieter fest.'
      ],
      answer: 1,
      explain: 'Die Unternehmensstrategie legt fest, wie KI Teil der „organisatorischen DNS" wird – nicht nur, wie sie in einzelnen Anwendungen eingesetzt wird (Skript S. 152).'
    },
    {
      type: 'order',
      q: 'Bringe die Phasen des Strategie-Rahmenwerks in die richtige Reihenfolge.',
      items: ['Strategische Bestandsaufnahme', 'Vision & Ziele', 'Strategische Schwerpunkte', 'Umsetzungsplan'],
      explain: 'Bestandsaufnahme (Ist, Wettbewerb, Chancen) → Vision & Ziele (3–5 Jahre, messbar) → Schwerpunkte (Investitionen, Kompetenz-Roadmap, Portfolio) → Umsetzungsplan (Governance, Ressourcen, Kennzahlen).'
    },
    {
      type: 'multi',
      q: 'Welche häufigen Fehler bei KI-Unternehmensstrategien nennt das Skript? (Mehrfachauswahl)',
      options: ['Ausschließlicher Fokus auf Technologie statt Geschäftsergebnisse', 'Unterschätzung des organisatorischen Veränderungsbedarfs', 'Unrealistische Zeitpläne', 'Zu frühe Einbindung der Fachbereiche'],
      answer: [0, 1, 2],
      explain: 'Die frühe Einbindung der Fachbereiche ist laut Skript gerade ein Erfolgsfaktor – Strategien nur aus IT oder Innovationsteam scheitern oft an fehlender Unterstützung.'
    },
    {
      type: 'match',
      q: 'Ordne das Organisationsmodell seiner typischen Schwäche zu.',
      pairs: [
        ['Zentrales Modell', 'Engpassgefahr und Distanz zu den geschäftlichen Anforderungen'],
        ['Dezentrales Modell', 'uneinheitliche Vorgehensweisen und doppelter Aufwand'],
        ['Hub-and-Spoke-Modell', 'braucht klare Entscheidungsrechte zwischen Zentrale und Fachbereichen']
      ],
      explain: 'Das Skript beschreibt die Grundspannung zwischen Zentralisierung und Dezentralisierung. Das föderierte Modell gleicht beide aus, funktioniert aber nur mit klarer Governance.'
    },
    {
      type: 'tf',
      q: 'Eine einmal gewählte KI-Organisationsstruktur sollte möglichst lange unverändert bleiben, damit Stabilität entsteht.',
      answer: false,
      explain: 'Falsch. Laut Skript ist Organisationsdesign nicht statisch: Die Struktur sollte alle 12–18 Monate mit wachsendem Reifegrad überprüft und angepasst werden.'
    },
    {
      type: 'single',
      q: 'Welches Hindernis für die KI-Skalierung nennt das Skript mit Verweis auf BCG (2024) als zweithäufigstes?',
      options: ['Fehlende Rechenleistung', 'Die Organisationsstruktur', 'Zu hohe Lizenzkosten', 'Fehlende Open-Source-Modelle'],
      answer: 1,
      explain: 'Laut Skript betrifft das Hindernis Organisationsstruktur 42 % der Unternehmen – ohne passende Strukturen schaffen es selbst gut finanzierte Initiativen kaum vom Pilot in den Produktivbetrieb.'
    },
    {
      type: 'match',
      q: 'Ordne die Aufgabe der Kategorie der CoE-Verantwortungsmatrix zu.',
      pairs: [
        ['Sicherheits- und Compliance-Rahmenwerke', 'Festlegen'],
        ['Schulung und Kompetenzentwicklung', 'Unterstützen'],
        ['Wiederverwendbare Modelle und Komponenten', 'Betreiben'],
        ['Change-Management und Akzeptanzförderung', 'Zusammenarbeiten']
      ],
      explain: 'Festlegen = CoE entscheidet, Unterstützen = CoE befähigt, Betreiben = CoE stellt bereit, Zusammenarbeiten = CoE als Partner der Geschäftsbereiche (Skript S. 159 f.).'
    },
    {
      type: 'cloze',
      q: 'Ergänze die Kernaussage zum KI-Kompetenzzentrum.',
      text: 'Ein wirksames KI-CoE arbeitet als Befähiger und {{Beschleuniger}}, nicht als {{Kontrollinstanz|Engpass}}.',
      explain: 'Das CoE soll die Geschäftsbereiche in die Lage versetzen, KI besser umzusetzen – nicht alle KI-Aktivitäten zentral steuern (Skript S. 158).'
    },
    {
      type: 'multi',
      q: 'Welche Rollen gehören laut Skript typischerweise in ein erfolgreiches KI-CoE? (Mehrfachauswahl)',
      options: ['ML-Ingenieure und Data Scientists', 'KI-Architekten', 'Change-Management-Fachleute', 'Strategieexperten für die Wertrealisierung'],
      answer: [0, 1, 2, 3],
      explain: 'Alle vier: Das Skript betont, dass CoEs technische Tiefe mit betriebswirtschaftlichem Verständnis und Change-Kompetenz verbinden müssen. Ein rein technisches CoE ist ein häufiger Fehler.'
    },
    {
      type: 'single',
      q: 'Was empfiehlt Microsofts Cloud Adoption Framework für das Betriebsmodell eines KI-CoE?',
      options: [
        'Von Anfang an vollständig dezentral arbeiten',
        'Am Anfang eher zentral, mit wachsender Reife zu einer beratenden Rolle mit Leitplanken wechseln',
        'Das CoE nach dem ersten Pilotprojekt auflösen',
        'Alle KI-Projekte dauerhaft im CoE umsetzen'
      ],
      answer: 1,
      explain: 'Microsoft beschreibt den Übergang von zentraler Kontrolle zu einem beratenden Team, sobald Governance in die Plattformen eingebettet ist – passend zur Skript-Aussage, dass sich Organisationsdesign mit dem Reifegrad ändert.'
    },
    {
      type: 'single',
      q: 'Was ist laut Skript der stärkste Hebel für kulturellen Wandel?',
      options: ['Ein großes Schulungsbudget', 'Das sichtbare Verhalten der Führungskräfte', 'Eine verpflichtende KI-Nutzungsquote', 'Die Wahl des leistungsfähigsten Modells'],
      answer: 1,
      explain: 'Wenn Führungskräfte KI selbst nutzen, KI-gestützte Fragen stellen und Neuerungen würdigen, erkennen Mitarbeitende, dass KI-Nutzung gewünscht und sicher ist (Skript S. 162).'
    },
    {
      type: 'order',
      q: 'Bringe die vier Bausteine einer KI-orientierten Kultur in die Reihenfolge des Skripts.',
      items: ['Psychologische Sicherheit schaffen', 'KI-Kompetenz aufbauen', 'Anreize ausrichten', 'Engagement der Führungsebene zeigen'],
      explain: 'So gliedert das Skript das Rahmenwerk auf S. 162 f. Alle Bausteine müssen zusammenspielen.'
    },
    {
      type: 'tf',
      q: 'Nach Art. 4 AI Act müssen alle Beschäftigten ein externes KI-Zertifikat erwerben.',
      answer: false,
      explain: 'Laut EU-Kommission ist kein Zertifikat nötig. Unternehmen müssen Maßnahmen zur KI-Kompetenz ergreifen und sollten diese intern dokumentieren; der Digital Omnibus hat Art. 4 2026 neu gefasst.'
    },
    {
      type: 'multi',
      q: 'Was ist bei der Einführung eines KI-Tools, das Arbeitsprotokolle mit Nutzerkennung speichert, in einem Betrieb mit Betriebsrat zu beachten? (Mehrfachauswahl)',
      options: ['Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG, da das Tool objektiv zur Überwachung geeignet ist', 'Unterrichtung bereits in der Planungsphase (§ 90 BetrVG)', 'Der Betriebsrat darf keine Sachverständigen hinzuziehen', 'Möglichkeit eines KI-Sachverständigen nach § 80 Abs. 3 BetrVG'],
      answer: [0, 1, 3],
      explain: 'Bei technischen Einrichtungen reicht die objektive Eignung zur Überwachung. Der Betriebsrat ist frühzeitig zu unterrichten und kann bei KI einen Sachverständigen hinzuziehen, dessen Erforderlichkeit gesetzlich vermutet wird.'
    }
  ],
  exercises: [
    {
      id: 'k7-e1',
      title: 'KI-Betriebsmodell und CoE-Satzung entwerfen',
      scenario: `Die **Hansefracht Logistik AG (fiktiv)**, 2.400 Beschäftigte, fünf Geschäftsbereiche (Kontraktlogistik, Stückgut, Luftfracht, Zoll, Verwaltung), hat in drei Jahren 14 KI-Initiativen gestartet. Jeder Bereich arbeitet mit eigenen Dienstleistern, es gibt keine gemeinsamen Standards, zwei Datenschutzvorfälle mit frei verfügbaren Chat-Tools und keine Übersicht über die Kosten. Der Vorstand möchte „KI endlich richtig organisieren", die Bereichsleitungen fürchten eine „zentrale KI-Bürokratie".`,
      task: `Empfiehl ein Organisationsmodell (zentral, dezentral oder Hub-and-Spoke) und begründe es mit Reifegrad und Kultur. Entwirf anschließend die Eckpunkte einer CoE-Satzung: Auftrag, Aufgaben nach den vier Kategorien Festlegen/Unterstützen/Betreiben/Zusammenarbeiten, Besetzung und ungefähre Größe, Erfolgskennzahlen und Review-Zyklus. Gehe darauf ein, wie du verhinderst, dass das CoE zum Engpass wird.`,
      deliverable: '300–450 Wörter oder strukturierte Stichpunkte',
      template: `Empfohlenes Modell und Begründung: …
Auftrag des CoE: …
Festlegen: …
Unterstützen: …
Betreiben: …
Zusammenarbeiten: …
Besetzung und Größe: …
Erfolgskennzahlen: …
Review und Schutz vor Engpass: …`,
      rubric: [
        { criterion: 'Wählt ein Organisationsmodell und begründet es mit Reifegrad und Kultur', keywords: ['hub', 'spoke', 'föderiert', 'zentral', 'dezentral', 'reifegrad', 'kultur'], min: 2, hint: 'Wie reif ist das Unternehmen, und wie eigenständig arbeiten die Bereiche heute?' },
        { criterion: 'Ordnet CoE-Aufgaben den vier Kategorien zu', keywords: ['festleg', 'unterstütz', 'betreib', 'zusammenarbeit', 'standard', 'plattform'], min: 3, hint: 'Was entscheidet das CoE, wo befähigt es, was stellt es bereit, wo arbeitet es als Partner?' },
        { criterion: 'Beschreibt eine ausgewogene Besetzung', keywords: ['data scien', 'ml', 'architekt', 'change', 'strategie', 'business'], min: 3, hint: 'Reicht ein rein technisches Team?' },
        { criterion: 'Definiert Erfolgskennzahlen und einen Review-Zyklus', keywords: ['kennzahl', 'kpi', 'durchlaufzeit', 'review', 'monat', 'satzung'], min: 2, hint: 'Woran erkennst du nach einem Jahr, ob das CoE wirkt – und wann prüfst du die Struktur?' },
        { criterion: 'Benennt Maßnahmen gegen Engpass und Kompetenzüberschreitung', keywords: ['engpass', 'befähig', 'plattformen statt projekte', 'intake', 'champion', 'beratend'], min: 1, hint: 'Wie bleibt die Umsetzung in den Bereichen, ohne dass Wildwuchs zurückkehrt?' }
      ],
      hints: [
        'Starte mit der Spannung aus Skript 7.2: Was spricht hier für mehr Zentralisierung, was für dezentrale Umsetzung?',
        'Nutze die Verantwortungsmatrix aus Skript 7.3 als Gliederung und die Faustregel „etwa ein zentrales Teammitglied pro 100 Beschäftigte" als Richtwert für die Größe.',
        'Ein föderiertes Modell mit einem CoE nach dem Prinzip „Plattformen statt Projekte", Spokes je Geschäftsbereich, Intake-Prozess und Review nach 12 Monaten ist eine tragfähige Antwort.'
      ],
      sample: `**Modell:** Hub-and-Spoke (föderiert). Die Bereiche sind fachlich sehr unterschiedlich und gewohnt, eigenständig zu arbeiten – ein rein zentrales Modell würde Widerstand erzeugen und zum Engpass. Ein dezentrales Modell hat aber genau zu Wildwuchs und Datenschutzvorfällen geführt. Weil der Reifegrad noch niedrig ist, startet der Hub mit **stärkerem Mandat** und wird nach 12–18 Monaten beratender.

**Auftrag:** „Das KI-CoE befähigt alle Geschäftsbereiche, KI sicher, wirtschaftlich und schnell einzusetzen – nach dem Prinzip Plattformen statt Projekte."

**Festlegen:** KI-Richtlinie und Tool-Freigabeliste, eine gemeinsame LLM-Plattform mit EU-Hosting, Sicherheits- und Datenschutzvorgaben, Qualitätsmaßstäbe (Eval-Pflicht vor Go-live).
**Unterstützen:** Projektmethodik, Architektur-Review, Basisschulung für alle und Vertiefung für Key User, Sprechstunde.
**Betreiben:** Plattform, wiederverwendbare Bausteine (Dokumentenerkennung für Zoll und Stückgut), Monitoring und Kostenübersicht.
**Zusammenarbeiten:** Use-Case-Intake mit Bewertung nach Nutzen und Machbarkeit, Business Cases, Change-Begleitung, Erfolgsmessung gemeinsam mit den Bereichen.

**Besetzung:** Nach der Faustregel wären es rund 24 Personen – realistisch startet das CoE mit 8: zwei ML-Ingenieure, eine Data Scientist, ein KI-Architekt, eine Change-Managerin, ein Strategieexperte (Business Cases), eine Governance-/Datenschutz-Expertin, eine CoE-Leitung. Je Geschäftsbereich ein KI-Verantwortlicher (Spoke) und zwei Champions.

**Kennzahlen:** Zeit von der Idee bis zur Produktion, Anteil wiederverwendeter Komponenten, Zahl der Vorfälle mit Schatten-KI, Zufriedenheit der Bereiche, Kosten pro produktivem Use Case.

**Schutz vor Engpass:** Satzung mit klaren Grenzen, Intake mit Rückmeldung binnen zwei Wochen, Umsetzung bleibt in den Spokes, Review der Struktur nach 12 Monaten durch den Vorstand.`
    },
    {
      id: 'k7-e2',
      title: 'Kulturwandel-Fahrplan mit Messkonzept',
      scenario: `Die **Stadtwerke Talbach GmbH (fiktiv)**, 600 Beschäftigte, haben vor neun Monaten einen KI-Assistenten für alle Büroarbeitsplätze eingeführt. Die Nutzung stagniert bei rund 20 %. Im Kundenservice kursiert die Sorge, dass Stellen wegfallen; Führungskräfte nutzen das Tool kaum; der Betriebsrat fragt, ob Nutzungsdaten ausgewertet werden. Die Geschäftsführung möchte „mehr KI-Kultur".`,
      task: `Erstelle einen Fahrplan für die nächsten 18 Monate entlang der vier Kulturbausteine aus Skript 7.4 (je Baustein mindestens zwei konkrete Maßnahmen). Lege drei bis vier kulturelle Indikatoren mit Messmethode fest. Berücksichtige Betriebsrat und Art. 4 AI Act.`,
      deliverable: 'Tabelle oder 300–450 Wörter',
      template: `Baustein 1 – Psychologische Sicherheit: …
Baustein 2 – KI-Kompetenz: …
Baustein 3 – Anreize: …
Baustein 4 – Führungsengagement: …
Kulturelle Indikatoren und Messung: …
Betriebsrat und Art. 4 AI Act: …
Zeitplan (18 Monate): …`,
      rubric: [
        { criterion: 'Deckt alle vier Kulturbausteine mit konkreten Maßnahmen ab', keywords: ['sicherheit', 'kompetenz', 'anreiz', 'führung', 'vorleben', 'schulung'], min: 4, hint: 'Hast du für jeden der vier Bausteine Maßnahmen?' },
        { criterion: 'Nimmt Ängste ernst und betont Augmentierung', keywords: ['angst', 'sorge', 'bedenken', 'ergänz', 'augment', 'zusage'], min: 2, hint: 'Was sagst du dem Kundenservice konkret zur Zukunft seiner Arbeit?' },
        { criterion: 'Definiert kulturelle Indikatoren mit Messmethode', keywords: ['nutzung', 'vertrauen', 'umfrage', 'puls', 'experiment', 'indikator'], min: 3, hint: 'Woran erkennst du, ob sich die Kultur ändert – nicht nur die Technik?' },
        { criterion: 'Berücksichtigt Betriebsrat und Datenschutz bei der Messung', keywords: ['betriebsrat', 'betriebsvereinbarung', 'aggregiert', 'anonym', '87', 'mitbestimm'], min: 2, hint: 'Dürfen individuelle Nutzungsdaten einfach ausgewertet werden?' },
        { criterion: 'Bezieht Art. 4 AI Act und realistischen Zeitrahmen ein', keywords: ['art. 4', 'ki-kompetenz', 'dokument', '18', 'monat', 'nachweis'], min: 2, hint: 'Welche Pflicht besteht beim Kompetenzaufbau, und wie lange dauert Kulturwandel laut Skript?' }
      ],
      hints: [
        'Ordne zuerst die beschriebenen Symptome den vier Bausteinen zu: Wo fehlt Sicherheit, wo Kompetenz, wo Vorbild?',
        'Denke an die Indikatoren aus dem Skript: Nutzungsanteil, Vertrauen, selbst eingeschätzte Produktivität, freiwillige Experimente – und daran, dass Messungen in Deutschland mitbestimmungspflichtig sein können.',
        'Ein guter Plan kombiniert eine schriftliche Zusage der Geschäftsführung, Champions im Kundenservice, sichtbare Nutzung durch Führungskräfte, eine Rahmen-Betriebsvereinbarung und anonyme Puls-Umfragen.'
      ],
      sample: `**1 – Psychologische Sicherheit (Monat 1–3):** Offene Dialogrunden im Kundenservice; schriftliche Zusage der Geschäftsführung, dass der Assistent Entwürfe liefert, Entscheidungen beim Menschen bleiben und frei werdende Zeit in komplexe Kundenfälle fließt; „Fehler-Fest" einmal im Quartal, in dem gescheiterte Experimente vorgestellt werden.

**2 – KI-Kompetenz (Monat 2–12):** Basisschulung für alle (90 Minuten, inkl. Datenregeln und Grenzen), Vertiefung je Rolle, wöchentliche Sprechstunde, Community-Kanal; Teilnahme wird als interner Nachweis nach **Art. 4 AI Act** dokumentiert.

**3 – Anreize (Monat 3–18):** „Use Case des Monats" im Intranet, zwei Stunden Lernzeit pro Monat, Champions-Rolle mit Zeitbudget; Ziele auf Teamebene statt individueller Nutzungsquoten.

**4 – Führungsengagement (ab Monat 1):** Geschäftsführung und Bereichsleitungen nutzen den Assistenten sichtbar (z. B. in Besprechungen), berichten quartalsweise über Fortschritt; KI-Vision in jeder Führungskräfteversammlung.

**Indikatoren:** (1) Anteil der Beschäftigten mit mindestens einer Nutzung im Monat – nur aggregiert pro Bereich; (2) Vertrauen im Umgang mit KI – anonyme Puls-Umfrage, Skala 1–5; (3) selbst eingeschätzte Zeitersparnis – Halbjahresbefragung; (4) eingereichte Ideen und Experimente pro Quartal.

**Betriebsrat:** Früh unterrichten (§ 90 BetrVG), Messkonzept gemeinsam festlegen; da das Tool objektiv zur Leistungskontrolle geeignet ist (§ 87 Abs. 1 Nr. 6 BetrVG), Rahmen-Betriebsvereinbarung mit Verzicht auf individuelle Auswertung.

**Zeitplan:** Erste Effekte nach 6 Monaten erwartbar, spürbarer Wandel laut Skript erst nach 18–36 Monaten – deshalb Review alle sechs Monate.`
    }
  ],
  glossary: [
    { term: 'KI-Unternehmensstrategie', def: 'Gesamtplan, wie ein Unternehmen KI über alle Funktionen hinweg aufbaut, einsetzt, steuert und weiterentwickelt, um strategische Ziele zu erreichen (Skript 7.1).' },
    { term: 'Hub-and-Spoke-Modell', def: 'Föderiertes Organisationsmodell: Eine Zentrale (KI-Kompetenzzentrum) setzt Standards und stellt Plattformen bereit, KI-Teams der Geschäftsbereiche setzen fachspezifisch um.' },
    { term: 'KI-Kompetenzzentrum (CoE)', def: 'Zentrales Team mit gebündelten KI-Fähigkeiten, das Standards, Werkzeuge, Plattformen und Beratung bereitstellt und die Geschäftsbereiche befähigt (Center of Excellence).' },
    { term: 'CoE-Satzung', def: 'Schriftliches Dokument, das Auftrag, Befugnisse, Leistungen und Erfolgskennzahlen eines KI-Kompetenzzentrums festlegt und so Zuständigkeitsstreit verhindert.' },
    { term: 'Plattformen statt Projekte', def: 'Prinzip, nach dem ein CoE wiederverwendbare Fähigkeiten baut, die Geschäftsbereiche nutzen, statt deren Projekte selbst umzusetzen (Beispiel Walmart im Skript).' },
    { term: 'Intake-Prozess', def: 'Strukturiertes Verfahren, mit dem neue KI-Ideen eingereicht, nach festen Kriterien bewertet und in einem priorisierten Backlog geführt werden.' },
    { term: 'KI-Produktverantwortliche (AI Product Owner)', def: 'Person aus dem Fachbereich, die für Nutzen, Qualität und Risiken eines produktiven KI-Systems verantwortlich ist.' },
    { term: 'Champions-Netzwerk', def: 'Freiwillige Power-User aus verschiedenen Bereichen, die KI-Nutzung vorleben, Kolleginnen und Kollegen unterstützen und Feedback an das CoE geben.' },
    { term: 'KI-orientierte Unternehmenskultur', def: 'Denk- und Verhaltensweise, in der Beschäftigte auf allen Ebenen KI als selbstverständlichen Teil ihrer Arbeit sehen und Veränderungen annehmen (Skript 7.4).' },
    { term: 'Psychologische Sicherheit', def: 'Gemeinsame Überzeugung in einem Team, dass man Fragen, Bedenken und Fehler ansprechen kann, ohne Nachteile zu befürchten (Begriff nach Amy Edmondson).' },
    { term: 'Augmentierung', def: 'Einsatz von KI zur Erweiterung menschlicher Fähigkeiten statt zu deren Ersatz.' },
    { term: 'Rahmen-Betriebsvereinbarung KI', def: 'Vereinbarung zwischen Arbeitgeber und Betriebsrat mit Grundsätzen und einem Prüfverfahren für die Einführung von KI-Anwendungen.' },
    { term: 'KI-Kompetenz (Art. 4 AI Act)', def: 'Pflicht von Anbietern und Betreibern, Maßnahmen zu ergreifen, damit Personal mit KI sachkundig umgehen kann; gilt seit 02.02.2025, 2026 durch den Digital Omnibus neu gefasst.' }
  ],
  sources: [
    { title: 'Establish an AI Center of Excellence – Cloud Adoption Framework', publisher: 'Microsoft Learn', year: 2026, type: 'Leitfaden', url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/center-of-excellence' },
    { title: 'AI Adoption in 2024: 74% of Companies Struggle to Achieve and Scale Value', publisher: 'Boston Consulting Group', year: 2024, type: 'Studie', url: 'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value' },
    { title: 'Transformation & Technology: ogGPT simplifies entry into AI age', publisher: 'Otto Group', year: 2024, type: 'Artikel', url: 'https://www.ottogroup.com/en/stories/story/transformation-with-technology-oggpt-simplifies-entry-into-the-ai-age.php' },
    { title: 'Künstliche Intelligenz in Deutschland – Studie 2025', publisher: 'Bitkom', year: 2026, type: 'Studie', url: 'https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf' },
    { title: 'AI Risk Management Framework', publisher: 'NIST', year: 2023, type: 'Leitfaden', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'Betriebsverfassungsgesetz §§ 80, 87, 90, 95', publisher: 'gesetze-im-internet.de', year: 2021, type: 'Gesetz', url: 'https://www.gesetze-im-internet.de/betrvg/__90.html' },
    { title: 'AI Literacy – Questions & Answers', publisher: 'Europäische Kommission', year: 2026, type: 'Leitfaden', url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers' },
    { title: 'Art. 4 AI Act – KI-Kompetenz (Lesefassung)', publisher: 'artificialintelligenceact.eu', year: 2026, type: 'Gesetz', url: 'https://artificialintelligenceact.eu/article/4/' },
    { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', publisher: 'EUR-Lex', year: 2026, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' }
  ]
};
