import React, { FunctionComponent } from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  padding: 2px 5px 0;
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
`;

type ActionsProps = {
  onLike: () => void;
  onGoToPost: () => void;
  onSendMessage: () => void;
};

const Actions: FunctionComponent<ActionsProps> = ({
  onLike,
  onGoToPost,
  onSendMessage,
}) => {
  return (
    <Container>
      <ActionButton type="button" onClick={onLike}>
        <FaRegHeart size="24px" />
      </ActionButton>
      <ActionButton type="button" onClick={onGoToPost}>
        <FaRegComment size="24px" />
      </ActionButton>
      <ActionButton type="button" onClick={onSendMessage}>
        <FaRegPaperPlane size="24px" />
      </ActionButton>
    </Container>
  );
};

export default Actions;
