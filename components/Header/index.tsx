import React from "react";

import styled from "styled-components";

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
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;

  div {
    flex-direction: row;

    span {
      margin: 1rem;

      img {
        position: absolute;
      }
      .search {
        padding-left: 30px;
        width: 10rem;
      }

      .buy {
        position: relative;
      }
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <img className="logo" src="../../static/assets/logo.jpg" />
      <hr />
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
      <hr />
    </Container>
  </HeaderContainer>
);

export default Header;