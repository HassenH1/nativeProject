import React from 'react'
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native'
import Signup from '../Signup'
import { Button } from 'react-native-elements';

const WIDTH = Dimensions.get("window").width
const Profile = (props) => {
  // const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Button
        title="Sign Up"
        color="#f194ff"
        onPress={() => props.navigation.navigate("sign up")}
        style={styles.button}
      />

      <Button
        title="Login"
        // color="#f194ff"
        onPress={() => props.navigation.navigate("login")}
        style={styles.button}
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
    marginTop: 20,
    width: WIDTH -30
  }
})
