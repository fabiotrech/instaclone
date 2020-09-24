import React from "react";
import styled from "styled-components";

import Actions from "./Actions";
import Author from "./Author";
import Comments from "./Comments";
import LikesCounter from "./LikesCounter";
import PostDate from "./PostDate";
import PostDescription from "./PostDescription";

const Container = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  max-width: 615px;
  border-radius: 3px;
`;

const Details = styled.div`
  padding: 2px 15px 15px;
`;

const Post = () => {
  return (
    <Container>
      <Author></Author>
      <img src="https://via.placeholder.com/615" alt="" />
      <Details>
        <Actions></Actions>
        <LikesCounter></LikesCounter>
        <PostDescription></PostDescription>
        <Comments></Comments>
        <PostDate></PostDate>
      </Details>
    </Container>
  );
};

export default Post;
