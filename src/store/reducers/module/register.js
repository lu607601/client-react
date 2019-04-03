import { REGISTER } from "../../actions/types";
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

export function register(state = initState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
