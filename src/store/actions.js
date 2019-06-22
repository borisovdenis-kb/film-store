export const SET_FILMS = 'SET_FILMS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const setFilms = films => ({
  type: SET_FILMS,
  films
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});
