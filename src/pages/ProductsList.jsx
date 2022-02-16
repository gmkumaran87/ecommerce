import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Filters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  ${mobile({
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  })}
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Select = styled.select`
  padding: 5px;
  font-family: inherit;
  margin-left: 0.5rem;
  border: 2px solid lightgray;
  ${mobile({ margin: "10px 0px", width: "90%", borderRadius: "0px" })}
`;
const Option = styled.option``;

const ProductsList = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>New Arrivals</Title>
        <FilterContainer>
          <Filters>
            <Span>Filter Products: </Span>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Blue</Option>
              <Option>Green</Option>
              <Option>Yellow</Option>
            </Select>
          </Filters>
          <Filters>
            <Span> Sort Products </Span>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filters>
        </FilterContainer>
      </Wrapper>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductsList;
