import React from "react";

import * as Styled from "./styled";

import styled from "styled-components";

const TitleH3 = styled.h1`
  color: #069;
  font-size: 40px;
  margin: 2em;
`;

const Header = () => (
  <Styled.Header>
    <Styled.Title>header</Styled.Title>
    <TitleH3>header diferenciado</TitleH3>
    <img src="../../static/assets/logo.jpg" />
  </Styled.Header>
);

export default Header;
