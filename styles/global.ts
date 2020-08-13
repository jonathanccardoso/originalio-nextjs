import { createGlobalStyle } from "styled-components";

import media from "styled-media-query";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
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
    font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    line-height: 0.5;
  }
  img {
    /* display: block;
  	height: auto;
    width: 55%;
  	max-width: 100%; */
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
  p {
    margin-top: 0;
    ${media.lessThan("medium")`
      margin-top: 4.5rem !important;
    `}
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`;
