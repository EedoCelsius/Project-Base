import { computed, watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import path from 'path';
import i18n from '@/plugins/i18n';

const APP_DIR = '/src/app'
const configs = import.meta.glob('/src/app/**/config.json', { eager: true });
const components = import.meta.glob('/src/app/**/index.vue');

const loadConfig = (dir) => configs[path.posix.join(dir, 'config.json')]?.default ?? {};
const rootConfig = loadConfig(APP_DIR);

const buildRoutes = (dir, overrides = {}) => {
  const { meta, routes } = loadConfig(dir);
    
  return {
    meta,
    component: components[path.posix.join(dir, 'index.vue')],
    path: path.posix.basename(path.posix.relative(APP_DIR, dir)),
    children: routes?.map((route) => {
        if (typeof route === 'string') route = { src: route }

        const { src, ...subOverrides } = route;
        const subDir = path.posix.join(dir, src)

        return buildRoutes(subDir, subOverrides)
    }),
    ...overrides
  };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [buildRoutes(APP_DIR)]
});

const title = useTitle();
const resolveTitle = (value) => {
  if (typeof value !== 'object') return value;
  const locales = [i18n.global.locale.value, ...i18n.global.fallbackLocale.value];
  return locales.map((locale) => value[locale]).find(Boolean);
};

watch(
  [router.currentRoute, i18n.global.locale],
  ([route]) => {
    const appTitle = resolveTitle(rootConfig.meta?.title);
    const pageTitle = resolveTitle(route.meta?.title);

    title.value = pageTitle && pageTitle !== appTitle ? `${pageTitle} | ${appTitle}` : appTitle;
  },
  { immediate: true }
);

export default router;
