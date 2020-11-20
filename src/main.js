import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueFormulate from '@braid/vue-formulate';
import('@/assets/index.css');

createApp(App)
  .use(router)
  .use(VueFormulate)
  .mount('#app');
