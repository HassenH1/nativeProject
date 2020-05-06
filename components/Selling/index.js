import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { url } from '../../ngrok/index'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem } from 'react-native-elements'


const Selling = () => {
  const { user } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  const posted = () => {
    user?.posted?.map((elem, i) => {
      return(
        <ListItem 
          key={i}
          title={elem}
          bottomDivider
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <Text>Selling here</Text>
      {console.log(user, "<----------------everything should alread be here?")}
      {posted}
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
