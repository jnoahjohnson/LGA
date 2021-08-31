import React from "react";
import styled from "styled-components";

const ClassicSectionStyles = styled.div`
  background: ${({ dark, blue }) =>
    dark
      ? "var(--darkBackground)"
      : blue
      ? "var(--primary)"
      : "var(--light, white)"};

  color: ${({ dark, blue }) => (dark || blue ? "white" : "black")};

  padding: 1.5rem 0;

  h1 {
    font-size: 3.5rem;
    padding-bottom: 0.5rem;
    font-weight: 800;
    margin: 0;
    text-transform: uppercase;
  }
  .title {
    padding: var(--contentPadding);
    padding-bottom: 0;
  }

  h2 {
    font-size: 1.25rem;
    max-width: 1200px;
    padding: var(--contentPadding);
    padding-top: 0;
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 450px) {
    padding: 0.5rem;
  }
`;

const Bar = styled.div`
  background: var(--secondary, blue);
  width: 75px;
  height: 7px;
  margin-left: var(--contentPadding);
`;

const ContentStyles = styled.div`
  padding: var(--contentPadding);

  @media (max-width: 450px) {
    padding: 0.5rem;
  }

  .description {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.75rem;
    max-width: 60%;
    margin-bottom: 1.25rem;
  }
`;

const ClassicSectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 450px) {
    .title {
      padding: 0.5rem;
      text-align: center;
    }
  }
`;

const ClassicSection = ({ dark, blue, title, children, description }) => {
  return (
    <ClassicSectionStyles dark={dark} blue={blue}>
      <ClassicSectionContent>
        {title && <h1 className="title">{title}</h1>}
        {description && <h2>{description}</h2>}
        {/* <Bar /> */}
        <ContentStyles>{children}</ContentStyles>
      </ClassicSectionContent>
    </ClassicSectionStyles>
  );
};

export default ClassicSection;
