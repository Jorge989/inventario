import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Config from "../pages/Config";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          headerShown: true,
          headerShown: true,
          title: "    CONFIGURAÇÕES",
          headerStyle: {
            backgroundColor: "#1D4A71",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            letterSpacing: 2.5,
          },
        }}
      />
    </Stack.Navigator>
  );
}
