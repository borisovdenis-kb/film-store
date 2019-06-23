export const SET_FILMS = 'SET_FILMS';
export const SET_FILTER = 'SET_FILTER';
export const SET_FILTER_VISIBILITY = 'SET_FILTER_VISIBILITY';

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
