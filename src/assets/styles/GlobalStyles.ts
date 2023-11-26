import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: "Trebuchet MS", sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 
    Variables
  */

  :root {
    --black-900: #000000;
    --black-600: #1F1F1F;
    --black-400: #3C3C3C;
    --white: #FFFFFF;

    --blue-800: #08084A;
    --blue-600: #00336f;
    --blue-400: #478FE3;
    --blue-100: #EAF4FF;

    --pink-600: #BF87E1;
    --pink-200: #F3E1FF;
    --orange-800: #FFC581;
    --orange-600: #FFBF00;
    --orange-400: #FFC530;
    --orange-200: #FFE0BB;
    --green-500: #00CC08;
    
    --green-400: #A3F09C;
    --green-200: #C2F2BE;

    --red-500: #af0000;
    --red-100: #FFD1D1;
  }

  * {
    font-family: 'Trebuchet MS', sans-serif !important;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
  }

  h2 {
    color: var(--blue-800);
    font-family: Trebuchet MS;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.125rem;
  }

  p {
    color: var(--blue-600);
    font-weight: 400;
  }
`;

export default GlobalStyle;
