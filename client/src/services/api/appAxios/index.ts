import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Router from 'next/router';
import { toast } from 'react-toastify';

import { ROUTES } from 'src/resources/utils/constants';
import isUndefinedOrNull from 'utils/helpers/isUndefinedOrNull';

import { ERROR_CODES } from './constants';

const axiosConfig: AxiosRequestConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  timeout: 120000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const appAxios: AxiosInstance = axios.create(axiosConfig);

appAxios.interceptors.request.use(
  config => {
    // config some headers if needed
    return config;
  },
  error => Promise.reject(error),
);

appAxios.interceptors.response.use(
  response => response,
  error => {
    if (!error.response?.status) {
      toast.error('An unexpected error has occurred. Please try again later.', { autoClose: 5000 });
      return Promise.reject();
    }

    const { error_code, error_description } = error.response.data?.error ?? {};

    switch (error_code || error.response.status?.toString()) {
    case ERROR_CODES.INTERNAL_SERVER_ERROR:
      Router.push(ROUTES.INTERNAL_SERVER_ERROR);
      break;

    case ERROR_CODES.MODEL_NOT_FOUND:
      Router.replace(ROUTES.ROOT);
      toast.error(error_description, { autoClose: 5000 });
      break;

    default:
      break;
    }

    return Promise.reject(error);
  },
);

function setAppAxiosHeader(key: string, value: string): void {
  if (isUndefinedOrNull(key)) return;

  if (isUndefinedOrNull(value)) {
    delete appAxios.defaults.headers.common[key];
    return;
  }

  appAxios.defaults.headers.common[key] = value;
}

export { axiosConfig, setAppAxiosHeader };

export default appAxios;
