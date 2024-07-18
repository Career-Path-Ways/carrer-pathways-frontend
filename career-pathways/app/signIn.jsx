import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';


const signIn = () => {
    logo = require('../assets/images/CareerLogo.png')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Define the function to fetch data
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/test');
            console.log('hello')
            setData(response.data);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        // Call the function to fetch data
        fetchData();
      }, []);

      const HandleSignIn = () => {
        router.replace('(tabs)')
      }

  return (
    <View style={styles.signInContainer}>
    
      <View style={styles.signInHeaderContainer} >
        <Image source={logo} resizeMode='contain' style={{width: 80, height: 80}}/>
        <Text style={styles.signInHeaderText}>CareerPathway</Text>
      </View>

      <View style={styles.signInContentContainer}>
        <Text 
        style={{fontFamily: 'PoppinsSemiBold', fontSize: 24, lineHeight: 36, color: '#202871', marginTop: 35, marginBottom: 15}}
        >Welcome Back!</Text>
        <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.signInContentText}>Email</Text>
            <View style={styles.signInTextBoxContainer}>
                <TextInput
                placeholder='example@email.com'
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                selectionColor='#202871'
                />
            </View>
        
            <Text style={styles.signInContentText}>Password</Text>
            <View style={styles.signInTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21}}
                placeholder='password'
                selectionColor='#202871'
                secureTextEntry/>
                <Pressable>
                    <MaterialIcons name="visibility" size={24} color="black" />
                </Pressable>        
            </View>
        </View>
      </View>

      <Text 
      style={{color: '#202871', fontFamily: 'PoppinsMedium', fontSize: 14, marginTop: 20, marginBottom: 30}
      }>Forgot your password?</Text>

      <View 
        style={{width: 328, height: 48, backgroundColor: '#202871', borderRadius: 8, marginTop: 100 }}>
        <TouchableOpacity 
            onPress={HandleSignIn}
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text 
            style={{color: '#fff', fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24}}
            >Sign In</Text>
        </TouchableOpacity>
      </View>

      <View>
      <Text>Data from /test API</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      </View>

    </View>
  )
}

export default signIn

const styles = StyleSheet.create({
    signInContainer: {
        width: '100%',
        height: '100%', 
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20
    },

    signInHeaderContainer: {
        height: 111,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    signInHeaderText: {
        color: '#1F2A90',
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        lineHeight: 24
    },

    signInContentContainer: {
        width: 328,
        alignItems: 'center'
    },

    signInContentText: {
        color: '#202871',
        fontSize: 15,
        lineHeight: 21,
        fontFamily: 'PoppinsSemiBold',
        marginTop: 12
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
        alignItems: 'center'
    }
})