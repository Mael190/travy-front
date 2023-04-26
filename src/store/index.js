import { createStore } from "vuex";
import { auth } from "./AuthModule";
import { data } from "./DataModule";
import { dataSocket} from "./SocketModule";

const store = createStore({
  modules: {
    auth,
    data,
    dataSocket
  },
});

export default store;
