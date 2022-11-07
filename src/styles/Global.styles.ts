import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
  html {
    min-height: 100vh;
  }
  body {
    background-color: green;
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;
