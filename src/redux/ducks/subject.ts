import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import Api from '../../api/subject';
import {
  State,
  SubjectData,
  Subject,
} from '../../types/subject';

export const Types = {
  LOADING: 'subject/LOADING',
  REQUEST: 'subject/REQUEST',
  CREATE: 'subject/CREATE',
  REMOVE: 'subject/REMOVE',
  SELECT: 'subject/SELECT',
  ERROR: 'subject/ERROR',
  MESSAGE: 'subject/MESSAGE',

};

const INITIAL_STATE:State = {
  loading: false,
  selected_subject_id: 0,
  subjects: [],
  error: '',
  message: '',
};

export const Creators = {
  request: (matter_id:number) => async (dispatch: Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.request(matter_id);
      dispatch({ type: Types.REQUEST, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao buscar os Assuntos.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  create: (data:SubjectData) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.addSubject(data);
      dispatch({ type: Types.CREATE, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao criar o Assunto.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  remove: (subject_id:number) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      await Api.removeSubject(subject_id);
      dispatch({ type: Types.REMOVE, response: subject_id });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao remover o Assunto.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  select: (subject_id:number) => ({ type: Types.SELECT, subject_id }),
};
interface ActionLoading {
  type:string,
  response: boolean
}
interface ActionRequest{
  type:string,
  response: Subject[]
}
interface ActionCreate{
  type:string,
  response: Subject
}
interface ActionRemove{
  type:string,
  response:number
}
interface ActionSelectSubject{
  type:string,
  subject_id: number
}
interface ActionMessage{
  type: string,
  response:string
}
const loading = (state = INITIAL_STATE, action:ActionLoading) => ({ ...state, loading: action.response });
const request = (state = INITIAL_STATE, action: ActionRequest) => ({ ...state, subjects: action.response });
const create = (state = INITIAL_STATE, action:ActionCreate) => ({ ...state, subjects: [...state.subjects, action.response] });
const remove = (state = INITIAL_STATE, action:ActionRemove) => {
  const filtered = state.subjects.filter((subject) => subject.id !== action.response);
  return { ...state, subjects: filtered };
};
const select = (state = INITIAL_STATE, action:ActionSelectSubject) => ({ ...state, selected_subject_id: action.subject_id });
const error = (state = INITIAL_STATE, action : ActionMessage) => ({ ...state, error: action.response });
const message = (state = INITIAL_STATE, action: ActionMessage) => ({ ...state, message: action.response });


const reducer = {
  [Types.LOADING]: loading,
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
  [Types.SELECT]: select,
  [Types.ERROR]: error,
  [Types.MESSAGE]: message,
};

export default createReducer(INITIAL_STATE, reducer);
