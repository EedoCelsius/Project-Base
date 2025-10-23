import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';
import i18n from '@/plugins/i18n';

const routes = [
  {
    path: '/',
    name: 'prime',
    component: () => import('@/views/PrimeVueShowcase.vue'),
    meta: {
      titleKey: 'nav.prime'
    }
  },
  {
    path: '/element-plus',
    name: 'element',
    component: () => import('@/views/ElementPlusShowcase.vue'),
    meta: {
      titleKey: 'nav.element'
    }
  },
  {
    path: '/custom',
    name: 'custom',
    component: () => import('@/views/CustomShowcase.vue'),
    meta: {
      titleKey: 'nav.custom'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

const title = useTitle();

router.afterEach((to) => {
  const baseTitle = i18n.global.t('header.title');
  const pageTitle = to.meta?.titleKey ? i18n.global.t(to.meta.titleKey) : null;

  title.value = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
});

export default router;
