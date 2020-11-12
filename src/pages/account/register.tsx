import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccentColor, Form, AccentButton, Input } from "../../theme";

const Register = () => {
  return (
    <Container>
      <FormContainer>
        <h1>Instaclone</h1>
        <h2>Regístrate para ver fotos y videos de tus amigos.</h2>
        <RegisterForm />

        <p>
          Al registrarte, aceptas nuestras Condiciones, la Política de datos y
          la Política de cookies.
        </p>
      </FormContainer>
      <SignInBox>
        <span>¿Tienes una cuenta?</span>
        <Link to="/account/login">Inicia sesión</Link>
      </SignInBox>
    </Container>
  );
};

export default Register;

const RegisterForm = () => {
  return (
    <Form>
      <Input type="email" placeholder="Correo electronico" required />
      <Input type="text" placeholder="Nombre completo" />
      <Input type="text" placeholder="Nombre de usuario" required />
      <Input type="password" placeholder="Contraseña" required />

      <AccentButton type="submit" block>
        Registrarte
      </AccentButton>
    </Form>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 350px;
`;

const FormContainer = styled.div`
  border: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 20px 40px 40px;
  border-radius: 1px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    color: #8e8e8e;
    font-size: 12px;
    line-height: 16px;
    margin-top: 15px;
    text-align: center;
  }
`;

const SignInBox = styled.div`
  border: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 25px 0;
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
  border-radius: 1px;

  a {
    color: ${AccentColor};
    text-decoration: none;
    margin-left: 5px;
  }
`;
