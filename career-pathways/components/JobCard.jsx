import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { removeSavedJobs } from './job';

const JobCard = ({jobTitle, companyName, companyLogo, location, amount , duration, site, item, onData, noLink}) => {
    const pathname = usePathname()
    console.log(pathname, 'This is pathname')
    if (typeof companyLogo !== 'string') {
        console.log('companyLogo is not a string:', companyLogo);
        companyLogo = 'https://picsum.photos/id/237/200/300'; // Fallback URL
      }

      const removeBookmark = async () => {
        const jobs = await removeSavedJobs(item.id)
        onData(jobs)
      }
  return (
    <TouchableOpacity   onPress={!noLink ? () => router.push({ pathname: '/jobDetail', params: { item: JSON.stringify(item) } }) : undefined}
    style={styles.jobCardContainer}>
        <View 
        style={{width: 292, height:60, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#D3DFE7', marginVertical: 10, paddingBottom: 3}}>
            <Image source={{uri:companyLogo }} style={{width: 48, height: 48, borderRadius: 4}} />
            <View style={{width: 200, minHeight: 33}}>
                <Text 
                style={{fontFamily: 'PoppinsBold', fontSize: 16, lineHeight: 24, color: '#202871'}}
                >
                    {jobTitle}
                </Text>
                <Text 
                style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, lineHeight: 21, color: '#858BBD', flexWrap: 'wrap', marginBottom: 3}}
                >
                    {companyName}
                </Text>
            </View>
            {(pathname !== '/jobDetail' && pathname !== '/'  ) && <TouchableOpacity onPress={removeBookmark}>
                <MaterialIcons name="bookmark-remove" size={25} color="#DD214F" />
            </TouchableOpacity> }
            
            
        </View>

        <View style={{width: 292, height: 72, alignItems: 'center'}}>
            <Text 
            style={{fontFamily: 'PoppinsMedium', fontSize: 14, color: '#858BBD', lineHeight: 21}}>
                {location}
            </Text>

            <Text 
            style={{fontFamily: 'PoppinsBold', fontSize: 14, lineHeight: 21, color: '#202871'}}>
                {amount}
            </Text>

            <View 
            style={{flexDirection: 'row', width: 142, height: 24, justifyContent: 'flex-end', marginTop: 15 }}>
                <View 
                style={{minHeight: 24, minWidth: 72, backgroundColor: '#E9F0F4', borderWidth: 1,borderColor: '#D3DFE7', justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                    <Text style={{fontFamily: 'PoppinsMedium', fontSize: 12, lineHeight: 18, color: '#858BBD'}}>
                        {duration}
                    </Text>
                </View>
                <View 
                style={{minHeight: 24, minWidth: 72, backgroundColor: '#E9F0F4', borderWidth: 1,borderColor: '#D3DFE7', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'PoppinsMedium', fontSize: 12, lineHeight: 18, color: '#858BBD'}}>
                        {site}
                    </Text>
                </View>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default JobCard

const styles = StyleSheet.create({
    jobCardContainer: {
        width: 324,
        maxheight: 180,
        borderRadius: 12,
        borderWidth: 1,
        padding: 16,
        paddingTop: 10,
        paddingBottom: 30,
        borderColor: '#D3DFE7',
        backgroundColor: '#FBFCFE',
        marginHorizontal: 15,
        marginBottom: 20,

        
    }
})