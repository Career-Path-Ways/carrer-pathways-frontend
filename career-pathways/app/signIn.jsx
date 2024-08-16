import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn } from '../components/auth';


const SignIn = () => {
  const logo = require('../assets/images/CareerLogo.png');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [msg, setMsg] = useState('')


  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async()=>{
    if(validate()){
      await signIn(email, password)
      setMsg(await AsyncStorage.getItem('msg'))
    }
   }



  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.signInContainer}>
      <View style={styles.signInHeaderContainer}>
        <Image source={logo} resizeMode="contain" style={{ width: 80, height: 80 }} />
        <Text style={styles.signInHeaderText}>CareerPathway</Text>
      </View>

      <View style={styles.signInContentContainer}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.signInContentText}>Email</Text>
          <View style={styles.signInTextBoxContainer}>
            <TextInput
              placeholder="example@email.com"
              style={styles.textInput}
              selectionColor="#202871"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}


          <Text style={styles.signInContentText}>Password</Text>
          <View style={styles.signInTextBoxContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              selectionColor="#202871"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <MaterialIcons name={passwordVisible ? "visibility-off" : "visibility"} size={24} color="grey" />
            </Pressable>
          </View>
          {errors.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
          {msg &&  <Text style={{color: 'red'}}>{msg}</Text>}

        </View>
      </View>

      <Link href='forgotPassword' asChild>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Link>

      <View style={styles.signInButtonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>    
      </View>
      
          <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 60, marginHorizontal: 40}}>
                <Text 
                style={{fontFamily: 'PoppinsMedium', fontSize: 14, color: '#202871', lineHeight: 21}}
                >Already have an account? </Text>
                <Link href='register'>
                    <Text
                    style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, color: '#202871', lineHeight: 21, textDecorationLine: 'underline'}}
                    >Register</Text>
                </Link>
                
            </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signInContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  signInHeaderContainer: {
    height: 111,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signInHeaderText: {
    color: '#1F2A90',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    lineHeight: 24,
  },
  signInContentContainer: {
    width: 328,
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    lineHeight: 36,
    color: '#202871',
    marginTop: 35,
    marginBottom: 15,
  },
  inputGroup: {
    alignItems: 'flex-start',
  },
  signInContentText: {
    color: '#202871',
    fontSize: 15,
    lineHeight: 21,
    fontFamily: 'PoppinsSemiBold',
    marginTop: 12,
  },
  signInTextBoxContainer: {
    marginTop: 5,
    width: 320,
    height: 48,
    borderRadius: 8,
    borderColor: '#A7ACD7',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    lineHeight: 21,
    color: '#202871',
    flex: 1,
  },
  forgotPasswordText: {
    color: '#202871',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 15,
    marginTop: 25,
    marginBottom: 25,
  },
  signInButtonContainer: {
    width: 328,
    height: 48,
    backgroundColor: '#202871',
    borderRadius: 8,
    marginTop: 100,
  },
  signInButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 60,
    marginHorizontal: 40,
  },
  registerText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    color: '#202871',
    lineHeight: 21,
  },
  registerLinkText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: '#202871',
    lineHeight: 21,
  },
  apiDataContainer: {
    marginTop: 20,
  },
});
