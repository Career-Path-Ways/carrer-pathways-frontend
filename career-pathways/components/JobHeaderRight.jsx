import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import axios from 'axios';
import { HandleJobBookMark } from './job';
import FlashMessage from 'react-native-flash-message';


const JobHeaderRight = ({item}) => {
  console.log("item is: ", item)
  const handleBookMark = async () => {
    await HandleJobBookMark(item)
  }
  return (
    <View style={{marginTop: 2}}>

      <TouchableOpacity onPress={handleBookMark}  style={{width: 32, height: 32}}>
        <MaterialIcons name="bookmark-outline" size={28} color="#202871" />
      </TouchableOpacity>

    </View>

  )
}

export default JobHeaderRight