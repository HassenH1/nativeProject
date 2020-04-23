import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert, Dimensions, Image, Modal } from 'react-native'
import Signup from '../Signup'
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import Setting from '../Setting'


const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const Profile = (props) => {

  const [deleteModal, setDeleteModal] = useState(false)

  const { user } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  return (
    <View style={styles.container}>
      {
        user === ""
          ? <View style={styles.container}>
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

          : <View style={{ width: WIDTH, height: HEIGHT }}>
            <Image
              style={{ height: "50%" }}
              source={{ uri: "https://images.unsplash.com/photo-1548179504-07be08162fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" }}
            />

            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  width: 140, height: 140, borderRadius: 140 / 2, marginTop: -60, borderWidth: 4, borderColor: "#efefef"
                }}
                source={{ uri: `https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80` }}
              />
            </View>

            <View style={{ alignItems: "center", margin: 15 }}>
              <Text style={{ fontSize: 30 }}>{user.username}</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", marginLeft: 40, marginRight: 40 }}>
              <View>
                <Button
                  title="Settings"
                  onPress={() => props.navigation.navigate("Setting")}
                />
              </View>

              <View>
                <Button
                  title="Delete"
                  onPress={() => setDeleteModal(true)}
                />
              </View>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={deleteModal}
              onRequestClose={() => setDeleteModal(false)}
            >
              <View style={styles.modalView}>
                <View style={styles.modalButtonView}>
                  <Text>Are you sure?</Text>
                  <Button
                    title="Yes"
                    onPress={() => console.log("Delete the Account")}
                  />
                  <Button
                    title="No"
                    onPress={() => setDeleteModal(false)}
                  />
                </View>
              </View>
            </Modal>

          </View>
      }
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
    marginTop: 10,
    width: WIDTH - 30
  },
  modalView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    backgroundColor: "white",
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})
