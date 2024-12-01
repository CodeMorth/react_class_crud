import { AxiosRequestConfig } from "axios";
import { axiosGlobal } from "../interceptor/axios.interceptor";

export const generalService = (config: AxiosRequestConfig) => {
  const promise = axiosGlobal(config);
  return promise;
};
