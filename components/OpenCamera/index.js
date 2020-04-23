import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Alert, Image } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { TextInput } from 'react-native-gesture-handler';


const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const OpenCamera = (props) => {
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

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
        handleUpload(newFile)
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
      console.log(data, "<-----------------------------the data is here?")
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test/${data.uri.split(".")[1]}`,
        }
        console.log(newFile, "<----------------------------new file is here")
        handleUpload(newFile)
      }
    } else {
      Alert.alert("You need to give permission to work")
    }
  }

  const handleUpload = (image) => {
    console.log(image, "<--------------------image")
    setImg(image.uri)
  }

  // useEffect(() => {
  //   // pickFromCamera()
  //   const unsubscribe = props.navigation.addListener('tabPress', (e) => {
  //     pickFromCamera()
  //     e.preventDefault()
  //   })
  //   return unsubscribe;
  //   console.log("Back here again yet?!")
  // }, [props.navigation])

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>Post an Item</Text>
      </View>
      {
        img !== ""
          ? <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
            <View>
              <Ionicons
                name="ios-trash"
                size={40}
                style={styles.trash}
                onPress={() => setImg("")}
              />
            </View>
            <Image
              source={{ uri: img }}
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
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setDesc(text)}
                value={desc}
                style={styles.input}
              />
            </View>
          </View>
          : <View>
            <Button
              title="Take Photo"
              color="#f194ff"
              onPress={() => pickFromCamera()}
              style={styles.button}
            />

            <Button
              title="Select Photo"
              color="black"
              onPress={() => pickFromGallery()}
              style={styles.button}
            />
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
    // position: "absolute"
  },
  trash: {
    position: "absolute",
    bottom: -310,
    right: -18,
    color: "red",
    transform: [{ rotate: "30deg" }]
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
})
