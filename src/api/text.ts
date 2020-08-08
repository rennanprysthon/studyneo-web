import api from '.';
import { Text } from '../contexts/SupportText';

const deleteText = async (text_id:number) => {
  await api.delete(`/texts/${text_id}`);
};


const updateText = async (text_id:number, data: Text) => {
  const response = await api.put(`/texts/${text_id}`, data);
  return response.data;
};
const Api = {
  deleteText,
  updateText,
};

export default Api;
