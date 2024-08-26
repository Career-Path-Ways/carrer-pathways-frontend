import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Index = () => {
  const handleAuth = async () => {
    const authenticated = await AsyncStorage.getItem('loggedIn');
    console.log('logged In', JSON.parse(authenticated))

    if (authenticated){
      router.navigate('(tabs)')
    }else{
      router.navigate('signIn')
    }
  }
  
  return (
    <ImageBackground 
      source={require('../assets/images/Onboarding.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.indexContainer}>
        <Text style={styles.text1}>Welcome to</Text>
        <Text style={styles.text2}>CareerPathway</Text>
        <Text style={styles.text3}>
          Discover your dream job with
          the ultimate job app.
        </Text>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAuth}>
              <Text style={styles.buttonText}>
                Get Started
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  indexContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 380,
    marginHorizontal: 20,
  },
  text1: {
    color: '#E9F0F4',
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 8,
  },
  text2: {
    fontFamily: 'PoppinsBold',
    fontSize: 36,
    lineHeight: 54,
    color: '#FBFCFE',
    marginBottom: 8,
  },
  text3: {
    fontFamily: 'Poppins',
    fontSize: 18,
    lineHeight: 27,
    color: '#E9F0F4',
    marginBottom: 50,
  },
  buttonContainer: {
    width: 312,
    height: 48,
    backgroundColor: '#C9CDF0',
    borderRadius: 8,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#1A205A',
  },
});
