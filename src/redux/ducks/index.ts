import { combineReducers } from 'redux';
import filter from './filter';
import question from './question';
import subject from './subject';

const rootReducer = combineReducers({ filter, question, subject });

export default rootReducer;
