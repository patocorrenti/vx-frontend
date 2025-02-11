import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
import { project } from './modules/project'
import { scenario } from './modules/scenario'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, project, scenario
  }
})
