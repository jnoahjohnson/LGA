import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import TeamSection from "./TeamSections/TeamSection";

const FullTeamStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: 1rem;
`;

const teamQuery = graphql`
  query TeamQuery {
    allAirtable(
      filter: {
        table: { eq: "Team" }
        data: { Division: { ne: "Leadership" } }
      }
      sort: { fields: rowIndex, order: ASC }
    ) {
      nodes {
        data {
          Name
          Personal
          Perspective
          Title
          Image
          Division
        }
        rowIndex
      }
    }
  }
`;
export default function FullTeam() {
  const teamData = useStaticQuery(teamQuery);
  const maData = teamData.allAirtable.nodes.filter(
    (data) => data.data.Division == "M&A"
  );
  const financeData = teamData.allAirtable.nodes.filter(
    (data) => data.data.Division == "Finance"
  );
  const dealData = teamData.allAirtable.nodes.filter(
    (data) => data.data.Division == "Deal Pitch"
  );
  const businessData = teamData.allAirtable.nodes.filter(
    (data) => data.data.Division == "Business Development"
  );
  const buysideData = teamData.allAirtable.nodes.filter(
    (data) => data.data.Division == "Buyside"
  );
  const researchData = teamData.allAirtable.nodes.filter(
    (data) => data.data.Division == "Research"
  );

  return (
    <FullTeamStyles>
      <TeamSection sectionTitle="M&A" teamMembers={maData} />
      <TeamSection sectionTitle="Finance" teamMembers={financeData} />
      <TeamSection sectionTitle="Deal Pitch" teamMembers={dealData} />
      <TeamSection
        sectionTitle="Business Development"
        teamMembers={businessData}
      />
      <TeamSection sectionTitle="Buyside" teamMembers={buysideData} />
      <TeamSection sectionTitle="Research" teamMembers={researchData} />
    </FullTeamStyles>
  );
}
