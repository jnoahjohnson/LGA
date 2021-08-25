import React from "react";
import styled from "styled-components";

const SplitSectionStyles = styled.div`
  background: ${({ dark }) =>
    dark ? "var(--darkBackground)" : "var(--light)"};
  color: ${({ dark }) => (dark ? "white" : "black")};

  display: grid;
  grid-template-columns: ${({ smallImage, contentLeft }) =>
    smallImage ? (contentLeft ? "2fr 1fr" : "1fr 2fr") : "1fr 1fr"};
  grid-auto-flow: column;

  div.anchor {
    display: block;
    position: relative;
    top: -110px;
    visibility: hidden;
  }
`;

const ContentStyles = styled.div`
  grid-column-start: ${({ gridColumn }) => gridColumn};

  padding: 2rem;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }
`;

const ImageStyles = styled.div`
  grid-column-start: ${({ gridColumn }) => gridColumn};
  img {
    width: 100%;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

export default function SplitSection({
  children,
  contentLeft,
  backgroundImage,
  smallImage,
  dark,
  id,
}) {
  return (
    <SplitSectionStyles
      smallImage={smallImage}
      contentLeft={contentLeft}
      dark={dark}
    >
      <div className="anchor" id={id} />
      <ContentStyles gridColumn={contentLeft ? 1 : 2}>{children}</ContentStyles>
      <ImageStyles gridColumn={contentLeft ? 2 : 1}>
        {backgroundImage}
      </ImageStyles>
    </SplitSectionStyles>
  );
}
