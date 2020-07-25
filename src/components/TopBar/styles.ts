import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CO;
  height: 60px;
  padding: 10px;
  background-color: var(--primary);
  box-shadow: 0px 4px 2px 0px var(--primary);;
  display: flex;
  align-content: center;
  align-items: center;
`;
export const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: var(--primaryDark);
    color:#fff;
    opacity: 0.3;
    border-radius: 50%;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    cursor: pointer;
    :hover{
      opacity: 1;
      transform: scale(1.05);
      border-radius: 40%;
    }
`;
