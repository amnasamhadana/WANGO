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
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB08iX21opRHK5kUatjHJ-YE0OmZYLRaBE",
  authDomain: "wango2019.firebaseapp.com",
  databaseURL: "https://wango2019.firebaseio.com",
  projectId: "wango2019",
  storageBucket: "wango2019.appspot.com",
  messagingSenderId: "523034162149",
  appId: "1:523034162149:web:3841ab1fabc4f988"
};
if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

export default class healthydiet extends React.Component {
  state = {
    breakfastTime: "",
    breakfastFood: "",
    lunchTime: "",
    lunchFood: "",
    dinnerTime: "",
    dinnerFood: "",
    texts: [],
    text: ""
  };
  addfood = () => {
    console.log("top");
    const healthydiet = firebase.database().ref("healthydiet");
    healthydiet.push({
      breakfastTime: this.state.breakfastTime,
      breakfastFood: this.state.breakfastFood,
      lunchTime: this.state.lunchTime,
      lunchFood: this.state.lunchFood,
      dinnerTime: this.state.dinnerTime,
      dinnerFood: this.state.dinnerFood
    });
    console.log("bottom");

    alert("Your health diet was added successfully!");

    this.readPosts();
  };
  readPosts = () => {
    firebase
      .database()
      .ref("healthydiet")
      .on("value", text => {
        const data = text.val();
        var texts = [];
        console.log(data, "data");
        for (var id in data) {
          var obj = data[id];
          texts.push(obj);
        }
        console.log(texts, "texts");
        this.setState({ texts: texts });
      });
  };
  componentWillMount() {
    this.readPosts();
  }
  back = () => {
    this.props.navigation.navigate("login");
  };

  render() {
    return (
      //<ScrollView cotentContainerStyle ={styles.container}>

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={this.back}>
          <Image
            style={{ width: 40, height: 40, marginTop: 30 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Image
          style={{ width: 500, height: 500 }}
          source={require("../assets/Logo1.png")}
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
          onChangeText={text => this.setState({ breakfastTime: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Breakfast: An apple/a cup of milk"
          placeholderTextColor="black"
          onChangeText={text => this.setState({ breakfastFood: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Lunch time: 1:00pm - 3:00pm"
          placeholderTextColor="black"
          onChangeText={text => this.setState({ lunchTime: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Lunch: Rice and chicken"
          placeholderTextColor="black"
          onChangeText={text => this.setState({ lunchFood: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Dinner time: 7:00 pm - 9:00pm"
          placeholderTextColor="black"
          onChangeText={text => this.setState({ dinnerTime: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Dinner: Fruits"
          placeholderTextColor="black"
          onChangeText={text => this.setState({ dinnerFood: text })}
        />

        <TouchableOpacity
          onPress={() => {
            this.addfood();
          }}
        >
          <Text
            style={{
              color: "#00cec9",
              fontSize: 25,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => item}
          data={this.state.texts}
          renderItem={({ item, index }) => (
            <View style={styles.container}>
              <Text style={styles.text1}>
                breakfast Food : {item.breakfastFood}
              </Text>
              <Text style={styles.text1}>
                breakfast Time : {item.breakfastTime}
              </Text>
              <Text style={styles.text1}>Lunch Food : {item.lunchFood}</Text>
              <Text style={styles.text1}>Lunch Time : {item.lunchTime}</Text>
              <Text style={styles.text1}>Dinner Food : {item.dinnerFood}</Text>
              <Text style={styles.text1}>Dinner Time : {item.dinnerFood}</Text>
            </View>
          )}
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
  },
  text1: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center"
  }
});
