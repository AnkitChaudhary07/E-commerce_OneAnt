import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, CommonActions } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        const storedPhoto = await AsyncStorage.getItem("userPhoto");
        const storedNumber = await AsyncStorage.getItem("userNumber");
        if (storedName) setUserName(storedName);
        if (storedPhoto) setUserPhoto(storedPhoto);
        if (storedNumber) setUserPhone(storedNumber);
      } catch (error) {
        console.error("Failed to load user data", error);
      }
    };

    loadUserData();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userName");
      await AsyncStorage.removeItem("userPhoto");
      await AsyncStorage.removeItem("userNumber");
      ToastAndroid.show("Logout Successful", ToastAndroid.SHORT);

      // Reset the navigation stack to make LoginScreen the root
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
      );
    } catch (e) {
      console.error("Failed to delete token", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {userPhoto ? (
        <Image source={{ uri: userPhoto }} style={styles.profileImage} />
      ) : (
        <Image
          source={require("../assets/images/user.png")}
          style={styles.profileImage}
        />
      )}
      <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
      <Text>{userPhone}</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fddd5b",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "40%",
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
