// Kursindex: lädt alle Module der Weiterbildung „KI-Management".
export const COURSE = {
  title: 'KI-Management',
  provider: 'velpTEC',
  lecturer: 'Tobias Wilhelm (KIsruptiv)',
  handout: {
    title: 'Handout: KI-Management kompakt',
    authors: 'Zeitlmann & Wilhelm KIsruptiv GbR',
    file: 'docs/Handout-KI-Management.pdf',
    driveUrl: 'https://drive.google.com/file/d/14zJkIsSGEM0Vhiw6yLUQgisc9q6Fq6dX/view',
    pages: 8,
    sections: [
      { section: '1', title: 'Einordnung und Ziele', page: 1 },
      { section: '2', title: 'Grundlagen', page: 1, module: 'm01' },
      { section: '3', title: 'Aktuelle Anwendungen und Trends', page: 2, module: 'm02' },
      { section: '4', title: 'Strategische Bedeutung für Unternehmen', page: 2, module: 'm03' },
      { section: '5', title: 'Entwicklung einer KI-Strategie', page: 3, module: 'm03' },
      { section: '6', title: 'Implementierung von KI-Projekten', page: 4, module: 'm04' },
      { section: '7', title: 'Risikomanagement', page: 4, module: 'm05' },
      { section: '8', title: 'Change-Management', page: 5, module: 'm06' },
      { section: '9', title: 'Erfolgsmessung und Optimierung', page: 5, module: 'm07' },
      { section: '10', title: 'Fallstudien (Kurzüberblick)', page: 5, module: 'm08' },
      { section: '11', title: 'Ausblick: KI-Trends 2025+', page: 6, module: 'm02' },
      { section: '12', title: 'Projektplan (Muster)', page: 6, module: 'm04' },
      { section: '13', title: 'Best-Practice-Checkliste', page: 7, module: 'm08' },
      { section: '14', title: 'Glossar (Auswahl)', page: 7 },
      { section: '15', title: 'Weiterführende Ressourcen', page: 8, module: 'm05' },
    ],
  },
};

export const MODULE_IDS = ['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08', 'm09', 'm10', 'm11', 'm12'];

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
