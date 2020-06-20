import ScenarioService from '../../services/scenario';

const initialState = {
  currentScenario: {}
}

export const scenario = {
  namespaced: true,
  state: initialState,
  actions: {
    getScenario ({ commit }, id) {
      return ScenarioService.getScenario(id).then(
        scenario => {
          commit('saveScenario', scenario);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    saveScenario (state, scenario) {
      state.currentScenario = scenario;
    }
  }
}