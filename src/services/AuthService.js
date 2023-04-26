import axios from 'axios';

class AuthService {
    login(user) {
      return axios
        .post(process.env.VUE_APP_URL_TRAVY_BACK  + 'auth/signin', {
          email: user.email,
          password: user.password
        })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem('token', JSON.stringify(response.data.accessToken));
          }
          if (response.data.organisations.length > 0) {
            localStorage.setItem('organisations', JSON.stringify(response.data.organisations));
            localStorage.setItem('currentOrganisation', JSON.stringify(response.data.organisations[0]));
          }
          return response.data.user;
        });
    }
    logout() {
      localStorage.removeItem('user');
    }
}

export default new AuthService();