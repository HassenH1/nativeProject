import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Home from '../Home'
import Profile from '../Profile'
import OpenCamera from '../OpenCamera';
import Chat from '../Chat';
import Selling from '../Selling';

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
        } else if (route.name == 'Chat') {
          iconName = 'ios-chatbubbles'
        } else if (route.name == 'Selling') {
          iconName = 'md-pricetags'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarOptions: {
        showLabel: false //label wont disappear for some reason
      }
    })}>

      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
      />

      <Tab.Screen
        name="Camera"
        component={OpenCamera}
      />


      <Tab.Screen
        name="Selling"
        component={Selling}
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
