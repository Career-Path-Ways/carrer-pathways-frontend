import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileHeaderLeft = () => {
    const profileImage = require('../assets/images/Ellipse.png')

  return (
    <View style={{justifyContent: 'space-between', height: 105, marginLeft: 15}}>
      <Text style={{fontFamily: 'PoppinsMedium', fontSize: 20, color: '#202871'}}>
        Profile
        </Text>

      <View style={{flexDirection: 'row', width: 235, height: 52}}>
        <View style={{width: 52, height: 52, borderWidth: 2, borderColor: '#202871', marginRight: 15, borderRadius: 30}}>
            <Image source={profileImage} style={{width: 48, height: 48}}/>
        </View>

        <View>
            <Text 
                style={{fontFamily: 'PoppinsSemiBold', fontSize: 18, lineHeight: 27, color: '#202871'}}>
                Melvin Kuffour
            </Text>
            <Text
            style={{fontFamily: 'Poppins', fontSize: 12, lineHeight: 18, color: '#798AA3'}}
            >
                Loan Officer | GTBank Ghana
            </Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileHeaderLeft