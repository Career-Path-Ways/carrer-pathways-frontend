import { View, Text, StyleSheet , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const forgotPassword = () => {
  return (
    <View style={styles.forgotPasswordContainer}>
        <Stack.Screen options={{
            headerBackButtonMenuEnabled: true,
            headerTitle: '',
        }} />

        <Text 
        style={{fontFamily: 'PoppinsSemiBold', fontSize: 24, lineHeight: 36, color: '#202871', }}
        >Forgot Password</Text>
        <Text
        style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: '#798AA3', marginBottom: 30}}
        >Enter your email</Text>

        <View style={{marginBottom: 20, marginTop: 80}}>
          <Text style={{fontFamily: 'PoppinsMedium', fontSize: 16, lineHeight: 21, color: '#202871'}}
          >
            Email
          </Text>

          <View
          style={{alignItems: 'flex-start', width: 320, height: 48, borderWidth: 1, borderColor: '#A8B9CA', borderRadius: 8, paddingHorizontal: 12}}
          >
            <TextInput 
            style={{width: '100%', height: '100%', fontSize: 14, fontFamily: 'Poppins'}}
            placeholder='example@email.com'
            />
          </View>
        </View>

              <View 
                style={{width: 328, height: 48, backgroundColor: '#202871', borderRadius: 8, marginTop: 50 }}>
                <TouchableOpacity 
                style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text 
                    style={{color: '#fff', fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24}}
                    >Continue</Text>
                </TouchableOpacity>
              </View>
    </View>
  )
}

export default forgotPassword

const styles = StyleSheet.create({
    forgotPasswordContainer: {
        width: '100%',
        height: '100%', 
        backgroundColor: '#FFFFFF',
        paddingTop: 90,
        paddingHorizontal: 20,
        alignItems: 'center',
        
    }
})
