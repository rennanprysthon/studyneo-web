import api from '.';
import Storage from '../storage/auth';


const deleteText = async (text_id:number) => {
  await api.delete(`/texts/${text_id}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
};


const Api = {
  deleteText,
};

export default Api;
