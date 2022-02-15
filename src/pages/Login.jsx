import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(167, 161, 161, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  background-size: cover;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
`;

const Title = styled.h1`
  /* text-align: center; */
  font-size: 1.2rem;
  font-weight: 400;
  font-family: inherit;
  /* letter-spacing: 2px; */
  margin-bottom: 0.5rem;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;
const Input = styled.input`
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  margin-top: 0.71rem;
  width: 90%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: teal;
  border: none;
  font-family: inherit;
  color: #fff;
  margin-top: 1rem;
  width: 30%;
`;
const Link = styled.a`
  font-family: inherit;
  font-size: 0.75rem;
  text-decoration: underline;
  text-transform: uppercase;
  margin: 5px 0;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" type="text" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>
          <Link>Donot remember your password?</Link>
          <Link>create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
