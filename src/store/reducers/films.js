import * as types from '../../constants/actionTypes';

export const films = (state = [], action) => {
  switch (action.type) {
    case types.SET_FILMS:
      return action.films;
    default:
      return state;
  }
};
