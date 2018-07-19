import React, { Component } from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

class PlanScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Plan",
    tabBarIcon: ({ focused }) => (
      <Icon
        name={focused ? "md-contract" : "md-contract"}
        size={30}
        color="white"
      />
    )
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default PlanScreen;
