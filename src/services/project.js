import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;

class ProjectService {
  getProjects() {
    return axios
      .get(API_URL + 'projects/', { headers: authHeader() })
      .then(response => (response.data))
  }
}

export default new ProjectService();