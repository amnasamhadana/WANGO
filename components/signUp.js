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

export default class signUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    age: ""
  };

  back = () => {
    this.props.navigation.navigate("login");
  };

  upload = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("account is created successfully, please log in");
        this.props.navigation.navigate("login");
      });
    const users = firebase.database().ref("users");
    users
      .push({
        email: this.state.email,
        password: this.state.password
      })
      .catch(error => {
        if (error.code == "auth/email_already_in_use") {
          alert("Email address already in use");
        } else if (error.code == "auth/weak-password") {
          alert("The password is weak.");
        } else {
          alert(error.message);
        }
      });
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  onSignup = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("Successfully logged in!");
        this.props.navigation.navigate("Home");
      })
      .cathch(error => {
        if (error.code == "auth/email-already-in-use") {
          alert("Email adress is already in use");
        } else if (error.code == "auth/weak-password") {
          alret("The password is too weak");
        } else {
          alert(error.message);
        }
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.back}>
          <View style={{ alignItems: "center", marginRight: 350 }}>
            <Image
              style={{ width: 40, height: 40, marginTop: 10 }}
              source={require("../assets/back.png")}
            />
          </View>
        </TouchableOpacity>
        <Image
          style={{ width: 400, height: 400, marginTop: -15 }}
          source={require("../assets/Logo1.png")}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("email", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("Age", val)}
        />
        <TouchableOpacity onPress={this.upload}>
          <Text
            style={{
              color: "#00cec9",
              fontSize: 25,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 345,
    height: 50,
    backgroundColor: "black",
    margin: 5,

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
  login: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
