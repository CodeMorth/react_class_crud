import axios from "axios";

export const axiosGlobal = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 1000 | 5000,
});


axiosGlobal.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosGlobal.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);