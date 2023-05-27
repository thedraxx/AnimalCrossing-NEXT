import axios from "axios";

export const AnimalCrossingAPI = axios.create({
  baseURL: "/api",
});

export default AnimalCrossingAPI;
