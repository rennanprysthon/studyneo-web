import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import Api from '../../api/subject';
import {
  Action,
  CreateAction,
  State,
  SubjectData
} from '../../types/subject';

export const Types = {
  LOADING: 'subject/LOADING',
  REQUEST: 'subject/REQUEST',
  CREATE: 'subject/CREATE',
  REMOVE: 'subject/REMOVE',
  SELECT: 'subject/SELECT',
};


export const Creators = {
  request: (matter_id:number) => async (dispatch: Redux.Dispatch) => {
    const response = await Api.request(matter_id);
    dispatch({ type: Types.REQUEST, response });
  },
  create: (data:SubjectData) => async (dispatch:Redux.Dispatch) => {
    dispatch({ type: Types.LOADING, isLoading: true });
    const response = await Api.addSubject(data);
    dispatch({ type: Types.LOADING, isLoading: false });
    dispatch({ type: Types.CREATE, response });
  },
  remove: (subject_id:number) => async (dispatch:Redux.Dispatch) => {
    await Api.removeSubject(subject_id);
    dispatch({ type: Types.REMOVE, response: subject_id });
  },
  select: (subject_id:number) => ({ type: Types.SELECT, subject_id }),
};
const INITIAL_STATE:State = {
  loading: false,
  selected_subject_id: 0,
  subjects: [],
};
const loading = (state = INITIAL_STATE, action:{type:string, isLoading:boolean}) => ({ ...state, loading: action.isLoading });
const request = (state = INITIAL_STATE, action: Action) => ({ ...state, subjects: action.response });
const create = (state = INITIAL_STATE, action:CreateAction) => ({ ...state, subjects: [...state.subjects, action.response] });
const remove = (state = INITIAL_STATE, action:{type:string, response:number}) => {
  const filtered = state.subjects.filter((subject) => subject.id !== action.response);
  return { ...state, subjects: filtered };
};

interface SelectSubjectAction{
  type:string,
  subject_id: number
}
const select = (state = INITIAL_STATE, action:SelectSubjectAction) => ({ ...state, selected_subject_id: action.subject_id });
const reducer = {
  [Types.LOADING]: loading,
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
  [Types.SELECT]: select,
};

export default createReducer(INITIAL_STATE, reducer);
