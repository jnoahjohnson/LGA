import React from "react";
import styled from "styled-components";

const QuoteCardStyles = styled.div`
  .quote-area {
    background: var(--primary, blue);
    height: 120px;
    font-size: 1.1rem;
    font-weight: 600;
    vertical-align: middle;
    color: white;
    padding: 0.75rem;
  }

  .author-title {
    font-style: italic;
  }

  .author-area {
    background: var(--accent);
    color: white;
    margin-top: -10px;
    margin-left: 10px;
    padding: 0.5rem 0.75rem;
    font-size: 1.1rem;
    text-align: center;
    display: inline-block;
    box-shadow: var(--defaultShadow);
  }
`;

const QuoteCard = ({ data }) => {
  return (
    <QuoteCardStyles>
      <p className="quote-area">"{data.quote}"</p>
      <div className="author-area">
        <p>
          {data.author} -{" "}
          <span className="author-title">{data.authorTitle}</span>
        </p>
      </div>
    </QuoteCardStyles>
  );
};

const QuoteGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

const QuoteGrid = ({ data }) => {
  return (
    <QuoteGridStyles>
      {data.map((quote) => (
        <QuoteCard data={quote} />
      ))}
    </QuoteGridStyles>
  );
};

export default QuoteGrid;
