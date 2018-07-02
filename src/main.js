import Vue from 'vue';
import Vuelidate from 'vuelidate';
import router from '@/router/index';
import store from '@/store/index';
import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
