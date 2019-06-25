import * as types from '../../constants/actionTypes';

export const isLoading = (state = 0, action) => {
  switch (action.type) {
    case types.INCREASE_LOADING:
      return state + 1;
    case types.DECREASE_LOADING:
      return Math.max(state - 1, 0);
    default:
      return state;
  }
};
