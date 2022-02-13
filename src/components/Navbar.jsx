import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Nav = styled.nav`
  height: 70px;
  font-family: inherit;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
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
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 15px;
  margin-right: 1rem;
  cursor: pointer;
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
`;

const UList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;
const List = styled.li`
  list-style-type: none;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
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
