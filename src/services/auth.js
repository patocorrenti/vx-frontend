import api from './api';

class AuthService {
  async login(user) {
    const response = await api
      .post('token/', {
        username: user.username,
        password: user.password
      });
    if (response.data.access) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return api.post('signup/', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();