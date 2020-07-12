import api from '.';
import { Data, QuestionResponse } from '../types/questions';

const requestQuestions = async (data:Data) => {
  try {
    const response = await api.get<QuestionResponse>('/questions', {
      params: data,
    });
    return response.data;
  } catch (err) {
    return [];
  }
};
const Api = {
  requestQuestions,
};
export default Api;
