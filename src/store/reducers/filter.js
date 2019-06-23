import { SET_FILTER_VISIBILITY, SET_FILTER } from "../actions";

const defaultFilter = {
  director: '',
  year: {
    start: '',
    end: ''
  },
  rating: {
    start: '',
    end: ''
  }
};

export const filter = (state = defaultFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {...state, ...action.filter};
    default:
      return state;
  }
};

export const isFilterVisible = (state = false, action) => {
  switch (action.type) {
    case SET_FILTER_VISIBILITY:
      return action.isFilterVisible;
    default:
      return state;
  }
};
