import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const register = () => {
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
               
                style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, lineHeight: 21, color: '#202871'}}
                />
                
            </View>
    
            <Text style={styles.registerContentText}>Last Name</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, lineHeight: 21, color: '#202871'}}
                />
            </View>

            <Text style={styles.registerContentText}>Username</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                placeholder='Enter username'
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}


                />
            </View>
            
            <Text style={styles.registerContentText}>Email</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}

                placeholder='example@email.com'
                />
            </View>
        
            <Text style={styles.registerContentText}>Password</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='Password'
                secureTextEntry/>
                <Pressable>
                    <MaterialIcons name="visibility" size={24} color="black" />
                </Pressable>        
            </View>

            <Text style={styles.registerContentText}>Confirm Password</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput
                style={{fontSize: 16, lineHeight: 21, color: '#202871'}}
                placeholder='Confirm password'
                secureTextEntry/>
            </View>

            <Text style={styles.registerContentText}>Date of Birth</Text>
            <View style={styles.registerTextBoxContainer}>
                <TextInput/>
            </View>


            <View 
                style={{width: 328, height: 48, backgroundColor: '#202871', borderRadius: 8, marginTop: 15 }}>
                <TouchableOpacity 
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

export default register

const styles = StyleSheet.create({
    registerContainer: {
        paddingTop: 30,
        width: '100%',
        height: '1000', 
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