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
`;

const SocialsIcons = styled.div`
  img {
    margin-right: 2rem;
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
        {/* <div></div> */}
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
