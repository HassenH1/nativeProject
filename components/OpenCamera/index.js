import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-elements';


const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const OpenCamera = (props) => {
  const [img, setImg] = useState("")

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
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test/${data.uri.split(".")[1]}`,
        }
        handleUpload(newFile)
      }
    } else {
      Alert.alert("You need to give permission to work")
    }
  }

  const handleUpload = (image) => {
    console.log(image, "<--------------------image")
    setImg(image)
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
      {
        img !== ""
          ? <View>
            <Text>Hello world</Text>
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
  }
})
