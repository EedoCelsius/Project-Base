import { createI18n } from 'vue-i18n';
import { watch } from 'vue';
import { useStorage } from '@vueuse/core';

const browserLocale = navigator.language?.split('-')[0] ?? 'en';
const recentLocale = useStorage('locale', browserLocale);

const i18n = createI18n({
  legacy: false,
  locale: recentLocale.value,
  fallbackLocale: ['en'],
  messages: {}
});

watch(i18n.global.locale, (newLocale) => {
  recentLocale.value = newLocale;
});

export default i18n;
