import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  background: var(--primary);
`;

const FooterContentStyles = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem var(--contentPadding);
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
  }

  p {
    font-size: 0.8rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  column-gap: 10px;
  row-gap: 4px;

  margin-bottom: 10px;

  a {
    color: var(--accent);
    text-decoration: underline;
    padding: 0;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-align: right;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    padding: 0;
    font-weight: 800;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterStyles>
    <FooterContentStyles>
      <LeftSide>
        <StaticImage
          src="../images/LGALogo.png"
          alt="Logan Growth Advisors"
          width={200}
        />
        <LinkContainer>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Disclosure Statement</Link>
        </LinkContainer>
        <p>&copy; 2021, All Rights Reserved</p>
      </LeftSide>
      <RightSide>
        <Link to="/">Services</Link>
        <Link to="/">Team</Link>
        <Link to="/">Experience</Link>
        <Link to="/">Get in Touch</Link>
      </RightSide>
    </FooterContentStyles>
  </FooterStyles>
);

export default Footer;
