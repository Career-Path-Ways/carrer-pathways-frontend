import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SettingHeaderLeft from '../../components/SettingHeaderLeft'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Overlay, Switch } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';

const settings = () => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
      };
  return (
    <View style={styles.settingsContainer}>
        <Stack.Screen options={{
            headerShown: true,
            headerStyle: {
                height: 140
            },
            headerLeft: () => <SettingHeaderLeft label='Setting'/>
        }}
        />

        <View style={styles.detailCardContainer} >
            <View 
            style={{flexDirection: 'row', alignItems: 'flex-end', width: 145, height: 24}} >
                <MaterialCommunityIcons name="bell" size={24} color="#202871" />

                <Text 
                style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: '#202871', marginLeft: 20}}
                >Notifications</Text>
            </View>

            <Switch/>
        </View>

        <View style={styles.detailCardContainer} >
            <View 
            style={{flexDirection: 'row', alignItems: 'flex-end', width: 145, height: 24}} >
                <MaterialIcons name="dark-mode" size={24} color="#202871" />
                <Text 
                style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: '#202871', marginLeft: 20}}
                >Dark Mode</Text>
            </View>

            <Switch/>
        </View>

        <Link push href='/Settings/updatePassword' asChild>
            <TouchableOpacity>
                <View style={styles.detailCardContainer} >
                    <View 
                    style={{flexDirection: 'row', alignItems: 'flex-end', width: 145, height: 24}} >
                        <FontAwesome5 name="user-shield" size={24} color="#202871" />
                        <Text 
                        style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: '#202871', marginLeft: 20}}
                        >Update Password</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} color="#202871" />
                </View>
            </TouchableOpacity>
        </Link>
        
        <TouchableOpacity onPress={toggleOverlay}>
            <View style={styles.detailCardContainer} >
                <View 
                style={{flexDirection: 'row', alignItems: 'flex-end', width: 145, height: 24}} >
                    <MaterialIcons name="logout" size={24} color="#202871" />
                    <Text 
                    style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: '#202871', marginLeft: 20}}
                    >Logout</Text>
                </View>
                    <MaterialIcons name="chevron-right" size={24} color="#202871" />
            </View>
        </TouchableOpacity>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}
        overlayStyle={{width: 340, height: 260, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 16}}>
            <Text 
            style={{fontFamily: 'Poppins', fontSize: 20, lineHeight: 30, color: '#DD214F', textAlign: 'center', marginBottom: 25}}
            >
                Are you sure you want to logout?
            </Text>
            <TouchableOpacity onPress={toggleOverlay}
            style={{width: 328, height: 48, borderWidth:1, borderColor: '#202871', backgroundColor: '#FFFF', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginBottom: 8}}>
                <Text 
                style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, color: '#202871'}}>
                    Cancel
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{width: 328, height: 48, backgroundColor: '#DD214F', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
               <Text 
                style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, color: '#FFFFFF'}}>
                    Logout
                </Text>
            </TouchableOpacity>
        </Overlay>
        
    </View>
  )
}

export default settings

const styles = StyleSheet.create({
    settingsContainer: {
        width: '100%', 
        height: '100%',
        backgroundColor: '#FFFFFF',
    },

    detailCardContainer: {
        width: 328,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#A7ACD7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginLeft: 15,
        marginTop: 25
    }
})