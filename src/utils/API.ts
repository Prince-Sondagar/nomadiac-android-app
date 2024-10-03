import axios from 'axios';
import Config from 'react-native-config';
import {getToken} from '.';

const axiosClient = axios.create({
  baseURL: Config.BACKEND_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async config => {
    try {
      const token = await getToken();
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
