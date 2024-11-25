import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

const Module1Screen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/BG.jpg")} // Replace with your background
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Module Title */}
        <Text style={styles.title}>Modules</Text>
        <Text style={styles.subtitle}>
          Introduction to Mobile Phone Repair
        </Text>

        {/* Content */}
        <Image
          source={require("../assets/page 5.jpg")} // Replace with the image for this module
          style={styles.image}
        />
        <Text style={styles.content}>
          Welcome to Mobile Phone repair course Neil! Today, let me walk you
          through the basics you need to know.
        </Text>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Module1Screen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  nextButton: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 20,
  },
});
