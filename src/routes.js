import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Config from "./pages/Config";
import Home from "./pages/Home";
import Realizar from "./pages/Realizar";
import Listar from "./pages/Listar";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,

            title: "        CONTAGEM",
            headerStyle: {
              backgroundColor: "#1D4A71",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              letterSpacing: 2.5,
            },
          }}
        />
        <Stack.Screen
          name="Realizar"
          component={Realizar}
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

        <Stack.Screen
          name="Listar"
          component={Listar}
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
    </NavigationContainer>
  );
}
