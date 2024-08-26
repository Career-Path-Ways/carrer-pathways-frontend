import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import SettingHeaderLeft from '../../components/SettingHeaderLeft'

const updatePassword = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

  return (
    <View style={styles.settingsContainer}>
        <Stack.Screen options={{
            headerShown: true,
            headerStyle: {
                height: 140
            },
            headerLeft: () => <SettingHeaderLeft label='Update Password'/>
        }}
        />

        <View style={styles.inputGroup}>
          <Text style={styles.signInContentText}>Old Password</Text>
          <View style={styles.signInTextBoxContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              selectionColor="#202871"
              secureTextEntry={!passwordVisible}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <MaterialIcons name={passwordVisible ? "visibility-off" : "visibility"} size={24} color="grey" />
            </Pressable>
          </View>

          <Text style={styles.signInContentText}>New Password</Text>
          <View style={styles.signInTextBoxContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              selectionColor="#202871"
              secureTextEntry={!passwordVisible}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <MaterialIcons name={passwordVisible ? "visibility-off" : "visibility"} size={24} color="grey" />
            </Pressable>
          </View>

          <Text style={styles.signInContentText}>Confirm Password</Text>
          <View style={styles.signInTextBoxContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              selectionColor="#202871"
              secureTextEntry={!passwordVisible}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <MaterialIcons name={passwordVisible ? "visibility-off" : "visibility"} size={24} color="grey" />
            </Pressable>
          </View>
        </View>

        
        
    </View>
  )
}

export default updatePassword

const styles = StyleSheet.create({
    settingsContainer: {
        width: '100%', 
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20
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
}
)
