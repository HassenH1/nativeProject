import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Alert, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { url } from '../../ngrok/index'

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const OpenCamera = (props) => {

  const { user } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [dbImage, setDBImage] = useState("")
  const [error, setError] = useState("")

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA)
    if (granted) {
      const data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5 // 1 is full quality of picture
      })
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        }
        setImg(newFile)
        handleImageUpload(newFile)
      }
    } else {
      Alert.alert("You need to give permission to work")
    }
  }

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (granted) {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5 // 1 is full quality of picture
      })
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test/${data.uri.split(".")[1]}`,
        }
        setImg(newFile)
        handleImageUpload(newFile)
      }
    } else {
      Alert.alert("You need to give permission to work")
    }
  }

  const handleImageUpload = async (image) => {
    const data = await new FormData()
    data.append("file", image)
    data.append("upload_preset", "my_project")
    data.append("cloud_name", "hassen")

    fetch("https://api.cloudinary.com/v1_1/hassen/image/upload", {
      method: "POST",
      body: data
    })
      .then((resp) => resp.json())
      .then((res) => {
        // submitToDB(res.url)
        setDBImage(res.url)
      })
  }

  const submitToDB = async () => {
    try {
      const d = await fetch(`${url}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: user.email,
          image: dbImage,
          name: name,
          desc: desc,
          price: price
        })
      })
      const dJson = await d.json()
      if (dJson.message === "success") {
        setDBImage("")
        setDesc("")
        setImg("")
        setName("")
        setPrice("")
        props.navigation.navigate("tabs")
        Alert.alert("Item successfully Posted!")
      } else {
        setError("something went wrong")
        setTimeout(() => {
          setError("")
          clearTimeout()
        }, 4000)
      }
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>Post an Item</Text>
      </View>
      {
        img !== ""
          ? <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.keyboard}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
                <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
                <View>
                  <Ionicons
                    name="ios-trash"
                    size={32}
                    style={styles.trash}
                    onPress={() => setImg("")}
                  />
                </View>
                <Image
                  source={{ uri: img.uri }}
                  style={styles.images}
                />
                <View>
                  <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="0"
                    style={styles.input}
                    onChangeText={text => setPrice(text)}
                    value={price}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={8}
                    onChangeText={(text) => setDesc(text)}
                    value={desc}
                    style={{ height: 140, ...styles.input }}
                  />
                  {console.log(desc)}
                </View>
                <View>
                  <Button
                    title="Submit"
                    onPress={() => submitToDB()}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          : <View>
            <Button
              title="Take Photo"
              color="#f194ff"
              onPress={() => pickFromCamera()}
              style={styles.button}
              disabled={
                user !== ""
                  ? false
                  : true
              }
            />

            <Button
              title="Select Photo"
              color="black"
              onPress={() => pickFromGallery()}
              style={styles.button}
              disabled={
                user !== ""
                  ? false
                  : true
              }
            />
            <Text style={{ color: "red", textAlign: "center" }}>
              {
                user !== ""
                  ? ""
                  : "Must be signed in to use the Camera"
              }
            </Text>
          </View>
      }

    </View>
  )
}

export default OpenCamera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    width: WIDTH - 30,
  },
  images: {
    width: WIDTH - 100,
    height: HEIGHT - 520,
    borderColor: 'black',
    zIndex: 1,
  },
  trash: {
    position: "absolute",
    top: 10,
    right: 137,
    color: "red",
    transform: [{ rotate: "0deg" }]
  },
  heading: {
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
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
    shadowOpacity: 0.8,
    padding: 10,
    marginTop: 10,
    fontSize: 15,
  },
  keyboard: {
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: 0
  }
})
