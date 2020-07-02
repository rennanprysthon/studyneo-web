import styled from 'styled-components';

export interface Props {
  src?: string;
}

export const Container = styled.div`
  grid-area: AS;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--secondary);
  box-shadow: 0 0 10px var(--secondary);
  padding: 10px 0;

  max-width: 100vh;

  & > ul > li{
    width: 50px;
    height: 50px;
    background-color: var(--brown);
    opacity: 0.3;
    margin-bottom: 10px;
    border-radius: 50%;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & > ul {
    margin-top: 5px;
  }

  & > ul > li:hover {
    opacity: 0.9;
    transform: scale(1.05);
    border-radius: 40%;

  }

`;

export const Logo = styled('img')<Props>`
  max-width: 80%;

`;

export const Divisor = styled.div`
  width: calc(100% - 20px);
  margin: 5px 0;
  height: 3px;
  background-color: var(--brown);
  opacity: 0.1;
`;
