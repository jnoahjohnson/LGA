import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SplitSection from "./SplitSection";
import { TeamMembers } from "../data/TeamMembers";

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
      <img src={member.image} alt="Building" />
      <LeadershipInformation>
        <div style={{ marginBottom: 10 }}>
          <h1 className="name">{member.name}</h1>
          <h2 className="title">{member.title}</h2>
        </div>
        <div style={{ marginBottom: 10 }}>
          <h2>Key Experience</h2>
          <ul>
            {member.experience.map((experience) => (
              <li>{experience}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Education</h2>
          <ul>
            {member.education.map((education) => (
              <li>{education}</li>
            ))}
          </ul>
        </div>
      </LeadershipInformation>
    </LeadershipItemStyles>
  );
};

export default function LeadershipTeamSection() {
  return (
    <LeadershipStyles>
      <h1 className="header">Leadership</h1>
      {TeamMembers.leadership.map((member) => (
        <LeadershipItem member={member} />
      ))}
    </LeadershipStyles>
  );
}
