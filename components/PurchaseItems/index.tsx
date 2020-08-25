import React from "react";

import Container from "../Container";

import styled from "styled-components";
import media from "styled-media-query";

const ItemsContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: #dd9076;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  div {
    margin-left: 1rem;

    img {
      width: 100%;
    }

    h2 {
      float: left;
    }
    span {
      float: right;
    }
  }

  /* ${media.lessThan("medium")`
    flex-direction: column;
  `} */
`;

const PurchaseItems = ({ context }) => (
  <ItemsContainer>
    <Container>
      <Title>QUEM VIU, VIU TAMBÉM</Title>
      <Wrapper>
        {context.map((product) => (
          <div key={product.id}>
            {product.images && <img src={`${product.images}`} />}
            <h2>R$ 20,00</h2>
            <span>0 0 0 0 0</span>
          </div>
        ))}
      </Wrapper>
      <span>
        <button>#</button>1 de {context.length}
        <button>#</button>{" "}
      </span>
    </Container>
  </ItemsContainer>
);

export default PurchaseItems;
