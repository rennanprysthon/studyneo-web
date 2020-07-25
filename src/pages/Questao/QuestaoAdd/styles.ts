import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    margin: 5px;
  }
`;
export const Content = styled.div`
  display: flex;
  padding: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  background-color: #F0f0f0;
  padding: 10px 15px;
  width: 100%;
  border-radius: 8px;
`;
export const TextArea = styled.textarea`
  background-color: #F0f0f0;
  padding: 20px;
  min-height: 70px;
  width: 100%;
  min-width: 450px;
  border-radius: 8px;
  font-family: 'Rubik', sans-serif;
`;
export const Alternativas = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.h3`

`;
export const FieldSet = styled.div`
  display:flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
export const Submit = styled.button`
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  background: #00B5E2;
  color: #fff;
  font-weight: bold;
  transition: all 500ms ease;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  :hover{
    background:#eeb900;

  color: #3d3d3d;
  }
`;
