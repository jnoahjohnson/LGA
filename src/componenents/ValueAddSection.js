import React from "react";
import styled from "styled-components";

const FullPageSectionStyles = styled.div`
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--contentPadding, 0);
  padding-top: 2rem;
  background: var(--light);

  max-width: 1400px;
  margin: 0 auto;

  position: relative;

  h1 {
    text-align: right;
    padding: 0;
    font-weight: bolder;
    font-size: 4rem;
  }

  .firstTitle {
    color: var(--accent);
  }

  h3 {
    font-style: italic;
  }
`;

const ContentStyles = styled.div`
  /* background: blue; */
`;

const FullPageSection = ({ firstTitle, titleComplete, subtitle, children }) => {
  return (
    <FullPageSectionStyles>
      <div>
        <h1>
          <span className="firstTitle">{firstTitle}</span> {titleComplete}
        </h1>
        <h3>{subtitle}</h3>
      </div>
      <ContentStyles>{children}</ContentStyles>
    </FullPageSectionStyles>
  );
};

const FullPageNavigatorStyles = styled.div`
  background: var(--primary);
  color: white;
  padding: 1.5rem 1rem;

  position: absolute;
  left: 0;
  top: 50%;
`;

const FullPageNavigator = () => {
  return (
    <FullPageNavigatorStyles>
      <p>Links here</p>
    </FullPageNavigatorStyles>
  );
};

const ValueAddSectionStyles = styled.div`
  position: relative;
  background: var(--light);
`;

const ValueAddSection = () => (
  <ValueAddSectionStyles>
    <FullPageSection
      firstTitle="Increase"
      titleComplete="Value"
      subtitle="Logan’s robust process ensures a founder is getting the best deal possible"
    >
      <p>These sections need furthur development</p>
      <FullPageNavigator />
    </FullPageSection>
  </ValueAddSectionStyles>
);

export default ValueAddSection;
