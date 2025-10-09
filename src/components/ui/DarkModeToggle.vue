<template>
  <el-switch
    v-model="isDark"
    class="dark-mode-switch"
    :active-text="t('preferences.theme.dark')"
    :inactive-text="t('preferences.theme.light')"
    inline-prompt
  />
</template>

<script>
import { computed } from 'vue';
import { usePreferencesStore } from '@/stores/usePreferencesStore';
import { useI18n } from 'vue-i18n';

export default {
  name: 'DarkModeToggle',
  setup() {
    const preferences = usePreferencesStore();
    const { t } = useI18n();

    const isDark = computed({
      get: () => preferences.darkMode,
      set: (value) => {
        preferences.toggleDarkMode(value);
      }
    });

    return {
      isDark,
      t
    };
  }
};
</script>

<style scoped>
.dark-mode-switch :deep(.el-switch__core) {
  min-width: 3.5rem;
}
</style>
