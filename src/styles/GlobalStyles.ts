import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Rubik', sans-serif;
  }
  img {
    max-width: calc(100% - 100px);
    margin: 0 auto;
  }

  ul, li {
    list-style: none;
  }

  :root {
    --primary: #00B5E2 ;
    --secondary: #FFC600;
    --white: #f4f4f4;
    --orange: #ff9300;
    --brown: #8c4500;
    --pink: #ef4b81;
    --hot-pink: #bb16a3;
    --green: #00bf6f;
    --blue: #00313D;
    --grey: #555;
  }
`;
