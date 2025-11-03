import 'element-plus/dist/index.css';

const injectStyle = (id, css) => {
  if (document.getElementById(id)) {
    return;
  }

  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  document.head.append(style);
};

const createToneVar = (name, prefix, tone) => `  --${name}: var(--${prefix}-tone-${tone});`;

const createPalette = (color) => {
  const variants = [
    ['', 6],
    ['-light-3', 5],
    ['-light-5', 4],
    ['-light-7', 3],
    ['-light-8', 2],
    ['-light-9', 1],
    ['-dark-2', 8]
  ];

  return variants.map(([suffix, tone]) => createToneVar(`el-color-${color}${suffix}`, color, tone));
};

const backgroundVars = [
  ['el-bg-color', 0],
  ['el-bg-color-page', 1],
  ['el-bg-color-overlay', 0]
].map(([name, tone]) => createToneVar(name, 'surface', tone));

const textVars = [
  ['el-text-color-primary', 11],
  ['el-text-color-regular', 9],
  ['el-text-color-secondary', 7],
  ['el-text-color-placeholder', 6],
  ['el-text-color-disabled', 5]
].map(([name, tone]) => createToneVar(name, 'surface', tone));

const borderVars = [
  ['el-border-color', 4],
  ['el-border-color-light', 3],
  ['el-border-color-lighter', 2],
  ['el-border-color-extra-light', 1],
  ['el-border-color-dark', 5],
  ['el-border-color-darker', 6]
].map(([name, tone]) => createToneVar(name, 'surface', tone));

const fillVars = [
  ['el-fill-color', 2],
  ['el-fill-color-light', 1],
  ['el-fill-color-lighter', 0],
  ['el-fill-color-extra-light', 0],
  ['el-fill-color-dark', 3],
  ['el-fill-color-darker', 4],
  ['el-fill-color-blank', 0]
].map(([name, tone]) => createToneVar(name, 'surface', tone));

const paletteVars = ['primary', 'success', 'warning', 'danger', 'error', 'info']
  .flatMap(createPalette);

const rootCss = `:root {\n${[
  ...paletteVars,
  ...backgroundVars,
  ...textVars,
  ...borderVars,
  ...fillVars
].join('\n')}\n}`;

export default function applyElementPlusTheme() {
  injectStyle('element-plus-theme', rootCss);
}
