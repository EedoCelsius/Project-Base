import primeVueConfig from './primevue/config';
import elementPlusConfig from './element-plus/config';
import customTailwindConfig from './custom-tailwind/config';

export default {
  routes: [
    {
      path: 'primevue',
      alias: '',
      component: () => import('./primevue/index.vue'),
      meta: {
        title: 'PrimeVue'
      },
      children: primeVueConfig.routes
    },
    {
      path: 'element-plus',
      component: () => import('./element-plus/index.vue'),
      meta: {
        title: 'Element Plus'
      },
      children: elementPlusConfig.routes
    },
    {
      path: 'custom-tailwind',
      component: () => import('./custom-tailwind/index.vue'),
      meta: {
        title: 'Custom Tailwind'
      },
      children: customTailwindConfig.routes
    }
  ]
};
