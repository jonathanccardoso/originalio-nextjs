import React, { useEffect } from "react";

import Container from "../Container";
import GalleryThumbnail from "../GalleryThumbnail";

import styled from "styled-components";
import media from "styled-media-query";

const ItemsContainer = styled.div`
  width: 100%;
  padding-bottom: 4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  div {
    margin-left: 1rem;
  }
`;

const ItemImage = styled.div`
  margin-left: 5rem !important;
  margin-right: 5rem;

  img {
    width: 100%;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  border: 1px gray solid;
  width: 38%;
  height: 5%;

  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    a {
      color: #dd9076;
      float: right;
      text-decoration: underline;
    }

    img {
      width: 30%;
    }

    h3 {
      font-weight: bold;
      font-size: 1.5em;
      float: left;
    }

    span.color-gray {
      color: gray;
      font-size: 0.8em;
    }

    button {
      font-size: 1.2em;
      padding: 1rem;
      color: white;
      background-color: #dd9076;
      border: none;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out 0s;
    }

    button:hover {
      background-color: white;
      color: #dd9076;
      border: 0.5px #dd9076 solid;
      cursor: pointer;
    }
  }
`;

const Item = ({ product }) => {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <ItemsContainer>
      <Container>
        <Wrapper>
          <GalleryThumbnail context={product} />

          <ItemImage key={product.id}>
            {/* {product.images && <img src={`${product.images}`} />} */}
            <img src="../../static/assets/banner-image.png" alt="Image" />
          </ItemImage>

          <ItemContent>
            <div>
              <h3>RASTEIRA TIRA DEDO</h3>
              <span>RT 0568 | 03.07.0653</span>
            </div>
            <div>
              <span>R$ 69,00| R$ 55,20</span>
              <span className="color-gray">Ou 6x de R$ 9,20</span>
            </div>
            <div>
              <span>
                Cor: <span className="color-gray">(Fucsia)</span>{" "}
              </span>
              <img
                src="../../static/assets/icons/colors-item.png"
                alt="colors"
              />
            </div>
            <div>
              <span>
                Tamanho: <span className="color-gray"> (37) </span>
                <a href="#">Guia de medidas</a>
              </span>
            </div>
            <div>
              <button>ADICIONAR À SACOLA</button>
            </div>
            <div>
              <p>
                Rasteira em atanado soft com tira no dedo e fechamento de
                fivela. Possui sola sempre na cor do cabedal.
              </p>
            </div>
          </ItemContent>
        </Wrapper>
      </Container>
    </ItemsContainer>
  );
};

export default Item;
