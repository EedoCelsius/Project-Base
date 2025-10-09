import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const tones = (prefix) => ({
  0: `var(--${prefix}-tone-0)`,
  50: `var(--${prefix}-tone-1)`,
  100: `var(--${prefix}-tone-2)`,
  200: `var(--${prefix}-tone-3)`,
  300: `var(--${prefix}-tone-4)`,
  400: `var(--${prefix}-tone-5)`,
  500: `var(--${prefix}-tone-6)`,
  600: `var(--${prefix}-tone-7)`,
  700: `var(--${prefix}-tone-8)`,
  800: `var(--${prefix}-tone-9)`,
  900: `var(--${prefix}-tone-10)`,
  950: `var(--${prefix}-tone-11)`
});

const UnifiedAura = definePreset(Aura, {
  semantic: {
    primary: tones('primary'),
    colorScheme: {
      light: {
        surface: tones('surface')
      }
    }
  }
});

export default {
  ripple: true,
  inputVariant: 'filled',
  theme: {
    preset: UnifiedAura,
    options: {
      prefix: 'pv',
      darkModeSelector: 'none',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue, components, utilities'
      }
    }
  }
};
