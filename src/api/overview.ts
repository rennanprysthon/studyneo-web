import api from '.';
import { Data } from '../types/overview';
import Storage from '../storage/auth';

const requestOverview = async (subject_id:number, page = 1) => {
  const response = await api.get(`/overviews/${subject_id}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
  return response.data;
};

const createOverview = async (data:Data) => {
  const response = await api.post('/overviews', data, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
  return response.data;
};

const Api = {
  requestOverview,
  createOverview,
};
export default Api;
