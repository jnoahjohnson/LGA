import React from "react";
import styled from "styled-components";
import FullTeam from "../componenents/FullTeam";
import LeadershipTeamSection from "../componenents/LeadershipTeamSection";
import Page from "../componenents/Page";
import PhotoHeader from "../componenents/PhotoHeader";

const InfoSection = styled.div`
  background: var(--darkBackground);
  padding: var(--contentPadding);
  color: white;
`;

export default function TeamPage() {
  return (
    <Page footer fullNav>
      <main>
        <PhotoHeader
          firstWord="Our"
          title="Team"
          backgroundImage="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/Frame_27_fw6hnk.png"
        />
        <InfoSection>
          <h1>Info</h1>
        </InfoSection>
        <LeadershipTeamSection />
        <FullTeam />
      </main>
    </Page>
  );
}
