import React, { Fragment, FunctionComponent } from "react";
import styled from "styled-components";
import CommentModel from "../../models/comment-model";

const AuthorName = styled.span`
  font-weight: 600;
  margin-right: 5px;
  text-transform: lowercase;
`;

const Comment = styled.div`
  margin: 4px 0;
`;

type CommentsProps = {
  comments: CommentModel[];
};

const Comments: FunctionComponent<CommentsProps> = ({ comments }) => {
  return (
    <Fragment>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <AuthorName>{comment.author}</AuthorName>
          <span>{comment.message}</span>
        </Comment>
      ))}
    </Fragment>
  );
};

export default Comments;
