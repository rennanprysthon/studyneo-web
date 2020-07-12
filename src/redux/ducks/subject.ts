import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import Api from '../../api/subject';
import { Action, Subject } from '../../types/subject';

export const Types = {
  REQUEST: 'subject/REQUEST',
};

export const Creators = {
  request: (matter_id:number) => async (dispatch: Redux.Dispatch) => {
    const response = await Api.request(matter_id);
    dispatch({ type: Types.REQUEST, response });
  },
};
const INITIAL_STATE:Subject[] = [];
const request = (state = INITIAL_STATE, action: Action) => action.response;


const reducer = {
  [Types.REQUEST]: request,
};

export default createReducer(INITIAL_STATE, reducer);
