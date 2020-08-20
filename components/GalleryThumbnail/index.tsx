import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

const GalleryContainer = styled.div`
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

const GalleryThumbnail = () => (
  <GalleryContainer>
    <img src="#" alt="ThumbnailOne" />
  </GalleryContainer>
);

export default GalleryThumbnail;
