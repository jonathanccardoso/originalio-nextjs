import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

const ItemsContainer = styled.div``;

const PurchaseItems = ({ children }) => (
  <ItemsContainer>
    <p>{children} </p>
  </ItemsContainer>
);

export default PurchaseItems;
