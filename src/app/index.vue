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
const primeVueModule = () => import('./prime-vue/index.vue');
const elementPlusModule = () => import('./element-plus/index.vue');
const customTailwindModule = () => import('./custom-tailwind/index.vue');

export const routes = [
  createFeatureRoute({
    name: 'app-prime-vue',
    path: 'prime-vue',
    alias: '',
    title: 'PrimeVue',
    loader: primeVueModule
  }),
  createFeatureRoute({
    name: 'app-element-plus',
    path: 'element-plus',
    title: 'Element Plus',
    loader: elementPlusModule
  }),
  createFeatureRoute({
    name: 'app-custom-tailwind',
    path: 'custom-tailwind',
    title: 'Custom Tailwind',
    loader: customTailwindModule
  })
];

function createFeatureRoute({ name, path, alias, title, loader }) {
  const route = {
    name,
    path,
    component: () => loader().then((mod) => mod.default),
    meta: {
      title,
      lazyChildren: () => loader().then((mod) => mod.routes ?? [])
    }
  };

  if (alias !== undefined) {
    route.alias = alias;
  }

  return route;
}
</script>
