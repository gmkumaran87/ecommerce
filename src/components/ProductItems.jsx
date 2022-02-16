import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { mobile } from "../responsive";

const Info = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 0.5s ease;
`;

const Icon = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  z-index: 2;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  flex: 1;
  min-width: 220px;
  height: 50vh;
  position: relative;
  margin: 4px;
  background-color: #d8eef5;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* box-shadow: 3px 4px rgba(0, 0, 0, 0.5); */
  border: 1px solid lightgray
  ${mobile({ margin: "0px" })}

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  /* width: 100%; */
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  ${mobile({ width: "250px", height: "250px" })}
`;

const ProductItems = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItems;
