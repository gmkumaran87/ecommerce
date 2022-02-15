import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 10px 20px;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 1rem;
  width: 70%;
`;
const Filters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const Color = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  margin-left: 0.5rem;
`;

const Select = styled.select`
  padding: 2px;
  font-family: inherit;
  margin-left: 0.5rem;
`;
const Option = styled.option``;

const Button = styled.button`
  padding: 4px 8px;
  border: 2px solid teal;
  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  font-size: 1rem;
  margin-left: 1rem;
`;

const AddCart = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 1.5rem;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 5px;
  margin: 0 5px;
  width: 20px;
  border: 1px solid teal;
  font-family: inherit;
`;
const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 30</Price>
          <FilterContainer>
            <Filters>
              <Span>Colors </Span>
              <Color bg="000"></Color>
              <Color bg="990000"></Color>
              <Color bg="ff0000"></Color>
            </Filters>
            <Filters>
              <Span>Size </Span>
              <Select>
                <Option selected>S</Option>
                <Option>XS</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>M</Option>
                <Option>XXL</Option>
              </Select>
            </Filters>
          </FilterContainer>
          <AddCart>
            <Remove /> <Quantity>1</Quantity>
            <Add></Add>
            <Button>ADD to cart</Button>
          </AddCart>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleProduct;
