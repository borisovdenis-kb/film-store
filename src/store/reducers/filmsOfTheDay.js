import * as types from '../../constants/actionTypes';

export const filmsOfTheDay = (state = [], action) => {
  switch (action.type) {
    case types.SET_FILMS_OF_THE_DAY:
      return action.filmsOfTheDay;
    default:
      return state;
  }
};
