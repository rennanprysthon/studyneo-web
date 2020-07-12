import * as Filters from './filters';
import * as Question from './questions';
import * as Subject from './subject';

export interface State{
  filter: Filters.Area[];
  question: Question.QuestionResponse;
  subject: Subject.Subject[]
}
