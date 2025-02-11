import ProjectService from '../../services/project';

const initialState = {
  projects: [],
  currentProject: 0,
  loadingProjects: false
}

export const project = {
  namespaced: true,
  
  state: initialState,

  getters: {
    currentProject (state) {
      return state.projects[state.currentProject]
    },
    projectName (state) {
      return state.projects.length ? state.projects[state.currentProject].name : ''
    },
    scenarios (state) {
      return state.projects[state.currentProject].scenarios
    },
    prevScenario (state, getters, rootState) {
      const index  = getters.scenarios.findIndex(scenario => scenario.id === rootState.scenario.currentScenario.id)
      return index - 1 >= 0 ? getters.scenarios[index - 1].id : false
    },
    nextScenario (state, getters, rootState) {
      const index  = getters.scenarios.findIndex(scenario => scenario.id === rootState.scenario.currentScenario.id)
      return index + 1 < getters.scenarios.length ? getters.scenarios[index + 1].id : false
    }
  },

  actions: {
    getProjects ({ state, commit }) {
      state.loadingProjects = true
      return ProjectService.getProjects().then(
        projects => {
          commit('saveProjects', projects);
        },
        error => {
          return Promise.reject(error);
        }
      ).finally( () => { state.loadingProjects = false });
    }
  },

  mutations: {
    saveProjects (state, projects) {
      state.projects = projects;
    },
    updateScenarioStatus (state, payload) {
      const scenario = state.projects[state.currentProject].scenarios
        .find(scenario => scenario.id === payload.id)
      scenario.status = payload.status;
    }
  }
}