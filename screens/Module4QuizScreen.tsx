import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

const Module4QuizScreen = () => {
  const navigation = useNavigation();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = "Motherboard";

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      Alert.alert(
        "Wrong Answer",
        "Do you want to reset the quiz or go back to the modules?",
        [
          {
            text: "Reset Quiz",
            onPress: () => resetQuiz(),
          },
          {
            text: "Go to Modules",
            onPress: () => navigation.navigate("Modules"),
            style: "cancel",
          },
        ]
      );
    }
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setIsCorrect(false);
  };

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

        <Text style={styles.title}>Assessment</Text>
        <Text style={styles.subtitle}>Module 3 - Examination</Text>

        <View style={styles.quizContainer}>
          <View style={styles.questionHeader}>
            <Text style={styles.questionLabel}>Question:</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Modules")}>
              <Text style={styles.quitText}>Quit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.questionText}>
          What is the main circuit board of a mobile phone called?
          </Text>

          {["Battery Board", "Motherboard", "Connector Board"].map(
            (answer) => (
              <TouchableOpacity
                key={answer}
                style={[
                  styles.answerButton,
                  selectedAnswer === answer &&
                    (answer === correctAnswer
                      ? styles.correctAnswer
                      : styles.wrongAnswer),
                ]}
                onPress={() => handleAnswer(answer)}
                disabled={selectedAnswer !== null}
              >
                <Text style={styles.answerText}>{answer}</Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.navButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() =>
              isCorrect ? navigation.navigate("Modules") : null
            }
            disabled={!isCorrect}
          >
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Module4QuizScreen;

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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  quizContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  quitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  questionText: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  answerText: {
    fontSize: 16,
    color: "black",
  },
  correctAnswer: {
    backgroundColor: "green",
    borderColor: "green",
  },
  wrongAnswer: {
    backgroundColor: "red",
    borderColor: "red",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  navButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
