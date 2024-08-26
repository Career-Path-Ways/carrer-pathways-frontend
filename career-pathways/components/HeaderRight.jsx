import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const HeaderRight = () => {
  const [isChecked, SetIsChecked] = useState(true)

  const HandleIconChange = () => {
    SetIsChecked(!isChecked)
  }
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15}}>   
        <Link href='savedJobs' asChild>
          <TouchableOpacity style={{marginRight: 17}}>
              <MaterialIcons name="bookmarks" size={24} color="#202871" />
          </TouchableOpacity>
        </Link>

        <TouchableOpacity onPress={HandleIconChange}>
            <MaterialCommunityIcons name={isChecked ? "bell-badge-outline" : "bell-off-outline"} size={26} color="#202871" />
        </TouchableOpacity>
    </View>
  )
}

export default HeaderRight