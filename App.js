import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import Tabs from './components/Tabs'
import Signup from './components/Signup';
import Login from './components/Login';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer/reducer'
import Profile from './components/Profile';
import Setting from './components/Setting';
import Showpage from './components/Showpage';

const Stack = createStackNavigator()

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
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

          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{
              headerShown: true,
              headerBackTitle: "Profile"
            }}
          />

          <Stack.Screen
            name="showpage"
            component={Showpage}
            options={{
              headerShown: false
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});