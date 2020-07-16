import styled from 'styled-components';


export const Button = styled.button`
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
export const Form = styled.form`
  width: 100%;
  display: flex;
`;
export const Input = styled.input`
  background: transparent;
  border: 2px solid #ececec;
  padding: 10px;
  width: 100%;
  max-width: 250px;
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

export const Loader = styled.div`

  width: 100%;
  height: 50px;
  background: rgb(170,170,170);
  background: linear-gradient(102deg, rgba(170,170,170,1) 0%, rgba(255,255,255,1) 45%, rgba(170,170,170,1) 100%);
  background-size: 600% 100%;
  animation: gradient 2s linear infinite;
  animation-direction: alternate;
  @keyframes gradient {
    0% {background-position: 0%}
    100% {background-position: 100%}
  }


`;
