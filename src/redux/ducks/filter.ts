import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import { Area, Action } from '../../types/filters';
import Api from '../../api/filters';

export const Types = {
  REQUEST: 'filters/REQUEST',
};

const INITIAL_STATE:Area[] = [];

export const Creators = {
  request: () => async (disptach:Redux.Dispatch) => {
    const response = await Api.requestFilters();
    disptach({ type: Types.REQUEST, response });
  },
};

const request = (state = INITIAL_STATE, action:Action) => action.response;

const reducer = {
  [Types.REQUEST]: request,
};

export default createReducer(INITIAL_STATE, reducer);
