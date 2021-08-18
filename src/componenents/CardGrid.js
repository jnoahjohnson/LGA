import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const CardStyles = styled.div`
  background: var(--light);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  box-shadow: var(--defaultShadow);

  padding: 0.5rem;

  position: relative;

  img {
    width: 100%;
    margin-top: -3px;
  }

  .title {
    background: var(--primary);
    width: 250px;
    text-align: center;
    padding: 0.5rem;
    text-transform: uppercase;
    margin-top: -40px;
    font-size: 1.75rem;
  }

  .text {
    background: var(--primary);
    height: 160px;
    padding: 1rem;
  }
`;

const Card = ({ card }) => (
  <CardStyles>
    <h2 className="title">{card.title}</h2>
    {card.image}
    <p className="text">{card.text}</p>
  </CardStyles>
);

const CardGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  padding-top: 50px;
`;

const CardGrid = ({ data }) => {
  return (
    <CardGridStyles>
      {data.map((card, index) => (
        <Fade delay={index * 400}>
          <Card card={card} />
        </Fade>
      ))}
    </CardGridStyles>
  );
};

export default CardGrid;
