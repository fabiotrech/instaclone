import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 4px 0;
`;

const AuthorName = styled.span`
  font-weight: 600;
  margin-right: 5px;
  text-transform: lowercase;
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
      <AuthorName>{author}</AuthorName>
      <span>{message}</span>
    </Container>
  );
};

export default PostDescription;
