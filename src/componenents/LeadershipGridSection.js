import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Button, Spacer } from "./Utility";

const LeadershipGridSectionStyles = styled.div`
  background: var(--light);
  box-shadow: inset 0px 0px 7px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;

const PersonCardStyles = styled.div`
  background: var(--primary);
  box-shadow: var(--defaultShadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0.9rem;

  h1 {
    padding: 0;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 0.8rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--accent);
    padding: 0;
  }

  img {
    height: 400px;
  }
`;

const PersonCard = ({ name, title, image }) => (
  <PersonCardStyles>
    {image}
    <h1>{name}</h1>
    <h2>{title}</h2>
  </PersonCardStyles>
);

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
      <Button>Our Team</Button>
    </LeadershipGridSectionStyles>
  );
};

export default LeadershipGridSection;