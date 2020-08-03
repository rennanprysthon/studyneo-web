import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import { State, Data, Overview } from '../../types/overview';
import Api from '../../api/overview';

export const Types = {
  REQUEST: 'overview/REQUEST',
  CREATE: 'overview/CREATE',
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
};
interface ActionRequest{
  type: string,
  response: State
}
interface ActionCreate{
  type: string,
  response: Overview
}
const request = (state = INITIAL_STATE, action:ActionRequest) => action.response;
const create = (state = INITIAL_STATE, action:ActionCreate) => ({ ...state, data: [...state.data, action.response] });
const reducer = {
  [Types.REQUEST]: request,
  [Types.CREATE]: create,
};
export default createReducer(INITIAL_STATE, reducer);
