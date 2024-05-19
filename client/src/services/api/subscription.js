import { axiosClient } from "../axios";

export class Subscription {
  static subscribeUser(email) {
    return axiosClient.post("/subscribe", { email });
  }
}
