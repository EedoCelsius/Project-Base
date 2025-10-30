import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import path from 'path';
import i18n from '@/plugins/i18n';

const configs = import.meta.glob('/src/app/**/config.json', { eager: true });
const components = import.meta.glob('/src/app/**/index.vue');

const loadConfig = (dir) => configs[path.posix.join(dir, 'config.json')]?.default ?? {};

const buildRoutes = (dir, routes = []) =>
  routes.map(({ src, ...route }) => {
    const subDir = path.posix.join(dir, src);
    const config = loadConfig(subDir);
    const component = components[path.posix.join(subDir, 'index.vue')];

    return {
      component,
      path: path.posix.basename(path.posix.relative('/src/app', subDir)),
      children: buildRoutes(subDir, config.routes),
      meta: config.meta,
      ...route
    };
  });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: buildRoutes('/src/app', [{ src: '' }])
});

const title = useTitle();

router.afterEach((to) => {
  const baseTitle = i18n.global.t('header.title');

  let pageTitle = to.meta?.title;
  const locales = [i18n.global.locale.value, ...i18n.global.fallbackLocale.value];
  if (typeof pageTitle === 'object') pageTitle = locales.map((locale) => pageTitle[locale]).find(Boolean);

  title.value = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
});

export default router;
