import * as Filters from './filters';
import * as Question from './questions';
import * as Subject from './subject';
import * as Overview from './overview';
import * as User from './user';

export interface State{
  filter: Filters.State;
  question: Question.State;
  subject: Subject.State;
  overview: Overview.State;
  user: User.State;
}
