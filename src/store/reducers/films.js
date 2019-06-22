import {SET_FILMS} from "../actions";

export const films = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS:
      return action.films;
    default:
      return state;
  }
};
