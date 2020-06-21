import api from './api'
import authHeader from './auth-header'

class ProjectService {
  getProjects() {
    return api
      .get('projects/', { headers: authHeader() })
      .then(response => (response.data))
  }
}

export default new ProjectService();