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

const removeOverview = async (id:number) => {
  await api.delete(`/overviews/${id}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
};
const getSpecificOverview = async (id:number) => {
  const response = await api.get(`/overviews/view/${id}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
  return response.data;
};
const updateOverview = async (id: number, data:Data) => {
  const response = await api.put(`/overviews/${id}`, data, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
  return response.data;
};
const Api = {
  requestOverview,
  createOverview,
  removeOverview,
  getSpecificOverview,
  updateOverview,
};
export default Api;
