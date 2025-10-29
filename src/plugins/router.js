import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import path from 'path';
import i18n from '@/plugins/i18n';

const routeConfigs = import.meta.glob('/src/app/**/config.json', { eager: true });
const routeComponents = import.meta.glob('/src/app/**/index.vue');

const buildRoutes = (currentDir = '/src/app') => {
  const configPath = path.posix.join(currentDir, 'config.json');
  const config = routeConfigs[configPath]?.default;

  return (config?.routes ?? []).map(({ src, ...route }) => {
    const routeDir = path.posix.join(currentDir, src);
    const componentPath = path.posix.join(routeDir, 'index.vue');

    return {
      ...route,
      path: path.posix.basename(routeDir),
      component: routeComponents[componentPath],
      children: buildRoutes(routeDir)
    };
  });
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/app/index.vue'),
      children: buildRoutes()
    }
  ]
});

const title = useTitle();

router.afterEach((to) => {
  const baseTitle = i18n.global.t('header.title');
  const pageTitle = to.meta?.title;

  title.value = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
});

export default router;
