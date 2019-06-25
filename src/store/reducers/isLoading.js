import {DECREASE_LOADING, INCREASE_LOADING} from "../actions";

export const isLoading = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_LOADING:
      return state + 1;
    case DECREASE_LOADING:
      return Math.max(state - 1, 0);
    default:
      return state;
  }
};
