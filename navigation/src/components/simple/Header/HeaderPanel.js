import React, { Component } from "react";
import { View, Text } from "react-native";

const renderDatePanel = ({ date }) => (
  <View>
    <Text> {date} </Text>
  </View>
);

const renderSummaryPanel = () => (
  <View>
    <Text> </Text>
  </View>
);

export default class componentName extends Component {
  render() {
    return (
      <View>
        <Text> Header </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  datePanel: {},
  summaryPanel: {}
});

// Left Bar
// Right Bar
// On Right bar click expand
// On Left Bar click open calendar
