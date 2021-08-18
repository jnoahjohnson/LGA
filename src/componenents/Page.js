import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const GlobalStyle = createGlobalStyle`
    * {
        --primary: #102F4F;
        --accent: #2D85F4;
        --dark: #3E3D43;
        --darkBackground: #212121;
        --secondary: #849698;
        --light: #EBEBEB;
        --defaultShadow: 0px 0px 3.7623px rgba(0, 0, 0, 0.5);
        --heavyShadow: 0px 0px 10px rgba(0, 0, 0, .8);
        --contentPadding: 3rem;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    main {
      position: relative;
      z-index: 1;
    }

    footer {
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    
`;

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Page;
