import React, { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { auth } from "../FirebaseConfig";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Removes the header
    });
  }, [navigation]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login"); // Replace with Login screen after logout
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground
      source={require("../assets/BG.jpg")} // Replace with your background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <Text style={styles.title}>Home</Text>

        {/* Achievements Section */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementCard}>
            {/* Replace shapes with actual content as needed */}
            <View style={styles.shapeTriangle} />
            <View style={styles.shapeSquare} />
            <View style={styles.shapeCircle}>
              <Text style={styles.shapeText}>1st</Text>
            </View>
            <View style={styles.shapeBar} />
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.notificationsSection}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {[...Array(3)].map((_, index) => (
            <View key={index} style={styles.notificationCard}>
              <MaterialIcons name="notifications" size={24} color="gray" />
              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationTitle}>List item</Text>
                <Text style={styles.notificationDescription}>
                  Supporting line text lorem ipsum dolor sit amet, consectetur.
                </Text>
              </View>
              <MaterialIcons name="more-vert" size={24} color="gray" />
            </View>
          ))}
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity>
            <MaterialIcons name="home" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <MaterialIcons name="person" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Modules")}>
            <MaterialIcons name="menu-book" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="insert-chart" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  achievementsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  achievementCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  shapeTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 40,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "gray",
    marginBottom: 10,
  },
  shapeSquare: {
    width: 30,
    height: 30,
    backgroundColor: "gray",
    marginBottom: 10,
  },
  shapeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  shapeText: {
    color: "white",
    fontWeight: "bold",
  },
  shapeBar: {
    width: 10,
    height: 50,
    backgroundColor: "gray",
    marginTop: 10,
  },
  notificationsSection: {
    marginBottom: 20,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationDescription: {
    fontSize: 14,
    color: "gray",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingVertical: 10,
  },
});
