import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction:column;
  textarea + button{
    margin-top: 10px;
  }
`;
export const Input = styled.input`
  background-color: #F0f0f0;
  padding: 10px 15px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;
export const Button = styled.button`
  padding: 10px;
  width: 50%;
  border-radius: 8px;
  color: #3d3d3d;
  background: var(--secondary);
  font-weight: bold;
  transition: all 200ms ease;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  :hover{
    background:#eeb900;
  }
`;
export const RoundedButton = styled.button`
  width: 40px;
  height: 40px;
  background: --secondary;
  color: #3d3d3d;
  border-radius: 100%;
  margin-left: 10px;
  cursor:pointer;
  transition: all 200ms ease-in;
  :hover{
    background: #FFC600;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
  }
`;
export const TextArea = styled.textarea`
  background-color: #F0f0f0;
  padding: 20px;
  min-height: 70px;
  width: 100%;
  min-width: 450px;
  resize:vertical;
  border-radius: 8px;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-align:justify;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  &  td, & th {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
export const Td = styled.td`
  padding: 10px 20px;
`;
