import { combineReducers } from "redux";
import { films } from "./films";
import { filter, isFilterVisible } from "./filter";

export const appReducer = combineReducers({
  films,
  filter,
  isFilterVisible
});
