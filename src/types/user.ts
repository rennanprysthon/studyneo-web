export interface User{
  id: number,
  email: string,
  name: string,
  is_activated: boolean,
  created_at: string,
  updated_at: string
}

export interface State {
  page:number,
  total:number,
  lastPage:number,
  perPage:number,
  data: User[],
  error?:string,
  message?:string,
  loading:boolean
}
