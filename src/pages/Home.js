import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  JournalScreen,
  MeasuresScreen,
  TreamentScreen,
  ProfileScreen,
} from "./Realizar";
const TabNavigator = createBottomTabNavigator(
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
        ),
      },
    },
    Measures: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(TabNavigator);
