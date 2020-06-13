import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  (config) => config,
  (err) => err,
);

export default api;
