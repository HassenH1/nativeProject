import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import Tabs from './components/Tabs'
import Signup from './components/Signup';
import Login from './components/Login';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="sign up"
          component={Signup}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
