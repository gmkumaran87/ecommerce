import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 0.8;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
  ${mobile({
    display: "flex",
    alignItems: "center",
    flexFlow: "column nowrap",
    justifyContent: "center",
  })}
`;

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0;
  letter-spacing: 3px;
  font-weight: 600;
  ${mobile({ fontSize: "15px" })}
`;

const Button = styled.button`
  padding: 7px 15px;
  /* border: none; */
  font-family: inherit;
  letter-spacing: 2px;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: inherit;
  ${mobile({ fontSize: "1rem", padding: "10px" })}
`;

const SliderItems = (props) => {
  const { img, title, bg, desc } = props.items;

  return (
    <Wrapper bg={bg}>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Wrapper>
  );
};

export default SliderItems;
