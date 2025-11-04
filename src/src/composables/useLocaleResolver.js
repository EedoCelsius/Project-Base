import { computed, toRef } from 'vue';
import i18n from '@/plugins/i18n';

const locales = computed(() => {
  const fallback = i18n.global.fallbackLocale.value;
  const fallbackList = Array.isArray(fallback) ? fallback : [fallback];

  return [i18n.global.locale.value, ...fallbackList];
});

export const useLocaleResolver = (messages) => {
  messages = toRef(messages);
  const localized = computed(() => {
    if (typeof messages.value !== 'object') return messages.value;
    return locales.value.map((locale) => messages.value[locale]).find(Boolean);
  });

  return { messages, localized };
};
