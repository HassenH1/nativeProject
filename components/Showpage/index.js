import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Showpage = ({ route }) => {
  const { params } = route
  return (
    <View style={styles.container}>
      <Text>Show page here</Text>
      <Text>{params.name}</Text>
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
