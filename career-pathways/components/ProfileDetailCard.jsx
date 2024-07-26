import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const ProfileDetailCard = ({icon, label}) => {
    
  return (
    <View style={styles.detailCardContainer} >
        <View 
        style={{flexDirection: 'row', alignItems: 'flex-end', width: 145, height: 24}} >
            {icon}
            <Text 
            style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: '#202871', marginLeft: 20}}
            >{label}</Text>
        </View>

        <TouchableOpacity>
            <MaterialIcons name="add" size={24} color="#202871" />
        </TouchableOpacity>
    </View>
  )
}

export default ProfileDetailCard

const styles = StyleSheet.create({
    detailCardContainer: {
        width: 328,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#A7ACD7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginLeft: 15,
        marginTop: 15
    }
})