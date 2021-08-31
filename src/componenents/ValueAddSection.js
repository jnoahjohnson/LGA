import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SplitSection from "./SplitSection";

const FullPageSectionStyles = styled.div`
  display: flex;
  flex-direction: column;

  align-items: ${({ right }) => (right ? "flex-end" : "flex-start")};

  max-width: 1400px;
  margin: 0 auto;

  h1 {
    text-align: ${({ right }) => (right ? "right" : "left")};
    padding: 0;
    font-weight: bolder;
    font-size: 4rem;
  }

  .firstTitle {
    color: var(--accent);
  }

  h3 {
    font-style: italic;
  }

  img {
    padding: 1rem 0;
    width: 775px;
  }
`;

const ContentStyles = styled.div`
  /* background: blue; */
`;

const FullPageSection = ({
  firstTitle,
  titleComplete,
  subtitle,
  children,
  className,
  right,
}) => {
  return (
    <FullPageSectionStyles className={className} right={right}>
      <h1>
        <span className="firstTitle">{firstTitle}</span> {titleComplete}
      </h1>
      <h3>{subtitle}</h3>
      <ContentStyles>{children}</ContentStyles>
    </FullPageSectionStyles>
  );
};

const ValueAddSectionStyles = styled.div`
  position: relative;
  /* background: blue; */
`;

const ValueAddSection = () => (
  <ValueAddSectionStyles>
    <SplitSection
      smallImage
      backgroundImage={
        <StaticImage
          src="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/v1630383190/LGAAssets/alexander-mils-lCPhGxs7pww-unsplash_hjcef9.jpg"
          alt="Money in hand"
        />
      }
      dark
      id="increase-value"
    >
      <FullPageSection
        firstTitle="Increase"
        titleComplete="Value"
        subtitle="Logan’s robust process ensures a founder is getting the best deal possible"
        right
      >
        <StaticImage src="../images/IncreaseValue.png" alt="Increase Value" />
      </FullPageSection>
    </SplitSection>
    <SplitSection
      smallImage
      backgroundImage={
        <StaticImage
          src="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/v1630383183/LGAAssets/jake-givens-iR8m2RRo-z4-unsplash_vpaibi.jpg"
          alt="Lights on roads"
        />
      }
      contentLeft
      id="improve-speed"
    >
      <FullPageSection
        firstTitle="Improve"
        titleComplete="Speed"
        subtitle="Logan’s robust process ensures a founder is getting the best deal possible"
        left
      >
        <StaticImage src="../images/IncreaseValue.png" alt="Increase Value" />
      </FullPageSection>
    </SplitSection>
    <SplitSection
      smallImage
      backgroundImage={
        <StaticImage
          src="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/v1630384043/LGAAssets/razvan-chisu-Ua-agENjmI4-unsplash_jd2gzu.jpg"
          alt="Looking up at building"
        />
      }
      dark
      id="defend-founders"
    >
      <FullPageSection
        firstTitle="Defend"
        titleComplete="Founders"
        subtitle="Logan’s robust process ensures a founder is getting the best deal possible"
        right
      >
        <StaticImage src="../images/IncreaseValue.png" alt="Increase Value" />
      </FullPageSection>
    </SplitSection>
  </ValueAddSectionStyles>
);

export default ValueAddSection;
