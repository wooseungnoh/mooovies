import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "./Movies/Slide";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";

const { height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;

const Slider = ({ element }) => (
  <Container>
    <Swiper controlsEnabled={false} loop timeout={3}>
      {element.map((item) => (
        <Slide
          key={item.id}
          id={item.id}
          title={item.original_title ? item.original_title : item.name}
          overview={item.overview}
          votes={item.vote_average}
          backgroundImage={item.backdrop_path}
          poster={item.poster_path}
        />
      ))}
    </Swiper>
  </Container>
);

Slider.propTypes = {
  element: PropTypes.array.isRequired,
};

export default Slider;
