import axios from "axios";
import { message } from "antd";
/**
 * baseUrl 开发环境和pro环境
 */
const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
export const ajax = axios.create({
  baseURL: baseURL,
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
