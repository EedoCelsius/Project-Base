<template>
  <el-switch
    v-model="isDark"
    :active-text="t('preferences.theme.dark')"
    :inactive-text="t('preferences.theme.light')"
    :style="switchStyles"
    inline-prompt
  >
    <template #inactive-action>
      <i class="bx bxs-sun" aria-hidden="true"></i>
    </template>
    <template #active-action>
      <i class="bx bxs-moon-star" aria-hidden="true"></i>
    </template>
  </el-switch>
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

    const switchStyles = computed(() => ({
      '--switch-shadow-color': isDark.value ? 'rgba(0, 0, 225, 0.5)' : 'rgba(225, 0, 0, 0.5)',
      '--switch-text-color': isDark.value ? '#012773' : '#fefbd9'
    }));

    return {
      isDark,
      switchStyles,
      t
    };
  }
};
</script>

<style scoped>
:deep(.el-switch__core) {
  min-width: 3.75rem;
  min-height: 1.5rem;
  border-radius: calc(infinity * 1px);
  box-shadow: inset 0 4px 6px 2px var(--switch-shadow-color);
  --el-switch-off-color: #ffbf0e;
  --el-switch-on-color: #0081ec;
}

:deep(.el-switch__action) {
  box-shadow: 0px 0px 4px 1px var(--switch-shadow-color);
}

:deep(.el-switch__core .el-switch__inner .is-text) {
  color: var(--switch-text-color);
  font-weight: bold;
}
</style>
