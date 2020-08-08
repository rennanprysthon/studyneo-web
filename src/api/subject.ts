import api from '.';

const request = async (matter_id:number) => {
  const response = await api.get(`/subjects/${matter_id}`);
  return response.data;
};

interface Subject{
  title:string,
  matter_id: number
}
const addSubject = async (data:Subject) => {
  const response = await api.post('/subjects', data);
  return response.data;
};
const removeSubject = async (subject_id:number) => {
  await api.delete(`/subjects/${subject_id}`);
};
const Api = {
  request,
  addSubject,
  removeSubject,
};

export default Api;
