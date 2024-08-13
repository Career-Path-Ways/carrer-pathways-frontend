import React from 'react'
import {Stack} from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

const Layout = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'PoppinsBold': require('../assets/fonts/Poppins-Bold.ttf'),
    'PoppinsMedium': require('../assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('../assets/fonts/Poppins-SemiBold.ttf')

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <Stack
        onLayout={onLayoutRootView}
       screenOptions={{
        statusBarColor: 'black',
        headerStyle:  {
          backgroundColor: '#ffffff',
        },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: '',
        headerShown: false
        
      }}/> 
  )
}   


export default Layout