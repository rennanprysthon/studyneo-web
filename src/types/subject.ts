export interface Subject{
  id: number,
  matter_id: number,
  title:string,
  created_at:string,
  updated_at:string
}
export interface Action{
  type:string,
  response: Subject[]
}
