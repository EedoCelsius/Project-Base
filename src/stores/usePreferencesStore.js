import { defineStore } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';

const darkModePreference = useDark({
  selector: 'body',
  storageKey: 'preferences-color-scheme'
});

const toggleDarkPreference = useToggle(darkModePreference);

export const usePreferencesStore = defineStore('preferences', {
  state: () => ({
    darkMode: darkModePreference
  }),
  actions: {
    toggleDarkMode(value) {
      return toggleDarkPreference(value);
    }
  }
});
