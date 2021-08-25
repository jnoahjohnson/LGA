import React, { useState } from "react";
import styled from "styled-components";
import FullTimeSection from "../componenents/FullTimeSection";
import InternshipSection from "../componenents/InternshipSection";
import Page from "../componenents/Page";
import { Spacer } from "../componenents/Utility";

const HiringPageStyles = styled.div`
  background: white;
  margin-top: 110px;

  padding: var(--contentPadding);

  color: black;

  .title {
    text-align: center;
    font-size: 3.5rem;
  }

  .accent-text {
    color: var(--accent);
  }
`;

const Selectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SelectorButton = styled.button`
  background: none;
  border: none;

  font-weight: ${({ isSelected }) => (isSelected ? "700" : "500")};
  color: ${({ isSelected }) => (isSelected ? "black" : "grey")};

  font-size: 1.75rem;

  &:hover {
    color: black;
  }
`;

export default function HiringPage() {
  const [isInternships, setIsInternships] = useState(true);
  return (
    <Page footer fullNav>
      <main>
        <HiringPageStyles>
          <h1 className="title">
            Join the <span className="accent-text">Logan Growth</span> Team
          </h1>
          <Spacer height={20} />
          <Selectors>
            <SelectorButton
              isSelected={isInternships}
              onClick={() => setIsInternships(true)}
            >
              Internships
            </SelectorButton>
            <SelectorButton
              isSelected={!isInternships}
              onClick={() => setIsInternships(false)}
            >
              Full-Time Positions
            </SelectorButton>
          </Selectors>
          {isInternships ? <InternshipSection /> : <FullTimeSection />}
        </HiringPageStyles>
      </main>
    </Page>
  );
}
