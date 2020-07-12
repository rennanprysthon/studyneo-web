import api from '.';

const request = async (matter_id:number) => {
  const response = await api.get(`/subjects?matter_id=${matter_id}`);
  return response.data;
};

const Api = {
  request,
};

export default Api;
