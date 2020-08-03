import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import { State } from '../../types/overview';
import Api from '../../api/overview';

export const Types = {
  REQUEST: 'overview/REQUEST',
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
};
interface ActionRequest{
  type: string,
  response: State
}
const request = (state = INITIAL_STATE, action:ActionRequest) => action.response;

const reducer = {
  [Types.REQUEST]: request,
};
export default createReducer(INITIAL_STATE, reducer);
