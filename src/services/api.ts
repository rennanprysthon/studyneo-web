import axios from 'axios';

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

export default api;
