import { createGlobalStyle } from 'styled-components';
import BgImage from "./images/jict-bg.jpg"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "LatoFont";
      src: url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  }

  @font-face {
    font-family: "Cera Round Pro";
    src: url("//db.onlinewebfonts.com/t/9d23cda2fd2a195a8467e0967debd4d3.eot"); 
    src: url("//db.onlinewebfonts.com/t/9d23cda2fd2a195a8467e0967debd4d3.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/9d23cda2fd2a195a8467e0967debd4d3.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/9d23cda2fd2a195a8467e0967debd4d3.woff") format("woff"), url("//db.onlinewebfonts.com/t/9d23cda2fd2a195a8467e0967debd4d3.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/9d23cda2fd2a195a8467e0967debd4d3.svg#Cera Round Pro") format("svg"); 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
    font-family: 'LatoFont'
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cera Round Pro';
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
