import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'





Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();

import Detail from './views/detail.vue'
import Shopcart from './views/shopcart.vue'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
