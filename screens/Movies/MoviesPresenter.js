import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../component/Movies/Slide";
import Title from "../../component/Title";
import { ScrollView } from "react-native-gesture-handler";
import Vertical from "../../component/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular }) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
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
            <Title title={"Popular Movies"} />
            <ScrollView
              style={{ marginTop: 20 }}
              contentContainerStyle={{ paddingLeft: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {popular.map((movie) => (
                <Vertical
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
          </Container>
        </>
      )}
    </ScrollView>
  );
};
