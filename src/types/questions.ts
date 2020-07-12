
export interface Question{
  id:number,
  subject_id:number,
  enunciado: string,
  created_at: string,
  updated_at:string
}

export interface Action {
  type: string,
  response: QuestionResponse
}
export interface Data {
  area:number|undefined,
  matter:number|undefined,
  subject:number|undefined,
  page:number|undefined
}
export interface QuestionResponse {
  page:number,
  total:number,
  lastPage:number,
  perPage:number,
  data: Question[]
}
