import io from 'socket.io-client';
let socket = null;

const initialState = {
    connected: false
};

export const dataSocket = {
  namespaced: true,
  state: initialState,
  actions: {
    connect({ commit }) {
        socket = io(process.env.VUE_APP_URL_TRAVY_BACK);
        commit('setConnected', true)
    },
    disconnect({ commit }) {
        socket.on('disconnect', () => {
        commit('setConnected', false)
    })}
  },
  mutations: {
    setConnected(state, status) {
        state.connected = status
      }
  },
  getters: {
    connected(state) {
        return state.connected
      }
  }
};