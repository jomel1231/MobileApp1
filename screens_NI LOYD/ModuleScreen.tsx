import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

const ModuleScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const modules = [
    { id: "1", title: "Introduction to Mobile Phone Repair" },
    { id: "2", title: "Safety and Handling Precautions" },
    { id: "3", title: "Basic Tools for Mobile Phone Repair" },
    { id: "4", title: "Identifying Mobile Phone Components" },
  ];

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../assets/BG.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Modules</Text>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <FlatList
          data={filteredModules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.moduleItem}
              onPress={() => {
                if (item.id === "1") {
                  navigation.navigate("Module1");
                }
              }}
            >
              <MaterialIcons
                name="computer"
                size={24}
                color="white"
                style={styles.moduleIcon}
              />
              <Text style={styles.moduleTitle}>{item.title}</Text>
              <MaterialIcons
                name="play-circle"
                size={28}
                color="white"
                style={styles.playIcon}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default ModuleScreen;

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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  moduleItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },
  moduleIcon: {
    marginRight: 10,
  },
  moduleTitle: {
    flex: 1,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  playIcon: {
    marginLeft: 10,
  },
});
