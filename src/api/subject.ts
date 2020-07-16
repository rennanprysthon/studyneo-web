import api from '.';
import Storage from '../storage/auth';

const request = async (matter_id:number) => {
  const response = await api.get(`/subjects/${matter_id}`);
  return response.data;
};

interface Subject{
  title:string,
  matter_id: number
}
const addSubject = async (data:Subject) => {
  try {
    const response = await api.post('/subjects', data, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
        refresh_token: Storage.getUserRefreshToken(),
      },
    });
    console.log(response.headers);
    Storage.setUserToken(response.headers.token);
    Storage.setUserRefreshToken(response.headers.refresh_token);
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    Storage.setUserRefreshToken('');
    return {};
  }
};
const removeSubject = async (subject_id:number) => {
  try {
    const response = await api.delete(`/subjects/${subject_id}`, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
        refresh_token: Storage.getUserRefreshToken(),
      },
    });
    Storage.setUserToken(response.headers.token);
    Storage.setUserRefreshToken(response.headers.refresh_token);
  } catch (err) {
    Storage.setUserToken('');
    Storage.setUserRefreshToken('');
  }
};
const Api = {
  request,
  addSubject,
  removeSubject,
};

export default Api;
