import React from "react";
import styled from "styled-components";
import { AccentColor } from "../../theme";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: auto min-content;
  border-top: 1px solid #eee;
  padding: 15px;
`;

const TextInput = styled.input`
  border: none;
  background: none;
  outline: none;
`;

const SubmitButton = styled.button`
  color: ${AccentColor};
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

const PostForm = () => {
  return (
    <FormContainer method="POST">
      <TextInput type="text" placeholder="Agrega un comentario..."></TextInput>
      <SubmitButton type="button">Publicar</SubmitButton>
    </FormContainer>
  );
};

export default PostForm;
