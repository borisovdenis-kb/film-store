import * as types from '../../constants/actionTypes';

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
    case types.SET_FILTER:
      return {...state, ...action.filter};
    default:
      return state;
  }
};

export const isFilterVisible = (state = false, action) => {
  switch (action.type) {
    case types.SET_FILTER_VISIBILITY:
      return action.isFilterVisible;
    default:
      return state;
  }
};
