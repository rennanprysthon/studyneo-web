export interface Subject{
  id: number,
  matter_id: number,
  title:string,
  created_at:string,
  updated_at:string
}

export interface SubjectData {
  title: string,
  matter_id:number
}

export interface State{
  loading: boolean,
  selected_subject_id:number
  subjects: Subject[],
  error?:string,
  message?:string,
}
