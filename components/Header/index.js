import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Constant from 'expo-constants'
import { Ionicons, } from '@expo/vector-icons'


const Header = ({ }) => {
  return (
    <View style={{
      paddingTop: 45,
      paddingBottom: 25,
      flexDirection: "row",
      justifyContent: "space-around",
      elevation: 5,
      backgroundColor: "#3b5998",
      shadowOffset: { //shadowing for ios 
        width: 1,
        height: 1
      },
      shadowColor: "black",
      shadowOpacity: 1.0,
      borderTopWidth: 0,
    }}>
      <TextInput
        style={{
          width: "90%",
          backgroundColor: "#e6e6e6",
          height: 40,
          fontSize: 18
        }}
        placeholder="Search"
        // value={value}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
