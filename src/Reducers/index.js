import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";
import UserReducer from "./UsersReducer";

export default combineReducers({
  UserState: UserReducer,
  routing
});
