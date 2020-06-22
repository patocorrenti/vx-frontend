import api from './api'
import authHeader from './auth-header'

class ScenarioService {
  async getScenario(id) {
    const response = await api
      .get(`scenarios/${id}`, { headers: authHeader() });
    return (response.data);
  }
}

export default new ScenarioService();