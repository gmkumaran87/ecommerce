import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 70vh;
  position: relative;
  margin: 3px;
  flex: 1;
  /* width: 100vw; */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  font-family: inherit;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #fff;
  font-family: inherit;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
