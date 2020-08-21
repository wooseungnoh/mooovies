import React, { useEffect, useState } from "react";
import { Dimensions, PanResponder, Animated } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: black;
  align-items: center;
`;
const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

const styles = {
  top: 60,
  height: HEIGHT / 1.2,
  width: "90%",
  position: "absolute",
};

export default ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      // 카드 버리기
      if (dx >= 230) {
        // right
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
        }).start(nextCard);
      } else if (dx <= -230) {
        // left
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
        }).start();
      }
    },
  });

  const rotationValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });

  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    //일 경우에

    outputRange: [1, 0.2, 1],
    //를 줘라
    extrapolate: "clamp",
    //한계치 설정
  });

  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {results.map((result, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
