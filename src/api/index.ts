import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.LOCAL_BACKEND_IP}:${process.env.LOCAL_BACKEND_PORT}`,

});
export default api;
