import React from "react";
import styled from "styled-components";

const PhotoHeaderStyles = styled.div`
  background: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 110px;
  padding: 7rem;

  .header-text {
    color: white;
    font-size: 4.5rem;
  }

  .first-word {
    color: var(--accent);
  }
`;

export default function PhotoHeader({ title, firstWord, backgroundImage }) {
  return (
    <PhotoHeaderStyles backgroundImage={backgroundImage}>
      <h1 className="header-text">
        <span className="first-word">{firstWord}</span> {title}
      </h1>
    </PhotoHeaderStyles>
  );
}
