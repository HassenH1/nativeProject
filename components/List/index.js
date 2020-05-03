import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import Showpage from '../Showpage'

const WIDTH = Dimensions.get("window").width

const List = (props) => {
  const { navigation, eachPost } = props

  const handlePress = () => {
    navigation.navigate("showpage")
  }

  return (
    <TouchableOpacity onPress={() => handlePress()} onLongPress={() => console.log("long press")}>
      <Image
        style={{ width: 220 / 2, height: 300 / 2, borderWidth: 1, borderColor: "black", marginHorizontal: 8, marginTop: 10, borderRadius: 5 }}
        source={{ uri: eachPost.image }}
      />
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({})
