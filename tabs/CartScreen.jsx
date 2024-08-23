import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Your Cart is Empty</Text>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fba9a9",
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    backgroundColor: "#e3940b",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000000",
    color: "#fff",
  },
});
