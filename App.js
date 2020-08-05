import React, { useState } from "react";
import * as Font from 'expo-font'
import { Text, Image, View, StatusBar } from "react-native";
import { AppLoading } from "expo";
import {NavigationContainer} from '@react-navigation/native'
import { Asset } from "expo-asset";
import {Ionicons} from '@expo/vector-icons'
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFont = fonts => fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)])

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFont([Ionicons.font]);
    return Promise.all([...images, ...fonts])
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
    <StatusBar barStyle="light-content"/>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
