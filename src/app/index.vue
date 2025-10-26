<template>
  <div class="px-6 py-8">
    <header class="mx-auto mb-10 w-full max-w-5xl">
      <Header />
    </header>
    <main class="mx-auto w-full max-w-5xl space-y-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue';
</script>

<script>
import { routes as primeVueRoutes } from './prime-vue/index.vue';
import { routes as elementPlusRoutes } from './element-plus/index.vue';
import { routes as customTailwindRoutes } from './custom-tailwind/index.vue';

export const routes = [
  {
    path: 'prime-vue',
    alias: '',
    component: () => import('./prime-vue/index.vue'),
    meta: {
      title: 'PrimeVue'
    },
    children: primeVueRoutes
  },
  {
    path: 'element-plus',
    component: () => import('./element-plus/index.vue'),
    meta: {
      title: 'Element Plus'
    },
    children: elementPlusRoutes
  },
  {
    path: 'custom-tailwind',
    component: () => import('./custom-tailwind/index.vue'),
    meta: {
      title: 'Custom Tailwind'
    },
    children: customTailwindRoutes
  }
];
</script>
