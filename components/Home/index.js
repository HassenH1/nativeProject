import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { url } from '../../ngrok/index'

const Home = () => {
  const [posts, setPosts] = useState()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  getPosts = async() => {
    const posts = await fetch(`${url}/post/get`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, "<------------the data is?")
        setPosts(data)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
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
