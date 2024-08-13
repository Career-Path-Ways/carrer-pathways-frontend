import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router'; // Adjust this import based on how you handle routing
import { base_url } from '../config.mjs';

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


