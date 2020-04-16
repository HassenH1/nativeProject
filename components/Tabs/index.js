import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Home from '../Home'
import Profile from '../Profile'
import OpenCamera from '../OpenCamera';

const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName
        if (route.name == 'Home') {
          iconName = 'ios-home'
        } else if (route.name == 'Profile') {
          iconName = 'ios-person'
        } else if (route.name == 'Camera') {
          iconName = 'ios-camera'
        } else if (route.name == 'Search') {
          iconName = 'md-search'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      }
    })}>

      <Tab.Screen
        name="Home"
        component={Home}
      />


      <Tab.Screen
        name="Camera"
        component={OpenCamera}
      />



      <Tab.Screen
        name="Profile"
        component={Profile}
      />

    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})
