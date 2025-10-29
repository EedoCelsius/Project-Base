import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import i18n from '@/plugins/i18n';

import { routes as appRoutes } from '@/app/config';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/app/index.vue'),
      children: appRoutes
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
