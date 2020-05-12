import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { url } from '../../ngrok/index'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem } from 'react-native-elements'
import Constants from 'expo-constants'


const Selling = () => {
  const { user } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  const items = user?.post?.map((elem, i) => {
    return (
      <Text style={styles.items}>
        {elem}
      </Text>
    )
  })


  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: Constants.statusBarHeight, }}>
        <View>
          {items}
        </View>
      </ScrollView>
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
  items: {
    borderBottomColor: 'black',
    borderWidth: 1,
    marginTop: 5
  }
})
