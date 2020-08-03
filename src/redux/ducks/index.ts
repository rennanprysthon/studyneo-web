import { combineReducers } from 'redux';
import filter from './filter';
import question from './question';
import subject from './subject';
import overview from './overview';

const rootReducer = combineReducers({
  filter, question, subject, overview,
});

export default rootReducer;
