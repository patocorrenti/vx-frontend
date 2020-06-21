import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiInterceptors from './services/api.interceptors'


Vue.config.productionTip = false

apiInterceptors()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
