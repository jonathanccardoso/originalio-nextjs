import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 3;
  color: gray;
  text-align: center;

  span {
    color: #dd9076;
  }

  img:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  &:after {
    content: url("../../static/assets/icons/icon-down.png");
  }
  &:before {
    content: url("../../static/assets/icons/icon-up.png");
  }
`;

const GalleryThumbnail = ({ context }) => (
  <GalleryContainer>
    <span>Vídeo</span>
    {/* {context.images && <img src={`${context.images}`} alt="ThumbnailOne" />} */}
    <img src="../../static/assets/thumbnail-image.png" alt="ThumbnailOne" />
    <img src="../../static/assets/thumbnail-image.png" alt="ThumbnailOne" />
    <img src="../../static/assets/thumbnail-image.png" alt="ThumbnailOne" />
    <img src="../../static/assets/thumbnail-image.png" alt="ThumbnailOne" />
    <img src="../../static/assets/thumbnail-image.png" alt="ThumbnailOne" />
  </GalleryContainer>
);

export default GalleryThumbnail;
