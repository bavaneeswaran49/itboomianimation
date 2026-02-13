import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: "Inter", sans-serif;

    src: url('/Inter_28pt-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export default GlobalStyle;
