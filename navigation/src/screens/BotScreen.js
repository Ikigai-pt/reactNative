import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
class BotScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Bot",
    tabBarIcon: ({ focused }) => (
      <Icon
        name={focused ? "md-chartboxes" : "md-chatboxes"}
        size={30}
        color="white"
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Chat Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9897d0",
    flex: 1
  }
});

export default BotScreen;
