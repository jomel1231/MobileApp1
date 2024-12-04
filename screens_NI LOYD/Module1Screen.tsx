import React, { useState } from "react";
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
  const [currentModule, setCurrentModule] = useState(1);

  const handleNext = () => {
    if (currentModule === 1) {
      setCurrentModule(2);
    } else {
      navigation.navigate("Module1Quiz");
    }
  };

  const handlePrevious = () => {
    if (currentModule === 2) {
      setCurrentModule(1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <ImageBackground
      source={require("../assets/BG.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowButtonLeft}
          onPress={handlePrevious}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {currentModule === 1 ? (
          <>
            <Text style={styles.title}>Modules</Text>
            <Text style={styles.subtitle}>
              Introduction to Mobile Phone Repair
            </Text>
            <Text style={styles.content}>
              Hardware repairs deal with physical components such as
            </Text>
            <View style={styles.imageRow}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/Screw.jpg")}
                  style={styles.circleImage}
                />
                <Text style={styles.imageLabel}>Batteries</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/mobile_scren.jpg")}
                  style={styles.circleImage}
                />
                <Text style={styles.imageLabel}>Mobile screen</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/tweezer.jpg")}
                  style={styles.circleImage}
                />
                <Text style={styles.imageLabel}>Internal Circuit</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Modules</Text>
            <Text style={styles.subtitle}>Safety and Handling Precautions</Text>
            <Text style={styles.content}>
              When repairing mobile devices, ensure you follow these safety
              measures to prevent damage or injury:
            </Text>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>1. Always wear an anti-static wristband.</Text>
              <Text style={styles.listItem}>2. Ensure the device is powered off before repairs.</Text>
              <Text style={styles.listItem}>3. Avoid touching internal components with bare hands.</Text>
              <Text style={styles.listItem}>4. Use insulated tools to prevent short circuits.</Text>
            </View>
          </>
        )}

        <TouchableOpacity style={styles.arrowButtonRight} onPress={handleNext}>
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
  arrowButtonLeft: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  arrowButtonRight: {
    position: "absolute",
    bottom: 50,
    right: 20,
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
  content: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    width: 80,
  },
  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  imageLabel: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  listItem: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
});
