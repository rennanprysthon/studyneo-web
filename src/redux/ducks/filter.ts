import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import Api from '../../api/filters';
import { Action, ActionMatter, State } from '../../types/filters';

export const Types = {
  REQUEST: 'filters/REQUEST',
  SELECT_AREA: 'filters/SELECT_AREA',
  SELECT_MATTER: 'filters/SELECT_MATTER',
};

const INITIAL_STATE:State = {
  areas: [],
  selected_matter_id: 0,
  selected_area_id: 0,
};

export const Creators = {
  request: () => async (dispatch:Redux.Dispatch) => {
    const response = await Api.requestFilters();
    dispatch({ type: Types.REQUEST, response });
  },
  selectMatter: (matter:number) => ({ type: Types.SELECT_MATTER, matter }),
  selectArea: (area:number) => ({ type: Types.SELECT_AREA, area }),
};

const request = (state = INITIAL_STATE, action:Action) => ({ ...state, areas: action.response });
const selectMatter = (state = INITIAL_STATE, action:ActionMatter) => ({ ...state, selected_matter_id: action.matter });
const selectArea = (state = INITIAL_STATE, action:{type:string, area:number}) => ({ ...state, selected_area_id: action.area });

const reducer = {
  [Types.REQUEST]: request,
  [Types.SELECT_MATTER]: selectMatter,
  [Types.SELECT_AREA]: selectArea,
};

export default createReducer(INITIAL_STATE, reducer);
