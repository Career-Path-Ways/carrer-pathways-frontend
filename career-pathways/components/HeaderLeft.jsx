import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HeaderLeft = () => {
    const profileImage = require('../assets/images/Ellipse.png')
    const [name, setName] = useState('')

    const loadUserData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('firstName');
          const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
          setName(userData) ;
        } catch (e) {
          console.log(e);
        }
      };

    useEffect(
        () => {
            loadUserData()
        }, []
    )
    
      
  return (
    <View 
    style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 15}}>
        <View style={{width: 52, height: 52, borderWidth: 2, borderColor: '#202871', marginRight: 15, borderRadius: 30}}>
            <Image source={profileImage} style={{width: 48, height: 48}}/>
        </View>
        <View>
            <Text 
            style={{fontFamily: 'PoppinsMedium', fontSize: 15, lineHeight: 21, color: '#798AA3'}}>
                Good Morning,
            </Text>
            <Text 
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 18, lineHeight: 27, color: '#202871'}}>
                {name}
            </Text>
        </View>
    </View>
  )
}

export default HeaderLeft