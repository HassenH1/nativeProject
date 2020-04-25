import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const WIDTH = Dimensions.get("window").width

const List = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 250 / 2, height: 300 / 2, borderWidth: 1 }}
        source={{ uri: props.eachPost.image}} 
      />
      <Text>{props.eachPost.name}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight + 10,
    marginHorizontal: WIDTH - 300
  },
})
