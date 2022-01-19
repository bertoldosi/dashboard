import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bs-blue: #626ed4;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #e83e8c;
    --bs-red: #ec4561;
    --bs-orange: #f1734f;
    --bs-yellow: #f8b425;
    --bs-green: #02a499;
    --bs-teal: #050505;
    --bs-cyan: #38a4f8;
    --bs-white: #fff;
    --bs-gray: #383B4E;
    --bs-gray-dark: #37394D;
    --bs-primary: #626ed4;
    --bs-secondary: #F8F8FA;
    --bs-success: #02a499;
    --bs-info: #38a4f8;
    --bs-warning: #f8b425;
    --bs-indigo: #6610f2;
    --bs-danger: #ec4561;
    --bs-brown: #8d6e63;
    --bs-teal: #050505;
    --bs-lime: #afb42b;
    --bs-orange: #f1734f;
    --bs-blue-grey: #8699ad;
    --bs-purple: #6f42c1;
    --bs-pink: #e83e8c;
    --bs-dark-light: #B4C9DE;
    --bs-dark: #333547;
    --bs-font-sans-serif: "Roboto",sans-serif;
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
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
    color: #5b626b;
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

  a {
    color: var(--bs-blue-grey);
    text-decoration: none;

    &:hover {
      color: var(--bs-dark-light);
    }
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
