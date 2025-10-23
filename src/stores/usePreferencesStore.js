import { defineStore } from 'pinia';
import { useDark } from '@vueuse/core';

export const usePreferencesStore = defineStore('preferences', () => {
  const darkMode = useDark({
    selector: 'body',
    storageKey: 'preferences-color-scheme'
  });

  const toggleDarkMode = (value) => {
    darkMode.value = value ?? !darkMode.value;
  };

  return {
    darkMode,
    toggleDarkMode
  };
});
