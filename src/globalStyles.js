import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    position: relative;
  }

  p {
    padding: 10px;
    font-size: 1.2rem;
  }
`;

export default GlobalStyle;
