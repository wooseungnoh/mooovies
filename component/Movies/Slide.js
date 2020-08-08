import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";

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
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 7px;
`;
const VotesContainer = styled.View`
  margin-bottom: 5px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 500;
  color: rgb(220, 220, 220);
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 8px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <Bg source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</Title>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>{overview.slice(0, 120)}</Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
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
