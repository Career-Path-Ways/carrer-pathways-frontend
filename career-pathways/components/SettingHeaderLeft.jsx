import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SettingHeaderLeft = ({label}) => {
  return (
    <View 
    style={{flexDirection: 'row',width: 200, alignItems: 'center', marginTop: 30,}}>
        <Link href='(tabs)/profile' asChild>
            <TouchableOpacity>
                <MaterialIcons name="chevron-left" size={35} color="#202871" />
            </TouchableOpacity>
        </Link>
        
        <Text 
        style={{fontFamily: 'PoppinsMedium', fontSize: 18, lineHeight: 27, color: '#202871', marginLeft: 10}}
        >
            {label}
        </Text>
    </View>
  )
}

export default SettingHeaderLeft