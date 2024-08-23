import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

const ProfileSetUpScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleGetStarted = async () => {
    if (isAccepted && firstName && lastName) {
      try {
        await AsyncStorage.setItem("userName", `${firstName} ${lastName}`);
        await AsyncStorage.setItem("userPhoto", photo || "");
        navigation.navigate("PickInterestsScreen");
      } catch (error) {
        console.error("Failed to save user data", error);
      }
    } else {
      alert("Please fill out all fields and accept the T&C and Privacy Policy");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="close" size={28} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Finish Signing up</Text>

      {/* Profile Image Upload */}
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.profileImage} />
        ) : (
          <Image
            source={require("../assets/images/user.png")}
            style={styles.profileImage}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.uploadText}>Upload your photo</Text>

      {/* Phone Number */}
      <View style={styles.inputContainer}>
        <View style={styles.countryContainer}>
          <Ionicons name="call" size={24} color="#000" />
          <Text style={styles.countryCode}>+91</Text>
        </View>
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
        {/* Display phone number */}
      </View>

      {/* First Name */}
      <TextInput
        style={styles.textInput}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />

      {/* Last Name */}
      <TextInput
        style={styles.textInput}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />

      {/* T&C Switch */}
      <View style={styles.switchContainer}>
        <Switch value={isAccepted} onValueChange={setIsAccepted} />
        <Text style={styles.tcText}>
          I accept <Text style={styles.linkText}>T&C</Text> &{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleGetStarted}
      >
        <Text style={styles.continueButtonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Skip for Later */}
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.skipText}>I'll do it later</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileSetUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  closeButton: {
    padding: 8,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
  },
  uploadText: {
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  countryCode: {
    marginLeft: 5,
    fontSize: 16,
  },
  phoneNumberText: {
    flex: 1,
    fontSize: 16,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  tcText: {
    marginLeft: 10,
    fontSize: 14,
  },
  linkText: {
    color: "blue",
  },
  continueButton: {
    backgroundColor: "#FF4D5A",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipText: {
    textAlign: "center",
    color: "gray",
  },
});
