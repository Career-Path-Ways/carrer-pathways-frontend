import { View, Text } from 'react-native'
import React from 'react'

const JobsHeaderLeft = () => {
  return (
    <View style={{marginHorizontal: 15}}>
      <Text 
      style={{fontFamily: 'Poppins', fontSize: 18, lineHeight: 27, color: '#202871'}}
      >Saved Jobs</Text>
    </View>
  )
}

export default JobsHeaderLeft