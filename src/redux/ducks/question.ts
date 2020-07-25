import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import {
  QuestionResponse, Action, Data, CreateAction,
} from '../../types/questions';
import Api from '../../api/questions';

export const Types = {
  REQUEST: 'questions/REQUEST',
  CREATE: 'questions/CREATE',
  REMOVE: 'questions/REMOVE',
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
    dispatch({ type: Types.CREATE, response: id });
  },
};

const INITIAL_STATE:QuestionResponse = {
  page: 1,
  total: 0,
  lastPage: 1,
  perPage: 10,
  data: [],
};

const request = (state = INITIAL_STATE, action:Action) => action.response;
const create = (state = INITIAL_STATE, action: CreateAction) => ({
  ...state,
  data: [...state.data, action.response],
});
const remove = (state = INITIAL_STATE, action:{type:string, response:number}) => {
  const filteredData = state.data.filter((question) => question.id !== action.response);
  return {
    ...state,
    data: filteredData,
  };
};
const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
};

export default createReducer(INITIAL_STATE, reducer);
