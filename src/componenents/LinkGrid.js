import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

const LinkCardStyles = styled.div`
  background: var(--accent);
  color: white;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  font-size: 2rem;

  overflow: hidden;
  padding: 1.5rem 6rem;

  width: 100%;

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
    <LinkCardStyles longText={longText} onClick={() => navigate(`/#${link}`)}>
      <span className="background-number">{number}</span>
      <p>{title}</p>
    </LinkCardStyles>
  );
};

const LinkGridStyles = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
`;

const LinkGrid = () => {
  return (
    <LinkGridStyles>
      <LinkCard number={1} title="Increase Value" link="increase-value" />
      <LinkCard
        number={2}
        title="Improve Speed and Certainty to Close"
        longText={true}
        link="improve-speed"
      />
      <LinkCard number={3} title="Defend Founders" link="defend-founders" />
    </LinkGridStyles>
  );
};

export default LinkGrid;
