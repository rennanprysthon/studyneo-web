import axios from 'axios';
import Storage from '../storage/auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',

  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});

api.interceptors.request.use(
  (config) => config,
  (err) => err,
);
api.defaults.headers.Authorization = `Bearer ${Storage.getUserToken()}`;
api.defaults.headers.refresh_token = Storage.getUserRefreshToken();
export default api;
