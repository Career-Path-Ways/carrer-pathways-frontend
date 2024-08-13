import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router'; // Adjust this import based on how you handle routing
import { base_url } from '../config.mjs';



export const signIn = async (email, password) => {
  try {
    const data = {
      email_username: email,
      password: password
    };

    const response = await axios.post(`${base_url}/login`, data);
    const user = response.data.user.first_name;
    const token = response.data.token;

    console.log(user);

    await AsyncStorage.setItem('firstName', JSON.stringify(user));
    await AsyncStorage.setItem('userToken', token);
    
    router.replace('(tabs)'); // Adjust this based on your routing logic

  } catch (error) {
      let message = await AsyncStorage.setItem('msg', error.response.data.message)
     console.log(message);
  }
};

export const logout = async()=>{
    try{
        const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      console.log('No token found');
      return;
    }
    const response = await axios.post(`${base_url}/logout`,{}, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response.data);
    await AsyncStorage.removeItem('firstName');
    await AsyncStorage.removeItem('userToken'); 
    router.replace('signIn');
    }catch(e){
        console.log(e)
    }
}

export const register = async (firstname, lastname, username, email, password, confirmPassword, dateOfBirth) => {
    try{
        const data = {
            first_name: firstname,
            last_name: lastname,
            username: username,
            email,
            password,
            password_confirmation: confirmPassword,
            date_of_birth: dateOfBirth
        }
        const response = await axios.post(`${base_url}/register`, data)
        await signIn(username, password)
        console.log(response.data)
    }catch(error){
        console.log(error.message)
    }
}

