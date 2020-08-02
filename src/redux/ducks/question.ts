import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import {
  Action, Data, CreateAction, State,
} from '../../types/questions';
import Api from '../../api/questions';

export const Types = {
  REQUEST: 'questions/REQUEST',
  CREATE: 'questions/CREATE',
  REMOVE: 'questions/REMOVE',
  UPDATE: 'questions/UPDATE',
};

export const Creators = {
  request: (page:number) => async (dispatch:Redux.Dispatch) => {
    const response = await Api.requestQuestions(page);
    dispatch({ type: Types.REQUEST, response });
  },
  requestFilteredBySubject: (subject_id:number, page:number) => async (dispatch:Redux.Dispatch) => {
    const response = await Api.listQuestionsPerSubject(subject_id, page);
    dispatch({ type: Types.REQUEST, response });
  },
  create: (data:Data) => async (dispatch:Redux.Dispatch) => {
    const response = await Api.createQuestion(data);
    dispatch({ type: Types.CREATE, response });
  },
  remove: (id:number) => async (dispatch: Redux.Dispatch) => {
    await Api.removeQuestion(id);
    dispatch({ type: Types.REMOVE, response: id });
  },
  update: (id:number, data:Data) => async (dispatch:Redux.Dispatch) => {
    const response = await Api.updateQuestion(id, data);
    dispatch({ type: Types.UPDATE, response });
  },
};

const INITIAL_STATE:State = {
  page: 1,
  total: 0,
  lastPage: 1,
  perPage: 10,
  data: [],
};

const request = (state = INITIAL_STATE, action:Action) => ({ ...state, ...action.response });
const create = (state = INITIAL_STATE, action: CreateAction) => ({
  ...state,
  data: [...state.data, action.response],
});
const remove = (state = INITIAL_STATE, action:{type:string, response:number}) => {
  const filtered = state.data.filter((question) => question.id !== action.response);
  return {
    ...state,
    data: filtered,
  };
};
const update = (state = INITIAL_STATE, action: CreateAction) => {
  const updatedData = action.response;
  const filteredData = state.data.map((question) => (question.id === updatedData.id ? updatedData : question));
  return {
    ...state,
    data: filteredData,
  };
};
const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
  [Types.UPDATE]: update,
};

export default createReducer(INITIAL_STATE, reducer);
