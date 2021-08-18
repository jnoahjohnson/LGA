import * as React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import CardGrid from "../componenents/CardGrid";
import ClassicSection from "../componenents/ClassicSection";
import Hero from "../componenents/Hero";
import Page from "../componenents/Page";
import QuoteGrid from "../componenents/QuoteGrid";
import { Button, Spacer } from "../componenents/Utility";
import { WhyLoganData } from "../data/WhyLoganData";
import HomeQuotes from "../data/HomeQuotes";
import styled from "styled-components";
import LinkGrid from "../componenents/LinkGrid";
import ValueAddFull from "../componenents/ValueAddFull";
import ValueAddSection from "../componenents/ValueAddSection";
import LeadershipGridSection from "../componenents/LeadershipGridSection";
import CallToActionSection from "../componenents/CallToActionSection";

const CenterHeader = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
`;

const ContnetContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const IndexPage = () => {
  return (
    <Page>
      <Helmet>
        <title>Logan Growth Advisors</title>
        <meta
          name="description"
          content="Logan Growth Advisors helps business founders win. They have been on all sides of the deals adn have proven expert at increasing deal value, imporoving speed, and defending founders."
        />
      </Helmet>
      <main>
        <Hero>
          <ContnetContainer>
            <Fade delay={100}>
              <h2>
                We help business founders win by selling all or part of their
                company or by rasing funds through debt or equity instruments
              </h2>
            </Fade>
            <Spacer height={15} />
            <Fade delay={150} duration={800}>
              <Button>See How</Button>
            </Fade>
          </ContnetContainer>
        </Hero>
        <ClassicSection title="Why Logan" dark={true}>
          <p className="description">
            We have been on all sides of deals including buying companies as PE
            investors, running companies as CEO and CFOs, and selling companies.
            Through our vast amount of collective experience, we know what
            investors desire and we know how difficult it is to achieve.
          </p>
          <CardGrid data={WhyLoganData} />
        </ClassicSection>
        <ClassicSection title="Logan's Value Add">
          <p className="description">
            Logan has proven expert at helping founders win by (1) increasing
            deal value, (2) improving speed and certainty to close, and (3)
            defending against covert predatory terms.
          </p>
          <Spacer height={20} />
          <QuoteGrid data={HomeQuotes} />
          <CenterHeader>See How Logan Will</CenterHeader>
          <Spacer height={20} />
          <LinkGrid />
          <Spacer height={30} />
          {/* <ValueAddFull /> */}
        </ClassicSection>
        <ValueAddSection />
        <ClassicSection dark={true} title="Leadership">
          <LeadershipGridSection />
        </ClassicSection>
        <CallToActionSection />
      </main>
    </Page>
  );
};

export default IndexPage;
