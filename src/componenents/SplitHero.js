import React from "react";
import styled from "styled-components";

const SplitHeroStyles = styled.div`
  height: 100vh;
  background: var(--darkBackground);

  h2 {
    font-weight: 700;
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  button {
    font-size: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--darkBackground, black);
  align-items: center;
  justify-content: center;
  padding: 25px var(--contentPadding) 0 var(--contentPadding);
  color: var(--light);
  height: 100vh;

  .spacer {
    height: 25px;
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    font-size: 3.5rem;
  }
`;

const ImageStyles = styled.div`
  background: url("https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/HeroBackground_yw4tot.png");
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  flex: 1;
`;

const InnerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 100vh;
  color: white;

  max-width: 1800px;
  margin: 0 auto;
`;

const SplitHero = ({ children }) => {
  return (
    <SplitHeroStyles>
      <InnerStyles>
        <ContentStyles>{children}</ContentStyles>
        <ImageStyles />
      </InnerStyles>
    </SplitHeroStyles>
  );
};

export default SplitHero;
