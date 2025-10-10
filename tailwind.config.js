export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-tone-6)',
          0: 'var(--primary-tone-0)',
          1: 'var(--primary-tone-1)',
          2: 'var(--primary-tone-2)',
          3: 'var(--primary-tone-3)',
          4: 'var(--primary-tone-4)',
          5: 'var(--primary-tone-5)',
          6: 'var(--primary-tone-6)',
          7: 'var(--primary-tone-7)',
          8: 'var(--primary-tone-8)',
          9: 'var(--primary-tone-9)',
          10: 'var(--primary-tone-10)',
          11: 'var(--primary-tone-11)'
        },
        surface: {
          DEFAULT: 'var(--surface-tone-6)',
          0: 'var(--surface-tone-0)',
          1: 'var(--surface-tone-1)',
          2: 'var(--surface-tone-2)',
          3: 'var(--surface-tone-3)',
          4: 'var(--surface-tone-4)',
          5: 'var(--surface-tone-5)',
          6: 'var(--surface-tone-6)',
          7: 'var(--surface-tone-7)',
          8: 'var(--surface-tone-8)',
          9: 'var(--surface-tone-9)',
          10: 'var(--surface-tone-10)',
          11: 'var(--surface-tone-11)'
        }
      }
    }
  },
  plugins: []
};
