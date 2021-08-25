import React from "react";
import styled from "styled-components";

const ResultsGridStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  height: 400px;
  padding: var(--contentPadding);
`;

export default function ResultsGrid() {
  return (
    <ResultsGridStyles>
      <h1>Results</h1>
    </ResultsGridStyles>
  );
}
