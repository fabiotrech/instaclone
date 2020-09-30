import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PostModel from "../../models/post-model";

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

const Post: FunctionComponent<PostModel> = ({
  author,
  authorAvatarUrl,
  imageUrl,
  likesCount,
  message,
  comments,
  creationDate,
}) => {
  const handleLike = () => {};

  const handleViewComments = () => {};

  const handleSendMessage = () => {};

  return (
    <Container>
      <Author name={author} avatarUrl={authorAvatarUrl} />
      <PostImage src={imageUrl} alt="" />
      <Actions
        onLike={handleLike}
        onViewComments={handleViewComments}
        onSendMessage={handleSendMessage}
      />
      <Details>
        <LikesCounter count={likesCount} />
        <PostDescription author={author} message={message} />
        <Comments comments={comments} />
        <PostDate date={creationDate} />
      </Details>
      <PostForm />
    </Container>
  );
};

export default Post;
