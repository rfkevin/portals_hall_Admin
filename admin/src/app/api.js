import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const createNews = (data, config) => API.post("/news/add", data, config);
export const createProducts = (data, config) => API.post("/Products/add", data, config);
