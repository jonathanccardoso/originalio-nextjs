import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  children: any;
}

export const ContainerWrapper = styled.div`
  /* width: 1140px; */
  /* padding-right: 15px;
  padding-left: 15px; */
  position: relative;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan("medium")`
    padding-right: 0px;
    padding-left: 0px;  
  `}
`;

const Container: React.FC<Props> = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export default Container;
