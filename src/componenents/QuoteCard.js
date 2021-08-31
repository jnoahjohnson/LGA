import React from "react";
import styled from "styled-components";

const QuoteCardStyles = styled.div`
  background: var(--primary);
  padding: 1.5rem;
  padding-top: 2.5rem;
  color: white;
  position: relative;

  grid-area: ${({ gridArea }) => gridArea};
`;

const QuoteSection = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const AuthorSection = styled.h1`
  font-size: 2rem;
`;

const QuoteIcon = styled.h1`
  font-size: 6rem;
  color: black;
  opacity: 0.5;
  line-height: 4rem;

  /* position: absolute;
  top: 25px;
  left: 25px; */
  padding: 0;
  margin: 0;
`;

export default function QuoteCard({ gridArea, quote, author }) {
  return (
    <QuoteCardStyles gridArea={gridArea}>
      <QuoteIcon>"</QuoteIcon>
      <QuoteSection>{quote}</QuoteSection>
      <AuthorSection>{author}</AuthorSection>
    </QuoteCardStyles>
  );
}
