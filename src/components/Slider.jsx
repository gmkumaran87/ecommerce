import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SliderItems from "./SliderItems";

const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  flex-flow: row nowrap;
  align-items: center;
  transform: translateX(${(props) => props.counter * -100}vw);
`;

const Arrow = styled.div`
  position: absolute;
  border: 1px solid lightgray;
  top: 45%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 99;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  opacity: 0.5;
  background-color: #fff7f7;
  border-radius: 50%;
`;

const Slider = () => {
  const [sliderCounter, setSlider] = useState(0);
  const handleSlider = (direction) => {
    console.log(direction, sliderCounter);
    let newSlider = 0;
    if (direction === "left") {
      newSlider = sliderCounter === 0 ? 2 : sliderCounter - 1;
      // setSlider((preValue) => (preValue === 0 ? 2 : preValue--));
    } else {
      newSlider = sliderCounter === 2 ? 0 : sliderCounter + 1;
      // setSlider((preValue) => (preValue === 2 ? 0 : preValue++));
    }

    setSlider(newSlider);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlider("left")}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <SliderContainer counter={sliderCounter}>
        {sliderItems.map((el) => (
          <SliderItems key={el.id} items={el} />
        ))}
      </SliderContainer>
      <Arrow direction="right" onClick={() => handleSlider("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
