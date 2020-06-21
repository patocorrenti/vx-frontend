import ScenarioService from '../../services/scenario';

const initialState = {
  currentScenario: {},
  loadingScenario: false
}

export const scenario = {
  namespaced: true,
  state: initialState,
  getters: {
    audio (state) { return state.currentScenario.audio }
  },
  actions: {
    getScenario ({ state, commit }, id) {
      if (state.currentScenario.id === id)
        return false;
      
      state.currentScenario = {}
      state.loadingScenario = true
      
      return ScenarioService.getScenario(id).then(
        scenario => {
          commit('saveScenario', scenario);
        },
        error => {
          return Promise.reject(error);
        }
      ).finally( () => { state.loadingScenario = false });
    }
  },
  mutations: {
    saveScenario (state, scenario) {
      state.currentScenario = scenario;
    }
  }
}