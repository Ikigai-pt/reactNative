import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: ({ focused }) => (
      <Icon name={focused ? "md-list" : "md-list"} size={30} color="white" />
    )
  };

  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <Button
          title="Chat screen"
          onPress={() => this.props.navigation.navigate("Chat")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});

export default HomeScreen;
