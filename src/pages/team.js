import React from "react";
import styled from "styled-components";
import CallToActionSection from "../componenents/CallToActionSection";
import FullTeam from "../componenents/FullTeam";
import LeadershipTeamSection from "../componenents/LeadershipTeamSection";
import Page from "../componenents/Page";
import PhotoHeader from "../componenents/PhotoHeader";

const InfoSection = styled.div`
  background: var(--darkBackground);
  padding: var(--contentPadding);
  color: white;

  .info-header {
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.25rem;
    max-width: 1200px;
  }
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
          <h1 className="info-header">Decades of Combined Experience</h1>
          <p>
            Our prior experience as business founders, private equity investors,
            management consultants, investment bankers, and university
            professors, provides us with a broad perspective to reveal insights
            in diligence that other providers won’t uncover.
          </p>
        </InfoSection>
        <LeadershipTeamSection />
        <FullTeam />
        <CallToActionSection />
      </main>
    </Page>
  );
}
