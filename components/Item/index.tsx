import React from "react";

import Container from "../Container";
import GalleryThumbnail from "../GalleryThumbnail";

import styled from "styled-components";
import media from "styled-media-query";

const ItemsContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding-bottom: 4rem;
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
`;

const Item = ({ product }) => (
  <ItemsContainer>
    <Container>
      <Wrapper>
        <GalleryThumbnail />

        <div key={product.id}>
          {product.images && <img src={`${product.images}`} />}
        </div>

        <div>
          <h3>RASTEIRA TIRA DEDO</h3>
          <span>| R$ 55,20</span>
        </div>
      </Wrapper>
    </Container>
  </ItemsContainer>
);

export default Item;
