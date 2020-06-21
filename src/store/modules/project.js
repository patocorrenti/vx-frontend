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
    currentProject (state) { return state.projects[state.currentProject] },
    projectName (state) { return state.projects.length ? state.projects[state.currentProject].name : '' }
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
    }
  }
}