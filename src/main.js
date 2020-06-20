import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Logout interceptor
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.data.code === "token_not_valid") {
    store.dispatch('auth/logout')
    router.push('/login')
  }
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
