import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'token/', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.refresh) {
          localStorage.setItem('refresh', JSON.stringify(response.data.refresh));
        }
        return response.data;
      })
  }

  logout() {
    localStorage.removeItem('refresh');
  }

  register(user) {
    return axios.post(API_URL + 'signup/', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();