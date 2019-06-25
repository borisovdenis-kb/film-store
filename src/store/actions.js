import * as types from '../constants/actionTypes';
import { getFilms } from "../services/FilmApi";

export const setFilms = films => ({
  type: types.SET_FILMS,
  films
});

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter
});

export const loadFilms = (params) => {
  return (dispatch) => {
    dispatch(increaseLoading());

    return getFilms(params)
      .then(films => dispatch(setFilms(films)))
      .finally(() => dispatch(decreaseLoading()));
  }
};

export const setFilterVisibility = (isFilterVisible) => ({
  type: types.SET_FILTER_VISIBILITY,
  isFilterVisible
});

export const increaseLoading = () => ({
  type: types.INCREASE_LOADING
});

export const decreaseLoading = () => ({
  type: types.DECREASE_LOADING
});

