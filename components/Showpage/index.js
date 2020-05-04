import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements';


const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

const Showpage = ({ route }) => {
  const { params } = route
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: WIDTH, height: HEIGHT }}>
          <Image
            style={{ height: "50%" }}
            source={{ uri: params.image }}
          />

          <View style={{ alignItems: "left", margin: 15, justifyContent: "space-evenly" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{params.name}</Text>
            <Text style={{ fontSize: 30 }}>${params.price}</Text>
          </View>

          <View
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 3,
            }}
          />

          <View>
            <Text style={{ fontSize: 30 }}>{params.desc}</Text>
          </View>

        </View>

      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Message"
          onPress={() => console.log("hitting")}
          style={{ width: WIDTH, height: 55 }}
        />
      </View>
    </View>
  )
}

export default Showpage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  footer: {
    width: WIDTH,
    justifyContent: "center",
    color: "blue"
  }
})
