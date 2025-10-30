import { createI18n } from 'vue-i18n';
import { watch } from 'vue';
import { useStorage } from '@vueuse/core';

import en from '@/locales/en.json';
import ko from '@/locales/ko.json';

const browserLocale = navigator.language?.split('-')[0] ?? 'en';
const recentLocale = useStorage('locale', browserLocale);

const i18n = createI18n({
  legacy: false,
  locale: recentLocale.value,
  fallbackLocale: ['en'], // must be an array
  messages: {
    en,
    ko
  }
});

watch(i18n.global.locale, (newLocale) => {
  recentLocale.value = newLocale;
});

export default i18n;
