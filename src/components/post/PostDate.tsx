import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.p`
  color: #8e8e8e;
  font-size: 10px;
  text-transform: uppercase;
`;

type PostDateProps = {
  date: Date;
};

const PostDate: FunctionComponent<PostDateProps> = ({ date }) => {
  let text = "";
  const diff = Math.abs(Date.now() - date.valueOf());
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  text =
    diffSeconds < 60
      ? "Hace unos segundos"
      : diffMinutes < 60
      ? "Hace unos minutos"
      : diffHours < 24
      ? "Hace unas horas"
      : diffDays < 7
      ? "Hace unos días"
      : date.toLocaleDateString();

  if (text.length === 0) return null;
  return <Container>{text}</Container>;
};

export default PostDate;
