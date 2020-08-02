import api from '.';
import { State, Data } from '../types/questions';
import Storage from '../storage/auth';

const requestQuestions = async (page:number) => {
  try {
    const response = await api.get<State>(`/questions?page=${page}`, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    return {};
  }
};
const listQuestionsPerSubject = async (subject_id:number, page:number) => {
  try {
    const response = await api.get<State>(`/questions/${subject_id}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    return {};
  }
};
const createQuestion = async (data:Data) => {
  try {
    const response = await api.post('/questions', data, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    Storage.setUserToken('');
    return {};
  }
};

const removeQuestion = async (id:number) => {
  try {
    await api.delete(`/questions/${id}`, {
      headers: {
        Authorization: `Bearer ${Storage.getUserToken()}`,
      },
    });
    return true;
  } catch (err) {
    Storage.setUserToken('');
    return false;
  }
};
const getSpecificQuestion = async (id:number) => {
  const response = await api.get<Data>(`/questions/view/${id}`, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
  return response.data;
};
const updateQuestion = async (id:number, question:Data) => {
  const response = await api.put<Data>(`/questions/${id}`, question, {
    headers: {
      Authorization: `Bearer ${Storage.getUserToken()}`,
    },
  });
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
