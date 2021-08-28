import React from "react";
import styled from "styled-components";
import SmallPersonCard from "../SmallPersonCard";

const PersonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  padding: 2rem var(--contentPadding);

  @media (max-width: 1055px) {
    padding: 2rem 0;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 543px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 365px) {
    grid-template-columns: 1fr;
  }
`;

export default function TeamSection({ sectionTitle, teamMembers }) {
  return (
    <div style={{ maxWidth: 1350, margin: "0 auto" }}>
      <h1>{sectionTitle}</h1>
      <PersonGrid>
        {teamMembers.map(({ data }) => (
          <SmallPersonCard
            name={data.Name}
            title={data.Title}
            imageSource={data.Image}
          />
        ))}
      </PersonGrid>
    </div>
  );
}
