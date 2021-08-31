import * as React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import CardGrid from "../componenents/CardGrid";
import ClassicSection from "../componenents/ClassicSection";
import Hero from "../componenents/Hero";
import Page from "../componenents/Page";
import QuoteGrid from "../componenents/QuoteGrid";
import { Button, Spacer, HeroButton } from "../componenents/Utility";
import { WhyLoganData } from "../data/WhyLoganData";
import HomeQuotes from "../data/HomeQuotes";
import styled from "styled-components";
import LinkGrid from "../componenents/LinkGrid";
import ValueAddFull from "../componenents/ValueAddFull";
import ValueAddSection from "../componenents/ValueAddSection";
import LeadershipGridSection from "../componenents/LeadershipGridSection";
import CallToActionSection from "../componenents/CallToActionSection";
import IconGrid from "../componenents/IconGrid";
import SplitHero from "../componenents/SplitHero";
import SplitSection from "../componenents/SplitSection";
import { StaticImage } from "gatsby-plugin-image";

const CenterHeader = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const ContnetContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const IndexPage = () => {
  return (
    <Page footer>
      <Helmet>
        <title>Logan Growth Advisors</title>
        <meta
          name="description"
          content="Logan Growth Advisors helps business founders win. They have been on all sides of the deals adn have proven expert at increasing deal value, imporoving speed, and defending founders."
        />
      </Helmet>
      <main>
        <SplitHero>
          <ContnetContainer>
            <Fade delay={100}>
              <h2>We Help Founders Win</h2>
              <p>
                We help founders win in raising capital or selling their
                business. Partner with us to improve (1) valuation and terms,
                (2) speed and certainty to close, and (3) defend founders
                against predatory clawbacks.
              </p>
              {/* <ol>
                <li>aluation and terms</li>
              </ol> */}
            </Fade>
            <Spacer height={15} />
            <Fade delay={150} duration={800}>
              <HeroButton>See How</HeroButton>
            </Fade>
          </ContnetContainer>
        </SplitHero>
        <ClassicSection blue>
          <h1 style={{ textAlign: "center" }}>WHY LOGAN IS THE BEST</h1>
          <IconGrid data={WhyLoganData} />
        </ClassicSection>
        <SplitSection
          contentLeft
          backgroundImage={
            <StaticImage
              src="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/v1630383186/LGAAssets/hide-obara-2p1HOcpi14U-unsplash_pi7nl0.jpg"
              alt="Buildings"
            />
          }
        >
          <h1>HOW LOGAN HELPS YOU WIN</h1>
          <Spacer height={20} />
          <LinkGrid />
          <Spacer height={30} />
        </SplitSection>
        <ValueAddSection />
        <ClassicSection title="Leadership">
          <LeadershipGridSection />
        </ClassicSection>
        <CallToActionSection />
      </main>
    </Page>
  );
};

export default IndexPage;
