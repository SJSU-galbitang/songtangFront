import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const customAxios: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

interface IResponseInterceptor {
  (response: AxiosResponse): AxiosResponse;
}

interface IErrorInterceptor {
  (error: AxiosError): Promise<never>;
}

customAxios.interceptors.response.use(
  ((response: AxiosResponse): AxiosResponse => response) as IResponseInterceptor,
  ((error: AxiosError): Promise<never> => {
    if (error.response) {
      console.error(`API 에러 [${error.response.status}]:`, error.response.data);
    }
    return Promise.reject(error);
  }) as IErrorInterceptor,
);

export default customAxios;
