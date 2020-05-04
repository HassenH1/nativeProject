import React from 'react'
import { StyleSheet, Text, View, FooterTab, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements';


const WIDTH = Dimensions.get("window").width
const Showpage = ({ route }) => {
  const { params } = route
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text>{params.name}</Text>
          <Text>{params.price}</Text>
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
    flex: .05,
    color: "blue"
  }
})
