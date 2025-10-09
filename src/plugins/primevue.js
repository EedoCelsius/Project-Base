import Aura from '@primevue/themes/aura';

export default {
  ripple: true,
  inputVariant: 'filled',
  theme: {
    preset: Aura,
    options: {
      prefix: 'pv',
      darkModeSelector: '.dark',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue, components, utilities'
      }
    }
  }
};
