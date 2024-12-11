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

const Module4Screen: React.FC = () => {
  const navigation = useNavigation();

  const content = [
    {
      text: "1. The motherboard is the main circuit board that connects all components of the phone.",
      image: require("../assets/motherboard.png"),
      imageLabel: "Motherboard",
    },
    {
      text: "2. The battery provides power to the phone, ensuring its functionality.",
      image: require("../assets/Batteries.png"),
      imageLabel: "Battery",
    },
    {
      text: "3. The purpose of a Liquid Crystal Display (LCD) in a mobile phone is to display information using liquid crystals and a backlight",
      image: require("../assets/display.png"),
      imageLabel: "LCD",
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/BG.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Understanding Mobile Phone Components</Text>

        <ScrollView style={styles.content}>
          {content.map((item, index) => (
            <View key={index} style={styles.contentBlock}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.imageLabel}>{item.imageLabel}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Module4Quiz")}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Module4Screen;

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover", paddingHorizontal: 20, paddingTop: 30 },
  container: { flex: 1 },
  backButton: { position: "absolute", top: 20, left: 20, padding: 10, borderRadius: 20 },
  title: { fontSize: 16, fontWeight: "bold", color: "white", textAlign: "center", marginTop: 60, marginBottom: 10 },
  content: { flex: 1, marginTop: 10 },
  text: { fontSize: 16, color: "white", marginBottom: 15 },
  contentBlock: { marginBottom: 20, alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 10, marginBottom: 10 },
  imageLabel: { fontSize: 14, color: "white", textAlign: "center", marginBottom: 5 },
  nextButton: { position: "absolute", bottom: 20, right: 20, padding: 15, borderRadius: 30 },
});
