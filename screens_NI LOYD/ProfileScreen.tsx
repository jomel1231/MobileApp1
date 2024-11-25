import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../FirebaseConfig"; // Import auth for current user details
import { MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.replace("Login"); // Navigate to Login screen after logout
  };

  return (
    <ImageBackground
      source={require("../assets/page 5.jpg")} // Replace with your background image
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

        {/* Profile Header */}
        <Text style={styles.title}>My Profile</Text>
        <Image
          source={require("../assets/images/F.png")} // Replace with your profile picture path
          style={styles.profileImage}
        />
        <Text style={styles.name}>Neil Eustaquio</Text>

        {/* User's Email */}
        <View>
          <Text style={styles.emailText}>
            Welcome, {auth.currentUser?.email || "User Email"}
          </Text>
        </View>

        {/* Edit Profile Option */}
        <TouchableOpacity>
          <Text style={styles.editProfile}>Edit profile</Text>
        </TouchableOpacity>

        {/* Information Section */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Team Number</Text>
            <Text style={styles.infoValue}>34</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Id Number</Text>
            <Text style={styles.infoValue}>2112005</Text>
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutLabel}>About me:</Text>
            <TextInput
              style={styles.aboutInput}
              placeholder="Write something about yourself"
              placeholderTextColor="white"
              multiline
            />
          </View>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
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
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  emailText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  editProfile: {
    fontSize: 14,
    color: "#4CAF50", // Green color
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  infoValue: {
    fontSize: 16,
    color: "white",
  },
  aboutContainer: {
    marginTop: 20,
  },
  aboutLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  aboutInput: {
    height: 100,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  signOutButton: {
    backgroundColor: "#4CAF50", // Green button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 30,
  },
  signOutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
