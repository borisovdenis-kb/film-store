import { TOGGLE_FILTER, SET_FILTER } from "../actions";

const defaultFilter = {
  isVisible : false,
  directors: [],
  year: null,
  rating: null
};

export const filter = (state = defaultFilter, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {...state, isVisible: !state.isVisible};
    case SET_FILTER:
      return {...state, ...action.filter};
    default:
      return state;
  }
};
