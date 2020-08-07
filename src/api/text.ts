import api from '.';
import Storage from '../storage/auth';
import { Text } from '../contexts/SupportText';

const deleteText = async (text_id:number) => {
  await api.delete(`/texts/${text_id}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
};


const updateText = async (text_id:number, data: Text) => {
  const response = await api.put(`/texts/${text_id}`, data, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
  return response.data;
};
const Api = {
  deleteText,
  updateText,
};

export default Api;
