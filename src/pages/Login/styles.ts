import styled from 'styled-components';

export interface Props {
  src?:string;
}

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--white);
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    font-size: 1.5em;
    color: #444;
  }
`;

export const Logo = styled('img')<Props>`
  max-width: 25%;
`;

export const Form = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > input {
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 2px;
    border: 2px solid var(--white);
  }

  & > input:focus {
    border: 2px solid var(--grey);
  }

  & > input:hover {
    border: 2px solid #5555;
  }
`;

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  padding: 10px 15px;
  width: 100%;
  cursor: pointer;
  transition: .2s;
  &:hover {
    box-shadow: 0 0 10px var(--primary);
    opacity: 0.9;
  }
`;
