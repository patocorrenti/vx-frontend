import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;

class ScenarioService {
  getScenario(id) {
    return axios
      .get(API_URL + `scenarios/${id}`, { headers: authHeader() })
      .then(response => (response.data))
  }
}

export default new ScenarioService();