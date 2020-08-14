import React from "react";

import styled from "styled-components";

const TitleH3 = styled.h1`
  color: #069;
  font-size: 40px;
  margin: 2em;
`;

const Header = () => (
  <div>
    <TitleH3>header</TitleH3>
    <img src="../../static/assets/logo.jpg" />
  </div>
);

export default Header;
