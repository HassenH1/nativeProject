import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat here</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
