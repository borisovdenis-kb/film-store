export const SET_FILMS = 'SET_FILMS';
export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const setFilms = films => ({
  type: SET_FILMS,
  films
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});
