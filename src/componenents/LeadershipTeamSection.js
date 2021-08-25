import React from "react";
import styled from "styled-components";

const LeadershipStyles = styled.div`
  background: var(--darkBackground);
  color: white;

  height: 400px;
  padding: var(--contentPadding);
`;

export default function LeadershipTeamSection() {
  return (
    <LeadershipStyles>
      <h1>Leadership Section</h1>
    </LeadershipStyles>
  );
}
