import React from "react";
import styled from "styled-components";

import { popularProducts } from "../data";
import { mobile } from "../responsive";
import ProductItems from "./ProductItems";

const Container = styled.div`
  padding: 1rem;
  /* height: 100vh; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 3px;
  /* width: 100vw; */
  ${mobile({ padding: "10px" })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItems key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
