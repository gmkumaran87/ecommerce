import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  background-size: cover;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  /* text-align: center; */
  font-size: 1.2rem;
  font-weight: 600;
  font-family: inherit;
  margin-bottom: 0.5rem;
  ${mobile({ fontSize: "1rem" })}
`;
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;
const Input = styled.input`
  padding: 12px 5px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.71rem;
  width: 90%;
  border: 1px solid #37373b;
  ${mobile({ padding: "5px 10px" })}
`;

const Button = styled.button`
  padding: 10px;
  background-color: teal;
  border: none;
  font-family: inherit;
  color: #fff;
  margin-top: 1rem;
  width: 30%;
  ${mobile({ padding: "6px" })}
`;
const Agreement = styled.p`
  font-family: inherit;
  font-size: 0.75rem;
  margin: 10px 0;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="firstname" type="text" />
          <Input placeholder="lastname" type="text" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Button>REGISTER</Button>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
