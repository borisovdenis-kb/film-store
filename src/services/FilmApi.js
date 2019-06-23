import { ApiCreator } from "./api";

const apiCreator = new ApiCreator(URL);

const getFilms = ({params = {}} = {}) => {
  return apiCreator.get('/films')(params);
};

const getFilmById = (id) => {
  return apiCreator.get('/films/:id')({id});
};

const getFilmByFilter = ({params = {}} = {}) => {
  return apiCreator.get('/films')(params);
};

export {
  getFilms,
  getFilmById,
  getFilmByFilter
};
