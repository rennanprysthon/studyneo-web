export interface State{
  page:number,
  total:number,
  lastPage:number,
  perPage:number,
  data: Overview[],
  loading: boolean,
  error?: string,
  message?: string
}
export interface Data{
  subject_id: number;
  content: string;
  title: string;
}
export interface Overview{
  subject_id: number,
  content: string,
  id:number,
  created_at: string,
  updated_at: string,
  title: string;
}
