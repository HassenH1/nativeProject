import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { url } from '../../ngrok/index'
import List from "../List"
import Constants from 'expo-constants'

const WIDTH = Dimensions.get("window").width

const Home = () => {
  const [posts, setPosts] = useState()
  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  const getPosts = async () => {
    dispatch({ type: "SET_LOADING", payload: true })
    const posts = await fetch(`${url}/post/get`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        dispatch({ type: "SET_LOADING", payload: false })
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <List eachPost={item} />}
        keyExtractor={item => item._id}
        onRefresh={() => getPosts()}
        refreshing={loading}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      />
      <Text>center?</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
