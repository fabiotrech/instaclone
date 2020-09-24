import React, { Fragment } from "react";
import styled from "styled-components";

const dummyComments = [
  {
    author: "Author 1",
    message:
      "Cillum aliqua excepteur in incididunt aliqua ipsum ad consectetur magna proident esse proident.",
  },
  {
    author: "Author 2",
    message:
      "Fugiat occaecat est sit duis eu ut qui nulla officia occaecat et voluptate eiusmod fugiat. Ipsum minim aliqua excepteur est Lorem consectetur enim Lorem in et reprehenderit voluptate. Amet esse elit mollit laborum consectetur aute ad esse ad labore Lorem cupidatat.",
  },
  {
    author: "Author 3",
    message: "Veniam Lorem nisi in esse qui ipsum nisi.",
  },
];

const AuthorName = styled.span`
  font-weight: 600;
  margin-right: 5px;
  text-transform: lowercase;
`;

const Comment = styled.div`
  margin: 4px 0;
`;

const Comments = () => {
  return (
    <Fragment>
      {dummyComments.map((comment, index) => (
        <Comment key={index}>
          <AuthorName>{comment.author}</AuthorName>
          <span>{comment.message}</span>
        </Comment>
      ))}
    </Fragment>
  );
};

export default Comments;
