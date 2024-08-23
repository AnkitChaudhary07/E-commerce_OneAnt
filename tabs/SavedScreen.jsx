// screens/SavedScreen.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SavedScreen = () => {
  const savedItems = [
    {
      id: "1",
      title: "Y-Pack Unisex Bag",
      store: "forever 21",
      price: "$50",
      originalPrice: "$100",
      discount: "50% OFF",
      status: "Hurry! Selling fast",
      image: require("../assets/images/bag1.webp"), // Replace with your image
    },
    {
      id: "2",
      title: "Outdoor Bag",
      store: "nika",
      price: "$20",
      originalPrice: "$40",
      discount: "50% OFF",
      status: "Added to cart by 12 buyers",
      image: require("../assets/images/bag3.jpg"), // Replace with your image
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.bookmarkIcon}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.tag}>TRAVEL</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.storeText}>By {item.store}</Text>
        <Text style={styles.statusText}>{item.status}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.originalPriceText}>{item.originalPrice}</Text>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
        <TouchableOpacity style={styles.quantityButton}>
          <Text>1 PC</Text>
          <Ionicons name="chevron-down-outline" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.headerText}>Saved</Text>
      <Text style={styles.itemCountText}>2 items</Text>
      <FlatList
        data={savedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  itemCountText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
    width: "40%",
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bookmarkIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  tag: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storeText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  statusText: {
    fontSize: 14,
    color: "#f00",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  originalPriceText: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  discountText: {
    fontSize: 14,
    color: "#4caf50",
  },
  quantityButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#f5f5f5",
  },
});
