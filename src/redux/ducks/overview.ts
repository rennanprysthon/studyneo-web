import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import { State, Data, Overview } from '../../types/overview';
import Api from '../../api/overview';

export const Types = {
  REQUEST: 'overview/REQUEST',
  CREATE: 'overview/CREATE',
  REMOVE: 'overview/REMOVE',
  UPDATE: 'overview/UPDATE',
};

const INITIAL_STATE:State = {
  data: [],
  lastPage: 0,
  page: 0,
  total: 0,
  perPage: 0,
};
export const Creators = {
  request: (subject_id:number, page: number) => async (dispatch: Redux.Dispatch) => {
    const response = await Api.requestOverview(subject_id, page);
    dispatch({ type: Types.REQUEST, response });
  },
  create: (data:Data) => async (dispatch: Redux.Dispatch) => {
    const response = await Api.createOverview(data);
    dispatch({ type: Types.CREATE, response });
  },
  remove: (id:number) => async (dispatch:Redux.Dispatch) => {
    await Api.removeOverview(id);
    dispatch({ type: Types.REMOVE, response: id });
  },
  update: (id:number, data:Data) => async (dispatch: Redux.Dispatch) => {
    const response = await Api.updateOverview(id, data);
    dispatch({ type: Types.UPDATE, response });
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
const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
  [Types.REMOVE]: remove,
  [Types.UPDATE]: update,
};
export default createReducer(INITIAL_STATE, reducer);
