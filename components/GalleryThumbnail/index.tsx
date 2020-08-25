import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

const GalleryContainer = styled.div`
  position: relative;
  top: 0;
  z-index: 3;
  color: gray;
  text-align: center;
`;

const GalleryThumbnail = () => (
  <GalleryContainer>
    {/* <img src={`${product.images}`} alt="ThumbnailOne" /> */}
    <img src="#" alt="ThumbnailOne" />
  </GalleryContainer>
);

export default GalleryThumbnail;
