import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccentColor, Form, AccentButton, Input } from "../../theme";

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <h1>Instaclone</h1>
        <LoginForm />
        <ForgotContainer />
      </FormContainer>
      <RegisterBox>
        <span>¿No tienes una cuenta?</span>
        <Link to="/account/register">Regístrate</Link>
      </RegisterBox>
    </Container>
  );
};

export default Login;

const LoginForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Correo electrónico" required />
      <Input type="password" placeholder="Contraseña" required />

      <AccentButton type="submit" block>
        Iniciar sesión
      </AccentButton>
    </Form>
  );
};

const ForgotContainer = () => {
  return (
    <ForgotBox>
      <Link to="/account/reset">¿Olvidaste tu contraseña?</Link>
    </ForgotBox>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 350px;
`;

const FormContainer = styled.div`
  border: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 1px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const RegisterBox = styled.div`
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

const ForgotBox = styled.div`
  border-top: 1px solid #dbdbdb;
  position: relative;
  margin-top: 20px;
  padding-top: 20px;
  font-size: 12px;
  text-align: center;

  &:before {
    display: block;
    content: "o";
    color: #8e8e8e;
    background-color: #fff;
    font-size: 18px;
    padding: 0 15px;
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    color: ${AccentColor};
    text-decoration: none;
  }
`;
