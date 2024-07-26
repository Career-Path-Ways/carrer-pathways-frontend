import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SettingHeaderLeft from '../components/SettingHeaderLeft'

const editProfile = () => {
    const profileImg = require('../assets/images/Ellipse.png')
  return (
    <View>
        <Stack.Screen options={{
            headerShown: true,
            headerStyle: {
                height: 140
            },
            headerLeft: () => <SettingHeaderLeft label='Edit profile'/>
        }}
        />

        <View>
            <Image source={profileImg} />
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
                placeholder='example@email.com'
                />
            </View>

            <Text style={styles.registerContentText}>Location</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='example@email.com'
                />
            </View>

            <Text style={styles.registerContentText}>Company</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='example@email.com'
                />
            </View>




    </View>
  )
}

export default editProfile

const styles = StyleSheet.create({
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