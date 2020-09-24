import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 4px 0;
`;

const AuthorName = styled.span`
  font-weight: 600;
  margin-right: 5px;
  text-transform: lowercase;
`;

const PostDescription = () => {
  return (
    <Container>
      <AuthorName>Authorname</AuthorName>
      <span>Proident Lorem aute voluptate nulla excepteur.</span>
    </Container>
  );
};

export default PostDescription;
