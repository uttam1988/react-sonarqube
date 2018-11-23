import { combineReducers } from "redux";
import { departments } from "./departments";
import { users } from "./users";

export const rootReducer = combineReducers({
  departments,
  users
});
