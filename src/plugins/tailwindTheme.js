import { createToneVariables, createVariableBlock, injectStyles } from './styleUtils';

const paletteToneScale = {
  '': 'tone-6',
  '-0': 'tone-0',
  '-50': 'tone-1',
  '-100': 'tone-2',
  '-200': 'tone-3',
  '-300': 'tone-4',
  '-400': 'tone-5',
  '-500': 'tone-6',
  '-600': 'tone-7',
  '-700': 'tone-8',
  '-800': 'tone-9',
  '-900': 'tone-10',
  '-950': 'tone-11',
};

const surfaceToneScale = {
  '': 'tone-0',
  '-0': 'tone-0',
  '-50': 'tone-1',
  '-100': 'tone-2',
  '-200': 'tone-3',
  '-300': 'tone-4',
  '-400': 'tone-5',
  '-500': 'tone-6',
  '-600': 'tone-7',
  '-700': 'tone-8',
  '-800': 'tone-9',
  '-900': 'tone-10',
  '-950': 'tone-11',
};

const createTailwindVariables = () => [
  ...createToneVariables('color-primary', 'primary', paletteToneScale),
  ...createToneVariables('color-surface', 'surface', surfaceToneScale),
  ...createToneVariables('color-success', 'success', paletteToneScale),
  ...createToneVariables('color-warning', 'warning', paletteToneScale),
  ...createToneVariables('color-danger', 'danger', paletteToneScale),
  ...createToneVariables('color-error', 'error', paletteToneScale),
  ...createToneVariables('color-info', 'info', paletteToneScale),
];

const styleContent = `${createVariableBlock(':root', createTailwindVariables())}`;

const tailwindTheme = {
  install() {
    injectStyles('tailwind-theme', styleContent);
  },
};

export default tailwindTheme;
