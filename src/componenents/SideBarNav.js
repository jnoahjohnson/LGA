import React from "react";
import styled from "styled-components";
import { X } from "react-feather";
import { Link } from "gatsby";
import { Button, Spacer } from "./Utility";
import { navigate } from "@reach/router";

const SideBarStyles = styled.div`
  background: var(--primary);
  color: white;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(450px)"};
  width: 250px;
  height: 100vh;
  z-index: 400;

  transition: transform 0.5s;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  .close-button {
    margin: 1rem 0 0 1rem;
  }
`;

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  text-align: center;
  align-items: center;

  font-size: 1.25rem;

  a {
    display: block;
    position: relative;
    overflow: hidden;
    padding-bottom: 3px;
    margin-bottom: 1rem;
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
`;

export default function SideBarNav({ isOpen, setIsOpen }) {
  return (
    <SideBarStyles isOpen={isOpen}>
      <div onClick={setIsOpen} className="close-button">
        <X />
      </div>
      <ListStyle>
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
      </ListStyle>
    </SideBarStyles>
  );
}
