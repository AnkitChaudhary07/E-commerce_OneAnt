import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens
import HomeScreen from "./HomeScreen";
import SavedScreen from "./SavedScreen";
import CartScreen from "./CartScreen";
import MoreScreen from "./MoreScreen";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Saved") {
            iconName = "bookmark";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Profile") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000", // Active icon color
        tabBarInactiveTintColor: "#aaa", // Inactive icon color
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={MoreScreen} />
    </Tab.Navigator>
  );
}
