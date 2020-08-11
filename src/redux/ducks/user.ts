import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import {
  State,
} from '../../types/user';
import Api from '../../api/user';


export const Types = {
  REQUEST: 'user/REQUEST',
  ERROR: 'user/ERROR',
  LOADING: 'user/LOADING',
  MESSAGE: 'user/MESSAGE',
  RESET_MESSAGES: 'user/RESET_MESSAGES',
};

const INITIAL_STATE: State = {
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
      const response = await Api.listUsers(page);
      dispatch({ type: Types.REQUEST, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao buscar usuários.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
      dispatch({ type: Types.RESET_MESSAGES });
    }
  },
};

export interface ActionRequest {
  type: string,
  response: State
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

const request = (state = INITIAL_STATE, action: ActionRequest) => action.response;
const loading = (state = INITIAL_STATE, action:ActionLoading) => ({ ...state, loading: action.response });
const error = (state = INITIAL_STATE, action : ActionMessage) => ({ ...state, error: action.response });
const message = (state = INITIAL_STATE, action: ActionMessage) => ({ ...state, message: action.response });
const reset = (state = INITIAL_STATE, action: ActionResetMessages) => ({ ...state, error: undefined, message: undefined });

const reducer = {
  [Types.REQUEST]: request,
  [Types.LOADING]: loading,
  [Types.ERROR]: error,
  [Types.MESSAGE]: message,
  [Types.RESET_MESSAGES]: reset,
};
export default createReducer(INITIAL_STATE, reducer);
