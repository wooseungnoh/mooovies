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
import Slider from "../../component/Slider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  margin-top: 30px;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title="Popular Shows">
        {popular.map((shows) => (
          <Vertical
            isTv={true}
            id={shows.id}
            key={shows.id}
            poster={shows.poster_path}
            title={shows.name}
            votes={shows.vote_average}
          />
        ))}
      </HorizontalSlider>
      <Slider isTv={true} element={thisWeek} />
      <HorizontalSlider title="Top Rated">
        {topRated.map((shows) => (
          <Vertical
            isTv={true}
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
            isTv={true}
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
