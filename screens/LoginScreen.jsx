import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import PhoneNumberLoginScreen from "./PhoneNumberLoginScreen";

const { width, height } = Dimensions.get("window");

// Update these paths to the actual paths of your images
const backgroundImage = require("../assets/images/login.png");
const middleImage = require("../assets/images/frame.png");

const LoginScreen = () => {
  const navigation = useNavigation();

  const login = async () => {
    try {
      await AsyncStorage.setItem("userToken", "dummy-token");
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.error("Failed to save token", e);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {/* Overlay Gradient */}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.58)", "transparent"]}
        style={styles.gradient}
      />
      <SafeAreaView style={styles.container}>
        <Image source={middleImage} style={styles.logoImage} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.phoneButton}
            onPress={() => {
              navigation.navigate("PhoneLogin");
            }}
          >
            <Text style={styles.phoneButtonText}>
              Continue with Phone Number
            </Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => {
              navigation.navigate("ProfileSetUp", {});
            }}
          >
            <Ionicons
              name="logo-google"
              size={24}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.optionButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={() => {
              navigation.navigate("ProfileSetUp", {});
            }}
          >
            <Ionicons
              name="logo-facebook"
              size={24}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.optionButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: height * 0.02,
    width: "100%",
    paddingHorizontal: width * 0.05,
  },
  logoImage: {
    width: "70%", // Responsive width
    height: "auto",
    aspectRatio: 2, // Adjust the aspect ratio as per the logo
    marginBottom: height * 0.05, // Responsive margin
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: height * 0.05, // Responsive margin bottom
  },
  phoneButton: {
    width: "100%",
    backgroundColor: "#FF4D5A",
    paddingVertical: height * 0.02, // Responsive padding
    borderRadius: 12,
    alignItems: "center",
    marginBottom: height * 0.015,
  },
  phoneButtonText: {
    color: "#fff",
    fontSize: width * 0.045, // Responsive font size
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.015, // Responsive margin
    width: "100%", // Take up full width of parent container
    justifyContent: "center",
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 0, // Spacing around the OR text
  },
  orText: {
    color: "#fff",
    backgroundColor: "#4f4c4c",
    borderRadius: 16,
    padding: 10,
  },
  googleButton: {
    width: "100%",
    backgroundColor: "#000000",
    paddingVertical: height * 0.02, // Responsive padding
    borderRadius: 12,
    alignItems: "center",
    marginBottom: height * 0.015,
    flexDirection: "row",
    padding: 12,
    justifyContent: "center",
  },
  facebookButton: {
    width: "100%",
    backgroundColor: "#000000",
    paddingVertical: height * 0.02, // Responsive padding
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    justifyContent: "center",
  },
  icon: {
    paddingHorizontal: 20,
  },
  optionButtonText: {
    color: "#ffffff",
    fontSize: width * 0.045, // Responsive font size
    fontWeight: "bold",
  },
});
