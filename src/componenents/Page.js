import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBarNav from "./SideBarNav";

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

    html {
      scroll-behavior: smooth;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    main {
      position: relative;
      z-index: 1;
      /* overflow-x: hidden; */
    }

    footer {
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    h1, h2, h3 {
      padding: 0;
      margin: 0;
    }
    

    
`;

const Page = ({ children, fullNav, footer }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <NavBar
        fullNav={fullNav}
        setMenuIsOpen={() => {
          setMenuIsOpen(true);
        }}
      />
      <SideBarNav isOpen={menuIsOpen} setIsOpen={() => setMenuIsOpen(false)} />
      {children}
      {footer && <Footer />}
    </>
  );
};
export default Page;
