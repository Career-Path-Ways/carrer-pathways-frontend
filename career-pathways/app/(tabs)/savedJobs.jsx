import { View, Text, StyleSheet, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import JobsHeaderLeft from '../../components/JobsHeaderLeft'
import JobsHeaderRight from '../../components/JobsHeaderRight'
import { MaterialIcons } from '@expo/vector-icons';
import JobCardSaved from '../../components/JobCardSaved'
import { sortRoutes } from 'expo-router/build/sortRoutes'
import { getSavedJobs } from '../../components/job'
import JobCard from '../../components/JobCard'
import FlashMessage from 'react-native-flash-message'


const savedJobs = () => {

  const [jobs, setJobs] = useState([])

  useEffect(
    () => {
      async function SaveJobs() {
        const jobs = await getSavedJobs()
        setJobs(jobs)
        console.log('This is the saved jobs', jobs)
        
      }

      SaveJobs()
    }, 
    []
  )

  const updateJobs = (data) => {
    setJobs(data)
  }

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
      {jobs.length ===0 && <ActivityIndicator size="large" color="#0000ff" />}
       {jobs.map((item) => (
      <JobCard
      key={item.id}
      item = {item}
      jobTitle={item.title} 
      companyLogo={item.logo}
      companyName={item.company.name}
      site={item.site}
      location={item.location}
      amount={item.amount}
      duration={item.duration}
      onData={updateJobs}
      /> 
      ))} 
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