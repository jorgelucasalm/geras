import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-900: #000000;
    --black-600: #1F1F1F;
    --white: #FFFFFF;

    --blue-800: #08084A;
    --blue-600: #00336f;
    --blue-100: #EAF4FF;

    --pink-200: #F3E1FF;
    --orange-600: #FFBF00;
    --orange-400: #FFC530;
    --orange-200: #FFE0BB;

    --green-500: #00CC08;
    --green-200: #C2F2BE;
  }

  * {
    font-family: 'Trebuchet MS', sans-serif;
  }

  h2 {
    color: #08084A;
    font-family: Trebuchet MS;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
  }

`;
