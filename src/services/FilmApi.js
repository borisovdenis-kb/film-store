const URL = 'http://localhost:3004';

const getFilms = () => {
  return fetch(`${URL}/films`)
    .then(response => response.json());
};

const getFilmById = (id) => {
  return fetch(`${URL}/films/${id}`)
    .then(response => response.json());
};

export {
  getFilms,
  getFilmById
};
