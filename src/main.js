import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiInterceptors from './services/api.interceptors'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faCheckCircle, faTimesCircle, faLayerGroup, faSignOutAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faCheckCircle, faTimesCircle, faLayerGroup, faSignOutAlt, faChevronLeft, faChevronRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

apiInterceptors()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
