import React from "react";
import styled from "styled-components";

const PersonCardStyles = styled.div`
  background: var(--primary);
  box-shadow: var(--defaultShadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0.9rem;

  width: 100%;

  .name {
    padding: 0;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 0.8rem;
    color: white;
  }

  .person-title {
    font-size: 1.5rem;
    color: var(--accent);
    padding: 0;
  }

  /* img {
    height: 400px;
  } */
`;

const PersonCard = ({ name, title, image, imageSource }) => (
  <PersonCardStyles>
    {image ? image : <img src={imageSource} alt={name} />}
    <h1 className="name">{name}</h1>
    <h2 className="person-title">{title}</h2>
  </PersonCardStyles>
);

export default PersonCard;
