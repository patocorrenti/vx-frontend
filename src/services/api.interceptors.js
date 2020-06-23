import api from './api'
import router from '../router'
import store from '../store'

export default function setApiInterceptors() {

  // Before request
  api.interceptors.request.use(config => {
    // Add access token
    if (!config.headers.Authorization) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.access) {
        console.log('entro')
        config.headers = { Authorization: `Bearer ${user.access}` };
      }
    }
    return config
  })

  // After request
  api.interceptors.response.use(function (response) {
    return response
  }, function (error) {

    // Logout 
    if (error.response.data.code === "token_not_valid") {
      store.dispatch('auth/logout')
      router.push('/login')
    }
    
    return Promise.reject(error)

  })

}