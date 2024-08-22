import { Button, StyleSheet, Text, ToastAndroid } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, CommonActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      ToastAndroid.show("Logout Successful", ToastAndroid.SHORT);

      navigation.navigate("LoginScreen");
    } catch (e) {
      console.error("Failed to delete token", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Log Out" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5cf35",
  },
});
