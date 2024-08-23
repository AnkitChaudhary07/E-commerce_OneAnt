import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const PhoneNumberLoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate("ProfileSetUp", { phoneNumber });
    } else {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/phoneNumberLogin.png")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={28} color="#000" />
        </TouchableOpacity>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sign in or Sign up</Text>

          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Ionicons name="call" size={24} color="#000" />
            <View style={styles.countryContainer}>
              <Text style={styles.countryCode}>+91</Text>
              <Ionicons name="caret-down" size={20} color="#000" />
            </View>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="98765 43210"
              keyboardType="numeric"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        {/* Numeric Keypad */}
        <View style={styles.keypadContainer}>
          {/* Implement keypad as needed */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PhoneNumberLoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.8,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  closeButton: {
    padding: 16,
    alignSelf: "flex-start",
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  countryCode: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#FF4D5A",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    width: "100%",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  keypadContainer: {
    width: "100%",
    // Customize your keypad styling here if you want to add a custom numeric keypad.
  },
});
