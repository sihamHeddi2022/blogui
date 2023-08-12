import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://blog-rest-api-negt.onrender.com/api/v1/'
  });
