import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Selling = () => {
  return (
    <View style={styles.container}>
      <Text>Selling here</Text>
    </View>
  )
}

export default Selling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
