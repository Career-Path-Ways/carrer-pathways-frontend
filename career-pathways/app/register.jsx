import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import axios from 'axios';
import { register } from '../components/auth';


const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [firstname, setFirstname]= useState('')
  const [lastname, setLastname]= useState('')
  const [username, setUsername]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

    const RegisterHandler = async ()=>{
        await register(firstname, lastname, username, email, password, confirmPassword, dateOfBirth)
    }


  return (
    <View 
    style={styles.registerContainer} contentContainerStyle={{alignItems: 'center'}}>
        <Stack.Screen options={{
           headerShown: false
        }}/>
        <View>
            <Text style={styles.registerHeadingText}>Create an account</Text>
        </View>

        <ScrollView
         style={styles.registerContentContainer} contentContainerStyle={{alignItems: 'flex-start'}}
         showsVerticalScrollIndicator={false}
         >
            <Text style={styles.registerContentText} >First Name</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                placeholder='First Name'
                style={{fontFamily: 'PoppinsMedium', fontSize: 14, lineHeight: 21, color: '#202871',
            width: '100%'}}
                value={firstname}
                onChangeText={setFirstname}
                />
                
            </View>
    
            <Text style={styles.registerContentText}>Last Name</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                placeholder='Last Name'
                style={{fontFamily: 'PoppinsMedium', fontSize: 14, lineHeight: 21, color: '#202871',
                width: '100%' }}
                value={lastname}
                onChangeText={setLastname}

                />
            </View>

            <Text style={styles.registerContentText}>Username</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                placeholder='Enter username'
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                value={username}
                onChangeText={setUsername}

                />
            </View>
            
            <Text style={styles.registerContentText}>Email</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='example@email.com'
                value={email}
                onChangeText={setEmail}
                />
            </View>
        
            <Text style={styles.registerContentText}>Password</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='Password'
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                />
                <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                    <MaterialIcons name={passwordVisible ? "visibility-off" : "visibility"} size={24} color="grey" />
                </Pressable>        
            </View>

            <Text style={styles.registerContentText}>Confirm Password</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='Confirm password'
                secureTextEntry={!confirmPasswordVisible}
                value={confirmPassword}
                onChangeText={setConfirmPassword}

                />
                <Pressable onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                    <MaterialIcons name={confirmPasswordVisible ? "visibility-off" : "visibility"} size={24} color="grey" />
                </Pressable>  
            </View>

            <Text style={styles.registerContentText}>Date of Birth</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                
                placeholder='DD/MM/YYYY'
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                />
                
            </View>

            <View 
                style={{width: 328, height: 48, backgroundColor: '#202871', borderRadius: 8, marginTop: 15 }}>
                <TouchableOpacity onPress={RegisterHandler}
                style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text 
                    style={{color: '#fff', fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24}}
                    >Register</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 60, marginHorizontal: 40}}>
                <Text 
                style={{fontFamily: 'PoppinsMedium', fontSize: 14, color: '#202871', lineHeight: 21}}
                >Already have an account? </Text>
                <Link href='signIn'>
                    <Text
                    style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, color: '#202871', lineHeight: 21}}
                    >Sign In</Text>
                </Link>
                
            </View>
            
        </ScrollView>

    </View>
  )
}


export default Register

const styles = StyleSheet.create({
    registerContainer: {
        paddingTop: 30,
        width: '100%',
        height: '100%',  // Fixed height value
        backgroundColor: '#fff',
        alignItems: 'center'
    },

    registerHeadingText: {
        color: '#202871',
        fontFamily: 'PoppinsSemiBold',
        fontSize: 25,
        lineHeight: 36
    },

    registerContentContainer: {
        width: 328,
        marginTop:30,

    },

    registerContentText: {
        color: '#202871',
        fontSize: 15,
        lineHeight: 21,
        fontFamily: 'PoppinsSemiBold',
        marginTop: 7
    },

    registerTextBoxContainer: {
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
