import { View, Text } from 'react-native'
import React from 'react'

import { useLocalSearchParams } from 'expo-router'

const jobDetail = () => {
 const {item} = useLocalSearchParams()
 const parsedItem = JSON.parse(item)
//  console.log(item);
  return (
    <View>
      <Text>{parsedItem.title}</Text>

    </View>
  )
}

export default jobDetail