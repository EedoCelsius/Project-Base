import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--p-primary-500)',
        surface: 'var(--surface-color)',
        content: 'var(--text-color)'
      }
    }
  },
  plugins: []
});
