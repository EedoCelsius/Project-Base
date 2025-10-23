import { defineStore } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';

export const usePreferencesStore = defineStore('preferences', () => {
  const isDarkMode = useDark({
    selector: 'body',
    storageKey: 'preferences-color-scheme'
  });

  const toggleDarkMode = useToggle(isDarkMode);

  return { isDarkMode, toggleDarkMode };
});
