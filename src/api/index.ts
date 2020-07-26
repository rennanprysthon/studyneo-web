import axios from 'axios';

const api = axios.create({
  baseURL: 'http://67.205.162.29',

  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
// api.interceptors.request.use(
//   (config) => config,
//   (err) => err,
// );
export default api;
