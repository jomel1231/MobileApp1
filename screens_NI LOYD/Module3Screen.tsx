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

const Module3Screen: React.FC = () => {
  const navigation = useNavigation();

  const content = [
    {
      text: "1. Tweezers are used in mobile phone repair to pick and repair the tiny parts that make up a phone.",
      image: require("../assets/tweezer.png"),
      imageLabel: "Precision Tweezer",
    },
    {
      text: "2. Screwdrivers are used in mobile phone repair to disassemble, reassemble, and make small adjustments to a phone.",
      image: require("../assets/Screw.png"),
      imageLabel: "Screwdriver",
    },
    {
      text: "3. Spudgers are used for opening a device such as a smartphone, tablet, or other small electronic devices.",
      image: require("../assets/spudgers.png"),
      imageLabel: "Spudgers",
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

        {/* Title */}
        <Text style={styles.title}>Basic Tools for Mobile Phone Repair</Text>

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
          onPress={() => navigation.navigate("Module3Quiz")}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Module3Screen;

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
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 60, // Adjusted to move below the back button
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
