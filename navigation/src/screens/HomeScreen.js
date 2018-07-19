import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { makeStyleFromTheme } from "../util/theme_utils";
import { SummaryPanel, NavBar } from "../components/compound/index";

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: ({ focused }) => (
      <Icon name={focused ? "md-list" : "md-list"} size={30} color="white" />
    )
  };

  render() {
    const styles = createStyleSheet("darknight");
    return (
      <View style={styles.container}>
        <NavBar />
        <SummaryPanel />
        <View style={styles.items}>
          <Text> Items </Text>
        </View>
        <Button
          title="Chat screen"
          onPress={() => this.props.navigation.navigate("Chat")}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:
//   },
// });
const createStyleSheet = makeStyleFromTheme(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.color.primary.base
    },
    items: {
      flex: 7
    }
  };
});

export default HomeScreen;
