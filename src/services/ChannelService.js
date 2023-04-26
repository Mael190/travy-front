import http from "../router/http-common";

class ChannelService {
  getAll() {
    return http.get("/channels");
  }
}

export default new ChannelService();