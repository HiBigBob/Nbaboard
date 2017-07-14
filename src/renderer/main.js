import Vue from 'vue';
import axios from 'axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import store from './store';
Vue.use(iView);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  components: { App },
  store,
  router,
  template: '<App/>',
}).$mount('#app');
