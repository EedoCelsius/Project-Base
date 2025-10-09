import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ElementPlus from 'element-plus';

import App from './App.vue';
import i18n from './plugins/i18n';
import primevueOptions from './plugins/primevue';
import router from './router';

import 'primeicons/primeicons.css';
import './styles/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue, primevueOptions);
app.use(ElementPlus);
app.use(i18n);
app.use(router);

app.mount('#app');
