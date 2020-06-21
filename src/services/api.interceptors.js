import api from './api'
import router from '../router'
import store from '../store'

export default function setApiInterceptors() {

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