import { LOGIN } from "./types";
import { ajax } from "../../ajax.js";
export const login = postData => dispatch => {
  ajax.post("/users/login", postData).then(function(res) {
    dispatch({
      type: LOGIN,
      payload: res.data.data
    });
  });
};
