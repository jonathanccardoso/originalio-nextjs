import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
  }
  body {
    font-family: "Montserrat", "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    line-height: 0.5;
  }
  p,
  span {
    font-size: 16px;
    line-height: 1.5;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    line-height: 1.1;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  hr {
    color: gray;
    background-color: gray;
  }
  input {
    border: 0;
    border-bottom: 1px solid gray;
  }
`;
