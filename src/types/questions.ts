
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

export interface QuestionResponse {
  page:number,
  total:number,
  lastPage:number,
  perPage:number,
  data: Question[]
}
