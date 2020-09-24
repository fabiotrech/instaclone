import React from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  overflow: hidden;
`;

const Actions = () => {
  return (
    <Content>
      <ActionButton type="button">
        <FaRegHeart size="24px" />
      </ActionButton>
      <ActionButton type="button">
        <FaRegComment size="24px" />
      </ActionButton>
      <ActionButton type="button">
        <FaRegPaperPlane size="24px" />
      </ActionButton>
    </Content>
  );
};

export default Actions;
