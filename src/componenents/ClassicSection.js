import React from "react";
import styled from "styled-components";

const ClassicSectionStyles = styled.div`
  background: ${({ dark }) =>
    dark ? "var(--darkBackground, black)" : "var(--light, white)"};

  color: ${({ dark }) => (dark ? "white" : "black")};

  h1 {
    font-size: 3rem;
    padding: var(--contentPadding) var(--contentPadding) 0.7rem
      var(--contentPadding);
    font-weight: 800;
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

  p {
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
`;

const ClassicSection = ({ dark = false, title, children }) => {
  return (
    <ClassicSectionStyles dark={dark}>
      <ClassicSectionContent>
        <h1>{title}</h1>
        <Bar />
        <ContentStyles>{children}</ContentStyles>
      </ClassicSectionContent>
    </ClassicSectionStyles>
  );
};

export default ClassicSection;
