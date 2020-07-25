import api from '.';
import { QuestionResponse, Data } from '../types/questions';
import Storage from '../storage/auth';

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
const createQuestion = async (data:Data) => {
  try {
    const response = await api.post('/questions', data, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
        refresh_token: Storage.getUserRefreshToken(),
      },
    });
    Storage.setUserToken(response.headers.token);
    Storage.setUserRefreshToken(response.headers.refresh_token);
    return response.data;
  } catch (err) {
    return {};
  }
};
const Api = {
  requestQuestions,
  listQuestionsPerSubject,
  createQuestion,
};
export default Api;
