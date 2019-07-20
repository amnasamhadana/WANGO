import React from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground
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
export default class HealthReport extends React.Component {
  state = {
    Blood: "",
    Average: "",
    temperature: "",
    texts: [],
    text: ""
  };
  addblood = () => {
    const healthData = firebase.database().ref("health-data");
    healthData.push({
      Blood: this.state.text,
      Average: this.state.Average,
      temperature: this.state.temperature
    });
    alert("Your health report was added successfully!");
    this.readPosts();
  };

  readPosts = () => {
    firebase
      .database()
      .ref("health-data")
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
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={this.back}>
          <Image
            style={{ width: 40, height: 40, marginTop: 30 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Image
          style={{
            width: 500,
            height: 300,
            paddingTop: 180,
            marginTop: 50
          }}
          source={require("../assets/Logo1.png")}
        />
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({ Blood: text })}
          placeholderTextColor={"white"}
          placeholder={" Enter Blood Pressure"}
          style={styles.input}
        />
        <TextInput
          value={this.state.Average}
          onChangeText={text => this.setState({ Average: text })}
          placeholderTextColor={"white"}
          placeholder={"Enter Sugar's Average"}
          style={styles.input}
        />
        <TextInput
          value={this.state.temperature}
          onChangeText={text => this.setState({ temperate: text })}
          placeholderTextColor={"white"}
          placeholder={"Enter the temperature"}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            this.addblood();
          }}
        >
          <Text style={{ color: "#00cec9", fontSize: 25, borderWidth: 4 }}>
            Send
          </Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => item}
          data={this.state.texts}
          renderItem={({ item, index }) => (
            <View style={styles.container}>
              <Text style={styles.text1}>Blood : {item.Blood} </Text>
              <Text style={styles.text1}>Average : {item.Average} </Text>
              <Text style={styles.text1}>temperature : {item.temperature}</Text>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    margin: 4,

    padding: 8,
    borderColor: "white",
    borderWidth: 1,

    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
