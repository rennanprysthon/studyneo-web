export interface Matter{
  id:number,
  area_id:number,
  title:string,
}

export interface Area{
  id:number,
  title:string,
  matters: Matter[]
}
export interface State{
  areas: Area[]
  selected_matter_id: number
  selected_area_id: number
  loading: boolean
  error?:string
}
