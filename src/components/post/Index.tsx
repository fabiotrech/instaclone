import React from "react";
import styled from "styled-components";

import Actions from "./Actions";
import Author from "./Author";
import Comments from "./Comments";
import LikesCounter from "./LikesCounter";
import PostDate from "./PostDate";
import PostDescription from "./PostDescription";
import PostForm from "./PostForm";

const Container = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  max-width: 615px;
  border-radius: 3px;
`;

const PostImage = styled.img`
  display: block;
`;

const Details = styled.div`
  padding: 2px 15px 15px;
`;

const Post = () => {
  const handleLike = () => {
    alert("like");
  };

  const handleGoToPost = () => {
    alert("go to post");
  };

  const handleSendMessage = () => {
    alert("send message");
  };

  return (
    <Container>
      <Author />
      <PostImage src="https://via.placeholder.com/615" alt="" />
      <Actions
        onLike={handleLike}
        onGoToPost={handleGoToPost}
        onSendMessage={handleSendMessage}
      />
      <Details>
        <LikesCounter />
        <PostDescription />
        <Comments />
        <PostDate />
      </Details>
      <PostForm />
    </Container>
  );
};

export default Post;
