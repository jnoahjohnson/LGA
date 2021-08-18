import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import styled from "styled-components";

import ReactFullpage from "@fullpage/react-fullpage";

const PageStyles = styled.div`
  height: 100vh;
`;

const Page = () => (
  <PageStyles>
    <h1>Hello there!</h1>
  </PageStyles>
);

const ValueAddFull = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ValueAddFull;
