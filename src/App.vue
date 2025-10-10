<template>
  <div class="px-6 py-8">
    <header class="mx-auto mb-10 w-full max-w-5xl">
      <AppHeader />
    </header>
    <main class="mx-auto w-full max-w-5xl space-y-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { RouterView } from 'vue-router';
import AppHeader from '@/components/layout/AppHeader.vue';
import { usePreferencesStore } from '@/stores/usePreferencesStore';

const preferences = usePreferencesStore();

const syncTheme = (value) => {
  if (typeof document === 'undefined') {
    return;
  }

  const themeAttribute = value ? 'dark' : null;

  document.documentElement.classList.toggle('dark', value);
  document.body.classList.toggle('dark', value);
  if (themeAttribute) {
    document.documentElement.dataset.theme = themeAttribute;
    document.body.dataset.theme = themeAttribute;
  } else {
    delete document.documentElement.dataset.theme;
    delete document.body.dataset.theme;
  }
};

watch(
  () => preferences.darkMode,
  (value) => {
    syncTheme(value);
  },
  { immediate: true }
);
</script>
