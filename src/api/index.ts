import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import Storage from '../storage/auth';

const api = axios.create({
  baseURL: 'https://api.studyneo.com.br',

  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});

api.interceptors.request.use(async (request) => {
  const token = await Storage.getUserToken();
  if (token !== null) {
    const jwt = JSON.parse(token);

    request.headers.Authorization = `Bearer ${jwt}`;
  }
  return request;
});
interface Error {
  field: string;
  message: string;
}

api.interceptors.response.use((response) => response, (error) => {
  const { addToast } = useToasts();
  if (error.response && error.response.status === 401) {
    const errors = error.response.data;
    errors.forEach(({ field, message }: Error) => {
      addToast(message, { appearance: 'error', autoDismiss: true });
    });
    return error;
  }
  addToast('Ops, ocorreu algum erro...', { appearance: 'error', autoDismiss: true });
  Storage.setUserToken('');
  return error;
});

export default api;
