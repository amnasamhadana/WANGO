import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Button,
  Picker,
  ImageBackground
} from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      //<ScrollView cotentContainerStyle ={styles.container}>

      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text>Inside</Text>

          <FlatList
            style={styles.list}
            numColumns={2}
            data={people}
            keyExtractor={(item, index) => item.caption}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ flex: 0.5 }}
                onPress={() => this.handlePress(item)}
              >
                <Image style={styles.img1} source={item.image} />
              </TouchableOpacity>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img1: {
    height: 100,
    width: 100,
    margin: 10
  },
  list: {
    backgroundColor: "black",
    marginLeft: "10%",
    height: "80%",
    padding: "10%",
    marginTop: "10%",
    marginBottom: "10%",
    borderRadius: 14,
    width: "80%"
  }
});

const people = [
  {
    name: "logo",
    caption: " logo",
    image: require("../assets/time.png")
  },
  {
    name: "chat",
    caption: "chat",
    image: require("../assets/wish.png")
  },
  {
    name: "time",
    caption: "time",
    image: require("../assets/food.png")
  },
  {
    name: "WishList",
    caption: " WishList",
    image: require("../assets/doctor.png")
  },
  {
    name: "food",
    caption: " food",
    image: require("../assets/health.png")
  }
];
