import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const interestsData = [
  {
    id: "1",
    title: "Events",
    image: require("../assets/IMAGES_OneAnt/events.jpg"),
  },
  {
    id: "2",
    title: "Fashion & jewellery",
    image: require("../assets/IMAGES_OneAnt/fashion_jewelry.jpg"),
  },
  {
    id: "3",
    title: "Fun & Entertainment",
    image: require("../assets/IMAGES_OneAnt/fun_entertainment.jpg"),
  },
  {
    id: "4",
    title: "Groceries",
    image: require("../assets/IMAGES_OneAnt/groceries.jpg"),
  },
  {
    id: "5",
    title: "Sport & Outdoor",
    image: require("../assets/IMAGES_OneAnt/sports__outdoor.jpg"),
  },
  {
    id: "6",
    title: "Tours & Travel",
    image: require("../assets/IMAGES_OneAnt/tours_travel.jpg"),
  },
];

const PickInterestsScreen = () => {
  const navigation = useNavigation();
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("10 miles");
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (id) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests((prev) =>
        prev.filter((interestId) => interestId !== id)
      );
    } else {
      setSelectedInterests((prev) => [...prev, id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pick Interests</Text>
      <Text style={styles.subtitle}>Jump start your recommendations</Text>

      {/* Store Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Store</Text>
        <Picker
          selectedValue={selectedStore}
          onValueChange={(itemValue) => setSelectedStore(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a Store" value="" />
          <Picker.Item label="Store 1" value="store1" />
          <Picker.Item label="Store 2" value="store2" />
          {/* Add more stores as needed */}
        </Picker>
      </View>

      {/* Distance Selector */}
      <Text style={styles.pickerLabel}>Search Within</Text>
      <View style={styles.distanceContainer}>
        {["10 miles", "20 miles", "30 miles", "40 miles"].map((distance) => (
          <TouchableOpacity
            key={distance}
            style={[
              styles.distanceButton,
              selectedDistance === distance && styles.selectedDistanceButton,
            ]}
            onPress={() => setSelectedDistance(distance)}
          >
            <Text
              style={[
                styles.distanceButtonText,
                selectedDistance === distance && styles.selectedDistanceText,
              ]}
            >
              {distance}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Interests Grid */}
      <FlatList
        data={interestsData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.interestCard,
              selectedInterests.includes(item.id) &&
                styles.selectedInterestCard,
            ]}
            onPress={() => toggleInterest(item.id)}
          >
            <Image source={item.image} style={styles.interestImage} />
            <Text style={styles.interestText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.interestsGrid}
        showsVerticalScrollIndicator={false}
      />

      {/* Start Button */}
      <TouchableOpacity
        style={styles.resultsButton}
        onPress={() => {
          navigation.navigate("RootNavigator");
        }}
      >
        <Text style={styles.resultsButtonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PickInterestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  distanceButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 5,
    alignItems: "center",
  },
  selectedDistanceButton: {
    backgroundColor: "#FF4D5A",
  },
  distanceButtonText: {
    color: "#333",
    fontSize: 14,
  },
  selectedDistanceText: {
    color: "#fff",
  },
  interestsGrid: {
    paddingBottom: 20,
  },
  interestCard: {
    width: width * 0.35,
    margin: width * 0.05,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 10,
  },
  selectedInterestCard: {
    borderColor: "#000",
    borderWidth: 2,
  },
  interestImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 10,
  },
  interestText: {
    fontSize: 14,
    textAlign: "center",
  },
  resultsButton: {
    backgroundColor: "#FF4D5A",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  resultsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipText: {
    textAlign: "center",
    color: "#888",
  },
});
