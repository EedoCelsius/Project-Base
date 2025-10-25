<template>
  <el-switch
    v-model="preference.isDarkMode"
    active-text="Dark"
    inactive-text="Light"
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

<script setup>
import { computed } from 'vue';
import { usePreferencesStore } from '@/stores/preferences';

const preference = usePreferencesStore();

const switchStyles = computed(() => ({
  '--switch-shadow-color': preference.isDarkMode
    ? 'rgba(0, 0, 225, 0.5)'
    : 'rgba(225, 0, 0, 0.5)',
  '--switch-text-color': preference.isDarkMode ? '#012773' : '#fefbd9'
}));

defineOptions({
  name: 'DarkModeToggle'
});
</script>

<style scoped>
:deep(.el-switch__core) {
  min-width: 3.75rem;
  min-height: 1.35rem;
  border-radius: calc(infinity * 1px);
  box-shadow: inset 0 3px 6px 1px var(--switch-shadow-color);
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
