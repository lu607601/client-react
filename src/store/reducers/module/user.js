import { REGISTER, LOGIN } from "../../actions/types";
/**
 * state
 */
const initState = {};

/**
 * reducer
 * @param {*} state
 * @param {*} action
 */
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
