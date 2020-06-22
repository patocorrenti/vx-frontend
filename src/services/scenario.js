import api from './api'

class ScenarioService {

  async getScenario(id) {
    const response = await api.get(`scenarios/${id}/`)
    return (response.data);
  }

  async changeStatus(id, status) {
    const response = await api.patch(`scenarios/${id}/`, { 'status': status });
    return (response.data);
  }

}

export default new ScenarioService();