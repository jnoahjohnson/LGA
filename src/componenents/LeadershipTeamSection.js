import React from "react";
import styled from "styled-components";

import { graphql, useStaticQuery } from "gatsby";

const LeadershipStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: var(--contentPadding);
  padding-top: 0;

  .header {
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
  }
`;

const LeadershipInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  color: black;
  padding: 1rem;

  height: 100%;

  .name {
    font-size: 3rem;
  }

  .title {
    color: var(--accent);
  }

  li {
    margin-left: 25px;
  }
`;

const LeadershipItemStyles = styled.div`
  background: var(--light);
  max-width: 950px;
  margin: 0 auto 20px auto;

  display: grid;
  grid-template-columns: 1fr 2fr;

  img {
    width: 100%;
  }
`;

const LeadershipItem = ({ member }) => {
  return (
    <LeadershipItemStyles style={{ maxWidth: 950, margin: "0 auto 20px auto" }}>
      <img src={member.Image} alt={`Photo of ${member.Name}`} />
      <LeadershipInformation>
        <div style={{ marginBottom: 10 }}>
          <h1 className="name">{member.Name}</h1>
          <h2 className="title">{member.Title}</h2>
        </div>
        <div style={{ marginBottom: 10 }}>
          <h2>Perspective</h2>
          <ul>
            {member.Perspective.split(";").map((perspective) => (
              <li>{perspective}</li>
            ))}
          </ul>
        </div>
        {member.Personal && (
          <div>
            <h2>Personal</h2>
            <p>{member.Personal}</p>
          </div>
        )}
      </LeadershipInformation>
    </LeadershipItemStyles>
  );
};

export default function LeadershipTeamSection() {
  const data = useStaticQuery(graphql`
    query LeadershipQuery {
      allAirtable(
        filter: {
          table: { eq: "Team" }
          data: { Division: { eq: "Leadership" } }
        }
        sort: { fields: rowIndex, order: DESC }
      ) {
        nodes {
          table
          data {
            Name
            Personal
            Perspective
            Title
            Image
          }
        }
      }
    }
  `);
  return (
    <LeadershipStyles>
      <h1 className="header">Leadership</h1>
      {data.allAirtable.nodes.map(({ data }) => (
        <LeadershipItem member={data} />
      ))}
    </LeadershipStyles>
  );
}
