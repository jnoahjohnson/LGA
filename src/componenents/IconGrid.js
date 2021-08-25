import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const IconItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--light);

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

  svg {
    width: 30px;
    height: 30px;
  }

  .iconTitle {
    padding: 0.5rem 0;
    margin: 0;

    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

const IconItem = ({ data }) => (
  <IconItemStyles>
    {data.icon}
    <h2 className="iconTitle">{data.title}</h2>
    <p>{data.text}</p>
  </IconItemStyles>
);

const IconGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--contentPadding);

  padding: 2.5rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const IconGrid = ({ data }) => {
  return (
    <IconGridStyles>
      {data.map((iconItem, index) => (
        <Fade delay={index * 400}>
          <IconItem data={iconItem} />
        </Fade>
      ))}
    </IconGridStyles>
  );
};

export default IconGrid;
