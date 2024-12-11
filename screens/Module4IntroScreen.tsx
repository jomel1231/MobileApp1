import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Module4IntroScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/BG.jpg")} style={styles.background}>
      <View style={styles.container}>
        {/* Go back arrow button */}
        <TouchableOpacity
          style={styles.arrowButtonLeft}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Go to next arrow button */}
        <TouchableOpacity
          style={styles.arrowButtonRight}
          onPress={() => navigation.navigate("Module4")}
        >
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Identifying Mobile Phone Components</Text>
        <Image source={require("../assets/components.png")} style={styles.image} />
        <Text style={styles.description}>
        A mobile phone consists of numerous intricate parts that work together. Some key components include the motherbard(the main processing board), battery, display assembly (LCD and touchscreen), connectors, and more.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Module4IntroScreen;

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover", justifyContent: "center" },
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", color: "white", marginBottom: 10 },
  description: { fontSize: 16, color: "white", textAlign: "center", marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 10 },
  arrowButtonLeft: { position: "absolute", top: 50, left: 20, padding: 10 },
  arrowButtonRight: { position: "absolute", bottom: 30, right: 20, padding: 10 },
});
