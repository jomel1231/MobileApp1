import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Module2IntroScreen = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    console.log("Navigating to Module2Screen...");
    navigation.navigate("Module2");
  };

  const handlePreviousPress = () => {
    console.log("Going back to ModuleScreen...");
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../assets/BG.jpg")} // Set your image path here
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Left Arrow Button to go back */}
        <TouchableOpacity
          style={styles.arrowButtonLeft}
          onPress={handlePreviousPress}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Right Arrow Button to go to the next screen */}
        <TouchableOpacity
          style={styles.arrowButtonRight}
          onPress={handleNextPress}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Safety and Handling Precautions</Text>
        <Image
          source={require("../assets/Safety.png")}
          style={styles.image}
        />
        <Text style={styles.description}>
          Before starting any repair, safety should always come first.
        </Text>
        <Text style={styles.notes}>
          Ensure you follow proper protocols to ensure a safe environment during repairs.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Module2IntroScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the entire screen
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  notes: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  // Left arrow button (top left corner)
  arrowButtonLeft: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 20,
  },
  // Right arrow button (bottom right corner)
  arrowButtonRight: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 20,
  },
});