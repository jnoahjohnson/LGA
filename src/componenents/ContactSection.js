import React from "react";
import styled from "styled-components";

const ContactSectionStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: var(--contentPadding);
  height: 400px;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <h1>Contact</h1>
    </ContactSectionStyles>
  );
}
