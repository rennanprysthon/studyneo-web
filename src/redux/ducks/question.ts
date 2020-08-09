import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import {
  Data, State, Question,
} from '../../types/questions';
import Api from '../../api/questions';

export const Types = {
  REQUEST: 'questions/REQUEST',
  CREATE: 'questions/CREATE',
  REMOVE: 'questions/REMOVE',
  UPDATE: 'questions/UPDATE',
  ERROR: 'questions/ERROR',
  LOADING: 'questions/LOADING',
  MESSAGE: 'questions/MESSAGE',
  RESET_MESSAGES: 'questions/RESET_MESSAGES',
};

const INITIAL_STATE:State = {
  page: 1,
  total: 0,
  lastPage: 1,
  perPage: 10,
  data: [],
  loading: false,
  error: '',
  message: '',
};
export const Creators = {
  request: (page:number) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.requestQuestions(page);
      dispatch({ type: Types.REQUEST, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao buscar as Questões.' });
    } finally {
      dispatch({ type: Types.RESET_MESSAGES });

      dispatch({ type: Types.LOADING, response: false });
    }
  },
  requestFilteredBySubject: (subject_id:number, page:number) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.listQuestionsPerSubject(subject_id, page);
      dispatch({ type: Types.REQUEST, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao buscar os dados da Questão.' });
    } finally {
      dispatch({ type: Types.RESET_MESSAGES });

      dispatch({ type: Types.LOADING, response: false });
    }
  },
  create: (data:Data) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.createQuestion(data);
      dispatch({ type: Types.CREATE, response });
      dispatch({ type: Types.MESSAGE, response: 'A Questão foi criada com sucesso!' });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao criar a Questão.' });
    } finally {
      dispatch({ type: Types.RESET_MESSAGES });

      dispatch({ type: Types.LOADING, response: false });
    }
  },
  remove: (id:number) => async (dispatch: Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      await Api.removeQuestion(id);
      dispatch({ type: Types.REMOVE, response: id });
      dispatch({ type: Types.MESSAGE, response: 'A Questão foi removida com sucesso!' });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao remover a Questão.' });
    } finally {
      dispatch({ type: Types.RESET_MESSAGES });

      dispatch({ type: Types.LOADING, response: false });
    }
  },
  update: (id:number, data:Data) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.updateQuestion(id, data);
      dispatch({ type: Types.UPDATE, response });
      dispatch({ type: Types.MESSAGE, response: 'A Questão foi atualizada com sucesso!' });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao atualizar a Questão.' });
    } finally {
      dispatch({ type: Types.RESET_MESSAGES });

      dispatch({ type: Types.LOADING, response: false });
    }
  },
};


export interface ActionRequest {
  type: string,
  response: State
}
export interface ActionCreate{
  type:string
  response: Question
}
export interface ActionRemove{
  type:string,
  response:number
}
interface ActionLoading{
  type:string,
  response:boolean
}
interface ActionMessage{
  type: string,
  response:string
}
interface ActionResetMessages{
  type: string
}
const request = (state = INITIAL_STATE, action:ActionRequest) => ({ ...state, ...action.response });
const create = (state = INITIAL_STATE, action: ActionCreate) => ({
  ...state,
  data: [...state.data, action.response],
});
const remove = (state = INITIAL_STATE, action:ActionRemove) => {
  const filtered = state.data.filter((question) => question.id !== action.response);
  return {
    ...state,
    data: filtered,
  };
};
const update = (state = INITIAL_STATE, action: ActionCreate) => {
  const updatedData = action.response;
  const filteredData = state.data.map((question) => (question.id === updatedData.id ? updatedData : question));
  return {
    ...state,
    data: filteredData,
  };
};
const loading = (state = INITIAL_STATE, action:ActionLoading) => ({ ...state, loading: action.response });
const error = (state = INITIAL_STATE, action : ActionMessage) => ({ ...state, error: action.response });
const message = (state = INITIAL_STATE, action: ActionMessage) => ({ ...state, message: action.response });
const reset = (state = INITIAL_STATE, action: ActionResetMessages) => ({ ...state, error: undefined, message: undefined });

const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
  [Types.UPDATE]: update,
  [Types.LOADING]: loading,
  [Types.ERROR]: error,
  [Types.MESSAGE]: message,
  [Types.RESET_MESSAGES]: reset,
};

export default createReducer(INITIAL_STATE, reducer);
