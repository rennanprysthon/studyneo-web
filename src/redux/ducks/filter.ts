import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import Api from '../../api/filters';
import { Action, ActionMatter, State } from '../../types/filters';

export const Types = {
  REQUEST: 'filters/REQUEST',
  SELECT: 'filters/SELECT',
};

const INITIAL_STATE:State = {
  areas: [],
  selected_matter_id: 0,
};

export const Creators = {
  request: () => async (dispatch:Redux.Dispatch) => {
    const response = await Api.requestFilters();
    dispatch({ type: Types.REQUEST, response });
  },
  select: (matter:number) => ({ type: Types.SELECT, matter }),
};

const request = (state = INITIAL_STATE, action:Action) => ({ ...state, areas: action.response });
const select = (state = INITIAL_STATE, action:ActionMatter) => ({ ...state, selected_matter_id: action.matter });

const reducer = {
  [Types.REQUEST]: request,
  [Types.SELECT]: select,
};

export default createReducer(INITIAL_STATE, reducer);
