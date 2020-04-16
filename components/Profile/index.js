import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import Signup from '../Signup'

const Profile = (props) => {
  // const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Button
        title="Sign Up"
        color="#f194ff"
        onPress={() => props.navigation.navigate("sign up")}
      />

      <Button
        title="Login"
        color="#f194ff"
        onPress={() => props.navigation.navigate("login")}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
  }
})
