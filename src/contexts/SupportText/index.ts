import { createContext } from 'react';

export interface Text{
  title: string;
  content: string;
}
export interface SupportText{
  texts: Text[]
  addNewText(text:Text): void
  removeText(id:number):void
  updateText(index:number, text:Text):void
}
const supportTextContext = createContext({} as SupportText);
export default supportTextContext;
