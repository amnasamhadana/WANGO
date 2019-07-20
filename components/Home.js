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

export default class Home extends React.Component {
  back = () => {
    this.props.navigation.navigate("login");
  };
  render() {
    return (
      //<ScrollView cotentContainerStyle ={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          marginRight: 350,
          back
        }}
      >
        <TouchableOpacity onPress={this.back}>
          <Image
            style={{ width: 40, height: 40, marginTop: 30 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img1: {
    height: 200,
    width: 200
  }
});
