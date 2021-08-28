import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const ResultCardStyles = styled.div`
  background: #d6d6d6;
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 385px;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  img {
    width: 200px;
    height: 100px;
    padding: 1.25rem 0;
  }
`;

const YearSection = styled.h1`
  color: white;
  background: var(--primary);

  padding: 0.5rem 2rem;
  box-shadow: var(--defaultShadow);
`;

const ResultCard = ({
  year,
  investorName,
  investorImage,
  investedName,
  investedImage,
}) => {
  return (
    <ResultCardStyles>
      {investorImage ? (
        <img src={investorImage} alt={investorName} />
      ) : (
        <h1>{investorName}</h1>
      )}
      <h2>Invested In</h2>
      {investedImage ? (
        <img src={investedImage} alt={investedName} />
      ) : (
        <h1>{investedName}</h1>
      )}
      <YearSection>{year}</YearSection>
    </ResultCardStyles>
  );
};

const ResultsGridStyles = styled.div`
  background: var(--light);
  color: black;
  padding: var(--contentPadding);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.75rem;

  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 590px) {
    grid-template-columns: 1fr;
  }
`;

export default function ResultsGrid() {
  const data = useStaticQuery(graphql`
    query ResultQuery {
      allAirtable(filter: { table: { eq: "Results" } }) {
        edges {
          node {
            id
            data {
              InvestorName
              InvestedName
              InvestedImage
              InvestorImage
              Year
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <ResultsGridStyles>
      {data.allAirtable.edges.map((result) => (
        <ResultCard
          year={result.node.data.Year}
          investorName={result.node.data.InvestorName}
          investorImage={result.node.data.InvestorImage}
          investedName={result.node.data.InvestedName}
          investedImage={result.node.data.InvestedImage}
        />
      ))}
    </ResultsGridStyles>
  );
}
