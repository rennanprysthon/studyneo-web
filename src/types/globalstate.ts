import * as Filters from './filters';
import * as Question from './questions';

export interface State{
  filter: Filters.Area[];
  question: Question.QuestionResponse;
}
