const URL = 'http://localhost:3004';

const getFilms = () => {
  return fetch(`${URL}/films`)
    .then(response => response.json());
};

const getFilmById = (id) => {
  return fetch(`${URL}/films/${id}`)
    .then(response => response.json());
};

const getFilmByGenre = (genre) => {
  return fetch(`${URL}/films/?genres_like=${genre}`)
    .then(response => response.json());
};

export {
  getFilms,
  getFilmById,
  getFilmByGenre
};
