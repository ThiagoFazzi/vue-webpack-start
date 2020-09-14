import Vue from 'vue';
import router from './router';
import i18n from './assets/languages/i18n';
import App from './App';

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
