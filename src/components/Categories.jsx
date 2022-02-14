import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 10px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
