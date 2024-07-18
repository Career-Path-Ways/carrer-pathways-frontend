import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'
import { MaterialIcons } from '@expo/vector-icons';
import JobCard from '../../components/JobCard'

const Home = () => {
  const ecobank = require('../../assets/images/ecobank_transnational_icon.jpeg.png')
  const cbg = require('../../assets/images/cbg_logo.png.png')
  const GCB = require('../../assets/images/gcbbankcomgh_logo.png.png')
  return (
    <View style={styles.homeContainer}>
      <Stack.Screen options={{
        headerTitle: '',
        headerStyle: {
          height: 100
        },
        headerLeft: () => <HeaderLeft/>,
        headerRight: () => <HeaderRight/>,
        headerShadowVisible: false
      }}/>

      <View style={styles.homeSearchBarContainer} >
        <View style={{width: 232, flexDirection: 'row', marginTop: 5}}>
          <MaterialIcons name="search" size={25} color="#A8B9CA" />
          <TextInput
          placeholder='Search for a job or company'
          placeholderTextColor='#A8B9CA'
          style={{fontFamily: 'Poppins', fontSize: 15, lineHeight: 21, width: 220, height:'100%', marginLeft: 10, marginRight: 30}}
        />
        </View>
        
        <MaterialIcons name="filter-alt" size={24} color="#A8B9CA" />
      </View>
      <ScrollView>

      <Text style={styles.homeHeadings}>Recommended Jobs</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.jobCardContainer} style={{flex: 1/2}}>
      <JobCard
      jobTitle='Chartered Accountant'
      companyLogo={ecobank}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />

      <JobCard
      jobTitle='Chartered Accountant'
      companyLogo={ecobank}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />

    <JobCard
      jobTitle='Chartered Accountant'
      companyLogo={ecobank}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />
      </ScrollView>

      <Text style={styles.homeHeadings1}>Recent Jobs</Text>
      <JobCard
      jobTitle='Chartered Accountant'
      companyLogo={GCB}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />

      <JobCard
      jobTitle='Chartered Accountant'
      companyLogo={cbg}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />

    <JobCard
      jobTitle='Chartered Accountant'
      companyLogo={ecobank}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />

  </ScrollView>
  </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        width: '100%', 
        height: '100%',
        backgroundColor: '#FFFFFF',      
    },

    homeSearchBarContainer: {
      backgroundColor: '#FBFCFE',
      flexDirection: 'row',
      marginHorizontal: 15,
      width: 328,
      height: 48,
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      borderColor: '#D3DFE7',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },

    homeHeadings: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 17,
      lineHeight: 24,
      color: '#202871',
      marginLeft: 15,
      marginTop: 30,
      marginBottom: 20
    },

  homeHeadings1: {
    fontFamily: 'PoppinsSemiBold',
      fontSize: 17,
      lineHeight: 24,
      color: '#202871',
      marginLeft: 15,
      marginTop: 15,
      marginBottom: 20
  },

    jobCardContainer: {
      height: 205
    }


})