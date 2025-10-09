<template>
  <div class="flex flex-col gap-6 rounded-xl p-6 shadow-sm">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-semibold">{{ t('header.title') }}</h1>
        <p class="text-sm text-muted">{{ t('header.subtitle') }}</p>
      </div>
      <div class="flex items-center gap-3">
        <el-tag type="success">PrimeVue</el-tag>
        <el-tag type="info">Element Plus</el-tag>
        <el-tag type="warning">Tailwind CSS</el-tag>
      </div>
    </div>

    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <nav class="flex flex-wrap items-center gap-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="rounded-full px-3 py-1 text-sm transition-colors"
          :class="[
            isActive(item.name)
              ? 'bg-primary/20 text-primary'
              : 'text-muted hover:bg-primary/10 hover:text-primary'
          ]"
        >
          {{ t(item.label) }}
        </RouterLink>
      </nav>
      <DarkModeToggle />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import DarkModeToggle from '@/components/ui/DarkModeToggle.vue';

export default {
  name: 'AppHeader',
  components: {
    DarkModeToggle
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const navItems = computed(() => [
      { name: 'prime', label: 'nav.prime' },
      { name: 'element', label: 'nav.element' },
      { name: 'custom', label: 'nav.custom' }
    ]);

    const isActive = (name) => route.name === name;

    return {
      t,
      navItems,
      isActive
    };
  }
};
</script>
