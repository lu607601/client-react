import { LOGIN } from "../../actions/types";
/**
 * state
 */
const initState = {
  user: {}
};

/**
 * reducer
 * @param {*} state
 * @param {*} action
 */

export function login(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    default:
      return state;
  }
}
