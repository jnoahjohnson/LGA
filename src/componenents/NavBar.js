import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { Button, Spacer } from "./Utility";
import LGALogo from "../images/LGALogo.png";
import { Menu } from "react-feather";
import SideBarNav from "./SideBarNav";

const NavBarStyles = styled.nav`
  width: ${({ isScrolled }) => (isScrolled ? "100%" : "90%")};
  max-width: ${({ isScrolled }) => (isScrolled ? "100%" : "1500px")};
  transition: all 0.6s;
  background: var(--primary, blue);
  z-index: 300;
  box-shadow: var(--defaultShadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.75rem;
  color: white;

  position: fixed;
  top: ${({ isScrolled }) => (isScrolled ? "0" : "25px")};
  left: 50%;
  transform: translate(-50%, 0);

  img {
    width: 125px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 1rem;
    font-size: 1.15rem;
    font-weight: 600;
  }

  a {
    display: block;
    position: relative;
    overflow: hidden;
    padding-bottom: 3px;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15em;
    background-color: var(--accent);
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }

  .active-link::after {
    transform: translate3d(0, 0, 0);
  }

  .open-menu {
    display: none;
  }

  @media (max-width: 940px) {
    .links {
      display: none;
    }

    .open-menu {
      display: block;
    }
  }
`;

const NavBar = ({ fullNav, setMenuIsOpen }) => {
  const [isScrolled, setIsScrolled] = useState(fullNav ? true : false);

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", (e) => {
        let scrollPosition = window.scrollY;

        if (!fullNav) {
          if (scrollPosition > 400) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      });
    }
  }, []);
  return (
    <NavBarStyles isScrolled={isScrolled}>
      <img src={LGALogo} alt="Logan Growth Advisors" />

      <div onClick={() => setMenuIsOpen()}>
        <Menu className="open-menu" size={32} />
      </div>

      <ul className="links">
        <li>
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName="active-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/team" activeClassName="active-link">
            Team
          </Link>
        </li>
        <li>
          <Link to="/results" activeClassName="active-link">
            Results
          </Link>
        </li>
        <li>
          <Link to="/hiring" activeClassName="active-link">
            Hiring
          </Link>
        </li>
        <Spacer width={20} />
        <Button onClick={() => navigate("/contact")}>Connect</Button>
      </ul>
    </NavBarStyles>
  );
};

export default NavBar;
