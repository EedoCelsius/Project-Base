import { defineStore } from 'pinia';

export const usePreferencesStore = defineStore('preferences', {
  state: () => ({
    darkMode: false
  }),
  actions: {
    toggleDarkMode(value) {
      if (typeof value === 'boolean') {
        this.darkMode = value;
        return;
      }

      this.darkMode = !this.darkMode;
    }
  }
});
