import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
  justify-content: flex-start;
  margin-bottom: 20px;
  select + select{
    margin-left: 10px;
  }
`;
export const Select = styled.select`
  border:2px solid #ececec;
  background: transparent;
  border-radius: 8px;
  padding: 10px;

`;

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
