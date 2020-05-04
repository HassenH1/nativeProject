import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { url } from '../../ngrok/index'
import List from "../List"
import Constants from 'expo-constants'

const WIDTH = Dimensions.get("window").width

const Home = (props) => {
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
    const data = await posts.json()
    setPosts(data)
    dispatch({ type: "SET_LOADING", payload: false })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ marginTop: Constants.statusBarHeight}}>
        <Text>Header here!!</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <List {...props} eachPost={item}/>}
        keyExtractor={item => item._id}
        onRefresh={() => getPosts()}
        refreshing={loading}
        numColumns={3}
        inverted={true}
        style={{ marginTop: 18 }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "whitesmoke",
  },
})
