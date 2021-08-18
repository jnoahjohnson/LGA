import React from "react";
import styled from "styled-components";

const LinkCardStyles = styled.div`
  background: var(--accent);
  color: white;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  font-size: ${({ longText }) => (longText ? "1.85rem" : "2.5rem")};

  height: 150px;
  overflow: hidden;
  padding: 1.25rem;

  .background-number {
    color: black;
    opacity: 0.2;
    font-size: 8rem;
    position: absolute;
    left: 10px;
    bottom: -30px;
    font-weight: 600;
  }

  p {
    width: 200px;
    text-align: center;
    font-weight: 500;
  }

  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    box-shadow: var(--defaultShadow);
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const LinkCard = ({ number, link, title, longText }) => {
  return (
    <LinkCardStyles longText={longText}>
      <span className="background-number">{number}</span>
      <p>{title}</p>
    </LinkCardStyles>
  );
};

const LinkGridStyles = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  justify-content: center;
  gap: 100px;
`;

const LinkGrid = () => {
  return (
    <LinkGridStyles>
      <LinkCard number={1} title="Increase Value" />
      <LinkCard
        number={2}
        title="Improve Speed and Certainty to Close"
        longText={true}
      />
      <LinkCard number={3} title="Defend Founders" />
    </LinkGridStyles>
  );
};

export default LinkGrid;
