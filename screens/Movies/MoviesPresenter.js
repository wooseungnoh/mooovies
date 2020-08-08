import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../component/Movies/Slide";
import Title from "../../component/Title";
import { ScrollView } from "react-native-gesture-handler";
import Vertical from "../../component/Vertical";
import Horizontal from "../../component/Horizontal";
import ScrollContainer from "../../component/ScrollContainer";
import HorizontalSlider from "../../component/HorizontalSlider";
import List from "../../component/List";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upComing }) => {
  return (
    <ScrollContainer loading={loading}>
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <HorizontalSlider title={"Popular Movies"}>
            {popular.map((movie) => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </HorizontalSlider>
          <List title="Comming Soon">
            {upComing.map((movie) => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </List>
        </Container>
      </>
    </ScrollContainer>
  );
};
