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

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  `}
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

    ${media.lessThan("medium")`
      padding-right: 0rem;
    `}
  }

  div {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-right: 4rem;
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

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

const CircleFooter = styled.div`
  position: absolute;
  transform: translate(57rem, -8rem);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 300px;

    background-color: white;

    border-radius: 50%;
    border: 1px solid gray;

    input,
    button {
      margin: 1rem;
    }

    span {
      font-weight: bold;
    }
  }

  ${media.lessThan("medium")`
    display: none;
  `}
`;

const DescriptionFooter = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-left: 5em;
  padding-right: 5rem;
  background-color: #dd9076;
  color: white;

  p {
    font-size: 0.4em;
  }

  img {
    width: 25%;
    height: 25%;
    padding-left: 6rem;
    background-size: cover;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    padding: 1rem;

    p {
      width: 100%;
    }

    img {
      width: 50%;
      padding: 1rem;
    }
  `}
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
