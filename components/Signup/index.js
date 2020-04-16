import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements';


const WIDTH = Dimensions.get('window').width;

const Signup = (props) => {

  const [input, setInput] = useState({
    email: "",
    username: "",
    password: ""
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <View style={styles.title}>
            <Text style={{ fontSize: 49, fontWeight: "bold", textAlign: "left" }}>Register.</Text>
            <View
              style={{
                borderBottomColor: '#89cff0',
                borderBottomWidth: 1,
                width: WIDTH / 2,
                marginTop: 10
              }}
            />
          </View>

          <View>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={text => setInput({
                ...input,
                email: text
              })}
              value={input.email}
            />

            <TextInput
              placeholder="username"
              style={styles.input}
              onChangeText={text => setInput({
                ...input,
                username: text
              })}
              value={input.username}
            />


            <TextInput
              placeholder="password"
              style={styles.input}
              onChangeText={text => setInput({
                ...input,
                password: text
              })}
              value={input.password}
            />

            <Button
              title="Submit"
              style={styles.btn}
              onPress={() => console.log("clicked")}
            />
          </View>

          <View style={{ marginTop: 18 }}>
            <Text>Already have an Account? <Text onPress={() => props.navigation.navigate("login")}
              style={{ color: "blue" }}>Login</Text></Text>
          </View>

        </View>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 50,
    fontWeight: "bold"
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
  },
})
