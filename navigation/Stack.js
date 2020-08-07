import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Home from "../screens/Movies";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor:'black',
        shadowColor:'black'
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
