import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const ProfileHeaderRight = () => {
  return (
    <View style={{justifyContent: 'flex-start', height: 100, marginRight: 15}}>
        <Link href='/Settings/settings' asChild>
          <TouchableOpacity style={{marginBottom: 25}}>
              <MaterialCommunityIcons name="cog-outline" size={28} color="#202871" />
          </TouchableOpacity>
        </Link>

        <Link href='editProfile' asChild>
          <TouchableOpacity style={{justifyContent: 'flex-start'}}>
              <MaterialIcons name="mode-edit" size={27} color="#202871" />
          </TouchableOpacity>
        </Link>
        
    </View>
  )
}

export default ProfileHeaderRight