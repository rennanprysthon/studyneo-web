import Redux from 'redux';
import { createReducer } from 'reduxsauce';
import Api from '../../api/filters';
import { State, Area } from '../../types/filters';

export const Types = {
  REQUEST: 'filters/REQUEST',
  SELECT_AREA: 'filters/SELECT_AREA',
  SELECT_MATTER: 'filters/SELECT_MATTER',
  LOADING: 'filters/LOADING',
  ERROR: 'filters/ERROR',
};

const INITIAL_STATE:State = {
  areas: [],
  selected_matter_id: 0,
  selected_area_id: 0,
  loading: false,
  error: '',
};

export const Creators = {
  request: () => async (dispatch:Redux.Dispatch) => {
    try {
      dispatch({ type: Types.LOADING, response: true });
      const response = await Api.requestFilters();
      dispatch({ type: Types.REQUEST, response });
    } catch (err) {
      dispatch({ type: Types.ERROR, response: 'Erro ao buscar os filtros.' });
    } finally {
      dispatch({ type: Types.LOADING, response: false });
    }
  },
  selectMatter: (matter:number) => ({ type: Types.SELECT_MATTER, matter }),
  selectArea: (area:number) => ({ type: Types.SELECT_AREA, area }),
};
interface ActionRequest{
  type:string,
  response: Area[]
}
interface ActionSelectMatter{
  type:string,
  matter:number
}
interface ActionSelectArea{
  type:string,
  area:number
}
interface ActionMessage{
  type: string,
  response:string
}
interface ActionLoading {
  type:string,
  response: boolean
}
const request = (state = INITIAL_STATE, action:ActionRequest) => ({ ...state, areas: action.response });
const selectMatter = (state = INITIAL_STATE, action:ActionSelectMatter) => ({ ...state, selected_matter_id: action.matter });
const selectArea = (state = INITIAL_STATE, action:ActionSelectArea) => ({ ...state, selected_area_id: action.area });
const loading = (state = INITIAL_STATE, action:ActionLoading) => ({ ...state, loading: action.response });
const error = (state = INITIAL_STATE, action : ActionMessage) => ({ ...state, error: action.response });
const reducer = {
  [Types.REQUEST]: request,
  [Types.SELECT_MATTER]: selectMatter,
  [Types.SELECT_AREA]: selectArea,
  [Types.ERROR]: error,
  [Types.LOADING]: loading,
};

export default createReducer(INITIAL_STATE, reducer);
