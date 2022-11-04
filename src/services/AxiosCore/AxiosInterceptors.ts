import { AxiosRequestConfig } from 'axios';

const injectJWT = (request: AxiosRequestConfig) => {
  const sessionJWT = `${localStorage.getItem('authtoken')}`;
  if (request.headers == undefined) {
    request.headers = {};
  }
  request.headers['authtoken'] = sessionJWT;
};

export const RequestInterceptor = (request: AxiosRequestConfig) => {
  injectJWT(request);
  return request;
};
