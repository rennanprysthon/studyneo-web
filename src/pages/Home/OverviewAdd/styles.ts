import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextArea = styled.textarea`
  background-color: #F0f0f0;
  padding: 20px;
  min-height: 70vh;
  width: 100%;
  resize:vertical;
  border-radius: 8px;
  font-family: 'Rubik', sans-serif;
`;

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  justify-items: center;

`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content:flex-start;
  padding: 30px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  flex-direction:column;
`;
interface ButtonProps{
  primary?:boolean
}
export const Button = styled.button<ButtonProps>`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  background: ${(({ primary }) => (primary === true ? 'var(--primary)' : '#6e6e6e'))};
  color: #fff;
  font-weight: bold;
  transition: all 500ms ease;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  :hover{
    background: ${(({ primary }) => (primary === true ? 'var(--secondary)' : '#3d3d3d'))};
    color: ${(({ primary }) => (primary === true ? '#3d3d3d' : '#fff'))}

  }
`;
