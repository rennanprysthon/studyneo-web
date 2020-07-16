import * as Filters from './filters';
import * as Question from './questions';
import * as Subject from './subject';

export interface State{
  filter: Filters.State;
  question: Question.QuestionResponse;
  subject: Subject.State
}
