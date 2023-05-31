import axios from "axios";

export const GetAnimalCrossingAPI = axios.create({
  baseURL: "http://acnhapi.com/v1/",
});

export default GetAnimalCrossingAPI;
