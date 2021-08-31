import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import DynamicImage from "./DynamicImage";

const ResultCardStyles = styled.div`
  background: #e6e6e6;
  text-align: center;
  position: relative;
  border: 4px solid var(--primary);
  box-shadow: var(--defaultShadow);
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
  width: 100%;
`;

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 375px;
  padding: 0.75rem 1.25rem;
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
      <YearSection>{year}</YearSection>
      <ResultContent>
        {investorImage ? (
          <DynamicImage image={investorImage} />
        ) : (
          <h1>{investorName}</h1>
        )}
        <h2 style={{ padding: "30px 0" }}>Invested In</h2>
        {investedImage ? (
          <DynamicImage image={investedImage} />
        ) : (
          <h1 style={{ height: 150, display: "flex", alignItems: "center" }}>
            {investedName}
          </h1>
        )}
      </ResultContent>
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
      allAirtable(
        filter: { table: { eq: "Results" } }
        sort: { fields: data___Year, order: DESC }
      ) {
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
