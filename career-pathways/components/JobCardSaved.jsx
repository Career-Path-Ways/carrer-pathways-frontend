import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const JobCardSaved = ({jobTitle, companyName, companyLogo, location, amount , duration, site}) => {
  return (
    <View style={styles.jobCardContainer}>
        <View 
        style={{width: 292, height:60, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#D3DFE7', marginVertical: 10}}>
            <Image source={companyLogo} style={{width: 48, height: 48}} />
            <View style={{width: 200, height: 33}}>
                <Text 
                style={{fontFamily: 'PoppinsBold', fontSize: 16, lineHeight: 24, color: '#202871'}}
                >
                    {jobTitle}
                </Text>
                <Text 
                style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, lineHeight: 21, color: '#858BBD', flexWrap: 'wrap'}}
                >
                    {companyName}
                </Text>
            </View>
            <TouchableOpacity>
                <MaterialIcons name="bookmark-remove" size={25} color="#202871" />
            </TouchableOpacity>
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

    </View>
  )
}

export default JobCardSaved

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