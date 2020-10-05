import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaRegPaperPlane, FaUserCircle } from "react-icons/fa";
import { Container, HeaderHeight } from "../theme";

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  height: ${HeaderHeight}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NavContainer = styled(Container)`
  display: grid;
  grid-template-columns: 105px auto repeat(3, 40px);
  align-items: center;
  height: 100%;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
`;

const LinkIcon = styled(Link)`
  text-align: center;
`;

const NavBar = () => {
  return (
    <Header>
      <NavContainer>
        <Logo to="/">Instaclone</Logo>
        <SearchBar />
        <LinkIcon to="/">
          <FaHome size="24px" />
        </LinkIcon>
        <LinkIcon to="/direct/inbox">
          <FaRegPaperPlane size="24px" />
        </LinkIcon>
        <LinkIcon to="/fabiotrech">
          <FaUserCircle size="24px" />
        </LinkIcon>
      </NavContainer>
    </Header>
  );
};

const SearchBox = styled.div`
  display: grid;
  justify-self: center;
  max-width: 215px;

  input {
    border: 1px solid #ccc;
    background-color: #fafafa;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 3px;
  }
`;

const SearchBar = () => {
  return (
    <SearchBox>
      <input type="text" placeholder="Buscar" />
    </SearchBox>
  );
};

export default NavBar;
