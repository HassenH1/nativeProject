import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


const OpenCamera = () => {
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

  const handleUpload = (image) => {
    console.log(image, "<--------------------image")
  }

  useEffect(() => {
    pickFromCamera()
    console.log("Back here again!!")
  }, [])

  return (
    <View>
    </View>
  )
}

export default OpenCamera

const styles = StyleSheet.create({})
