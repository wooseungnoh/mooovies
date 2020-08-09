import React from "react";
import styled from "styled-components/native";
import Vertical from "../../component/Vertical";
import Horizontal from "../../component/Horizontal";
import ScrollContainer from "../../component/ScrollContainer";
import HorizontalSlider from "../../component/HorizontalSlider";
import List from "../../component/List";
import Slider from "../../component/Slider";

const Container = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upComing }) => {
  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <>
        <Slider element={nowPlaying}/>
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
