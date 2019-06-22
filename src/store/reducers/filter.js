import { TOGGLE_FILTER } from "../actions";

const defaultFilter = {
  isVisible : false,
  directors: [],
  yearsPeriod: {
    start: null,
    end: null
  },
  rating: null
};

export const filter = (state = defaultFilter, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {...state, isVisible: !state.isVisible};
    default:
      return state;
  }
};
