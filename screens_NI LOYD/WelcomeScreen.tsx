import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/Start.jpg")} // Replace with the correct path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ready to{"\n"}learn</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Home")} // Navigate to HomeScreen
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // Move content to the bottom
    alignItems: "center",
    paddingBottom: 50, // Add padding to adjust distance from the bottom
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20, // Add space between title and button
    lineHeight: 56,
  },
  button: {
    backgroundColor: "#2D6A4F", // Green button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
