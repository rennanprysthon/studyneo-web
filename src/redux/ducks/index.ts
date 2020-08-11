import { combineReducers } from 'redux';
import filter from './filter';
import question from './question';
import subject from './subject';
import overview from './overview';
import user from './user';

const rootReducer = combineReducers({
  filter, question, subject, overview, user,
});

export default rootReducer;
