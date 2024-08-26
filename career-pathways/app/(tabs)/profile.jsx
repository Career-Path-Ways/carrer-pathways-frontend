import { View, Text, StyleSheet, ScrollView } from 'react-native'
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

        <Text 
        style={{fontFamily: 'PoppinsSemiBold', fontSize: 18, lineHeight: 27, color: '#202871', marginBottom: 7, marginLeft: 15}}
        >
          About Me
        </Text>

        <ScrollView style={{paddingVertical: 10,  borderTopEndRadius: 36}}>
          <Text 
          style={{textAlign: 'justify', fontFamily: 'Poppins', color: '#42498A', fontSize: 16, marginHorizontal: 15 }}>
        I am a Software Developer with 5 years of experience specializing in full-stack web development and cloud computing.
        My passion lies in creating efficient, scalable solutions 
        and I have a proven track record of delivering high-quality, user-friendly applications.
        {"\n"}{"\n"}Throughout my career, I've had the opportunity to work on a wide range of web applications 
        across various industries, collaborating with cross-functional teams to achieve outstanding results{"\n"}{"\n"}
         My strengths include problem-solving, attention to detail, effective communication, and team leadership, and I am always eager to learn and grow in my profession.
        I thrive in dynamic environments and am always up for a challenge.  
        I am committed to continuous improvement, both personally and professionally, 
        and I am excited to contribute my skills and experience to a forward-thinking organization.
          </Text>
        </ScrollView>

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