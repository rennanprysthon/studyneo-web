import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

export const ButtonsGroup = styled.div`
  display:flex;
  width: 100%;
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
  display:flex;
  align-items: center;
  justify-content: center;
  :hover{
    background: #FFC600;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
    transform: rotate(180deg);
  }
`;
