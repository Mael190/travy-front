import http from "../router/http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }
}

export default new UserService();