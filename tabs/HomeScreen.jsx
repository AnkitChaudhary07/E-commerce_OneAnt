import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const data = [
    {
      id: "1",
      title: "Y-Pack Unisex Bag",
      store: "forever 21",
      price: "$50",
      originalPrice: "$100",
      discount: "50% OFF",
      status: "Hurry! Selling fast",
      image: require("../assets/images/bag1.webp"), // Replace with your image path
    },
    {
      id: "2",
      title: "Luxury Bag",
      store: "newpark",
      price: "$100",
      originalPrice: "$200",
      discount: "50% OFF",
      status: "Hurry! only 2 left",
      image: require("../assets/images/bag2.webp"), // Replace with your image path
    },
    {
      id: "3",
      title: "Outdoor Bag",
      store: "nika",
      price: "$20",
      originalPrice: "$40",
      discount: "50% OFF",
      status: "Out of stock",
      image: require("../assets/images/bag3.jpg"), // Replace with your image path
    },
    // Add more items as needed
  ];

  const filters = [
    { id: "1", label: "Unisex", count: 74 },
    { id: "2", label: "Male", count: 21 },
    { id: "3", label: "Female", count: 53 },
    { id: "4", label: "$50 - $150", count: 23 },
    { id: "5", label: "With Groups", count: 20 },
  ];

  const categories = [
    { id: "1", label: "All", icon: "apps-outline" },
    { id: "2", label: "Wellness", icon: "fitness-outline" },
    { id: "3", label: "Travel", icon: "airplane-outline" },
    { id: "4", label: "Fashion", icon: "shirt-outline" },
    { id: "5", label: "Home", icon: "home-outline" },
  ];

  const toggleFilter = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters((prev) => prev.filter((filterId) => filterId !== id));
    } else {
      setSelectedFilters((prev) => [...prev, id]);
    }
  };

  const renderItem = ({ item }) => (
    <SafeAreaView style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.bookmarkIcon}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
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
    </SafeAreaView>
  );

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headerText}>Shop</Text>
            <TextInput style={styles.searchInput} placeholder="Search" />
            <View style={styles.categoriesContainer}>
              {categories.map((category) => (
                <View key={category.id} style={styles.categoryIconContainer}>
                  <Ionicons name={category.icon} size={28} color="#000" />
                  <Text style={styles.categoryLabel}>{category.label}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.resultsText}>3 results</Text>
          </>
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={
          <>
            <Text style={styles.suggestedFiltersText}>Suggested Filters</Text>
            <View style={styles.filtersContainer}>
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  style={[
                    styles.filterButton,
                    selectedFilters.includes(filter.id) &&
                      styles.selectedFilterButton,
                  ]}
                  onPress={() => toggleFilter(filter.id)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedFilters.includes(filter.id) &&
                        styles.selectedFilterButtonText,
                    ]}
                  >
                    {filter.label} - {filter.count}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                alert("Applied");
              }}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>

            <View style={styles.notificationContainer}>
              <Text style={styles.notificationTitle}>
                Get notified for best deals
              </Text>
              <Text style={styles.notificationSubtitle}>
                Only the best deals reach your inbox
              </Text>
              <TextInput
                style={styles.emailInput}
                placeholder="Your email"
                defaultValue="ankichaudhary126@gmail.com || Application Developer"
              />
              <TouchableOpacity style={styles.notifyButton}>
                <Text style={styles.notifyButtonText}>Notify me</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  searchInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryIconContainer: {
    alignItems: "center",
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 14,
  },
  resultsText: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
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
  suggestedFiltersText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    margin: 5,
  },
  selectedFilterButton: {
    backgroundColor: "#000",
  },
  filterButtonText: {
    color: "#333",
    fontSize: 14,
  },
  selectedFilterButtonText: {
    color: "#fff",
  },
  applyButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 12,
    backgroundColor: "#FF4D5A",
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  emailInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  notifyButton: {
    paddingVertical: 12,
    backgroundColor: "#FF4D5A",
    borderRadius: 8,
    alignItems: "center",
  },
  notifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
