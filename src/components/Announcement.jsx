import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: teal;
  text-align: center;
  font-family: inherit;
  font-size: 1.25rem;
  color: #fff;
  padding: 5px;
  ${mobile({ fontSize: "1rem" })}
`;

const Announcement = () => {
  return (
    <Container>Summer Sale offer, valid upto next one month...!</Container>
  );
};

export default Announcement;
