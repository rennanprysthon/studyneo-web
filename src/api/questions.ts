import api from '.';
import { Data } from '../types/questions';

export async function requestQuestions(data:Data) {
  try {
    const response = await api.get('/questions', {
      params: data,
    });
    return response.data.data;
  } catch (err) {
    return [];
  }
}
interface Question{
  enunciado: string;
  subject_id: number
}
export async function createQuestion(data:Question) {
  return {};
}
