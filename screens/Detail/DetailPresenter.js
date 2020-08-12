import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../component/ScrollContainer";
import * as WebBrowser from "expo-web-browser";
import { apiImage } from "../../api";
import { Dimensions, ActivityIndicator } from "react-native";
import Poster from "../../component/Poster";
import Votes from "../../component/Votes";
import { formatDate } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Link from "../../component/Detail/Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 50px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 600;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ openBrowser, result, loading }) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{ paddingBottom: 80 }}
  >
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes && <Votes votes={result.votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>OverView</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : null}
        {loading && (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        )}
        {result.spoken_languages ? (
          <>
            <DataName>언어</DataName>
            <DataValue>
              {result.spoken_languages.map((l) => `${l.name} `)}
            </DataValue>
          </>
        ) : null}
        {result.genres ? (
          <>
            <DataName>장르</DataName>
            <DataValue>{result.genres.map((g) => `${g.name} `)}</DataValue>
          </>
        ) : null}
        {result.release_date ? (
          <>
            <DataName>개봉일</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        ) : null}
        {result.status ? (
          <>
            <DataName>상태</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} 분</DataValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <DataName>첫 방영일</DataName>
            <DataValue>{formatDate(result.first_air_date)}</DataValue>
          </>
        ) : null}
        {result.imdb_id && (
          <Link
            onPress={() =>
              openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
            }
            text={"IMDB Page"}
            icon={"imdb"}
          />
        )}
        {result.videos.results?.length > 0 && (
          <>
            <DataName>Viedos</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        )}
      </Data>
    </>
  </ScrollContainer>
);
