export default {
  id: 'k5',
  order: 5,
  chapter: 5,
  title: 'KI-Governance, Ethik und rechtlicher Rahmen',
  subtitle: 'Gremien, Richtlinien, Ethik-Grundsätze, EU AI Act, DSGVO sowie Bias, Fairness und Erklärbarkeit',
  icon: 'shield',
  isNew: false,
  minutes: 175,
  skript: [
    { chapter: '5', title: 'KI-Governance, Ethik und rechtlicher Rahmen', page: 108 },
    { chapter: '5.1', title: 'KI-Governance-Strukturen und -Rahmenwerke', page: 109 },
    { chapter: '5.2', title: 'Ethische KI-Grundsätze und verantwortungsvoller KI-Einsatz', page: 113 },
    { chapter: '5.3', title: 'EU-KI-Verordnung: Anforderungen und Compliance', page: 117 },
    { chapter: '5.4', title: 'DSGVO und Datenschutz bei KI', page: 121 },
    { chapter: '5.5', title: 'Verzerrung, Fairness und Erklärbarkeit', page: 126 }
  ],
  objectives: [
    'Du kannst eine KI-Governance-Struktur mit Gremium, schriftlicher KI-Richtlinie, KI-Inventar, Risikoregister und risikoabhängigen Genehmigungswegen für deine Organisation entwerfen.',
    'Du kennst die wichtigsten ethischen Rahmenwerke (OECD, UNESCO, EU-Ethikleitlinien, Microsoft Responsible AI) und übersetzt Grundsätze in konkrete Maßnahmen und eine ethische Prüfung.',
    'Du ordnest KI-Systeme den Risikokategorien der EU-KI-Verordnung zu, bestimmst die Rolle (Anbieter/Betreiber) und kennst Pflichten, Bußgelder und den aktuellen Zeitplan nach dem Digital Omnibus.',
    'Du wendest die DSGVO-Grundsätze, Art. 22, die DSFA und die Betroffenenrechte über den gesamten KI-Lebenszyklus an und kennst die Linie der Aufsichtsbehörden (EDSA, DSK).',
    'Du erkennst Quellen von Verzerrung, berechnest einfache Fairness-Kennzahlen, wählst eine passende Fairness-Definition und planst Erklärbarkeit (LIME, SHAP, kontrafaktische Erklärungen) zielgruppengerecht.'
  ],
  lessons: [
    // ───────────────────────── 5.1 ─────────────────────────
    {
      id: 'k5-l1',
      title: '5.1 KI-Governance-Strukturen und -Rahmenwerke',
      minutes: 35,
      skript: { chapter: '5.1', page: 109 },
      blocks: [
        { type: 'video', scene: 'risiko' },
        {
          type: 'text',
          md: `Stell dir vor, in deinem Unternehmen laufen fünf KI-Initiativen parallel: ein Chatbot im Vertrieb, ein Copilot in der Buchhaltung, ein Prognosemodell in der Produktion, ein Bewerber-Tool in HR – und die privaten Chatbot-Accounts vieler Beschäftigter. Wer weiß, welche Daten wohin fließen? Wer entscheidet, ob das Bewerber-Tool überhaupt eingesetzt werden darf? Und wer haftet, wenn etwas schiefgeht?

Genau diese Fragen beantwortet **KI-Governance**. Sie ist kein Bremsklotz, sondern das Betriebssystem, mit dem eine Organisation **schnell und trotzdem kontrolliert** KI einsetzen kann.`
        },
        {
          type: 'skript',
          chapter: '5.1',
          page: 109,
          quote: 'KI-Governance ist nicht einfach IT-Governance, die auf KI übertragen wird',
          md: `- **Definition:** KI-Governance ist das System aus **Richtlinien, Prozessen, Rollen und Aufsichtsmechanismen**, das regelt, wie eine Organisation KI entwickelt, einsetzt und betreibt. Ohne sie laufen Initiativen unkoordiniert, Risiken bleiben unerkannt, Compliance-Verstöße häufen sich.
- **Warum KI anders ist:** KI kann Vorurteile fortschreiben, nicht nachvollziehbare Entscheidungen treffen, schleichend an Leistung verlieren (Modellabweichung) und die Privatsphäre auf neue Weise verletzen. Dafür braucht es spezialisierte Rahmenwerke.
- **Governance-Lücke:** Das Skript zitiert die PwC-Studie „Responsible AI Survey" (2024): Nur **11 %** der Führungskräfte haben KI-Richtlinien vollständig umgesetzt, während **82 %** die KI-Budgets erhöhen wollen.
- **Bausteine:** klare Verantwortlichkeit, ein **bereichsübergreifendes Governance-Gremium**, eine **schriftliche KI-Richtlinie**, ein **KI-Kompetenzzentrum (CoE)** mit KI-Inventar, Risikoregister, Richtlinienarchiv und Compliance-Nachverfolgung sowie **risikoabhängige Genehmigungsverfahren**.
- **Schlank starten** und mit dem Reifegrad mitwachsen; typische Fehler vermeiden, bewährte Verfahren nutzen – und **alles dokumentieren**.`
        },
        {
          type: 'table',
          caption: 'Das KI-Governance-Gremium nach Skript (S. 110) – mit Ergänzungen für Deutschland',
          head: ['Mitglied', 'Beitrag im Gremium'],
          rows: [
            ['**Vorstandssponsor** (CEO/CTO bzw. Geschäftsführung)', 'Rückendeckung, Budget, letzte Eskalationsinstanz'],
            ['**KI-Ethikbeauftragte:r**', 'Bringt ethische Prüffragen ein (siehe 5.2), moderiert Abwägungen'],
            ['**Datenschutzbeauftragte:r**', 'DSGVO-Konformität, DSFA, Betroffenenrechte (siehe 5.4)'],
            ['**Rechtsberatung**', 'Einstufung nach EU-KI-Verordnung, Haftung, Verträge (siehe 5.3)'],
            ['**Leitende:r Data Scientist** bzw. technische Leitung', 'Machbarkeit, Tests, Monitoring, technische Risiken'],
            ['**Vertretung der Geschäftsbereiche**', 'Fachlicher Nutzen, Prozesswissen, Akzeptanz'],
            ['*Ergänzung:* **Informationssicherheit**', 'Sicherheitsanforderungen, z. B. für LLM-Anwendungen und Agenten'],
            ['*Ergänzung:* **Betriebsrat** (wo vorhanden)', 'Mitbestimmung bei technischen Einrichtungen zur Leistungs- und Verhaltenskontrolle (§ 87 Abs. 1 Nr. 6 BetrVG) – früh einbinden spart Monate']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Die fünf Aufgaben des Gremiums',
          md: 'Laut Skript: **risikoreiche KI-Projekte genehmigen**, **KI-Richtlinien und Standards festlegen**, **ethische Bedenken prüfen**, **regulatorische Konformität überwachen** und **KI-Risikomanagement steuern**. Entscheidend sind klare **Eskalationswege** für schwierige Entscheidungen.'
        },
        {
          type: 'table',
          caption: 'Was eine KI-Richtlinie regeln muss (Skript S. 110) – und wie das im Mittelstand konkret aussieht',
          head: ['Regelungsbereich (Skript)', 'Konkrete Umsetzung (Beispiel)'],
          rows: [
            ['Erlaubte und verbotene Anwendungsfälle', 'Positivliste freigegebener Tools mit Firmen-Accounts; Verbotsliste (z. B. Emotionserkennung am Arbeitsplatz, automatische Absagen an Bewerbende)'],
            ['Datenanforderungen und -beschränkungen', 'Datenampel: öffentlich / intern / vertraulich-personenbezogen (Tabelle unten)'],
            ['Entwicklungsstandards für Modelle', 'Versionierung, Code-Review, Dokumentationsvorlage (Modellsteckbrief)'],
            ['Tests und Validierung', 'Eval-Set bzw. Testdaten vor jedem Go-live, Fairness-Tests bei Personenbezug (siehe 5.5)'],
            ['Dokumentationspflichten', 'Eintrag im KI-Inventar, Risikobewertung, Freigabeprotokoll'],
            ['Überwachung und Audits', 'Monitoring-Kennzahlen und jährlicher Review (siehe Kapitel 6)'],
            ['Umgang mit Vorfällen', 'Meldeweg ohne Sanktionsangst, Abschaltkriterien, Kommunikation'],
            ['Menschliche Aufsicht', 'Keine Letztentscheidung über Menschen allein durch KI; Freigabe kritischer Aktionen']
          ]
        },
        {
          type: 'table',
          caption: 'Risikoabhängige Genehmigungswege (Stufen „gering" und „hoch" nach Skript S. 111, mittlere Stufe als Praxisergänzung)',
          head: ['Risikostufe', 'Beispiel', 'Genehmigung', 'Anforderungen'],
          rows: [
            ['**Gering**', 'Inhaltsempfehlungen im internen Wissensmanagement', 'Führungskraft', 'Standarddokumentation, Eintrag im KI-Inventar'],
            ['**Mittel** *(Ergänzung)*', 'Kundenservice-Chatbot, Textgenerator fürs Marketing', 'Fachbereich + Datenschutz', 'Transparenzhinweis (Art. 50 AI Act), Tests vor Go-live, Monitoring'],
            ['**Hoch**', 'Automatisierte Einstellungsentscheidungen, Kreditbewertung', 'KI-Governance-Gremium', 'Umfassende Folgenabschätzung, ausgedehnte Tests, laufende Überwachung, regelmäßige Audits']
          ]
        },
        {
          type: 'text',
          md: `### Das KI-Kompetenzzentrum als Governance-Drehscheibe

Viele Organisationen bündeln Governance in einem **KI-Kompetenzzentrum (Center of Excellence, CoE)**. Es berät, verbreitet bewährte Verfahren und hält Standards aufrecht – während die **Geschäftsbereiche dezentral** ihre KI-Systeme betreiben. Laut Skript pflegt das CoE vier zentrale Werkzeuge:

1. **KI-Inventar** – Katalog aller KI-Systeme (Zweck, Anbieter, Daten, Rolle nach AI Act, Risikoklasse, verantwortliche Person).
2. **KI-Risikoregister** – dokumentierte Risiken mit Bewertung, Gegenmaßnahmen und Verantwortlichen.
3. **Richtlinienarchiv** – gültige Richtlinien, Vorlagen und Versionen.
4. **Compliance-Nachverfolgung** – Status von Pflichten, Schulungen, Audits.

So verhinderst du, dass jeder Bereich eigene, inkompatible Regeln erfindet. Wie du ein CoE organisatorisch aufbaust, vertieft **Kapitel 7 (7.3)**.`
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Schlank anfangen',
          md: 'Das Skript rät: Starte mit einem **schlanken Rahmenwerk** und entwickle es mit dem KI-Reifegrad weiter. In der Anfangsphase reichen oft eine Grundrichtlinie, ein einfaches Inventar (Tabelle genügt) und **vierteljährliche Reviews**. Wer risikoreiche KI produktiv betreibt, braucht ein umfassendes Rahmenwerk mit kontinuierlicher Überwachung.'
        },
        {
          type: 'table',
          caption: 'Typische Governance-Fehler und bewährte Gegenmittel (nach Skript S. 112)',
          head: ['Typischer Fehler', 'Bewährtes Verfahren'],
          rows: [
            ['Governance als reine Pflichtübung statt echtes Risikomanagement', 'Wirksamkeit messen: Richtlinieneinhaltungsquote, Häufigkeit von Risikovorfällen'],
            ['So bürokratisch, dass Innovation erliegt', 'In bestehende Projektgenehmigungen einbinden statt Parallelsysteme; klare Leitfäden und Vorlagen'],
            ['Nur technische Teams beteiligt', 'Rechts- und Geschäftsseite im Gremium; Unterstützung und Budget der Geschäftsführung'],
            ['Strukturen ohne Durchsetzungsmechanismen', 'Verbindliche Freigaben, Audits, Eskalationswege'],
            ['Fokus nur auf Entwicklung, Betrieb vernachlässigt', 'Betriebliche Governance mit Monitoring und Reviews; automatisieren, wo möglich (Inventarsysteme, automatische Richtlinienprüfungen)']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Dokumentiere alles',
          md: 'Wenn eine Aufsichtsbehörde fragt oder ein KI-System Schaden verursacht, ist eine lückenlose Dokumentation von Entscheidungen, Risikobewertungen und Aufsichtstätigkeiten dein wichtigster Schutz – und der Beleg, dass ihr Regeln ernsthaft einhalten wolltet.'
        },
        {
          type: 'text',
          md: `### Über das Skript hinaus: anerkannte Rahmenwerke als Gerüst

Du musst Governance nicht neu erfinden. Diese Werkzeuge haben sich etabliert und ergänzen sich:`
        },
        {
          type: 'table',
          caption: 'Governance-Werkzeugkasten: Normen, Frameworks und Leitfäden (Stand Oktober 2026)',
          head: ['Werkzeug', 'Art', 'Wofür?'],
          rows: [
            ['**ISO/IEC 42001:2023**', 'Zertifizierbare Managementsystem-Norm', 'KI-Managementsystem (AIMS) aufbauen: Politik, Rollen, Risiko- und Folgenabschätzung, Lebenszyklus, kontinuierliche Verbesserung. Gut kombinierbar mit ISO/IEC 27001.'],
            ['**NIST AI RMF 1.0** (Jan. 2023) + **GenAI-Profil NIST AI 600-1** (Jul. 2024)', 'Freiwilliges Framework (USA)', 'Strukturierte Risikosteuerung mit vier Funktionen: Govern, Map, Measure, Manage. NIST überarbeitet das Framework derzeit – aktuelle Fassung prüfen.'],
            ['**BSI: Generative KI-Modelle** (v2.0, 2025)', 'Behördlicher Leitfaden', 'Chancen, Risiken und Gegenmaßnahmen für Unternehmen und Behörden'],
            ['**DSK-Orientierungshilfen** (2024, 2025)', 'Aufsichtsbehördliche Hinweise', 'Datenschutzkonforme Auswahl, Einführung und Nutzung von KI (siehe 5.4)']
          ]
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'NIST AI RMF: Govern', back: 'Kultur, Rollen, Richtlinien und Verantwortlichkeiten für KI-Risiken festlegen – die Klammer um alles. Entspricht dem Gremium und der KI-Richtlinie aus dem Skript.' },
            { front: 'NIST AI RMF: Map', back: 'Kontext verstehen: Zweck, Beteiligte, Betroffene, mögliche Schäden des konkreten KI-Systems – Grundlage für den Eintrag im KI-Inventar.' },
            { front: 'NIST AI RMF: Measure', back: 'Risiken messen und bewerten: Tests, Metriken, Bias-Prüfungen, Red Teaming.' },
            { front: 'NIST AI RMF: Manage', back: 'Risiken priorisieren und behandeln, Vorfälle managen, Systeme bei Bedarf abschalten – Inhalt des Risikoregisters.' }
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Schatten-KI ist Realität',
          md: 'Laut Bitkom (Befragung von 604 Unternehmen, Oktober 2025) ist die Nutzung privater KI-Tools durch Beschäftigte in **8 %** der Unternehmen weit verbreitet (2024: 4 %), in **17 %** gibt es Einzelfälle, weitere **17 %** vermuten sie. Nur **26 %** stellen einen offiziellen Zugang zu generativer KI bereit, nur **23 %** haben Regeln für KI-Tools. Verbote allein helfen wenig – die wirksamste Maßnahme ist ein **gutes, freigegebenes Firmenangebot plus klare Regeln**. ([Bitkom, 21.10.2025](https://www.bitkom.org/Presse/Presseinformation/Beschaeftigte-nutzen-Schatten-KI))'
        },
        {
          type: 'table',
          caption: 'Beispiel einer Datenampel für die KI-Richtlinie',
          head: ['Stufe', 'Beispiele', 'Erlaubte KI-Nutzung'],
          rows: [
            ['🟢 Öffentlich', 'Website-Texte, Pressemitteilungen, allgemeines Fachwissen', 'Alle freigegebenen Tools'],
            ['🟡 Intern', 'Interne Prozessbeschreibungen, anonymisierte Kennzahlen', 'Nur Firmen-Tools mit AVV und deaktiviertem Training'],
            ['🔴 Vertraulich/personenbezogen', 'Kundendaten, Personalakten, Kalkulationen, Konstruktionsdaten', 'Nur speziell freigegebene Systeme (z. B. EU-Hosting oder lokal) nach DSFA bzw. Freigabe – sonst gar nicht']
          ]
        },
        {
          type: 'praxis',
          title: 'Ein schlankes KI-Board für den Mittelstand',
          company: 'Hagedorn Fördertechnik GmbH (fiktiv), 260 MA, Bielefeld',
          scenario: `Drei Abteilungen haben eigenständig KI-Tools eingeführt, ein viertes Projekt (KI-gestützte Vorauswahl von Bewerbungen für Azubi-Stellen) steht an. Die Geschäftsführung bittet dich, „Ordnung reinzubringen, ohne alles zu blockieren". Ein eigenes CoE mit Vollzeitstellen ist nicht drin.`,
          steps: [
            'KI-Board einrichten: Geschäftsführer (Sponsor), KI-Managerin (Vorsitz), externer DSB, IT-Leitung, Personalleitung, ein Betriebsratsmitglied; Treffen vierteljährlich, bei Hochrisiko-Fällen ad hoc.',
            'KI-Inventar als gemeinsame Tabelle anlegen: alle vier Systeme mit Zweck, Anbieter, Daten, Rolle und Risikoklasse nach AI Act erfassen.',
            'Drei Genehmigungsstufen beschließen: gering (Abteilungsleitung), mittel (Abteilungsleitung + DSB), hoch (KI-Board). Das Bewerber-Tool landet als Hochrisiko-Fall (Anhang III Nr. 4) beim Board.',
            'Zweiseitige KI-Richtlinie mit Datenampel verabschieden und in den bestehenden IT-Beschaffungsprozess einbauen – kein neues Formularwesen.',
            'Zwei Kennzahlen festlegen: Anteil der KI-Systeme mit vollständigem Inventareintrag, Zahl gemeldeter KI-Vorfälle pro Quartal.'
          ],
          takeaway: 'Governance muss zur Größe passen. Ein Board mit klaren Stufen und einem gepflegten Inventar schafft mehr Sicherheit als ein dickes Handbuch, das niemand liest.'
        },
        {
          type: 'praxis',
          title: 'Von Schatten-KI zur KI-Richtlinie',
          company: 'Steuerkanzlei Brandl & Partner (fiktiv), 30 MA, Regensburg',
          scenario: `Bei einer Stichprobe fällt auf, dass mehrere Mitarbeitende Mandantenschreiben mit einem privaten Chatbot-Account formulieren – teils mit Namen und Steuerdaten im Prompt. Die Partner wollen „KI am liebsten ganz verbieten". Du schlägst einen anderen Weg vor.`,
          steps: [
            'Ohne Schuldzuweisung erheben, wofür KI genutzt wird und welchen Nutzen die Mitarbeitenden sehen (anonyme Kurzumfrage).',
            'Risiken bewerten: Berufsgeheimnis, DSGVO (keine Rechtsgrundlage, kein AVV), mögliche Nutzung der Eingaben fürs Training.',
            'Ein freigegebenes Firmen-Tool mit AVV, EU-Hosting und deaktiviertem Training beschaffen.',
            'KI-Richtlinie mit Datenampel verabschieden: Mandantendaten nur pseudonymisiert und nur im Firmen-Tool.',
            'Pflichtschulung (Art. 4 AI Act) mit Praxisbeispielen durchführen und dokumentieren; private Accounts für Kanzleidaten untersagen.'
          ],
          takeaway: 'Schatten-KI ist ein Signal für echten Bedarf. Wer ein sicheres Angebot macht und klare Regeln erklärt, holt die Nutzung aus dem Schatten – ein reines Verbot treibt sie tiefer hinein.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Fachbereich will ein KI-System einführen, das Kreditanträge von Privatkunden bewertet. Welcher Genehmigungsweg passt laut Skript?',
          options: ['Freigabe durch die Teamleitung mit Standarddokumentation', 'Genehmigung durch das KI-Governance-Gremium mit Folgenabschätzung, Tests, Überwachung und Audits', 'Keine Genehmigung nötig, wenn das Tool zugekauft ist', 'Freigabe durch die IT, weil es ein Software-Thema ist'],
          answer: 1,
          explain: 'Kreditbewertung ist eine risikoreiche Anwendung (und Hochrisiko nach Anhang III AI Act). Das Skript sieht dafür die Genehmigung durch das Gremium, umfassende Folgenabschätzungen, ausgedehnte Tests, laufende Überwachung und regelmäßige Audits vor (S. 111).'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Punkte nennt das Skript als typische Governance-Fehler? (Mehrfachauswahl)',
          options: ['Governance als reine Pflichtübung', 'Strukturen ohne Durchsetzungsmechanismen', 'Einbindung der Rechts- und Geschäftsseite', 'Fokus nur auf Entwicklung, nicht auf den Betrieb'],
          answer: [0, 1, 3],
          explain: 'Die Einbindung von Recht und Geschäftsseite ist ein bewährtes Verfahren – der Fehler wäre, Governance auf technische Teams zu beschränken.'
        }
      ]
    },
    // ───────────────────────── 5.2 ─────────────────────────
    {
      id: 'k5-l2',
      title: '5.2 Ethische KI-Grundsätze und verantwortungsvoller KI-Einsatz',
      minutes: 30,
      skript: { chapter: '5.2', page: 113 },
      blocks: [
        {
          type: 'text',
          md: `„Ist das legal?" ist eine wichtige Frage – aber nicht die einzige. Ein KI-System kann alle Gesetze einhalten und trotzdem Menschen unfair behandeln, Vertrauen zerstören oder die Marke beschädigen. **Ethik beginnt dort, wo das Gesetz aufhört**: bei der Frage, was eine Organisation tun *sollte*, damit KI Menschen nützt und ihre Würde achtet.`
        },
        {
          type: 'skript',
          chapter: '5.2',
          page: 113,
          md: `- **Ethische KI** stellt menschliches Wohl, Fairness, Transparenz und Verantwortlichkeit in den Vordergrund. Gesetzestreue ist die **Mindestanforderung**, Ethik geht darüber hinaus.
- **Warum gerade KI?** Wegen **Ausmaß und Geschwindigkeit** möglicher Schäden: Ein verzerrtes Einstellungssystem kann Tausende benachteiligen, bevor es jemand merkt; ein undurchsichtiges Kreditmodell lehnt ohne Begründung ab; Gesichtserkennung kann Unschuldige falsch identifizieren.
- **Rahmenwerke:** OECD-KI-Grundsätze (2019, aktualisiert 2024), UNESCO-Empfehlung (2021, 193 Staaten), EU-Ethikleitlinien (2019), Microsoft Responsible AI (2022, aktualisiert 2024) – sie stimmen in den Kernpunkten überein.
- **Vom Prinzip zur Maßnahme:** Fairness, Transparenz und Verantwortlichkeit werden in konkrete Tätigkeiten übersetzt.
- **Spannungsfelder:** Fairness vs. Genauigkeit, Transparenz vs. Komplexität, Verantwortlichkeit in komplexen Lieferketten.
- **Ethische Prüfung** vor der Inbetriebnahme mit sieben Leitfragen; typische Fallstricke und bewährte Verfahren.
- **Tipp:** ein etabliertes Rahmenwerk als Grundlage nehmen statt eigene Grundsätze zu erfinden – Regulierung verweist zunehmend darauf.`
        },
        {
          type: 'table',
          caption: 'Die wichtigsten ethischen Rahmenwerke im Vergleich (nach Skript S. 114, Angaben aktualisiert)',
          head: ['Rahmenwerk', 'Organisation', 'Jahr', 'Zentrale Schwerpunkte'],
          rows: [
            ['**OECD-KI-Grundsätze**', 'OECD (heute **47** Teilnehmerstaaten)', '2019, aktualisiert Mai 2024', 'Fünf Grundsätze: inklusives Wachstum und Nachhaltigkeit; Menschenrechte und demokratische Werte; Transparenz und Erklärbarkeit; Robustheit und Sicherheit; Verantwortlichkeit'],
            ['**UNESCO-Empfehlung zur Ethik der KI**', 'UNESCO (193 Mitgliedstaaten)', 'Nov. 2021', 'Menschenwürde, kulturelle Vielfalt, ökologische Nachhaltigkeit, Schutz verletzlicher Gruppen, Blick auf den Globalen Süden; u. a. Verhältnismäßigkeit, menschliche Aufsicht, KI-Kompetenz'],
            ['**Ethikleitlinien für vertrauenswürdige KI**', 'Hochrangige Expertengruppe der EU-Kommission', '2019', 'Vertrauenswürdige KI: rechtmäßig, ethisch, robust; sieben Anforderungen (siehe Karten)'],
            ['**Microsoft Responsible AI**', 'Microsoft', '2022, aktualisiert 2024', 'Sechs Prinzipien: Fairness, Zuverlässigkeit und Sicherheit, Datenschutz und Sicherheit, Inklusion, Transparenz, Verantwortlichkeit']
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: OECD-Teilnehmerstaaten',
          md: 'Das Skript nennt 46 Länder, die die OECD-KI-Grundsätze unterstützen. Laut OECD gibt es inzwischen **47 Adhärenten** (Stand der OECD-Seite, abgerufen Oktober 2026). Die Grundsätze wurden im **Mai 2024** aktualisiert – u. a. mit Blick auf generative KI, Desinformation und Umweltaspekte.',
          sources: [
            { title: 'OECD.AI: OECD AI Principles', url: 'https://oecd.ai/en/ai-principles' }
          ]
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'EU-Leitlinien 1: Vorrang menschlichen Handelns und menschliche Aufsicht', back: 'KI soll Menschen unterstützen, nicht entmündigen. Menschen müssen eingreifen können (Human-in-the-Loop, -on-the-Loop, -in-Command).' },
            { front: '2: Technische Robustheit und Sicherheit', back: 'Zuverlässig, genau, reproduzierbar, mit Rückfallplänen und Schutz vor Angriffen.' },
            { front: '3: Privatsphäre und Datenqualitätsmanagement', back: 'Datenschutz, Datenqualität und kontrollierter Datenzugang.' },
            { front: '4: Transparenz', back: 'Rückverfolgbarkeit, Erklärbarkeit und offene Kommunikation, dass KI im Spiel ist.' },
            { front: '5: Vielfalt, Nichtdiskriminierung und Fairness', back: 'Unfaire Verzerrungen vermeiden, Barrierefreiheit, Beteiligung der Betroffenen.' },
            { front: '6: Gesellschaftliches und ökologisches Wohlergehen', back: 'Nachhaltigkeit, soziale Auswirkungen, Demokratie.' },
            { front: '7: Rechenschaftspflicht', back: 'Prüfbarkeit, Folgenabschätzung, Abwägungen dokumentieren, Abhilfe bei Schäden.' }
          ]
        },
        {
          type: 'table',
          caption: 'Vom Grundsatz zur Maßnahme (nach Skript S. 115)',
          head: ['Grundsatz', 'Was das konkret heißt', 'Nachweis im Projekt'],
          rows: [
            ['**Fairness**', 'Voreingenommenheitstests über demografische Gruppen, Monitoring auf ungleiche Auswirkungen, Gegenmaßnahmen bei erkannter Unfairness', 'Fairness-Report je Release (siehe 5.5)'],
            ['**Transparenz**', 'Zweck und Grenzen dokumentieren, verständlich erklären, wie Entscheidungen zustande kommen, KI-Einsatz offenlegen', 'Modellsteckbrief, Hinweis „Sie chatten mit einer KI"'],
            ['**Verantwortlichkeit**', 'Klare Zuständigkeit für Ergebnisse, menschliche Prüfung folgenreicher Entscheidungen, Abhilfeprozesse für Schadensfälle', 'Verantwortliche Person im KI-Inventar, Beschwerdeweg']
          ]
        },
        {
          type: 'text',
          md: `### Drei Spannungsfelder, die du bewusst entscheiden musst

1. **Fairness ↔ Genauigkeit:** Mehr Fairness für eine Gruppe kann die Genauigkeit für eine andere senken.
2. **Transparenz ↔ Komplexität:** Die genauesten Modelle (tiefe neuronale Netze) sind oft am schwersten zu erklären.
3. **Verantwortlichkeit ↔ Lieferkette:** Wenn mehrere Anbieter, Open-Source-Komponenten und Modell-APIs zusammenspielen, verschwimmt, wer wofür einsteht.

Das Skript fordert dafür **klare Rahmenwerke für ethische Abwägungsentscheidungen** – also: Wer entscheidet, nach welchen Kriterien, und wie wird die Abwägung dokumentiert?`
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Zweck', md: 'Welchen Zweck hat das System – und ist dieser ethisch vertretbar?' },
            { title: '2 · Betroffene', md: 'Wer sind die betroffenen Interessengruppen, und wurden sie einbezogen?' },
            { title: '3 · Schäden', md: 'Welche Schäden sind möglich, und welche Gegenmaßnahmen gibt es?' },
            { title: '4 · Fairness', md: 'Gibt es Fairness-Bedenken über verschiedene demografische Gruppen hinweg?' },
            { title: '5 · Transparenz', md: 'Ist das System hinreichend transparent und erklärbar?' },
            { title: '6 · Alternativen', md: 'Wurden weniger riskante Alternativen geprüft – auch „ohne KI"?' },
            { title: '7 · Aufsicht', md: 'Gibt es eine angemessene menschliche Aufsicht?' }
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Fallbeispiel aus dem Skript: IBM',
          md: 'Das Skript (S. 116) beschreibt, wie das KI-Ethikgremium von IBM bei einem geplanten Recruiting-Tool eine mögliche **Geschlechterverzerrung in historischen Einstellungsdaten** feststellte. Statt das System einzusetzen, investierte IBM in zusätzliche Datenerhebung und Fairness-Bedingungen – die Einführung verzögerte sich, entsprach dann aber den ethischen Standards. Die Lehre: **Eine ethische Prüfung vor dem Go-live ist billiger als ein Skandal danach** – vergleiche den Amazon-Fall in 5.5.'
        },
        {
          type: 'table',
          caption: 'Fallstricke und bewährte Verfahren bei der KI-Ethik (nach Skript S. 116–117)',
          head: ['Typischer Fallstrick', 'Bewährtes Verfahren'],
          rows: [
            ['Ethik als einmalige Pflichtübung', 'Ethik im ganzen Lebenszyklus verankern – von der Idee bis zur Stilllegung'],
            ['Ethische Prüfung erst nach dem Systemdesign, wenn Änderungen teuer sind', 'Prüfung schon in der Konzeptphase (Ethik-Check im Projektsteckbrief)'],
            ['Nur technische Teams entscheiden, Betroffene fehlen', 'Vielfältige Interessengruppen einbinden – inklusive der von KI betroffenen Personen'],
            ['Effizienz und Genauigkeit ohne Abwägung über Fairness und Transparenz', 'Kennzahlen zur KI-Ethik messen und berichten (Fairnesstests, Verzerrungsvorfälle)'],
            ['Eindrucksvolle Ethikrichtlinien, die nicht durchgesetzt werden', 'Praxistaugliche Werkzeuge und Schulungen; sichere Kanäle, um Bedenken zu melden']
          ]
        },
        {
          type: 'praxis',
          title: 'Ethik-Check für eine KI-gestützte Schichtplanung',
          company: 'Pflegeheim Lindenhof gGmbH (fiktiv), 140 MA, Kassel',
          scenario: `Ein Anbieter bietet eine KI an, die Dienstpläne optimiert und dabei Krankheitstage und „Zuverlässigkeit" der Beschäftigten berücksichtigt. Die Heimleitung ist begeistert von der versprochenen Zeitersparnis. Du führst vor der Kaufentscheidung die ethische Prüfung mit den sieben Leitfragen durch.`,
          steps: [
            'Zweck: Faire, planbare Dienstpläne – vertretbar. Aber: „Zuverlässigkeit" aus Krankheitstagen abzuleiten, bestraft chronisch Kranke und Eltern kleiner Kinder.',
            'Betroffene einbeziehen: Pflegekräfte, Mitarbeitervertretung und Wohnbereichsleitungen in einem Workshop befragen.',
            'Schäden und Fairness: Gefahr systematischer Benachteiligung (mittelbare Diskriminierung nach AGG); Leistungs- und Verhaltenskontrolle → Mitbestimmung.',
            'Alternative prüfen: Optimierung nur nach Wunschdiensten, Qualifikationen und Arbeitszeitrecht – ohne Krankheitsdaten.',
            'Aufsicht und Transparenz: Pläne bleiben Vorschläge, die Wohnbereichsleitung gibt frei; Beschäftigte sehen, nach welchen Regeln geplant wird.',
            'Ergebnis dokumentieren und dem Governance-Gremium mit der Empfehlung „Kauf nur ohne Zuverlässigkeits-Score" vorlegen.'
          ],
          takeaway: 'Die ethische Prüfung hat nicht „Nein" gesagt, sondern eine **bessere Variante** gefunden. So wird Ethik zum Qualitätswerkzeug statt zur Bremse.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die Rahmenwerke ihrem besonderen Schwerpunkt zu.',
          pairs: [
            ['OECD-KI-Grundsätze', 'Fünf werteorientierte Grundsätze, 2024 aktualisiert'],
            ['UNESCO-Empfehlung', 'Kulturelle Vielfalt, Nachhaltigkeit und Globaler Süden'],
            ['EU-Ethikleitlinien', 'Vertrauenswürdige KI mit sieben Anforderungen'],
            ['Microsoft Responsible AI', 'Sechs Unternehmensprinzipien inkl. Inklusion']
          ],
          explain: 'Die Rahmenwerke stimmen im Kern überein (Fairness, Transparenz, Verantwortlichkeit, Sicherheit), setzen aber eigene Akzente – siehe Skript S. 114.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Ein KI-System, das alle gesetzlichen Vorgaben erfüllt, ist damit automatisch auch ethisch unbedenklich.',
          answer: false,
          explain: 'Laut Skript ist Gesetzestreue die Mindestanforderung. Ethik fragt darüber hinaus, was eine Organisation tun sollte – auch ohne gesetzliche Pflicht.'
        }
      ]
    },
    // ───────────────────────── 5.3 ─────────────────────────
    {
      id: 'k5-l3',
      title: '5.3 EU-KI-Verordnung: Anforderungen und Compliance',
      minutes: 40,
      skript: { chapter: '5.3', page: 117 },
      blocks: [
        {
          type: 'text',
          md: `Die **KI-Verordnung der EU** – Verordnung (EU) 2024/1689, kurz **AI Act** – ist das weltweit erste umfassende KI-Gesetz. Als *Verordnung* gilt sie unmittelbar in allen 27 Mitgliedstaaten, ohne nationale Umsetzung – und auch für Anbieter außerhalb der EU, wenn deren KI-Systeme oder KI-Ergebnisse in der EU genutzt werden.

Für deine Arbeit sind zwei Fragen entscheidend:

1. **In welche Risikoklasse fällt das KI-System?**
2. **Welche Rolle hat dein Unternehmen?** Die wichtigsten Rollen sind der **Anbieter** (entwickelt ein KI-System oder lässt es entwickeln und bringt es unter eigenem Namen in Verkehr) und der **Betreiber** (setzt ein KI-System in eigener Verantwortung beruflich ein). Daneben gibt es Einführer, Händler und Bevollmächtigte.

Die meisten Mittelständler sind **Betreiber** – zum Beispiel, wenn sie einen Chatbot oder ein Bewerbermanagement-Tool einkaufen und nutzen.`
        },
        {
          type: 'skript',
          chapter: '5.3',
          page: 117,
          quote: 'Viele Organisationen stellen fest, dass sie weniger Hochrisiko-Systeme haben als anfangs befürchtet.',
          md: `- Die Verordnung ist am **1. August 2024** in Kraft getreten und folgt einem **risikobasierten Ansatz**: je höher das Risiko, desto strenger die Pflichten – Ausgleich zwischen Innovation und Schutz.
- **Vier Risikokategorien (Pyramide):** verboten, hochriskant, begrenztes Risiko (Transparenzpflichten), minimales Risiko (freiwillige Verhaltenskodizes). Der Großteil der Compliance-Last liegt bei Hochrisiko-Systemen.
- **Verboten** sind u. a. schädliche unterschwellige Manipulation, Ausnutzen von Schwächen (Alter, Behinderung), Social Scoring, biometrische Echtzeit-Fernidentifikation im öffentlichen Raum durch Strafverfolgung (mit Ausnahmen) und Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen.
- **Hochrisiko** auf zwei Wegen: Sicherheitskomponente regulierter Produkte (z. B. Medizinprodukte, Fahrzeuge) oder Einsatz in **acht Bereichen** (Biometrie, kritische Infrastruktur, Bildung, Beschäftigung, grundlegende Dienste, Strafverfolgung, Migration, Justiz/Demokratie).
- **Pflichten für Hochrisiko:** Risikomanagement, Datengovernance, technische Dokumentation, Protokollierung, Transparenz, menschliche Aufsicht, Genauigkeit/Robustheit/Cybersicherheit.
- **Vorgehen:** KI-Inventar → Einstufung mit juristischer Unterstützung → Fokus auf Hochrisiko → Vorlagen → Compliance von Anfang an → Anbieter früh einbinden → Leitlinien verfolgen.`
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Fristen nach dem Digital Omnibus und Bußgelder',
          md: `Zwei Angaben im Skript sind überholt bzw. ungenau:

**1. Fristen.** Das Skript nennt den 2. August 2026 für die Hochrisiko-Pflichten. Mit der Änderungsverordnung **(EU) 2026/1744 („Digital Omnibus on AI")**, in Kraft seit **27.07.2026**, gilt jetzt:
- Hochrisiko nach **Anhang III** (eigenständige Systeme, z. B. Bewerberauswahl, Kreditscoring): ab **02.12.2027**.
- Hochrisiko nach **Anhang I** (KI in regulierten Produkten wie Maschinen, Medizinprodukten): ab **02.08.2028**.
- Unverändert: Verbote und KI-Kompetenz seit 02.02.2025, GPAI-Pflichten seit 02.08.2025, **Transparenzpflichten (Art. 50) seit 02.08.2026**.
- **Bestandssysteme:** Bereits in Verkehr gebrachte Hochrisiko-Systeme fallen grundsätzlich nur unter die Pflichten, wenn sie danach **wesentlich verändert** werden. Die Frist **02.08.2030** gilt für Hochrisiko-Systeme, die **von Behörden** genutzt werden (Art. 111 Abs. 2) – nicht pauschal für alle Bestandssysteme, wie das Skript nahelegt.

**2. Bußgelder.** Die Skript-Tabelle ordnet „7,5 Mio. € / 1,5 %" dem begrenzten Risiko zu. Nach **Art. 99** gilt aber: Verstöße gegen die **Transparenzpflichten (Art. 50)** fallen unter den Rahmen von **15 Mio. € / 3 %**. Der Rahmen von **7,5 Mio. € / 1 %** betrifft **falsche, unvollständige oder irreführende Angaben** gegenüber Behörden und benannten Stellen. Für KMU gilt jeweils der niedrigere Betrag.

Den vollständigen Zeitstrahl und die Aufsicht in Deutschland (KI-MIG, Bundesnetzagentur) findest du in **Kapitel 8 (8.3)**.`,
          sources: [
            { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung) – EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
            { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI) – EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
            { title: 'AI Act Art. 99: Penalties (artificialintelligenceact.eu)', url: 'https://artificialintelligenceact.eu/article/99/' },
            { title: 'AI Act Art. 111: AI systems already placed on the market (artificialintelligenceact.eu)', url: 'https://artificialintelligenceact.eu/article/111/' }
          ]
        },
        {
          type: 'table',
          caption: 'Die Risikoklassen des AI Act im Überblick (Stand Oktober 2026)',
          head: ['Klasse', 'Rechtsgrundlage', 'Beispiele', 'Folge'],
          rows: [
            ['**Unannehmbares Risiko**', 'Art. 5', 'Social Scoring, manipulative Techniken, Ausnutzen von Schwächen, Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen (mit Ausnahmen), ungezieltes Auslesen von Gesichtsbildern; **neu ab 02.12.2026:** KI zur Erzeugung nicht-einvernehmlicher intimer Darstellungen realer Personen und von Missbrauchsdarstellungen', 'Verboten'],
            ['**Hohes Risiko**', 'Art. 6 mit Anhang I (Produkte) und Anhang III (Einsatzbereiche)', 'Bewerberauswahl, Kreditwürdigkeitsprüfung, Zugang zu Bildung, kritische Infrastruktur', 'Umfangreiche Pflichten für Anbieter und Betreiber'],
            ['**Begrenztes Risiko / Transparenz**', 'Art. 50', 'Chatbots, KI-generierte Bilder/Videos/Texte, Deepfakes, Emotionserkennung, biometrische Kategorisierung', 'Informations- und Kennzeichnungspflichten'],
            ['**Minimales Risiko**', '–', 'Spamfilter, KI in Videospielen, Rechtschreibhilfe, Empfehlungen für nicht-essenzielle Dienste', 'Keine besonderen Pflichten, freiwillige Kodizes (aber Art. 4 KI-Kompetenz gilt)'],
            ['**KI-Modelle mit allgemeinem Verwendungszweck (GPAI)**', 'Art. 51–55', 'Große Sprachmodelle hinter ChatGPT, Gemini oder Claude', 'Pflichten für Modellanbieter (Dokumentation, Urheberrechts-Policy, bei systemischem Risiko mehr)']
          ]
        },
        {
          type: 'flipcards',
          cards: [
            { front: 'Anhang III Nr. 1: Biometrie', back: 'Biometrische Fernidentifizierung, biometrische Kategorisierung nach sensiblen Merkmalen, Emotionserkennung (soweit nicht ohnehin verboten).' },
            { front: 'Anhang III Nr. 2: Kritische Infrastruktur', back: 'KI als Sicherheitsbauteil in digitaler Infrastruktur, Straßenverkehr, Wasser-, Gas-, Wärme- und Stromversorgung.' },
            { front: 'Anhang III Nr. 3: Bildung', back: 'Zulassung zu Bildungseinrichtungen, Bewertung von Lernergebnissen, Prüfungsaufsicht.' },
            { front: 'Anhang III Nr. 4: Beschäftigung', back: 'Stellenanzeigen gezielt schalten, Bewerbungen filtern und bewerten, Entscheidungen über Beförderung, Kündigung, Aufgabenverteilung und Leistungsüberwachung.' },
            { front: 'Anhang III Nr. 5: Wesentliche Dienste', back: 'Kreditwürdigkeit natürlicher Personen, Risiko und Preis bei Lebens- und Krankenversicherungen, Zugang zu öffentlichen Leistungen, Notrufpriorisierung.' },
            { front: 'Anhang III Nr. 6–8: Staat', back: 'Strafverfolgung, Migration/Asyl/Grenzkontrolle, Justiz und demokratische Prozesse (z. B. Beeinflussung von Wahlen).' }
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Die Ausnahme in Art. 6 Abs. 3',
          md: 'Ein System aus einem Anhang-III-Bereich ist **nicht** hochriskant, wenn es kein erhebliches Risiko birgt – etwa weil es nur eine eng begrenzte Verfahrensaufgabe erledigt, das Ergebnis einer bereits abgeschlossenen menschlichen Tätigkeit verbessert, Entscheidungsmuster erkennt, ohne die menschliche Bewertung zu ersetzen, oder nur eine vorbereitende Aufgabe übernimmt. **Rückausnahme:** Profiling natürlicher Personen ist immer hochriskant. Wer sich auf die Ausnahme beruft, muss die Bewertung dokumentieren und das System registrieren (der Omnibus hat die Registrierungsangaben dafür reduziert). Genau diesen Ermessensspielraum nennt das Skript als erste Compliance-Herausforderung.'
        },
        { type: 'interactive', widget: 'ai-act-classifier', props: {} },
        {
          type: 'table',
          caption: 'Pflichten nach Risikokategorie (nach Skript S. 120, Bußgelder nach Art. 99 korrigiert)',
          head: ['Anforderung', 'Verboten', 'Hochrisiko', 'Begrenztes Risiko', 'Minimales Risiko'],
          rows: [
            ['Einsatz erlaubt', 'Nein', 'Ja, bei Compliance', 'Ja, mit Transparenz', 'Ja'],
            ['Risikomanagementsystem', '–', 'Erforderlich', 'Nicht erforderlich', 'Nicht erforderlich'],
            ['Datengovernance', '–', 'Erforderlich', 'Nicht erforderlich', 'Nicht erforderlich'],
            ['Technische Dokumentation', '–', 'Erforderlich', 'Nicht erforderlich', 'Nicht erforderlich'],
            ['Transparenz gegenüber Nutzern', '–', 'Erforderlich', 'Erforderlich', 'Nicht erforderlich'],
            ['Menschliche Aufsicht', '–', 'Erforderlich', 'Nicht erforderlich', 'Nicht erforderlich'],
            ['Höchstbußgeld', '35 Mio. € / 7 %', '15 Mio. € / 3 %', '15 Mio. € / 3 % (Art. 50)', 'keine spezifischen']
          ]
        },
        {
          type: 'table',
          caption: 'Hochrisiko-KI: Wer muss was? (Auswahl)',
          head: ['Anbieter (Art. 16 ff.)', 'Betreiber (Art. 26, 27)'],
          rows: [
            ['Risikomanagementsystem über den gesamten Lebenszyklus (Art. 9)', 'System gemäß Betriebsanleitung verwenden'],
            ['Daten-Governance: relevante, repräsentative, möglichst fehlerfreie Trainingsdaten (Art. 10)', 'Menschliche Aufsicht durch kompetente, geschulte Personen sicherstellen'],
            ['Technische Dokumentation und automatische Protokollierung (Art. 11, 12)', 'Eingabedaten, die der Betreiber kontrolliert, müssen relevant und repräsentativ sein'],
            ['Transparenz und Betriebsanleitung, menschliche Aufsicht ermöglichen (Art. 13, 14)', 'Betrieb überwachen, Risiken und schwerwiegende Vorfälle melden'],
            ['Genauigkeit, Robustheit, Cybersicherheit (Art. 15)', 'Automatisch erzeugte Protokolle mindestens sechs Monate aufbewahren (soweit unter seiner Kontrolle)'],
            ['Qualitätsmanagementsystem, Konformitätsbewertung, CE-Kennzeichnung, Registrierung in der EU-Datenbank', 'Vor Einsatz am Arbeitsplatz: Arbeitnehmervertretung und betroffene Beschäftigte informieren (Art. 26 Abs. 7)'],
            ['Beobachtung nach dem Inverkehrbringen, Meldung schwerwiegender Vorfälle', 'Öffentliche Stellen und bestimmte private Betreiber (z. B. Kreditscoring, Lebens-/Krankenversicherung): Grundrechte-Folgenabschätzung (Art. 27)']
          ]
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Vorsicht Rollenwechsel (Art. 25)',
          md: 'Ein Betreiber wird selbst zum **Anbieter** eines Hochrisiko-Systems – mit allen Anbieterpflichten –, wenn er es unter **eigenem Namen oder eigener Marke** anbietet, es **wesentlich verändert** oder den **Zweck so ändert**, dass es hochriskant wird. Beispiel: Ihr nutzt einen allgemeinen Chatbot und baut daraus eigenständig ein Tool zur Vorauswahl von Bewerbungen.'
        },
        {
          type: 'text',
          md: `### Pflichten, die (fast) alle betreffen

**Art. 4 – KI-Kompetenz** (seit **02.02.2025**): Anbieter und Betreiber müssen Maßnahmen ergreifen, damit ihr Personal ausreichende KI-Kompetenz hat – abgestimmt auf Vorkenntnisse und Einsatzkontext. Der Digital Omnibus hat Art. 4 neu gefasst: Die Pflicht zu Maßnahmen bleibt, aber es muss kein bestimmtes Kompetenzniveau jeder einzelnen Person garantiert werden. Ein Zertifikat ist laut EU-Kommission nicht erforderlich. (Mehr in **Kapitel 7, 7.4**.)

**Art. 50 – Transparenz** (gilt seit **02.08.2026**):
- *Anbieter* gestalten KI-Systeme, die direkt mit Menschen interagieren, so, dass diese wissen, dass sie mit einer KI sprechen (außer es ist offensichtlich). Ein Kundenservice-Chatbot muss also klar sagen, dass er kein Mensch ist.
- *Anbieter* generativer KI kennzeichnen synthetische Audio-, Bild-, Video- und Textausgaben maschinenlesbar.
- *Betreiber* von Emotionserkennung oder biometrischer Kategorisierung informieren Betroffene.
- *Betreiber* legen **Deepfakes** offen und KI-generierte Texte zu Angelegenheiten von öffentlichem Interesse – außer der Text wurde menschlich geprüft und redaktionell verantwortet.`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Extraterritoriale Wirkung',
          md: 'Wie das Skript betont: Der AI Act betrifft auch Organisationen außerhalb der EU, wenn sie KI-Systeme auf dem EU-Markt anbieten oder wenn KI-Ergebnisse in der EU genutzt werden. Für dich als Einkäufer heißt das: Auch ein US-Anbieter muss dir die nötigen Compliance-Unterlagen liefern – fordere sie vertraglich ein.'
        },
        {
          type: 'steps',
          items: [
            { title: '1 · Inventar', md: 'Alle KI-Systeme erfassen, die ihr entwickelt oder einsetzt – inklusive KI-Funktionen in Standardsoftware (Copilots).' },
            { title: '2 · Einstufung', md: 'Jedes System mit juristischer Unterstützung einer Risikokategorie und eurer Rolle zuordnen; Ausnahmen nach Art. 6 Abs. 3 dokumentieren.' },
            { title: '3 · Fokus', md: 'Compliance-Arbeit auf Hochrisiko-Systeme konzentrieren – dort sind Anforderungen und Strafen am höchsten.' },
            { title: '4 · Vorlagen', md: 'Standardisierte Vorlagen für technische Dokumentation, Risikobewertung und Freigabe anlegen.' },
            { title: '5 · Von Anfang an', md: 'Compliance-Anforderungen in den Entwicklungs- und Beschaffungsprozess integrieren statt nachrüsten.' },
            { title: '6 · Anbieter einbinden', md: 'Lieferanten früh um Konformitätserklärung, Betriebsanleitung und Unterstützung bitten – wichtig bei komplexen Lieferketten.' },
            { title: '7 · Leitlinien verfolgen', md: 'Aufsichtsbehörden und Kommission veröffentlichen laufend klärende Dokumente – regelmäßig prüfen.' }
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Hinweis zum folgenden Video',
          md: 'Das kurze Lernvideo des Mittelstand-Digital Zentrums erklärt die Grundidee des AI Act. Es kann vor dem Digital Omnibus entstanden sein – nutze für Fristen immer die Aktualisierung oben.'
        },
        {
          type: 'youtube',
          id: 'BRT2yxE83eI',
          title: 'Lernvideo: EU AI Act - Teil 1',
          channel: 'Mittelstand-Digital Zentrum Tourismus',
          lang: 'de',
          minutes: 3
        },
        {
          type: 'praxis',
          title: 'KI-gestützte Bewerbervorauswahl einordnen',
          company: 'Kaya Personalservice GmbH (fiktiv), 40 MA, Leipzig',
          scenario: `Der Personaldienstleister möchte ein zugekauftes SaaS-Tool nutzen, das Lebensläufe analysiert und Kandidatinnen und Kandidaten für Stellen vorsortiert. Die Geschäftsführung fragt dich: „Dürfen wir das, und was müssen wir tun?"`,
          steps: [
            'Einstufung: Bewerbungen filtern und bewerten fällt unter Anhang III Nr. 4 → Hochrisiko (Profiling, daher greift die Ausnahme nach Art. 6 Abs. 3 nicht).',
            'Rolle klären: Kaya nutzt das Tool unter dem Namen des Herstellers und ändert es nicht → Betreiber. Beim Hersteller Konformitätserklärung, CE-Kennzeichnung und Betriebsanleitung anfordern.',
            'Fristen einordnen: Die Hochrisiko-Pflichten gelten nach dem Digital Omnibus ab 02.12.2027 – DSGVO (Art. 22, DSFA, siehe 5.4) und Mitbestimmung gelten aber schon jetzt.',
            'Menschliche Aufsicht organisieren: Recruiterinnen schulen, Vorschläge immer selbst prüfen, keine automatische Absage; Fairness-Test nach Gruppen (siehe 5.5).',
            'Betriebsrat und Beschäftigte vor Einführung informieren (Art. 26 Abs. 7 AI Act, zusätzlich BetrVG) und Protokollaufbewahrung einrichten.'
          ],
          takeaway: 'Auch wer „nur" einkauft, hat als Betreiber eigene Pflichten. Eine saubere Einstufung zu Projektbeginn spart später teure Nacharbeit.'
        },
        {
          type: 'quickcheck',
          qtype: 'match',
          q: 'Ordne die KI-Anwendungen der passenden Risikoklasse zu.',
          pairs: [
            ['Social Scoring von Bürgerinnen und Bürgern', 'Verboten (Art. 5)'],
            ['Bewerbungen automatisch vorsortieren', 'Hochrisiko (Anhang III)'],
            ['Kundenservice-Chatbot auf der Website', 'Transparenzpflicht (Art. 50)'],
            ['Spamfilter im E-Mail-Postfach', 'Minimales Risiko']
          ],
          explain: 'Die Einstufung hängt vom Einsatzzweck ab, nicht von der Technik. Derselbe Sprachmodell-Baustein kann in einem Chatbot (Transparenz) oder in der Bewerberauswahl (Hochrisiko) stecken.'
        },
        {
          type: 'quickcheck',
          qtype: 'multi',
          q: 'Welche Pflichten hat ein Betreiber eines Hochrisiko-KI-Systems? (Mehrfachauswahl)',
          options: ['Menschliche Aufsicht durch geschulte Personen sicherstellen', 'Die CE-Kennzeichnung selbst anbringen', 'Das System gemäß Betriebsanleitung verwenden', 'Vor Einsatz am Arbeitsplatz Arbeitnehmervertretung und Beschäftigte informieren'],
          answer: [0, 2, 3],
          explain: 'CE-Kennzeichnung und Konformitätsbewertung sind Anbieterpflichten. Der Betreiber muss bestimmungsgemäß nutzen, Aufsicht sicherstellen, überwachen, Protokolle aufbewahren und am Arbeitsplatz vorab informieren (Art. 26).'
        }
      ]
    },
    // ───────────────────────── 5.4 ─────────────────────────
    {
      id: 'k5-l4',
      title: '5.4 DSGVO und Datenschutz bei KI',
      minutes: 35,
      skript: { chapter: '5.4', page: 121 },
      blocks: [
        {
          type: 'text',
          md: `Die DSGVO ist älter als ChatGPT – und trotzdem eines der wichtigsten KI-Gesetze. Denn KI lebt von Daten, und sehr oft sind das **personenbezogene Daten**: Namen, E-Mail-Adressen, Fotos, IP-Adressen, Verhaltensmuster und sogar **KI-generierte Erkenntnisse über Personen** (etwa ein Score). Der AI Act ersetzt die DSGVO nicht – beide gelten nebeneinander.`
        },
        {
          type: 'skript',
          chapter: '5.4',
          page: 121,
          md: `- Die DSGVO gilt seit **Mai 2018** und über den **gesamten KI-Lebenszyklus** – von der Erhebung der Trainingsdaten bis zur Speicherung der Modellergebnisse. In jedem Stadium braucht es eine **Rechtsgrundlage**, Datenschutz durch Technikgestaltung und die Wahrung der Betroffenenrechte.
- **Grundsätze mit KI-Bezug:** Rechtmäßigkeit/Treu und Glauben/Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit – jeweils mit typischem Konflikt zur KI-Praxis.
- **Art. 22:** Recht, keiner ausschließlich automatisierten Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung unterworfen zu werden (z. B. automatische Kreditablehnung, Bewerbungssichtung); aussagekräftige Informationen über die Logik sind bereitzustellen.
- **DSFA** für KI mit umfangreicher Verarbeitung personenbezogener Daten oder automatisierten Entscheidungen.
- **Betroffenenrechte** (Auskunft, Berichtigung, Löschung) sind bei trainierten Modellen technisch schwierig – Entfernen einzelner Trainingsbeispiele ohne Neutraining ist ein offenes Forschungsproblem.
- **EDSA-Stellungnahme 28/2024**, typische Fehler, bewährte Verfahren und ein Durchsetzungsbeispiel.`
        },
        {
          type: 'table',
          caption: 'DSGVO-Grundsätze und ihre Wirkung auf KI-Systeme (nach Skript S. 123, ergänzt)',
          head: ['Grundsatz (Art. 5 DSGVO)', 'Konflikt mit der KI-Praxis', 'Compliance-Ansatz'],
          rows: [
            ['Rechtmäßigkeit, Treu und Glauben, Transparenz', 'Daten werden „einfach mal" fürs Training genutzt', 'Rechtsgrundlage bestimmen (Einwilligung, berechtigtes Interesse usw.), klare Informationen über Zwecke'],
            ['Zweckbindung', 'Kundendaten aus der Auftragsabwicklung sollen ein Modell trainieren', 'Zwecke dokumentieren; für neue Verwendungen Vereinbarkeit prüfen oder neue Rechtsgrundlage/Einwilligung'],
            ['Datenminimierung', 'KI profitiert von großen Datenmengen', 'Merkmalsauswahl, Datenreduktion, Pseudonymisierung'],
            ['Richtigkeit', 'Trainingsdaten sind veraltet oder unvollkommen', 'Datenqualitätsprozesse, Korrekturmechanismen (siehe Kapitel 3)'],
            ['Speicherbegrenzung', 'Historische Daten werden für Monitoring und Nachtraining gebraucht', 'Aufbewahrungsrichtlinien, automatisierte Löschung, Anonymisierung nach Frist'],
            ['Integrität und Vertraulichkeit', 'KI-Systeme sind attraktive Angriffsziele', 'Verschlüsselung, Zugriffskontrollen, Sicherheitstests'],
            ['*Ergänzung:* Rechenschaftspflicht (Art. 5 Abs. 2)', 'Niemand kann belegen, was wann wofür verarbeitet wurde', 'Verarbeitungsverzeichnis, Dokumentation, Nachweise']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Sechs oder sieben Grundsätze?',
          md: 'Das Skript spricht von sechs Grundsätzen. Art. 5 DSGVO listet in Absatz 1 sechs Grundsätze und ergänzt in Absatz 2 die **Rechenschaftspflicht**: Der Verantwortliche muss die Einhaltung *nachweisen* können. Gerade bei KI ist das der Punkt, an dem Aufsichtsbehörden zuerst nachfragen.'
        },
        {
          type: 'text',
          md: `### Art. 22: automatisierte Entscheidungen

Art. 22 DSGVO greift, wenn eine Entscheidung **ausschließlich automatisiert** fällt und **rechtliche Wirkung** entfaltet oder die Person **ähnlich erheblich** beeinträchtigt – etwa eine automatische Kreditablehnung oder eine automatische Absage im Bewerbungsprozess. Ausnahmen (Vertrag, Gesetz, ausdrückliche Einwilligung) verlangen Schutzmaßnahmen: das Recht auf **Eingreifen einer Person**, auf **Darlegung des eigenen Standpunkts** und auf **Anfechtung**. Dazu kommen Informationspflichten über die **involvierte Logik**, Tragweite und Folgen (Art. 13–15). Für viele folgenreiche KI-Entscheidungen wird menschliche Aufsicht damit faktisch Pflicht.

**Vorsicht vor Schein-Aufsicht:** Ein Mensch, der KI-Vorschläge nur abnickt, macht aus einer automatisierten noch keine menschliche Entscheidung.`
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Rechtsprechung des EuGH zu Art. 22',
          md: `Zwei Urteile des Europäischen Gerichtshofs schärfen, was Art. 22 in der Praxis bedeutet:

- **SCHUFA-Urteil (C-634/21, 07.12.2023):** Schon die Erstellung eines Scorewerts kann eine „automatisierte Entscheidung" sein, wenn ein Dritter (z. B. die Bank) seine Entscheidung **maßgeblich** auf diesen Wert stützt. Wer Scores für andere berechnet, kann also selbst unter Art. 22 fallen.
- **Dun & Bradstreet Austria (C-203/22, 27.02.2025):** Betroffene haben Anspruch auf eine Erklärung des **Verfahrens und der Grundsätze**, die bei der automatisierten Entscheidung konkret angewandt wurden – so, dass sie die Entscheidung nachvollziehen und anfechten können. Ein bloßer Verweis auf Geschäftsgeheimnisse reicht nicht pauschal aus; im Konfliktfall wägen Gericht oder Behörde ab.

Für dich heißt das: Plane **Erklärbarkeit** (siehe 5.5) von Anfang an mit ein, wenn KI über Menschen mitentscheidet.`,
          sources: [
            { title: 'EuGH, Rechtssache C-634/21 (SCHUFA Holding – Scoring)', url: 'https://curia.europa.eu/juris/liste.jsf?num=C-634/21' },
            { title: 'EuGH, Rechtssache C-203/22 (Dun & Bradstreet Austria)', url: 'https://curia.europa.eu/juris/liste.jsf?num=C-203/22' }
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'DSFA früh durchführen',
          md: 'Laut Skript (S. 123) erkennt eine **Datenschutz-Folgenabschätzung** (Art. 35 DSGVO) Risiken dann, wenn Gegenmaßnahmen noch einfach und günstig sind. Für KI-Systeme, die personenbezogene Daten in großem Umfang verarbeiten oder automatisiert über Menschen entscheiden, ist sie in aller Regel Pflicht. Tipp: DSFA und die Risikobewertung nach AI Act gemeinsam erstellen – viele Fragen überschneiden sich.'
        },
        {
          type: 'table',
          caption: 'Betroffenenrechte bei KI – Herausforderung und pragmatische Ansätze',
          head: ['Recht', 'Herausforderung (Skript S. 124)', 'Pragmatischer Ansatz (Ergänzung)'],
          rows: [
            ['Auskunft (Art. 15)', 'Den Beitrag einer Person zu einem Modell herauszulösen ist schwierig', 'Auskunft über gespeicherte Rohdaten, Ein- und Ausgaben, Zwecke und Logik; Datenflüsse im Verarbeitungsverzeichnis dokumentieren'],
            ['Berichtigung (Art. 16)', 'Das Modell hat aus falschen Daten bereits gelernt', 'Quelldaten korrigieren, beim nächsten Nachtraining berücksichtigen; bei LLM-Ausgaben Filter bzw. Korrektur in der Wissensbasis'],
            ['Löschung (Art. 17)', 'Einzelne Trainingsbeispiele ohne Neutraining zu entfernen ist ein offenes Forschungsproblem („Machine Unlearning")', 'Personenbezug im Training vermeiden; Wissen per RAG statt Training einbinden – dort lässt sich ein Dokument einfach löschen']
          ]
        },
        {
          type: 'text',
          md: `### Die Linie der Aufsichtsbehörden

Der **Europäische Datenschutzausschuss (EDSA)** hat am **18.12.2024** die **Stellungnahme 28/2024** zu Datenschutzaspekten bei der Verarbeitung personenbezogener Daten im Kontext von KI-Modellen angenommen. Das Skript fasst daraus zusammen: Web Scraping fürs Training braucht eine Rechtsgrundlage, KI-generierte personenbezogene Daten bleiben geschützt, eine Einwilligung muss spezifisch und informiert sein (nicht in AGB versteckt), und **berechtigtes Interesse** erfordert eine echte Interessenabwägung mit den Rechten der Betroffenen.

Im Kern beantwortet die Stellungnahme drei Fragen: **Wann ist ein KI-Modell anonym?** (nur, wenn personenbezogene Daten weder direkt extrahierbar noch per Abfrage herauszulocken sind – Einzelfallprüfung), **wie trägt berechtigtes Interesse** in Entwicklung und Betrieb (Drei-Stufen-Test: legitimes Interesse, Erforderlichkeit, Abwägung), und **was folgt aus unrechtmäßig verarbeiteten Trainingsdaten** für den späteren Betrieb des Modells.

In Deutschland hat die **Datenschutzkonferenz (DSK)** am **06.05.2024** die Orientierungshilfe „Künstliche Intelligenz und Datenschutz" veröffentlicht (Schwerpunkt LLM-Anwendungen), im **Juni 2025** folgte eine Orientierungshilfe zu **technischen und organisatorischen Maßnahmen**. Die DSK-Checkliste in drei Phasen:`
        },
        {
          type: 'steps',
          items: [
            { title: '1. Konzeption & Auswahl', md: 'Einsatzzweck festlegen und auf Rechtmäßigkeit prüfen; wenn möglich ohne personenbezogene Daten arbeiten; Rechtsgrundlage klären; **keine automatisierte Letztentscheidung**; geschlossenes oder offenes System? Transparenz und Opt-out für KI-Training und Eingabehistorie prüfen; DSB und Beschäftigtenvertretung einbinden.' },
            { title: '2. Implementierung', md: 'Verantwortlichkeit vertraglich regeln (z. B. **Auftragsverarbeitungsvertrag**, Art. 28); Drittlandübermittlungen prüfen; interne Regelungen; DSFA, wo nötig; **betriebliche Accounts** statt privater Konten; Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen; Beschäftigte sensibilisieren.' },
            { title: '3. Nutzung', md: 'Vorsicht bei Ein- und Ausgabe personenbezogener Daten, besondere Vorsicht bei Gesundheits- und anderen sensiblen Daten (Art. 9); **Ergebnisse auf Richtigkeit prüfen**; Ergebnisse und Verfahren auf **Diskriminierung** prüfen.' }
          ]
        },
        {
          type: 'table',
          caption: 'Häufige DSGVO-Fehler bei KI und was du stattdessen tust (nach Skript S. 125)',
          head: ['Häufiger Fehler', 'Besser so'],
          rows: [
            ['„Öffentlich verfügbare Daten darf man für Training frei nutzen"', 'Auch öffentliche Daten sind geschützt – Rechtsgrundlage und Abwägung vorab'],
            ['Daten „auf Vorrat" für künftige Modelle sammeln', 'Datenminimierung: nur für einen festgelegten Zweck erheben'],
            ['Folgenreiche automatisierte Entscheidungen ohne Menschen', 'Art. 22 beachten: echte menschliche Prüfung, Anfechtungsweg'],
            ['Datenschutzhinweise bei neuen KI-Funktionen nicht anpassen', 'Hinweise vor dem Rollout aktualisieren, KI-Einsatz transparent machen'],
            ['Betroffenenrechte ignorieren, weil sie technisch schwierig sind', 'Prozesse für Anfragen einrichten, Architektur darauf auslegen (z. B. RAG)']
          ]
        },
        {
          type: 'update',
          title: 'Aktualisierung zum Skript: Das Bußgeld-Beispiel von 1,2 Mrd. Euro',
          md: `Das Skript (S. 125) berichtet, die irische Datenschutzbehörde habe 2024 ein großes Technologieunternehmen wegen KI-Trainingsdaten mit **1,2 Milliarden Euro** belegt. Diese Darstellung lässt sich so nicht belegen:

- Das Bußgeld von **1,2 Mrd. €** verhängte die irische Datenschutzbehörde (DPC) im **Mai 2023** gegen **Meta** – wegen **Datenübermittlungen in die USA** nach dem Schrems-II-Urteil, nicht wegen KI-Training. Grundlage war ein verbindlicher Beschluss des EDSA.
- Ein echter KI-Trainingsfall: Die italienische Datenschutzbehörde **Garante** verhängte am **20.12.2024** gegen **OpenAI** ein Bußgeld von **15 Mio. €**, u. a. weil personenbezogene Daten ohne geeignete Rechtsgrundlage für das Training von ChatGPT genutzt und Informationspflichten verletzt worden seien. Laut Garante hat das **Landgericht Rom** dem Rechtsmittel von OpenAI mit Urteil vom **18.03.2026** stattgegeben – den aktuellen Stand solltest du vor einer Verwendung prüfen.

Die Kernaussage des Skripts bleibt richtig: **DSGVO-Durchsetzung bei KI ist Realität** – aber zitiere Fälle immer mit Primärquelle.`,
          sources: [
            { title: 'EDPB: 1.2 billion euro fine for Facebook as a result of EDPB binding decision (2023)', url: 'https://www.edpb.europa.eu/news/news/2023/12-billion-euro-fine-facebook-result-edpb-binding-decision_en' },
            { title: 'Garante per la protezione dei dati personali: ChatGPT – Pressemitteilung zum Bußgeld (20.12.2024, mit Hinweis auf Urteil 2026)', url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432' }
          ]
        },
        {
          type: 'text',
          md: `### Über die DSGVO hinaus: Urheberrecht und Geschäftsgeheimnisse

- **Training mit fremden Werken:** § 44b UrhG erlaubt Text und Data Mining an rechtmäßig zugänglichen Werken – aber nur, wenn die Rechteinhaber das nicht **maschinenlesbar vorbehalten** haben. GPAI-Anbieter müssen nach dem AI Act eine Urheberrechts-Policy haben und solche Vorbehalte beachten.
- **Rechtsprechung:** Das LG München I hat am 11.11.2025 (Az. 42 O 14139/24) im Verfahren **GEMA gegen OpenAI** entschieden ([Bericht LTO](https://www.lto.de/recht/nachrichten/n/42o1413924-lg-muenchen-i-gema-openai-chatgpt-songtexte-ki)), dass das Speichern („Memorisieren") von Liedtexten im Modell und deren Ausgabe Urheberrechte verletzen; die TDM-Schranke decke das nicht. Das Urteil war zum Zeitpunkt der Entscheidung nicht rechtskräftig – prüfe den aktuellen Verfahrensstand.
- **KI-Ausgaben:** Urheberrechtlich geschützt sind nur persönliche geistige Schöpfungen von Menschen. Rein KI-generierte Texte oder Bilder sind daher oft nicht geschützt.
- **Geschäftsgeheimnisse:** Nach § 2 Nr. 1 GeschGehG ist eine Information nur geschützt, wenn sie Gegenstand **angemessener Geheimhaltungsmaßnahmen** ist. Wer Konstruktionsdaten oder Kalkulationen unkontrolliert in öffentliche KI-Tools kopieren lässt, riskiert diesen Schutz – ein weiterer Grund für die Datenampel aus 5.1.`
        },
        {
          type: 'praxis',
          title: 'Dürfen wir Kundendaten fürs KI-Training nutzen?',
          company: 'Fahrradwelt Krämer GmbH (fiktiv), Onlineshop, 75 MA, Münster',
          scenario: `Das Marketing möchte ein Modell trainieren, das Kundinnen und Kunden mit hoher Abwanderungswahrscheinlichkeit erkennt und ihnen Gutscheine schickt. Grundlage sollen fünf Jahre Bestell-, Retouren- und Service-Daten sein – erhoben ursprünglich zur Vertragsabwicklung. Der Datenschutzhinweis erwähnt KI bisher nicht.`,
          steps: [
            'Zweckbindung prüfen: Abwanderungsprognose ist ein neuer Zweck. Vereinbarkeit nach Art. 6 Abs. 4 prüfen; als Rechtsgrundlage kommt berechtigtes Interesse (Art. 6 Abs. 1 lit. f) mit dokumentierter Abwägung in Frage – inkl. Widerspruchsmöglichkeit.',
            'Datenminimierung: Nur Merkmale verwenden, die für die Prognose nötig sind (z. B. Bestellfrequenz, Retourenquote); Freitexte aus dem Service und Zahlungsdaten weglassen; pseudonymisieren.',
            'Speicherbegrenzung: Statt fünf Jahren ein gleitendes Fenster von 24 Monaten; ältere Daten nur aggregiert.',
            'Art. 22 prüfen: Ein Gutschein ist keine Entscheidung mit erheblicher Wirkung – unproblematisch, solange keine Nachteile (z. B. schlechtere Preise) daran hängen.',
            'Transparenz: Datenschutzhinweis vor dem Start aktualisieren, Verarbeitungsverzeichnis ergänzen, DSB einbinden; DSFA-Schwellwert prüfen und Ergebnis dokumentieren.'
          ],
          takeaway: 'Nicht „ob", sondern „wie": Mit klarer Rechtsgrundlage, weniger Daten und offener Kommunikation wird aus einem Datenschutzrisiko ein sauberes Projekt.'
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Welche Maßnahme empfiehlt die DSK-Orientierungshilfe, um Beschäftigte beim KI-Einsatz zu schützen?',
          options: ['Private Accounts erlauben, damit keine Daten im Unternehmen liegen', 'Betriebliche Accounts einrichten', 'Auf eine Datenschutz-Folgenabschätzung grundsätzlich verzichten', 'Ausgaben ungeprüft übernehmen, um Zeit zu sparen'],
          answer: 1,
          explain: 'Die DSK-Orientierungshilfe nennt ausdrücklich „Beschäftigte schützen, betriebliche Accounts einrichten". So behält der Verantwortliche die Kontrolle, und Beschäftigte müssen keine privaten Daten preisgeben.'
        },
        {
          type: 'quickcheck',
          qtype: 'tf',
          q: 'Öffentlich im Internet verfügbare personenbezogene Daten dürfen ohne Einschränkung für KI-Training genutzt werden.',
          answer: false,
          explain: 'Das Skript nennt genau diese Annahme als häufigen Fehler: Die DSGVO gilt weiterhin. Laut EDSA-Stellungnahme 28/2024 braucht auch Web Scraping eine Rechtsgrundlage und eine Interessenabwägung.'
        },
        {
          type: 'links',
          title: 'Primärquellen zum Weiterlesen',
          items: [
            { title: 'DSGVO – Verordnung (EU) 2016/679', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj', note: 'Gesetzestext' },
            { title: 'EDSA – Stellungnahme 28/2024 zu KI-Modellen', url: 'https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en', note: 'Anonymität von Modellen, berechtigtes Interesse, Folgen unrechtmäßiger Trainingsdaten' },
            { title: 'DSK – Orientierungshilfe KI und Datenschutz', url: 'https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf', note: 'Checkliste für Auswahl, Einführung, Nutzung' },
            { title: 'DSK – Orientierungshilfe zu TOM bei KI-Systemen', url: 'https://www.datenschutzkonferenz-online.de/media/oh/DSK-OH_KI-Systeme.pdf', note: 'Technische und organisatorische Maßnahmen (Juni 2025)' },
            { title: '§ 44b UrhG – Text und Data Mining', url: 'https://www.gesetze-im-internet.de/urhg/__44b.html', note: 'Gesetzestext' }
          ]
        }
      ]
    },
    // ───────────────────────── 5.5 ─────────────────────────
    {
      id: 'k5-l5',
      title: '5.5 Verzerrung, Fairness und Erklärbarkeit',
      minutes: 35,
      skript: { chapter: '5.5', page: 126 },
      blocks: [
        {
          type: 'text',
          md: `Eine KI hat keine Vorurteile im menschlichen Sinn – aber sie lernt aus Daten, die von Menschen und ihrer Geschichte geprägt sind. Wenn ein Modell Frauen seltener zum Vorstellungsgespräch einlädt oder Menschen aus bestimmten Stadtteilen schlechtere Kreditkonditionen anbietet, entstehen **rechtliche Haftung, Reputationsschäden und echter menschlicher Schaden**. In dieser Lektion lernst du, Verzerrungen zu erkennen, Fairness messbar zu machen und KI-Entscheidungen zu erklären.`
        },
        {
          type: 'skript',
          chapter: '5.5',
          page: 126,
          quote: 'Um Verzerrungen zu beseitigen, muss die gesamte KI-Pipeline untersucht werden, nicht nur der Algorithmus.',
          md: `- **Verzerrung (Bias)** liegt vor, wenn ein KI-System systematisch unfaire Ergebnisse für bestimmte Gruppen erzeugt – **statistisch** (weniger genau für manche Gruppen) oder **allokativ** (ungerechte Verteilung von Chancen und Ressourcen).
- **Sechs Quellen** über den Lebenszyklus: historische Verzerrung, Repräsentations-, Mess-, Aggregations-, Evaluierungs- und Einsatzverzerrung.
- **Fairness-Definitionen** – demografische Parität, Equalized Odds, Vorhersageparität – können sich mathematisch widersprechen; die Wahl hängt von Werten der Beteiligten und Recht ab.
- **Gegenmaßnahmen** in Vor-, In- und Nachverarbeitung – jeweils mit Kompromissen.
- **Erklärbarkeit** schafft Vertrauen, ermöglicht Aufsicht, hilft bei Fehlersuche, erfüllt AI Act und DSGVO und gibt Betroffenen Rechtsmittel. Global vs. lokal; Techniken: LIME, SHAP, kontrafaktische Erklärungen, Aufmerksamkeitsmechanismen.
- **Fehler** (z. B. „geschützte Merkmale entfernen reicht") und **bewährte Verfahren**; Spannungsfeld Genauigkeit vs. Erklärbarkeit.`
        },
        {
          type: 'table',
          caption: 'Zwei Formen von Verzerrung (Skript S. 126)',
          head: ['Form', 'Was passiert?', 'Beispiel aus dem Skript'],
          rows: [
            ['**Statistische Verzerrung**', 'Die Vorhersagen sind für manche Gruppen weniger genau', 'Gesichtserkennung funktioniert bei dunkelhäutigen Personen schlechter'],
            ['**Allokative Verzerrung**', 'Chancen oder Ressourcen werden ungerecht verteilt', 'Kredit-KI lehnt qualifizierte Antragstellende aus Minderheiten überproportional ab']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Gut belegt: „Gender Shades"',
          md: 'Dass statistische Verzerrung real ist, zeigte die Studie **„Gender Shades"** von Joy Buolamwini und Timnit Gebru (2018): Kommerzielle Systeme zur Geschlechtsklassifikation in Gesichtsbildern machten bei Frauen mit dunkler Hautfarbe deutlich mehr Fehler als bei Männern mit heller Hautfarbe. Die Ursache: wenig repräsentative Trainings- und Testdaten. ([PMLR, 2018](https://proceedings.mlr.press/v81/buolamwini18a.html))'
        },
        {
          type: 'table',
          caption: 'Sechs Quellen von Verzerrung über den KI-Lebenszyklus (nach Skript S. 126–127; vgl. Suresh & Guttag 2021)',
          head: ['Quelle', 'Phase', 'Beispiel', 'Erste Gegenmaßnahme'],
          rows: [
            ['**Historische Verzerrung**', 'Daten (Welt)', 'Training auf früheren, voreingenommenen Einstellungsentscheidungen', 'Zielgröße hinterfragen; Daten nachgewichten; Menschen entscheiden'],
            ['**Repräsentationsverzerrung**', 'Datenerhebung', 'Gesichtsdaten überwiegend von weißen Personen', 'Repräsentative Stichproben, Datenlücken schließen'],
            ['**Messverzerrung**', 'Merkmale/Labels', 'Postleitzahl als Ersatzmerkmal bildet Segregation ab', 'Proxy-Merkmale identifizieren und prüfen'],
            ['**Aggregationsverzerrung**', 'Modellierung', 'Diabetesmodell für die Mehrheit passt nicht zu Gruppen mit anderen Risikofaktoren', 'Gruppenspezifische Analyse oder Modelle'],
            ['**Evaluierungsverzerrung**', 'Test', 'Nur an jungen Nutzern getestet, versagt bei Älteren', 'Testdaten = reale Einsatzpopulation; Kennzahlen je Gruppe'],
            ['**Einsatzverzerrung**', 'Betrieb', 'Rückfallprognose für Kautionsentscheidungen wird für Strafzumessung genutzt', 'Zweckbindung, Nutzungsgrenzen in der Betriebsanleitung']
          ]
        },
        {
          type: 'callout',
          variant: 'tipp',
          title: 'Kennzahlen getrennt nach Gruppen messen',
          md: 'Teste vor dem Einsatz – nicht erst, wenn Probleme auftreten. Miss **Genauigkeit, Falsch-Positiv-Rate und Falsch-Negativ-Rate getrennt für verschiedene Gruppen**. Ein gutes Gesamtergebnis kann große Unterschiede zwischen Gruppen verdecken (Skript S. 127).'
        },
        {
          type: 'text',
          md: `### Fairness messbar machen

Das Skript stellt drei verbreitete Fairness-Definitionen vor. Mit der Confusion Matrix je Gruppe (TP, FP, FN, TN – siehe Kapitel 6.2) lassen sie sich direkt berechnen:

| Definition | Forderung | Formel je Gruppe | Beispiel |
|---|---|---|---|
| **Demografische Parität** | gleiche Quote positiver Vorhersagen | (TP + FP) / alle | Einstellungstool lädt Männer und Frauen zu gleichen Anteilen ein |
| **Equalized Odds** (Chancengleichheit) | gleiche Richtig-Positiv- **und** Falsch-Positiv-Raten | TP / (TP + FN) und FP / (FP + TN) | Betrugsdetektor ist für alle Gruppen gleich genau |
| **Vorhersageparität** | gleiche Präzision | TP / (TP + FP) | Unter den genehmigten Krediten fallen in allen Gruppen gleich viele aus |

Welche Definition passt, ist **keine technische, sondern eine Wertentscheidung**: In der Strafjustiz kann Equalized Odds wichtiger sein (gleiche Fehlerraten), in der medizinischen Diagnostik Vorhersageparität (gleich verlässliche positive Befunde).`
        },
        {
          type: 'callout',
          variant: 'warn',
          title: 'Nicht alles gleichzeitig möglich',
          md: 'Unterscheiden sich die Basisraten zwischen Gruppen, lassen sich Vorhersageparität und gleiche Fehlerraten **mathematisch nicht gleichzeitig** erfüllen (außer bei einem perfekten Modell). Das zeigten unabhängig voneinander Kleinberg, Mullainathan & Raghavan (2016) und Chouldechova (2017) – Ausgangspunkt war die Debatte um das Rückfallprognose-Tool COMPAS. Deshalb: Fairness-Definition bewusst wählen, begründen und dokumentieren.'
        },
        {
          type: 'praxis',
          title: 'Fairness-Test einer Kreditvorprüfung',
          company: 'Regionalbank Mittelweser eG (fiktiv), alle Zahlen fiktiv',
          scenario: `Ein Modell schlägt vor, welche Kleinkreditanträge ohne zusätzliche Unterlagen genehmigt werden können. Im Test mit historischen Fällen (Ausgang bekannt) betrachtest du zwei Altersgruppen: **unter 30** (800 Anträge, davon 400 tatsächlich kreditwürdig) und **ab 30** (1.200 Anträge, davon 800 kreditwürdig). Das Modell empfiehlt bei unter 30 **240** Genehmigungen (davon 220 kreditwürdig), bei ab 30 **660** Genehmigungen (davon 600 kreditwürdig).`,
          steps: [
            'Demografische Parität: unter 30 → 240 / 800 = 30 %; ab 30 → 660 / 1.200 = 55 %. Großer Unterschied.',
            'Richtig-Positiv-Rate (Teil von Equalized Odds): unter 30 → 220 / 400 = 55 %; ab 30 → 600 / 800 = 75 %. Kreditwürdige Jüngere werden deutlich seltener erkannt.',
            'Falsch-Positiv-Rate: unter 30 → 20 / 400 = 5 %; ab 30 → 60 / 400 = 15 %.',
            'Vorhersageparität (Präzision): unter 30 → 220 / 240 ≈ 92 %; ab 30 → 600 / 660 ≈ 91 % – fast gleich.',
            'Deutung: Gemessen an der Präzision wirkt das Modell fair, gemessen an der Richtig-Positiv-Rate benachteiligt es Jüngere. Ursache prüfen: Das Merkmal „Dauer der Kundenbeziehung" wirkt als Proxy für das Alter (Messverzerrung).',
            'Entscheidung im Governance-Gremium: Ziel „gleiche Chance für Kreditwürdige" (Richtig-Positiv-Rate), Proxy-Merkmal ersetzen, neu testen, Ergebnis dokumentieren. Abgelehnte Fälle gehen ohnehin an Menschen.'
          ],
          takeaway: 'Dieselben Daten können je nach Definition „fair" oder „unfair" aussehen. **Erst die bewusste Wahl der Fairness-Definition macht Fairness steuerbar.**'
        },
        {
          type: 'table',
          caption: 'Strategien zur Verringerung von Verzerrungen (nach Skript S. 128–129)',
          head: ['Ansatzpunkt', 'Techniken', 'Kompromiss'],
          rows: [
            ['**Vorverarbeitung** (Daten)', 'Resampling zum Ausgleich von Gruppen, Umgewichtung von Beispielen, Ergänzung unterrepräsentierter Gruppen', 'Mehr Datenaufwand, synthetische Ergänzungen können neue Fehler bringen'],
            ['**Verarbeitung** (Training)', 'Fairness-Bedingungen im Lernalgorithmus, Strafterme für Unfairness, adversariales Debiasing', 'Komplexere Modelle, oft etwas geringere Gesamtgenauigkeit'],
            ['**Nachverarbeitung** (Ergebnisse)', 'Unterschiedliche Entscheidungsschwellen je Gruppe, Anpassung der Score-Verteilungen', 'Rechtlich heikel (Ungleichbehandlung), Gruppenmerkmal muss bekannt sein']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Fallbeispiel aus dem Skript: Amazon',
          md: 'Amazon entwickelte ein Recruiting-Tool, das aus historischen, überwiegend männlichen Bewerbungsdaten lernte und Lebensläufe mit dem Wort „women\'s" abwertete. Amazon stellte das Tool ein (Skript S. 128; ausführlich mit Reuters-Quelle im Plus-Modul „Fallstudien & Best Practices"). Ein Paradebeispiel für **historische Verzerrung** – und dafür, dass das Entfernen des Geschlechts aus den Daten nicht reicht, wenn Wörter, Vereine oder Hochschulen als Proxy wirken.'
        },
        {
          type: 'text',
          md: `### Erklärbarkeit: Warum hat die KI so entschieden?

Erklärbarkeit ist laut Skript aus fünf Gründen wichtig: **Vertrauen** der Nutzenden, **menschliche Aufsicht**, **Fehlersuche** bei Versagen und Verzerrungen, **regulatorische Anforderungen** (AI Act, DSGVO) und **Rechtsmittel** für Betroffene. Ohne Erklärbarkeit wird KI zur Black Box ohne Rechenschaftspflicht.

Es gibt zwei Wege: **von Natur aus interpretierbare Modelle** (z. B. Entscheidungsbäume, lineare Modelle, Scorekarten) und **nachträgliche Erklärungstechniken** für komplexe Modelle. Außerdem unterscheidet man:
- **Globale Erklärungen:** Wie verhält sich das Modell insgesamt? Welche Merkmale sind generell am wichtigsten?
- **Lokale Erklärungen:** Warum wurde *dieser* Antrag abgelehnt, warum *diese* Transaktion als Betrug markiert?`
        },
        {
          type: 'table',
          caption: 'Gängige Erklärungstechniken (nach Skript S. 130)',
          head: ['Technik', 'Idee', 'Gut für', 'Grenze'],
          rows: [
            ['**LIME** (Local Interpretable Model-agnostic Explanations)', 'Baut um eine einzelne Vorhersage herum ein einfaches Ersatzmodell', 'Lokale Erklärung beliebiger Modelle', 'Ergebnisse können je nach Stichprobe schwanken'],
            ['**SHAP** (SHapley Additive exPlanations)', 'Verteilt den Beitrag jedes Merkmals nach der Shapley-Logik der Spieltheorie', 'Lokal und – aggregiert – global; verbreitet in Kredit und Versicherung', 'Rechenaufwendig; zeigt Korrelation, nicht Kausalität'],
            ['**Kontrafaktische Erklärung**', 'Nennt die kleinste Änderung, die die Entscheidung umkehren würde: „abgelehnt, weil das Einkommen 2.000 € zu niedrig war"', 'Betroffene, Anfechtung, DSGVO-Auskunft', 'Muss realistische, veränderbare Merkmale nennen'],
            ['**Aufmerksamkeitsmechanismen**', 'Zeigen, auf welche Teile der Eingabe ein Modell „geschaut" hat', 'Text- und Bildmodelle, Fehlersuche', 'Aufmerksamkeit ist nicht automatisch eine Begründung (Jain & Wallace 2019)']
          ]
        },
        {
          type: 'callout',
          variant: 'merksatz',
          title: 'Genauigkeit vs. Erklärbarkeit',
          md: 'Komplexe Modelle übertreffen einfache oft an Genauigkeit, sind aber schwerer zu erklären. Wer Hochrisiko-KI einsetzt, muss **bewusst entscheiden**: Genauigkeit, Erklärbarkeit – oder Investition in aufwendige Erklärungstechniken. Und: **Technische Nutzer brauchen andere Erklärungen als betroffene Endnutzer.**'
        },
        {
          type: 'text',
          md: `### Über das Skript hinaus: rechtliche Anker in Deutschland und der EU

- **AI Act Art. 10:** Hochrisiko-Anbieter müssen Daten auf mögliche Verzerrungen untersuchen und Gegenmaßnahmen treffen; **Art. 10 Abs. 5** erlaubt dafür unter strengen Schutzvorkehrungen ausnahmsweise die Verarbeitung besonderer Kategorien personenbezogener Daten (z. B. ethnische Herkunft).
- **AI Act Art. 86:** Betroffene einer Entscheidung, die auf einem Hochrisiko-System nach Anhang III beruht, haben ein Recht auf eine **klare und aussagekräftige Erläuterung** der Rolle des KI-Systems.
- **AGG:** Das Allgemeine Gleichbehandlungsgesetz verbietet u. a. im Arbeitsleben unmittelbare und **mittelbare** Benachteiligung wegen Geschlecht, Alter, ethnischer Herkunft, Religion, Behinderung oder sexueller Identität – auch wenn eine KI die Ungleichbehandlung erzeugt.
- **Werkzeuge:** [Fairlearn](https://fairlearn.org/) (Open Source) misst Fairness-Kennzahlen je Gruppe und bietet Gegenmaßnahmen; [SHAP](https://shap.readthedocs.io/en/latest/) ist die Referenzbibliothek für Shapley-Erklärungen.`
        },
        {
          type: 'table',
          caption: 'Häufige Fehler und bewährte Verfahren (nach Skript S. 130–131)',
          head: ['Häufiger Fehler', 'Bewährtes Verfahren'],
          rows: [
            ['Geschützte Merkmale (Herkunft, Geschlecht) entfernen und glauben, damit sei Bias beseitigt', 'Proxy-Merkmale (z. B. Postleitzahl) suchen; auf Verzerrungen mit mehreren Fairness-Metriken testen'],
            ['Fairness als rein technisches Problem', 'Betroffene Gruppen in die Festlegung der Fairness-Prioritäten einbeziehen; vielfältige Teams'],
            ['Einmaliger Bias-Test', 'Kontinuierliches Monitoring auf Verzerrungen im Produktivbetrieb (Daten und Bevölkerung ändern sich)'],
            ['Herstellerangaben zu „unverzerrter KI" ungeprüft übernehmen', 'Unabhängige Prüfung, eigene Tests mit eigenen Daten; repräsentative Trainingsdaten'],
            ['Eine Erklärung für alle', 'Zielgruppengerechte Erklärungen; klare Prozesse für den Umgang mit erkannten Verzerrungen']
          ]
        },
        {
          type: 'quickcheck',
          qtype: 'single',
          q: 'Ein Kredit-Modell genehmigt in Gruppe A 50 % und in Gruppe B 50 % der Anträge, erkennt aber kreditwürdige Personen in Gruppe B deutlich seltener. Welche Fairness-Definition ist erfüllt, welche verletzt?',
          options: ['Demografische Parität erfüllt, Equalized Odds verletzt', 'Equalized Odds erfüllt, demografische Parität verletzt', 'Beide erfüllt', 'Vorhersageparität ist automatisch verletzt'],
          answer: 0,
          explain: 'Gleiche Genehmigungsquoten = demografische Parität. Unterschiedliche Richtig-Positiv-Raten verletzen Equalized Odds. Genau deshalb fordert das Skript, mehrere Fairness-Metriken zu betrachten.'
        },
        {
          type: 'quickcheck',
          qtype: 'cloze',
          q: 'Ergänze die Begriffe.',
          text: '„Ihr Antrag wurde abgelehnt, weil Ihr Einkommen 2.000 € zu niedrig war" ist eine {{kontrafaktische}} Erklärung. Merkmale wie die Postleitzahl, die geschützte Merkmale indirekt abbilden, heißen {{Ersatzmerkmale|Proxy-Merkmale|Proxies|Proxy}}.',
          explain: 'Kontrafaktische Erklärungen nennen die minimale Änderung, die die Entscheidung umkehrt (Skript S. 130). Ersatz- bzw. Proxy-Merkmale sind der Grund, warum das Entfernen geschützter Merkmale nicht reicht.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'multi',
      q: 'Welche Werkzeuge pflegt ein KI-Kompetenzzentrum laut Skript typischerweise für die Governance? (Mehrfachauswahl)',
      options: ['KI-Inventar', 'KI-Risikoregister', 'Richtlinienarchiv', 'Compliance-Nachverfolgung', 'Gehaltsdatenbank der Data Scientists'],
      answer: [0, 1, 2, 3],
      explain: 'Inventar, Risikoregister, Richtlinienarchiv und Compliance-Nachverfolgung verhindern, dass jeder Bereich eigene, inkompatible Governance-Ansätze entwickelt (Skript S. 111).'
    },
    {
      type: 'tf',
      q: 'Laut Skript sollte eine Organisation in der Anfangsphase sofort ein umfassendes Governance-Rahmenwerk mit kontinuierlicher Überwachung aller Systeme aufbauen.',
      answer: false,
      explain: 'Das Skript rät, schlank zu starten (Grundrichtlinien, vierteljährliche Reviews) und das Rahmenwerk mit dem Reifegrad weiterzuentwickeln. Umfassende Rahmenwerke braucht, wer risikoreiche KI produktiv betreibt.'
    },
    {
      type: 'match',
      q: 'Ordne die Governance-Werkzeuge ihrem Charakter zu.',
      pairs: [
        ['ISO/IEC 42001', 'Zertifizierbare Norm für KI-Managementsysteme'],
        ['NIST AI RMF', 'Freiwilliges Framework mit Govern, Map, Measure, Manage'],
        ['DSK-Orientierungshilfe', 'Datenschutzhinweise der deutschen Aufsichtsbehörden'],
        ['UNESCO-Empfehlung', 'Globaler Ethikrahmen, von 193 Staaten angenommen']
      ],
      explain: 'Die Werkzeuge ergänzen sich: ISO 42001 als Managementrahmen, NIST für die Risikosteuerung, DSK für den Datenschutz, UNESCO als ethische Orientierung.'
    },
    {
      type: 'order',
      q: 'Bringe die Schritte zur Umsetzung der EU-KI-Verordnung (nach Skript) in eine sinnvolle Reihenfolge.',
      items: ['KI-Inventar aller Systeme erstellen', 'Jedes System mit juristischer Unterstützung einer Risikokategorie zuordnen', 'Compliance-Arbeit auf Hochrisiko-Systeme konzentrieren', 'Standardisierte Dokumentationsvorlagen anlegen', 'Regulatorische Leitlinien laufend verfolgen'],
      explain: 'Ohne Inventar keine Einstufung, ohne Einstufung kein Fokus. Vorlagen machen die Dokumentation effizient, und weil Behörden laufend Leitlinien veröffentlichen, endet die Arbeit nie ganz (Skript S. 121).'
    },
    {
      type: 'single',
      q: 'Ab wann gelten die Hochrisiko-Pflichten für eigenständige Systeme nach Anhang III (z. B. Bewerberauswahl) nach dem Digital Omnibus?',
      options: ['Seit dem 02.08.2026', 'Ab dem 02.12.2027', 'Ab dem 02.08.2028', 'Erst ab dem 02.08.2030'],
      answer: 1,
      explain: 'Das Skript nennt noch den 02.08.2026. Die VO (EU) 2026/1744 hat Anhang III auf den 02.12.2027 und Anhang I auf den 02.08.2028 verschoben. 2030 betrifft Hochrisiko-Systeme von Behörden.'
    },
    {
      type: 'single',
      q: 'Welcher Bußgeldrahmen gilt nach Art. 99 AI Act für Verstöße gegen die Transparenzpflichten nach Art. 50 (z. B. fehlender Chatbot-Hinweis)?',
      options: ['bis 7,5 Mio. € oder 1,5 %', 'bis 15 Mio. € oder 3 % des weltweiten Jahresumsatzes', 'bis 35 Mio. € oder 7 %', 'Keine Bußgelder, nur Verwarnungen'],
      answer: 1,
      explain: 'Art. 99 Abs. 4 erfasst u. a. Art. 50 mit bis zu 15 Mio. € bzw. 3 %. Die 7,5 Mio. € bzw. 1 % gelten für falsche Angaben gegenüber Behörden – die Skript-Tabelle ist hier ungenau.'
    },
    {
      type: 'multi',
      q: 'Welche Einsatzbereiche nennt Anhang III des AI Act als potenziell hochriskant? (Mehrfachauswahl)',
      options: ['Bewerberauswahl und Personalentscheidungen', 'Kreditwürdigkeitsprüfung natürlicher Personen', 'Spamfilter', 'Bewertung von Lernergebnissen in der Bildung'],
      answer: [0, 1, 3],
      explain: 'Beschäftigung (Nr. 4), wesentliche Dienste wie Kredit (Nr. 5) und Bildung (Nr. 3) sind in Anhang III gelistet. Spamfilter gelten als minimales Risiko.'
    },
    {
      type: 'tf',
      q: 'Ein Unternehmen, das ein eingekauftes Hochrisiko-KI-System unter eigenem Namen an Kunden weitervertreibt, kann dadurch selbst zum Anbieter werden.',
      answer: true,
      explain: 'Art. 25 AI Act: Wer ein Hochrisiko-System unter eigenem Namen oder eigener Marke anbietet, es wesentlich verändert oder den Zweck ändert, übernimmt Anbieterpflichten.'
    },
    {
      type: 'match',
      q: 'Ordne den DSGVO-Grundsatz dem passenden Compliance-Ansatz für KI zu.',
      pairs: [
        ['Zweckbindung', 'Zwecke dokumentieren, für neue Verwendungen neue Rechtsgrundlage prüfen'],
        ['Datenminimierung', 'Merkmalsauswahl und Datenreduktion'],
        ['Speicherbegrenzung', 'Aufbewahrungsrichtlinien und automatisierte Löschung'],
        ['Integrität und Vertraulichkeit', 'Verschlüsselung, Zugriffskontrollen, Sicherheitstests']
      ],
      explain: 'So übersetzt das Skript (S. 123) die DSGVO-Grundsätze in KI-Praxis. Jeder Grundsatz gilt über den gesamten Lebenszyklus.'
    },
    {
      type: 'single',
      q: 'Wann greift Art. 22 DSGVO?',
      options: [
        'Bei jeder Nutzung von KI im Unternehmen',
        'Wenn eine ausschließlich automatisierte Entscheidung rechtliche Wirkung entfaltet oder die Person ähnlich erheblich beeinträchtigt',
        'Nur bei Gesundheitsdaten',
        'Nur, wenn die KI außerhalb der EU betrieben wird'
      ],
      answer: 1,
      explain: 'Beispiele sind automatische Kreditablehnungen oder Bewerbungssichtungen. Laut EuGH (SCHUFA, C-634/21) kann schon ein Score darunterfallen, wenn ein Dritter seine Entscheidung maßgeblich darauf stützt.'
    },
    {
      type: 'match',
      q: 'Ordne die Verzerrungsquelle dem Beispiel zu.',
      pairs: [
        ['Historische Verzerrung', 'Training auf früheren voreingenommenen Einstellungsentscheidungen'],
        ['Repräsentationsverzerrung', 'Gesichtsdaten überwiegend von hellhäutigen Personen'],
        ['Messverzerrung', 'Postleitzahl als Ersatzmerkmal in der Kreditbewertung'],
        ['Einsatzverzerrung', 'Tool für Kautionsentscheidungen wird für Strafzumessung genutzt']
      ],
      explain: 'Verzerrung entsteht in jeder Phase des Lebenszyklus – deshalb muss die gesamte Pipeline untersucht werden (Skript S. 126–127).'
    },
    {
      type: 'cloze',
      q: 'Ergänze die Fairness-Definition.',
      text: 'Die {{demografische Parität|Demografische Parität}} verlangt gleiche Quoten positiver Vorhersagen über alle Gruppen; die {{Vorhersageparität|Vorhersage-Parität}} verlangt gleiche Präzision.',
      explain: 'Dazu kommt Equalized Odds (gleiche Richtig-Positiv- und Falsch-Positiv-Raten). Die Definitionen können sich widersprechen (Skript S. 128).'
    },
    {
      type: 'multi',
      q: 'Welche Aussagen zur Erklärbarkeit stimmen? (Mehrfachauswahl)',
      options: [
        'SHAP weist Merkmalen Wichtigkeitswerte auf Basis der Spieltheorie zu',
        'Lokale Erklärungen beschreiben einzelne Vorhersagen',
        'Endnutzer und Data Scientists brauchen dieselbe Art von Erklärung',
        'Kontrafaktische Erklärungen nennen die minimale Änderung, die eine Entscheidung umkehren würde'
      ],
      answer: [0, 1, 3],
      explain: 'Das Skript betont, dass Erklärungen zielgruppengerecht sein müssen: Technische Nutzer brauchen andere Erklärungen als betroffene Endnutzer.'
    },
    {
      type: 'tf',
      q: 'Das Bußgeld von 1,2 Mrd. € der irischen Datenschutzbehörde gegen Meta (2023) betraf Datenübermittlungen in die USA, nicht KI-Training.',
      answer: true,
      explain: 'Das Skript ordnet den Fall dem KI-Training zu – tatsächlich ging es um Übermittlungen nach Schrems II. Ein KI-Trainingsfall ist das Garante-Bußgeld gegen OpenAI (Dez. 2024), gegen das OpenAI 2026 vor dem Landgericht Rom erfolgreich war.'
    }
  ],
  exercises: [
    {
      id: 'k5-e1',
      title: 'KI-Inventar, AI-Act-Einstufung und Genehmigungsweg',
      scenario: `Die **Autohaus Kessler GmbH (fiktiv)**, 140 Mitarbeitende, drei Standorte in Niedersachsen, nutzt bzw. plant folgende KI-Anwendungen:

1. Einen Chatbot auf der Website, der Fragen zu Werkstattterminen beantwortet.
2. Ein zugekauftes Tool, das Bewerbungen für Ausbildungsplätze vorsortiert.
3. Einen Bildgenerator für Social-Media-Posts.
4. Ein KI-Modul im Finanzierungsportal einer Partnerbank, das die Kreditwürdigkeit von Privatkunden bewertet; das Autohaus nutzt die Ergebnisse im Verkaufsgespräch.
5. Eine Rechtschreib- und Stilprüfung im Office-Paket.

Ein Governance-Rahmen existiert noch nicht.`,
      task: `Erstelle für jede Anwendung einen Eintrag fürs **KI-Inventar**: Risikoklasse nach AI Act, Rolle des Autohauses (Anbieter/Betreiber), wichtigste Pflichten und ab wann sie gelten (Stand nach Digital Omnibus), einen DSGVO-Aspekt und den **Genehmigungsweg** (Risikostufe gering/mittel/hoch nach Kapitel 5.1). Schlage abschließend vor, wer im KI-Governance-Gremium des Autohauses sitzen sollte.`,
      deliverable: 'Tabelle mit 5 Zeilen plus 3–5 Sätze zu Prioritäten und Gremium',
      template: `| Anwendung | Risikoklasse | Rolle | Pflichten | Gilt ab | DSGVO-Aspekt | Genehmigung |
|---|---|---|---|---|---|---|
| 1. Website-Chatbot | | | | | | |
| 2. Bewerber-Tool | | | | | | |
| 3. Bildgenerator | | | | | | |
| 4. Kreditprüfung | | | | | | |
| 5. Rechtschreibprüfung | | | | | | |

Prioritäten:
Gremium:`,
      rubric: [
        { criterion: 'Ordnet das Bewerber-Tool und die Kreditprüfung korrekt als Hochrisiko (Anhang III) ein', keywords: ['hochrisiko', 'anhang iii', 'hohes risiko'], min: 1, hint: 'Schau dir Anhang III Nr. 4 (Beschäftigung) und Nr. 5 (wesentliche Dienste) an.' },
        { criterion: 'Erkennt die Transparenzpflichten nach Art. 50 für Chatbot und Bildgenerator', keywords: ['art. 50', 'transparenz', 'kennzeichn', 'hinweis'], min: 2, hint: 'Was müssen Nutzer wissen, wenn sie mit einer KI chatten oder ein KI-Bild sehen?' },
        { criterion: 'Bestimmt die Rolle (Betreiber) und nennt passende Betreiberpflichten', keywords: ['betreiber', 'menschliche aufsicht', 'betriebsanleitung', 'protokoll', 'betriebsrat'], min: 2, hint: 'Entwickelt das Autohaus die Systeme selbst oder setzt es sie ein?' },
        { criterion: 'Nennt korrekte Geltungsdaten nach dem Digital Omnibus', keywords: ['2027', '2026', '02.12', '02.08', 'omnibus'], min: 2, hint: 'Wann gelten Art. 50 und wann die Hochrisiko-Pflichten nach Anhang III?' },
        { criterion: 'Benennt DSGVO-Aspekte', keywords: ['dsgvo', 'art. 22', 'folgenabschätzung', 'dsfa', 'rechtsgrundlage', 'avv'], min: 2, hint: 'Denke an automatisierte Entscheidungen, Rechtsgrundlage und Auftragsverarbeitung.' },
        { criterion: 'Ordnet risikoabhängige Genehmigungswege zu und skizziert ein Gremium', keywords: ['gremium', 'board', 'geschäftsführ', 'datenschutzbeauftrag', 'gering', 'mittel', 'hoch'], min: 3, hint: 'Wer darf ein Rechtschreibtool freigeben – und wer das Bewerber-Tool?' }
      ],
      hints: [
        'Frage dich bei jeder Anwendung zuerst: Wofür genau wird sie eingesetzt – und wen betrifft das Ergebnis?',
        'Zwei der fünf Anwendungen fallen in Bereiche, die in Anhang III ausdrücklich genannt sind. Zwei weitere haben vor allem Transparenzpflichten. Daraus ergeben sich auch die Genehmigungsstufen.',
        'Bei der Kreditprüfung ist die Bank Anbieterin bzw. Betreiberin des Scorings; prüfe, welche Rolle das Autohaus tatsächlich hat und was es trotzdem beachten muss (z. B. Art. 22 DSGVO, Schulung, keine Entscheidung allein auf Basis des Scores). Fürs Gremium: Geschäftsführung, DSB, IT, Personal, Vertrieb, Betriebsrat.'
      ],
      sample: `| Anwendung | Risikoklasse | Rolle | Pflichten | Gilt ab | DSGVO-Aspekt | Genehmigung |
|---|---|---|---|---|---|---|
| 1. Website-Chatbot | Transparenzrisiko (Art. 50 Abs. 1) | Betreiber | Hinweis „Sie chatten mit einer KI" (vom Anbieter umzusetzen, einzufordern); Art. 4 Schulung | 02.08.2026 | Datenschutzhinweis, AVV, keine sensiblen Daten abfragen | mittel: Vertriebsleitung + DSB |
| 2. Bewerber-Tool | Hochrisiko (Anhang III Nr. 4) | Betreiber | Nutzung nach Betriebsanleitung, menschliche Aufsicht durch geschulte Personen, Monitoring, Protokolle ≥ 6 Monate, Info an Betriebsrat und Beschäftigte | 02.12.2027 (DSGVO/BetrVG sofort) | Art. 22 – keine automatische Absage; DSFA | hoch: KI-Gremium, inkl. Fairness-Test |
| 3. Bildgenerator | Transparenzrisiko (Art. 50 Abs. 2/4) | Betreiber | Anbieter kennzeichnet maschinenlesbar; Autohaus legt Deepfakes offen | 02.08.2026 | Keine realen Personen ohne Einwilligung | mittel: Marketingleitung + DSB |
| 4. Kreditprüfung | Hochrisiko (Anhang III Nr. 5 b) | Primär die Bank; Autohaus nutzt Ergebnis | Bank: volle Pflichten inkl. Grundrechte-Folgenabschätzung; Autohaus: Schulung, keine eigenständige Veränderung | 02.12.2027 | Art. 22, Transparenz gegenüber Kunden | hoch: Gremium prüft Vertrag mit Bank |
| 5. Rechtschreibprüfung | Minimales Risiko | Betreiber | Keine besonderen, aber Art. 4 KI-Kompetenz | – (Art. 4 seit 02.02.2025) | Werden Texte in die Cloud übertragen? | gering: IT-Leitung, Inventareintrag |

**Prioritäten:** Sofort Schulung nach Art. 4, Chatbot-Hinweis und Kennzeichnungsregeln (seit 02.08.2026 Pflicht). Für das Bewerber-Tool jetzt DSFA, Betriebsrat und Konformitätsnachweise des Herstellers – die AI-Act-Pflichten gelten zwar erst ab 02.12.2027, Datenschutz und Mitbestimmung aber schon heute.

**Gremium:** Geschäftsführer als Sponsor, KI-Verantwortliche (Vorsitz), externer DSB, IT-Leitung, Personalleitung, Vertriebsleitung, ein Betriebsratsmitglied; vierteljährlich, bei Hochrisiko-Fällen ad hoc.`
    },
    {
      id: 'k5-e2',
      title: 'Fairness- und Ethikprüfung eines Bewerber-Tools',
      scenario: `Die **Stadtwerke Oberhafen GmbH (fiktiv)**, 380 Mitarbeitende, testen ein KI-Tool, das Bewerbungen für technische Ausbildungsberufe vorsortiert („einladen" / „nicht einladen"). Im Testlauf mit 600 bereits abgeschlossenen Bewerbungen (Ergebnis der menschlichen Auswahl bekannt) zeigt sich (alle Zahlen fiktiv):

| Gruppe | Bewerbungen | davon geeignet | vom Tool zur Einladung empfohlen | davon geeignet |
|---|---|---|---|---|
| Frauen | 250 | 100 | 60 | 50 |
| Männer | 350 | 140 | 120 | 105 |

Der Anbieter wirbt mit „biasfreier KI, weil das Geschlecht nicht verarbeitet wird".`,
      task: `1. Berechne für beide Gruppen **Einladungsquote** (demografische Parität), **Richtig-Positiv-Rate**, **Falsch-Positiv-Rate** und **Präzision** und interpretiere die Unterschiede.
2. Entscheide begründet, welche **Fairness-Definition** für diesen Use Case maßgeblich sein sollte.
3. Nenne mögliche **Ursachen** (Verzerrungsquellen) und bewerte das Anbieterversprechen.
4. Beschreibe, wie du **Erklärbarkeit** für Recruiterinnen und für Bewerbende sicherstellst.
5. Fasse die Empfehlung für das **Governance-Gremium** zusammen (inkl. AI-Act-Einstufung und Art. 22 DSGVO).`,
      deliverable: 'Rechenweg + Bewertung, ca. 300–450 Wörter',
      template: `1. Kennzahlen:
   Frauen: Quote … / TPR … / FPR … / Präzision …
   Männer: Quote … / TPR … / FPR … / Präzision …
   Interpretation:
2. Fairness-Definition:
3. Ursachen & Anbieterversprechen:
4. Erklärbarkeit:
5. Empfehlung ans Gremium:`,
      rubric: [
        { criterion: 'Berechnet die Kennzahlen korrekt', keywords: ['24', '34', '50 %', '75 %', '83', '87'], min: 4, hint: 'Quote = Empfohlene / Bewerbungen; TPR = geeignete Empfohlene / alle Geeigneten; Präzision = geeignete Empfohlene / Empfohlene.' },
        { criterion: 'Wählt und begründet eine Fairness-Definition', keywords: ['equalized odds', 'richtig-positiv', 'chancengleich', 'demografische parität', 'vorhersageparität', 'begründ'], min: 2, hint: 'Was wäre hier die eigentliche Ungerechtigkeit – unterschiedliche Quoten oder dass geeignete Frauen übersehen werden?' },
        { criterion: 'Benennt Verzerrungsquellen und Proxy-Problem', keywords: ['historisch', 'proxy', 'ersatzmerkmal', 'repräsentation', 'messverzerr', 'trainingsdaten'], min: 2, hint: 'Warum kann ein Tool diskriminieren, obwohl es das Geschlecht nicht kennt?' },
        { criterion: 'Plant zielgruppengerechte Erklärbarkeit', keywords: ['shap', 'lime', 'kontrafakt', 'lokal', 'global', 'zielgruppe', 'erklär'], min: 2, hint: 'Was braucht die Recruiterin, was die Bewerberin?' },
        { criterion: 'Bezieht AI Act, DSGVO und Governance ein', keywords: ['hochrisiko', 'anhang iii', 'art. 22', 'gremium', 'menschliche aufsicht', 'agg'], min: 3, hint: 'Welche Risikoklasse, welche Rechte der Bewerbenden, wer entscheidet?' }
      ],
      hints: [
        'Rechne zuerst die vier Kennzahlen pro Gruppe aus. Für die Falsch-Positiv-Rate brauchst du die ungeeigneten Bewerbungen: 250 − 100 bzw. 350 − 140.',
        'Ergebnis-Größenordnung: Die Präzision ist in beiden Gruppen ähnlich hoch, die Richtig-Positiv-Rate unterscheidet sich stark. Welche Definition ist also verletzt?',
        'Ursachen: historische Auswahlentscheidungen als Trainingsziel, Proxies wie Vereine, Praktika oder Formulierungen im Lebenslauf. Erklärbarkeit: SHAP-Werte im Recruiter-Interface, kontrafaktische Hinweise für Bewerbende; keine automatische Absage (Art. 22).'
      ],
      sample: `**1. Kennzahlen**
- Frauen: Einladungsquote 60/250 = **24 %**; TPR 50/100 = **50 %**; FPR 10/150 ≈ **6,7 %**; Präzision 50/60 ≈ **83 %**.
- Männer: Einladungsquote 120/350 ≈ **34 %**; TPR 105/140 = **75 %**; FPR 15/210 ≈ **7,1 %**; Präzision 105/120 = **87,5 %**.
- Interpretation: Präzision und Falsch-Positiv-Rate sind ähnlich – *wenn* das Tool einlädt, liegt es bei beiden Gruppen meist richtig. Aber es **übersieht jede zweite geeignete Frau**, bei Männern nur jeden vierten geeigneten Bewerber.

**2. Fairness-Definition:** Maßgeblich ist hier die **Richtig-Positiv-Rate (Equal Opportunity, Teil von Equalized Odds)**: Geeignete Personen sollen unabhängig vom Geschlecht die gleiche Chance auf eine Einladung haben. Unterschiedliche Einladungsquoten allein wären bei unterschiedlichen Bewerberprofilen noch kein Beweis – die TPR-Lücke ist es.

**3. Ursachen & Anbieterversprechen:** Wahrscheinlich **historische Verzerrung** (Training auf früheren Auswahlentscheidungen) und **Messverzerrung** durch Proxies (z. B. Hobbys, Vereine, technische Praktika, Formulierungen). Das Versprechen „biasfrei, weil das Geschlecht nicht verarbeitet wird" ist laut Skript ein typischer Irrtum – Ersatzmerkmale transportieren das Merkmal. Herstellerangaben müssen unabhängig geprüft werden.

**4. Erklärbarkeit:** Für Recruiterinnen lokale **SHAP**-Erklärungen je Bewerbung („wichtigste Faktoren") und ein globaler Bericht über Merkmalswichtigkeit, um Proxies zu entdecken. Für Bewerbende verständliche Informationen über Logik und Kriterien sowie auf Nachfrage eine **kontrafaktische** Erklärung (welche Qualifikation fehlte); Anfechtungsweg.

**5. Empfehlung ans Gremium:** Das Tool ist **Hochrisiko (Anhang III Nr. 4)**; Stadtwerke wären Betreiber. Kein Einsatz in der jetzigen Form. Forderungen an den Anbieter: Proxy-Analyse, Nachtraining mit Fairness-Bedingung, erneuter Test mit Ziel TPR-Differenz < 5 Prozentpunkte. Ausschließlich als Vorschlag mit menschlicher Prüfung aller Bewerbungen, **keine automatische Absage (Art. 22 DSGVO)**, Fairness-Monitoring pro Bewerbungsrunde, Betriebsrat einbinden, AGG-Risiko dokumentieren.`
    }
  ],
  glossary: [
    { term: 'KI-Governance', def: 'System aus Richtlinien, Prozessen, Rollen und Aufsichtsmechanismen, das regelt, wie eine Organisation KI entwickelt, einsetzt und betreibt.' },
    { term: 'KI-Governance-Gremium', def: 'Bereichsübergreifendes Gremium (Geschäftsführung, Ethik, Datenschutz, Recht, Data Science, Fachbereiche), das risikoreiche KI genehmigt, Richtlinien festlegt und Compliance überwacht.' },
    { term: 'KI-Inventar', def: 'Katalog aller KI-Systeme einer Organisation mit Zweck, Anbieter, Daten, Rolle, Risikoklasse und Verantwortlichen – Ausgangspunkt jeder AI-Act-Compliance.' },
    { term: 'KI-Risikoregister', def: 'Dokumentation der identifizierten KI-Risiken mit Bewertung, Gegenmaßnahmen und Verantwortlichen.' },
    { term: 'ISO/IEC 42001', def: 'Internationale, zertifizierbare Norm (2023) für ein KI-Managementsystem (AIMS) in Organisationen.' },
    { term: 'AI Act (KI-Verordnung)', def: 'Verordnung (EU) 2024/1689 mit harmonisierten Regeln für KI in der EU; risikobasierter Ansatz, seit 01.08.2024 in Kraft, 2026 durch VO (EU) 2026/1744 geändert.' },
    { term: 'Anbieter / Betreiber', def: 'Anbieter entwickeln KI-Systeme und bringen sie unter eigenem Namen in Verkehr; Betreiber setzen sie in eigener Verantwortung beruflich ein – im Mittelstand die häufigste Rolle.' },
    { term: 'Hochrisiko-KI-System', def: 'KI-System nach Art. 6 AI Act, das als Sicherheitsbauteil eines regulierten Produkts (Anhang I) oder in einem Bereich nach Anhang III eingesetzt wird und strenge Anforderungen erfüllen muss.' },
    { term: 'Datenschutz-Folgenabschätzung (DSFA)', def: 'Vorab-Prüfung nach Art. 35 DSGVO, wenn eine Verarbeitung voraussichtlich ein hohes Risiko für Betroffene birgt.' },
    { term: 'Art. 22 DSGVO', def: 'Recht, keiner ausschließlich automatisierten Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung unterworfen zu werden.' },
    { term: 'Bias (Verzerrung)', def: 'Systematisch unfaire Ergebnisse eines KI-Systems für bestimmte Gruppen – statistisch (ungenauer) oder allokativ (ungerechte Verteilung).' },
    { term: 'Proxy-Merkmal (Ersatzmerkmal)', def: 'Merkmal, das ein geschütztes Merkmal indirekt abbildet, z. B. Postleitzahl für Herkunft – Grund, warum das Weglassen geschützter Merkmale Bias nicht beseitigt.' },
    { term: 'Equalized Odds', def: 'Fairness-Definition: gleiche Richtig-Positiv- und Falsch-Positiv-Raten über alle Gruppen.' },
    { term: 'SHAP', def: 'SHapley Additive exPlanations: Erklärungstechnik, die den Beitrag jedes Merkmals zu einer Vorhersage nach der Shapley-Logik der Spieltheorie berechnet.' },
    { term: 'Kontrafaktische Erklärung', def: 'Erklärung, die die minimale Änderung nennt, die eine Entscheidung umkehren würde („mit 2.000 € mehr Einkommen genehmigt").' }
  ],
  sources: [
    { title: 'Verordnung (EU) 2024/1689 (KI-Verordnung)', publisher: 'EUR-Lex', year: 2024, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { title: 'Verordnung (EU) 2026/1744 (Digital Omnibus on AI)', publisher: 'EUR-Lex', year: 2026, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    { title: 'Verordnung (EU) 2016/679 (Datenschutz-Grundverordnung)', publisher: 'EUR-Lex', year: 2016, type: 'Gesetz', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
    { title: 'ISO/IEC 42001:2023 – Artificial intelligence – Management system', publisher: 'ISO/IEC', year: 2023, type: 'Norm', url: 'https://www.iso.org/standard/42001' },
    { title: 'AI Risk Management Framework (AI RMF 1.0) und Generative AI Profile (NIST AI 600-1)', publisher: 'NIST', year: 2024, type: 'Norm', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { title: 'OECD AI Principles', publisher: 'OECD.AI', year: 2024, type: 'Leitfaden', url: 'https://oecd.ai/en/ai-principles' },
    { title: 'Recommendation on the Ethics of Artificial Intelligence', publisher: 'UNESCO', year: 2021, type: 'Leitfaden', url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics' },
    { title: 'Ethics guidelines for trustworthy AI', publisher: 'Europäische Kommission (HLEG AI)', year: 2019, type: 'Leitfaden', url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai' },
    { title: 'Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models', publisher: 'Europäischer Datenschutzausschuss (EDSA)', year: 2024, type: 'Leitfaden', url: 'https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en' },
    { title: 'Orientierungshilfe Künstliche Intelligenz und Datenschutz (Version 1.0)', publisher: 'Datenschutzkonferenz (DSK)', year: 2024, type: 'Leitfaden', url: 'https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf' },
    { title: 'Beschäftigte nutzen vermehrt Schatten-KI (Presseinformation)', publisher: 'Bitkom', year: 2025, type: 'Studie', url: 'https://www.bitkom.org/Presse/Presseinformation/Beschaeftigte-nutzen-Schatten-KI' },
    { title: 'A Framework for Understanding Sources of Harm throughout the Machine Learning Life Cycle (Suresh & Guttag)', publisher: 'arXiv', year: 2021, type: 'Paper', url: 'https://arxiv.org/abs/1901.10002' },
    { title: 'Inherent Trade-Offs in the Fair Determination of Risk Scores (Kleinberg, Mullainathan, Raghavan)', publisher: 'arXiv', year: 2016, type: 'Paper', url: 'https://arxiv.org/abs/1609.05807' },
    { title: 'Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification (Buolamwini & Gebru)', publisher: 'PMLR', year: 2018, type: 'Paper', url: 'https://proceedings.mlr.press/v81/buolamwini18a.html' },
    { title: 'A Unified Approach to Interpreting Model Predictions (SHAP, Lundberg & Lee)', publisher: 'arXiv', year: 2017, type: 'Paper', url: 'https://arxiv.org/abs/1705.07874' },
  ]
};
