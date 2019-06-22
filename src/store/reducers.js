import { combineReducers } from "redux";
import { SET_FILMS } from "./actions";

const films = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS:
      return action.films;
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  films
});
