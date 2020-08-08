import api from '.';
import { Data } from '../types/overview';

const requestOverview = async (subject_id:number, page = 1) => {
  const response = await api.get(`/overviews/${subject_id}?page=${page}`);
  return response.data;
};

const createOverview = async (data:Data) => {
  const response = await api.post('/overviews', data);
  return response.data;
};

const removeOverview = async (id:number) => {
  await api.delete(`/overviews/${id}`);
};
const getSpecificOverview = async (id:number) => {
  const response = await api.get(`/overviews/view/${id}`);
  return response.data;
};
const updateOverview = async (id: number, data:Data) => {
  const response = await api.put(`/overviews/${id}`, data);
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
