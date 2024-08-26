import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const JobsHeaderRight = () => {
  return (
    <View style={{marginHorizontal: 15}}>
        <TouchableOpacity>
            <MaterialIcons name="more-horiz" size={24} color="#202871" />
        </TouchableOpacity>
    </View>
  )
}

export default JobsHeaderRight