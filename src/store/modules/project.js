import ProjectService from '../../services/project';

const initialState = {
  projects: [],
  currentProject: 0
}

export const project = {
  namespaced: true,
  state: initialState,
  actions: {
    getProjects ({ commit }) {
      return ProjectService.getProjects().then(
        projects => {
          commit('saveProjects', projects);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    saveProjects (state, projects) {
      state.projects = projects;
      state.currentProject = projects.length ? 1 : 0;
    }
  }
}