<template>
  <div class="flex flex-col gap-6 rounded-xl p-6 shadow-sm">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-semibold">{{ $t('header.title') }}</h1>
        <p class="text-sm text-muted">{{ $t('header.subtitle') }}</p>
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
          :key="item.path"
          :to="item.path"
          class="rounded-full px-3 py-1 text-sm transition-colors text-muted hover:bg-primary/10 hover:text-primary"
          active-class="bg-primary/20 text-primary"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <DarkModeToggle />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import DarkModeToggle from '@/components/ui/DarkModeToggle.vue';

const navItems = computed(() => [
  { path: '/prime-vue', label: 'PrimeVue' },
  { path: '/element-plus', label: 'Element Plus' },
  { path: '/custom-tailwind', label: 'Custom Tailwind' }
]);

defineOptions({
  name: 'Header'
});
</script>
