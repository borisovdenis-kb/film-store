const URL = 'http://localhost:3004';

const getFilms = (params = {}) => {
  let url = `${URL}/films`;
  const urlQuery = Object.entries(params).map(item => {
    const [value, key] = item;

    return `${key}=${value}`;
  }).join('&');

  url = `${url}${urlQuery ? '?' : ''}${urlQuery}`;

  return fetch(url)
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
