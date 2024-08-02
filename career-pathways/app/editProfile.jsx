import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SettingHeaderLeft from '../components/SettingHeaderLeft'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const editProfile = () => {
    const profileImg = require('../assets/images/Ellipse.png')
  return (
    <View style={styles.editProfileContainer}>
        <Stack.Screen options={{
            headerShown: true,
            headerStyle: {
                height: 100
            },
            headerLeft: () => <SettingHeaderLeft label='Complete Profile'/>
        }}
        />

        <View 
        style={{width: '100%' , flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 10}}>
            <Image source={profileImg} style={{width: 96, height: 96}} />
            <View 
            style={{width: 32, height: 32, backgroundColor: '#202871', borderRadius: 20, position: 'relative', left: -30, top: 70}}>
                <TouchableOpacity 
                style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <MaterialIcons name="mode-edit" size={24} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </View>

            <Text style={styles.registerContentText} >Full Name</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                placeholder='First Name'
                style={{fontFamily: 'PoppinsMedium', fontSize: 14, lineHeight: 21, color: '#202871',
            width: '100%'}}
                />
                
            </View>

            <Text style={styles.registerContentText}>Date of Birth</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                placeholder='DD/MM/YYYY'
                />
                
            </View>

            <Text style={styles.registerContentText}>Email</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='example@email.com'
                />
            </View>

            <Text style={styles.registerContentText}>Phone Number</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='0246579087'
                />
            </View>

            <Text style={styles.registerContentText}>Location</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='example@email.com'
                />
            </View>

            <View style={styles.signInButtonContainer}>
            <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Continue</Text>
            </TouchableOpacity>    
            </View>
    </View>
  )
}

export default editProfile

const styles = StyleSheet.create({

    editProfileContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20
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
    },

    signInButtonContainer: {
        width: 328,
        height: 48,
        backgroundColor: '#202871',
        borderRadius: 8,
        marginTop: 40,
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
})