import { combineReducers } from 'redux';
import filter from './filter';
import question from './question';

const rootReducer = combineReducers({ filter, question });

export default rootReducer;
