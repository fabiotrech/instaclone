import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 32px min-content;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 100%;
`;

const AuthorName = styled(Link)`
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

type AuthorProps = {
  name: string;
  avatarUrl: string;
};

const Author: FunctionComponent<AuthorProps> = ({ name, avatarUrl }) => {
  const toProfile = `/${name}`;

  return (
    <Content>
      <Link to={toProfile}>
        <Avatar src={avatarUrl} alt={name} />
      </Link>
      <AuthorName to={toProfile}>{name}</AuthorName>
    </Content>
  );
};

export default Author;
