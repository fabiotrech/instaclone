import React, { Fragment } from "react";
import Actions from "./Actions";
import Author from "./Author";
import Comments from "./Comments";
import LikesCounter from "./LikesCounter";
import PostDate from "./PostDate";
import PostDescription from "./PostDescription";

const Post = () => {
  return (
    <Fragment>
      <Author></Author>
      <img src="https://via.placeholder.com/615" alt="" />
      <Actions></Actions>
      <LikesCounter></LikesCounter>
      <PostDescription></PostDescription>
      <Comments></Comments>
      <PostDate></PostDate>
    </Fragment>
  );
};

export default Post;
