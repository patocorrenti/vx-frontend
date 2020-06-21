import api from './api'
import authHeader from './auth-header'

class ScenarioService {
  getScenario(id) {
    return api
      .get(`scenarios/${id}`, { headers: authHeader() })
      .then(response => (response.data))
  }
}

export default new ScenarioService();