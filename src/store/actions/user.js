import { LOGIN, REGISTER, LOGIN_OUT } from "./types";
import { ajax } from "../../ajax.js";
export const register = postData => dispatch => {
  ajax.post("/api/register", postData).then(function(res) {
    dispatch({
      type: REGISTER,
      payload: res.data.data
    });
  });
};

export const login = postData => dispatch => {
  ajax.post("/api/login", postData).then(function(res) {
    dispatch({
      type: LOGIN,
      payload: res.data.data
    });
  });
};

export const checkLogin = () => dispatch => {
  ajax.get("/api/checkLogin").then(function(res) {
    dispatch({
      type: LOGIN,
      payload: res.data.data
    });
  });
};

export const logout = () => dispatch => {
  ajax.get("/api/loginout").then(function(res) {
    dispatch({
      type: LOGIN_OUT,
      payload: res.data.data
    });
  });
};
