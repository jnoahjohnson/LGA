import React from "react";
import styled from "styled-components";

const FullTeamStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: var(--contentPadding);
  height: 400px;
`;

export default function FullTeam() {
  return (
    <FullTeamStyles>
      <h1>Full Team</h1>
    </FullTeamStyles>
  );
}
