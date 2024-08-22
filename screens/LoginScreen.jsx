import { Button, StyleSheet, Text, ToastAndroid } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, CommonActions } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const login = async () => {
    try {
      await AsyncStorage.setItem("userToken", "dummy-token");
      ToastAndroid.show("Login Successful", ToastAndroid.SHORT);

      navigation.navigate("HomeScreen");
    } catch (e) {
      console.error("Failed to save token", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Log In" onPress={login} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d2abfa",
  },
});
