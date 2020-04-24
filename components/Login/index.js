import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements';
import { url } from '../../ngrok/index'
import { useDispatch } from 'react-redux'

const WIDTH = Dimensions.get('window').width;

const Login = (props) => {
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")

  handleSubmit = async () => {
    if (input.email === "" || input.password === "") {
      setError("All Fields Must be Completed")
      setTimeout(() => {
        setError("")
        clearTimeout()
      }, 5000)
      return
    }

    try {
      const response = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(input)
      })
      const user = await response.json()
      console.log(user)
      dispatch({ type: "ADDING", payload: user })
      props.navigation.navigate("tabs")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <View style={styles.title}>
            <Text style={{ fontSize: 49, fontWeight: "bold", textAlign: "left", textAlign: "center" }}>Login.</Text>
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
            <Text style={{
              color: "red",
              textAlign: "center"
            }}>{error}</Text>
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
              onPress={() => handleSubmit()}
            />
          </View>

          <View style={{ marginTop: 18 }}>
            <Text>Don't Have an Account? <Text onPress={() => props.navigation.navigate("sign up")}
              style={{ color: "blue" }}>Signup</Text></Text>
          </View>

        </View>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 50,
    // fontWeight: "bold"
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
    // color: "red",
    width: WIDTH - 30
  },
})
