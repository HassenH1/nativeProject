import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign Up"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

      <Button
        title="Login"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
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
