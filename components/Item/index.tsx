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
  }
`;

const ItemImage = styled.div`
  img {
    width: 100%;
  }
`;

const ItemContent = styled.div`
  border: 1px gray solid;

  h3 {
    font-weight: bold;
    float: left;
  }
  span {
    float: right;
  }
`;

const Item = ({ product }) => (
  <ItemsContainer>
    <Container>
      <Wrapper>
        <GalleryThumbnail />

        <ItemImage key={product.id}>
          {product.images && <img src={`${product.images}`} />}
        </ItemImage>

        <ItemContent>
          <div>
            <h3>RASTEIRA TIRA DEDO</h3>
            <span>RT 0568 | 03.07.0653</span>
            <p>
              <span>R$ 69,00</span>
              <span>| R$ 55,20</span>
            </p>
            <span>Ou 6x de R$ 9,20</span>
          </div>
          <div>
            <p>
              <span>(Fucsia)</span>
              <span>0 0 0 0 0 0</span>
            </p>
          </div>
          <div>
            <button>ADICIONAR À SACOLA</button>
            <p>
              Rasteira em atanado soft com tira no dedo e fechamento de fivela.
              Possui sola sempre na cor do cabedal.
            </p>
          </div>
        </ItemContent>
      </Wrapper>
    </Container>
  </ItemsContainer>
);

export default Item;
