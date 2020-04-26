import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import Showpage from '../Showpage'

const WIDTH = Dimensions.get("window").width

const List = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("showpage")} onLongPress={() => console.log("long press")}>
      <Image
        style={{ width: 220 / 2, height: 300 / 2, borderWidth: 1, borderColor: "whitesmoke", marginHorizontal: 8, marginTop: Constants.statusBarHeight }}
        source={{ uri: props.eachPost.image }}
      />
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({})
