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
