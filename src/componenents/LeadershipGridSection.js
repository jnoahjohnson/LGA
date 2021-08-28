import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Button, Spacer } from "./Utility";
import PersonCard from "./PersonCard";

const LeadershipGridSectionStyles = styled.div`
  background: var(--light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const BobPortrait = () => (
  <StaticImage src="../images/BobPortrait.png" alt="Bob Winder" />
);
const KevinPortrait = () => (
  <StaticImage src="../images/KevinPortrait.png" alt="Kevin Khona" />
);
const DanielPortrait = () => (
  <StaticImage src="../images/DanielPortrait.png" alt="Daniel Stark" />
);

const LeadershipGridSection = () => {
  return (
    <LeadershipGridSectionStyles>
      <GridSection>
        <PersonCard
          name="Daniel Stark"
          title="Principal"
          image={<DanielPortrait />}
        />
        <PersonCard
          name="Bob Winder"
          title="President"
          image={<BobPortrait />}
        />
        <PersonCard
          name="Kevin Khona"
          title="Principal"
          image={<KevinPortrait />}
        />
      </GridSection>
      <Spacer height={30} />
      <Button onClick={() => navigate("/team")}>Our Team</Button>
    </LeadershipGridSectionStyles>
  );
};

export default LeadershipGridSection;
