import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const WIDTH = Dimensions.get("window").width

const List = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 220 / 2, height: 300 / 2, borderWidth: 1, borderColor: "whitesmoke" }}
          source={{ uri: props.eachPost.image }}
        />
      </View>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
    flexWrap: "wrap"
  }
})
