import React from "react";
import styled from "styled-components";

const SmallPersonCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  .name {
    padding: 0;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    color: white;
  }

  .title {
    font-size: 1.25rem;
    color: var(--accent);
    padding: 0;
  }
`;

const PersonImage = styled.div`
  height: 300px;
  background: url(${(props) => props.backgroundImage});
  width: 100%;
  background-size: cover;
  background-repeat: none;
  background-position: top;
`;

const SmallPersonCard = ({ name, title, image, imageSource }) => (
  <SmallPersonCardStyles>
    {image ? image : <PersonImage backgroundImage={imageSource}></PersonImage>}
    <h1 className="name">{name}</h1>
    <h2 className="title">{title}</h2>
  </SmallPersonCardStyles>
);

export default SmallPersonCard;
