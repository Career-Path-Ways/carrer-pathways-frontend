import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, Stack } from 'expo-router';
import HeaderLeft from '../../components/HeaderLeft';
import HeaderRight from '../../components/HeaderRight';
import { MaterialIcons } from '@expo/vector-icons';
import JobCard from '../../components/JobCard';
import { Get_Jobs } from '../../components/job';

const Home = () => {
  const ecobank = require('../../assets/images/ecobank_transnational_icon.jpeg.png');
  const [jobListings, setJobListings] = useState([])

  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);
  const [processing, setProcessing] = useState(true)

  useEffect(
     () => {
      async function getJobs(){
      const jobs = await Get_Jobs()
      setJobListings(jobs)
      }
      getJobs()

      setProcessing(false)
    }, []
  )

  useEffect(() => {
    setJobs(jobListings);
  }, [jobListings]);

  // Function to filter items based on search query
  const filteredJobs = jobs.filter(job => {
    console.log("joblistings:", jobListings)
    const reg = new RegExp(search, 'i');
    return reg.test(job.title) ||
           reg.test(job.company.name) ||
           reg.test(job.site) ||
           reg.test(job.location) ||
           reg.test(job.amount) ||
           reg.test(job.duration);
  });

  return (
    <View style={styles.homeContainer}>
      <Stack.Screen options={{
        headerTitle: '',
        headerStyle: { height: 100 },
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        headerShadowVisible: false,
      }} />

      <View style={styles.homeSearchBarContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={25} color="#A8B9CA" />
          <TextInput
            placeholder='Search for a job or company'
            placeholderTextColor='#A8B9CA'
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <MaterialIcons name="filter-alt" size={24} color="#A8B9CA" />
      </View>

      <ScrollView>
        {search === '' && (
          <>
            <Text style={styles.homeHeadings}>Recommended Jobs</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.jobCardContainer}>
              <JobCard
                jobTitle='Chartered Accountant'
                companyLogo={ecobank}
                companyName='Ecobank Ghana PLC'
                site='On-Site'
                location='Lapaz, Accra'
                amount='GH¢ 5,500 - GH¢ 8,000'
                duration='Full-time'
              />
              <JobCard
                jobTitle='Operations Manager'
                companyLogo={ecobank}
                companyName='Ecobank Ghana PLC'
                site='On-Site'
                location='Lapaz, Accra'
                amount='GH¢ 5,500 - GH¢ 8,000'
                duration='Full-time'
              />
              <JobCard
                jobTitle='Financial Consultant'
                companyLogo={ecobank}
                companyName='Ecobank Ghana PLC'
                site='On-Site'
                location='Lapaz, Accra'
                amount='GH¢ 5,500 - GH¢ 8,000'
                duration='Full-time'
              />
            </ScrollView>
          </>
        )}

        <Text style={styles.homeHeadings1}>Recent Jobs</Text>
        {filteredJobs.length ===0 && <ActivityIndicator size="large" color="#0000ff" />}
        {filteredJobs.map((item) => (

            <JobCard
            item = {item}
            jobTitle={item.title} 
            companyLogo={item.logo}
            companyName={item.company.name}
            site={item.site}
            location={item.location}
            amount={item.amount}
            duration={item.duration}
          /> 
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;

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
    width: '90%',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    borderColor: '#D3DFE7',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingBottom: 7
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    fontFamily: 'Poppins',
    fontSize: 15,
    lineHeight: 21,
    flex: 1,
    marginLeft: 10,
    color: '#202871',
  },
  
  homeHeadings: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 17,
    lineHeight: 24,
    color: '#202871',
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  homeHeadings1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 17,
    lineHeight: 24,
    color: '#202871',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  jobCardContainer: {
    height: 205,
  },
});
