import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 70px 240px auto 200px;
  grid-template-rows: 46px auto 40px ;

  grid-template-areas:
    'AS CO CO CO'
    'AS TL TL TL'
    'AS TL TL TL';

  height: 100vh;
`;

export const Content = styled.div`
  grid-area: TL;
  padding: 20px;

  display: flex;
  width: 100%;
  height: 100%;
`;
