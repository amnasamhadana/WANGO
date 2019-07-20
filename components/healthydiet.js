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
  Picker
} from "react-native";

export default class healthydiet extends React.Component {
  state = {
    breakfastTime: "",
    breakfastFood: "",
    lunchTime: "",
    lunchFood: "",
    DinnerTime: "",
    DinnerFood: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    return (
      //<ScrollView cotentContainerStyle ={styles.container}>

      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{ width: 500, height: 500 }}
          source={require("../assets/logo.png")}
        />
        <Text>Hello ! We have a special diet for you to keep you healthy</Text>
        <Text>
          You can always make changes anytime by changing the text inside the
          boxes
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Breakfast Time: 7:00 am - 9:00 am"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("breakfastTime", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Breakfast: An apple/a cup of milk"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("breakfastFood", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Lunch time: 1:00pm - 3:00pm"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("lunchTime", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Lunch: Rice and chicken"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("lunchFood", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Dinner time: 7:00 pm - 9:00pm"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("dinnerTime", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Dinner: Fruits"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("dinnerFood", val)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 20,
    margin: 20
  },
  input: {
    width: 345,
    height: 50,
    backgroundColor: "white",
    margin: 8,

    padding: 8,
    borderColor: "white",
    borderWidth: 1,

    color: "black",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    backgroundColor: "lightblue"
  }
});
