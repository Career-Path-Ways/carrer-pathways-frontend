import { MaterialIcons } from '@expo/vector-icons';
import {  Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#202871', tabBarStyle: {
      borderWidth: 1,
      borderColor: '#D3DFE7',
      borderTopEndRadius: 16,
      borderTopStartRadius: 16,
      height: 60,
      backgroundColor: '#FBFCFE'
      

    }, tabBarLabelStyle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
    } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={27} color={color} />,
        }}
      />
      <Tabs.Screen
        name="applications"
        options={{
          title: 'Applications',
          tabBarIcon: ({ color }) => <MaterialIcons name="work-outline" size={27} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={27} color={color} />,
        }}
      />
    </Tabs>
  );
}
