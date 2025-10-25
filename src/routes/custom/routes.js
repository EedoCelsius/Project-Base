export default [
  {
    path: 'custom',
    component: () => import('./index.vue'),
    meta: {
      titleKey: 'nav.custom'
    }
  }
];
