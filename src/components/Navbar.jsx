import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Nav = styled.nav`
  height: 70px;
  font-family: inherit;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 5px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ fontSize: "1rem", marginLeft: "5px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "flex-start" })}
`;

const Language = styled.span`
  font-size: 15px;
  margin-right: 1rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
`;
const InputText = styled.input`
  border: none;
  padding: 5px;
  font-family: inherit;
  width: 120px;
  ${mobile({ width: "50px" })}
`;

const UList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const List = styled.li`
  list-style-type: none;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  ${mobile({ fontSize: ".8rem" })}
`;
const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <InputText placeholder="Search"></InputText>
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>Shopify</Center>
        <Right>
          <UList>
            <List>Login</List>
            <List>Register</List>
            <List>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </List>
          </UList>
        </Right>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
