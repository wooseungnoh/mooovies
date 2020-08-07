import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Bg = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
height:100%;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;
`;
const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom:10px;
`;
const Votes = styled.Text`
  color: white;
  opacity: 0.7;
  margin-bottom:5px;
  font-size:12px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <Bg source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title}</Title>
        <Votes>{votes} / 10</Votes>
        <Overview>{overview.slice(0, 120)}</Overview>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
