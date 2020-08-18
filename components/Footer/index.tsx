import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

import Container from "../Container";

const FooterContainer = styled.h1`
  position: relative;
  width: 100%;
  margin-top: 3rem;
  border-top: 2px solid gray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-bottom: 2em;
`;

const SocialsIcons = styled.div`
  img {
    margin-right: 2rem;
  }
`;

const MenuFooter = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    display: flex;
    flex-direction: row;
    padding-right: 3rem;

    img {
      padding-right: 1rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-right: 6rem;
    font-size: 0.5em;

    span {
      color: gray;
    }

    a {
      color: black;
      padding-top: 0.5rem;
      transition: all 0.7s ease 0s;
    }
    a:hover {
      color: gray;
    }
  }
`;

const CircleFooter = styled.div`
  position: absolute;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 300px;

    transform: translate(880px, -180px);
    background-color: white;

    border-radius: 50%;
    border: 1px solid gray;
    margin: 50px;

    input,
    button {
      margin: 1rem;
    }
  }
`;

const DescriptionFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 5em;
  padding-right: 5rem;
  background-color: #dd9076;
  color: white;

  p {
    width: 54rem;
    font-size: 0.4em;
  }

  img {
    width: 20%;
    height: 20%;
    padding-left: 6rem;
    background-size: cover;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Wrapper>
        <SocialsIcons>
          <img
            src="../../static/assets/icons/footer/Facebook.svg"
            alt="Facebook Icon"
          />
          <img
            src="../../static/assets/icons/footer/Instagram.svg"
            alt="Instagram Icon"
          />
          <img
            src="../../static/assets/icons/footer/Pinterest.svg"
            alt="Pinterest Icon"
          />
        </SocialsIcons>
        <MenuFooter>
          <div>
            <img
              src="../../static/assets/icons/footer/footer-certifications/vtex-pci-200.svg"
              alt="bit"
            />
            <img
              src="../../static/assets/icons/footer/footer-certifications/selo-ebit.svg"
              alt="VTEX"
            />
          </div>
          <div>
            <span>INSTITUCIONAL</span>
            <a href="#">A marca</a>
            <a href="#">Lojas</a>
            <a href="#">Contato</a>
          </div>
          <div>
            <span>INFORMAÇÕES</span>
            <a href="#">Formas de Pagamento</a>
            <a href="#">Trocas e Devoluções</a>
            <a href="#">Cuidados Com o Produto</a>
          </div>
          <div>
            <span>CONHECER</span>
            <a href="#">Franquias e Multimarcas</a>
            <a href="#">Trabalhe com a Gente</a>
            <a href="#">Procon-RJ</a>
          </div>
        </MenuFooter>
        <CircleFooter>
          <form action="#" method="post">
            <span>ASSINE NOSSA NEWS</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <button type="submit">ENVIAR</button>
          </form>
        </CircleFooter>
      </Wrapper>
      <DescriptionFooter>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          molestie massa in nunc condimentum, vel placerat lacus pulvinar.
          Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc
          semper leo nec tellus gravida faucibus.
        </p>
        <img src="../../static/assets/logo-white.png" alt="Logo Original.io" />
      </DescriptionFooter>
    </Container>
  </FooterContainer>
);

export default Footer;
