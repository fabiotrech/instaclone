import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-weight: 600;
  margin: 4px 0 5px;
`;

type LikesCounterProps = {
  count: number;
};

const LikesCounter: FunctionComponent<LikesCounterProps> = ({ count }) => {
  if (!count || count <= 0) return null;
  return <Container>{count} Me gusta</Container>;
};

export default LikesCounter;
