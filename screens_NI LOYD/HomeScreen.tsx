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
import { MaterialIcons } from "@expo/vector-icons"; // For icons

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
      source={require("../assets/page 5.jpg")} // Replace with your background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Arrow Back Button */}
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.replace("Welcome")}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Home</Text>

        {/* Achievements Section */}
        <View style={styles.achievements}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementCard}>
            {/* Replace these shapes with dynamic data or real images as needed */}
            <View style={styles.shapeTriangle} />
            <View style={styles.shapeSquare} />
            <View style={styles.shapeCircle}>
              <Text style={styles.shapeText}>1st</Text>
            </View>
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.notifications}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {Array.from({ length: 3 }).map((_, index) => (
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
          <TouchableOpacity>
            <MaterialIcons name="person" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
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
    justifyContent: "space-between",
  },
  arrowButton: {
    position: "absolute",
    top: 50, // Position near the top
    left: 20, // Align to the left
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add background for better visibility
    padding: 10,
    borderRadius: 20,
  },
  title: {
    marginTop: 80, // Adjust to align below the arrow button
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  achievements: {
    marginTop: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  achievementCard: {
    width: "90%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
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
  notifications: {
    marginTop: 20,
    alignItems: "center",
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "90%",
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
