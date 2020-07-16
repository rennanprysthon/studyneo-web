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
export interface Action{
  type:string,
  response: Area[]
}
export interface State{
  areas: Area[]
  selected_matter_id: number
}
export interface ActionMatter{
  type:string,
  matter:number
}
