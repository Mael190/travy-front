import AuthService from '../services/AuthService';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: {"id":"edce462c-4286-45b0-9435-85776657de83","firstname":"Enzo","lastname":"Grosrec","email":"enzo.gouerec@gmail.com","password":"$2y$10$AUbpnJmDs1NzF3j158sWv.cdIzjf869Rhk9PAETmrU5bdpTSbgqTq","avatar":null,"color":"#DF6060","job":"Développeur Junior","createdAt":"2023-04-21T13:30:38.000Z","updatedAt":"2023-04-21T13:30:38.000Z","organisations":[{"id":"94d0356e-0562-4987-8837-ad9719617802","name":"EPSI","description":"Une école d'informatique","createdAt":"2023-04-21T13:30:38.000Z","updatedAt":"2023-04-21T13:30:38.000Z","user_orga":{"permission":"admin","phoneNumber":"0782457343","startTime":"9:00","endTime":"17:00","createdAt":"2023-04-21T13:30:38.000Z","updatedAt":"2023-04-21T13:30:38.000Z","userId":"edce462c-4286-45b0-9435-85776657de83","organisationId":"94d0356e-0562-4987-8837-ad9719617802"}}]} };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      console.log('userici :>> ', user);
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    }
  }
};