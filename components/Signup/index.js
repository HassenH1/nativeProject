import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import { Button } from 'react-native-elements';


const WIDTH = Dimensions.get('window').width;

const Signup = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>SIGNUP.</Text>
      </View>

      <View>
        <TextInput
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
        />
      </View>

      <View>
        <Button 
          title="Submit"
          style={styles.btn}
          onPress={() => console.log("clicked")}
        />
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: "space-between"
  },
  input: {
    height: 60,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    width: WIDTH - 30,
    borderRadius: 6,
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    padding: 10,
    marginTop: 10,
    fontSize: 15,
  },
  btn: {
    marginTop: 10,
    color: "red",
    width: WIDTH - 30
  }
})
