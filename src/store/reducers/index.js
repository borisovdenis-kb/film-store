import { combineReducers } from "redux";
import { films } from "./films";
import { filter } from "./filter";

export const appReducer = combineReducers({
  films,
  filter
});
