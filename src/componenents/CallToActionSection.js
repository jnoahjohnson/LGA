import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import ClassicSection from "./ClassicSection";
import { Button, Spacer } from "./Utility";

const ContentStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: 800;
  }

  h2 {
    font-style: italic;
  }

  .ready {
    color: var(--accent);
  }
`;

const SectionStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: 6rem 1rem;
`;

const CallToActionSection = () => {
  return (
    <SectionStyles>
      <ContentStyles>
        <h1>
          Are you <span className="ready">ready</span>?
        </h1>
        <h2>See how we will help you win.</h2>
        <Spacer height={25} />
        <Button onClick={() => navigate("/contact")}>Reach Out</Button>
      </ContentStyles>
    </SectionStyles>
  );
};

export default CallToActionSection;
