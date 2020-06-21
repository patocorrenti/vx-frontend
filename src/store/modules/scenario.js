import ScenarioService from '../../services/scenario';

const initialState = {
  currentScenario: {},
  loadingScenario: false
}

export const scenario = {
  namespaced: true,
  state: initialState,
  actions: {
    getScenario ({ state, commit }, id) {
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