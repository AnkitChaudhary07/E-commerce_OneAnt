import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/LoginScreen";
import PhoneNumberLoginScreen from "./screens/PhoneNumberLoginScreen";
import ProfileSetUpScreen from "./screens/ProfileSetUpScreen";
import PickInterestsScreen from "./screens/PickInterestsScreen";
import RootNavigator from "./tabs/RootNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        setIsLoggedIn(!!token);
      } catch (e) {
        console.error("Failed to load token", e);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f85b5b" />
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content" // You can change this to "light-content" if your status bar should have white text/icons.
        backgroundColor="#ffffff" // This sets the background color of the status bar.
        translucent={true} // This ensures the status bar overlaps with the content.
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="PhoneLogin"
            component={PhoneNumberLoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProfileSetUp"
            component={ProfileSetUpScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="PickInterestsScreen"
            component={PickInterestsScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RootNavigator"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
