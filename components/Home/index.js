import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { url } from '../../ngrok/index'
import List from "../List"

const Home = () => {
  const [posts, setPosts] = useState()
  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  const getPosts = async() => {
    dispatch({ type: "SET_LOADING", payload: true})
    const posts = await fetch(`${url}/post/get`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        dispatch({ type: "SET_LOADING", payload: false})
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <View style={styles.container}>
      {console.log(posts)}
      <FlatList
        data={posts}
        renderItem={({ item }) => <List eachPost={item}/>}
        keyExtractor={item => item._id}
        onRefresh={() => getPosts()}
        refreshing={loading}
        style={{ width: 100, backgroundColor: "yellow"}}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row",
    flexWrap: "wrap"
  },
})
