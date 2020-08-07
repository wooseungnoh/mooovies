import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../../api";
import MoviesPresenter from './MoviesPresenter'

export default () => {
  const [movies, setMovies] = useState({
    loading:true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upComing: [],
    upComingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upComing, upComingError] = await movieApi.upcoming();
    setMovies({
      loading:false,
      nowPlaying,
      popular,
      upComing,
      nowPlayingError,
      popularError,
      upComingError,
    });
  };
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <MoviesPresenter {...movies}/>
  );
};
