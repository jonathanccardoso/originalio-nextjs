import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

import Container from "../Container";

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  z-index: 3;
  color: gray;
  text-align: center;

  .logo {
    padding: 2rem;

    ${media.lessThan("medium")`
      display: none;
    `}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;

  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  div {
    flex-direction: row;

    span {
      margin: 1rem;

      img {
        position: absolute;
      }
      .search {
        padding-left: 30px;
        padding-bottom: 0.2rem;
        width: 10rem;
      }

      .buy {
        position: relative;
      }
    }
  }

  ${media.lessThan("medium")`
    display: none;
  `}
`;

const WrapperMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;

  div {
    img {
      padding-left: 2rem;
    }
  }

  ${media.greaterThan("large")`
    display: none;
  `}
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <img className="logo" src="../../static/assets/logo.jpg" />
      <WrapperMobile>
        <img src="../../static/assets/icons/header/Vector.svg" alt="Menu" />
        <img src="../../static/assets/logo.jpg" />
        <div>
          <img src="../../static/assets/icons/header/Union.svg" alt="Search" />
          <img src="../../static/assets/icons/header/Vector-2.svg" alt="Buy" />
        </div>
      </WrapperMobile>
      <Wrapper>
        <div>
          <span>Entrar | Cadastrar-se</span>
        </div>
        <div>
          <span>SAPATOS</span>
          <span>BOLSAS</span>
          <span>ACESSÓRIOS</span>
          <span>OFF</span>
        </div>
        <div>
          <span>
            <img
              src="../../static/assets/icons/header/Union.svg"
              alt="Search"
            />
            <input type="text" placeholder="Busca" className="search" />
          </span>
          <span>
            <img
              src="../../static/assets/icons/header/Vector-2.svg"
              alt="Buy"
              className="buy"
            />
            0
          </span>
        </div>
      </Wrapper>
    </Container>
  </HeaderContainer>
);

export default Header;
