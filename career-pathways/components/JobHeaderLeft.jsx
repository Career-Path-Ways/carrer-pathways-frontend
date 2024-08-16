import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';


const JobHeaderLeft = () => {
  return (
    <View style={{marginVertical: 'auto',  }}>
    <TouchableOpacity onPress={() => router.replace('(tabs)')}  style={{width: 32, height: 32}}>
        <MaterialIcons name="chevron-left" size={30} color="#202871" />
    </TouchableOpacity>
    </View>
    
  )
}

export default JobHeaderLeft