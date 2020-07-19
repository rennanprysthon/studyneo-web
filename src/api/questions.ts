import api from '.';
import { QuestionResponse } from '../types/questions';

const requestQuestions = async (page:number) => {
  try {
    const response = await api.get<QuestionResponse>(`/questions?page=${page}`);
    return response.data;
  } catch (err) {
    return {};
  }
};
const listQuestionsPerSubject = async (subject_id:number, page:number) => {
  try {
    const response = await api.get<QuestionResponse>(`/questions/${subject_id}?page=${page}`);
    return response.data;
  } catch (err) {
    return {};
  }
};
const Api = {
  requestQuestions,
  listQuestionsPerSubject,
};
export default Api;
