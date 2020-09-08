import axios from 'axios';
import Storage from '../storage/auth';

const api = axios.create({
  // baseURL: 'https://api.studyneo.com.br',
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});

api.interceptors.request.use(async (request) => {
  const token = await Storage.getUserToken();
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});
// interface Error {
//   field: string;
//   message: string;
// }


export default api;
