import * as types from '../constants/actionTypes';
import { getFilms, getFilmsOfTheDay } from "../services/FilmApi";

export const setFilms = films => ({
  type: types.SET_FILMS,
  films
});

export const setFilmsOfTheDay = filmsOfTheDay => ({
  type: types.SET_FILMS_OF_THE_DAY,
  filmsOfTheDay
});

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter
});

const mapFilterToParams = (filter) => ({
  director_like: filter.director.name,
  year_gte: filter.year.start,
  year_lte: filter.year.end,
  rating_gte: filter.rating.start,
  rating_lte: filter.rating.end
});

export const loadFilms = () => {
  return (dispatch, getState) => {
    const params = mapFilterToParams(getState().filter);

    dispatch(increaseLoading());

    return getFilms(params)
      .then(films => dispatch(setFilms(films)))
      .finally(() => dispatch(decreaseLoading()));
  }
};

export const loadFilmsOfTheDay = () => {
  return (dispatch) => {
    dispatch(increaseLoading());

    return getFilmsOfTheDay()
      .then(filmsOfTheDay => dispatch(setFilmsOfTheDay(filmsOfTheDay)))
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

