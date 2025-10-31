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
const appTitle = i18n.global.t('header.title');
const locales = [i18n.global.locale.value, ...i18n.global.fallbackLocale.value];

router.afterEach((to) => {
  let pageTitle = to.meta?.title;
  if (typeof pageTitle === 'object') pageTitle = locales.map((locale) => pageTitle[locale]).find(Boolean);

  title.value = pageTitle ? `${pageTitle} | ${appTitle}` : appTitle;
});

export default router;
