import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import {Stack} from 'expo-router'
import JobHeaderLeft from '../components/JobHeaderLeft'
import JobHeaderRight from '../components/JobHeaderRight'
import JobCard from '../components/JobCard'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const jobDetail = () => {
 const {item} = useLocalSearchParams()
 const parsedItem = JSON.parse(item)

 const openExternalLink = (url) => {
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};

//  console.log(item);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#FFFF'}}>
       

      <Stack.Screen options={{
        headerShown: true,
        headerLeft: () => <JobHeaderLeft/>,
        headerRight: () => <JobHeaderRight item={parsedItem.id}/>,
      }}/>

      <View style={{marginVertical: 15, alignItems: 'center'}}>
        <JobCard 
        noLink={true}
        jobTitle={parsedItem.title}
        companyLogo={parsedItem.company.logo}
        companyName={parsedItem.company.name}
        site={parsedItem.site}
        location={parsedItem.company.location}
        amount={parsedItem.amount}
        duration={parsedItem.duration}
        />
      </View>

      <ScrollView>
        <View style={{marginHorizontal: 15, marginBottom: 22}}>
          <Text 
          style={{fontFamily: 'PoppinsMedium', fontSize: 17, lineHeight: 27, color: '#202871'}}>Company Details</Text>
          <View style={{width: '100%', height: 2, backgroundColor: '#202871'}}/>
        </View>

        <View style={{marginHorizontal: 15}}>
          <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color:'#202871', marginBottom: 5}}>About</Text>
          <View style={{width: '100%', height: 1, backgroundColor: '#D3DFE7', marginBottom: 5}}/>
          <Text 
          style={{fontFamily: 'PoppinsMedium', fontSize: 14, color: '#202871', lineHeight: 24}}>
            {parsedItem.about}
          </Text>
        </View>

        <View style={{marginHorizontal: 15, marginTop: 20, marginBottom: 25}}>
          <Text 
          style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color:'#202871', marginBottom: 5}}>
            Contact Details
          </Text>

          <View style={{width: '100%', height: 1, backgroundColor: '#D3DFE7', marginBottom: 5}}/>

          <Text style={{fontFamily: 'PoppinsMedium', fontSize: 13, lineHeight: 16, color: '#858BBD'}}>
            Location
          </Text>

          <Text 
          style={{fontFamily: 'PoppinsMedium', fontSize: 14, lineHeight: 21, color: '#202871', marginBottom: 5}}>
            {parsedItem.company.location}
          </Text>

          <Text style={{fontFamily: 'PoppinsMedium', fontSize: 13, lineHeight: 16, color: '#858BBD'}}>
            Email
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text 
            style={{fontFamily: 'PoppinsMedium', fontSize: 14, color:'#3A7BD2', lineHeight: 21, marginRight: 2}}>
              {parsedItem.email}
            </Text>
            <EvilIcons name="external-link" size={24} color="#3A7BD2" />
          </View>


          <Text style={{fontFamily: 'PoppinsMedium', fontSize: 13, lineHeight: 16, color: '#858BBD', marginTop: 5}}>
            Contact Number
          </Text>
          <View>
            <Text 
            style={{fontFamily: 'PoppinsMedium', fontSize: 14, color:'#3A7BD2', lineHeight: 21, marginRight: 2}}>
              {parsedItem.company.phone}
            </Text>
          </View>
        </View>

        <View style={styles.signInButtonContainer}>
        <TouchableOpacity  style={styles.signInButton} onPress={() => openExternalLink('https://www.goggle.com')}>
          <Text style={styles.signInButtonText}>Apply</Text>
        </TouchableOpacity>    
        </View>
      

      </ScrollView>
      
    </View>
  )
}

export default jobDetail

const styles =StyleSheet.create({
  signInButtonContainer: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30
  },

  signInButton: {
    width: '95%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202871',
    borderRadius: 8

  },

  signInButtonText: {
    color: '#fff',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
})