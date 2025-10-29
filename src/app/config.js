import { routes as primeVueRoutes } from './primevue/config';
import { routes as elementPlusRoutes } from './element-plus/config';
import { routes as customTailwindRoutes } from './custom-tailwind/config';

export const routes = [
  {
    path: 'primevue',
    alias: '',
    component: () => import('./primevue/index.vue'),
    meta: {
      title: 'PrimeVue'
    },
    children: primeVueRoutes
  },
  {
    path: 'element-plus',
    component: () => import('./element-plus/index.vue'),
    meta: {
      title: 'Element Plus'
    },
    children: elementPlusRoutes
  },
  {
    path: 'custom-tailwind',
    component: () => import('./custom-tailwind/index.vue'),
    meta: {
      title: 'Custom Tailwind'
    },
    children: customTailwindRoutes
  }
];
