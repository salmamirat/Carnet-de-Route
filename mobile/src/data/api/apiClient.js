import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.10:3001/api",
  timeout: 10000,
});

export default apiClient;