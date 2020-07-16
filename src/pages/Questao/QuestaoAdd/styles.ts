import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  * {
    margin: 5px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: #F0f0f0;
  padding: 10px 15px;

`;

export const Alternativas = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.h5`

`;

export const Submit = styled.div`
  cursor: pointer;
  padding: 15px 10px;
  width: 100px;
  height: 50px;
  color: #fff;
  font-weight: bolder;
  text-align: center;
  background-color: var(--primary);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.3;
  }
`;
