import api from '.';


const requestOverview = async (subject_id:number, page = 1) => {
  const response = await api.get(`/overview/${subject_id}?page=${page}`);
  return response.data;
};
const Api = {
  requestOverview,
};
export default Api;
