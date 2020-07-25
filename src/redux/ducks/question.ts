import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import {
  QuestionResponse, Action, Data, CreateAction,
} from '../../types/questions';
import Api from '../../api/questions';

export const Types = {
  REQUEST: 'questions/REQUEST',
  CREATE: 'questions/CREATE',
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
const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
};

export default createReducer(INITIAL_STATE, reducer);
