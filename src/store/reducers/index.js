import { combineReducers } from "redux";
import { filmsOfTheDay } from "./filmsOfTheDay";
import { films } from "./films";
import { filter, isFilterVisible } from "./filter";
import { isLoading } from "./isLoading";

export const appReducer = combineReducers({
  films,
  filmsOfTheDay,
  filter,
  isFilterVisible,
  isLoading
});
