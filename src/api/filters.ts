import { Area } from '../types/filters';
import Storage from '../storage/auth';

import api from '.';

const requestFilters = async () => {
  try {
    const response = await api.get<Area[]>('/areas', {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    return [];
  }
};

const Api = {
  requestFilters,
};
export default Api;
