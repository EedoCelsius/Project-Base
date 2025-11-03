const injectStyle = (id, css) => {
  if (document.getElementById(id)) {
    return;
  }

  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  document.head.append(style);
};

const toneStops = [
  ['-0', 0],
  ['-50', 1],
  ['-100', 2],
  ['-200', 3],
  ['-300', 4],
  ['-400', 5],
  ['-500', 6],
  ['-600', 7],
  ['-700', 8],
  ['-800', 9],
  ['-900', 10],
  ['-950', 11]
];

const createColorScale = (name, source, baseTone) => {
  const base = [`  --color-${name}: var(--${source}-tone-${baseTone});`];
  const tones = toneStops.map(([suffix, tone]) => `  --color-${name}${suffix}: var(--${source}-tone-${tone});`);
  return [...base, ...tones];
};

const rootCss = `
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
${[
  ...createColorScale('primary', 'primary', 6),
  ...createColorScale('surface', 'surface', 0),
  ...createColorScale('success', 'success', 6),
  ...createColorScale('warning', 'warning', 6),
  ...createColorScale('danger', 'danger', 6),
  ...createColorScale('error', 'error', 6),
  ...createColorScale('info', 'info', 6)
].join('\n')}
}`;

export default function applyTailwindTheme() {
  injectStyle('tailwind-theme', rootCss);
}
