import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bs-font-sans-serif: "Roboto",sans-serif;
  }
   

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: var(--bs-font-sans-serif);
    font-size: 1.4rem;
    font-weight: 400;
    color:${(props) => props.theme.color_common_05};
    background-color: ${(props) => props.theme.color_08};

  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
    padding: 0;
  }

  

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
