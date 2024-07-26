import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import JobsHeaderLeft from '../../components/JobsHeaderLeft'
import JobsHeaderRight from '../../components/JobsHeaderRight'
import { MaterialIcons } from '@expo/vector-icons';
import JobCardSaved from '../../components/JobCardSaved'
import { sortRoutes } from 'expo-router/build/sortRoutes'


const savedJobs = () => {

  const ecobank = require('../../assets/images/ecobank_transnational_icon.jpeg.png')
  const cbg = require('../../assets/images/cbg_logo.png.png')
  const GCB = require('../../assets/images/gcbbankcomgh_logo.png.png')

  return (
    <View style={styles.savedJobsContainer}>
      <Stack.Screen options={{
        headerTitle: '',
        headerStyle: {
          height: 80
        },
        headerLeft: () => <JobsHeaderLeft/>,
        headerRight: () => <JobsHeaderRight/>,
        headerShadowVisible: false
      }}
      />

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

      <ScrollView contentContainerStyle={styles.savedJobsList}>
      <JobCardSaved
      jobTitle='Chartered Accountant'
      companyLogo={ecobank}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8,000'
      duration='Full-time'
      />

      <JobCardSaved
      jobTitle='Chartered Accountant'
      companyLogo={GCB}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8, 000'
      duration='Full-time'
      />

      <JobCardSaved
      jobTitle='Chartered Accountant'
      companyLogo={ecobank}
      companyName='Ecobank Ghana PLC'
      site='On-Site'
      location='Lapaz, Accra'
      amount='GH¢ 5,500 - GH¢ 8,000'
      duration='Full-time'
      />

      <JobCardSaved
      jobTitle='Chartered Accountant'
      companyLogo={cbg}
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

export default savedJobs

const styles = StyleSheet.create({
  savedJobsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
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

  savedJobsList: {
    marginTop: 30,
  }
})