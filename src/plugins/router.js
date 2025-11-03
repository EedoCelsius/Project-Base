import path from 'path';
import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import { useLocaleResolver } from '@/composables/useLocaleResolver';

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

const appTitle = useLocaleResolver(rootConfig.meta?.title).localized;
const pageTitle = useLocaleResolver(() => router.currentRoute.value.meta?.title).localized;

useTitle(() => pageTitle.value === appTitle.value ? pageTitle.value : `${pageTitle.value} | ${appTitle.value}`);

export default router;
