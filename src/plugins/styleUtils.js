export const createToneVariables = (targetBase, sourceBase, toneMap) =>
  Object.entries(toneMap).map(([targetSuffix, sourceSuffix]) => [
    `--${targetBase}${targetSuffix}`,
    `var(--${sourceBase}-${sourceSuffix})`,
  ]);

export const createVariableBlock = (selector, pairs) => {
  const body = pairs.map(([name, value]) => `  ${name}: ${value};`).join('\n');
  return `${selector} {\n${body}\n}`;
};

export const injectStyles = (id, css) => {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = id;
  style.textContent = `${css}\n`;
  document.head.append(style);
};
