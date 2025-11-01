import { computed, watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import path from 'path';
import i18n from '@/plugins/i18n';

const APP_DIR = '/src/app'
const configs = import.meta.glob('/src/app/**/config.json', { eager: true });
const components = import.meta.glob('/src/app/**/index.vue');

const loadConfig = (dir) => configs[path.posix.join(dir, 'config.json')]?.default ?? {};

const buildRoutes = (dir, routes) =>
  routes?.map((route) => {
    if (typeof route === 'string') route = { src: route }
    const { src, ...rest } = route;

    const subDir = path.posix.join(dir, src);
    const config = loadConfig(subDir);

    return {
      component: components[path.posix.join(subDir, 'index.vue')],
      path: path.posix.basename(path.posix.relative(APP_DIR, subDir)),
      children: buildRoutes(subDir, config.routes),
      meta: config.meta,
      ...rest
    };
  });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: buildRoutes(APP_DIR, ['/'])
});

const title = useTitle();
const resolveTitle = (value) => {
  if (typeof value !== 'object') return value;
  const locales = [i18n.global.locale.value, ...i18n.global.fallbackLocale.value];
  return locales.map((locale) => value[locale]).find(Boolean);
};

const rootConfig = loadConfig(APP_DIR);

watch(
  [router.currentRoute, i18n.global.locale],
  ([route]) => {
    const appTitle = resolveTitle(rootConfig.meta.title);
    const pageTitle = resolveTitle(route.meta?.title);

    title.value = pageTitle !== appTitle ? `${pageTitle} | ${appTitle}` : appTitle;
  },
  { immediate: true }
);

export default router;
