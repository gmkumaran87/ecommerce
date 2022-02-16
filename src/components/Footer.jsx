import React from "react";
import { mobile } from "../responsive";
import {
  Twitter,
  Pinterest,
  Facebook,
  Instagram,
  LocationOnOutlined,
  Phone,
  MailOutline,
} from "@mui/icons-material/";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem 0rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  /* height: 50vh; */
  ${mobile({ flexFlow: "column nowrap" })}
`;
const Left = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;
const Title = styled.h1`
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
const Para = styled.p`
  font-size: 0.91rem;
  font-weight: 500;
  margin-bottom: 15px;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-right: 2rem;
`;
const Icon = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #${(props) => props.bg};
  margin-right: 1rem;
`;

// Links
const Center = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;
const ListItem = styled.li`
  list-style-type: none;
  width: 50%;
  margin-bottom: 10px;
  font-size: 0.91rem;
  font-weight: 500;
`;

//Address
const Right = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 1rem;
`;
const ContactItem = styled.div`
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>Shopify</Title>
        <Para>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </Para>
        <SocialWrapper>
          <Icon bg="3B5999">
            <Facebook style={{ color: "white" }} />
          </Icon>
          <Icon bg="55ACEE">
            <Twitter style={{ color: "white" }} />
          </Icon>
          <Icon bg="E4405F">
            <Instagram style={{ color: "white" }} />
          </Icon>
          <Icon bg="E60023">
            <Pinterest style={{ color: "white" }} />
          </Icon>
        </SocialWrapper>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Men Clothing</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracklist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactsWrapper>
          <ContactItem>
            <LocationOnOutlined /> 26, Pillaiyar kovil 4th street, Perungudi
          </ContactItem>
          <ContactItem>
            <Phone /> +91 - 9176630282
          </ContactItem>
          <ContactItem>
            <MailOutline /> abc-bsdf@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </ContactsWrapper>
      </Right>
    </Container>
  );
};

export default Footer;
