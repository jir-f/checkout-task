import { createGlobalStyle } from 'styled-components';
import GraphikBlackWebWoff from '../fonts/Graphik-Regular-Web.woff'
import GraphikBlackWebWoff2 from '../fonts/Graphik-Regular-Web.woff2'

export const gray = '#F0F3F7';
export const black = '#00122C';
export const lineGray = '#C5CCD6';
export const navyBlue = '#445669';
export const green = '#00B48F';
export const orange = '#F3C25D';
export const blackBlue = '#111B2A';

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