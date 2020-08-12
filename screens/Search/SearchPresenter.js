import React from "react";
import styled from "styled-components/native";
import Input from "../../component/Search/Input";
import HorizontalSlider from "../../component/HorizontalSlider";
import Vertical from "../../component/Vertical";
import ScrollContainer from "../../component/ScrollContainer";

export default ({ movies, shows, keyword, onSubmit, onChange }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{
      paddingTop: 10,
    }}
  >
    <Input
      placeholder={"write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={"Tv results"}>
        {shows.map((show) => (
          <Vertical
            isTv={true}
            key={show.id}
            id={show.id}
            votes={show.vote_average}
            title={show.name}
            poster={show.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
