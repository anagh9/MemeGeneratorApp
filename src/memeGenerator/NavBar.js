import React from "react";
import styled from "styled-components";
import { StyledList, StyledListElem } from "./modules/LifeStyle";

/*
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: palevioletred;
`;
*/

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: centre;
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: #a10505;
  a:link {
    color: yellow;
    background-color: transparent;
    text-decoration: none;
  }

  a:visited {
    color: yellow;
    background-color: transparent;
    text-decoration: none;
  }

  a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
  }

  a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledList>
        <StyledListElem>
          <a href="/">Meme Generator</a>
        </StyledListElem>
      </StyledList>
    </StyledNavBar>
  );
};

export default NavBar;
