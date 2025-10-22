<template>
  <el-switch
    class="dark-mode-toggle"
    v-model="isDark"
    :active-text="t('preferences.theme.dark')"
    :inactive-text="t('preferences.theme.light')"
    :style="{ '--switch-shadow-color': switchShadowColor }"
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

    const switchShadowColor = computed(() =>
      isDark.value ? 'rgba(0, 0, 225, 0.5)' : 'rgba(225, 0, 0, 0.5)'
    );

    return {
      isDark,
      switchShadowColor,
      t
    };
  }
};
</script>

<style scoped>
:deep(.el-switch__core) {
  min-width: 3.5rem;
  box-shadow: inset 0 4px 6px 2px var(--switch-shadow-color);
  --el-switch-off-color: #ffbf0e;
  --el-switch-on-color: #0081ec;
}

:deep(.el-switch__action) {
  box-shadow: 0px 0px 4px 1px var(--switch-shadow-color);
}
</style>
