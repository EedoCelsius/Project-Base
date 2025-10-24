import { defineStore } from 'pinia';
import { useDark } from '@vueuse/core';
import i18n from '@/plugins/i18n';

export const usePreferencesStore = defineStore('preferences', () => {
  const isDarkMode = useDark({
    selector: 'html',
    storageKey: 'preferences-color-scheme',
    disableTransition: false
  });

  const locale = i18n.global.locale;

  return { isDarkMode, locale };
});
