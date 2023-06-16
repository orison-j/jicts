import { createGlobalStyle } from 'styled-components';
import BgImage from "./images/jict-bg.jpg"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "LatoFont";
      src: url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'LatoFont', sans-serif;
    position: relative;
    offset: 0;
    user-select: none;
  }

  html {
    margin: 0;
    padding: 0;
  }

  p {
    padding: 10px;
    font-size: 1.2rem;
  }

  main {
    overflow: hidden;
    background-image: url(${BgImage}); 
    background-position:center bottom;
    background-size: cover; 
    background-attachment: fixed;
    background-repeat: no-repeat;  
    width: max-width(100%)
  }

  .tmy_1 {
    margin-top: 60px;
  }

  .tmy_0 .tmy_2 {
    margin-top: -60px;
  }
`;

export default GlobalStyle;
