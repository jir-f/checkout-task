import { createGlobalStyle } from 'styled-components';
import GraphikBlackWebWoff from '../fonts/Graphik-Regular-Web.woff'
import GraphikBlackWebWoff2 from '../fonts/Graphik-Regular-Web.woff2'

const gray = '#F0F3F7';
const black = '#00122C'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    src: url(${GraphikBlackWebWoff}) format('woff'),
          url(${GraphikBlackWebWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${gray};
    font-family: "Graphik", Open-Sans, Helvetica, Sans-Serif;
    color: ${black};
  }
`;
 
export default GlobalStyle;