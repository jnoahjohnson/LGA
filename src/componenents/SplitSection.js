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

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const ContentStyles = styled.div`
  grid-column-start: ${({ gridColumn }) => gridColumn};

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }

  @media (max-width: 950px) {
    grid-column-start: 1;
  }
`;

const ImageStyles = styled.div`
  grid-column-start: ${({ gridColumn }) => gridColumn};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  img {
    width: 100%;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (max-width: 950px) {
    grid-column-start: 1;
    max-width: 100%;
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
