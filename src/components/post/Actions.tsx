import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30px);
`;

const ActionButton = styled.button`
  border: none;
  background-color: #ccc;
  overflow: hidden;
`;

const Actions = () => {
  return (
    <Content>
      <ActionButton type="button">Like</ActionButton>
      <ActionButton type="button">Comment</ActionButton>
      <ActionButton type="button">Send message</ActionButton>
    </Content>
  );
};

export default Actions;
