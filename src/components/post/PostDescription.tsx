import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 4px 0;
`;

const AuthorName = styled(Link)`
  font-weight: 600;
  margin-right: 5px;
  text-transform: lowercase;
  text-decoration: none;
`;

type DescriptionProps = {
  author: string;
  message: string;
};

const PostDescription: FunctionComponent<DescriptionProps> = ({
  author,
  message,
}) => {
  return (
    <Container>
      <AuthorName to={`/${author}`}>{author}</AuthorName>
      <span>{message}</span>
    </Container>
  );
};

export default PostDescription;
