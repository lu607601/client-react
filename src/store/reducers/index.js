import { combineReducers } from "redux-immutable";
import { articles } from "./module/articles";
import { user } from "./module/user";
const rootReducer = combineReducers({
  articles,
  user
});
export default rootReducer;
