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
