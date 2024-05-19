import { axiosClient } from "../axios";

export class Rate {
  static GetCurrentRate() {
    return axiosClient.get("/rate");
  }
}
