import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScree";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ModuleScreen from "./screens/ModuleScreen";
import Module1Screen from "./screens/Module1Screen"; // New Module 1 screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* Start Screen */}
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />

        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* Sign Up Screen */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Profile Screen */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        {/* Module Screen */}
        <Stack.Screen
          name="Modules"
          component={ModuleScreen}
          options={{ headerShown: false }}
        />

        {/* Module 1 Screen */}
        <Stack.Screen
          name="Module1"
          component={Module1Screen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
