import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `http://${process.env.REACT_APP_BASE_SERVER_ADDRESS}/api`,
  headers: { "Content-Type": "application/json" },
});
