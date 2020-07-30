import axios from 'axios';

const api = axios.create({
  baseURL: 'https://studyneo.com.br',

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
