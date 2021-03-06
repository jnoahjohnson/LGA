import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import CallToActionSection from "./CallToActionSection";
import QuoteCard from "./QuoteCard";
import SplitSection from "./SplitSection";
import { Button, Spacer } from "./Utility";
import { InternshipQuotes } from "../data/InternshipQuotes";

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

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ". a a" "b b ." ". c c" "d d .";
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-areas: "a a a" "b b b" "c c c" "d d d";
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
            src="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/v1630384132/LGAAssets/maranda-vandergriff-7aakZdIl4vg-unsplash_a7jwfm.jpg"
            alt="Desk with computer"
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
      <Spacer height={45} />
      <QuoteGrid>
        {InternshipQuotes.map((quote, index) => (
          <QuoteCard
            gridArea={quote.grid}
            quote={quote.quote}
            author={quote.author}
          />
        ))}
      </QuoteGrid>
      <Spacer height={40} />
      <button>Join the Team. Apply Today.</button>
    </InternshipStyles>
  );
}
