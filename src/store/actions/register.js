import { REGISTER } from "./types";
import { ajax } from "../../ajax.js";
export const register = postData => dispatch => {
  ajax.post("/api/register", postData).then(function(res) {
    dispatch({
      type: REGISTER,
      payload: res.data.data
    });
  });
};
