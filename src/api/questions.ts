import api from '.';
import { State, Data } from '../types/questions';

const requestQuestions = async (page:number) => {
  const response = await api.get<State>(`/questions?page=${page}`);
  return response.data;
};
const listQuestionsPerSubject = async (subject_id:number, page:number) => {
  const response = await api.get<State>(`/questions/${subject_id}?page=${page}`);
  return response.data;
};
const createQuestion = async (data:Data) => {
  const response = await api.post('/questions', data);
  return response.data;
};

const removeQuestion = async (id:number) => {
  await api.delete(`/questions/${id}`);
};
const getSpecificQuestion = async (id:number) => {
  const response = await api.get<Data>(`/questions/view/${id}`);
  return response.data;
};
const updateQuestion = async (id:number, question:Data) => {
  const response = await api.put<Data>(`/questions/${id}`, question);
  return response.data;
};
const Api = {
  requestQuestions,
  listQuestionsPerSubject,
  createQuestion,
  removeQuestion,
  getSpecificQuestion,
  updateQuestion,
};
export default Api;
