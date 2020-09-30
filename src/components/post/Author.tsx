import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 100%;
`;

const AuthorName = styled.span`
  font-weight: 600;
`;

type AuthorProps = {
  name: string;
  avatarUrl: string;
};

const Author: FunctionComponent<AuthorProps> = ({ name, avatarUrl }) => {
  return (
    <Content>
      <Avatar src={avatarUrl} alt={name} />
      <AuthorName>{name}</AuthorName>
    </Content>
  );
};

export default Author;
