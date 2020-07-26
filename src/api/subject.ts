import api from '.';
import Storage from '../storage/auth';

const request = async (matter_id:number) => {
  const response = await api.get(`/subjects/${matter_id}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
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
      },
    });
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    return {};
  }
};
const removeSubject = async (subject_id:number) => {
  try {
    await api.delete(`/subjects/${subject_id}`, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
      },
    });
  } catch (err) {
    Storage.setUserToken('');
  }
};
const Api = {
  request,
  addSubject,
  removeSubject,
};

export default Api;
