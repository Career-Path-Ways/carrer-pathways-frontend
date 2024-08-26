import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router'; // Adjust this import based on how you handle routing
import { base_url } from '../config.mjs';
import { Alert, View } from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';


// Your base URL should be imported or defined here if not already
// import { base_url } from 'your-config-file';


export const  Get_Jobs = async () => {
    try{
    const response =  await axios.get(`${base_url}/jobs`)
    console.log(`${base_url}/jobs`)
     return response.data.jobs
    }catch(e){
        console.log(e)
    }
  
}

export const HandleJobBookMark = async (job_id) => {
    try{  
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      console.log('No token found');
      return;
    }
        const response = await axios.post(`${base_url}/jobs/save`, {'job': job_id},{
            headers:{Authorization: `Bearer ${token}`}
        })

        showMessage({
            message: response.data.message,
            type: "success"
        })

        console.log('I runned')


       
    }catch(e){
        console.log(e.response.data.message)
    }
}

export const getSavedJobs = async () => {
    try{
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      console.log('No token found');
      return;
    }
        
        const response = await axios.get(`${base_url}/jobs/savedJobs`, 
            {
            headers:{Authorization: `Bearer ${token}`}
        })
        return response.data.jobs
    }catch(e){
        console.log(e)
    }
}
export const removeSavedJobs = async (job) => {
    try{
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      console.log('No token found');
      return;
    }
        
        const response = await axios.post(`${base_url}/jobs/remove`, {job}, 
            {
            headers:{Authorization: `Bearer ${token}`}
        })

        showMessage({
            message: response.data.message,
            type: "danger"
        })

        return response.data.jobs
        
    }catch(e){
        console.log(e)
    }
}