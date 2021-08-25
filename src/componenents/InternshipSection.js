import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SplitSection from "./SplitSection";
import { Button, Spacer } from "./Utility";

const InternshipStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: var(--accent);
    border: none;
    font-size: 1.9rem;
    padding: 1rem 1.5rem;
    color: white;
    font-weight: 700;

    transition: box-shadow 0.25s;
  }

  button:hover {
    box-shadow: var(--defaultShadow);
  }

  .internship-title {
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1.2rem;
  }

  a {
    font-size: 1.25rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function InternshipSection() {
  return (
    <InternshipStyles>
      <SplitSection
        smallImage
        contentLeft
        backgroundImage={
          <StaticImage
            src="https://res.cloudinary.com/dbolbbqw7/image/upload/v1629303384/HeroBackground_yw4tot.png"
            alt="Building"
          />
        }
      >
        <div>
          <h1 className="internship-title">Internship Opportunities</h1>
          <p className="description">
            Logan Growth Advisors offers 10 12-week opportunities year around
            for sophomores and above. Our program is designed to provide an
            experience that mirrors the life of a full-time analyst at an
            investment bank. Responsibilities and expectations will be identical
            to full time employees, giving interns an experience like no other.
            We also offer full-time opportunities for graduating seniors that
            have gone through our internship program. Applications are
            considered on : rolling basis, so apply early.
          </p>
        </div>
      </SplitSection>
      <Spacer height={20} />
      <button>Join the Team. Apply Today.</button>
      <Spacer height={20} />
      <a href="#experiences">See Other's Experiences</a>
      <div style={{ height: 400 }}></div>
    </InternshipStyles>
  );
}
