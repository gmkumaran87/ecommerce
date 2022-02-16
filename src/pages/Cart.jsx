import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ${mobile({ padding: "10px", overflowX: "hidden" })}
`;
const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 1rem;
  ${mobile({ fontSize: "16px" })}
`;
const Top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${mobile({ width: "90%" })}
`;

const TopButton = styled.button`
  padding: 10px 20px;
  font-family: inherit;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #${(props) => props.type === "filled" && "000"};
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid teal")};
  color: #${(props) => (props.type === "filled" ? "fff" : "000")};
  font-weight: 600;
  ${mobile({ padding: "5px", fontSize: ".71rem" })}
`;

const TopCenter = styled.div``;
const TopSpan = styled.span`
  text-decoration: underline;
  margin-left: 15px;
  font-family: inherit;
  ${mobile({ display: "none" })}
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  ${mobile({ flexFlow: "column nowrap" })}
`;
const Products = styled.div`
  flex: 3;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
  })}
`;
const Left = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  ${mobile({ width: "90%" })}
`;
const Center = styled.div`
  flex: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px;
  height: 120px;
  ${mobile({ width: "90%" })}
`;
const ProductDetails = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  ${mobile({ flexFlow: "column nowrap" })}
`;

const Span = styled.span`
  font-weight: bolder;
`;

const Para = styled.p``;

const Color = styled.div`
  background-color: #000;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0rem",
  })}
`;
const PriceContainer = styled.div``;
const Quantity = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  ${mobile({ marginTop: "0px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid #949090;
  /* height: 50vh; */
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const SummaryItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const SummarySpan = styled.span`
  margin: 0;
  text-decoration: none;
`;
// const Top = styled.div``;
const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>continue shopping</TopButton>
          <TopCenter>
            <TopSpan>Shopping Bag(2)</TopSpan>
            <TopSpan>Your Whislist </TopSpan>
          </TopCenter>
          <TopButton type="filled">checkout now</TopButton>
        </Top>
        <Bottom>
          <Products>
            <Left>
              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
            </Left>
            <Center>
              <ProductDetails>
                <Para>
                  <Span>Product:</Span> Jessie Thunder Shoes
                </Para>
              </ProductDetails>
              <ProductDetails>
                <Para>
                  <Span>ID:</Span> ED2549861 Shoes
                </Para>
              </ProductDetails>
              <ProductDetails>
                <Para>
                  <Span>Size:</Span> 32
                </Para>
              </ProductDetails>
              <Color />
            </Center>
            <Right>
              <Quantity>
                <Add />
                <Span
                  style={{
                    margin: "4px",
                    padding: " 2px 4px",
                    border: "1px solid lightgray",
                  }}
                >
                  2
                </Span>
                <Remove />
              </Quantity>
              <Price>$30</Price>
            </Right>
          </Products>
          <Summary>
            <Title
              style={{ fontWeight: 400, fontSize: "1.2rem", textAlign: "left" }}
            >
              ORDER SUMMARY
            </Title>
            <SummaryItem>
              <SummarySpan>Subtotal</SummarySpan>
              <SummarySpan>$30</SummarySpan>
            </SummaryItem>
            <SummaryItem>
              <SummarySpan>Estimated Shipping</SummarySpan>
              <SummarySpan>$20</SummarySpan>
            </SummaryItem>
            <SummaryItem>
              <SummarySpan>Shipping Discount</SummarySpan>
              <SummarySpan>$10</SummarySpan>
            </SummaryItem>
            <SummaryItem>
              <SummarySpan style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                Total
              </SummarySpan>
              <SummarySpan style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                $60
              </SummarySpan>
            </SummaryItem>
            <TopButton
              type="filled"
              style={{ width: "100%", marginTop: "1rem" }}
            >
              checkout now
            </TopButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
