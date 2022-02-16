import React from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* height: 60vh; */
  position: relative;
  padding: 2rem;
  width: 100vw;
  background-color: #f4ebeb;
  ${mobile({ padding: "10px", width: "100%" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-family: inherit;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  ${mobile({ fontSize: "2rem" })}
`;
const Para = styled.p`
  font-size: 1.2rem;
  font-family: inherit;
  font-weight: 500;
  ${mobile({ fontSize: "1rem", textAlign: "center" })}
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 60%;
  ${mobile({ width: "40%" })}
`;
const Input = styled.input`
  flex: 8;
  padding-left: 5px;
  font-size: 1.2rem;
  font-family: inherit;
  ${mobile({ fontSize: "1rem" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  padding: 5px;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Para>Get timely updates from your favourite products</Para>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
