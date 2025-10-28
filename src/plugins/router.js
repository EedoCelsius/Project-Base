import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import i18n from '@/plugins/i18n';

import AppShell, { routes } from '@/app/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app-shell',
      component: AppShell,
      children: routes
    }
  ]
});

const loadedFeatureChildren = new Set();

router.beforeEach(async (to, from, next) => {
  for (const record of to.matched) {
    const { name, meta } = record;
    if (!name) {
      continue;
    }

    const { lazyChildren } = meta ?? {};

    if (typeof lazyChildren !== 'function' || loadedFeatureChildren.has(name)) {
      continue;
    }

    const childRoutes = await lazyChildren();

    if (Array.isArray(childRoutes)) {
      for (const child of childRoutes) {
        router.addRoute(name, cloneRouteRecord(child));
      }
    }

    loadedFeatureChildren.add(name);

    return next({ ...to, replace: true });
  }

  return next();
});

function cloneRouteRecord(route) {
  const cloned = { ...route };

  if (route.children) {
    cloned.children = route.children.map(cloneRouteRecord);
  }

  return cloned;
}

const title = useTitle();

router.afterEach((to) => {
  const baseTitle = i18n.global.t('header.title');
  const pageTitle = to.meta?.title;

  title.value = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
});

export default router;
