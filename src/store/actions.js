import { getFilms } from "../services/FilmApi";

export const SET_FILMS = 'SET_FILMS';
export const SET_FILTER = 'SET_FILTER';
export const SET_FILTER_VISIBILITY = 'SET_FILTER_VISIBILITY';
export const INCREASE_LOADING = 'INCREASE_LOADING';
export const DECREASE_LOADING = 'DECREASE_LOADING';

export const setFilms = films => ({
  type: SET_FILMS,
  films
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const setFilterVisibility = (isFilterVisible) => ({
  type: SET_FILTER_VISIBILITY,
  isFilterVisible
});

export const increaseLoading = () => ({
  type: INCREASE_LOADING
});

export const decreaseLoading = () => ({
  type: DECREASE_LOADING
});

export const loadFilms = (params) => {
  return (dispatch) => {
    dispatch(increaseLoading());

    return getFilms(params)
      .then(films => dispatch(setFilms(films)))
      .finally(() => dispatch(decreaseLoading()));
  }
};

