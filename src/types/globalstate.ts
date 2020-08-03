import * as Filters from './filters';
import * as Question from './questions';
import * as Subject from './subject';
import * as Overview from './overview';

export interface State{
  filter: Filters.State;
  question: Question.State;
  subject: Subject.State;
  overview: Overview.State
}
