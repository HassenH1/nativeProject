import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const List = (props) => {
  return (
    <View style={styles.container}>
      <Text>{console.log(props.eachPost.name, "<===============from the list side")}</Text>
      <Text>{props.eachPost.name}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: "black"
  },
})
