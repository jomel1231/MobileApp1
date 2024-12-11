import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Module2Screen: React.FC = () => {
  const navigation = useNavigation();

  const content = [
    {
      text: "1. Always use an anti-static wrist gloves to prevent static damage.",
      image: require("../assets/antistatic.png"),
      imageLabel: "Anti-Static Gloves",
    },
    {
      text: "2. Handle small components with precision tools like tweezers.",
      image: require("../assets/tweezer.png"),
      imageLabel: "Precision Tweezers",
    },
    {
      text: "3. Disconnect any power source",
      image: require("../assets/disconnect.png"),
      imageLabel: "Disconnect Power Source",
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/BG.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Title with adjusted top margin and smaller font */}
        <Text style={styles.title}>Safety and Handling Precautions</Text>

        {/* ScrollView for main content */}
        <ScrollView style={styles.content}>
          {content.map((item, index) => (
            <View key={index} style={styles.contentBlock}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.imageLabel}>{item.imageLabel}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Module2Quiz")}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Module2Screen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 16, // Made smaller
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20, // Slightly move the title lower
    marginBottom: 10,
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginBottom: 15,
  },
  contentBlock: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageLabel: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  nextButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
