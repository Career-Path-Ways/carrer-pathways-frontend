import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ProfileHeaderLeft from '../../components/ProfileHeaderLeft'
import ProfileHeaderRight from '../../components/ProfileHeaderRight'
import ProfileDetailCard from '../../components/ProfileDetailCard'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const profile = () => {
  const summaryIcon = <MaterialIcons name="text-snippet" size={24} color="#202871" />
  const workExperience = <MaterialIcons name="home-repair-service" size={24} color="#202871" />
  const education = <MaterialIcons name="school" size={24} color="#202871" />
  const skills = <Feather name="pie-chart" size={24} color="#202871" />
  const languages = <MaterialIcons name="language" size={24} color="#202871" />
  const resume = <MaterialIcons name="insert-drive-file" size={24} color="#202871" />

  return (
    <View style={styles.profileContainer}>
      <Stack.Screen options={{
        headerStyle: {
          height: 150
        },
        headerTitle: '',
        headerLeft: () => <ProfileHeaderLeft/>,
        headerRight: () => <ProfileHeaderRight/>,
        headerShadowVisible: false
      }}/>

      <ProfileDetailCard icon={summaryIcon} label='Summary'/>
      <ProfileDetailCard icon={workExperience} label='Work Experience'/>
      <ProfileDetailCard icon={education} label='Education'/>
      <ProfileDetailCard icon={skills} label='Skills'/>
      <ProfileDetailCard icon={languages} label='Languages'/>
      <ProfileDetailCard icon={resume} label='CV/Resume'/>

    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  }
})