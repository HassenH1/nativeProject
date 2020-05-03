import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Showpage = ({ route }) => {
  console.log(route, "<-----------------route?")
  return (
    <View style={styles.container}>
      <Text>Show page here</Text>
      {/* <Text>{props.showing.name}</Text> */}
    </View>
  )
}

export default Showpage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
})
