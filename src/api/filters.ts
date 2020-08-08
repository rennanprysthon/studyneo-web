import { Area } from '../types/filters';

import api from '.';

const requestFilters = async () => {
  const response = await api.get<Area[]>('/areas');
  return response.data;
};

const Api = {
  requestFilters,
};
export default Api;
