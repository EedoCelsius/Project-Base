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
.dark-mode-switch {
  :deep(.el-switch__core) {
    min-width: 3.5rem;
    box-shadow: inset 0 4px 6px 2px rgba(225, 0, 0, 0.5);
    --el-switch-off-color: #ffbf0e;
  }
  
  :deep(.el-switch.is-checked .el-switch__core) {
    box-shadow: inset 0 4px 6px 2px rgba(0, 0, 225, 0.5);
    --el-switch-on-color: #0081ec;
  }
  
  :deep(.el-switch__action) {
    box-shadow: 0px 0px 4px 1px rgba(225, 0, 0, 0.25);
  }
  
  :deep(.el-switch.is-checked .el-switch__action) {
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 225, 0.25);
  }
}
</style>
