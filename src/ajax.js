import axios from "axios";
import { message } from "antd";
export const ajax = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  withCredentials: true,
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  }
});
ajax.interceptors.response.use(
  response => {
    if (!+response.data.status) {
      message.error(response.data.msg);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
