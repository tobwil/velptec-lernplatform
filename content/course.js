// Kursindex: lädt alle Module der Weiterbildung „KI-Management".
export const COURSE = {
  title: 'KI-Management',
  provider: 'velpTEC',
  lecturer: 'Tobias Wilhelm (KIsruptiv)',
  skript: {
    title: 'KI-Management – Theorieskript',
    code: 'K7.0069_4.0',
    publisher: 'velpTEC',
    pages: 185,
    // Das Skript ist Kursmaterial von velpTEC und liegt bewusst NICHT in diesem Repository.
    // Link nur für berechtigte Personen (Teilnehmende/Dozierende).
    driveUrl: 'https://drive.google.com/file/d/1zUThIUIT5kGWFJzryVbgHuXG756gI-Fd/view',
    // Seitenangaben = gedruckte Seitenzahl im Skript
    chapters: [
      { chapter: '1', title: 'KI-Grundlagen und strategischer Kontext', page: 3, module: 'k1', sections: [
        { chapter: '1.1', title: 'Was ist Künstliche Intelligenz?', page: 4 },
        { chapter: '1.2', title: 'Machine Learning und Deep Learning erklärt', page: 7 },
        { chapter: '1.3', title: 'Generative KI und große Sprachmodelle', page: 13 },
        { chapter: '1.4', title: 'Strategische Bedeutung von KI für Organisationen', page: 18 },
        { chapter: '1.5', title: 'Bewertung der organisatorischen KI-Bereitschaft', page: 23 },
      ] },
      { chapter: '2', title: 'KI-Anwendungsfälle erkennen und bewerten', page: 29, module: 'k2', sections: [
        { chapter: '2.1', title: 'KI-Chancen entdecken', page: 30 },
        { chapter: '2.2', title: 'Bewertungsmethoden und Kriterien', page: 34 },
        { chapter: '2.3', title: 'ROI-Analyse und Business-Case-Entwicklung', page: 38 },
        { chapter: '2.4', title: 'Erfolgskennzahlen und KPIs', page: 43 },
        { chapter: '2.5', title: 'Portfoliopriorisierung und Reihenfolgeplanung', page: 47 },
      ] },
      { chapter: '3', title: 'Datenmanagement und Datenqualität für KI', page: 52, module: 'k3', sections: [
        { chapter: '3.1', title: 'Daten als Grundlage für KI', page: 53 },
        { chapter: '3.2', title: 'Dimensionen der Datenqualität und ihre Bewertung', page: 57 },
        { chapter: '3.3', title: 'Data Governance für KI', page: 61 },
        { chapter: '3.4', title: 'Datenaufbereitung und Datenschutz', page: 66 },
      ] },
      { chapter: '4', title: 'KI-Projektmanagement und Umsetzung', page: 72, module: 'k4', sections: [
        { chapter: '4.1', title: 'KI-Projektlebenszyklus und Methoden', page: 74 },
        { chapter: '4.2', title: 'Aufbau von KI-Teams und Kompetenzen', page: 78 },
        { chapter: '4.3', title: 'Anbieterauswahl und Beschaffung', page: 84 },
        { chapter: '4.4', title: 'Risikomanagement für KI-Projekte', page: 89 },
        { chapter: '4.5', title: 'Change Management und Akzeptanz', page: 96 },
        { chapter: '4.6', title: 'Pilotprojekte und Skalierung', page: 102 },
      ] },
      { chapter: '5', title: 'KI-Governance, Ethik und rechtlicher Rahmen', page: 108, module: 'k5', sections: [
        { chapter: '5.1', title: 'KI-Governance-Strukturen und -Rahmenwerke', page: 109 },
        { chapter: '5.2', title: 'Ethische KI-Grundsätze und verantwortungsvoller KI-Einsatz', page: 113 },
        { chapter: '5.3', title: 'EU-KI-Verordnung: Anforderungen und Compliance', page: 117 },
        { chapter: '5.4', title: 'DSGVO und Datenschutz bei KI', page: 121 },
        { chapter: '5.5', title: 'Verzerrung, Fairness und Erklärbarkeit', page: 126 },
      ] },
      { chapter: '6', title: 'KI-Betrieb und kontinuierliche Verbesserung', page: 132, module: 'k6', sections: [
        { chapter: '6.1', title: 'Einführung in MLOps', page: 133 },
        { chapter: '6.2', title: 'Modellüberwachung und Leistungsverfolgung', page: 136 },
        { chapter: '6.3', title: 'Drift-Erkennung und Modellwartung', page: 141 },
        { chapter: '6.4', title: 'Kontinuierliche Verbesserung und Nachhaltigkeit', page: 146 },
      ] },
      { chapter: '7', title: 'Fortgeschrittene KI-Strategie und organisatorische Transformation', page: 151, module: 'k7', sections: [
        { chapter: '7.1', title: 'KI-Unternehmensstrategie entwickeln', page: 152 },
        { chapter: '7.2', title: 'Organisationsdesign für KI', page: 154 },
        { chapter: '7.3', title: 'Aufbau eines KI-Kompetenzzentrums', page: 157 },
        { chapter: '7.4', title: 'Aufbau einer KI-orientierten Unternehmenskultur', page: 160 },
      ] },
      { chapter: '8', title: 'Aufkommende Trends und Zukunft des KI-Managements', page: 164, module: 'k8', sections: [
        { chapter: '8.1', title: 'Agentische KI und autonome Systeme', page: 166 },
        { chapter: '8.2', title: 'Entwicklung hin zu LLMOps', page: 171 },
        { chapter: '8.3', title: 'Regulatorischer Ausblick und Compliance-Planung', page: 175 },
        { chapter: '8.4', title: 'Nachhaltige KI und Arbeitskräfte der Zukunft', page: 179 },
      ] },
    ],
  },
};

// k1–k8 = Kapitel des Theorieskripts, p1–p4 = Plus-Module (Vertiefung über das Skript hinaus)
export const MODULE_IDS = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'p1', 'p2', 'p3', 'p4'];

export async function loadModules() {
  const mods = await Promise.all(
    MODULE_IDS.map((id) =>
      import(`./modules/${id}.js`)
        .then((m) => m.default)
        .catch((e) => {
          console.warn('Modul konnte nicht geladen werden:', id, e);
          return null;
        }),
    ),
  );
  return mods.filter(Boolean).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}
