import axios from "axios";

const TMDB_KEY = "0e8fb57cfb741c7fe9b63bc4d14f5e37";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () =>
    getAnything("/movie/now_playing", { region: "kr", language: "ko" }),
  popular: () =>
    getAnything("/movie/popular", { region: "kr", language: "ko" }),
  upcoming: () =>
    getAnything("/movie/upcoming", { region: "kr", language: "ko" }),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today", { language: "ko" }),
  thisWeek: () => getAnything("/tv/on_the_air", { language: "ko" }),
  topRated: () => getAnything("/tv/top_rated", { language: "ko" }),
  popular: () => getAnything("/tv/popular", { language: "ko" }),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
