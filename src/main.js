import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { VuelidatePlugin } from '@vuelidate/core';
import 'tailwindcss/tailwind.css';

createApp(App)
  .use(router)
  .use(VuelidatePlugin)
  .mount('#app');
