import React, { useEffect } from 'react';
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { auth } from '../FirebaseConfig';
import { useNavigation } from '@react-navigation/core';

const StartScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Welcome'); // Navigate to WelcomeScreen instead of HomeScreen
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/images/MB.png')} // Replace with your background image
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>FIXPERT</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add dark overlay
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '60%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '60%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  signupButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
