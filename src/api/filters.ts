import { Area } from '../types/filters';
import Storage from '../storage/auth';

import api from '.';

const requestFilters = async () => {
  try {
    const response = await api.get<Area[]>('/areas', {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
        refresh_token: Storage.getUserRefreshToken(),
      },
    });
    Storage.setUserToken(response.headers.token);
    Storage.setUserRefreshToken(response.headers.refresh_token);
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    Storage.setUserRefreshToken('');
    return [];
  }
};

const Api = {
  requestFilters,
};
export default Api;
