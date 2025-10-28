import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import i18n from '@/plugins/i18n';

import primeVueRoutes from '@/routes/primevue/routes';
import elementPlusRoutes from '@/routes/element-plus/routes';
import customTailwindRoutes from '@/routes/custom-tailwind/routes';

const routes = [
  {
    path: '/',
    component: () => import('@/routes/index.vue'),
    children: [
      ...primeVueRoutes,
      ...elementPlusRoutes,
      ...customTailwindRoutes
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

const title = useTitle();

router.afterEach((to) => {
  const baseTitle = i18n.global.t('header.title');
  const pageTitle = to.meta?.title;

  title.value = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
});

export default router;
