import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import { State, Data, Overview } from '../../types/overview';
import Api from '../../api/overview';

export const Types = {
  REQUEST: 'overview/REQUEST',
  CREATE: 'overview/CREATE',
  REMOVE: 'overview/REMOVE',
  UPDATE: 'overview/UPDATE',
  ERROR: 'overview/ERROR',
  LOADING: 'overview/LOADING',
  MESSAGE: 'overview/MESSAGE',
};

const INITIAL_STATE:State = {
  data: [],
  lastPage: 0,
  page: 0,
  total: 0,
  perPage: 0,
  loading: false,
  error: '',
  message: '',
};
export const Creators = {
  request: (subject_id:number, page: number) => async (dispatch: Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.requestOverview(subject_id, page);
      dispatch({ type: Types.REQUEST, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao buscar os Resumos.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  create: (data:Data) => async (dispatch: Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.createOverview(data);
      dispatch({ type: Types.CREATE, response });
      dispatch({ type: Types.MESSAGE, response: 'o Resumo foi criado com sucesso!' });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao criar o Resumo.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  remove: (id:number) => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      await Api.removeOverview(id);
      dispatch({ type: Types.REMOVE, response: id });
      dispatch({ type: Types.MESSAGE, response: 'o Resumo foi removido com sucesso!' });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao remover o Resumo.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  update: (id:number, data:Data) => async (dispatch: Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.updateOverview(id, data);
      dispatch({ type: Types.UPDATE, response });
      dispatch({ type: Types.MESSAGE, response: 'o Resumo foi atualizado com sucesso!' });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao atualizar o Resumo.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
};
interface ActionRequest{
  type: string,
  response: State
}
interface ActionCreate{
  type: string,
  response: Overview
}
interface ActionRemove{
  type:string
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
const request = (state = INITIAL_STATE, action:ActionRequest) => action.response;
const create = (state = INITIAL_STATE, action:ActionCreate) => ({ ...state, data: [...state.data, action.response] });
const remove = (state = INITIAL_STATE, action:ActionRemove) => {
  const filteredData = state.data.filter((overview) => overview.id !== action.response);
  return {
    ...state,
    data: filteredData,
  };
};
const update = (state = INITIAL_STATE, action:ActionCreate) => {
  const updatedOverview = action.response;
  const filteredData = state.data.map((overview) => (overview.id === updatedOverview.id ? updatedOverview : overview));
  return {
    ...state,
    data: filteredData,
  };
};
const loading = (state = INITIAL_STATE, action:ActionLoading) => ({ ...state, loading: action.response });
const error = (state = INITIAL_STATE, action : ActionMessage) => ({ ...state, error: action.response });
const message = (state = INITIAL_STATE, action: ActionMessage) => ({ ...state, message: action.response });
const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
  [Types.UPDATE]: update,
  [Types.LOADING]: loading,
  [Types.ERROR]: error,
  [Types.MESSAGE]: message,
};
export default createReducer(INITIAL_STATE, reducer);
