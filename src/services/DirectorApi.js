import { ApiCreator } from "./api";

const apiCreator = new ApiCreator();

export const getDirectors = (params) => {
  return apiCreator.get('/directors')(params);
};
