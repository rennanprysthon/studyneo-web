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

const removeQuestion = async (id:number) => {
  try {
    const response = await api.delete(`/questions/${id}`, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
        refresh_token: Storage.getUserRefreshToken(),
      },
    });
    Storage.setUserToken(response.headers.token);
    Storage.setUserRefreshToken(response.headers.refresh_token);
    return true;
  } catch (err) {
    return false;
  }
};
const Api = {
  requestQuestions,
  listQuestionsPerSubject,
  createQuestion,
  removeQuestion,
};
export default Api;
