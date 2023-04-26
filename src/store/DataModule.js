import UserService from '../services/UserService';
import ChannelService from '../services/ChannelService';
import MessageService from '../services/MessageService';

const initialState = {
    users: [],
    channels: [],
    messages: [],
    isLoaded: false,
    userSelected: null
};

export const data = {
  namespaced: true,
  state: initialState,
  actions: {
      async initializeValue({ commit }) {
        try {
            const [users, channels, messages] = await Promise.all([
                UserService.getAll(),
                ChannelService.getAll(),
                MessageService.getAll()
            ]);
            commit('setData', {users: users.data, channels: channels.data, messages: messages.data})
        }
        catch (error) {
            console.log('error :>> ', error);
        }
      }
  },
  mutations: {
    setData(state, data){
        state.users = data.users;
        state.channels = data.channels;
        state.messages = data.messages;
        state.isLoaded = true;
    },
    setUserSelected(state, data){
      state.userSelected = data;
    }
  }
};