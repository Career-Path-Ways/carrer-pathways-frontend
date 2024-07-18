import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderRight = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15}}>
        <TouchableOpacity style={{marginRight: 17}}>
            <MaterialIcons name="bookmarks" size={24} color="#202871" />
        </TouchableOpacity>

        <TouchableOpacity>
            <MaterialCommunityIcons name="bell-badge-outline" size={26} color="#202871" />
        </TouchableOpacity>
    </View>
  )
}

export default HeaderRight