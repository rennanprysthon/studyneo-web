import { Alternative } from './alternatives';

export interface Question{
  id:number,
  subject_id:number,
  enunciado: string,
  question:string,
  key:string,
  created_at: string,
  updated_at:string
}

export interface Action {
  type: string,
  response: QuestionResponse
}
export interface CreateAction{
  type:string
  response: Question
}
export interface QuestionResponse {
  page:number,
  total:number,
  lastPage:number,
  perPage:number,
  data: Question[]
}

export interface Text{
  title: string;
  content: string;
}

export interface Data{
  id?: number
  subject_id:number,
  enunciado: string,
  question:string,
  alternatives: Alternative[]
  texts?: Text[]|undefined
}
