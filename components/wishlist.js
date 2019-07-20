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
  FlatList
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
export default class wishlist extends React.Component {
  state = {
    wishes: [],
    wish: ""
  };

  back = () => {
    this.props.navigation.navigate("Home");
  };

  addwish = () => {
    const wish = firebase.database().ref("wish");
    wish.push({
      wish: this.state.wish
    });
    alert("Your wish was added successfully!");
    this.readPosts();
  };

  readPosts = () => {
    firebase
      .database()
      .ref("wish")
      .on("value", wish => {
        const data = wish.val();
        var wishes = [];
        for (var key in data) {
          const wish = data[key].wish;
          wishes.push(wish);
        }
        console.log(wishes, "wishes");
        this.setState({ wishes: wishes });
      });
  };
  componentWillMount() {
    this.readPosts();
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={this.back}>
          <View style={{ alignItems: "center", marginRight: 350 }}>
            <Image
              style={{ width: 40, height: 40, marginTop: 10 }}
              source={require("../assets/back.png")}
            />
          </View>
        </TouchableOpacity>
        <Image
          style={{ width: 500, height: 500 }}
          source={require("../assets/logo.png")}
        />

        <TextInput
          value={this.state.wish}
          onChangeText={wish => this.setState({ wish: text })}
          placeholder={"Add Your Wish"}
          style={styles.input}
        />

        <View style={styles.wishes}>
          <TouchableOpacity onPress={this.addwish}>
            <Text style={{ color: "#00cec9", fontSize: 25 }}>Add you wish</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.state.wishes}
          renderItem={({ item, index }) => (
            <View style={styles.container}>
              <Text style={{ color: "#00cec9", fontSize: 25 }}>{item}</Text>
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
    backgroundColor: "black",
    margin: 10,

    padding: 8,
    borderColor: "white",
    borderWidth: 1,

    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  wishes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
