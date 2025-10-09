import { createRouter, createWebHistory } from 'vue-router';
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

router.afterEach((to) => {
  if (typeof document === 'undefined') {
    return;
  }

  const baseTitle = i18n.global.t('header.title');
  if (!to.meta?.titleKey) {
    document.title = baseTitle;
    return;
  }

  const pageTitle = i18n.global.t(to.meta.titleKey);
  document.title = `${pageTitle} | ${baseTitle}`;
});

export default router;
