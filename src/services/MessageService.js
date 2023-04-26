import http from "../router/http-common";

class MessageService {
  getAll() {
    return http.get("/messages?startDate=2023-03-01&endDate=2023-04-31");
  }
}

export default new MessageService();