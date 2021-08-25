import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Page from "../componenents/Page";

const ServicesStyles = styled.div`
  background: var(--darkBackground);
  width: 100%;
  overflow: scroll;

  max-height: 100vh;

  z-index: 10;

  scroll-snap-type: y mandatory;

  position: relative;
`;

const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: ${({ dark, blue }) =>
    dark ? "var(--darkBackground)" : blue ? "var(--primary)" : "var(--light)"};

  color: ${({ dark, blue }) => (dark || blue ? "white" : "black")};

  scroll-snap-align: start;
`;

const NavigationAreaStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: calc(50% - 200px);

  color: white;

  background: var(--primary);
  padding: 1.5rem;

  width: 400px;

  ul {
    list-style: none;

    display: flex;

    gap: 2rem;

    justify-content: center;
  }
`;

const NavigationArea = () => {
  return (
    <NavigationAreaStyles>
      <ul>
        <li>
          <Link to="#m-and-a">M&A</Link>
        </li>
        <li>
          <Link to="#capital-raise">Capital Raise</Link>
        </li>
        <li>
          <Link to="#m-and-a">Something</Link>
        </li>
      </ul>
    </NavigationAreaStyles>
  );
};

export default function ServicesPage() {
  return (
    <Page fullNav noScroll>
      <main>
        <ServicesStyles>
          <NavigationArea />
          <ServiceSection dark>
            <h1>Mergers and Acquisitions</h1>
          </ServiceSection>
          <ServiceSection>
            <h1>Capital Raise</h1>
          </ServiceSection>
          <ServiceSection dark>
            <h1>Other</h1>
          </ServiceSection>
        </ServicesStyles>
      </main>
    </Page>
  );
}
