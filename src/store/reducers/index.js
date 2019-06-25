import { combineReducers } from "redux";
import { films } from "./films";
import { filter, isFilterVisible } from "./filter";
import { isLoading } from "./isLoading";

export const appReducer = combineReducers({
  films,
  filter,
  isFilterVisible,
  isLoading
});
