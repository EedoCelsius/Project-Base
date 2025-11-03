import 'element-plus/dist/index.css';

import { createToneVariables, createVariableBlock, injectStyles } from './styleUtils';

const createElementPlusVariables = () => {
  const toneGroups = [
    ...createToneVariables('el-color-primary', 'primary', {
      '': 'tone-6',
      '-light-3': 'tone-5',
      '-light-5': 'tone-4',
      '-light-7': 'tone-3',
      '-light-8': 'tone-2',
      '-light-9': 'tone-1',
      '-dark-2': 'tone-8',
    }),
    ...createToneVariables('el-color-success', 'success', {
      '': 'tone-6',
      '-light-3': 'tone-5',
      '-light-5': 'tone-4',
      '-light-7': 'tone-3',
      '-light-8': 'tone-2',
      '-light-9': 'tone-1',
      '-dark-2': 'tone-8',
    }),
    ...createToneVariables('el-color-warning', 'warning', {
      '': 'tone-6',
      '-light-3': 'tone-5',
      '-light-5': 'tone-4',
      '-light-7': 'tone-3',
      '-light-8': 'tone-2',
      '-light-9': 'tone-1',
      '-dark-2': 'tone-8',
    }),
    ...createToneVariables('el-color-danger', 'danger', {
      '': 'tone-6',
      '-light-3': 'tone-5',
      '-light-5': 'tone-4',
      '-light-7': 'tone-3',
      '-light-8': 'tone-2',
      '-light-9': 'tone-1',
      '-dark-2': 'tone-8',
    }),
    ...createToneVariables('el-color-error', 'error', {
      '': 'tone-6',
      '-light-3': 'tone-5',
      '-light-5': 'tone-4',
      '-light-7': 'tone-3',
      '-light-8': 'tone-2',
      '-light-9': 'tone-1',
      '-dark-2': 'tone-8',
    }),
    ...createToneVariables('el-color-info', 'info', {
      '': 'tone-6',
      '-light-3': 'tone-5',
      '-light-5': 'tone-4',
      '-light-7': 'tone-3',
      '-light-8': 'tone-2',
      '-light-9': 'tone-1',
      '-dark-2': 'tone-8',
    }),
  ];

  const miscVariables = [
    ['--el-bg-color', 'var(--surface-tone-0)'],
    ['--el-bg-color-page', 'var(--surface-tone-1)'],
    ['--el-bg-color-overlay', 'var(--surface-tone-0)'],
    ['--el-text-color-primary', 'var(--surface-tone-11)'],
    ['--el-text-color-regular', 'var(--surface-tone-9)'],
    ['--el-text-color-secondary', 'var(--surface-tone-7)'],
    ['--el-text-color-placeholder', 'var(--surface-tone-6)'],
    ['--el-text-color-disabled', 'var(--surface-tone-5)'],
    ['--el-border-color', 'var(--surface-tone-4)'],
    ['--el-border-color-light', 'var(--surface-tone-3)'],
    ['--el-border-color-lighter', 'var(--surface-tone-2)'],
    ['--el-border-color-extra-light', 'var(--surface-tone-1)'],
    ['--el-border-color-dark', 'var(--surface-tone-5)'],
    ['--el-border-color-darker', 'var(--surface-tone-6)'],
    ['--el-fill-color', 'var(--surface-tone-2)'],
    ['--el-fill-color-light', 'var(--surface-tone-1)'],
    ['--el-fill-color-lighter', 'var(--surface-tone-0)'],
    ['--el-fill-color-extra-light', 'var(--surface-tone-0)'],
    ['--el-fill-color-dark', 'var(--surface-tone-3)'],
    ['--el-fill-color-darker', 'var(--surface-tone-4)'],
    ['--el-fill-color-blank', 'var(--surface-tone-0)'],
  ];

  return [...miscVariables, ...toneGroups];
};

const styleContent = `${createVariableBlock(':root', createElementPlusVariables())}`;

const elementPlusTheme = {
  install() {
    injectStyles('element-plus-theme', styleContent);
  },
};

export default elementPlusTheme;
