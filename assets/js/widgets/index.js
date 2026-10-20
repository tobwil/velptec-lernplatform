// Registry aller interaktiven Widgets (lazy geladen).
// Jedes Modul exportiert `default function mount(el, props, ctx) → cleanup`.
export const widgets = {
  'neural-net': () => import('./neural-net.js'),
  'data-quality': () => import('./data-quality.js'),
  'usecase-matrix': () => import('./usecase-matrix.js'),
  'roi-calculator': () => import('./roi-calculator.js'),
  'process-steps': () => import('./process-steps.js'),
  'ai-act-classifier': () => import('./ai-act-classifier.js'),
  'risk-matrix': () => import('./risk-matrix.js'),
  'confusion-matrix': () => import('./confusion-matrix.js'),
  'prompt-builder': () => import('./prompt-builder.js'),
  'rag-pipeline': () => import('./rag-pipeline.js'),
  'agent-loop': () => import('./agent-loop.js'),
  'workflow-builder': () => import('./workflow-builder.js'),
  'token-calculator': () => import('./token-calculator.js'),
  'adkar-check': () => import('./adkar-check.js'),
};

/** Bequemer Helfer: Widget per Name mounten. Gibt eine Cleanup-Funktion zurück. */
export async function mountWidget(name, el, props = {}, ctx) {
  const loader = widgets[name];
  if (!loader) throw new Error(`Unbekanntes Widget: ${name}`);
  const mod = await loader();
  return mod.default(el, props, ctx) || (() => {});
}
