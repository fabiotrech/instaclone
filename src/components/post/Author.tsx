import React from "react";
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

function Author() {
  return (
    <Content>
      <Avatar src="https://via.placeholder.com/32" alt="Author name"></Avatar>
      <AuthorName>Author name</AuthorName>
    </Content>
  );
}

export default Author;
