import React from "react";
import ScrollContainer from "../../component/ScrollContainer";
import HorizontalSlider from "../../component/HorizontalSlider";
import Vertical from "../../component/Vertical";
import styled from "styled-components/native";
import List from "../../component/List";
import Horizontal from "../../component/Horizontal";
import Swiper from "react-native-web-swiper";
import Slide from "../../component/Movies/Slide";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  margin-top: 30px;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;

export default ({ loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer loading={loading}>
    <Container>
      <HorizontalSlider title="Popular Shows">
        {popular.map((shows) => (
          <Vertical
            id={shows.id}
            key={shows.id}
            poster={shows.poster_path}
            title={shows.name}
            votes={shows.vote_average}
          />
        ))}
      </HorizontalSlider>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {thisWeek.map((shows) => (
            <Slide
              key={shows.id}
              id={shows.id}
              title={shows.name}
              overview={shows.overview}
              votes={shows.vote_average}
              backgroundImage={shows.backdrop_path}
              poster={shows.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <HorizontalSlider title="Top Rated">
        {topRated.map((shows) => (
          <Vertical
            id={shows.id}
            key={shows.id}
            poster={shows.poster_path}
            title={shows.name}
            votes={shows.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
