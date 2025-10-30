import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import path from 'path';
import i18n from '@/plugins/i18n';

const configs = import.meta.glob('/src/app/**/config.json', { eager: true });
const components = import.meta.glob('/src/app/**/index.vue');

const buildRoutes = (dir) => {
  const config = configs[path.posix.join(dir, 'config.json')];

  return config?.default?.routes?.map(({ src, ...route }) => {
    const subDir = path.posix.join(dir, src);
    const component = components[path.posix.join(subDir, 'index.vue')];

    return {
      ...route,
      component,
      path: path.posix.basename(subDir),
      children: buildRoutes(subDir)
    };
  });
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/app/index.vue'),
      children: buildRoutes('/src/app')
    }
  ]
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
