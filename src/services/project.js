import api from './api'
// import authHeader from './auth-header'

class ProjectService {
  async getProjects() {
    const response = await api.get('projects/');
    return (response.data);
  }
}

export default new ProjectService();