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
const rootConfig = loadConfig(APP_DIR);
const resolveTitle = (value, locales) => {
  if (!value) return undefined;
  if (typeof value === 'string') return value;

  return locales.map((locale) => value[locale]).find(Boolean);
};

const locales = computed(() => [i18n.global.locale.value, ...i18n.global.fallbackLocale.value]);
const appTitle = computed(() => resolveTitle(rootConfig.meta?.title, locales.value) ?? '');

watch(
  [() => router.currentRoute.value, () => i18n.global.locale.value, appTitle],
  ([currentRoute]) => {
    const resolvedAppTitle = appTitle.value;
    const currentLocales = locales.value;
    const route = currentRoute;

    const isRootRoute = route.path === '/' || route.path === '';
    const pageTitle = resolveTitle(route.meta?.title, currentLocales);

    if (isRootRoute) {
      title.value = resolvedAppTitle;
      return;
    }

    title.value = pageTitle ? `${pageTitle} | ${resolvedAppTitle}` : resolvedAppTitle;
  },
  { immediate: true }
);

export default router;
