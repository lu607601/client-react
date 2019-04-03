import { LOGIN, REGISTER } from "./types";
import { ajax } from "../../ajax.js";
export const register = postData => dispatch => {
  ajax.post("/users/register", postData).then(function(res) {
    dispatch({
      type: REGISTER,
      payload: res.data.data
    });
  });
};

export const login = postData => dispatch => {
  ajax.post("/users/login", postData).then(function(res) {
    dispatch({
      type: LOGIN,
      payload: res.data.data
    });
  });
};

export const checkLogin = () => dispatch => {
  ajax.get("/users/checkLogin").then(function(res) {
    dispatch({
      type: LOGIN,
      payload: res.data.data
    });
  });
};
