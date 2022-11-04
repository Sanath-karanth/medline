import axios from 'axios';
import { RequestInterceptor } from './AxiosInterceptors';

const axiosInstance = axios.create({
  baseURL: '/',
  timeout: 18000,
});

axiosInstance.interceptors.request.use(RequestInterceptor);

export default axiosInstance;
